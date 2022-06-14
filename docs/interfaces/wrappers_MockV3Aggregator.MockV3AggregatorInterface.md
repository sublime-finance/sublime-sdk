[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/MockV3Aggregator](../modules/wrappers_MockV3Aggregator.md) / MockV3AggregatorInterface

# Interface: MockV3AggregatorInterface

[wrappers/MockV3Aggregator](../modules/wrappers_MockV3Aggregator.md).MockV3AggregatorInterface

## Hierarchy

- `Interface`

  ↳ **`MockV3AggregatorInterface`**

## Table of contents

### Properties

- [\_abiCoder](wrappers_MockV3Aggregator.MockV3AggregatorInterface.md#_abicoder)
- [\_isInterface](wrappers_MockV3Aggregator.MockV3AggregatorInterface.md#_isinterface)
- [deploy](wrappers_MockV3Aggregator.MockV3AggregatorInterface.md#deploy)
- [errors](wrappers_MockV3Aggregator.MockV3AggregatorInterface.md#errors)
- [events](wrappers_MockV3Aggregator.MockV3AggregatorInterface.md#events)
- [fragments](wrappers_MockV3Aggregator.MockV3AggregatorInterface.md#fragments)
- [functions](wrappers_MockV3Aggregator.MockV3AggregatorInterface.md#functions)
- [structs](wrappers_MockV3Aggregator.MockV3AggregatorInterface.md#structs)

### Methods

- [\_decodeParams](wrappers_MockV3Aggregator.MockV3AggregatorInterface.md#_decodeparams)
- [\_encodeParams](wrappers_MockV3Aggregator.MockV3AggregatorInterface.md#_encodeparams)
- [decodeErrorResult](wrappers_MockV3Aggregator.MockV3AggregatorInterface.md#decodeerrorresult)
- [decodeEventLog](wrappers_MockV3Aggregator.MockV3AggregatorInterface.md#decodeeventlog)
- [decodeFunctionData](wrappers_MockV3Aggregator.MockV3AggregatorInterface.md#decodefunctiondata)
- [decodeFunctionResult](wrappers_MockV3Aggregator.MockV3AggregatorInterface.md#decodefunctionresult)
- [encodeDeploy](wrappers_MockV3Aggregator.MockV3AggregatorInterface.md#encodedeploy)
- [encodeErrorResult](wrappers_MockV3Aggregator.MockV3AggregatorInterface.md#encodeerrorresult)
- [encodeEventLog](wrappers_MockV3Aggregator.MockV3AggregatorInterface.md#encodeeventlog)
- [encodeFilterTopics](wrappers_MockV3Aggregator.MockV3AggregatorInterface.md#encodefiltertopics)
- [encodeFunctionData](wrappers_MockV3Aggregator.MockV3AggregatorInterface.md#encodefunctiondata)
- [encodeFunctionResult](wrappers_MockV3Aggregator.MockV3AggregatorInterface.md#encodefunctionresult)
- [format](wrappers_MockV3Aggregator.MockV3AggregatorInterface.md#format)
- [getError](wrappers_MockV3Aggregator.MockV3AggregatorInterface.md#geterror)
- [getEvent](wrappers_MockV3Aggregator.MockV3AggregatorInterface.md#getevent)
- [getEventTopic](wrappers_MockV3Aggregator.MockV3AggregatorInterface.md#geteventtopic)
- [getFunction](wrappers_MockV3Aggregator.MockV3AggregatorInterface.md#getfunction)
- [getSighash](wrappers_MockV3Aggregator.MockV3AggregatorInterface.md#getsighash)
- [parseError](wrappers_MockV3Aggregator.MockV3AggregatorInterface.md#parseerror)
- [parseLog](wrappers_MockV3Aggregator.MockV3AggregatorInterface.md#parselog)
- [parseTransaction](wrappers_MockV3Aggregator.MockV3AggregatorInterface.md#parsetransaction)

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

[src/wrappers/MockV3Aggregator.d.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockV3Aggregator.d.ts#L67)

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
| `getAnswer(uint256)` | `FunctionFragment` |
| `getRoundData(uint80)` | `FunctionFragment` |
| `getTimestamp(uint256)` | `FunctionFragment` |
| `latestAnswer()` | `FunctionFragment` |
| `latestRound()` | `FunctionFragment` |
| `latestRoundData()` | `FunctionFragment` |
| `latestTimestamp()` | `FunctionFragment` |
| `setAnswer(int256)` | `FunctionFragment` |
| `updateAnswer(int256)` | `FunctionFragment` |
| `updateRoundData(uint80,int256,uint256,uint256)` | `FunctionFragment` |
| `version()` | `FunctionFragment` |

#### Overrides

ethers.utils.Interface.functions

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockV3Aggregator.d.ts#L23)

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

[src/wrappers/MockV3Aggregator.d.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockV3Aggregator.d.ts#L53)

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

[src/wrappers/MockV3Aggregator.d.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockV3Aggregator.d.ts#L54)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getAnswer"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockV3Aggregator.d.ts#L55)

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

[src/wrappers/MockV3Aggregator.d.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockV3Aggregator.d.ts#L56)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getTimestamp"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockV3Aggregator.d.ts#L57)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"latestAnswer"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockV3Aggregator.d.ts#L58)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"latestRound"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:59](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockV3Aggregator.d.ts#L59)

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

[src/wrappers/MockV3Aggregator.d.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockV3Aggregator.d.ts#L60)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"latestTimestamp"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockV3Aggregator.d.ts#L61)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setAnswer"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:62](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockV3Aggregator.d.ts#L62)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateAnswer"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:63](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockV3Aggregator.d.ts#L63)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateRoundData"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockV3Aggregator.d.ts#L64)

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

[src/wrappers/MockV3Aggregator.d.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockV3Aggregator.d.ts#L65)

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

[src/wrappers/MockV3Aggregator.d.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockV3Aggregator.d.ts#L39)

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

[src/wrappers/MockV3Aggregator.d.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockV3Aggregator.d.ts#L40)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getAnswer"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:41](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockV3Aggregator.d.ts#L41)

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

[src/wrappers/MockV3Aggregator.d.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockV3Aggregator.d.ts#L42)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getTimestamp"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:43](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockV3Aggregator.d.ts#L43)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"latestAnswer"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockV3Aggregator.d.ts#L44)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"latestRound"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockV3Aggregator.d.ts#L45)

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

[src/wrappers/MockV3Aggregator.d.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockV3Aggregator.d.ts#L46)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"latestTimestamp"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:47](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockV3Aggregator.d.ts#L47)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setAnswer"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockV3Aggregator.d.ts#L48)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateAnswer"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockV3Aggregator.d.ts#L49)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateRoundData"`` |
| `values` | [`BigNumberish`, `BigNumberish`, `BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockV3Aggregator.d.ts#L50)

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

[src/wrappers/MockV3Aggregator.d.ts:51](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockV3Aggregator.d.ts#L51)

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
