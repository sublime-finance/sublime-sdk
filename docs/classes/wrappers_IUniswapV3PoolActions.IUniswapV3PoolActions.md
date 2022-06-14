[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/IUniswapV3PoolActions](../modules/wrappers_IUniswapV3PoolActions.md) / IUniswapV3PoolActions

# Class: IUniswapV3PoolActions

[wrappers/IUniswapV3PoolActions](../modules/wrappers_IUniswapV3PoolActions.md).IUniswapV3PoolActions

## Hierarchy

- `Contract`

  ↳ **`IUniswapV3PoolActions`**

## Table of contents

### Constructors

- [constructor](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#constructor)

### Properties

- [\_deployedPromise](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#_deployedpromise)
- [\_runningEvents](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#_runningevents)
- [\_wrappedEmits](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#_wrappedemits)
- [address](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#address)
- [callStatic](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#callstatic)
- [deployTransaction](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#deploytransaction)
- [estimateGas](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#estimategas)
- [filters](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#filters)
- [functions](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#functions)
- [interface](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#interface)
- [populateTransaction](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#populatetransaction)
- [provider](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#provider)
- [resolvedAddress](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#resolvedaddress)
- [signer](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#_checkrunningevents)
- [\_deployed](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#_deployed)
- [\_wrapEvent](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#_wrapevent)
- [attach](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#attach)
- [burn](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#burn)
- [burn(int24,int24,uint128)](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#burn(int24,int24,uint128))
- [collect](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#collect)
- [collect(address,int24,int24,uint128,uint128)](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#collect(address,int24,int24,uint128,uint128))
- [connect](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#connect)
- [deployed](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#deployed)
- [emit](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#emit)
- [fallback](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#fallback)
- [flash](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#flash)
- [flash(address,uint256,uint256,bytes)](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#flash(address,uint256,uint256,bytes))
- [increaseObservationCardinalityNext](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#increaseobservationcardinalitynext)
- [increaseObservationCardinalityNext(uint16)](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#increaseobservationcardinalitynext(uint16))
- [initialize](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#initialize)
- [initialize(uint160)](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#initialize(uint160))
- [listenerCount](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#listenercount)
- [listeners](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#listeners)
- [mint](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#mint)
- [mint(address,int24,int24,uint128,bytes)](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#mint(address,int24,int24,uint128,bytes))
- [off](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#off)
- [on](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#on)
- [once](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#once)
- [queryFilter](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#queryfilter)
- [removeAllListeners](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#removealllisteners)
- [removeListener](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#removelistener)
- [swap](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#swap)
- [swap(address,bool,int256,uint160,bytes)](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#swap(address,bool,int256,uint160,bytes))
- [getContractAddress](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#getcontractaddress)
- [getInterface](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#getinterface)
- [isIndexed](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md#isindexed)

## Constructors

### constructor

• **new IUniswapV3PoolActions**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `flash` | (`recipient`: `string`, `amount0`: `BigNumberish`, `amount1`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `flash(address,uint256,uint256,bytes)` | (`recipient`: `string`, `amount0`: `BigNumberish`, `amount1`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `increaseObservationCardinalityNext` | (`observationCardinalityNext`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `increaseObservationCardinalityNext(uint16)` | (`observationCardinalityNext`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialize` | (`sqrtPriceX96`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialize(uint160)` | (`sqrtPriceX96`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `mint` | (`recipient`: `string`, `tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `amount0`: `BigNumber` ; `amount1`: `BigNumber`  }\> |
| `mint(address,int24,int24,uint128,bytes)` | (`recipient`: `string`, `tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `amount0`: `BigNumber` ; `amount1`: `BigNumber`  }\> |
| `swap` | (`recipient`: `string`, `zeroForOne`: `boolean`, `amountSpecified`: `BigNumberish`, `sqrtPriceLimitX96`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `amount0`: `BigNumber` ; `amount1`: `BigNumber`  }\> |
| `swap(address,bool,int256,uint160,bytes)` | (`recipient`: `string`, `zeroForOne`: `boolean`, `amountSpecified`: `BigNumberish`, `sqrtPriceLimitX96`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `amount0`: `BigNumber` ; `amount1`: `BigNumber`  }\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/IUniswapV3PoolActions.d.ts:299](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L299)

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
| `flash` | (`recipient`: `string`, `amount0`: `BigNumberish`, `amount1`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `flash(address,uint256,uint256,bytes)` | (`recipient`: `string`, `amount0`: `BigNumberish`, `amount1`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `increaseObservationCardinalityNext` | (`observationCardinalityNext`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `increaseObservationCardinalityNext(uint16)` | (`observationCardinalityNext`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initialize` | (`sqrtPriceX96`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initialize(uint160)` | (`sqrtPriceX96`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `mint` | (`recipient`: `string`, `tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `mint(address,int24,int24,uint128,bytes)` | (`recipient`: `string`, `tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `swap` | (`recipient`: `string`, `zeroForOne`: `boolean`, `amountSpecified`: `BigNumberish`, `sqrtPriceLimitX96`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `swap(address,bool,int256,uint160,bytes)` | (`recipient`: `string`, `zeroForOne`: `boolean`, `amountSpecified`: `BigNumberish`, `sqrtPriceLimitX96`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/IUniswapV3PoolActions.d.ts:389](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L389)

___

### filters

• **filters**: `Object`

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/IUniswapV3PoolActions.d.ts:387](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L387)

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
| `flash` | (`recipient`: `string`, `amount0`: `BigNumberish`, `amount1`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `flash(address,uint256,uint256,bytes)` | (`recipient`: `string`, `amount0`: `BigNumberish`, `amount1`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `increaseObservationCardinalityNext` | (`observationCardinalityNext`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `increaseObservationCardinalityNext(uint16)` | (`observationCardinalityNext`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialize` | (`sqrtPriceX96`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialize(uint160)` | (`sqrtPriceX96`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `mint` | (`recipient`: `string`, `tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `mint(address,int24,int24,uint128,bytes)` | (`recipient`: `string`, `tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `swap` | (`recipient`: `string`, `zeroForOne`: `boolean`, `amountSpecified`: `BigNumberish`, `sqrtPriceLimitX96`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `swap(address,bool,int256,uint160,bytes)` | (`recipient`: `string`, `zeroForOne`: `boolean`, `amountSpecified`: `BigNumberish`, `sqrtPriceLimitX96`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/IUniswapV3PoolActions.d.ts:95](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L95)

___

### interface

• **interface**: [`IUniswapV3PoolActionsInterface`](../interfaces/wrappers_IUniswapV3PoolActions.IUniswapV3PoolActionsInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/IUniswapV3PoolActions.d.ts:93](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L93)

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
| `flash` | (`recipient`: `string`, `amount0`: `BigNumberish`, `amount1`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `flash(address,uint256,uint256,bytes)` | (`recipient`: `string`, `amount0`: `BigNumberish`, `amount1`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `increaseObservationCardinalityNext` | (`observationCardinalityNext`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `increaseObservationCardinalityNext(uint16)` | (`observationCardinalityNext`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialize` | (`sqrtPriceX96`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialize(uint160)` | (`sqrtPriceX96`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `mint` | (`recipient`: `string`, `tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `mint(address,int24,int24,uint128,bytes)` | (`recipient`: `string`, `tickLower`: `BigNumberish`, `tickUpper`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `swap` | (`recipient`: `string`, `zeroForOne`: `boolean`, `amountSpecified`: `BigNumberish`, `sqrtPriceLimitX96`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `swap(address,bool,int256,uint160,bytes)` | (`recipient`: `string`, `zeroForOne`: `boolean`, `amountSpecified`: `BigNumberish`, `sqrtPriceLimitX96`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/IUniswapV3PoolActions.d.ts:489](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L489)

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

▸ **attach**(`addressOrName`): [`IUniswapV3PoolActions`](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IUniswapV3PoolActions`](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/IUniswapV3PoolActions.d.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L54)

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

[src/wrappers/IUniswapV3PoolActions.d.ts:198](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L198)

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

[src/wrappers/IUniswapV3PoolActions.d.ts:205](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L205)

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

[src/wrappers/IUniswapV3PoolActions.d.ts:212](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L212)

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

[src/wrappers/IUniswapV3PoolActions.d.ts:221](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L221)

___

### connect

▸ **connect**(`signerOrProvider`): [`IUniswapV3PoolActions`](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IUniswapV3PoolActions`](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/IUniswapV3PoolActions.d.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L53)

___

### deployed

▸ **deployed**(): `Promise`<[`IUniswapV3PoolActions`](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md)\>

#### Returns

`Promise`<[`IUniswapV3PoolActions`](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/IUniswapV3PoolActions.d.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L55)

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

[src/wrappers/IUniswapV3PoolActions.d.ts:230](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L230)

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

[src/wrappers/IUniswapV3PoolActions.d.ts:238](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L238)

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

[src/wrappers/IUniswapV3PoolActions.d.ts:246](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L246)

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

[src/wrappers/IUniswapV3PoolActions.d.ts:251](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L251)

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

[src/wrappers/IUniswapV3PoolActions.d.ts:256](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L256)

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

[src/wrappers/IUniswapV3PoolActions.d.ts:258](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L258)

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

[src/wrappers/IUniswapV3PoolActions.d.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L57)

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

[src/wrappers/IUniswapV3PoolActions.d.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L80)

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

[src/wrappers/IUniswapV3PoolActions.d.ts:263](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L263)

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

[src/wrappers/IUniswapV3PoolActions.d.ts:272](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L272)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IUniswapV3PoolActions`](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md)

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

[`IUniswapV3PoolActions`](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IUniswapV3PoolActions.d.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L60)

▸ **off**(`eventName`, `listener`): [`IUniswapV3PoolActions`](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IUniswapV3PoolActions`](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IUniswapV3PoolActions.d.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L81)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IUniswapV3PoolActions`](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md)

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

[`IUniswapV3PoolActions`](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IUniswapV3PoolActions.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L64)

▸ **on**(`eventName`, `listener`): [`IUniswapV3PoolActions`](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IUniswapV3PoolActions`](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IUniswapV3PoolActions.d.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L82)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IUniswapV3PoolActions`](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md)

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

[`IUniswapV3PoolActions`](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IUniswapV3PoolActions.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L68)

▸ **once**(`eventName`, `listener`): [`IUniswapV3PoolActions`](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IUniswapV3PoolActions`](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IUniswapV3PoolActions.d.ts:83](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L83)

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

[src/wrappers/IUniswapV3PoolActions.d.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L87)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`IUniswapV3PoolActions`](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md)

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

[`IUniswapV3PoolActions`](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IUniswapV3PoolActions.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L76)

▸ **removeAllListeners**(`eventName?`): [`IUniswapV3PoolActions`](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IUniswapV3PoolActions`](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IUniswapV3PoolActions.d.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L85)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IUniswapV3PoolActions`](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md)

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

[`IUniswapV3PoolActions`](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IUniswapV3PoolActions.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L72)

▸ **removeListener**(`eventName`, `listener`): [`IUniswapV3PoolActions`](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IUniswapV3PoolActions`](wrappers_IUniswapV3PoolActions.IUniswapV3PoolActions.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IUniswapV3PoolActions.d.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L84)

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

[src/wrappers/IUniswapV3PoolActions.d.ts:281](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L281)

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

[src/wrappers/IUniswapV3PoolActions.d.ts:290](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolActions.d.ts#L290)

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
