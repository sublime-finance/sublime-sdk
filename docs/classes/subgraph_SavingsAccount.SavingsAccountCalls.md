[sublime-sdk](../README.md) / [Modules](../modules.md) / [subgraph/SavingsAccount](../modules/subgraph_SavingsAccount.md) / SavingsAccountCalls

# Class: SavingsAccountCalls

[subgraph/SavingsAccount](../modules/subgraph_SavingsAccount.md).SavingsAccountCalls

## Hierarchy

- [`PoolCalls`](subgraph_Pools.PoolCalls.md)

  ↳ **`SavingsAccountCalls`**

  ↳↳ [`UserMetaCalls`](subgraph_UserMeta.UserMetaCalls.md)

## Table of contents

### Constructors

- [constructor](subgraph_SavingsAccount.SavingsAccountCalls.md#constructor)

### Properties

- [signer](subgraph_SavingsAccount.SavingsAccountCalls.md#signer)
- [subgraphUrl](subgraph_SavingsAccount.SavingsAccountCalls.md#subgraphurl)
- [sublimeAddresses](subgraph_SavingsAccount.SavingsAccountCalls.md#sublimeaddresses)
- [tokenManager](subgraph_SavingsAccount.SavingsAccountCalls.md#tokenmanager)
- [yieldApi](subgraph_SavingsAccount.SavingsAccountCalls.md#yieldapi)

### Methods

- [countAllCreditLines](subgraph_SavingsAccount.SavingsAccountCalls.md#countallcreditlines)
- [countAllCreditLinesOfBorrowerWithStateIn](subgraph_SavingsAccount.SavingsAccountCalls.md#countallcreditlinesofborrowerwithstatein)
- [countAllCreditLinesOfBorrowerWithStateIn\_requestByLender](subgraph_SavingsAccount.SavingsAccountCalls.md#countallcreditlinesofborrowerwithstatein_requestbylender)
- [countAllCreditLinesOfBorrowerWithStateNotIn](subgraph_SavingsAccount.SavingsAccountCalls.md#countallcreditlinesofborrowerwithstatenotin)
- [countAllCreditLinesOfBorrowerWithStateNotIn\_requestByLender](subgraph_SavingsAccount.SavingsAccountCalls.md#countallcreditlinesofborrowerwithstatenotin_requestbylender)
- [countAllCreditLinesOfLenderWithStateIn](subgraph_SavingsAccount.SavingsAccountCalls.md#countallcreditlinesoflenderwithstatein)
- [countAllCreditLinesOfLenderWithStateIn\_requestByLender](subgraph_SavingsAccount.SavingsAccountCalls.md#countallcreditlinesoflenderwithstatein_requestbylender)
- [countAllCreditLinesOfLenderWithStateNotIn](subgraph_SavingsAccount.SavingsAccountCalls.md#countallcreditlinesoflenderwithstatenotin)
- [countAllCreditLinesOfLenderWithStateNotIn\_requestByLender](subgraph_SavingsAccount.SavingsAccountCalls.md#countallcreditlinesoflenderwithstatenotin_requestbylender)
- [countAllLendersOfPool](subgraph_SavingsAccount.SavingsAccountCalls.md#countalllendersofpool)
- [countAllPooledCreditLines](subgraph_SavingsAccount.SavingsAccountCalls.md#countallpooledcreditlines)
- [countAllPooledCreditLinesOfBorrower](subgraph_SavingsAccount.SavingsAccountCalls.md#countallpooledcreditlinesofborrower)
- [countAllPooledCreditLinesOfBorrowerWithState](subgraph_SavingsAccount.SavingsAccountCalls.md#countallpooledcreditlinesofborrowerwithstate)
- [countAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_SavingsAccount.SavingsAccountCalls.md#countallpooledcreditlinesofborrowerwithstatenotin)
- [countAllPooledCreditLinesOfLender](subgraph_SavingsAccount.SavingsAccountCalls.md#countallpooledcreditlinesoflender)
- [countAllPooledCreditLinesOfLenderWithState](subgraph_SavingsAccount.SavingsAccountCalls.md#countallpooledcreditlinesoflenderwithstate)
- [countAllPooledCreditLinesOfLenderWithStateNotIn](subgraph_SavingsAccount.SavingsAccountCalls.md#countallpooledcreditlinesoflenderwithstatenotin)
- [countAllPooledCreditLinesWithStates](subgraph_SavingsAccount.SavingsAccountCalls.md#countallpooledcreditlineswithstates)
- [countAllPooledCreditLinesWithStatesNotIn](subgraph_SavingsAccount.SavingsAccountCalls.md#countallpooledcreditlineswithstatesnotin)
- [getAPR](subgraph_SavingsAccount.SavingsAccountCalls.md#getapr)
- [getAllCreditLines](subgraph_SavingsAccount.SavingsAccountCalls.md#getallcreditlines)
- [getAllLendersOfPool](subgraph_SavingsAccount.SavingsAccountCalls.md#getalllendersofpool)
- [getAllPoolCreditLinesWithStateIn](subgraph_SavingsAccount.SavingsAccountCalls.md#getallpoolcreditlineswithstatein)
- [getAllPoolCreditLinesWithStateNotIn](subgraph_SavingsAccount.SavingsAccountCalls.md#getallpoolcreditlineswithstatenotin)
- [getAllPooledCreditLines](subgraph_SavingsAccount.SavingsAccountCalls.md#getallpooledcreditlines)
- [getAllPooledCreditLinesLenderCanLendTo](subgraph_SavingsAccount.SavingsAccountCalls.md#getallpooledcreditlineslendercanlendto)
- [getAllPooledCreditLinesOfBorrower](subgraph_SavingsAccount.SavingsAccountCalls.md#getallpooledcreditlinesofborrower)
- [getAllPooledCreditLinesOfBorrowerWithStateIn](subgraph_SavingsAccount.SavingsAccountCalls.md#getallpooledcreditlinesofborrowerwithstatein)
- [getAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_SavingsAccount.SavingsAccountCalls.md#getallpooledcreditlinesofborrowerwithstatenotin)
- [getAllPooledCreditLinesOfLender](subgraph_SavingsAccount.SavingsAccountCalls.md#getallpooledcreditlinesoflender)
- [getAllPooledCreditLinesOfUser](subgraph_SavingsAccount.SavingsAccountCalls.md#getallpooledcreditlinesofuser)
- [getAllPoolsByPoolType](subgraph_SavingsAccount.SavingsAccountCalls.md#getallpoolsbypooltype)
- [getAllowances](subgraph_SavingsAccount.SavingsAccountCalls.md#getallowances)
- [getConfirmedCreditLinesOfBorrower](subgraph_SavingsAccount.SavingsAccountCalls.md#getconfirmedcreditlinesofborrower)
- [getConfirmedCreditLinesOfLender](subgraph_SavingsAccount.SavingsAccountCalls.md#getconfirmedcreditlinesoflender)
- [getCreditLine](subgraph_SavingsAccount.SavingsAccountCalls.md#getcreditline)
- [getCreditLineStatus](subgraph_SavingsAccount.SavingsAccountCalls.md#getcreditlinestatus)
- [getCreditLineTimeline](subgraph_SavingsAccount.SavingsAccountCalls.md#getcreditlinetimeline)
- [getCreditLinesOverview](subgraph_SavingsAccount.SavingsAccountCalls.md#getcreditlinesoverview)
- [getDashboardOverview](subgraph_SavingsAccount.SavingsAccountCalls.md#getdashboardoverview)
- [getLendersPerPool](subgraph_SavingsAccount.SavingsAccountCalls.md#getlendersperpool)
- [getLendersViewOfPooledCredit](subgraph_SavingsAccount.SavingsAccountCalls.md#getlendersviewofpooledcredit)
- [getPendingCreditLinesRequestedByBorrower](subgraph_SavingsAccount.SavingsAccountCalls.md#getpendingcreditlinesrequestedbyborrower)
- [getPendingCreditLinesRequestedToBorrower](subgraph_SavingsAccount.SavingsAccountCalls.md#getpendingcreditlinesrequestedtoborrower)
- [getPendingCreditLinesRequestedToLender](subgraph_SavingsAccount.SavingsAccountCalls.md#getpendingcreditlinesrequestedtolender)
- [getPendingCreditlinesRequestedByLender](subgraph_SavingsAccount.SavingsAccountCalls.md#getpendingcreditlinesrequestedbylender)
- [getPool](subgraph_SavingsAccount.SavingsAccountCalls.md#getpool)
- [getPoolByBorrower](subgraph_SavingsAccount.SavingsAccountCalls.md#getpoolbyborrower)
- [getPoolByBorrowerByType](subgraph_SavingsAccount.SavingsAccountCalls.md#getpoolbyborrowerbytype)
- [getPoolByLender](subgraph_SavingsAccount.SavingsAccountCalls.md#getpoolbylender)
- [getPoolByLenderByType](subgraph_SavingsAccount.SavingsAccountCalls.md#getpoolbylenderbytype)
- [getPooledCreditLineById](subgraph_SavingsAccount.SavingsAccountCalls.md#getpooledcreditlinebyid)
- [getPooledCreditLineTimeline](subgraph_SavingsAccount.SavingsAccountCalls.md#getpooledcreditlinetimeline)
- [getPools](subgraph_SavingsAccount.SavingsAccountCalls.md#getpools)
- [getProfileOverview](subgraph_SavingsAccount.SavingsAccountCalls.md#getprofileoverview)
- [getRandomInt](subgraph_SavingsAccount.SavingsAccountCalls.md#getrandomint)
- [getSavingsAccountOverview](subgraph_SavingsAccount.SavingsAccountCalls.md#getsavingsaccountoverview)
- [transformToSavingsAccountUserDetails](subgraph_SavingsAccount.SavingsAccountCalls.md#transformtosavingsaccountuserdetails)

## Constructors

### constructor

• **new SavingsAccountCalls**(`url`, `signer`, `tokenManager`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `signer` | `Signer` |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |

#### Overrides

[PoolCalls](subgraph_Pools.PoolCalls.md).[constructor](subgraph_Pools.PoolCalls.md#constructor)

#### Defined in

[src/subgraph/SavingsAccount.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/SavingsAccount.ts#L14)

## Properties

### signer

• `Protected` **signer**: `Signer`

**`description`** signer used to sign

#### Inherited from

[PoolCalls](subgraph_Pools.PoolCalls.md).[signer](subgraph_Pools.PoolCalls.md#signer)

#### Defined in

[src/subgraph/Base.ts:18](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L18)

___

### subgraphUrl

• `Protected` **subgraphUrl**: `string`

**`description`** subgraph url for fetching the sublime data

#### Inherited from

[PoolCalls](subgraph_Pools.PoolCalls.md).[subgraphUrl](subgraph_Pools.PoolCalls.md#subgraphurl)

#### Defined in

[src/subgraph/Base.ts:13](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L13)

___

### sublimeAddresses

• `Protected` **sublimeAddresses**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

**`description`** sublime config. (Contains all addresses relevant to sublime ecosystem)

#### Inherited from

[PoolCalls](subgraph_Pools.PoolCalls.md).[sublimeAddresses](subgraph_Pools.PoolCalls.md#sublimeaddresses)

#### Defined in

[src/subgraph/Base.ts:30](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L30)

___

### tokenManager

• `Protected` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

**`description`** instance of token manager class that caches and retreives token data

#### Inherited from

[PoolCalls](subgraph_Pools.PoolCalls.md).[tokenManager](subgraph_Pools.PoolCalls.md#tokenmanager)

#### Defined in

[src/subgraph/Base.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L23)

___

### yieldApi

• `Protected` **yieldApi**: [`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md)

#### Inherited from

[PoolCalls](subgraph_Pools.PoolCalls.md).[yieldApi](subgraph_Pools.PoolCalls.md#yieldapi)

#### Defined in

[src/subgraph/Base.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L25)

## Methods

### countAllCreditLines

▸ **countAllCreditLines**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[PoolCalls](subgraph_Pools.PoolCalls.md).[countAllCreditLines](subgraph_Pools.PoolCalls.md#countallcreditlines)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[countAllCreditLinesOfBorrowerWithStateIn](subgraph_Pools.PoolCalls.md#countallcreditlinesofborrowerwithstatein)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[countAllCreditLinesOfBorrowerWithStateIn_requestByLender](subgraph_Pools.PoolCalls.md#countallcreditlinesofborrowerwithstatein_requestbylender)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[countAllCreditLinesOfBorrowerWithStateNotIn](subgraph_Pools.PoolCalls.md#countallcreditlinesofborrowerwithstatenotin)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[countAllCreditLinesOfBorrowerWithStateNotIn_requestByLender](subgraph_Pools.PoolCalls.md#countallcreditlinesofborrowerwithstatenotin_requestbylender)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[countAllCreditLinesOfLenderWithStateIn](subgraph_Pools.PoolCalls.md#countallcreditlinesoflenderwithstatein)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[countAllCreditLinesOfLenderWithStateIn_requestByLender](subgraph_Pools.PoolCalls.md#countallcreditlinesoflenderwithstatein_requestbylender)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[countAllCreditLinesOfLenderWithStateNotIn](subgraph_Pools.PoolCalls.md#countallcreditlinesoflenderwithstatenotin)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[countAllCreditLinesOfLenderWithStateNotIn_requestByLender](subgraph_Pools.PoolCalls.md#countallcreditlinesoflenderwithstatenotin_requestbylender)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[countAllLendersOfPool](subgraph_Pools.PoolCalls.md#countalllendersofpool)

#### Defined in

[src/subgraph/PooledCreditLine.ts:559](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/PooledCreditLine.ts#L559)

___

### countAllPooledCreditLines

▸ **countAllPooledCreditLines**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[PoolCalls](subgraph_Pools.PoolCalls.md).[countAllPooledCreditLines](subgraph_Pools.PoolCalls.md#countallpooledcreditlines)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[countAllPooledCreditLinesOfBorrower](subgraph_Pools.PoolCalls.md#countallpooledcreditlinesofborrower)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[countAllPooledCreditLinesOfBorrowerWithState](subgraph_Pools.PoolCalls.md#countallpooledcreditlinesofborrowerwithstate)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[countAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_Pools.PoolCalls.md#countallpooledcreditlinesofborrowerwithstatenotin)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[countAllPooledCreditLinesOfLender](subgraph_Pools.PoolCalls.md#countallpooledcreditlinesoflender)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[countAllPooledCreditLinesOfLenderWithState](subgraph_Pools.PoolCalls.md#countallpooledcreditlinesoflenderwithstate)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[countAllPooledCreditLinesOfLenderWithStateNotIn](subgraph_Pools.PoolCalls.md#countallpooledcreditlinesoflenderwithstatenotin)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[countAllPooledCreditLinesWithStates](subgraph_Pools.PoolCalls.md#countallpooledcreditlineswithstates)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[countAllPooledCreditLinesWithStatesNotIn](subgraph_Pools.PoolCalls.md#countallpooledcreditlineswithstatesnotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:515](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/PooledCreditLine.ts#L515)

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

[src/subgraph/SavingsAccount.ts:156](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/SavingsAccount.ts#L156)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getAllCreditLines](subgraph_Pools.PoolCalls.md#getallcreditlines)

#### Defined in

[src/subgraph/CreditLine.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/CreditLine.ts#L52)

___

### getAllLendersOfPool

▸ **getAllLendersOfPool**(): `Promise`<[`PoolLender`](../interfaces/types_Types.PoolLender.md)[]\>

**`description`** To-Do

#### Returns

`Promise`<[`PoolLender`](../interfaces/types_Types.PoolLender.md)[]\>

All the lenders of a given pool

#### Inherited from

[PoolCalls](subgraph_Pools.PoolCalls.md).[getAllLendersOfPool](subgraph_Pools.PoolCalls.md#getalllendersofpool)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getAllPoolCreditLinesWithStateIn](subgraph_Pools.PoolCalls.md#getallpoolcreditlineswithstatein)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getAllPoolCreditLinesWithStateNotIn](subgraph_Pools.PoolCalls.md#getallpoolcreditlineswithstatenotin)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getAllPooledCreditLines](subgraph_Pools.PoolCalls.md#getallpooledcreditlines)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getAllPooledCreditLinesLenderCanLendTo](subgraph_Pools.PoolCalls.md#getallpooledcreditlineslendercanlendto)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getAllPooledCreditLinesOfBorrower](subgraph_Pools.PoolCalls.md#getallpooledcreditlinesofborrower)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getAllPooledCreditLinesOfBorrowerWithStateIn](subgraph_Pools.PoolCalls.md#getallpooledcreditlinesofborrowerwithstatein)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_Pools.PoolCalls.md#getallpooledcreditlinesofborrowerwithstatenotin)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getAllPooledCreditLinesOfLender](subgraph_Pools.PoolCalls.md#getallpooledcreditlinesoflender)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getAllPooledCreditLinesOfUser](subgraph_Pools.PoolCalls.md#getallpooledcreditlinesofuser)

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

#### Inherited from

[PoolCalls](subgraph_Pools.PoolCalls.md).[getAllPoolsByPoolType](subgraph_Pools.PoolCalls.md#getallpoolsbypooltype)

#### Defined in

[src/subgraph/Pools.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Pools.ts#L39)

___

### getAllowances

▸ **getAllowances**(): `Promise`<`any`[]\>

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/subgraph/SavingsAccount.ts:18](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/SavingsAccount.ts#L18)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getConfirmedCreditLinesOfBorrower](subgraph_Pools.PoolCalls.md#getconfirmedcreditlinesofborrower)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getConfirmedCreditLinesOfLender](subgraph_Pools.PoolCalls.md#getconfirmedcreditlinesoflender)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getCreditLine](subgraph_Pools.PoolCalls.md#getcreditline)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getCreditLineStatus](subgraph_Pools.PoolCalls.md#getcreditlinestatus)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getCreditLineTimeline](subgraph_Pools.PoolCalls.md#getcreditlinetimeline)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getCreditLinesOverview](subgraph_Pools.PoolCalls.md#getcreditlinesoverview)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getDashboardOverview](subgraph_Pools.PoolCalls.md#getdashboardoverview)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getLendersPerPool](subgraph_Pools.PoolCalls.md#getlendersperpool)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getLendersViewOfPooledCredit](subgraph_Pools.PoolCalls.md#getlendersviewofpooledcredit)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getPendingCreditLinesRequestedByBorrower](subgraph_Pools.PoolCalls.md#getpendingcreditlinesrequestedbyborrower)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getPendingCreditLinesRequestedToBorrower](subgraph_Pools.PoolCalls.md#getpendingcreditlinesrequestedtoborrower)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getPendingCreditLinesRequestedToLender](subgraph_Pools.PoolCalls.md#getpendingcreditlinesrequestedtolender)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getPendingCreditlinesRequestedByLender](subgraph_Pools.PoolCalls.md#getpendingcreditlinesrequestedbylender)

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

#### Inherited from

[PoolCalls](subgraph_Pools.PoolCalls.md).[getPool](subgraph_Pools.PoolCalls.md#getpool)

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

#### Inherited from

[PoolCalls](subgraph_Pools.PoolCalls.md).[getPoolByBorrower](subgraph_Pools.PoolCalls.md#getpoolbyborrower)

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

#### Inherited from

[PoolCalls](subgraph_Pools.PoolCalls.md).[getPoolByBorrowerByType](subgraph_Pools.PoolCalls.md#getpoolbyborrowerbytype)

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

#### Inherited from

[PoolCalls](subgraph_Pools.PoolCalls.md).[getPoolByLender](subgraph_Pools.PoolCalls.md#getpoolbylender)

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

#### Inherited from

[PoolCalls](subgraph_Pools.PoolCalls.md).[getPoolByLenderByType](subgraph_Pools.PoolCalls.md#getpoolbylenderbytype)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getPooledCreditLineById](subgraph_Pools.PoolCalls.md#getpooledcreditlinebyid)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getPooledCreditLineTimeline](subgraph_Pools.PoolCalls.md#getpooledcreditlinetimeline)

#### Defined in

[src/subgraph/PooledCreditLine.ts:380](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/PooledCreditLine.ts#L380)

___

### getPools

▸ **getPools**(): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

Array of all pools created on sublime

#### Inherited from

[PoolCalls](subgraph_Pools.PoolCalls.md).[getPools](subgraph_Pools.PoolCalls.md#getpools)

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

#### Inherited from

[PoolCalls](subgraph_Pools.PoolCalls.md).[getProfileOverview](subgraph_Pools.PoolCalls.md#getprofileoverview)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getRandomInt](subgraph_Pools.PoolCalls.md#getrandomint)

#### Defined in

[src/subgraph/Base.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L46)

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

[src/subgraph/SavingsAccount.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/SavingsAccount.ts#L28)

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

[src/subgraph/SavingsAccount.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/SavingsAccount.ts#L40)
