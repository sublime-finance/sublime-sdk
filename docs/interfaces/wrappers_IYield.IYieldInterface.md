[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/IYield](../modules/wrappers_IYield.md) / IYieldInterface

# Interface: IYieldInterface

[wrappers/IYield](../modules/wrappers_IYield.md).IYieldInterface

## Hierarchy

- `Interface`

  ↳ **`IYieldInterface`**

## Table of contents

### Properties

- [\_abiCoder](wrappers_IYield.IYieldInterface.md#_abicoder)
- [\_isInterface](wrappers_IYield.IYieldInterface.md#_isinterface)
- [deploy](wrappers_IYield.IYieldInterface.md#deploy)
- [errors](wrappers_IYield.IYieldInterface.md#errors)
- [events](wrappers_IYield.IYieldInterface.md#events)
- [fragments](wrappers_IYield.IYieldInterface.md#fragments)
- [functions](wrappers_IYield.IYieldInterface.md#functions)
- [structs](wrappers_IYield.IYieldInterface.md#structs)

### Methods

- [\_decodeParams](wrappers_IYield.IYieldInterface.md#_decodeparams)
- [\_encodeParams](wrappers_IYield.IYieldInterface.md#_encodeparams)
- [decodeErrorResult](wrappers_IYield.IYieldInterface.md#decodeerrorresult)
- [decodeEventLog](wrappers_IYield.IYieldInterface.md#decodeeventlog)
- [decodeFunctionData](wrappers_IYield.IYieldInterface.md#decodefunctiondata)
- [decodeFunctionResult](wrappers_IYield.IYieldInterface.md#decodefunctionresult)
- [encodeDeploy](wrappers_IYield.IYieldInterface.md#encodedeploy)
- [encodeErrorResult](wrappers_IYield.IYieldInterface.md#encodeerrorresult)
- [encodeEventLog](wrappers_IYield.IYieldInterface.md#encodeeventlog)
- [encodeFilterTopics](wrappers_IYield.IYieldInterface.md#encodefiltertopics)
- [encodeFunctionData](wrappers_IYield.IYieldInterface.md#encodefunctiondata)
- [encodeFunctionResult](wrappers_IYield.IYieldInterface.md#encodefunctionresult)
- [format](wrappers_IYield.IYieldInterface.md#format)
- [getError](wrappers_IYield.IYieldInterface.md#geterror)
- [getEvent](wrappers_IYield.IYieldInterface.md#getevent)
- [getEventTopic](wrappers_IYield.IYieldInterface.md#geteventtopic)
- [getFunction](wrappers_IYield.IYieldInterface.md#getfunction)
- [getSighash](wrappers_IYield.IYieldInterface.md#getsighash)
- [parseError](wrappers_IYield.IYieldInterface.md#parseerror)
- [parseLog](wrappers_IYield.IYieldInterface.md#parselog)
- [parseTransaction](wrappers_IYield.IYieldInterface.md#parsetransaction)

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
| `LockedTokens(address,address,uint256)` | `EventFragment` |
| `SavingsAccountUpdated(address)` | `EventFragment` |
| `UnlockedShares(address,uint256)` | `EventFragment` |
| `UnlockedTokens(address,uint256)` | `EventFragment` |

#### Overrides

ethers.utils.Interface.events

#### Defined in

[src/wrappers/IYield.d.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/IYield.d.ts#L46)

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
| `getSharesForTokens(uint256,address)` | `FunctionFragment` |
| `getTokensForShares(uint256,address)` | `FunctionFragment` |
| `liquidityToken(address)` | `FunctionFragment` |
| `lockTokens(address,address,uint256)` | `FunctionFragment` |
| `unlockShares(address,address,uint256)` | `FunctionFragment` |
| `unlockTokens(address,address,uint256)` | `FunctionFragment` |

#### Overrides

ethers.utils.Interface.functions

#### Defined in

[src/wrappers/IYield.d.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/IYield.d.ts#L23)

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
| `functionFragment` | ``"getSharesForTokens"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IYield.d.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/IYield.d.ts#L39)

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

[src/wrappers/IYield.d.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/IYield.d.ts#L40)

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

[src/wrappers/IYield.d.ts:41](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/IYield.d.ts#L41)

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

[src/wrappers/IYield.d.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/IYield.d.ts#L42)

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

[src/wrappers/IYield.d.ts:43](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/IYield.d.ts#L43)

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

[src/wrappers/IYield.d.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/IYield.d.ts#L44)

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
| `functionFragment` | ``"getSharesForTokens"`` |
| `values` | [`BigNumberish`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IYield.d.ts:32](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/IYield.d.ts#L32)

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

[src/wrappers/IYield.d.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/IYield.d.ts#L33)

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

[src/wrappers/IYield.d.ts:34](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/IYield.d.ts#L34)

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

[src/wrappers/IYield.d.ts:35](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/IYield.d.ts#L35)

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

[src/wrappers/IYield.d.ts:36](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/IYield.d.ts#L36)

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

[src/wrappers/IYield.d.ts:37](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/IYield.d.ts#L37)

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
| `nameOrSignatureOrTopic` | ``"LockedTokens"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IYield.d.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/IYield.d.ts#L53)

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

[src/wrappers/IYield.d.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/IYield.d.ts#L54)

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

[src/wrappers/IYield.d.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/IYield.d.ts#L55)

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

[src/wrappers/IYield.d.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/IYield.d.ts#L56)

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
