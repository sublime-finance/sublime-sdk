import { fetchData } from '../helpers';

export async function getCreditLineTimeline(url: string, creditLineNumber: string): Promise<any> {
  const data = JSON.stringify({
    query: `{
      creditLines(where:{id:"${creditLineNumber}"}) {
        id
        borrowAsset
        collateralAsset
        creditLineTimeline(orderBy:timestamp, orderDirection:desc) {
          id
          timestamp
          creditLineOperation
          amount
          strategy
          liquidator
        }
      }
    }
    `,
  });

  const options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  const result = await fetchData(options);
  // console.log(result);
  return result;
}

export async function getAllCreditLinesFromSubgraph(url: string, count: number, skip: number): Promise<any[]> {
  const allData = [];
  const data = JSON.stringify({
    query: `{
        creditLines (orderBy:createdAt, orderDirection:desc, first:${count}, skip:${skip}){
          id
          status
          lender
          lenderWalletDetails {
            wallet {
              user {
                userMetadataPerVerifier {
                  metadata
                }
              }
            }
          }
          borrower
          borrowerWalletDetails {
            wallet {
              user {
                userMetadataPerVerifier {
                  metadata
                }
              }
            }
          }
          requestByLender
          principal
          collateralAsset
          borrowLimit
          borrowRate
          idealCollateralRatio
          borrowAsset
          autoLiquidation
          lastPrincipalUpdateTime
        }
    }`,
  });

  const options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  const result = await fetchData(options);
  //   console.log(result);
  allData.push(...result.data.creditLines);
  return allData;
}

async function _getCreditLinesOfBorrower(
  url: string,
  status: string[],
  requestByLender: boolean[],
  borrower: string,
  count: number,
  skip: number
): Promise<any[]> {
  borrower = borrower.toLowerCase();
  const allData = [];
  const data = JSON.stringify({
    query: `{
        creditLines (orderBy:createdAt, orderDirection:desc, first:${count}, skip:${skip},where:{borrower:"${borrower}",requestByLender_in:[${requestByLender}], status_in:[${status}]}){
          id
          status
          lender
          lenderWalletDetails {
            wallet {
              user {
                userMetadataPerVerifier {
                  metadata
                }
              }
            }
          }
          borrower
          borrowerWalletDetails {
            wallet {
              user {
                userMetadataPerVerifier {
                  metadata
                }
              }
            }
          }
          requestByLender
          principal
          collateralAsset
          borrowLimit
          borrowRate
          idealCollateralRatio
          borrowAsset
          autoLiquidation
          lastPrincipalUpdateTime
        }
    }`,
  });

  const options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  const result = await fetchData(options);
  //   console.log(result);
  allData.push(...result.data.creditLines);
  return allData;
}

export async function getCreditLine(url: string, id: string): Promise<any[]> {
  const allData = [];
  const data = JSON.stringify({
    query: `{
          creditLines (where:{id:"${id}"}){
            id
            status
            lender
            borrower
            lenderWalletDetails {
              wallet {
                user {
                  userMetadataPerVerifier {
                    metadata
                  }
                }
              }
            }
            borrower
            borrowerWalletDetails {
              wallet {
                user {
                  userMetadataPerVerifier {
                    metadata
                  }
                }
              }
            }
            requestByLender
            principal
            collateralAsset
            borrowLimit
            borrowRate
            idealCollateralRatio
            borrowAsset
            autoLiquidation
            lastPrincipalUpdateTime
          }
      }`,
  });

  const options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  const result = await fetchData(options);
  // console.log(result);
  allData.push(...result.data.creditLines);
  return allData;
}

async function _getCreditLinesOfLender(
  url: string,
  status: string[],
  requestByLender: boolean[],
  lender: string,
  count: number,
  skip: number
): Promise<any[]> {
  lender = lender.toLowerCase();
  const allData = [];
  const data = JSON.stringify({
    query: `{
          creditLines (orderBy:createdAt, orderDirection:desc, first:${count}, skip:${skip},where:{lender:"${lender}",requestByLender_in:[${requestByLender}], status_in:[${status}]}){
            id
            status
            lender
            borrower
            lenderWalletDetails {
              wallet {
                user {
                  userMetadataPerVerifier {
                    metadata
                  }
                }
              }
            }
            borrower
            borrowerWalletDetails {
              wallet {
                user {
                  userMetadataPerVerifier {
                    metadata
                  }
                }
              }
            }
            requestByLender
            principal
            collateralAsset
            borrowLimit
            borrowRate
            idealCollateralRatio
            borrowAsset
            autoLiquidation
            lastPrincipalUpdateTime
          }
      }`,
  });

  const options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  const result = await fetchData(options);
  // console.log(result);
  allData.push(...result.data.creditLines);
  return allData;
}

async function _getCreditLinesNotOfLender(
  url: string,
  status: string[],
  requestByLender: boolean[],
  lender: string,
  count: number,
  skip: number
): Promise<any[]> {
  lender = lender.toLowerCase();
  const allData = [];
  const data = JSON.stringify({
    query: `{
          creditLines (orderBy:createdAt, orderDirection:desc, first:${count}, skip:${skip},where:{borrower_not:"${lender}",requestByLender_in:[${requestByLender}], status_in:[${status}]}){
            id
            status
            lender
            borrower
            lenderWalletDetails {
              wallet {
                user {
                  userMetadataPerVerifier {
                    metadata
                  }
                }
              }
            }
            borrower
            borrowerWalletDetails {
              wallet {
                user {
                  userMetadataPerVerifier {
                    metadata
                  }
                }
              }
            }
            requestByLender
            principal
            collateralAsset
            borrowLimit
            borrowRate
            idealCollateralRatio
            borrowAsset
            autoLiquidation
            lastPrincipalUpdateTime
          }
      }`,
  });

  const options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  const result = await fetchData(options);
  // console.log(result);
  allData.push(...result.data.creditLines);
  return allData;
}

export async function getCreditLinesLenderCanLenderTo(url: string, lender: string, count: number, skip: number) {
  let data = [];
  const status = ['ACTIVE'];
  const requestByLender = [true, false];
  const lines = await _getCreditLinesNotOfLender(url, status, requestByLender, lender, count, skip);
  data = [...lines];
  return data;
}
// creditLineTypes ACTIVE, CLOSED, LIQUIDATED, NOT_CREATED, REQUESTED, CANCELLED
export async function getConfirmedCreditLinesOfBorrower(url: string, borrower: string, count: number, skip: number): Promise<any[]> {
  let data = [];
  const status = ['ACTIVE', 'CLOSED', 'LIQUIDATED', 'NOT_CREATED'];
  const requestByLender = [true, false];
  const lines = await _getCreditLinesOfBorrower(url, status, requestByLender, borrower, count, skip);
  data = [...lines];
  return data;
}

export async function getConfirmedCreditLinesOfLender(url: string, lender: string, count: number, skip: number): Promise<any[]> {
  let data = [];
  const status = ['ACTIVE', 'CLOSED', 'LIQUIDATED', 'NOT_CREATED'];
  const requestByLender = [true, false];
  const lines = await _getCreditLinesOfLender(url, status, requestByLender, lender, count, skip);
  data = [...lines];
  return data;
}

export async function getPendingCreditlinesRequestedByLender(url: string, lender: string, count: number, skip: number): Promise<any[]> {
  let data = [];
  const status = ['REQUESTED'];
  const requestByLender = [true];
  const lines = await _getCreditLinesOfLender(url, status, requestByLender, lender, count, skip);
  data = [...lines];
  return data;
}

export async function getPendingCreditLinesRequestedToLender(url: string, lender: string, count: number, skip: number): Promise<any[]> {
  let data = [];
  const status = ['REQUESTED'];
  const requestByLender = [false];
  const lines = await _getCreditLinesOfLender(url, status, requestByLender, lender, count, skip);
  data = [...lines];
  return data;
}

export async function getPendingCreditLinesRequestedByBorrower(url: string, borrower: string, count: number, skip: number): Promise<any[]> {
  let data = [];
  const status = ['REQUESTED'];
  const requestByLender = [false];
  const lines = await _getCreditLinesOfBorrower(url, status, requestByLender, borrower, count, skip);
  data = [...lines];
  return data;
}

export async function getPendingCreditLinesRequestedToBorrower(url: string, borrower: string, count: number, skip: number): Promise<any[]> {
  let data = [];
  const status = ['REQUESTED'];
  const requestByLender = [true];
  const lines = await _getCreditLinesOfBorrower(url, status, requestByLender, borrower, count, skip);
  data = [...lines];
  return data;
}
