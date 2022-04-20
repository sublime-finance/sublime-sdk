import { fetchData, print } from '../helpers';

export async function getPooledCreditLineTimeline(url: string, pooledCreditLineId: string): Promise<any[]> {
  const allData = [];
  const data = JSON.stringify({
    query: `{
        pooledCreditLineTimeLines(where:{pooledCreditLine:"${pooledCreditLineId}"}){
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
        lenderPerLenderPools(where:{lenderAddress:"${lenderAddress}"}){
          lenderAddress
          amountLent
          amountWithdrawn
          sharesWithdrawn
          interestWithdrawn
          lenderPool{
            pooledCreditLine(first:${count}, skip:${skip}, orderBy:createdAt, orderDirection:desc){
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
