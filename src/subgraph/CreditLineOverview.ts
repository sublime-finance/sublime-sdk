import { Signer } from '@ethersproject/abstract-signer';
import { TokenManager } from '../tokenManager';
import { SublimeConfig } from '../types/sublimeConfig';
import { UserMetaCalls } from './UserMeta';

export class CreditLinesOverviewCall extends UserMetaCalls {
  constructor(url: string, signer: Signer, tokenManager: TokenManager, config: SublimeConfig) {
    super(url, signer, tokenManager, config);
  }
}
