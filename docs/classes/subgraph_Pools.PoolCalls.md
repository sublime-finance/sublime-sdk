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
- [verificationApi](subgraph_Pools.PoolCalls.md#verificationapi)
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
- [countAllLendersOfPooledCreditLine](subgraph_Pools.PoolCalls.md#countalllendersofpooledcreditline)
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
- [getSpecificPooledCreditLineOfLender](subgraph_Pools.PoolCalls.md#getspecificpooledcreditlineoflender)
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

[src/subgraph/Pools.ts:21](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/Pools.ts#L21)

## Properties

### signer

• `Protected` **signer**: `Signer`

**`description`** signer used to sign

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[signer](subgraph_PooledCreditLine.PooledCreditLineCalls.md#signer)

#### Defined in

[src/subgraph/Base.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/Base.ts#L19)

___

### subgraphUrl

• `Protected` **subgraphUrl**: `string`

**`description`** subgraph url for fetching the sublime data

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[subgraphUrl](subgraph_PooledCreditLine.PooledCreditLineCalls.md#subgraphurl)

#### Defined in

[src/subgraph/Base.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/Base.ts#L14)

___

### sublimeAddresses

• `Protected` **sublimeAddresses**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

**`description`** sublime config. (Contains all addresses relevant to sublime ecosystem)

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[sublimeAddresses](subgraph_PooledCreditLine.PooledCreditLineCalls.md#sublimeaddresses)

#### Defined in

[src/subgraph/Base.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/Base.ts#L33)

___

### tokenManager

• `Protected` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

**`description`** instance of token manager class that caches and retreives token data

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[tokenManager](subgraph_PooledCreditLine.PooledCreditLineCalls.md#tokenmanager)

#### Defined in

[src/subgraph/Base.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/Base.ts#L24)

___

### verificationApi

• `Protected` **verificationApi**: [`VerificationAPI`](api_verification.VerificationAPI.md)

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[verificationApi](subgraph_PooledCreditLine.PooledCreditLineCalls.md#verificationapi)

#### Defined in

[src/subgraph/Base.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/Base.ts#L28)

___

### yieldApi

• `Protected` **yieldApi**: [`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md)

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[yieldApi](subgraph_PooledCreditLine.PooledCreditLineCalls.md#yieldapi)

#### Defined in

[src/subgraph/Base.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/Base.ts#L26)

## Methods

### countAllCreditLines

▸ **countAllCreditLines**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[countAllCreditLines](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallcreditlines)

#### Defined in

[src/subgraph/CreditLine.ts:339](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/CreditLine.ts#L339)

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

[src/subgraph/CreditLine.ts:344](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/CreditLine.ts#L344)

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

[src/subgraph/CreditLine.ts:353](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/CreditLine.ts#L353)

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

[src/subgraph/CreditLine.ts:367](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/CreditLine.ts#L367)

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

[src/subgraph/CreditLine.ts:376](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/CreditLine.ts#L376)

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

[src/subgraph/CreditLine.ts:413](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/CreditLine.ts#L413)

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

[src/subgraph/CreditLine.ts:422](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/CreditLine.ts#L422)

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

[src/subgraph/CreditLine.ts:390](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/CreditLine.ts#L390)

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

[src/subgraph/CreditLine.ts:399](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/CreditLine.ts#L399)

___

### countAllLendersOfPooledCreditLine

▸ **countAllLendersOfPooledCreditLine**(`id`): `Promise`<`number`\>

**`description`** Count all Lenders of PooledCreditLine

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`<`number`\>

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[countAllLendersOfPooledCreditLine](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countalllendersofpooledcreditline)

#### Defined in

[src/subgraph/PooledCreditLine.ts:723](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/PooledCreditLine.ts#L723)

___

### countAllPooledCreditLines

▸ **countAllPooledCreditLines**(): `Promise`<`number`\>

**`description`** Count all the pooled credit lines

#### Returns

`Promise`<`number`\>

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[countAllPooledCreditLines](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlines)

#### Defined in

[src/subgraph/PooledCreditLine.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/PooledCreditLine.ts#L65)

___

### countAllPooledCreditLinesOfBorrower

▸ **countAllPooledCreditLinesOfBorrower**(`borrower`): `Promise`<`number`\>

**`description`** Count all pooled credit lines of a borrower

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |

#### Returns

`Promise`<`number`\>

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[countAllPooledCreditLinesOfBorrower](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlinesofborrower)

#### Defined in

[src/subgraph/PooledCreditLine.ts:75](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/PooledCreditLine.ts#L75)

___

### countAllPooledCreditLinesOfBorrowerWithState

▸ **countAllPooledCreditLinesOfBorrowerWithState**(`borrower`, `state`): `Promise`<`number`\>

**`description`** Count all PCL of borrower with state in

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

[src/subgraph/PooledCreditLine.ts:664](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/PooledCreditLine.ts#L664)

___

### countAllPooledCreditLinesOfBorrowerWithStateNotIn

▸ **countAllPooledCreditLinesOfBorrowerWithStateNotIn**(`borrower`, `state`): `Promise`<`number`\>

**`description`** Count all PCL of borrower with state not in

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

[src/subgraph/PooledCreditLine.ts:679](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/PooledCreditLine.ts#L679)

___

### countAllPooledCreditLinesOfLender

▸ **countAllPooledCreditLinesOfLender**(`lender`): `Promise`<`number`\>

**`description`** Count all Pooled Credit Lines of a lender

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |

#### Returns

`Promise`<`number`\>

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[countAllPooledCreditLinesOfLender](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlinesoflender)

#### Defined in

[src/subgraph/PooledCreditLine.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/PooledCreditLine.ts#L85)

___

### countAllPooledCreditLinesOfLenderWithState

▸ **countAllPooledCreditLinesOfLenderWithState**(`lender`, `state`): `Promise`<`number`\>

**`description`** Count all PCL of lender with state in

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

[src/subgraph/PooledCreditLine.ts:694](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/PooledCreditLine.ts#L694)

___

### countAllPooledCreditLinesOfLenderWithStateNotIn

▸ **countAllPooledCreditLinesOfLenderWithStateNotIn**(`lender`, `state`): `Promise`<`number`\>

**`description`** Count all PCL of lender with state not in

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

[src/subgraph/PooledCreditLine.ts:709](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/PooledCreditLine.ts#L709)

___

### countAllPooledCreditLinesWithStates

▸ **countAllPooledCreditLinesWithStates**(`state`): `Promise`<`number`\>

**`description`** Count all PCL with states in

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[countAllPooledCreditLinesWithStates](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlineswithstates)

#### Defined in

[src/subgraph/PooledCreditLine.ts:637](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/PooledCreditLine.ts#L637)

___

### countAllPooledCreditLinesWithStatesNotIn

▸ **countAllPooledCreditLinesWithStatesNotIn**(`state`): `Promise`<`number`\>

**`description`** Count all PCL with states not in

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[countAllPooledCreditLinesWithStatesNotIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlineswithstatesnotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:650](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/PooledCreditLine.ts#L650)

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

[src/subgraph/CreditLine.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/CreditLine.ts#L52)

___

### getAllLendersOfPool

▸ **getAllLendersOfPool**(): `Promise`<[`PoolLender`](../interfaces/types_Types.PoolLender.md)[]\>

**`description`** To-Do

#### Returns

`Promise`<[`PoolLender`](../interfaces/types_Types.PoolLender.md)[]\>

All the lenders of a given pool

#### Defined in

[src/subgraph/Pools.ts:97](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/Pools.ts#L97)

___

### getAllPoolCreditLinesWithStateIn

▸ **getAllPoolCreditLinesWithStateIn**(`state`, `count?`, `skip?`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

**`description`** Returns all PCL which have state

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

[src/subgraph/PooledCreditLine.ts:108](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/PooledCreditLine.ts#L108)

___

### getAllPoolCreditLinesWithStateNotIn

▸ **getAllPoolCreditLinesWithStateNotIn**(`state`, `count?`, `skip?`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

**`description`** Returns all PCL which do not have state

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

[src/subgraph/PooledCreditLine.ts:129](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/PooledCreditLine.ts#L129)

___

### getAllPooledCreditLines

▸ **getAllPooledCreditLines**(`count?`, `skip?`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

**`description`** Returns pooled credit ordered by latest created

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

[src/subgraph/PooledCreditLine.ts:96](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/PooledCreditLine.ts#L96)

___

### getAllPooledCreditLinesLenderCanLendTo

▸ **getAllPooledCreditLinesLenderCanLendTo**(`lender`, `count?`, `skip?`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

**`description`** Returns all the PCL which a lender can lend to

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

[src/subgraph/PooledCreditLine.ts:222](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/PooledCreditLine.ts#L222)

___

### getAllPooledCreditLinesOfBorrower

▸ **getAllPooledCreditLinesOfBorrower**(`address`, `count?`, `skip?`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

**`description`** Returns all PCL of borrower

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

[src/subgraph/PooledCreditLine.ts:160](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/PooledCreditLine.ts#L160)

___

### getAllPooledCreditLinesOfBorrowerWithStateIn

▸ **getAllPooledCreditLinesOfBorrowerWithStateIn**(`borrower`, `status`, `count?`, `skip?`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

**`description`** Returns all the PCL of borrower with state in

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

[src/subgraph/PooledCreditLine.ts:175](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/PooledCreditLine.ts#L175)

___

### getAllPooledCreditLinesOfBorrowerWithStateNotIn

▸ **getAllPooledCreditLinesOfBorrowerWithStateNotIn**(`borrower`, `status`, `count?`, `skip?`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

**`description`** Returns all the PCL of borrower with state not in

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

[src/subgraph/PooledCreditLine.ts:199](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/PooledCreditLine.ts#L199)

___

### getAllPooledCreditLinesOfLender

▸ **getAllPooledCreditLinesOfLender**(`lender`, `count?`, `skip?`): `Promise`<[[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[], [`LenderContributionToPooledCreditLines`](../interfaces/types_Types.LenderContributionToPooledCreditLines.md)[]]\>

**`description`** Get All pooled credit lines of lender

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

[src/subgraph/PooledCreditLine.ts:434](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/PooledCreditLine.ts#L434)

___

### getAllPooledCreditLinesOfUser

▸ **getAllPooledCreditLinesOfUser**(`user`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

**`deprecated`** Will be removed in future

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |

#### Returns

`Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getAllPooledCreditLinesOfUser](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getallpooledcreditlinesofuser)

#### Defined in

[src/subgraph/PooledCreditLine.ts:466](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/PooledCreditLine.ts#L466)

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

[src/subgraph/Pools.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/Pools.ts#L39)

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

[src/subgraph/CreditLine.ts:174](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/CreditLine.ts#L174)

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

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getConfirmedCreditLinesOfLender](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getconfirmedcreditlinesoflender)

#### Defined in

[src/subgraph/CreditLine.ts:185](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/CreditLine.ts#L185)

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

[src/subgraph/CreditLine.ts:238](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/CreditLine.ts#L238)

___

### getCreditLineStatus

▸ **getCreditLineStatus**(`_id`): `Promise`<[`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)\>

**`description`** Computed the latest state of PCL as subgraph doesn't return the exact state

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |

#### Returns

`Promise`<[`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)\>

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getCreditLineStatus](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getcreditlinestatus)

#### Defined in

[src/subgraph/PooledCreditLine.ts:347](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/PooledCreditLine.ts#L347)

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

[src/subgraph/CreditLine.ts:302](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/CreditLine.ts#L302)

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

[src/subgraph/CreditLine.ts:252](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/CreditLine.ts#L252)

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

[src/subgraph/Base.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/Base.ts#L58)

___

### getLendersPerPool

▸ **getLendersPerPool**(`id`): `Promise`<[`LenderPoolDetail`](../interfaces/types_Types.LenderPoolDetail.md)\>

**`description`** Get Lenders Per Pool

**`todo`** Add pagination to LendersPerPool query

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<[`LenderPoolDetail`](../interfaces/types_Types.LenderPoolDetail.md)\>

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getLendersPerPool](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getlendersperpool)

#### Defined in

[src/subgraph/PooledCreditLine.ts:554](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/PooledCreditLine.ts#L554)

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

[src/subgraph/CreditLine.ts:207](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/CreditLine.ts#L207)

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

[src/subgraph/CreditLine.ts:229](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/CreditLine.ts#L229)

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

[src/subgraph/CreditLine.ts:218](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/CreditLine.ts#L218)

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

[src/subgraph/CreditLine.ts:196](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/CreditLine.ts#L196)

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

[src/subgraph/Pools.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/Pools.ts#L48)

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

[src/subgraph/Pools.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/Pools.ts#L58)

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

[src/subgraph/Pools.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/Pools.ts#L87)

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

[src/subgraph/Pools.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/Pools.ts#L67)

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

[src/subgraph/Pools.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/Pools.ts#L77)

___

### getPooledCreditLineById

▸ **getPooledCreditLineById**(`id`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

**`description`** Returns specific PCL details

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getPooledCreditLineById](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getpooledcreditlinebyid)

#### Defined in

[src/subgraph/PooledCreditLine.ts:148](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/PooledCreditLine.ts#L148)

___

### getPooledCreditLineTimeline

▸ **getPooledCreditLineTimeline**(`pooledCreditLineId`, `count?`, `skip?`): `Promise`<[`PooledCreditLineOperation`](../interfaces/types_Types.PooledCreditLineOperation.md)[]\>

**`description`** Fetch PCL timeline

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

[src/subgraph/PooledCreditLine.ts:481](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/PooledCreditLine.ts#L481)

___

### getPools

▸ **getPools**(): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

Array of all pools created on sublime

#### Defined in

[src/subgraph/Pools.ts:29](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/Pools.ts#L29)

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

[src/subgraph/Pools.ts:178](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/Pools.ts#L178)

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

[src/subgraph/Base.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/Base.ts#L50)

___

### getSpecificPooledCreditLineOfLender

▸ **getSpecificPooledCreditLineOfLender**(`lender`, `id`): `Promise`<[[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md), [`LenderContributionToPooledCreditLines`](../interfaces/types_Types.LenderContributionToPooledCreditLines.md)]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |
| `id` | `string` |

#### Returns

`Promise`<[[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md), [`LenderContributionToPooledCreditLines`](../interfaces/types_Types.LenderContributionToPooledCreditLines.md)]\>

#### Inherited from

[PooledCreditLineCalls](subgraph_PooledCreditLine.PooledCreditLineCalls.md).[getSpecificPooledCreditLineOfLender](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getspecificpooledcreditlineoflender)

#### Defined in

[src/subgraph/PooledCreditLine.ts:447](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/PooledCreditLine.ts#L447)

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

[src/subgraph/Pools.ts:130](https://github.com/sublime-finance/sublime-sdk/blob/599dea1/src/subgraph/Pools.ts#L130)
