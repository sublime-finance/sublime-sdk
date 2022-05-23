import { Base } from './Base';
import { Signer } from '@ethersproject/abstract-signer';
import { TokenManager } from '../tokenManager';
import { SublimeConfig } from '../types/sublimeConfig';

import {
  getAllCreditLinesFromSubgraph,
  getConfirmedCreditLinesOfBorrower,
  getConfirmedCreditLinesOfLender,
  getPendingCreditlinesRequestedByLender,
  getAllCreditLinesForCount,
  getPendingCreditLinesRequestedByBorrower,
  getPendingCreditLinesRequestedToLender,
  getCreditLine,
  getPendingCreditLinesRequestedToBorrower,
  getCreditLineTimeline,
  getCreditLinesOfLenderWithState_requestByLender,
  getCreditLinesOfLenderWithState,
  getCreditLinesOfLenderWithStateNotIn_requestByLender,
  getCreditLinesOfLenderWithStateNotIn,
  getCreditLinesOfBorrowerWithStateNotIn_requestByLender,
  getCreditLinesOfBorrowerWithState,
  getCreditLinesOfBorrowerWithState_requestByLender,
  getCreditLinesOfBorrowerWithStateNotIn,
} from '../queries';

import { CreditLineDetail, CreditLinesOverview, CreditLineOperation, CreditLineStatus } from '../types/Types';

import { CreditLine } from '../wrappers/CreditLine';
import { CreditLine__factory } from '../wrappers/factories/CreditLine__factory';

import BigNumber from 'bignumber.js';

export class CreditLineCalls extends Base {
  /**
   * @description instance of credit line contract
   */
  private creditLineContract: CreditLine;

  constructor(url: string, signer: Signer, tokenManager: TokenManager, config: SublimeConfig) {
    super(url, signer, tokenManager, config);
    this.creditLineContract = new CreditLine__factory(signer).attach(config.creditLineContractAddress);
  }

  /**
   * @description use to fetch all the credit lines in the system
   * @description don't use in production. It will be a 😰 (only for debugging)
   * @param count: number of credit lines to query
   * @param skip: number to credit lines to skip
   * @returns
   */
  async getAllCreditLines(count: number = 13, skip: number = 0): Promise<CreditLineDetail[]> {
    const result = await getAllCreditLinesFromSubgraph(this.subgraphUrl, count, skip);
    return await this.transformToCreditLine(result);
  }

  /**
   *
   * @param data
   * @description transaform the data recevied from the subgraph to type
   */
  private async transformToCreditLine(data: any[]): Promise<CreditLineDetail[]> {
    const borrowTokens: string[] = data.map((a) => a.collateralAsset);
    const collateralTokens: string[] = data.map((a) => a.borrowAsset);
    const allTokens = [...borrowTokens, ...collateralTokens].filter((value, index, array) => array.indexOf(value) === index);

    for (let index = 0; index < allTokens.length; index++) {
      const element = allTokens[index];
      await this.tokenManager.updateAll(element);
    }

    const creditLineDetails: Promise<CreditLineDetail>[] = data.map(async (a) => {
      const interestAccrued = await this.calculateInterestAccruedForCreditLines(a.id);
      const currentDebt = await this.calculateCurrentDebtForCreditLines(a.id);
      const [collateralRatio, totalCollateralTokens] = await this.calculateCollateralRatioForCreditLines(a.id);

      // if (a.lastPrincipalUpdateTime != 0) {
      //   const timeElapsed: number = Date.now() / 1000 - a.lastPrincipalUpdateTime;
      //   interestAccrued = new BigNumber(a.principal)
      //     .multipliedBy(new BigNumber(a.borrowRate))
      //     .times(timeElapsed)
      //     .div(new BigNumber(10).pow(18))
      //     .div(24 * 60 * 60 * 365);

      //   currentDebt = new BigNumber(a.principal).plus(interestAccrued);

      //   const priceOfCollateral = new BigNumber(totalCollateralTokens.toString())
      //     .dividedBy(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(a.collateralAsset)))
      //     .multipliedBy(await this.tokenManager.getPricePerAsset(a.collateralAsset));

      //   const priceOfDebt = new BigNumber(currentDebt)
      //     .dividedBy(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(a.borrowAsset)))
      //     .multipliedBy(await this.tokenManager.getPricePerAsset(a.borrowAsset));

      //   collateralRatio = priceOfCollateral.multipliedBy(new BigNumber(10).pow(18)).dividedBy(priceOfDebt);
      // }

      return {
        createdAt: a.createdAt,
        currentDebt: { value: currentDebt.toFixed(0), decimals: this.tokenManager.getTokenDecimals(a.borrowAsset) },
        principal: { value: new BigNumber(a.principal).toFixed(0), decimals: this.tokenManager.getTokenDecimals(a.borrowAsset) },
        interestAccrued: { value: interestAccrued.toFixed(0), decimals: this.tokenManager.getTokenDecimals(a.borrowAsset) },
        collateralRatio: { value: collateralRatio.toFixed(0), decimals: 18 },
        creditLimit: { value: new BigNumber(a.borrowLimit).toFixed(0), decimals: this.tokenManager.getTokenDecimals(a.borrowAsset) },
        interestRate: { value: a.borrowRate, decimals: 18 },
        idealCollateralRatio: { value: a.idealCollateralRatio, decimals: 18 },
        borrowAsset: {
          address: a.borrowAsset,
          name: this.tokenManager.getTokenName(a.borrowAsset),
          pricePerAssetInUSD: (await this.tokenManager.getPricePerAsset(a.borrowAsset)).toString(),
          logo: this.tokenManager.getLogo(a.borrowAsset),
        },
        collateralTokens: {
          value: totalCollateralTokens.toString(),
          decimals: await this.tokenManager.getTokenDecimals(a.collateralAsset),
        },
        collateralAsset: {
          address: a.collateralAsset,
          name: this.tokenManager.getTokenName(a.collateralAsset),
          pricePerAssetInUSD: (await this.tokenManager.getPricePerAsset(a.collateralAsset)).toString(),
          logo: this.tokenManager.getLogo(a.collateralAsset),
        },

        autoLiquidate: a.autoLiquidation,
        lender: { address: a.lender, otherData: a.lenderWalconstDetails },
        borrower: { address: a.borrower, otherData: a.borrowerWalconstDetails },
        type: a.status,
        lastPrincipalUpdateTime: a.lastPrincipalUpdateTime,
        id: a.id,
        requestByLender: a.requestByLender,
        strategy: {
          address: a.strategy,
          type: this.yieldApi.getStrategy(a.strategy),
          displayName: this.yieldApi.getStrategyDisplayName(a.strategy),
          logo: this.yieldApi.getStrategyLogo(a.strategy)
        },
      };
    });
    return Promise.all(creditLineDetails);
  }

  private async calculateInterestAccruedForCreditLines(creditLineId: string): Promise<BigNumber> {
    let interest = new BigNumber(0);
    try {
      interest = new BigNumber((await this.creditLineContract.calculateInterestAccrued(creditLineId)).toString());
    } catch (ex) {}
    return interest;
  }

  private async calculateCurrentDebtForCreditLines(creditLineId: string): Promise<BigNumber> {
    let debt = new BigNumber(0);
    try {
      debt = new BigNumber(await (await this.creditLineContract.calculateCurrentDebt(creditLineId)).toString());
    } catch (ex) {}
    return debt;
  }

  private async calculateCollateralRatioForCreditLines(creditLineId: string): Promise<[BigNumber, BigNumber]> {
    let ratio = new BigNumber(0);
    let totalCollateralTokens = new BigNumber(0);
    try {
      const data = await this.creditLineContract.callStatic.calculateCurrentCollateralRatio(creditLineId);
      [ratio, totalCollateralTokens] = data.map((a) => new BigNumber(a.toString()));
    } catch (ex) {}
    return [ratio, totalCollateralTokens];
  }

  /**
   * @param borrower: address of the borrower
   * @param count: number of credit lines to query
   * @param skip: number to credit lines to skip
   * @description Returns the confirmed credit lines of a borrower
   */
  async getConfirmedCreditLinesOfBorrower(borrower: string, count: number = 13, skip: number = 0): Promise<CreditLineDetail[]> {
    const result = await getConfirmedCreditLinesOfBorrower(this.subgraphUrl, borrower, count, skip);
    return await this.transformToCreditLine(result);
  }

  /**
   * @param lender: address of the lender
   * @param count: number of credit lines to query
   * @param skip: number to credit lines to skip
   * @description Returns the confirmed credit lines of a lender
   */
  async getConfirmedCreditLinesOfLender(lender: string, count: number = 13, skip: number = 0): Promise<CreditLineDetail[]> {
    const result = await getConfirmedCreditLinesOfLender(this.subgraphUrl, lender, count, skip);
    return await this.transformToCreditLine(result);
  }

  /**
   * @param lender: address of the lender
   * @param count: number of credit lines to query
   * @param skip: number to credit lines to skip
   * @description Returns the list of credit lines which have been requested by the lender but not accepted by any borrower
   */
  async getPendingCreditlinesRequestedByLender(lender: string, count: number, skip: number): Promise<CreditLineDetail[]> {
    const result = await getPendingCreditlinesRequestedByLender(this.subgraphUrl, lender, count, skip);
    return await this.transformToCreditLine(result);
  }

  /**
   * @param borrower: address of the borrower
   * @param count: number of credit lines to query
   * @param skip: number to credit lines to skip
   * @description Returns the list of credit lines which have been requests by the borrower but not accpeted by any lender
   */
  async getPendingCreditLinesRequestedByBorrower(borrower: string, count: number, skip: number): Promise<CreditLineDetail[]> {
    const result = await getPendingCreditLinesRequestedByBorrower(this.subgraphUrl, borrower, count, skip);
    return await this.transformToCreditLine(result);
  }

  /**
   * @param lender: address of the lender
   * @param count: number of credit lines to query
   * @param skip: number to credit lines to skip
   * @description Returns the list of poending credit lines which have requested to a lender by all other borrowers
   */
  async getPendingCreditLinesRequestedToLender(lender: string, count: number, skip: number): Promise<CreditLineDetail[]> {
    const result = await getPendingCreditLinesRequestedToLender(this.subgraphUrl, lender, count, skip);
    return await this.transformToCreditLine(result);
  }

  /**
   * @param borrower: address of the borrower
   * @param count: number of credit lines to query
   * @param skip: number to credit lines to skip
   * @description Returns the list of poending credit lines which have requested to a borrower by all other lenders
   */
  async getPendingCreditLinesRequestedToBorrower(borrower: string, count: number, skip: number): Promise<CreditLineDetail[]> {
    const result = await getPendingCreditLinesRequestedToBorrower(this.subgraphUrl, borrower, count, skip);
    return await this.transformToCreditLine(result);
  }

  /**
   * @param id
   * @description returns a detailed information of a single credit line.
   */
  async getCreditLine(id: string): Promise<CreditLineDetail> {
    const result = await getCreditLine(this.subgraphUrl, id);
    const data = await this.transformToCreditLine(result);
    if (data.length == 0) {
      return undefined;
    } else {
      return data[0];
    }
  }

  /**
   * @param address: address of the user to query
   * @description Returns the credit lines overview of the user
   */
  async getCreditLinesOverview(address: string): Promise<CreditLinesOverview> {
    const creditLineAsborrower = await this.getConfirmedCreditLinesOfBorrower(address, 10, 0);
    const creditLineAsLender = await this.getConfirmedCreditLinesOfLender(address, 10, 0);

    let creditGranted = new BigNumber(0);
    let interestAccrued = new BigNumber(0);
    let activeCredit = new BigNumber(0);
    let interestRate = new BigNumber(0);

    const borrowedCreditLines = creditLineAsborrower.length;

    for (let i = 0; i < creditLineAsLender.length; i++) {
      const borrowAsset = creditLineAsLender[i].borrowAsset;
      const principal = new BigNumber(creditLineAsLender[i].principal.value.toString());
      const assetPrice = await this.tokenManager.getPricePerAsset(borrowAsset.toString());
      creditGranted = creditGranted.plus(principal.multipliedBy(assetPrice));
    }

    for (let i = 0; i < creditLineAsborrower.length; i++) {
      const interest = creditLineAsborrower[i].interestRate;
      const accruedInterest = creditLineAsborrower[i].interestAccrued.value;

      if (creditLineAsborrower[i].type == 'ACTIVE') {
        const credit = new BigNumber(creditLineAsborrower[i].principal.value.toString());
        const price = await this.tokenManager.getPricePerAsset(creditLineAsLender[i].borrowAsset.toString());
        activeCredit = activeCredit.plus(credit.multipliedBy(price));
      }

      interestAccrued = interestAccrued.plus(accruedInterest.toString());
      interestRate = interestRate.plus(new BigNumber(interest.value.toString()).dividedBy('1000000000000000000'));
    }

    if (borrowedCreditLines > 0) {
      interestRate = interestRate.div(borrowedCreditLines);
    } else {
      interestRate = new BigNumber(0);
    }

    return {
      creditGranted: { value: creditGranted.toFixed(2), decimals: 2 },
      interestAccrued: { value: interestAccrued.toFixed(2), decimals: 2 },
      activeCredit: { value: activeCredit.toFixed(2), decimals: 2 },
      interestRate: interestRate.toFixed(2),
    };
  }

  /**
   * @param creditLine
   * @description returns the operations made on a credit line in time-wise order
   */
  async getCreditLineTimeline(creditLine: string): Promise<CreditLineOperation[]> {
    const result = await getCreditLineTimeline(this.subgraphUrl, creditLine);
    if (result.data.creditLines.length == 0) {
      return [];
    } else {
      const cl = result.data.creditLines[0];
      return await this.transformToCreditLineOperations(cl);
    }
  }

  /**
   *
   * @param cl
   * @description Transforms the data received from the subgraph into type
   */
  private async transformToCreditLineOperations(cl: any): Promise<CreditLineOperation[]> {
    await this.tokenManager.updateAll(cl.borrowAsset);
    await this.tokenManager.updateAll(cl.collateralAsset);

    const operations: CreditLineOperation[] = cl.creditLineTimeline.map((a) => {
      return {
        amount: {
          value: a.amount || '0',
          decimals: this.tokenManager.getTokenDecimals(
            a.creditLineOperation === 'WITHDRAW_COLLATERAL' ? cl.collateralAsset : cl.borrowAsset
          ),
        },
        creditLineOperation: a.creditLineOperation,
        liquidator: a.liquidator,
        strategy: a.strategy ? { type: this.yieldApi.getStrategy(a.strategy), address: a.strategy } : undefined,
        timestamp: a.timestamp,
        id: a.id,
      };
    });
    return operations;
  }

  async countAllCreditLines(): Promise<number> {
    const result = await getAllCreditLinesForCount(this.subgraphUrl);
    return result.length;
  }

  async countAllCreditLinesOfBorrowerWithStateIn(borrower: string, state: CreditLineStatus[]): Promise<number> {
    const result = await getCreditLinesOfBorrowerWithState(
      this.subgraphUrl,
      borrower,
      state.map((a) => a.toString())
    );
    return result.length;
  }

  async countAllCreditLinesOfBorrowerWithStateIn_requestByLender(
    borrower: string,
    requestByLender: boolean,
    state: CreditLineStatus[]
  ): Promise<number> {
    const result = await getCreditLinesOfBorrowerWithState_requestByLender(
      this.subgraphUrl,
      borrower,
      requestByLender,
      state.map((a) => a.toString())
    );
    return result.length;
  }

  async countAllCreditLinesOfBorrowerWithStateNotIn(borrower: string, state: CreditLineStatus[]): Promise<number> {
    const result = await getCreditLinesOfBorrowerWithStateNotIn(
      this.subgraphUrl,
      borrower,
      state.map((a) => a.toString())
    );
    return result.length;
  }

  async countAllCreditLinesOfBorrowerWithStateNotIn_requestByLender(
    borrower: string,
    requestByLender: boolean,
    state: CreditLineStatus[]
  ): Promise<number> {
    const result = await getCreditLinesOfBorrowerWithStateNotIn_requestByLender(
      this.subgraphUrl,
      borrower,
      requestByLender,
      state.map((a) => a.toString())
    );
    return result.length;
  }

  async countAllCreditLinesOfLenderWithStateNotIn(lender: string, state: CreditLineStatus[]): Promise<number> {
    const result = await getCreditLinesOfLenderWithStateNotIn(
      this.subgraphUrl,
      lender,
      state.map((a) => a.toString())
    );
    return result.length;
  }

  async countAllCreditLinesOfLenderWithStateNotIn_requestByLender(
    lender: string,
    requestByLender: boolean,
    state: CreditLineStatus[]
  ): Promise<number> {
    const result = await getCreditLinesOfLenderWithStateNotIn_requestByLender(
      this.subgraphUrl,
      lender,
      requestByLender,
      state.map((a) => a.toString())
    );
    return result.length;
  }

  async countAllCreditLinesOfLenderWithStateIn(lender: string, state: CreditLineStatus[]): Promise<number> {
    const result = await getCreditLinesOfLenderWithState(
      this.subgraphUrl,
      lender,
      state.map((a) => a.toString())
    );
    return result.length;
  }

  async countAllCreditLinesOfLenderWithStateIn_requestByLender(
    lender: string,
    requestByLender: boolean,
    state: CreditLineStatus[]
  ): Promise<number> {
    const result = await getCreditLinesOfLenderWithState_requestByLender(
      this.subgraphUrl,
      lender,
      requestByLender,
      state.map((a) => a.toString())
    );
    return result.length;
  }
}
