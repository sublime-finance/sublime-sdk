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
- [verificationApi](subgraph_SavingsAccount.SavingsAccountCalls.md#verificationapi)
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
- [countAllLendersOfPooledCreditLine](subgraph_SavingsAccount.SavingsAccountCalls.md#countalllendersofpooledcreditline)
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
- [getSpecificPooledCreditLineOfLender](subgraph_SavingsAccount.SavingsAccountCalls.md#getspecificpooledcreditlineoflender)
- [getTokensForShares](subgraph_SavingsAccount.SavingsAccountCalls.md#gettokensforshares)
- [newTransformToSavingsAccountUserDetails](subgraph_SavingsAccount.SavingsAccountCalls.md#newtransformtosavingsaccountuserdetails)
- [stackInternalBalanceByToken](subgraph_SavingsAccount.SavingsAccountCalls.md#stackinternalbalancebytoken)
- [transformToAllowances](subgraph_SavingsAccount.SavingsAccountCalls.md#transformtoallowances)
- [transformToInternalBalancePerTokenStrategy](subgraph_SavingsAccount.SavingsAccountCalls.md#transformtointernalbalancepertokenstrategy)
- [transformToSavingsAccountStrategyBalanceDisplay](subgraph_SavingsAccount.SavingsAccountCalls.md#transformtosavingsaccountstrategybalancedisplay)

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

[src/subgraph/SavingsAccount.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/SavingsAccount.ts#L28)

## Properties

### signer

• `Protected` **signer**: `Signer`

**`description`** signer used to sign

#### Inherited from

[PoolCalls](subgraph_Pools.PoolCalls.md).[signer](subgraph_Pools.PoolCalls.md#signer)

#### Defined in

[src/subgraph/Base.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/Base.ts#L19)

___

### subgraphUrl

• `Protected` **subgraphUrl**: `string`

**`description`** subgraph url for fetching the sublime data

#### Inherited from

[PoolCalls](subgraph_Pools.PoolCalls.md).[subgraphUrl](subgraph_Pools.PoolCalls.md#subgraphurl)

#### Defined in

[src/subgraph/Base.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/Base.ts#L14)

___

### sublimeAddresses

• `Protected` **sublimeAddresses**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

**`description`** sublime config. (Contains all addresses relevant to sublime ecosystem)

#### Inherited from

[PoolCalls](subgraph_Pools.PoolCalls.md).[sublimeAddresses](subgraph_Pools.PoolCalls.md#sublimeaddresses)

#### Defined in

[src/subgraph/Base.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/Base.ts#L33)

___

### tokenManager

• `Protected` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

**`description`** instance of token manager class that caches and retreives token data

#### Inherited from

[PoolCalls](subgraph_Pools.PoolCalls.md).[tokenManager](subgraph_Pools.PoolCalls.md#tokenmanager)

#### Defined in

[src/subgraph/Base.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/Base.ts#L24)

___

### verificationApi

• `Protected` **verificationApi**: [`VerificationAPI`](api_verification.VerificationAPI.md)

#### Inherited from

[PoolCalls](subgraph_Pools.PoolCalls.md).[verificationApi](subgraph_Pools.PoolCalls.md#verificationapi)

#### Defined in

[src/subgraph/Base.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/Base.ts#L28)

___

### yieldApi

• `Protected` **yieldApi**: [`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md)

#### Inherited from

[PoolCalls](subgraph_Pools.PoolCalls.md).[yieldApi](subgraph_Pools.PoolCalls.md#yieldapi)

#### Defined in

[src/subgraph/Base.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/Base.ts#L26)

## Methods

### countAllCreditLines

▸ **countAllCreditLines**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[PoolCalls](subgraph_Pools.PoolCalls.md).[countAllCreditLines](subgraph_Pools.PoolCalls.md#countallcreditlines)

#### Defined in

[src/subgraph/CreditLine.ts:339](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/CreditLine.ts#L339)

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

[src/subgraph/CreditLine.ts:344](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/CreditLine.ts#L344)

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

[src/subgraph/CreditLine.ts:353](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/CreditLine.ts#L353)

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

[src/subgraph/CreditLine.ts:367](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/CreditLine.ts#L367)

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

[src/subgraph/CreditLine.ts:376](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/CreditLine.ts#L376)

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

[src/subgraph/CreditLine.ts:413](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/CreditLine.ts#L413)

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

[src/subgraph/CreditLine.ts:422](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/CreditLine.ts#L422)

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

[src/subgraph/CreditLine.ts:390](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/CreditLine.ts#L390)

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

[src/subgraph/CreditLine.ts:399](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/CreditLine.ts#L399)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[countAllLendersOfPooledCreditLine](subgraph_Pools.PoolCalls.md#countalllendersofpooledcreditline)

#### Defined in

[src/subgraph/PooledCreditLine.ts:722](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/PooledCreditLine.ts#L722)

___

### countAllPooledCreditLines

▸ **countAllPooledCreditLines**(): `Promise`<`number`\>

**`description`** Count all the pooled credit lines

#### Returns

`Promise`<`number`\>

#### Inherited from

[PoolCalls](subgraph_Pools.PoolCalls.md).[countAllPooledCreditLines](subgraph_Pools.PoolCalls.md#countallpooledcreditlines)

#### Defined in

[src/subgraph/PooledCreditLine.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/PooledCreditLine.ts#L65)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[countAllPooledCreditLinesOfBorrower](subgraph_Pools.PoolCalls.md#countallpooledcreditlinesofborrower)

#### Defined in

[src/subgraph/PooledCreditLine.ts:75](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/PooledCreditLine.ts#L75)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[countAllPooledCreditLinesOfBorrowerWithState](subgraph_Pools.PoolCalls.md#countallpooledcreditlinesofborrowerwithstate)

#### Defined in

[src/subgraph/PooledCreditLine.ts:663](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/PooledCreditLine.ts#L663)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[countAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_Pools.PoolCalls.md#countallpooledcreditlinesofborrowerwithstatenotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:678](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/PooledCreditLine.ts#L678)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[countAllPooledCreditLinesOfLender](subgraph_Pools.PoolCalls.md#countallpooledcreditlinesoflender)

#### Defined in

[src/subgraph/PooledCreditLine.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/PooledCreditLine.ts#L85)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[countAllPooledCreditLinesOfLenderWithState](subgraph_Pools.PoolCalls.md#countallpooledcreditlinesoflenderwithstate)

#### Defined in

[src/subgraph/PooledCreditLine.ts:693](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/PooledCreditLine.ts#L693)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[countAllPooledCreditLinesOfLenderWithStateNotIn](subgraph_Pools.PoolCalls.md#countallpooledcreditlinesoflenderwithstatenotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:708](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/PooledCreditLine.ts#L708)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[countAllPooledCreditLinesWithStates](subgraph_Pools.PoolCalls.md#countallpooledcreditlineswithstates)

#### Defined in

[src/subgraph/PooledCreditLine.ts:636](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/PooledCreditLine.ts#L636)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[countAllPooledCreditLinesWithStatesNotIn](subgraph_Pools.PoolCalls.md#countallpooledcreditlineswithstatesnotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:649](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/PooledCreditLine.ts#L649)

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

[src/subgraph/SavingsAccount.ts:222](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/SavingsAccount.ts#L222)

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

[src/subgraph/CreditLine.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/CreditLine.ts#L52)

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

[src/subgraph/Pools.ts:97](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/Pools.ts#L97)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getAllPoolCreditLinesWithStateIn](subgraph_Pools.PoolCalls.md#getallpoolcreditlineswithstatein)

#### Defined in

[src/subgraph/PooledCreditLine.ts:108](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/PooledCreditLine.ts#L108)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getAllPoolCreditLinesWithStateNotIn](subgraph_Pools.PoolCalls.md#getallpoolcreditlineswithstatenotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:129](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/PooledCreditLine.ts#L129)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getAllPooledCreditLines](subgraph_Pools.PoolCalls.md#getallpooledcreditlines)

#### Defined in

[src/subgraph/PooledCreditLine.ts:96](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/PooledCreditLine.ts#L96)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getAllPooledCreditLinesLenderCanLendTo](subgraph_Pools.PoolCalls.md#getallpooledcreditlineslendercanlendto)

#### Defined in

[src/subgraph/PooledCreditLine.ts:222](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/PooledCreditLine.ts#L222)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getAllPooledCreditLinesOfBorrower](subgraph_Pools.PoolCalls.md#getallpooledcreditlinesofborrower)

#### Defined in

[src/subgraph/PooledCreditLine.ts:160](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/PooledCreditLine.ts#L160)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getAllPooledCreditLinesOfBorrowerWithStateIn](subgraph_Pools.PoolCalls.md#getallpooledcreditlinesofborrowerwithstatein)

#### Defined in

[src/subgraph/PooledCreditLine.ts:175](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/PooledCreditLine.ts#L175)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_Pools.PoolCalls.md#getallpooledcreditlinesofborrowerwithstatenotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:199](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/PooledCreditLine.ts#L199)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getAllPooledCreditLinesOfLender](subgraph_Pools.PoolCalls.md#getallpooledcreditlinesoflender)

#### Defined in

[src/subgraph/PooledCreditLine.ts:433](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/PooledCreditLine.ts#L433)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getAllPooledCreditLinesOfUser](subgraph_Pools.PoolCalls.md#getallpooledcreditlinesofuser)

#### Defined in

[src/subgraph/PooledCreditLine.ts:465](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/PooledCreditLine.ts#L465)

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

[src/subgraph/Pools.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/Pools.ts#L39)

___

### getAllowances

▸ **getAllowances**(`address?`): `Promise`<[`Allowances`](../interfaces/types_Types.Allowances.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | `string` |

#### Returns

`Promise`<[`Allowances`](../interfaces/types_Types.Allowances.md)[]\>

#### Defined in

[src/subgraph/SavingsAccount.ts:32](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/SavingsAccount.ts#L32)

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

[src/subgraph/CreditLine.ts:174](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/CreditLine.ts#L174)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getConfirmedCreditLinesOfLender](subgraph_Pools.PoolCalls.md#getconfirmedcreditlinesoflender)

#### Defined in

[src/subgraph/CreditLine.ts:185](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/CreditLine.ts#L185)

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

[src/subgraph/CreditLine.ts:238](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/CreditLine.ts#L238)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getCreditLineStatus](subgraph_Pools.PoolCalls.md#getcreditlinestatus)

#### Defined in

[src/subgraph/PooledCreditLine.ts:346](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/PooledCreditLine.ts#L346)

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

[src/subgraph/CreditLine.ts:302](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/CreditLine.ts#L302)

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

[src/subgraph/CreditLine.ts:252](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/CreditLine.ts#L252)

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

[src/subgraph/Base.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/Base.ts#L58)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getLendersPerPool](subgraph_Pools.PoolCalls.md#getlendersperpool)

#### Defined in

[src/subgraph/PooledCreditLine.ts:553](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/PooledCreditLine.ts#L553)

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

[src/subgraph/CreditLine.ts:207](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/CreditLine.ts#L207)

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

[src/subgraph/CreditLine.ts:229](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/CreditLine.ts#L229)

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

[src/subgraph/CreditLine.ts:218](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/CreditLine.ts#L218)

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

[src/subgraph/CreditLine.ts:196](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/CreditLine.ts#L196)

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

[src/subgraph/Pools.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/Pools.ts#L48)

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

[src/subgraph/Pools.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/Pools.ts#L58)

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

[src/subgraph/Pools.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/Pools.ts#L87)

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

[src/subgraph/Pools.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/Pools.ts#L67)

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

[src/subgraph/Pools.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/Pools.ts#L77)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getPooledCreditLineById](subgraph_Pools.PoolCalls.md#getpooledcreditlinebyid)

#### Defined in

[src/subgraph/PooledCreditLine.ts:148](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/PooledCreditLine.ts#L148)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getPooledCreditLineTimeline](subgraph_Pools.PoolCalls.md#getpooledcreditlinetimeline)

#### Defined in

[src/subgraph/PooledCreditLine.ts:480](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/PooledCreditLine.ts#L480)

___

### getPools

▸ **getPools**(): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

Array of all pools created on sublime

#### Inherited from

[PoolCalls](subgraph_Pools.PoolCalls.md).[getPools](subgraph_Pools.PoolCalls.md#getpools)

#### Defined in

[src/subgraph/Pools.ts:29](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/Pools.ts#L29)

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

[src/subgraph/Pools.ts:178](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/Pools.ts#L178)

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

[src/subgraph/Base.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/Base.ts#L50)

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

[src/subgraph/SavingsAccount.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/SavingsAccount.ts#L72)

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

[PoolCalls](subgraph_Pools.PoolCalls.md).[getSpecificPooledCreditLineOfLender](subgraph_Pools.PoolCalls.md#getspecificpooledcreditlineoflender)

#### Defined in

[src/subgraph/PooledCreditLine.ts:446](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/PooledCreditLine.ts#L446)

___

### getTokensForShares

▸ `Private` **getTokensForShares**(`yieldContract`, `shares`, `asset`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `yieldContract` | `string` |
| `shares` | `BigNumber` |
| `asset` | `string` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/subgraph/SavingsAccount.ts:206](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/SavingsAccount.ts#L206)

___

### newTransformToSavingsAccountUserDetails

▸ `Private` **newTransformToSavingsAccountUserDetails**(`address`, `data`): `Promise`<[`SavingAccountUserDetailDisplay`](../interfaces/types_Types.SavingAccountUserDetailDisplay.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `data` | `any`[] |

#### Returns

`Promise`<[`SavingAccountUserDetailDisplay`](../interfaces/types_Types.SavingAccountUserDetailDisplay.md)\>

#### Defined in

[src/subgraph/SavingsAccount.ts:78](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/SavingsAccount.ts#L78)

___

### stackInternalBalanceByToken

▸ `Private` **stackInternalBalanceByToken**(`internalBalances`): `Promise`<[`SavingsAccountBalanceDisplay`](../interfaces/types_Types.SavingsAccountBalanceDisplay.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `internalBalances` | `InternalBalancePerTokenStrategy`[] |

#### Returns

`Promise`<[`SavingsAccountBalanceDisplay`](../interfaces/types_Types.SavingsAccountBalanceDisplay.md)[]\>

#### Defined in

[src/subgraph/SavingsAccount.ts:92](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/SavingsAccount.ts#L92)

___

### transformToAllowances

▸ `Private` **transformToAllowances**(`data`): `Promise`<[`Allowances`](../interfaces/types_Types.Allowances.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<[`Allowances`](../interfaces/types_Types.Allowances.md)[]\>

#### Defined in

[src/subgraph/SavingsAccount.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/SavingsAccount.ts#L40)

___

### transformToInternalBalancePerTokenStrategy

▸ `Private` **transformToInternalBalancePerTokenStrategy**(`data`): `Promise`<`InternalBalancePerTokenStrategy`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<`InternalBalancePerTokenStrategy`[]\>

#### Defined in

[src/subgraph/SavingsAccount.ts:167](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/SavingsAccount.ts#L167)

___

### transformToSavingsAccountStrategyBalanceDisplay

▸ `Private` **transformToSavingsAccountStrategyBalanceDisplay**(`internalBalances`, `aprs`, `prices`): [`SavingsAccountStrategyBalanceDisplay`](../interfaces/types_Types.SavingsAccountStrategyBalanceDisplay.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `internalBalances` | `InternalBalancePerTokenStrategy`[] |
| `aprs` | `Record`<`string`, `BigNumber`\> |
| `prices` | `Record`<`string`, `BigNumber`\> |

#### Returns

[`SavingsAccountStrategyBalanceDisplay`](../interfaces/types_Types.SavingsAccountStrategyBalanceDisplay.md)[]

#### Defined in

[src/subgraph/SavingsAccount.ts:146](https://github.com/sublime-finance/sublime-sdk/blob/242041c/src/subgraph/SavingsAccount.ts#L146)
