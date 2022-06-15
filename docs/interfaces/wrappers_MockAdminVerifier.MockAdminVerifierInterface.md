[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/MockAdminVerifier](../modules/wrappers_MockAdminVerifier.md) / MockAdminVerifierInterface

# Interface: MockAdminVerifierInterface

[wrappers/MockAdminVerifier](../modules/wrappers_MockAdminVerifier.md).MockAdminVerifierInterface

## Hierarchy

- `Interface`

  ↳ **`MockAdminVerifierInterface`**

## Table of contents

### Properties

- [\_abiCoder](wrappers_MockAdminVerifier.MockAdminVerifierInterface.md#_abicoder)
- [\_isInterface](wrappers_MockAdminVerifier.MockAdminVerifierInterface.md#_isinterface)
- [deploy](wrappers_MockAdminVerifier.MockAdminVerifierInterface.md#deploy)
- [errors](wrappers_MockAdminVerifier.MockAdminVerifierInterface.md#errors)
- [events](wrappers_MockAdminVerifier.MockAdminVerifierInterface.md#events)
- [fragments](wrappers_MockAdminVerifier.MockAdminVerifierInterface.md#fragments)
- [functions](wrappers_MockAdminVerifier.MockAdminVerifierInterface.md#functions)
- [structs](wrappers_MockAdminVerifier.MockAdminVerifierInterface.md#structs)

### Methods

- [\_decodeParams](wrappers_MockAdminVerifier.MockAdminVerifierInterface.md#_decodeparams)
- [\_encodeParams](wrappers_MockAdminVerifier.MockAdminVerifierInterface.md#_encodeparams)
- [decodeErrorResult](wrappers_MockAdminVerifier.MockAdminVerifierInterface.md#decodeerrorresult)
- [decodeEventLog](wrappers_MockAdminVerifier.MockAdminVerifierInterface.md#decodeeventlog)
- [decodeFunctionData](wrappers_MockAdminVerifier.MockAdminVerifierInterface.md#decodefunctiondata)
- [decodeFunctionResult](wrappers_MockAdminVerifier.MockAdminVerifierInterface.md#decodefunctionresult)
- [encodeDeploy](wrappers_MockAdminVerifier.MockAdminVerifierInterface.md#encodedeploy)
- [encodeErrorResult](wrappers_MockAdminVerifier.MockAdminVerifierInterface.md#encodeerrorresult)
- [encodeEventLog](wrappers_MockAdminVerifier.MockAdminVerifierInterface.md#encodeeventlog)
- [encodeFilterTopics](wrappers_MockAdminVerifier.MockAdminVerifierInterface.md#encodefiltertopics)
- [encodeFunctionData](wrappers_MockAdminVerifier.MockAdminVerifierInterface.md#encodefunctiondata)
- [encodeFunctionResult](wrappers_MockAdminVerifier.MockAdminVerifierInterface.md#encodefunctionresult)
- [format](wrappers_MockAdminVerifier.MockAdminVerifierInterface.md#format)
- [getError](wrappers_MockAdminVerifier.MockAdminVerifierInterface.md#geterror)
- [getEvent](wrappers_MockAdminVerifier.MockAdminVerifierInterface.md#getevent)
- [getEventTopic](wrappers_MockAdminVerifier.MockAdminVerifierInterface.md#geteventtopic)
- [getFunction](wrappers_MockAdminVerifier.MockAdminVerifierInterface.md#getfunction)
- [getSighash](wrappers_MockAdminVerifier.MockAdminVerifierInterface.md#getsighash)
- [parseError](wrappers_MockAdminVerifier.MockAdminVerifierInterface.md#parseerror)
- [parseLog](wrappers_MockAdminVerifier.MockAdminVerifierInterface.md#parselog)
- [parseTransaction](wrappers_MockAdminVerifier.MockAdminVerifierInterface.md#parsetransaction)

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
| `SignerUpdated(address)` | `EventFragment` |
| `UserRegistered(address,bool,string)` | `EventFragment` |
| `UserUnregistered(address)` | `EventFragment` |
| `VerificationUpdated(address)` | `EventFragment` |

#### Overrides

ethers.utils.Interface.events

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/MockAdminVerifier.d.ts#L58)

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
| `initialize(address,address,string,string)` | `FunctionFragment` |
| `owner()` | `FunctionFragment` |
| `registerSelf()` | `FunctionFragment` |
| `registerUserViaOwner(address)` | `FunctionFragment` |
| `renounceOwnership()` | `FunctionFragment` |
| `transferOwnership(address)` | `FunctionFragment` |
| `unregisterSelf()` | `FunctionFragment` |
| `unregisterUser(address)` | `FunctionFragment` |
| `updateVerification(address)` | `FunctionFragment` |
| `verification()` | `FunctionFragment` |

#### Overrides

ethers.utils.Interface.functions

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/MockAdminVerifier.d.ts#L23)

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
| `functionFragment` | ``"initialize"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:47](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/MockAdminVerifier.d.ts#L47)

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

[src/wrappers/MockAdminVerifier.d.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/MockAdminVerifier.d.ts#L48)

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

[src/wrappers/MockAdminVerifier.d.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/MockAdminVerifier.d.ts#L49)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"registerUserViaOwner"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/MockAdminVerifier.d.ts#L50)

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

[src/wrappers/MockAdminVerifier.d.ts:51](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/MockAdminVerifier.d.ts#L51)

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

[src/wrappers/MockAdminVerifier.d.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/MockAdminVerifier.d.ts#L52)

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

[src/wrappers/MockAdminVerifier.d.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/MockAdminVerifier.d.ts#L53)

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

[src/wrappers/MockAdminVerifier.d.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/MockAdminVerifier.d.ts#L54)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateVerification"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/MockAdminVerifier.d.ts#L55)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"verification"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/MockAdminVerifier.d.ts#L56)

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
| `functionFragment` | ``"initialize"`` |
| `values` | [`string`, `string`, `string`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:36](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/MockAdminVerifier.d.ts#L36)

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

[src/wrappers/MockAdminVerifier.d.ts:37](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/MockAdminVerifier.d.ts#L37)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"registerSelf"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:38](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/MockAdminVerifier.d.ts#L38)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"registerUserViaOwner"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/MockAdminVerifier.d.ts#L39)

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

[src/wrappers/MockAdminVerifier.d.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/MockAdminVerifier.d.ts#L40)

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

[src/wrappers/MockAdminVerifier.d.ts:41](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/MockAdminVerifier.d.ts#L41)

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

[src/wrappers/MockAdminVerifier.d.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/MockAdminVerifier.d.ts#L42)

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

[src/wrappers/MockAdminVerifier.d.ts:43](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/MockAdminVerifier.d.ts#L43)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateVerification"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/MockAdminVerifier.d.ts#L44)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"verification"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/MockAdminVerifier.d.ts#L45)

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

[src/wrappers/MockAdminVerifier.d.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/MockAdminVerifier.d.ts#L66)

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

[src/wrappers/MockAdminVerifier.d.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/MockAdminVerifier.d.ts#L67)

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

[src/wrappers/MockAdminVerifier.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/MockAdminVerifier.d.ts#L68)

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

[src/wrappers/MockAdminVerifier.d.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/MockAdminVerifier.d.ts#L69)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"VerificationUpdated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:70](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/MockAdminVerifier.d.ts#L70)

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
