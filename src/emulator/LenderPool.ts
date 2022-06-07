import { BigNumber } from 'bignumber.js';
import {
  CreditLineStatus,
  LenderPoolState,
  DataFromPooledCreditLines,
  LenderPoolExternalData,
  LenderPerPool,
  LenderPerPoolPrincipalWithdrawable,
} from '../types/Types';
import { EmulatorHelper } from './Helpers';

export class LenderPoolEmulator extends EmulatorHelper {
  private lenderPoolState: LenderPoolState;
  private lenderPoolExternalData: LenderPoolExternalData;
  private dataFromPooledCreditLines: DataFromPooledCreditLines;

  private lenderData: Record<string, BigNumber> = {};
  private lenderPerPool: LenderPerPool[];

  private totalSupply: BigNumber;
  constructor(
    lenderPoolState: LenderPoolState,
    lenderPoolExternalData: LenderPoolExternalData,
    dataFromPooledCreditLines: DataFromPooledCreditLines,
    lendersPerPool: LenderPerPool[]
  ) {
    super();
    this.lenderPoolState = lenderPoolState;
    this.lenderPoolExternalData = lenderPoolExternalData;
    this.dataFromPooledCreditLines = dataFromPooledCreditLines;
    this.lenderPerPool = lendersPerPool;
    this.totalSupply = new BigNumber(0);

    for (let index = 0; index < lendersPerPool.length; index++) {
      const element = lendersPerPool[index];
      this.lenderData[element.lenderAddress] = element.lenderBalance;
      this.totalSupply = this.totalSupply.plus(element.lenderBalance);
    }
  }

  public getLenderBalance(lenderAddress: string): BigNumber {
    if (this.lenderData[lenderAddress]) {
      return this.lenderData[lenderAddress];
    } else {
      return new BigNumber(0);
    }
  }

  public getLenderInterest(
    lenderBalance: BigNumber,
    borrowerInterestSharesWithdrawnByLender: BigNumber,
    yieldInterestSharesWithdrawnByLender: BigNumber
  ): BigNumber {
    const [_borrowerInterestShares, _yieldInterestShares] = this._calculateLenderInterest(
      lenderBalance,
      this.lenderPoolState.borrowLimit,
      borrowerInterestSharesWithdrawnByLender,
      yieldInterestSharesWithdrawnByLender
    );
    return _borrowerInterestShares.plus(_yieldInterestShares).multipliedBy(this.lenderPoolExternalData.collateralPerStrategyToken);
  }

  public calculatePrincipalWithdrawable(lenderAddress: string): BigNumber {
    const lenderBalance: BigNumber = this.getLenderBalance(lenderAddress);
    const _status = this.dataFromPooledCreditLines.status;
    if (_status == CreditLineStatus.CLOSED || _status == CreditLineStatus.LIQUIDATED) {
      return this._calculatePrincipalWithdrawable(lenderBalance);
    } else if (
      _status == CreditLineStatus.CANCELLED ||
      (_status == CreditLineStatus.REQUESTED &&
        this.now().gte(this.lenderPoolState.startTime) &&
        this.totalSupply.lt(this.lenderPoolState.minBorrowAmount))
    ) {
      return lenderBalance;
    } else {
      return new BigNumber(0);
    }
  }

  private _calculateLenderInterest(
    _lenderBalance: BigNumber,
    _borrowLimit: BigNumber,
    borrowerInterestSharesWithdrawnByLender: BigNumber,
    yieldInterestSharesWithdrawnByLender: BigNumber
  ): [BigNumber, BigNumber] {
    let _totalinterestInShares = new BigNumber(0);
    const _sharesHeld = this.lenderPoolState.sharesHeld;
    if (_sharesHeld.eq(0)) {
      return [new BigNumber(0), new BigNumber(0)];
    }

    const _notBorrowed = _borrowLimit.minus(this.dataFromPooledCreditLines.principal);
    const _notBorrowedInShares = _notBorrowed.dividedBy(this.lenderPoolExternalData.collateralPerStrategyToken);
    _totalinterestInShares = _sharesHeld.minus(_notBorrowedInShares);

    const _borrowerInterestShares = this.lenderPoolState.borrowerInterestShares;

    const _borrowerInterestForLender = _borrowerInterestShares
      .multipliedBy(_lenderBalance)
      .div(_borrowLimit)
      .minus(borrowerInterestSharesWithdrawnByLender);

    const _borrowerInterestSharesAfterWithdrawl = _borrowerInterestShares.minus(this.lenderPoolState.borrowerInterestSharesWithdrawn);

    const _totalYieldInterest = _totalinterestInShares
      .minus(_borrowerInterestSharesAfterWithdrawl)
      .plus(this.lenderPoolState.yieldInterestWithdrawnShares);
    const _yieldInterestForLender = _totalYieldInterest
      .multipliedBy(_lenderBalance)
      .div(_borrowLimit)
      .minus(yieldInterestSharesWithdrawnByLender);

    return [_borrowerInterestForLender, _yieldInterestForLender];
  }

  private _calculatePrincipalWithdrawable(lenderBalance: BigNumber): BigNumber {
    const _borrowTokens = this.lenderPoolState.borrowLimit;
    const _totalLiquidityWithdrawable = _borrowTokens.minus(this.dataFromPooledCreditLines.principal);
    const _principalWithdrawble = _totalLiquidityWithdrawable.multipliedBy(lenderBalance).div(_borrowTokens);
    return _principalWithdrawble;
  }

  //-------------------------------- Function not part of contract --------------------------------//

  public getAllLenders(): LenderPerPool[] {
    return this.lenderPerPool;
  }

  public getPrincipalWithdrawableForAllLenders(): LenderPerPoolPrincipalWithdrawable[] {
    return this.lenderPerPool.map((a) => {
      return { lenderAddress: a.lenderAddress, principalWithdrawable: this.calculatePrincipalWithdrawable(a.lenderAddress) };
    });
  }
}
