[sublime-sdk](../README.md) / [Modules](../modules.md) / [subgraph](../modules/subgraph.md) / SublimeSubgraph

# Class: SublimeSubgraph

[subgraph](../modules/subgraph.md).SublimeSubgraph

## Hierarchy

- [`PooledCreditLineInterestCalculator`](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md)

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
- [getAvaialbleBorrowLimitOfBorrowerOfCreditLines](subgraph.SublimeSubgraph.md#getavaialbleborrowlimitofborrowerofcreditlines)
- [getBorrowerCreditLineCollective](subgraph.SublimeSubgraph.md#getborrowercreditlinecollective)
- [getBorrowerInterestDueForAllCreditLines](subgraph.SublimeSubgraph.md#getborrowerinterestdueforallcreditlines)
- [getBorrowerInterestDueForAllPooledCreditLines](subgraph.SublimeSubgraph.md#getborrowerinterestdueforallpooledcreditlines)
- [getBorrowerInterestDueForSpecificCreditLines](subgraph.SublimeSubgraph.md#getborrowerinterestdueforspecificcreditlines)
- [getConfirmedCreditLinesOfBorrower](subgraph.SublimeSubgraph.md#getconfirmedcreditlinesofborrower)
- [getConfirmedCreditLinesOfLender](subgraph.SublimeSubgraph.md#getconfirmedcreditlinesoflender)
- [getCreditLine](subgraph.SublimeSubgraph.md#getcreditline)
- [getCreditLineStatus](subgraph.SublimeSubgraph.md#getcreditlinestatus)
- [getCreditLineTimeline](subgraph.SublimeSubgraph.md#getcreditlinetimeline)
- [getCreditLinesOverview](subgraph.SublimeSubgraph.md#getcreditlinesoverview)
- [getDashboardOverview](subgraph.SublimeSubgraph.md#getdashboardoverview)
- [getInterestCollectedByLenderFromCreditLines](subgraph.SublimeSubgraph.md#getinterestcollectedbylenderfromcreditlines)
- [getLatestActionablePooledCreditLinesOfBorrower](subgraph.SublimeSubgraph.md#getlatestactionablepooledcreditlinesofborrower)
- [getLenderCreditLineCollective](subgraph.SublimeSubgraph.md#getlendercreditlinecollective)
- [getLendersPerPool](subgraph.SublimeSubgraph.md#getlendersperpool)
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
- [getSpecificPooledCreditLineOfLender](subgraph.SublimeSubgraph.md#getspecificpooledcreditlineoflender)
- [getTotalAmountCommitedByLenderToCreditLines](subgraph.SublimeSubgraph.md#gettotalamountcommitedbylendertocreditlines)
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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[constructor](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#constructor)

#### Defined in

[src/subgraph/index.ts:7](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/index.ts#L7)

## Properties

### signer

• `Protected` **signer**: `Signer`

**`description`** signer used to sign

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[signer](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#signer)

#### Defined in

[src/subgraph/Base.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/Base.ts#L19)

___

### subgraphUrl

• `Protected` **subgraphUrl**: `string`

**`description`** subgraph url for fetching the sublime data

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[subgraphUrl](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#subgraphurl)

#### Defined in

[src/subgraph/Base.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/Base.ts#L14)

___

### sublimeAddresses

• `Protected` **sublimeAddresses**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

**`description`** sublime config. (Contains all addresses relevant to sublime ecosystem)

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[sublimeAddresses](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#sublimeaddresses)

#### Defined in

[src/subgraph/Base.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/Base.ts#L33)

___

### tokenManager

• `Protected` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

**`description`** instance of token manager class that caches and retreives token data

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[tokenManager](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#tokenmanager)

#### Defined in

[src/subgraph/Base.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/Base.ts#L24)

___

### verificationApi

• `Protected` **verificationApi**: [`VerificationAPI`](api_verification.VerificationAPI.md)

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[verificationApi](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#verificationapi)

#### Defined in

[src/subgraph/Base.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/Base.ts#L28)

___

### yieldApi

• `Protected` **yieldApi**: [`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md)

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[yieldApi](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#yieldapi)

#### Defined in

[src/subgraph/Base.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/Base.ts#L26)

## Methods

### countAllCreditLines

▸ **countAllCreditLines**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllCreditLines](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallcreditlines)

#### Defined in

[src/subgraph/CreditLine.ts:339](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/CreditLine.ts#L339)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllCreditLinesOfBorrowerWithStateIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallcreditlinesofborrowerwithstatein)

#### Defined in

[src/subgraph/CreditLine.ts:344](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/CreditLine.ts#L344)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllCreditLinesOfBorrowerWithStateIn_requestByLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallcreditlinesofborrowerwithstatein_requestbylender)

#### Defined in

[src/subgraph/CreditLine.ts:353](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/CreditLine.ts#L353)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllCreditLinesOfBorrowerWithStateNotIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallcreditlinesofborrowerwithstatenotin)

#### Defined in

[src/subgraph/CreditLine.ts:367](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/CreditLine.ts#L367)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllCreditLinesOfBorrowerWithStateNotIn_requestByLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallcreditlinesofborrowerwithstatenotin_requestbylender)

#### Defined in

[src/subgraph/CreditLine.ts:376](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/CreditLine.ts#L376)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllCreditLinesOfLenderWithStateIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallcreditlinesoflenderwithstatein)

#### Defined in

[src/subgraph/CreditLine.ts:413](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/CreditLine.ts#L413)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllCreditLinesOfLenderWithStateIn_requestByLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallcreditlinesoflenderwithstatein_requestbylender)

#### Defined in

[src/subgraph/CreditLine.ts:422](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/CreditLine.ts#L422)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllCreditLinesOfLenderWithStateNotIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallcreditlinesoflenderwithstatenotin)

#### Defined in

[src/subgraph/CreditLine.ts:390](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/CreditLine.ts#L390)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllCreditLinesOfLenderWithStateNotIn_requestByLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallcreditlinesoflenderwithstatenotin_requestbylender)

#### Defined in

[src/subgraph/CreditLine.ts:399](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/CreditLine.ts#L399)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllLendersOfPooledCreditLine](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countalllendersofpooledcreditline)

#### Defined in

[src/subgraph/PooledCreditLine.ts:723](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/PooledCreditLine.ts#L723)

___

### countAllPooledCreditLines

▸ **countAllPooledCreditLines**(): `Promise`<`number`\>

**`description`** Count all the pooled credit lines

#### Returns

`Promise`<`number`\>

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllPooledCreditLines](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallpooledcreditlines)

#### Defined in

[src/subgraph/PooledCreditLine.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/PooledCreditLine.ts#L65)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllPooledCreditLinesOfBorrower](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallpooledcreditlinesofborrower)

#### Defined in

[src/subgraph/PooledCreditLine.ts:75](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/PooledCreditLine.ts#L75)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllPooledCreditLinesOfBorrowerWithState](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallpooledcreditlinesofborrowerwithstate)

#### Defined in

[src/subgraph/PooledCreditLine.ts:664](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/PooledCreditLine.ts#L664)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallpooledcreditlinesofborrowerwithstatenotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:679](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/PooledCreditLine.ts#L679)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllPooledCreditLinesOfLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallpooledcreditlinesoflender)

#### Defined in

[src/subgraph/PooledCreditLine.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/PooledCreditLine.ts#L85)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllPooledCreditLinesOfLenderWithState](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallpooledcreditlinesoflenderwithstate)

#### Defined in

[src/subgraph/PooledCreditLine.ts:694](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/PooledCreditLine.ts#L694)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllPooledCreditLinesOfLenderWithStateNotIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallpooledcreditlinesoflenderwithstatenotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:709](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/PooledCreditLine.ts#L709)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllPooledCreditLinesWithStates](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallpooledcreditlineswithstates)

#### Defined in

[src/subgraph/PooledCreditLine.ts:637](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/PooledCreditLine.ts#L637)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllPooledCreditLinesWithStatesNotIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallpooledcreditlineswithstatesnotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:650](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/PooledCreditLine.ts#L650)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getAllCreditLines](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallcreditlines)

#### Defined in

[src/subgraph/CreditLine.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/CreditLine.ts#L52)

___

### getAllLendersOfPool

▸ **getAllLendersOfPool**(): `Promise`<[`PoolLender`](../interfaces/types_Types.PoolLender.md)[]\>

**`description`** To-Do

#### Returns

`Promise`<[`PoolLender`](../interfaces/types_Types.PoolLender.md)[]\>

All the lenders of a given pool

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getAllLendersOfPool](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getalllendersofpool)

#### Defined in

[src/subgraph/Pools.ts:97](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/Pools.ts#L97)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getAllPoolCreditLinesWithStateIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallpoolcreditlineswithstatein)

#### Defined in

[src/subgraph/PooledCreditLine.ts:108](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/PooledCreditLine.ts#L108)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getAllPoolCreditLinesWithStateNotIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallpoolcreditlineswithstatenotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:129](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/PooledCreditLine.ts#L129)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getAllPooledCreditLines](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallpooledcreditlines)

#### Defined in

[src/subgraph/PooledCreditLine.ts:96](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/PooledCreditLine.ts#L96)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getAllPooledCreditLinesLenderCanLendTo](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallpooledcreditlineslendercanlendto)

#### Defined in

[src/subgraph/PooledCreditLine.ts:222](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/PooledCreditLine.ts#L222)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getAllPooledCreditLinesOfBorrower](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallpooledcreditlinesofborrower)

#### Defined in

[src/subgraph/PooledCreditLine.ts:160](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/PooledCreditLine.ts#L160)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getAllPooledCreditLinesOfBorrowerWithStateIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallpooledcreditlinesofborrowerwithstatein)

#### Defined in

[src/subgraph/PooledCreditLine.ts:175](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/PooledCreditLine.ts#L175)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallpooledcreditlinesofborrowerwithstatenotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:199](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/PooledCreditLine.ts#L199)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getAllPooledCreditLinesOfLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallpooledcreditlinesoflender)

#### Defined in

[src/subgraph/PooledCreditLine.ts:434](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/PooledCreditLine.ts#L434)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getAllPooledCreditLinesOfUser](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallpooledcreditlinesofuser)

#### Defined in

[src/subgraph/PooledCreditLine.ts:466](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/PooledCreditLine.ts#L466)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getAllPoolsByPoolType](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallpoolsbypooltype)

#### Defined in

[src/subgraph/Pools.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/Pools.ts#L39)

___

### getAllowances

▸ **getAllowances**(`address?`): `Promise`<[`Allowances`](../interfaces/types_Types.Allowances.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | `string` |

#### Returns

`Promise`<[`Allowances`](../interfaces/types_Types.Allowances.md)[]\>

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getAllowances](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallowances)

#### Defined in

[src/subgraph/SavingsAccount.ts:32](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/SavingsAccount.ts#L32)

___

### getAvaialbleBorrowLimitOfBorrowerOfCreditLines

▸ **getAvaialbleBorrowLimitOfBorrowerOfCreditLines**(`borrower`): `Promise`<[`BorrowerAvailableCredit`](../interfaces/types_Types.BorrowerAvailableCredit.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |

#### Returns

`Promise`<[`BorrowerAvailableCredit`](../interfaces/types_Types.BorrowerAvailableCredit.md)\>

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getAvaialbleBorrowLimitOfBorrowerOfCreditLines](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getavaialbleborrowlimitofborrowerofcreditlines)

#### Defined in

[src/subgraph/CreditLineOverview.ts:113](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/CreditLineOverview.ts#L113)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getBorrowerCreditLineCollective](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getborrowercreditlinecollective)

#### Defined in

[src/subgraph/CreditLineOverview.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/CreditLineOverview.ts#L60)

___

### getBorrowerInterestDueForAllCreditLines

▸ **getBorrowerInterestDueForAllCreditLines**(`borrower`): `Promise`<[`InterestDueDetails`](../interfaces/types_Types.InterestDueDetails.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |

#### Returns

`Promise`<[`InterestDueDetails`](../interfaces/types_Types.InterestDueDetails.md)\>

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getBorrowerInterestDueForAllCreditLines](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getborrowerinterestdueforallcreditlines)

#### Defined in

[src/subgraph/CreditLineInterestCalculator.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/CreditLineInterestCalculator.ts#L26)

___

### getBorrowerInterestDueForAllPooledCreditLines

▸ **getBorrowerInterestDueForAllPooledCreditLines**(`borrower`): `Promise`<[`InterestDueDetails`](../interfaces/types_Types.InterestDueDetails.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |

#### Returns

`Promise`<[`InterestDueDetails`](../interfaces/types_Types.InterestDueDetails.md)\>

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getBorrowerInterestDueForAllPooledCreditLines](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getborrowerinterestdueforallpooledcreditlines)

#### Defined in

[src/subgraph/PooledCreditLineInterestCalculator.ts:27](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/PooledCreditLineInterestCalculator.ts#L27)

___

### getBorrowerInterestDueForSpecificCreditLines

▸ **getBorrowerInterestDueForSpecificCreditLines**(`borrower`, `creditLines`): `Promise`<[`InterestDueDetails`](../interfaces/types_Types.InterestDueDetails.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |
| `creditLines` | `string`[] |

#### Returns

`Promise`<[`InterestDueDetails`](../interfaces/types_Types.InterestDueDetails.md)\>

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getBorrowerInterestDueForSpecificCreditLines](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getborrowerinterestdueforspecificcreditlines)

#### Defined in

[src/subgraph/CreditLineInterestCalculator.ts:43](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/CreditLineInterestCalculator.ts#L43)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getConfirmedCreditLinesOfBorrower](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getconfirmedcreditlinesofborrower)

#### Defined in

[src/subgraph/CreditLine.ts:174](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/CreditLine.ts#L174)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getConfirmedCreditLinesOfLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getconfirmedcreditlinesoflender)

#### Defined in

[src/subgraph/CreditLine.ts:185](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/CreditLine.ts#L185)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getCreditLine](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getcreditline)

#### Defined in

[src/subgraph/CreditLine.ts:238](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/CreditLine.ts#L238)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getCreditLineStatus](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getcreditlinestatus)

#### Defined in

[src/subgraph/PooledCreditLine.ts:347](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/PooledCreditLine.ts#L347)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getCreditLineTimeline](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getcreditlinetimeline)

#### Defined in

[src/subgraph/CreditLine.ts:302](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/CreditLine.ts#L302)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getCreditLinesOverview](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getcreditlinesoverview)

#### Defined in

[src/subgraph/CreditLine.ts:252](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/CreditLine.ts#L252)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getDashboardOverview](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getdashboardoverview)

#### Defined in

[src/subgraph/Base.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/Base.ts#L58)

___

### getInterestCollectedByLenderFromCreditLines

▸ **getInterestCollectedByLenderFromCreditLines**(`lender`): `Promise`<[`InterestCollectedByLender`](../interfaces/types_Types.InterestCollectedByLender.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |

#### Returns

`Promise`<[`InterestCollectedByLender`](../interfaces/types_Types.InterestCollectedByLender.md)\>

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getInterestCollectedByLenderFromCreditLines](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getinterestcollectedbylenderfromcreditlines)

#### Defined in

[src/subgraph/CreditLineOverview.ts:92](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/CreditLineOverview.ts#L92)

___

### getLatestActionablePooledCreditLinesOfBorrower

▸ **getLatestActionablePooledCreditLinesOfBorrower**(`borrower`): `Promise`<[`PclsToTakeAction`](../interfaces/types_Types.PclsToTakeAction.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |

#### Returns

`Promise`<[`PclsToTakeAction`](../interfaces/types_Types.PclsToTakeAction.md)[]\>

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getLatestActionablePooledCreditLinesOfBorrower](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getlatestactionablepooledcreditlinesofborrower)

#### Defined in

[src/subgraph/PooledCreditLineBorrowerOverview.ts:30](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/PooledCreditLineBorrowerOverview.ts#L30)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getLenderCreditLineCollective](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getlendercreditlinecollective)

#### Defined in

[src/subgraph/CreditLineOverview.ts:43](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/CreditLineOverview.ts#L43)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getLendersPerPool](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getlendersperpool)

#### Defined in

[src/subgraph/PooledCreditLine.ts:554](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/PooledCreditLine.ts#L554)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getPendingCreditLinesRequestedByBorrower](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpendingcreditlinesrequestedbyborrower)

#### Defined in

[src/subgraph/CreditLine.ts:207](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/CreditLine.ts#L207)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getPendingCreditLinesRequestedToBorrower](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpendingcreditlinesrequestedtoborrower)

#### Defined in

[src/subgraph/CreditLine.ts:229](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/CreditLine.ts#L229)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getPendingCreditLinesRequestedToLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpendingcreditlinesrequestedtolender)

#### Defined in

[src/subgraph/CreditLine.ts:218](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/CreditLine.ts#L218)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getPendingCreditlinesRequestedByLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpendingcreditlinesrequestedbylender)

#### Defined in

[src/subgraph/CreditLine.ts:196](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/CreditLine.ts#L196)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getPool](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpool)

#### Defined in

[src/subgraph/Pools.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/Pools.ts#L48)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getPoolByBorrower](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpoolbyborrower)

#### Defined in

[src/subgraph/Pools.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/Pools.ts#L58)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getPoolByBorrowerByType](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpoolbyborrowerbytype)

#### Defined in

[src/subgraph/Pools.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/Pools.ts#L87)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getPoolByLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpoolbylender)

#### Defined in

[src/subgraph/Pools.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/Pools.ts#L67)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getPoolByLenderByType](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpoolbylenderbytype)

#### Defined in

[src/subgraph/Pools.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/Pools.ts#L77)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getPooledCreditLineById](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpooledcreditlinebyid)

#### Defined in

[src/subgraph/PooledCreditLine.ts:148](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/PooledCreditLine.ts#L148)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getPooledCreditLineCollectiveOfBorrower](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpooledcreditlinecollectiveofborrower)

#### Defined in

[src/subgraph/PooledCreditLineBorrowerOverview.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/PooledCreditLineBorrowerOverview.ts#L25)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getPooledCreditLineCollectiveOfLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpooledcreditlinecollectiveoflender)

#### Defined in

[src/subgraph/PooledCreditLinesLenderOverview.ts:27](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/PooledCreditLinesLenderOverview.ts#L27)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getPooledCreditLineTimeline](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpooledcreditlinetimeline)

#### Defined in

[src/subgraph/PooledCreditLine.ts:481](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/PooledCreditLine.ts#L481)

___

### getPools

▸ **getPools**(): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

Array of all pools created on sublime

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getPools](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpools)

#### Defined in

[src/subgraph/Pools.ts:29](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/Pools.ts#L29)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getProfileOverview](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getprofileoverview)

#### Defined in

[src/subgraph/Pools.ts:178](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/Pools.ts#L178)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getRandomInt](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getrandomint)

#### Defined in

[src/subgraph/Base.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/Base.ts#L50)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getSavingsAccountOverview](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getsavingsaccountoverview)

#### Defined in

[src/subgraph/SavingsAccount.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/SavingsAccount.ts#L72)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getSpecificPooledCreditLineOfLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getspecificpooledcreditlineoflender)

#### Defined in

[src/subgraph/PooledCreditLine.ts:447](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/PooledCreditLine.ts#L447)

___

### getTotalAmountCommitedByLenderToCreditLines

▸ **getTotalAmountCommitedByLenderToCreditLines**(`lender`): `Promise`<[`LenderTotalCreditCommited`](../interfaces/types_Types.LenderTotalCreditCommited.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |

#### Returns

`Promise`<[`LenderTotalCreditCommited`](../interfaces/types_Types.LenderTotalCreditCommited.md)\>

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getTotalAmountCommitedByLenderToCreditLines](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#gettotalamountcommitedbylendertocreditlines)

#### Defined in

[src/subgraph/CreditLineOverview.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/CreditLineOverview.ts#L71)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getUserMetadata](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getusermetadata)

#### Defined in

[src/subgraph/UserMeta.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/UserMeta.ts#L14)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getVerifiedTwitterId](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getverifiedtwitterid)

#### Defined in

[src/subgraph/UserMeta.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/0ae442b/src/subgraph/UserMeta.ts#L53)
