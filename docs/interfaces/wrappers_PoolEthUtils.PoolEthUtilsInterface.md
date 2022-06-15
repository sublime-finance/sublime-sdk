[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/PoolEthUtils](../modules/wrappers_PoolEthUtils.md) / PoolEthUtilsInterface

# Interface: PoolEthUtilsInterface

[wrappers/PoolEthUtils](../modules/wrappers_PoolEthUtils.md).PoolEthUtilsInterface

## Hierarchy

- `Interface`

  ↳ **`PoolEthUtilsInterface`**

## Table of contents

### Properties

- [\_abiCoder](wrappers_PoolEthUtils.PoolEthUtilsInterface.md#_abicoder)
- [\_isInterface](wrappers_PoolEthUtils.PoolEthUtilsInterface.md#_isinterface)
- [deploy](wrappers_PoolEthUtils.PoolEthUtilsInterface.md#deploy)
- [errors](wrappers_PoolEthUtils.PoolEthUtilsInterface.md#errors)
- [events](wrappers_PoolEthUtils.PoolEthUtilsInterface.md#events)
- [fragments](wrappers_PoolEthUtils.PoolEthUtilsInterface.md#fragments)
- [functions](wrappers_PoolEthUtils.PoolEthUtilsInterface.md#functions)
- [structs](wrappers_PoolEthUtils.PoolEthUtilsInterface.md#structs)

### Methods

- [\_decodeParams](wrappers_PoolEthUtils.PoolEthUtilsInterface.md#_decodeparams)
- [\_encodeParams](wrappers_PoolEthUtils.PoolEthUtilsInterface.md#_encodeparams)
- [decodeErrorResult](wrappers_PoolEthUtils.PoolEthUtilsInterface.md#decodeerrorresult)
- [decodeEventLog](wrappers_PoolEthUtils.PoolEthUtilsInterface.md#decodeeventlog)
- [decodeFunctionData](wrappers_PoolEthUtils.PoolEthUtilsInterface.md#decodefunctiondata)
- [decodeFunctionResult](wrappers_PoolEthUtils.PoolEthUtilsInterface.md#decodefunctionresult)
- [encodeDeploy](wrappers_PoolEthUtils.PoolEthUtilsInterface.md#encodedeploy)
- [encodeErrorResult](wrappers_PoolEthUtils.PoolEthUtilsInterface.md#encodeerrorresult)
- [encodeEventLog](wrappers_PoolEthUtils.PoolEthUtilsInterface.md#encodeeventlog)
- [encodeFilterTopics](wrappers_PoolEthUtils.PoolEthUtilsInterface.md#encodefiltertopics)
- [encodeFunctionData](wrappers_PoolEthUtils.PoolEthUtilsInterface.md#encodefunctiondata)
- [encodeFunctionResult](wrappers_PoolEthUtils.PoolEthUtilsInterface.md#encodefunctionresult)
- [format](wrappers_PoolEthUtils.PoolEthUtilsInterface.md#format)
- [getError](wrappers_PoolEthUtils.PoolEthUtilsInterface.md#geterror)
- [getEvent](wrappers_PoolEthUtils.PoolEthUtilsInterface.md#getevent)
- [getEventTopic](wrappers_PoolEthUtils.PoolEthUtilsInterface.md#geteventtopic)
- [getFunction](wrappers_PoolEthUtils.PoolEthUtilsInterface.md#getfunction)
- [getSighash](wrappers_PoolEthUtils.PoolEthUtilsInterface.md#getsighash)
- [parseError](wrappers_PoolEthUtils.PoolEthUtilsInterface.md#parseerror)
- [parseLog](wrappers_PoolEthUtils.PoolEthUtilsInterface.md#parselog)
- [parseTransaction](wrappers_PoolEthUtils.PoolEthUtilsInterface.md#parsetransaction)

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

[src/wrappers/PoolEthUtils.d.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/PoolEthUtils.d.ts#L40)

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
| `addEthCollateralInMarginCall(address,address)` | `FunctionFragment` |
| `depositEthAsCollateralToPool(address)` | `FunctionFragment` |
| `ethLend(address,address,address)` | `FunctionFragment` |
| `weth()` | `FunctionFragment` |

#### Overrides

ethers.utils.Interface.functions

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/PoolEthUtils.d.ts#L23)

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
| `functionFragment` | ``"addEthCollateralInMarginCall"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:35](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/PoolEthUtils.d.ts#L35)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"depositEthAsCollateralToPool"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:36](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/PoolEthUtils.d.ts#L36)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"ethLend"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:37](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/PoolEthUtils.d.ts#L37)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"weth"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:38](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/PoolEthUtils.d.ts#L38)

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
| `functionFragment` | ``"addEthCollateralInMarginCall"`` |
| `values` | [`string`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:30](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/PoolEthUtils.d.ts#L30)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"depositEthAsCollateralToPool"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:31](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/PoolEthUtils.d.ts#L31)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"ethLend"`` |
| `values` | [`string`, `string`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:32](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/PoolEthUtils.d.ts#L32)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"weth"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/PoolEthUtils.d.ts#L33)

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
