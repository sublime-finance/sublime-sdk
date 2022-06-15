[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/Proxy](../modules/wrappers_Proxy.md) / Proxy

# Class: Proxy

[wrappers/Proxy](../modules/wrappers_Proxy.md).Proxy

## Hierarchy

- `Contract`

  ↳ **`Proxy`**

## Table of contents

### Constructors

- [constructor](wrappers_Proxy.Proxy.md#constructor)

### Properties

- [\_deployedPromise](wrappers_Proxy.Proxy.md#_deployedpromise)
- [\_runningEvents](wrappers_Proxy.Proxy.md#_runningevents)
- [\_wrappedEmits](wrappers_Proxy.Proxy.md#_wrappedemits)
- [address](wrappers_Proxy.Proxy.md#address)
- [callStatic](wrappers_Proxy.Proxy.md#callstatic)
- [deployTransaction](wrappers_Proxy.Proxy.md#deploytransaction)
- [estimateGas](wrappers_Proxy.Proxy.md#estimategas)
- [filters](wrappers_Proxy.Proxy.md#filters)
- [functions](wrappers_Proxy.Proxy.md#functions)
- [interface](wrappers_Proxy.Proxy.md#interface)
- [populateTransaction](wrappers_Proxy.Proxy.md#populatetransaction)
- [provider](wrappers_Proxy.Proxy.md#provider)
- [resolvedAddress](wrappers_Proxy.Proxy.md#resolvedaddress)
- [signer](wrappers_Proxy.Proxy.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_Proxy.Proxy.md#_checkrunningevents)
- [\_deployed](wrappers_Proxy.Proxy.md#_deployed)
- [\_wrapEvent](wrappers_Proxy.Proxy.md#_wrapevent)
- [attach](wrappers_Proxy.Proxy.md#attach)
- [connect](wrappers_Proxy.Proxy.md#connect)
- [deployed](wrappers_Proxy.Proxy.md#deployed)
- [emit](wrappers_Proxy.Proxy.md#emit)
- [fallback](wrappers_Proxy.Proxy.md#fallback)
- [listenerCount](wrappers_Proxy.Proxy.md#listenercount)
- [listeners](wrappers_Proxy.Proxy.md#listeners)
- [off](wrappers_Proxy.Proxy.md#off)
- [on](wrappers_Proxy.Proxy.md#on)
- [once](wrappers_Proxy.Proxy.md#once)
- [queryFilter](wrappers_Proxy.Proxy.md#queryfilter)
- [removeAllListeners](wrappers_Proxy.Proxy.md#removealllisteners)
- [removeListener](wrappers_Proxy.Proxy.md#removelistener)
- [getContractAddress](wrappers_Proxy.Proxy.md#getcontractaddress)
- [getInterface](wrappers_Proxy.Proxy.md#getinterface)
- [isIndexed](wrappers_Proxy.Proxy.md#isindexed)

## Constructors

### constructor

• **new Proxy**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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

[src/wrappers/Proxy.d.ts:62](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Proxy.d.ts#L62)

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

[src/wrappers/Proxy.d.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Proxy.d.ts#L66)

___

### filters

• **filters**: `Object`

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/Proxy.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Proxy.d.ts#L64)

___

### functions

• **functions**: `Object`

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/Proxy.d.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Proxy.d.ts#L60)

___

### interface

• **interface**: [`ProxyInterface`](../interfaces/wrappers_Proxy.ProxyInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/Proxy.d.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Proxy.d.ts#L58)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/Proxy.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Proxy.d.ts#L68)

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

▸ **attach**(`addressOrName`): [`Proxy`](wrappers_Proxy.Proxy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`Proxy`](wrappers_Proxy.Proxy.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/Proxy.d.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Proxy.d.ts#L19)

___

### connect

▸ **connect**(`signerOrProvider`): [`Proxy`](wrappers_Proxy.Proxy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`Proxy`](wrappers_Proxy.Proxy.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/Proxy.d.ts:18](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Proxy.d.ts#L18)

___

### deployed

▸ **deployed**(): `Promise`<[`Proxy`](wrappers_Proxy.Proxy.md)\>

#### Returns

`Promise`<[`Proxy`](wrappers_Proxy.Proxy.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/Proxy.d.ts:20](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Proxy.d.ts#L20)

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

[src/wrappers/Proxy.d.ts:22](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Proxy.d.ts#L22)

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

[src/wrappers/Proxy.d.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Proxy.d.ts#L45)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Proxy`](wrappers_Proxy.Proxy.md)

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

[`Proxy`](wrappers_Proxy.Proxy.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/Proxy.d.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Proxy.d.ts#L25)

▸ **off**(`eventName`, `listener`): [`Proxy`](wrappers_Proxy.Proxy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Proxy`](wrappers_Proxy.Proxy.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/Proxy.d.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Proxy.d.ts#L46)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Proxy`](wrappers_Proxy.Proxy.md)

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

[`Proxy`](wrappers_Proxy.Proxy.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/Proxy.d.ts:29](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Proxy.d.ts#L29)

▸ **on**(`eventName`, `listener`): [`Proxy`](wrappers_Proxy.Proxy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Proxy`](wrappers_Proxy.Proxy.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/Proxy.d.ts:47](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Proxy.d.ts#L47)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Proxy`](wrappers_Proxy.Proxy.md)

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

[`Proxy`](wrappers_Proxy.Proxy.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/Proxy.d.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Proxy.d.ts#L33)

▸ **once**(`eventName`, `listener`): [`Proxy`](wrappers_Proxy.Proxy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Proxy`](wrappers_Proxy.Proxy.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/Proxy.d.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Proxy.d.ts#L48)

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

[src/wrappers/Proxy.d.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Proxy.d.ts#L52)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`Proxy`](wrappers_Proxy.Proxy.md)

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

[`Proxy`](wrappers_Proxy.Proxy.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/Proxy.d.ts:41](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Proxy.d.ts#L41)

▸ **removeAllListeners**(`eventName?`): [`Proxy`](wrappers_Proxy.Proxy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`Proxy`](wrappers_Proxy.Proxy.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/Proxy.d.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Proxy.d.ts#L50)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Proxy`](wrappers_Proxy.Proxy.md)

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

[`Proxy`](wrappers_Proxy.Proxy.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/Proxy.d.ts:37](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Proxy.d.ts#L37)

▸ **removeListener**(`eventName`, `listener`): [`Proxy`](wrappers_Proxy.Proxy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Proxy`](wrappers_Proxy.Proxy.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/Proxy.d.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Proxy.d.ts#L49)

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
