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
  getAllLendersPerPool,
} from '../queries';

import {
  PooledCreditLineDetail,
  CreditLineStatus,
  LenderContributionToPooledCreditLines,
  PooledCreditLineOperation,
  Balance,
  LenderPoolDetail,
  LenderPerPoolDetail,
  LenderPerPool,
} from '../types/Types';

import BigNumber from 'bignumber.js';

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

import { PooledCreditLineEmulator } from '../emulator/PooledCreditLines';

export class PooledCreditLineCalls extends CreditLineCalls {
  constructor(url: string, signer: Signer, tokenManager: TokenManager, config: SublimeConfig) {
    super(url, signer, tokenManager, config);
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
    const lpData = result.map((a) => a.lenderPool);
    const pclData = result;
    const prices = await this.refreshTokenData(pclData);
    const collateralPerStrategyToken = await this.refreshStrategyDataForPcl(pclData);

    const lendersPerPoolData = await getAllLendersPerPool(
      this.subgraphUrl,
      pclData.map((a) => a.id)
    );

    const allPoolIds = pclData.map((a) => a.id);
    const lenderPerPoolData: LenderPerPool[][] = [];

    for (let index = 0; index < allPoolIds.length; index++) {
      const poolId = allPoolIds[index];
      const requiredLendersPerPool = lendersPerPoolData.filter((a) => a.lenderPool.id == poolId);
      const requiredLenderPerPool: LenderPerPool[] = requiredLendersPerPool.map((a) => {
        return {
          lenderAddress: a.lenderAddress,
          lenderBalance: new BigNumber(a.lenderBalance),
          amountLent: new BigNumber(a.amountLent),
          borrowerInterestSharesWithdrawn: new BigNumber(a.borrowerInterestSharesWithdrawn),
          yieldInterestWithdrawnShares: new BigNumber(a.yieldInterestWithdrawnShares),
        };
      });
      lenderPerPoolData.push(requiredLenderPerPool);
    }

    const emulatorResult = await this.transformToPooledCreditLineEmulator(
      pclData,
      lpData,
      lenderPerPoolData,
      prices,
      collateralPerStrategyToken
    );
    return this.transformToPooledCreditLine(result, emulatorResult, prices);
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

    const lpData = result.map((a) => a.lenderPool);
    const pclData = result;
    const prices = await this.refreshTokenData(pclData);
    const collateralPerStrategyToken = await this.refreshStrategyDataForPcl(pclData);

    const lendersPerPoolData = await getAllLendersPerPool(
      this.subgraphUrl,
      pclData.map((a) => a.id)
    );

    const allPoolIds = pclData.map((a) => a.id);
    const lenderPerPoolData: LenderPerPool[][] = [];

    for (let index = 0; index < allPoolIds.length; index++) {
      const poolId = allPoolIds[index];
      const requiredLendersPerPool = lendersPerPoolData.filter((a) => a.lenderPool.id == poolId);
      const requiredLenderPerPool: LenderPerPool[] = requiredLendersPerPool.map((a) => {
        return {
          lenderAddress: a.lenderAddress,
          lenderBalance: new BigNumber(a.lenderBalance),
          amountLent: new BigNumber(a.amountLent),
          borrowerInterestSharesWithdrawn: new BigNumber(a.borrowerInterestSharesWithdrawn),
          yieldInterestWithdrawnShares: new BigNumber(a.yieldInterestWithdrawnShares),
        };
      });
      lenderPerPoolData.push(requiredLenderPerPool);
    }

    const emulatorResult = await this.transformToPooledCreditLineEmulator(
      pclData,
      lpData,
      lenderPerPoolData,
      prices,
      collateralPerStrategyToken
    );
    return this.transformToPooledCreditLine(result, emulatorResult, prices);
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
    const lpData = result.map((a) => a.lenderPool);
    const pclData = result;
    const prices = await this.refreshTokenData(pclData);
    const collateralPerStrategyToken = await this.refreshStrategyDataForPcl(pclData);

    const lendersPerPoolData = await getAllLendersPerPool(
      this.subgraphUrl,
      pclData.map((a) => a.id)
    );

    const allPoolIds = pclData.map((a) => a.id);
    const lenderPerPoolData: LenderPerPool[][] = [];

    for (let index = 0; index < allPoolIds.length; index++) {
      const poolId = allPoolIds[index];
      const requiredLendersPerPool = lendersPerPoolData.filter((a) => a.lenderPool.id == poolId);
      const requiredLenderPerPool: LenderPerPool[] = requiredLendersPerPool.map((a) => {
        return {
          lenderAddress: a.lenderAddress,
          lenderBalance: new BigNumber(a.lenderBalance),
          amountLent: new BigNumber(a.amountLent),
          borrowerInterestSharesWithdrawn: new BigNumber(a.borrowerInterestSharesWithdrawn),
          yieldInterestWithdrawnShares: new BigNumber(a.yieldInterestWithdrawnShares),
        };
      });
      lenderPerPoolData.push(requiredLenderPerPool);
    }

    const emulatorResult = await this.transformToPooledCreditLineEmulator(
      pclData,
      lpData,
      lenderPerPoolData,
      prices,
      collateralPerStrategyToken
    );
    return this.transformToPooledCreditLine(result, emulatorResult, prices);
  }

  /**
   * @description Returns specific PCL details
   * @param id
   * @returns
   */
  async getPooledCreditLineById(id: number): Promise<PooledCreditLineDetail[]> {
    const result = await getPooledCreditLineById(this.subgraphUrl, id);
    const lpData = result.map((a) => a.lenderPool);
    const pclData = result;
    const prices = await this.refreshTokenData(pclData);
    const collateralPerStrategyToken = await this.refreshStrategyDataForPcl(pclData);

    const lendersPerPoolData = await getAllLendersPerPool(
      this.subgraphUrl,
      pclData.map((a) => a.id)
    );

    const allPoolIds = pclData.map((a) => a.id);
    const lenderPerPoolData: LenderPerPool[][] = [];

    for (let index = 0; index < allPoolIds.length; index++) {
      const poolId = allPoolIds[index];
      const requiredLendersPerPool = lendersPerPoolData.filter((a) => a.lenderPool.id == poolId);
      const requiredLenderPerPool: LenderPerPool[] = requiredLendersPerPool.map((a) => {
        return {
          lenderAddress: a.lenderAddress,
          lenderBalance: new BigNumber(a.lenderBalance),
          amountLent: new BigNumber(a.amountLent),
          borrowerInterestSharesWithdrawn: new BigNumber(a.borrowerInterestSharesWithdrawn),
          yieldInterestWithdrawnShares: new BigNumber(a.yieldInterestWithdrawnShares),
        };
      });
      lenderPerPoolData.push(requiredLenderPerPool);
    }

    const emulatorResult = await this.transformToPooledCreditLineEmulator(
      pclData,
      lpData,
      lenderPerPoolData,
      prices,
      collateralPerStrategyToken
    );
    return this.transformToPooledCreditLine(result, emulatorResult, prices);
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
    const lpData = result.map((a) => a.lenderPool);
    const pclData = result;
    const prices = await this.refreshTokenData(pclData);
    const collateralPerStrategyToken = await this.refreshStrategyDataForPcl(pclData);

    const lendersPerPoolData = await getAllLendersPerPool(
      this.subgraphUrl,
      pclData.map((a) => a.id)
    );

    const allPoolIds = pclData.map((a) => a.id);
    const lenderPerPoolData: LenderPerPool[][] = [];

    for (let index = 0; index < allPoolIds.length; index++) {
      const poolId = allPoolIds[index];
      const requiredLendersPerPool = lendersPerPoolData.filter((a) => a.lenderPool.id == poolId);
      const requiredLenderPerPool: LenderPerPool[] = requiredLendersPerPool.map((a) => {
        return {
          lenderAddress: a.lenderAddress,
          lenderBalance: new BigNumber(a.lenderBalance),
          amountLent: new BigNumber(a.amountLent),
          borrowerInterestSharesWithdrawn: new BigNumber(a.borrowerInterestSharesWithdrawn),
          yieldInterestWithdrawnShares: new BigNumber(a.yieldInterestWithdrawnShares),
        };
      });
      lenderPerPoolData.push(requiredLenderPerPool);
    }

    const emulatorResult = await this.transformToPooledCreditLineEmulator(
      pclData,
      lpData,
      lenderPerPoolData,
      prices,
      collateralPerStrategyToken
    );
    const lines = this.transformToPooledCreditLine(result, emulatorResult, prices);
    return lines.sort((a, b) => new BigNumber(b.id).minus(a.id).toNumber());
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
    const lpData = result.map((a) => a.lenderPool);
    const pclData = result;
    const prices = await this.refreshTokenData(pclData);
    const collateralPerStrategyToken = await this.refreshStrategyDataForPcl(pclData);

    const lendersPerPoolData = await getAllLendersPerPool(
      this.subgraphUrl,
      pclData.map((a) => a.id)
    );

    const allPoolIds = pclData.map((a) => a.id);
    const lenderPerPoolData: LenderPerPool[][] = [];

    for (let index = 0; index < allPoolIds.length; index++) {
      const poolId = allPoolIds[index];
      const requiredLendersPerPool = lendersPerPoolData.filter((a) => a.lenderPool.id == poolId);
      const requiredLenderPerPool: LenderPerPool[] = requiredLendersPerPool.map((a) => {
        return {
          lenderAddress: a.lenderAddress,
          lenderBalance: new BigNumber(a.lenderBalance),
          amountLent: new BigNumber(a.amountLent),
          borrowerInterestSharesWithdrawn: new BigNumber(a.borrowerInterestSharesWithdrawn),
          yieldInterestWithdrawnShares: new BigNumber(a.yieldInterestWithdrawnShares),
        };
      });
      lenderPerPoolData.push(requiredLenderPerPool);
    }

    const emulatorResult = await this.transformToPooledCreditLineEmulator(
      pclData,
      lpData,
      lenderPerPoolData,
      prices,
      collateralPerStrategyToken
    );
    return this.transformToPooledCreditLine(result, emulatorResult, prices);
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
    const lpData = result.map((a) => a.lenderPool);
    const pclData = result;
    const prices = await this.refreshTokenData(pclData);
    const collateralPerStrategyToken = await this.refreshStrategyDataForPcl(pclData);

    const lendersPerPoolData = await getAllLendersPerPool(
      this.subgraphUrl,
      pclData.map((a) => a.id)
    );

    const allPoolIds = pclData.map((a) => a.id);
    const lenderPerPoolData: LenderPerPool[][] = [];

    for (let index = 0; index < allPoolIds.length; index++) {
      const poolId = allPoolIds[index];
      const requiredLendersPerPool = lendersPerPoolData.filter((a) => a.lenderPool.id == poolId);
      const requiredLenderPerPool: LenderPerPool[] = requiredLendersPerPool.map((a) => {
        return {
          lenderAddress: a.lenderAddress,
          lenderBalance: new BigNumber(a.lenderBalance),
          amountLent: new BigNumber(a.amountLent),
          borrowerInterestSharesWithdrawn: new BigNumber(a.borrowerInterestSharesWithdrawn),
          yieldInterestWithdrawnShares: new BigNumber(a.yieldInterestWithdrawnShares),
        };
      });
      lenderPerPoolData.push(requiredLenderPerPool);
    }

    const emulatorResult = await this.transformToPooledCreditLineEmulator(
      pclData,
      lpData,
      lenderPerPoolData,
      prices,
      collateralPerStrategyToken
    );
    return this.transformToPooledCreditLine(result, emulatorResult, prices);
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
    const lpData = result.map((a) => a.lenderPool);
    const pclData = result;
    const prices = await this.refreshTokenData(pclData);
    const collateralPerStrategyToken = await this.refreshStrategyDataForPcl(pclData);

    const lendersPerPoolData = await getAllLendersPerPool(
      this.subgraphUrl,
      pclData.map((a) => a.id)
    );

    const allPoolIds = pclData.map((a) => a.id);
    const lenderPerPoolData: LenderPerPool[][] = [];

    for (let index = 0; index < allPoolIds.length; index++) {
      const poolId = allPoolIds[index];
      const requiredLendersPerPool = lendersPerPoolData.filter((a) => a.lenderPool.id == poolId);
      const requiredLenderPerPool: LenderPerPool[] = requiredLendersPerPool.map((a) => {
        return {
          lenderAddress: a.lenderAddress,
          lenderBalance: new BigNumber(a.lenderBalance),
          amountLent: new BigNumber(a.amountLent),
          borrowerInterestSharesWithdrawn: new BigNumber(a.borrowerInterestSharesWithdrawn),
          yieldInterestWithdrawnShares: new BigNumber(a.yieldInterestWithdrawnShares),
        };
      });
      lenderPerPoolData.push(requiredLenderPerPool);
    }

    const emulatorResult = await this.transformToPooledCreditLineEmulator(
      pclData,
      lpData,
      lenderPerPoolData,
      prices,
      collateralPerStrategyToken
    );
    return this.transformToPooledCreditLine(result, emulatorResult, prices);
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
    const lpData = result.map((a) => a.lenderPool);
    const pclData = result;
    const prices = await this.refreshTokenData(pclData);
    const collateralPerStrategyToken = await this.refreshStrategyDataForPcl(pclData);

    const lendersPerPoolData = await getAllLendersPerPool(
      this.subgraphUrl,
      pclData.map((a) => a.id)
    );

    const allPoolIds = pclData.map((a) => a.id);
    const lenderPerPoolData: LenderPerPool[][] = [];

    for (let index = 0; index < allPoolIds.length; index++) {
      const poolId = allPoolIds[index];
      const requiredLendersPerPool = lendersPerPoolData.filter((a) => a.lenderPool.id == poolId);
      const requiredLenderPerPool: LenderPerPool[] = requiredLendersPerPool.map((a) => {
        return {
          lenderAddress: a.lenderAddress,
          lenderBalance: new BigNumber(a.lenderBalance),
          amountLent: new BigNumber(a.amountLent),
          borrowerInterestSharesWithdrawn: new BigNumber(a.borrowerInterestSharesWithdrawn),
          yieldInterestWithdrawnShares: new BigNumber(a.yieldInterestWithdrawnShares),
        };
      });
      lenderPerPoolData.push(requiredLenderPerPool);
    }

    const emulatorResult = await this.transformToPooledCreditLineEmulator(
      pclData,
      lpData,
      lenderPerPoolData,
      prices,
      collateralPerStrategyToken
    );
    let pooledCreditLines = this.transformToPooledCreditLine(result, emulatorResult, prices);
    let contributions = await this.transformToLenderContributionToPooledCreditLines(pooledCreditLines, contributionsData);
    pooledCreditLines = pooledCreditLines.sort((a, b) => new BigNumber(b.id).minus(a.id).toNumber());
    contributions = contributions.sort((a, b) => new BigNumber(b.id).minus(a.id).toNumber());
    return [pooledCreditLines, contributions];
  }

  async getSpecificPooledCreditLineOfLender(
    lender: string,
    id: string
  ): Promise<[PooledCreditLineDetail | undefined, LenderContributionToPooledCreditLines | undefined]> {
    const [poolData, contributionData] = await getPooledCreditLinesForLenderById(this.subgraphUrl, lender, id);
    if (poolData.length == 0) {
      return [undefined, undefined];
    }

    const lpData = poolData.map((a) => a.lenderPool);
    const pclData = poolData;
    const prices = await this.refreshTokenData(pclData);
    const collateralPerStrategyToken = await this.refreshStrategyDataForPcl(pclData);

    const lendersPerPoolData = await getAllLendersPerPool(
      this.subgraphUrl,
      pclData.map((a) => a.id)
    );

    const allPoolIds = pclData.map((a) => a.id);
    const lenderPerPoolData: LenderPerPool[][] = [];

    for (let index = 0; index < allPoolIds.length; index++) {
      const poolId = allPoolIds[index];
      const requiredLendersPerPool = lendersPerPoolData.filter((a) => a.lenderPool.id == poolId);
      const requiredLenderPerPool: LenderPerPool[] = requiredLendersPerPool.map((a) => {
        return {
          lenderAddress: a.lenderAddress,
          lenderBalance: new BigNumber(a.lenderBalance),
          amountLent: new BigNumber(a.amountLent),
          borrowerInterestSharesWithdrawn: new BigNumber(a.borrowerInterestSharesWithdrawn),
          yieldInterestWithdrawnShares: new BigNumber(a.yieldInterestWithdrawnShares),
        };
      });
      lenderPerPoolData.push(requiredLenderPerPool);
    }

    const emulatorResult = await this.transformToPooledCreditLineEmulator(
      pclData,
      lpData,
      lenderPerPoolData,
      prices,
      collateralPerStrategyToken
    );
    let poolDataDetail = this.transformToPooledCreditLine(poolData, emulatorResult, prices);
    const lenderContribution = await this.transformToLenderContributionToPooledCreditLines(poolDataDetail, contributionData);
    return [poolDataDetail[0], lenderContribution[0]];
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

  async getAllLendersPerPool(pclIds: string[]): Promise<any> {
    const result = await getAllLendersPerPool(this.subgraphUrl, pclIds);
    return result;
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

  private async transformToPooledCreditLineOperation(
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

      if (['DEPOSIT_COLLATERAL', 'COLLATERAL_ADDED', 'COLLATERAL_WITHDRAWN', 'WITHDRAW_COLLATERAL'].includes(a.pooledCreditLineOperation)) {
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
        strategy: a.strategy
          ? {
              type: this.yieldApi.getStrategy(a.strategy),
              address: a.strategy,
              displayName: this.yieldApi.getStrategyDisplayName(a.strategy),
              logo: this.yieldApi.getStrategyLogo(a.strategy),
            }
          : undefined,
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

  private async transformToLenderPoolDetail(data: any[]): Promise<LenderPoolDetail[]> {
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
        borrowAssetStrategy: {
          address: a.borrowAssetStrategy,
          type: this.yieldApi.getStrategy(a.borrowAssetStrategy),
          displayName: this.yieldApi.getStrategyDisplayName(a.borrowAssetStrategy),
          logo: this.yieldApi.getStrategyLogo(a.borrowAssetStrategy),
        },
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

  private transformToLenderPerPoolDetail(data: any[], collateralDecimal: number): LenderPerPoolDetail[] {
    return data.map((a) => {
      return {
        lenderAddress: a.lenderAddress,
        amountLent: { value: a.lenderBalance, decimals: collateralDecimal },
        amountWithdrawn: { value: a.amountWithdrawn, decimals: collateralDecimal },
        sharesWithdrawn: { value: a.sharesWithdrawn, decimals: collateralDecimal },
        strategy: {
          address: a.strategy,
          type: this.yieldApi.getStrategy(a.strategy),
          displayName: this.yieldApi.getStrategy(a.strategy),
          logo: this.yieldApi.getStrategyLogo(a.strategy),
        },
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

  private transformToPooledCreditLineEmulator(
    pclData: any[],
    lenderPoolData: any[],
    lendersPerPool: LenderPerPool[][],
    prices: Record<string, BigNumber>,
    collateralPerStrategyToken: Record<string, Record<string, BigNumber>>
  ): PooledCreditLineEmulator[] {
    return pclData.map((a, index) => {
      const aLenderPool = lenderPoolData[index];
      const lenderPerPool = lendersPerPool[index];
      return new PooledCreditLineEmulator(
        {
          id: a.id,
          pooledCreditLineStatus: a.status,
          endsAt: new BigNumber(a.endsAt),
          principal: new BigNumber(a.principal),
          idealCollateralRatio: new BigNumber(a.idealCollateralRatio),
          totalInterestRepaid: new BigNumber(a.totalInterestRepaid),
          lastPrincipalUpdateTime: new BigNumber(a.lastPrincipalUpdateTime),
          gracePenaltyRate: new BigNumber(a.gracePenaltyRate),
          borrowRate: new BigNumber(a.borrowRate),
          interestAccruedTillLastPrincipalUpdate: new BigNumber(a.interestAccruedTillLastPrincipalUpdate),
          depositedCollateralInShares: new BigNumber(a.depositedCollateralInShares),
          borrowLimit: new BigNumber(a.borrowLimit),
          defaultsAt: new BigNumber(a.defaultsAt),
        },
        {
          collateralPerStrategyToken: new BigNumber(collateralPerStrategyToken[a.lenderStrategy][a.collateralAsset]),
          ratioOfPrices: new BigNumber(prices[a.borrowAsset]).dividedBy(prices[a.collateralAsset]),
          ratioOfPricesDecimals: 1,
        },
        {
          id: aLenderPool.id,
          sharesHeld: new BigNumber(aLenderPool.sharesHeld),
          borrowerInterestShares: new BigNumber(aLenderPool.borrowerInterestShares),
          borrowerInterestSharesWithdrawn: new BigNumber(aLenderPool.borrowerInterestShares),
          yieldInterestWithdrawnShares: new BigNumber(aLenderPool.yieldInterestWithdrawnShares),
          borrowLimit: new BigNumber(aLenderPool.borrowLimit),
          startTime: new BigNumber(aLenderPool.startTime),
          minBorrowAmount: new BigNumber(aLenderPool.minBorrowAmount),
        },
        lenderPerPool
      );
    });
  }

  private transformToPooledCreditLine(
    data: any[],
    emulatorResult: PooledCreditLineEmulator[],
    prices: Record<string, BigNumber>
  ): PooledCreditLineDetail[] {
    return emulatorResult.map((aNew, index) => {
      const a = data[index];
      return {
        id: aNew.getId(),
        borrowerAddress: a.borrowerAddress,
        borrowLimit: { value: aNew.getBorrowLimit().toString(), decimals: this.tokenManager.getTokenDecimals(a.borrowAsset) },
        borrowRate: { value: a.borrowRate, decimals: 18 },
        idealCollateralRatio: { value: a.borrowRate, decimals: 18 },
        collateralTokens: {
          value: aNew.calculateTotalCollateralTokens().toString(),
          decimals: this.tokenManager.getTokenDecimals(a.collateralAsset),
        },
        borrowAsset: {
          name: this.tokenManager.getTokenName(a.borrowAsset),
          address: a.borrowAsset,
          logo: this.tokenManager.getLogo(a.borrowAsset),
          pricePerAssetInUSD: prices[a.borrowAsset].toString(0),
        },
        collateralAsset: {
          name: this.tokenManager.getTokenName(a.collateralAsset),
          address: a.collateralAsset,
          logo: this.tokenManager.getLogo(a.collateralAsset),
          pricePerAssetInUSD: prices[a.collateralAsset].toString(),
        },
        createdAt: a.createdAt,
        startsAt: a.startsAt,
        endsAt: a.endsAt,
        defaultsAt: a.defaultsAt,
        lenderStrategy: {
          type: this.yieldApi.getStrategy(a.lenderStrategy),
          address: a.lenderStrategy,
          displayName: this.yieldApi.getStrategyDisplayName(a.lenderStrategy),
          logo: this.yieldApi.getStrategyLogo(a.lenderStrategy),
        },
        collateralStrategy: {
          type: this.yieldApi.getStrategy(a.collateralStrategy),
          address: a.collateralStrategy,
          displayName: this.yieldApi.getStrategyDisplayName(a.collateralStrategy),
          logo: this.yieldApi.getStrategyLogo(a.collateralStrategy),
        },
        gracePenaltyRate: { value: a.gracePenaltyRate, decimals: 18 },
        status: aNew.getStatus(),
        principal: { value: aNew.getPrincipal().toString(), decimals: this.tokenManager.getTokenDecimals(a.borrowAsset) },
        totalInterestRepaid: { value: a.totalInterestRepaid, decimals: this.tokenManager.getTokenDecimals(a.borrowAsset) },
        lastPrincipalUpdateTime: a.lastPrincipalUpdateTime,
        interestAccruedTillLastPrincipalUpdate: {
          value: a.interestAccruedTillLastPrincipalUpdate,
          decimals: this.tokenManager.getTokenDecimals(a.borrowAsset),
        },
        totalLentAmount: { value: a.totalLentAmount, decimals: this.tokenManager.getTokenDecimals(a.borrowAsset) },
        currentCollateralRatio: { value: aNew.calculateCurrentCollateralRatio().toString(), decimals: 18 },
        currentDebt: { value: aNew.calculateCurrentDebt().toString(), decimals: this.tokenManager.getTokenDecimals(a.borrowAsset) },
        minBorrowAmount: { value: a.minBorrowAmount, decimals: this.tokenManager.getTokenDecimals(a.borrowAsset) },
        emulator: aNew,
      };
    });
  }

  private async transformToLenderContributionToPooledCreditLines(
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
        amountLent: { value: a.lenderBalance || '0', decimals: borrowDecimals },
        amountWithdrawn: { value: a.amountWithdrawn || '0', decimals: borrowDecimals },
        sharesWithdrawn: { value: a.sharesWithdrawn || '0', decimals: collateralDecimals },
        interestWithdrawn: { value: a.interestWithdrawn || '0', decimals: borrowDecimals },
      };
    });
  }
}

// {
//   id: a.id,
//   borrowerAddress: a.borrowerAddress,
//   borrowLimit: { value: aNew.getBorrowLimit().toString(), decimals: this.tokenManager.getTokenDecimals(a.borrowAsset) },
//   borrowRate: new BigNumber(a.borrowRate).div(new BigNumber(10).pow(16)).toFixed(2),
//   idealCollateralRatio: new BigNumber(a.idealCollateralRatio).div(new BigNumber(10).pow(16)).toFixed(2),
//   collateralTokens: {
//     value: aNew.calculateTotalCollateralTokens().toString(),
//     decimals: this.tokenManager.getTokenDecimals(a.collateralAsset),
//   },
//   borrowAsset: {
//     name: this.tokenManager.getTokenName(a.borrowAsset),
//     address: a.borrowAsset,
//     logo: this.tokenManager.getLogo(a.borrowAsset),
//     pricePerAssetInUSD: prices[a.borrowAsset],
//   },
//   collateralAsset: {
//     name: this.tokenManager.getTokenName(a.collateralAsset),
//     address: a.collateralAsset,
//     logo: this.tokenManager.getLogo(a.collateralAsset),
//     pricePerAssetInUSD: prices[a.collateralAsset],
//   },
//   createdAt: a.createdAt,
//   startsAt: a.startsAt,
//   endsAt: a.endsAt,
//   defaultsAt: a.defaultsAt,
//   lenderStrategy: {
//     type: this.yieldApi.getStrategy(a.lenderStrategy),
//     address: a.lenderStrategy,
//     displayName: this.yieldApi.getStrategyDisplayName(a.lenderStrategy),
//     logo: this.yieldApi.getStrategyLogo(a.lenderStrategy),
//   },
//   collateralStrategy: {
//     type: this.yieldApi.getStrategy(a.collateralStrategy),
//     address: a.collateralStrategy,
//     displayName: this.yieldApi.getStrategyDisplayName(a.collateralStrategy),
//     logo: this.yieldApi.getStrategyLogo(a.collateralStrategy),
//   },
//   gracePenaltyRate: new BigNumber(a.gracePenaltyRate).div(new BigNumber(10).pow(16)).toFixed(2),
//   status: aNew.getStatus(),
//   principal: { value: a.principal, decimals: this.tokenManager.getTokenDecimals(a.borrowAsset) },
//   totalInterestRepaid: { value: a.totalInterestRepaid, decimals: this.tokenManager.getTokenDecimals(a.borrowAsset) },
//   lastPrincipalUpdateTime: a.lastPrincipalUpdateTime,
//   interestAccruedTillLastPrincipalUpdate: {
//     value: a.interestAccruedTillLastPrincipalUpdate || '0',
//     decimals: this.tokenManager.getTokenDecimals(a.borrowAsset),
//   },
//   totalLentAmount: { value: a.totalLentAmount, decimals: this.tokenManager.getTokenDecimals(a.borrowAsset) },
//   currentCollateralRatio: {
//     value: aNew.calculateCurrentCollateralRatio().toString(),
//     decimals: 18,
//   },
//   currentDebt: {
//     value: await (await this.getCurrentDebtForPooledCreditLines(a.id)).toString(),
//     decimals: this.tokenManager.getTokenDecimals(a.borrowAsset),
//   },
//   minBorrowAmount: { value: a.minBorrowAmount, decimals: this.tokenManager.getTokenDecimals(a.borrowAsset) },
// };
