[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/IUniswapV3PoolOwnerActions](../modules/wrappers_IUniswapV3PoolOwnerActions.md) / IUniswapV3PoolOwnerActions

# Class: IUniswapV3PoolOwnerActions

[wrappers/IUniswapV3PoolOwnerActions](../modules/wrappers_IUniswapV3PoolOwnerActions.md).IUniswapV3PoolOwnerActions

## Hierarchy

- `Contract`

  ↳ **`IUniswapV3PoolOwnerActions`**

## Table of contents

### Constructors

- [constructor](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#constructor)

### Properties

- [\_deployedPromise](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#_deployedpromise)
- [\_runningEvents](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#_runningevents)
- [\_wrappedEmits](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#_wrappedemits)
- [address](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#address)
- [callStatic](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#callstatic)
- [deployTransaction](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#deploytransaction)
- [estimateGas](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#estimategas)
- [filters](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#filters)
- [functions](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#functions)
- [interface](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#interface)
- [populateTransaction](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#populatetransaction)
- [provider](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#provider)
- [resolvedAddress](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#resolvedaddress)
- [signer](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#_checkrunningevents)
- [\_deployed](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#_deployed)
- [\_wrapEvent](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#_wrapevent)
- [attach](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#attach)
- [collectProtocol](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#collectprotocol)
- [collectProtocol(address,uint128,uint128)](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#collectprotocol(address,uint128,uint128))
- [connect](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#connect)
- [deployed](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#deployed)
- [emit](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#emit)
- [fallback](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#fallback)
- [listenerCount](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#listenercount)
- [listeners](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#listeners)
- [off](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#off)
- [on](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#on)
- [once](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#once)
- [queryFilter](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#queryfilter)
- [removeAllListeners](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#removealllisteners)
- [removeListener](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#removelistener)
- [setFeeProtocol](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#setfeeprotocol)
- [setFeeProtocol(uint8,uint8)](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#setfeeprotocol(uint8,uint8))
- [getContractAddress](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#getcontractaddress)
- [getInterface](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#getinterface)
- [isIndexed](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md#isindexed)

## Constructors

### constructor

• **new IUniswapV3PoolOwnerActions**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `collectProtocol` | (`recipient`: `string`, `amount0Requested`: `BigNumberish`, `amount1Requested`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `amount0`: `BigNumber` ; `amount1`: `BigNumber`  }\> |
| `collectProtocol(address,uint128,uint128)` | (`recipient`: `string`, `amount0Requested`: `BigNumberish`, `amount1Requested`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `amount0`: `BigNumber` ; `amount1`: `BigNumber`  }\> |
| `setFeeProtocol` | (`feeProtocol0`: `BigNumberish`, `feeProtocol1`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setFeeProtocol(uint8,uint8)` | (`feeProtocol0`: `BigNumberish`, `feeProtocol1`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/IUniswapV3PoolOwnerActions.d.ts:134](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IUniswapV3PoolOwnerActions.d.ts#L134)

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
| `collectProtocol` | (`recipient`: `string`, `amount0Requested`: `BigNumberish`, `amount1Requested`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `collectProtocol(address,uint128,uint128)` | (`recipient`: `string`, `amount0Requested`: `BigNumberish`, `amount1Requested`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setFeeProtocol` | (`feeProtocol0`: `BigNumberish`, `feeProtocol1`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setFeeProtocol(uint8,uint8)` | (`feeProtocol0`: `BigNumberish`, `feeProtocol1`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/IUniswapV3PoolOwnerActions.d.ts:156](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IUniswapV3PoolOwnerActions.d.ts#L156)

___

### filters

• **filters**: `Object`

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/IUniswapV3PoolOwnerActions.d.ts:154](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IUniswapV3PoolOwnerActions.d.ts#L154)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `collectProtocol` | (`recipient`: `string`, `amount0Requested`: `BigNumberish`, `amount1Requested`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `collectProtocol(address,uint128,uint128)` | (`recipient`: `string`, `amount0Requested`: `BigNumberish`, `amount1Requested`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setFeeProtocol` | (`feeProtocol0`: `BigNumberish`, `feeProtocol1`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setFeeProtocol(uint8,uint8)` | (`feeProtocol0`: `BigNumberish`, `feeProtocol1`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/IUniswapV3PoolOwnerActions.d.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IUniswapV3PoolOwnerActions.d.ts#L80)

___

### interface

• **interface**: [`IUniswapV3PoolOwnerActionsInterface`](../interfaces/wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActionsInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/IUniswapV3PoolOwnerActions.d.ts:78](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IUniswapV3PoolOwnerActions.d.ts#L78)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `collectProtocol` | (`recipient`: `string`, `amount0Requested`: `BigNumberish`, `amount1Requested`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `collectProtocol(address,uint128,uint128)` | (`recipient`: `string`, `amount0Requested`: `BigNumberish`, `amount1Requested`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setFeeProtocol` | (`feeProtocol0`: `BigNumberish`, `feeProtocol1`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setFeeProtocol(uint8,uint8)` | (`feeProtocol0`: `BigNumberish`, `feeProtocol1`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/IUniswapV3PoolOwnerActions.d.ts:184](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IUniswapV3PoolOwnerActions.d.ts#L184)

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

▸ **attach**(`addressOrName`): [`IUniswapV3PoolOwnerActions`](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IUniswapV3PoolOwnerActions`](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/IUniswapV3PoolOwnerActions.d.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IUniswapV3PoolOwnerActions.d.ts#L39)

___

### collectProtocol

▸ **collectProtocol**(`recipient`, `amount0Requested`, `amount1Requested`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipient` | `string` |
| `amount0Requested` | `BigNumberish` |
| `amount1Requested` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IUniswapV3PoolOwnerActions.d.ts:108](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IUniswapV3PoolOwnerActions.d.ts#L108)

___

### collectProtocol(address,uint128,uint128)

▸ **collectProtocol(address,uint128,uint128)**(`recipient`, `amount0Requested`, `amount1Requested`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipient` | `string` |
| `amount0Requested` | `BigNumberish` |
| `amount1Requested` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IUniswapV3PoolOwnerActions.d.ts:115](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IUniswapV3PoolOwnerActions.d.ts#L115)

___

### connect

▸ **connect**(`signerOrProvider`): [`IUniswapV3PoolOwnerActions`](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IUniswapV3PoolOwnerActions`](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/IUniswapV3PoolOwnerActions.d.ts:38](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IUniswapV3PoolOwnerActions.d.ts#L38)

___

### deployed

▸ **deployed**(): `Promise`<[`IUniswapV3PoolOwnerActions`](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md)\>

#### Returns

`Promise`<[`IUniswapV3PoolOwnerActions`](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/IUniswapV3PoolOwnerActions.d.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IUniswapV3PoolOwnerActions.d.ts#L40)

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

[src/wrappers/IUniswapV3PoolOwnerActions.d.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IUniswapV3PoolOwnerActions.d.ts#L42)

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

[src/wrappers/IUniswapV3PoolOwnerActions.d.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IUniswapV3PoolOwnerActions.d.ts#L65)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IUniswapV3PoolOwnerActions`](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md)

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

[`IUniswapV3PoolOwnerActions`](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IUniswapV3PoolOwnerActions.d.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IUniswapV3PoolOwnerActions.d.ts#L45)

▸ **off**(`eventName`, `listener`): [`IUniswapV3PoolOwnerActions`](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IUniswapV3PoolOwnerActions`](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IUniswapV3PoolOwnerActions.d.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IUniswapV3PoolOwnerActions.d.ts#L66)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IUniswapV3PoolOwnerActions`](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md)

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

[`IUniswapV3PoolOwnerActions`](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IUniswapV3PoolOwnerActions.d.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IUniswapV3PoolOwnerActions.d.ts#L49)

▸ **on**(`eventName`, `listener`): [`IUniswapV3PoolOwnerActions`](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IUniswapV3PoolOwnerActions`](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IUniswapV3PoolOwnerActions.d.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IUniswapV3PoolOwnerActions.d.ts#L67)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IUniswapV3PoolOwnerActions`](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md)

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

[`IUniswapV3PoolOwnerActions`](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IUniswapV3PoolOwnerActions.d.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IUniswapV3PoolOwnerActions.d.ts#L53)

▸ **once**(`eventName`, `listener`): [`IUniswapV3PoolOwnerActions`](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IUniswapV3PoolOwnerActions`](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IUniswapV3PoolOwnerActions.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IUniswapV3PoolOwnerActions.d.ts#L68)

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

[src/wrappers/IUniswapV3PoolOwnerActions.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IUniswapV3PoolOwnerActions.d.ts#L72)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`IUniswapV3PoolOwnerActions`](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md)

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

[`IUniswapV3PoolOwnerActions`](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IUniswapV3PoolOwnerActions.d.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IUniswapV3PoolOwnerActions.d.ts#L61)

▸ **removeAllListeners**(`eventName?`): [`IUniswapV3PoolOwnerActions`](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IUniswapV3PoolOwnerActions`](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IUniswapV3PoolOwnerActions.d.ts:70](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IUniswapV3PoolOwnerActions.d.ts#L70)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IUniswapV3PoolOwnerActions`](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md)

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

[`IUniswapV3PoolOwnerActions`](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IUniswapV3PoolOwnerActions.d.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IUniswapV3PoolOwnerActions.d.ts#L57)

▸ **removeListener**(`eventName`, `listener`): [`IUniswapV3PoolOwnerActions`](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IUniswapV3PoolOwnerActions`](wrappers_IUniswapV3PoolOwnerActions.IUniswapV3PoolOwnerActions.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IUniswapV3PoolOwnerActions.d.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IUniswapV3PoolOwnerActions.d.ts#L69)

___

### setFeeProtocol

▸ **setFeeProtocol**(`feeProtocol0`, `feeProtocol1`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `feeProtocol0` | `BigNumberish` |
| `feeProtocol1` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IUniswapV3PoolOwnerActions.d.ts:122](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IUniswapV3PoolOwnerActions.d.ts#L122)

___

### setFeeProtocol(uint8,uint8)

▸ **setFeeProtocol(uint8,uint8)**(`feeProtocol0`, `feeProtocol1`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `feeProtocol0` | `BigNumberish` |
| `feeProtocol1` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IUniswapV3PoolOwnerActions.d.ts:128](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IUniswapV3PoolOwnerActions.d.ts#L128)

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
