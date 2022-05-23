import { Signer } from '@ethersproject/abstract-signer';
import { TokenManager } from '../tokenManager';
import { SublimeConfig } from '../types/sublimeConfig';
import { PooledCreditLinesLenderOverview } from './PooledCreditLinesLenderOverview';

export class SublimeSubgraph extends PooledCreditLinesLenderOverview {
  constructor(url: string, signer: Signer, tokenManager: TokenManager, config: SublimeConfig) {
    super(url, signer, tokenManager, config);
  }
}
