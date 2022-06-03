import BigNumber from 'bignumber.js';
import { CreditLineStatus } from '../../types/Types';

export interface LenderPoolState {
  id: string;
  sharesHeld: BigNumber;
  borrowerInterestShares: BigNumber;
  borrowerInterestSharesWithdrawn: BigNumber;
  yieldInterestWithdrawnShares: BigNumber;
  borrowLimit: BigNumber;
  startTime: BigNumber;
  minBorrowAmount: BigNumber;
}

export interface LenderPoolExternalData {
  collateralPerStrategyToken: BigNumber;
  ratioOfPrices: BigNumber;
  ratioOfPricesDecimals: number;
}

export interface DataFromPooledCreditLines {
  principal: BigNumber;
  status: CreditLineStatus;
}
