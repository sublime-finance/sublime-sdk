[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/OwnableUpgradeable](../modules/wrappers_OwnableUpgradeable.md) / OwnableUpgradeableInterface

# Interface: OwnableUpgradeableInterface

[wrappers/OwnableUpgradeable](../modules/wrappers_OwnableUpgradeable.md).OwnableUpgradeableInterface

## Hierarchy

- `Interface`

  ↳ **`OwnableUpgradeableInterface`**

## Table of contents

### Properties

- [\_abiCoder](wrappers_OwnableUpgradeable.OwnableUpgradeableInterface.md#_abicoder)
- [\_isInterface](wrappers_OwnableUpgradeable.OwnableUpgradeableInterface.md#_isinterface)
- [deploy](wrappers_OwnableUpgradeable.OwnableUpgradeableInterface.md#deploy)
- [errors](wrappers_OwnableUpgradeable.OwnableUpgradeableInterface.md#errors)
- [events](wrappers_OwnableUpgradeable.OwnableUpgradeableInterface.md#events)
- [fragments](wrappers_OwnableUpgradeable.OwnableUpgradeableInterface.md#fragments)
- [functions](wrappers_OwnableUpgradeable.OwnableUpgradeableInterface.md#functions)
- [structs](wrappers_OwnableUpgradeable.OwnableUpgradeableInterface.md#structs)

### Methods

- [\_decodeParams](wrappers_OwnableUpgradeable.OwnableUpgradeableInterface.md#_decodeparams)
- [\_encodeParams](wrappers_OwnableUpgradeable.OwnableUpgradeableInterface.md#_encodeparams)
- [decodeErrorResult](wrappers_OwnableUpgradeable.OwnableUpgradeableInterface.md#decodeerrorresult)
- [decodeEventLog](wrappers_OwnableUpgradeable.OwnableUpgradeableInterface.md#decodeeventlog)
- [decodeFunctionData](wrappers_OwnableUpgradeable.OwnableUpgradeableInterface.md#decodefunctiondata)
- [decodeFunctionResult](wrappers_OwnableUpgradeable.OwnableUpgradeableInterface.md#decodefunctionresult)
- [encodeDeploy](wrappers_OwnableUpgradeable.OwnableUpgradeableInterface.md#encodedeploy)
- [encodeErrorResult](wrappers_OwnableUpgradeable.OwnableUpgradeableInterface.md#encodeerrorresult)
- [encodeEventLog](wrappers_OwnableUpgradeable.OwnableUpgradeableInterface.md#encodeeventlog)
- [encodeFilterTopics](wrappers_OwnableUpgradeable.OwnableUpgradeableInterface.md#encodefiltertopics)
- [encodeFunctionData](wrappers_OwnableUpgradeable.OwnableUpgradeableInterface.md#encodefunctiondata)
- [encodeFunctionResult](wrappers_OwnableUpgradeable.OwnableUpgradeableInterface.md#encodefunctionresult)
- [format](wrappers_OwnableUpgradeable.OwnableUpgradeableInterface.md#format)
- [getError](wrappers_OwnableUpgradeable.OwnableUpgradeableInterface.md#geterror)
- [getEvent](wrappers_OwnableUpgradeable.OwnableUpgradeableInterface.md#getevent)
- [getEventTopic](wrappers_OwnableUpgradeable.OwnableUpgradeableInterface.md#geteventtopic)
- [getFunction](wrappers_OwnableUpgradeable.OwnableUpgradeableInterface.md#getfunction)
- [getSighash](wrappers_OwnableUpgradeable.OwnableUpgradeableInterface.md#getsighash)
- [parseError](wrappers_OwnableUpgradeable.OwnableUpgradeableInterface.md#parseerror)
- [parseLog](wrappers_OwnableUpgradeable.OwnableUpgradeableInterface.md#parselog)
- [parseTransaction](wrappers_OwnableUpgradeable.OwnableUpgradeableInterface.md#parsetransaction)

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

#### Overrides

ethers.utils.Interface.events

#### Defined in

[src/wrappers/OwnableUpgradeable.d.ts:37](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/OwnableUpgradeable.d.ts#L37)

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
| `owner()` | `FunctionFragment` |
| `renounceOwnership()` | `FunctionFragment` |
| `transferOwnership(address)` | `FunctionFragment` |

#### Overrides

ethers.utils.Interface.functions

#### Defined in

[src/wrappers/OwnableUpgradeable.d.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/OwnableUpgradeable.d.ts#L23)

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
| `functionFragment` | ``"owner"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/OwnableUpgradeable.d.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/OwnableUpgradeable.d.ts#L33)

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

[src/wrappers/OwnableUpgradeable.d.ts:34](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/OwnableUpgradeable.d.ts#L34)

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

[src/wrappers/OwnableUpgradeable.d.ts:35](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/OwnableUpgradeable.d.ts#L35)

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
| `functionFragment` | ``"owner"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/OwnableUpgradeable.d.ts:29](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/OwnableUpgradeable.d.ts#L29)

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

[src/wrappers/OwnableUpgradeable.d.ts:30](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/OwnableUpgradeable.d.ts#L30)

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

[src/wrappers/OwnableUpgradeable.d.ts:31](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/OwnableUpgradeable.d.ts#L31)

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

[src/wrappers/OwnableUpgradeable.d.ts:41](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/OwnableUpgradeable.d.ts#L41)

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
