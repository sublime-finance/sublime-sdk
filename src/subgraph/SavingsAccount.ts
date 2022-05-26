import { PoolCalls } from './Pools';
import { Signer } from '@ethersproject/abstract-signer';
import { TokenManager } from '../tokenManager';
import { SublimeConfig } from '../types/sublimeConfig';

import {
  SavingAccountUserDetailDisplay,
  SavingsAccountStrategyBalanceDisplay,
  Allowances,
  Asset,
  Strategy,
  Balance,
  SavingsAccountBalanceDisplay,
} from '../types/Types';
import { getAllowances, getBalances } from '../queries';
import BigNumber from 'bignumber.js';

import { IYield__factory, ICToken, ICToken__factory } from '../wrappers';

interface InternalBalancePerTokenStrategy {
  token: Asset;
  strategy: Strategy;
  shares: Balance;
  amount: Balance;
}

export class SavingsAccountCalls extends PoolCalls {
  constructor(url: string, signer: Signer, tokenManager: TokenManager, config: SublimeConfig) {
    super(url, signer, tokenManager, config);
  }

  async getAllowances(address?: string): Promise<Allowances[]> {
    if (!address) {
      address = await this.signer.getAddress();
    }
    const result = await getAllowances(this.subgraphUrl, await this.signer.getAddress(), this.sublimeAddresses.creditLineContractAddress);
    return this.transformToAllowances(result);
  }

  private async transformToAllowances(data: any[]): Promise<Allowances[]> {
    const allTokens = data.map((a) => a.token).filter((value, index, array) => array.indexOf(value) === index);
    for (let index = 0; index < allTokens.length; index++) {
      const element = allTokens[index];
      await this.tokenManager.updateAll(element);
    }

    const prices = {};
    for (let index = 0; index < allTokens.length; index++) {
      prices[allTokens[index]] = await this.tokenManager.getPricePerAsset(allTokens[index]);
    }

    return data.map((a) => {
      return {
        amount: { value: a.amount, decimals: this.tokenManager.getTokenDecimals(a.token) },
        from: a.from,
        to: a.to,
        token: {
          address: a.token,
          name: this.tokenManager.getTokenName(a.token),
          logo: this.tokenManager.getLogo(a.token),
          pricePerAssetInUSD: prices[a.token],
        },
      };
    });
  }

  /**
   *
   * @param address: address of the user to query
   * @description Returns savings account overview for a user address
   */
  async getSavingsAccountOverview(address: string): Promise<SavingAccountUserDetailDisplay> {
    const balances = await getBalances(this.subgraphUrl, address);
    const savingsAccountUserDetails = await this.newTransformToSavingsAccountUserDetails(address, balances);
    return savingsAccountUserDetails;
  }

  private async newTransformToSavingsAccountUserDetails(address: string, data: any[]): Promise<SavingAccountUserDetailDisplay> {
    const allowances = await this.getAllowances(address);
    let savingsAccountUserDetails: SavingAccountUserDetailDisplay = {
      user: address,
      totalBalance: { value: '0', decimals: 0 },
      balances: [],
    };

    const result = await this.transformToInternalBalancePerTokenStrategy(data);
    const stackedBalancesByToken = await this.stackInternalBalanceByToken(result);
    savingsAccountUserDetails.balances.push(...stackedBalancesByToken);
    let cumulativeBalanceUSD = new BigNumber(0);
    for (let index = 0; index < savingsAccountUserDetails.balances.length; index++) {
      cumulativeBalanceUSD = cumulativeBalanceUSD.plus(new BigNumber(savingsAccountUserDetails.balances[index].balanceUSD.value.toString()));
    }
    savingsAccountUserDetails.totalBalance = { value: cumulativeBalanceUSD.toString(), decimals: 0};
    return savingsAccountUserDetails;
  }

  private async stackInternalBalanceByToken(internalBalances: InternalBalancePerTokenStrategy[]): Promise<SavingsAccountBalanceDisplay[]> {
    const stackedBalanceByToken: SavingsAccountBalanceDisplay[] = [];
    const uniqueTokens = internalBalances.map((a) => a.token.address).filter((value, index, self) => self.indexOf(value) === index);

    const prices: Record<string, BigNumber> = {};

    for (let index = 0; index < uniqueTokens.length; index++) {
      const element = uniqueTokens[index];
      await this.tokenManager.updateAll(element);
      prices[element] = await this.tokenManager.getPricePerAsset(element);
    }

    const uniqueStrategies = internalBalances.map((a) => a.strategy.address).filter((value, index, self) => self.indexOf(value) === index);
    const aprs: Record<string, BigNumber> = {};

    for (let index = 0; index < uniqueStrategies.length; index++) {
      const element = uniqueStrategies[index];
      aprs[element] = await this.getAPR(element);
    }

    for (let index = 0; index < uniqueTokens.length; index++) {
      const element = uniqueTokens[index];
      const requiredElements = internalBalances.filter((a) => a.token.address === element);
      if (requiredElements.length > 0) {
        const totalBalance = requiredElements.reduce((total, current) => total.plus(current.amount.value.toString()), new BigNumber(0));
        const totalBalanceUSD = requiredElements.reduce(
          (total, current) =>
            total.plus(
              new BigNumber(current.amount.value.toString())
                .multipliedBy(prices[current.token.address])
                .div(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(current.token.address)))
            ),
          new BigNumber(0)
        );

        const totalAprWeight = requiredElements.reduce(
          (total, current) => total.plus(new BigNumber(current.amount.value.toString()).multipliedBy(aprs[current.strategy.address])),
          new BigNumber(0)
        );

        stackedBalanceByToken.push({
          token: requiredElements[0].token,
          balance: { value: totalBalance.toString(), decimals: this.tokenManager.getTokenDecimals(requiredElements[0].token.address) },
          amountAllocatedToCreditLines: '',
          balanceUSD: { value: totalBalanceUSD.toString(), decimals: 0 },
          strategyBalance: [...this.transformToSavingsAccountStrategyBalanceDisplay(requiredElements, aprs, prices)],
          APR: totalAprWeight.dividedBy(totalBalance).toString(),
        });
      }
    }

    return stackedBalanceByToken;
  }

  private transformToSavingsAccountStrategyBalanceDisplay(
    internalBalances: InternalBalancePerTokenStrategy[],
    aprs: Record<string, BigNumber>,
    prices: Record<string, BigNumber>
  ): SavingsAccountStrategyBalanceDisplay[] {
    return internalBalances.map((a) => {
      return {
        strategy: a.strategy,
        balance: a.amount,
        balanceUSD: {
          value: new BigNumber(a.amount.value.toString())
            .multipliedBy(prices[a.token.address])
            .dividedBy(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(a.token.address)))
            .toString(),
          decimals: 0,
        },
        APR: aprs[a.strategy.address].toString(),
      };
    });
  }

  private async transformToInternalBalancePerTokenStrategy(data: any[]): Promise<InternalBalancePerTokenStrategy[]> {
    const allTokens = data.map((a) => a.token).filter((value, index, self) => self.indexOf(value) === index);
    for (let index = 0; index < allTokens.length; index++) {
      const element = allTokens[index];
      await this.tokenManager.updateAll(element);
    }

    const prices = {};

    for (let index = 0; index < allTokens.length; index++) {
      const element = allTokens[index];
      await this.tokenManager.updateAll(element);
      prices[element] = await this.tokenManager.getPricePerAsset(element);
    }

    const all = data.map(async (a) => {
      return {
        token: {
          address: a.token,
          name: this.tokenManager.getTokenName(a.token),
          logo: this.tokenManager.getLogo(a.token),
          pricePerAssetInUSD: prices[a.token],
        },
        strategy: {
          address: a.strategy.address,
          type: this.yieldApi.getStrategy(a.strategy.address),
          displayName: this.yieldApi.getStrategyDisplayName(a.strategy.address),
          logo: this.yieldApi.getStrategyLogo(a.strategy.address),
        },
        shares: { value: a.shares, decimals: 0 },
        amount: {
          value: await (await this.getTokensForShares(a.strategy.address, new BigNumber(a.shares), a.token)).toString(),
          decimals: this.tokenManager.getTokenDecimals(a.token),
        },
      };
    });
    return Promise.all(all);
  }

  private async getTokensForShares(yieldContract: string, shares: BigNumber, asset: string): Promise<BigNumber> {
    let amount = new BigNumber(0);

    try {
      const result = (
        await IYield__factory.connect(yieldContract, this.signer).callStatic.getTokensForShares(shares.toFixed(0), asset)
      ).toString();
      amount = new BigNumber(result);
    } catch (ex) {}
    return amount;
  }

  /**
   * @param strategy
   * @@description calulcates the APR for a given strategy
   */
  private async getAPR(strategy: string): Promise<BigNumber> {
    const BLOCKS_PER_DAY = 6570; // 13.15 sec block
    const DAYS_PER_YEAR = 365;
    if (strategy == this.sublimeAddresses.compoundStrategyContractAddress) {
      // Ref - "Calculating the APY Using Rate Per Block" section in https://compound.finance/docs
      const cTokenContract: ICToken = ICToken__factory.connect(strategy, this.signer);
      const supplyRatePerBlock = new BigNumber((await cTokenContract.callStatic.supplyRatePerBlock()).toString());
      const perDaySupplyRate = supplyRatePerBlock.div(new BigNumber(10).pow(18)).multipliedBy(BLOCKS_PER_DAY).plus(1);
      const perYearSupplyRate = perDaySupplyRate.pow(DAYS_PER_YEAR).minus(1).multipliedBy(100);
      return perYearSupplyRate;
    } else if (strategy == this.sublimeAddresses.noStrategyAddress) {
      return new BigNumber(0);
    }
    return new BigNumber(0);
  }
}
