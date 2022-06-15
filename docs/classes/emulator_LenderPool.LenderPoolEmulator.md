[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [emulator/LenderPool](../modules/emulator_LenderPool.md) / LenderPoolEmulator

# Class: LenderPoolEmulator

[emulator/LenderPool](../modules/emulator_LenderPool.md).LenderPoolEmulator

## Hierarchy

- [`EmulatorHelper`](emulator_Helpers.EmulatorHelper.md)

  ↳ **`LenderPoolEmulator`**

## Table of contents

### Constructors

- [constructor](emulator_LenderPool.LenderPoolEmulator.md#constructor)

### Properties

- [borrowerInterestData](emulator_LenderPool.LenderPoolEmulator.md#borrowerinterestdata)
- [dataFromPooledCreditLines](emulator_LenderPool.LenderPoolEmulator.md#datafrompooledcreditlines)
- [lenderData](emulator_LenderPool.LenderPoolEmulator.md#lenderdata)
- [lenderPerPool](emulator_LenderPool.LenderPoolEmulator.md#lenderperpool)
- [lenderPoolExternalData](emulator_LenderPool.LenderPoolEmulator.md#lenderpoolexternaldata)
- [lenderPoolState](emulator_LenderPool.LenderPoolEmulator.md#lenderpoolstate)
- [totalSupply](emulator_LenderPool.LenderPoolEmulator.md#totalsupply)
- [yieldInterestData](emulator_LenderPool.LenderPoolEmulator.md#yieldinterestdata)

### Methods

- [\_calculateLenderInterest](emulator_LenderPool.LenderPoolEmulator.md#_calculatelenderinterest)
- [\_calculatePrincipalWithdrawable](emulator_LenderPool.LenderPoolEmulator.md#_calculateprincipalwithdrawable)
- [borrowerInterestSharesWithdrawnByLender](emulator_LenderPool.LenderPoolEmulator.md#borrowerinterestshareswithdrawnbylender)
- [calculatePrincipalWithdrawable](emulator_LenderPool.LenderPoolEmulator.md#calculateprincipalwithdrawable)
- [getAllLenders](emulator_LenderPool.LenderPoolEmulator.md#getalllenders)
- [getLenderBalance](emulator_LenderPool.LenderPoolEmulator.md#getlenderbalance)
- [getLenderInterest](emulator_LenderPool.LenderPoolEmulator.md#getlenderinterest)
- [getPrincipalWithdrawableForAllLenders](emulator_LenderPool.LenderPoolEmulator.md#getprincipalwithdrawableforalllenders)
- [min](emulator_LenderPool.LenderPoolEmulator.md#min)
- [now](emulator_LenderPool.LenderPoolEmulator.md#now)
- [yieldInterestSharesWithdrawnByLender](emulator_LenderPool.LenderPoolEmulator.md#yieldinterestshareswithdrawnbylender)

## Constructors

### constructor

• **new LenderPoolEmulator**(`lenderPoolState`, `lenderPoolExternalData`, `dataFromPooledCreditLines`, `lendersPerPool`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `lenderPoolState` | [`LenderPoolState`](../interfaces/types_emulator_lenderPool.LenderPoolState.md) |
| `lenderPoolExternalData` | [`LenderPoolExternalData`](../interfaces/types_emulator_lenderPool.LenderPoolExternalData.md) |
| `dataFromPooledCreditLines` | [`DataFromPooledCreditLines`](../interfaces/types_emulator_lenderPool.DataFromPooledCreditLines.md) |
| `lendersPerPool` | [`LenderPerPool`](../interfaces/types_emulator_lenderPool.LenderPerPool.md)[] |

#### Overrides

[EmulatorHelper](emulator_Helpers.EmulatorHelper.md).[constructor](emulator_Helpers.EmulatorHelper.md#constructor)

#### Defined in

[src/emulator/LenderPool.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/emulator/LenderPool.ts#L24)

## Properties

### borrowerInterestData

• `Private` **borrowerInterestData**: `Record`<`string`, `BigNumber`\> = `{}`

#### Defined in

[src/emulator/LenderPool.ts:18](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/emulator/LenderPool.ts#L18)

___

### dataFromPooledCreditLines

• `Private` **dataFromPooledCreditLines**: [`DataFromPooledCreditLines`](../interfaces/types_emulator_lenderPool.DataFromPooledCreditLines.md)

#### Defined in

[src/emulator/LenderPool.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/emulator/LenderPool.ts#L15)

___

### lenderData

• `Private` **lenderData**: `Record`<`string`, `BigNumber`\> = `{}`

#### Defined in

[src/emulator/LenderPool.ts:17](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/emulator/LenderPool.ts#L17)

___

### lenderPerPool

• `Private` **lenderPerPool**: [`LenderPerPool`](../interfaces/types_emulator_lenderPool.LenderPerPool.md)[]

#### Defined in

[src/emulator/LenderPool.ts:21](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/emulator/LenderPool.ts#L21)

___

### lenderPoolExternalData

• `Private` **lenderPoolExternalData**: [`LenderPoolExternalData`](../interfaces/types_emulator_lenderPool.LenderPoolExternalData.md)

#### Defined in

[src/emulator/LenderPool.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/emulator/LenderPool.ts#L14)

___

### lenderPoolState

• `Private` **lenderPoolState**: [`LenderPoolState`](../interfaces/types_emulator_lenderPool.LenderPoolState.md)

#### Defined in

[src/emulator/LenderPool.ts:13](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/emulator/LenderPool.ts#L13)

___

### totalSupply

• `Private` **totalSupply**: `BigNumber`

#### Defined in

[src/emulator/LenderPool.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/emulator/LenderPool.ts#L23)

___

### yieldInterestData

• `Private` **yieldInterestData**: `Record`<`string`, `BigNumber`\> = `{}`

#### Defined in

[src/emulator/LenderPool.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/emulator/LenderPool.ts#L19)

## Methods

### \_calculateLenderInterest

▸ `Private` **_calculateLenderInterest**(`_lenderBalance`, `_borrowLimit`, `borrowerInterestSharesWithdrawnByLender`, `yieldInterestSharesWithdrawnByLender`): [`BigNumber`, `BigNumber`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `_lenderBalance` | `BigNumber` |
| `_borrowLimit` | `BigNumber` |
| `borrowerInterestSharesWithdrawnByLender` | `BigNumber` |
| `yieldInterestSharesWithdrawnByLender` | `BigNumber` |

#### Returns

[`BigNumber`, `BigNumber`]

#### Defined in

[src/emulator/LenderPool.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/emulator/LenderPool.ts#L85)

___

### \_calculatePrincipalWithdrawable

▸ `Private` **_calculatePrincipalWithdrawable**(`lenderBalance`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lenderBalance` | `BigNumber` |

#### Returns

`BigNumber`

#### Defined in

[src/emulator/LenderPool.ts:121](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/emulator/LenderPool.ts#L121)

___

### borrowerInterestSharesWithdrawnByLender

▸ **borrowerInterestSharesWithdrawnByLender**(`lenderAddress`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lenderAddress` | `string` |

#### Returns

`BigNumber`

#### Defined in

[src/emulator/LenderPool.ts:130](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/emulator/LenderPool.ts#L130)

___

### calculatePrincipalWithdrawable

▸ **calculatePrincipalWithdrawable**(`lenderAddress`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lenderAddress` | `string` |

#### Returns

`BigNumber`

#### Defined in

[src/emulator/LenderPool.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/emulator/LenderPool.ts#L68)

___

### getAllLenders

▸ **getAllLenders**(): [`LenderPerPool`](../interfaces/types_emulator_lenderPool.LenderPerPool.md)[]

#### Returns

[`LenderPerPool`](../interfaces/types_emulator_lenderPool.LenderPerPool.md)[]

#### Defined in

[src/emulator/LenderPool.ts:146](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/emulator/LenderPool.ts#L146)

___

### getLenderBalance

▸ **getLenderBalance**(`lenderAddress`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lenderAddress` | `string` |

#### Returns

`BigNumber`

#### Defined in

[src/emulator/LenderPool.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/emulator/LenderPool.ts#L46)

___

### getLenderInterest

▸ **getLenderInterest**(`lenderAddress`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lenderAddress` | `string` |

#### Returns

`BigNumber`

#### Defined in

[src/emulator/LenderPool.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/emulator/LenderPool.ts#L54)

___

### getPrincipalWithdrawableForAllLenders

▸ **getPrincipalWithdrawableForAllLenders**(): [`LenderPerPoolPrincipalWithdrawable`](../interfaces/types_emulator_lenderPool.LenderPerPoolPrincipalWithdrawable.md)[]

#### Returns

[`LenderPerPoolPrincipalWithdrawable`](../interfaces/types_emulator_lenderPool.LenderPerPoolPrincipalWithdrawable.md)[]

#### Defined in

[src/emulator/LenderPool.ts:150](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/emulator/LenderPool.ts#L150)

___

### min

▸ `Protected` **min**(`a`, `b`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `BigNumber` |
| `b` | `BigNumber` |

#### Returns

`BigNumber`

#### Inherited from

[EmulatorHelper](emulator_Helpers.EmulatorHelper.md).[min](emulator_Helpers.EmulatorHelper.md#min)

#### Defined in

[src/emulator/Helpers.ts:10](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/emulator/Helpers.ts#L10)

___

### now

▸ `Protected` **now**(): `BigNumber`

#### Returns

`BigNumber`

#### Inherited from

[EmulatorHelper](emulator_Helpers.EmulatorHelper.md).[now](emulator_Helpers.EmulatorHelper.md#now)

#### Defined in

[src/emulator/Helpers.ts:6](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/emulator/Helpers.ts#L6)

___

### yieldInterestSharesWithdrawnByLender

▸ **yieldInterestSharesWithdrawnByLender**(`lenderAddress`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lenderAddress` | `string` |

#### Returns

`BigNumber`

#### Defined in

[src/emulator/LenderPool.ts:138](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/emulator/LenderPool.ts#L138)
