[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/AggregatorV3Interface](../modules/wrappers_AggregatorV3Interface.md) / AggregatorV3InterfaceInterface

# Interface: AggregatorV3InterfaceInterface

[wrappers/AggregatorV3Interface](../modules/wrappers_AggregatorV3Interface.md).AggregatorV3InterfaceInterface

## Hierarchy

- `Interface`

  ↳ **`AggregatorV3InterfaceInterface`**

## Table of contents

### Properties

- [\_abiCoder](wrappers_AggregatorV3Interface.AggregatorV3InterfaceInterface.md#_abicoder)
- [\_isInterface](wrappers_AggregatorV3Interface.AggregatorV3InterfaceInterface.md#_isinterface)
- [deploy](wrappers_AggregatorV3Interface.AggregatorV3InterfaceInterface.md#deploy)
- [errors](wrappers_AggregatorV3Interface.AggregatorV3InterfaceInterface.md#errors)
- [events](wrappers_AggregatorV3Interface.AggregatorV3InterfaceInterface.md#events)
- [fragments](wrappers_AggregatorV3Interface.AggregatorV3InterfaceInterface.md#fragments)
- [functions](wrappers_AggregatorV3Interface.AggregatorV3InterfaceInterface.md#functions)
- [structs](wrappers_AggregatorV3Interface.AggregatorV3InterfaceInterface.md#structs)

### Methods

- [\_decodeParams](wrappers_AggregatorV3Interface.AggregatorV3InterfaceInterface.md#_decodeparams)
- [\_encodeParams](wrappers_AggregatorV3Interface.AggregatorV3InterfaceInterface.md#_encodeparams)
- [decodeErrorResult](wrappers_AggregatorV3Interface.AggregatorV3InterfaceInterface.md#decodeerrorresult)
- [decodeEventLog](wrappers_AggregatorV3Interface.AggregatorV3InterfaceInterface.md#decodeeventlog)
- [decodeFunctionData](wrappers_AggregatorV3Interface.AggregatorV3InterfaceInterface.md#decodefunctiondata)
- [decodeFunctionResult](wrappers_AggregatorV3Interface.AggregatorV3InterfaceInterface.md#decodefunctionresult)
- [encodeDeploy](wrappers_AggregatorV3Interface.AggregatorV3InterfaceInterface.md#encodedeploy)
- [encodeErrorResult](wrappers_AggregatorV3Interface.AggregatorV3InterfaceInterface.md#encodeerrorresult)
- [encodeEventLog](wrappers_AggregatorV3Interface.AggregatorV3InterfaceInterface.md#encodeeventlog)
- [encodeFilterTopics](wrappers_AggregatorV3Interface.AggregatorV3InterfaceInterface.md#encodefiltertopics)
- [encodeFunctionData](wrappers_AggregatorV3Interface.AggregatorV3InterfaceInterface.md#encodefunctiondata)
- [encodeFunctionResult](wrappers_AggregatorV3Interface.AggregatorV3InterfaceInterface.md#encodefunctionresult)
- [format](wrappers_AggregatorV3Interface.AggregatorV3InterfaceInterface.md#format)
- [getError](wrappers_AggregatorV3Interface.AggregatorV3InterfaceInterface.md#geterror)
- [getEvent](wrappers_AggregatorV3Interface.AggregatorV3InterfaceInterface.md#getevent)
- [getEventTopic](wrappers_AggregatorV3Interface.AggregatorV3InterfaceInterface.md#geteventtopic)
- [getFunction](wrappers_AggregatorV3Interface.AggregatorV3InterfaceInterface.md#getfunction)
- [getSighash](wrappers_AggregatorV3Interface.AggregatorV3InterfaceInterface.md#getsighash)
- [parseError](wrappers_AggregatorV3Interface.AggregatorV3InterfaceInterface.md#parseerror)
- [parseLog](wrappers_AggregatorV3Interface.AggregatorV3InterfaceInterface.md#parselog)
- [parseTransaction](wrappers_AggregatorV3Interface.AggregatorV3InterfaceInterface.md#parsetransaction)

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

[src/wrappers/AggregatorV3Interface.d.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/AggregatorV3Interface.d.ts#L42)

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
| `decimals()` | `FunctionFragment` |
| `description()` | `FunctionFragment` |
| `getRoundData(uint80)` | `FunctionFragment` |
| `latestRoundData()` | `FunctionFragment` |
| `version()` | `FunctionFragment` |

#### Overrides

ethers.utils.Interface.functions

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:22](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/AggregatorV3Interface.d.ts#L22)

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
| `functionFragment` | ``"decimals"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:36](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/AggregatorV3Interface.d.ts#L36)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"description"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:37](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/AggregatorV3Interface.d.ts#L37)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getRoundData"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:38](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/AggregatorV3Interface.d.ts#L38)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"latestRoundData"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/AggregatorV3Interface.d.ts#L39)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"version"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/AggregatorV3Interface.d.ts#L40)

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
| `functionFragment` | ``"decimals"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:30](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/AggregatorV3Interface.d.ts#L30)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"description"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:31](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/AggregatorV3Interface.d.ts#L31)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getRoundData"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:32](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/AggregatorV3Interface.d.ts#L32)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"latestRoundData"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/AggregatorV3Interface.d.ts#L33)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"version"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/AggregatorV3Interface.d.ts:34](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/AggregatorV3Interface.d.ts#L34)

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
