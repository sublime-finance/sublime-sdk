[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/Verification](../modules/wrappers_Verification.md) / VerificationInterface

# Interface: VerificationInterface

[wrappers/Verification](../modules/wrappers_Verification.md).VerificationInterface

## Hierarchy

- `Interface`

  ↳ **`VerificationInterface`**

## Table of contents

### Properties

- [\_abiCoder](wrappers_Verification.VerificationInterface.md#_abicoder)
- [\_isInterface](wrappers_Verification.VerificationInterface.md#_isinterface)
- [deploy](wrappers_Verification.VerificationInterface.md#deploy)
- [errors](wrappers_Verification.VerificationInterface.md#errors)
- [events](wrappers_Verification.VerificationInterface.md#events)
- [fragments](wrappers_Verification.VerificationInterface.md#fragments)
- [functions](wrappers_Verification.VerificationInterface.md#functions)
- [structs](wrappers_Verification.VerificationInterface.md#structs)

### Methods

- [\_decodeParams](wrappers_Verification.VerificationInterface.md#_decodeparams)
- [\_encodeParams](wrappers_Verification.VerificationInterface.md#_encodeparams)
- [decodeErrorResult](wrappers_Verification.VerificationInterface.md#decodeerrorresult)
- [decodeEventLog](wrappers_Verification.VerificationInterface.md#decodeeventlog)
- [decodeFunctionData](wrappers_Verification.VerificationInterface.md#decodefunctiondata)
- [decodeFunctionResult](wrappers_Verification.VerificationInterface.md#decodefunctionresult)
- [encodeDeploy](wrappers_Verification.VerificationInterface.md#encodedeploy)
- [encodeErrorResult](wrappers_Verification.VerificationInterface.md#encodeerrorresult)
- [encodeEventLog](wrappers_Verification.VerificationInterface.md#encodeeventlog)
- [encodeFilterTopics](wrappers_Verification.VerificationInterface.md#encodefiltertopics)
- [encodeFunctionData](wrappers_Verification.VerificationInterface.md#encodefunctiondata)
- [encodeFunctionResult](wrappers_Verification.VerificationInterface.md#encodefunctionresult)
- [format](wrappers_Verification.VerificationInterface.md#format)
- [getError](wrappers_Verification.VerificationInterface.md#geterror)
- [getEvent](wrappers_Verification.VerificationInterface.md#getevent)
- [getEventTopic](wrappers_Verification.VerificationInterface.md#geteventtopic)
- [getFunction](wrappers_Verification.VerificationInterface.md#getfunction)
- [getSighash](wrappers_Verification.VerificationInterface.md#getsighash)
- [parseError](wrappers_Verification.VerificationInterface.md#parseerror)
- [parseLog](wrappers_Verification.VerificationInterface.md#parselog)
- [parseTransaction](wrappers_Verification.VerificationInterface.md#parsetransaction)

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
| `ActivationDelayUpdated(uint256)` | `EventFragment` |
| `AddressLinked(address,address,uint256)` | `EventFragment` |
| `AddressLinkingRequestCancelled(address,address)` | `EventFragment` |
| `AddressLinkingRequested(address,address)` | `EventFragment` |
| `AddressUnlinked(address,address)` | `EventFragment` |
| `OwnershipTransferred(address,address)` | `EventFragment` |
| `UserRegistered(address,address,uint256)` | `EventFragment` |
| `UserUnregistered(address,address,address)` | `EventFragment` |
| `VerifierAdded(address)` | `EventFragment` |
| `VerifierRemoved(address)` | `EventFragment` |

#### Overrides

ethers.utils.Interface.events

#### Defined in

[src/wrappers/Verification.d.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L85)

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
| `activationDelay()` | `FunctionFragment` |
| `addVerifier(address)` | `FunctionFragment` |
| `cancelAddressLinkingRequest(address)` | `FunctionFragment` |
| `initialize(address,uint256)` | `FunctionFragment` |
| `isUser(address,address)` | `FunctionFragment` |
| `linkAddress(address)` | `FunctionFragment` |
| `linkedAddresses(address)` | `FunctionFragment` |
| `masterAddresses(address,address)` | `FunctionFragment` |
| `owner()` | `FunctionFragment` |
| `pendingLinkAddresses(address,address)` | `FunctionFragment` |
| `registerMasterAddress(address,bool)` | `FunctionFragment` |
| `removeVerifier(address)` | `FunctionFragment` |
| `renounceOwnership()` | `FunctionFragment` |
| `requestAddressLinking(address)` | `FunctionFragment` |
| `transferOwnership(address)` | `FunctionFragment` |
| `unlinkAddress(address)` | `FunctionFragment` |
| `unregisterMasterAddress(address,address)` | `FunctionFragment` |
| `updateActivationDelay(uint256)` | `FunctionFragment` |
| `verifiers(address)` | `FunctionFragment` |

#### Overrides

ethers.utils.Interface.functions

#### Defined in

[src/wrappers/Verification.d.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L23)

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
| `functionFragment` | ``"activationDelay"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Verification.d.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L65)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"addVerifier"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Verification.d.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L66)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"cancelAddressLinkingRequest"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Verification.d.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L67)

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

[src/wrappers/Verification.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L68)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"isUser"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Verification.d.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L69)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"linkAddress"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Verification.d.ts:70](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L70)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"linkedAddresses"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Verification.d.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L71)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"masterAddresses"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Verification.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L72)

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

[src/wrappers/Verification.d.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L73)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"pendingLinkAddresses"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Verification.d.ts:74](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L74)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"registerMasterAddress"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Verification.d.ts:75](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L75)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"removeVerifier"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Verification.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L76)

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

[src/wrappers/Verification.d.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L77)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"requestAddressLinking"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Verification.d.ts:78](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L78)

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

[src/wrappers/Verification.d.ts:79](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L79)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"unlinkAddress"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Verification.d.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L80)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"unregisterMasterAddress"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Verification.d.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L81)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateActivationDelay"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Verification.d.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L82)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"verifiers"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Verification.d.ts:83](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L83)

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
| `functionFragment` | ``"activationDelay"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Verification.d.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L45)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"addVerifier"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Verification.d.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L46)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"cancelAddressLinkingRequest"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Verification.d.ts:47](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L47)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"initialize"`` |
| `values` | [`string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Verification.d.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L48)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"isUser"`` |
| `values` | [`string`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Verification.d.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L49)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"linkAddress"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Verification.d.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L50)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"linkedAddresses"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Verification.d.ts:51](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L51)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"masterAddresses"`` |
| `values` | [`string`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Verification.d.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L52)

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

[src/wrappers/Verification.d.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L53)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"pendingLinkAddresses"`` |
| `values` | [`string`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Verification.d.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L54)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"registerMasterAddress"`` |
| `values` | [`string`, `boolean`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Verification.d.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L55)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"removeVerifier"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Verification.d.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L56)

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

[src/wrappers/Verification.d.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L57)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"requestAddressLinking"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Verification.d.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L58)

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

[src/wrappers/Verification.d.ts:59](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L59)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"unlinkAddress"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Verification.d.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L60)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"unregisterMasterAddress"`` |
| `values` | [`string`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Verification.d.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L61)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateActivationDelay"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Verification.d.ts:62](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L62)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"verifiers"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Verification.d.ts:63](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L63)

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
| `nameOrSignatureOrTopic` | ``"ActivationDelayUpdated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/Verification.d.ts:98](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L98)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"AddressLinked"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/Verification.d.ts:99](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L99)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"AddressLinkingRequestCancelled"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/Verification.d.ts:100](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L100)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"AddressLinkingRequested"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/Verification.d.ts:101](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L101)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"AddressUnlinked"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/Verification.d.ts:102](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L102)

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

[src/wrappers/Verification.d.ts:103](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L103)

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

[src/wrappers/Verification.d.ts:104](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L104)

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

[src/wrappers/Verification.d.ts:105](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L105)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"VerifierAdded"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/Verification.d.ts:106](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L106)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"VerifierRemoved"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/Verification.d.ts:107](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/Verification.d.ts#L107)

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
