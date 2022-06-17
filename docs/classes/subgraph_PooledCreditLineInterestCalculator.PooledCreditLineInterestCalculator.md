[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [subgraph/PooledCreditLineInterestCalculator](../modules/subgraph_PooledCreditLineInterestCalculator.md) / PooledCreditLineInterestCalculator

# Class: PooledCreditLineInterestCalculator

[subgraph/PooledCreditLineInterestCalculator](../modules/subgraph_PooledCreditLineInterestCalculator.md).PooledCreditLineInterestCalculator

## Hierarchy

- [`CreditLineInterestCalculator`](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md)

  ↳ **`PooledCreditLineInterestCalculator`**

  ↳↳ [`SublimeSubgraph`](subgraph.SublimeSubgraph.md)

## Table of contents

### Constructors

- [constructor](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#constructor)

### Properties

- [signer](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#signer)
- [subgraphUrl](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#subgraphurl)
- [sublimeAddresses](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#sublimeaddresses)
- [tokenManager](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#tokenmanager)
- [verificationApi](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#verificationapi)
- [yieldApi](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#yieldapi)

### Methods

- [calculateInterestForPcl](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#calculateinterestforpcl)
- [countAllCreditLines](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallcreditlines)
- [countAllCreditLinesOfBorrowerWithStateIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallcreditlinesofborrowerwithstatein)
- [countAllCreditLinesOfBorrowerWithStateIn\_requestByLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallcreditlinesofborrowerwithstatein_requestbylender)
- [countAllCreditLinesOfBorrowerWithStateNotIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallcreditlinesofborrowerwithstatenotin)
- [countAllCreditLinesOfBorrowerWithStateNotIn\_requestByLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallcreditlinesofborrowerwithstatenotin_requestbylender)
- [countAllCreditLinesOfLenderWithStateIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallcreditlinesoflenderwithstatein)
- [countAllCreditLinesOfLenderWithStateIn\_requestByLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallcreditlinesoflenderwithstatein_requestbylender)
- [countAllCreditLinesOfLenderWithStateNotIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallcreditlinesoflenderwithstatenotin)
- [countAllCreditLinesOfLenderWithStateNotIn\_requestByLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallcreditlinesoflenderwithstatenotin_requestbylender)
- [countAllLendersOfPooledCreditLine](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countalllendersofpooledcreditline)
- [countAllPooledCreditLines](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallpooledcreditlines)
- [countAllPooledCreditLinesOfBorrower](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallpooledcreditlinesofborrower)
- [countAllPooledCreditLinesOfBorrowerWithState](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallpooledcreditlinesofborrowerwithstate)
- [countAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallpooledcreditlinesofborrowerwithstatenotin)
- [countAllPooledCreditLinesOfLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallpooledcreditlinesoflender)
- [countAllPooledCreditLinesOfLenderWithState](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallpooledcreditlinesoflenderwithstate)
- [countAllPooledCreditLinesOfLenderWithStateNotIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallpooledcreditlinesoflenderwithstatenotin)
- [countAllPooledCreditLinesWithStates](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallpooledcreditlineswithstates)
- [countAllPooledCreditLinesWithStatesNotIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallpooledcreditlineswithstatesnotin)
- [getAllCreditLines](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallcreditlines)
- [getAllLendersOfPool](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getalllendersofpool)
- [getAllLendersPerPool](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getalllendersperpool)
- [getAllPoolCreditLinesWithStateIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallpoolcreditlineswithstatein)
- [getAllPoolCreditLinesWithStateNotIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallpoolcreditlineswithstatenotin)
- [getAllPooledCreditLines](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallpooledcreditlines)
- [getAllPooledCreditLinesLenderCanLendTo](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallpooledcreditlineslendercanlendto)
- [getAllPooledCreditLinesOfBorrower](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallpooledcreditlinesofborrower)
- [getAllPooledCreditLinesOfBorrowerWithStateIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallpooledcreditlinesofborrowerwithstatein)
- [getAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallpooledcreditlinesofborrowerwithstatenotin)
- [getAllPooledCreditLinesOfLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallpooledcreditlinesoflender)
- [getAllPooledCreditLinesOfUser](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallpooledcreditlinesofuser)
- [getAllPoolsByPoolType](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallpoolsbypooltype)
- [getAllowances](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallowances)
- [getAvaialbleBorrowLimitOfBorrowerOfCreditLines](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getavaialbleborrowlimitofborrowerofcreditlines)
- [getBorrowerCreditLineCollective](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getborrowercreditlinecollective)
- [getBorrowerInterestDueForAllCreditLines](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getborrowerinterestdueforallcreditlines)
- [getBorrowerInterestDueForAllPooledCreditLines](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getborrowerinterestdueforallpooledcreditlines)
- [getBorrowerInterestDueForSpecificCreditLines](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getborrowerinterestdueforspecificcreditlines)
- [getConfirmedCreditLinesOfBorrower](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getconfirmedcreditlinesofborrower)
- [getConfirmedCreditLinesOfLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getconfirmedcreditlinesoflender)
- [getCreditLine](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getcreditline)
- [getCreditLineTimeline](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getcreditlinetimeline)
- [getCreditLinesOverview](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getcreditlinesoverview)
- [getDashboardOverview](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getdashboardoverview)
- [getInterestCollectedByLenderFromCreditLines](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getinterestcollectedbylenderfromcreditlines)
- [getLatestActionablePooledCreditLinesOfBorrower](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getlatestactionablepooledcreditlinesofborrower)
- [getLenderCreditLineCollective](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getlendercreditlinecollective)
- [getLendersPerPool](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getlendersperpool)
- [getPendingCreditLinesRequestedByBorrower](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpendingcreditlinesrequestedbyborrower)
- [getPendingCreditLinesRequestedToBorrower](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpendingcreditlinesrequestedtoborrower)
- [getPendingCreditLinesRequestedToLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpendingcreditlinesrequestedtolender)
- [getPendingCreditlinesRequestedByLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpendingcreditlinesrequestedbylender)
- [getPool](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpool)
- [getPoolByBorrower](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpoolbyborrower)
- [getPoolByBorrowerByType](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpoolbyborrowerbytype)
- [getPoolByLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpoolbylender)
- [getPoolByLenderByType](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpoolbylenderbytype)
- [getPooledCreditLineById](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpooledcreditlinebyid)
- [getPooledCreditLineCollectiveOfBorrower](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpooledcreditlinecollectiveofborrower)
- [getPooledCreditLineCollectiveOfLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpooledcreditlinecollectiveoflender)
- [getPooledCreditLineTimeline](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpooledcreditlinetimeline)
- [getPools](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpools)
- [getProfileOverview](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getprofileoverview)
- [getRandomInt](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getrandomint)
- [getSavingsAccountOverview](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getsavingsaccountoverview)
- [getSpecificPooledCreditLineOfLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getspecificpooledcreditlineoflender)
- [getTokensForShares](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#gettokensforshares)
- [getTotalAmountCommitedByLenderToCreditLines](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#gettotalamountcommitedbylendertocreditlines)
- [getUserMetadata](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getusermetadata)
- [getVerifiedTwitterId](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getverifiedtwitterid)
- [refreshStrategyData](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#refreshstrategydata)
- [refreshStrategyDataForPcl](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#refreshstrategydataforpcl)
- [refreshTokenData](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#refreshtokendata)
- [transformToInterestDueDetailsForPcl](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#transformtointerestduedetailsforpcl)
- [transformToInterestDueForPcl](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#transformtointerestdueforpcl)
- [transformToInterestDuePerStrategyForPcl](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#transformtointerestdueperstrategyforpcl)
- [transformToInterestDuePerTokenPcl](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#transformtointerestduepertokenpcl)
- [transformToInterestDuePerTokenPerStrategyForPcl](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#transformtointerestduepertokenperstrategyforpcl)

## Constructors

### constructor

• **new PooledCreditLineInterestCalculator**(`url`, `signer`, `tokenManager`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `signer` | `Signer` |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |

#### Overrides

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[constructor](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#constructor)

#### Defined in

[src/subgraph/PooledCreditLineInterestCalculator.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLineInterestCalculator.ts#L23)

## Properties

### signer

• `Protected` **signer**: `Signer`

**`description`** signer used to sign

#### Inherited from

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[signer](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#signer)

#### Defined in

[src/subgraph/Base.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/Base.ts#L19)

___

### subgraphUrl

• `Protected` **subgraphUrl**: `string`

**`description`** subgraph url for fetching the sublime data

#### Inherited from

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[subgraphUrl](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#subgraphurl)

#### Defined in

[src/subgraph/Base.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/Base.ts#L14)

___

### sublimeAddresses

• `Protected` **sublimeAddresses**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

**`description`** sublime config. (Contains all addresses relevant to sublime ecosystem)

#### Inherited from

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[sublimeAddresses](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#sublimeaddresses)

#### Defined in

[src/subgraph/Base.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/Base.ts#L33)

___

### tokenManager

• `Protected` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

**`description`** instance of token manager class that caches and retreives token data

#### Inherited from

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[tokenManager](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#tokenmanager)

#### Defined in

[src/subgraph/Base.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/Base.ts#L24)

___

### verificationApi

• `Protected` **verificationApi**: [`VerificationAPI`](api_verification.VerificationAPI.md)

#### Inherited from

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[verificationApi](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#verificationapi)

#### Defined in

[src/subgraph/Base.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/Base.ts#L28)

___

### yieldApi

• `Protected` **yieldApi**: [`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md)

#### Inherited from

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[yieldApi](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#yieldapi)

#### Defined in

[src/subgraph/Base.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/Base.ts#L26)

## Methods

### calculateInterestForPcl

▸ `Private` **calculateInterestForPcl**(`principal`, `borrowRate`, `lastPrincipalUpdateTime`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `principal` | `string` |
| `borrowRate` | `string` |
| `lastPrincipalUpdateTime` | `string` |

#### Returns

`BigNumber`

#### Defined in

[src/subgraph/PooledCreditLineInterestCalculator.ts:179](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLineInterestCalculator.ts#L179)

___

### countAllCreditLines

▸ **countAllCreditLines**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[countAllCreditLines](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#countallcreditlines)

#### Defined in

[src/subgraph/CreditLine.ts:338](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/CreditLine.ts#L338)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[countAllCreditLinesOfBorrowerWithStateIn](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#countallcreditlinesofborrowerwithstatein)

#### Defined in

[src/subgraph/CreditLine.ts:343](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/CreditLine.ts#L343)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[countAllCreditLinesOfBorrowerWithStateIn_requestByLender](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#countallcreditlinesofborrowerwithstatein_requestbylender)

#### Defined in

[src/subgraph/CreditLine.ts:352](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/CreditLine.ts#L352)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[countAllCreditLinesOfBorrowerWithStateNotIn](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#countallcreditlinesofborrowerwithstatenotin)

#### Defined in

[src/subgraph/CreditLine.ts:366](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/CreditLine.ts#L366)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[countAllCreditLinesOfBorrowerWithStateNotIn_requestByLender](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#countallcreditlinesofborrowerwithstatenotin_requestbylender)

#### Defined in

[src/subgraph/CreditLine.ts:375](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/CreditLine.ts#L375)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[countAllCreditLinesOfLenderWithStateIn](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#countallcreditlinesoflenderwithstatein)

#### Defined in

[src/subgraph/CreditLine.ts:412](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/CreditLine.ts#L412)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[countAllCreditLinesOfLenderWithStateIn_requestByLender](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#countallcreditlinesoflenderwithstatein_requestbylender)

#### Defined in

[src/subgraph/CreditLine.ts:421](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/CreditLine.ts#L421)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[countAllCreditLinesOfLenderWithStateNotIn](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#countallcreditlinesoflenderwithstatenotin)

#### Defined in

[src/subgraph/CreditLine.ts:389](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/CreditLine.ts#L389)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[countAllCreditLinesOfLenderWithStateNotIn_requestByLender](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#countallcreditlinesoflenderwithstatenotin_requestbylender)

#### Defined in

[src/subgraph/CreditLine.ts:398](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/CreditLine.ts#L398)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[countAllLendersOfPooledCreditLine](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#countalllendersofpooledcreditline)

#### Defined in

[src/subgraph/PooledCreditLine.ts:878](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLine.ts#L878)

___

### countAllPooledCreditLines

▸ **countAllPooledCreditLines**(): `Promise`<`number`\>

**`description`** Count all the pooled credit lines

#### Returns

`Promise`<`number`\>

#### Inherited from

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[countAllPooledCreditLines](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#countallpooledcreditlines)

#### Defined in

[src/subgraph/PooledCreditLine.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLine.ts#L56)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[countAllPooledCreditLinesOfBorrower](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#countallpooledcreditlinesofborrower)

#### Defined in

[src/subgraph/PooledCreditLine.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLine.ts#L66)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[countAllPooledCreditLinesOfBorrowerWithState](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#countallpooledcreditlinesofborrowerwithstate)

#### Defined in

[src/subgraph/PooledCreditLine.ts:819](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLine.ts#L819)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[countAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#countallpooledcreditlinesofborrowerwithstatenotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:834](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLine.ts#L834)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[countAllPooledCreditLinesOfLender](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#countallpooledcreditlinesoflender)

#### Defined in

[src/subgraph/PooledCreditLine.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLine.ts#L76)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[countAllPooledCreditLinesOfLenderWithState](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#countallpooledcreditlinesoflenderwithstate)

#### Defined in

[src/subgraph/PooledCreditLine.ts:849](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLine.ts#L849)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[countAllPooledCreditLinesOfLenderWithStateNotIn](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#countallpooledcreditlinesoflenderwithstatenotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:864](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLine.ts#L864)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[countAllPooledCreditLinesWithStates](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#countallpooledcreditlineswithstates)

#### Defined in

[src/subgraph/PooledCreditLine.ts:792](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLine.ts#L792)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[countAllPooledCreditLinesWithStatesNotIn](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#countallpooledcreditlineswithstatesnotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:805](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLine.ts#L805)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getAllCreditLines](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getallcreditlines)

#### Defined in

[src/subgraph/CreditLine.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/CreditLine.ts#L48)

___

### getAllLendersOfPool

▸ **getAllLendersOfPool**(): `Promise`<[`PoolLender`](../interfaces/types_Types.PoolLender.md)[]\>

**`description`** To-Do

#### Returns

`Promise`<[`PoolLender`](../interfaces/types_Types.PoolLender.md)[]\>

All the lenders of a given pool

#### Inherited from

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getAllLendersOfPool](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getalllendersofpool)

#### Defined in

[src/subgraph/Pools.ts:97](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/Pools.ts#L97)

___

### getAllLendersPerPool

▸ **getAllLendersPerPool**(`pclIds`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pclIds` | `string`[] |

#### Returns

`Promise`<`any`\>

#### Inherited from

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getAllLendersPerPool](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getalllendersperpool)

#### Defined in

[src/subgraph/PooledCreditLine.ts:615](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLine.ts#L615)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getAllPoolCreditLinesWithStateIn](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getallpoolcreditlineswithstatein)

#### Defined in

[src/subgraph/PooledCreditLine.ts:134](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLine.ts#L134)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getAllPoolCreditLinesWithStateNotIn](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getallpoolcreditlineswithstatenotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:191](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLine.ts#L191)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getAllPooledCreditLines](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getallpooledcreditlines)

#### Defined in

[src/subgraph/PooledCreditLine.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLine.ts#L87)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getAllPooledCreditLinesLenderCanLendTo](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getallpooledcreditlineslendercanlendto)

#### Defined in

[src/subgraph/PooledCreditLine.ts:458](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLine.ts#L458)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getAllPooledCreditLinesOfBorrower](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getallpooledcreditlinesofborrower)

#### Defined in

[src/subgraph/PooledCreditLine.ts:292](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLine.ts#L292)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getAllPooledCreditLinesOfBorrowerWithStateIn](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getallpooledcreditlinesofborrowerwithstatein)

#### Defined in

[src/subgraph/PooledCreditLine.ts:341](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLine.ts#L341)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getallpooledcreditlinesofborrowerwithstatenotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:400](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLine.ts#L400)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getAllPooledCreditLinesOfLender](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getallpooledcreditlinesoflender)

#### Defined in

[src/subgraph/PooledCreditLine.ts:505](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLine.ts#L505)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getAllPooledCreditLinesOfUser](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getallpooledcreditlinesofuser)

#### Defined in

[src/subgraph/PooledCreditLine.ts:607](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLine.ts#L607)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getAllPoolsByPoolType](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getallpoolsbypooltype)

#### Defined in

[src/subgraph/Pools.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/Pools.ts#L39)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getAllowances](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getallowances)

#### Defined in

[src/subgraph/SavingsAccount.ts:34](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/SavingsAccount.ts#L34)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getAvaialbleBorrowLimitOfBorrowerOfCreditLines](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getavaialbleborrowlimitofborrowerofcreditlines)

#### Defined in

[src/subgraph/CreditLineOverview.ts:113](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/CreditLineOverview.ts#L113)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getBorrowerCreditLineCollective](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getborrowercreditlinecollective)

#### Defined in

[src/subgraph/CreditLineOverview.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/CreditLineOverview.ts#L60)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getBorrowerInterestDueForAllCreditLines](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getborrowerinterestdueforallcreditlines)

#### Defined in

[src/subgraph/CreditLineInterestCalculator.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/CreditLineInterestCalculator.ts#L26)

___

### getBorrowerInterestDueForAllPooledCreditLines

▸ **getBorrowerInterestDueForAllPooledCreditLines**(`borrower`): `Promise`<[`InterestDueDetails`](../interfaces/types_Types.InterestDueDetails.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |

#### Returns

`Promise`<[`InterestDueDetails`](../interfaces/types_Types.InterestDueDetails.md)\>

#### Defined in

[src/subgraph/PooledCreditLineInterestCalculator.ts:27](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLineInterestCalculator.ts#L27)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getBorrowerInterestDueForSpecificCreditLines](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getborrowerinterestdueforspecificcreditlines)

#### Defined in

[src/subgraph/CreditLineInterestCalculator.ts:43](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/CreditLineInterestCalculator.ts#L43)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getConfirmedCreditLinesOfBorrower](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getconfirmedcreditlinesofborrower)

#### Defined in

[src/subgraph/CreditLine.ts:135](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/CreditLine.ts#L135)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getConfirmedCreditLinesOfLender](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getconfirmedcreditlinesoflender)

#### Defined in

[src/subgraph/CreditLine.ts:149](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/CreditLine.ts#L149)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getCreditLine](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getcreditline)

#### Defined in

[src/subgraph/CreditLine.ts:217](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/CreditLine.ts#L217)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getCreditLineTimeline](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getcreditlinetimeline)

#### Defined in

[src/subgraph/CreditLine.ts:284](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/CreditLine.ts#L284)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getCreditLinesOverview](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getcreditlinesoverview)

#### Defined in

[src/subgraph/CreditLine.ts:234](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/CreditLine.ts#L234)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getDashboardOverview](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getdashboardoverview)

#### Defined in

[src/subgraph/Base.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/Base.ts#L58)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getInterestCollectedByLenderFromCreditLines](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getinterestcollectedbylenderfromcreditlines)

#### Defined in

[src/subgraph/CreditLineOverview.ts:92](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/CreditLineOverview.ts#L92)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getLatestActionablePooledCreditLinesOfBorrower](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getlatestactionablepooledcreditlinesofborrower)

#### Defined in

[src/subgraph/PooledCreditLineBorrowerOverview.ts:30](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLineBorrowerOverview.ts#L30)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getLenderCreditLineCollective](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getlendercreditlinecollective)

#### Defined in

[src/subgraph/CreditLineOverview.ts:43](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/CreditLineOverview.ts#L43)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getLendersPerPool](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getlendersperpool)

#### Defined in

[src/subgraph/PooledCreditLine.ts:703](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLine.ts#L703)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getPendingCreditLinesRequestedByBorrower](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getpendingcreditlinesrequestedbyborrower)

#### Defined in

[src/subgraph/CreditLine.ts:177](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/CreditLine.ts#L177)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getPendingCreditLinesRequestedToBorrower](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getpendingcreditlinesrequestedtoborrower)

#### Defined in

[src/subgraph/CreditLine.ts:205](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/CreditLine.ts#L205)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getPendingCreditLinesRequestedToLender](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getpendingcreditlinesrequestedtolender)

#### Defined in

[src/subgraph/CreditLine.ts:191](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/CreditLine.ts#L191)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getPendingCreditlinesRequestedByLender](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getpendingcreditlinesrequestedbylender)

#### Defined in

[src/subgraph/CreditLine.ts:163](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/CreditLine.ts#L163)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getPool](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getpool)

#### Defined in

[src/subgraph/Pools.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/Pools.ts#L48)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getPoolByBorrower](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getpoolbyborrower)

#### Defined in

[src/subgraph/Pools.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/Pools.ts#L58)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getPoolByBorrowerByType](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getpoolbyborrowerbytype)

#### Defined in

[src/subgraph/Pools.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/Pools.ts#L87)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getPoolByLender](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getpoolbylender)

#### Defined in

[src/subgraph/Pools.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/Pools.ts#L67)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getPoolByLenderByType](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getpoolbylenderbytype)

#### Defined in

[src/subgraph/Pools.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/Pools.ts#L77)

___

### getPooledCreditLineById

▸ **getPooledCreditLineById**(`id`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

**`description`** Returns specific PCL details

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Inherited from

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getPooledCreditLineById](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getpooledcreditlinebyid)

#### Defined in

[src/subgraph/PooledCreditLine.ts:245](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLine.ts#L245)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getPooledCreditLineCollectiveOfBorrower](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getpooledcreditlinecollectiveofborrower)

#### Defined in

[src/subgraph/PooledCreditLineBorrowerOverview.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLineBorrowerOverview.ts#L25)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getPooledCreditLineCollectiveOfLender](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getpooledcreditlinecollectiveoflender)

#### Defined in

[src/subgraph/PooledCreditLinesLenderOverview.ts:27](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLinesLenderOverview.ts#L27)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getPooledCreditLineTimeline](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getpooledcreditlinetimeline)

#### Defined in

[src/subgraph/PooledCreditLine.ts:627](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLine.ts#L627)

___

### getPools

▸ **getPools**(): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

Array of all pools created on sublime

#### Inherited from

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getPools](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getpools)

#### Defined in

[src/subgraph/Pools.ts:29](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/Pools.ts#L29)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getProfileOverview](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getprofileoverview)

#### Defined in

[src/subgraph/Pools.ts:182](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/Pools.ts#L182)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getRandomInt](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getrandomint)

#### Defined in

[src/subgraph/Base.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/Base.ts#L50)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getSavingsAccountOverview](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getsavingsaccountoverview)

#### Defined in

[src/subgraph/SavingsAccount.ts:75](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/SavingsAccount.ts#L75)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getSpecificPooledCreditLineOfLender](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getspecificpooledcreditlineoflender)

#### Defined in

[src/subgraph/PooledCreditLine.ts:553](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLine.ts#L553)

___

### getTokensForShares

▸ `Protected` **getTokensForShares**(`strategy`, `collateralAsset`, `amount`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `collateralAsset` | `string` |
| `amount` | `BigNumber` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getTokensForShares](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#gettokensforshares)

#### Defined in

[src/subgraph/Base.ts:134](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/Base.ts#L134)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getTotalAmountCommitedByLenderToCreditLines](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#gettotalamountcommitedbylendertocreditlines)

#### Defined in

[src/subgraph/CreditLineOverview.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/CreditLineOverview.ts#L71)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getUserMetadata](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getusermetadata)

#### Defined in

[src/subgraph/UserMeta.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/UserMeta.ts#L14)

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

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[getVerifiedTwitterId](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#getverifiedtwitterid)

#### Defined in

[src/subgraph/UserMeta.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/UserMeta.ts#L57)

___

### refreshStrategyData

▸ `Protected` **refreshStrategyData**(`data`): `Promise`<`Record`<`string`, `Record`<`string`, `BigNumber`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<`Record`<`string`, `Record`<`string`, `BigNumber`\>\>\>

#### Inherited from

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[refreshStrategyData](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#refreshstrategydata)

#### Defined in

[src/subgraph/Base.ts:108](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/Base.ts#L108)

___

### refreshStrategyDataForPcl

▸ `Protected` **refreshStrategyDataForPcl**(`data`): `Promise`<`Record`<`string`, `Record`<`string`, `BigNumber`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<`Record`<`string`, `Record`<`string`, `BigNumber`\>\>\>

#### Inherited from

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[refreshStrategyDataForPcl](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#refreshstrategydataforpcl)

#### Defined in

[src/subgraph/Base.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/Base.ts#L82)

___

### refreshTokenData

▸ `Protected` **refreshTokenData**(`data`): `Promise`<`Record`<`string`, `BigNumber`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<`Record`<`string`, `BigNumber`\>\>

#### Inherited from

[CreditLineInterestCalculator](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md).[refreshTokenData](subgraph_CreditLineInterestCalculator.CreditLineInterestCalculator.md#refreshtokendata)

#### Defined in

[src/subgraph/Base.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/Base.ts#L67)

___

### transformToInterestDueDetailsForPcl

▸ `Private` **transformToInterestDueDetailsForPcl**(`data`): `Promise`<[`InterestDueDetails`](../interfaces/types_Types.InterestDueDetails.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<[`InterestDueDetails`](../interfaces/types_Types.InterestDueDetails.md)\>

#### Defined in

[src/subgraph/PooledCreditLineInterestCalculator.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLineInterestCalculator.ts#L50)

___

### transformToInterestDueForPcl

▸ `Private` **transformToInterestDueForPcl**(`interestDuePerTokenPerStrategy`, `prices`): `Promise`<[`InterestDue`](../interfaces/types_Types.InterestDue.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `interestDuePerTokenPerStrategy` | [`InterestDuePerTokenPerStrategy`](../interfaces/types_Types.InterestDuePerTokenPerStrategy.md)[] |
| `prices` | `Record`<`string`, `BigNumber`\> |

#### Returns

`Promise`<[`InterestDue`](../interfaces/types_Types.InterestDue.md)\>

#### Defined in

[src/subgraph/PooledCreditLineInterestCalculator.ts:134](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLineInterestCalculator.ts#L134)

___

### transformToInterestDuePerStrategyForPcl

▸ `Private` **transformToInterestDuePerStrategyForPcl**(`interestDuePerTokenPerStrategy`, `prices`): `Promise`<[`InterestDuePerStrategy`](../interfaces/types_Types.InterestDuePerStrategy.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `interestDuePerTokenPerStrategy` | [`InterestDuePerTokenPerStrategy`](../interfaces/types_Types.InterestDuePerTokenPerStrategy.md)[] |
| `prices` | `Record`<`string`, `BigNumber`\> |

#### Returns

`Promise`<[`InterestDuePerStrategy`](../interfaces/types_Types.InterestDuePerStrategy.md)[]\>

#### Defined in

[src/subgraph/PooledCreditLineInterestCalculator.ts:78](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLineInterestCalculator.ts#L78)

___

### transformToInterestDuePerTokenPcl

▸ `Private` **transformToInterestDuePerTokenPcl**(`interestDuePerTokenPerStrategy`): `Promise`<[`InterestDuePerToken`](../interfaces/types_Types.InterestDuePerToken.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `interestDuePerTokenPerStrategy` | [`InterestDuePerTokenPerStrategy`](../interfaces/types_Types.InterestDuePerTokenPerStrategy.md)[] |

#### Returns

`Promise`<[`InterestDuePerToken`](../interfaces/types_Types.InterestDuePerToken.md)[]\>

#### Defined in

[src/subgraph/PooledCreditLineInterestCalculator.ts:110](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLineInterestCalculator.ts#L110)

___

### transformToInterestDuePerTokenPerStrategyForPcl

▸ `Private` **transformToInterestDuePerTokenPerStrategyForPcl**(`data`, `prices`): `Promise`<[`InterestDuePerTokenPerStrategy`](../interfaces/types_Types.InterestDuePerTokenPerStrategy.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |
| `prices` | `Record`<`string`, `BigNumber`\> |

#### Returns

`Promise`<[`InterestDuePerTokenPerStrategy`](../interfaces/types_Types.InterestDuePerTokenPerStrategy.md)[]\>

#### Defined in

[src/subgraph/PooledCreditLineInterestCalculator.ts:151](https://github.com/sublime-finance/sublime-sdk/blob/de25f81/src/subgraph/PooledCreditLineInterestCalculator.ts#L151)
