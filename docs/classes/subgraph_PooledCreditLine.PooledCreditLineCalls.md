[sublime-sdk](../README.md) / [Modules](../modules.md) / [subgraph/PooledCreditLine](../modules/subgraph_PooledCreditLine.md) / PooledCreditLineCalls

# Class: PooledCreditLineCalls

[subgraph/PooledCreditLine](../modules/subgraph_PooledCreditLine.md).PooledCreditLineCalls

## Hierarchy

- [`CreditLineCalls`](subgraph_CreditLine.CreditLineCalls.md)

  ↳ **`PooledCreditLineCalls`**

  ↳↳ [`PoolCalls`](subgraph_Pools.PoolCalls.md)

## Table of contents

### Constructors

- [constructor](subgraph_PooledCreditLine.PooledCreditLineCalls.md#constructor)

### Properties

- [lenderPoolContract](subgraph_PooledCreditLine.PooledCreditLineCalls.md#lenderpoolcontract)
- [pooledCreditLineContract](subgraph_PooledCreditLine.PooledCreditLineCalls.md#pooledcreditlinecontract)
- [signer](subgraph_PooledCreditLine.PooledCreditLineCalls.md#signer)
- [subgraphUrl](subgraph_PooledCreditLine.PooledCreditLineCalls.md#subgraphurl)
- [sublimeAddresses](subgraph_PooledCreditLine.PooledCreditLineCalls.md#sublimeaddresses)
- [tokenManager](subgraph_PooledCreditLine.PooledCreditLineCalls.md#tokenmanager)
- [yieldApi](subgraph_PooledCreditLine.PooledCreditLineCalls.md#yieldapi)

### Methods

- [countAllCreditLines](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallcreditlines)
- [countAllCreditLinesOfBorrowerWithStateIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallcreditlinesofborrowerwithstatein)
- [countAllCreditLinesOfBorrowerWithStateIn\_requestByLender](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallcreditlinesofborrowerwithstatein_requestbylender)
- [countAllCreditLinesOfBorrowerWithStateNotIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallcreditlinesofborrowerwithstatenotin)
- [countAllCreditLinesOfBorrowerWithStateNotIn\_requestByLender](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallcreditlinesofborrowerwithstatenotin_requestbylender)
- [countAllCreditLinesOfLenderWithStateIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallcreditlinesoflenderwithstatein)
- [countAllCreditLinesOfLenderWithStateIn\_requestByLender](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallcreditlinesoflenderwithstatein_requestbylender)
- [countAllCreditLinesOfLenderWithStateNotIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallcreditlinesoflenderwithstatenotin)
- [countAllCreditLinesOfLenderWithStateNotIn\_requestByLender](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallcreditlinesoflenderwithstatenotin_requestbylender)
- [countAllLendersOfPool](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countalllendersofpool)
- [countAllPooledCreditLines](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlines)
- [countAllPooledCreditLinesOfBorrower](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlinesofborrower)
- [countAllPooledCreditLinesOfBorrowerWithState](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlinesofborrowerwithstate)
- [countAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlinesofborrowerwithstatenotin)
- [countAllPooledCreditLinesOfLender](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlinesoflender)
- [countAllPooledCreditLinesOfLenderWithState](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlinesoflenderwithstate)
- [countAllPooledCreditLinesOfLenderWithStateNotIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlinesoflenderwithstatenotin)
- [countAllPooledCreditLinesWithStates](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlineswithstates)
- [countAllPooledCreditLinesWithStatesNotIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlineswithstatesnotin)
- [getAllCreditLines](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getallcreditlines)
- [getAllPoolCreditLinesWithStateIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getallpoolcreditlineswithstatein)
- [getAllPoolCreditLinesWithStateNotIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getallpoolcreditlineswithstatenotin)
- [getAllPooledCreditLines](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getallpooledcreditlines)
- [getAllPooledCreditLinesLenderCanLendTo](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getallpooledcreditlineslendercanlendto)
- [getAllPooledCreditLinesOfBorrower](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getallpooledcreditlinesofborrower)
- [getAllPooledCreditLinesOfBorrowerWithStateIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getallpooledcreditlinesofborrowerwithstatein)
- [getAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getallpooledcreditlinesofborrowerwithstatenotin)
- [getAllPooledCreditLinesOfLender](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getallpooledcreditlinesoflender)
- [getAllPooledCreditLinesOfUser](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getallpooledcreditlinesofuser)
- [getConfirmedCreditLinesOfBorrower](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getconfirmedcreditlinesofborrower)
- [getConfirmedCreditLinesOfLender](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getconfirmedcreditlinesoflender)
- [getCreditLine](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getcreditline)
- [getCreditLineStatus](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getcreditlinestatus)
- [getCreditLineTimeline](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getcreditlinetimeline)
- [getCreditLinesOverview](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getcreditlinesoverview)
- [getCurrentColRatioOfPcl](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getcurrentcolratioofpcl)
- [getCurrentDebtForPooledCreditLines](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getcurrentdebtforpooledcreditlines)
- [getDashboardOverview](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getdashboardoverview)
- [getLendersPerPool](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getlendersperpool)
- [getLendersViewOfPooledCredit](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getlendersviewofpooledcredit)
- [getPendingCreditLinesRequestedByBorrower](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getpendingcreditlinesrequestedbyborrower)
- [getPendingCreditLinesRequestedToBorrower](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getpendingcreditlinesrequestedtoborrower)
- [getPendingCreditLinesRequestedToLender](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getpendingcreditlinesrequestedtolender)
- [getPendingCreditlinesRequestedByLender](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getpendingcreditlinesrequestedbylender)
- [getPooledCreditLineById](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getpooledcreditlinebyid)
- [getPooledCreditLineTimeline](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getpooledcreditlinetimeline)
- [getRandomInt](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getrandomint)
- [getTotalCollateralTokensInPooledCreditlines](subgraph_PooledCreditLine.PooledCreditLineCalls.md#gettotalcollateraltokensinpooledcreditlines)
- [transformToLenderContributionToPooledCreditLines](subgraph_PooledCreditLine.PooledCreditLineCalls.md#transformtolendercontributiontopooledcreditlines)
- [transformToLenderPerPoolDetail](subgraph_PooledCreditLine.PooledCreditLineCalls.md#transformtolenderperpooldetail)
- [transformToLenderPoolDetail](subgraph_PooledCreditLine.PooledCreditLineCalls.md#transformtolenderpooldetail)
- [transformToPooledCreditLine](subgraph_PooledCreditLine.PooledCreditLineCalls.md#transformtopooledcreditline)
- [transformToPooledCreditLineOperation](subgraph_PooledCreditLine.PooledCreditLineCalls.md#transformtopooledcreditlineoperation)

## Constructors

### constructor

• **new PooledCreditLineCalls**(`url`, `signer`, `tokenManager`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `signer` | `Signer` |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |

#### Overrides

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[constructor](subgraph_CreditLine.CreditLineCalls.md#constructor)

#### Defined in

[src/subgraph/PooledCreditLine.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L55)

## Properties

### lenderPoolContract

• `Private` **lenderPoolContract**: `LenderPool`

#### Defined in

[src/subgraph/PooledCreditLine.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L53)

___

### pooledCreditLineContract

• `Private` **pooledCreditLineContract**: `PooledCreditLine`

#### Defined in

[src/subgraph/PooledCreditLine.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L52)

___

### signer

• `Protected` **signer**: `Signer`

**`description`** signer used to sign

#### Inherited from

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[signer](subgraph_CreditLine.CreditLineCalls.md#signer)

#### Defined in

[src/subgraph/Base.ts:18](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/Base.ts#L18)

___

### subgraphUrl

• `Protected` **subgraphUrl**: `string`

**`description`** subgraph url for fetching the sublime data

#### Inherited from

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[subgraphUrl](subgraph_CreditLine.CreditLineCalls.md#subgraphurl)

#### Defined in

[src/subgraph/Base.ts:13](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/Base.ts#L13)

___

### sublimeAddresses

• `Protected` **sublimeAddresses**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

**`description`** sublime config. (Contains all addresses relevant to sublime ecosystem)

#### Inherited from

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[sublimeAddresses](subgraph_CreditLine.CreditLineCalls.md#sublimeaddresses)

#### Defined in

[src/subgraph/Base.ts:30](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/Base.ts#L30)

___

### tokenManager

• `Protected` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

**`description`** instance of token manager class that caches and retreives token data

#### Inherited from

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[tokenManager](subgraph_CreditLine.CreditLineCalls.md#tokenmanager)

#### Defined in

[src/subgraph/Base.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/Base.ts#L23)

___

### yieldApi

• `Protected` **yieldApi**: [`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md)

#### Inherited from

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[yieldApi](subgraph_CreditLine.CreditLineCalls.md#yieldapi)

#### Defined in

[src/subgraph/Base.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/Base.ts#L25)

## Methods

### countAllCreditLines

▸ **countAllCreditLines**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[countAllCreditLines](subgraph_CreditLine.CreditLineCalls.md#countallcreditlines)

#### Defined in

[src/subgraph/CreditLine.ts:333](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/CreditLine.ts#L333)

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

#### Inherited from

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[countAllCreditLinesOfBorrowerWithStateIn](subgraph_CreditLine.CreditLineCalls.md#countallcreditlinesofborrowerwithstatein)

#### Defined in

[src/subgraph/CreditLine.ts:338](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/CreditLine.ts#L338)

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

#### Inherited from

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[countAllCreditLinesOfBorrowerWithStateIn_requestByLender](subgraph_CreditLine.CreditLineCalls.md#countallcreditlinesofborrowerwithstatein_requestbylender)

#### Defined in

[src/subgraph/CreditLine.ts:347](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/CreditLine.ts#L347)

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

#### Inherited from

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[countAllCreditLinesOfBorrowerWithStateNotIn](subgraph_CreditLine.CreditLineCalls.md#countallcreditlinesofborrowerwithstatenotin)

#### Defined in

[src/subgraph/CreditLine.ts:361](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/CreditLine.ts#L361)

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

#### Inherited from

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[countAllCreditLinesOfBorrowerWithStateNotIn_requestByLender](subgraph_CreditLine.CreditLineCalls.md#countallcreditlinesofborrowerwithstatenotin_requestbylender)

#### Defined in

[src/subgraph/CreditLine.ts:370](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/CreditLine.ts#L370)

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

#### Inherited from

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[countAllCreditLinesOfLenderWithStateIn](subgraph_CreditLine.CreditLineCalls.md#countallcreditlinesoflenderwithstatein)

#### Defined in

[src/subgraph/CreditLine.ts:407](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/CreditLine.ts#L407)

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

#### Inherited from

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[countAllCreditLinesOfLenderWithStateIn_requestByLender](subgraph_CreditLine.CreditLineCalls.md#countallcreditlinesoflenderwithstatein_requestbylender)

#### Defined in

[src/subgraph/CreditLine.ts:416](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/CreditLine.ts#L416)

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

#### Inherited from

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[countAllCreditLinesOfLenderWithStateNotIn](subgraph_CreditLine.CreditLineCalls.md#countallcreditlinesoflenderwithstatenotin)

#### Defined in

[src/subgraph/CreditLine.ts:384](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/CreditLine.ts#L384)

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

#### Inherited from

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[countAllCreditLinesOfLenderWithStateNotIn_requestByLender](subgraph_CreditLine.CreditLineCalls.md#countallcreditlinesoflenderwithstatenotin_requestbylender)

#### Defined in

[src/subgraph/CreditLine.ts:393](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/CreditLine.ts#L393)

___

### countAllLendersOfPool

▸ **countAllLendersOfPool**(`id`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/subgraph/PooledCreditLine.ts:559](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L559)

___

### countAllPooledCreditLines

▸ **countAllPooledCreditLines**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

[src/subgraph/PooledCreditLine.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L61)

___

### countAllPooledCreditLinesOfBorrower

▸ **countAllPooledCreditLinesOfBorrower**(`borrower`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/subgraph/PooledCreditLine.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L66)

___

### countAllPooledCreditLinesOfBorrowerWithState

▸ **countAllPooledCreditLinesOfBorrowerWithState**(`borrower`, `state`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/subgraph/PooledCreditLine.ts:523](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L523)

___

### countAllPooledCreditLinesOfBorrowerWithStateNotIn

▸ **countAllPooledCreditLinesOfBorrowerWithStateNotIn**(`borrower`, `state`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/subgraph/PooledCreditLine.ts:532](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L532)

___

### countAllPooledCreditLinesOfLender

▸ **countAllPooledCreditLinesOfLender**(`lender`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/subgraph/PooledCreditLine.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L71)

___

### countAllPooledCreditLinesOfLenderWithState

▸ **countAllPooledCreditLinesOfLenderWithState**(`lender`, `state`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/subgraph/PooledCreditLine.ts:541](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L541)

___

### countAllPooledCreditLinesOfLenderWithStateNotIn

▸ **countAllPooledCreditLinesOfLenderWithStateNotIn**(`lender`, `state`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/subgraph/PooledCreditLine.ts:550](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L550)

___

### countAllPooledCreditLinesWithStates

▸ **countAllPooledCreditLinesWithStates**(`state`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/subgraph/PooledCreditLine.ts:507](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L507)

___

### countAllPooledCreditLinesWithStatesNotIn

▸ **countAllPooledCreditLinesWithStatesNotIn**(`state`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/subgraph/PooledCreditLine.ts:515](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L515)

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

#### Inherited from

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[getAllCreditLines](subgraph_CreditLine.CreditLineCalls.md#getallcreditlines)

#### Defined in

[src/subgraph/CreditLine.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/CreditLine.ts#L52)

___

### getAllPoolCreditLinesWithStateIn

▸ **getAllPoolCreditLinesWithStateIn**(`state`, `count?`, `skip?`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] | `undefined` |
| `count` | `number` | `13` |
| `skip` | `number` | `0` |

#### Returns

`Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Defined in

[src/subgraph/PooledCreditLine.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L87)

___

### getAllPoolCreditLinesWithStateNotIn

▸ **getAllPoolCreditLinesWithStateNotIn**(`state`, `count?`, `skip?`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] | `undefined` |
| `count` | `number` | `13` |
| `skip` | `number` | `0` |

#### Returns

`Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Defined in

[src/subgraph/PooledCreditLine.ts:101](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L101)

___

### getAllPooledCreditLines

▸ **getAllPooledCreditLines**(`count?`, `skip?`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

**`description`** Returns pooled credit lines in random order

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `count` | `number` | `13` |
| `skip` | `number` | `0` |

#### Returns

`Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Defined in

[src/subgraph/PooledCreditLine.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L82)

___

### getAllPooledCreditLinesLenderCanLendTo

▸ **getAllPooledCreditLinesLenderCanLendTo**(`lender`, `count?`, `skip?`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `lender` | `string` | `undefined` |
| `count` | `number` | `13` |
| `skip` | `number` | `0` |

#### Returns

`Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Defined in

[src/subgraph/PooledCreditLine.ts:159](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L159)

___

### getAllPooledCreditLinesOfBorrower

▸ **getAllPooledCreditLinesOfBorrower**(`address`, `count?`, `skip?`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `address` | `string` | `undefined` |
| `count` | `number` | `13` |
| `skip` | `number` | `0` |

#### Returns

`Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Defined in

[src/subgraph/PooledCreditLine.ts:120](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L120)

___

### getAllPooledCreditLinesOfBorrowerWithStateIn

▸ **getAllPooledCreditLinesOfBorrowerWithStateIn**(`borrower`, `status`, `count?`, `skip?`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `borrower` | `string` | `undefined` |
| `status` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] | `undefined` |
| `count` | `number` | `13` |
| `skip` | `number` | `0` |

#### Returns

`Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Defined in

[src/subgraph/PooledCreditLine.ts:127](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L127)

___

### getAllPooledCreditLinesOfBorrowerWithStateNotIn

▸ **getAllPooledCreditLinesOfBorrowerWithStateNotIn**(`borrower`, `status`, `count?`, `skip?`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `borrower` | `string` | `undefined` |
| `status` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] | `undefined` |
| `count` | `number` | `13` |
| `skip` | `number` | `0` |

#### Returns

`Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Defined in

[src/subgraph/PooledCreditLine.ts:143](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L143)

___

### getAllPooledCreditLinesOfLender

▸ **getAllPooledCreditLinesOfLender**(`lender`, `count?`, `skip?`): `Promise`<[[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[], [`LenderContributionToPooledCreditLines`](../interfaces/types_Types.LenderContributionToPooledCreditLines.md)[]]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `lender` | `string` | `undefined` |
| `count` | `number` | `13` |
| `skip` | `number` | `0` |

#### Returns

`Promise`<[[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[], [`LenderContributionToPooledCreditLines`](../interfaces/types_Types.LenderContributionToPooledCreditLines.md)[]]\>

#### Defined in

[src/subgraph/PooledCreditLine.ts:359](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L359)

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

[src/subgraph/PooledCreditLine.ts:372](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L372)

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

#### Inherited from

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[getConfirmedCreditLinesOfBorrower](subgraph_CreditLine.CreditLineCalls.md#getconfirmedcreditlinesofborrower)

#### Defined in

[src/subgraph/CreditLine.ts:168](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/CreditLine.ts#L168)

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

#### Inherited from

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[getConfirmedCreditLinesOfLender](subgraph_CreditLine.CreditLineCalls.md#getconfirmedcreditlinesoflender)

#### Defined in

[src/subgraph/CreditLine.ts:179](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/CreditLine.ts#L179)

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

#### Inherited from

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[getCreditLine](subgraph_CreditLine.CreditLineCalls.md#getcreditline)

#### Defined in

[src/subgraph/CreditLine.ts:232](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/CreditLine.ts#L232)

___

### getCreditLineStatus

▸ **getCreditLineStatus**(`_id`): `Promise`<[`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |

#### Returns

`Promise`<[`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)\>

#### Defined in

[src/subgraph/PooledCreditLine.ts:283](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L283)

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

#### Inherited from

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[getCreditLineTimeline](subgraph_CreditLine.CreditLineCalls.md#getcreditlinetimeline)

#### Defined in

[src/subgraph/CreditLine.ts:296](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/CreditLine.ts#L296)

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

#### Inherited from

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[getCreditLinesOverview](subgraph_CreditLine.CreditLineCalls.md#getcreditlinesoverview)

#### Defined in

[src/subgraph/CreditLine.ts:246](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/CreditLine.ts#L246)

___

### getCurrentColRatioOfPcl

▸ `Private` **getCurrentColRatioOfPcl**(`id`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/subgraph/PooledCreditLine.ts:264](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L264)

___

### getCurrentDebtForPooledCreditLines

▸ `Private` **getCurrentDebtForPooledCreditLines**(`id`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/subgraph/PooledCreditLine.ts:275](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L275)

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

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[getDashboardOverview](subgraph_CreditLine.CreditLineCalls.md#getdashboardoverview)

#### Defined in

[src/subgraph/Base.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/Base.ts#L54)

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

[src/subgraph/PooledCreditLine.ts:440](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L440)

___

### getLendersViewOfPooledCredit

▸ **getLendersViewOfPooledCredit**(`id`): `Promise`<[[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md), [`LenderContributionToPooledCreditLines`](../interfaces/types_Types.LenderContributionToPooledCreditLines.md)]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<[[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md), [`LenderContributionToPooledCreditLines`](../interfaces/types_Types.LenderContributionToPooledCreditLines.md)]\>

#### Defined in

[src/subgraph/PooledCreditLine.ts:164](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L164)

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

#### Inherited from

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[getPendingCreditLinesRequestedByBorrower](subgraph_CreditLine.CreditLineCalls.md#getpendingcreditlinesrequestedbyborrower)

#### Defined in

[src/subgraph/CreditLine.ts:201](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/CreditLine.ts#L201)

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

#### Inherited from

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[getPendingCreditLinesRequestedToBorrower](subgraph_CreditLine.CreditLineCalls.md#getpendingcreditlinesrequestedtoborrower)

#### Defined in

[src/subgraph/CreditLine.ts:223](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/CreditLine.ts#L223)

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

#### Inherited from

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[getPendingCreditLinesRequestedToLender](subgraph_CreditLine.CreditLineCalls.md#getpendingcreditlinesrequestedtolender)

#### Defined in

[src/subgraph/CreditLine.ts:212](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/CreditLine.ts#L212)

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

#### Inherited from

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[getPendingCreditlinesRequestedByLender](subgraph_CreditLine.CreditLineCalls.md#getpendingcreditlinesrequestedbylender)

#### Defined in

[src/subgraph/CreditLine.ts:190](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/CreditLine.ts#L190)

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

[src/subgraph/PooledCreditLine.ts:115](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L115)

___

### getPooledCreditLineTimeline

▸ **getPooledCreditLineTimeline**(`pooledCreditLineId`, `count?`, `skip?`): `Promise`<[`PooledCreditLineOperation`](../interfaces/types_Types.PooledCreditLineOperation.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `pooledCreditLineId` | `string` | `undefined` |
| `count` | `number` | `13` |
| `skip` | `number` | `0` |

#### Returns

`Promise`<[`PooledCreditLineOperation`](../interfaces/types_Types.PooledCreditLineOperation.md)[]\>

#### Defined in

[src/subgraph/PooledCreditLine.ts:380](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L380)

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

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[getRandomInt](subgraph_CreditLine.CreditLineCalls.md#getrandomint)

#### Defined in

[src/subgraph/Base.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/Base.ts#L46)

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

[src/subgraph/PooledCreditLine.ts:252](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L252)

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

[src/subgraph/PooledCreditLine.ts:340](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L340)

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

[src/subgraph/PooledCreditLine.ts:495](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L495)

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

[src/subgraph/PooledCreditLine.ts:449](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L449)

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

[src/subgraph/PooledCreditLine.ts:179](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L179)

___

### transformToPooledCreditLineOperation

▸ `Private` **transformToPooledCreditLineOperation**(`data`, `borrowTokenDecimal`, `collateralTokenDecimal`): `Promise`<[`PooledCreditLineOperation`](../interfaces/types_Types.PooledCreditLineOperation.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |
| `borrowTokenDecimal` | `any` |
| `collateralTokenDecimal` | `any` |

#### Returns

`Promise`<[`PooledCreditLineOperation`](../interfaces/types_Types.PooledCreditLineOperation.md)[]\>

#### Defined in

[src/subgraph/PooledCreditLine.ts:396](https://github.com/sublime-finance/sublime-sdk/blob/26da7c0/src/subgraph/PooledCreditLine.ts#L396)
