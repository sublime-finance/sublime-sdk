[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/IUniswapV3Pool](../modules/wrappers_IUniswapV3Pool.md) / IUniswapV3Pool

# Class: IUniswapV3Pool

[wrappers/IUniswapV3Pool](../modules/wrappers_IUniswapV3Pool.md).IUniswapV3Pool

## Hierarchy

- `Contract`

  ↳ **`IUniswapV3Pool`**

## Table of contents

### Constructors

- [constructor](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#constructor)

### Properties

- [\_deployedPromise](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#_deployedpromise)
- [\_runningEvents](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#_runningevents)
- [\_wrappedEmits](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#_wrappedemits)
- [address](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#address)
- [callStatic](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#callstatic)
- [deployTransaction](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#deploytransaction)
- [estimateGas](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#estimategas)
- [filters](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#filters)
- [functions](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#functions)
- [interface](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#interface)
- [populateTransaction](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#populatetransaction)
- [provider](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#provider)
- [resolvedAddress](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#resolvedaddress)
- [signer](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#_checkrunningevents)
- [\_deployed](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#_deployed)
- [\_wrapEvent](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#_wrapevent)
- [attach](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#attach)
- [burn](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#burn)
- [burn(int24,int24,uint128)](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#burn(int24,int24,uint128))
- [collect](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#collect)
- [collect(address,int24,int24,uint128,uint128)](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#collect(address,int24,int24,uint128,uint128))
- [collectProtocol](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#collectprotocol)
- [collectProtocol(address,uint128,uint128)](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#collectprotocol(address,uint128,uint128))
- [connect](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#connect)
- [deployed](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#deployed)
- [emit](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#emit)
- [factory](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#factory)
- [factory()](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#factory())
- [fallback](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#fallback)
- [fee](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#fee)
- [fee()](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#fee())
- [feeGrowthGlobal0X128](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#feegrowthglobal0x128)
- [feeGrowthGlobal0X128()](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#feegrowthglobal0x128())
- [feeGrowthGlobal1X128](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#feegrowthglobal1x128)
- [feeGrowthGlobal1X128()](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#feegrowthglobal1x128())
- [flash](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#flash)
- [flash(address,uint256,uint256,bytes)](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#flash(address,uint256,uint256,bytes))
- [increaseObservationCardinalityNext](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#increaseobservationcardinalitynext)
- [increaseObservationCardinalityNext(uint16)](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#increaseobservationcardinalitynext(uint16))
- [initialize](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#initialize)
- [initialize(uint160)](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#initialize(uint160))
- [liquidity](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#liquidity)
- [liquidity()](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#liquidity())
- [listenerCount](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#listenercount)
- [listeners](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#listeners)
- [maxLiquidityPerTick](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#maxliquiditypertick)
- [maxLiquidityPerTick()](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#maxliquiditypertick())
- [mint](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#mint)
- [mint(address,int24,int24,uint128,bytes)](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#mint(address,int24,int24,uint128,bytes))
- [observations](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#observations)
- [observations(uint256)](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#observations(uint256))
- [observe](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#observe)
- [observe(uint32[])](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#observe(uint32[]))
- [off](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#off)
- [on](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#on)
- [once](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#once)
- [positions](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#positions)
- [positions(bytes32)](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#positions(bytes32))
- [protocolFees](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#protocolfees)
- [protocolFees()](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#protocolfees())
- [queryFilter](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#queryfilter)
- [removeAllListeners](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#removealllisteners)
- [removeListener](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#removelistener)
- [setFeeProtocol](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#setfeeprotocol)
- [setFeeProtocol(uint8,uint8)](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#setfeeprotocol(uint8,uint8))
- [slot0](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#slot0)
- [slot0()](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#slot0())
- [snapshotCumulativesInside](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#snapshotcumulativesinside)
- [snapshotCumulativesInside(int24,int24)](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#snapshotcumulativesinside(int24,int24))
- [swap](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#swap)
- [swap(address,bool,int256,uint160,bytes)](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#swap(address,bool,int256,uint160,bytes))
- [tickBitmap](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#tickbitmap)
- [tickBitmap(int16)](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#tickbitmap(int16))
- [tickSpacing](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#tickspacing)
- [tickSpacing()](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#tickspacing())
- [ticks](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#ticks)
- [ticks(int24)](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#ticks(int24))
- [token0](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#token0)
- [token0()](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#token0())
- [token1](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#token1)
- [token1()](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#token1())
- [getContractAddress](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#getcontractaddress)
- [getInterface](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#getinterface)
- [isIndexed](wrappers_IUniswapV3Pool.IUniswapV3Pool.md#isindexed)

## Constructors

### constructor

• **new IUniswapV3Pool**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `burn` | (`tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `amount0`: `BigNumber` ; `amount1`: `BigNumber`  }\> |
| `burn(int24,int24,uint128)` | (`tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `amount0`: `BigNumber` ; `amount1`: `BigNumber`  }\> |
| `collect` | (`recipient`: `string`, `tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount0Requested`: `BigNumberish`, `amount1Requested`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `amount0`: `BigNumber` ; `amount1`: `BigNumber`  }\> |
| `collect(address,int24,int24,uint128,uint128)` | (`recipient`: `string`, `tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount0Requested`: `BigNumberish`, `amount1Requested`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `amount0`: `BigNumber` ; `amount1`: `BigNumber`  }\> |
| `collectProtocol` | (`recipient`: `string`, `amount0Requested`: `BigNumberish`, `amount1Requested`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `amount0`: `BigNumber` ; `amount1`: `BigNumber`  }\> |
| `collectProtocol(address,uint128,uint128)` | (`recipient`: `string`, `amount0Requested`: `BigNumberish`, `amount1Requested`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `amount0`: `BigNumber` ; `amount1`: `BigNumber`  }\> |
| `factory` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `factory()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `fee` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `fee()` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `feeGrowthGlobal0X128` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `feeGrowthGlobal0X128()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `feeGrowthGlobal1X128` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `feeGrowthGlobal1X128()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `flash` | (`recipient`: `string`, `amount0`: `BigNumberish`, `amount1`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `flash(address,uint256,uint256,bytes)` | (`recipient`: `string`, `amount0`: `BigNumberish`, `amount1`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `increaseObservationCardinalityNext` | (`observationCardinalityNext`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `increaseObservationCardinalityNext(uint16)` | (`observationCardinalityNext`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialize` | (`sqrtPriceX96`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialize(uint160)` | (`sqrtPriceX96`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `liquidity` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `liquidity()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `maxLiquidityPerTick` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `maxLiquidityPerTick()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `mint` | (`recipient`: `string`, `tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `amount0`: `BigNumber` ; `amount1`: `BigNumber`  }\> |
| `mint(address,int24,int24,uint128,bytes)` | (`recipient`: `string`, `tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `amount0`: `BigNumber` ; `amount1`: `BigNumber`  }\> |
| `observations` | (`index`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`number`, `BigNumber`, `BigNumber`, `boolean`] & { `blockTimestamp`: `number` ; `initialized`: `boolean` ; `secondsPerLiquidityCumulativeX128`: `BigNumber` ; `tickCumulative`: `BigNumber`  }\> |
| `observations(uint256)` | (`index`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`number`, `BigNumber`, `BigNumber`, `boolean`] & { `blockTimestamp`: `number` ; `initialized`: `boolean` ; `secondsPerLiquidityCumulativeX128`: `BigNumber` ; `tickCumulative`: `BigNumber`  }\> |
| `observe` | (`secondsAgos`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`[], `BigNumber`[]] & { `secondsPerLiquidityCumulativeX128s`: `BigNumber`[] ; `tickCumulatives`: `BigNumber`[]  }\> |
| `observe(uint32[])` | (`secondsAgos`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`[], `BigNumber`[]] & { `secondsPerLiquidityCumulativeX128s`: `BigNumber`[] ; `tickCumulatives`: `BigNumber`[]  }\> |
| `positions` | (`key`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `_liquidity`: `BigNumber` ; `feeGrowthInside0LastX128`: `BigNumber` ; `feeGrowthInside1LastX128`: `BigNumber` ; `tokensOwed0`: `BigNumber` ; `tokensOwed1`: `BigNumber`  }\> |
| `positions(bytes32)` | (`key`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `_liquidity`: `BigNumber` ; `feeGrowthInside0LastX128`: `BigNumber` ; `feeGrowthInside1LastX128`: `BigNumber` ; `tokensOwed0`: `BigNumber` ; `tokensOwed1`: `BigNumber`  }\> |
| `protocolFees` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `token0`: `BigNumber` ; `token1`: `BigNumber`  }\> |
| `protocolFees()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `token0`: `BigNumber` ; `token1`: `BigNumber`  }\> |
| `setFeeProtocol` | (`feeProtocol0`: `BigNumberish`, `feeProtocol1`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setFeeProtocol(uint8,uint8)` | (`feeProtocol0`: `BigNumberish`, `feeProtocol1`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `slot0` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `number`, `number`, `number`, `number`, `number`, `boolean`] & { `feeProtocol`: `number` ; `observationCardinality`: `number` ; `observationCardinalityNext`: `number` ; `observationIndex`: `number` ; `sqrtPriceX96`: `BigNumber` ; `tick`: `number` ; `unlocked`: `boolean`  }\> |
| `slot0()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `number`, `number`, `number`, `number`, `number`, `boolean`] & { `feeProtocol`: `number` ; `observationCardinality`: `number` ; `observationCardinalityNext`: `number` ; `observationIndex`: `number` ; `sqrtPriceX96`: `BigNumber` ; `tick`: `number` ; `unlocked`: `boolean`  }\> |
| `snapshotCumulativesInside` | (`tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `number`] & { `secondsInside`: `number` ; `secondsPerLiquidityInsideX128`: `BigNumber` ; `tickCumulativeInside`: `BigNumber`  }\> |
| `snapshotCumulativesInside(int24,int24)` | (`tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `number`] & { `secondsInside`: `number` ; `secondsPerLiquidityInsideX128`: `BigNumber` ; `tickCumulativeInside`: `BigNumber`  }\> |
| `swap` | (`recipient`: `string`, `zeroForOne`: `boolean`, `amountSpecified`: `BigNumberish`, `sqrtPriceLimitX96`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `amount0`: `BigNumber` ; `amount1`: `BigNumber`  }\> |
| `swap(address,bool,int256,uint160,bytes)` | (`recipient`: `string`, `zeroForOne`: `boolean`, `amountSpecified`: `BigNumberish`, `sqrtPriceLimitX96`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `amount0`: `BigNumber` ; `amount1`: `BigNumber`  }\> |
| `tickBitmap` | (`wordPosition`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `tickBitmap(int16)` | (`wordPosition`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `tickSpacing` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `tickSpacing()` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `ticks` | (`tick`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `number`, `boolean`] & { `feeGrowthOutside0X128`: `BigNumber` ; `feeGrowthOutside1X128`: `BigNumber` ; `initialized`: `boolean` ; `liquidityGross`: `BigNumber` ; `liquidityNet`: `BigNumber` ; `secondsOutside`: `number` ; `secondsPerLiquidityOutsideX128`: `BigNumber` ; `tickCumulativeOutside`: `BigNumber`  }\> |
| `ticks(int24)` | (`tick`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `number`, `boolean`] & { `feeGrowthOutside0X128`: `BigNumber` ; `feeGrowthOutside1X128`: `BigNumber` ; `initialized`: `boolean` ; `liquidityGross`: `BigNumber` ; `liquidityNet`: `BigNumber` ; `secondsOutside`: `number` ; `secondsPerLiquidityOutsideX128`: `BigNumber` ; `tickCumulativeOutside`: `BigNumber`  }\> |
| `token0` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `token0()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `token1` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `token1()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:816](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L816)

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
| `burn` | (`tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `burn(int24,int24,uint128)` | (`tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `collect` | (`recipient`: `string`, `tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount0Requested`: `BigNumberish`, `amount1Requested`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `collect(address,int24,int24,uint128,uint128)` | (`recipient`: `string`, `tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount0Requested`: `BigNumberish`, `amount1Requested`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `collectProtocol` | (`recipient`: `string`, `amount0Requested`: `BigNumberish`, `amount1Requested`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `collectProtocol(address,uint128,uint128)` | (`recipient`: `string`, `amount0Requested`: `BigNumberish`, `amount1Requested`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `factory` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `factory()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `fee` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `fee()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `feeGrowthGlobal0X128` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `feeGrowthGlobal0X128()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `feeGrowthGlobal1X128` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `feeGrowthGlobal1X128()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `flash` | (`recipient`: `string`, `amount0`: `BigNumberish`, `amount1`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `flash(address,uint256,uint256,bytes)` | (`recipient`: `string`, `amount0`: `BigNumberish`, `amount1`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `increaseObservationCardinalityNext` | (`observationCardinalityNext`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `increaseObservationCardinalityNext(uint16)` | (`observationCardinalityNext`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initialize` | (`sqrtPriceX96`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initialize(uint160)` | (`sqrtPriceX96`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `liquidity` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `liquidity()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `maxLiquidityPerTick` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `maxLiquidityPerTick()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `mint` | (`recipient`: `string`, `tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `mint(address,int24,int24,uint128,bytes)` | (`recipient`: `string`, `tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `observations` | (`index`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `observations(uint256)` | (`index`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `observe` | (`secondsAgos`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `observe(uint32[])` | (`secondsAgos`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `positions` | (`key`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `positions(bytes32)` | (`key`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `protocolFees` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `protocolFees()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `setFeeProtocol` | (`feeProtocol0`: `BigNumberish`, `feeProtocol1`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setFeeProtocol(uint8,uint8)` | (`feeProtocol0`: `BigNumberish`, `feeProtocol1`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `slot0` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `slot0()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `snapshotCumulativesInside` | (`tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `snapshotCumulativesInside(int24,int24)` | (`tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `swap` | (`recipient`: `string`, `zeroForOne`: `boolean`, `amountSpecified`: `BigNumberish`, `sqrtPriceLimitX96`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `swap(address,bool,int256,uint160,bytes)` | (`recipient`: `string`, `zeroForOne`: `boolean`, `amountSpecified`: `BigNumberish`, `sqrtPriceLimitX96`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `tickBitmap` | (`wordPosition`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `tickBitmap(int16)` | (`wordPosition`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `tickSpacing` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `tickSpacing()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `ticks` | (`tick`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `ticks(int24)` | (`tick`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `token0` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `token0()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `token1` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `token1()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:1260](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L1260)

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

[src/wrappers/IUniswapV3Pool.d.ts:1116](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L1116)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `burn` | (`tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `burn(int24,int24,uint128)` | (`tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `collect` | (`recipient`: `string`, `tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount0Requested`: `BigNumberish`, `amount1Requested`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `collect(address,int24,int24,uint128,uint128)` | (`recipient`: `string`, `tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount0Requested`: `BigNumberish`, `amount1Requested`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `collectProtocol` | (`recipient`: `string`, `amount0Requested`: `BigNumberish`, `amount1Requested`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `collectProtocol(address,uint128,uint128)` | (`recipient`: `string`, `amount0Requested`: `BigNumberish`, `amount1Requested`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `factory` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `factory()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `fee` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `fee()` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `feeGrowthGlobal0X128` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `feeGrowthGlobal0X128()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `feeGrowthGlobal1X128` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `feeGrowthGlobal1X128()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `flash` | (`recipient`: `string`, `amount0`: `BigNumberish`, `amount1`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `flash(address,uint256,uint256,bytes)` | (`recipient`: `string`, `amount0`: `BigNumberish`, `amount1`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `increaseObservationCardinalityNext` | (`observationCardinalityNext`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `increaseObservationCardinalityNext(uint16)` | (`observationCardinalityNext`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialize` | (`sqrtPriceX96`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialize(uint160)` | (`sqrtPriceX96`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `liquidity` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `liquidity()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `maxLiquidityPerTick` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `maxLiquidityPerTick()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `mint` | (`recipient`: `string`, `tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `mint(address,int24,int24,uint128,bytes)` | (`recipient`: `string`, `tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `observations` | (`index`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`number`, `BigNumber`, `BigNumber`, `boolean`] & { `blockTimestamp`: `number` ; `initialized`: `boolean` ; `secondsPerLiquidityCumulativeX128`: `BigNumber` ; `tickCumulative`: `BigNumber`  }\> |
| `observations(uint256)` | (`index`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`number`, `BigNumber`, `BigNumber`, `boolean`] & { `blockTimestamp`: `number` ; `initialized`: `boolean` ; `secondsPerLiquidityCumulativeX128`: `BigNumber` ; `tickCumulative`: `BigNumber`  }\> |
| `observe` | (`secondsAgos`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`[], `BigNumber`[]] & { `secondsPerLiquidityCumulativeX128s`: `BigNumber`[] ; `tickCumulatives`: `BigNumber`[]  }\> |
| `observe(uint32[])` | (`secondsAgos`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`[], `BigNumber`[]] & { `secondsPerLiquidityCumulativeX128s`: `BigNumber`[] ; `tickCumulatives`: `BigNumber`[]  }\> |
| `positions` | (`key`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `_liquidity`: `BigNumber` ; `feeGrowthInside0LastX128`: `BigNumber` ; `feeGrowthInside1LastX128`: `BigNumber` ; `tokensOwed0`: `BigNumber` ; `tokensOwed1`: `BigNumber`  }\> |
| `positions(bytes32)` | (`key`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `_liquidity`: `BigNumber` ; `feeGrowthInside0LastX128`: `BigNumber` ; `feeGrowthInside1LastX128`: `BigNumber` ; `tokensOwed0`: `BigNumber` ; `tokensOwed1`: `BigNumber`  }\> |
| `protocolFees` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `token0`: `BigNumber` ; `token1`: `BigNumber`  }\> |
| `protocolFees()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `token0`: `BigNumber` ; `token1`: `BigNumber`  }\> |
| `setFeeProtocol` | (`feeProtocol0`: `BigNumberish`, `feeProtocol1`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setFeeProtocol(uint8,uint8)` | (`feeProtocol0`: `BigNumberish`, `feeProtocol1`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `slot0` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `number`, `number`, `number`, `number`, `number`, `boolean`] & { `feeProtocol`: `number` ; `observationCardinality`: `number` ; `observationCardinalityNext`: `number` ; `observationIndex`: `number` ; `sqrtPriceX96`: `BigNumber` ; `tick`: `number` ; `unlocked`: `boolean`  }\> |
| `slot0()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `number`, `number`, `number`, `number`, `number`, `boolean`] & { `feeProtocol`: `number` ; `observationCardinality`: `number` ; `observationCardinalityNext`: `number` ; `observationIndex`: `number` ; `sqrtPriceX96`: `BigNumber` ; `tick`: `number` ; `unlocked`: `boolean`  }\> |
| `snapshotCumulativesInside` | (`tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `number`] & { `secondsInside`: `number` ; `secondsPerLiquidityInsideX128`: `BigNumber` ; `tickCumulativeInside`: `BigNumber`  }\> |
| `snapshotCumulativesInside(int24,int24)` | (`tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `number`] & { `secondsInside`: `number` ; `secondsPerLiquidityInsideX128`: `BigNumber` ; `tickCumulativeInside`: `BigNumber`  }\> |
| `swap` | (`recipient`: `string`, `zeroForOne`: `boolean`, `amountSpecified`: `BigNumberish`, `sqrtPriceLimitX96`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `swap(address,bool,int256,uint160,bytes)` | (`recipient`: `string`, `zeroForOne`: `boolean`, `amountSpecified`: `BigNumberish`, `sqrtPriceLimitX96`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `tickBitmap` | (`wordPosition`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `tickBitmap(int16)` | (`wordPosition`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `tickSpacing` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `tickSpacing()` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `ticks` | (`tick`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `number`, `boolean`] & { `feeGrowthOutside0X128`: `BigNumber` ; `feeGrowthOutside1X128`: `BigNumber` ; `initialized`: `boolean` ; `liquidityGross`: `BigNumber` ; `liquidityNet`: `BigNumber` ; `secondsOutside`: `number` ; `secondsPerLiquidityOutsideX128`: `BigNumber` ; `tickCumulativeOutside`: `BigNumber`  }\> |
| `ticks(int24)` | (`tick`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `number`, `boolean`] & { `feeGrowthOutside0X128`: `BigNumber` ; `feeGrowthOutside1X128`: `BigNumber` ; `initialized`: `boolean` ; `liquidityGross`: `BigNumber` ; `liquidityNet`: `BigNumber` ; `secondsOutside`: `number` ; `secondsPerLiquidityOutsideX128`: `BigNumber` ; `tickCumulativeOutside`: `BigNumber`  }\> |
| `token0` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `token0()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `token1` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `token1()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:172](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L172)

___

### interface

• **interface**: [`IUniswapV3PoolInterface`](../interfaces/wrappers_IUniswapV3Pool.IUniswapV3PoolInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:170](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L170)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `burn` | (`tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `burn(int24,int24,uint128)` | (`tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `collect` | (`recipient`: `string`, `tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount0Requested`: `BigNumberish`, `amount1Requested`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `collect(address,int24,int24,uint128,uint128)` | (`recipient`: `string`, `tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount0Requested`: `BigNumberish`, `amount1Requested`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `collectProtocol` | (`recipient`: `string`, `amount0Requested`: `BigNumberish`, `amount1Requested`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `collectProtocol(address,uint128,uint128)` | (`recipient`: `string`, `amount0Requested`: `BigNumberish`, `amount1Requested`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `factory` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `factory()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `fee` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `fee()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `feeGrowthGlobal0X128` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `feeGrowthGlobal0X128()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `feeGrowthGlobal1X128` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `feeGrowthGlobal1X128()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `flash` | (`recipient`: `string`, `amount0`: `BigNumberish`, `amount1`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `flash(address,uint256,uint256,bytes)` | (`recipient`: `string`, `amount0`: `BigNumberish`, `amount1`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `increaseObservationCardinalityNext` | (`observationCardinalityNext`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `increaseObservationCardinalityNext(uint16)` | (`observationCardinalityNext`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialize` | (`sqrtPriceX96`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialize(uint160)` | (`sqrtPriceX96`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `liquidity` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `liquidity()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `maxLiquidityPerTick` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `maxLiquidityPerTick()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `mint` | (`recipient`: `string`, `tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `mint(address,int24,int24,uint128,bytes)` | (`recipient`: `string`, `tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `observations` | (`index`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `observations(uint256)` | (`index`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `observe` | (`secondsAgos`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `observe(uint32[])` | (`secondsAgos`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `positions` | (`key`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `positions(bytes32)` | (`key`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `protocolFees` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `protocolFees()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `setFeeProtocol` | (`feeProtocol0`: `BigNumberish`, `feeProtocol1`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setFeeProtocol(uint8,uint8)` | (`feeProtocol0`: `BigNumberish`, `feeProtocol1`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `slot0` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `slot0()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `snapshotCumulativesInside` | (`tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `snapshotCumulativesInside(int24,int24)` | (`tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `swap` | (`recipient`: `string`, `zeroForOne`: `boolean`, `amountSpecified`: `BigNumberish`, `sqrtPriceLimitX96`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `swap(address,bool,int256,uint160,bytes)` | (`recipient`: `string`, `zeroForOne`: `boolean`, `amountSpecified`: `BigNumberish`, `sqrtPriceLimitX96`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `tickBitmap` | (`wordPosition`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `tickBitmap(int16)` | (`wordPosition`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `tickSpacing` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `tickSpacing()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `ticks` | (`tick`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `ticks(int24)` | (`tick`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `token0` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `token0()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `token1` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `token1()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:1458](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L1458)

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

▸ **attach**(`addressOrName`): [`IUniswapV3Pool`](wrappers_IUniswapV3Pool.IUniswapV3Pool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IUniswapV3Pool`](wrappers_IUniswapV3Pool.IUniswapV3Pool.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:131](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L131)

___

### burn

▸ **burn**(`tickLower`, `tickUpper`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tickLower` | `BigNumberish` |
| `tickUpper` | `BigNumberish` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:495](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L495)

___

### burn(int24,int24,uint128)

▸ **burn(int24,int24,uint128)**(`tickLower`, `tickUpper`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tickLower` | `BigNumberish` |
| `tickUpper` | `BigNumberish` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:502](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L502)

___

### collect

▸ **collect**(`recipient`, `tickLower`, `tickUpper`, `amount0Requested`, `amount1Requested`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipient` | `string` |
| `tickLower` | `BigNumberish` |
| `tickUpper` | `BigNumberish` |
| `amount0Requested` | `BigNumberish` |
| `amount1Requested` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:509](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L509)

___

### collect(address,int24,int24,uint128,uint128)

▸ **collect(address,int24,int24,uint128,uint128)**(`recipient`, `tickLower`, `tickUpper`, `amount0Requested`, `amount1Requested`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipient` | `string` |
| `tickLower` | `BigNumberish` |
| `tickUpper` | `BigNumberish` |
| `amount0Requested` | `BigNumberish` |
| `amount1Requested` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:518](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L518)

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

[src/wrappers/IUniswapV3Pool.d.ts:527](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L527)

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

[src/wrappers/IUniswapV3Pool.d.ts:534](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L534)

___

### connect

▸ **connect**(`signerOrProvider`): [`IUniswapV3Pool`](wrappers_IUniswapV3Pool.IUniswapV3Pool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IUniswapV3Pool`](wrappers_IUniswapV3Pool.IUniswapV3Pool.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:130](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L130)

___

### deployed

▸ **deployed**(): `Promise`<[`IUniswapV3Pool`](wrappers_IUniswapV3Pool.IUniswapV3Pool.md)\>

#### Returns

`Promise`<[`IUniswapV3Pool`](wrappers_IUniswapV3Pool.IUniswapV3Pool.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:132](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L132)

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

[src/wrappers/IUniswapV3Pool.d.ts:541](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L541)

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

[src/wrappers/IUniswapV3Pool.d.ts:543](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L543)

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

[src/wrappers/IUniswapV3Pool.d.ts:545](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L545)

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

[src/wrappers/IUniswapV3Pool.d.ts:547](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L547)

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

[src/wrappers/IUniswapV3Pool.d.ts:549](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L549)

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

[src/wrappers/IUniswapV3Pool.d.ts:551](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L551)

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

[src/wrappers/IUniswapV3Pool.d.ts:553](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L553)

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

[src/wrappers/IUniswapV3Pool.d.ts:555](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L555)

___

### flash

▸ **flash**(`recipient`, `amount0`, `amount1`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipient` | `string` |
| `amount0` | `BigNumberish` |
| `amount1` | `BigNumberish` |
| `data` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:557](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L557)

___

### flash(address,uint256,uint256,bytes)

▸ **flash(address,uint256,uint256,bytes)**(`recipient`, `amount0`, `amount1`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipient` | `string` |
| `amount0` | `BigNumberish` |
| `amount1` | `BigNumberish` |
| `data` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:565](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L565)

___

### increaseObservationCardinalityNext

▸ **increaseObservationCardinalityNext**(`observationCardinalityNext`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `observationCardinalityNext` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:573](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L573)

___

### increaseObservationCardinalityNext(uint16)

▸ **increaseObservationCardinalityNext(uint16)**(`observationCardinalityNext`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `observationCardinalityNext` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:578](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L578)

___

### initialize

▸ **initialize**(`sqrtPriceX96`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sqrtPriceX96` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:583](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L583)

___

### initialize(uint160)

▸ **initialize(uint160)**(`sqrtPriceX96`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sqrtPriceX96` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:585](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L585)

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

[src/wrappers/IUniswapV3Pool.d.ts:590](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L590)

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

[src/wrappers/IUniswapV3Pool.d.ts:592](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L592)

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

[src/wrappers/IUniswapV3Pool.d.ts:134](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L134)

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

[src/wrappers/IUniswapV3Pool.d.ts:157](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L157)

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

[src/wrappers/IUniswapV3Pool.d.ts:594](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L594)

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

[src/wrappers/IUniswapV3Pool.d.ts:596](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L596)

___

### mint

▸ **mint**(`recipient`, `tickLower`, `tickUpper`, `amount`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipient` | `string` |
| `tickLower` | `BigNumberish` |
| `tickUpper` | `BigNumberish` |
| `amount` | `BigNumberish` |
| `data` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:598](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L598)

___

### mint(address,int24,int24,uint128,bytes)

▸ **mint(address,int24,int24,uint128,bytes)**(`recipient`, `tickLower`, `tickUpper`, `amount`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipient` | `string` |
| `tickLower` | `BigNumberish` |
| `tickUpper` | `BigNumberish` |
| `amount` | `BigNumberish` |
| `data` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:607](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L607)

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

[src/wrappers/IUniswapV3Pool.d.ts:616](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L616)

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

[src/wrappers/IUniswapV3Pool.d.ts:628](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L628)

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

[src/wrappers/IUniswapV3Pool.d.ts:640](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L640)

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

[src/wrappers/IUniswapV3Pool.d.ts:650](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L650)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IUniswapV3Pool`](wrappers_IUniswapV3Pool.IUniswapV3Pool.md)

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

[`IUniswapV3Pool`](wrappers_IUniswapV3Pool.IUniswapV3Pool.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:137](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L137)

▸ **off**(`eventName`, `listener`): [`IUniswapV3Pool`](wrappers_IUniswapV3Pool.IUniswapV3Pool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IUniswapV3Pool`](wrappers_IUniswapV3Pool.IUniswapV3Pool.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:158](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L158)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IUniswapV3Pool`](wrappers_IUniswapV3Pool.IUniswapV3Pool.md)

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

[`IUniswapV3Pool`](wrappers_IUniswapV3Pool.IUniswapV3Pool.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:141](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L141)

▸ **on**(`eventName`, `listener`): [`IUniswapV3Pool`](wrappers_IUniswapV3Pool.IUniswapV3Pool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IUniswapV3Pool`](wrappers_IUniswapV3Pool.IUniswapV3Pool.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:159](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L159)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IUniswapV3Pool`](wrappers_IUniswapV3Pool.IUniswapV3Pool.md)

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

[`IUniswapV3Pool`](wrappers_IUniswapV3Pool.IUniswapV3Pool.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:145](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L145)

▸ **once**(`eventName`, `listener`): [`IUniswapV3Pool`](wrappers_IUniswapV3Pool.IUniswapV3Pool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IUniswapV3Pool`](wrappers_IUniswapV3Pool.IUniswapV3Pool.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:160](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L160)

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

[src/wrappers/IUniswapV3Pool.d.ts:660](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L660)

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

[src/wrappers/IUniswapV3Pool.d.ts:673](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L673)

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

[src/wrappers/IUniswapV3Pool.d.ts:686](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L686)

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

[src/wrappers/IUniswapV3Pool.d.ts:688](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L688)

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

[src/wrappers/IUniswapV3Pool.d.ts:164](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L164)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`IUniswapV3Pool`](wrappers_IUniswapV3Pool.IUniswapV3Pool.md)

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

[`IUniswapV3Pool`](wrappers_IUniswapV3Pool.IUniswapV3Pool.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:153](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L153)

▸ **removeAllListeners**(`eventName?`): [`IUniswapV3Pool`](wrappers_IUniswapV3Pool.IUniswapV3Pool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IUniswapV3Pool`](wrappers_IUniswapV3Pool.IUniswapV3Pool.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:162](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L162)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IUniswapV3Pool`](wrappers_IUniswapV3Pool.IUniswapV3Pool.md)

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

[`IUniswapV3Pool`](wrappers_IUniswapV3Pool.IUniswapV3Pool.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:149](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L149)

▸ **removeListener**(`eventName`, `listener`): [`IUniswapV3Pool`](wrappers_IUniswapV3Pool.IUniswapV3Pool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IUniswapV3Pool`](wrappers_IUniswapV3Pool.IUniswapV3Pool.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:161](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L161)

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

[src/wrappers/IUniswapV3Pool.d.ts:690](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L690)

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

[src/wrappers/IUniswapV3Pool.d.ts:696](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L696)

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

[src/wrappers/IUniswapV3Pool.d.ts:702](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L702)

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

[src/wrappers/IUniswapV3Pool.d.ts:714](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L714)

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

[src/wrappers/IUniswapV3Pool.d.ts:726](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L726)

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

[src/wrappers/IUniswapV3Pool.d.ts:738](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L738)

___

### swap

▸ **swap**(`recipient`, `zeroForOne`, `amountSpecified`, `sqrtPriceLimitX96`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipient` | `string` |
| `zeroForOne` | `boolean` |
| `amountSpecified` | `BigNumberish` |
| `sqrtPriceLimitX96` | `BigNumberish` |
| `data` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:750](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L750)

___

### swap(address,bool,int256,uint160,bytes)

▸ **swap(address,bool,int256,uint160,bytes)**(`recipient`, `zeroForOne`, `amountSpecified`, `sqrtPriceLimitX96`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipient` | `string` |
| `zeroForOne` | `boolean` |
| `amountSpecified` | `BigNumberish` |
| `sqrtPriceLimitX96` | `BigNumberish` |
| `data` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:759](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L759)

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

[src/wrappers/IUniswapV3Pool.d.ts:768](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L768)

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

[src/wrappers/IUniswapV3Pool.d.ts:770](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L770)

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

[src/wrappers/IUniswapV3Pool.d.ts:772](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L772)

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

[src/wrappers/IUniswapV3Pool.d.ts:774](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L774)

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

[src/wrappers/IUniswapV3Pool.d.ts:776](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L776)

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

[src/wrappers/IUniswapV3Pool.d.ts:792](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L792)

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

[src/wrappers/IUniswapV3Pool.d.ts:808](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L808)

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

[src/wrappers/IUniswapV3Pool.d.ts:810](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L810)

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

[src/wrappers/IUniswapV3Pool.d.ts:812](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L812)

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

[src/wrappers/IUniswapV3Pool.d.ts:814](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IUniswapV3Pool.d.ts#L814)

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
