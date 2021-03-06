[sublime-sdk](../README.md) / [Modules](../modules.md) / [api/creditLines](../modules/api_creditLines.md) / CreditLineApi

# Class: CreditLineApi

[api/creditLines](../modules/api_creditLines.md).CreditLineApi

## Table of contents

### Constructors

- [constructor](api_creditLines.CreditLineApi.md#constructor)

### Properties

- [config](api_creditLines.CreditLineApi.md#config)
- [creditLineContract](api_creditLines.CreditLineApi.md#creditlinecontract)
- [signer](api_creditLines.CreditLineApi.md#signer)
- [tokenManager](api_creditLines.CreditLineApi.md#tokenmanager)

### Methods

- [CreditLineEthUtils](api_creditLines.CreditLineApi.md#creditlineethutils)
- [acceptCreditLine](api_creditLines.CreditLineApi.md#acceptcreditline)
- [borrowFromCreditLine](api_creditLines.CreditLineApi.md#borrowfromcreditline)
- [calculateBorrowableAmount](api_creditLines.CreditLineApi.md#calculateborrowableamount)
- [calculateCurrentCollateralRatio](api_creditLines.CreditLineApi.md#calculatecurrentcollateralratio)
- [calculateCurrentDebt](api_creditLines.CreditLineApi.md#calculatecurrentdebt)
- [calculateInterestAccrued](api_creditLines.CreditLineApi.md#calculateinterestaccrued)
- [calculateTotalCollateralTokens](api_creditLines.CreditLineApi.md#calculatetotalcollateraltokens)
- [cancelCreditLine](api_creditLines.CreditLineApi.md#cancelcreditline)
- [closeCreditLine](api_creditLines.CreditLineApi.md#closecreditline)
- [depositCollateral](api_creditLines.CreditLineApi.md#depositcollateral)
- [liquidateCreditLine](api_creditLines.CreditLineApi.md#liquidatecreditline)
- [repayCreditLine](api_creditLines.CreditLineApi.md#repaycreditline)
- [requestCreditLineToBorrower](api_creditLines.CreditLineApi.md#requestcreditlinetoborrower)
- [requestCreditLineToLender](api_creditLines.CreditLineApi.md#requestcreditlinetolender)
- [withdrawAllCollateralFromCreditLine](api_creditLines.CreditLineApi.md#withdrawallcollateralfromcreditline)
- [withdrawCollateralFromCreditLine](api_creditLines.CreditLineApi.md#withdrawcollateralfromcreditline)
- [withdrawableCollateral](api_creditLines.CreditLineApi.md#withdrawablecollateral)

## Constructors

### constructor

??? **new CreditLineApi**(`signer`, `config`, `tokenManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |

#### Defined in

[src/api/creditLines.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/830e71c/src/api/creditLines.ts#L24)

## Properties

### config

??? `Private` **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

#### Defined in

[src/api/creditLines.ts:21](https://github.com/sublime-finance/sublime-sdk/blob/830e71c/src/api/creditLines.ts#L21)

___

### creditLineContract

??? `Private` **creditLineContract**: `CreditLine`

#### Defined in

[src/api/creditLines.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/830e71c/src/api/creditLines.ts#L19)

___

### signer

??? `Private` **signer**: `Signer`

#### Defined in

[src/api/creditLines.ts:22](https://github.com/sublime-finance/sublime-sdk/blob/830e71c/src/api/creditLines.ts#L22)

___

### tokenManager

??? `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

#### Defined in

[src/api/creditLines.ts:20](https://github.com/sublime-finance/sublime-sdk/blob/830e71c/src/api/creditLines.ts#L20)

## Methods

### CreditLineEthUtils

??? **CreditLineEthUtils**(): [`CreditLineEthUtils`](api_utils_creditLineEthUtils.CreditLineEthUtils.md)

**`description`** The returned object helps interact with polls that have ETH as collateral or borrow token

#### Returns

[`CreditLineEthUtils`](api_utils_creditLineEthUtils.CreditLineEthUtils.md)

Instance of Credit line Eth Utils.

#### Defined in

[src/api/creditLines.ts:35](https://github.com/sublime-finance/sublime-sdk/blob/830e71c/src/api/creditLines.ts#L35)

___

### acceptCreditLine

??? **acceptCreditLine**(`creditLine`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Accpeting a credit line.

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLine` | `BigNumberish` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/creditLines.ts:135](https://github.com/sublime-finance/sublime-sdk/blob/830e71c/src/api/creditLines.ts#L135)

___

### borrowFromCreditLine

??? **borrowFromCreditLine**(`creditLineNumber`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Borrow tokens from credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |
| `amount` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/creditLines.ts:319](https://github.com/sublime-finance/sublime-sdk/blob/830e71c/src/api/creditLines.ts#L319)

___

### calculateBorrowableAmount

??? **calculateBorrowableAmount**(`creditLineNumber`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** Calculate the total amount that can be borrowed from the credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

borrowable amount in borrow tokens (easy readable)

#### Defined in

[src/api/creditLines.ts:177](https://github.com/sublime-finance/sublime-sdk/blob/830e71c/src/api/creditLines.ts#L177)

___

### calculateCurrentCollateralRatio

??? **calculateCurrentCollateralRatio**(`creditLineNumber`): `Promise`<`string`\>

**`description`** Calcualte the current collateral ratio of a credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |

#### Returns

`Promise`<`string`\>

collateral ratio (easy readable)

#### Defined in

[src/api/creditLines.ts:203](https://github.com/sublime-finance/sublime-sdk/blob/830e71c/src/api/creditLines.ts#L203)

___

### calculateCurrentDebt

??? **calculateCurrentDebt**(`creditLineNumber`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** Calcualte the total debt for a credit line till now

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

debt in borrow tokens

#### Defined in

[src/api/creditLines.ts:161](https://github.com/sublime-finance/sublime-sdk/blob/830e71c/src/api/creditLines.ts#L161)

___

### calculateInterestAccrued

??? **calculateInterestAccrued**(`creditLineNumber`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** Calculated the total accrued till now for a credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

debt in borrow tokens (easy readable)

#### Defined in

[src/api/creditLines.ts:144](https://github.com/sublime-finance/sublime-sdk/blob/830e71c/src/api/creditLines.ts#L144)

___

### calculateTotalCollateralTokens

??? **calculateTotalCollateralTokens**(`creditLineNumber`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** Calculate the total collateral tokens held against a credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

collateral tokens number (easy readable)

#### Defined in

[src/api/creditLines.ts:213](https://github.com/sublime-finance/sublime-sdk/blob/830e71c/src/api/creditLines.ts#L213)

___

### cancelCreditLine

??? **cancelCreditLine**(`id`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Cancel a credit line

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the credit line |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |  |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/creditLines.ts:194](https://github.com/sublime-finance/sublime-sdk/blob/830e71c/src/api/creditLines.ts#L194)

___

### closeCreditLine

??? **closeCreditLine**(`creditLineNumber`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Close a credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/creditLines.ts:360](https://github.com/sublime-finance/sublime-sdk/blob/830e71c/src/api/creditLines.ts#L360)

___

### depositCollateral

??? **depositCollateral**(`creditLineNumber`, `amount`, `fromSavingsAccount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Deposit Collateral to a credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |
| `amount` | `string` |
| `fromSavingsAccount` | `boolean` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/creditLines.ts:290](https://github.com/sublime-finance/sublime-sdk/blob/830e71c/src/api/creditLines.ts#L290)

___

### liquidateCreditLine

??? **liquidateCreditLine**(`creditLineNumber`, `toSavingsAccount?`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Liquidate a credit line

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `creditLineNumber` | `BigNumberish` | `undefined` |
| `toSavingsAccount` | `boolean` | `false` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | `undefined` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/creditLines.ts:370](https://github.com/sublime-finance/sublime-sdk/blob/830e71c/src/api/creditLines.ts#L370)

___

### repayCreditLine

??? **repayCreditLine**(`creditLineNumber`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Repay the amount to credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |
| `amount` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/creditLines.ts:340](https://github.com/sublime-finance/sublime-sdk/blob/830e71c/src/api/creditLines.ts#L340)

___

### requestCreditLineToBorrower

??? **requestCreditLineToBorrower**(`request`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Requests a new credit line to borrower

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`CreditLineRequest`](../interfaces/types_Types.CreditLineRequest.md) |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

contract transaction

#### Defined in

[src/api/creditLines.ts:90](https://github.com/sublime-finance/sublime-sdk/blob/830e71c/src/api/creditLines.ts#L90)

___

### requestCreditLineToLender

??? **requestCreditLineToLender**(`request`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Requests a new credit line to lender

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | [`CreditLineRequest`](../interfaces/types_Types.CreditLineRequest.md) | details of the credit line to request |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | transaction options |

#### Returns

`Promise`<`ContractTransaction`\>

contract transaction

#### Defined in

[src/api/creditLines.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/830e71c/src/api/creditLines.ts#L45)

___

### withdrawAllCollateralFromCreditLine

??? **withdrawAllCollateralFromCreditLine**(`creditLineNumber`, `toSavingsAccount?`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Withdraws all possible collateral from the credit line

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `creditLineNumber` | `BigNumberish` | `undefined` |
| `toSavingsAccount` | `boolean` | `false` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | `undefined` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/creditLines.ts:275](https://github.com/sublime-finance/sublime-sdk/blob/830e71c/src/api/creditLines.ts#L275)

___

### withdrawCollateralFromCreditLine

??? **withdrawCollateralFromCreditLine**(`creditLineNumber`, `amount`, `toSavingsAccount?`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Withdraws the collateral from the credit line

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `creditLineNumber` | `BigNumberish` | `undefined` |  |
| `amount` | `string` | `undefined` |  |
| `toSavingsAccount` | `boolean` | `false` | - |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | `undefined` | transaction options directly transferred from credit line to user's savings account |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/creditLines.ts:245](https://github.com/sublime-finance/sublime-sdk/blob/830e71c/src/api/creditLines.ts#L245)

___

### withdrawableCollateral

??? **withdrawableCollateral**(`creditLineNumber`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** Calculate the amount the collateral that can be withdrawn from the credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

collateral tokens (easy readable)

#### Defined in

[src/api/creditLines.ts:227](https://github.com/sublime-finance/sublime-sdk/blob/830e71c/src/api/creditLines.ts#L227)
