[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/IUniswapV3PoolDerivedState](../modules/wrappers_IUniswapV3PoolDerivedState.md) / IUniswapV3PoolDerivedStateInterface

# Interface: IUniswapV3PoolDerivedStateInterface

[wrappers/IUniswapV3PoolDerivedState](../modules/wrappers_IUniswapV3PoolDerivedState.md).IUniswapV3PoolDerivedStateInterface

## Hierarchy

- `Interface`

  ↳ **`IUniswapV3PoolDerivedStateInterface`**

## Table of contents

### Properties

- [\_abiCoder](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedStateInterface.md#_abicoder)
- [\_isInterface](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedStateInterface.md#_isinterface)
- [deploy](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedStateInterface.md#deploy)
- [errors](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedStateInterface.md#errors)
- [events](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedStateInterface.md#events)
- [fragments](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedStateInterface.md#fragments)
- [functions](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedStateInterface.md#functions)
- [structs](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedStateInterface.md#structs)

### Methods

- [\_decodeParams](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedStateInterface.md#_decodeparams)
- [\_encodeParams](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedStateInterface.md#_encodeparams)
- [decodeErrorResult](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedStateInterface.md#decodeerrorresult)
- [decodeEventLog](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedStateInterface.md#decodeeventlog)
- [decodeFunctionData](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedStateInterface.md#decodefunctiondata)
- [decodeFunctionResult](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedStateInterface.md#decodefunctionresult)
- [encodeDeploy](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedStateInterface.md#encodedeploy)
- [encodeErrorResult](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedStateInterface.md#encodeerrorresult)
- [encodeEventLog](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedStateInterface.md#encodeeventlog)
- [encodeFilterTopics](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedStateInterface.md#encodefiltertopics)
- [encodeFunctionData](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedStateInterface.md#encodefunctiondata)
- [encodeFunctionResult](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedStateInterface.md#encodefunctionresult)
- [format](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedStateInterface.md#format)
- [getError](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedStateInterface.md#geterror)
- [getEvent](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedStateInterface.md#getevent)
- [getEventTopic](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedStateInterface.md#geteventtopic)
- [getFunction](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedStateInterface.md#getfunction)
- [getSighash](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedStateInterface.md#getsighash)
- [parseError](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedStateInterface.md#parseerror)
- [parseLog](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedStateInterface.md#parselog)
- [parseTransaction](wrappers_IUniswapV3PoolDerivedState.IUniswapV3PoolDerivedStateInterface.md#parsetransaction)

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

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L33)

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
| `observe(uint32[])` | `FunctionFragment` |
| `snapshotCumulativesInside(int24,int24)` | `FunctionFragment` |

#### Overrides

ethers.utils.Interface.functions

#### Defined in

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:22](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L22)

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
| `functionFragment` | ``"observe"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:30](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L30)

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

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:31](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L31)

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
| `functionFragment` | ``"observe"`` |
| `values` | [`BigNumberish`[]] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:27](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L27)

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

[src/wrappers/IUniswapV3PoolDerivedState.d.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/IUniswapV3PoolDerivedState.d.ts#L28)

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
