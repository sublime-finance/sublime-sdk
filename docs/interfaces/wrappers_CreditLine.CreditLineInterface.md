[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/CreditLine](../modules/wrappers_CreditLine.md) / CreditLineInterface

# Interface: CreditLineInterface

[wrappers/CreditLine](../modules/wrappers_CreditLine.md).CreditLineInterface

## Hierarchy

- `Interface`

  ↳ **`CreditLineInterface`**

## Table of contents

### Properties

- [\_abiCoder](wrappers_CreditLine.CreditLineInterface.md#_abicoder)
- [\_isInterface](wrappers_CreditLine.CreditLineInterface.md#_isinterface)
- [deploy](wrappers_CreditLine.CreditLineInterface.md#deploy)
- [errors](wrappers_CreditLine.CreditLineInterface.md#errors)
- [events](wrappers_CreditLine.CreditLineInterface.md#events)
- [fragments](wrappers_CreditLine.CreditLineInterface.md#fragments)
- [functions](wrappers_CreditLine.CreditLineInterface.md#functions)
- [structs](wrappers_CreditLine.CreditLineInterface.md#structs)

### Methods

- [\_decodeParams](wrappers_CreditLine.CreditLineInterface.md#_decodeparams)
- [\_encodeParams](wrappers_CreditLine.CreditLineInterface.md#_encodeparams)
- [decodeErrorResult](wrappers_CreditLine.CreditLineInterface.md#decodeerrorresult)
- [decodeEventLog](wrappers_CreditLine.CreditLineInterface.md#decodeeventlog)
- [decodeFunctionData](wrappers_CreditLine.CreditLineInterface.md#decodefunctiondata)
- [decodeFunctionResult](wrappers_CreditLine.CreditLineInterface.md#decodefunctionresult)
- [encodeDeploy](wrappers_CreditLine.CreditLineInterface.md#encodedeploy)
- [encodeErrorResult](wrappers_CreditLine.CreditLineInterface.md#encodeerrorresult)
- [encodeEventLog](wrappers_CreditLine.CreditLineInterface.md#encodeeventlog)
- [encodeFilterTopics](wrappers_CreditLine.CreditLineInterface.md#encodefiltertopics)
- [encodeFunctionData](wrappers_CreditLine.CreditLineInterface.md#encodefunctiondata)
- [encodeFunctionResult](wrappers_CreditLine.CreditLineInterface.md#encodefunctionresult)
- [format](wrappers_CreditLine.CreditLineInterface.md#format)
- [getError](wrappers_CreditLine.CreditLineInterface.md#geterror)
- [getEvent](wrappers_CreditLine.CreditLineInterface.md#getevent)
- [getEventTopic](wrappers_CreditLine.CreditLineInterface.md#geteventtopic)
- [getFunction](wrappers_CreditLine.CreditLineInterface.md#getfunction)
- [getSighash](wrappers_CreditLine.CreditLineInterface.md#getsighash)
- [parseError](wrappers_CreditLine.CreditLineInterface.md#parseerror)
- [parseLog](wrappers_CreditLine.CreditLineInterface.md#parselog)
- [parseTransaction](wrappers_CreditLine.CreditLineInterface.md#parsetransaction)

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
| `BorrowLimitUpdated(uint256,uint128)` | `EventFragment` |
| `BorrowedFromCreditLine(uint256,uint256)` | `EventFragment` |
| `CollateralDeposited(uint256,uint256,address)` | `EventFragment` |
| `CollateralWithdrawn(uint256,uint256)` | `EventFragment` |
| `CompleteCreditLineRepaid(uint256,address,uint256)` | `EventFragment` |
| `CreditLineAccepted(uint256)` | `EventFragment` |
| `CreditLineCancelled(uint256)` | `EventFragment` |
| `CreditLineClosed(uint256,bool)` | `EventFragment` |
| `CreditLineLiquidated(uint256,address)` | `EventFragment` |
| `CreditLineRequested(uint256,address,address,bool)` | `EventFragment` |
| `CreditLineReset(uint256)` | `EventFragment` |
| `LimitsUpdated(string,uint256,uint256)` | `EventFragment` |
| `LiquidationRewardFractionUpdated(uint256)` | `EventFragment` |
| `OwnershipTransferred(address,address)` | `EventFragment` |
| `PartialCreditLineRepaid(uint256,address,uint256)` | `EventFragment` |
| `ProtocolFeeCollectorUpdated(address)` | `EventFragment` |
| `ProtocolFeeFractionUpdated(uint256)` | `EventFragment` |

#### Overrides

ethers.utils.Interface.events

#### Defined in

[src/wrappers/CreditLine.d.ts:160](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L160)

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
| `PRICE_ORACLE()` | `FunctionFragment` |
| `SAVINGS_ACCOUNT()` | `FunctionFragment` |
| `STRATEGY_REGISTRY()` | `FunctionFragment` |
| `accept(uint256)` | `FunctionFragment` |
| `borrow(uint256,uint256)` | `FunctionFragment` |
| `borrowLimitLimits()` | `FunctionFragment` |
| `borrowRateLimits()` | `FunctionFragment` |
| `borrowTokensToLiquidate(uint256)` | `FunctionFragment` |
| `calculateBorrowableAmount(uint256)` | `FunctionFragment` |
| `calculateCurrentCollateralRatio(uint256)` | `FunctionFragment` |
| `calculateCurrentDebt(uint256)` | `FunctionFragment` |
| `calculateInterest(uint256,uint256,uint256)` | `FunctionFragment` |
| `calculateInterestAccrued(uint256)` | `FunctionFragment` |
| `calculateTotalCollateralTokens(uint256)` | `FunctionFragment` |
| `cancel(uint256)` | `FunctionFragment` |
| `close(uint256)` | `FunctionFragment` |
| `collateralShareInStrategy(uint256)` | `FunctionFragment` |
| `creditLineConstants(uint256)` | `FunctionFragment` |
| `creditLineCounter()` | `FunctionFragment` |
| `creditLineVariables(uint256)` | `FunctionFragment` |
| `depositCollateral(uint256,uint256,bool)` | `FunctionFragment` |
| `getCreditLineStatus(uint256)` | `FunctionFragment` |
| `idealCollateralRatioLimits()` | `FunctionFragment` |
| `initialize(address,uint256,address,uint256)` | `FunctionFragment` |
| `liquidate(uint256,bool)` | `FunctionFragment` |
| `liquidatorRewardFraction()` | `FunctionFragment` |
| `owner()` | `FunctionFragment` |
| `protocolFeeCollector()` | `FunctionFragment` |
| `protocolFeeFraction()` | `FunctionFragment` |
| `renounceOwnership()` | `FunctionFragment` |
| `repay(uint256,uint256)` | `FunctionFragment` |
| `request(address,uint128,uint128,bool,uint256,address,address,address,address,bool)` | `FunctionFragment` |
| `transferOwnership(address)` | `FunctionFragment` |
| `updateBorrowLimit(uint256,uint128)` | `FunctionFragment` |
| `updateBorrowLimitLimits(uint256,uint256)` | `FunctionFragment` |
| `updateBorrowRateLimits(uint256,uint256)` | `FunctionFragment` |
| `updateIdealCollateralRatioLimits(uint256,uint256)` | `FunctionFragment` |
| `updateLiquidatorRewardFraction(uint256)` | `FunctionFragment` |
| `updateProtocolFeeCollector(address)` | `FunctionFragment` |
| `updateProtocolFeeFraction(uint256)` | `FunctionFragment` |
| `withdrawAllCollateral(uint256,bool)` | `FunctionFragment` |
| `withdrawCollateral(uint256,uint256,bool)` | `FunctionFragment` |
| `withdrawableCollateral(uint256)` | `FunctionFragment` |

#### Overrides

ethers.utils.Interface.functions

#### Defined in

[src/wrappers/CreditLine.d.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L23)

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
| `functionFragment` | ``"PRICE_ORACLE"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CreditLine.d.ts:116](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L116)

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

[src/wrappers/CreditLine.d.ts:117](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L117)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"STRATEGY_REGISTRY"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CreditLine.d.ts:118](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L118)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"accept"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CreditLine.d.ts:119](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L119)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"borrow"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CreditLine.d.ts:120](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L120)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"borrowLimitLimits"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CreditLine.d.ts:121](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L121)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"borrowRateLimits"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CreditLine.d.ts:122](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L122)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"borrowTokensToLiquidate"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CreditLine.d.ts:123](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L123)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"calculateBorrowableAmount"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CreditLine.d.ts:124](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L124)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"calculateCurrentCollateralRatio"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CreditLine.d.ts:125](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L125)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"calculateCurrentDebt"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CreditLine.d.ts:126](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L126)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"calculateInterest"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CreditLine.d.ts:127](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L127)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"calculateInterestAccrued"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CreditLine.d.ts:128](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L128)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"calculateTotalCollateralTokens"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CreditLine.d.ts:129](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L129)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"cancel"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CreditLine.d.ts:130](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L130)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"close"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CreditLine.d.ts:131](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L131)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"collateralShareInStrategy"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CreditLine.d.ts:132](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L132)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"creditLineConstants"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CreditLine.d.ts:133](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L133)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"creditLineCounter"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CreditLine.d.ts:134](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L134)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"creditLineVariables"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CreditLine.d.ts:135](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L135)

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

[src/wrappers/CreditLine.d.ts:136](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L136)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getCreditLineStatus"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CreditLine.d.ts:137](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L137)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"idealCollateralRatioLimits"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CreditLine.d.ts:138](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L138)

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

[src/wrappers/CreditLine.d.ts:139](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L139)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"liquidate"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CreditLine.d.ts:140](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L140)

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

[src/wrappers/CreditLine.d.ts:141](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L141)

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

[src/wrappers/CreditLine.d.ts:142](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L142)

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

[src/wrappers/CreditLine.d.ts:143](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L143)

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

[src/wrappers/CreditLine.d.ts:144](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L144)

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

[src/wrappers/CreditLine.d.ts:145](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L145)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"repay"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CreditLine.d.ts:146](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L146)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"request"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CreditLine.d.ts:147](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L147)

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

[src/wrappers/CreditLine.d.ts:148](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L148)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateBorrowLimit"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CreditLine.d.ts:149](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L149)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateBorrowLimitLimits"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CreditLine.d.ts:150](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L150)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateBorrowRateLimits"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CreditLine.d.ts:151](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L151)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateIdealCollateralRatioLimits"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CreditLine.d.ts:152](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L152)

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

[src/wrappers/CreditLine.d.ts:153](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L153)

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

[src/wrappers/CreditLine.d.ts:154](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L154)

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

[src/wrappers/CreditLine.d.ts:155](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L155)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawAllCollateral"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CreditLine.d.ts:156](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L156)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawCollateral"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CreditLine.d.ts:157](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L157)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawableCollateral"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CreditLine.d.ts:158](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L158)

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
| `functionFragment` | ``"PRICE_ORACLE"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L69)

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

[src/wrappers/CreditLine.d.ts:70](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L70)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"STRATEGY_REGISTRY"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L71)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"accept"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L72)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"borrow"`` |
| `values` | [`BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L73)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"borrowLimitLimits"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:74](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L74)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"borrowRateLimits"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:75](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L75)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"borrowTokensToLiquidate"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L76)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"calculateBorrowableAmount"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L77)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"calculateCurrentCollateralRatio"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:78](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L78)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"calculateCurrentDebt"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:79](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L79)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"calculateInterest"`` |
| `values` | [`BigNumberish`, `BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L80)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"calculateInterestAccrued"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L81)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"calculateTotalCollateralTokens"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L82)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"cancel"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:83](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L83)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"close"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L84)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"collateralShareInStrategy"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L85)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"creditLineConstants"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:86](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L86)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"creditLineCounter"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L87)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"creditLineVariables"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:88](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L88)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"depositCollateral"`` |
| `values` | [`BigNumberish`, `BigNumberish`, `boolean`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:89](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L89)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getCreditLineStatus"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:90](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L90)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"idealCollateralRatioLimits"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:91](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L91)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"initialize"`` |
| `values` | [`string`, `BigNumberish`, `string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:92](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L92)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"liquidate"`` |
| `values` | [`BigNumberish`, `boolean`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:93](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L93)

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

[src/wrappers/CreditLine.d.ts:94](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L94)

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

[src/wrappers/CreditLine.d.ts:95](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L95)

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

[src/wrappers/CreditLine.d.ts:96](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L96)

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

[src/wrappers/CreditLine.d.ts:97](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L97)

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

[src/wrappers/CreditLine.d.ts:98](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L98)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"repay"`` |
| `values` | [`BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:99](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L99)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"request"`` |
| `values` | [`string`, `BigNumberish`, `BigNumberish`, `boolean`, `BigNumberish`, `string`, `string`, `string`, `string`, `boolean`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:100](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L100)

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

[src/wrappers/CreditLine.d.ts:104](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L104)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateBorrowLimit"`` |
| `values` | [`BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:105](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L105)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateBorrowLimitLimits"`` |
| `values` | [`BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:106](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L106)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateBorrowRateLimits"`` |
| `values` | [`BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:107](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L107)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateIdealCollateralRatioLimits"`` |
| `values` | [`BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:108](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L108)

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

[src/wrappers/CreditLine.d.ts:109](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L109)

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

[src/wrappers/CreditLine.d.ts:110](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L110)

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

[src/wrappers/CreditLine.d.ts:111](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L111)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawAllCollateral"`` |
| `values` | [`BigNumberish`, `boolean`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:112](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L112)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawCollateral"`` |
| `values` | [`BigNumberish`, `BigNumberish`, `boolean`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:113](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L113)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawableCollateral"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CreditLine.d.ts:114](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L114)

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
| `nameOrSignatureOrTopic` | ``"BorrowLimitUpdated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/CreditLine.d.ts:180](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L180)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"BorrowedFromCreditLine"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/CreditLine.d.ts:181](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L181)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"CollateralDeposited"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/CreditLine.d.ts:182](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L182)

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

[src/wrappers/CreditLine.d.ts:183](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L183)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"CompleteCreditLineRepaid"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/CreditLine.d.ts:184](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L184)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"CreditLineAccepted"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/CreditLine.d.ts:185](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L185)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"CreditLineCancelled"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/CreditLine.d.ts:186](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L186)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"CreditLineClosed"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/CreditLine.d.ts:187](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L187)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"CreditLineLiquidated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/CreditLine.d.ts:188](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L188)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"CreditLineRequested"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/CreditLine.d.ts:189](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L189)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"CreditLineReset"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/CreditLine.d.ts:190](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L190)

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

[src/wrappers/CreditLine.d.ts:191](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L191)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"LiquidationRewardFractionUpdated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/CreditLine.d.ts:192](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L192)

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

[src/wrappers/CreditLine.d.ts:193](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L193)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PartialCreditLineRepaid"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/CreditLine.d.ts:194](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L194)

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

[src/wrappers/CreditLine.d.ts:195](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L195)

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

[src/wrappers/CreditLine.d.ts:196](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/CreditLine.d.ts#L196)

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
