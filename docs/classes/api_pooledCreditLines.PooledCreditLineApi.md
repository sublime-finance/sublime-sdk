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

[src/api/pooledCreditLines.ts:30](https://github.com/sublime-finance/sublime-sdk/blob/de4281c/src/api/pooledCreditLines.ts#L30)

## Properties

### config

• `Private` **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

#### Defined in

[src/api/pooledCreditLines.ts:27](https://github.com/sublime-finance/sublime-sdk/blob/de4281c/src/api/pooledCreditLines.ts#L27)

___

### lenderPool

• `Private` **lenderPool**: `LenderPool`

#### Defined in

[src/api/pooledCreditLines.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/de4281c/src/api/pooledCreditLines.ts#L23)

___

### pooledCreditLine

• `Private` **pooledCreditLine**: `PooledCreditLine`

#### Defined in

[src/api/pooledCreditLines.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/de4281c/src/api/pooledCreditLines.ts#L24)

___

### signer

• `Private` **signer**: `Signer`

#### Defined in

[src/api/pooledCreditLines.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/de4281c/src/api/pooledCreditLines.ts#L28)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

#### Defined in

[src/api/pooledCreditLines.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/de4281c/src/api/pooledCreditLines.ts#L26)

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

[src/api/pooledCreditLines.ts:356](https://github.com/sublime-finance/sublime-sdk/blob/de4281c/src/api/pooledCreditLines.ts#L356)

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

[src/api/pooledCreditLines.ts:190](https://github.com/sublime-finance/sublime-sdk/blob/de4281c/src/api/pooledCreditLines.ts#L190)

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

[src/api/pooledCreditLines.ts:445](https://github.com/sublime-finance/sublime-sdk/blob/de4281c/src/api/pooledCreditLines.ts#L445)

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

[src/api/pooledCreditLines.ts:176](https://github.com/sublime-finance/sublime-sdk/blob/de4281c/src/api/pooledCreditLines.ts#L176)

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

[src/api/pooledCreditLines.ts:162](https://github.com/sublime-finance/sublime-sdk/blob/de4281c/src/api/pooledCreditLines.ts#L162)

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

[src/api/pooledCreditLines.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/de4281c/src/api/pooledCreditLines.ts#L66)

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

[src/api/pooledCreditLines.ts:455](https://github.com/sublime-finance/sublime-sdk/blob/de4281c/src/api/pooledCreditLines.ts#L455)

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

[src/api/pooledCreditLines.ts:405](https://github.com/sublime-finance/sublime-sdk/blob/de4281c/src/api/pooledCreditLines.ts#L405)

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

[src/api/pooledCreditLines.ts:395](https://github.com/sublime-finance/sublime-sdk/blob/de4281c/src/api/pooledCreditLines.ts#L395)

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

[src/api/pooledCreditLines.ts:326](https://github.com/sublime-finance/sublime-sdk/blob/de4281c/src/api/pooledCreditLines.ts#L326)

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

[src/api/pooledCreditLines.ts:136](https://github.com/sublime-finance/sublime-sdk/blob/de4281c/src/api/pooledCreditLines.ts#L136)

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

[src/api/pooledCreditLines.ts:121](https://github.com/sublime-finance/sublime-sdk/blob/de4281c/src/api/pooledCreditLines.ts#L121)

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

[src/api/pooledCreditLines.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/de4281c/src/api/pooledCreditLines.ts#L46)

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

[src/api/pooledCreditLines.ts:112](https://github.com/sublime-finance/sublime-sdk/blob/de4281c/src/api/pooledCreditLines.ts#L112)

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

[src/api/pooledCreditLines.ts:376](https://github.com/sublime-finance/sublime-sdk/blob/de4281c/src/api/pooledCreditLines.ts#L376)

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

[src/api/pooledCreditLines.ts:199](https://github.com/sublime-finance/sublime-sdk/blob/de4281c/src/api/pooledCreditLines.ts#L199)

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

[src/api/pooledCreditLines.ts:502](https://github.com/sublime-finance/sublime-sdk/blob/de4281c/src/api/pooledCreditLines.ts#L502)

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

[src/api/pooledCreditLines.ts:471](https://github.com/sublime-finance/sublime-sdk/blob/de4281c/src/api/pooledCreditLines.ts#L471)

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

[src/api/pooledCreditLines.ts:97](https://github.com/sublime-finance/sublime-sdk/blob/de4281c/src/api/pooledCreditLines.ts#L97)

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

[src/api/pooledCreditLines.ts:86](https://github.com/sublime-finance/sublime-sdk/blob/de4281c/src/api/pooledCreditLines.ts#L86)

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

[src/api/pooledCreditLines.ts:416](https://github.com/sublime-finance/sublime-sdk/blob/de4281c/src/api/pooledCreditLines.ts#L416)
