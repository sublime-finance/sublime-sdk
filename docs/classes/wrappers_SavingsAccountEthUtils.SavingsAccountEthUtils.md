[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/SavingsAccountEthUtils](../modules/wrappers_SavingsAccountEthUtils.md) / SavingsAccountEthUtils

# Class: SavingsAccountEthUtils

[wrappers/SavingsAccountEthUtils](../modules/wrappers_SavingsAccountEthUtils.md).SavingsAccountEthUtils

## Hierarchy

- `Contract`

  ↳ **`SavingsAccountEthUtils`**

## Table of contents

### Constructors

- [constructor](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#constructor)

### Properties

- [\_deployedPromise](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#_deployedpromise)
- [\_runningEvents](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#_runningevents)
- [\_wrappedEmits](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#_wrappedemits)
- [address](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#address)
- [callStatic](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#callstatic)
- [deployTransaction](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#deploytransaction)
- [estimateGas](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#estimategas)
- [filters](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#filters)
- [functions](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#functions)
- [interface](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#interface)
- [populateTransaction](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#populatetransaction)
- [provider](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#provider)
- [resolvedAddress](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#resolvedaddress)
- [signer](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#_checkrunningevents)
- [\_deployed](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#_deployed)
- [\_wrapEvent](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#_wrapevent)
- [attach](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#attach)
- [connect](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#connect)
- [deployed](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#deployed)
- [depositEth](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#depositeth)
- [depositEth(address,address)](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#depositeth(address,address))
- [emit](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#emit)
- [fallback](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#fallback)
- [listenerCount](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#listenercount)
- [listeners](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#listeners)
- [off](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#off)
- [on](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#on)
- [once](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#once)
- [queryFilter](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#queryfilter)
- [removeAllListeners](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#removealllisteners)
- [removeListener](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#removelistener)
- [savingsAccount](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#savingsaccount)
- [savingsAccount()](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#savingsaccount())
- [weth](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#weth)
- [weth()](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#weth())
- [getContractAddress](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#getcontractaddress)
- [getInterface](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#getinterface)
- [isIndexed](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md#isindexed)

## Constructors

### constructor

• **new SavingsAccountEthUtils**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `depositEth` | (`_strategy`: `string`, `_to`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `depositEth(address,address)` | (`_strategy`: `string`, `_to`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `savingsAccount` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `savingsAccount()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `weth` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `weth()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/SavingsAccountEthUtils.d.ts:125](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccountEthUtils.d.ts#L125)

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
| `depositEth` | (`_strategy`: `string`, `_to`: `string`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `depositEth(address,address)` | (`_strategy`: `string`, `_to`: `string`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `savingsAccount` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `savingsAccount()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `weth` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `weth()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/SavingsAccountEthUtils.d.ts:141](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccountEthUtils.d.ts#L141)

___

### filters

• **filters**: `Object`

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/SavingsAccountEthUtils.d.ts:139](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccountEthUtils.d.ts#L139)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `depositEth` | (`_strategy`: `string`, `_to`: `string`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `depositEth(address,address)` | (`_strategy`: `string`, `_to`: `string`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `savingsAccount` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `savingsAccount()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `weth` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `weth()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/SavingsAccountEthUtils.d.ts:83](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccountEthUtils.d.ts#L83)

___

### interface

• **interface**: [`SavingsAccountEthUtilsInterface`](../interfaces/wrappers_SavingsAccountEthUtils.SavingsAccountEthUtilsInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/SavingsAccountEthUtils.d.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccountEthUtils.d.ts#L81)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `depositEth` | (`_strategy`: `string`, `_to`: `string`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `depositEth(address,address)` | (`_strategy`: `string`, `_to`: `string`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `savingsAccount` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `savingsAccount()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `weth` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `weth()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/SavingsAccountEthUtils.d.ts:159](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccountEthUtils.d.ts#L159)

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

▸ **attach**(`addressOrName`): [`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/SavingsAccountEthUtils.d.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccountEthUtils.d.ts#L42)

___

### connect

▸ **connect**(`signerOrProvider`): [`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/SavingsAccountEthUtils.d.ts:41](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccountEthUtils.d.ts#L41)

___

### deployed

▸ **deployed**(): `Promise`<[`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)\>

#### Returns

`Promise`<[`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/SavingsAccountEthUtils.d.ts:43](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccountEthUtils.d.ts#L43)

___

### depositEth

▸ **depositEth**(`_strategy`, `_to`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_strategy` | `string` |
| `_to` | `string` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SavingsAccountEthUtils.d.ts:105](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccountEthUtils.d.ts#L105)

___

### depositEth(address,address)

▸ **depositEth(address,address)**(`_strategy`, `_to`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_strategy` | `string` |
| `_to` | `string` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SavingsAccountEthUtils.d.ts:111](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccountEthUtils.d.ts#L111)

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

[src/wrappers/SavingsAccountEthUtils.d.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccountEthUtils.d.ts#L45)

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

[src/wrappers/SavingsAccountEthUtils.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccountEthUtils.d.ts#L68)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)

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

[`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/SavingsAccountEthUtils.d.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccountEthUtils.d.ts#L48)

▸ **off**(`eventName`, `listener`): [`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/SavingsAccountEthUtils.d.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccountEthUtils.d.ts#L69)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)

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

[`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/SavingsAccountEthUtils.d.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccountEthUtils.d.ts#L52)

▸ **on**(`eventName`, `listener`): [`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/SavingsAccountEthUtils.d.ts:70](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccountEthUtils.d.ts#L70)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)

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

[`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/SavingsAccountEthUtils.d.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccountEthUtils.d.ts#L56)

▸ **once**(`eventName`, `listener`): [`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/SavingsAccountEthUtils.d.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccountEthUtils.d.ts#L71)

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

[src/wrappers/SavingsAccountEthUtils.d.ts:75](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccountEthUtils.d.ts#L75)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)

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

[`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/SavingsAccountEthUtils.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccountEthUtils.d.ts#L64)

▸ **removeAllListeners**(`eventName?`): [`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/SavingsAccountEthUtils.d.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccountEthUtils.d.ts#L73)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)

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

[`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/SavingsAccountEthUtils.d.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccountEthUtils.d.ts#L60)

▸ **removeListener**(`eventName`, `listener`): [`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/SavingsAccountEthUtils.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccountEthUtils.d.ts#L72)

___

### savingsAccount

▸ **savingsAccount**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/SavingsAccountEthUtils.d.ts:117](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccountEthUtils.d.ts#L117)

___

### savingsAccount()

▸ **savingsAccount()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/SavingsAccountEthUtils.d.ts:119](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccountEthUtils.d.ts#L119)

___

### weth

▸ **weth**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/SavingsAccountEthUtils.d.ts:121](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccountEthUtils.d.ts#L121)

___

### weth()

▸ **weth()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/SavingsAccountEthUtils.d.ts:123](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccountEthUtils.d.ts#L123)

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
