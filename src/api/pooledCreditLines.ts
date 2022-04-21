import { SublimeConfig } from '../types/sublimeConfig';
import { ContractTransaction, Signer } from 'ethers';

import { StrategyType, CreditLineStatus, VerifierType } from '../types/Types';
import { BigNumberish } from '@ethersproject/bignumber';
import { BigNumber } from 'bignumber.js';

import { TokenManager } from '../tokenManager';

import { Balance, Options as Overrides } from '../types/Types';
import { CreditLineEthUtils } from './utils/creditLineEthUtils';

import { PooledCreditLine } from '../wrappers/PooledCreditLine';
import { PooledCreditLine__factory } from '../wrappers/factories/PooledCreditLine__factory';

import { LenderPool } from '../wrappers/LenderPool';
import { LenderPool__factory } from '../wrappers/factories/LenderPool__factory';

/**
 * @class PooledCreditLines
 */
export class PooledCreditLineApi {
  private lenderPool: LenderPool;
  private pooledCreditLine: PooledCreditLine;

  private tokenManager: TokenManager;
  private config: SublimeConfig;
  private signer: Signer;

  constructor(signer: Signer, config: SublimeConfig, tokenManager: TokenManager) {
    this.config = config;
    this.tokenManager = tokenManager;
    this.signer = signer;

    this.lenderPool = new LenderPool__factory(this.signer).attach(config.lenderPoolAddress);
    this.pooledCreditLine = new PooledCreditLine__factory(this.signer).attach(config.pooledCreditLineAddress);
  }

  /**
   * @description Start a pooled credit line
   * @param _id
   * @param options
   * @returns
   */
  public async start(_id: string, options?: Overrides): Promise<ContractTransaction> {
    return this.lenderPool.start(_id, await this.signer.getAddress(), { ...options });
  }

  /**
   * @description Function to lend token to credit lines
   * @param _id
   * @param _amount
   * @param options
   * @returns
   */
  public async lend(_id: string, _amount: string, options?: Overrides): Promise<ContractTransaction> {
    const token = await (await this.lenderPool.pooledCLConstants(_id)).borrowAsset;
    await this.tokenManager.updateAll(token);

    const decimals: BigNumberish = this.tokenManager.getTokenDecimals(token);

    const amount = new BigNumber(_amount);
    if (amount.isNaN() || amount.isZero() || amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.lenderPool.lend(_id, amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0), { ...options });
  }

  /**
   * @description Calculate the principle withdrawable
   * @param _id
   * @param lender
   * @returns
   */
  public async calculatePrincipleWithdrawable(_id: string, lender?: string): Promise<Balance> {
    if (!lender) {
      lender = await this.signer.getAddress();
    }

    const token = await (await this.lenderPool.pooledCLConstants(_id)).borrowAsset;
    await this.tokenManager.updateAll(token);

    const decimals: BigNumberish = this.tokenManager.getTokenDecimals(token);

    const value: BigNumberish = await this.lenderPool.callStatic.calculatePrincipalWithdrawable(_id, lender);
    return { value: value.toString(), decimals };
  }

  /**
   * @description Withdraw Liquidity
   * @param _id
   * @param options
   * @returns
   */
  public async withdrawLiquidity(_id: string, options?: Overrides): Promise<ContractTransaction> {
    return this.lenderPool.withdrawLiquidity(_id, { ...options });
  }

  /**
   * @description Withdraw Interest
   * @param _id
   * @param lender
   * @param options
   * @returns
   */
  public async withdrawInterest(_id: string, lender?: string, options?: Overrides): Promise<ContractTransaction> {
    if (!lender) {
      lender = await this.signer.getAddress();
    }

    return this.lenderPool.withdrawInterest(_id, lender, { ...options });
  }

  /**
   * @description Liquidate credit line
   * @param _id
   * @param withdraw
   * @param options
   * @returns
   */
  public async liquidate(_id: string, withdraw: boolean, options?: Overrides): Promise<ContractTransaction> {
    return this.lenderPool.liquidate(_id, withdraw, { ...options });
  }

  /**
   * @description get principle
   * @param _id
   * @returns Balance
   */
  public async getPrinciple(_id: string): Promise<Balance> {
    const token = await (await this.pooledCreditLine.pooledCreditLineConstants(_id)).borrowAsset;
    await this.tokenManager.updateAll(token);

    const decimals: BigNumberish = this.tokenManager.getTokenDecimals(token);
    const value = await this.pooledCreditLine.getPrincipal(_id);

    return { value: value.toString(), decimals };
  }

  /**
   * @description Credit line status
   * @param _id
   * @returns
   */
  public async getCreditLineStatus(_id: string): Promise<CreditLineStatus> {
    const pooledCreditLineVariables = await this.pooledCreditLine.pooledCreditLineVariables(_id);
    const status = pooledCreditLineVariables.status;

    if (status == 0) {
      return CreditLineStatus.NOT_CREATED;
    } else if (status == 1) {
      const pooledCLConstants = await this.lenderPool.pooledCLConstants(_id);
      const amountLent = await this.lenderPool.totalSupply(_id);
      if (amountLent.gte(pooledCLConstants.minBorrowAmount)) {
        return CreditLineStatus.START_CALLABLE;
      } else {
        const pooledCLConstantsOfPCL = await this.pooledCreditLine.pooledCreditLineConstants(_id);
        const dateBigNumber = new BigNumber(new Date().valueOf()).div(1000);
        if (dateBigNumber.gt(pooledCLConstantsOfPCL.startsAt.toString())) {
          return CreditLineStatus.CANCELLED;
        }
      }
      return CreditLineStatus.REQUESTED;
    } else if (status == 2) {
      const pooledCLConstants = await this.pooledCreditLine.pooledCreditLineConstants(_id);
      if (
        new BigNumber(new Date().valueOf()).div(1000).gt(pooledCLConstants.endsAt.toString()) &&
        pooledCreditLineVariables.principal.gt(0)
      ) {
        return CreditLineStatus.EXPIRED;
      }

      const colRatio = await this.pooledCreditLine.callStatic.calculateCurrentCollateralRatio(_id);
      if (pooledCLConstants.idealCollateralRatio.gt(colRatio)) {
        return CreditLineStatus.LIQUIDATE_CALLABLE;
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

  /**
   * @description Calculate interest accured
   * @param _id
   * @returns
   */
  public async calculateInterestAccured(_id: string): Promise<Balance> {
    const token = await (await this.pooledCreditLine.pooledCreditLineConstants(_id)).borrowAsset;
    await this.tokenManager.updateAll(token);

    const decimals: BigNumberish = this.tokenManager.getTokenDecimals(token);
    const value = await this.pooledCreditLine.calculateInterestAccrued(_id);
    return { value: value.toString(), decimals };
  }

  /**
   * @description calculate current debt
   * @param _id
   * @returns
   */
  public async calculateCurrentDebt(_id: string): Promise<Balance> {
    const token = await (await this.pooledCreditLine.pooledCreditLineConstants(_id)).borrowAsset;
    await this.tokenManager.updateAll(token);

    const decimals: BigNumberish = this.tokenManager.getTokenDecimals(token);
    const value = await this.pooledCreditLine.calculateCurrentDebt(_id);
    return { value: value.toString(), decimals };
  }

  /**
   * @description calculate borrowable amount
   * @param _id
   * @returns
   */
  public async calculateBorrowableAmount(_id: string): Promise<Balance> {
    const token = await (await this.pooledCreditLine.pooledCreditLineConstants(_id)).borrowAsset;
    await this.tokenManager.updateAll(token);

    const decimals: BigNumberish = this.tokenManager.getTokenDecimals(token);
    const value = await this.pooledCreditLine.callStatic.calculateBorrowableAmount(_id);
    return { value: value.toString(), decimals };
  }

  public async request(
    colRatio: string,
    durationInSeconds: string,
    lenderVerifier: VerifierType,
    defaultGracePeriodInSeconds: string,
    gracePenaltyRate: string,
    collectionPeriod: string,
    minBorrowAmount: string,
    _borrowLimit: string,
    _borrowRate: string,
    collateralAsset: string,
    borrowAssetStrategy: StrategyType,
    collateralAssetStrategy: StrategyType,
    borrowAsset: string,
    borrowerVerifier: VerifierType,
    areTokensTransferable: boolean,
    options?: Overrides
  ): Promise<ContractTransaction> {
    await this.tokenManager.updateAll(borrowAsset);
    const borrowTokenDecimal = this.tokenManager.getTokenDecimals(borrowAsset);

    const collateralRatio = new BigNumber(colRatio);
    if (collateralRatio.isNaN() || collateralRatio.isNegative()) {
      throw new Error('collateralRatio should be a valid number');
    }

    const duration = new BigNumber(durationInSeconds);
    if (duration.isNaN() || duration.isZero() || duration.isNegative()) {
      throw new Error('duration should be a valid number');
    }

    const defaultGracePeriod = new BigNumber(defaultGracePeriodInSeconds);
    if (defaultGracePeriod.isNaN() || defaultGracePeriod.isZero() || defaultGracePeriod.isNegative()) {
      throw new Error('defaultGracePeriod should be a valid number');
    }

    const gpr = new BigNumber(gracePenaltyRate);
    if (gpr.isNaN() || gpr.isNegative()) {
      throw new Error('gracePenaltyRate should be a valid number');
    }

    const _collectionPeriod = new BigNumber(collectionPeriod);
    if (_collectionPeriod.isNaN() || _collectionPeriod.isZero() || _collectionPeriod.isNegative()) {
      throw new Error('_collectionPeriod should be a valid number');
    }

    const borrowLimit = new BigNumber(_borrowLimit);
    if (borrowLimit.isNaN() || borrowLimit.isZero() || borrowLimit.isNegative()) {
      throw new Error('borrowLimit should be a valid number');
    }

    const borrowRate = new BigNumber(_borrowRate);
    if (borrowRate.isNaN() || borrowRate.isNegative()) {
      throw new Error('borrowRate should be a valid number');
    }

    const _minBorrowAmount = new BigNumber(minBorrowAmount);
    if (_minBorrowAmount.isNaN() || _minBorrowAmount.isZero() || _minBorrowAmount.isNegative()) {
      throw new Error('_minBorrowAmount should be a valid number');
    }

    let lenderVerifierAddress: string;
    if (lenderVerifier === VerifierType.AdminVerifier) {
      lenderVerifierAddress = this.config.adminVerifierContractAddress;
    } else if (lenderVerifier === VerifierType.TwitterVerifier) {
      lenderVerifierAddress = this.config.twitterVerifierContractAddress;
    } else {
      throw new Error('Unsupported verifier');
    }

    let collateralStrategyAddress: string;
    if (collateralAssetStrategy === StrategyType.NoYield) {
      collateralStrategyAddress = this.config.noStrategyAddress;
    } else if (collateralAssetStrategy === StrategyType.CompounYield) {
      collateralStrategyAddress = this.config.compoundStrategyContractAddress;
    } else {
      throw new Error('Unsupported strategy');
    }

    let borrowerStrategyAddress: string;
    if (borrowAssetStrategy == StrategyType.NoYield) {
      borrowerStrategyAddress = this.config.noStrategyAddress;
    } else if (borrowAssetStrategy == StrategyType.CompounYield) {
      borrowerStrategyAddress = this.config.compoundStrategyContractAddress;
    } else {
      throw new Error('Unsupported strategy');
    }

    let borrowerVerifierAddress: string;
    if (borrowerVerifier == VerifierType.AdminVerifier) {
      borrowerVerifierAddress = this.config.adminVerifierContractAddress;
    } else if (borrowerVerifier == VerifierType.TwitterVerifier) {
      borrowerVerifierAddress = this.config.twitterVerifierContractAddress;
    } else {
      throw new Error('Unsupported verifier');
    }

    return this.pooledCreditLine.request(
      {
        collateralRatio: collateralRatio.multipliedBy(new BigNumber(10).pow(16)).toFixed(0),
        duration: duration.toFixed(0),
        lenderVerifier: lenderVerifierAddress,
        defaultGracePeriod: defaultGracePeriod.toFixed(0),
        gracePenaltyRate: gpr.multipliedBy(new BigNumber(10).pow(16)).toFixed(0),
        collectionPeriod: _collectionPeriod.toFixed(0),
        minBorrowAmount: _minBorrowAmount.multipliedBy(new BigNumber(10).pow(borrowTokenDecimal)).toFixed(0),
        borrowLimit: borrowLimit.multipliedBy(new BigNumber(10).pow(borrowTokenDecimal)).toFixed(0),
        borrowRate: borrowRate.multipliedBy(new BigNumber(10).pow(16)).toFixed(0),
        collateralAsset,
        borrowAssetStrategy: borrowerStrategyAddress,
        collateralAssetStrategy: collateralStrategyAddress,
        borrowAsset,
        borrowerVerifier: borrowerVerifierAddress,
        areTokensTransferable,
      },
      { ...options }
    );
  }

  /**
   * @description Deposit Collateral
   * @param _id
   * @param _amount
   * @param _fromSavingsAccount
   * @param options
   * @returns
   */
  public async depositCollateral(
    _id: string,
    _amount: string,
    _fromSavingsAccount: boolean,
    options?: Overrides
  ): Promise<ContractTransaction> {
    const token = await (await this.pooledCreditLine.pooledCreditLineConstants(_id)).collateralAsset;
    await this.tokenManager.updateAll(token);

    const decimals: BigNumberish = this.tokenManager.getTokenDecimals(token);

    const amount = new BigNumber(_amount);
    if (amount.isNaN() || amount.isZero() || amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }
    return this.pooledCreditLine.depositCollateral(
      _id,
      amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0),
      _fromSavingsAccount,
      { ...options }
    );
  }

  /**
   * @description Borrow
   * @param _id
   * @param _amount
   * @param options
   * @returns
   */
  public async borrow(_id: string, _amount: string, options?: Overrides): Promise<ContractTransaction> {
    const token = await (await this.lenderPool.pooledCLConstants(_id)).borrowAsset;
    await this.tokenManager.updateAll(token);

    const decimals: BigNumberish = this.tokenManager.getTokenDecimals(token);

    const amount = new BigNumber(_amount);
    if (amount.isNaN() || amount.isZero() || amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }
    return this.pooledCreditLine.borrow(_id, amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0), { ...options });
  }

  /**
   * @description Repay
   * @param _id '
   * @param _amount
   * @param options
   * @returns
   */
  public async repay(_id: string, _amount: string, options?: Overrides): Promise<ContractTransaction> {
    const token = await (await this.lenderPool.pooledCLConstants(_id)).borrowAsset;
    await this.tokenManager.updateAll(token);

    const decimals: BigNumberish = this.tokenManager.getTokenDecimals(token);

    const amount = new BigNumber(_amount);
    if (amount.isNaN() || amount.isZero() || amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }
    return this.pooledCreditLine.repay(_id, amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0), { ...options });
  }

  /**
   * @description Close credit lines
   * @param _id
   * @param options
   * @returns
   */
  public async close(_id: string, options?: Overrides): Promise<ContractTransaction> {
    return this.pooledCreditLine.close(_id, { ...options });
  }

  /**
   * @description Cancels the credit lines
   * @param _id ID of the pooled credit line
   * @param options
   * @returns
   */
  public async cancel(_id: string, options?: Overrides): Promise<ContractTransaction> {
    return this.pooledCreditLine.cancelRequest(_id, { ...options });
  }

  /**
   * @description function withdraw partial collateral
   * @param _id
   * @param amount
   * @param toSavingsAccount
   * @param options
   */
  public async withdrawPartialCollateral(
    _id: string,
    _amount: string,
    toSavingsAccount: boolean,
    options?: Overrides
  ): Promise<ContractTransaction> {
    const token = await (await this.lenderPool.pooledCLConstants(_id)).collateralAsset;
    await this.tokenManager.updateAll(token);

    const decimals: BigNumberish = this.tokenManager.getTokenDecimals(token);

    const amount = new BigNumber(_amount);
    if (amount.isNaN() || amount.isZero() || amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.pooledCreditLine['withdrawCollateral(uint256,uint256,bool)'](
      _id,
      amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0),
      toSavingsAccount,
      { ...options }
    );
  }

  /**
   * @description calculate current collateral ratio
   * @param _id
   * @returns
   */
  public async calculateCurrentCollateralRatio(_id: string): Promise<Balance> {
    const value = await this.pooledCreditLine.callStatic.calculateCurrentCollateralRatio(_id);
    return { value: value.toString(), decimals: 18 };
  }

  /**
   * @description Calculate Total Collateral tokens
   * @param _id
   * @returns
   */
  public async calculateTokenCollateralTokens(_id: string): Promise<Balance> {
    const value = await this.pooledCreditLine.callStatic.calculateTotalCollateralTokens(_id);

    const token = await (await this.pooledCreditLine.pooledCreditLineConstants(_id)).collateralAsset;
    await this.tokenManager.updateAll(token);
    return { value: value.toString(), decimals: this.tokenManager.getTokenDecimals(token) };
  }

  /**
   * @description Withdraw Collateral
   * @param _id
   * @param _amount
   * @param toSavingsAccount
   * @param options
   * @returns
   */
  public async withdrawCollateral(
    _id: string,
    _amount: string,
    toSavingsAccount: boolean,
    options?: Overrides
  ): Promise<ContractTransaction> {
    const token = await (await this.pooledCreditLine.pooledCreditLineConstants(_id)).collateralAsset;
    await this.tokenManager.updateAll(token);

    const decimals: BigNumberish = this.tokenManager.getTokenDecimals(token);

    const amount = new BigNumber(_amount);
    if (amount.isNaN() || amount.isZero() || amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.pooledCreditLine['withdrawCollateral(uint256,uint256,bool)'](
      _id,
      amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0),
      toSavingsAccount,
      { ...options }
    );
  }

  /**
   * @description Withdraw All Collateral
   * @param _id
   * @param toSavingsAccount
   * @param options
   * @returns
   */
  public async withdrawAllCollateral(_id: string, toSavingsAccount: boolean, options?: Overrides): Promise<ContractTransaction> {
    return this.pooledCreditLine['withdrawCollateral(uint256,bool)'](_id, toSavingsAccount, { ...options });
  }
}
