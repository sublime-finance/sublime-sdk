[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [emulated/EmulatedPooledCreditLine](../modules/emulated_EmulatedPooledCreditLine.md) / EmulatedPooledCreditLines

# Class: EmulatedPooledCreditLines

[emulated/EmulatedPooledCreditLine](../modules/emulated_EmulatedPooledCreditLine.md).EmulatedPooledCreditLines

## Hierarchy

- [`EmulatedHelper`](emulated_Helper.EmulatedHelper.md)

  ↳ **`EmulatedPooledCreditLines`**

## Table of contents

### Constructors

- [constructor](emulated_EmulatedPooledCreditLine.EmulatedPooledCreditLines.md#constructor)

### Properties

- [subgraphUrl](emulated_EmulatedPooledCreditLine.EmulatedPooledCreditLines.md#subgraphurl)

### Methods

- [convertToPooledCreditLineStatusEnum](emulated_EmulatedPooledCreditLine.EmulatedPooledCreditLines.md#converttopooledcreditlinestatusenum)
- [getAllPooledCreditLines](emulated_EmulatedPooledCreditLine.EmulatedPooledCreditLines.md#getallpooledcreditlines)
- [getRandomInt](emulated_EmulatedPooledCreditLine.EmulatedPooledCreditLines.md#getrandomint)
- [getTokensForShares](emulated_EmulatedPooledCreditLine.EmulatedPooledCreditLines.md#gettokensforshares)
- [refreshStrategyData](emulated_EmulatedPooledCreditLine.EmulatedPooledCreditLines.md#refreshstrategydata)
- [refreshStrategyDataForPcl](emulated_EmulatedPooledCreditLine.EmulatedPooledCreditLines.md#refreshstrategydataforpcl)
- [refreshTokenData](emulated_EmulatedPooledCreditLine.EmulatedPooledCreditLines.md#refreshtokendata)
- [transformToPooledCreditLineEmulator](emulated_EmulatedPooledCreditLine.EmulatedPooledCreditLines.md#transformtopooledcreditlineemulator)

## Constructors

### constructor

• **new EmulatedPooledCreditLines**(`subgraphUrl`, `priceSubgraphUrl`, `signer`, `config`, `tokenManager?`)

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

[src/emulated/EmulatedPooledCreditLine.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/emulated/EmulatedPooledCreditLine.ts#L14)

## Properties

### subgraphUrl

• `Private` **subgraphUrl**: `string`

#### Defined in

[src/emulated/EmulatedPooledCreditLine.ts:12](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/emulated/EmulatedPooledCreditLine.ts#L12)

## Methods

### convertToPooledCreditLineStatusEnum

▸ `Private` **convertToPooledCreditLineStatusEnum**(`stateInSubgraph`): [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateInSubgraph` | `string` |

#### Returns

[`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)

#### Defined in

[src/emulated/EmulatedPooledCreditLine.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/emulated/EmulatedPooledCreditLine.ts#L58)

___

### getAllPooledCreditLines

▸ **getAllPooledCreditLines**(`count?`, `skip?`): `Promise`<[`PooledCreditLineEmulator`](emulator_PooledCreditLines.PooledCreditLineEmulator.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `count` | `number` | `13` |
| `skip` | `number` | `0` |

#### Returns

`Promise`<[`PooledCreditLineEmulator`](emulator_PooledCreditLines.PooledCreditLineEmulator.md)[]\>

#### Defined in

[src/emulated/EmulatedPooledCreditLine.ts:27](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/emulated/EmulatedPooledCreditLine.ts#L27)

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

[src/emulated/Helper.ts:91](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/emulated/Helper.ts#L91)

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

[src/emulated/Helper.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/emulated/Helper.ts#L81)

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

[src/emulated/Helper.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/emulated/Helper.ts#L55)

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

[src/emulated/Helper.ts:29](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/emulated/Helper.ts#L29)

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

[src/emulated/Helper.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/emulated/Helper.ts#L15)

___

### transformToPooledCreditLineEmulator

▸ `Private` **transformToPooledCreditLineEmulator**(`pclData`, `lenderPoolData`, `lendersPerPool`, `prices`, `collateralPerStrategyToken`): [`PooledCreditLineEmulator`](emulator_PooledCreditLines.PooledCreditLineEmulator.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `pclData` | `any`[] |
| `lenderPoolData` | `any`[] |
| `lendersPerPool` | [`LenderPerPool`](../interfaces/types_emulator_lenderPool.LenderPerPool.md)[][] |
| `prices` | `Record`<`string`, `BigNumber`\> |
| `collateralPerStrategyToken` | `Record`<`string`, `Record`<`string`, `BigNumber`\>\> |

#### Returns

[`PooledCreditLineEmulator`](emulator_PooledCreditLines.PooledCreditLineEmulator.md)[]

#### Defined in

[src/emulated/EmulatedPooledCreditLine.ts:88](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/emulated/EmulatedPooledCreditLine.ts#L88)
