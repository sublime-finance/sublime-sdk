[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/UpgradeableProxy](../modules/wrappers_UpgradeableProxy.md) / UpgradeableProxyInterface

# Interface: UpgradeableProxyInterface

[wrappers/UpgradeableProxy](../modules/wrappers_UpgradeableProxy.md).UpgradeableProxyInterface

## Hierarchy

- `Interface`

  ↳ **`UpgradeableProxyInterface`**

## Table of contents

### Properties

- [\_abiCoder](wrappers_UpgradeableProxy.UpgradeableProxyInterface.md#_abicoder)
- [\_isInterface](wrappers_UpgradeableProxy.UpgradeableProxyInterface.md#_isinterface)
- [deploy](wrappers_UpgradeableProxy.UpgradeableProxyInterface.md#deploy)
- [errors](wrappers_UpgradeableProxy.UpgradeableProxyInterface.md#errors)
- [events](wrappers_UpgradeableProxy.UpgradeableProxyInterface.md#events)
- [fragments](wrappers_UpgradeableProxy.UpgradeableProxyInterface.md#fragments)
- [functions](wrappers_UpgradeableProxy.UpgradeableProxyInterface.md#functions)
- [structs](wrappers_UpgradeableProxy.UpgradeableProxyInterface.md#structs)

### Methods

- [\_decodeParams](wrappers_UpgradeableProxy.UpgradeableProxyInterface.md#_decodeparams)
- [\_encodeParams](wrappers_UpgradeableProxy.UpgradeableProxyInterface.md#_encodeparams)
- [decodeErrorResult](wrappers_UpgradeableProxy.UpgradeableProxyInterface.md#decodeerrorresult)
- [decodeEventLog](wrappers_UpgradeableProxy.UpgradeableProxyInterface.md#decodeeventlog)
- [decodeFunctionData](wrappers_UpgradeableProxy.UpgradeableProxyInterface.md#decodefunctiondata)
- [decodeFunctionResult](wrappers_UpgradeableProxy.UpgradeableProxyInterface.md#decodefunctionresult)
- [encodeDeploy](wrappers_UpgradeableProxy.UpgradeableProxyInterface.md#encodedeploy)
- [encodeErrorResult](wrappers_UpgradeableProxy.UpgradeableProxyInterface.md#encodeerrorresult)
- [encodeEventLog](wrappers_UpgradeableProxy.UpgradeableProxyInterface.md#encodeeventlog)
- [encodeFilterTopics](wrappers_UpgradeableProxy.UpgradeableProxyInterface.md#encodefiltertopics)
- [encodeFunctionData](wrappers_UpgradeableProxy.UpgradeableProxyInterface.md#encodefunctiondata)
- [encodeFunctionResult](wrappers_UpgradeableProxy.UpgradeableProxyInterface.md#encodefunctionresult)
- [format](wrappers_UpgradeableProxy.UpgradeableProxyInterface.md#format)
- [getError](wrappers_UpgradeableProxy.UpgradeableProxyInterface.md#geterror)
- [getEvent](wrappers_UpgradeableProxy.UpgradeableProxyInterface.md#getevent)
- [getEventTopic](wrappers_UpgradeableProxy.UpgradeableProxyInterface.md#geteventtopic)
- [getFunction](wrappers_UpgradeableProxy.UpgradeableProxyInterface.md#getfunction)
- [getSighash](wrappers_UpgradeableProxy.UpgradeableProxyInterface.md#getsighash)
- [parseError](wrappers_UpgradeableProxy.UpgradeableProxyInterface.md#parseerror)
- [parseLog](wrappers_UpgradeableProxy.UpgradeableProxyInterface.md#parselog)
- [parseTransaction](wrappers_UpgradeableProxy.UpgradeableProxyInterface.md#parsetransaction)

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
| `Upgraded(address)` | `EventFragment` |

#### Overrides

ethers.utils.Interface.events

#### Defined in

[src/wrappers/UpgradeableProxy.d.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/UpgradeableProxy.d.ts#L14)

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

#### Overrides

ethers.utils.Interface.functions

#### Defined in

[src/wrappers/UpgradeableProxy.d.ts:12](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/UpgradeableProxy.d.ts#L12)

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
| `functionFragment` | `string` \| `FunctionFragment` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Inherited from

ethers.utils.Interface.decodeFunctionResult

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:70

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
| `functionFragment` | `string` \| `FunctionFragment` |
| `values?` | readonly `any`[] |

#### Returns

`string`

#### Inherited from

ethers.utils.Interface.encodeFunctionData

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:69

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
| `nameOrSignatureOrTopic` | ``"Upgraded"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/UpgradeableProxy.d.ts:18](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/UpgradeableProxy.d.ts#L18)

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
