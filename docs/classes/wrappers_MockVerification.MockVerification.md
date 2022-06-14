[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/MockVerification](../modules/wrappers_MockVerification.md) / MockVerification

# Class: MockVerification

[wrappers/MockVerification](../modules/wrappers_MockVerification.md).MockVerification

## Hierarchy

- `Contract`

  ↳ **`MockVerification`**

## Table of contents

### Constructors

- [constructor](wrappers_MockVerification.MockVerification.md#constructor)

### Properties

- [\_deployedPromise](wrappers_MockVerification.MockVerification.md#_deployedpromise)
- [\_runningEvents](wrappers_MockVerification.MockVerification.md#_runningevents)
- [\_wrappedEmits](wrappers_MockVerification.MockVerification.md#_wrappedemits)
- [address](wrappers_MockVerification.MockVerification.md#address)
- [callStatic](wrappers_MockVerification.MockVerification.md#callstatic)
- [deployTransaction](wrappers_MockVerification.MockVerification.md#deploytransaction)
- [estimateGas](wrappers_MockVerification.MockVerification.md#estimategas)
- [filters](wrappers_MockVerification.MockVerification.md#filters)
- [functions](wrappers_MockVerification.MockVerification.md#functions)
- [interface](wrappers_MockVerification.MockVerification.md#interface)
- [populateTransaction](wrappers_MockVerification.MockVerification.md#populatetransaction)
- [provider](wrappers_MockVerification.MockVerification.md#provider)
- [resolvedAddress](wrappers_MockVerification.MockVerification.md#resolvedaddress)
- [signer](wrappers_MockVerification.MockVerification.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_MockVerification.MockVerification.md#_checkrunningevents)
- [\_deployed](wrappers_MockVerification.MockVerification.md#_deployed)
- [\_wrapEvent](wrappers_MockVerification.MockVerification.md#_wrapevent)
- [addUser](wrappers_MockVerification.MockVerification.md#adduser)
- [addUser(address,address)](wrappers_MockVerification.MockVerification.md#adduser(address,address))
- [attach](wrappers_MockVerification.MockVerification.md#attach)
- [connect](wrappers_MockVerification.MockVerification.md#connect)
- [deployed](wrappers_MockVerification.MockVerification.md#deployed)
- [emit](wrappers_MockVerification.MockVerification.md#emit)
- [fallback](wrappers_MockVerification.MockVerification.md#fallback)
- [isUser](wrappers_MockVerification.MockVerification.md#isuser)
- [isUser(address,address)](wrappers_MockVerification.MockVerification.md#isuser(address,address))
- [listenerCount](wrappers_MockVerification.MockVerification.md#listenercount)
- [listeners](wrappers_MockVerification.MockVerification.md#listeners)
- [off](wrappers_MockVerification.MockVerification.md#off)
- [on](wrappers_MockVerification.MockVerification.md#on)
- [once](wrappers_MockVerification.MockVerification.md#once)
- [queryFilter](wrappers_MockVerification.MockVerification.md#queryfilter)
- [removeAllListeners](wrappers_MockVerification.MockVerification.md#removealllisteners)
- [removeListener](wrappers_MockVerification.MockVerification.md#removelistener)
- [removeUser](wrappers_MockVerification.MockVerification.md#removeuser)
- [removeUser(address,address)](wrappers_MockVerification.MockVerification.md#removeuser(address,address))
- [getContractAddress](wrappers_MockVerification.MockVerification.md#getcontractaddress)
- [getInterface](wrappers_MockVerification.MockVerification.md#getinterface)
- [isIndexed](wrappers_MockVerification.MockVerification.md#isindexed)

## Constructors

### constructor

• **new MockVerification**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `addUser` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `addUser(address,address)` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `isUser` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `isUser(address,address)` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `removeUser` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `removeUser(address,address)` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/MockVerification.d.ts:125](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockVerification.d.ts#L125)

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
| `addUser` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `addUser(address,address)` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `isUser` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isUser(address,address)` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `removeUser` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `removeUser(address,address)` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/MockVerification.d.ts:141](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockVerification.d.ts#L141)

___

### filters

• **filters**: `Object`

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/MockVerification.d.ts:139](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockVerification.d.ts#L139)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addUser` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `addUser(address,address)` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `isUser` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `isUser(address,address)` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `removeUser` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `removeUser(address,address)` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/MockVerification.d.ts:83](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockVerification.d.ts#L83)

___

### interface

• **interface**: [`MockVerificationInterface`](../interfaces/wrappers_MockVerification.MockVerificationInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/MockVerification.d.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockVerification.d.ts#L81)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addUser` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `addUser(address,address)` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `isUser` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isUser(address,address)` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `removeUser` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `removeUser(address,address)` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/MockVerification.d.ts:163](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockVerification.d.ts#L163)

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

### addUser

▸ **addUser**(`_user`, `_verifier`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_verifier` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockVerification.d.ts:105](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockVerification.d.ts#L105)

___

### addUser(address,address)

▸ **addUser(address,address)**(`_user`, `_verifier`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_verifier` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockVerification.d.ts:107](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockVerification.d.ts#L107)

___

### attach

▸ **attach**(`addressOrName`): [`MockVerification`](wrappers_MockVerification.MockVerification.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`MockVerification`](wrappers_MockVerification.MockVerification.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/MockVerification.d.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockVerification.d.ts#L42)

___

### connect

▸ **connect**(`signerOrProvider`): [`MockVerification`](wrappers_MockVerification.MockVerification.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`MockVerification`](wrappers_MockVerification.MockVerification.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/MockVerification.d.ts:41](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockVerification.d.ts#L41)

___

### deployed

▸ **deployed**(): `Promise`<[`MockVerification`](wrappers_MockVerification.MockVerification.md)\>

#### Returns

`Promise`<[`MockVerification`](wrappers_MockVerification.MockVerification.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/MockVerification.d.ts:43](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockVerification.d.ts#L43)

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

### isUser

▸ **isUser**(`arg0`, `arg1`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/MockVerification.d.ts:113](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockVerification.d.ts#L113)

___

### isUser(address,address)

▸ **isUser(address,address)**(`arg0`, `arg1`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/MockVerification.d.ts:115](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockVerification.d.ts#L115)

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

[src/wrappers/MockVerification.d.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockVerification.d.ts#L45)

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

[src/wrappers/MockVerification.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockVerification.d.ts#L68)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockVerification`](wrappers_MockVerification.MockVerification.md)

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

[`MockVerification`](wrappers_MockVerification.MockVerification.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/MockVerification.d.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockVerification.d.ts#L48)

▸ **off**(`eventName`, `listener`): [`MockVerification`](wrappers_MockVerification.MockVerification.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockVerification`](wrappers_MockVerification.MockVerification.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/MockVerification.d.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockVerification.d.ts#L69)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockVerification`](wrappers_MockVerification.MockVerification.md)

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

[`MockVerification`](wrappers_MockVerification.MockVerification.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/MockVerification.d.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockVerification.d.ts#L52)

▸ **on**(`eventName`, `listener`): [`MockVerification`](wrappers_MockVerification.MockVerification.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockVerification`](wrappers_MockVerification.MockVerification.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/MockVerification.d.ts:70](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockVerification.d.ts#L70)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockVerification`](wrappers_MockVerification.MockVerification.md)

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

[`MockVerification`](wrappers_MockVerification.MockVerification.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/MockVerification.d.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockVerification.d.ts#L56)

▸ **once**(`eventName`, `listener`): [`MockVerification`](wrappers_MockVerification.MockVerification.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockVerification`](wrappers_MockVerification.MockVerification.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/MockVerification.d.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockVerification.d.ts#L71)

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

[src/wrappers/MockVerification.d.ts:75](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockVerification.d.ts#L75)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`MockVerification`](wrappers_MockVerification.MockVerification.md)

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

[`MockVerification`](wrappers_MockVerification.MockVerification.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/MockVerification.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockVerification.d.ts#L64)

▸ **removeAllListeners**(`eventName?`): [`MockVerification`](wrappers_MockVerification.MockVerification.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`MockVerification`](wrappers_MockVerification.MockVerification.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/MockVerification.d.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockVerification.d.ts#L73)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockVerification`](wrappers_MockVerification.MockVerification.md)

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

[`MockVerification`](wrappers_MockVerification.MockVerification.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/MockVerification.d.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockVerification.d.ts#L60)

▸ **removeListener**(`eventName`, `listener`): [`MockVerification`](wrappers_MockVerification.MockVerification.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockVerification`](wrappers_MockVerification.MockVerification.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/MockVerification.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockVerification.d.ts#L72)

___

### removeUser

▸ **removeUser**(`_user`, `_verifier`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_verifier` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockVerification.d.ts:117](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockVerification.d.ts#L117)

___

### removeUser(address,address)

▸ **removeUser(address,address)**(`_user`, `_verifier`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_verifier` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockVerification.d.ts:119](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockVerification.d.ts#L119)

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
