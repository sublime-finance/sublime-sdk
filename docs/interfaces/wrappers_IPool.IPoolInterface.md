[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/IPool](../modules/wrappers_IPool.md) / IPoolInterface

# Interface: IPoolInterface

[wrappers/IPool](../modules/wrappers_IPool.md).IPoolInterface

## Hierarchy

- `Interface`

  ↳ **`IPoolInterface`**

## Table of contents

### Properties

- [\_abiCoder](wrappers_IPool.IPoolInterface.md#_abicoder)
- [\_isInterface](wrappers_IPool.IPoolInterface.md#_isinterface)
- [deploy](wrappers_IPool.IPoolInterface.md#deploy)
- [errors](wrappers_IPool.IPoolInterface.md#errors)
- [events](wrappers_IPool.IPoolInterface.md#events)
- [fragments](wrappers_IPool.IPoolInterface.md#fragments)
- [functions](wrappers_IPool.IPoolInterface.md#functions)
- [structs](wrappers_IPool.IPoolInterface.md#structs)

### Methods

- [\_decodeParams](wrappers_IPool.IPoolInterface.md#_decodeparams)
- [\_encodeParams](wrappers_IPool.IPoolInterface.md#_encodeparams)
- [decodeErrorResult](wrappers_IPool.IPoolInterface.md#decodeerrorresult)
- [decodeEventLog](wrappers_IPool.IPoolInterface.md#decodeeventlog)
- [decodeFunctionData](wrappers_IPool.IPoolInterface.md#decodefunctiondata)
- [decodeFunctionResult](wrappers_IPool.IPoolInterface.md#decodefunctionresult)
- [encodeDeploy](wrappers_IPool.IPoolInterface.md#encodedeploy)
- [encodeErrorResult](wrappers_IPool.IPoolInterface.md#encodeerrorresult)
- [encodeEventLog](wrappers_IPool.IPoolInterface.md#encodeeventlog)
- [encodeFilterTopics](wrappers_IPool.IPoolInterface.md#encodefiltertopics)
- [encodeFunctionData](wrappers_IPool.IPoolInterface.md#encodefunctiondata)
- [encodeFunctionResult](wrappers_IPool.IPoolInterface.md#encodefunctionresult)
- [format](wrappers_IPool.IPoolInterface.md#format)
- [getError](wrappers_IPool.IPoolInterface.md#geterror)
- [getEvent](wrappers_IPool.IPoolInterface.md#getevent)
- [getEventTopic](wrappers_IPool.IPoolInterface.md#geteventtopic)
- [getFunction](wrappers_IPool.IPoolInterface.md#getfunction)
- [getSighash](wrappers_IPool.IPoolInterface.md#getsighash)
- [parseError](wrappers_IPool.IPoolInterface.md#parseerror)
- [parseLog](wrappers_IPool.IPoolInterface.md#parselog)
- [parseTransaction](wrappers_IPool.IPoolInterface.md#parsetransaction)

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
| `AmountBorrowed(uint256,uint256)` | `EventFragment` |
| `CollateralAdded(address,uint256,uint256)` | `EventFragment` |
| `CollateralWithdrawn(address,uint256)` | `EventFragment` |
| `LenderLiquidated(address,address,uint256)` | `EventFragment` |
| `LiquiditySupplied(uint256,address)` | `EventFragment` |
| `LiquidityWithdrawn(uint256,address)` | `EventFragment` |
| `MarginCallCollateralAdded(address,address,uint256,uint256)` | `EventFragment` |
| `MarginCalled(address)` | `EventFragment` |
| `PoolCancelled()` | `EventFragment` |
| `PoolClosed()` | `EventFragment` |
| `PoolLiquidated(address)` | `EventFragment` |
| `PoolTerminated()` | `EventFragment` |

#### Overrides

ethers.utils.Interface.events

#### Defined in

[src/wrappers/IPool.d.ts:79](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L79)

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
| `addCollateralInMarginCall(address,uint256,bool)` | `FunctionFragment` |
| `borrower()` | `FunctionFragment` |
| `closeLoan()` | `FunctionFragment` |
| `depositCollateral(uint256,bool)` | `FunctionFragment` |
| `getBalanceDetails(address)` | `FunctionFragment` |
| `getLoanStatus()` | `FunctionFragment` |
| `getMarginCallEndTime(address)` | `FunctionFragment` |
| `initialize(uint256,uint256,address,address,address,uint256,uint64,uint64,address,uint256,bool,address,uint256,uint256)` | `FunctionFragment` |
| `lend(address,uint256,address,bool)` | `FunctionFragment` |
| `totalSupply()` | `FunctionFragment` |
| `withdrawBorrowedAmount()` | `FunctionFragment` |

#### Overrides

ethers.utils.Interface.functions

#### Defined in

[src/wrappers/IPool.d.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L23)

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
| `functionFragment` | ``"addCollateralInMarginCall"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IPool.d.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L67)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"borrower"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IPool.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L68)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"closeLoan"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IPool.d.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L69)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"depositCollateral"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IPool.d.ts:70](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L70)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getBalanceDetails"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IPool.d.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L71)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getLoanStatus"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IPool.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L72)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getMarginCallEndTime"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IPool.d.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L73)

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

[src/wrappers/IPool.d.ts:74](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L74)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"lend"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IPool.d.ts:75](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L75)

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

[src/wrappers/IPool.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L76)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawBorrowedAmount"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IPool.d.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L77)

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
| `functionFragment` | ``"addCollateralInMarginCall"`` |
| `values` | [`string`, `BigNumberish`, `boolean`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IPool.d.ts:37](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L37)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"borrower"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IPool.d.ts:38](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L38)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"closeLoan"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IPool.d.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L39)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"depositCollateral"`` |
| `values` | [`BigNumberish`, `boolean`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IPool.d.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L40)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getBalanceDetails"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IPool.d.ts:41](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L41)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getLoanStatus"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IPool.d.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L42)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getMarginCallEndTime"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IPool.d.ts:43](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L43)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"initialize"`` |
| `values` | [`BigNumberish`, `BigNumberish`, `string`, `string`, `string`, `BigNumberish`, `BigNumberish`, `BigNumberish`, `string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IPool.d.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L44)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"lend"`` |
| `values` | [`string`, `BigNumberish`, `string`, `boolean`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IPool.d.ts:63](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L63)

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

[src/wrappers/IPool.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L64)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawBorrowedAmount"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IPool.d.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L65)

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
| `nameOrSignatureOrTopic` | ``"AmountBorrowed"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IPool.d.ts:94](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L94)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"CollateralAdded"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IPool.d.ts:95](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L95)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"CollateralWithdrawn"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IPool.d.ts:96](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L96)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"LenderLiquidated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IPool.d.ts:97](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L97)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"LiquiditySupplied"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IPool.d.ts:98](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L98)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"LiquidityWithdrawn"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IPool.d.ts:99](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L99)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"MarginCallCollateralAdded"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IPool.d.ts:100](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L100)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"MarginCalled"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IPool.d.ts:101](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L101)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PoolCancelled"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IPool.d.ts:102](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L102)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PoolClosed"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IPool.d.ts:103](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L103)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PoolLiquidated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IPool.d.ts:104](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L104)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PoolTerminated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IPool.d.ts:105](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPool.d.ts#L105)

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
