[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [subgraph/CreditLine](../modules/subgraph_CreditLine.md) / CreditLineCalls

# Class: CreditLineCalls

[subgraph/CreditLine](../modules/subgraph_CreditLine.md).CreditLineCalls

## Hierarchy

- [`Base`](subgraph_Base.Base.md)

  ↳ **`CreditLineCalls`**

  ↳↳ [`PooledCreditLineCalls`](subgraph_PooledCreditLine.PooledCreditLineCalls.md)

## Table of contents

### Constructors

- [constructor](subgraph_CreditLine.CreditLineCalls.md#constructor)

### Properties

- [signer](subgraph_CreditLine.CreditLineCalls.md#signer)
- [subgraphUrl](subgraph_CreditLine.CreditLineCalls.md#subgraphurl)
- [sublimeAddresses](subgraph_CreditLine.CreditLineCalls.md#sublimeaddresses)
- [tokenManager](subgraph_CreditLine.CreditLineCalls.md#tokenmanager)
- [verificationApi](subgraph_CreditLine.CreditLineCalls.md#verificationapi)
- [yieldApi](subgraph_CreditLine.CreditLineCalls.md#yieldapi)

### Methods

- [convertToCreditLineStatusEnum](subgraph_CreditLine.CreditLineCalls.md#converttocreditlinestatusenum)
- [countAllCreditLines](subgraph_CreditLine.CreditLineCalls.md#countallcreditlines)
- [countAllCreditLinesOfBorrowerWithStateIn](subgraph_CreditLine.CreditLineCalls.md#countallcreditlinesofborrowerwithstatein)
- [countAllCreditLinesOfBorrowerWithStateIn\_requestByLender](subgraph_CreditLine.CreditLineCalls.md#countallcreditlinesofborrowerwithstatein_requestbylender)
- [countAllCreditLinesOfBorrowerWithStateNotIn](subgraph_CreditLine.CreditLineCalls.md#countallcreditlinesofborrowerwithstatenotin)
- [countAllCreditLinesOfBorrowerWithStateNotIn\_requestByLender](subgraph_CreditLine.CreditLineCalls.md#countallcreditlinesofborrowerwithstatenotin_requestbylender)
- [countAllCreditLinesOfLenderWithStateIn](subgraph_CreditLine.CreditLineCalls.md#countallcreditlinesoflenderwithstatein)
- [countAllCreditLinesOfLenderWithStateIn\_requestByLender](subgraph_CreditLine.CreditLineCalls.md#countallcreditlinesoflenderwithstatein_requestbylender)
- [countAllCreditLinesOfLenderWithStateNotIn](subgraph_CreditLine.CreditLineCalls.md#countallcreditlinesoflenderwithstatenotin)
- [countAllCreditLinesOfLenderWithStateNotIn\_requestByLender](subgraph_CreditLine.CreditLineCalls.md#countallcreditlinesoflenderwithstatenotin_requestbylender)
- [getAllCreditLines](subgraph_CreditLine.CreditLineCalls.md#getallcreditlines)
- [getConfirmedCreditLinesOfBorrower](subgraph_CreditLine.CreditLineCalls.md#getconfirmedcreditlinesofborrower)
- [getConfirmedCreditLinesOfLender](subgraph_CreditLine.CreditLineCalls.md#getconfirmedcreditlinesoflender)
- [getCreditLine](subgraph_CreditLine.CreditLineCalls.md#getcreditline)
- [getCreditLineTimeline](subgraph_CreditLine.CreditLineCalls.md#getcreditlinetimeline)
- [getCreditLinesOverview](subgraph_CreditLine.CreditLineCalls.md#getcreditlinesoverview)
- [getDashboardOverview](subgraph_CreditLine.CreditLineCalls.md#getdashboardoverview)
- [getPendingCreditLinesRequestedByBorrower](subgraph_CreditLine.CreditLineCalls.md#getpendingcreditlinesrequestedbyborrower)
- [getPendingCreditLinesRequestedToBorrower](subgraph_CreditLine.CreditLineCalls.md#getpendingcreditlinesrequestedtoborrower)
- [getPendingCreditLinesRequestedToLender](subgraph_CreditLine.CreditLineCalls.md#getpendingcreditlinesrequestedtolender)
- [getPendingCreditlinesRequestedByLender](subgraph_CreditLine.CreditLineCalls.md#getpendingcreditlinesrequestedbylender)
- [getRandomInt](subgraph_CreditLine.CreditLineCalls.md#getrandomint)
- [getTokensForShares](subgraph_CreditLine.CreditLineCalls.md#gettokensforshares)
- [refreshStrategyData](subgraph_CreditLine.CreditLineCalls.md#refreshstrategydata)
- [refreshStrategyDataForPcl](subgraph_CreditLine.CreditLineCalls.md#refreshstrategydataforpcl)
- [refreshTokenData](subgraph_CreditLine.CreditLineCalls.md#refreshtokendata)
- [transformToCreditLine](subgraph_CreditLine.CreditLineCalls.md#transformtocreditline)
- [transformToCreditLineEmulator](subgraph_CreditLine.CreditLineCalls.md#transformtocreditlineemulator)
- [transformToCreditLineOperations](subgraph_CreditLine.CreditLineCalls.md#transformtocreditlineoperations)

## Constructors

### constructor

• **new CreditLineCalls**(`url`, `signer`, `tokenManager`, `config`)

**`description`** instance of credit line contract

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `signer` | `Signer` |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |

#### Overrides

[Base](subgraph_Base.Base.md).[constructor](subgraph_Base.Base.md#constructor)

#### Defined in

[src/subgraph/CreditLine.ts:37](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/CreditLine.ts#L37)

## Properties

### signer

• `Protected` **signer**: `Signer`

**`description`** signer used to sign

#### Inherited from

[Base](subgraph_Base.Base.md).[signer](subgraph_Base.Base.md#signer)

#### Defined in

[src/subgraph/Base.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/Base.ts#L19)

___

### subgraphUrl

• `Protected` **subgraphUrl**: `string`

**`description`** subgraph url for fetching the sublime data

#### Inherited from

[Base](subgraph_Base.Base.md).[subgraphUrl](subgraph_Base.Base.md#subgraphurl)

#### Defined in

[src/subgraph/Base.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/Base.ts#L14)

___

### sublimeAddresses

• `Protected` **sublimeAddresses**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

**`description`** sublime config. (Contains all addresses relevant to sublime ecosystem)

#### Inherited from

[Base](subgraph_Base.Base.md).[sublimeAddresses](subgraph_Base.Base.md#sublimeaddresses)

#### Defined in

[src/subgraph/Base.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/Base.ts#L33)

___

### tokenManager

• `Protected` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

**`description`** instance of token manager class that caches and retreives token data

#### Inherited from

[Base](subgraph_Base.Base.md).[tokenManager](subgraph_Base.Base.md#tokenmanager)

#### Defined in

[src/subgraph/Base.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/Base.ts#L24)

___

### verificationApi

• `Protected` **verificationApi**: [`VerificationAPI`](api_verification.VerificationAPI.md)

#### Inherited from

[Base](subgraph_Base.Base.md).[verificationApi](subgraph_Base.Base.md#verificationapi)

#### Defined in

[src/subgraph/Base.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/Base.ts#L28)

___

### yieldApi

• `Protected` **yieldApi**: [`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md)

#### Inherited from

[Base](subgraph_Base.Base.md).[yieldApi](subgraph_Base.Base.md#yieldapi)

#### Defined in

[src/subgraph/Base.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/Base.ts#L26)

## Methods

### convertToCreditLineStatusEnum

▸ `Private` **convertToCreditLineStatusEnum**(`stateInSubgraph`): [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateInSubgraph` | `string` |

#### Returns

[`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)

#### Defined in

[src/subgraph/CreditLine.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/CreditLine.ts#L56)

___

### countAllCreditLines

▸ **countAllCreditLines**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

[src/subgraph/CreditLine.ts:343](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/CreditLine.ts#L343)

___

### countAllCreditLinesOfBorrowerWithStateIn

▸ **countAllCreditLinesOfBorrowerWithStateIn**(`borrower`, `state`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/subgraph/CreditLine.ts:348](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/CreditLine.ts#L348)

___

### countAllCreditLinesOfBorrowerWithStateIn\_requestByLender

▸ **countAllCreditLinesOfBorrowerWithStateIn_requestByLender**(`borrower`, `requestByLender`, `state`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |
| `requestByLender` | `boolean` |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/subgraph/CreditLine.ts:357](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/CreditLine.ts#L357)

___

### countAllCreditLinesOfBorrowerWithStateNotIn

▸ **countAllCreditLinesOfBorrowerWithStateNotIn**(`borrower`, `state`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/subgraph/CreditLine.ts:371](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/CreditLine.ts#L371)

___

### countAllCreditLinesOfBorrowerWithStateNotIn\_requestByLender

▸ **countAllCreditLinesOfBorrowerWithStateNotIn_requestByLender**(`borrower`, `requestByLender`, `state`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |
| `requestByLender` | `boolean` |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/subgraph/CreditLine.ts:380](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/CreditLine.ts#L380)

___

### countAllCreditLinesOfLenderWithStateIn

▸ **countAllCreditLinesOfLenderWithStateIn**(`lender`, `state`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/subgraph/CreditLine.ts:417](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/CreditLine.ts#L417)

___

### countAllCreditLinesOfLenderWithStateIn\_requestByLender

▸ **countAllCreditLinesOfLenderWithStateIn_requestByLender**(`lender`, `requestByLender`, `state`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |
| `requestByLender` | `boolean` |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/subgraph/CreditLine.ts:426](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/CreditLine.ts#L426)

___

### countAllCreditLinesOfLenderWithStateNotIn

▸ **countAllCreditLinesOfLenderWithStateNotIn**(`lender`, `state`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/subgraph/CreditLine.ts:394](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/CreditLine.ts#L394)

___

### countAllCreditLinesOfLenderWithStateNotIn\_requestByLender

▸ **countAllCreditLinesOfLenderWithStateNotIn_requestByLender**(`lender`, `requestByLender`, `state`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |
| `requestByLender` | `boolean` |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/subgraph/CreditLine.ts:403](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/CreditLine.ts#L403)

___

### getAllCreditLines

▸ **getAllCreditLines**(`count?`, `skip?`): `Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

**`description`** use to fetch all the credit lines in the system

**`description`** don't use in production. It will be a 😰 (only for debugging)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `count` | `number` | `13` |
| `skip` | `number` | `0` |

#### Returns

`Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

#### Defined in

[src/subgraph/CreditLine.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/CreditLine.ts#L48)

___

### getConfirmedCreditLinesOfBorrower

▸ **getConfirmedCreditLinesOfBorrower**(`borrower`, `count?`, `skip?`): `Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

**`description`** Returns the confirmed credit lines of a borrower

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `borrower` | `string` | `undefined` |
| `count` | `number` | `13` |
| `skip` | `number` | `0` |

#### Returns

`Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

#### Defined in

[src/subgraph/CreditLine.ts:140](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/CreditLine.ts#L140)

___

### getConfirmedCreditLinesOfLender

▸ **getConfirmedCreditLinesOfLender**(`lender`, `count?`, `skip?`): `Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

**`description`** Returns the confirmed credit lines of a lender

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `lender` | `string` | `undefined` |
| `count` | `number` | `13` |
| `skip` | `number` | `0` |

#### Returns

`Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

#### Defined in

[src/subgraph/CreditLine.ts:154](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/CreditLine.ts#L154)

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

[src/subgraph/CreditLine.ts:222](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/CreditLine.ts#L222)

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

[src/subgraph/CreditLine.ts:289](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/CreditLine.ts#L289)

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

[src/subgraph/CreditLine.ts:239](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/CreditLine.ts#L239)

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

#### Inherited from

[Base](subgraph_Base.Base.md).[getDashboardOverview](subgraph_Base.Base.md#getdashboardoverview)

#### Defined in

[src/subgraph/Base.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/Base.ts#L58)

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

[src/subgraph/CreditLine.ts:182](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/CreditLine.ts#L182)

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

[src/subgraph/CreditLine.ts:210](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/CreditLine.ts#L210)

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

[src/subgraph/CreditLine.ts:196](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/CreditLine.ts#L196)

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

[src/subgraph/CreditLine.ts:168](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/CreditLine.ts#L168)

___

### getRandomInt

▸ `Protected` **getRandomInt**(`max`): `number`

**`description`** Function to generate a random decimals in range (0, max)

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `any` |

#### Returns

`number`

#### Inherited from

[Base](subgraph_Base.Base.md).[getRandomInt](subgraph_Base.Base.md#getrandomint)

#### Defined in

[src/subgraph/Base.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/Base.ts#L50)

___

### getTokensForShares

▸ `Protected` **getTokensForShares**(`strategy`, `collateralAsset`, `amount`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `collateralAsset` | `string` |
| `amount` | `BigNumber` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[Base](subgraph_Base.Base.md).[getTokensForShares](subgraph_Base.Base.md#gettokensforshares)

#### Defined in

[src/subgraph/Base.ts:138](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/Base.ts#L138)

___

### refreshStrategyData

▸ `Protected` **refreshStrategyData**(`data`): `Promise`<`Record`<`string`, `Record`<`string`, `BigNumber`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<`Record`<`string`, `Record`<`string`, `BigNumber`\>\>\>

#### Inherited from

[Base](subgraph_Base.Base.md).[refreshStrategyData](subgraph_Base.Base.md#refreshstrategydata)

#### Defined in

[src/subgraph/Base.ts:108](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/Base.ts#L108)

___

### refreshStrategyDataForPcl

▸ `Protected` **refreshStrategyDataForPcl**(`data`): `Promise`<`Record`<`string`, `Record`<`string`, `BigNumber`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<`Record`<`string`, `Record`<`string`, `BigNumber`\>\>\>

#### Inherited from

[Base](subgraph_Base.Base.md).[refreshStrategyDataForPcl](subgraph_Base.Base.md#refreshstrategydataforpcl)

#### Defined in

[src/subgraph/Base.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/Base.ts#L82)

___

### refreshTokenData

▸ `Protected` **refreshTokenData**(`data`): `Promise`<`Record`<`string`, `BigNumber`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<`Record`<`string`, `BigNumber`\>\>

#### Inherited from

[Base](subgraph_Base.Base.md).[refreshTokenData](subgraph_Base.Base.md#refreshtokendata)

#### Defined in

[src/subgraph/Base.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/Base.ts#L67)

___

### transformToCreditLine

▸ `Private` **transformToCreditLine**(`emulatorResult`, `prices`): [`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]

**`description`** transaform the data recevied from the subgraph to type

#### Parameters

| Name | Type |
| :------ | :------ |
| `emulatorResult` | `CreditLineEmulator`[] |
| `prices` | `Record`<`string`, `BigNumber`\> |

#### Returns

[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]

#### Defined in

[src/subgraph/CreditLine.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/CreditLine.ts#L77)

___

### transformToCreditLineEmulator

▸ `Private` **transformToCreditLineEmulator**(`data`, `prices`, `collateralPerStrategyToken`): `CreditLineEmulator`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |
| `prices` | `Record`<`string`, `BigNumber`\> |
| `collateralPerStrategyToken` | `Record`<`string`, `Record`<`string`, `BigNumber`\>\> |

#### Returns

`CreditLineEmulator`[]

#### Defined in

[src/subgraph/CreditLine.ts:440](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/CreditLine.ts#L440)

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

[src/subgraph/CreditLine.ts:304](https://github.com/sublime-finance/sublime-sdk/blob/5e39a5b/src/subgraph/CreditLine.ts#L304)
