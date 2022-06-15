[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/IVerifier](../modules/wrappers_IVerifier.md) / IVerifier

# Class: IVerifier

[wrappers/IVerifier](../modules/wrappers_IVerifier.md).IVerifier

## Hierarchy

- `Contract`

  ↳ **`IVerifier`**

## Table of contents

### Constructors

- [constructor](wrappers_IVerifier.IVerifier.md#constructor)

### Properties

- [\_deployedPromise](wrappers_IVerifier.IVerifier.md#_deployedpromise)
- [\_runningEvents](wrappers_IVerifier.IVerifier.md#_runningevents)
- [\_wrappedEmits](wrappers_IVerifier.IVerifier.md#_wrappedemits)
- [address](wrappers_IVerifier.IVerifier.md#address)
- [callStatic](wrappers_IVerifier.IVerifier.md#callstatic)
- [deployTransaction](wrappers_IVerifier.IVerifier.md#deploytransaction)
- [estimateGas](wrappers_IVerifier.IVerifier.md#estimategas)
- [filters](wrappers_IVerifier.IVerifier.md#filters)
- [functions](wrappers_IVerifier.IVerifier.md#functions)
- [interface](wrappers_IVerifier.IVerifier.md#interface)
- [populateTransaction](wrappers_IVerifier.IVerifier.md#populatetransaction)
- [provider](wrappers_IVerifier.IVerifier.md#provider)
- [resolvedAddress](wrappers_IVerifier.IVerifier.md#resolvedaddress)
- [signer](wrappers_IVerifier.IVerifier.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_IVerifier.IVerifier.md#_checkrunningevents)
- [\_deployed](wrappers_IVerifier.IVerifier.md#_deployed)
- [\_wrapEvent](wrappers_IVerifier.IVerifier.md#_wrapevent)
- [attach](wrappers_IVerifier.IVerifier.md#attach)
- [connect](wrappers_IVerifier.IVerifier.md#connect)
- [deployed](wrappers_IVerifier.IVerifier.md#deployed)
- [emit](wrappers_IVerifier.IVerifier.md#emit)
- [fallback](wrappers_IVerifier.IVerifier.md#fallback)
- [listenerCount](wrappers_IVerifier.IVerifier.md#listenercount)
- [listeners](wrappers_IVerifier.IVerifier.md#listeners)
- [off](wrappers_IVerifier.IVerifier.md#off)
- [on](wrappers_IVerifier.IVerifier.md#on)
- [once](wrappers_IVerifier.IVerifier.md#once)
- [queryFilter](wrappers_IVerifier.IVerifier.md#queryfilter)
- [removeAllListeners](wrappers_IVerifier.IVerifier.md#removealllisteners)
- [removeListener](wrappers_IVerifier.IVerifier.md#removelistener)
- [getContractAddress](wrappers_IVerifier.IVerifier.md#getcontractaddress)
- [getInterface](wrappers_IVerifier.IVerifier.md#getinterface)
- [isIndexed](wrappers_IVerifier.IVerifier.md#isindexed)

## Constructors

### constructor

• **new IVerifier**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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

[src/wrappers/IVerifier.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IVerifier.d.ts#L68)

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

[src/wrappers/IVerifier.d.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IVerifier.d.ts#L80)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `UserRegistered` | (`user`: `string`, `isMasterLinked`: ``null``, `metadata`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `boolean`, `string`], { `isMasterLinked`: `boolean` ; `metadata`: `string` ; `user`: `string`  }\> |
| `UserUnregistered` | (`user`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `user`: `string`  }\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/IVerifier.d.ts:70](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IVerifier.d.ts#L70)

___

### functions

• **functions**: `Object`

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/IVerifier.d.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IVerifier.d.ts#L66)

___

### interface

• **interface**: [`IVerifierInterface`](../interfaces/wrappers_IVerifier.IVerifierInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/IVerifier.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IVerifier.d.ts#L64)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/IVerifier.d.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IVerifier.d.ts#L82)

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

▸ **attach**(`addressOrName`): [`IVerifier`](wrappers_IVerifier.IVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IVerifier`](wrappers_IVerifier.IVerifier.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/IVerifier.d.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IVerifier.d.ts#L25)

___

### connect

▸ **connect**(`signerOrProvider`): [`IVerifier`](wrappers_IVerifier.IVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IVerifier`](wrappers_IVerifier.IVerifier.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/IVerifier.d.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IVerifier.d.ts#L24)

___

### deployed

▸ **deployed**(): `Promise`<[`IVerifier`](wrappers_IVerifier.IVerifier.md)\>

#### Returns

`Promise`<[`IVerifier`](wrappers_IVerifier.IVerifier.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/IVerifier.d.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IVerifier.d.ts#L26)

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

[src/wrappers/IVerifier.d.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IVerifier.d.ts#L28)

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

[src/wrappers/IVerifier.d.ts:51](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IVerifier.d.ts#L51)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IVerifier`](wrappers_IVerifier.IVerifier.md)

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

[`IVerifier`](wrappers_IVerifier.IVerifier.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IVerifier.d.ts:31](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IVerifier.d.ts#L31)

▸ **off**(`eventName`, `listener`): [`IVerifier`](wrappers_IVerifier.IVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IVerifier`](wrappers_IVerifier.IVerifier.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IVerifier.d.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IVerifier.d.ts#L52)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IVerifier`](wrappers_IVerifier.IVerifier.md)

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

[`IVerifier`](wrappers_IVerifier.IVerifier.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IVerifier.d.ts:35](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IVerifier.d.ts#L35)

▸ **on**(`eventName`, `listener`): [`IVerifier`](wrappers_IVerifier.IVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IVerifier`](wrappers_IVerifier.IVerifier.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IVerifier.d.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IVerifier.d.ts#L53)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IVerifier`](wrappers_IVerifier.IVerifier.md)

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

[`IVerifier`](wrappers_IVerifier.IVerifier.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IVerifier.d.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IVerifier.d.ts#L39)

▸ **once**(`eventName`, `listener`): [`IVerifier`](wrappers_IVerifier.IVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IVerifier`](wrappers_IVerifier.IVerifier.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IVerifier.d.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IVerifier.d.ts#L54)

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

[src/wrappers/IVerifier.d.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IVerifier.d.ts#L58)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`IVerifier`](wrappers_IVerifier.IVerifier.md)

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

[`IVerifier`](wrappers_IVerifier.IVerifier.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IVerifier.d.ts:47](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IVerifier.d.ts#L47)

▸ **removeAllListeners**(`eventName?`): [`IVerifier`](wrappers_IVerifier.IVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IVerifier`](wrappers_IVerifier.IVerifier.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IVerifier.d.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IVerifier.d.ts#L56)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IVerifier`](wrappers_IVerifier.IVerifier.md)

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

[`IVerifier`](wrappers_IVerifier.IVerifier.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IVerifier.d.ts:43](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IVerifier.d.ts#L43)

▸ **removeListener**(`eventName`, `listener`): [`IVerifier`](wrappers_IVerifier.IVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IVerifier`](wrappers_IVerifier.IVerifier.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IVerifier.d.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IVerifier.d.ts#L55)

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
