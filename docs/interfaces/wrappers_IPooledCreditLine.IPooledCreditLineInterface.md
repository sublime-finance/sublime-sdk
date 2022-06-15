[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/IPooledCreditLine](../modules/wrappers_IPooledCreditLine.md) / IPooledCreditLineInterface

# Interface: IPooledCreditLineInterface

[wrappers/IPooledCreditLine](../modules/wrappers_IPooledCreditLine.md).IPooledCreditLineInterface

## Hierarchy

- `Interface`

  ↳ **`IPooledCreditLineInterface`**

## Table of contents

### Properties

- [\_abiCoder](wrappers_IPooledCreditLine.IPooledCreditLineInterface.md#_abicoder)
- [\_isInterface](wrappers_IPooledCreditLine.IPooledCreditLineInterface.md#_isinterface)
- [deploy](wrappers_IPooledCreditLine.IPooledCreditLineInterface.md#deploy)
- [errors](wrappers_IPooledCreditLine.IPooledCreditLineInterface.md#errors)
- [events](wrappers_IPooledCreditLine.IPooledCreditLineInterface.md#events)
- [fragments](wrappers_IPooledCreditLine.IPooledCreditLineInterface.md#fragments)
- [functions](wrappers_IPooledCreditLine.IPooledCreditLineInterface.md#functions)
- [structs](wrappers_IPooledCreditLine.IPooledCreditLineInterface.md#structs)

### Methods

- [\_decodeParams](wrappers_IPooledCreditLine.IPooledCreditLineInterface.md#_decodeparams)
- [\_encodeParams](wrappers_IPooledCreditLine.IPooledCreditLineInterface.md#_encodeparams)
- [decodeErrorResult](wrappers_IPooledCreditLine.IPooledCreditLineInterface.md#decodeerrorresult)
- [decodeEventLog](wrappers_IPooledCreditLine.IPooledCreditLineInterface.md#decodeeventlog)
- [decodeFunctionData](wrappers_IPooledCreditLine.IPooledCreditLineInterface.md#decodefunctiondata)
- [decodeFunctionResult](wrappers_IPooledCreditLine.IPooledCreditLineInterface.md#decodefunctionresult)
- [encodeDeploy](wrappers_IPooledCreditLine.IPooledCreditLineInterface.md#encodedeploy)
- [encodeErrorResult](wrappers_IPooledCreditLine.IPooledCreditLineInterface.md#encodeerrorresult)
- [encodeEventLog](wrappers_IPooledCreditLine.IPooledCreditLineInterface.md#encodeeventlog)
- [encodeFilterTopics](wrappers_IPooledCreditLine.IPooledCreditLineInterface.md#encodefiltertopics)
- [encodeFunctionData](wrappers_IPooledCreditLine.IPooledCreditLineInterface.md#encodefunctiondata)
- [encodeFunctionResult](wrappers_IPooledCreditLine.IPooledCreditLineInterface.md#encodefunctionresult)
- [format](wrappers_IPooledCreditLine.IPooledCreditLineInterface.md#format)
- [getError](wrappers_IPooledCreditLine.IPooledCreditLineInterface.md#geterror)
- [getEvent](wrappers_IPooledCreditLine.IPooledCreditLineInterface.md#getevent)
- [getEventTopic](wrappers_IPooledCreditLine.IPooledCreditLineInterface.md#geteventtopic)
- [getFunction](wrappers_IPooledCreditLine.IPooledCreditLineInterface.md#getfunction)
- [getSighash](wrappers_IPooledCreditLine.IPooledCreditLineInterface.md#getsighash)
- [parseError](wrappers_IPooledCreditLine.IPooledCreditLineInterface.md#parseerror)
- [parseLog](wrappers_IPooledCreditLine.IPooledCreditLineInterface.md#parselog)
- [parseTransaction](wrappers_IPooledCreditLine.IPooledCreditLineInterface.md#parsetransaction)

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

[src/wrappers/IPooledCreditLine.d.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IPooledCreditLine.d.ts#L49)

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
| `accept(uint256,uint256)` | `FunctionFragment` |
| `cancelRequestOnLowCollection(uint256)` | `FunctionFragment` |
| `cancelRequestOnRequestedStateAtEnd(uint256)` | `FunctionFragment` |
| `getEndsAt(uint256)` | `FunctionFragment` |
| `getPrincipal(uint256)` | `FunctionFragment` |
| `getStatusAndUpdate(uint256)` | `FunctionFragment` |
| `liquidate(uint256)` | `FunctionFragment` |

#### Overrides

ethers.utils.Interface.functions

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IPooledCreditLine.d.ts#L23)

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
| `functionFragment` | ``"accept"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:41](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IPooledCreditLine.d.ts#L41)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"cancelRequestOnLowCollection"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IPooledCreditLine.d.ts#L42)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"cancelRequestOnRequestedStateAtEnd"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:43](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IPooledCreditLine.d.ts#L43)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getEndsAt"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IPooledCreditLine.d.ts#L44)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getPrincipal"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IPooledCreditLine.d.ts#L45)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getStatusAndUpdate"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IPooledCreditLine.d.ts#L46)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"liquidate"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:47](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IPooledCreditLine.d.ts#L47)

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
| `functionFragment` | ``"accept"`` |
| `values` | [`BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IPooledCreditLine.d.ts#L33)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"cancelRequestOnLowCollection"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:34](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IPooledCreditLine.d.ts#L34)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"cancelRequestOnRequestedStateAtEnd"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:35](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IPooledCreditLine.d.ts#L35)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getEndsAt"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:36](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IPooledCreditLine.d.ts#L36)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getPrincipal"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:37](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IPooledCreditLine.d.ts#L37)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getStatusAndUpdate"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:38](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IPooledCreditLine.d.ts#L38)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"liquidate"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IPooledCreditLine.d.ts#L39)

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
