[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/UpgradeableProxy](../modules/wrappers_UpgradeableProxy.md) / UpgradeableProxy

# Class: UpgradeableProxy

[wrappers/UpgradeableProxy](../modules/wrappers_UpgradeableProxy.md).UpgradeableProxy

## Hierarchy

- `Contract`

  ↳ **`UpgradeableProxy`**

## Table of contents

### Constructors

- [constructor](wrappers_UpgradeableProxy.UpgradeableProxy.md#constructor)

### Properties

- [\_deployedPromise](wrappers_UpgradeableProxy.UpgradeableProxy.md#_deployedpromise)
- [\_runningEvents](wrappers_UpgradeableProxy.UpgradeableProxy.md#_runningevents)
- [\_wrappedEmits](wrappers_UpgradeableProxy.UpgradeableProxy.md#_wrappedemits)
- [address](wrappers_UpgradeableProxy.UpgradeableProxy.md#address)
- [callStatic](wrappers_UpgradeableProxy.UpgradeableProxy.md#callstatic)
- [deployTransaction](wrappers_UpgradeableProxy.UpgradeableProxy.md#deploytransaction)
- [estimateGas](wrappers_UpgradeableProxy.UpgradeableProxy.md#estimategas)
- [filters](wrappers_UpgradeableProxy.UpgradeableProxy.md#filters)
- [functions](wrappers_UpgradeableProxy.UpgradeableProxy.md#functions)
- [interface](wrappers_UpgradeableProxy.UpgradeableProxy.md#interface)
- [populateTransaction](wrappers_UpgradeableProxy.UpgradeableProxy.md#populatetransaction)
- [provider](wrappers_UpgradeableProxy.UpgradeableProxy.md#provider)
- [resolvedAddress](wrappers_UpgradeableProxy.UpgradeableProxy.md#resolvedaddress)
- [signer](wrappers_UpgradeableProxy.UpgradeableProxy.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_UpgradeableProxy.UpgradeableProxy.md#_checkrunningevents)
- [\_deployed](wrappers_UpgradeableProxy.UpgradeableProxy.md#_deployed)
- [\_wrapEvent](wrappers_UpgradeableProxy.UpgradeableProxy.md#_wrapevent)
- [attach](wrappers_UpgradeableProxy.UpgradeableProxy.md#attach)
- [connect](wrappers_UpgradeableProxy.UpgradeableProxy.md#connect)
- [deployed](wrappers_UpgradeableProxy.UpgradeableProxy.md#deployed)
- [emit](wrappers_UpgradeableProxy.UpgradeableProxy.md#emit)
- [fallback](wrappers_UpgradeableProxy.UpgradeableProxy.md#fallback)
- [listenerCount](wrappers_UpgradeableProxy.UpgradeableProxy.md#listenercount)
- [listeners](wrappers_UpgradeableProxy.UpgradeableProxy.md#listeners)
- [off](wrappers_UpgradeableProxy.UpgradeableProxy.md#off)
- [on](wrappers_UpgradeableProxy.UpgradeableProxy.md#on)
- [once](wrappers_UpgradeableProxy.UpgradeableProxy.md#once)
- [queryFilter](wrappers_UpgradeableProxy.UpgradeableProxy.md#queryfilter)
- [removeAllListeners](wrappers_UpgradeableProxy.UpgradeableProxy.md#removealllisteners)
- [removeListener](wrappers_UpgradeableProxy.UpgradeableProxy.md#removelistener)
- [getContractAddress](wrappers_UpgradeableProxy.UpgradeableProxy.md#getcontractaddress)
- [getInterface](wrappers_UpgradeableProxy.UpgradeableProxy.md#getinterface)
- [isIndexed](wrappers_UpgradeableProxy.UpgradeableProxy.md#isindexed)

## Constructors

### constructor

• **new UpgradeableProxy**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/UpgradeableProxy.d.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/UpgradeableProxy.d.ts#L66)

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

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/UpgradeableProxy.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/UpgradeableProxy.d.ts#L72)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Upgraded` | (`implementation`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `implementation`: `string`  }\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/UpgradeableProxy.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/UpgradeableProxy.d.ts#L68)

___

### functions

• **functions**: `Object`

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/UpgradeableProxy.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/UpgradeableProxy.d.ts#L64)

___

### interface

• **interface**: [`UpgradeableProxyInterface`](../interfaces/wrappers_UpgradeableProxy.UpgradeableProxyInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/UpgradeableProxy.d.ts:62](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/UpgradeableProxy.d.ts#L62)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/UpgradeableProxy.d.ts:74](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/UpgradeableProxy.d.ts#L74)

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

▸ **attach**(`addressOrName`): [`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/UpgradeableProxy.d.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/UpgradeableProxy.d.ts#L23)

___

### connect

▸ **connect**(`signerOrProvider`): [`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/UpgradeableProxy.d.ts:22](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/UpgradeableProxy.d.ts#L22)

___

### deployed

▸ **deployed**(): `Promise`<[`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)\>

#### Returns

`Promise`<[`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/UpgradeableProxy.d.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/UpgradeableProxy.d.ts#L24)

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

[src/wrappers/UpgradeableProxy.d.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/UpgradeableProxy.d.ts#L26)

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

[src/wrappers/UpgradeableProxy.d.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/UpgradeableProxy.d.ts#L49)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)

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

[`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/UpgradeableProxy.d.ts:29](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/UpgradeableProxy.d.ts#L29)

▸ **off**(`eventName`, `listener`): [`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/UpgradeableProxy.d.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/UpgradeableProxy.d.ts#L50)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)

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

[`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/UpgradeableProxy.d.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/UpgradeableProxy.d.ts#L33)

▸ **on**(`eventName`, `listener`): [`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/UpgradeableProxy.d.ts:51](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/UpgradeableProxy.d.ts#L51)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)

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

[`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/UpgradeableProxy.d.ts:37](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/UpgradeableProxy.d.ts#L37)

▸ **once**(`eventName`, `listener`): [`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/UpgradeableProxy.d.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/UpgradeableProxy.d.ts#L52)

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

[src/wrappers/UpgradeableProxy.d.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/UpgradeableProxy.d.ts#L56)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)

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

[`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/UpgradeableProxy.d.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/UpgradeableProxy.d.ts#L45)

▸ **removeAllListeners**(`eventName?`): [`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/UpgradeableProxy.d.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/UpgradeableProxy.d.ts#L54)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)

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

[`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/UpgradeableProxy.d.ts:41](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/UpgradeableProxy.d.ts#L41)

▸ **removeListener**(`eventName`, `listener`): [`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/UpgradeableProxy.d.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/UpgradeableProxy.d.ts#L53)

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
