import { Signer } from '@ethersproject/abstract-signer';
import { TokenManager } from '../tokenManager';
import { SublimeConfig } from '../types/sublimeConfig';

import { YieldAndStrategyApi } from '../api/yieldAndStrategy';
import { DashboardOverview } from '../types/Types';
import BigNumber from 'bignumber.js';
import { VerificationAPI } from '../api/verification';

export class Base {
  /**
   * @description subgraph url for fetching the sublime data
   */
  protected subgraphUrl: string;

  /**
   * @description signer used to sign
   */
  protected signer: Signer;

  /**
   * @description instance of token manager class that caches and retreives token data
   */
  protected tokenManager: TokenManager;

  protected yieldApi: YieldAndStrategyApi;

  protected verificationApi: VerificationAPI;

  /**
   * @description sublime config. (Contains all addresses relevant to sublime ecosystem)
   */
  protected sublimeAddresses: SublimeConfig;

  constructor(url: string, signer: Signer, tokenManager: TokenManager, config: SublimeConfig) {
    this.subgraphUrl = url;
    this.signer = signer;
    this.tokenManager = tokenManager;

    this.sublimeAddresses = config;

    this.yieldApi = new YieldAndStrategyApi(this.signer, config, this.tokenManager);
    this.verificationApi = new VerificationAPI(this.signer, config);
  }

  /**
   * @param max
   * @description Function to generate a random decimals in range (0, max)
   */
  protected getRandomInt(max) {
    return Math.floor(Math.random() * max);
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
}
