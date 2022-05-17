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

[src/subgraph/CreditLine.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/CreditLine.ts#L40)

## Properties

### creditLineContract

• `Private` **creditLineContract**: `CreditLine`

**`description`** instance of credit line contract

#### Defined in

[src/subgraph/CreditLine.ts:38](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/CreditLine.ts#L38)

___

### signer

• `Protected` **signer**: `Signer`

**`description`** signer used to sign

#### Inherited from

[Base](subgraph_Base.Base.md).[signer](subgraph_Base.Base.md#signer)

#### Defined in

[src/subgraph/Base.ts:18](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L18)

___

### subgraphUrl

• `Protected` **subgraphUrl**: `string`

**`description`** subgraph url for fetching the sublime data

#### Inherited from

[Base](subgraph_Base.Base.md).[subgraphUrl](subgraph_Base.Base.md#subgraphurl)

#### Defined in

[src/subgraph/Base.ts:13](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L13)

___

### sublimeAddresses

• `Protected` **sublimeAddresses**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

**`description`** sublime config. (Contains all addresses relevant to sublime ecosystem)

#### Inherited from

[Base](subgraph_Base.Base.md).[sublimeAddresses](subgraph_Base.Base.md#sublimeaddresses)

#### Defined in

[src/subgraph/Base.ts:30](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L30)

___

### tokenManager

• `Protected` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

**`description`** instance of token manager class that caches and retreives token data

#### Inherited from

[Base](subgraph_Base.Base.md).[tokenManager](subgraph_Base.Base.md#tokenmanager)

#### Defined in

[src/subgraph/Base.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L23)

___

### yieldApi

• `Protected` **yieldApi**: [`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md)

#### Inherited from

[Base](subgraph_Base.Base.md).[yieldApi](subgraph_Base.Base.md#yieldapi)

#### Defined in

[src/subgraph/Base.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L25)

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

[src/subgraph/CreditLine.ts:152](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/CreditLine.ts#L152)

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

[src/subgraph/CreditLine.ts:144](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/CreditLine.ts#L144)

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

[src/subgraph/CreditLine.ts:136](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/CreditLine.ts#L136)

___

### countAllCreditLines

▸ **countAllCreditLines**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

[src/subgraph/CreditLine.ts:333](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/CreditLine.ts#L333)

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

[src/subgraph/CreditLine.ts:338](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/CreditLine.ts#L338)

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

[src/subgraph/CreditLine.ts:347](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/CreditLine.ts#L347)

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

[src/subgraph/CreditLine.ts:361](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/CreditLine.ts#L361)

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

[src/subgraph/CreditLine.ts:370](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/CreditLine.ts#L370)

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

[src/subgraph/CreditLine.ts:407](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/CreditLine.ts#L407)

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

[src/subgraph/CreditLine.ts:416](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/CreditLine.ts#L416)

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

[src/subgraph/CreditLine.ts:384](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/CreditLine.ts#L384)

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

[src/subgraph/CreditLine.ts:393](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/CreditLine.ts#L393)

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

[src/subgraph/CreditLine.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/CreditLine.ts#L52)

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

[src/subgraph/CreditLine.ts:168](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/CreditLine.ts#L168)

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

[src/subgraph/CreditLine.ts:179](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/CreditLine.ts#L179)

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

[src/subgraph/CreditLine.ts:232](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/CreditLine.ts#L232)

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

[src/subgraph/CreditLine.ts:296](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/CreditLine.ts#L296)

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

[src/subgraph/CreditLine.ts:246](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/CreditLine.ts#L246)

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

[src/subgraph/Base.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L54)

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

[src/subgraph/CreditLine.ts:201](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/CreditLine.ts#L201)

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

[src/subgraph/CreditLine.ts:223](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/CreditLine.ts#L223)

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

[src/subgraph/CreditLine.ts:212](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/CreditLine.ts#L212)

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

[src/subgraph/CreditLine.ts:190](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/CreditLine.ts#L190)

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

[src/subgraph/Base.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L46)

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

[src/subgraph/CreditLine.ts:62](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/CreditLine.ts#L62)

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

[src/subgraph/CreditLine.ts:311](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/CreditLine.ts#L311)
