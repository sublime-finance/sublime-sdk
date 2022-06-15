[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/IUniswapV3PoolState](../modules/wrappers_IUniswapV3PoolState.md) / IUniswapV3PoolState

# Class: IUniswapV3PoolState

[wrappers/IUniswapV3PoolState](../modules/wrappers_IUniswapV3PoolState.md).IUniswapV3PoolState

## Hierarchy

- `Contract`

  ↳ **`IUniswapV3PoolState`**

## Table of contents

### Constructors

- [constructor](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#constructor)

### Properties

- [\_deployedPromise](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#_deployedpromise)
- [\_runningEvents](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#_runningevents)
- [\_wrappedEmits](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#_wrappedemits)
- [address](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#address)
- [callStatic](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#callstatic)
- [deployTransaction](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#deploytransaction)
- [estimateGas](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#estimategas)
- [filters](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#filters)
- [functions](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#functions)
- [interface](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#interface)
- [populateTransaction](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#populatetransaction)
- [provider](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#provider)
- [resolvedAddress](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#resolvedaddress)
- [signer](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#_checkrunningevents)
- [\_deployed](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#_deployed)
- [\_wrapEvent](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#_wrapevent)
- [attach](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#attach)
- [connect](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#connect)
- [deployed](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#deployed)
- [emit](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#emit)
- [fallback](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#fallback)
- [feeGrowthGlobal0X128](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#feegrowthglobal0x128)
- [feeGrowthGlobal0X128()](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#feegrowthglobal0x128())
- [feeGrowthGlobal1X128](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#feegrowthglobal1x128)
- [feeGrowthGlobal1X128()](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#feegrowthglobal1x128())
- [liquidity](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#liquidity)
- [liquidity()](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#liquidity())
- [listenerCount](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#listenercount)
- [listeners](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#listeners)
- [observations](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#observations)
- [observations(uint256)](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#observations(uint256))
- [off](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#off)
- [on](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#on)
- [once](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#once)
- [positions](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#positions)
- [positions(bytes32)](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#positions(bytes32))
- [protocolFees](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#protocolfees)
- [protocolFees()](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#protocolfees())
- [queryFilter](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#queryfilter)
- [removeAllListeners](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#removealllisteners)
- [removeListener](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#removelistener)
- [slot0](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#slot0)
- [slot0()](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#slot0())
- [tickBitmap](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#tickbitmap)
- [tickBitmap(int16)](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#tickbitmap(int16))
- [ticks](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#ticks)
- [ticks(int24)](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#ticks(int24))
- [getContractAddress](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#getcontractaddress)
- [getInterface](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#getinterface)
- [isIndexed](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md#isindexed)

## Constructors

### constructor

• **new IUniswapV3PoolState**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `feeGrowthGlobal0X128` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `feeGrowthGlobal0X128()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `feeGrowthGlobal1X128` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `feeGrowthGlobal1X128()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `liquidity` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `liquidity()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `observations` | (`index`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`number`, `BigNumber`, `BigNumber`, `boolean`] & { `blockTimestamp`: `number` ; `initialized`: `boolean` ; `secondsPerLiquidityCumulativeX128`: `BigNumber` ; `tickCumulative`: `BigNumber`  }\> |
| `observations(uint256)` | (`index`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`number`, `BigNumber`, `BigNumber`, `boolean`] & { `blockTimestamp`: `number` ; `initialized`: `boolean` ; `secondsPerLiquidityCumulativeX128`: `BigNumber` ; `tickCumulative`: `BigNumber`  }\> |
| `positions` | (`key`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `_liquidity`: `BigNumber` ; `feeGrowthInside0LastX128`: `BigNumber` ; `feeGrowthInside1LastX128`: `BigNumber` ; `tokensOwed0`: `BigNumber` ; `tokensOwed1`: `BigNumber`  }\> |
| `positions(bytes32)` | (`key`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `_liquidity`: `BigNumber` ; `feeGrowthInside0LastX128`: `BigNumber` ; `feeGrowthInside1LastX128`: `BigNumber` ; `tokensOwed0`: `BigNumber` ; `tokensOwed1`: `BigNumber`  }\> |
| `protocolFees` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `token0`: `BigNumber` ; `token1`: `BigNumber`  }\> |
| `protocolFees()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `token0`: `BigNumber` ; `token1`: `BigNumber`  }\> |
| `slot0` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `number`, `number`, `number`, `number`, `number`, `boolean`] & { `feeProtocol`: `number` ; `observationCardinality`: `number` ; `observationCardinalityNext`: `number` ; `observationIndex`: `number` ; `sqrtPriceX96`: `BigNumber` ; `tick`: `number` ; `unlocked`: `boolean`  }\> |
| `slot0()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `number`, `number`, `number`, `number`, `number`, `boolean`] & { `feeProtocol`: `number` ; `observationCardinality`: `number` ; `observationCardinalityNext`: `number` ; `observationIndex`: `number` ; `sqrtPriceX96`: `BigNumber` ; `tick`: `number` ; `unlocked`: `boolean`  }\> |
| `tickBitmap` | (`wordPosition`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `tickBitmap(int16)` | (`wordPosition`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `ticks` | (`tick`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `number`, `boolean`] & { `feeGrowthOutside0X128`: `BigNumber` ; `feeGrowthOutside1X128`: `BigNumber` ; `initialized`: `boolean` ; `liquidityGross`: `BigNumber` ; `liquidityNet`: `BigNumber` ; `secondsOutside`: `number` ; `secondsPerLiquidityOutsideX128`: `BigNumber` ; `tickCumulativeOutside`: `BigNumber`  }\> |
| `ticks(int24)` | (`tick`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `number`, `boolean`] & { `feeGrowthOutside0X128`: `BigNumber` ; `feeGrowthOutside1X128`: `BigNumber` ; `initialized`: `boolean` ; `liquidityGross`: `BigNumber` ; `liquidityNet`: `BigNumber` ; `secondsOutside`: `number` ; `secondsPerLiquidityOutsideX128`: `BigNumber` ; `tickCumulativeOutside`: `BigNumber`  }\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:354](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L354)

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
| `feeGrowthGlobal0X128` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `feeGrowthGlobal0X128()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `feeGrowthGlobal1X128` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `feeGrowthGlobal1X128()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `liquidity` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `liquidity()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `observations` | (`index`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `observations(uint256)` | (`index`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `positions` | (`key`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `positions(bytes32)` | (`key`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `protocolFees` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `protocolFees()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `slot0` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `slot0()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `tickBitmap` | (`wordPosition`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `tickBitmap(int16)` | (`wordPosition`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `ticks` | (`tick`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `ticks(int24)` | (`tick`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:484](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L484)

___

### filters

• **filters**: `Object`

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:482](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L482)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `feeGrowthGlobal0X128` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `feeGrowthGlobal0X128()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `feeGrowthGlobal1X128` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `feeGrowthGlobal1X128()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `liquidity` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `liquidity()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `observations` | (`index`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`number`, `BigNumber`, `BigNumber`, `boolean`] & { `blockTimestamp`: `number` ; `initialized`: `boolean` ; `secondsPerLiquidityCumulativeX128`: `BigNumber` ; `tickCumulative`: `BigNumber`  }\> |
| `observations(uint256)` | (`index`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`number`, `BigNumber`, `BigNumber`, `boolean`] & { `blockTimestamp`: `number` ; `initialized`: `boolean` ; `secondsPerLiquidityCumulativeX128`: `BigNumber` ; `tickCumulative`: `BigNumber`  }\> |
| `positions` | (`key`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `_liquidity`: `BigNumber` ; `feeGrowthInside0LastX128`: `BigNumber` ; `feeGrowthInside1LastX128`: `BigNumber` ; `tokensOwed0`: `BigNumber` ; `tokensOwed1`: `BigNumber`  }\> |
| `positions(bytes32)` | (`key`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `_liquidity`: `BigNumber` ; `feeGrowthInside0LastX128`: `BigNumber` ; `feeGrowthInside1LastX128`: `BigNumber` ; `tokensOwed0`: `BigNumber` ; `tokensOwed1`: `BigNumber`  }\> |
| `protocolFees` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `token0`: `BigNumber` ; `token1`: `BigNumber`  }\> |
| `protocolFees()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `token0`: `BigNumber` ; `token1`: `BigNumber`  }\> |
| `slot0` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `number`, `number`, `number`, `number`, `number`, `boolean`] & { `feeProtocol`: `number` ; `observationCardinality`: `number` ; `observationCardinalityNext`: `number` ; `observationIndex`: `number` ; `sqrtPriceX96`: `BigNumber` ; `tick`: `number` ; `unlocked`: `boolean`  }\> |
| `slot0()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `number`, `number`, `number`, `number`, `number`, `boolean`] & { `feeProtocol`: `number` ; `observationCardinality`: `number` ; `observationCardinalityNext`: `number` ; `observationIndex`: `number` ; `sqrtPriceX96`: `BigNumber` ; `tick`: `number` ; `unlocked`: `boolean`  }\> |
| `tickBitmap` | (`wordPosition`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `tickBitmap(int16)` | (`wordPosition`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `ticks` | (`tick`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `number`, `boolean`] & { `feeGrowthOutside0X128`: `BigNumber` ; `feeGrowthOutside1X128`: `BigNumber` ; `initialized`: `boolean` ; `liquidityGross`: `BigNumber` ; `liquidityNet`: `BigNumber` ; `secondsOutside`: `number` ; `secondsPerLiquidityOutsideX128`: `BigNumber` ; `tickCumulativeOutside`: `BigNumber`  }\> |
| `ticks(int24)` | (`tick`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `number`, `boolean`] & { `feeGrowthOutside0X128`: `BigNumber` ; `feeGrowthOutside1X128`: `BigNumber` ; `initialized`: `boolean` ; `liquidityGross`: `BigNumber` ; `liquidityNet`: `BigNumber` ; `secondsOutside`: `number` ; `secondsPerLiquidityOutsideX128`: `BigNumber` ; `tickCumulativeOutside`: `BigNumber`  }\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:100](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L100)

___

### interface

• **interface**: [`IUniswapV3PoolStateInterface`](../interfaces/wrappers_IUniswapV3PoolState.IUniswapV3PoolStateInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:98](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L98)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `feeGrowthGlobal0X128` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `feeGrowthGlobal0X128()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `feeGrowthGlobal1X128` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `feeGrowthGlobal1X128()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `liquidity` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `liquidity()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `observations` | (`index`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `observations(uint256)` | (`index`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `positions` | (`key`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `positions(bytes32)` | (`key`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `protocolFees` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `protocolFees()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `slot0` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `slot0()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `tickBitmap` | (`wordPosition`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `tickBitmap(int16)` | (`wordPosition`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `ticks` | (`tick`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `ticks(int24)` | (`tick`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:522](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L522)

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

▸ **attach**(`addressOrName`): [`IUniswapV3PoolState`](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IUniswapV3PoolState`](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:59](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L59)

___

### connect

▸ **connect**(`signerOrProvider`): [`IUniswapV3PoolState`](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IUniswapV3PoolState`](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L58)

___

### deployed

▸ **deployed**(): `Promise`<[`IUniswapV3PoolState`](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md)\>

#### Returns

`Promise`<[`IUniswapV3PoolState`](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L60)

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

### feeGrowthGlobal0X128

▸ **feeGrowthGlobal0X128**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:228](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L228)

___

### feeGrowthGlobal0X128()

▸ **feeGrowthGlobal0X128()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:230](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L230)

___

### feeGrowthGlobal1X128

▸ **feeGrowthGlobal1X128**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:232](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L232)

___

### feeGrowthGlobal1X128()

▸ **feeGrowthGlobal1X128()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:234](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L234)

___

### liquidity

▸ **liquidity**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:236](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L236)

___

### liquidity()

▸ **liquidity()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:238](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L238)

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

[src/wrappers/IUniswapV3PoolState.d.ts:62](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L62)

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

[src/wrappers/IUniswapV3PoolState.d.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L85)

___

### observations

▸ **observations**(`index`, `overrides?`): `Promise`<[`number`, `BigNumber`, `BigNumber`, `boolean`] & { `blockTimestamp`: `number` ; `initialized`: `boolean` ; `secondsPerLiquidityCumulativeX128`: `BigNumber` ; `tickCumulative`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`number`, `BigNumber`, `BigNumber`, `boolean`] & { `blockTimestamp`: `number` ; `initialized`: `boolean` ; `secondsPerLiquidityCumulativeX128`: `BigNumber` ; `tickCumulative`: `BigNumber`  }\>

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:240](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L240)

___

### observations(uint256)

▸ **observations(uint256)**(`index`, `overrides?`): `Promise`<[`number`, `BigNumber`, `BigNumber`, `boolean`] & { `blockTimestamp`: `number` ; `initialized`: `boolean` ; `secondsPerLiquidityCumulativeX128`: `BigNumber` ; `tickCumulative`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`number`, `BigNumber`, `BigNumber`, `boolean`] & { `blockTimestamp`: `number` ; `initialized`: `boolean` ; `secondsPerLiquidityCumulativeX128`: `BigNumber` ; `tickCumulative`: `BigNumber`  }\>

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:252](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L252)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IUniswapV3PoolState`](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md)

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

[`IUniswapV3PoolState`](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L65)

▸ **off**(`eventName`, `listener`): [`IUniswapV3PoolState`](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IUniswapV3PoolState`](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:86](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L86)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IUniswapV3PoolState`](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md)

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

[`IUniswapV3PoolState`](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L69)

▸ **on**(`eventName`, `listener`): [`IUniswapV3PoolState`](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IUniswapV3PoolState`](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L87)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IUniswapV3PoolState`](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md)

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

[`IUniswapV3PoolState`](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L73)

▸ **once**(`eventName`, `listener`): [`IUniswapV3PoolState`](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IUniswapV3PoolState`](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:88](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L88)

___

### positions

▸ **positions**(`key`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `_liquidity`: `BigNumber` ; `feeGrowthInside0LastX128`: `BigNumber` ; `feeGrowthInside1LastX128`: `BigNumber` ; `tokensOwed0`: `BigNumber` ; `tokensOwed1`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `_liquidity`: `BigNumber` ; `feeGrowthInside0LastX128`: `BigNumber` ; `feeGrowthInside1LastX128`: `BigNumber` ; `tokensOwed0`: `BigNumber` ; `tokensOwed1`: `BigNumber`  }\>

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:264](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L264)

___

### positions(bytes32)

▸ **positions(bytes32)**(`key`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `_liquidity`: `BigNumber` ; `feeGrowthInside0LastX128`: `BigNumber` ; `feeGrowthInside1LastX128`: `BigNumber` ; `tokensOwed0`: `BigNumber` ; `tokensOwed1`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `_liquidity`: `BigNumber` ; `feeGrowthInside0LastX128`: `BigNumber` ; `feeGrowthInside1LastX128`: `BigNumber` ; `tokensOwed0`: `BigNumber` ; `tokensOwed1`: `BigNumber`  }\>

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:277](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L277)

___

### protocolFees

▸ **protocolFees**(`overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `token0`: `BigNumber` ; `token1`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `token0`: `BigNumber` ; `token1`: `BigNumber`  }\>

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:290](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L290)

___

### protocolFees()

▸ **protocolFees()**(`overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `token0`: `BigNumber` ; `token1`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `token0`: `BigNumber` ; `token1`: `BigNumber`  }\>

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:292](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L292)

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

[src/wrappers/IUniswapV3PoolState.d.ts:92](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L92)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`IUniswapV3PoolState`](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md)

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

[`IUniswapV3PoolState`](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L81)

▸ **removeAllListeners**(`eventName?`): [`IUniswapV3PoolState`](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IUniswapV3PoolState`](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:90](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L90)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IUniswapV3PoolState`](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md)

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

[`IUniswapV3PoolState`](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L77)

▸ **removeListener**(`eventName`, `listener`): [`IUniswapV3PoolState`](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IUniswapV3PoolState`](wrappers_IUniswapV3PoolState.IUniswapV3PoolState.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:89](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L89)

___

### slot0

▸ **slot0**(`overrides?`): `Promise`<[`BigNumber`, `number`, `number`, `number`, `number`, `number`, `boolean`] & { `feeProtocol`: `number` ; `observationCardinality`: `number` ; `observationCardinalityNext`: `number` ; `observationIndex`: `number` ; `sqrtPriceX96`: `BigNumber` ; `tick`: `number` ; `unlocked`: `boolean`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `number`, `number`, `number`, `number`, `number`, `boolean`] & { `feeProtocol`: `number` ; `observationCardinality`: `number` ; `observationCardinalityNext`: `number` ; `observationIndex`: `number` ; `sqrtPriceX96`: `BigNumber` ; `tick`: `number` ; `unlocked`: `boolean`  }\>

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:294](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L294)

___

### slot0()

▸ **slot0()**(`overrides?`): `Promise`<[`BigNumber`, `number`, `number`, `number`, `number`, `number`, `boolean`] & { `feeProtocol`: `number` ; `observationCardinality`: `number` ; `observationCardinalityNext`: `number` ; `observationIndex`: `number` ; `sqrtPriceX96`: `BigNumber` ; `tick`: `number` ; `unlocked`: `boolean`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `number`, `number`, `number`, `number`, `number`, `boolean`] & { `feeProtocol`: `number` ; `observationCardinality`: `number` ; `observationCardinalityNext`: `number` ; `observationIndex`: `number` ; `sqrtPriceX96`: `BigNumber` ; `tick`: `number` ; `unlocked`: `boolean`  }\>

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:306](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L306)

___

### tickBitmap

▸ **tickBitmap**(`wordPosition`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wordPosition` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:318](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L318)

___

### tickBitmap(int16)

▸ **tickBitmap(int16)**(`wordPosition`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wordPosition` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:320](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L320)

___

### ticks

▸ **ticks**(`tick`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `number`, `boolean`] & { `feeGrowthOutside0X128`: `BigNumber` ; `feeGrowthOutside1X128`: `BigNumber` ; `initialized`: `boolean` ; `liquidityGross`: `BigNumber` ; `liquidityNet`: `BigNumber` ; `secondsOutside`: `number` ; `secondsPerLiquidityOutsideX128`: `BigNumber` ; `tickCumulativeOutside`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tick` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `number`, `boolean`] & { `feeGrowthOutside0X128`: `BigNumber` ; `feeGrowthOutside1X128`: `BigNumber` ; `initialized`: `boolean` ; `liquidityGross`: `BigNumber` ; `liquidityNet`: `BigNumber` ; `secondsOutside`: `number` ; `secondsPerLiquidityOutsideX128`: `BigNumber` ; `tickCumulativeOutside`: `BigNumber`  }\>

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:322](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L322)

___

### ticks(int24)

▸ **ticks(int24)**(`tick`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `number`, `boolean`] & { `feeGrowthOutside0X128`: `BigNumber` ; `feeGrowthOutside1X128`: `BigNumber` ; `initialized`: `boolean` ; `liquidityGross`: `BigNumber` ; `liquidityNet`: `BigNumber` ; `secondsOutside`: `number` ; `secondsPerLiquidityOutsideX128`: `BigNumber` ; `tickCumulativeOutside`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tick` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `number`, `boolean`] & { `feeGrowthOutside0X128`: `BigNumber` ; `feeGrowthOutside1X128`: `BigNumber` ; `initialized`: `boolean` ; `liquidityGross`: `BigNumber` ; `liquidityNet`: `BigNumber` ; `secondsOutside`: `number` ; `secondsPerLiquidityOutsideX128`: `BigNumber` ; `tickCumulativeOutside`: `BigNumber`  }\>

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:338](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/IUniswapV3PoolState.d.ts#L338)

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
