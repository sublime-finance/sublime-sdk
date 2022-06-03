import { getAllCreditLinesFromSubgraph } from '../queries';
import { CreditLineEmulator } from '../emulator/CreditLines';
import { TokenManager } from '../tokenManager';
import { Signer } from 'ethers';
import BigNumber from 'bignumber.js';

export class EmulatedCreditLines {
  private subgraphUrl: string;
  private tokenManager: TokenManager;

  constructor(subgraphUrl: string, priceSubgraphUrl: string, signer: Signer) {
    this.subgraphUrl = subgraphUrl;
    this.tokenManager = new TokenManager(signer, priceSubgraphUrl);
  }

  async getAllCreditLines(count: number = 13, skip: number = 0): Promise<CreditLineEmulator[]> {
    const result = await getAllCreditLinesFromSubgraph(this.subgraphUrl, count, skip);
    const prices = await this.refreshTokenData(result);
    return this.transformToCreditLineEmulator(result, prices);
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

  private transformToCreditLineEmulator(data: any[], prices: Record<string, BigNumber>): CreditLineEmulator[] {
    return data.map(
      (a) =>
        new CreditLineEmulator(
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
            collateralPerStrategyToken: new BigNumber(1),
            ratioOfPrices: prices[a.borrowAsset].div(prices[a.collateralAsset]),
            ratioOfPricesDecimals: 1,
          },
          { liquidatorRewardFraction: new BigNumber(10).pow(16) }
        )
    );
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
