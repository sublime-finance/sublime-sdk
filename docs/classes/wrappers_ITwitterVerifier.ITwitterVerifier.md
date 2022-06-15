[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/ITwitterVerifier](../modules/wrappers_ITwitterVerifier.md) / ITwitterVerifier

# Class: ITwitterVerifier

[wrappers/ITwitterVerifier](../modules/wrappers_ITwitterVerifier.md).ITwitterVerifier

## Hierarchy

- `Contract`

  ↳ **`ITwitterVerifier`**

## Table of contents

### Constructors

- [constructor](wrappers_ITwitterVerifier.ITwitterVerifier.md#constructor)

### Properties

- [\_deployedPromise](wrappers_ITwitterVerifier.ITwitterVerifier.md#_deployedpromise)
- [\_runningEvents](wrappers_ITwitterVerifier.ITwitterVerifier.md#_runningevents)
- [\_wrappedEmits](wrappers_ITwitterVerifier.ITwitterVerifier.md#_wrappedemits)
- [address](wrappers_ITwitterVerifier.ITwitterVerifier.md#address)
- [callStatic](wrappers_ITwitterVerifier.ITwitterVerifier.md#callstatic)
- [deployTransaction](wrappers_ITwitterVerifier.ITwitterVerifier.md#deploytransaction)
- [estimateGas](wrappers_ITwitterVerifier.ITwitterVerifier.md#estimategas)
- [filters](wrappers_ITwitterVerifier.ITwitterVerifier.md#filters)
- [functions](wrappers_ITwitterVerifier.ITwitterVerifier.md#functions)
- [interface](wrappers_ITwitterVerifier.ITwitterVerifier.md#interface)
- [populateTransaction](wrappers_ITwitterVerifier.ITwitterVerifier.md#populatetransaction)
- [provider](wrappers_ITwitterVerifier.ITwitterVerifier.md#provider)
- [resolvedAddress](wrappers_ITwitterVerifier.ITwitterVerifier.md#resolvedaddress)
- [signer](wrappers_ITwitterVerifier.ITwitterVerifier.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_ITwitterVerifier.ITwitterVerifier.md#_checkrunningevents)
- [\_deployed](wrappers_ITwitterVerifier.ITwitterVerifier.md#_deployed)
- [\_wrapEvent](wrappers_ITwitterVerifier.ITwitterVerifier.md#_wrapevent)
- [attach](wrappers_ITwitterVerifier.ITwitterVerifier.md#attach)
- [connect](wrappers_ITwitterVerifier.ITwitterVerifier.md#connect)
- [deployed](wrappers_ITwitterVerifier.ITwitterVerifier.md#deployed)
- [emit](wrappers_ITwitterVerifier.ITwitterVerifier.md#emit)
- [fallback](wrappers_ITwitterVerifier.ITwitterVerifier.md#fallback)
- [listenerCount](wrappers_ITwitterVerifier.ITwitterVerifier.md#listenercount)
- [listeners](wrappers_ITwitterVerifier.ITwitterVerifier.md#listeners)
- [off](wrappers_ITwitterVerifier.ITwitterVerifier.md#off)
- [on](wrappers_ITwitterVerifier.ITwitterVerifier.md#on)
- [once](wrappers_ITwitterVerifier.ITwitterVerifier.md#once)
- [queryFilter](wrappers_ITwitterVerifier.ITwitterVerifier.md#queryfilter)
- [registerSelf](wrappers_ITwitterVerifier.ITwitterVerifier.md#registerself)
- [registerSelf(bool,uint8,bytes32,bytes32,string,uint256)](wrappers_ITwitterVerifier.ITwitterVerifier.md#registerself(bool,uint8,bytes32,bytes32,string,uint256))
- [removeAllListeners](wrappers_ITwitterVerifier.ITwitterVerifier.md#removealllisteners)
- [removeListener](wrappers_ITwitterVerifier.ITwitterVerifier.md#removelistener)
- [unregisterSelf](wrappers_ITwitterVerifier.ITwitterVerifier.md#unregisterself)
- [unregisterSelf()](wrappers_ITwitterVerifier.ITwitterVerifier.md#unregisterself())
- [getContractAddress](wrappers_ITwitterVerifier.ITwitterVerifier.md#getcontractaddress)
- [getInterface](wrappers_ITwitterVerifier.ITwitterVerifier.md#getinterface)
- [isIndexed](wrappers_ITwitterVerifier.ITwitterVerifier.md#isindexed)

## Constructors

### constructor

• **new ITwitterVerifier**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `registerSelf` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_twitterId`: `string`, `_deadline`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerSelf(bool,uint8,bytes32,bytes32,string,uint256)` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_twitterId`: `string`, `_deadline`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unregisterSelf` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unregisterSelf()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/ITwitterVerifier.d.ts:130](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ITwitterVerifier.d.ts#L130)

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
| `registerSelf` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_twitterId`: `string`, `_deadline`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `registerSelf(bool,uint8,bytes32,bytes32,string,uint256)` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_twitterId`: `string`, `_deadline`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unregisterSelf` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unregisterSelf()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/ITwitterVerifier.d.ts:158](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ITwitterVerifier.d.ts#L158)

___

### filters

• **filters**: `Object`

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/ITwitterVerifier.d.ts:156](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ITwitterVerifier.d.ts#L156)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `registerSelf` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_twitterId`: `string`, `_deadline`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registerSelf(bool,uint8,bytes32,bytes32,string,uint256)` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_twitterId`: `string`, `_deadline`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unregisterSelf` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unregisterSelf()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/ITwitterVerifier.d.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ITwitterVerifier.d.ts#L80)

___

### interface

• **interface**: [`ITwitterVerifierInterface`](../interfaces/wrappers_ITwitterVerifier.ITwitterVerifierInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/ITwitterVerifier.d.ts:78](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ITwitterVerifier.d.ts#L78)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `registerSelf` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_twitterId`: `string`, `_deadline`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registerSelf(bool,uint8,bytes32,bytes32,string,uint256)` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_twitterId`: `string`, `_deadline`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unregisterSelf` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unregisterSelf()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/ITwitterVerifier.d.ts:184](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ITwitterVerifier.d.ts#L184)

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

▸ **attach**(`addressOrName`): [`ITwitterVerifier`](wrappers_ITwitterVerifier.ITwitterVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`ITwitterVerifier`](wrappers_ITwitterVerifier.ITwitterVerifier.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/ITwitterVerifier.d.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ITwitterVerifier.d.ts#L39)

___

### connect

▸ **connect**(`signerOrProvider`): [`ITwitterVerifier`](wrappers_ITwitterVerifier.ITwitterVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`ITwitterVerifier`](wrappers_ITwitterVerifier.ITwitterVerifier.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/ITwitterVerifier.d.ts:38](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ITwitterVerifier.d.ts#L38)

___

### deployed

▸ **deployed**(): `Promise`<[`ITwitterVerifier`](wrappers_ITwitterVerifier.ITwitterVerifier.md)\>

#### Returns

`Promise`<[`ITwitterVerifier`](wrappers_ITwitterVerifier.ITwitterVerifier.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/ITwitterVerifier.d.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ITwitterVerifier.d.ts#L40)

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

[src/wrappers/ITwitterVerifier.d.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ITwitterVerifier.d.ts#L42)

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

[src/wrappers/ITwitterVerifier.d.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ITwitterVerifier.d.ts#L65)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ITwitterVerifier`](wrappers_ITwitterVerifier.ITwitterVerifier.md)

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

[`ITwitterVerifier`](wrappers_ITwitterVerifier.ITwitterVerifier.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/ITwitterVerifier.d.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ITwitterVerifier.d.ts#L45)

▸ **off**(`eventName`, `listener`): [`ITwitterVerifier`](wrappers_ITwitterVerifier.ITwitterVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ITwitterVerifier`](wrappers_ITwitterVerifier.ITwitterVerifier.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/ITwitterVerifier.d.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ITwitterVerifier.d.ts#L66)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ITwitterVerifier`](wrappers_ITwitterVerifier.ITwitterVerifier.md)

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

[`ITwitterVerifier`](wrappers_ITwitterVerifier.ITwitterVerifier.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/ITwitterVerifier.d.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ITwitterVerifier.d.ts#L49)

▸ **on**(`eventName`, `listener`): [`ITwitterVerifier`](wrappers_ITwitterVerifier.ITwitterVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ITwitterVerifier`](wrappers_ITwitterVerifier.ITwitterVerifier.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/ITwitterVerifier.d.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ITwitterVerifier.d.ts#L67)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ITwitterVerifier`](wrappers_ITwitterVerifier.ITwitterVerifier.md)

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

[`ITwitterVerifier`](wrappers_ITwitterVerifier.ITwitterVerifier.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/ITwitterVerifier.d.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ITwitterVerifier.d.ts#L53)

▸ **once**(`eventName`, `listener`): [`ITwitterVerifier`](wrappers_ITwitterVerifier.ITwitterVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ITwitterVerifier`](wrappers_ITwitterVerifier.ITwitterVerifier.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/ITwitterVerifier.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ITwitterVerifier.d.ts#L68)

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

[src/wrappers/ITwitterVerifier.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ITwitterVerifier.d.ts#L72)

___

### registerSelf

▸ **registerSelf**(`_isMasterLinked`, `_v`, `_r`, `_s`, `_twitterId`, `_deadline`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_isMasterLinked` | `boolean` |
| `_v` | `BigNumberish` |
| `_r` | `BytesLike` |
| `_s` | `BytesLike` |
| `_twitterId` | `string` |
| `_deadline` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ITwitterVerifier.d.ts:106](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ITwitterVerifier.d.ts#L106)

___

### registerSelf(bool,uint8,bytes32,bytes32,string,uint256)

▸ **registerSelf(bool,uint8,bytes32,bytes32,string,uint256)**(`_isMasterLinked`, `_v`, `_r`, `_s`, `_twitterId`, `_deadline`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_isMasterLinked` | `boolean` |
| `_v` | `BigNumberish` |
| `_r` | `BytesLike` |
| `_s` | `BytesLike` |
| `_twitterId` | `string` |
| `_deadline` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ITwitterVerifier.d.ts:116](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ITwitterVerifier.d.ts#L116)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`ITwitterVerifier`](wrappers_ITwitterVerifier.ITwitterVerifier.md)

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

[`ITwitterVerifier`](wrappers_ITwitterVerifier.ITwitterVerifier.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/ITwitterVerifier.d.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ITwitterVerifier.d.ts#L61)

▸ **removeAllListeners**(`eventName?`): [`ITwitterVerifier`](wrappers_ITwitterVerifier.ITwitterVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`ITwitterVerifier`](wrappers_ITwitterVerifier.ITwitterVerifier.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/ITwitterVerifier.d.ts:70](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ITwitterVerifier.d.ts#L70)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ITwitterVerifier`](wrappers_ITwitterVerifier.ITwitterVerifier.md)

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

[`ITwitterVerifier`](wrappers_ITwitterVerifier.ITwitterVerifier.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/ITwitterVerifier.d.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ITwitterVerifier.d.ts#L57)

▸ **removeListener**(`eventName`, `listener`): [`ITwitterVerifier`](wrappers_ITwitterVerifier.ITwitterVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ITwitterVerifier`](wrappers_ITwitterVerifier.ITwitterVerifier.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/ITwitterVerifier.d.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ITwitterVerifier.d.ts#L69)

___

### unregisterSelf

▸ **unregisterSelf**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ITwitterVerifier.d.ts:126](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ITwitterVerifier.d.ts#L126)

___

### unregisterSelf()

▸ **unregisterSelf()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ITwitterVerifier.d.ts:128](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ITwitterVerifier.d.ts#L128)

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
