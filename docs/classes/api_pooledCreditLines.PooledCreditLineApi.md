[sublime-sdk](../README.md) / [Modules](../modules.md) / [api/pooledCreditLines](../modules/api_pooledCreditLines.md) / PooledCreditLineApi

# Class: PooledCreditLineApi

[api/pooledCreditLines](../modules/api_pooledCreditLines.md).PooledCreditLineApi

## Table of contents

### Constructors

- [constructor](api_pooledCreditLines.PooledCreditLineApi.md#constructor)

### Properties

- [config](api_pooledCreditLines.PooledCreditLineApi.md#config)
- [lenderPool](api_pooledCreditLines.PooledCreditLineApi.md#lenderpool)
- [pooledCreditLine](api_pooledCreditLines.PooledCreditLineApi.md#pooledcreditline)
- [signer](api_pooledCreditLines.PooledCreditLineApi.md#signer)
- [tokenManager](api_pooledCreditLines.PooledCreditLineApi.md#tokenmanager)

### Methods

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

[src/api/pooledCreditLines.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/6248d1e/src/api/pooledCreditLines.ts#L33)

## Properties

### config

• `Private` **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

#### Defined in

[src/api/pooledCreditLines.ts:30](https://github.com/sublime-finance/sublime-sdk/blob/6248d1e/src/api/pooledCreditLines.ts#L30)

___

### lenderPool

• `Private` **lenderPool**: `LenderPool`

#### Defined in

[src/api/pooledCreditLines.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/6248d1e/src/api/pooledCreditLines.ts#L26)

___

### pooledCreditLine

• `Private` **pooledCreditLine**: `PooledCreditLine`

#### Defined in

[src/api/pooledCreditLines.ts:27](https://github.com/sublime-finance/sublime-sdk/blob/6248d1e/src/api/pooledCreditLines.ts#L27)

___

### signer

• `Private` **signer**: `Signer`

#### Defined in

[src/api/pooledCreditLines.ts:31](https://github.com/sublime-finance/sublime-sdk/blob/6248d1e/src/api/pooledCreditLines.ts#L31)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

#### Defined in

[src/api/pooledCreditLines.ts:29](https://github.com/sublime-finance/sublime-sdk/blob/6248d1e/src/api/pooledCreditLines.ts#L29)

## Methods

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

[src/api/pooledCreditLines.ts:395](https://github.com/sublime-finance/sublime-sdk/blob/6248d1e/src/api/pooledCreditLines.ts#L395)

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

[src/api/pooledCreditLines.ts:229](https://github.com/sublime-finance/sublime-sdk/blob/6248d1e/src/api/pooledCreditLines.ts#L229)

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

[src/api/pooledCreditLines.ts:484](https://github.com/sublime-finance/sublime-sdk/blob/6248d1e/src/api/pooledCreditLines.ts#L484)

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

[src/api/pooledCreditLines.ts:215](https://github.com/sublime-finance/sublime-sdk/blob/6248d1e/src/api/pooledCreditLines.ts#L215)

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

[src/api/pooledCreditLines.ts:201](https://github.com/sublime-finance/sublime-sdk/blob/6248d1e/src/api/pooledCreditLines.ts#L201)

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

[src/api/pooledCreditLines.ts:579](https://github.com/sublime-finance/sublime-sdk/blob/6248d1e/src/api/pooledCreditLines.ts#L579)

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

[src/api/pooledCreditLines.ts:545](https://github.com/sublime-finance/sublime-sdk/blob/6248d1e/src/api/pooledCreditLines.ts#L545)

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

[src/api/pooledCreditLines.ts:79](https://github.com/sublime-finance/sublime-sdk/blob/6248d1e/src/api/pooledCreditLines.ts#L79)

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

[src/api/pooledCreditLines.ts:494](https://github.com/sublime-finance/sublime-sdk/blob/6248d1e/src/api/pooledCreditLines.ts#L494)

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

[src/api/pooledCreditLines.ts:444](https://github.com/sublime-finance/sublime-sdk/blob/6248d1e/src/api/pooledCreditLines.ts#L444)

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

[src/api/pooledCreditLines.ts:434](https://github.com/sublime-finance/sublime-sdk/blob/6248d1e/src/api/pooledCreditLines.ts#L434)

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

[src/api/pooledCreditLines.ts:365](https://github.com/sublime-finance/sublime-sdk/blob/6248d1e/src/api/pooledCreditLines.ts#L365)

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

[src/api/pooledCreditLines.ts:149](https://github.com/sublime-finance/sublime-sdk/blob/6248d1e/src/api/pooledCreditLines.ts#L149)

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

[src/api/pooledCreditLines.ts:134](https://github.com/sublime-finance/sublime-sdk/blob/6248d1e/src/api/pooledCreditLines.ts#L134)

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

[src/api/pooledCreditLines.ts:59](https://github.com/sublime-finance/sublime-sdk/blob/6248d1e/src/api/pooledCreditLines.ts#L59)

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

[src/api/pooledCreditLines.ts:125](https://github.com/sublime-finance/sublime-sdk/blob/6248d1e/src/api/pooledCreditLines.ts#L125)

___

### repay

▸ **repay**(`_id`, `_amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Repay

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `string` | ' |
| `_amount` | `string` |  |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |  |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:415](https://github.com/sublime-finance/sublime-sdk/blob/6248d1e/src/api/pooledCreditLines.ts#L415)

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

[src/api/pooledCreditLines.ts:238](https://github.com/sublime-finance/sublime-sdk/blob/6248d1e/src/api/pooledCreditLines.ts#L238)

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

[src/api/pooledCreditLines.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/6248d1e/src/api/pooledCreditLines.ts#L48)

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

[src/api/pooledCreditLines.ts:541](https://github.com/sublime-finance/sublime-sdk/blob/6248d1e/src/api/pooledCreditLines.ts#L541)

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

[src/api/pooledCreditLines.ts:510](https://github.com/sublime-finance/sublime-sdk/blob/6248d1e/src/api/pooledCreditLines.ts#L510)

___

### withdrawInterest

▸ **withdrawInterest**(`_id`, `lender?`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Withdraw Interest

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `lender?` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:110](https://github.com/sublime-finance/sublime-sdk/blob/6248d1e/src/api/pooledCreditLines.ts#L110)

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

[src/api/pooledCreditLines.ts:99](https://github.com/sublime-finance/sublime-sdk/blob/6248d1e/src/api/pooledCreditLines.ts#L99)

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

[src/api/pooledCreditLines.ts:455](https://github.com/sublime-finance/sublime-sdk/blob/6248d1e/src/api/pooledCreditLines.ts#L455)
