import { getAllCreditLinesFromSubgraph } from '../queries';
import { CreditLineEmulator } from '../emulator/CreditLines';
import { TokenManager } from '../tokenManager';
import { Signer } from 'ethers';
import BigNumber from 'bignumber.js';
import { YieldAndStrategyApi } from '../api/yieldAndStrategy';
import { SublimeConfig } from '../types/sublimeConfig';
import { StrategyType } from '../types/Types';
export class EmulatedCreditLines {
  private subgraphUrl: string;
  private tokenManager: TokenManager;
  private yieldApi: YieldAndStrategyApi;

  constructor(subgraphUrl: string, priceSubgraphUrl: string, signer: Signer, config: SublimeConfig) {
    this.subgraphUrl = subgraphUrl;
    this.tokenManager = new TokenManager(signer, priceSubgraphUrl);
    this.yieldApi = new YieldAndStrategyApi(signer, config, this.tokenManager);
  }

  async getAllCreditLines(count: number = 13, skip: number = 0): Promise<CreditLineEmulator[]> {
    const result = await getAllCreditLinesFromSubgraph(this.subgraphUrl, count, skip);
    const prices = await this.refreshTokenData(result);
    const collateralPerStrategyToken = await this.refreshStrategyData(result);
    return this.transformToCreditLineEmulator(result, prices, collateralPerStrategyToken);
  }

  private async refreshTokenData(data: any[]): Promise<Record<string, BigNumber>> {
    const borrowTokens: string[] = data.map((a) => a.collateralAsset);
    const collateralTokens: string[] = data.map((a) => a.borrowAsset);
    const allTokens = [...borrowTokens, ...collateralTokens].filter((value, index, array) => array.indexOf(value) === index);

    const prices: Record<string, BigNumber> = {};
    for (let index = 0; index < allTokens.length; index++) {
      const element = allTokens[index];
      await this.tokenManager.updateAll(element);
      prices[element] = await this.tokenManager.getPricePerAsset(element);
    }
    return prices;
  }

  private async refreshStrategyData(data: any[]): Promise<Record<string, Record<string, BigNumber>>> {
    const allStrategyAndTokenPairs = data.map((a) => {
      return { strategy: a.strategy, collateralAsset: a.collateralAsset, id: `${a.strategy}-${a.collateralAsset}` };
    });

    const allIds = allStrategyAndTokenPairs.map((a) => a.id).filter((value, index, self) => self.indexOf(value) === index);
    const uniquePairs = allIds.map((a) => {
      return { strategy: a.split('-')[0], collateralAsset: a.split('-')[1] };
    });

    const collateralPerStrategyToken: Record<string, Record<string, BigNumber>> = {};
    const valueToCheck = new BigNumber(10).pow(18);
    for (let index = 0; index < uniquePairs.length; index++) {
      const element = uniquePairs[index];
      const strategy = this.yieldApi.getStrategy(element.strategy);

      const tokensForShares = await this.getTokensForShares(strategy, element.collateralAsset, valueToCheck);
      if (!collateralPerStrategyToken[element.strategy]) {
        collateralPerStrategyToken[element.strategy] = {};
      }
      collateralPerStrategyToken[element.strategy][element.collateralAsset] = tokensForShares.div(valueToCheck);
    }

    return collateralPerStrategyToken;
  }

  private async getTokensForShares(strategy: StrategyType, collateralAsset: string, amount: BigNumber): Promise<BigNumber> {
    if (strategy == StrategyType.NoYield) return new BigNumber(amount);

    try {
      return await this.yieldApi.getTokensForShares(strategy, collateralAsset, amount, false);
    } catch (ex) {
      return new BigNumber(0);
    }
  }

  private transformToCreditLineEmulator(
    data: any[],
    prices: Record<string, BigNumber>,
    collateralPerStrategyToken: Record<string, Record<string, BigNumber>>
  ): CreditLineEmulator[] {
    return data.map((a) => {
      return new CreditLineEmulator(
        {
          id: a.id,
          collateralShareInStrategy: new BigNumber(1000),
          principal: new BigNumber(a.principal),
          lastPrincipalUpdateTime: new BigNumber(a.lastPrincipalUpdateTime),
          borrowRate: new BigNumber(a.borrowRate),
          interestAccruedTillLastPrincipalUpdate: new BigNumber(a.interestAccruedTillLastPrincipalUpdate),
          totalInterestRepaid: new BigNumber(a.totalInterestRepaid),
          idealCollateralRatio: new BigNumber(a.idealCollateralRatio),
          creditLineStatus: a.status,
          borrowLimit: new BigNumber(a.borrowLimit),
        },
        {
          collateralPerStrategyToken: new BigNumber(collateralPerStrategyToken[a.strategy][a.collateralAsset]),
          ratioOfPrices: new BigNumber(prices[a.borrowAsset]).dividedBy(prices[a.collateralAsset]),
          ratioOfPricesDecimals: 1,
        },
        { liquidatorRewardFraction: new BigNumber(10).pow(16) }
      );
    });
  }
}

// id: '52',
// status: 'REQUESTED',
// lender: '0x808ba745926e6cdef924c9bc0c758ec110474596',
// strategy: '0xf469c04fb301ab0dc5ba425e11645ad6b8c0be64',
// totalInterestRepaid: '0',
// lenderWalletDetails: { wallet: [Object] },
// borrower: '0x3a574461fd1279fcf96043bcf416c53b7e8dcec0',
// borrowerWalletDetails: { wallet: [Object] },
// requestByLender: false,
// principal: '0',
// collateralAsset: '0xe22da380ee6b445bb8273c81944adeb6e8450422',
// borrowLimit: '111000000000000000000',
// borrowRate: '10000000000000000',
// idealCollateralRatio: '10000000000000000',
// borrowAsset: '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa',
// autoLiquidation: true,
// lastPrincipalUpdateTime: '0',
// createdAt: '1653654940'
