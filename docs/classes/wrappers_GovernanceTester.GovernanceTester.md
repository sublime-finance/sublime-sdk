[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/GovernanceTester](../modules/wrappers_GovernanceTester.md) / GovernanceTester

# Class: GovernanceTester

[wrappers/GovernanceTester](../modules/wrappers_GovernanceTester.md).GovernanceTester

## Hierarchy

- `Contract`

  ↳ **`GovernanceTester`**

## Table of contents

### Constructors

- [constructor](wrappers_GovernanceTester.GovernanceTester.md#constructor)

### Properties

- [\_deployedPromise](wrappers_GovernanceTester.GovernanceTester.md#_deployedpromise)
- [\_runningEvents](wrappers_GovernanceTester.GovernanceTester.md#_runningevents)
- [\_wrappedEmits](wrappers_GovernanceTester.GovernanceTester.md#_wrappedemits)
- [address](wrappers_GovernanceTester.GovernanceTester.md#address)
- [callStatic](wrappers_GovernanceTester.GovernanceTester.md#callstatic)
- [deployTransaction](wrappers_GovernanceTester.GovernanceTester.md#deploytransaction)
- [estimateGas](wrappers_GovernanceTester.GovernanceTester.md#estimategas)
- [filters](wrappers_GovernanceTester.GovernanceTester.md#filters)
- [functions](wrappers_GovernanceTester.GovernanceTester.md#functions)
- [interface](wrappers_GovernanceTester.GovernanceTester.md#interface)
- [populateTransaction](wrappers_GovernanceTester.GovernanceTester.md#populatetransaction)
- [provider](wrappers_GovernanceTester.GovernanceTester.md#provider)
- [resolvedAddress](wrappers_GovernanceTester.GovernanceTester.md#resolvedaddress)
- [signer](wrappers_GovernanceTester.GovernanceTester.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_GovernanceTester.GovernanceTester.md#_checkrunningevents)
- [\_deployed](wrappers_GovernanceTester.GovernanceTester.md#_deployed)
- [\_wrapEvent](wrappers_GovernanceTester.GovernanceTester.md#_wrapevent)
- [attach](wrappers_GovernanceTester.GovernanceTester.md#attach)
- [connect](wrappers_GovernanceTester.GovernanceTester.md#connect)
- [deployed](wrappers_GovernanceTester.GovernanceTester.md#deployed)
- [emit](wrappers_GovernanceTester.GovernanceTester.md#emit)
- [fallback](wrappers_GovernanceTester.GovernanceTester.md#fallback)
- [gov](wrappers_GovernanceTester.GovernanceTester.md#gov)
- [gov()](wrappers_GovernanceTester.GovernanceTester.md#gov())
- [listenerCount](wrappers_GovernanceTester.GovernanceTester.md#listenercount)
- [listeners](wrappers_GovernanceTester.GovernanceTester.md#listeners)
- [off](wrappers_GovernanceTester.GovernanceTester.md#off)
- [on](wrappers_GovernanceTester.GovernanceTester.md#on)
- [once](wrappers_GovernanceTester.GovernanceTester.md#once)
- [queryFilter](wrappers_GovernanceTester.GovernanceTester.md#queryfilter)
- [removeAllListeners](wrappers_GovernanceTester.GovernanceTester.md#removealllisteners)
- [removeListener](wrappers_GovernanceTester.GovernanceTester.md#removelistener)
- [update](wrappers_GovernanceTester.GovernanceTester.md#update)
- [update(uint256)](wrappers_GovernanceTester.GovernanceTester.md#update(uint256))
- [value](wrappers_GovernanceTester.GovernanceTester.md#value)
- [value()](wrappers_GovernanceTester.GovernanceTester.md#value())
- [getContractAddress](wrappers_GovernanceTester.GovernanceTester.md#getcontractaddress)
- [getInterface](wrappers_GovernanceTester.GovernanceTester.md#getinterface)
- [isIndexed](wrappers_GovernanceTester.GovernanceTester.md#isindexed)

## Constructors

### constructor

• **new GovernanceTester**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `gov` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `gov()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `update` | (`_value`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `update(uint256)` | (`_value`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `value` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `value()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/GovernanceTester.d.ts:113](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/GovernanceTester.d.ts#L113)

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
| `gov` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `gov()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `update` | (`_value`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `update(uint256)` | (`_value`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `value` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `value()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/GovernanceTester.d.ts:135](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/GovernanceTester.d.ts#L135)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `valueUpdated` | (`governance`: `string`, `sender`: `string`, `v`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `BigNumber`], { `governance`: `string` ; `sender`: `string` ; `v`: `BigNumber`  }\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/GovernanceTester.d.ts:127](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/GovernanceTester.d.ts#L127)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `gov` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `gov()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `update` | (`_value`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `update(uint256)` | (`_value`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `value` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `value()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/GovernanceTester.d.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/GovernanceTester.d.ts#L87)

___

### interface

• **interface**: [`GovernanceTesterInterface`](../interfaces/wrappers_GovernanceTester.GovernanceTesterInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/GovernanceTester.d.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/GovernanceTester.d.ts#L85)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `gov` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `gov()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `update` | (`_value`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `update(uint256)` | (`_value`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `value` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `value()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/GovernanceTester.d.ts:149](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/GovernanceTester.d.ts#L149)

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

▸ **attach**(`addressOrName`): [`GovernanceTester`](wrappers_GovernanceTester.GovernanceTester.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`GovernanceTester`](wrappers_GovernanceTester.GovernanceTester.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/GovernanceTester.d.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/GovernanceTester.d.ts#L46)

___

### connect

▸ **connect**(`signerOrProvider`): [`GovernanceTester`](wrappers_GovernanceTester.GovernanceTester.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`GovernanceTester`](wrappers_GovernanceTester.GovernanceTester.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/GovernanceTester.d.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/GovernanceTester.d.ts#L45)

___

### deployed

▸ **deployed**(): `Promise`<[`GovernanceTester`](wrappers_GovernanceTester.GovernanceTester.md)\>

#### Returns

`Promise`<[`GovernanceTester`](wrappers_GovernanceTester.GovernanceTester.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/GovernanceTester.d.ts:47](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/GovernanceTester.d.ts#L47)

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

### gov

▸ **gov**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/GovernanceTester.d.ts:101](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/GovernanceTester.d.ts#L101)

___

### gov()

▸ **gov()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/GovernanceTester.d.ts:103](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/GovernanceTester.d.ts#L103)

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

[src/wrappers/GovernanceTester.d.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/GovernanceTester.d.ts#L49)

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

[src/wrappers/GovernanceTester.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/GovernanceTester.d.ts#L72)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`GovernanceTester`](wrappers_GovernanceTester.GovernanceTester.md)

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

[`GovernanceTester`](wrappers_GovernanceTester.GovernanceTester.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/GovernanceTester.d.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/GovernanceTester.d.ts#L52)

▸ **off**(`eventName`, `listener`): [`GovernanceTester`](wrappers_GovernanceTester.GovernanceTester.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`GovernanceTester`](wrappers_GovernanceTester.GovernanceTester.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/GovernanceTester.d.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/GovernanceTester.d.ts#L73)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`GovernanceTester`](wrappers_GovernanceTester.GovernanceTester.md)

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

[`GovernanceTester`](wrappers_GovernanceTester.GovernanceTester.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/GovernanceTester.d.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/GovernanceTester.d.ts#L56)

▸ **on**(`eventName`, `listener`): [`GovernanceTester`](wrappers_GovernanceTester.GovernanceTester.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`GovernanceTester`](wrappers_GovernanceTester.GovernanceTester.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/GovernanceTester.d.ts:74](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/GovernanceTester.d.ts#L74)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`GovernanceTester`](wrappers_GovernanceTester.GovernanceTester.md)

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

[`GovernanceTester`](wrappers_GovernanceTester.GovernanceTester.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/GovernanceTester.d.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/GovernanceTester.d.ts#L60)

▸ **once**(`eventName`, `listener`): [`GovernanceTester`](wrappers_GovernanceTester.GovernanceTester.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`GovernanceTester`](wrappers_GovernanceTester.GovernanceTester.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/GovernanceTester.d.ts:75](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/GovernanceTester.d.ts#L75)

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

[src/wrappers/GovernanceTester.d.ts:79](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/GovernanceTester.d.ts#L79)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`GovernanceTester`](wrappers_GovernanceTester.GovernanceTester.md)

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

[`GovernanceTester`](wrappers_GovernanceTester.GovernanceTester.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/GovernanceTester.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/GovernanceTester.d.ts#L68)

▸ **removeAllListeners**(`eventName?`): [`GovernanceTester`](wrappers_GovernanceTester.GovernanceTester.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`GovernanceTester`](wrappers_GovernanceTester.GovernanceTester.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/GovernanceTester.d.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/GovernanceTester.d.ts#L77)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`GovernanceTester`](wrappers_GovernanceTester.GovernanceTester.md)

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

[`GovernanceTester`](wrappers_GovernanceTester.GovernanceTester.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/GovernanceTester.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/GovernanceTester.d.ts#L64)

▸ **removeListener**(`eventName`, `listener`): [`GovernanceTester`](wrappers_GovernanceTester.GovernanceTester.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`GovernanceTester`](wrappers_GovernanceTester.GovernanceTester.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/GovernanceTester.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/GovernanceTester.d.ts#L76)

___

### update

▸ **update**(`_value`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/GovernanceTester.d.ts:105](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/GovernanceTester.d.ts#L105)

___

### update(uint256)

▸ **update(uint256)**(`_value`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/GovernanceTester.d.ts:107](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/GovernanceTester.d.ts#L107)

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

[src/wrappers/GovernanceTester.d.ts:109](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/GovernanceTester.d.ts#L109)

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

[src/wrappers/GovernanceTester.d.ts:111](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/GovernanceTester.d.ts#L111)

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
