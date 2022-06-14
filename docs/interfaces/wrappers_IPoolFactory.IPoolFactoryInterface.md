[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/IPoolFactory](../modules/wrappers_IPoolFactory.md) / IPoolFactoryInterface

# Interface: IPoolFactoryInterface

[wrappers/IPoolFactory](../modules/wrappers_IPoolFactory.md).IPoolFactoryInterface

## Hierarchy

- `Interface`

  ↳ **`IPoolFactoryInterface`**

## Table of contents

### Properties

- [\_abiCoder](wrappers_IPoolFactory.IPoolFactoryInterface.md#_abicoder)
- [\_isInterface](wrappers_IPoolFactory.IPoolFactoryInterface.md#_isinterface)
- [deploy](wrappers_IPoolFactory.IPoolFactoryInterface.md#deploy)
- [errors](wrappers_IPoolFactory.IPoolFactoryInterface.md#errors)
- [events](wrappers_IPoolFactory.IPoolFactoryInterface.md#events)
- [fragments](wrappers_IPoolFactory.IPoolFactoryInterface.md#fragments)
- [functions](wrappers_IPoolFactory.IPoolFactoryInterface.md#functions)
- [structs](wrappers_IPoolFactory.IPoolFactoryInterface.md#structs)

### Methods

- [\_decodeParams](wrappers_IPoolFactory.IPoolFactoryInterface.md#_decodeparams)
- [\_encodeParams](wrappers_IPoolFactory.IPoolFactoryInterface.md#_encodeparams)
- [decodeErrorResult](wrappers_IPoolFactory.IPoolFactoryInterface.md#decodeerrorresult)
- [decodeEventLog](wrappers_IPoolFactory.IPoolFactoryInterface.md#decodeeventlog)
- [decodeFunctionData](wrappers_IPoolFactory.IPoolFactoryInterface.md#decodefunctiondata)
- [decodeFunctionResult](wrappers_IPoolFactory.IPoolFactoryInterface.md#decodefunctionresult)
- [encodeDeploy](wrappers_IPoolFactory.IPoolFactoryInterface.md#encodedeploy)
- [encodeErrorResult](wrappers_IPoolFactory.IPoolFactoryInterface.md#encodeerrorresult)
- [encodeEventLog](wrappers_IPoolFactory.IPoolFactoryInterface.md#encodeeventlog)
- [encodeFilterTopics](wrappers_IPoolFactory.IPoolFactoryInterface.md#encodefiltertopics)
- [encodeFunctionData](wrappers_IPoolFactory.IPoolFactoryInterface.md#encodefunctiondata)
- [encodeFunctionResult](wrappers_IPoolFactory.IPoolFactoryInterface.md#encodefunctionresult)
- [format](wrappers_IPoolFactory.IPoolFactoryInterface.md#format)
- [getError](wrappers_IPoolFactory.IPoolFactoryInterface.md#geterror)
- [getEvent](wrappers_IPoolFactory.IPoolFactoryInterface.md#getevent)
- [getEventTopic](wrappers_IPoolFactory.IPoolFactoryInterface.md#geteventtopic)
- [getFunction](wrappers_IPoolFactory.IPoolFactoryInterface.md#getfunction)
- [getSighash](wrappers_IPoolFactory.IPoolFactoryInterface.md#getsighash)
- [parseError](wrappers_IPoolFactory.IPoolFactoryInterface.md#parseerror)
- [parseLog](wrappers_IPoolFactory.IPoolFactoryInterface.md#parselog)
- [parseTransaction](wrappers_IPoolFactory.IPoolFactoryInterface.md#parsetransaction)

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
| `BorrowTokenUpdated(address,bool)` | `EventFragment` |
| `CollateralTokenUpdated(address,bool)` | `EventFragment` |
| `CollectionPeriodUpdated(uint256)` | `EventFragment` |
| `LimitsUpdated(string,uint256,uint256)` | `EventFragment` |
| `LiquidatorRewardFractionUpdated(uint256)` | `EventFragment` |
| `LoanWithdrawalDurationUpdated(uint256)` | `EventFragment` |
| `MarginCallDurationUpdated(uint256)` | `EventFragment` |
| `MinBorrowFractionUpdated(uint256)` | `EventFragment` |
| `NoStrategyUpdated(address)` | `EventFragment` |
| `PoolCancelPenaltyMultipleUpdated(uint256)` | `EventFragment` |
| `PoolCreated(address,address)` | `EventFragment` |
| `PoolInitSelectorUpdated(bytes4)` | `EventFragment` |
| `PoolLogicUpdated(address)` | `EventFragment` |
| `PriceOracleUpdated(address)` | `EventFragment` |
| `ProtocolFeeCollectorUpdated(address)` | `EventFragment` |
| `ProtocolFeeFractionUpdated(uint256)` | `EventFragment` |
| `RepaymentImplUpdated(address)` | `EventFragment` |
| `SavingsAccountUpdated(address)` | `EventFragment` |
| `StrategyRegistryUpdated(address)` | `EventFragment` |
| `UserRegistryUpdated(address)` | `EventFragment` |

#### Overrides

ethers.utils.Interface.events

#### Defined in

[src/wrappers/IPoolFactory.d.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L69)

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
| `collectionPeriod()` | `FunctionFragment` |
| `getProtocolFeeData()` | `FunctionFragment` |
| `liquidatorRewardFraction()` | `FunctionFragment` |
| `loanWithdrawalDuration()` | `FunctionFragment` |
| `marginCallDuration()` | `FunctionFragment` |
| `minBorrowFraction()` | `FunctionFragment` |
| `noStrategyAddress()` | `FunctionFragment` |
| `owner()` | `FunctionFragment` |
| `poolCancelPenaltyMultiple()` | `FunctionFragment` |
| `poolRegistry(address)` | `FunctionFragment` |
| `priceOracle()` | `FunctionFragment` |
| `repaymentImpl()` | `FunctionFragment` |
| `savingsAccount()` | `FunctionFragment` |
| `userRegistry()` | `FunctionFragment` |

#### Overrides

ethers.utils.Interface.functions

#### Defined in

[src/wrappers/IPoolFactory.d.ts:22](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L22)

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
| `functionFragment` | ``"collectionPeriod"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IPoolFactory.d.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L54)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getProtocolFeeData"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IPoolFactory.d.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L55)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"liquidatorRewardFraction"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IPoolFactory.d.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L56)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"loanWithdrawalDuration"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IPoolFactory.d.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L57)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"marginCallDuration"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IPoolFactory.d.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L58)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"minBorrowFraction"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IPoolFactory.d.ts:59](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L59)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"noStrategyAddress"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IPoolFactory.d.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L60)

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

[src/wrappers/IPoolFactory.d.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L61)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"poolCancelPenaltyMultiple"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IPoolFactory.d.ts:62](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L62)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"poolRegistry"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IPoolFactory.d.ts:63](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L63)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"priceOracle"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IPoolFactory.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L64)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"repaymentImpl"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IPoolFactory.d.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L65)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"savingsAccount"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IPoolFactory.d.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L66)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"userRegistry"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IPoolFactory.d.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L67)

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
| `functionFragment` | ``"collectionPeriod"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IPoolFactory.d.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L39)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getProtocolFeeData"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IPoolFactory.d.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L40)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"liquidatorRewardFraction"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IPoolFactory.d.ts:41](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L41)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"loanWithdrawalDuration"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IPoolFactory.d.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L42)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"marginCallDuration"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IPoolFactory.d.ts:43](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L43)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"minBorrowFraction"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IPoolFactory.d.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L44)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"noStrategyAddress"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IPoolFactory.d.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L45)

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

[src/wrappers/IPoolFactory.d.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L46)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"poolCancelPenaltyMultiple"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IPoolFactory.d.ts:47](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L47)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"poolRegistry"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IPoolFactory.d.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L48)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"priceOracle"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IPoolFactory.d.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L49)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"repaymentImpl"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IPoolFactory.d.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L50)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"savingsAccount"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IPoolFactory.d.ts:51](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L51)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"userRegistry"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IPoolFactory.d.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L52)

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
| `nameOrSignatureOrTopic` | ``"BorrowTokenUpdated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IPoolFactory.d.ts:92](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L92)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"CollateralTokenUpdated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IPoolFactory.d.ts:93](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L93)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"CollectionPeriodUpdated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IPoolFactory.d.ts:94](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L94)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"LimitsUpdated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IPoolFactory.d.ts:95](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L95)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"LiquidatorRewardFractionUpdated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IPoolFactory.d.ts:96](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L96)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"LoanWithdrawalDurationUpdated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IPoolFactory.d.ts:97](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L97)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"MarginCallDurationUpdated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IPoolFactory.d.ts:98](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L98)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"MinBorrowFractionUpdated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IPoolFactory.d.ts:99](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L99)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"NoStrategyUpdated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IPoolFactory.d.ts:100](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L100)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PoolCancelPenaltyMultipleUpdated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IPoolFactory.d.ts:101](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L101)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PoolCreated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IPoolFactory.d.ts:102](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L102)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PoolInitSelectorUpdated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IPoolFactory.d.ts:103](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L103)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PoolLogicUpdated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IPoolFactory.d.ts:104](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L104)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PriceOracleUpdated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IPoolFactory.d.ts:105](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L105)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ProtocolFeeCollectorUpdated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IPoolFactory.d.ts:106](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L106)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ProtocolFeeFractionUpdated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IPoolFactory.d.ts:107](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L107)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"RepaymentImplUpdated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IPoolFactory.d.ts:108](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L108)

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

[src/wrappers/IPoolFactory.d.ts:109](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L109)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"StrategyRegistryUpdated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IPoolFactory.d.ts:110](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L110)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"UserRegistryUpdated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/IPoolFactory.d.ts:111](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPoolFactory.d.ts#L111)

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
