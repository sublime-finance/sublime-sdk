[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/IUniswapV3PoolEvents](../modules/wrappers_IUniswapV3PoolEvents.md) / IUniswapV3PoolEvents

# Class: IUniswapV3PoolEvents

[wrappers/IUniswapV3PoolEvents](../modules/wrappers_IUniswapV3PoolEvents.md).IUniswapV3PoolEvents

## Hierarchy

- `Contract`

  ↳ **`IUniswapV3PoolEvents`**

## Table of contents

### Constructors

- [constructor](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#constructor)

### Properties

- [\_deployedPromise](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#_deployedpromise)
- [\_runningEvents](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#_runningevents)
- [\_wrappedEmits](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#_wrappedemits)
- [address](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#address)
- [callStatic](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#callstatic)
- [deployTransaction](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#deploytransaction)
- [estimateGas](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#estimategas)
- [filters](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#filters)
- [functions](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#functions)
- [interface](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#interface)
- [populateTransaction](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#populatetransaction)
- [provider](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#provider)
- [resolvedAddress](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#resolvedaddress)
- [signer](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#_checkrunningevents)
- [\_deployed](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#_deployed)
- [\_wrapEvent](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#_wrapevent)
- [attach](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#attach)
- [connect](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#connect)
- [deployed](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#deployed)
- [emit](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#emit)
- [fallback](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#fallback)
- [listenerCount](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#listenercount)
- [listeners](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#listeners)
- [off](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#off)
- [on](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#on)
- [once](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#once)
- [queryFilter](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#queryfilter)
- [removeAllListeners](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#removealllisteners)
- [removeListener](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#removelistener)
- [getContractAddress](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#getcontractaddress)
- [getInterface](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#getinterface)
- [isIndexed](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md#isindexed)

## Constructors

### constructor

• **new IUniswapV3PoolEvents**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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

[src/wrappers/IUniswapV3PoolEvents.d.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IUniswapV3PoolEvents.d.ts#L82)

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

[src/wrappers/IUniswapV3PoolEvents.d.ts:228](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IUniswapV3PoolEvents.d.ts#L228)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Burn` | (`owner`: `string`, `tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount`: ``null``, `amount0`: ``null``, `amount1`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `number`, `number`, `BigNumber`, `BigNumber`, `BigNumber`], { `amount`: `BigNumber` ; `amount0`: `BigNumber` ; `amount1`: `BigNumber` ; `owner`: `string` ; `tickLower`: `number` ; `tickUpper`: `number`  }\> |
| `Collect` | (`owner`: `string`, `recipient`: ``null``, `tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount0`: ``null``, `amount1`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `number`, `number`, `BigNumber`, `BigNumber`], { `amount0`: `BigNumber` ; `amount1`: `BigNumber` ; `owner`: `string` ; `recipient`: `string` ; `tickLower`: `number` ; `tickUpper`: `number`  }\> |
| `CollectProtocol` | (`sender`: `string`, `recipient`: `string`, `amount0`: ``null``, `amount1`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `BigNumber`, `BigNumber`], { `amount0`: `BigNumber` ; `amount1`: `BigNumber` ; `recipient`: `string` ; `sender`: `string`  }\> |
| `Flash` | (`sender`: `string`, `recipient`: `string`, `amount0`: ``null``, `amount1`: ``null``, `paid0`: ``null``, `paid1`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`], { `amount0`: `BigNumber` ; `amount1`: `BigNumber` ; `paid0`: `BigNumber` ; `paid1`: `BigNumber` ; `recipient`: `string` ; `sender`: `string`  }\> |
| `IncreaseObservationCardinalityNext` | (`observationCardinalityNextOld`: ``null``, `observationCardinalityNextNew`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`number`, `number`], { `observationCardinalityNextNew`: `number` ; `observationCardinalityNextOld`: `number`  }\> |
| `Initialize` | (`sqrtPriceX96`: ``null``, `tick`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `number`], { `sqrtPriceX96`: `BigNumber` ; `tick`: `number`  }\> |
| `Mint` | (`sender`: ``null``, `owner`: `string`, `tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount`: ``null``, `amount0`: ``null``, `amount1`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `number`, `number`, `BigNumber`, `BigNumber`, `BigNumber`], { `amount`: `BigNumber` ; `amount0`: `BigNumber` ; `amount1`: `BigNumber` ; `owner`: `string` ; `sender`: `string` ; `tickLower`: `number` ; `tickUpper`: `number`  }\> |
| `SetFeeProtocol` | (`feeProtocol0Old`: ``null``, `feeProtocol1Old`: ``null``, `feeProtocol0New`: ``null``, `feeProtocol1New`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`number`, `number`, `number`, `number`], { `feeProtocol0New`: `number` ; `feeProtocol0Old`: `number` ; `feeProtocol1New`: `number` ; `feeProtocol1Old`: `number`  }\> |
| `Swap` | (`sender`: `string`, `recipient`: `string`, `amount0`: ``null``, `amount1`: ``null``, `sqrtPriceX96`: ``null``, `liquidity`: ``null``, `tick`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `number`], { `amount0`: `BigNumber` ; `amount1`: `BigNumber` ; `liquidity`: `BigNumber` ; `recipient`: `string` ; `sender`: `string` ; `sqrtPriceX96`: `BigNumber` ; `tick`: `number`  }\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/IUniswapV3PoolEvents.d.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IUniswapV3PoolEvents.d.ts#L84)

___

### functions

• **functions**: `Object`

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/IUniswapV3PoolEvents.d.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IUniswapV3PoolEvents.d.ts#L80)

___

### interface

• **interface**: [`IUniswapV3PoolEventsInterface`](../interfaces/wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEventsInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/IUniswapV3PoolEvents.d.ts:78](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IUniswapV3PoolEvents.d.ts#L78)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/IUniswapV3PoolEvents.d.ts:230](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IUniswapV3PoolEvents.d.ts#L230)

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

▸ **attach**(`addressOrName`): [`IUniswapV3PoolEvents`](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IUniswapV3PoolEvents`](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/IUniswapV3PoolEvents.d.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IUniswapV3PoolEvents.d.ts#L39)

___

### connect

▸ **connect**(`signerOrProvider`): [`IUniswapV3PoolEvents`](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IUniswapV3PoolEvents`](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/IUniswapV3PoolEvents.d.ts:38](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IUniswapV3PoolEvents.d.ts#L38)

___

### deployed

▸ **deployed**(): `Promise`<[`IUniswapV3PoolEvents`](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md)\>

#### Returns

`Promise`<[`IUniswapV3PoolEvents`](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/IUniswapV3PoolEvents.d.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IUniswapV3PoolEvents.d.ts#L40)

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

[src/wrappers/IUniswapV3PoolEvents.d.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IUniswapV3PoolEvents.d.ts#L42)

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

[src/wrappers/IUniswapV3PoolEvents.d.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IUniswapV3PoolEvents.d.ts#L65)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IUniswapV3PoolEvents`](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md)

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

[`IUniswapV3PoolEvents`](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IUniswapV3PoolEvents.d.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IUniswapV3PoolEvents.d.ts#L45)

▸ **off**(`eventName`, `listener`): [`IUniswapV3PoolEvents`](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IUniswapV3PoolEvents`](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IUniswapV3PoolEvents.d.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IUniswapV3PoolEvents.d.ts#L66)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IUniswapV3PoolEvents`](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md)

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

[`IUniswapV3PoolEvents`](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IUniswapV3PoolEvents.d.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IUniswapV3PoolEvents.d.ts#L49)

▸ **on**(`eventName`, `listener`): [`IUniswapV3PoolEvents`](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IUniswapV3PoolEvents`](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IUniswapV3PoolEvents.d.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IUniswapV3PoolEvents.d.ts#L67)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IUniswapV3PoolEvents`](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md)

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

[`IUniswapV3PoolEvents`](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IUniswapV3PoolEvents.d.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IUniswapV3PoolEvents.d.ts#L53)

▸ **once**(`eventName`, `listener`): [`IUniswapV3PoolEvents`](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IUniswapV3PoolEvents`](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IUniswapV3PoolEvents.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IUniswapV3PoolEvents.d.ts#L68)

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

[src/wrappers/IUniswapV3PoolEvents.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IUniswapV3PoolEvents.d.ts#L72)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`IUniswapV3PoolEvents`](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md)

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

[`IUniswapV3PoolEvents`](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IUniswapV3PoolEvents.d.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IUniswapV3PoolEvents.d.ts#L61)

▸ **removeAllListeners**(`eventName?`): [`IUniswapV3PoolEvents`](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IUniswapV3PoolEvents`](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IUniswapV3PoolEvents.d.ts:70](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IUniswapV3PoolEvents.d.ts#L70)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IUniswapV3PoolEvents`](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md)

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

[`IUniswapV3PoolEvents`](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IUniswapV3PoolEvents.d.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IUniswapV3PoolEvents.d.ts#L57)

▸ **removeListener**(`eventName`, `listener`): [`IUniswapV3PoolEvents`](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IUniswapV3PoolEvents`](wrappers_IUniswapV3PoolEvents.IUniswapV3PoolEvents.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IUniswapV3PoolEvents.d.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IUniswapV3PoolEvents.d.ts#L69)

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
