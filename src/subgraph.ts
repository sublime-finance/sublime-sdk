import {
  CreditLineDetail,
  CreditLinesOverview,
  DashboardOverview,
  PoolDetail,
  ProfileOverview,
  PoolLender,
  SavingsAccountUserDetails,
  SavingAccountUserDetailDisplay,
  SavingsAccountStrategyBalanceDisplay,
  CreditLineOperation,
  TwitterDetails,
  PooledCreditLineDetail,
  PooledCreditLineOperation,
  LenderPoolDetail,
  LenderPerPoolDetail,
  LenderContributionToPooledCreditLines,
} from './types/Types';
import {
  getAllPools,
  getPool,
  getAllPoolsByPoolType,
  getAllPoolsByBorrower,
  getAllPoolsByLender,
  getAllPoolsByBorrowerByType,
  getAllPoolsByLenderByType,
  getConfirmedCreditLinesOfBorrower,
  getConfirmedCreditLinesOfLender,
  getPendingCreditLinesRequestedByBorrower,
  getPendingCreditLinesRequestedToBorrower,
  getPendingCreditLinesRequestedToLender,
  getPendingCreditlinesRequestedByLender,
  getCreditLineTimeline,
  getCreditLine,
  getBalances,
  getAllowances,
  getTwitterId,
  getPooledCreditLinesOfBorrower,
  getAllPooledCreditLines,
  getPooledCreditLinesOfLender,
  getPooledCreditLineTimeline,
  getAllCreditLinesFromSubgraph,
  getPooledCreditLineById,
  getLenderPerPool,
} from './queries';

import { Signer } from '@ethersproject/abstract-signer';

import { BigNumber } from 'bignumber.js';
import { sha256 } from '@ethersproject/sha2';

import { TokenManager } from './tokenManager';
import { YieldAndStrategyApi } from './api/yieldAndStrategy';

import { CreditLine } from './wrappers/CreditLine';
import { CreditLine__factory } from './wrappers/factories/CreditLine__factory';
import { SublimeConfig } from './types/sublimeConfig';
import { ICToken, ICToken__factory, IYield, IYield__factory } from './wrappers';
import { zeroAddress } from './config/constants';

/**
 * @class SublimeSubgraph
 */
export class SublimeSubgraph {
  /**
   * @description subgraph url for fetching the sublime data
   */
  private subgraphUrl: string;

  /**
   * @description signer used to sign
   */
  private signer: Signer;

  /**
   * @description instance of token manager class that caches and retreives token data
   */
  private tokenManager: TokenManager;

  /**
   * @description instance of credit line contract
   */
  private creditLineContract: CreditLine;

  private yieldApi: YieldAndStrategyApi;
  /**
   * @description sublime config. (Contains all addresses relevant to sublime ecosystem)
   */
  private sublimeAddresses: SublimeConfig;

  constructor(url: string, signer: Signer, tokenManager: TokenManager, config: SublimeConfig) {
    this.creditLineContract = new CreditLine__factory(signer).attach(config.creditLineContractAddress);
    this.subgraphUrl = url;
    this.signer = signer;
    this.tokenManager = tokenManager;
    this.sublimeAddresses = config;
    this.yieldApi = new YieldAndStrategyApi(this.signer, config, this.tokenManager);
  }

  /**
   *
   * @returns Array of all pools created on sublime
   */
  async getPools(): Promise<PoolDetail[]> {
    const result = await getAllPools(this.subgraphUrl);
    return this.transformToPoolDetail(result);
  }

  /**
   *
   * @param poolType (possible types of pools include: ACTIVE, CLOSED, REQUESTED, LIQUIDATED)
   * @returns Array of specific pool types
   */
  async getAllPoolsByPoolType(poolType: string): Promise<PoolDetail[]> {
    const result = await getAllPoolsByPoolType(this.subgraphUrl, poolType);
    return this.transformToPoolDetail(result);
  }

  /**
   * @param poolId
   * @returns pool data if the pool exists, else null
   */
  async getPool(poolId: string): Promise<PoolDetail> {
    const result = await getPool(this.subgraphUrl, poolId);
    const poolDetails: PoolDetail[] = await this.transformToPoolDetail(result);
    return poolDetails[0];
  }

  /**
   * @param borrower: address of the borrower
   * @returns Array of pools for the corresponding borrower
   */
  async getPoolByBorrower(borrower: string): Promise<PoolDetail[]> {
    const result = await getAllPoolsByBorrower(this.subgraphUrl, borrower);
    return this.transformToPoolDetail(result);
  }

  /**
   * @param lender: address of the lender
   * @returns Array of pool for the lender
   */
  async getPoolByLender(lender: string): Promise<PoolDetail[]> {
    const result = await getAllPoolsByLender(this.subgraphUrl, lender);
    return this.transformToPoolDetail(result);
  }

  /**
   * @param lender: address of the lender
   * @param poolType: type of the pool
   * @returns Array of pool
   */
  async getPoolByLenderByType(lender: string, poolType: string): Promise<PoolDetail[]> {
    const result = await getAllPoolsByLenderByType(this.subgraphUrl, lender, poolType);
    return this.transformToPoolDetail(result);
  }

  /**
   * @param borrower: address of the borrower
   * @param poolType: type of the pool
   * @returns Array of pool
   */
  async getPoolByBorrowerByType(borrower: string, poolType: string): Promise<PoolDetail[]> {
    const result = await getAllPoolsByBorrowerByType(this.subgraphUrl, borrower, poolType);
    return this.transformToPoolDetail(result);
  }

  /**
   * @param poolAddress
   * @returns All the lenders of a given pool
   */
  async getAllLendersOfPool(): Promise<PoolLender[]> {
    const totalNumberOfLenders = 1 + this.getRandomInt(100);
    const lenders: PoolLender[] = [];
    const date = new Date().valueOf();
    const poolToken = sha256(Buffer.from(date + 'poolToken')).slice(0, 40);
    const suppliedToken = sha256(Buffer.from(date + 'suppliedToken')).slice(0, 40);

    for (let index = 0; index < totalNumberOfLenders; index++) {
      lenders.push({
        address: sha256(Buffer.from(date + '' + index)).slice(0, 40),
        shareInPool: new BigNumber(this.getRandomInt(3000)).div(100).toFixed(2),
        suppliedAmount: { value: new BigNumber(this.getRandomInt(100000000)).div(100).toFixed(2), decimals: 2 },
        poolToken: {
          address: poolToken,
          name: 'Pending...',
          pricePerAssetInUSD: '00.00',
          logo: 'Logo pending ...',
        },
        suppliedToken: {
          address: suppliedToken,
          name: 'Pending...',
          pricePerAssetInUSD: '00.00',
          logo: 'Logo pending ...',
        },
      });
    }
    return lenders;
  }

  /**
   * @description Returns pooled credit lines in random order
   * @param count
   * @param skip
   * @returns
   */
  async getAllPooledCreditLines(count: number = 999, skip: number = 0): Promise<PooledCreditLineDetail[]> {
    const result = await getAllPooledCreditLines(this.subgraphUrl, count, skip);
    return this.transformToPooledCreditLine(result);
  }

  /**
   * @description Returns pooled credit lines in order created latest. Preferable don't use
   * @returns
   */
  async getAllPooledCreditLinesCreatedLatest(): Promise<PooledCreditLineDetail[]> {
    const pooledCreditLines: PooledCreditLineDetail[] = [];
    const count: number = 999;
    let skip: number = 0;

    for (;;) {
      const lines = await this.getAllPooledCreditLines(count, skip);
      if (lines.length == 0) {
        break;
      }
      pooledCreditLines.push(...lines);
      skip = skip + count;
    }
    return pooledCreditLines.sort((a, b) => new BigNumber(b.id).minus(a.id).toNumber());
  }

  async getAllPooledCreditLinesLenderCanLendTo(lender?: string): Promise<PooledCreditLineDetail[]> {
    let lines = await this.getAllPooledCreditLinesCreatedLatest();
    if (!lender) {
      lender = await this.signer.getAddress();
    }
    lender = lender.toLowerCase();
    lines = lines.filter((a) => a.borrowerAddress != lender);
    lines = lines.filter((a) => a.status === 'ACTIVE');
    return lines;
  }

  async getPooledCreditLineById(id: number): Promise<PooledCreditLineDetail[]> {
    const result = await getPooledCreditLineById(this.subgraphUrl, id);
    return this.transformToPooledCreditLine(result);
  }

  async getAllPooledCreditLinesOfBorrower(address: string): Promise<PooledCreditLineDetail[]> {
    const result = await getPooledCreditLinesOfBorrower(this.subgraphUrl, address);
    return this.transformToPooledCreditLine(result);
  }

  async getAllPooledCreditLinesOfLender(lender: string): Promise<[PooledCreditLineDetail[], LenderContributionToPooledCreditLines[]]> {
    const [result, contributionsData] = await getPooledCreditLinesOfLender(this.subgraphUrl, lender);
    const pooledCreditLines = await this.transformToPooledCreditLine(result);
    const contributions = await this.transformToLenderContributionToPooledCreditLines(pooledCreditLines, contributionsData);
    return [pooledCreditLines, contributions];
  }

  async getAllPooledCreditLinesOfUser(user: string): Promise<PooledCreditLineDetail[]> {
    return [...(await this.getAllPooledCreditLinesOfBorrower(user)), ...(await this.getAllPooledCreditLinesOfBorrower(user))];
  }

  async getPooledCreditLineTimeline(pooledCreditLineId: string): Promise<PooledCreditLineOperation[]> {
    const result = await getPooledCreditLineTimeline(this.subgraphUrl, pooledCreditLineId);
    return this.transformToPooledCreditLineOperation(result);
  }

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

    return data.map((a) => {
      return {
        id: a.id,
        startTime: a.startTime,
        borrowAsset: a.borrowAsset,
        collateralAsset: a.collateralAsset,
        borrowLimit: { value: a.borrowLimit, decimals: this.tokenManager.getTokenDecimals(a.borrowAsset) },
        minBorrowAmount: { value: a.minBorrowAmount, decimals: this.tokenManager.getTokenDecimals(a.borrowAsset) },
        borrowAssetStrategy: a.borrowAssetStrategy,
        sharesHeld: { value: a.sharesHeld, decimals: this.tokenManager.getTokenDecimals(a.collateralAsset) },
        borrowerInterestShares: { value: a.borrowerInterestShares, decimals: this.tokenManager.getTokenDecimals(a.collateralAsset) },
        yieldInterestWithdrawnShares: {
          value: a.yieldInterestWithdrawnShares,
          decimals: this.tokenManager.getTokenDecimals(a.collateralAsset),
        },
        collateralHeld: { value: a.collateralHeld, decimals: this.tokenManager.getTokenDecimals(a.collateralAsset) },
        areTokensTransferable: a.areTokensTransferable,
        verifier: a.verifier,
        lenders: this.transformToLenderPerPoolDetail(a.lender, this.tokenManager.getTokenDecimals(a.collateralAsset)),
      };
    });
  }

  private transformToLenderPerPoolDetail(data: any[], collateralDecimal: number): LenderPerPoolDetail[] {
    return data.map((a) => {
      return {
        lenderAddress: a.lenderAddress,
        amountLent: { value: a.amountLent, decimals: collateralDecimal },
        amountWithdrawn: { value: a.amountWithdrawn, decimals: collateralDecimal },
        sharesWithdrawn: { value: a.sharesWithdrawn, decimals: collateralDecimal },
        strategy: a.strategy,
      };
    });
  }

  private async transformToPooledCreditLineOperation(data: any[]): Promise<PooledCreditLineOperation[]> {
    return data.map((a) => {
      return {
        pooledCreditLineOperation: a.pooledCreditLineOperation,
        timestamp: a.timestamp,
        amount: a.amount,
        strategy: a.strategy,
      };
    });
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

    return data.map((a) => {
      return {
        id: a.id,
        borrowerAddress: a.borrowerAddress,
        borrowLimit: { value: a.borrowLimit, decimals: this.tokenManager.getTokenDecimals(a.borrowAsset) },
        borrowRate: new BigNumber(a.borrowRate).div(new BigNumber(10).pow(16)).toFixed(2),
        idealCollateralRatio: new BigNumber(a.idealCollateralRatio).div(new BigNumber(10).pow(16)).toFixed(2),
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
        lenderStrategy: a.lenderStrategy,
        collateralStrategy: a.collateralStrategy,
        gracePenaltyRate: new BigNumber(a.gracePenaltyRate).div(new BigNumber(10).pow(16)).toFixed(2),
        status: a.status,
        principal: { value: a.principal, decimals: this.tokenManager.getTokenDecimals(a.borrowAsset) },
        totalInterestRepaid: { value: a.totalInterestRepaid, decimals: this.tokenManager.getTokenDecimals(a.borrowAsset) },
        lastPrincipalUpdateTime: a.lastPrincipalUpdateTime,
        interestAccruedTillLastPrincipalUpdate: a.interestAccruedTillLastPrincipalUpdate,
      };
    });
  }

  private async calculateTotalCollateralTokens(creditlineId: string): Promise<BigNumber> {
    let amount = new BigNumber(0);
    try {
      amount = new BigNumber(
        await (await this.creditLineContract.connect(this.signer).callStatic.calculateTotalCollateralTokens(creditlineId)).toString()
      );
    } catch (ex) {}
    return amount;
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

    const creditLineTotalCollateralTokens = {};

    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      creditLineTotalCollateralTokens[element.id] = await (await this.calculateTotalCollateralTokens(element.id)).toString();
      // console.log({tc: creditLineTotalCollateralTokens[element.id], id: element.id})
    }

    const creditLineDetails: Promise<CreditLineDetail>[] = data.map(async (a) => {
      let interestAccrued: BigNumber = new BigNumber(0);
      let currentDebt: BigNumber = new BigNumber(0);
      let collateralRatio: BigNumber = new BigNumber(0);

      if (a.lastPrincipalUpdateTime != 0) {
        const timeElapsed: number = Date.now() / 1000 - a.lastPrincipalUpdateTime;
        interestAccrued = new BigNumber(a.principal)
          .multipliedBy(new BigNumber(a.borrowRate))
          .times(timeElapsed)
          .div(new BigNumber(10).pow(18))
          .div(24 * 60 * 60 * 365);

        currentDebt = new BigNumber(a.principal).plus(interestAccrued);

        const priceOfCollateral = new BigNumber(creditLineTotalCollateralTokens[a.id])
          .dividedBy(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(a.collateralAsset)))
          .multipliedBy(await this.tokenManager.getPricePerAsset(a.collateralAsset));

        const priceOfDebt = new BigNumber(currentDebt)
          .dividedBy(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(a.borrowAsset)))
          .multipliedBy(await this.tokenManager.getPricePerAsset(a.borrowAsset));

        collateralRatio = priceOfCollateral.multipliedBy(new BigNumber(10).pow(18)).dividedBy(priceOfDebt);
      }

      return {
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
      };
    });
    return Promise.all(creditLineDetails);
  }

  /**
   * @param data
   * @@description transforms the data received from the subgraph to pool detail
   */
  private async transformToPoolDetail(data: any[]): Promise<PoolDetail[]> {
    const borrowTokens: string[] = data.map((a) => a.collateralAsset);
    const collateralTokens: string[] = data.map((a) => a.borrowAsset);
    const allTokens = [...borrowTokens, ...collateralTokens].filter((value, index, array) => array.indexOf(value) === index);

    for (let index = 0; index < allTokens.length; index++) {
      const element = allTokens[index];
      await this.tokenManager.updateAll(element);
    }
    const transformedData: Promise<PoolDetail>[] = data.map(async (a) => {
      return {
        address: a.id,
        poolType: a.loanStatus,
        borrowedAmount: {
          value: new BigNumber(a.borrowAmountRequested).toFixed(0),
          decimals: this.tokenManager.getTokenDecimals(a.borrowAsset),
        },
        lentAmount: { value: new BigNumber(a.amountBorrowed).toFixed(0), decimals: this.tokenManager.getTokenDecimals(a.collateralAsset) },
        borrowRate: new BigNumber(a.borrowRate).div(new BigNumber(10).pow(16)).toFixed(2),
        nextPayment: new BigNumber(a.nextPaymentDeadline).toString(),
        repaymentProgress: new BigNumber(this.getRandomInt(10000)).div(100).toFixed(2),
        borrowAsset: {
          address: a.borrowAsset,
          name: this.tokenManager.getTokenName(a.borrowAsset),
          pricePerAssetInUSD: (await this.tokenManager.getPricePerAsset(a.borrowAsset)).toString(),
          logo: this.tokenManager.getLogo(a.borrowAsset),
        },
        collateralAsset: {
          address: a.collateralAsset,
          name: this.tokenManager.getTokenName(a.collateralAsset),
          pricePerAssetInUSD: (await this.tokenManager.getPricePerAsset(a.collateralAsset)).toString(),
          logo: this.tokenManager.getLogo(a.collateralAsset),
        },
        estimatedEndDate: new BigNumber(this.getRandomInt(1000000)).multipliedBy(new BigNumber(10).pow(4)).toString(),
        lockedCollateral: new BigNumber(this.getRandomInt(10000)).div(100).toFixed(2),
        collectionProgress: new BigNumber(this.getRandomInt(100)).toFixed(2),
        lent: { value: new BigNumber(this.getRandomInt(1000000)).toFixed(0), decimals: 2 },
        profit: { value: new BigNumber(this.getRandomInt(100000)).toFixed(2), decimals: 2 },
        endedOn: new BigNumber(this.getRandomInt(1000000)).multipliedBy(1000).toString(),
      };
    });
    // console.log({transformedData});
    return Promise.all(transformedData);
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
   * @param address: address of the user to query
   * @description Return the dashboard view type for a user
   */
  async getDashboardOverview(address: string): Promise<DashboardOverview> {
    return {
      totalBorrowedAmount: { value: new BigNumber(this.getRandomInt(100000000)).div(100).toFixed(2), decimals: 2 },
      totalLentAmount: { value: new BigNumber(this.getRandomInt(10000000)).div(100).toFixed(2), decimals: 2 },
      totalBorrowRate: new BigNumber(this.getRandomInt(1000)).div(100).toFixed(2),
      totalLentRate: new BigNumber(this.getRandomInt(1000)).div(100).toFixed(2),
    };
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
   * @param address: address of the user to query
   * @description Return the profiel overview of the user
   */
  async getProfileOverview(address: string): Promise<ProfileOverview> {
    const pools = await this.getPoolByBorrower(address);
    const poolsCreated = pools.length;
    const activePools = pools.filter((a) => a.poolType === 'Active').length;
    const timesDefaulted = pools.filter((a) => a.poolType === 'Defaulted').length;
    const totalAmountInBorrow = new BigNumber(this.getRandomInt(100000000)).div(100).toFixed(2);

    return {
      poolsCreated: poolsCreated.toString(),
      activePools: activePools.toString(),
      timesDefaulted: timesDefaulted.toString(),
      totalAmountInBorrow,
    };
  }

  /**
   * @description use to fetch all the credit lines in the system
   * @description don't use in production. It will be a 😰 (only for debugging)
   * @param count: number of credit lines to query
   * @param skip: number to credit lines to skip
   * @returns
   */
  async getAllCreditLines(count: number = 999, skip: number = 0): Promise<CreditLineDetail[]> {
    const result = await getAllCreditLinesFromSubgraph(this.subgraphUrl, count, skip);
    return await this.transformToCreditLine(result);
  }

  /**
   * @param borrower: address of the borrower
   * @param count: number of credit lines to query
   * @param skip: number to credit lines to skip
   * @description Returns the confirmed credit lines of a borrower
   */
  async getConfirmedCreditLinesOfBorrower(borrower: string, count: number = 999, skip: number = 0): Promise<CreditLineDetail[]> {
    const result = await getConfirmedCreditLinesOfBorrower(this.subgraphUrl, borrower, count, skip);
    return await this.transformToCreditLine(result);
  }

  /**
   * @param lender: address of the lender
   * @param count: number of credit lines to query
   * @param skip: number to credit lines to skip
   * @description Returns the confirmed credit lines of a lender
   */
  async getConfirmedCreditLinesOfLender(lender: string, count: number, skip: number): Promise<CreditLineDetail[]> {
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

  async getAllowances(): Promise<any[]> {
    const result = await getAllowances(this.subgraphUrl, await this.signer.getAddress(), this.sublimeAddresses.creditLineContractAddress);
    return result;
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
        strategy: a.strategy,
        timestamp: a.timestamp,
        id: a.id,
      };
    });
    return operations;
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
        amountLent: { value: a.amountLent || '0', decimals: borrowDecimals },
        amountWithdrawn: { value: a.amountWithdrawn || '0', decimals: borrowDecimals },
        sharesWithdrawn: { value: a.sharesWithdrawn || '0', decimals: collateralDecimals },
        interestWithdrawn: { value: a.interestWithdrawn || '0', decimals: borrowDecimals },
      };
    });
  }

  /**
   * @param max
   * @description Function to generate a random decimals in range (0, max)
   */
  private getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  /**
   *
   * @param address Address of the user to fetch
   * @returns
   */
  async getVerifiedTwitterId(address: string): Promise<TwitterDetails[]> {
    const addr = address.toLocaleLowerCase();
    const result = await getTwitterId(this.subgraphUrl, addr);
    return [...result].map((a) => {
      return {
        id: a.id,
        metadata: a.metadata,
      };
    });
  }
}
