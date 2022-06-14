[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/SublimeProxy](../modules/wrappers_SublimeProxy.md) / SublimeProxy

# Class: SublimeProxy

[wrappers/SublimeProxy](../modules/wrappers_SublimeProxy.md).SublimeProxy

## Hierarchy

- `Contract`

  ↳ **`SublimeProxy`**

## Table of contents

### Constructors

- [constructor](wrappers_SublimeProxy.SublimeProxy.md#constructor)

### Properties

- [\_deployedPromise](wrappers_SublimeProxy.SublimeProxy.md#_deployedpromise)
- [\_runningEvents](wrappers_SublimeProxy.SublimeProxy.md#_runningevents)
- [\_wrappedEmits](wrappers_SublimeProxy.SublimeProxy.md#_wrappedemits)
- [address](wrappers_SublimeProxy.SublimeProxy.md#address)
- [callStatic](wrappers_SublimeProxy.SublimeProxy.md#callstatic)
- [deployTransaction](wrappers_SublimeProxy.SublimeProxy.md#deploytransaction)
- [estimateGas](wrappers_SublimeProxy.SublimeProxy.md#estimategas)
- [filters](wrappers_SublimeProxy.SublimeProxy.md#filters)
- [functions](wrappers_SublimeProxy.SublimeProxy.md#functions)
- [interface](wrappers_SublimeProxy.SublimeProxy.md#interface)
- [populateTransaction](wrappers_SublimeProxy.SublimeProxy.md#populatetransaction)
- [provider](wrappers_SublimeProxy.SublimeProxy.md#provider)
- [resolvedAddress](wrappers_SublimeProxy.SublimeProxy.md#resolvedaddress)
- [signer](wrappers_SublimeProxy.SublimeProxy.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_SublimeProxy.SublimeProxy.md#_checkrunningevents)
- [\_deployed](wrappers_SublimeProxy.SublimeProxy.md#_deployed)
- [\_wrapEvent](wrappers_SublimeProxy.SublimeProxy.md#_wrapevent)
- [admin](wrappers_SublimeProxy.SublimeProxy.md#admin)
- [admin()](wrappers_SublimeProxy.SublimeProxy.md#admin())
- [attach](wrappers_SublimeProxy.SublimeProxy.md#attach)
- [changeAdmin](wrappers_SublimeProxy.SublimeProxy.md#changeadmin)
- [changeAdmin(address)](wrappers_SublimeProxy.SublimeProxy.md#changeadmin(address))
- [connect](wrappers_SublimeProxy.SublimeProxy.md#connect)
- [deployed](wrappers_SublimeProxy.SublimeProxy.md#deployed)
- [emit](wrappers_SublimeProxy.SublimeProxy.md#emit)
- [fallback](wrappers_SublimeProxy.SublimeProxy.md#fallback)
- [implementation](wrappers_SublimeProxy.SublimeProxy.md#implementation)
- [implementation()](wrappers_SublimeProxy.SublimeProxy.md#implementation())
- [listenerCount](wrappers_SublimeProxy.SublimeProxy.md#listenercount)
- [listeners](wrappers_SublimeProxy.SublimeProxy.md#listeners)
- [off](wrappers_SublimeProxy.SublimeProxy.md#off)
- [on](wrappers_SublimeProxy.SublimeProxy.md#on)
- [once](wrappers_SublimeProxy.SublimeProxy.md#once)
- [queryFilter](wrappers_SublimeProxy.SublimeProxy.md#queryfilter)
- [removeAllListeners](wrappers_SublimeProxy.SublimeProxy.md#removealllisteners)
- [removeListener](wrappers_SublimeProxy.SublimeProxy.md#removelistener)
- [upgradeTo](wrappers_SublimeProxy.SublimeProxy.md#upgradeto)
- [upgradeTo(address)](wrappers_SublimeProxy.SublimeProxy.md#upgradeto(address))
- [upgradeToAndCall](wrappers_SublimeProxy.SublimeProxy.md#upgradetoandcall)
- [upgradeToAndCall(address,bytes)](wrappers_SublimeProxy.SublimeProxy.md#upgradetoandcall(address,bytes))
- [getContractAddress](wrappers_SublimeProxy.SublimeProxy.md#getcontractaddress)
- [getInterface](wrappers_SublimeProxy.SublimeProxy.md#getinterface)
- [isIndexed](wrappers_SublimeProxy.SublimeProxy.md#isindexed)

## Constructors

### constructor

• **new SublimeProxy**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `admin` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `admin()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `changeAdmin` | (`newAdmin`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `changeAdmin(address)` | (`newAdmin`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `implementation` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `implementation()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `upgradeTo` | (`newImplementation`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `upgradeTo(address)` | (`newImplementation`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `upgradeToAndCall` | (`newImplementation`: `string`, `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `upgradeToAndCall(address,bytes)` | (`newImplementation`: `string`, `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/SublimeProxy.d.ts:160](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L160)

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
| `admin` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `admin()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `changeAdmin` | (`newAdmin`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `changeAdmin(address)` | (`newAdmin`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `implementation` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `implementation()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `upgradeTo` | (`newImplementation`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `upgradeTo(address)` | (`newImplementation`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `upgradeToAndCall` | (`newImplementation`: `string`, `data`: `BytesLike`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `upgradeToAndCall(address,bytes)` | (`newImplementation`: `string`, `data`: `BytesLike`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/SublimeProxy.d.ts:188](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L188)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AdminChanged` | (`previousAdmin`: ``null``, `newAdmin`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`], { `newAdmin`: `string` ; `previousAdmin`: `string`  }\> |
| `Upgraded` | (`implementation`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `implementation`: `string`  }\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/SublimeProxy.d.ts:182](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L182)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `admin` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `admin()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `changeAdmin` | (`newAdmin`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `changeAdmin(address)` | (`newAdmin`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `implementation` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `implementation()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `upgradeTo` | (`newImplementation`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `upgradeTo(address)` | (`newImplementation`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `upgradeToAndCall` | (`newImplementation`: `string`, `data`: `BytesLike`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `upgradeToAndCall(address,bytes)` | (`newImplementation`: `string`, `data`: `BytesLike`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/SublimeProxy.d.ts:96](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L96)

___

### interface

• **interface**: [`SublimeProxyInterface`](../interfaces/wrappers_SublimeProxy.SublimeProxyInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/SublimeProxy.d.ts:94](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L94)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `admin` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `admin()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `changeAdmin` | (`newAdmin`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `changeAdmin(address)` | (`newAdmin`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `implementation` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `implementation()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `upgradeTo` | (`newImplementation`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `upgradeTo(address)` | (`newImplementation`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `upgradeToAndCall` | (`newImplementation`: `string`, `data`: `BytesLike`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `upgradeToAndCall(address,bytes)` | (`newImplementation`: `string`, `data`: `BytesLike`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/SublimeProxy.d.ts:218](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L218)

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

### admin

▸ **admin**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SublimeProxy.d.ts:129](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L129)

___

### admin()

▸ **admin()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SublimeProxy.d.ts:131](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L131)

___

### attach

▸ **attach**(`addressOrName`): [`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/SublimeProxy.d.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L55)

___

### changeAdmin

▸ **changeAdmin**(`newAdmin`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `newAdmin` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SublimeProxy.d.ts:133](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L133)

___

### changeAdmin(address)

▸ **changeAdmin(address)**(`newAdmin`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `newAdmin` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SublimeProxy.d.ts:135](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L135)

___

### connect

▸ **connect**(`signerOrProvider`): [`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/SublimeProxy.d.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L54)

___

### deployed

▸ **deployed**(): `Promise`<[`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)\>

#### Returns

`Promise`<[`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/SublimeProxy.d.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L56)

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

### implementation

▸ **implementation**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SublimeProxy.d.ts:137](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L137)

___

### implementation()

▸ **implementation()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SublimeProxy.d.ts:139](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L139)

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

[src/wrappers/SublimeProxy.d.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L58)

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

[src/wrappers/SublimeProxy.d.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L81)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)

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

[`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/SublimeProxy.d.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L61)

▸ **off**(`eventName`, `listener`): [`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/SublimeProxy.d.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L82)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)

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

[`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/SublimeProxy.d.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L65)

▸ **on**(`eventName`, `listener`): [`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/SublimeProxy.d.ts:83](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L83)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)

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

[`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/SublimeProxy.d.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L69)

▸ **once**(`eventName`, `listener`): [`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/SublimeProxy.d.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L84)

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

[src/wrappers/SublimeProxy.d.ts:88](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L88)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)

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

[`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/SublimeProxy.d.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L77)

▸ **removeAllListeners**(`eventName?`): [`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/SublimeProxy.d.ts:86](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L86)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)

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

[`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/SublimeProxy.d.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L73)

▸ **removeListener**(`eventName`, `listener`): [`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/SublimeProxy.d.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L85)

___

### upgradeTo

▸ **upgradeTo**(`newImplementation`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `newImplementation` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SublimeProxy.d.ts:141](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L141)

___

### upgradeTo(address)

▸ **upgradeTo(address)**(`newImplementation`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `newImplementation` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SublimeProxy.d.ts:143](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L143)

___

### upgradeToAndCall

▸ **upgradeToAndCall**(`newImplementation`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `newImplementation` | `string` |
| `data` | `BytesLike` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SublimeProxy.d.ts:148](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L148)

___

### upgradeToAndCall(address,bytes)

▸ **upgradeToAndCall(address,bytes)**(`newImplementation`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `newImplementation` | `string` |
| `data` | `BytesLike` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SublimeProxy.d.ts:154](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SublimeProxy.d.ts#L154)

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
