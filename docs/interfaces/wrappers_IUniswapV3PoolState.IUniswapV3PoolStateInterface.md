[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/IUniswapV3PoolState](../modules/wrappers_IUniswapV3PoolState.md) / IUniswapV3PoolStateInterface

# Interface: IUniswapV3PoolStateInterface

[wrappers/IUniswapV3PoolState](../modules/wrappers_IUniswapV3PoolState.md).IUniswapV3PoolStateInterface

## Hierarchy

- `Interface`

  ↳ **`IUniswapV3PoolStateInterface`**

## Table of contents

### Properties

- [\_abiCoder](wrappers_IUniswapV3PoolState.IUniswapV3PoolStateInterface.md#_abicoder)
- [\_isInterface](wrappers_IUniswapV3PoolState.IUniswapV3PoolStateInterface.md#_isinterface)
- [deploy](wrappers_IUniswapV3PoolState.IUniswapV3PoolStateInterface.md#deploy)
- [errors](wrappers_IUniswapV3PoolState.IUniswapV3PoolStateInterface.md#errors)
- [events](wrappers_IUniswapV3PoolState.IUniswapV3PoolStateInterface.md#events)
- [fragments](wrappers_IUniswapV3PoolState.IUniswapV3PoolStateInterface.md#fragments)
- [functions](wrappers_IUniswapV3PoolState.IUniswapV3PoolStateInterface.md#functions)
- [structs](wrappers_IUniswapV3PoolState.IUniswapV3PoolStateInterface.md#structs)

### Methods

- [\_decodeParams](wrappers_IUniswapV3PoolState.IUniswapV3PoolStateInterface.md#_decodeparams)
- [\_encodeParams](wrappers_IUniswapV3PoolState.IUniswapV3PoolStateInterface.md#_encodeparams)
- [decodeErrorResult](wrappers_IUniswapV3PoolState.IUniswapV3PoolStateInterface.md#decodeerrorresult)
- [decodeEventLog](wrappers_IUniswapV3PoolState.IUniswapV3PoolStateInterface.md#decodeeventlog)
- [decodeFunctionData](wrappers_IUniswapV3PoolState.IUniswapV3PoolStateInterface.md#decodefunctiondata)
- [decodeFunctionResult](wrappers_IUniswapV3PoolState.IUniswapV3PoolStateInterface.md#decodefunctionresult)
- [encodeDeploy](wrappers_IUniswapV3PoolState.IUniswapV3PoolStateInterface.md#encodedeploy)
- [encodeErrorResult](wrappers_IUniswapV3PoolState.IUniswapV3PoolStateInterface.md#encodeerrorresult)
- [encodeEventLog](wrappers_IUniswapV3PoolState.IUniswapV3PoolStateInterface.md#encodeeventlog)
- [encodeFilterTopics](wrappers_IUniswapV3PoolState.IUniswapV3PoolStateInterface.md#encodefiltertopics)
- [encodeFunctionData](wrappers_IUniswapV3PoolState.IUniswapV3PoolStateInterface.md#encodefunctiondata)
- [encodeFunctionResult](wrappers_IUniswapV3PoolState.IUniswapV3PoolStateInterface.md#encodefunctionresult)
- [format](wrappers_IUniswapV3PoolState.IUniswapV3PoolStateInterface.md#format)
- [getError](wrappers_IUniswapV3PoolState.IUniswapV3PoolStateInterface.md#geterror)
- [getEvent](wrappers_IUniswapV3PoolState.IUniswapV3PoolStateInterface.md#getevent)
- [getEventTopic](wrappers_IUniswapV3PoolState.IUniswapV3PoolStateInterface.md#geteventtopic)
- [getFunction](wrappers_IUniswapV3PoolState.IUniswapV3PoolStateInterface.md#getfunction)
- [getSighash](wrappers_IUniswapV3PoolState.IUniswapV3PoolStateInterface.md#getsighash)
- [parseError](wrappers_IUniswapV3PoolState.IUniswapV3PoolStateInterface.md#parseerror)
- [parseLog](wrappers_IUniswapV3PoolState.IUniswapV3PoolStateInterface.md#parselog)
- [parseTransaction](wrappers_IUniswapV3PoolState.IUniswapV3PoolStateInterface.md#parsetransaction)

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

#### Overrides

ethers.utils.Interface.events

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolState.d.ts#L54)

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
| `feeGrowthGlobal0X128()` | `FunctionFragment` |
| `feeGrowthGlobal1X128()` | `FunctionFragment` |
| `liquidity()` | `FunctionFragment` |
| `observations(uint256)` | `FunctionFragment` |
| `positions(bytes32)` | `FunctionFragment` |
| `protocolFees()` | `FunctionFragment` |
| `slot0()` | `FunctionFragment` |
| `tickBitmap(int16)` | `FunctionFragment` |
| `ticks(int24)` | `FunctionFragment` |

#### Overrides

ethers.utils.Interface.functions

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:22](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolState.d.ts#L22)

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
| `functionFragment` | ``"feeGrowthGlobal0X128"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IUniswapV3PoolState.d.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolState.d.ts#L44)

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

[src/wrappers/IUniswapV3PoolState.d.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolState.d.ts#L45)

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

[src/wrappers/IUniswapV3PoolState.d.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolState.d.ts#L46)

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

[src/wrappers/IUniswapV3PoolState.d.ts:47](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolState.d.ts#L47)

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

[src/wrappers/IUniswapV3PoolState.d.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolState.d.ts#L48)

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

[src/wrappers/IUniswapV3PoolState.d.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolState.d.ts#L49)

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

[src/wrappers/IUniswapV3PoolState.d.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolState.d.ts#L50)

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

[src/wrappers/IUniswapV3PoolState.d.ts:51](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolState.d.ts#L51)

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

[src/wrappers/IUniswapV3PoolState.d.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolState.d.ts#L52)

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

[src/wrappers/IUniswapV3PoolState.d.ts:34](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolState.d.ts#L34)

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

[src/wrappers/IUniswapV3PoolState.d.ts:35](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolState.d.ts#L35)

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

[src/wrappers/IUniswapV3PoolState.d.ts:36](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolState.d.ts#L36)

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

[src/wrappers/IUniswapV3PoolState.d.ts:37](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolState.d.ts#L37)

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

[src/wrappers/IUniswapV3PoolState.d.ts:38](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolState.d.ts#L38)

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

[src/wrappers/IUniswapV3PoolState.d.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolState.d.ts#L39)

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

[src/wrappers/IUniswapV3PoolState.d.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolState.d.ts#L40)

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

[src/wrappers/IUniswapV3PoolState.d.ts:41](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolState.d.ts#L41)

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

[src/wrappers/IUniswapV3PoolState.d.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IUniswapV3PoolState.d.ts#L42)

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
| `nameOrSignatureOrTopic` | `string` |

#### Returns

`EventFragment`

#### Inherited from

ethers.utils.Interface.getEvent

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:59

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
