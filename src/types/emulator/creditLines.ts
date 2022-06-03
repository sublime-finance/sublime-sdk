import BigNumber from 'bignumber.js';
import { CreditLineStatus } from '../../types/Types';

export interface CreditLineState {
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

export interface CreditLineGlobals {
  liquidatorRewardFraction: BigNumber;
}

export interface CreditLineExternalData {
  collateralPerStrategyToken: BigNumber;
  ratioOfPrices: BigNumber;
  ratioOfPricesDecimals: number;
}
