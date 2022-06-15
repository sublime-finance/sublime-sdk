[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/Ownable](../modules/wrappers_Ownable.md) / Ownable

# Class: Ownable

[wrappers/Ownable](../modules/wrappers_Ownable.md).Ownable

## Hierarchy

- `Contract`

  ↳ **`Ownable`**

## Table of contents

### Constructors

- [constructor](wrappers_Ownable.Ownable.md#constructor)

### Properties

- [\_deployedPromise](wrappers_Ownable.Ownable.md#_deployedpromise)
- [\_runningEvents](wrappers_Ownable.Ownable.md#_runningevents)
- [\_wrappedEmits](wrappers_Ownable.Ownable.md#_wrappedemits)
- [address](wrappers_Ownable.Ownable.md#address)
- [callStatic](wrappers_Ownable.Ownable.md#callstatic)
- [deployTransaction](wrappers_Ownable.Ownable.md#deploytransaction)
- [estimateGas](wrappers_Ownable.Ownable.md#estimategas)
- [filters](wrappers_Ownable.Ownable.md#filters)
- [functions](wrappers_Ownable.Ownable.md#functions)
- [interface](wrappers_Ownable.Ownable.md#interface)
- [populateTransaction](wrappers_Ownable.Ownable.md#populatetransaction)
- [provider](wrappers_Ownable.Ownable.md#provider)
- [resolvedAddress](wrappers_Ownable.Ownable.md#resolvedaddress)
- [signer](wrappers_Ownable.Ownable.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_Ownable.Ownable.md#_checkrunningevents)
- [\_deployed](wrappers_Ownable.Ownable.md#_deployed)
- [\_wrapEvent](wrappers_Ownable.Ownable.md#_wrapevent)
- [attach](wrappers_Ownable.Ownable.md#attach)
- [connect](wrappers_Ownable.Ownable.md#connect)
- [deployed](wrappers_Ownable.Ownable.md#deployed)
- [emit](wrappers_Ownable.Ownable.md#emit)
- [fallback](wrappers_Ownable.Ownable.md#fallback)
- [listenerCount](wrappers_Ownable.Ownable.md#listenercount)
- [listeners](wrappers_Ownable.Ownable.md#listeners)
- [off](wrappers_Ownable.Ownable.md#off)
- [on](wrappers_Ownable.Ownable.md#on)
- [once](wrappers_Ownable.Ownable.md#once)
- [owner](wrappers_Ownable.Ownable.md#owner)
- [owner()](wrappers_Ownable.Ownable.md#owner())
- [queryFilter](wrappers_Ownable.Ownable.md#queryfilter)
- [removeAllListeners](wrappers_Ownable.Ownable.md#removealllisteners)
- [removeListener](wrappers_Ownable.Ownable.md#removelistener)
- [renounceOwnership](wrappers_Ownable.Ownable.md#renounceownership)
- [renounceOwnership()](wrappers_Ownable.Ownable.md#renounceownership())
- [transferOwnership](wrappers_Ownable.Ownable.md#transferownership)
- [transferOwnership(address)](wrappers_Ownable.Ownable.md#transferownership(address))
- [getContractAddress](wrappers_Ownable.Ownable.md#getcontractaddress)
- [getInterface](wrappers_Ownable.Ownable.md#getinterface)
- [isIndexed](wrappers_Ownable.Ownable.md#isindexed)

## Constructors

### constructor

• **new Ownable**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `renounceOwnership` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `renounceOwnership()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/Ownable.d.ts:116](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/Ownable.d.ts#L116)

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
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/Ownable.d.ts:137](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/Ownable.d.ts#L137)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `OwnershipTransferred` | (`previousOwner`: `string`, `newOwner`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`], { `newOwner`: `string` ; `previousOwner`: `string`  }\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/Ownable.d.ts:130](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/Ownable.d.ts#L130)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/Ownable.d.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/Ownable.d.ts#L87)

___

### interface

• **interface**: [`OwnableInterface`](../interfaces/wrappers_Ownable.OwnableInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/Ownable.d.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/Ownable.d.ts#L85)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/Ownable.d.ts:151](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/Ownable.d.ts#L151)

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

▸ **attach**(`addressOrName`): [`Ownable`](wrappers_Ownable.Ownable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`Ownable`](wrappers_Ownable.Ownable.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/Ownable.d.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/Ownable.d.ts#L46)

___

### connect

▸ **connect**(`signerOrProvider`): [`Ownable`](wrappers_Ownable.Ownable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`Ownable`](wrappers_Ownable.Ownable.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/Ownable.d.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/Ownable.d.ts#L45)

___

### deployed

▸ **deployed**(): `Promise`<[`Ownable`](wrappers_Ownable.Ownable.md)\>

#### Returns

`Promise`<[`Ownable`](wrappers_Ownable.Ownable.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/Ownable.d.ts:47](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/Ownable.d.ts#L47)

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

[src/wrappers/Ownable.d.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/Ownable.d.ts#L49)

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

[src/wrappers/Ownable.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/Ownable.d.ts#L72)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Ownable`](wrappers_Ownable.Ownable.md)

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

[`Ownable`](wrappers_Ownable.Ownable.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/Ownable.d.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/Ownable.d.ts#L52)

▸ **off**(`eventName`, `listener`): [`Ownable`](wrappers_Ownable.Ownable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Ownable`](wrappers_Ownable.Ownable.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/Ownable.d.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/Ownable.d.ts#L73)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Ownable`](wrappers_Ownable.Ownable.md)

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

[`Ownable`](wrappers_Ownable.Ownable.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/Ownable.d.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/Ownable.d.ts#L56)

▸ **on**(`eventName`, `listener`): [`Ownable`](wrappers_Ownable.Ownable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Ownable`](wrappers_Ownable.Ownable.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/Ownable.d.ts:74](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/Ownable.d.ts#L74)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Ownable`](wrappers_Ownable.Ownable.md)

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

[`Ownable`](wrappers_Ownable.Ownable.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/Ownable.d.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/Ownable.d.ts#L60)

▸ **once**(`eventName`, `listener`): [`Ownable`](wrappers_Ownable.Ownable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Ownable`](wrappers_Ownable.Ownable.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/Ownable.d.ts:75](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/Ownable.d.ts#L75)

___

### owner

▸ **owner**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/Ownable.d.ts:104](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/Ownable.d.ts#L104)

___

### owner()

▸ **owner()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/Ownable.d.ts:106](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/Ownable.d.ts#L106)

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

[src/wrappers/Ownable.d.ts:79](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/Ownable.d.ts#L79)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`Ownable`](wrappers_Ownable.Ownable.md)

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

[`Ownable`](wrappers_Ownable.Ownable.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/Ownable.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/Ownable.d.ts#L68)

▸ **removeAllListeners**(`eventName?`): [`Ownable`](wrappers_Ownable.Ownable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`Ownable`](wrappers_Ownable.Ownable.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/Ownable.d.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/Ownable.d.ts#L77)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Ownable`](wrappers_Ownable.Ownable.md)

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

[`Ownable`](wrappers_Ownable.Ownable.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/Ownable.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/Ownable.d.ts#L64)

▸ **removeListener**(`eventName`, `listener`): [`Ownable`](wrappers_Ownable.Ownable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Ownable`](wrappers_Ownable.Ownable.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/Ownable.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/Ownable.d.ts#L76)

___

### renounceOwnership

▸ **renounceOwnership**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Ownable.d.ts:108](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/Ownable.d.ts#L108)

___

### renounceOwnership()

▸ **renounceOwnership()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Ownable.d.ts:110](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/Ownable.d.ts#L110)

___

### transferOwnership

▸ **transferOwnership**(`newOwner`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `newOwner` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Ownable.d.ts:112](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/Ownable.d.ts#L112)

___

### transferOwnership(address)

▸ **transferOwnership(address)**(`newOwner`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `newOwner` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Ownable.d.ts:114](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/Ownable.d.ts#L114)

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
