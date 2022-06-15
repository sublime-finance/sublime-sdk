[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/FluxAggregator](../modules/wrappers_FluxAggregator.md) / FluxAggregator

# Class: FluxAggregator

[wrappers/FluxAggregator](../modules/wrappers_FluxAggregator.md).FluxAggregator

## Hierarchy

- `Contract`

  ↳ **`FluxAggregator`**

## Table of contents

### Constructors

- [constructor](wrappers_FluxAggregator.FluxAggregator.md#constructor)

### Properties

- [\_deployedPromise](wrappers_FluxAggregator.FluxAggregator.md#_deployedpromise)
- [\_runningEvents](wrappers_FluxAggregator.FluxAggregator.md#_runningevents)
- [\_wrappedEmits](wrappers_FluxAggregator.FluxAggregator.md#_wrappedemits)
- [address](wrappers_FluxAggregator.FluxAggregator.md#address)
- [callStatic](wrappers_FluxAggregator.FluxAggregator.md#callstatic)
- [deployTransaction](wrappers_FluxAggregator.FluxAggregator.md#deploytransaction)
- [estimateGas](wrappers_FluxAggregator.FluxAggregator.md#estimategas)
- [filters](wrappers_FluxAggregator.FluxAggregator.md#filters)
- [functions](wrappers_FluxAggregator.FluxAggregator.md#functions)
- [interface](wrappers_FluxAggregator.FluxAggregator.md#interface)
- [populateTransaction](wrappers_FluxAggregator.FluxAggregator.md#populatetransaction)
- [provider](wrappers_FluxAggregator.FluxAggregator.md#provider)
- [resolvedAddress](wrappers_FluxAggregator.FluxAggregator.md#resolvedaddress)
- [signer](wrappers_FluxAggregator.FluxAggregator.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_FluxAggregator.FluxAggregator.md#_checkrunningevents)
- [\_deployed](wrappers_FluxAggregator.FluxAggregator.md#_deployed)
- [\_wrapEvent](wrappers_FluxAggregator.FluxAggregator.md#_wrapevent)
- [attach](wrappers_FluxAggregator.FluxAggregator.md#attach)
- [connect](wrappers_FluxAggregator.FluxAggregator.md#connect)
- [decimals](wrappers_FluxAggregator.FluxAggregator.md#decimals)
- [decimals()](wrappers_FluxAggregator.FluxAggregator.md#decimals())
- [deployed](wrappers_FluxAggregator.FluxAggregator.md#deployed)
- [description](wrappers_FluxAggregator.FluxAggregator.md#description)
- [description()](wrappers_FluxAggregator.FluxAggregator.md#description())
- [emit](wrappers_FluxAggregator.FluxAggregator.md#emit)
- [fallback](wrappers_FluxAggregator.FluxAggregator.md#fallback)
- [getRoundData](wrappers_FluxAggregator.FluxAggregator.md#getrounddata)
- [getRoundData(uint80)](wrappers_FluxAggregator.FluxAggregator.md#getrounddata(uint80))
- [latestRoundData](wrappers_FluxAggregator.FluxAggregator.md#latestrounddata)
- [latestRoundData()](wrappers_FluxAggregator.FluxAggregator.md#latestrounddata())
- [listenerCount](wrappers_FluxAggregator.FluxAggregator.md#listenercount)
- [listeners](wrappers_FluxAggregator.FluxAggregator.md#listeners)
- [off](wrappers_FluxAggregator.FluxAggregator.md#off)
- [on](wrappers_FluxAggregator.FluxAggregator.md#on)
- [once](wrappers_FluxAggregator.FluxAggregator.md#once)
- [queryFilter](wrappers_FluxAggregator.FluxAggregator.md#queryfilter)
- [removeAllListeners](wrappers_FluxAggregator.FluxAggregator.md#removealllisteners)
- [removeListener](wrappers_FluxAggregator.FluxAggregator.md#removelistener)
- [setValue](wrappers_FluxAggregator.FluxAggregator.md#setvalue)
- [setValue(int256)](wrappers_FluxAggregator.FluxAggregator.md#setvalue(int256))
- [value](wrappers_FluxAggregator.FluxAggregator.md#value)
- [value()](wrappers_FluxAggregator.FluxAggregator.md#value())
- [version](wrappers_FluxAggregator.FluxAggregator.md#version)
- [version()](wrappers_FluxAggregator.FluxAggregator.md#version())
- [getContractAddress](wrappers_FluxAggregator.FluxAggregator.md#getcontractaddress)
- [getInterface](wrappers_FluxAggregator.FluxAggregator.md#getinterface)
- [isIndexed](wrappers_FluxAggregator.FluxAggregator.md#isindexed)

## Constructors

### constructor

• **new FluxAggregator**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `getRoundData` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`]\> |
| `getRoundData(uint80)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`]\> |
| `latestRoundData` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\> |
| `latestRoundData()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\> |
| `setValue` | (`newVal`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setValue(int256)` | (`newVal`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `value` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `value()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/FluxAggregator.d.ts:185](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L185)

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
| `getRoundData` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getRoundData(uint80)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `latestRoundData` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `latestRoundData()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `setValue` | (`newVal`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setValue(int256)` | (`newVal`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `value` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `value()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/FluxAggregator.d.ts:233](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L233)

___

### filters

• **filters**: `Object`

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/FluxAggregator.d.ts:231](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L231)

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
| `getRoundData` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`]\> |
| `getRoundData(uint80)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`]\> |
| `latestRoundData` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\> |
| `latestRoundData()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\> |
| `setValue` | (`newVal`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setValue(int256)` | (`newVal`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `value` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `value()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/FluxAggregator.d.ts:95](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L95)

___

### interface

• **interface**: [`FluxAggregatorInterface`](../interfaces/wrappers_FluxAggregator.FluxAggregatorInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/FluxAggregator.d.ts:93](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L93)

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
| `getRoundData` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getRoundData(uint80)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `latestRoundData` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `latestRoundData()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `setValue` | (`newVal`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setValue(int256)` | (`newVal`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `value` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `value()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/FluxAggregator.d.ts:263](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L263)

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

▸ **attach**(`addressOrName`): [`FluxAggregator`](wrappers_FluxAggregator.FluxAggregator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`FluxAggregator`](wrappers_FluxAggregator.FluxAggregator.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/FluxAggregator.d.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L54)

___

### connect

▸ **connect**(`signerOrProvider`): [`FluxAggregator`](wrappers_FluxAggregator.FluxAggregator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`FluxAggregator`](wrappers_FluxAggregator.FluxAggregator.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/FluxAggregator.d.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L53)

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

[src/wrappers/FluxAggregator.d.ts:141](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L141)

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

[src/wrappers/FluxAggregator.d.ts:143](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L143)

___

### deployed

▸ **deployed**(): `Promise`<[`FluxAggregator`](wrappers_FluxAggregator.FluxAggregator.md)\>

#### Returns

`Promise`<[`FluxAggregator`](wrappers_FluxAggregator.FluxAggregator.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/FluxAggregator.d.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L55)

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

[src/wrappers/FluxAggregator.d.ts:145](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L145)

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

[src/wrappers/FluxAggregator.d.ts:147](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L147)

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

▸ **getRoundData**(`arg0`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`]\>

#### Defined in

[src/wrappers/FluxAggregator.d.ts:149](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L149)

___

### getRoundData(uint80)

▸ **getRoundData(uint80)**(`arg0`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`]\>

#### Defined in

[src/wrappers/FluxAggregator.d.ts:151](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L151)

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

[src/wrappers/FluxAggregator.d.ts:153](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L153)

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

[src/wrappers/FluxAggregator.d.ts:163](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L163)

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

[src/wrappers/FluxAggregator.d.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L57)

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

[src/wrappers/FluxAggregator.d.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L80)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`FluxAggregator`](wrappers_FluxAggregator.FluxAggregator.md)

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

[`FluxAggregator`](wrappers_FluxAggregator.FluxAggregator.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/FluxAggregator.d.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L60)

▸ **off**(`eventName`, `listener`): [`FluxAggregator`](wrappers_FluxAggregator.FluxAggregator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`FluxAggregator`](wrappers_FluxAggregator.FluxAggregator.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/FluxAggregator.d.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L81)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`FluxAggregator`](wrappers_FluxAggregator.FluxAggregator.md)

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

[`FluxAggregator`](wrappers_FluxAggregator.FluxAggregator.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/FluxAggregator.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L64)

▸ **on**(`eventName`, `listener`): [`FluxAggregator`](wrappers_FluxAggregator.FluxAggregator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`FluxAggregator`](wrappers_FluxAggregator.FluxAggregator.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/FluxAggregator.d.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L82)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`FluxAggregator`](wrappers_FluxAggregator.FluxAggregator.md)

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

[`FluxAggregator`](wrappers_FluxAggregator.FluxAggregator.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/FluxAggregator.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L68)

▸ **once**(`eventName`, `listener`): [`FluxAggregator`](wrappers_FluxAggregator.FluxAggregator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`FluxAggregator`](wrappers_FluxAggregator.FluxAggregator.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/FluxAggregator.d.ts:83](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L83)

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

[src/wrappers/FluxAggregator.d.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L87)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`FluxAggregator`](wrappers_FluxAggregator.FluxAggregator.md)

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

[`FluxAggregator`](wrappers_FluxAggregator.FluxAggregator.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/FluxAggregator.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L76)

▸ **removeAllListeners**(`eventName?`): [`FluxAggregator`](wrappers_FluxAggregator.FluxAggregator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`FluxAggregator`](wrappers_FluxAggregator.FluxAggregator.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/FluxAggregator.d.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L85)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`FluxAggregator`](wrappers_FluxAggregator.FluxAggregator.md)

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

[`FluxAggregator`](wrappers_FluxAggregator.FluxAggregator.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/FluxAggregator.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L72)

▸ **removeListener**(`eventName`, `listener`): [`FluxAggregator`](wrappers_FluxAggregator.FluxAggregator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`FluxAggregator`](wrappers_FluxAggregator.FluxAggregator.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/FluxAggregator.d.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L84)

___

### setValue

▸ **setValue**(`newVal`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `newVal` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/FluxAggregator.d.ts:173](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L173)

___

### setValue(int256)

▸ **setValue(int256)**(`newVal`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `newVal` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/FluxAggregator.d.ts:175](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L175)

___

### value

▸ **value**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/FluxAggregator.d.ts:177](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L177)

___

### value()

▸ **value()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/FluxAggregator.d.ts:179](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L179)

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

[src/wrappers/FluxAggregator.d.ts:181](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L181)

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

[src/wrappers/FluxAggregator.d.ts:183](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/FluxAggregator.d.ts#L183)

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
