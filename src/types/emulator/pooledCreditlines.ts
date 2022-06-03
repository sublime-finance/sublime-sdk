import BigNumber from 'bignumber.js';
import { CreditLineStatus } from '../../types/Types';

export interface PooledCreditLineState {
  id: string;
  pooledCreditLineStatus: CreditLineStatus;
  endsAt: BigNumber;
  principal: BigNumber;
  idealCollateralRatio: BigNumber;
  totalInterestRepaid: BigNumber;
  lastPrincipalUpdateTime: BigNumber;
  gracePenaltyRate: BigNumber;
  borrowRate: BigNumber;
  interestAccruedTillLastPrincipalUpdate: BigNumber;
  depositedCollateralInShares: BigNumber;
  borrowLimit: BigNumber;
}

export interface PooledCreditLineExternalData {
  collateralPerStrategyToken: BigNumber;
  ratioOfPrices: BigNumber;
  ratioOfPricesDecimals: number;
}
