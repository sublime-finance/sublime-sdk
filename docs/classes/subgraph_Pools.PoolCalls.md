[sublime-sdk](../README.md) / [Modules](../modules.md) / [subgraph/Pools](../modules/subgraph_Pools.md) / PoolCalls

# Class: PoolCalls

[subgraph/Pools](../modules/subgraph_Pools.md).PoolCalls

## Hierarchy

- [`PooledCreditLineCalls`](subgraph_PooledCreditLine.PooledCreditLineCalls.md)

  ↳ **`PoolCalls`**

  ↳↳ [`SavingsAccountCalls`](subgraph_SavingsAccount.SavingsAccountCalls.md)

## Table of contents

### Constructors

- [constructor](subgraph_Pools.PoolCalls.md#constructor)

### Properties

- [signer](subgraph_Pools.PoolCalls.md#signer)
- [subgraphUrl](subgraph_Pools.PoolCalls.md#subgraphurl)
- [sublimeAddresses](subgraph_Pools.PoolCalls.md#sublimeaddresses)
- [tokenManager](subgraph_Pools.PoolCalls.md#tokenmanager)
- [yieldApi](subgraph_Pools.PoolCalls.md#yieldapi)

### Methods

- [countAllCreditLines](subgraph_Pools.PoolCalls.md#countallcreditlines)
- [countAllCreditLinesOfBorrowerWithStateIn](subgraph_Pools.PoolCalls.md#countallcreditlinesofborrowerwithstatein)
- [countAllCreditLinesOfBorrowerWithStateIn\_requestByLender](subgraph_Pools.PoolCalls.md#countallcreditlinesofborrowerwithstatein_requestbylender)
- [countAllCreditLinesOfBorrowerWithStateNotIn](subgraph_Pools.PoolCalls.md#countallcreditlinesofborrowerwithstatenotin)
- [countAllCreditLinesOfBorrowerWithStateNotIn\_requestByLender](subgraph_Pools.PoolCalls.md#countallcreditlinesofborrowerwithstatenotin_requestbylender)
- [countAllCreditLinesOfLenderWithStateIn](subgraph_Pools.PoolCalls.md#countallcreditlinesoflenderwithstatein)
- [countAllCreditLinesOfLenderWithStateIn\_requestByLender](subgraph_Pools.PoolCalls.md#countallcreditlinesoflenderwithstatein_requestbylender)
- [countAllCreditLinesOfLenderWithStateNotIn](subgraph_Pools.PoolCalls.md#countallcreditlinesoflenderwithstatenotin)
- [countAllCreditLinesOfLenderWithStateNotIn\_requestByLender](subgraph_Pools.PoolCalls.md#countallcreditlinesoflenderwithstatenotin_requestbylender)
- [countAllLendersOfPool](subgraph_Pools.PoolCalls.md#countalllendersofpool)
- [countAllPooledCreditLines](subgraph_Pools.PoolCalls.md#countallpooledcreditlines)
- [countAllPooledCreditLinesOfBorrower](subgraph_Pools.PoolCalls.md#countallpooledcreditlinesofborrower)
- [countAllPooledCreditLinesOfBorrowerWithState](subgraph_Pools.PoolCalls.md#countallpooledcreditlinesofborrowerwithstate)
- [countAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_Pools.PoolCalls.md#countallpooledcreditlinesofborrowerwithstatenotin)
- [countAllPooledCreditLinesOfLender](subgraph_Pools.PoolCalls.md#countallpooledcreditlinesoflender)
- [countAllPooledCreditLinesOfLenderWithState](subgraph_Pools.PoolCalls.md#countallpooledcreditlinesoflenderwithstate)
- [countAllPooledCreditLinesOfLenderWithStateNotIn](subgraph_Pools.PoolCalls.md#countallpooledcreditlinesoflenderwithstatenotin)
- [countAllPooledCreditLinesWithStates](subgraph_Pools.PoolCalls.md#countallpooledcreditlineswithstates)
- [countAllPooledCreditLinesWithStatesNotIn](subgraph_Pools.PoolCalls.md#countallpooledcreditlineswithstatesnotin)
- [getAllCreditLines](subgraph_Pools.PoolCalls.md#getallcreditlines)
- [getAllLendersOfPool](subgraph_Pools.PoolCalls.md#getalllendersofpool)
- [getAllPoolCreditLinesWithStateIn](subgraph_Pools.PoolCalls.md#getallpoolcreditlineswithstatein)
- [getAllPoolCreditLinesWithStateNotIn](subgraph_Pools.PoolCalls.md#getallpoolcreditlineswithstatenotin)
- [getAllPooledCreditLines](subgraph_Pools.PoolCalls.md#getallpooledcreditlines)
- [getAllPooledCreditLinesLenderCanLendTo](subgraph_Pools.PoolCalls.md#getallpooledcreditlineslendercanlendto)
- [getAllPooledCreditLinesOfBorrower](subgraph_Pools.PoolCalls.md#getallpooledcreditlinesofborrower)
- [getAllPooledCreditLinesOfBorrowerWithStateIn](subgraph_Pools.PoolCalls.md#getallpooledcreditlinesofborrowerwithstatein)
- [getAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_Pools.PoolCalls.md#getallpooledcreditlinesofborrowerwithstatenotin)
- [getAllPooledCreditLinesOfLender](subgraph_Pools.PoolCalls.md#getallpooledcreditlinesoflender)
- [getAllPooledCreditLinesOfUser](subgraph_Pools.PoolCalls.md#getallpooledcreditlinesofuser)
- [getAllPoolsByPoolType](subgraph_Pools.PoolCalls.md#getallpoolsbypooltype)
- [getConfirmedCreditLinesOfBorrower](subgraph_Pools.PoolCalls.md#getconfirmedcreditlinesofborrower)
- [getConfirmedCreditLinesOfLender](subgraph_Pools.PoolCalls.md#getconfirmedcreditlinesoflender)
- [getCreditLine](subgraph_Pools.PoolCalls.md#getcreditline)
- [getCreditLineStatus](subgraph_Pools.PoolCalls.md#getcreditlinestatus)
- [getCreditLineTimeline](subgraph_Pools.PoolCalls.md#getcreditlinetimeline)
- [getCreditLinesOverview](subgraph_Pools.PoolCalls.md#getcreditlinesoverview)
- [getDashboardOverview](subgraph_Pools.PoolCalls.md#getdashboardoverview)
- [getLendersPerPool](subgraph_Pools.PoolCalls.md#getlendersperpool)
- [getLendersViewOfPooledCredit](subgraph_Pools.PoolCalls.md#getlendersviewofpooledcredit)
- [getPendingCreditLinesRequestedByBorrower](subgraph_Pools.PoolCalls.md#getpendingcreditlinesrequestedbyborrower)
- [getPendingCreditLinesRequestedToBorrower](subgraph_Pools.PoolCalls.md#getpendingcreditlinesrequestedtoborrower)
- [getPendingCreditLinesRequestedToLender](subgraph_Pools.PoolCalls.md#getpendingcreditlinesrequestedtolender)
- [getPendingCreditlinesRequestedByLender](subgraph_Pools.PoolCalls.md#getpendingcreditlinesrequestedbylender)
- [getPool](subgraph_Pools.PoolCalls.md#getpool)
- [getPoolByBorrower](subgraph_Pools.PoolCalls.md#getpoolbyborrower)
- [getPoolByBorrowerByType](subgraph_Pools.PoolCalls.md#getpoolbyborrowerbytype)
- [getPoolByLender](subgraph_Pools.PoolCalls.md#getpoolbylender)
- [getPoolByLenderByType](subgraph_Pools.PoolCalls.md#getpoolbylenderbytype)
- [getPooledCreditLineById](subgraph_Pools.PoolCalls.md#getpooledcreditlinebyid)
- [getPooledCreditLineTimeline](subgraph_Pools.PoolCalls.md#getpooledcreditlinetimeline)
- [getPools](subgraph_Pools.PoolCalls.md#getpools)
- [getProfileOverview](subgraph_Pools.PoolCalls.md#getprofileoverview)
- [getRandomInt](subgraph_Pools.PoolCalls.md#getrandomint)
- [transformToPoolDetail](subgraph_Pools.PoolCalls.md#transformtopooldetail)

## Constructors

### constructor

• **new PoolCalls**(`url`, `signer`, `tokenManager`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `signer` | `Signer` |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |

#### Overrides

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[constructor](subgraph_PooledCreditLine.PooledCreditLineCalls.md#constructor)

#### Defined in

[src/subgraph/Pools.ts:21](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Pools.ts#L21)

## Properties

### signer

• `Protected` **signer**: `Signer`

**`description`** signer used to sign

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[signer](subgraph_PooledCreditLine.PooledCreditLineCalls.md#signer)

#### Defined in

[src/subgraph/Base.ts:18](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L18)

___

### subgraphUrl

• `Protected` **subgraphUrl**: `string`

**`description`** subgraph url for fetching the sublime data

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[subgraphUrl](subgraph_PooledCreditLine.PooledCreditLineCalls.md#subgraphurl)

#### Defined in

[src/subgraph/Base.ts:13](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L13)

___

### sublimeAddresses

• `Protected` **sublimeAddresses**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

**`description`** sublime config. (Contains all addresses relevant to sublime ecosystem)

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[sublimeAddresses](subgraph_PooledCreditLine.PooledCreditLineCalls.md#sublimeaddresses)

#### Defined in

[src/subgraph/Base.ts:30](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L30)

___

### tokenManager

• `Protected` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

**`description`** instance of token manager class that caches and retreives token data

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[tokenManager](subgraph_PooledCreditLine.PooledCreditLineCalls.md#tokenmanager)

#### Defined in

[src/subgraph/Base.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L23)

___

### yieldApi

• `Protected` **yieldApi**: [`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md)

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[yieldApi](subgraph_PooledCreditLine.PooledCreditLineCalls.md#yieldapi)

#### Defined in

[src/subgraph/Base.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L25)

## Methods

### countAllCreditLines

▸ **countAllCreditLines**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[countAllCreditLines](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallcreditlines)

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

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[countAllCreditLinesOfBorrowerWithStateIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallcreditlinesofborrowerwithstatein)

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

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[countAllCreditLinesOfBorrowerWithStateIn_requestByLender](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallcreditlinesofborrowerwithstatein_requestbylender)

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

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[countAllCreditLinesOfBorrowerWithStateNotIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallcreditlinesofborrowerwithstatenotin)

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

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[countAllCreditLinesOfBorrowerWithStateNotIn_requestByLender](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallcreditlinesofborrowerwithstatenotin_requestbylender)

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

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[countAllCreditLinesOfLenderWithStateIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallcreditlinesoflenderwithstatein)

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

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[countAllCreditLinesOfLenderWithStateIn_requestByLender](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallcreditlinesoflenderwithstatein_requestbylender)

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

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[countAllCreditLinesOfLenderWithStateNotIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallcreditlinesoflenderwithstatenotin)

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

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[countAllCreditLinesOfLenderWithStateNotIn_requestByLender](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallcreditlinesoflenderwithstatenotin_requestbylender)

#### Defined in

[src/subgraph/CreditLine.ts:393](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/CreditLine.ts#L393)

___

### countAllLendersOfPool

▸ **countAllLendersOfPool**(`id`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`<`number`\>

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[countAllLendersOfPool](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countalllendersofpool)

#### Defined in

[src/subgraph/PooledCreditLine.ts:559](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/PooledCreditLine.ts#L559)

___

### countAllPooledCreditLines

▸ **countAllPooledCreditLines**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[countAllPooledCreditLines](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlines)

#### Defined in

[src/subgraph/PooledCreditLine.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/PooledCreditLine.ts#L61)

___

### countAllPooledCreditLinesOfBorrower

▸ **countAllPooledCreditLinesOfBorrower**(`borrower`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |

#### Returns

`Promise`<`number`\>

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[countAllPooledCreditLinesOfBorrower](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlinesofborrower)

#### Defined in

[src/subgraph/PooledCreditLine.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/PooledCreditLine.ts#L66)

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

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[countAllPooledCreditLinesOfBorrowerWithState](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlinesofborrowerwithstate)

#### Defined in

[src/subgraph/PooledCreditLine.ts:523](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/PooledCreditLine.ts#L523)

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

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[countAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlinesofborrowerwithstatenotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:532](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/PooledCreditLine.ts#L532)

___

### countAllPooledCreditLinesOfLender

▸ **countAllPooledCreditLinesOfLender**(`lender`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |

#### Returns

`Promise`<`number`\>

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[countAllPooledCreditLinesOfLender](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlinesoflender)

#### Defined in

[src/subgraph/PooledCreditLine.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/PooledCreditLine.ts#L71)

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

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[countAllPooledCreditLinesOfLenderWithState](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlinesoflenderwithstate)

#### Defined in

[src/subgraph/PooledCreditLine.ts:541](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/PooledCreditLine.ts#L541)

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

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[countAllPooledCreditLinesOfLenderWithStateNotIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlinesoflenderwithstatenotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:550](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/PooledCreditLine.ts#L550)

___

### countAllPooledCreditLinesWithStates

▸ **countAllPooledCreditLinesWithStates**(`state`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[countAllPooledCreditLinesWithStates](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlineswithstates)

#### Defined in

[src/subgraph/PooledCreditLine.ts:507](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/PooledCreditLine.ts#L507)

___

### countAllPooledCreditLinesWithStatesNotIn

▸ **countAllPooledCreditLinesWithStatesNotIn**(`state`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[countAllPooledCreditLinesWithStatesNotIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlineswithstatesnotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:515](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/PooledCreditLine.ts#L515)

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

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getAllCreditLines](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getallcreditlines)

#### Defined in

[src/subgraph/CreditLine.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/CreditLine.ts#L52)

___

### getAllLendersOfPool

▸ **getAllLendersOfPool**(): `Promise`<[`PoolLender`](../interfaces/types_Types.PoolLender.md)[]\>

**`description`** To-Do

#### Returns

`Promise`<[`PoolLender`](../interfaces/types_Types.PoolLender.md)[]\>

All the lenders of a given pool

#### Defined in

[src/subgraph/Pools.ts:97](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Pools.ts#L97)

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

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getAllPoolCreditLinesWithStateIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getallpoolcreditlineswithstatein)

#### Defined in

[src/subgraph/PooledCreditLine.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/PooledCreditLine.ts#L87)

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

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getAllPoolCreditLinesWithStateNotIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getallpoolcreditlineswithstatenotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:101](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/PooledCreditLine.ts#L101)

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

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getAllPooledCreditLines](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getallpooledcreditlines)

#### Defined in

[src/subgraph/PooledCreditLine.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/PooledCreditLine.ts#L82)

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

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getAllPooledCreditLinesLenderCanLendTo](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getallpooledcreditlineslendercanlendto)

#### Defined in

[src/subgraph/PooledCreditLine.ts:159](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/PooledCreditLine.ts#L159)

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

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getAllPooledCreditLinesOfBorrower](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getallpooledcreditlinesofborrower)

#### Defined in

[src/subgraph/PooledCreditLine.ts:120](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/PooledCreditLine.ts#L120)

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

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getAllPooledCreditLinesOfBorrowerWithStateIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getallpooledcreditlinesofborrowerwithstatein)

#### Defined in

[src/subgraph/PooledCreditLine.ts:127](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/PooledCreditLine.ts#L127)

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

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getallpooledcreditlinesofborrowerwithstatenotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:143](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/PooledCreditLine.ts#L143)

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

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getAllPooledCreditLinesOfLender](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getallpooledcreditlinesoflender)

#### Defined in

[src/subgraph/PooledCreditLine.ts:359](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/PooledCreditLine.ts#L359)

___

### getAllPooledCreditLinesOfUser

▸ **getAllPooledCreditLinesOfUser**(`user`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |

#### Returns

`Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getAllPooledCreditLinesOfUser](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getallpooledcreditlinesofuser)

#### Defined in

[src/subgraph/PooledCreditLine.ts:372](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/PooledCreditLine.ts#L372)

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

[src/subgraph/Pools.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Pools.ts#L39)

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

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getConfirmedCreditLinesOfBorrower](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getconfirmedcreditlinesofborrower)

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

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getConfirmedCreditLinesOfLender](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getconfirmedcreditlinesoflender)

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

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getCreditLine](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getcreditline)

#### Defined in

[src/subgraph/CreditLine.ts:232](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/CreditLine.ts#L232)

___

### getCreditLineStatus

▸ **getCreditLineStatus**(`_id`): `Promise`<[`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |

#### Returns

`Promise`<[`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)\>

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getCreditLineStatus](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getcreditlinestatus)

#### Defined in

[src/subgraph/PooledCreditLine.ts:283](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/PooledCreditLine.ts#L283)

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

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getCreditLineTimeline](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getcreditlinetimeline)

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

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getCreditLinesOverview](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getcreditlinesoverview)

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

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getDashboardOverview](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getdashboardoverview)

#### Defined in

[src/subgraph/Base.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L54)

___

### getLendersPerPool

▸ **getLendersPerPool**(`id`): `Promise`<[`LenderPoolDetail`](../interfaces/types_Types.LenderPoolDetail.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<[`LenderPoolDetail`](../interfaces/types_Types.LenderPoolDetail.md)\>

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getLendersPerPool](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getlendersperpool)

#### Defined in

[src/subgraph/PooledCreditLine.ts:440](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/PooledCreditLine.ts#L440)

___

### getLendersViewOfPooledCredit

▸ **getLendersViewOfPooledCredit**(`id`): `Promise`<[[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md), [`LenderContributionToPooledCreditLines`](../interfaces/types_Types.LenderContributionToPooledCreditLines.md)]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<[[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md), [`LenderContributionToPooledCreditLines`](../interfaces/types_Types.LenderContributionToPooledCreditLines.md)]\>

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getLendersViewOfPooledCredit](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getlendersviewofpooledcredit)

#### Defined in

[src/subgraph/PooledCreditLine.ts:164](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/PooledCreditLine.ts#L164)

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

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getPendingCreditLinesRequestedByBorrower](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getpendingcreditlinesrequestedbyborrower)

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

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getPendingCreditLinesRequestedToBorrower](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getpendingcreditlinesrequestedtoborrower)

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

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getPendingCreditLinesRequestedToLender](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getpendingcreditlinesrequestedtolender)

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

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getPendingCreditlinesRequestedByLender](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getpendingcreditlinesrequestedbylender)

#### Defined in

[src/subgraph/CreditLine.ts:190](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/CreditLine.ts#L190)

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

[src/subgraph/Pools.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Pools.ts#L48)

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

[src/subgraph/Pools.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Pools.ts#L58)

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

[src/subgraph/Pools.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Pools.ts#L87)

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

[src/subgraph/Pools.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Pools.ts#L67)

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

[src/subgraph/Pools.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Pools.ts#L77)

___

### getPooledCreditLineById

▸ **getPooledCreditLineById**(`id`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getPooledCreditLineById](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getpooledcreditlinebyid)

#### Defined in

[src/subgraph/PooledCreditLine.ts:115](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/PooledCreditLine.ts#L115)

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

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getPooledCreditLineTimeline](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getpooledcreditlinetimeline)

#### Defined in

[src/subgraph/PooledCreditLine.ts:380](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/PooledCreditLine.ts#L380)

___

### getPools

▸ **getPools**(): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

Array of all pools created on sublime

#### Defined in

[src/subgraph/Pools.ts:29](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Pools.ts#L29)

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

[src/subgraph/Pools.ts:178](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Pools.ts#L178)

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

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getRandomInt](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getrandomint)

#### Defined in

[src/subgraph/Base.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L46)

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

[src/subgraph/Pools.ts:130](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Pools.ts#L130)
