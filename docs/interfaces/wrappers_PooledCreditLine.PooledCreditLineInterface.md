[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/PooledCreditLine](../modules/wrappers_PooledCreditLine.md) / PooledCreditLineInterface

# Interface: PooledCreditLineInterface

[wrappers/PooledCreditLine](../modules/wrappers_PooledCreditLine.md).PooledCreditLineInterface

## Hierarchy

- `Interface`

  ↳ **`PooledCreditLineInterface`**

## Table of contents

### Properties

- [\_abiCoder](wrappers_PooledCreditLine.PooledCreditLineInterface.md#_abicoder)
- [\_isInterface](wrappers_PooledCreditLine.PooledCreditLineInterface.md#_isinterface)
- [deploy](wrappers_PooledCreditLine.PooledCreditLineInterface.md#deploy)
- [errors](wrappers_PooledCreditLine.PooledCreditLineInterface.md#errors)
- [events](wrappers_PooledCreditLine.PooledCreditLineInterface.md#events)
- [fragments](wrappers_PooledCreditLine.PooledCreditLineInterface.md#fragments)
- [functions](wrappers_PooledCreditLine.PooledCreditLineInterface.md#functions)
- [structs](wrappers_PooledCreditLine.PooledCreditLineInterface.md#structs)

### Methods

- [\_decodeParams](wrappers_PooledCreditLine.PooledCreditLineInterface.md#_decodeparams)
- [\_encodeParams](wrappers_PooledCreditLine.PooledCreditLineInterface.md#_encodeparams)
- [decodeErrorResult](wrappers_PooledCreditLine.PooledCreditLineInterface.md#decodeerrorresult)
- [decodeEventLog](wrappers_PooledCreditLine.PooledCreditLineInterface.md#decodeeventlog)
- [decodeFunctionData](wrappers_PooledCreditLine.PooledCreditLineInterface.md#decodefunctiondata)
- [decodeFunctionResult](wrappers_PooledCreditLine.PooledCreditLineInterface.md#decodefunctionresult)
- [encodeDeploy](wrappers_PooledCreditLine.PooledCreditLineInterface.md#encodedeploy)
- [encodeErrorResult](wrappers_PooledCreditLine.PooledCreditLineInterface.md#encodeerrorresult)
- [encodeEventLog](wrappers_PooledCreditLine.PooledCreditLineInterface.md#encodeeventlog)
- [encodeFilterTopics](wrappers_PooledCreditLine.PooledCreditLineInterface.md#encodefiltertopics)
- [encodeFunctionData](wrappers_PooledCreditLine.PooledCreditLineInterface.md#encodefunctiondata)
- [encodeFunctionResult](wrappers_PooledCreditLine.PooledCreditLineInterface.md#encodefunctionresult)
- [format](wrappers_PooledCreditLine.PooledCreditLineInterface.md#format)
- [getError](wrappers_PooledCreditLine.PooledCreditLineInterface.md#geterror)
- [getEvent](wrappers_PooledCreditLine.PooledCreditLineInterface.md#getevent)
- [getEventTopic](wrappers_PooledCreditLine.PooledCreditLineInterface.md#geteventtopic)
- [getFunction](wrappers_PooledCreditLine.PooledCreditLineInterface.md#getfunction)
- [getSighash](wrappers_PooledCreditLine.PooledCreditLineInterface.md#getsighash)
- [parseError](wrappers_PooledCreditLine.PooledCreditLineInterface.md#parseerror)
- [parseLog](wrappers_PooledCreditLine.PooledCreditLineInterface.md#parselog)
- [parseTransaction](wrappers_PooledCreditLine.PooledCreditLineInterface.md#parsetransaction)

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
| `BorrowedFromPooledCreditLine(uint256,uint256)` | `EventFragment` |
| `CollateralDeposited(uint256,uint256,address)` | `EventFragment` |
| `CollateralWithdrawn(uint256,uint256)` | `EventFragment` |
| `CompletePooledCreditLineRepaid(uint256,address,uint256)` | `EventFragment` |
| `LimitsUpdated(string,uint256,uint256)` | `EventFragment` |
| `OwnershipTransferred(address,address)` | `EventFragment` |
| `PartialPooledCreditLineRepaid(uint256,address,uint256)` | `EventFragment` |
| `PooledCreditLineAccepted(uint256,uint256)` | `EventFragment` |
| `PooledCreditLineCancelled(uint256,string)` | `EventFragment` |
| `PooledCreditLineClosed(uint256)` | `EventFragment` |
| `PooledCreditLineLiquidated(uint256)` | `EventFragment` |
| `PooledCreditLineRequested(uint256,address,address)` | `EventFragment` |
| `PooledCreditLineTerminated(uint256)` | `EventFragment` |
| `ProtocolFeeCollectorUpdated(address)` | `EventFragment` |
| `ProtocolFeeFractionUpdated(uint256)` | `EventFragment` |

#### Overrides

ethers.utils.Interface.events

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:199](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L199)

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
| `LENDER_POOL()` | `FunctionFragment` |
| `PRICE_ORACLE()` | `FunctionFragment` |
| `SAVINGS_ACCOUNT()` | `FunctionFragment` |
| `STRATEGY_REGISTRY()` | `FunctionFragment` |
| `USDC()` | `FunctionFragment` |
| `VERIFICATION()` | `FunctionFragment` |
| `accept(uint256,uint256)` | `FunctionFragment` |
| `borrow(uint256,uint256)` | `FunctionFragment` |
| `calculateBorrowableAmount(uint256)` | `FunctionFragment` |
| `calculateCurrentCollateralRatio(uint256)` | `FunctionFragment` |
| `calculateCurrentDebt(uint256)` | `FunctionFragment` |
| `calculateInterestAccrued(uint256)` | `FunctionFragment` |
| `calculateTotalCollateralTokens(uint256)` | `FunctionFragment` |
| `cancelRequest(uint256)` | `FunctionFragment` |
| `cancelRequestOnLowCollection(uint256)` | `FunctionFragment` |
| `cancelRequestOnRequestedStateAtEnd(uint256)` | `FunctionFragment` |
| `close(uint256)` | `FunctionFragment` |
| `collateralTokensToLiquidate(uint256,uint256)` | `FunctionFragment` |
| `depositCollateral(uint256,uint256,bool)` | `FunctionFragment` |
| `depositedCollateralInShares(uint256)` | `FunctionFragment` |
| `getEndsAt(uint256)` | `FunctionFragment` |
| `getPrincipal(uint256)` | `FunctionFragment` |
| `getRequiredCollateral(uint256,uint256)` | `FunctionFragment` |
| `getStatusAndUpdate(uint256)` | `FunctionFragment` |
| `initialize(address,uint256,address)` | `FunctionFragment` |
| `liquidate(uint256)` | `FunctionFragment` |
| `maximumProtocolFeeFraction()` | `FunctionFragment` |
| `owner()` | `FunctionFragment` |
| `pooledCreditLineConstants(uint256)` | `FunctionFragment` |
| `pooledCreditLineCounter()` | `FunctionFragment` |
| `pooledCreditLineVariables(uint256)` | `FunctionFragment` |
| `protocolFeeCollector()` | `FunctionFragment` |
| `protocolFeeFraction()` | `FunctionFragment` |
| `renounceOwnership()` | `FunctionFragment` |
| `repay(uint256,uint256)` | `FunctionFragment` |
| `request(tuple)` | `FunctionFragment` |
| `terminate(uint256)` | `FunctionFragment` |
| `transferOwnership(address)` | `FunctionFragment` |
| `updateBorrowLimitLimits(uint256,uint256)` | `FunctionFragment` |
| `updateBorrowRateLimits(uint256,uint256)` | `FunctionFragment` |
| `updateCollectionPeriodLimits(uint256,uint256)` | `FunctionFragment` |
| `updateDefaultGracePeriodLimits(uint256,uint256)` | `FunctionFragment` |
| `updateDurationLimits(uint256,uint256)` | `FunctionFragment` |
| `updateGracePenaltyRateLimits(uint256,uint256)` | `FunctionFragment` |
| `updateIdealCollateralRatioLimits(uint256,uint256)` | `FunctionFragment` |
| `updateProtocolFeeCollector(address)` | `FunctionFragment` |
| `updateProtocolFeeFraction(uint256)` | `FunctionFragment` |
| `withdrawAllCollateral(uint256,bool)` | `FunctionFragment` |
| `withdrawCollateral(uint256,uint256,bool)` | `FunctionFragment` |
| `withdrawableCollateral(uint256)` | `FunctionFragment` |

#### Overrides

ethers.utils.Interface.functions

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L23)

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
| `functionFragment` | ``"LENDER_POOL"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:148](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L148)

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

[src/wrappers/PooledCreditLine.d.ts:149](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L149)

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

[src/wrappers/PooledCreditLine.d.ts:150](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L150)

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

[src/wrappers/PooledCreditLine.d.ts:151](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L151)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"USDC"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:152](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L152)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"VERIFICATION"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:153](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L153)

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

[src/wrappers/PooledCreditLine.d.ts:154](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L154)

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

[src/wrappers/PooledCreditLine.d.ts:155](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L155)

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

[src/wrappers/PooledCreditLine.d.ts:156](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L156)

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

[src/wrappers/PooledCreditLine.d.ts:157](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L157)

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

[src/wrappers/PooledCreditLine.d.ts:158](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L158)

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

[src/wrappers/PooledCreditLine.d.ts:159](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L159)

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

[src/wrappers/PooledCreditLine.d.ts:160](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L160)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"cancelRequest"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:161](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L161)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"cancelRequestOnLowCollection"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:162](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L162)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"cancelRequestOnRequestedStateAtEnd"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:163](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L163)

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

[src/wrappers/PooledCreditLine.d.ts:164](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L164)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"collateralTokensToLiquidate"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:165](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L165)

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

[src/wrappers/PooledCreditLine.d.ts:166](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L166)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"depositedCollateralInShares"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:167](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L167)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getEndsAt"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:168](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L168)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getPrincipal"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:169](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L169)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getRequiredCollateral"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:170](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L170)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getStatusAndUpdate"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:171](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L171)

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

[src/wrappers/PooledCreditLine.d.ts:172](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L172)

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

[src/wrappers/PooledCreditLine.d.ts:173](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L173)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"maximumProtocolFeeFraction"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:174](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L174)

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

[src/wrappers/PooledCreditLine.d.ts:175](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L175)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"pooledCreditLineConstants"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:176](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L176)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"pooledCreditLineCounter"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:177](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L177)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"pooledCreditLineVariables"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:178](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L178)

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

[src/wrappers/PooledCreditLine.d.ts:179](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L179)

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

[src/wrappers/PooledCreditLine.d.ts:180](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L180)

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

[src/wrappers/PooledCreditLine.d.ts:181](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L181)

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

[src/wrappers/PooledCreditLine.d.ts:182](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L182)

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

[src/wrappers/PooledCreditLine.d.ts:183](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L183)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"terminate"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:184](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L184)

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

[src/wrappers/PooledCreditLine.d.ts:185](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L185)

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

[src/wrappers/PooledCreditLine.d.ts:186](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L186)

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

[src/wrappers/PooledCreditLine.d.ts:187](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L187)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateCollectionPeriodLimits"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:188](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L188)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateDefaultGracePeriodLimits"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:189](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L189)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateDurationLimits"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:190](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L190)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateGracePenaltyRateLimits"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:191](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L191)

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

[src/wrappers/PooledCreditLine.d.ts:192](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L192)

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

[src/wrappers/PooledCreditLine.d.ts:193](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L193)

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

[src/wrappers/PooledCreditLine.d.ts:194](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L194)

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

[src/wrappers/PooledCreditLine.d.ts:195](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L195)

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

[src/wrappers/PooledCreditLine.d.ts:196](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L196)

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

[src/wrappers/PooledCreditLine.d.ts:197](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L197)

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
| `functionFragment` | ``"LENDER_POOL"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L76)

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

[src/wrappers/PooledCreditLine.d.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L77)

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

[src/wrappers/PooledCreditLine.d.ts:78](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L78)

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

[src/wrappers/PooledCreditLine.d.ts:79](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L79)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"USDC"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L80)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"VERIFICATION"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L81)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"accept"`` |
| `values` | [`BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L82)

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

[src/wrappers/PooledCreditLine.d.ts:83](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L83)

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

[src/wrappers/PooledCreditLine.d.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L84)

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

[src/wrappers/PooledCreditLine.d.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L85)

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

[src/wrappers/PooledCreditLine.d.ts:86](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L86)

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

[src/wrappers/PooledCreditLine.d.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L87)

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

[src/wrappers/PooledCreditLine.d.ts:88](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L88)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"cancelRequest"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:89](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L89)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"cancelRequestOnLowCollection"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:90](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L90)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"cancelRequestOnRequestedStateAtEnd"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:91](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L91)

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

[src/wrappers/PooledCreditLine.d.ts:92](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L92)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"collateralTokensToLiquidate"`` |
| `values` | [`BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:93](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L93)

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

[src/wrappers/PooledCreditLine.d.ts:94](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L94)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"depositedCollateralInShares"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:95](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L95)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getEndsAt"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:96](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L96)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getPrincipal"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:97](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L97)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getRequiredCollateral"`` |
| `values` | [`BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:98](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L98)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getStatusAndUpdate"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:99](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L99)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"initialize"`` |
| `values` | [`string`, `BigNumberish`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:100](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L100)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"liquidate"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:101](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L101)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"maximumProtocolFeeFraction"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:102](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L102)

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

[src/wrappers/PooledCreditLine.d.ts:103](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L103)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"pooledCreditLineConstants"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:104](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L104)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"pooledCreditLineCounter"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:105](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L105)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"pooledCreditLineVariables"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:106](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L106)

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

[src/wrappers/PooledCreditLine.d.ts:107](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L107)

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

[src/wrappers/PooledCreditLine.d.ts:108](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L108)

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

[src/wrappers/PooledCreditLine.d.ts:109](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L109)

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

[src/wrappers/PooledCreditLine.d.ts:110](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L110)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"request"`` |
| `values` | [{ `areTokensTransferable`: `boolean` ; `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumberish` ; `borrowRate`: `BigNumberish` ; `borrowerVerifier`: `string` ; `collateralAsset`: `string` ; `collateralAssetStrategy`: `string` ; `collateralRatio`: `BigNumberish` ; `collectionPeriod`: `BigNumberish` ; `defaultGracePeriod`: `BigNumberish` ; `duration`: `BigNumberish` ; `gracePenaltyRate`: `BigNumberish` ; `lenderVerifier`: `string` ; `minBorrowAmount`: `BigNumberish`  }] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:111](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L111)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"terminate"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:133](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L133)

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

[src/wrappers/PooledCreditLine.d.ts:134](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L134)

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

[src/wrappers/PooledCreditLine.d.ts:135](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L135)

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

[src/wrappers/PooledCreditLine.d.ts:136](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L136)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateCollectionPeriodLimits"`` |
| `values` | [`BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:137](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L137)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateDefaultGracePeriodLimits"`` |
| `values` | [`BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:138](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L138)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateDurationLimits"`` |
| `values` | [`BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:139](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L139)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateGracePenaltyRateLimits"`` |
| `values` | [`BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:140](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L140)

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

[src/wrappers/PooledCreditLine.d.ts:141](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L141)

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

[src/wrappers/PooledCreditLine.d.ts:142](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L142)

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

[src/wrappers/PooledCreditLine.d.ts:143](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L143)

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

[src/wrappers/PooledCreditLine.d.ts:144](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L144)

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

[src/wrappers/PooledCreditLine.d.ts:145](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L145)

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

[src/wrappers/PooledCreditLine.d.ts:146](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L146)

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
| `nameOrSignatureOrTopic` | ``"BorrowedFromPooledCreditLine"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:217](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L217)

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

[src/wrappers/PooledCreditLine.d.ts:218](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L218)

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

[src/wrappers/PooledCreditLine.d.ts:219](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L219)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"CompletePooledCreditLineRepaid"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:220](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L220)

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

[src/wrappers/PooledCreditLine.d.ts:221](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L221)

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

[src/wrappers/PooledCreditLine.d.ts:222](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L222)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PartialPooledCreditLineRepaid"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:223](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L223)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PooledCreditLineAccepted"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:224](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L224)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PooledCreditLineCancelled"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:225](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L225)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PooledCreditLineClosed"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:226](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L226)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PooledCreditLineLiquidated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:227](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L227)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PooledCreditLineRequested"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:228](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L228)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PooledCreditLineTerminated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:229](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L229)

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

[src/wrappers/PooledCreditLine.d.ts:230](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L230)

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

[src/wrappers/PooledCreditLine.d.ts:231](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PooledCreditLine.d.ts#L231)

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
