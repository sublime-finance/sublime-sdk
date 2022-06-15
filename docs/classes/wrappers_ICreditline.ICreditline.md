[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/ICreditline](../modules/wrappers_ICreditline.md) / ICreditline

# Class: ICreditline

[wrappers/ICreditline](../modules/wrappers_ICreditline.md).ICreditline

## Hierarchy

- `Contract`

  ↳ **`ICreditline`**

## Table of contents

### Constructors

- [constructor](wrappers_ICreditline.ICreditline.md#constructor)

### Properties

- [\_deployedPromise](wrappers_ICreditline.ICreditline.md#_deployedpromise)
- [\_runningEvents](wrappers_ICreditline.ICreditline.md#_runningevents)
- [\_wrappedEmits](wrappers_ICreditline.ICreditline.md#_wrappedemits)
- [address](wrappers_ICreditline.ICreditline.md#address)
- [callStatic](wrappers_ICreditline.ICreditline.md#callstatic)
- [deployTransaction](wrappers_ICreditline.ICreditline.md#deploytransaction)
- [estimateGas](wrappers_ICreditline.ICreditline.md#estimategas)
- [filters](wrappers_ICreditline.ICreditline.md#filters)
- [functions](wrappers_ICreditline.ICreditline.md#functions)
- [interface](wrappers_ICreditline.ICreditline.md#interface)
- [populateTransaction](wrappers_ICreditline.ICreditline.md#populatetransaction)
- [provider](wrappers_ICreditline.ICreditline.md#provider)
- [resolvedAddress](wrappers_ICreditline.ICreditline.md#resolvedaddress)
- [signer](wrappers_ICreditline.ICreditline.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_ICreditline.ICreditline.md#_checkrunningevents)
- [\_deployed](wrappers_ICreditline.ICreditline.md#_deployed)
- [\_wrapEvent](wrappers_ICreditline.ICreditline.md#_wrapevent)
- [attach](wrappers_ICreditline.ICreditline.md#attach)
- [connect](wrappers_ICreditline.ICreditline.md#connect)
- [deployed](wrappers_ICreditline.ICreditline.md#deployed)
- [depositCollateral](wrappers_ICreditline.ICreditline.md#depositcollateral)
- [depositCollateral(uint256,uint256,bool)](wrappers_ICreditline.ICreditline.md#depositcollateral(uint256,uint256,bool))
- [emit](wrappers_ICreditline.ICreditline.md#emit)
- [fallback](wrappers_ICreditline.ICreditline.md#fallback)
- [listenerCount](wrappers_ICreditline.ICreditline.md#listenercount)
- [listeners](wrappers_ICreditline.ICreditline.md#listeners)
- [off](wrappers_ICreditline.ICreditline.md#off)
- [on](wrappers_ICreditline.ICreditline.md#on)
- [once](wrappers_ICreditline.ICreditline.md#once)
- [queryFilter](wrappers_ICreditline.ICreditline.md#queryfilter)
- [removeAllListeners](wrappers_ICreditline.ICreditline.md#removealllisteners)
- [removeListener](wrappers_ICreditline.ICreditline.md#removelistener)
- [repay](wrappers_ICreditline.ICreditline.md#repay)
- [repay(uint256,uint256)](wrappers_ICreditline.ICreditline.md#repay(uint256,uint256))
- [getContractAddress](wrappers_ICreditline.ICreditline.md#getcontractaddress)
- [getInterface](wrappers_ICreditline.ICreditline.md#getinterface)
- [isIndexed](wrappers_ICreditline.ICreditline.md#isindexed)

## Constructors

### constructor

• **new ICreditline**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `depositCollateral` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_fromSavingsAccount`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `depositCollateral(uint256,uint256,bool)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_fromSavingsAccount`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `repay` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `repay(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/ICreditline.d.ts:134](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ICreditline.d.ts#L134)

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
| `depositCollateral` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_fromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `depositCollateral(uint256,uint256,bool)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_fromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `repay` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `repay(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/ICreditline.d.ts:151](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ICreditline.d.ts#L151)

___

### filters

• **filters**: `Object`

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/ICreditline.d.ts:149](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ICreditline.d.ts#L149)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `depositCollateral` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_fromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `depositCollateral(uint256,uint256,bool)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_fromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `repay` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `repay(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/ICreditline.d.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ICreditline.d.ts#L80)

___

### interface

• **interface**: [`ICreditlineInterface`](../interfaces/wrappers_ICreditline.ICreditlineInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/ICreditline.d.ts:78](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ICreditline.d.ts#L78)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `depositCollateral` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_fromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `depositCollateral(uint256,uint256,bool)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_fromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `repay` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `repay(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/ICreditline.d.ts:175](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ICreditline.d.ts#L175)

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

▸ **attach**(`addressOrName`): [`ICreditline`](wrappers_ICreditline.ICreditline.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`ICreditline`](wrappers_ICreditline.ICreditline.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/ICreditline.d.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ICreditline.d.ts#L39)

___

### connect

▸ **connect**(`signerOrProvider`): [`ICreditline`](wrappers_ICreditline.ICreditline.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`ICreditline`](wrappers_ICreditline.ICreditline.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/ICreditline.d.ts:38](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ICreditline.d.ts#L38)

___

### deployed

▸ **deployed**(): `Promise`<[`ICreditline`](wrappers_ICreditline.ICreditline.md)\>

#### Returns

`Promise`<[`ICreditline`](wrappers_ICreditline.ICreditline.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/ICreditline.d.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ICreditline.d.ts#L40)

___

### depositCollateral

▸ **depositCollateral**(`_id`, `_amount`, `_fromSavingsAccount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_amount` | `BigNumberish` |
| `_fromSavingsAccount` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ICreditline.d.ts:108](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ICreditline.d.ts#L108)

___

### depositCollateral(uint256,uint256,bool)

▸ **depositCollateral(uint256,uint256,bool)**(`_id`, `_amount`, `_fromSavingsAccount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_amount` | `BigNumberish` |
| `_fromSavingsAccount` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ICreditline.d.ts:115](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ICreditline.d.ts#L115)

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

[src/wrappers/ICreditline.d.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ICreditline.d.ts#L42)

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

[src/wrappers/ICreditline.d.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ICreditline.d.ts#L65)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ICreditline`](wrappers_ICreditline.ICreditline.md)

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

[`ICreditline`](wrappers_ICreditline.ICreditline.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/ICreditline.d.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ICreditline.d.ts#L45)

▸ **off**(`eventName`, `listener`): [`ICreditline`](wrappers_ICreditline.ICreditline.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ICreditline`](wrappers_ICreditline.ICreditline.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/ICreditline.d.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ICreditline.d.ts#L66)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ICreditline`](wrappers_ICreditline.ICreditline.md)

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

[`ICreditline`](wrappers_ICreditline.ICreditline.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/ICreditline.d.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ICreditline.d.ts#L49)

▸ **on**(`eventName`, `listener`): [`ICreditline`](wrappers_ICreditline.ICreditline.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ICreditline`](wrappers_ICreditline.ICreditline.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/ICreditline.d.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ICreditline.d.ts#L67)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ICreditline`](wrappers_ICreditline.ICreditline.md)

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

[`ICreditline`](wrappers_ICreditline.ICreditline.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/ICreditline.d.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ICreditline.d.ts#L53)

▸ **once**(`eventName`, `listener`): [`ICreditline`](wrappers_ICreditline.ICreditline.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ICreditline`](wrappers_ICreditline.ICreditline.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/ICreditline.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ICreditline.d.ts#L68)

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

[src/wrappers/ICreditline.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ICreditline.d.ts#L72)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`ICreditline`](wrappers_ICreditline.ICreditline.md)

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

[`ICreditline`](wrappers_ICreditline.ICreditline.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/ICreditline.d.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ICreditline.d.ts#L61)

▸ **removeAllListeners**(`eventName?`): [`ICreditline`](wrappers_ICreditline.ICreditline.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`ICreditline`](wrappers_ICreditline.ICreditline.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/ICreditline.d.ts:70](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ICreditline.d.ts#L70)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ICreditline`](wrappers_ICreditline.ICreditline.md)

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

[`ICreditline`](wrappers_ICreditline.ICreditline.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/ICreditline.d.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ICreditline.d.ts#L57)

▸ **removeListener**(`eventName`, `listener`): [`ICreditline`](wrappers_ICreditline.ICreditline.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ICreditline`](wrappers_ICreditline.ICreditline.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/ICreditline.d.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ICreditline.d.ts#L69)

___

### repay

▸ **repay**(`_id`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ICreditline.d.ts:122](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ICreditline.d.ts#L122)

___

### repay(uint256,uint256)

▸ **repay(uint256,uint256)**(`_id`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ICreditline.d.ts:128](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ICreditline.d.ts#L128)

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
