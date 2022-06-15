[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/StrategyRegistry](../modules/wrappers_StrategyRegistry.md) / StrategyRegistryInterface

# Interface: StrategyRegistryInterface

[wrappers/StrategyRegistry](../modules/wrappers_StrategyRegistry.md).StrategyRegistryInterface

## Hierarchy

- `Interface`

  ↳ **`StrategyRegistryInterface`**

## Table of contents

### Properties

- [\_abiCoder](wrappers_StrategyRegistry.StrategyRegistryInterface.md#_abicoder)
- [\_isInterface](wrappers_StrategyRegistry.StrategyRegistryInterface.md#_isinterface)
- [deploy](wrappers_StrategyRegistry.StrategyRegistryInterface.md#deploy)
- [errors](wrappers_StrategyRegistry.StrategyRegistryInterface.md#errors)
- [events](wrappers_StrategyRegistry.StrategyRegistryInterface.md#events)
- [fragments](wrappers_StrategyRegistry.StrategyRegistryInterface.md#fragments)
- [functions](wrappers_StrategyRegistry.StrategyRegistryInterface.md#functions)
- [structs](wrappers_StrategyRegistry.StrategyRegistryInterface.md#structs)

### Methods

- [\_decodeParams](wrappers_StrategyRegistry.StrategyRegistryInterface.md#_decodeparams)
- [\_encodeParams](wrappers_StrategyRegistry.StrategyRegistryInterface.md#_encodeparams)
- [decodeErrorResult](wrappers_StrategyRegistry.StrategyRegistryInterface.md#decodeerrorresult)
- [decodeEventLog](wrappers_StrategyRegistry.StrategyRegistryInterface.md#decodeeventlog)
- [decodeFunctionData](wrappers_StrategyRegistry.StrategyRegistryInterface.md#decodefunctiondata)
- [decodeFunctionResult](wrappers_StrategyRegistry.StrategyRegistryInterface.md#decodefunctionresult)
- [encodeDeploy](wrappers_StrategyRegistry.StrategyRegistryInterface.md#encodedeploy)
- [encodeErrorResult](wrappers_StrategyRegistry.StrategyRegistryInterface.md#encodeerrorresult)
- [encodeEventLog](wrappers_StrategyRegistry.StrategyRegistryInterface.md#encodeeventlog)
- [encodeFilterTopics](wrappers_StrategyRegistry.StrategyRegistryInterface.md#encodefiltertopics)
- [encodeFunctionData](wrappers_StrategyRegistry.StrategyRegistryInterface.md#encodefunctiondata)
- [encodeFunctionResult](wrappers_StrategyRegistry.StrategyRegistryInterface.md#encodefunctionresult)
- [format](wrappers_StrategyRegistry.StrategyRegistryInterface.md#format)
- [getError](wrappers_StrategyRegistry.StrategyRegistryInterface.md#geterror)
- [getEvent](wrappers_StrategyRegistry.StrategyRegistryInterface.md#getevent)
- [getEventTopic](wrappers_StrategyRegistry.StrategyRegistryInterface.md#geteventtopic)
- [getFunction](wrappers_StrategyRegistry.StrategyRegistryInterface.md#getfunction)
- [getSighash](wrappers_StrategyRegistry.StrategyRegistryInterface.md#getsighash)
- [parseError](wrappers_StrategyRegistry.StrategyRegistryInterface.md#parseerror)
- [parseLog](wrappers_StrategyRegistry.StrategyRegistryInterface.md#parselog)
- [parseTransaction](wrappers_StrategyRegistry.StrategyRegistryInterface.md#parsetransaction)

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
| `MaxStrategiesUpdated(uint256)` | `EventFragment` |
| `OwnershipTransferred(address,address)` | `EventFragment` |
| `StrategyAdded(address)` | `EventFragment` |
| `StrategyRemoved(address)` | `EventFragment` |

#### Overrides

ethers.utils.Interface.events

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:70](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L70)

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
| `addStrategy(address)` | `FunctionFragment` |
| `getStrategies()` | `FunctionFragment` |
| `initialize(address,uint256)` | `FunctionFragment` |
| `isValidStrategy(address)` | `FunctionFragment` |
| `maxStrategies()` | `FunctionFragment` |
| `owner()` | `FunctionFragment` |
| `registry(address)` | `FunctionFragment` |
| `removeStrategy(uint256,address)` | `FunctionFragment` |
| `renounceOwnership()` | `FunctionFragment` |
| `retiredRegistry(address)` | `FunctionFragment` |
| `strategies(uint256)` | `FunctionFragment` |
| `transferOwnership(address)` | `FunctionFragment` |
| `updateMaxStrategies(uint256)` | `FunctionFragment` |
| `updateStrategy(uint256,address,address)` | `FunctionFragment` |

#### Overrides

ethers.utils.Interface.functions

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L23)

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
| `functionFragment` | ``"addStrategy"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L55)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getStrategies"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L56)

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

[src/wrappers/StrategyRegistry.d.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L57)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"isValidStrategy"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L58)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"maxStrategies"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:59](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L59)

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

[src/wrappers/StrategyRegistry.d.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L60)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"registry"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L61)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"removeStrategy"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:62](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L62)

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

[src/wrappers/StrategyRegistry.d.ts:63](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L63)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"retiredRegistry"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L64)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"strategies"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L65)

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

[src/wrappers/StrategyRegistry.d.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L66)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateMaxStrategies"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L67)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateStrategy"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L68)

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
| `functionFragment` | ``"addStrategy"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L40)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getStrategies"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:41](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L41)

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

[src/wrappers/StrategyRegistry.d.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L42)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"isValidStrategy"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:43](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L43)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"maxStrategies"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L44)

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

[src/wrappers/StrategyRegistry.d.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L45)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"registry"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L46)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"removeStrategy"`` |
| `values` | [`BigNumberish`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:47](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L47)

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

[src/wrappers/StrategyRegistry.d.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L48)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"retiredRegistry"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L49)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"strategies"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L50)

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

[src/wrappers/StrategyRegistry.d.ts:51](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L51)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateMaxStrategies"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L52)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateStrategy"`` |
| `values` | [`BigNumberish`, `string`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L53)

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
| `nameOrSignatureOrTopic` | ``"MaxStrategiesUpdated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L77)

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

[src/wrappers/StrategyRegistry.d.ts:78](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L78)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"StrategyAdded"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:79](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L79)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"StrategyRemoved"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/StrategyRegistry.d.ts#L80)

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
