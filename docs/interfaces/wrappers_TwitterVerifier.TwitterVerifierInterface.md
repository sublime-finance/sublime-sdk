[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/TwitterVerifier](../modules/wrappers_TwitterVerifier.md) / TwitterVerifierInterface

# Interface: TwitterVerifierInterface

[wrappers/TwitterVerifier](../modules/wrappers_TwitterVerifier.md).TwitterVerifierInterface

## Hierarchy

- `Interface`

  ↳ **`TwitterVerifierInterface`**

## Table of contents

### Properties

- [\_abiCoder](wrappers_TwitterVerifier.TwitterVerifierInterface.md#_abicoder)
- [\_isInterface](wrappers_TwitterVerifier.TwitterVerifierInterface.md#_isinterface)
- [deploy](wrappers_TwitterVerifier.TwitterVerifierInterface.md#deploy)
- [errors](wrappers_TwitterVerifier.TwitterVerifierInterface.md#errors)
- [events](wrappers_TwitterVerifier.TwitterVerifierInterface.md#events)
- [fragments](wrappers_TwitterVerifier.TwitterVerifierInterface.md#fragments)
- [functions](wrappers_TwitterVerifier.TwitterVerifierInterface.md#functions)
- [structs](wrappers_TwitterVerifier.TwitterVerifierInterface.md#structs)

### Methods

- [\_decodeParams](wrappers_TwitterVerifier.TwitterVerifierInterface.md#_decodeparams)
- [\_encodeParams](wrappers_TwitterVerifier.TwitterVerifierInterface.md#_encodeparams)
- [decodeErrorResult](wrappers_TwitterVerifier.TwitterVerifierInterface.md#decodeerrorresult)
- [decodeEventLog](wrappers_TwitterVerifier.TwitterVerifierInterface.md#decodeeventlog)
- [decodeFunctionData](wrappers_TwitterVerifier.TwitterVerifierInterface.md#decodefunctiondata)
- [decodeFunctionResult](wrappers_TwitterVerifier.TwitterVerifierInterface.md#decodefunctionresult)
- [encodeDeploy](wrappers_TwitterVerifier.TwitterVerifierInterface.md#encodedeploy)
- [encodeErrorResult](wrappers_TwitterVerifier.TwitterVerifierInterface.md#encodeerrorresult)
- [encodeEventLog](wrappers_TwitterVerifier.TwitterVerifierInterface.md#encodeeventlog)
- [encodeFilterTopics](wrappers_TwitterVerifier.TwitterVerifierInterface.md#encodefiltertopics)
- [encodeFunctionData](wrappers_TwitterVerifier.TwitterVerifierInterface.md#encodefunctiondata)
- [encodeFunctionResult](wrappers_TwitterVerifier.TwitterVerifierInterface.md#encodefunctionresult)
- [format](wrappers_TwitterVerifier.TwitterVerifierInterface.md#format)
- [getError](wrappers_TwitterVerifier.TwitterVerifierInterface.md#geterror)
- [getEvent](wrappers_TwitterVerifier.TwitterVerifierInterface.md#getevent)
- [getEventTopic](wrappers_TwitterVerifier.TwitterVerifierInterface.md#geteventtopic)
- [getFunction](wrappers_TwitterVerifier.TwitterVerifierInterface.md#getfunction)
- [getSighash](wrappers_TwitterVerifier.TwitterVerifierInterface.md#getsighash)
- [parseError](wrappers_TwitterVerifier.TwitterVerifierInterface.md#parseerror)
- [parseLog](wrappers_TwitterVerifier.TwitterVerifierInterface.md#parselog)
- [parseTransaction](wrappers_TwitterVerifier.TwitterVerifierInterface.md#parsetransaction)

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

[src/wrappers/TwitterVerifier.d.ts:79](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L79)

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
| `registerSelf(bool,uint8,bytes32,bytes32,string,string,uint256)` | `FunctionFragment` |
| `renounceOwnership()` | `FunctionFragment` |
| `signValidity()` | `FunctionFragment` |
| `signerAddress()` | `FunctionFragment` |
| `transferOwnership(address)` | `FunctionFragment` |
| `twitterIdMap(string)` | `FunctionFragment` |
| `unregisterSelf()` | `FunctionFragment` |
| `unregisterUser(address)` | `FunctionFragment` |
| `updateSignValidity(uint256)` | `FunctionFragment` |
| `updateSignerAddress(address)` | `FunctionFragment` |
| `usedTweetIds(string)` | `FunctionFragment` |
| `userData(address)` | `FunctionFragment` |

#### Overrides

ethers.utils.Interface.functions

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L23)

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

[src/wrappers/TwitterVerifier.d.ts:62](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L62)

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

[src/wrappers/TwitterVerifier.d.ts:63](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L63)

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

[src/wrappers/TwitterVerifier.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L64)

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

[src/wrappers/TwitterVerifier.d.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L65)

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

[src/wrappers/TwitterVerifier.d.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L66)

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

[src/wrappers/TwitterVerifier.d.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L67)

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

[src/wrappers/TwitterVerifier.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L68)

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

[src/wrappers/TwitterVerifier.d.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L69)

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

[src/wrappers/TwitterVerifier.d.ts:70](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L70)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"twitterIdMap"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L71)

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

[src/wrappers/TwitterVerifier.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L72)

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

[src/wrappers/TwitterVerifier.d.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L73)

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

[src/wrappers/TwitterVerifier.d.ts:74](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L74)

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

[src/wrappers/TwitterVerifier.d.ts:75](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L75)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"usedTweetIds"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L76)

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

[src/wrappers/TwitterVerifier.d.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L77)

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

[src/wrappers/TwitterVerifier.d.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L42)

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

[src/wrappers/TwitterVerifier.d.ts:43](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L43)

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

[src/wrappers/TwitterVerifier.d.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L44)

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

[src/wrappers/TwitterVerifier.d.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L45)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"registerSelf"`` |
| `values` | [`boolean`, `BigNumberish`, `BytesLike`, `BytesLike`, `string`, `string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L46)

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

[src/wrappers/TwitterVerifier.d.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L50)

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

[src/wrappers/TwitterVerifier.d.ts:51](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L51)

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

[src/wrappers/TwitterVerifier.d.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L52)

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

[src/wrappers/TwitterVerifier.d.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L53)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"twitterIdMap"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L54)

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

[src/wrappers/TwitterVerifier.d.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L55)

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

[src/wrappers/TwitterVerifier.d.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L56)

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

[src/wrappers/TwitterVerifier.d.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L57)

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

[src/wrappers/TwitterVerifier.d.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L58)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"usedTweetIds"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:59](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L59)

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

[src/wrappers/TwitterVerifier.d.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L60)

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

[src/wrappers/TwitterVerifier.d.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L87)

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

[src/wrappers/TwitterVerifier.d.ts:88](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L88)

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

[src/wrappers/TwitterVerifier.d.ts:89](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L89)

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

[src/wrappers/TwitterVerifier.d.ts:90](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L90)

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

[src/wrappers/TwitterVerifier.d.ts:91](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/TwitterVerifier.d.ts#L91)

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
