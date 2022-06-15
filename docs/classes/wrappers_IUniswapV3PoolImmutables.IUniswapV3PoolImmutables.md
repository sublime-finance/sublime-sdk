[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/IUniswapV3PoolImmutables](../modules/wrappers_IUniswapV3PoolImmutables.md) / IUniswapV3PoolImmutables

# Class: IUniswapV3PoolImmutables

[wrappers/IUniswapV3PoolImmutables](../modules/wrappers_IUniswapV3PoolImmutables.md).IUniswapV3PoolImmutables

## Hierarchy

- `Contract`

  ↳ **`IUniswapV3PoolImmutables`**

## Table of contents

### Constructors

- [constructor](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#constructor)

### Properties

- [\_deployedPromise](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#_deployedpromise)
- [\_runningEvents](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#_runningevents)
- [\_wrappedEmits](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#_wrappedemits)
- [address](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#address)
- [callStatic](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#callstatic)
- [deployTransaction](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#deploytransaction)
- [estimateGas](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#estimategas)
- [filters](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#filters)
- [functions](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#functions)
- [interface](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#interface)
- [populateTransaction](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#populatetransaction)
- [provider](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#provider)
- [resolvedAddress](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#resolvedaddress)
- [signer](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#_checkrunningevents)
- [\_deployed](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#_deployed)
- [\_wrapEvent](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#_wrapevent)
- [attach](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#attach)
- [connect](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#connect)
- [deployed](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#deployed)
- [emit](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#emit)
- [factory](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#factory)
- [factory()](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#factory())
- [fallback](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#fallback)
- [fee](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#fee)
- [fee()](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#fee())
- [listenerCount](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#listenercount)
- [listeners](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#listeners)
- [maxLiquidityPerTick](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#maxliquiditypertick)
- [maxLiquidityPerTick()](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#maxliquiditypertick())
- [off](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#off)
- [on](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#on)
- [once](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#once)
- [queryFilter](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#queryfilter)
- [removeAllListeners](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#removealllisteners)
- [removeListener](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#removelistener)
- [tickSpacing](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#tickspacing)
- [tickSpacing()](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#tickspacing())
- [token0](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#token0)
- [token0()](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#token0())
- [token1](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#token1)
- [token1()](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#token1())
- [getContractAddress](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#getcontractaddress)
- [getInterface](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#getinterface)
- [isIndexed](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md#isindexed)

## Constructors

### constructor

• **new IUniswapV3PoolImmutables**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `factory` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `factory()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `fee` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `fee()` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `maxLiquidityPerTick` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `maxLiquidityPerTick()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `tickSpacing` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `tickSpacing()` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `token0` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `token0()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `token1` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `token1()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/IUniswapV3PoolImmutables.d.ts:141](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L141)

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
| `factory` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `factory()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `fee` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `fee()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `maxLiquidityPerTick` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `maxLiquidityPerTick()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `tickSpacing` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `tickSpacing()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `token0` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `token0()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `token1` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `token1()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/IUniswapV3PoolImmutables.d.ts:169](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L169)

___

### filters

• **filters**: `Object`

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/IUniswapV3PoolImmutables.d.ts:167](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L167)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `factory` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `factory()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `fee` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `fee()` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `maxLiquidityPerTick` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `maxLiquidityPerTick()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `tickSpacing` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `tickSpacing()` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `token0` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `token0()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `token1` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `token1()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/IUniswapV3PoolImmutables.d.ts:91](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L91)

___

### interface

• **interface**: [`IUniswapV3PoolImmutablesInterface`](../interfaces/wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutablesInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/IUniswapV3PoolImmutables.d.ts:89](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L89)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `factory` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `factory()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `fee` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `fee()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `maxLiquidityPerTick` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `maxLiquidityPerTick()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `tickSpacing` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `tickSpacing()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `token0` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `token0()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `token1` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `token1()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/IUniswapV3PoolImmutables.d.ts:195](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L195)

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

▸ **attach**(`addressOrName`): [`IUniswapV3PoolImmutables`](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IUniswapV3PoolImmutables`](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/IUniswapV3PoolImmutables.d.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L50)

___

### connect

▸ **connect**(`signerOrProvider`): [`IUniswapV3PoolImmutables`](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IUniswapV3PoolImmutables`](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/IUniswapV3PoolImmutables.d.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L49)

___

### deployed

▸ **deployed**(): `Promise`<[`IUniswapV3PoolImmutables`](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md)\>

#### Returns

`Promise`<[`IUniswapV3PoolImmutables`](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/IUniswapV3PoolImmutables.d.ts:51](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L51)

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

### factory

▸ **factory**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/IUniswapV3PoolImmutables.d.ts:117](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L117)

___

### factory()

▸ **factory()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/IUniswapV3PoolImmutables.d.ts:119](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L119)

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

### fee

▸ **fee**(`overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/wrappers/IUniswapV3PoolImmutables.d.ts:121](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L121)

___

### fee()

▸ **fee()**(`overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/wrappers/IUniswapV3PoolImmutables.d.ts:123](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L123)

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

[src/wrappers/IUniswapV3PoolImmutables.d.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L53)

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

[src/wrappers/IUniswapV3PoolImmutables.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L76)

___

### maxLiquidityPerTick

▸ **maxLiquidityPerTick**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IUniswapV3PoolImmutables.d.ts:125](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L125)

___

### maxLiquidityPerTick()

▸ **maxLiquidityPerTick()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IUniswapV3PoolImmutables.d.ts:127](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L127)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IUniswapV3PoolImmutables`](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md)

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

[`IUniswapV3PoolImmutables`](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IUniswapV3PoolImmutables.d.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L56)

▸ **off**(`eventName`, `listener`): [`IUniswapV3PoolImmutables`](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IUniswapV3PoolImmutables`](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IUniswapV3PoolImmutables.d.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L77)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IUniswapV3PoolImmutables`](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md)

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

[`IUniswapV3PoolImmutables`](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IUniswapV3PoolImmutables.d.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L60)

▸ **on**(`eventName`, `listener`): [`IUniswapV3PoolImmutables`](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IUniswapV3PoolImmutables`](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IUniswapV3PoolImmutables.d.ts:78](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L78)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IUniswapV3PoolImmutables`](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md)

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

[`IUniswapV3PoolImmutables`](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IUniswapV3PoolImmutables.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L64)

▸ **once**(`eventName`, `listener`): [`IUniswapV3PoolImmutables`](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IUniswapV3PoolImmutables`](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IUniswapV3PoolImmutables.d.ts:79](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L79)

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

[src/wrappers/IUniswapV3PoolImmutables.d.ts:83](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L83)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`IUniswapV3PoolImmutables`](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md)

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

[`IUniswapV3PoolImmutables`](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IUniswapV3PoolImmutables.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L72)

▸ **removeAllListeners**(`eventName?`): [`IUniswapV3PoolImmutables`](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IUniswapV3PoolImmutables`](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IUniswapV3PoolImmutables.d.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L81)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IUniswapV3PoolImmutables`](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md)

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

[`IUniswapV3PoolImmutables`](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IUniswapV3PoolImmutables.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L68)

▸ **removeListener**(`eventName`, `listener`): [`IUniswapV3PoolImmutables`](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IUniswapV3PoolImmutables`](wrappers_IUniswapV3PoolImmutables.IUniswapV3PoolImmutables.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IUniswapV3PoolImmutables.d.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L80)

___

### tickSpacing

▸ **tickSpacing**(`overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/wrappers/IUniswapV3PoolImmutables.d.ts:129](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L129)

___

### tickSpacing()

▸ **tickSpacing()**(`overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/wrappers/IUniswapV3PoolImmutables.d.ts:131](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L131)

___

### token0

▸ **token0**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/IUniswapV3PoolImmutables.d.ts:133](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L133)

___

### token0()

▸ **token0()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/IUniswapV3PoolImmutables.d.ts:135](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L135)

___

### token1

▸ **token1**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/IUniswapV3PoolImmutables.d.ts:137](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L137)

___

### token1()

▸ **token1()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/IUniswapV3PoolImmutables.d.ts:139](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3PoolImmutables.d.ts#L139)

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
