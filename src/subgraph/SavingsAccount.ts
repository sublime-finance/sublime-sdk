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
  StrategyType,
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
    // const allowances = await this.getAllowances(address);
    // console.log({allowances});
    const savingsAccountUserDetails: SavingAccountUserDetailDisplay = {
      user: address.toLowerCase(),
      totalBalance: { value: '0', decimals: 0 },
      balances: [],
    };

    const result = await this.transformToInternalBalancePerTokenStrategy(data);
    const stackedBalancesByToken = await this.stackInternalBalanceByToken(result);
    savingsAccountUserDetails.balances.push(...stackedBalancesByToken);
    const totalBalance = stackedBalancesByToken.reduce(
      (total, current) => total.plus(current.balanceUSD.value.toString()),
      new BigNumber(0)
    );
    savingsAccountUserDetails.totalBalance = { value: totalBalance.toString(), decimals: 0 };

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
      aprs[element] = await this.getAPR(this.yieldApi.getStrategy(element));
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
          amountAllocatedToCreditLines: { value: '0', decimals: this.tokenManager.getTokenDecimals(requiredElements[0].token.address) },
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
          value: await (
            await this.getTokensForShares(this.yieldApi.getStrategy(a.strategy.address), a.token, new BigNumber(a.shares))
          ).toString(),
          decimals: this.tokenManager.getTokenDecimals(a.token),
        },
      };
    });
    return Promise.all(all);
  }

  /**
   * @param strategy
   * @@description calulcates the APR for a given strategy
   */
  private async getAPR(strategy: StrategyType): Promise<BigNumber> {
    return new BigNumber(10).pow(17).multipliedBy(3).div(2);
  }
}
