import { fetchData, print, countPerQuery } from '../helpers';

export async function getPooledCreditLineTimeline(url: string, pooledCreditLineId: string, count: number, skip: number): Promise<any[]> {
  const allData = [];
  const data = JSON.stringify({
    query: `{
      pooledCreditLineTimeLines(first:${count}, skip:${skip}, orderBy: timestamp, orderDirection: desc, where:{pooledCreditLine:"${pooledCreditLineId}"}){
        id
        pooledCreditLineOperation
        timestamp
        amount
        strategy
      }
    }`,
  });

  const options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  const result = await fetchData(options);
  // print({result});
  allData.push(...result.data.pooledCreditLineTimeLines);
  // console.log({allData})
  return allData;
}

export async function getPooledCreditLinesOfLender(
  url: string,
  lenderAddress: string,
  count: number,
  skip: number
): Promise<[any[], any[]]> {
  lenderAddress = lenderAddress.toLowerCase();
  const allData = [];
  const poolContributions = [];
  const data = JSON.stringify({
    query: `{
        lenderPerLenderPools(first:${count}, skip:${skip}, where:{lenderAddress:"${lenderAddress}"}){
          lenderAddress
          amountLent
          amountWithdrawn
          sharesWithdrawn
          interestWithdrawn
          lenderPool{
            pooledCreditLine{
                id
                borrowerAddress
                borrowLimit
                borrowRate
                idealCollateralRatio
                borrowAsset
                collateralAsset
                createdAt
                startsAt
                endsAt
                defaultsAt
                lenderStrategy
                collateralStrategy
                gracePenaltyRate
                status
                principal
                totalInterestRepaid
                lastPrincipalUpdateTime
                interestAccruedTillLastPrincipalUpdate
                lenderVerifier{
                  id
                }
            }
          }
        }
      }`,
  });

  const options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  const result = await fetchData(options);
  // print({result});
  allData.push(...result.data.lenderPerLenderPools.map((a) => a.lenderPool.pooledCreditLine));
  poolContributions.push(
    ...result.data.lenderPerLenderPools.map((a) => {
      return {
        amountLent: a.amountLent,
        amountWithdrawn: a.amountWithdrawn,
        sharesWithdrawn: a.sharesWithdrawn,
        interestWithdrawn: a.interestWithdrawn,
      };
    })
  );
  // console.log({allData})
  return [allData, poolContributions];
}

export async function getPooledCreditLinesForLenderById(url: string, lenderAddress: string, id: string): Promise<[any[], any[]]> {
  lenderAddress = lenderAddress.toLowerCase();
  id = id.toLowerCase();

  const allData = [];
  const poolContributions = [];
  const data = JSON.stringify({
    query: `{
        lenderPerLenderPools(where:{lenderPool:"${id}", lenderAddress:"${lenderAddress}"}){
          lenderAddress
          amountLent
          amountWithdrawn
          sharesWithdrawn
          interestWithdrawn
          lenderPool{
            pooledCreditLine{
                id
                borrowerAddress
                borrowLimit
                borrowRate
                idealCollateralRatio
                borrowAsset
                collateralAsset
                createdAt
                startsAt
                endsAt
                defaultsAt
                lenderStrategy
                collateralStrategy
                gracePenaltyRate
                status
                principal
                totalInterestRepaid
                lastPrincipalUpdateTime
                interestAccruedTillLastPrincipalUpdate
                totalLentAmount
                lenderVerifier{
                  id
                }
            }
          }
        }
      }`,
  });

  const options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  const result = await fetchData(options);
  // print({result});
  allData.push(...result.data.lenderPerLenderPools.map((a) => a.lenderPool.pooledCreditLine));
  poolContributions.push(
    ...result.data.lenderPerLenderPools.map((a) => {
      return {
        amountLent: a.amountLent,
        amountWithdrawn: a.amountWithdrawn,
        sharesWithdrawn: a.sharesWithdrawn,
        interestWithdrawn: a.interestWithdrawn,
      };
    })
  );
  // console.log({allData})
  return [allData, poolContributions];
}

export async function getPooledCreditLinesOfBorrower(url: string, borrower: string, count: number, skip: number): Promise<any[]> {
  borrower = borrower.toLowerCase();
  const allData = [];
  const data = JSON.stringify({
    query: `{
        pooledCreditLines(first:${count}, skip:${skip}, orderBy:createdAt, orderDirection:desc, where:{borrowerAddress:"${borrower}"}){
          id
          borrowerAddress
          borrowLimit
          borrowRate
          idealCollateralRatio
          borrowAsset
          collateralAsset
          createdAt
          startsAt
          endsAt
          defaultsAt
          lenderStrategy
          collateralStrategy
          gracePenaltyRate
          status
          principal
          totalInterestRepaid
          lastPrincipalUpdateTime
          interestAccruedTillLastPrincipalUpdate
          totalLentAmount
          lenderVerifier{
            id
          }
        }
      }`,
  });

  const options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  const result = await fetchData(options);
  // print({result});
  allData.push(...result.data.pooledCreditLines);
  // console.log({allData})
  return allData;
}

export async function getPooledCreditLinesOfBorrowerWithState(
  url: string,
  borrower: string,
  count: number,
  skip: number,
  status: string[]
): Promise<any[]> {
  borrower = borrower.toLowerCase();
  const allData = [];
  const data = JSON.stringify({
    query: `{
        pooledCreditLines(first:${count}, skip:${skip}, orderBy:createdAt, orderDirection:desc, where:{borrowerAddress:"${borrower}",status_in:[${status}]}){
          id
          borrowerAddress
          borrowLimit
          borrowRate
          idealCollateralRatio
          borrowAsset
          collateralAsset
          createdAt
          startsAt
          endsAt
          defaultsAt
          lenderStrategy
          collateralStrategy
          gracePenaltyRate
          status
          principal
          totalInterestRepaid
          lastPrincipalUpdateTime
          interestAccruedTillLastPrincipalUpdate
          totalLentAmount
          status
          lenderVerifier{
            id
          }
        }
      }`,
  });

  const options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  const result = await fetchData(options);
  allData.push(...result.data.pooledCreditLines);
  // console.log({allData})
  return allData;
}

export async function getPooledCreditLinesOfBorrowerWithNotState(
  url: string,
  borrower: string,
  count: number,
  skip: number,
  status: string[]
): Promise<any[]> {
  borrower = borrower.toLowerCase();
  const allData = [];
  const data = JSON.stringify({
    query: `{
        pooledCreditLines(first:${count}, skip:${skip}, orderBy:createdAt, orderDirection:desc, where:{borrowerAddress:"${borrower}",status_not_in:[${status}]}){
          id
          borrowerAddress
          borrowLimit
          borrowRate
          idealCollateralRatio
          borrowAsset
          collateralAsset
          createdAt
          startsAt
          endsAt
          defaultsAt
          lenderStrategy
          collateralStrategy
          gracePenaltyRate
          status
          principal
          totalInterestRepaid
          lastPrincipalUpdateTime
          interestAccruedTillLastPrincipalUpdate
          totalLentAmount
          status
          lenderVerifier{
            id
          }
        }
      }`,
  });

  const options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  const result = await fetchData(options);
  // print({result});
  allData.push(...result.data.pooledCreditLines);
  // console.log({allData})
  return allData;
}

export async function getPooledCreditLinesOfLenderCanLendTo(url: string, lender: string, count: number, skip: number): Promise<any[]> {
  lender = lender.toLowerCase();
  const allData = [];
  const data = JSON.stringify({
    query: `{
        pooledCreditLines(first:${count}, skip:${skip}, orderBy:createdAt, orderDirection:desc, where:{borrowerAddress_not:"${lender}"}){
          id
          borrowerAddress
          borrowLimit
          borrowRate
          idealCollateralRatio
          borrowAsset
          collateralAsset
          createdAt
          startsAt
          endsAt
          defaultsAt
          lenderStrategy
          collateralStrategy
          gracePenaltyRate
          status
          principal
          totalInterestRepaid
          lastPrincipalUpdateTime
          interestAccruedTillLastPrincipalUpdate
          totalLentAmount
          status
          lenderVerifier{
            id
          }
        }
      }`,
  });

  const options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  const result = await fetchData(options);
  // print({result});
  allData.push(...result.data.pooledCreditLines);
  // console.log({allData})
  return allData;
}

export async function getPooledCreditLineById(url: string, id: number): Promise<any[]> {
  const allData = [];
  const data = JSON.stringify({
    query: `{
        pooledCreditLines(where:{id:"${id}"}){
          id
          borrowerAddress
          borrowLimit
          borrowRate
          idealCollateralRatio
          borrowAsset
          collateralAsset
          createdAt
          startsAt
          endsAt
          defaultsAt
          lenderStrategy
          collateralStrategy
          gracePenaltyRate
          status
          principal
          totalInterestRepaid
          lastPrincipalUpdateTime
          interestAccruedTillLastPrincipalUpdate
          totalLentAmount
          status
          minBorrowAmount
          lenderVerifier{
            id
          }
        }
      }`,
  });

  const options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  const result = await fetchData(options);
  // print({result});
  allData.push(...result.data.pooledCreditLines);
  // console.log({allData})
  return allData;
}

export async function getAllPooledCreditLines(url: string, count: number, skip: number): Promise<any[]> {
  const allData = [];
  const data = JSON.stringify({
    query: `{
        pooledCreditLines(orderBy:createdAt, orderDirection:desc, first:${count}, skip:${skip}){
          id
          borrowerAddress
          borrowLimit
          borrowRate
          idealCollateralRatio
          borrowAsset
          collateralAsset
          createdAt
          startsAt
          endsAt
          defaultsAt
          lenderStrategy
          collateralStrategy
          gracePenaltyRate
          status
          principal
          totalInterestRepaid
          lastPrincipalUpdateTime
          interestAccruedTillLastPrincipalUpdate
          totalLentAmount
          status
          lenderVerifier{
            id
          }
        }
      }`,
  });

  const options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  const result = await fetchData(options);
  // print({result});
  allData.push(...result.data.pooledCreditLines);
  // console.log({allData})
  return allData;
}

export async function getAllPooledCreditLinesWithState(url: string, count: number, skip: number, status: string[]): Promise<any[]> {
  const allData = [];
  const data = JSON.stringify({
    query: `{
        pooledCreditLines(orderBy:createdAt, orderDirection:desc, first:${count}, skip:${skip}, where:{status_in:[${status}]}){
          id
          borrowerAddress
          borrowLimit
          borrowRate
          idealCollateralRatio
          borrowAsset
          collateralAsset
          createdAt
          startsAt
          endsAt
          defaultsAt
          lenderStrategy
          collateralStrategy
          gracePenaltyRate
          status
          principal
          totalInterestRepaid
          lastPrincipalUpdateTime
          interestAccruedTillLastPrincipalUpdate
          totalLentAmount
          status
          lenderVerifier{
            id
          }
        }
      }`,
  });

  const options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  const result = await fetchData(options);
  // print({result});
  allData.push(...result.data.pooledCreditLines);
  // console.log({allData})
  return allData;
}

export async function getAllPooledCreditLinesWithNotState(url: string, count: number, skip: number, status: string[]): Promise<any[]> {
  const allData = [];
  const data = JSON.stringify({
    query: `{
        pooledCreditLines(orderBy:createdAt, orderDirection:desc, first:${count}, skip:${skip}, where:{status_not_in:[${status}]}){
          id
          borrowerAddress
          borrowLimit
          borrowRate
          idealCollateralRatio
          borrowAsset
          collateralAsset
          createdAt
          startsAt
          endsAt
          defaultsAt
          lenderStrategy
          collateralStrategy
          gracePenaltyRate
          status
          principal
          totalInterestRepaid
          lastPrincipalUpdateTime
          interestAccruedTillLastPrincipalUpdate
          totalLentAmount
          status
          lenderVerifier{
            id
          }
        }
      }`,
  });

  const options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  const result = await fetchData(options);
  // print({result});
  allData.push(...result.data.pooledCreditLines);
  // console.log({allData})
  return allData;
}

export async function getLenderPerPool(url: string, id: string): Promise<any[]> {
  const allData = [];
  const data = JSON.stringify({
    query: `{
      lenderPools(where:{id:"${id}"}){
        id
        startTime
        borrowAsset
        collateralAsset
        borrowLimit
        minBorrowAmount
        borrowAssetStrategy
        sharesHeld
        borrowerInterestShares
        yieldInterestWithdrawnShares
        collateralHeld
        areTokensTransferable
        verifier{
          id
          status
          usersVerified{
            metadata
          }
        }
        lender{
          lenderAddress
          amountLent
          amountWithdrawn
          sharesWithdrawn
          strategy
        }
      }
    }`,
  });

  const options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  const result = await fetchData(options);
  // print({result});
  allData.push(...result.data.lenderPools);
  // console.log({allData})
  return allData;
}

export async function getAllPooledCreditLinesForCount(url: string): Promise<any[]> {
  let skip = 0;
  const allData = [];
  for (;;) {
    const data = JSON.stringify({
      query: `{
        pooledCreditLines(first: ${countPerQuery}, skip:${skip * countPerQuery}, orderBy: createdAt, orderDirection: desc){
          id
          lenderVerifier{
            id
          }
        }
      }`,
    });

    const options = {
      url,
      headers: { 'Content-Type': 'application/json' },
      body: data,
    };

    const result = await fetchData(options);
    if (result.errors) {
      print(result.errors);
      throw new Error('Error while fetching data from subgraph');
    } else if (result.data.pooledCreditLines.length == 0) {
      return allData;
    } else {
      skip++;
      allData.push(...result.data.pooledCreditLines);
    }
  }
}

export async function getAllPooledCreditLinesForCountWithState(url: string, status: string[]): Promise<any[]> {
  let skip = 0;
  const allData = [];
  for (;;) {
    const data = JSON.stringify({
      query: `{
        pooledCreditLines(first: ${countPerQuery}, skip:${
        skip * countPerQuery
      }, orderBy: createdAt, orderDirection: desc, where:{status_in:[${status}]}){
          id
          status
          lenderVerifier{
            id
          }
        }
      }`,
    });

    const options = {
      url,
      headers: { 'Content-Type': 'application/json' },
      body: data,
    };

    const result = await fetchData(options);
    if (result.errors) {
      print(result.errors);
      throw new Error('Error while fetching data from subgraph');
    } else if (result.data.pooledCreditLines.length == 0) {
      return allData;
    } else {
      skip++;
      allData.push(...result.data.pooledCreditLines);
    }
  }
}

export async function getAllPooledCreditLinesForCountWithStateNotIn(url: string, status: string[]): Promise<any[]> {
  let skip = 0;
  const allData = [];
  for (;;) {
    const data = JSON.stringify({
      query: `{
        pooledCreditLines(first: ${countPerQuery}, skip:${
        skip * countPerQuery
      }, orderBy: createdAt, orderDirection: desc, where:{status_not_in:[${status}]}){
          id
          status
          lenderVerifier{
            id
          }
        }
      }`,
    });

    const options = {
      url,
      headers: { 'Content-Type': 'application/json' },
      body: data,
    };

    const result = await fetchData(options);
    if (result.errors) {
      print(result.errors);
      throw new Error('Error while fetching data from subgraph');
    } else if (result.data.pooledCreditLines.length == 0) {
      return allData;
    } else {
      skip++;
      allData.push(...result.data.pooledCreditLines);
    }
  }
}

export async function getAllPooledCreditLinesOfLenderWithState(url: string, lenderAddress: string, status: string[]): Promise<any[]> {
  let skip = 0;
  lenderAddress = lenderAddress.toLowerCase();
  const allData = [];
  for (;;) {
    const data = JSON.stringify({
      query: `{
        lenderSharesBalancePCLs(where:{user:"${lenderAddress}"}){
          user
          pooledCreditLines(first: ${countPerQuery}, skip: ${countPerQuery * skip}, where:{status_in:[${status}]}){
            id
            status
            lenderVerifier{
              id
            }
          }
        }
      }`,
    });

    const options = {
      url,
      headers: { 'Content-Type': 'application/json' },
      body: data,
    };

    const result = await fetchData(options);
    // print({ result });
    if (result.errors) {
      print(result.errors);
      throw new Error('Error while fetching data from subgraph');
    } else if (result.data.lenderSharesBalancePCLs.length == 0) {
      return allData;
    } else {
      skip++;
      const linesInThisIteration: any[] = [];
      for (let index = 0; index < result.data.lenderSharesBalancePCLs.length; index++) {
        const element = result.data.lenderSharesBalancePCLs[index];
        allData.push(...element.pooledCreditLines);
        linesInThisIteration.push(...element.pooledCreditLines);
      }
      if (linesInThisIteration.length == 0) {
        return allData;
      }
    }
  }
}

export async function getAllPooledCreditLinesOfLender(url: string, lenderAddress: string): Promise<any[]> {
  let skip = 0;
  lenderAddress = lenderAddress.toLowerCase();
  const allData = [];
  for (;;) {
    const data = JSON.stringify({
      query: `{
        lenderSharesBalancePCLs(where:{user:"${lenderAddress}"}){
          user
          pooledCreditLines(first: ${countPerQuery}, skip: ${countPerQuery * skip}){
            id
            status
            lenderVerifier{
              id
            }
          }
        }
      }`,
    });

    const options = {
      url,
      headers: { 'Content-Type': 'application/json' },
      body: data,
    };

    const result = await fetchData(options);
    // print({ result });
    if (result.errors) {
      print(result.errors);
      throw new Error('Error while fetching data from subgraph');
    } else if (result.data.lenderSharesBalancePCLs.length == 0) {
      return allData;
    } else {
      skip++;
      const linesInThisIteration: any[] = [];
      for (let index = 0; index < result.data.lenderSharesBalancePCLs.length; index++) {
        const element = result.data.lenderSharesBalancePCLs[index];
        allData.push(...element.pooledCreditLines);
        linesInThisIteration.push(...element.pooledCreditLines);
      }
      if (linesInThisIteration.length == 0) {
        return allData;
      }
    }
  }
}

export async function getAllPooledCreditLinesOfLenderWithStateNotIn(url: string, lenderAddress: string, status: string[]): Promise<any[]> {
  let skip = 0;
  lenderAddress = lenderAddress.toLowerCase();
  const allData = [];
  for (;;) {
    const data = JSON.stringify({
      query: `{
        lenderSharesBalancePCLs(where:{user:"${lenderAddress}"}){
          user
          pooledCreditLines(first: ${countPerQuery}, skip: ${countPerQuery * skip}, where:{status_not_in:[${status}]}){
            id
            status
            lenderVerifier{
              id
            }
          }
        }
      }`,
    });

    const options = {
      url,
      headers: { 'Content-Type': 'application/json' },
      body: data,
    };

    const result = await fetchData(options);
    // print({ result });
    if (result.errors) {
      print(result.errors);
      throw new Error('Error while fetching data from subgraph');
    } else if (result.data.lenderSharesBalancePCLs.length == 0) {
      return allData;
    } else {
      skip++;
      const linesInThisIteration: any[] = [];
      for (let index = 0; index < result.data.lenderSharesBalancePCLs.length; index++) {
        const element = result.data.lenderSharesBalancePCLs[index];
        allData.push(...element.pooledCreditLines);
        linesInThisIteration.push(...element.pooledCreditLines);
      }
      if (linesInThisIteration.length == 0) {
        return allData;
      }
    }
  }
}

export async function getAllPooledCreditLinesOfBorrowerWithState(url: string, borrowerAddress: string, status: string[]): Promise<any[]> {
  let skip = 0;
  borrowerAddress = borrowerAddress.toLowerCase();
  const allData = [];
  for (;;) {
    const data = JSON.stringify({
      query: `{
        pooledCreditLines(first: ${countPerQuery}, skip:${
        skip * countPerQuery
      }, orderBy: createdAt, orderDirection: desc, where:{borrowerAddress:"${borrowerAddress}",status_in:[${status}]}){
          id
          status
          endsAt
          defaultsAt
          lenderVerifier{
            id
          }
        }
      }`,
    });

    const options = {
      url,
      headers: { 'Content-Type': 'application/json' },
      body: data,
    };

    const result = await fetchData(options);
    if (result.errors) {
      print(result.errors);
      throw new Error('Error while fetching data from subgraph');
    } else if (result.data.pooledCreditLines.length == 0) {
      return allData;
    } else {
      skip++;
      allData.push(...result.data.pooledCreditLines);
    }
  }
}

export async function getAllPooledCreditLinesOfBorrowerWithStateNotIn(
  url: string,
  borrowerAddress: string,
  status: string[]
): Promise<any[]> {
  let skip = 0;
  borrowerAddress = borrowerAddress.toLowerCase();
  const allData = [];
  for (;;) {
    const data = JSON.stringify({
      query: `{
        pooledCreditLines(first: ${countPerQuery}, skip:${
        skip * countPerQuery
      }, orderBy: createdAt, orderDirection: desc, where:{borrowerAddress:"${borrowerAddress}",status_not_in:[${status}]}){
          id
          status
          lenderVerifier{
            id
          }
        }
      }`,
    });

    const options = {
      url,
      headers: { 'Content-Type': 'application/json' },
      body: data,
    };

    const result = await fetchData(options);
    if (result.errors) {
      print(result.errors);
      throw new Error('Error while fetching data from subgraph');
    } else if (result.data.pooledCreditLines.length == 0) {
      return allData;
    } else {
      skip++;
      allData.push(...result.data.pooledCreditLines);
    }
  }
}

export async function getAllPooledCreditLinesOfBorrower(url: string, borrowerAddress: string): Promise<any[]> {
  let skip = 0;
  borrowerAddress = borrowerAddress.toLowerCase();
  const allData = [];
  for (;;) {
    const data = JSON.stringify({
      query: `{
        pooledCreditLines(first: ${countPerQuery}, skip:${
        skip * countPerQuery
      }, orderBy: createdAt, orderDirection: desc, where:{borrowerAddress:"${borrowerAddress}"}){
          id
          status
          lenderVerifier{
            id
          }
        }
      }`,
    });

    const options = {
      url,
      headers: { 'Content-Type': 'application/json' },
      body: data,
    };

    const result = await fetchData(options);
    if (result.errors) {
      print(result.errors);
      throw new Error('Error while fetching data from subgraph');
    } else if (result.data.pooledCreditLines.length == 0) {
      return allData;
    } else {
      skip++;
      allData.push(...result.data.pooledCreditLines);
    }
  }
}

export async function getLendersOfPooledCreditLines(url: string, id: string): Promise<any[]> {
  let skip = 0;
  const allData = [];
  for (;;) {
    const data = JSON.stringify({
      query: `{
        lenderPools(where:{id:${id}}){
          id
          lender(first: ${countPerQuery}, skip: ${countPerQuery * skip}){
            id
          }
        }
      }`,
    });

    const options = {
      url,
      headers: { 'Content-Type': 'application/json' },
      body: data,
    };

    const result = await fetchData(options);
    // print({result});
    if (result.errors) {
      print(result.errors);
      throw new Error('Error while fetching data from subgraph');
    } else if (result.data.lenderPools.length == 0) {
      return allData;
    } else if (result.data.lenderPools[0].lender.length == 0) {
      return allData;
    } else {
      skip++;
      allData.push(...result.data.lenderPools[0].lender);
    }
  }
}
