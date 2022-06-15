[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [emulated/EmulatedCreditLine](../modules/emulated_EmulatedCreditLine.md) / EmulatedCreditLines

# Class: EmulatedCreditLines

[emulated/EmulatedCreditLine](../modules/emulated_EmulatedCreditLine.md).EmulatedCreditLines

## Hierarchy

- [`EmulatedHelper`](emulated_Helper.EmulatedHelper.md)

  ↳ **`EmulatedCreditLines`**

## Table of contents

### Constructors

- [constructor](emulated_EmulatedCreditLine.EmulatedCreditLines.md#constructor)

### Properties

- [subgraphUrl](emulated_EmulatedCreditLine.EmulatedCreditLines.md#subgraphurl)

### Methods

- [convertToCreditLineStatusEnum](emulated_EmulatedCreditLine.EmulatedCreditLines.md#converttocreditlinestatusenum)
- [getAllCreditLines](emulated_EmulatedCreditLine.EmulatedCreditLines.md#getallcreditlines)
- [getRandomInt](emulated_EmulatedCreditLine.EmulatedCreditLines.md#getrandomint)
- [getTokensForShares](emulated_EmulatedCreditLine.EmulatedCreditLines.md#gettokensforshares)
- [refreshStrategyData](emulated_EmulatedCreditLine.EmulatedCreditLines.md#refreshstrategydata)
- [refreshStrategyDataForPcl](emulated_EmulatedCreditLine.EmulatedCreditLines.md#refreshstrategydataforpcl)
- [refreshTokenData](emulated_EmulatedCreditLine.EmulatedCreditLines.md#refreshtokendata)
- [transformToCreditLineEmulator](emulated_EmulatedCreditLine.EmulatedCreditLines.md#transformtocreditlineemulator)

## Constructors

### constructor

• **new EmulatedCreditLines**(`subgraphUrl`, `priceSubgraphUrl`, `signer`, `config`, `tokenManager?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subgraphUrl` | `string` |
| `priceSubgraphUrl` | `string` |
| `signer` | `Signer` |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |
| `tokenManager?` | [`TokenManager`](tokenManager.TokenManager.md) |

#### Overrides

[EmulatedHelper](emulated_Helper.EmulatedHelper.md).[constructor](emulated_Helper.EmulatedHelper.md#constructor)

#### Defined in

[src/emulated/EmulatedCreditLine.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/emulated/EmulatedCreditLine.ts#L14)

## Properties

### subgraphUrl

• `Private` **subgraphUrl**: `string`

#### Defined in

[src/emulated/EmulatedCreditLine.ts:12](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/emulated/EmulatedCreditLine.ts#L12)

## Methods

### convertToCreditLineStatusEnum

▸ `Private` **convertToCreditLineStatusEnum**(`stateInSubgraph`): [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateInSubgraph` | `string` |

#### Returns

[`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)

#### Defined in

[src/emulated/EmulatedCreditLine.ts:34](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/emulated/EmulatedCreditLine.ts#L34)

___

### getAllCreditLines

▸ **getAllCreditLines**(`count?`, `skip?`): `Promise`<[`CreditLineEmulator`](emulator_CreditLines.CreditLineEmulator.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `count` | `number` | `13` |
| `skip` | `number` | `0` |

#### Returns

`Promise`<[`CreditLineEmulator`](emulator_CreditLines.CreditLineEmulator.md)[]\>

#### Defined in

[src/emulated/EmulatedCreditLine.ts:27](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/emulated/EmulatedCreditLine.ts#L27)

___

### getRandomInt

▸ `Protected` **getRandomInt**(`max`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `any` |

#### Returns

`BigNumber`

#### Inherited from

[EmulatedHelper](emulated_Helper.EmulatedHelper.md).[getRandomInt](emulated_Helper.EmulatedHelper.md#getrandomint)

#### Defined in

[src/emulated/Helper.ts:91](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/emulated/Helper.ts#L91)

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

[EmulatedHelper](emulated_Helper.EmulatedHelper.md).[getTokensForShares](emulated_Helper.EmulatedHelper.md#gettokensforshares)

#### Defined in

[src/emulated/Helper.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/emulated/Helper.ts#L81)

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

[EmulatedHelper](emulated_Helper.EmulatedHelper.md).[refreshStrategyData](emulated_Helper.EmulatedHelper.md#refreshstrategydata)

#### Defined in

[src/emulated/Helper.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/emulated/Helper.ts#L55)

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

[EmulatedHelper](emulated_Helper.EmulatedHelper.md).[refreshStrategyDataForPcl](emulated_Helper.EmulatedHelper.md#refreshstrategydataforpcl)

#### Defined in

[src/emulated/Helper.ts:29](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/emulated/Helper.ts#L29)

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

[EmulatedHelper](emulated_Helper.EmulatedHelper.md).[refreshTokenData](emulated_Helper.EmulatedHelper.md#refreshtokendata)

#### Defined in

[src/emulated/Helper.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/emulated/Helper.ts#L15)

___

### transformToCreditLineEmulator

▸ `Private` **transformToCreditLineEmulator**(`data`, `prices`, `collateralPerStrategyToken`): [`CreditLineEmulator`](emulator_CreditLines.CreditLineEmulator.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |
| `prices` | `Record`<`string`, `BigNumber`\> |
| `collateralPerStrategyToken` | `Record`<`string`, `Record`<`string`, `BigNumber`\>\> |

#### Returns

[`CreditLineEmulator`](emulator_CreditLines.CreditLineEmulator.md)[]

#### Defined in

[src/emulated/EmulatedCreditLine.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/emulated/EmulatedCreditLine.ts#L52)
