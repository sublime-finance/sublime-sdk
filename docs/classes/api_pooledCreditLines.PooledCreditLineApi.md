[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [api/pooledCreditLines](../modules/api_pooledCreditLines.md) / PooledCreditLineApi

# Class: PooledCreditLineApi

[api/pooledCreditLines](../modules/api_pooledCreditLines.md).PooledCreditLineApi

## Table of contents

### Constructors

- [constructor](api_pooledCreditLines.PooledCreditLineApi.md#constructor)

### Properties

- [lenderPool](api_pooledCreditLines.PooledCreditLineApi.md#lenderpool)
- [pooledCreditLine](api_pooledCreditLines.PooledCreditLineApi.md#pooledcreditline)
- [signer](api_pooledCreditLines.PooledCreditLineApi.md#signer)
- [tokenManager](api_pooledCreditLines.PooledCreditLineApi.md#tokenmanager)
- [verifiactionApi](api_pooledCreditLines.PooledCreditLineApi.md#verifiactionapi)
- [yieldApi](api_pooledCreditLines.PooledCreditLineApi.md#yieldapi)

### Methods

- [\_getCreditLineStatus](api_pooledCreditLines.PooledCreditLineApi.md#_getcreditlinestatus)
- [borrow](api_pooledCreditLines.PooledCreditLineApi.md#borrow)
- [calculateBorrowableAmount](api_pooledCreditLines.PooledCreditLineApi.md#calculateborrowableamount)
- [calculateCurrentCollateralRatio](api_pooledCreditLines.PooledCreditLineApi.md#calculatecurrentcollateralratio)
- [calculateCurrentDebt](api_pooledCreditLines.PooledCreditLineApi.md#calculatecurrentdebt)
- [calculateInterestAccured](api_pooledCreditLines.PooledCreditLineApi.md#calculateinterestaccured)
- [calculateLenderInterest](api_pooledCreditLines.PooledCreditLineApi.md#calculatelenderinterest)
- [calculateLenderWithdrawableAmount](api_pooledCreditLines.PooledCreditLineApi.md#calculatelenderwithdrawableamount)
- [calculatePrincipleWithdrawable](api_pooledCreditLines.PooledCreditLineApi.md#calculateprinciplewithdrawable)
- [calculateTokenCollateralTokens](api_pooledCreditLines.PooledCreditLineApi.md#calculatetokencollateraltokens)
- [cancel](api_pooledCreditLines.PooledCreditLineApi.md#cancel)
- [close](api_pooledCreditLines.PooledCreditLineApi.md#close)
- [depositCollateral](api_pooledCreditLines.PooledCreditLineApi.md#depositcollateral)
- [getCreditLineStatus](api_pooledCreditLines.PooledCreditLineApi.md#getcreditlinestatus)
- [getLenderInterest](api_pooledCreditLines.PooledCreditLineApi.md#getlenderinterest)
- [getPrinciple](api_pooledCreditLines.PooledCreditLineApi.md#getprinciple)
- [lend](api_pooledCreditLines.PooledCreditLineApi.md#lend)
- [liquidate](api_pooledCreditLines.PooledCreditLineApi.md#liquidate)
- [repay](api_pooledCreditLines.PooledCreditLineApi.md#repay)
- [request](api_pooledCreditLines.PooledCreditLineApi.md#request)
- [start](api_pooledCreditLines.PooledCreditLineApi.md#start)
- [withdrawAllCollateral](api_pooledCreditLines.PooledCreditLineApi.md#withdrawallcollateral)
- [withdrawCollateral](api_pooledCreditLines.PooledCreditLineApi.md#withdrawcollateral)
- [withdrawInterest](api_pooledCreditLines.PooledCreditLineApi.md#withdrawinterest)
- [withdrawLiquidity](api_pooledCreditLines.PooledCreditLineApi.md#withdrawliquidity)
- [withdrawPartialCollateral](api_pooledCreditLines.PooledCreditLineApi.md#withdrawpartialcollateral)

## Constructors

### constructor

• **new PooledCreditLineApi**(`signer`, `config`, `tokenManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |

#### Defined in

[src/api/pooledCreditLines.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L44)

## Properties

### lenderPool

• `Private` **lenderPool**: `LenderPool`

**`description`** Instance of lender pool contract

#### Defined in

[src/api/pooledCreditLines.ts:29](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L29)

___

### pooledCreditLine

• `Private` **pooledCreditLine**: `PooledCreditLine`

**`description`** Instance of pooled credit line contract

#### Defined in

[src/api/pooledCreditLines.ts:34](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L34)

___

### signer

• `Private` **signer**: `Signer`

#### Defined in

[src/api/pooledCreditLines.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L40)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

**`description`** Instance to fetch and update token metadata

#### Defined in

[src/api/pooledCreditLines.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L39)

___

### verifiactionApi

• `Private` **verifiactionApi**: [`VerificationAPI`](api_verification.VerificationAPI.md)

#### Defined in

[src/api/pooledCreditLines.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L42)

___

### yieldApi

• `Private` **yieldApi**: [`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md)

#### Defined in

[src/api/pooledCreditLines.ts:41](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L41)

## Methods

### \_getCreditLineStatus

▸ **_getCreditLineStatus**(`_id`): `Promise`<[`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |

#### Returns

`Promise`<[`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)\>

#### Defined in

[src/api/pooledCreditLines.ts:163](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L163)

___

### borrow

▸ **borrow**(`_id`, `_amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Borrow

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `_amount` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:430](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L430)

___

### calculateBorrowableAmount

▸ **calculateBorrowableAmount**(`_id`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** calculate borrowable amount

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

#### Defined in

[src/api/pooledCreditLines.ts:275](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L275)

___

### calculateCurrentCollateralRatio

▸ **calculateCurrentCollateralRatio**(`_id`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** calculate current collateral ratio

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

#### Defined in

[src/api/pooledCreditLines.ts:519](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L519)

___

### calculateCurrentDebt

▸ **calculateCurrentDebt**(`_id`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** calculate current debt

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

#### Defined in

[src/api/pooledCreditLines.ts:261](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L261)

___

### calculateInterestAccured

▸ **calculateInterestAccured**(`_id`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** Calculate interest accured

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

#### Defined in

[src/api/pooledCreditLines.ts:247](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L247)

___

### calculateLenderInterest

▸ `Private` **calculateLenderInterest**(`_id`, `borrowLimit`, `principal`, `strategy`, `borrowAsset`, `sharesHeld`, `borrowerInterestShares`, `lenderBalance`, `lendersBorrowerInterestSharesWithdrawn`, `borrowerInterestSharesWithdrawn`, `yieldInterestWithdrawnShares`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `borrowLimit` | `BigNumberish` |
| `principal` | `BigNumberish` |
| `strategy` | `string` |
| `borrowAsset` | `string` |
| `sharesHeld` | `BigNumberish` |
| `borrowerInterestShares` | `BigNumberish` |
| `lenderBalance` | `BigNumberish` |
| `lendersBorrowerInterestSharesWithdrawn` | `BigNumberish` |
| `borrowerInterestSharesWithdrawn` | `BigNumberish` |
| `yieldInterestWithdrawnShares` | `BigNumberish` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/api/pooledCreditLines.ts:614](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L614)

___

### calculateLenderWithdrawableAmount

▸ **calculateLenderWithdrawableAmount**(`_id`, `lender?`): `Promise`<[`LenderWithdrawableAmount`](../interfaces/types_Types.LenderWithdrawableAmount.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `lender?` | `string` |

#### Returns

`Promise`<[`LenderWithdrawableAmount`](../interfaces/types_Types.LenderWithdrawableAmount.md)\>

#### Defined in

[src/api/pooledCreditLines.ts:580](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L580)

___

### calculatePrincipleWithdrawable

▸ **calculatePrincipleWithdrawable**(`_id`, `lender?`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** Calculate the principle withdrawable

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `lender?` | `string` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

#### Defined in

[src/api/pooledCreditLines.ts:91](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L91)

___

### calculateTokenCollateralTokens

▸ **calculateTokenCollateralTokens**(`_id`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** Calculate Total Collateral tokens

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

#### Defined in

[src/api/pooledCreditLines.ts:529](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L529)

___

### cancel

▸ **cancel**(`_id`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Cancels the credit lines

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `string` | ID of the pooled credit line |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |  |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:479](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L479)

___

### close

▸ **close**(`_id`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Close credit lines

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:469](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L469)

___

### depositCollateral

▸ **depositCollateral**(`_id`, `_amount`, `_fromSavingsAccount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Deposit Collateral

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `_amount` | `string` |
| `_fromSavingsAccount` | `boolean` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:400](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L400)

___

### getCreditLineStatus

▸ **getCreditLineStatus**(`_id`): `Promise`<[`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)\>

**`description`** Credit line status

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |

#### Returns

`Promise`<[`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)\>

#### Defined in

[src/api/pooledCreditLines.ts:238](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L238)

___

### getLenderInterest

▸ **getLenderInterest**(`_id`, `lenderAddress`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** to-do

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `lenderAddress` | `string` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

#### Defined in

[src/api/pooledCreditLines.ts:141](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L141)

___

### getPrinciple

▸ **getPrinciple**(`_id`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** get principle

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

Balance

#### Defined in

[src/api/pooledCreditLines.ts:153](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L153)

___

### lend

▸ **lend**(`_id`, `_amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Function to lend token to credit lines

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `_amount` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L71)

___

### liquidate

▸ **liquidate**(`_id`, `withdraw`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Liquidate credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `withdraw` | `boolean` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:132](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L132)

___

### repay

▸ **repay**(`_id`, `_amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Repay

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `_amount` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:450](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L450)

___

### request

▸ **request**(`colRatio`, `durationInSeconds`, `lenderVerifier`, `defaultGracePeriodInSeconds`, `gracePenaltyRate`, `collectionPeriod`, `minBorrowAmount`, `_borrowLimit`, `_borrowRate`, `collateralAsset`, `borrowAssetStrategy`, `collateralAssetStrategy`, `borrowAsset`, `borrowerVerifier`, `areTokensTransferable`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `colRatio` | `string` |
| `durationInSeconds` | `string` |
| `lenderVerifier` | [`VerifierType`](../enums/types_Types.VerifierType.md) |
| `defaultGracePeriodInSeconds` | `string` |
| `gracePenaltyRate` | `string` |
| `collectionPeriod` | `string` |
| `minBorrowAmount` | `string` |
| `_borrowLimit` | `string` |
| `_borrowRate` | `string` |
| `collateralAsset` | `string` |
| `borrowAssetStrategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `collateralAssetStrategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `borrowAsset` | `string` |
| `borrowerVerifier` | [`VerifierType`](../enums/types_Types.VerifierType.md) |
| `areTokensTransferable` | `boolean` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:304](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L304)

___

### start

▸ **start**(`_id`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Start a pooled credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L60)

___

### withdrawAllCollateral

▸ **withdrawAllCollateral**(`_id`, `toSavingsAccount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Withdraw All Collateral

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `toSavingsAccount` | `boolean` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:576](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L576)

___

### withdrawCollateral

▸ **withdrawCollateral**(`_id`, `_amount`, `toSavingsAccount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Withdraw Collateral

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `_amount` | `string` |
| `toSavingsAccount` | `boolean` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:545](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L545)

___

### withdrawInterest

▸ **withdrawInterest**(`_id`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Withdraw Interest

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:121](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L121)

___

### withdrawLiquidity

▸ **withdrawLiquidity**(`_id`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Withdraw Liquidity

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:111](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L111)

___

### withdrawPartialCollateral

▸ **withdrawPartialCollateral**(`_id`, `_amount`, `toSavingsAccount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** function withdraw partial collateral

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `_amount` | `string` |
| `toSavingsAccount` | `boolean` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:490](https://github.com/sublime-finance/sublime-sdk/blob/7ca54a6/src/api/pooledCreditLines.ts#L490)
