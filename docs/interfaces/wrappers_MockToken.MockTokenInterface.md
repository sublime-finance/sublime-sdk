[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/MockToken](../modules/wrappers_MockToken.md) / MockTokenInterface

# Interface: MockTokenInterface

[wrappers/MockToken](../modules/wrappers_MockToken.md).MockTokenInterface

## Hierarchy

- `Interface`

  ↳ **`MockTokenInterface`**

## Table of contents

### Properties

- [\_abiCoder](wrappers_MockToken.MockTokenInterface.md#_abicoder)
- [\_isInterface](wrappers_MockToken.MockTokenInterface.md#_isinterface)
- [deploy](wrappers_MockToken.MockTokenInterface.md#deploy)
- [errors](wrappers_MockToken.MockTokenInterface.md#errors)
- [events](wrappers_MockToken.MockTokenInterface.md#events)
- [fragments](wrappers_MockToken.MockTokenInterface.md#fragments)
- [functions](wrappers_MockToken.MockTokenInterface.md#functions)
- [structs](wrappers_MockToken.MockTokenInterface.md#structs)

### Methods

- [\_decodeParams](wrappers_MockToken.MockTokenInterface.md#_decodeparams)
- [\_encodeParams](wrappers_MockToken.MockTokenInterface.md#_encodeparams)
- [decodeErrorResult](wrappers_MockToken.MockTokenInterface.md#decodeerrorresult)
- [decodeEventLog](wrappers_MockToken.MockTokenInterface.md#decodeeventlog)
- [decodeFunctionData](wrappers_MockToken.MockTokenInterface.md#decodefunctiondata)
- [decodeFunctionResult](wrappers_MockToken.MockTokenInterface.md#decodefunctionresult)
- [encodeDeploy](wrappers_MockToken.MockTokenInterface.md#encodedeploy)
- [encodeErrorResult](wrappers_MockToken.MockTokenInterface.md#encodeerrorresult)
- [encodeEventLog](wrappers_MockToken.MockTokenInterface.md#encodeeventlog)
- [encodeFilterTopics](wrappers_MockToken.MockTokenInterface.md#encodefiltertopics)
- [encodeFunctionData](wrappers_MockToken.MockTokenInterface.md#encodefunctiondata)
- [encodeFunctionResult](wrappers_MockToken.MockTokenInterface.md#encodefunctionresult)
- [format](wrappers_MockToken.MockTokenInterface.md#format)
- [getError](wrappers_MockToken.MockTokenInterface.md#geterror)
- [getEvent](wrappers_MockToken.MockTokenInterface.md#getevent)
- [getEventTopic](wrappers_MockToken.MockTokenInterface.md#geteventtopic)
- [getFunction](wrappers_MockToken.MockTokenInterface.md#getfunction)
- [getSighash](wrappers_MockToken.MockTokenInterface.md#getsighash)
- [parseError](wrappers_MockToken.MockTokenInterface.md#parseerror)
- [parseLog](wrappers_MockToken.MockTokenInterface.md#parselog)
- [parseTransaction](wrappers_MockToken.MockTokenInterface.md#parsetransaction)

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
| `Approval(address,address,uint256)` | `EventFragment` |
| `OwnershipTransferred(address,address)` | `EventFragment` |
| `Transfer(address,address,uint256)` | `EventFragment` |

#### Overrides

ethers.utils.Interface.events

#### Defined in

[src/wrappers/MockToken.d.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L73)

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
| `allowance(address,address)` | `FunctionFragment` |
| `approve(address,uint256)` | `FunctionFragment` |
| `balanceOf(address)` | `FunctionFragment` |
| `decimals()` | `FunctionFragment` |
| `decreaseAllowance(address,uint256)` | `FunctionFragment` |
| `increaseAllowance(address,uint256)` | `FunctionFragment` |
| `mint(address,uint256)` | `FunctionFragment` |
| `name()` | `FunctionFragment` |
| `owner()` | `FunctionFragment` |
| `renounceOwnership()` | `FunctionFragment` |
| `symbol()` | `FunctionFragment` |
| `totalSupply()` | `FunctionFragment` |
| `transfer(address,uint256)` | `FunctionFragment` |
| `transferFrom(address,address,uint256)` | `FunctionFragment` |
| `transferOwnership(address)` | `FunctionFragment` |

#### Overrides

ethers.utils.Interface.functions

#### Defined in

[src/wrappers/MockToken.d.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L23)

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
| `functionFragment` | ``"allowance"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/MockToken.d.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L57)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"approve"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/MockToken.d.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L58)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"balanceOf"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/MockToken.d.ts:59](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L59)

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

[src/wrappers/MockToken.d.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L60)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"decreaseAllowance"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/MockToken.d.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L61)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"increaseAllowance"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/MockToken.d.ts:62](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L62)

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

[src/wrappers/MockToken.d.ts:63](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L63)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"name"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/MockToken.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L64)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"owner"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/MockToken.d.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L65)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"renounceOwnership"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/MockToken.d.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L66)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"symbol"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/MockToken.d.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L67)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"totalSupply"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/MockToken.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L68)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"transfer"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/MockToken.d.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L69)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"transferFrom"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/MockToken.d.ts:70](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L70)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"transferOwnership"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/MockToken.d.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L71)

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
| `functionFragment` | ``"allowance"`` |
| `values` | [`string`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/MockToken.d.ts:41](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L41)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"approve"`` |
| `values` | [`string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/MockToken.d.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L42)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"balanceOf"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/MockToken.d.ts:43](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L43)

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

[src/wrappers/MockToken.d.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L44)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"decreaseAllowance"`` |
| `values` | [`string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/MockToken.d.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L45)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"increaseAllowance"`` |
| `values` | [`string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/MockToken.d.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L46)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"mint"`` |
| `values` | [`string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/MockToken.d.ts:47](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L47)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"name"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/MockToken.d.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L48)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"owner"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/MockToken.d.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L49)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"renounceOwnership"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/MockToken.d.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L50)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"symbol"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/MockToken.d.ts:51](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L51)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"totalSupply"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/MockToken.d.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L52)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"transfer"`` |
| `values` | [`string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/MockToken.d.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L53)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"transferFrom"`` |
| `values` | [`string`, `string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/MockToken.d.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L54)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"transferOwnership"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/MockToken.d.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L55)

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
| `nameOrSignatureOrTopic` | ``"Approval"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/MockToken.d.ts:79](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L79)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"OwnershipTransferred"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/MockToken.d.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L80)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"Transfer"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/MockToken.d.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockToken.d.ts#L81)

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
