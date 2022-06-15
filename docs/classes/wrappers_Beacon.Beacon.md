[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/Beacon](../modules/wrappers_Beacon.md) / Beacon

# Class: Beacon

[wrappers/Beacon](../modules/wrappers_Beacon.md).Beacon

## Hierarchy

- `Contract`

  ↳ **`Beacon`**

## Table of contents

### Constructors

- [constructor](wrappers_Beacon.Beacon.md#constructor)

### Properties

- [\_deployedPromise](wrappers_Beacon.Beacon.md#_deployedpromise)
- [\_runningEvents](wrappers_Beacon.Beacon.md#_runningevents)
- [\_wrappedEmits](wrappers_Beacon.Beacon.md#_wrappedemits)
- [address](wrappers_Beacon.Beacon.md#address)
- [callStatic](wrappers_Beacon.Beacon.md#callstatic)
- [deployTransaction](wrappers_Beacon.Beacon.md#deploytransaction)
- [estimateGas](wrappers_Beacon.Beacon.md#estimategas)
- [filters](wrappers_Beacon.Beacon.md#filters)
- [functions](wrappers_Beacon.Beacon.md#functions)
- [interface](wrappers_Beacon.Beacon.md#interface)
- [populateTransaction](wrappers_Beacon.Beacon.md#populatetransaction)
- [provider](wrappers_Beacon.Beacon.md#provider)
- [resolvedAddress](wrappers_Beacon.Beacon.md#resolvedaddress)
- [signer](wrappers_Beacon.Beacon.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_Beacon.Beacon.md#_checkrunningevents)
- [\_deployed](wrappers_Beacon.Beacon.md#_deployed)
- [\_wrapEvent](wrappers_Beacon.Beacon.md#_wrapevent)
- [attach](wrappers_Beacon.Beacon.md#attach)
- [changeImpl](wrappers_Beacon.Beacon.md#changeimpl)
- [changeImpl(address)](wrappers_Beacon.Beacon.md#changeimpl(address))
- [connect](wrappers_Beacon.Beacon.md#connect)
- [deployed](wrappers_Beacon.Beacon.md#deployed)
- [emit](wrappers_Beacon.Beacon.md#emit)
- [fallback](wrappers_Beacon.Beacon.md#fallback)
- [impl](wrappers_Beacon.Beacon.md#impl)
- [impl()](wrappers_Beacon.Beacon.md#impl())
- [implementation](wrappers_Beacon.Beacon.md#implementation)
- [implementation()](wrappers_Beacon.Beacon.md#implementation())
- [listenerCount](wrappers_Beacon.Beacon.md#listenercount)
- [listeners](wrappers_Beacon.Beacon.md#listeners)
- [off](wrappers_Beacon.Beacon.md#off)
- [on](wrappers_Beacon.Beacon.md#on)
- [once](wrappers_Beacon.Beacon.md#once)
- [owner](wrappers_Beacon.Beacon.md#owner)
- [owner()](wrappers_Beacon.Beacon.md#owner())
- [queryFilter](wrappers_Beacon.Beacon.md#queryfilter)
- [removeAllListeners](wrappers_Beacon.Beacon.md#removealllisteners)
- [removeListener](wrappers_Beacon.Beacon.md#removelistener)
- [renounceOwnership](wrappers_Beacon.Beacon.md#renounceownership)
- [renounceOwnership()](wrappers_Beacon.Beacon.md#renounceownership())
- [transferOwnership](wrappers_Beacon.Beacon.md#transferownership)
- [transferOwnership(address)](wrappers_Beacon.Beacon.md#transferownership(address))
- [getContractAddress](wrappers_Beacon.Beacon.md#getcontractaddress)
- [getInterface](wrappers_Beacon.Beacon.md#getinterface)
- [isIndexed](wrappers_Beacon.Beacon.md#isindexed)

## Constructors

### constructor

• **new Beacon**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `changeImpl` | (`_newImpl`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `changeImpl(address)` | (`_newImpl`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `impl` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `impl()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `implementation` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `implementation()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `renounceOwnership` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `renounceOwnership()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/Beacon.d.ts:149](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L149)

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
| `changeImpl` | (`_newImpl`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `changeImpl(address)` | (`_newImpl`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `impl` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `impl()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `implementation` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `implementation()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/Beacon.d.ts:182](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L182)

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

[src/wrappers/Beacon.d.ts:175](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L175)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `changeImpl` | (`_newImpl`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `changeImpl(address)` | (`_newImpl`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `impl` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `impl()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `implementation` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `implementation()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/Beacon.d.ts:96](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L96)

___

### interface

• **interface**: [`BeaconInterface`](../interfaces/wrappers_Beacon.BeaconInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/Beacon.d.ts:94](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L94)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `changeImpl` | (`_newImpl`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `changeImpl(address)` | (`_newImpl`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `impl` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `impl()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `implementation` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `implementation()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/Beacon.d.ts:208](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L208)

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

▸ **attach**(`addressOrName`): [`Beacon`](wrappers_Beacon.Beacon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`Beacon`](wrappers_Beacon.Beacon.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/Beacon.d.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L55)

___

### changeImpl

▸ **changeImpl**(`_newImpl`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_newImpl` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Beacon.d.ts:125](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L125)

___

### changeImpl(address)

▸ **changeImpl(address)**(`_newImpl`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_newImpl` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Beacon.d.ts:127](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L127)

___

### connect

▸ **connect**(`signerOrProvider`): [`Beacon`](wrappers_Beacon.Beacon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`Beacon`](wrappers_Beacon.Beacon.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/Beacon.d.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L54)

___

### deployed

▸ **deployed**(): `Promise`<[`Beacon`](wrappers_Beacon.Beacon.md)\>

#### Returns

`Promise`<[`Beacon`](wrappers_Beacon.Beacon.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/Beacon.d.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L56)

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

### impl

▸ **impl**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/Beacon.d.ts:129](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L129)

___

### impl()

▸ **impl()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/Beacon.d.ts:131](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L131)

___

### implementation

▸ **implementation**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/Beacon.d.ts:133](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L133)

___

### implementation()

▸ **implementation()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/Beacon.d.ts:135](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L135)

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

[src/wrappers/Beacon.d.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L58)

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

[src/wrappers/Beacon.d.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L81)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Beacon`](wrappers_Beacon.Beacon.md)

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

[`Beacon`](wrappers_Beacon.Beacon.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/Beacon.d.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L61)

▸ **off**(`eventName`, `listener`): [`Beacon`](wrappers_Beacon.Beacon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Beacon`](wrappers_Beacon.Beacon.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/Beacon.d.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L82)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Beacon`](wrappers_Beacon.Beacon.md)

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

[`Beacon`](wrappers_Beacon.Beacon.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/Beacon.d.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L65)

▸ **on**(`eventName`, `listener`): [`Beacon`](wrappers_Beacon.Beacon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Beacon`](wrappers_Beacon.Beacon.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/Beacon.d.ts:83](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L83)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Beacon`](wrappers_Beacon.Beacon.md)

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

[`Beacon`](wrappers_Beacon.Beacon.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/Beacon.d.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L69)

▸ **once**(`eventName`, `listener`): [`Beacon`](wrappers_Beacon.Beacon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Beacon`](wrappers_Beacon.Beacon.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/Beacon.d.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L84)

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

[src/wrappers/Beacon.d.ts:137](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L137)

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

[src/wrappers/Beacon.d.ts:139](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L139)

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

[src/wrappers/Beacon.d.ts:88](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L88)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`Beacon`](wrappers_Beacon.Beacon.md)

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

[`Beacon`](wrappers_Beacon.Beacon.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/Beacon.d.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L77)

▸ **removeAllListeners**(`eventName?`): [`Beacon`](wrappers_Beacon.Beacon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`Beacon`](wrappers_Beacon.Beacon.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/Beacon.d.ts:86](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L86)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Beacon`](wrappers_Beacon.Beacon.md)

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

[`Beacon`](wrappers_Beacon.Beacon.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/Beacon.d.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L73)

▸ **removeListener**(`eventName`, `listener`): [`Beacon`](wrappers_Beacon.Beacon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Beacon`](wrappers_Beacon.Beacon.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/Beacon.d.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L85)

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

[src/wrappers/Beacon.d.ts:141](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L141)

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

[src/wrappers/Beacon.d.ts:143](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L143)

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

[src/wrappers/Beacon.d.ts:145](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L145)

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

[src/wrappers/Beacon.d.ts:147](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/Beacon.d.ts#L147)

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
