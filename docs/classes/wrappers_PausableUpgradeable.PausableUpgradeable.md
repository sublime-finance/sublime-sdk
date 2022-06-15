[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/PausableUpgradeable](../modules/wrappers_PausableUpgradeable.md) / PausableUpgradeable

# Class: PausableUpgradeable

[wrappers/PausableUpgradeable](../modules/wrappers_PausableUpgradeable.md).PausableUpgradeable

## Hierarchy

- `Contract`

  ↳ **`PausableUpgradeable`**

## Table of contents

### Constructors

- [constructor](wrappers_PausableUpgradeable.PausableUpgradeable.md#constructor)

### Properties

- [\_deployedPromise](wrappers_PausableUpgradeable.PausableUpgradeable.md#_deployedpromise)
- [\_runningEvents](wrappers_PausableUpgradeable.PausableUpgradeable.md#_runningevents)
- [\_wrappedEmits](wrappers_PausableUpgradeable.PausableUpgradeable.md#_wrappedemits)
- [address](wrappers_PausableUpgradeable.PausableUpgradeable.md#address)
- [callStatic](wrappers_PausableUpgradeable.PausableUpgradeable.md#callstatic)
- [deployTransaction](wrappers_PausableUpgradeable.PausableUpgradeable.md#deploytransaction)
- [estimateGas](wrappers_PausableUpgradeable.PausableUpgradeable.md#estimategas)
- [filters](wrappers_PausableUpgradeable.PausableUpgradeable.md#filters)
- [functions](wrappers_PausableUpgradeable.PausableUpgradeable.md#functions)
- [interface](wrappers_PausableUpgradeable.PausableUpgradeable.md#interface)
- [populateTransaction](wrappers_PausableUpgradeable.PausableUpgradeable.md#populatetransaction)
- [provider](wrappers_PausableUpgradeable.PausableUpgradeable.md#provider)
- [resolvedAddress](wrappers_PausableUpgradeable.PausableUpgradeable.md#resolvedaddress)
- [signer](wrappers_PausableUpgradeable.PausableUpgradeable.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_PausableUpgradeable.PausableUpgradeable.md#_checkrunningevents)
- [\_deployed](wrappers_PausableUpgradeable.PausableUpgradeable.md#_deployed)
- [\_wrapEvent](wrappers_PausableUpgradeable.PausableUpgradeable.md#_wrapevent)
- [attach](wrappers_PausableUpgradeable.PausableUpgradeable.md#attach)
- [connect](wrappers_PausableUpgradeable.PausableUpgradeable.md#connect)
- [deployed](wrappers_PausableUpgradeable.PausableUpgradeable.md#deployed)
- [emit](wrappers_PausableUpgradeable.PausableUpgradeable.md#emit)
- [fallback](wrappers_PausableUpgradeable.PausableUpgradeable.md#fallback)
- [listenerCount](wrappers_PausableUpgradeable.PausableUpgradeable.md#listenercount)
- [listeners](wrappers_PausableUpgradeable.PausableUpgradeable.md#listeners)
- [off](wrappers_PausableUpgradeable.PausableUpgradeable.md#off)
- [on](wrappers_PausableUpgradeable.PausableUpgradeable.md#on)
- [once](wrappers_PausableUpgradeable.PausableUpgradeable.md#once)
- [paused](wrappers_PausableUpgradeable.PausableUpgradeable.md#paused)
- [paused()](wrappers_PausableUpgradeable.PausableUpgradeable.md#paused())
- [queryFilter](wrappers_PausableUpgradeable.PausableUpgradeable.md#queryfilter)
- [removeAllListeners](wrappers_PausableUpgradeable.PausableUpgradeable.md#removealllisteners)
- [removeListener](wrappers_PausableUpgradeable.PausableUpgradeable.md#removelistener)
- [getContractAddress](wrappers_PausableUpgradeable.PausableUpgradeable.md#getcontractaddress)
- [getInterface](wrappers_PausableUpgradeable.PausableUpgradeable.md#getinterface)
- [isIndexed](wrappers_PausableUpgradeable.PausableUpgradeable.md#isindexed)

## Constructors

### constructor

• **new PausableUpgradeable**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `paused` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `paused()` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/PausableUpgradeable.d.ts:92](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PausableUpgradeable.d.ts#L92)

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
| `paused` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `paused()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/PausableUpgradeable.d.ts:104](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PausableUpgradeable.d.ts#L104)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Paused` | (`account`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `account`: `string`  }\> |
| `Unpaused` | (`account`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `account`: `string`  }\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/PausableUpgradeable.d.ts:98](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PausableUpgradeable.d.ts#L98)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `paused` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `paused()` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/PausableUpgradeable.d.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PausableUpgradeable.d.ts#L82)

___

### interface

• **interface**: [`PausableUpgradeableInterface`](../interfaces/wrappers_PausableUpgradeable.PausableUpgradeableInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/PausableUpgradeable.d.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PausableUpgradeable.d.ts#L80)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `paused` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `paused()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/PausableUpgradeable.d.ts:110](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PausableUpgradeable.d.ts#L110)

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

▸ **attach**(`addressOrName`): [`PausableUpgradeable`](wrappers_PausableUpgradeable.PausableUpgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`PausableUpgradeable`](wrappers_PausableUpgradeable.PausableUpgradeable.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/PausableUpgradeable.d.ts:41](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PausableUpgradeable.d.ts#L41)

___

### connect

▸ **connect**(`signerOrProvider`): [`PausableUpgradeable`](wrappers_PausableUpgradeable.PausableUpgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`PausableUpgradeable`](wrappers_PausableUpgradeable.PausableUpgradeable.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/PausableUpgradeable.d.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PausableUpgradeable.d.ts#L40)

___

### deployed

▸ **deployed**(): `Promise`<[`PausableUpgradeable`](wrappers_PausableUpgradeable.PausableUpgradeable.md)\>

#### Returns

`Promise`<[`PausableUpgradeable`](wrappers_PausableUpgradeable.PausableUpgradeable.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/PausableUpgradeable.d.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PausableUpgradeable.d.ts#L42)

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

[src/wrappers/PausableUpgradeable.d.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PausableUpgradeable.d.ts#L44)

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

[src/wrappers/PausableUpgradeable.d.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PausableUpgradeable.d.ts#L67)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`PausableUpgradeable`](wrappers_PausableUpgradeable.PausableUpgradeable.md)

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

[`PausableUpgradeable`](wrappers_PausableUpgradeable.PausableUpgradeable.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/PausableUpgradeable.d.ts:47](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PausableUpgradeable.d.ts#L47)

▸ **off**(`eventName`, `listener`): [`PausableUpgradeable`](wrappers_PausableUpgradeable.PausableUpgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`PausableUpgradeable`](wrappers_PausableUpgradeable.PausableUpgradeable.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/PausableUpgradeable.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PausableUpgradeable.d.ts#L68)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`PausableUpgradeable`](wrappers_PausableUpgradeable.PausableUpgradeable.md)

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

[`PausableUpgradeable`](wrappers_PausableUpgradeable.PausableUpgradeable.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/PausableUpgradeable.d.ts:51](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PausableUpgradeable.d.ts#L51)

▸ **on**(`eventName`, `listener`): [`PausableUpgradeable`](wrappers_PausableUpgradeable.PausableUpgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`PausableUpgradeable`](wrappers_PausableUpgradeable.PausableUpgradeable.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/PausableUpgradeable.d.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PausableUpgradeable.d.ts#L69)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`PausableUpgradeable`](wrappers_PausableUpgradeable.PausableUpgradeable.md)

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

[`PausableUpgradeable`](wrappers_PausableUpgradeable.PausableUpgradeable.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/PausableUpgradeable.d.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PausableUpgradeable.d.ts#L55)

▸ **once**(`eventName`, `listener`): [`PausableUpgradeable`](wrappers_PausableUpgradeable.PausableUpgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`PausableUpgradeable`](wrappers_PausableUpgradeable.PausableUpgradeable.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/PausableUpgradeable.d.ts:70](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PausableUpgradeable.d.ts#L70)

___

### paused

▸ **paused**(`overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/PausableUpgradeable.d.ts:88](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PausableUpgradeable.d.ts#L88)

___

### paused()

▸ **paused()**(`overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/PausableUpgradeable.d.ts:90](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PausableUpgradeable.d.ts#L90)

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

[src/wrappers/PausableUpgradeable.d.ts:74](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PausableUpgradeable.d.ts#L74)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`PausableUpgradeable`](wrappers_PausableUpgradeable.PausableUpgradeable.md)

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

[`PausableUpgradeable`](wrappers_PausableUpgradeable.PausableUpgradeable.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/PausableUpgradeable.d.ts:63](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PausableUpgradeable.d.ts#L63)

▸ **removeAllListeners**(`eventName?`): [`PausableUpgradeable`](wrappers_PausableUpgradeable.PausableUpgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`PausableUpgradeable`](wrappers_PausableUpgradeable.PausableUpgradeable.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/PausableUpgradeable.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PausableUpgradeable.d.ts#L72)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`PausableUpgradeable`](wrappers_PausableUpgradeable.PausableUpgradeable.md)

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

[`PausableUpgradeable`](wrappers_PausableUpgradeable.PausableUpgradeable.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/PausableUpgradeable.d.ts:59](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PausableUpgradeable.d.ts#L59)

▸ **removeListener**(`eventName`, `listener`): [`PausableUpgradeable`](wrappers_PausableUpgradeable.PausableUpgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`PausableUpgradeable`](wrappers_PausableUpgradeable.PausableUpgradeable.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/PausableUpgradeable.d.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PausableUpgradeable.d.ts#L71)

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
