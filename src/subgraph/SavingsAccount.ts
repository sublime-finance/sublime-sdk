import { PoolCalls } from './Pools';
import { Signer } from '@ethersproject/abstract-signer';
import { TokenManager } from '../tokenManager';
import { SublimeConfig } from '../types/sublimeConfig';

import { SavingsAccountUserDetails, SavingAccountUserDetailDisplay, SavingsAccountStrategyBalanceDisplay } from '../types/Types';
import { getAllowances, getBalances } from '../queries';
import BigNumber from 'bignumber.js';

import { IYield, IYield__factory, ICToken, ICToken__factory } from '../wrappers';
import { zeroAddress } from '../config/constants';

export class SavingsAccountCalls extends PoolCalls {
  constructor(url: string, signer: Signer, tokenManager: TokenManager, config: SublimeConfig) {
    super(url, signer, tokenManager, config);
  }

  async getAllowances(): Promise<any[]> {
    const result = await getAllowances(this.subgraphUrl, await this.signer.getAddress(), this.sublimeAddresses.creditLineContractAddress);
    return result;
  }

  /**
   *
   * @param address: address of the user to query
   * @description Returns savings account overview for a user address
   */
  async getSavingsAccountOverview(address: string): Promise<SavingAccountUserDetailDisplay> {
    const balances = await getBalances(this.subgraphUrl, address);
    const savingsAccountUserDetails = await this.transformToSavingsAccountUserDetails(address, balances);

    return savingsAccountUserDetails;
  }

  /**
   * @param address
   * @param data
   * @description Tranforms the data received from the subgraph to type
   */
  private async transformToSavingsAccountUserDetails(address: string, data: any[]): Promise<SavingAccountUserDetailDisplay> {
    const allowances = await getAllowances(this.subgraphUrl, address, this.sublimeAddresses.creditLineContractAddress);
    const savingsAccountUserDetails: SavingsAccountUserDetails = {
      user: address,
      totalBalance: new BigNumber(0),
      balances: [],
    };

    const tokenIndex = {};
    const strategyIndex = {};

    const tokenPrice = {};

    let yieldContract: IYield = IYield__factory.connect(zeroAddress, this.signer);

    for (let i = 0; i < data.length; i++) {
      const strategy = data[i].strategy.address;
      const token = data[i].token;
      const shares = data[i].shares;
      if (!strategyIndex[token]) {
        strategyIndex[token] = {};
      }

      yieldContract = await yieldContract.attach(strategy);
      await this.tokenManager.updateTokenDecimals(token);
      const tokenDecimals = new BigNumber(10).pow(this.tokenManager.getTokenDecimals(token));
      const rawAmountInTokens = (await yieldContract.callStatic.getTokensForShares(shares, token)).toString();
      const amountInTokens = new BigNumber(rawAmountInTokens).div(tokenDecimals);
      let allocatedAmountToCreditLines = new BigNumber(0);

      const filteredAllowancesByToken = allowances.filter((a) => a.token == token);
      if (filteredAllowancesByToken.length > 0) {
        allocatedAmountToCreditLines = new BigNumber(filteredAllowancesByToken[0].amount);
        allocatedAmountToCreditLines = allocatedAmountToCreditLines.div(tokenDecimals);
      }

      let price = tokenPrice[token];
      if (!price) {
        price = await this.tokenManager.getPricePerAsset(token);
        tokenPrice[token] = price;
      }
      const amount = new BigNumber(amountInTokens).multipliedBy(price);

      const apr = await this.getAPR(strategy);

      if (savingsAccountUserDetails.balances[tokenIndex[token]]?.token != token) {
        tokenIndex[token] = savingsAccountUserDetails.balances.length;
        savingsAccountUserDetails.balances.push({
          token,
          balanceUSD: new BigNumber(0),
          balance: new BigNumber(0),
          amountAllocatedToCreditLines: new BigNumber(allocatedAmountToCreditLines),
          strategyBalance: [],
          APR: new BigNumber(0),
        });
      }

      // 2 elemets with same strategy and token can't exist
      if (strategyIndex[token][strategy]) {
        console.log(savingsAccountUserDetails.balances[tokenIndex[token]].strategyBalance[strategyIndex[token][strategy]]);
        throw new Error('2 entities in subgraph for same token and strategy');
      }
      strategyIndex[token][strategy] = savingsAccountUserDetails.balances[tokenIndex[token]].strategyBalance.length;
      savingsAccountUserDetails.balances[tokenIndex[token]].strategyBalance[strategyIndex[token][strategy]] = {
        strategy,
        balanceUSD: new BigNumber(amount),
        balance: new BigNumber(amountInTokens),
        APR: apr,
      };

      savingsAccountUserDetails.balances[tokenIndex[token]].APR = savingsAccountUserDetails.balances[tokenIndex[token]].APR.multipliedBy(
        savingsAccountUserDetails.totalBalance
      )
        .plus(apr.multipliedBy(new BigNumber(amount)))
        .div(savingsAccountUserDetails.totalBalance.plus(amount));
      savingsAccountUserDetails.balances[tokenIndex[token]].balance =
        savingsAccountUserDetails.balances[tokenIndex[token]].balance.plus(amountInTokens);
      savingsAccountUserDetails.balances[tokenIndex[token]].balanceUSD =
        savingsAccountUserDetails.balances[tokenIndex[token]].balanceUSD.plus(amount);
      savingsAccountUserDetails.totalBalance = savingsAccountUserDetails.totalBalance.plus(amount);
    }

    const savingAccountsUserDetailsDisplay = {} as SavingAccountUserDetailDisplay;
    // return savingsAccountUserDetails;

    savingAccountsUserDetailsDisplay.user = savingsAccountUserDetails.user;
    savingAccountsUserDetailsDisplay.totalBalance = { value: savingsAccountUserDetails.totalBalance.toFixed(2), decimals: 0 };
    savingAccountsUserDetailsDisplay.balances = [];
    savingsAccountUserDetails.balances.forEach((a) => {
      const strategyBalance: [SavingsAccountStrategyBalanceDisplay?] = [];
      a.strategyBalance.forEach((b) => {
        strategyBalance.push({
          strategy: { address: b.strategy, type: this.yieldApi.getStrategy(b.strategy) },
          balance: { value: b.balance.toFixed(2), decimals: 0 },
          balanceUSD: { value: b.balanceUSD.toFixed(2), decimals: 0 },
          APR: b.APR.toFixed(2),
        });
      });

      savingAccountsUserDetailsDisplay.balances.push({
        token: a.token,
        balance: { value: a.balance.toFixed(2), decimals: 0 },
        amountAllocatedToCreditLines: a.amountAllocatedToCreditLines.toFixed(2),
        balanceUSD: { value: a.balanceUSD.toFixed(2), decimals: 0 },
        APR: a.APR.toFixed(2),
        strategyBalance,
      });
    });

    return savingAccountsUserDetailsDisplay;
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
