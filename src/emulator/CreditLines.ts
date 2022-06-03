import { BigNumber } from 'bignumber.js';
import { CreditLineStatus } from '../types/Types';
import { EmulatorHelper } from './Helpers';

interface CreditLineState {
  id: string;
  collateralShareInStrategy: BigNumber;
  principal: BigNumber;
  lastPrincipalUpdateTime: BigNumber;
  borrowRate: BigNumber;
  interestAccruedTillLastPrincipalUpdate: BigNumber;
  totalInterestRepaid: BigNumber;
  idealCollateralRatio: BigNumber;
  creditLineStatus: CreditLineStatus;
  borrowLimit: BigNumber;
}

interface CreditLineGlobals {
  liquidatorRewardFraction: BigNumber;
}

interface CreditLineExternalData {
  collateralPerStrategyToken: BigNumber;
  ratioOfPrices: BigNumber;
  ratioOfPricesDecimals: number;
}

const SCALING_FACTOR = new BigNumber(10).pow(18);
const YEAR_IN_SECONDS = new BigNumber(86400).multipliedBy(365);
const UINT256_MAX = new BigNumber('2').pow(256).minus(1);

export class CreditLineEmulator extends EmulatorHelper {
  creditLineState: CreditLineState;
  externalData: CreditLineExternalData;
  globals: CreditLineGlobals;

  constructor(creditLineState: CreditLineState, externalData: CreditLineExternalData, globals) {
    super();
    this.creditLineState = creditLineState;
    this.externalData = externalData;
    this.globals = globals;
  }

  public withdrawableCollateral(): BigNumber {
    const totalCollateralTokens = this._calculateTotalCollateralTokens();
    const _currentDebt = this.calculateCurrentDebt();
    const _collateralNeeded = _currentDebt
      .multipliedBy(this.creditLineState.idealCollateralRatio)
      .multipliedBy(new BigNumber(10).pow(this.externalData.ratioOfPricesDecimals))
      .dividedBy(this.externalData.ratioOfPrices)
      .dividedBy(SCALING_FACTOR);
    if (_collateralNeeded.gt(totalCollateralTokens)) {
      return new BigNumber(0);
    }

    return totalCollateralTokens.minus(_collateralNeeded);
  }

  private _calculateTotalCollateralTokens(): BigNumber {
    return this.externalData.collateralPerStrategyToken.multipliedBy(this.creditLineState.collateralShareInStrategy);
  }

  public calculateCurrentDebt(): BigNumber {
    const _interestAccrued = this.calculateInterestAccrued();
    return this.creditLineState.principal.plus(_interestAccrued).minus(this.creditLineState.totalInterestRepaid);
  }

  public calculateInterestAccrued(): BigNumber {
    if (this.creditLineState.principal.eq(0) && this.creditLineState.lastPrincipalUpdateTime.eq(0)) {
      return new BigNumber(0);
    }
    const _timeElapsed = this.now().minus(this.creditLineState.lastPrincipalUpdateTime);
    const _interestAccrued = this.calculateInterest(this.creditLineState.principal, this.creditLineState.borrowRate, _timeElapsed);
    return _interestAccrued.minus(this.creditLineState.interestAccruedTillLastPrincipalUpdate);
  }

  public calculateInterest(principal: BigNumber, borrowRate: BigNumber, timeElapsed: BigNumber): BigNumber {
    return principal.multipliedBy(borrowRate).multipliedBy(timeElapsed).div(SCALING_FACTOR).div(YEAR_IN_SECONDS);
  }

  public calculateBorrowableAmount(): BigNumber {
    if (this.creditLineState.creditLineStatus != CreditLineStatus.ACTIVE) {
      throw new Error('CL:CBA1');
    }

    const _collateralRatio = this.creditLineState.idealCollateralRatio;
    let _maxPossible = UINT256_MAX;

    if (_collateralRatio.gt(0)) {
      const _totalCollateralToken = this._calculateTotalCollateralTokens();
      _maxPossible = _totalCollateralToken
        .multipliedBy(this.externalData.ratioOfPrices)
        .dividedBy(_collateralRatio)
        .multipliedBy(SCALING_FACTOR)
        .div(new BigNumber(10).pow(this.externalData.ratioOfPricesDecimals));
    }

    const _currentDebt = this.calculateCurrentDebt();
    const _borrowLimit = this.creditLineState.borrowLimit;
    const _principal = this.creditLineState.principal;

    if (_maxPossible.lt(_currentDebt)) {
      return new BigNumber(0);
    }

    return this.min(_borrowLimit.minus(_principal), _maxPossible.minus(_currentDebt));
  }

  public borrowTokensToLiquidate(): BigNumber {
    const _currentDebt = this.calculateCurrentDebt();
    let _collateralToLiquidate = this._equivalentCollateral(_currentDebt);
    const _totalCollateralTokens = this._calculateTotalCollateralTokens();

    if (_collateralToLiquidate.gt(_totalCollateralTokens)) {
      _collateralToLiquidate = _totalCollateralTokens;
    }

    return this._borrowTokensToLiquidate(_collateralToLiquidate);
  }

  private _borrowTokensToLiquidate(_collateralTokens: BigNumber): BigNumber {
    return _collateralTokens
      .multipliedBy(SCALING_FACTOR.minus(this.globals.liquidatorRewardFraction))
      .div(SCALING_FACTOR)
      .multipliedBy(this.externalData.ratioOfPrices)
      .div(new BigNumber(10).pow(this.externalData.ratioOfPricesDecimals));
  }

  private _equivalentCollateral(_borrowTokens: BigNumber): BigNumber {
    return _borrowTokens.multipliedBy(new BigNumber(10).pow(this.externalData.ratioOfPricesDecimals)).div(this.externalData.ratioOfPrices);
  }

  //to-do
  //   public getCreditLineStatus() : CreditLineStatus{

  //   }
}
