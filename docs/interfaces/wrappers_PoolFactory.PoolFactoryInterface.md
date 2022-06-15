[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/PoolFactory](../modules/wrappers_PoolFactory.md) / PoolFactoryInterface

# Interface: PoolFactoryInterface

[wrappers/PoolFactory](../modules/wrappers_PoolFactory.md).PoolFactoryInterface

## Hierarchy

- `Interface`

  ↳ **`PoolFactoryInterface`**

## Table of contents

### Properties

- [\_abiCoder](wrappers_PoolFactory.PoolFactoryInterface.md#_abicoder)
- [\_isInterface](wrappers_PoolFactory.PoolFactoryInterface.md#_isinterface)
- [deploy](wrappers_PoolFactory.PoolFactoryInterface.md#deploy)
- [errors](wrappers_PoolFactory.PoolFactoryInterface.md#errors)
- [events](wrappers_PoolFactory.PoolFactoryInterface.md#events)
- [fragments](wrappers_PoolFactory.PoolFactoryInterface.md#fragments)
- [functions](wrappers_PoolFactory.PoolFactoryInterface.md#functions)
- [structs](wrappers_PoolFactory.PoolFactoryInterface.md#structs)

### Methods

- [\_decodeParams](wrappers_PoolFactory.PoolFactoryInterface.md#_decodeparams)
- [\_encodeParams](wrappers_PoolFactory.PoolFactoryInterface.md#_encodeparams)
- [decodeErrorResult](wrappers_PoolFactory.PoolFactoryInterface.md#decodeerrorresult)
- [decodeEventLog](wrappers_PoolFactory.PoolFactoryInterface.md#decodeeventlog)
- [decodeFunctionData](wrappers_PoolFactory.PoolFactoryInterface.md#decodefunctiondata)
- [decodeFunctionResult](wrappers_PoolFactory.PoolFactoryInterface.md#decodefunctionresult)
- [encodeDeploy](wrappers_PoolFactory.PoolFactoryInterface.md#encodedeploy)
- [encodeErrorResult](wrappers_PoolFactory.PoolFactoryInterface.md#encodeerrorresult)
- [encodeEventLog](wrappers_PoolFactory.PoolFactoryInterface.md#encodeeventlog)
- [encodeFilterTopics](wrappers_PoolFactory.PoolFactoryInterface.md#encodefiltertopics)
- [encodeFunctionData](wrappers_PoolFactory.PoolFactoryInterface.md#encodefunctiondata)
- [encodeFunctionResult](wrappers_PoolFactory.PoolFactoryInterface.md#encodefunctionresult)
- [format](wrappers_PoolFactory.PoolFactoryInterface.md#format)
- [getError](wrappers_PoolFactory.PoolFactoryInterface.md#geterror)
- [getEvent](wrappers_PoolFactory.PoolFactoryInterface.md#getevent)
- [getEventTopic](wrappers_PoolFactory.PoolFactoryInterface.md#geteventtopic)
- [getFunction](wrappers_PoolFactory.PoolFactoryInterface.md#getfunction)
- [getSighash](wrappers_PoolFactory.PoolFactoryInterface.md#getsighash)
- [parseError](wrappers_PoolFactory.PoolFactoryInterface.md#parseerror)
- [parseLog](wrappers_PoolFactory.PoolFactoryInterface.md#parselog)
- [parseTransaction](wrappers_PoolFactory.PoolFactoryInterface.md#parsetransaction)

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
| `OwnershipTransferred(address,address)` | `EventFragment` |
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

[src/wrappers/PoolFactory.d.ts:219](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L219)

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
| `beacon()` | `FunctionFragment` |
| `borrowRateLimit()` | `FunctionFragment` |
| `collectionPeriod()` | `FunctionFragment` |
| `createPool(uint256,uint256,address,address,uint256,uint64,uint64,address,uint256,bool,bytes32,address,address)` | `FunctionFragment` |
| `getProtocolFeeData()` | `FunctionFragment` |
| `idealCollateralRatioLimit()` | `FunctionFragment` |
| `initialize(address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address)` | `FunctionFragment` |
| `isBorrowToken(address)` | `FunctionFragment` |
| `isCollateralToken(address)` | `FunctionFragment` |
| `liquidatorRewardFraction()` | `FunctionFragment` |
| `loanWithdrawalDuration()` | `FunctionFragment` |
| `marginCallDuration()` | `FunctionFragment` |
| `minBorrowFraction()` | `FunctionFragment` |
| `noOfRepaymentIntervalsLimit()` | `FunctionFragment` |
| `noStrategyAddress()` | `FunctionFragment` |
| `owner()` | `FunctionFragment` |
| `poolCancelPenaltyMultiple()` | `FunctionFragment` |
| `poolRegistry(address)` | `FunctionFragment` |
| `poolSizeLimit()` | `FunctionFragment` |
| `preComputeAddress(address,bytes32)` | `FunctionFragment` |
| `priceOracle()` | `FunctionFragment` |
| `protocolFeeCollector()` | `FunctionFragment` |
| `protocolFeeFraction()` | `FunctionFragment` |
| `renounceOwnership()` | `FunctionFragment` |
| `repaymentImpl()` | `FunctionFragment` |
| `repaymentIntervalLimit()` | `FunctionFragment` |
| `savingsAccount()` | `FunctionFragment` |
| `setImplementations(address,address,address,address,address)` | `FunctionFragment` |
| `strategyRegistry()` | `FunctionFragment` |
| `transferOwnership(address)` | `FunctionFragment` |
| `updateBorrowRateLimit(uint256,uint256)` | `FunctionFragment` |
| `updateCollectionPeriod(uint256)` | `FunctionFragment` |
| `updateLiquidatorRewardFraction(uint256)` | `FunctionFragment` |
| `updateLoanWithdrawalDuration(uint256)` | `FunctionFragment` |
| `updateMarginCallDuration(uint256)` | `FunctionFragment` |
| `updateMinBorrowFraction(uint256)` | `FunctionFragment` |
| `updateNoOfRepaymentIntervalsLimit(uint256,uint256)` | `FunctionFragment` |
| `updateNoStrategy(address)` | `FunctionFragment` |
| `updatePoolCancelPenaltyMultiple(uint256)` | `FunctionFragment` |
| `updatePoolSizeLimit(uint256,uint256)` | `FunctionFragment` |
| `updatePriceoracle(address)` | `FunctionFragment` |
| `updateProtocolFeeCollector(address)` | `FunctionFragment` |
| `updateProtocolFeeFraction(uint256)` | `FunctionFragment` |
| `updateRepaymentImpl(address)` | `FunctionFragment` |
| `updateRepaymentIntervalLimit(uint256,uint256)` | `FunctionFragment` |
| `updateSavingsAccount(address)` | `FunctionFragment` |
| `updateStrategyRegistry(address)` | `FunctionFragment` |
| `updateSupportedBorrowTokens(address,bool)` | `FunctionFragment` |
| `updateSupportedCollateralTokens(address,bool)` | `FunctionFragment` |
| `updateUserRegistry(address)` | `FunctionFragment` |
| `updateidealCollateralRatioLimit(uint256,uint256)` | `FunctionFragment` |
| `usdcAsset()` | `FunctionFragment` |
| `userRegistry()` | `FunctionFragment` |

#### Overrides

ethers.utils.Interface.functions

#### Defined in

[src/wrappers/PoolFactory.d.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L23)

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
| `functionFragment` | ``"beacon"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:165](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L165)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"borrowRateLimit"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:166](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L166)

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

[src/wrappers/PoolFactory.d.ts:167](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L167)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"createPool"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:168](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L168)

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

[src/wrappers/PoolFactory.d.ts:169](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L169)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"idealCollateralRatioLimit"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:170](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L170)

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

[src/wrappers/PoolFactory.d.ts:171](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L171)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"isBorrowToken"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:172](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L172)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"isCollateralToken"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:173](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L173)

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

[src/wrappers/PoolFactory.d.ts:174](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L174)

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

[src/wrappers/PoolFactory.d.ts:175](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L175)

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

[src/wrappers/PoolFactory.d.ts:176](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L176)

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

[src/wrappers/PoolFactory.d.ts:177](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L177)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"noOfRepaymentIntervalsLimit"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:178](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L178)

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

[src/wrappers/PoolFactory.d.ts:179](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L179)

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

[src/wrappers/PoolFactory.d.ts:180](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L180)

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

[src/wrappers/PoolFactory.d.ts:181](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L181)

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

[src/wrappers/PoolFactory.d.ts:182](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L182)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"poolSizeLimit"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:183](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L183)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"preComputeAddress"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:184](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L184)

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

[src/wrappers/PoolFactory.d.ts:185](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L185)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"protocolFeeCollector"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:186](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L186)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"protocolFeeFraction"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:187](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L187)

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

[src/wrappers/PoolFactory.d.ts:188](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L188)

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

[src/wrappers/PoolFactory.d.ts:189](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L189)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"repaymentIntervalLimit"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:190](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L190)

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

[src/wrappers/PoolFactory.d.ts:191](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L191)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setImplementations"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:192](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L192)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"strategyRegistry"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:193](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L193)

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

[src/wrappers/PoolFactory.d.ts:194](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L194)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateBorrowRateLimit"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:195](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L195)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateCollectionPeriod"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:196](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L196)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateLiquidatorRewardFraction"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:197](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L197)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateLoanWithdrawalDuration"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:198](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L198)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateMarginCallDuration"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:199](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L199)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateMinBorrowFraction"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:200](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L200)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateNoOfRepaymentIntervalsLimit"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:201](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L201)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateNoStrategy"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:202](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L202)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updatePoolCancelPenaltyMultiple"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:203](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L203)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updatePoolSizeLimit"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:204](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L204)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updatePriceoracle"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:205](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L205)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateProtocolFeeCollector"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:206](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L206)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateProtocolFeeFraction"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:207](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L207)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateRepaymentImpl"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:208](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L208)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateRepaymentIntervalLimit"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:209](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L209)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateSavingsAccount"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:210](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L210)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateStrategyRegistry"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:211](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L211)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateSupportedBorrowTokens"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:212](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L212)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateSupportedCollateralTokens"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:213](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L213)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateUserRegistry"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:214](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L214)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateidealCollateralRatioLimit"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:215](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L215)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"usdcAsset"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PoolFactory.d.ts:216](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L216)

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

[src/wrappers/PoolFactory.d.ts:217](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L217)

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
| `functionFragment` | ``"beacon"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:79](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L79)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"borrowRateLimit"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L80)

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

[src/wrappers/PoolFactory.d.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L81)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"createPool"`` |
| `values` | [`BigNumberish`, `BigNumberish`, `string`, `string`, `BigNumberish`, `BigNumberish`, `BigNumberish`, `string`, `BigNumberish`, `boolean`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L82)

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

[src/wrappers/PoolFactory.d.ts:100](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L100)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"idealCollateralRatioLimit"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:101](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L101)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"initialize"`` |
| `values` | [`string`, `BigNumberish`, `BigNumberish`, `BigNumberish`, `BigNumberish`, `BigNumberish`, `BigNumberish`, `BigNumberish`, `string`, `string`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:102](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L102)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"isBorrowToken"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:118](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L118)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"isCollateralToken"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:119](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L119)

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

[src/wrappers/PoolFactory.d.ts:120](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L120)

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

[src/wrappers/PoolFactory.d.ts:121](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L121)

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

[src/wrappers/PoolFactory.d.ts:122](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L122)

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

[src/wrappers/PoolFactory.d.ts:123](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L123)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"noOfRepaymentIntervalsLimit"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:124](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L124)

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

[src/wrappers/PoolFactory.d.ts:125](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L125)

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

[src/wrappers/PoolFactory.d.ts:126](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L126)

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

[src/wrappers/PoolFactory.d.ts:127](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L127)

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

[src/wrappers/PoolFactory.d.ts:128](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L128)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"poolSizeLimit"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:129](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L129)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"preComputeAddress"`` |
| `values` | [`string`, `BytesLike`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:130](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L130)

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

[src/wrappers/PoolFactory.d.ts:131](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L131)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"protocolFeeCollector"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:132](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L132)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"protocolFeeFraction"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:133](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L133)

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

[src/wrappers/PoolFactory.d.ts:134](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L134)

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

[src/wrappers/PoolFactory.d.ts:135](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L135)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"repaymentIntervalLimit"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:136](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L136)

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

[src/wrappers/PoolFactory.d.ts:137](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L137)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setImplementations"`` |
| `values` | [`string`, `string`, `string`, `string`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:138](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L138)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"strategyRegistry"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:139](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L139)

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

[src/wrappers/PoolFactory.d.ts:140](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L140)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateBorrowRateLimit"`` |
| `values` | [`BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:141](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L141)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateCollectionPeriod"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:142](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L142)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateLiquidatorRewardFraction"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:143](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L143)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateLoanWithdrawalDuration"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:144](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L144)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateMarginCallDuration"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:145](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L145)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateMinBorrowFraction"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:146](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L146)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateNoOfRepaymentIntervalsLimit"`` |
| `values` | [`BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:147](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L147)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateNoStrategy"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:148](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L148)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updatePoolCancelPenaltyMultiple"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:149](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L149)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updatePoolSizeLimit"`` |
| `values` | [`BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:150](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L150)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updatePriceoracle"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:151](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L151)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateProtocolFeeCollector"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:152](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L152)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateProtocolFeeFraction"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:153](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L153)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateRepaymentImpl"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:154](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L154)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateRepaymentIntervalLimit"`` |
| `values` | [`BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:155](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L155)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateSavingsAccount"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:156](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L156)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateStrategyRegistry"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:157](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L157)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateSupportedBorrowTokens"`` |
| `values` | [`string`, `boolean`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:158](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L158)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateSupportedCollateralTokens"`` |
| `values` | [`string`, `boolean`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:159](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L159)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateUserRegistry"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:160](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L160)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateidealCollateralRatioLimit"`` |
| `values` | [`BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:161](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L161)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"usdcAsset"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PoolFactory.d.ts:162](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L162)

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

[src/wrappers/PoolFactory.d.ts:163](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L163)

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

[src/wrappers/PoolFactory.d.ts:243](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L243)

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

[src/wrappers/PoolFactory.d.ts:244](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L244)

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

[src/wrappers/PoolFactory.d.ts:245](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L245)

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

[src/wrappers/PoolFactory.d.ts:246](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L246)

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

[src/wrappers/PoolFactory.d.ts:247](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L247)

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

[src/wrappers/PoolFactory.d.ts:248](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L248)

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

[src/wrappers/PoolFactory.d.ts:249](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L249)

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

[src/wrappers/PoolFactory.d.ts:250](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L250)

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

[src/wrappers/PoolFactory.d.ts:251](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L251)

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

[src/wrappers/PoolFactory.d.ts:252](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L252)

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

[src/wrappers/PoolFactory.d.ts:253](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L253)

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

[src/wrappers/PoolFactory.d.ts:254](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L254)

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

[src/wrappers/PoolFactory.d.ts:255](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L255)

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

[src/wrappers/PoolFactory.d.ts:256](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L256)

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

[src/wrappers/PoolFactory.d.ts:257](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L257)

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

[src/wrappers/PoolFactory.d.ts:258](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L258)

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

[src/wrappers/PoolFactory.d.ts:259](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L259)

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

[src/wrappers/PoolFactory.d.ts:260](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L260)

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

[src/wrappers/PoolFactory.d.ts:261](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L261)

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

[src/wrappers/PoolFactory.d.ts:262](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L262)

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

[src/wrappers/PoolFactory.d.ts:263](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PoolFactory.d.ts#L263)

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
