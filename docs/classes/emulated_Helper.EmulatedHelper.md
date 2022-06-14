[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [emulated/Helper](../modules/emulated_Helper.md) / EmulatedHelper

# Class: EmulatedHelper

[emulated/Helper](../modules/emulated_Helper.md).EmulatedHelper

## Hierarchy

- **`EmulatedHelper`**

  ↳ [`EmulatedCreditLines`](emulated_EmulatedCreditLine.EmulatedCreditLines.md)

  ↳ [`EmulatedPooledCreditLines`](emulated_EmulatedPooledCreditLine.EmulatedPooledCreditLines.md)

## Table of contents

### Constructors

- [constructor](emulated_Helper.EmulatedHelper.md#constructor)

### Properties

- [tokenManager](emulated_Helper.EmulatedHelper.md#tokenmanager)
- [yieldApi](emulated_Helper.EmulatedHelper.md#yieldapi)

### Methods

- [getRandomInt](emulated_Helper.EmulatedHelper.md#getrandomint)
- [getTokensForShares](emulated_Helper.EmulatedHelper.md#gettokensforshares)
- [refreshStrategyData](emulated_Helper.EmulatedHelper.md#refreshstrategydata)
- [refreshStrategyDataForPcl](emulated_Helper.EmulatedHelper.md#refreshstrategydataforpcl)
- [refreshTokenData](emulated_Helper.EmulatedHelper.md#refreshtokendata)

## Constructors

### constructor

• **new EmulatedHelper**(`tokenManager`, `yieldApi`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |
| `yieldApi` | [`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md) |

#### Defined in

[src/emulated/Helper.ts:10](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/emulated/Helper.ts#L10)

## Properties

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

#### Defined in

[src/emulated/Helper.ts:7](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/emulated/Helper.ts#L7)

___

### yieldApi

• `Private` **yieldApi**: [`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md)

#### Defined in

[src/emulated/Helper.ts:8](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/emulated/Helper.ts#L8)

## Methods

### getRandomInt

▸ `Protected` **getRandomInt**(`max`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `any` |

#### Returns

`BigNumber`

#### Defined in

[src/emulated/Helper.ts:91](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/emulated/Helper.ts#L91)

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

#### Defined in

[src/emulated/Helper.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/emulated/Helper.ts#L81)

___

### refreshStrategyData

▸ `Protected` **refreshStrategyData**(`data`): `Promise`<`Record`<`string`, `Record`<`string`, `BigNumber`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<`Record`<`string`, `Record`<`string`, `BigNumber`\>\>\>

#### Defined in

[src/emulated/Helper.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/emulated/Helper.ts#L55)

___

### refreshStrategyDataForPcl

▸ `Protected` **refreshStrategyDataForPcl**(`data`): `Promise`<`Record`<`string`, `Record`<`string`, `BigNumber`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<`Record`<`string`, `Record`<`string`, `BigNumber`\>\>\>

#### Defined in

[src/emulated/Helper.ts:29](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/emulated/Helper.ts#L29)

___

### refreshTokenData

▸ `Protected` **refreshTokenData**(`data`): `Promise`<`Record`<`string`, `BigNumber`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<`Record`<`string`, `BigNumber`\>\>

#### Defined in

[src/emulated/Helper.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/emulated/Helper.ts#L15)
