[sublime-sdk](../README.md) / [Modules](../modules.md) / [subgraph](../modules/subgraph.md) / SublimeSubgraph

# Class: SublimeSubgraph

[subgraph](../modules/subgraph.md).SublimeSubgraph

## Hierarchy

- [`UserMetaCalls`](subgraph_UserMeta.UserMetaCalls.md)

  ↳ **`SublimeSubgraph`**

## Table of contents

### Constructors

- [constructor](subgraph.SublimeSubgraph.md#constructor)

### Properties

- [signer](subgraph.SublimeSubgraph.md#signer)
- [subgraphUrl](subgraph.SublimeSubgraph.md#subgraphurl)
- [sublimeAddresses](subgraph.SublimeSubgraph.md#sublimeaddresses)
- [tokenManager](subgraph.SublimeSubgraph.md#tokenmanager)
- [yieldApi](subgraph.SublimeSubgraph.md#yieldapi)

### Methods

- [countAllCreditLines](subgraph.SublimeSubgraph.md#countallcreditlines)
- [countAllCreditLinesOfBorrowerWithStateIn](subgraph.SublimeSubgraph.md#countallcreditlinesofborrowerwithstatein)
- [countAllCreditLinesOfBorrowerWithStateIn\_requestByLender](subgraph.SublimeSubgraph.md#countallcreditlinesofborrowerwithstatein_requestbylender)
- [countAllCreditLinesOfBorrowerWithStateNotIn](subgraph.SublimeSubgraph.md#countallcreditlinesofborrowerwithstatenotin)
- [countAllCreditLinesOfBorrowerWithStateNotIn\_requestByLender](subgraph.SublimeSubgraph.md#countallcreditlinesofborrowerwithstatenotin_requestbylender)
- [countAllCreditLinesOfLenderWithStateIn](subgraph.SublimeSubgraph.md#countallcreditlinesoflenderwithstatein)
- [countAllCreditLinesOfLenderWithStateIn\_requestByLender](subgraph.SublimeSubgraph.md#countallcreditlinesoflenderwithstatein_requestbylender)
- [countAllCreditLinesOfLenderWithStateNotIn](subgraph.SublimeSubgraph.md#countallcreditlinesoflenderwithstatenotin)
- [countAllCreditLinesOfLenderWithStateNotIn\_requestByLender](subgraph.SublimeSubgraph.md#countallcreditlinesoflenderwithstatenotin_requestbylender)
- [countAllLendersOfPool](subgraph.SublimeSubgraph.md#countalllendersofpool)
- [countAllPooledCreditLines](subgraph.SublimeSubgraph.md#countallpooledcreditlines)
- [countAllPooledCreditLinesOfBorrower](subgraph.SublimeSubgraph.md#countallpooledcreditlinesofborrower)
- [countAllPooledCreditLinesOfBorrowerWithState](subgraph.SublimeSubgraph.md#countallpooledcreditlinesofborrowerwithstate)
- [countAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph.SublimeSubgraph.md#countallpooledcreditlinesofborrowerwithstatenotin)
- [countAllPooledCreditLinesOfLender](subgraph.SublimeSubgraph.md#countallpooledcreditlinesoflender)
- [countAllPooledCreditLinesOfLenderWithState](subgraph.SublimeSubgraph.md#countallpooledcreditlinesoflenderwithstate)
- [countAllPooledCreditLinesOfLenderWithStateNotIn](subgraph.SublimeSubgraph.md#countallpooledcreditlinesoflenderwithstatenotin)
- [countAllPooledCreditLinesWithStates](subgraph.SublimeSubgraph.md#countallpooledcreditlineswithstates)
- [countAllPooledCreditLinesWithStatesNotIn](subgraph.SublimeSubgraph.md#countallpooledcreditlineswithstatesnotin)
- [getAllCreditLines](subgraph.SublimeSubgraph.md#getallcreditlines)
- [getAllLendersOfPool](subgraph.SublimeSubgraph.md#getalllendersofpool)
- [getAllPoolCreditLinesWithStateIn](subgraph.SublimeSubgraph.md#getallpoolcreditlineswithstatein)
- [getAllPoolCreditLinesWithStateNotIn](subgraph.SublimeSubgraph.md#getallpoolcreditlineswithstatenotin)
- [getAllPooledCreditLines](subgraph.SublimeSubgraph.md#getallpooledcreditlines)
- [getAllPooledCreditLinesLenderCanLendTo](subgraph.SublimeSubgraph.md#getallpooledcreditlineslendercanlendto)
- [getAllPooledCreditLinesOfBorrower](subgraph.SublimeSubgraph.md#getallpooledcreditlinesofborrower)
- [getAllPooledCreditLinesOfBorrowerWithStateIn](subgraph.SublimeSubgraph.md#getallpooledcreditlinesofborrowerwithstatein)
- [getAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph.SublimeSubgraph.md#getallpooledcreditlinesofborrowerwithstatenotin)
- [getAllPooledCreditLinesOfLender](subgraph.SublimeSubgraph.md#getallpooledcreditlinesoflender)
- [getAllPooledCreditLinesOfUser](subgraph.SublimeSubgraph.md#getallpooledcreditlinesofuser)
- [getAllPoolsByPoolType](subgraph.SublimeSubgraph.md#getallpoolsbypooltype)
- [getAllowances](subgraph.SublimeSubgraph.md#getallowances)
- [getConfirmedCreditLinesOfBorrower](subgraph.SublimeSubgraph.md#getconfirmedcreditlinesofborrower)
- [getConfirmedCreditLinesOfLender](subgraph.SublimeSubgraph.md#getconfirmedcreditlinesoflender)
- [getCreditLine](subgraph.SublimeSubgraph.md#getcreditline)
- [getCreditLineStatus](subgraph.SublimeSubgraph.md#getcreditlinestatus)
- [getCreditLineTimeline](subgraph.SublimeSubgraph.md#getcreditlinetimeline)
- [getCreditLinesOverview](subgraph.SublimeSubgraph.md#getcreditlinesoverview)
- [getDashboardOverview](subgraph.SublimeSubgraph.md#getdashboardoverview)
- [getLendersPerPool](subgraph.SublimeSubgraph.md#getlendersperpool)
- [getLendersViewOfPooledCredit](subgraph.SublimeSubgraph.md#getlendersviewofpooledcredit)
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
- [getUserMetadata](subgraph.SublimeSubgraph.md#getusermetadata)
- [getVerifiedTwitterId](subgraph.SublimeSubgraph.md#getverifiedtwitterid)

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

#### Overrides

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[constructor](subgraph_UserMeta.UserMetaCalls.md#constructor)

#### Defined in

[src/subgraph/index.ts:7](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/index.ts#L7)

## Properties

### signer

• `Protected` **signer**: `Signer`

**`description`** signer used to sign

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[signer](subgraph_UserMeta.UserMetaCalls.md#signer)

#### Defined in

[src/subgraph/Base.ts:18](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L18)

___

### subgraphUrl

• `Protected` **subgraphUrl**: `string`

**`description`** subgraph url for fetching the sublime data

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[subgraphUrl](subgraph_UserMeta.UserMetaCalls.md#subgraphurl)

#### Defined in

[src/subgraph/Base.ts:13](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L13)

___

### sublimeAddresses

• `Protected` **sublimeAddresses**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

**`description`** sublime config. (Contains all addresses relevant to sublime ecosystem)

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[sublimeAddresses](subgraph_UserMeta.UserMetaCalls.md#sublimeaddresses)

#### Defined in

[src/subgraph/Base.ts:30](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L30)

___

### tokenManager

• `Protected` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

**`description`** instance of token manager class that caches and retreives token data

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[tokenManager](subgraph_UserMeta.UserMetaCalls.md#tokenmanager)

#### Defined in

[src/subgraph/Base.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L23)

___

### yieldApi

• `Protected` **yieldApi**: [`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md)

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[yieldApi](subgraph_UserMeta.UserMetaCalls.md#yieldapi)

#### Defined in

[src/subgraph/Base.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L25)

## Methods

### countAllCreditLines

▸ **countAllCreditLines**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllCreditLines](subgraph_UserMeta.UserMetaCalls.md#countallcreditlines)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllCreditLinesOfBorrowerWithStateIn](subgraph_UserMeta.UserMetaCalls.md#countallcreditlinesofborrowerwithstatein)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllCreditLinesOfBorrowerWithStateIn_requestByLender](subgraph_UserMeta.UserMetaCalls.md#countallcreditlinesofborrowerwithstatein_requestbylender)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllCreditLinesOfBorrowerWithStateNotIn](subgraph_UserMeta.UserMetaCalls.md#countallcreditlinesofborrowerwithstatenotin)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllCreditLinesOfBorrowerWithStateNotIn_requestByLender](subgraph_UserMeta.UserMetaCalls.md#countallcreditlinesofborrowerwithstatenotin_requestbylender)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllCreditLinesOfLenderWithStateIn](subgraph_UserMeta.UserMetaCalls.md#countallcreditlinesoflenderwithstatein)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllCreditLinesOfLenderWithStateIn_requestByLender](subgraph_UserMeta.UserMetaCalls.md#countallcreditlinesoflenderwithstatein_requestbylender)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllCreditLinesOfLenderWithStateNotIn](subgraph_UserMeta.UserMetaCalls.md#countallcreditlinesoflenderwithstatenotin)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllCreditLinesOfLenderWithStateNotIn_requestByLender](subgraph_UserMeta.UserMetaCalls.md#countallcreditlinesoflenderwithstatenotin_requestbylender)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllLendersOfPool](subgraph_UserMeta.UserMetaCalls.md#countalllendersofpool)

#### Defined in

[src/subgraph/PooledCreditLine.ts:559](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/PooledCreditLine.ts#L559)

___

### countAllPooledCreditLines

▸ **countAllPooledCreditLines**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllPooledCreditLines](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlines)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllPooledCreditLinesOfBorrower](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlinesofborrower)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllPooledCreditLinesOfBorrowerWithState](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlinesofborrowerwithstate)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlinesofborrowerwithstatenotin)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllPooledCreditLinesOfLender](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlinesoflender)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllPooledCreditLinesOfLenderWithState](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlinesoflenderwithstate)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllPooledCreditLinesOfLenderWithStateNotIn](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlinesoflenderwithstatenotin)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllPooledCreditLinesWithStates](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlineswithstates)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllPooledCreditLinesWithStatesNotIn](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlineswithstatesnotin)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllCreditLines](subgraph_UserMeta.UserMetaCalls.md#getallcreditlines)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllLendersOfPool](subgraph_UserMeta.UserMetaCalls.md#getalllendersofpool)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllPoolCreditLinesWithStateIn](subgraph_UserMeta.UserMetaCalls.md#getallpoolcreditlineswithstatein)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllPoolCreditLinesWithStateNotIn](subgraph_UserMeta.UserMetaCalls.md#getallpoolcreditlineswithstatenotin)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllPooledCreditLines](subgraph_UserMeta.UserMetaCalls.md#getallpooledcreditlines)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllPooledCreditLinesLenderCanLendTo](subgraph_UserMeta.UserMetaCalls.md#getallpooledcreditlineslendercanlendto)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllPooledCreditLinesOfBorrower](subgraph_UserMeta.UserMetaCalls.md#getallpooledcreditlinesofborrower)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllPooledCreditLinesOfBorrowerWithStateIn](subgraph_UserMeta.UserMetaCalls.md#getallpooledcreditlinesofborrowerwithstatein)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_UserMeta.UserMetaCalls.md#getallpooledcreditlinesofborrowerwithstatenotin)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllPooledCreditLinesOfLender](subgraph_UserMeta.UserMetaCalls.md#getallpooledcreditlinesoflender)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllPooledCreditLinesOfUser](subgraph_UserMeta.UserMetaCalls.md#getallpooledcreditlinesofuser)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllPoolsByPoolType](subgraph_UserMeta.UserMetaCalls.md#getallpoolsbypooltype)

#### Defined in

[src/subgraph/Pools.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Pools.ts#L39)

___

### getAllowances

▸ **getAllowances**(): `Promise`<`any`[]\>

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllowances](subgraph_UserMeta.UserMetaCalls.md#getallowances)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getConfirmedCreditLinesOfBorrower](subgraph_UserMeta.UserMetaCalls.md#getconfirmedcreditlinesofborrower)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getConfirmedCreditLinesOfLender](subgraph_UserMeta.UserMetaCalls.md#getconfirmedcreditlinesoflender)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getCreditLine](subgraph_UserMeta.UserMetaCalls.md#getcreditline)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getCreditLineStatus](subgraph_UserMeta.UserMetaCalls.md#getcreditlinestatus)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getCreditLineTimeline](subgraph_UserMeta.UserMetaCalls.md#getcreditlinetimeline)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getCreditLinesOverview](subgraph_UserMeta.UserMetaCalls.md#getcreditlinesoverview)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getDashboardOverview](subgraph_UserMeta.UserMetaCalls.md#getdashboardoverview)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getLendersPerPool](subgraph_UserMeta.UserMetaCalls.md#getlendersperpool)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getLendersViewOfPooledCredit](subgraph_UserMeta.UserMetaCalls.md#getlendersviewofpooledcredit)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getPendingCreditLinesRequestedByBorrower](subgraph_UserMeta.UserMetaCalls.md#getpendingcreditlinesrequestedbyborrower)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getPendingCreditLinesRequestedToBorrower](subgraph_UserMeta.UserMetaCalls.md#getpendingcreditlinesrequestedtoborrower)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getPendingCreditLinesRequestedToLender](subgraph_UserMeta.UserMetaCalls.md#getpendingcreditlinesrequestedtolender)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getPendingCreditlinesRequestedByLender](subgraph_UserMeta.UserMetaCalls.md#getpendingcreditlinesrequestedbylender)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getPool](subgraph_UserMeta.UserMetaCalls.md#getpool)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getPoolByBorrower](subgraph_UserMeta.UserMetaCalls.md#getpoolbyborrower)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getPoolByBorrowerByType](subgraph_UserMeta.UserMetaCalls.md#getpoolbyborrowerbytype)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getPoolByLender](subgraph_UserMeta.UserMetaCalls.md#getpoolbylender)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getPoolByLenderByType](subgraph_UserMeta.UserMetaCalls.md#getpoolbylenderbytype)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getPooledCreditLineById](subgraph_UserMeta.UserMetaCalls.md#getpooledcreditlinebyid)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getPooledCreditLineTimeline](subgraph_UserMeta.UserMetaCalls.md#getpooledcreditlinetimeline)

#### Defined in

[src/subgraph/PooledCreditLine.ts:380](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/PooledCreditLine.ts#L380)

___

### getPools

▸ **getPools**(): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

Array of all pools created on sublime

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getPools](subgraph_UserMeta.UserMetaCalls.md#getpools)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getProfileOverview](subgraph_UserMeta.UserMetaCalls.md#getprofileoverview)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getRandomInt](subgraph_UserMeta.UserMetaCalls.md#getrandomint)

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

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getSavingsAccountOverview](subgraph_UserMeta.UserMetaCalls.md#getsavingsaccountoverview)

#### Defined in

[src/subgraph/SavingsAccount.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/SavingsAccount.ts#L28)

___

### getUserMetadata

▸ **getUserMetadata**(`user`): `Promise`<[`UserMetaData`](../interfaces/types_Types.UserMetaData.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |

#### Returns

`Promise`<[`UserMetaData`](../interfaces/types_Types.UserMetaData.md)[]\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getUserMetadata](subgraph_UserMeta.UserMetaCalls.md#getusermetadata)

#### Defined in

[src/subgraph/UserMeta.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/UserMeta.ts#L14)

___

### getVerifiedTwitterId

▸ **getVerifiedTwitterId**(`address`): `Promise`<[`TwitterDetails`](../interfaces/types_Types.TwitterDetails.md)[]\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | Address of the user to fetch |

#### Returns

`Promise`<[`TwitterDetails`](../interfaces/types_Types.TwitterDetails.md)[]\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getVerifiedTwitterId](subgraph_UserMeta.UserMetaCalls.md#getverifiedtwitterid)

#### Defined in

[src/subgraph/UserMeta.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/UserMeta.ts#L53)
