[sublime-sdk](../README.md) / [Modules](../modules.md) / [subgraph/CreditLine](../modules/subgraph_CreditLine.md) / CreditLineCalls

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

- [creditLineContract](subgraph_CreditLine.CreditLineCalls.md#creditlinecontract)
- [signer](subgraph_CreditLine.CreditLineCalls.md#signer)
- [subgraphUrl](subgraph_CreditLine.CreditLineCalls.md#subgraphurl)
- [sublimeAddresses](subgraph_CreditLine.CreditLineCalls.md#sublimeaddresses)
- [tokenManager](subgraph_CreditLine.CreditLineCalls.md#tokenmanager)
- [verificationApi](subgraph_CreditLine.CreditLineCalls.md#verificationapi)
- [yieldApi](subgraph_CreditLine.CreditLineCalls.md#yieldapi)

### Methods

- [calculateCollateralRatioForCreditLines](subgraph_CreditLine.CreditLineCalls.md#calculatecollateralratioforcreditlines)
- [calculateCurrentDebtForCreditLines](subgraph_CreditLine.CreditLineCalls.md#calculatecurrentdebtforcreditlines)
- [calculateInterestAccruedForCreditLines](subgraph_CreditLine.CreditLineCalls.md#calculateinterestaccruedforcreditlines)
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
- [transformToCreditLine](subgraph_CreditLine.CreditLineCalls.md#transformtocreditline)
- [transformToCreditLineOperations](subgraph_CreditLine.CreditLineCalls.md#transformtocreditlineoperations)

## Constructors

### constructor

• **new CreditLineCalls**(`url`, `signer`, `tokenManager`, `config`)

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

[src/subgraph/CreditLine.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/CreditLine.ts#L40)

## Properties

### creditLineContract

• `Private` **creditLineContract**: `CreditLine`

**`description`** instance of credit line contract

#### Defined in

[src/subgraph/CreditLine.ts:38](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/CreditLine.ts#L38)

___

### signer

• `Protected` **signer**: `Signer`

**`description`** signer used to sign

#### Inherited from

[Base](subgraph_Base.Base.md).[signer](subgraph_Base.Base.md#signer)

#### Defined in

[src/subgraph/Base.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/Base.ts#L19)

___

### subgraphUrl

• `Protected` **subgraphUrl**: `string`

**`description`** subgraph url for fetching the sublime data

#### Inherited from

[Base](subgraph_Base.Base.md).[subgraphUrl](subgraph_Base.Base.md#subgraphurl)

#### Defined in

[src/subgraph/Base.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/Base.ts#L14)

___

### sublimeAddresses

• `Protected` **sublimeAddresses**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

**`description`** sublime config. (Contains all addresses relevant to sublime ecosystem)

#### Inherited from

[Base](subgraph_Base.Base.md).[sublimeAddresses](subgraph_Base.Base.md#sublimeaddresses)

#### Defined in

[src/subgraph/Base.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/Base.ts#L33)

___

### tokenManager

• `Protected` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

**`description`** instance of token manager class that caches and retreives token data

#### Inherited from

[Base](subgraph_Base.Base.md).[tokenManager](subgraph_Base.Base.md#tokenmanager)

#### Defined in

[src/subgraph/Base.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/Base.ts#L24)

___

### verificationApi

• `Protected` **verificationApi**: [`VerificationAPI`](api_verification.VerificationAPI.md)

#### Inherited from

[Base](subgraph_Base.Base.md).[verificationApi](subgraph_Base.Base.md#verificationapi)

#### Defined in

[src/subgraph/Base.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/Base.ts#L28)

___

### yieldApi

• `Protected` **yieldApi**: [`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md)

#### Inherited from

[Base](subgraph_Base.Base.md).[yieldApi](subgraph_Base.Base.md#yieldapi)

#### Defined in

[src/subgraph/Base.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/Base.ts#L26)

## Methods

### calculateCollateralRatioForCreditLines

▸ `Private` **calculateCollateralRatioForCreditLines**(`creditLineId`): `Promise`<[`BigNumber`, `BigNumber`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineId` | `string` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`]\>

#### Defined in

[src/subgraph/CreditLine.ts:153](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/CreditLine.ts#L153)

___

### calculateCurrentDebtForCreditLines

▸ `Private` **calculateCurrentDebtForCreditLines**(`creditLineId`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineId` | `string` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/subgraph/CreditLine.ts:145](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/CreditLine.ts#L145)

___

### calculateInterestAccruedForCreditLines

▸ `Private` **calculateInterestAccruedForCreditLines**(`creditLineId`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineId` | `string` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/subgraph/CreditLine.ts:137](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/CreditLine.ts#L137)

___

### countAllCreditLines

▸ **countAllCreditLines**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

[src/subgraph/CreditLine.ts:334](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/CreditLine.ts#L334)

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

[src/subgraph/CreditLine.ts:339](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/CreditLine.ts#L339)

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

[src/subgraph/CreditLine.ts:348](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/CreditLine.ts#L348)

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

[src/subgraph/CreditLine.ts:362](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/CreditLine.ts#L362)

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

[src/subgraph/CreditLine.ts:371](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/CreditLine.ts#L371)

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

[src/subgraph/CreditLine.ts:408](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/CreditLine.ts#L408)

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

[src/subgraph/CreditLine.ts:417](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/CreditLine.ts#L417)

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

[src/subgraph/CreditLine.ts:385](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/CreditLine.ts#L385)

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

[src/subgraph/CreditLine.ts:394](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/CreditLine.ts#L394)

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

[src/subgraph/CreditLine.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/CreditLine.ts#L52)

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

[src/subgraph/CreditLine.ts:169](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/CreditLine.ts#L169)

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

[src/subgraph/CreditLine.ts:180](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/CreditLine.ts#L180)

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

[src/subgraph/CreditLine.ts:233](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/CreditLine.ts#L233)

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

[src/subgraph/CreditLine.ts:297](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/CreditLine.ts#L297)

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

[src/subgraph/CreditLine.ts:247](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/CreditLine.ts#L247)

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

[src/subgraph/Base.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/Base.ts#L58)

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

[src/subgraph/CreditLine.ts:202](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/CreditLine.ts#L202)

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

[src/subgraph/CreditLine.ts:224](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/CreditLine.ts#L224)

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

[src/subgraph/CreditLine.ts:213](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/CreditLine.ts#L213)

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

[src/subgraph/CreditLine.ts:191](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/CreditLine.ts#L191)

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

[src/subgraph/Base.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/Base.ts#L50)

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

[src/subgraph/CreditLine.ts:62](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/CreditLine.ts#L62)

___

### transformToCreditLineOperations

▸ `Protected` **transformToCreditLineOperations**(`cl`): `Promise`<[`CreditLineOperation`](../interfaces/types_Types.CreditLineOperation.md)[]\>

**`description`** Transforms the data received from the subgraph into type

#### Parameters

| Name | Type |
| :------ | :------ |
| `cl` | `any` |

#### Returns

`Promise`<[`CreditLineOperation`](../interfaces/types_Types.CreditLineOperation.md)[]\>

#### Defined in

[src/subgraph/CreditLine.ts:312](https://github.com/sublime-finance/sublime-sdk/blob/79e1c95/src/subgraph/CreditLine.ts#L312)
