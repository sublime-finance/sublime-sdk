[sublime-sdk](../README.md) / [Modules](../modules.md) / [subgraph](../modules/subgraph.md) / SublimeSubgraph

# Class: SublimeSubgraph

[subgraph](../modules/subgraph.md).SublimeSubgraph

## Hierarchy

- `PooledCreditLinesLenderOverview`

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
- [getAvaialbleBorrowLimitOfBorrower](subgraph.SublimeSubgraph.md#getavaialbleborrowlimitofborrower)
- [getBorrowerCreditLineCollective](subgraph.SublimeSubgraph.md#getborrowercreditlinecollective)
- [getConfirmedCreditLinesOfBorrower](subgraph.SublimeSubgraph.md#getconfirmedcreditlinesofborrower)
- [getConfirmedCreditLinesOfLender](subgraph.SublimeSubgraph.md#getconfirmedcreditlinesoflender)
- [getCreditLine](subgraph.SublimeSubgraph.md#getcreditline)
- [getCreditLineStatus](subgraph.SublimeSubgraph.md#getcreditlinestatus)
- [getCreditLineTimeline](subgraph.SublimeSubgraph.md#getcreditlinetimeline)
- [getCreditLinesOverview](subgraph.SublimeSubgraph.md#getcreditlinesoverview)
- [getDashboardOverview](subgraph.SublimeSubgraph.md#getdashboardoverview)
- [getInterestCollectedByLender](subgraph.SublimeSubgraph.md#getinterestcollectedbylender)
- [getLenderCreditLineCollective](subgraph.SublimeSubgraph.md#getlendercreditlinecollective)
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
- [getPooledCreditLineCollectiveOfBorrower](subgraph.SublimeSubgraph.md#getpooledcreditlinecollectiveofborrower)
- [getPooledCreditLineCollectiveOfLender](subgraph.SublimeSubgraph.md#getpooledcreditlinecollectiveoflender)
- [getPooledCreditLineTimeline](subgraph.SublimeSubgraph.md#getpooledcreditlinetimeline)
- [getPools](subgraph.SublimeSubgraph.md#getpools)
- [getProfileOverview](subgraph.SublimeSubgraph.md#getprofileoverview)
- [getRandomInt](subgraph.SublimeSubgraph.md#getrandomint)
- [getSavingsAccountOverview](subgraph.SublimeSubgraph.md#getsavingsaccountoverview)
- [getTotalAmountCommitedByLender](subgraph.SublimeSubgraph.md#gettotalamountcommitedbylender)
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

PooledCreditLinesLenderOverview.constructor

#### Defined in

[src/subgraph/index.ts:7](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/index.ts#L7)

## Properties

### signer

• `Protected` **signer**: `Signer`

**`description`** signer used to sign

#### Inherited from

PooledCreditLinesLenderOverview.signer

#### Defined in

[src/subgraph/Base.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/Base.ts#L19)

___

### subgraphUrl

• `Protected` **subgraphUrl**: `string`

**`description`** subgraph url for fetching the sublime data

#### Inherited from

PooledCreditLinesLenderOverview.subgraphUrl

#### Defined in

[src/subgraph/Base.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/Base.ts#L14)

___

### sublimeAddresses

• `Protected` **sublimeAddresses**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

**`description`** sublime config. (Contains all addresses relevant to sublime ecosystem)

#### Inherited from

PooledCreditLinesLenderOverview.sublimeAddresses

#### Defined in

[src/subgraph/Base.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/Base.ts#L33)

___

### tokenManager

• `Protected` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

**`description`** instance of token manager class that caches and retreives token data

#### Inherited from

PooledCreditLinesLenderOverview.tokenManager

#### Defined in

[src/subgraph/Base.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/Base.ts#L24)

___

### verificationApi

• `Protected` **verificationApi**: [`VerificationAPI`](api_verification.VerificationAPI.md)

#### Inherited from

PooledCreditLinesLenderOverview.verificationApi

#### Defined in

[src/subgraph/Base.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/Base.ts#L28)

___

### yieldApi

• `Protected` **yieldApi**: [`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md)

#### Inherited from

PooledCreditLinesLenderOverview.yieldApi

#### Defined in

[src/subgraph/Base.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/Base.ts#L26)

## Methods

### countAllCreditLines

▸ **countAllCreditLines**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

PooledCreditLinesLenderOverview.countAllCreditLines

#### Defined in

[src/subgraph/CreditLine.ts:334](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/CreditLine.ts#L334)

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

PooledCreditLinesLenderOverview.countAllCreditLinesOfBorrowerWithStateIn

#### Defined in

[src/subgraph/CreditLine.ts:339](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/CreditLine.ts#L339)

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

PooledCreditLinesLenderOverview.countAllCreditLinesOfBorrowerWithStateIn\_requestByLender

#### Defined in

[src/subgraph/CreditLine.ts:348](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/CreditLine.ts#L348)

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

PooledCreditLinesLenderOverview.countAllCreditLinesOfBorrowerWithStateNotIn

#### Defined in

[src/subgraph/CreditLine.ts:362](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/CreditLine.ts#L362)

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

PooledCreditLinesLenderOverview.countAllCreditLinesOfBorrowerWithStateNotIn\_requestByLender

#### Defined in

[src/subgraph/CreditLine.ts:371](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/CreditLine.ts#L371)

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

PooledCreditLinesLenderOverview.countAllCreditLinesOfLenderWithStateIn

#### Defined in

[src/subgraph/CreditLine.ts:408](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/CreditLine.ts#L408)

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

PooledCreditLinesLenderOverview.countAllCreditLinesOfLenderWithStateIn\_requestByLender

#### Defined in

[src/subgraph/CreditLine.ts:417](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/CreditLine.ts#L417)

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

PooledCreditLinesLenderOverview.countAllCreditLinesOfLenderWithStateNotIn

#### Defined in

[src/subgraph/CreditLine.ts:385](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/CreditLine.ts#L385)

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

PooledCreditLinesLenderOverview.countAllCreditLinesOfLenderWithStateNotIn\_requestByLender

#### Defined in

[src/subgraph/CreditLine.ts:394](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/CreditLine.ts#L394)

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

PooledCreditLinesLenderOverview.countAllLendersOfPooledCreditLine

#### Defined in

[src/subgraph/PooledCreditLine.ts:701](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/PooledCreditLine.ts#L701)

___

### countAllPooledCreditLines

▸ **countAllPooledCreditLines**(): `Promise`<`number`\>

**`description`** Count all the pooled credit lines

#### Returns

`Promise`<`number`\>

#### Inherited from

PooledCreditLinesLenderOverview.countAllPooledCreditLines

#### Defined in

[src/subgraph/PooledCreditLine.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/PooledCreditLine.ts#L65)

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

PooledCreditLinesLenderOverview.countAllPooledCreditLinesOfBorrower

#### Defined in

[src/subgraph/PooledCreditLine.ts:75](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/PooledCreditLine.ts#L75)

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

PooledCreditLinesLenderOverview.countAllPooledCreditLinesOfBorrowerWithState

#### Defined in

[src/subgraph/PooledCreditLine.ts:642](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/PooledCreditLine.ts#L642)

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

PooledCreditLinesLenderOverview.countAllPooledCreditLinesOfBorrowerWithStateNotIn

#### Defined in

[src/subgraph/PooledCreditLine.ts:657](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/PooledCreditLine.ts#L657)

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

PooledCreditLinesLenderOverview.countAllPooledCreditLinesOfLender

#### Defined in

[src/subgraph/PooledCreditLine.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/PooledCreditLine.ts#L85)

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

PooledCreditLinesLenderOverview.countAllPooledCreditLinesOfLenderWithState

#### Defined in

[src/subgraph/PooledCreditLine.ts:672](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/PooledCreditLine.ts#L672)

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

PooledCreditLinesLenderOverview.countAllPooledCreditLinesOfLenderWithStateNotIn

#### Defined in

[src/subgraph/PooledCreditLine.ts:687](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/PooledCreditLine.ts#L687)

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

PooledCreditLinesLenderOverview.countAllPooledCreditLinesWithStates

#### Defined in

[src/subgraph/PooledCreditLine.ts:615](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/PooledCreditLine.ts#L615)

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

PooledCreditLinesLenderOverview.countAllPooledCreditLinesWithStatesNotIn

#### Defined in

[src/subgraph/PooledCreditLine.ts:628](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/PooledCreditLine.ts#L628)

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

PooledCreditLinesLenderOverview.getAllCreditLines

#### Defined in

[src/subgraph/CreditLine.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/CreditLine.ts#L52)

___

### getAllLendersOfPool

▸ **getAllLendersOfPool**(): `Promise`<[`PoolLender`](../interfaces/types_Types.PoolLender.md)[]\>

**`description`** To-Do

#### Returns

`Promise`<[`PoolLender`](../interfaces/types_Types.PoolLender.md)[]\>

All the lenders of a given pool

#### Inherited from

PooledCreditLinesLenderOverview.getAllLendersOfPool

#### Defined in

[src/subgraph/Pools.ts:97](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/Pools.ts#L97)

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

PooledCreditLinesLenderOverview.getAllPoolCreditLinesWithStateIn

#### Defined in

[src/subgraph/PooledCreditLine.ts:108](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/PooledCreditLine.ts#L108)

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

PooledCreditLinesLenderOverview.getAllPoolCreditLinesWithStateNotIn

#### Defined in

[src/subgraph/PooledCreditLine.ts:129](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/PooledCreditLine.ts#L129)

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

PooledCreditLinesLenderOverview.getAllPooledCreditLines

#### Defined in

[src/subgraph/PooledCreditLine.ts:96](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/PooledCreditLine.ts#L96)

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

PooledCreditLinesLenderOverview.getAllPooledCreditLinesLenderCanLendTo

#### Defined in

[src/subgraph/PooledCreditLine.ts:222](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/PooledCreditLine.ts#L222)

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

PooledCreditLinesLenderOverview.getAllPooledCreditLinesOfBorrower

#### Defined in

[src/subgraph/PooledCreditLine.ts:160](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/PooledCreditLine.ts#L160)

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

PooledCreditLinesLenderOverview.getAllPooledCreditLinesOfBorrowerWithStateIn

#### Defined in

[src/subgraph/PooledCreditLine.ts:175](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/PooledCreditLine.ts#L175)

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

PooledCreditLinesLenderOverview.getAllPooledCreditLinesOfBorrowerWithStateNotIn

#### Defined in

[src/subgraph/PooledCreditLine.ts:199](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/PooledCreditLine.ts#L199)

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

PooledCreditLinesLenderOverview.getAllPooledCreditLinesOfLender

#### Defined in

[src/subgraph/PooledCreditLine.ts:443](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/PooledCreditLine.ts#L443)

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

PooledCreditLinesLenderOverview.getAllPooledCreditLinesOfUser

#### Defined in

[src/subgraph/PooledCreditLine.ts:461](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/PooledCreditLine.ts#L461)

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

PooledCreditLinesLenderOverview.getAllPoolsByPoolType

#### Defined in

[src/subgraph/Pools.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/Pools.ts#L39)

___

### getAllowances

▸ **getAllowances**(): `Promise`<`any`[]\>

#### Returns

`Promise`<`any`[]\>

#### Inherited from

PooledCreditLinesLenderOverview.getAllowances

#### Defined in

[src/subgraph/SavingsAccount.ts:18](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/SavingsAccount.ts#L18)

___

### getAvaialbleBorrowLimitOfBorrower

▸ **getAvaialbleBorrowLimitOfBorrower**(`borrower`): `Promise`<[`BorrowerAvailableCredit`](../interfaces/types_Types.BorrowerAvailableCredit.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |

#### Returns

`Promise`<[`BorrowerAvailableCredit`](../interfaces/types_Types.BorrowerAvailableCredit.md)\>

#### Inherited from

PooledCreditLinesLenderOverview.getAvaialbleBorrowLimitOfBorrower

#### Defined in

[src/subgraph/CreditLineOverview.ts:503](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/CreditLineOverview.ts#L503)

___

### getBorrowerCreditLineCollective

▸ **getBorrowerCreditLineCollective**(`user`): `Promise`<[`BorrowerCollectiveData`](../interfaces/types_Types.BorrowerCollectiveData.md)\>

**`description`** Amount borrowed and repaid by a borrower accross all credit lines

**`summary`** Time based interest calculation is pending. (amountRepaid + outstandingInterest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |

#### Returns

`Promise`<[`BorrowerCollectiveData`](../interfaces/types_Types.BorrowerCollectiveData.md)\>

#### Inherited from

PooledCreditLinesLenderOverview.getBorrowerCreditLineCollective

#### Defined in

[src/subgraph/CreditLineOverview.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/CreditLineOverview.ts#L60)

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

PooledCreditLinesLenderOverview.getConfirmedCreditLinesOfBorrower

#### Defined in

[src/subgraph/CreditLine.ts:169](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/CreditLine.ts#L169)

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

PooledCreditLinesLenderOverview.getConfirmedCreditLinesOfLender

#### Defined in

[src/subgraph/CreditLine.ts:180](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/CreditLine.ts#L180)

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

PooledCreditLinesLenderOverview.getCreditLine

#### Defined in

[src/subgraph/CreditLine.ts:233](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/CreditLine.ts#L233)

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

PooledCreditLinesLenderOverview.getCreditLineStatus

#### Defined in

[src/subgraph/PooledCreditLine.ts:356](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/PooledCreditLine.ts#L356)

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

PooledCreditLinesLenderOverview.getCreditLineTimeline

#### Defined in

[src/subgraph/CreditLine.ts:297](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/CreditLine.ts#L297)

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

PooledCreditLinesLenderOverview.getCreditLinesOverview

#### Defined in

[src/subgraph/CreditLine.ts:247](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/CreditLine.ts#L247)

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

PooledCreditLinesLenderOverview.getDashboardOverview

#### Defined in

[src/subgraph/Base.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/Base.ts#L58)

___

### getInterestCollectedByLender

▸ **getInterestCollectedByLender**(`lender`): `Promise`<[`InterestCollectedByLender`](../interfaces/types_Types.InterestCollectedByLender.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |

#### Returns

`Promise`<[`InterestCollectedByLender`](../interfaces/types_Types.InterestCollectedByLender.md)\>

#### Inherited from

PooledCreditLinesLenderOverview.getInterestCollectedByLender

#### Defined in

[src/subgraph/CreditLineOverview.ts:92](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/CreditLineOverview.ts#L92)

___

### getLenderCreditLineCollective

▸ **getLenderCreditLineCollective**(`user`): `Promise`<[`LenderCollectiveData`](../interfaces/types_Types.LenderCollectiveData.md)\>

**`description`** Total Amount put by a lender in all credit lines

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |

#### Returns

`Promise`<[`LenderCollectiveData`](../interfaces/types_Types.LenderCollectiveData.md)\>

#### Inherited from

PooledCreditLinesLenderOverview.getLenderCreditLineCollective

#### Defined in

[src/subgraph/CreditLineOverview.ts:43](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/CreditLineOverview.ts#L43)

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

PooledCreditLinesLenderOverview.getLendersPerPool

#### Defined in

[src/subgraph/PooledCreditLine.ts:542](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/PooledCreditLine.ts#L542)

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

PooledCreditLinesLenderOverview.getLendersViewOfPooledCredit

#### Defined in

[src/subgraph/PooledCreditLine.ts:232](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/PooledCreditLine.ts#L232)

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

PooledCreditLinesLenderOverview.getPendingCreditLinesRequestedByBorrower

#### Defined in

[src/subgraph/CreditLine.ts:202](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/CreditLine.ts#L202)

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

PooledCreditLinesLenderOverview.getPendingCreditLinesRequestedToBorrower

#### Defined in

[src/subgraph/CreditLine.ts:224](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/CreditLine.ts#L224)

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

PooledCreditLinesLenderOverview.getPendingCreditLinesRequestedToLender

#### Defined in

[src/subgraph/CreditLine.ts:213](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/CreditLine.ts#L213)

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

PooledCreditLinesLenderOverview.getPendingCreditlinesRequestedByLender

#### Defined in

[src/subgraph/CreditLine.ts:191](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/CreditLine.ts#L191)

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

PooledCreditLinesLenderOverview.getPool

#### Defined in

[src/subgraph/Pools.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/Pools.ts#L48)

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

PooledCreditLinesLenderOverview.getPoolByBorrower

#### Defined in

[src/subgraph/Pools.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/Pools.ts#L58)

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

PooledCreditLinesLenderOverview.getPoolByBorrowerByType

#### Defined in

[src/subgraph/Pools.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/Pools.ts#L87)

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

PooledCreditLinesLenderOverview.getPoolByLender

#### Defined in

[src/subgraph/Pools.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/Pools.ts#L67)

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

PooledCreditLinesLenderOverview.getPoolByLenderByType

#### Defined in

[src/subgraph/Pools.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/Pools.ts#L77)

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

PooledCreditLinesLenderOverview.getPooledCreditLineById

#### Defined in

[src/subgraph/PooledCreditLine.ts:148](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/PooledCreditLine.ts#L148)

___

### getPooledCreditLineCollectiveOfBorrower

▸ **getPooledCreditLineCollectiveOfBorrower**(`borrower`): `Promise`<[`PooledCreditLineBorrowerData`](../interfaces/types_Types.PooledCreditLineBorrowerData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |

#### Returns

`Promise`<[`PooledCreditLineBorrowerData`](../interfaces/types_Types.PooledCreditLineBorrowerData.md)\>

#### Inherited from

PooledCreditLinesLenderOverview.getPooledCreditLineCollectiveOfBorrower

#### Defined in

src/subgraph/PooledCreditLineBorrowerOverview.ts:21

___

### getPooledCreditLineCollectiveOfLender

▸ **getPooledCreditLineCollectiveOfLender**(`lender`): `Promise`<[`PooledCreditLineLenderData`](../interfaces/types_Types.PooledCreditLineLenderData.md)\>

**`description`** TotalsharesWithdrawn is pending

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |

#### Returns

`Promise`<[`PooledCreditLineLenderData`](../interfaces/types_Types.PooledCreditLineLenderData.md)\>

#### Inherited from

PooledCreditLinesLenderOverview.getPooledCreditLineCollectiveOfLender

#### Defined in

src/subgraph/PooledCreditLinesLenderOverview.ts:27

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

PooledCreditLinesLenderOverview.getPooledCreditLineTimeline

#### Defined in

[src/subgraph/PooledCreditLine.ts:476](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/PooledCreditLine.ts#L476)

___

### getPools

▸ **getPools**(): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

Array of all pools created on sublime

#### Inherited from

PooledCreditLinesLenderOverview.getPools

#### Defined in

[src/subgraph/Pools.ts:29](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/Pools.ts#L29)

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

PooledCreditLinesLenderOverview.getProfileOverview

#### Defined in

[src/subgraph/Pools.ts:178](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/Pools.ts#L178)

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

PooledCreditLinesLenderOverview.getRandomInt

#### Defined in

[src/subgraph/Base.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/Base.ts#L50)

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

PooledCreditLinesLenderOverview.getSavingsAccountOverview

#### Defined in

[src/subgraph/SavingsAccount.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/SavingsAccount.ts#L28)

___

### getTotalAmountCommitedByLender

▸ **getTotalAmountCommitedByLender**(`lender`): `Promise`<[`LenderTotalCreditCommited`](../interfaces/types_Types.LenderTotalCreditCommited.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |

#### Returns

`Promise`<[`LenderTotalCreditCommited`](../interfaces/types_Types.LenderTotalCreditCommited.md)\>

#### Inherited from

PooledCreditLinesLenderOverview.getTotalAmountCommitedByLender

#### Defined in

[src/subgraph/CreditLineOverview.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/CreditLineOverview.ts#L71)

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

PooledCreditLinesLenderOverview.getUserMetadata

#### Defined in

[src/subgraph/UserMeta.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/UserMeta.ts#L14)

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

PooledCreditLinesLenderOverview.getVerifiedTwitterId

#### Defined in

[src/subgraph/UserMeta.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/2e61ff0/src/subgraph/UserMeta.ts#L53)
