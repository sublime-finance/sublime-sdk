[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/IUniswapV3PoolDerivedState](../modules/wrappers_IUniswapV3PoolDerivedState.md) / IUniswapV3PoolDerivedState

# Class: IUniswapV3PoolDerivedState

[wrappers/IUniswapV3PoolDerivedState](../modules/wrappers_IUniswapV3PoolDerivedState.md).IUniswapV3PoolDerivedState

## Hierarchy

- `Contract`

  ↳ **`IUniswapV3PoolDerivedState`**

## Table of contents

### Constructors

- [constructor](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#constructor)

### Properties

- [\_deployedPromise](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#_deployedpromise)
- [\_runningEvents](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#_runningevents)
- [\_wrappedEmits](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#_wrappedemits)
- [address](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#address)
- [callStatic](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#callstatic)
- [deployTransaction](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#deploytransaction)
- [estimateGas](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#estimategas)
- [filters](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#filters)
- [functions](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#functions)
- [interface](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#interface)
- [populateTransaction](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#populatetransaction)
- [provider](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#provider)
- [resolvedAddress](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#resolvedaddress)
- [signer](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#_checkrunningevents)
- [\_deployed](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#_deployed)
- [\_wrapEvent](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#_wrapevent)
- [attach](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#attach)
- [connect](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#connect)
- [deployed](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#deployed)
- [emit](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#emit)
- [fallback](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#fallback)
- [listenerCount](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#listenercount)
- [listeners](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#listeners)
- [observe](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#observe)
- [observe(uint32[])](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#observe(uint32[]))
- [off](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#off)
- [on](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#on)
- [once](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#once)
- [queryFilter](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#queryfilter)
- [removeAllListeners](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#removealllisteners)
- [removeListener](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#removelistener)
- [snapshotCumulativesInside](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#snapshotcumulativesinside)
- [snapshotCumulativesInside(int24,int24)](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#snapshotcumulativesinside(int24,int24))
- [getContractAddress](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#getcontractaddress)
- [getInterface](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#getinterface)
- [isIndexed](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md#isindexed)

## Constructors

### constructor

• **new IUniswapV3PoolDerivedState**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `observe` | (`secondsAgos`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`[], `BigNumber`[]] & { `secondsPerLiquidityCumulativeX128s`: `BigNumber`[] ; `tickCumulatives`: `BigNumber`[]  }\> |
| `observe(uint32[])` | (`secondsAgos`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`[], `BigNumber`[]] & { `secondsPerLiquidityCumulativeX128s`: `BigNumber`[] ; `tickCumulatives`: `BigNumber`[]  }\> |
| `snapshotCumulativesInside` | (`tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `number`] & { `secondsInside`: `number` ; `secondsPerLiquidityInsideX128`: `BigNumber` ; `tickCumulativeInside`: `BigNumber`  }\> |
| `snapshotCumulativesInside(int24,int24)` | (`tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `number`] & { `secondsInside`: `number` ; `secondsPerLiquidityInsideX128`: `BigNumber` ; `tickCumulativeInside`: `BigNumber`  }\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:169](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L169)

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
| `observe` | (`secondsAgos`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `observe(uint32[])` | (`secondsAgos`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `snapshotCumulativesInside` | (`tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `snapshotCumulativesInside(int24,int24)` | (`tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:217](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L217)

___

### filters

• **filters**: `Object`

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:215](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L215)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `observe` | (`secondsAgos`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`[], `BigNumber`[]] & { `secondsPerLiquidityCumulativeX128s`: `BigNumber`[] ; `tickCumulatives`: `BigNumber`[]  }\> |
| `observe(uint32[])` | (`secondsAgos`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`[], `BigNumber`[]] & { `secondsPerLiquidityCumulativeX128s`: `BigNumber`[] ; `tickCumulatives`: `BigNumber`[]  }\> |
| `snapshotCumulativesInside` | (`tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `number`] & { `secondsInside`: `number` ; `secondsPerLiquidityInsideX128`: `BigNumber` ; `tickCumulativeInside`: `BigNumber`  }\> |
| `snapshotCumulativesInside(int24,int24)` | (`tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `number`] & { `secondsInside`: `number` ; `secondsPerLiquidityInsideX128`: `BigNumber` ; `tickCumulativeInside`: `BigNumber`  }\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:79](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L79)

___

### interface

• **interface**: [`IUniswapV3PoolDerivedStateInterface`](../interfaces/wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedStateInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L77)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `observe` | (`secondsAgos`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `observe(uint32[])` | (`secondsAgos`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `snapshotCumulativesInside` | (`tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `snapshotCumulativesInside(int24,int24)` | (`tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:231](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L231)

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

▸ **attach**(`addressOrName`): [`IUniswapV3PoolDerivedState`](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IUniswapV3PoolDerivedState`](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:38](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L38)

___

### connect

▸ **connect**(`signerOrProvider`): [`IUniswapV3PoolDerivedState`](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IUniswapV3PoolDerivedState`](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:37](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L37)

___

### deployed

▸ **deployed**(): `Promise`<[`IUniswapV3PoolDerivedState`](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md)\>

#### Returns

`Promise`<[`IUniswapV3PoolDerivedState`](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L39)

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

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:41](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L41)

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

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L64)

___

### observe

▸ **observe**(`secondsAgos`, `overrides?`): `Promise`<[`BigNumber`[], `BigNumber`[]] & { `secondsPerLiquidityCumulativeX128s`: `BigNumber`[] ; `tickCumulatives`: `BigNumber`[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `secondsAgos` | `BigNumberish`[] |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`[], `BigNumber`[]] & { `secondsPerLiquidityCumulativeX128s`: `BigNumber`[] ; `tickCumulatives`: `BigNumber`[]  }\>

#### Defined in

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:125](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L125)

___

### observe(uint32[])

▸ **observe(uint32[])**(`secondsAgos`, `overrides?`): `Promise`<[`BigNumber`[], `BigNumber`[]] & { `secondsPerLiquidityCumulativeX128s`: `BigNumber`[] ; `tickCumulatives`: `BigNumber`[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `secondsAgos` | `BigNumberish`[] |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`[], `BigNumber`[]] & { `secondsPerLiquidityCumulativeX128s`: `BigNumber`[] ; `tickCumulatives`: `BigNumber`[]  }\>

#### Defined in

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:135](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L135)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IUniswapV3PoolDerivedState`](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md)

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

[`IUniswapV3PoolDerivedState`](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L44)

▸ **off**(`eventName`, `listener`): [`IUniswapV3PoolDerivedState`](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IUniswapV3PoolDerivedState`](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L65)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IUniswapV3PoolDerivedState`](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md)

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

[`IUniswapV3PoolDerivedState`](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L48)

▸ **on**(`eventName`, `listener`): [`IUniswapV3PoolDerivedState`](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IUniswapV3PoolDerivedState`](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L66)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IUniswapV3PoolDerivedState`](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md)

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

[`IUniswapV3PoolDerivedState`](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L52)

▸ **once**(`eventName`, `listener`): [`IUniswapV3PoolDerivedState`](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IUniswapV3PoolDerivedState`](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L67)

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

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L71)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`IUniswapV3PoolDerivedState`](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md)

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

[`IUniswapV3PoolDerivedState`](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L60)

▸ **removeAllListeners**(`eventName?`): [`IUniswapV3PoolDerivedState`](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IUniswapV3PoolDerivedState`](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L69)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IUniswapV3PoolDerivedState`](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md)

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

[`IUniswapV3PoolDerivedState`](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L56)

▸ **removeListener**(`eventName`, `listener`): [`IUniswapV3PoolDerivedState`](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IUniswapV3PoolDerivedState`](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedState.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L68)

___

### snapshotCumulativesInside

▸ **snapshotCumulativesInside**(`tickLower`, `tickUpper`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`, `number`] & { `secondsInside`: `number` ; `secondsPerLiquidityInsideX128`: `BigNumber` ; `tickCumulativeInside`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tickLower` | `BigNumberish` |
| `tickUpper` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`, `number`] & { `secondsInside`: `number` ; `secondsPerLiquidityInsideX128`: `BigNumber` ; `tickCumulativeInside`: `BigNumber`  }\>

#### Defined in

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:145](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L145)

___

### snapshotCumulativesInside(int24,int24)

▸ **snapshotCumulativesInside(int24,int24)**(`tickLower`, `tickUpper`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`, `number`] & { `secondsInside`: `number` ; `secondsPerLiquidityInsideX128`: `BigNumber` ; `tickCumulativeInside`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tickLower` | `BigNumberish` |
| `tickUpper` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`, `number`] & { `secondsInside`: `number` ; `secondsPerLiquidityInsideX128`: `BigNumber` ; `tickCumulativeInside`: `BigNumber`  }\>

#### Defined in

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:157](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L157)

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
