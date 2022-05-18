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
- [verificationApi](subgraph.SublimeSubgraph.md#verificationapi)
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
- [countAllLendersOfPooledCreditLine](subgraph.SublimeSubgraph.md#countalllendersofpooledcreditline)
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

[src/subgraph/index.ts:7](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/index.ts#L7)

## Properties

### signer

• `Protected` **signer**: `Signer`

**`description`** signer used to sign

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[signer](subgraph_UserMeta.UserMetaCalls.md#signer)

#### Defined in

[src/subgraph/Base.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/Base.ts#L19)

___

### subgraphUrl

• `Protected` **subgraphUrl**: `string`

**`description`** subgraph url for fetching the sublime data

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[subgraphUrl](subgraph_UserMeta.UserMetaCalls.md#subgraphurl)

#### Defined in

[src/subgraph/Base.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/Base.ts#L14)

___

### sublimeAddresses

• `Protected` **sublimeAddresses**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

**`description`** sublime config. (Contains all addresses relevant to sublime ecosystem)

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[sublimeAddresses](subgraph_UserMeta.UserMetaCalls.md#sublimeaddresses)

#### Defined in

[src/subgraph/Base.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/Base.ts#L33)

___

### tokenManager

• `Protected` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

**`description`** instance of token manager class that caches and retreives token data

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[tokenManager](subgraph_UserMeta.UserMetaCalls.md#tokenmanager)

#### Defined in

[src/subgraph/Base.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/Base.ts#L24)

___

### verificationApi

• `Protected` **verificationApi**: [`VerificationAPI`](api_verification.VerificationAPI.md)

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[verificationApi](subgraph_UserMeta.UserMetaCalls.md#verificationapi)

#### Defined in

[src/subgraph/Base.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/Base.ts#L28)

___

### yieldApi

• `Protected` **yieldApi**: [`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md)

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[yieldApi](subgraph_UserMeta.UserMetaCalls.md#yieldapi)

#### Defined in

[src/subgraph/Base.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/Base.ts#L26)

## Methods

### countAllCreditLines

▸ **countAllCreditLines**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllCreditLines](subgraph_UserMeta.UserMetaCalls.md#countallcreditlines)

#### Defined in

[src/subgraph/CreditLine.ts:334](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/CreditLine.ts#L334)

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

[src/subgraph/CreditLine.ts:339](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/CreditLine.ts#L339)

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

[src/subgraph/CreditLine.ts:348](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/CreditLine.ts#L348)

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

[src/subgraph/CreditLine.ts:362](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/CreditLine.ts#L362)

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

[src/subgraph/CreditLine.ts:371](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/CreditLine.ts#L371)

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

[src/subgraph/CreditLine.ts:408](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/CreditLine.ts#L408)

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

[src/subgraph/CreditLine.ts:417](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/CreditLine.ts#L417)

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

[src/subgraph/CreditLine.ts:385](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/CreditLine.ts#L385)

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

[src/subgraph/CreditLine.ts:394](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/CreditLine.ts#L394)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllLendersOfPooledCreditLine](subgraph_UserMeta.UserMetaCalls.md#countalllendersofpooledcreditline)

#### Defined in

[src/subgraph/PooledCreditLine.ts:696](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/PooledCreditLine.ts#L696)

___

### countAllPooledCreditLines

▸ **countAllPooledCreditLines**(): `Promise`<`number`\>

**`description`** Count all the pooled credit lines

#### Returns

`Promise`<`number`\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllPooledCreditLines](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlines)

#### Defined in

[src/subgraph/PooledCreditLine.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/PooledCreditLine.ts#L65)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllPooledCreditLinesOfBorrower](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlinesofborrower)

#### Defined in

[src/subgraph/PooledCreditLine.ts:75](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/PooledCreditLine.ts#L75)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllPooledCreditLinesOfBorrowerWithState](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlinesofborrowerwithstate)

#### Defined in

[src/subgraph/PooledCreditLine.ts:637](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/PooledCreditLine.ts#L637)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlinesofborrowerwithstatenotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:652](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/PooledCreditLine.ts#L652)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllPooledCreditLinesOfLender](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlinesoflender)

#### Defined in

[src/subgraph/PooledCreditLine.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/PooledCreditLine.ts#L85)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllPooledCreditLinesOfLenderWithState](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlinesoflenderwithstate)

#### Defined in

[src/subgraph/PooledCreditLine.ts:667](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/PooledCreditLine.ts#L667)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllPooledCreditLinesOfLenderWithStateNotIn](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlinesoflenderwithstatenotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:682](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/PooledCreditLine.ts#L682)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllPooledCreditLinesWithStates](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlineswithstates)

#### Defined in

[src/subgraph/PooledCreditLine.ts:610](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/PooledCreditLine.ts#L610)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllPooledCreditLinesWithStatesNotIn](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlineswithstatesnotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:623](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/PooledCreditLine.ts#L623)

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

[src/subgraph/CreditLine.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/CreditLine.ts#L52)

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

[src/subgraph/Pools.ts:97](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/Pools.ts#L97)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllPoolCreditLinesWithStateIn](subgraph_UserMeta.UserMetaCalls.md#getallpoolcreditlineswithstatein)

#### Defined in

[src/subgraph/PooledCreditLine.ts:108](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/PooledCreditLine.ts#L108)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllPoolCreditLinesWithStateNotIn](subgraph_UserMeta.UserMetaCalls.md#getallpoolcreditlineswithstatenotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:129](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/PooledCreditLine.ts#L129)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllPooledCreditLines](subgraph_UserMeta.UserMetaCalls.md#getallpooledcreditlines)

#### Defined in

[src/subgraph/PooledCreditLine.ts:96](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/PooledCreditLine.ts#L96)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllPooledCreditLinesLenderCanLendTo](subgraph_UserMeta.UserMetaCalls.md#getallpooledcreditlineslendercanlendto)

#### Defined in

[src/subgraph/PooledCreditLine.ts:222](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/PooledCreditLine.ts#L222)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllPooledCreditLinesOfBorrower](subgraph_UserMeta.UserMetaCalls.md#getallpooledcreditlinesofborrower)

#### Defined in

[src/subgraph/PooledCreditLine.ts:160](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/PooledCreditLine.ts#L160)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllPooledCreditLinesOfBorrowerWithStateIn](subgraph_UserMeta.UserMetaCalls.md#getallpooledcreditlinesofborrowerwithstatein)

#### Defined in

[src/subgraph/PooledCreditLine.ts:175](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/PooledCreditLine.ts#L175)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_UserMeta.UserMetaCalls.md#getallpooledcreditlinesofborrowerwithstatenotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:199](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/PooledCreditLine.ts#L199)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllPooledCreditLinesOfLender](subgraph_UserMeta.UserMetaCalls.md#getallpooledcreditlinesoflender)

#### Defined in

[src/subgraph/PooledCreditLine.ts:439](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/PooledCreditLine.ts#L439)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllPooledCreditLinesOfUser](subgraph_UserMeta.UserMetaCalls.md#getallpooledcreditlinesofuser)

#### Defined in

[src/subgraph/PooledCreditLine.ts:457](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/PooledCreditLine.ts#L457)

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

[src/subgraph/Pools.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/Pools.ts#L39)

___

### getAllowances

▸ **getAllowances**(): `Promise`<`any`[]\>

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllowances](subgraph_UserMeta.UserMetaCalls.md#getallowances)

#### Defined in

[src/subgraph/SavingsAccount.ts:18](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/SavingsAccount.ts#L18)

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

[src/subgraph/CreditLine.ts:169](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/CreditLine.ts#L169)

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

[src/subgraph/CreditLine.ts:180](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/CreditLine.ts#L180)

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

[src/subgraph/CreditLine.ts:233](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/CreditLine.ts#L233)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getCreditLineStatus](subgraph_UserMeta.UserMetaCalls.md#getcreditlinestatus)

#### Defined in

[src/subgraph/PooledCreditLine.ts:356](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/PooledCreditLine.ts#L356)

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

[src/subgraph/CreditLine.ts:297](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/CreditLine.ts#L297)

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

[src/subgraph/CreditLine.ts:247](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/CreditLine.ts#L247)

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

[src/subgraph/Base.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/Base.ts#L58)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getLendersPerPool](subgraph_UserMeta.UserMetaCalls.md#getlendersperpool)

#### Defined in

[src/subgraph/PooledCreditLine.ts:538](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/PooledCreditLine.ts#L538)

___

### getLendersViewOfPooledCredit

▸ **getLendersViewOfPooledCredit**(`id`): `Promise`<[[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md), [`LenderContributionToPooledCreditLines`](../interfaces/types_Types.LenderContributionToPooledCreditLines.md)]\>

**`description`** Returns PCL detail and lender contribution of the same

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<[[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md), [`LenderContributionToPooledCreditLines`](../interfaces/types_Types.LenderContributionToPooledCreditLines.md)]\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getLendersViewOfPooledCredit](subgraph_UserMeta.UserMetaCalls.md#getlendersviewofpooledcredit)

#### Defined in

[src/subgraph/PooledCreditLine.ts:232](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/PooledCreditLine.ts#L232)

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

[src/subgraph/CreditLine.ts:202](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/CreditLine.ts#L202)

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

[src/subgraph/CreditLine.ts:224](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/CreditLine.ts#L224)

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

[src/subgraph/CreditLine.ts:213](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/CreditLine.ts#L213)

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

[src/subgraph/CreditLine.ts:191](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/CreditLine.ts#L191)

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

[src/subgraph/Pools.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/Pools.ts#L48)

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

[src/subgraph/Pools.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/Pools.ts#L58)

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

[src/subgraph/Pools.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/Pools.ts#L87)

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

[src/subgraph/Pools.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/Pools.ts#L67)

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

[src/subgraph/Pools.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/Pools.ts#L77)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getPooledCreditLineById](subgraph_UserMeta.UserMetaCalls.md#getpooledcreditlinebyid)

#### Defined in

[src/subgraph/PooledCreditLine.ts:148](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/PooledCreditLine.ts#L148)

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

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getPooledCreditLineTimeline](subgraph_UserMeta.UserMetaCalls.md#getpooledcreditlinetimeline)

#### Defined in

[src/subgraph/PooledCreditLine.ts:472](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/PooledCreditLine.ts#L472)

___

### getPools

▸ **getPools**(): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

Array of all pools created on sublime

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getPools](subgraph_UserMeta.UserMetaCalls.md#getpools)

#### Defined in

[src/subgraph/Pools.ts:29](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/Pools.ts#L29)

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

[src/subgraph/Pools.ts:178](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/Pools.ts#L178)

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

[src/subgraph/Base.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/Base.ts#L50)

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

[src/subgraph/SavingsAccount.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/SavingsAccount.ts#L28)

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

[src/subgraph/UserMeta.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/UserMeta.ts#L14)

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

[src/subgraph/UserMeta.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/c6c97bd/src/subgraph/UserMeta.ts#L53)
