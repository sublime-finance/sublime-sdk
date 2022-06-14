[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/AggregatorV3Interface](../modules/wrappers_AggregatorV3Interface.md) / AggregatorV3Interface

# Class: AggregatorV3Interface

[wrappers/AggregatorV3Interface](../modules/wrappers_AggregatorV3Interface.md).AggregatorV3Interface

## Hierarchy

- `Contract`

  ↳ **`AggregatorV3Interface`**

## Table of contents

### Constructors

- [constructor](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#constructor)

### Properties

- [\_deployedPromise](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#_deployedpromise)
- [\_runningEvents](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#_runningevents)
- [\_wrappedEmits](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#_wrappedemits)
- [address](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#address)
- [callStatic](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#callstatic)
- [deployTransaction](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#deploytransaction)
- [estimateGas](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#estimategas)
- [filters](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#filters)
- [functions](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#functions)
- [interface](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#interface)
- [populateTransaction](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#populatetransaction)
- [provider](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#provider)
- [resolvedAddress](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#resolvedaddress)
- [signer](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#_checkrunningevents)
- [\_deployed](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#_deployed)
- [\_wrapEvent](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#_wrapevent)
- [attach](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#attach)
- [connect](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#connect)
- [decimals](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#decimals)
- [decimals()](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#decimals())
- [deployed](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#deployed)
- [description](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#description)
- [description()](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#description())
- [emit](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#emit)
- [fallback](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#fallback)
- [getRoundData](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#getrounddata)
- [getRoundData(uint80)](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#getrounddata(uint80))
- [latestRoundData](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#latestrounddata)
- [latestRoundData()](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#latestrounddata())
- [listenerCount](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#listenercount)
- [listeners](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#listeners)
- [off](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#off)
- [on](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#on)
- [once](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#once)
- [queryFilter](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#queryfilter)
- [removeAllListeners](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#removealllisteners)
- [removeListener](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#removelistener)
- [version](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#version)
- [version()](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#version())
- [getContractAddress](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#getcontractaddress)
- [getInterface](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#getinterface)
- [isIndexed](wrappers_AggregatorV3Interface.AggregatorV3Interface.md#isindexed)

## Constructors

### constructor

• **new AggregatorV3Interface**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |
| `contractInterface` | `ContractInterface` |
| `signerOrProvider?` | `Signer` \| `Provider` |

#### Inherited from

Contract.constructor

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:105

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

Contract.\_deployedPromise

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:98

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

Contract.\_runningEvents

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:99

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

Contract.\_wrappedEmits

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:102

___

### address

• `Readonly` **address**: `string`

#### Inherited from

Contract.address

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:77

___

### callStatic

• **callStatic**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `description` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `description()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getRoundData` | (`_roundId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\> |
| `getRoundData(uint80)` | (`_roundId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\> |
| `latestRoundData` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\> |
| `latestRoundData()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:206](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L206)

___

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

Contract.deployTransaction

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:97

___

### estimateGas

• **estimateGas**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `description` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `description()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getRoundData` | (`_roundId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getRoundData(uint80)` | (`_roundId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `latestRoundData` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `latestRoundData()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:268](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L268)

___

### filters

• **filters**: `Object`

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:266](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L266)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `description` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `description()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getRoundData` | (`_roundId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\> |
| `getRoundData(uint80)` | (`_roundId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\> |
| `latestRoundData` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\> |
| `latestRoundData()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:88](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L88)

___

### interface

• **interface**: [`AggregatorV3InterfaceInterface`](../interfaces/wrappers_AggregatorV3Interface.AggregatorV3InterfaceInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:86](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L86)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `description` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `description()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getRoundData` | (`_roundId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getRoundData(uint80)` | (`_roundId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `latestRoundData` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `latestRoundData()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:290](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L290)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

Contract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:80

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

Contract.resolvedAddress

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:96

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

Contract.signer

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:79

## Methods

### \_checkRunningEvents

▸ **_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |

#### Returns

`void`

#### Inherited from

Contract.\_checkRunningEvents

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:119

___

### \_deployed

▸ **_deployed**(`blockTag?`): `Promise`<`Contract`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | `BlockTag` |

#### Returns

`Promise`<`Contract`\>

#### Inherited from

Contract.\_deployed

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:112

___

### \_wrapEvent

▸ **_wrapEvent**(`runningEvent`, `log`, `listener`): `Event`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |
| `log` | `Log` |
| `listener` | `Listener` |

#### Returns

`Event`

#### Inherited from

Contract.\_wrapEvent

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:120

___

### attach

▸ **attach**(`addressOrName`): [`AggregatorV3Interface`](wrappers_AggregatorV3Interface.AggregatorV3Interface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`AggregatorV3Interface`](wrappers_AggregatorV3Interface.AggregatorV3Interface.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:47](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L47)

___

### connect

▸ **connect**(`signerOrProvider`): [`AggregatorV3Interface`](wrappers_AggregatorV3Interface.AggregatorV3Interface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`AggregatorV3Interface`](wrappers_AggregatorV3Interface.AggregatorV3Interface.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L46)

___

### decimals

▸ **decimals**(`overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:148](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L148)

___

### decimals()

▸ **decimals()**(`overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:150](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L150)

___

### deployed

▸ **deployed**(): `Promise`<[`AggregatorV3Interface`](wrappers_AggregatorV3Interface.AggregatorV3Interface.md)\>

#### Returns

`Promise`<[`AggregatorV3Interface`](wrappers_AggregatorV3Interface.AggregatorV3Interface.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L48)

___

### description

▸ **description**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:152](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L152)

___

### description()

▸ **description()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:154](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L154)

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `EventFilter` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

Contract.emit

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:125

___

### fallback

▸ **fallback**(`overrides?`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `TransactionRequest` |

#### Returns

`Promise`<`TransactionResponse`\>

#### Inherited from

Contract.fallback

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:113

___

### getRoundData

▸ **getRoundData**(`_roundId`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_roundId` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\>

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:156](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L156)

___

### getRoundData(uint80)

▸ **getRoundData(uint80)**(`_roundId`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_roundId` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\>

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:169](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L169)

___

### latestRoundData

▸ **latestRoundData**(`overrides?`): `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\>

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:182](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L182)

___

### latestRoundData()

▸ **latestRoundData()**(`overrides?`): `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\>

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:192](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L192)

___

### listenerCount

▸ **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| `EventFilter` |

#### Returns

`number`

#### Inherited from

Contract.listenerCount

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:126

___

### listeners

▸ **listeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter?`): [`TypedListener`](../modules/wrappers_commons.md#typedlistener)<`EventArgsArray`, `EventArgsObject`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter?` | [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`TypedListener`](../modules/wrappers_commons.md#typedlistener)<`EventArgsArray`, `EventArgsObject`\>[]

#### Overrides

Contract.listeners

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L50)

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Overrides

Contract.listeners

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L73)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`AggregatorV3Interface`](wrappers_AggregatorV3Interface.AggregatorV3Interface.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |
| `listener` | [`TypedListener`](../modules/wrappers_commons.md#typedlistener)<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`AggregatorV3Interface`](wrappers_AggregatorV3Interface.AggregatorV3Interface.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L53)

▸ **off**(`eventName`, `listener`): [`AggregatorV3Interface`](wrappers_AggregatorV3Interface.AggregatorV3Interface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`AggregatorV3Interface`](wrappers_AggregatorV3Interface.AggregatorV3Interface.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:74](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L74)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`AggregatorV3Interface`](wrappers_AggregatorV3Interface.AggregatorV3Interface.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |
| `listener` | [`TypedListener`](../modules/wrappers_commons.md#typedlistener)<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`AggregatorV3Interface`](wrappers_AggregatorV3Interface.AggregatorV3Interface.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L57)

▸ **on**(`eventName`, `listener`): [`AggregatorV3Interface`](wrappers_AggregatorV3Interface.AggregatorV3Interface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`AggregatorV3Interface`](wrappers_AggregatorV3Interface.AggregatorV3Interface.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:75](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L75)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`AggregatorV3Interface`](wrappers_AggregatorV3Interface.AggregatorV3Interface.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |
| `listener` | [`TypedListener`](../modules/wrappers_commons.md#typedlistener)<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`AggregatorV3Interface`](wrappers_AggregatorV3Interface.AggregatorV3Interface.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L61)

▸ **once**(`eventName`, `listener`): [`AggregatorV3Interface`](wrappers_AggregatorV3Interface.AggregatorV3Interface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`AggregatorV3Interface`](wrappers_AggregatorV3Interface.AggregatorV3Interface.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L76)

___

### queryFilter

▸ **queryFilter**<`EventArgsArray`, `EventArgsObject`\>(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<[`TypedEvent`](../interfaces/wrappers_commons.TypedEvent.md)<`EventArgsArray` & `EventArgsObject`\>[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |
| `fromBlockOrBlockhash?` | `string` \| `number` |
| `toBlock?` | `string` \| `number` |

#### Returns

`Promise`<[`TypedEvent`](../interfaces/wrappers_commons.TypedEvent.md)<`EventArgsArray` & `EventArgsObject`\>[]\>

#### Overrides

Contract.queryFilter

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L80)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`AggregatorV3Interface`](wrappers_AggregatorV3Interface.AggregatorV3Interface.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`AggregatorV3Interface`](wrappers_AggregatorV3Interface.AggregatorV3Interface.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L69)

▸ **removeAllListeners**(`eventName?`): [`AggregatorV3Interface`](wrappers_AggregatorV3Interface.AggregatorV3Interface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`AggregatorV3Interface`](wrappers_AggregatorV3Interface.AggregatorV3Interface.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:78](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L78)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`AggregatorV3Interface`](wrappers_AggregatorV3Interface.AggregatorV3Interface.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |
| `listener` | [`TypedListener`](../modules/wrappers_commons.md#typedlistener)<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`AggregatorV3Interface`](wrappers_AggregatorV3Interface.AggregatorV3Interface.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L65)

▸ **removeListener**(`eventName`, `listener`): [`AggregatorV3Interface`](wrappers_AggregatorV3Interface.AggregatorV3Interface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`AggregatorV3Interface`](wrappers_AggregatorV3Interface.AggregatorV3Interface.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L77)

___

### version

▸ **version**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:202](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L202)

___

### version()

▸ **version()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:204](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/AggregatorV3Interface.d.ts#L204)

___

### getContractAddress

▸ `Static` **getContractAddress**(`transaction`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `Object` |
| `transaction.from` | `string` |
| `transaction.nonce` | `BigNumberish` |

#### Returns

`string`

#### Inherited from

Contract.getContractAddress

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:106

___

### getInterface

▸ `Static` **getInterface**(`contractInterface`): `Interface`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractInterface` | `ContractInterface` |

#### Returns

`Interface`

#### Inherited from

Contract.getInterface

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:110

___

### isIndexed

▸ `Static` **isIndexed**(`value`): value is Indexed

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Indexed

#### Inherited from

Contract.isIndexed

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:116
