[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/NoYield](../modules/wrappers_NoYield.md) / NoYieldInterface

# Interface: NoYieldInterface

[wrappers/NoYield](../modules/wrappers_NoYield.md).NoYieldInterface

## Hierarchy

- `Interface`

  ↳ **`NoYieldInterface`**

## Table of contents

### Properties

- [\_abiCoder](wrappers_NoYield.NoYieldInterface.md#_abicoder)
- [\_isInterface](wrappers_NoYield.NoYieldInterface.md#_isinterface)
- [deploy](wrappers_NoYield.NoYieldInterface.md#deploy)
- [errors](wrappers_NoYield.NoYieldInterface.md#errors)
- [events](wrappers_NoYield.NoYieldInterface.md#events)
- [fragments](wrappers_NoYield.NoYieldInterface.md#fragments)
- [functions](wrappers_NoYield.NoYieldInterface.md#functions)
- [structs](wrappers_NoYield.NoYieldInterface.md#structs)

### Methods

- [\_decodeParams](wrappers_NoYield.NoYieldInterface.md#_decodeparams)
- [\_encodeParams](wrappers_NoYield.NoYieldInterface.md#_encodeparams)
- [decodeErrorResult](wrappers_NoYield.NoYieldInterface.md#decodeerrorresult)
- [decodeEventLog](wrappers_NoYield.NoYieldInterface.md#decodeeventlog)
- [decodeFunctionData](wrappers_NoYield.NoYieldInterface.md#decodefunctiondata)
- [decodeFunctionResult](wrappers_NoYield.NoYieldInterface.md#decodefunctionresult)
- [encodeDeploy](wrappers_NoYield.NoYieldInterface.md#encodedeploy)
- [encodeErrorResult](wrappers_NoYield.NoYieldInterface.md#encodeerrorresult)
- [encodeEventLog](wrappers_NoYield.NoYieldInterface.md#encodeeventlog)
- [encodeFilterTopics](wrappers_NoYield.NoYieldInterface.md#encodefiltertopics)
- [encodeFunctionData](wrappers_NoYield.NoYieldInterface.md#encodefunctiondata)
- [encodeFunctionResult](wrappers_NoYield.NoYieldInterface.md#encodefunctionresult)
- [format](wrappers_NoYield.NoYieldInterface.md#format)
- [getError](wrappers_NoYield.NoYieldInterface.md#geterror)
- [getEvent](wrappers_NoYield.NoYieldInterface.md#getevent)
- [getEventTopic](wrappers_NoYield.NoYieldInterface.md#geteventtopic)
- [getFunction](wrappers_NoYield.NoYieldInterface.md#getfunction)
- [getSighash](wrappers_NoYield.NoYieldInterface.md#getsighash)
- [parseError](wrappers_NoYield.NoYieldInterface.md#parseerror)
- [parseLog](wrappers_NoYield.NoYieldInterface.md#parselog)
- [parseTransaction](wrappers_NoYield.NoYieldInterface.md#parsetransaction)

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
| `EmergencyWithdraw(address,address,uint256)` | `EventFragment` |
| `LockedTokens(address,address,uint256)` | `EventFragment` |
| `OwnershipTransferred(address,address)` | `EventFragment` |
| `SavingsAccountUpdated(address)` | `EventFragment` |
| `UnlockedShares(address,uint256)` | `EventFragment` |
| `UnlockedTokens(address,uint256)` | `EventFragment` |

#### Overrides

ethers.utils.Interface.events

#### Defined in

[src/wrappers/NoYield.d.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L67)

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
| `SAVINGS_ACCOUNT()` | `FunctionFragment` |
| `TREASURY()` | `FunctionFragment` |
| `emergencyWithdraw(address,uint256)` | `FunctionFragment` |
| `getSharesForTokens(uint256,address)` | `FunctionFragment` |
| `getTokensForShares(uint256,address)` | `FunctionFragment` |
| `initialize(address)` | `FunctionFragment` |
| `liquidityToken(address)` | `FunctionFragment` |
| `lockTokens(address,address,uint256)` | `FunctionFragment` |
| `owner()` | `FunctionFragment` |
| `renounceOwnership()` | `FunctionFragment` |
| `transferOwnership(address)` | `FunctionFragment` |
| `unlockShares(address,address,uint256)` | `FunctionFragment` |
| `unlockTokens(address,address,uint256)` | `FunctionFragment` |

#### Overrides

ethers.utils.Interface.functions

#### Defined in

[src/wrappers/NoYield.d.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L23)

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
| `functionFragment` | ``"SAVINGS_ACCOUNT"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/NoYield.d.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L53)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"TREASURY"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/NoYield.d.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L54)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"emergencyWithdraw"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/NoYield.d.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L55)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getSharesForTokens"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/NoYield.d.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L56)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getTokensForShares"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/NoYield.d.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L57)

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

[src/wrappers/NoYield.d.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L58)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"liquidityToken"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/NoYield.d.ts:59](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L59)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"lockTokens"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/NoYield.d.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L60)

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

[src/wrappers/NoYield.d.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L61)

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

[src/wrappers/NoYield.d.ts:62](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L62)

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

[src/wrappers/NoYield.d.ts:63](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L63)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"unlockShares"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/NoYield.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L64)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"unlockTokens"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/NoYield.d.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L65)

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
| `functionFragment` | ``"SAVINGS_ACCOUNT"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/NoYield.d.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L39)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"TREASURY"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/NoYield.d.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L40)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"emergencyWithdraw"`` |
| `values` | [`string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/NoYield.d.ts:41](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L41)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getSharesForTokens"`` |
| `values` | [`BigNumberish`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/NoYield.d.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L42)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getTokensForShares"`` |
| `values` | [`BigNumberish`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/NoYield.d.ts:43](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L43)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"initialize"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/NoYield.d.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L44)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"liquidityToken"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/NoYield.d.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L45)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"lockTokens"`` |
| `values` | [`string`, `string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/NoYield.d.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L46)

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

[src/wrappers/NoYield.d.ts:47](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L47)

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

[src/wrappers/NoYield.d.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L48)

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

[src/wrappers/NoYield.d.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L49)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"unlockShares"`` |
| `values` | [`string`, `string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/NoYield.d.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L50)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"unlockTokens"`` |
| `values` | [`string`, `string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/NoYield.d.ts:51](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L51)

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
| `nameOrSignatureOrTopic` | ``"EmergencyWithdraw"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/NoYield.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L76)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"LockedTokens"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/NoYield.d.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L77)

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

[src/wrappers/NoYield.d.ts:78](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L78)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"SavingsAccountUpdated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/NoYield.d.ts:79](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L79)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"UnlockedShares"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/NoYield.d.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L80)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"UnlockedTokens"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/NoYield.d.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/NoYield.d.ts#L81)

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
