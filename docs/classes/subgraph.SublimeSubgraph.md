[sublime-sdk](../README.md) / [Modules](../modules.md) / [subgraph](../modules/subgraph.md) / SublimeSubgraph

# Class: SublimeSubgraph

[subgraph](../modules/subgraph.md).SublimeSubgraph

## Table of contents

### Constructors

- [constructor](subgraph.SublimeSubgraph.md#constructor)

### Properties

- [creditLineContract](subgraph.SublimeSubgraph.md#creditlinecontract)
- [pooledCreditLineContract](subgraph.SublimeSubgraph.md#pooledcreditlinecontract)
- [signer](subgraph.SublimeSubgraph.md#signer)
- [subgraphUrl](subgraph.SublimeSubgraph.md#subgraphurl)
- [sublimeAddresses](subgraph.SublimeSubgraph.md#sublimeaddresses)
- [tokenManager](subgraph.SublimeSubgraph.md#tokenmanager)
- [yieldApi](subgraph.SublimeSubgraph.md#yieldapi)

### Methods

- [calculateTotalCollateralTokens](subgraph.SublimeSubgraph.md#calculatetotalcollateraltokens)
- [getAPR](subgraph.SublimeSubgraph.md#getapr)
- [getAllCreditLines](subgraph.SublimeSubgraph.md#getallcreditlines)
- [getAllLendersOfPool](subgraph.SublimeSubgraph.md#getalllendersofpool)
- [getAllPooledCreditLines](subgraph.SublimeSubgraph.md#getallpooledcreditlines)
- [getAllPooledCreditLinesCreatedLatest](subgraph.SublimeSubgraph.md#getallpooledcreditlinescreatedlatest)
- [getAllPooledCreditLinesLenderCanLendTo](subgraph.SublimeSubgraph.md#getallpooledcreditlineslendercanlendto)
- [getAllPooledCreditLinesOfBorrower](subgraph.SublimeSubgraph.md#getallpooledcreditlinesofborrower)
- [getAllPooledCreditLinesOfLender](subgraph.SublimeSubgraph.md#getallpooledcreditlinesoflender)
- [getAllPooledCreditLinesOfUser](subgraph.SublimeSubgraph.md#getallpooledcreditlinesofuser)
- [getAllPoolsByPoolType](subgraph.SublimeSubgraph.md#getallpoolsbypooltype)
- [getAllowances](subgraph.SublimeSubgraph.md#getallowances)
- [getConfirmedCreditLinesOfBorrower](subgraph.SublimeSubgraph.md#getconfirmedcreditlinesofborrower)
- [getConfirmedCreditLinesOfLender](subgraph.SublimeSubgraph.md#getconfirmedcreditlinesoflender)
- [getCreditLine](subgraph.SublimeSubgraph.md#getcreditline)
- [getCreditLineTimeline](subgraph.SublimeSubgraph.md#getcreditlinetimeline)
- [getCreditLinesOverview](subgraph.SublimeSubgraph.md#getcreditlinesoverview)
- [getDashboardOverview](subgraph.SublimeSubgraph.md#getdashboardoverview)
- [getLendersPerPool](subgraph.SublimeSubgraph.md#getlendersperpool)
- [getPendingCreditLinesRequestedByBorrower](subgraph.SublimeSubgraph.md#getpendingcreditlinesrequestedbyborrower)
- [getPendingCreditLinesRequestedToBorrower](subgraph.SublimeSubgraph.md#getpendingcreditlinesrequestedtoborrower)
- [getPendingCreditLinesRequestedToLender](subgraph.SublimeSubgraph.md#getpendingcreditlinesrequestedtolender)
- [getPendingCreditlinesRequestedByLender](subgraph.SublimeSubgraph.md#getpendingcreditlinesrequestedbylender)
- [getPool](subgraph.SublimeSubgraph.md#getpool)
- [getPoolByBorrower](subgraph.SublimeSubgraph.md#getpoolbyborrower)
- [getPoolByBorrowerByType](subgraph.SublimeSubgraph.md#getpoolbyborrowerbytype)
- [getPoolByLender](subgraph.SublimeSubgraph.md#getpoolbylender)
- [getPoolByLenderByType](subgraph.SublimeSubgraph.md#getpoolbylenderbytype)
- [getPooledCreditLineById](subgraph.SublimeSubgraph.md#getpooledcreditlinebyid)
- [getPooledCreditLineTimeline](subgraph.SublimeSubgraph.md#getpooledcreditlinetimeline)
- [getPools](subgraph.SublimeSubgraph.md#getpools)
- [getProfileOverview](subgraph.SublimeSubgraph.md#getprofileoverview)
- [getRandomInt](subgraph.SublimeSubgraph.md#getrandomint)
- [getSavingsAccountOverview](subgraph.SublimeSubgraph.md#getsavingsaccountoverview)
- [getTotalCollateralTokensInPooledCreditlines](subgraph.SublimeSubgraph.md#gettotalcollateraltokensinpooledcreditlines)
- [getVerifiedTwitterId](subgraph.SublimeSubgraph.md#getverifiedtwitterid)
- [transformToCreditLine](subgraph.SublimeSubgraph.md#transformtocreditline)
- [transformToCreditLineOperations](subgraph.SublimeSubgraph.md#transformtocreditlineoperations)
- [transformToLenderContributionToPooledCreditLines](subgraph.SublimeSubgraph.md#transformtolendercontributiontopooledcreditlines)
- [transformToLenderPerPoolDetail](subgraph.SublimeSubgraph.md#transformtolenderperpooldetail)
- [transformToLenderPoolDetail](subgraph.SublimeSubgraph.md#transformtolenderpooldetail)
- [transformToPoolDetail](subgraph.SublimeSubgraph.md#transformtopooldetail)
- [transformToPooledCreditLine](subgraph.SublimeSubgraph.md#transformtopooledcreditline)
- [transformToPooledCreditLineOperation](subgraph.SublimeSubgraph.md#transformtopooledcreditlineoperation)
- [transformToSavingsAccountUserDetails](subgraph.SublimeSubgraph.md#transformtosavingsaccountuserdetails)

## Constructors

### constructor

• **new SublimeSubgraph**(`url`, `signer`, `tokenManager`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `signer` | `Signer` |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |

#### Defined in

[src/subgraph.ts:97](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L97)

## Properties

### creditLineContract

• `Private` **creditLineContract**: `CreditLine`

**`description`** instance of credit line contract

#### Defined in

[src/subgraph.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L87)

___

### pooledCreditLineContract

• `Private` **pooledCreditLineContract**: `PooledCreditLine`

#### Defined in

[src/subgraph.ts:89](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L89)

___

### signer

• `Private` **signer**: `Signer`

**`description`** signer used to sign

#### Defined in

[src/subgraph.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L77)

___

### subgraphUrl

• `Private` **subgraphUrl**: `string`

**`description`** subgraph url for fetching the sublime data

#### Defined in

[src/subgraph.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L72)

___

### sublimeAddresses

• `Private` **sublimeAddresses**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

**`description`** sublime config. (Contains all addresses relevant to sublime ecosystem)

#### Defined in

[src/subgraph.ts:95](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L95)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

**`description`** instance of token manager class that caches and retreives token data

#### Defined in

[src/subgraph.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L82)

___

### yieldApi

• `Private` **yieldApi**: [`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md)

#### Defined in

[src/subgraph.ts:91](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L91)

## Methods

### calculateTotalCollateralTokens

▸ `Private` **calculateTotalCollateralTokens**(`creditlineId`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditlineId` | `string` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/subgraph.ts:425](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L425)

___

### getAPR

▸ `Private` **getAPR**(`strategy`): `Promise`<`BigNumber`\>

**`@description`** calulcates the APR for a given strategy

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | `string` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/subgraph.ts:568](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L568)

___

### getAllCreditLines

▸ **getAllCreditLines**(`count?`, `skip?`): `Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

**`description`** use to fetch all the credit lines in the system

**`description`** don't use in production. It will be a 😰 (only for debugging)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `count` | `number` | `999` |
| `skip` | `number` | `0` |

#### Returns

`Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

#### Defined in

[src/subgraph.ts:802](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L802)

___

### getAllLendersOfPool

▸ **getAllLendersOfPool**(): `Promise`<[`PoolLender`](../interfaces/types_Types.PoolLender.md)[]\>

#### Returns

`Promise`<[`PoolLender`](../interfaces/types_Types.PoolLender.md)[]\>

All the lenders of a given pool

#### Defined in

[src/subgraph.ts:179](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L179)

___

### getAllPooledCreditLines

▸ **getAllPooledCreditLines**(`count?`, `skip?`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

**`description`** Returns pooled credit lines in random order

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `count` | `number` | `999` |
| `skip` | `number` | `0` |

#### Returns

`Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Defined in

[src/subgraph.ts:214](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L214)

___

### getAllPooledCreditLinesCreatedLatest

▸ **getAllPooledCreditLinesCreatedLatest**(): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

**`description`** Returns pooled credit lines in order created latest. Preferable don't use

#### Returns

`Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Defined in

[src/subgraph.ts:223](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L223)

___

### getAllPooledCreditLinesLenderCanLendTo

▸ **getAllPooledCreditLinesLenderCanLendTo**(`lender?`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender?` | `string` |

#### Returns

`Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Defined in

[src/subgraph.ts:239](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L239)

___

### getAllPooledCreditLinesOfBorrower

▸ **getAllPooledCreditLinesOfBorrower**(`address`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Defined in

[src/subgraph.ts:255](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L255)

___

### getAllPooledCreditLinesOfLender

▸ **getAllPooledCreditLinesOfLender**(`lender`): `Promise`<[[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[], [`LenderContributionToPooledCreditLines`](../interfaces/types_Types.LenderContributionToPooledCreditLines.md)[]]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |

#### Returns

`Promise`<[[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[], [`LenderContributionToPooledCreditLines`](../interfaces/types_Types.LenderContributionToPooledCreditLines.md)[]]\>

#### Defined in

[src/subgraph.ts:260](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L260)

___

### getAllPooledCreditLinesOfUser

▸ **getAllPooledCreditLinesOfUser**(`user`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |

#### Returns

`Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Defined in

[src/subgraph.ts:267](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L267)

___

### getAllPoolsByPoolType

▸ **getAllPoolsByPoolType**(`poolType`): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `poolType` | `string` | (possible types of pools include: ACTIVE, CLOSED, REQUESTED, LIQUIDATED) |

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

Array of specific pool types

#### Defined in

[src/subgraph.ts:122](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L122)

___

### getAllowances

▸ **getAllowances**(): `Promise`<`any`[]\>

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/subgraph.ts:901](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L901)

___

### getConfirmedCreditLinesOfBorrower

▸ **getConfirmedCreditLinesOfBorrower**(`borrower`, `count?`, `skip?`): `Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

**`description`** Returns the confirmed credit lines of a borrower

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `borrower` | `string` | `undefined` |
| `count` | `number` | `999` |
| `skip` | `number` | `0` |

#### Returns

`Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

#### Defined in

[src/subgraph.ts:813](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L813)

___

### getConfirmedCreditLinesOfLender

▸ **getConfirmedCreditLinesOfLender**(`lender`, `count`, `skip`): `Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

**`description`** Returns the confirmed credit lines of a lender

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |
| `count` | `number` |
| `skip` | `number` |

#### Returns

`Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

#### Defined in

[src/subgraph.ts:824](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L824)

___

### getCreditLine

▸ **getCreditLine**(`id`): `Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)\>

**`description`** returns a detailed information of a single credit line.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)\>

#### Defined in

[src/subgraph.ts:877](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L877)

___

### getCreditLineTimeline

▸ **getCreditLineTimeline**(`creditLine`): `Promise`<[`CreditLineOperation`](../interfaces/types_Types.CreditLineOperation.md)[]\>

**`description`** returns the operations made on a credit line in time-wise order

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLine` | `string` |

#### Returns

`Promise`<[`CreditLineOperation`](../interfaces/types_Types.CreditLineOperation.md)[]\>

#### Defined in

[src/subgraph.ts:891](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L891)

___

### getCreditLinesOverview

▸ **getCreditLinesOverview**(`address`): `Promise`<[`CreditLinesOverview`](../interfaces/types_Types.CreditLinesOverview.md)\>

**`description`** Returns the credit lines overview of the user

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<[`CreditLinesOverview`](../interfaces/types_Types.CreditLinesOverview.md)\>

#### Defined in

[src/subgraph.ts:730](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L730)

___

### getDashboardOverview

▸ **getDashboardOverview**(`address`): `Promise`<[`DashboardOverview`](../interfaces/types_Types.DashboardOverview.md)\>

**`description`** Return the dashboard view type for a user

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<[`DashboardOverview`](../interfaces/types_Types.DashboardOverview.md)\>

#### Defined in

[src/subgraph.ts:717](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L717)

___

### getLendersPerPool

▸ **getLendersPerPool**(`id`): `Promise`<[`LenderPoolDetail`](../interfaces/types_Types.LenderPoolDetail.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<[`LenderPoolDetail`](../interfaces/types_Types.LenderPoolDetail.md)\>

#### Defined in

[src/subgraph.ts:276](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L276)

___

### getPendingCreditLinesRequestedByBorrower

▸ **getPendingCreditLinesRequestedByBorrower**(`borrower`, `count`, `skip`): `Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

**`description`** Returns the list of credit lines which have been requests by the borrower but not accpeted by any lender

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |
| `count` | `number` |
| `skip` | `number` |

#### Returns

`Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

#### Defined in

[src/subgraph.ts:846](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L846)

___

### getPendingCreditLinesRequestedToBorrower

▸ **getPendingCreditLinesRequestedToBorrower**(`borrower`, `count`, `skip`): `Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

**`description`** Returns the list of poending credit lines which have requested to a borrower by all other lenders

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |
| `count` | `number` |
| `skip` | `number` |

#### Returns

`Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

#### Defined in

[src/subgraph.ts:868](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L868)

___

### getPendingCreditLinesRequestedToLender

▸ **getPendingCreditLinesRequestedToLender**(`lender`, `count`, `skip`): `Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

**`description`** Returns the list of poending credit lines which have requested to a lender by all other borrowers

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |
| `count` | `number` |
| `skip` | `number` |

#### Returns

`Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

#### Defined in

[src/subgraph.ts:857](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L857)

___

### getPendingCreditlinesRequestedByLender

▸ **getPendingCreditlinesRequestedByLender**(`lender`, `count`, `skip`): `Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

**`description`** Returns the list of credit lines which have been requested by the lender but not accepted by any borrower

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |
| `count` | `number` |
| `skip` | `number` |

#### Returns

`Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

#### Defined in

[src/subgraph.ts:835](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L835)

___

### getPool

▸ **getPool**(`poolId`): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolId` | `string` |

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)\>

pool data if the pool exists, else null

#### Defined in

[src/subgraph.ts:131](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L131)

___

### getPoolByBorrower

▸ **getPoolByBorrower**(`borrower`): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

Array of pools for the corresponding borrower

#### Defined in

[src/subgraph.ts:141](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L141)

___

### getPoolByBorrowerByType

▸ **getPoolByBorrowerByType**(`borrower`, `poolType`): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |
| `poolType` | `string` |

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

Array of pool

#### Defined in

[src/subgraph.ts:170](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L170)

___

### getPoolByLender

▸ **getPoolByLender**(`lender`): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

Array of pool for the lender

#### Defined in

[src/subgraph.ts:150](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L150)

___

### getPoolByLenderByType

▸ **getPoolByLenderByType**(`lender`, `poolType`): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |
| `poolType` | `string` |

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

Array of pool

#### Defined in

[src/subgraph.ts:160](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L160)

___

### getPooledCreditLineById

▸ **getPooledCreditLineById**(`id`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Defined in

[src/subgraph.ts:250](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L250)

___

### getPooledCreditLineTimeline

▸ **getPooledCreditLineTimeline**(`pooledCreditLineId`): `Promise`<[`PooledCreditLineOperation`](../interfaces/types_Types.PooledCreditLineOperation.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pooledCreditLineId` | `string` |

#### Returns

`Promise`<[`PooledCreditLineOperation`](../interfaces/types_Types.PooledCreditLineOperation.md)[]\>

#### Defined in

[src/subgraph.ts:271](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L271)

___

### getPools

▸ **getPools**(): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

Array of all pools created on sublime

#### Defined in

[src/subgraph.ts:112](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L112)

___

### getProfileOverview

▸ **getProfileOverview**(`address`): `Promise`<[`ProfileOverview`](../interfaces/types_Types.ProfileOverview.md)\>

**`description`** Return the profiel overview of the user

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<[`ProfileOverview`](../interfaces/types_Types.ProfileOverview.md)\>

#### Defined in

[src/subgraph.ts:780](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L780)

___

### getRandomInt

▸ `Private` **getRandomInt**(`max`): `number`

**`description`** Function to generate a random decimals in range (0, max)

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `any` |

#### Returns

`number`

#### Defined in

[src/subgraph.ts:954](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L954)

___

### getSavingsAccountOverview

▸ **getSavingsAccountOverview**(`address`): `Promise`<[`SavingAccountUserDetailDisplay`](../interfaces/types_Types.SavingAccountUserDetailDisplay.md)\>

**`description`** Returns savings account overview for a user address

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<[`SavingAccountUserDetailDisplay`](../interfaces/types_Types.SavingAccountUserDetailDisplay.md)\>

#### Defined in

[src/subgraph.ts:706](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L706)

___

### getTotalCollateralTokensInPooledCreditlines

▸ `Private` **getTotalCollateralTokensInPooledCreditlines**(`id`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/subgraph.ts:355](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L355)

___

### getVerifiedTwitterId

▸ **getVerifiedTwitterId**(`address`): `Promise`<[`TwitterDetails`](../interfaces/types_Types.TwitterDetails.md)[]\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | Address of the user to fetch |

#### Returns

`Promise`<[`TwitterDetails`](../interfaces/types_Types.TwitterDetails.md)[]\>

#### Defined in

[src/subgraph.ts:963](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L963)

___

### transformToCreditLine

▸ `Private` **transformToCreditLine**(`data`): `Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

**`description`** transaform the data recevied from the subgraph to type

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

#### Defined in

[src/subgraph.ts:439](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L439)

___

### transformToCreditLineOperations

▸ `Private` **transformToCreditLineOperations**(`cl`): `Promise`<[`CreditLineOperation`](../interfaces/types_Types.CreditLineOperation.md)[]\>

**`description`** Transforms the data received from the subgraph into type

#### Parameters

| Name | Type |
| :------ | :------ |
| `cl` | `any` |

#### Returns

`Promise`<[`CreditLineOperation`](../interfaces/types_Types.CreditLineOperation.md)[]\>

#### Defined in

[src/subgraph.ts:910](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L910)

___

### transformToLenderContributionToPooledCreditLines

▸ `Private` **transformToLenderContributionToPooledCreditLines**(`pooledCreditLines`, `data`): `Promise`<[`LenderContributionToPooledCreditLines`](../interfaces/types_Types.LenderContributionToPooledCreditLines.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pooledCreditLines` | [`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[] |
| `data` | `any`[] |

#### Returns

`Promise`<[`LenderContributionToPooledCreditLines`](../interfaces/types_Types.LenderContributionToPooledCreditLines.md)[]\>

#### Defined in

[src/subgraph.ts:932](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L932)

___

### transformToLenderPerPoolDetail

▸ `Private` **transformToLenderPerPoolDetail**(`data`, `collateralDecimal`): [`LenderPerPoolDetail`](../interfaces/types_Types.LenderPerPoolDetail.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |
| `collateralDecimal` | `number` |

#### Returns

[`LenderPerPoolDetail`](../interfaces/types_Types.LenderPerPoolDetail.md)[]

#### Defined in

[src/subgraph.ts:332](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L332)

___

### transformToLenderPoolDetail

▸ `Private` **transformToLenderPoolDetail**(`data`): `Promise`<[`LenderPoolDetail`](../interfaces/types_Types.LenderPoolDetail.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<[`LenderPoolDetail`](../interfaces/types_Types.LenderPoolDetail.md)[]\>

#### Defined in

[src/subgraph.ts:285](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L285)

___

### transformToPoolDetail

▸ `Private` **transformToPoolDetail**(`data`): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

**`@description`** transforms the data received from the subgraph to pool detail

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Defined in

[src/subgraph.ts:519](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L519)

___

### transformToPooledCreditLine

▸ `Private` **transformToPooledCreditLine**(`data`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Defined in

[src/subgraph.ts:364](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L364)

___

### transformToPooledCreditLineOperation

▸ `Private` **transformToPooledCreditLineOperation**(`data`): `Promise`<[`PooledCreditLineOperation`](../interfaces/types_Types.PooledCreditLineOperation.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<[`PooledCreditLineOperation`](../interfaces/types_Types.PooledCreditLineOperation.md)[]\>

#### Defined in

[src/subgraph.ts:344](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L344)

___

### transformToSavingsAccountUserDetails

▸ `Private` **transformToSavingsAccountUserDetails**(`address`, `data`): `Promise`<[`SavingAccountUserDetailDisplay`](../interfaces/types_Types.SavingAccountUserDetailDisplay.md)\>

**`description`** Tranforms the data received from the subgraph to type

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `data` | `any`[] |

#### Returns

`Promise`<[`SavingAccountUserDetailDisplay`](../interfaces/types_Types.SavingAccountUserDetailDisplay.md)\>

#### Defined in

[src/subgraph.ts:589](https://github.com/sublime-finance/sublime-sdk/blob/e1da289/src/subgraph.ts#L589)
