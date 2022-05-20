import { Signer } from '@ethersproject/abstract-signer';
import { TokenManager } from '../tokenManager';
import { SublimeConfig } from '../types/sublimeConfig';
import { CreditLineCalls } from './CreditLine';

import {
  getLendersOfPooledCreditLines,
  getAllPooledCreditLines,
  getAllPooledCreditLinesForCountWithState,
  getAllPooledCreditLinesOfLenderWithStateNotIn,
  getAllPooledCreditLinesOfLenderWithState,
  getAllPooledCreditLinesOfBorrowerWithStateNotIn,
  getAllPooledCreditLinesOfBorrowerWithState,
  getAllPooledCreditLinesForCountWithStateNotIn,
} from '../queries';

import {
  PooledCreditLineDetail,
  CreditLineStatus,
  LenderContributionToPooledCreditLines,
  PooledCreditLineOperation,
  Balance,
  LenderPoolDetail,
  LenderPerPoolDetail,
} from '../types/Types';

import BigNumber from 'bignumber.js';

import { PooledCreditLine } from '../wrappers/PooledCreditLine';
import { PooledCreditLine__factory } from '../wrappers/factories/PooledCreditLine__factory';

import { LenderPool, LenderPool__factory } from '../wrappers';

import {
  getPooledCreditLinesOfBorrower,
  getAllPooledCreditLinesWithState,
  getAllPooledCreditLinesWithNotState,
  getPooledCreditLineById,
  getPooledCreditLinesOfLender,
  getPooledCreditLineTimeline,
  getPooledCreditLinesOfBorrowerWithState,
  getPooledCreditLinesOfBorrowerWithNotState,
  getPooledCreditLinesOfLenderCanLendTo,
  getPooledCreditLinesForLenderById,
  getAllPooledCreditLinesForCount,
  getAllPooledCreditLinesOfBorrower,
  getAllPooledCreditLinesOfLender,
  getLenderPerPool,
} from '../queries';

export class PooledCreditLineCalls extends CreditLineCalls {
  private pooledCreditLineContract: PooledCreditLine;
  private lenderPoolContract: LenderPool;

  constructor(url: string, signer: Signer, tokenManager: TokenManager, config: SublimeConfig) {
    super(url, signer, tokenManager, config);
    this.pooledCreditLineContract = new PooledCreditLine__factory(signer).attach(config.pooledCreditLineAddress);
    this.lenderPoolContract = new LenderPool__factory(signer).attach(config.lenderPoolAddress);
  }

  /**
   * @description Count all the pooled credit lines
   * @returns
   */
  async countAllPooledCreditLines(): Promise<number> {
    const result = await getAllPooledCreditLinesForCount(this.subgraphUrl);
    return result.length;
  }

  /**
   * @description Count all pooled credit lines of a borrower
   * @param borrower
   * @returns
   */
  async countAllPooledCreditLinesOfBorrower(borrower: string): Promise<number> {
    const result = await getAllPooledCreditLinesOfBorrower(this.subgraphUrl, borrower);
    return result.length;
  }

  /**
   * @description Count all Pooled Credit Lines of a lender
   * @param lender
   * @returns
   */
  async countAllPooledCreditLinesOfLender(lender: string): Promise<number> {
    const result = await getAllPooledCreditLinesOfLender(this.subgraphUrl, lender);
    return result.length;
  }

  /**
   * @description Returns pooled credit ordered by latest created
   * @param count
   * @param skip
   * @returns
   */
  async getAllPooledCreditLines(count: number = 13, skip: number = 0): Promise<PooledCreditLineDetail[]> {
    const result = await getAllPooledCreditLines(this.subgraphUrl, count, skip);
    return this.transformToPooledCreditLine(result);
  }

  /**
   * @description Returns all PCL which have state
   * @param state
   * @param count
   * @param skip
   * @returns
   */
  async getAllPoolCreditLinesWithStateIn(
    state: CreditLineStatus[],
    count: number = 13,
    skip: number = 0
  ): Promise<PooledCreditLineDetail[]> {
    const result = await getAllPooledCreditLinesWithState(
      this.subgraphUrl,
      count,
      skip,
      state.map((a) => a.toString())
    );
    return this.transformToPooledCreditLine(result);
  }

  /**
   * @description Returns all PCL which do not have state
   * @param state
   * @param count
   * @param skip
   * @returns
   */
  async getAllPoolCreditLinesWithStateNotIn(
    state: CreditLineStatus[],
    count: number = 13,
    skip: number = 0
  ): Promise<PooledCreditLineDetail[]> {
    const result = await getAllPooledCreditLinesWithNotState(
      this.subgraphUrl,
      count,
      skip,
      state.map((a) => a.toString())
    );
    return this.transformToPooledCreditLine(result);
  }

  /**
   * @description Returns specific PCL details
   * @param id
   * @returns
   */
  async getPooledCreditLineById(id: number): Promise<PooledCreditLineDetail[]> {
    const result = await getPooledCreditLineById(this.subgraphUrl, id);
    return this.transformToPooledCreditLine(result);
  }

  /**
   * @description Returns all PCL of borrower
   * @param address
   * @param count
   * @param skip
   * @returns
   */
  async getAllPooledCreditLinesOfBorrower(address: string, count: number = 13, skip: number = 0): Promise<PooledCreditLineDetail[]> {
    const result = await getPooledCreditLinesOfBorrower(this.subgraphUrl, address, count, skip);
    let lines = await this.transformToPooledCreditLine(result);
    lines = lines.sort((a, b) => new BigNumber(b.id).minus(a.id).toNumber());
    return lines;
  }

  /**
   * @description Returns all the PCL of borrower with state in
   * @param borrower
   * @param status
   * @param count
   * @param skip
   * @returns
   */
  async getAllPooledCreditLinesOfBorrowerWithStateIn(
    borrower: string,
    status: CreditLineStatus[],
    count: number = 13,
    skip: number = 0
  ): Promise<PooledCreditLineDetail[]> {
    const result = await getPooledCreditLinesOfBorrowerWithState(
      this.subgraphUrl,
      borrower,
      count,
      skip,
      status.map((a) => a.toString())
    );
    return await this.transformToPooledCreditLine(result);
  }

  /**
   * @description Returns all the PCL of borrower with state not in
   * @param borrower
   * @param status
   * @param count
   * @param skip
   * @returns
   */
  async getAllPooledCreditLinesOfBorrowerWithStateNotIn(
    borrower: string,
    status: CreditLineStatus[],
    count: number = 13,
    skip: number = 0
  ): Promise<PooledCreditLineDetail[]> {
    const result = await getPooledCreditLinesOfBorrowerWithNotState(
      this.subgraphUrl,
      borrower,
      count,
      skip,
      status.map((a) => a.toString())
    );
    return await this.transformToPooledCreditLine(result);
  }

  /**
   * @description Returns all the PCL which a lender can lend to
   * @param lender
   * @param count
   * @param skip
   * @returns
   */
  async getAllPooledCreditLinesLenderCanLendTo(lender: string, count: number = 13, skip: number = 0): Promise<PooledCreditLineDetail[]> {
    const result = await getPooledCreditLinesOfLenderCanLendTo(this.subgraphUrl, lender, count, skip);
    return await this.transformToPooledCreditLine(result);
  }

  /**
   * @description Returns PCL detail and lender contribution of the same
   * @param id
   * @returns
   */
  async getLendersViewOfPooledCredit(
    id: string
  ): Promise<[PooledCreditLineDetail | undefined, LenderContributionToPooledCreditLines | undefined]> {
    const [result, contributionsData] = await getPooledCreditLinesForLenderById(this.subgraphUrl, id);
    if (result.length == 0) {
      return [undefined, undefined];
    }
    let pooledCreditLines = await this.transformToPooledCreditLine(result);
    let contributions = await this.transformToLenderContributionToPooledCreditLines(pooledCreditLines, contributionsData);
    pooledCreditLines = pooledCreditLines.sort((a, b) => new BigNumber(b.id).minus(a.id).toNumber());
    contributions = contributions.sort((a, b) => new BigNumber(b.id).minus(a.id).toNumber());

    return [pooledCreditLines[0], contributions[0]];
  }

  private async transformToPooledCreditLine(data: any[]): Promise<PooledCreditLineDetail[]> {
    const borrowTokens: string[] = data.map((a) => a.collateralAsset);
    const collateralTokens: string[] = data.map((a) => a.borrowAsset);
    const allTokens = [...borrowTokens, ...collateralTokens].filter((value, index, array) => array.indexOf(value) === index);
    for (let index = 0; index < allTokens.length; index++) {
      const element = allTokens[index];
      await this.tokenManager.updateAll(element);
    }

    const prices = {};
    for (let index = 0; index < allTokens.length; index++) {
      const element = allTokens[index];
      prices[element] = await (await this.tokenManager.getPricePerAsset(element)).toString();
    }

    const numberOfCollateralTokens = {};
    const allId = data.map((a) => a.id);
    for (let index = 0; index < allId.length; index++) {
      const element = allId[index];
      numberOfCollateralTokens[allId[index]] = await (await this.getTotalCollateralTokensInPooledCreditlines(element)).toString();
    }

    const all = data.map(async (a) => {
      const colRatio = await this.getCurrentColRatioOfPcl(a.id);
      return {
        id: a.id,
        borrowerAddress: a.borrowerAddress,
        borrowLimit: { value: a.borrowLimit, decimals: this.tokenManager.getTokenDecimals(a.borrowAsset) },
        borrowRate: new BigNumber(a.borrowRate).div(new BigNumber(10).pow(16)).toFixed(2),
        idealCollateralRatio: new BigNumber(a.idealCollateralRatio).div(new BigNumber(10).pow(16)).toFixed(2),
        collateralTokens: { value: numberOfCollateralTokens[a.id], decimals: this.tokenManager.getTokenDecimals(a.collateralAsset) },
        borrowAsset: {
          name: this.tokenManager.getTokenName(a.borrowAsset),
          address: a.borrowAsset,
          logo: this.tokenManager.getLogo(a.borrowAsset),
          pricePerAssetInUSD: prices[a.borrowAsset],
        },
        collateralAsset: {
          name: this.tokenManager.getTokenName(a.collateralAsset),
          address: a.collateralAsset,
          logo: this.tokenManager.getLogo(a.collateralAsset),
          pricePerAssetInUSD: prices[a.collateralAsset],
        },
        createdAt: a.createdAt,
        startsAt: a.startsAt,
        endsAt: a.endsAt,
        defaultsAt: a.defaultsAt,
        lenderStrategy: { type: this.yieldApi.getStrategy(a.lenderStrategy), address: a.lenderStrategy },
        collateralStrategy: { type: this.yieldApi.getStrategy(a.collateralStrategy), address: a.collateralStrategy },
        gracePenaltyRate: new BigNumber(a.gracePenaltyRate).div(new BigNumber(10).pow(16)).toFixed(2),
        status: await this.getCreditLineStatus(a.id),
        principal: { value: a.principal, decimals: this.tokenManager.getTokenDecimals(a.borrowAsset) },
        totalInterestRepaid: { value: a.totalInterestRepaid, decimals: this.tokenManager.getTokenDecimals(a.borrowAsset) },
        lastPrincipalUpdateTime: a.lastPrincipalUpdateTime,
        interestAccruedTillLastPrincipalUpdate: {
          value: a.interestAccruedTillLastPrincipalUpdate || '0',
          decimals: this.tokenManager.getTokenDecimals(a.borrowAsset),
        },
        totalLentAmount: { value: a.totalLentAmount, decimals: this.tokenManager.getTokenDecimals(a.borrowAsset) },
        currentCollateralRatio: {
          value: colRatio.toString(),
          decimals: 18,
        },
        currentDebt: {
          value: await (await this.getCurrentDebtForPooledCreditLines(a.id)).toString(),
          decimals: this.tokenManager.getTokenDecimals(a.borrowAsset),
        },
      };
    });

    return Promise.all(all);
  }

  private async getTotalCollateralTokensInPooledCreditlines(id: string): Promise<BigNumber> {
    let tokens = new BigNumber(0);

    try {
      const totalCollateralTokens = await (await this.pooledCreditLineContract.callStatic.calculateTotalCollateralTokens(id)).toString();
      tokens = new BigNumber(totalCollateralTokens);
    } catch (ex) {
      console.log(`Error while fetching total collateral tokens for pcl ${id}`);
    }
    return tokens;
  }

  private async getCurrentColRatioOfPcl(id: string): Promise<BigNumber> {
    let ratio = new BigNumber(0);
    try {
      const _ratio = await this.pooledCreditLineContract.callStatic.calculateCurrentCollateralRatio(id);
      ratio = new BigNumber(_ratio.toString());
    } catch (ex) {
      console.log(`Error while fetching current col ratio of pcl ${id}`);
    }
    return ratio;
  }

  private async getCurrentDebtForPooledCreditLines(id: string): Promise<BigNumber> {
    let debt = new BigNumber(0);
    try {
      debt = new BigNumber((await this.pooledCreditLineContract.calculateCurrentDebt(id)).toString());
    } catch (ex) {}
    return debt;
  }

  /**
   * @description Computed the latest state of PCL as subgraph doesn't return the exact state
   * @param _id
   * @returns
   */
  public async getCreditLineStatus(_id: string): Promise<CreditLineStatus> {
    const pooledCreditLineVariables = await this.pooledCreditLineContract.pooledCreditLineVariables(_id);
    const status = pooledCreditLineVariables.status;

    const now = new Date().valueOf();

    if (status == 0) {
      return CreditLineStatus.NOT_CREATED;
    } else if (status == 1) {
      // request on sc
      const pooledCLConstants = await this.lenderPoolContract.pooledCLConstants(_id);
      const pooledCLConstantsOfPCL = await this.pooledCreditLineContract.pooledCreditLineConstants(_id);

      const amountLent = await this.lenderPoolContract.totalSupply(_id);
      if (
        amountLent.gte(pooledCLConstants.minBorrowAmount) &&
        new BigNumber(now).div(1000).gt(pooledCLConstantsOfPCL.startsAt.toString()) &&
        new BigNumber(now).div(1000).lt(pooledCLConstantsOfPCL.endsAt.toString())
      ) {
        return CreditLineStatus.START_CALLABLE;
      } else {
        const dateBigNumber = new BigNumber(new Date().valueOf()).div(1000);
        if (dateBigNumber.gt(pooledCLConstantsOfPCL.startsAt.toString()) && amountLent.lt(pooledCLConstants.minBorrowAmount)) {
          return CreditLineStatus.INTERMEDIATE_CANCELLED;
        }
      }
      return CreditLineStatus.REQUESTED;
      // status ==2 means it is active on smart contract
    } else if (status == 2) {
      const pooledCLConstants = await this.pooledCreditLineContract.pooledCreditLineConstants(_id);

      const colRatio = await this.pooledCreditLineContract.callStatic.calculateCurrentCollateralRatio(_id);
      if (
        pooledCLConstants.idealCollateralRatio.gt(colRatio) ||
        (new BigNumber(now).gt(pooledCLConstants.defaultsAt.toString()) && pooledCreditLineVariables.principal.gt(0))
      ) {
        return CreditLineStatus.LIQUIDATE_CALLABLE;
      }

      if (
        new BigNumber(now).div(1000).gt(pooledCLConstants.endsAt.toString()) &&
        new BigNumber(now).div(1000).lt(pooledCLConstants.defaultsAt.toString()) &&
        pooledCreditLineVariables.principal.gt(0)
      ) {
        return CreditLineStatus.INTERMEDIATE_EXPIRED;
      }

      return CreditLineStatus.ACTIVE;
    } else if (status == 3) {
      return CreditLineStatus.CLOSED;
    } else if (status == 4) {
      return CreditLineStatus.EXPIRED;
    } else if (status == 5) {
      return CreditLineStatus.LIQUIDATED;
    } else if (status == 6) {
      return CreditLineStatus.CANCELLED;
    } else {
      throw new Error('invalid state ');
    }
  }

  protected async transformToLenderContributionToPooledCreditLines(
    pooledCreditLines: PooledCreditLineDetail[],
    data: any[]
  ): Promise<LenderContributionToPooledCreditLines[]> {
    return data.map((a, index) => {
      const borrowToken = pooledCreditLines[index].borrowAsset;
      const collateralToken = pooledCreditLines[index].collateralAsset;
      const borrowDecimals = this.tokenManager.getTokenDecimals(borrowToken.address);
      const collateralDecimals = this.tokenManager.getTokenDecimals(collateralToken.address);
      return {
        id: pooledCreditLines[index].id,
        amountLent: { value: a.amountLent || '0', decimals: borrowDecimals },
        amountWithdrawn: { value: a.amountWithdrawn || '0', decimals: borrowDecimals },
        sharesWithdrawn: { value: a.sharesWithdrawn || '0', decimals: collateralDecimals },
        interestWithdrawn: { value: a.interestWithdrawn || '0', decimals: borrowDecimals },
      };
    });
  }

  /**
   * @description Get All pooled credit lines of lender
   * @param lender
   * @param count
   * @param skip
   * @returns
   */
  async getAllPooledCreditLinesOfLender(
    lender: string,
    count: number = 13,
    skip: number = 0
  ): Promise<[PooledCreditLineDetail[], LenderContributionToPooledCreditLines[]]> {
    const [result, contributionsData] = await getPooledCreditLinesOfLender(this.subgraphUrl, lender, count, skip);
    let pooledCreditLines = await this.transformToPooledCreditLine(result);
    let contributions = await this.transformToLenderContributionToPooledCreditLines(pooledCreditLines, contributionsData);
    pooledCreditLines = pooledCreditLines.sort((a, b) => new BigNumber(b.id).minus(a.id).toNumber());
    contributions = contributions.sort((a, b) => new BigNumber(b.id).minus(a.id).toNumber());
    return [pooledCreditLines, contributions];
  }

  /**
   * @deprecated Will be removed in future
   * @param user
   * @returns
   */
  async getAllPooledCreditLinesOfUser(user: string): Promise<PooledCreditLineDetail[]> {
    const borrowerLines = await this.getAllPooledCreditLinesOfBorrower(user);
    const [lenderLines] = await this.getAllPooledCreditLinesOfLender(user);
    let lines = [...lenderLines, ...borrowerLines];
    lines = lines.sort((a, b) => new BigNumber(b.id).minus(a.id).toNumber());
    return lines;
  }

  /**
   * @description Fetch PCL timeline
   * @param pooledCreditLineId
   * @param count
   * @param skip
   * @returns
   */
  async getPooledCreditLineTimeline(
    pooledCreditLineId: string,
    count: number = 13,
    skip: number = 0
  ): Promise<PooledCreditLineOperation[]> {
    const result = await getPooledCreditLineTimeline(this.subgraphUrl, pooledCreditLineId, count, skip);
    const cl = await this.getPooledCreditLineById(parseInt(pooledCreditLineId));
    if (cl.length > 0) {
      const borrowTokenDecimal = this.tokenManager.getTokenDecimals(cl[0].borrowAsset.address);
      const collateralTokenDecimal = this.tokenManager.getTokenDecimals(cl[0].collateralAsset.address);
      return this.transformToPooledCreditLineOperation(result, borrowTokenDecimal, collateralTokenDecimal);
    } else {
      return [];
    }
  }

  protected async transformToPooledCreditLineOperation(
    data: any[],
    borrowTokenDecimal,
    collateralTokenDecimal
  ): Promise<PooledCreditLineOperation[]> {
    return data.map((a) => {
      //     CREATED
      // COLLATERAL_ADDED
      // LIQUIDITY_SUPPLIED
      // BORROW
      // CLOSE
      // EXTENSION_REPAID
      // GRACE_PENALTY_REPAID
      // INTEREST_REPAID
      // COMPLETE_INTEREST_REPAID
      // PRINCIPLE_REPAID
      // COLLATERAL_WITHDRAWN
      // DEPOSIT_COLLATERAL
      // REPAY
      let amount: Balance = { value: '0', decimals: 18 };

      if (['DEPOSIT_COLLATERAL', 'COLLATERAL_ADDED', 'COLLATERAL_WITHDRAWN'].includes(a.pooledCreditLineOperation)) {
        amount = { value: a.amount, decimals: collateralTokenDecimal };
      }
      if (
        ['BORROW', 'EXTENSION_REPAID', 'INTEREST_REPAID', 'COMPLETE_INTEREST_REPAID', 'PRINCIPLE_REPAID', 'REPAY'].includes(
          a.pooledCreditLineOperation
        )
      ) {
        amount = { value: a.amount, decimals: borrowTokenDecimal };
      }

      return {
        id: a.id,
        transactionHash: String(a.id).split('#')[0],
        eventIndex: String(a.id).split('#')[1],
        pooledCreditLineOperation: a.pooledCreditLineOperation,
        timestamp: a.timestamp,
        amount,
        strategy: a.strategy ? { type: this.yieldApi.getStrategy(a.strategy), address: a.strategy } : undefined,
      };
    });
  }

  /**
   * @description Get Lenders Per Pool
   * @todo Add pagination to LendersPerPool query
   * @param id
   * @returns
   */
  async getLendersPerPool(id: string): Promise<LenderPoolDetail> {
    const result = await getLenderPerPool(this.subgraphUrl, id);
    if (result.length == 0) {
      throw new Error('No such pooled credit line');
    }
    const returnData = await this.transformToLenderPoolDetail(result);
    return returnData[0];
  }

  protected async transformToLenderPoolDetail(data: any[]): Promise<LenderPoolDetail[]> {
    const borrowTokens: string[] = data.map((a) => a.collateralAsset);
    const collateralTokens: string[] = data.map((a) => a.borrowAsset);
    const allTokens = [...borrowTokens, ...collateralTokens].filter((value, index, array) => array.indexOf(value) === index);
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
        id: a.id,
        startTime: a.startTime,
        borrowAsset: {
          name: this.tokenManager.getTokenName(a.borrowAsset),
          address: a.borrowAsset,
          logo: this.tokenManager.getLogo(a.borrowAsset),
          pricePerAssetInUSD: prices[a.borrowAsset],
        },
        collateralAsset: {
          name: this.tokenManager.getTokenName(a.collateralAsset),
          address: a.collateralAsset,
          logo: this.tokenManager.getLogo(a.collateralAsset),
          pricePerAssetInUSD: prices[a.collateralAsset],
        },
        borrowLimit: { value: a.borrowLimit, decimals: this.tokenManager.getTokenDecimals(a.borrowAsset) },
        minBorrowAmount: { value: a.minBorrowAmount, decimals: this.tokenManager.getTokenDecimals(a.borrowAsset) },
        borrowAssetStrategy: { address: a.borrowAssetStrategy, type: this.yieldApi.getStrategy(a.borrowAssetStrategy) },
        sharesHeld: { value: a.sharesHeld, decimals: this.tokenManager.getTokenDecimals(a.collateralAsset) },
        borrowerInterestShares: { value: a.borrowerInterestShares, decimals: this.tokenManager.getTokenDecimals(a.collateralAsset) },
        yieldInterestWithdrawnShares: {
          value: a.yieldInterestWithdrawnShares,
          decimals: this.tokenManager.getTokenDecimals(a.collateralAsset),
        },
        collateralHeld: { value: a.collateralHeld, decimals: this.tokenManager.getTokenDecimals(a.collateralAsset) },
        areTokensTransferable: a.areTokensTransferable,
        verifier: { type: this.verificationApi.getVerifierType(a.verifier.id), address: a.verifier.id },
        lenders: this.transformToLenderPerPoolDetail(a.lender, this.tokenManager.getTokenDecimals(a.borrowAsset)),
      };
    });
  }

  protected transformToLenderPerPoolDetail(data: any[], collateralDecimal: number): LenderPerPoolDetail[] {
    return data.map((a) => {
      return {
        lenderAddress: a.lenderAddress,
        amountLent: { value: a.amountLent, decimals: collateralDecimal },
        amountWithdrawn: { value: a.amountWithdrawn, decimals: collateralDecimal },
        sharesWithdrawn: { value: a.sharesWithdrawn, decimals: collateralDecimal },
        strategy: { address: a.strategy, type: this.yieldApi.getStrategy(a.strategy) },
      };
    });
  }

  /**
   * @description Count all PCL with states in
   * @param state
   * @returns
   */
  async countAllPooledCreditLinesWithStates(state: CreditLineStatus[]): Promise<number> {
    const result = await getAllPooledCreditLinesForCountWithState(
      this.subgraphUrl,
      state.map((a) => a.toString())
    );
    return result.length;
  }

  /**
   * @description Count all PCL with states not in
   * @param state
   * @returns
   */
  async countAllPooledCreditLinesWithStatesNotIn(state: CreditLineStatus[]): Promise<number> {
    const result = await getAllPooledCreditLinesForCountWithStateNotIn(
      this.subgraphUrl,
      state.map((a) => a.toString())
    );
    return result.length;
  }

  /**
   * @description Count all PCL of borrower with state in
   * @param borrower
   * @param state
   * @returns
   */
  async countAllPooledCreditLinesOfBorrowerWithState(borrower: string, state: CreditLineStatus[]): Promise<number> {
    const result = await getAllPooledCreditLinesOfBorrowerWithState(
      this.subgraphUrl,
      borrower,
      state.map((a) => a.toString())
    );
    return result.length;
  }

  /**
   * @description Count all PCL of borrower with state not in
   * @param borrower
   * @param state
   * @returns
   */
  async countAllPooledCreditLinesOfBorrowerWithStateNotIn(borrower: string, state: CreditLineStatus[]): Promise<number> {
    const result = await getAllPooledCreditLinesOfBorrowerWithStateNotIn(
      this.subgraphUrl,
      borrower,
      state.map((a) => a.toString())
    );
    return result.length;
  }

  /**
   * @description Count all PCL of lender with state in
   * @param borrower
   * @param state
   * @returns
   */
  async countAllPooledCreditLinesOfLenderWithState(lender: string, state: CreditLineStatus[]): Promise<number> {
    const result = await getAllPooledCreditLinesOfLenderWithState(
      this.subgraphUrl,
      lender,
      state.map((a) => a.toString())
    );
    return result.length;
  }

  /**
   * @description Count all PCL of lender with state not in
   * @param borrower
   * @param state
   * @returns
   */
  async countAllPooledCreditLinesOfLenderWithStateNotIn(lender: string, state: CreditLineStatus[]): Promise<number> {
    const result = await getAllPooledCreditLinesOfLenderWithStateNotIn(
      this.subgraphUrl,
      lender,
      state.map((a) => a.toString())
    );
    return result.length;
  }

  /**
   * @description Count all Lenders of PooledCreditLine
   * @param id
   * @returns
   */
  async countAllLendersOfPooledCreditLine(id: number): Promise<number> {
    const result = await getLendersOfPooledCreditLines(this.subgraphUrl, id.toString());
    return result.length;
  }
}
