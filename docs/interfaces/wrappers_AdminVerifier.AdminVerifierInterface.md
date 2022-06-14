[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/AdminVerifier](../modules/wrappers_AdminVerifier.md) / AdminVerifierInterface

# Interface: AdminVerifierInterface

[wrappers/AdminVerifier](../modules/wrappers_AdminVerifier.md).AdminVerifierInterface

## Hierarchy

- `Interface`

  ↳ **`AdminVerifierInterface`**

## Table of contents

### Properties

- [\_abiCoder](wrappers_AdminVerifier.AdminVerifierInterface.md#_abicoder)
- [\_isInterface](wrappers_AdminVerifier.AdminVerifierInterface.md#_isinterface)
- [deploy](wrappers_AdminVerifier.AdminVerifierInterface.md#deploy)
- [errors](wrappers_AdminVerifier.AdminVerifierInterface.md#errors)
- [events](wrappers_AdminVerifier.AdminVerifierInterface.md#events)
- [fragments](wrappers_AdminVerifier.AdminVerifierInterface.md#fragments)
- [functions](wrappers_AdminVerifier.AdminVerifierInterface.md#functions)
- [structs](wrappers_AdminVerifier.AdminVerifierInterface.md#structs)

### Methods

- [\_decodeParams](wrappers_AdminVerifier.AdminVerifierInterface.md#_decodeparams)
- [\_encodeParams](wrappers_AdminVerifier.AdminVerifierInterface.md#_encodeparams)
- [decodeErrorResult](wrappers_AdminVerifier.AdminVerifierInterface.md#decodeerrorresult)
- [decodeEventLog](wrappers_AdminVerifier.AdminVerifierInterface.md#decodeeventlog)
- [decodeFunctionData](wrappers_AdminVerifier.AdminVerifierInterface.md#decodefunctiondata)
- [decodeFunctionResult](wrappers_AdminVerifier.AdminVerifierInterface.md#decodefunctionresult)
- [encodeDeploy](wrappers_AdminVerifier.AdminVerifierInterface.md#encodedeploy)
- [encodeErrorResult](wrappers_AdminVerifier.AdminVerifierInterface.md#encodeerrorresult)
- [encodeEventLog](wrappers_AdminVerifier.AdminVerifierInterface.md#encodeeventlog)
- [encodeFilterTopics](wrappers_AdminVerifier.AdminVerifierInterface.md#encodefiltertopics)
- [encodeFunctionData](wrappers_AdminVerifier.AdminVerifierInterface.md#encodefunctiondata)
- [encodeFunctionResult](wrappers_AdminVerifier.AdminVerifierInterface.md#encodefunctionresult)
- [format](wrappers_AdminVerifier.AdminVerifierInterface.md#format)
- [getError](wrappers_AdminVerifier.AdminVerifierInterface.md#geterror)
- [getEvent](wrappers_AdminVerifier.AdminVerifierInterface.md#getevent)
- [getEventTopic](wrappers_AdminVerifier.AdminVerifierInterface.md#geteventtopic)
- [getFunction](wrappers_AdminVerifier.AdminVerifierInterface.md#getfunction)
- [getSighash](wrappers_AdminVerifier.AdminVerifierInterface.md#getsighash)
- [parseError](wrappers_AdminVerifier.AdminVerifierInterface.md#parseerror)
- [parseLog](wrappers_AdminVerifier.AdminVerifierInterface.md#parselog)
- [parseTransaction](wrappers_AdminVerifier.AdminVerifierInterface.md#parsetransaction)

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
| `OwnershipTransferred(address,address)` | `EventFragment` |
| `SignValidityUpdated(uint256)` | `EventFragment` |
| `SignerUpdated(address)` | `EventFragment` |
| `UserRegistered(address,bool,string)` | `EventFragment` |
| `UserUnregistered(address)` | `EventFragment` |

#### Overrides

ethers.utils.Interface.events

#### Defined in

[src/wrappers/AdminVerifier.d.ts:70](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L70)

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
| `VERIFICATION()` | `FunctionFragment` |
| `blackListDigest(bytes32)` | `FunctionFragment` |
| `initialize(address,address,uint256,string,string)` | `FunctionFragment` |
| `owner()` | `FunctionFragment` |
| `registerSelf(bool,uint8,bytes32,bytes32,string,uint256)` | `FunctionFragment` |
| `renounceOwnership()` | `FunctionFragment` |
| `signValidity()` | `FunctionFragment` |
| `signerAddress()` | `FunctionFragment` |
| `transferOwnership(address)` | `FunctionFragment` |
| `unregisterSelf()` | `FunctionFragment` |
| `unregisterUser(address)` | `FunctionFragment` |
| `updateSignValidity(uint256)` | `FunctionFragment` |
| `updateSignerAddress(address)` | `FunctionFragment` |
| `userData(address)` | `FunctionFragment` |

#### Overrides

ethers.utils.Interface.functions

#### Defined in

[src/wrappers/AdminVerifier.d.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L23)

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
| `functionFragment` | ``"VERIFICATION"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/AdminVerifier.d.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L55)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"blackListDigest"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/AdminVerifier.d.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L56)

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

[src/wrappers/AdminVerifier.d.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L57)

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

[src/wrappers/AdminVerifier.d.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L58)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"registerSelf"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/AdminVerifier.d.ts:59](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L59)

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

[src/wrappers/AdminVerifier.d.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L60)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"signValidity"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/AdminVerifier.d.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L61)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"signerAddress"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/AdminVerifier.d.ts:62](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L62)

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

[src/wrappers/AdminVerifier.d.ts:63](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L63)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"unregisterSelf"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/AdminVerifier.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L64)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"unregisterUser"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/AdminVerifier.d.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L65)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateSignValidity"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/AdminVerifier.d.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L66)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateSignerAddress"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/AdminVerifier.d.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L67)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"userData"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/AdminVerifier.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L68)

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
| `functionFragment` | ``"VERIFICATION"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/AdminVerifier.d.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L40)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"blackListDigest"`` |
| `values` | [`BytesLike`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/AdminVerifier.d.ts:41](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L41)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"initialize"`` |
| `values` | [`string`, `string`, `BigNumberish`, `string`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/AdminVerifier.d.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L42)

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

[src/wrappers/AdminVerifier.d.ts:43](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L43)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"registerSelf"`` |
| `values` | [`boolean`, `BigNumberish`, `BytesLike`, `BytesLike`, `string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/AdminVerifier.d.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L44)

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

[src/wrappers/AdminVerifier.d.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L45)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"signValidity"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/AdminVerifier.d.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L46)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"signerAddress"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/AdminVerifier.d.ts:47](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L47)

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

[src/wrappers/AdminVerifier.d.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L48)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"unregisterSelf"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/AdminVerifier.d.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L49)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"unregisterUser"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/AdminVerifier.d.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L50)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateSignValidity"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/AdminVerifier.d.ts:51](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L51)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateSignerAddress"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/AdminVerifier.d.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L52)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"userData"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/AdminVerifier.d.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L53)

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
| `nameOrSignatureOrTopic` | ``"OwnershipTransferred"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/AdminVerifier.d.ts:78](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L78)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"SignValidityUpdated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/AdminVerifier.d.ts:79](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L79)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"SignerUpdated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/AdminVerifier.d.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L80)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"UserRegistered"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/AdminVerifier.d.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L81)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"UserUnregistered"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/AdminVerifier.d.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/AdminVerifier.d.ts#L82)

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
