[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/IBeacon](../modules/wrappers_IBeacon.md) / IBeacon

# Class: IBeacon

[wrappers/IBeacon](../modules/wrappers_IBeacon.md).IBeacon

## Hierarchy

- `Contract`

  ↳ **`IBeacon`**

## Table of contents

### Constructors

- [constructor](wrappers_IBeacon.IBeacon.md#constructor)

### Properties

- [\_deployedPromise](wrappers_IBeacon.IBeacon.md#_deployedpromise)
- [\_runningEvents](wrappers_IBeacon.IBeacon.md#_runningevents)
- [\_wrappedEmits](wrappers_IBeacon.IBeacon.md#_wrappedemits)
- [address](wrappers_IBeacon.IBeacon.md#address)
- [callStatic](wrappers_IBeacon.IBeacon.md#callstatic)
- [deployTransaction](wrappers_IBeacon.IBeacon.md#deploytransaction)
- [estimateGas](wrappers_IBeacon.IBeacon.md#estimategas)
- [filters](wrappers_IBeacon.IBeacon.md#filters)
- [functions](wrappers_IBeacon.IBeacon.md#functions)
- [interface](wrappers_IBeacon.IBeacon.md#interface)
- [populateTransaction](wrappers_IBeacon.IBeacon.md#populatetransaction)
- [provider](wrappers_IBeacon.IBeacon.md#provider)
- [resolvedAddress](wrappers_IBeacon.IBeacon.md#resolvedaddress)
- [signer](wrappers_IBeacon.IBeacon.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_IBeacon.IBeacon.md#_checkrunningevents)
- [\_deployed](wrappers_IBeacon.IBeacon.md#_deployed)
- [\_wrapEvent](wrappers_IBeacon.IBeacon.md#_wrapevent)
- [attach](wrappers_IBeacon.IBeacon.md#attach)
- [connect](wrappers_IBeacon.IBeacon.md#connect)
- [deployed](wrappers_IBeacon.IBeacon.md#deployed)
- [emit](wrappers_IBeacon.IBeacon.md#emit)
- [fallback](wrappers_IBeacon.IBeacon.md#fallback)
- [implementation](wrappers_IBeacon.IBeacon.md#implementation)
- [implementation()](wrappers_IBeacon.IBeacon.md#implementation())
- [listenerCount](wrappers_IBeacon.IBeacon.md#listenercount)
- [listeners](wrappers_IBeacon.IBeacon.md#listeners)
- [off](wrappers_IBeacon.IBeacon.md#off)
- [on](wrappers_IBeacon.IBeacon.md#on)
- [once](wrappers_IBeacon.IBeacon.md#once)
- [queryFilter](wrappers_IBeacon.IBeacon.md#queryfilter)
- [removeAllListeners](wrappers_IBeacon.IBeacon.md#removealllisteners)
- [removeListener](wrappers_IBeacon.IBeacon.md#removelistener)
- [getContractAddress](wrappers_IBeacon.IBeacon.md#getcontractaddress)
- [getInterface](wrappers_IBeacon.IBeacon.md#getinterface)
- [isIndexed](wrappers_IBeacon.IBeacon.md#isindexed)

## Constructors

### constructor

• **new IBeacon**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `implementation` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `implementation()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/IBeacon.d.ts:86](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IBeacon.d.ts#L86)

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
| `implementation` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `implementation()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/IBeacon.d.ts:94](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IBeacon.d.ts#L94)

___

### filters

• **filters**: `Object`

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/IBeacon.d.ts:92](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IBeacon.d.ts#L92)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `implementation` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `implementation()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/IBeacon.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IBeacon.d.ts#L76)

___

### interface

• **interface**: [`IBeaconInterface`](../interfaces/wrappers_IBeacon.IBeaconInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/IBeacon.d.ts:74](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IBeacon.d.ts#L74)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `implementation` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `implementation()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/IBeacon.d.ts:100](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IBeacon.d.ts#L100)

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

▸ **attach**(`addressOrName`): [`IBeacon`](wrappers_IBeacon.IBeacon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IBeacon`](wrappers_IBeacon.IBeacon.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/IBeacon.d.ts:35](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IBeacon.d.ts#L35)

___

### connect

▸ **connect**(`signerOrProvider`): [`IBeacon`](wrappers_IBeacon.IBeacon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IBeacon`](wrappers_IBeacon.IBeacon.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/IBeacon.d.ts:34](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IBeacon.d.ts#L34)

___

### deployed

▸ **deployed**(): `Promise`<[`IBeacon`](wrappers_IBeacon.IBeacon.md)\>

#### Returns

`Promise`<[`IBeacon`](wrappers_IBeacon.IBeacon.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/IBeacon.d.ts:36](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IBeacon.d.ts#L36)

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

▸ **implementation**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/IBeacon.d.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IBeacon.d.ts#L82)

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

[src/wrappers/IBeacon.d.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IBeacon.d.ts#L84)

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

[src/wrappers/IBeacon.d.ts:38](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IBeacon.d.ts#L38)

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

[src/wrappers/IBeacon.d.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IBeacon.d.ts#L61)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IBeacon`](wrappers_IBeacon.IBeacon.md)

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

[`IBeacon`](wrappers_IBeacon.IBeacon.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IBeacon.d.ts:41](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IBeacon.d.ts#L41)

▸ **off**(`eventName`, `listener`): [`IBeacon`](wrappers_IBeacon.IBeacon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IBeacon`](wrappers_IBeacon.IBeacon.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IBeacon.d.ts:62](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IBeacon.d.ts#L62)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IBeacon`](wrappers_IBeacon.IBeacon.md)

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

[`IBeacon`](wrappers_IBeacon.IBeacon.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IBeacon.d.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IBeacon.d.ts#L45)

▸ **on**(`eventName`, `listener`): [`IBeacon`](wrappers_IBeacon.IBeacon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IBeacon`](wrappers_IBeacon.IBeacon.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IBeacon.d.ts:63](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IBeacon.d.ts#L63)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IBeacon`](wrappers_IBeacon.IBeacon.md)

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

[`IBeacon`](wrappers_IBeacon.IBeacon.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IBeacon.d.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IBeacon.d.ts#L49)

▸ **once**(`eventName`, `listener`): [`IBeacon`](wrappers_IBeacon.IBeacon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IBeacon`](wrappers_IBeacon.IBeacon.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IBeacon.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IBeacon.d.ts#L64)

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

[src/wrappers/IBeacon.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IBeacon.d.ts#L68)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`IBeacon`](wrappers_IBeacon.IBeacon.md)

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

[`IBeacon`](wrappers_IBeacon.IBeacon.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IBeacon.d.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IBeacon.d.ts#L57)

▸ **removeAllListeners**(`eventName?`): [`IBeacon`](wrappers_IBeacon.IBeacon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IBeacon`](wrappers_IBeacon.IBeacon.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IBeacon.d.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IBeacon.d.ts#L66)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IBeacon`](wrappers_IBeacon.IBeacon.md)

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

[`IBeacon`](wrappers_IBeacon.IBeacon.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IBeacon.d.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IBeacon.d.ts#L53)

▸ **removeListener**(`eventName`, `listener`): [`IBeacon`](wrappers_IBeacon.IBeacon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IBeacon`](wrappers_IBeacon.IBeacon.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IBeacon.d.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IBeacon.d.ts#L65)

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
