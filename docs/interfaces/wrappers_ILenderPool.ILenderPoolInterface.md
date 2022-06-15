[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/ILenderPool](../modules/wrappers_ILenderPool.md) / ILenderPoolInterface

# Interface: ILenderPoolInterface

[wrappers/ILenderPool](../modules/wrappers_ILenderPool.md).ILenderPoolInterface

## Hierarchy

- `Interface`

  ↳ **`ILenderPoolInterface`**

## Table of contents

### Properties

- [\_abiCoder](wrappers_ILenderPool.ILenderPoolInterface.md#_abicoder)
- [\_isInterface](wrappers_ILenderPool.ILenderPoolInterface.md#_isinterface)
- [deploy](wrappers_ILenderPool.ILenderPoolInterface.md#deploy)
- [errors](wrappers_ILenderPool.ILenderPoolInterface.md#errors)
- [events](wrappers_ILenderPool.ILenderPoolInterface.md#events)
- [fragments](wrappers_ILenderPool.ILenderPoolInterface.md#fragments)
- [functions](wrappers_ILenderPool.ILenderPoolInterface.md#functions)
- [structs](wrappers_ILenderPool.ILenderPoolInterface.md#structs)

### Methods

- [\_decodeParams](wrappers_ILenderPool.ILenderPoolInterface.md#_decodeparams)
- [\_encodeParams](wrappers_ILenderPool.ILenderPoolInterface.md#_encodeparams)
- [decodeErrorResult](wrappers_ILenderPool.ILenderPoolInterface.md#decodeerrorresult)
- [decodeEventLog](wrappers_ILenderPool.ILenderPoolInterface.md#decodeeventlog)
- [decodeFunctionData](wrappers_ILenderPool.ILenderPoolInterface.md#decodefunctiondata)
- [decodeFunctionResult](wrappers_ILenderPool.ILenderPoolInterface.md#decodefunctionresult)
- [encodeDeploy](wrappers_ILenderPool.ILenderPoolInterface.md#encodedeploy)
- [encodeErrorResult](wrappers_ILenderPool.ILenderPoolInterface.md#encodeerrorresult)
- [encodeEventLog](wrappers_ILenderPool.ILenderPoolInterface.md#encodeeventlog)
- [encodeFilterTopics](wrappers_ILenderPool.ILenderPoolInterface.md#encodefiltertopics)
- [encodeFunctionData](wrappers_ILenderPool.ILenderPoolInterface.md#encodefunctiondata)
- [encodeFunctionResult](wrappers_ILenderPool.ILenderPoolInterface.md#encodefunctionresult)
- [format](wrappers_ILenderPool.ILenderPoolInterface.md#format)
- [getError](wrappers_ILenderPool.ILenderPoolInterface.md#geterror)
- [getEvent](wrappers_ILenderPool.ILenderPoolInterface.md#getevent)
- [getEventTopic](wrappers_ILenderPool.ILenderPoolInterface.md#geteventtopic)
- [getFunction](wrappers_ILenderPool.ILenderPoolInterface.md#getfunction)
- [getSighash](wrappers_ILenderPool.ILenderPoolInterface.md#getsighash)
- [parseError](wrappers_ILenderPool.ILenderPoolInterface.md#parseerror)
- [parseLog](wrappers_ILenderPool.ILenderPoolInterface.md#parselog)
- [parseTransaction](wrappers_ILenderPool.ILenderPoolInterface.md#parsetransaction)

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
| `LiquidityWithdrawn(uint256,address)` | `EventFragment` |

#### Overrides

ethers.utils.Interface.events

#### Defined in

[src/wrappers/ILenderPool.d.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L49)

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
| `borrowed(uint256,uint256)` | `FunctionFragment` |
| `create(uint256,address,address,address,uint256,uint256,uint256,bool)` | `FunctionFragment` |
| `repaid(uint256,uint256,uint256)` | `FunctionFragment` |
| `requestCancelled(uint256)` | `FunctionFragment` |
| `start(uint256)` | `FunctionFragment` |
| `terminate(uint256,address)` | `FunctionFragment` |

#### Overrides

ethers.utils.Interface.functions

#### Defined in

[src/wrappers/ILenderPool.d.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L23)

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
| `functionFragment` | ``"borrowed"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/ILenderPool.d.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L42)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"create"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/ILenderPool.d.ts:43](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L43)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"repaid"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/ILenderPool.d.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L44)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"requestCancelled"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/ILenderPool.d.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L45)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"start"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/ILenderPool.d.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L46)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"terminate"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/ILenderPool.d.ts:47](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L47)

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
| `functionFragment` | ``"borrowed"`` |
| `values` | [`BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/ILenderPool.d.ts:32](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L32)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"create"`` |
| `values` | [`BigNumberish`, `string`, `string`, `string`, `BigNumberish`, `BigNumberish`, `BigNumberish`, `boolean`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/ILenderPool.d.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L33)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"repaid"`` |
| `values` | [`BigNumberish`, `BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/ILenderPool.d.ts:37](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L37)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"requestCancelled"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/ILenderPool.d.ts:38](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L38)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"start"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/ILenderPool.d.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L39)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"terminate"`` |
| `values` | [`BigNumberish`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/ILenderPool.d.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L40)

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
| `nameOrSignatureOrTopic` | ``"LiquidityWithdrawn"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/ILenderPool.d.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L53)

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
