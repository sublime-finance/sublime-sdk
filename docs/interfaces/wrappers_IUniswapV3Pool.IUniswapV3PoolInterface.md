[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/IUniswapV3Pool](../modules/wrappers_IUniswapV3Pool.md) / IUniswapV3PoolInterface

# Interface: IUniswapV3PoolInterface

[wrappers/IUniswapV3Pool](../modules/wrappers_IUniswapV3Pool.md).IUniswapV3PoolInterface

## Hierarchy

- `Interface`

  ↳ **`IUniswapV3PoolInterface`**

## Table of contents

### Properties

- [\_abiCoder](wrappers_IUniswapV3Pool.IUniswapV3PoolInterface.md#_abicoder)
- [\_isInterface](wrappers_IUniswapV3Pool.IUniswapV3PoolInterface.md#_isinterface)
- [deploy](wrappers_IUniswapV3Pool.IUniswapV3PoolInterface.md#deploy)
- [errors](wrappers_IUniswapV3Pool.IUniswapV3PoolInterface.md#errors)
- [events](wrappers_IUniswapV3Pool.IUniswapV3PoolInterface.md#events)
- [fragments](wrappers_IUniswapV3Pool.IUniswapV3PoolInterface.md#fragments)
- [functions](wrappers_IUniswapV3Pool.IUniswapV3PoolInterface.md#functions)
- [structs](wrappers_IUniswapV3Pool.IUniswapV3PoolInterface.md#structs)

### Methods

- [\_decodeParams](wrappers_IUniswapV3Pool.IUniswapV3PoolInterface.md#_decodeparams)
- [\_encodeParams](wrappers_IUniswapV3Pool.IUniswapV3PoolInterface.md#_encodeparams)
- [decodeErrorResult](wrappers_IUniswapV3Pool.IUniswapV3PoolInterface.md#decodeerrorresult)
- [decodeEventLog](wrappers_IUniswapV3Pool.IUniswapV3PoolInterface.md#decodeeventlog)
- [decodeFunctionData](wrappers_IUniswapV3Pool.IUniswapV3PoolInterface.md#decodefunctiondata)
- [decodeFunctionResult](wrappers_IUniswapV3Pool.IUniswapV3PoolInterface.md#decodefunctionresult)
- [encodeDeploy](wrappers_IUniswapV3Pool.IUniswapV3PoolInterface.md#encodedeploy)
- [encodeErrorResult](wrappers_IUniswapV3Pool.IUniswapV3PoolInterface.md#encodeerrorresult)
- [encodeEventLog](wrappers_IUniswapV3Pool.IUniswapV3PoolInterface.md#encodeeventlog)
- [encodeFilterTopics](wrappers_IUniswapV3Pool.IUniswapV3PoolInterface.md#encodefiltertopics)
- [encodeFunctionData](wrappers_IUniswapV3Pool.IUniswapV3PoolInterface.md#encodefunctiondata)
- [encodeFunctionResult](wrappers_IUniswapV3Pool.IUniswapV3PoolInterface.md#encodefunctionresult)
- [format](wrappers_IUniswapV3Pool.IUniswapV3PoolInterface.md#format)
- [getError](wrappers_IUniswapV3Pool.IUniswapV3PoolInterface.md#geterror)
- [getEvent](wrappers_IUniswapV3Pool.IUniswapV3PoolInterface.md#getevent)
- [getEventTopic](wrappers_IUniswapV3Pool.IUniswapV3PoolInterface.md#geteventtopic)
- [getFunction](wrappers_IUniswapV3Pool.IUniswapV3PoolInterface.md#getfunction)
- [getSighash](wrappers_IUniswapV3Pool.IUniswapV3PoolInterface.md#getsighash)
- [parseError](wrappers_IUniswapV3Pool.IUniswapV3PoolInterface.md#parseerror)
- [parseLog](wrappers_IUniswapV3Pool.IUniswapV3PoolInterface.md#parselog)
- [parseTransaction](wrappers_IUniswapV3Pool.IUniswapV3PoolInterface.md#parsetransaction)

## Properties

### \_abiCoder

• `Readonly` **\_abiCoder**: `AbiCoder`

#### Inherited from

ethers.utils.Interface.\_abiCoder

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:50

___

### \_isInterface

• `Readonly` **\_isInterface**: `boolean`

#### Inherited from

ethers.utils.Interface.\_isInterface

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:51

___

### deploy

• `Readonly` **deploy**: `ConstructorFragment`

#### Inherited from

ethers.utils.Interface.deploy

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:49

___

### errors

• `Readonly` **errors**: `Object`

#### Index signature

▪ [name: `string`]: `ErrorFragment`

#### Inherited from

ethers.utils.Interface.errors

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:37

___

### events

• **events**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Burn(address,int24,int24,uint128,uint256,uint256)` | `EventFragment` |
| `Collect(address,address,int24,int24,uint128,uint128)` | `EventFragment` |
| `CollectProtocol(address,address,uint128,uint128)` | `EventFragment` |
| `Flash(address,address,uint256,uint256,uint256,uint256)` | `EventFragment` |
| `IncreaseObservationCardinalityNext(uint16,uint16)` | `EventFragment` |
| `Initialize(uint160,int24)` | `EventFragment` |
| `Mint(address,address,int24,int24,uint128,uint256,uint256)` | `EventFragment` |
| `SetFeeProtocol(uint8,uint8,uint8,uint8)` | `EventFragment` |
| `Swap(address,address,int256,int256,uint160,uint128,int24)` | `EventFragment` |

#### Overrides

ethers.utils.Interface.events

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:106](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L106)

___

### fragments

• `Readonly` **fragments**: readonly `Fragment`[]

#### Inherited from

ethers.utils.Interface.fragments

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:36

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `burn(int24,int24,uint128)` | `FunctionFragment` |
| `collect(address,int24,int24,uint128,uint128)` | `FunctionFragment` |
| `collectProtocol(address,uint128,uint128)` | `FunctionFragment` |
| `factory()` | `FunctionFragment` |
| `fee()` | `FunctionFragment` |
| `feeGrowthGlobal0X128()` | `FunctionFragment` |
| `feeGrowthGlobal1X128()` | `FunctionFragment` |
| `flash(address,uint256,uint256,bytes)` | `FunctionFragment` |
| `increaseObservationCardinalityNext(uint16)` | `FunctionFragment` |
| `initialize(uint160)` | `FunctionFragment` |
| `liquidity()` | `FunctionFragment` |
| `maxLiquidityPerTick()` | `FunctionFragment` |
| `mint(address,int24,int24,uint128,bytes)` | `FunctionFragment` |
| `observations(uint256)` | `FunctionFragment` |
| `observe(uint32[])` | `FunctionFragment` |
| `positions(bytes32)` | `FunctionFragment` |
| `protocolFees()` | `FunctionFragment` |
| `setFeeProtocol(uint8,uint8)` | `FunctionFragment` |
| `slot0()` | `FunctionFragment` |
| `snapshotCumulativesInside(int24,int24)` | `FunctionFragment` |
| `swap(address,bool,int256,uint160,bytes)` | `FunctionFragment` |
| `tickBitmap(int16)` | `FunctionFragment` |
| `tickSpacing()` | `FunctionFragment` |
| `ticks(int24)` | `FunctionFragment` |
| `token0()` | `FunctionFragment` |
| `token1()` | `FunctionFragment` |

#### Overrides

ethers.utils.Interface.functions

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L23)

___

### structs

• `Readonly` **structs**: `Object`

#### Index signature

▪ [name: `string`]: `any`

#### Inherited from

ethers.utils.Interface.structs

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:46

## Methods

### \_decodeParams

▸ **_decodeParams**(`params`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | readonly `ParamType`[] |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Inherited from

ethers.utils.Interface.\_decodeParams

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:63

___

### \_encodeParams

▸ **_encodeParams**(`params`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | readonly `ParamType`[] |
| `values` | readonly `any`[] |

#### Returns

`string`

#### Inherited from

ethers.utils.Interface.\_encodeParams

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:64

___

### decodeErrorResult

▸ **decodeErrorResult**(`fragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | `string` \| `ErrorFragment` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Inherited from

ethers.utils.Interface.decodeErrorResult

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:66

___

### decodeEventLog

▸ **decodeEventLog**(`eventFragment`, `data`, `topics?`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | `string` \| `EventFragment` |
| `data` | `BytesLike` |
| `topics?` | readonly `string`[] |

#### Returns

`Result`

#### Inherited from

ethers.utils.Interface.decodeEventLog

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:77

___

### decodeFunctionData

▸ **decodeFunctionData**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | `string` \| `FunctionFragment` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Inherited from

ethers.utils.Interface.decodeFunctionData

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:68

___

### decodeFunctionResult

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"burn"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:79](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L79)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"collect"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L80)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"collectProtocol"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L81)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"factory"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L82)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"fee"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:83](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L83)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"feeGrowthGlobal0X128"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L84)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"feeGrowthGlobal1X128"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L85)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"flash"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:86](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L86)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"increaseObservationCardinalityNext"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L87)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"initialize"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:88](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L88)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"liquidity"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:89](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L89)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"maxLiquidityPerTick"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:90](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L90)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"mint"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:91](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L91)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"observations"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:92](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L92)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"observe"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:93](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L93)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"positions"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:94](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L94)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"protocolFees"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:95](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L95)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setFeeProtocol"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:96](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L96)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"slot0"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:97](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L97)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"snapshotCumulativesInside"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:98](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L98)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"swap"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:99](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L99)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"tickBitmap"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:100](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L100)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"tickSpacing"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:101](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L101)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"ticks"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:102](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L102)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"token0"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:103](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L103)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"token1"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:104](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L104)

___

### encodeDeploy

▸ **encodeDeploy**(`values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values?` | readonly `any`[] |

#### Returns

`string`

#### Inherited from

ethers.utils.Interface.encodeDeploy

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:65

___

### encodeErrorResult

▸ **encodeErrorResult**(`fragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | `string` \| `ErrorFragment` |
| `values?` | readonly `any`[] |

#### Returns

`string`

#### Inherited from

ethers.utils.Interface.encodeErrorResult

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:67

___

### encodeEventLog

▸ **encodeEventLog**(`eventFragment`, `values`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | `EventFragment` |
| `values` | readonly `any`[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `topics` | `string`[] |

#### Inherited from

ethers.utils.Interface.encodeEventLog

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:73

___

### encodeFilterTopics

▸ **encodeFilterTopics**(`eventFragment`, `values`): (`string` \| `string`[])[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | `EventFragment` |
| `values` | readonly `any`[] |

#### Returns

(`string` \| `string`[])[]

#### Inherited from

ethers.utils.Interface.encodeFilterTopics

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:72

___

### encodeFunctionData

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"burn"`` |
| `values` | [`BigNumberish`, `BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L52)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"collect"`` |
| `values` | [`string`, `BigNumberish`, `BigNumberish`, `BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L53)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"collectProtocol"`` |
| `values` | [`string`, `BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L54)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"factory"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L55)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"fee"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L56)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"feeGrowthGlobal0X128"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L57)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"feeGrowthGlobal1X128"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L58)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"flash"`` |
| `values` | [`string`, `BigNumberish`, `BigNumberish`, `BytesLike`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:59](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L59)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"increaseObservationCardinalityNext"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L60)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"initialize"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L61)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"liquidity"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:62](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L62)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"maxLiquidityPerTick"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:63](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L63)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"mint"`` |
| `values` | [`string`, `BigNumberish`, `BigNumberish`, `BigNumberish`, `BytesLike`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L64)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"observations"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L65)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"observe"`` |
| `values` | [`BigNumberish`[]] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L66)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"positions"`` |
| `values` | [`BytesLike`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L67)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"protocolFees"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L68)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setFeeProtocol"`` |
| `values` | [`BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L69)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"slot0"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:70](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L70)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"snapshotCumulativesInside"`` |
| `values` | [`BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L71)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"swap"`` |
| `values` | [`string`, `boolean`, `BigNumberish`, `BigNumberish`, `BytesLike`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L72)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"tickBitmap"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L73)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"tickSpacing"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:74](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L74)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"ticks"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:75](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L75)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"token0"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L76)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"token1"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L77)

___

### encodeFunctionResult

▸ **encodeFunctionResult**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | `string` \| `FunctionFragment` |
| `values?` | readonly `any`[] |

#### Returns

`string`

#### Inherited from

ethers.utils.Interface.encodeFunctionResult

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:71

___

### format

▸ **format**(`format?`): `string` \| `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `format?` | `string` |

#### Returns

`string` \| `string`[]

#### Inherited from

ethers.utils.Interface.format

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:53

___

### getError

▸ **getError**(`nameOrSignatureOrSighash`): `ErrorFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrSighash` | `string` |

#### Returns

`ErrorFragment`

#### Inherited from

ethers.utils.Interface.getError

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:60

___

### getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"Burn"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:118](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L118)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"Collect"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:119](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L119)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"CollectProtocol"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:120](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L120)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"Flash"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:121](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L121)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"IncreaseObservationCardinalityNext"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:122](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L122)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"Initialize"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:123](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L123)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"Mint"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:124](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L124)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"SetFeeProtocol"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:125](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L125)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"Swap"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IUniswapV3Pool.d.ts:126](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IUniswapV3Pool.d.ts#L126)

___

### getEventTopic

▸ **getEventTopic**(`eventFragment`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | `string` \| `EventFragment` |

#### Returns

`string`

#### Inherited from

ethers.utils.Interface.getEventTopic

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:62

___

### getFunction

▸ **getFunction**(`nameOrSignatureOrSighash`): `FunctionFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrSighash` | `string` |

#### Returns

`FunctionFragment`

#### Inherited from

ethers.utils.Interface.getFunction

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:58

___

### getSighash

▸ **getSighash**(`fragment`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | `string` \| `FunctionFragment` \| `ErrorFragment` |

#### Returns

`string`

#### Inherited from

ethers.utils.Interface.getSighash

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:61

___

### parseError

▸ **parseError**(`data`): `ErrorDescription`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `BytesLike` |

#### Returns

`ErrorDescription`

#### Inherited from

ethers.utils.Interface.parseError

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:86

___

### parseLog

▸ **parseLog**(`log`): `LogDescription`

#### Parameters

| Name | Type |
| :------ | :------ |
| `log` | `Object` |
| `log.data` | `string` |
| `log.topics` | `string`[] |

#### Returns

`LogDescription`

#### Inherited from

ethers.utils.Interface.parseLog

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:82

___

### parseTransaction

▸ **parseTransaction**(`tx`): `TransactionDescription`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Object` |
| `tx.data` | `string` |
| `tx.value?` | `BigNumberish` |

#### Returns

`TransactionDescription`

#### Inherited from

ethers.utils.Interface.parseTransaction

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:78
