[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/Pool](../modules/wrappers_Pool.md) / PoolInterface

# Interface: PoolInterface

[wrappers/Pool](../modules/wrappers_Pool.md).PoolInterface

## Hierarchy

- `Interface`

  ↳ **`PoolInterface`**

## Table of contents

### Properties

- [\_abiCoder](wrappers_Pool.PoolInterface.md#_abicoder)
- [\_isInterface](wrappers_Pool.PoolInterface.md#_isinterface)
- [deploy](wrappers_Pool.PoolInterface.md#deploy)
- [errors](wrappers_Pool.PoolInterface.md#errors)
- [events](wrappers_Pool.PoolInterface.md#events)
- [fragments](wrappers_Pool.PoolInterface.md#fragments)
- [functions](wrappers_Pool.PoolInterface.md#functions)
- [structs](wrappers_Pool.PoolInterface.md#structs)

### Methods

- [\_decodeParams](wrappers_Pool.PoolInterface.md#_decodeparams)
- [\_encodeParams](wrappers_Pool.PoolInterface.md#_encodeparams)
- [decodeErrorResult](wrappers_Pool.PoolInterface.md#decodeerrorresult)
- [decodeEventLog](wrappers_Pool.PoolInterface.md#decodeeventlog)
- [decodeFunctionData](wrappers_Pool.PoolInterface.md#decodefunctiondata)
- [decodeFunctionResult](wrappers_Pool.PoolInterface.md#decodefunctionresult)
- [encodeDeploy](wrappers_Pool.PoolInterface.md#encodedeploy)
- [encodeErrorResult](wrappers_Pool.PoolInterface.md#encodeerrorresult)
- [encodeEventLog](wrappers_Pool.PoolInterface.md#encodeeventlog)
- [encodeFilterTopics](wrappers_Pool.PoolInterface.md#encodefiltertopics)
- [encodeFunctionData](wrappers_Pool.PoolInterface.md#encodefunctiondata)
- [encodeFunctionResult](wrappers_Pool.PoolInterface.md#encodefunctionresult)
- [format](wrappers_Pool.PoolInterface.md#format)
- [getError](wrappers_Pool.PoolInterface.md#geterror)
- [getEvent](wrappers_Pool.PoolInterface.md#getevent)
- [getEventTopic](wrappers_Pool.PoolInterface.md#geteventtopic)
- [getFunction](wrappers_Pool.PoolInterface.md#getfunction)
- [getSighash](wrappers_Pool.PoolInterface.md#getsighash)
- [parseError](wrappers_Pool.PoolInterface.md#parseerror)
- [parseLog](wrappers_Pool.PoolInterface.md#parselog)
- [parseTransaction](wrappers_Pool.PoolInterface.md#parsetransaction)

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
| `Approval(address,address,uint256)` | `EventFragment` |
| `CollateralAdded(address,uint256,uint256)` | `EventFragment` |
| `CollateralWithdrawn(address,uint256)` | `EventFragment` |
| `LenderLiquidated(address,address,uint256)` | `EventFragment` |
| `LiquiditySupplied(uint256,address)` | `EventFragment` |
| `LiquidityWithdrawn(uint256,address)` | `EventFragment` |
| `MarginCallCollateralAdded(address,address,uint256,uint256)` | `EventFragment` |
| `MarginCalled(address)` | `EventFragment` |
| `Paused(address)` | `EventFragment` |
| `PoolCancelled()` | `EventFragment` |
| `PoolClosed()` | `EventFragment` |
| `PoolLiquidated(address)` | `EventFragment` |
| `PoolTerminated()` | `EventFragment` |
| `Transfer(address,address,uint256)` | `EventFragment` |
| `Unpaused(address)` | `EventFragment` |

#### Overrides

ethers.utils.Interface.events

#### Defined in

[src/wrappers/Pool.d.ts:172](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L172)

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
| `allowance(address,address)` | `FunctionFragment` |
| `approve(address,uint256)` | `FunctionFragment` |
| `balanceOf(address)` | `FunctionFragment` |
| `borrower()` | `FunctionFragment` |
| `calculateCollateralRatio(uint256,uint256)` | `FunctionFragment` |
| `calculateCurrentPeriod()` | `FunctionFragment` |
| `calculateRepaymentWithdrawable(address)` | `FunctionFragment` |
| `cancelPool()` | `FunctionFragment` |
| `closeLoan()` | `FunctionFragment` |
| `correspondingBorrowTokens(uint256,uint256)` | `FunctionFragment` |
| `decimals()` | `FunctionFragment` |
| `decreaseAllowance(address,uint256)` | `FunctionFragment` |
| `depositCollateral(uint256,bool)` | `FunctionFragment` |
| `getBalanceDetails(address)` | `FunctionFragment` |
| `getCurrentCollateralRatio(address)` | `FunctionFragment` |
| `getEquivalentTokens(address,address,uint256)` | `FunctionFragment` |
| `getLoanStatus()` | `FunctionFragment` |
| `getMarginCallEndTime(address)` | `FunctionFragment` |
| `increaseAllowance(address,uint256)` | `FunctionFragment` |
| `initialize(uint256,uint256,address,address,address,uint256,uint64,uint64,address,uint256,bool,address,uint256,uint256)` | `FunctionFragment` |
| `interestPerPeriod(uint256)` | `FunctionFragment` |
| `interestPerSecond(uint256)` | `FunctionFragment` |
| `interestToPay()` | `FunctionFragment` |
| `lend(address,uint256,address,bool)` | `FunctionFragment` |
| `lenders(address)` | `FunctionFragment` |
| `liquidateCancelPenalty(bool,bool)` | `FunctionFragment` |
| `liquidateForLender(address,bool,bool,bool)` | `FunctionFragment` |
| `liquidatePool(bool,bool,bool)` | `FunctionFragment` |
| `name()` | `FunctionFragment` |
| `paused()` | `FunctionFragment` |
| `poolConstants()` | `FunctionFragment` |
| `poolVariables()` | `FunctionFragment` |
| `requestMarginCall()` | `FunctionFragment` |
| `symbol()` | `FunctionFragment` |
| `terminatePool()` | `FunctionFragment` |
| `totalSupply()` | `FunctionFragment` |
| `transfer(address,uint256)` | `FunctionFragment` |
| `transferFrom(address,address,uint256)` | `FunctionFragment` |
| `withdrawBorrowedAmount()` | `FunctionFragment` |
| `withdrawLiquidity()` | `FunctionFragment` |
| `withdrawRepayment()` | `FunctionFragment` |

#### Overrides

ethers.utils.Interface.functions

#### Defined in

[src/wrappers/Pool.d.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L23)

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

[src/wrappers/Pool.d.ts:129](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L129)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"allowance"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Pool.d.ts:130](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L130)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"approve"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Pool.d.ts:131](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L131)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"balanceOf"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Pool.d.ts:132](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L132)

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

[src/wrappers/Pool.d.ts:133](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L133)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"calculateCollateralRatio"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Pool.d.ts:134](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L134)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"calculateCurrentPeriod"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Pool.d.ts:135](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L135)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"calculateRepaymentWithdrawable"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Pool.d.ts:136](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L136)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"cancelPool"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Pool.d.ts:137](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L137)

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

[src/wrappers/Pool.d.ts:138](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L138)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"correspondingBorrowTokens"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Pool.d.ts:139](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L139)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"decimals"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Pool.d.ts:140](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L140)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"decreaseAllowance"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Pool.d.ts:141](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L141)

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

[src/wrappers/Pool.d.ts:142](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L142)

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

[src/wrappers/Pool.d.ts:143](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L143)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getCurrentCollateralRatio"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Pool.d.ts:144](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L144)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getEquivalentTokens"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Pool.d.ts:145](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L145)

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

[src/wrappers/Pool.d.ts:146](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L146)

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

[src/wrappers/Pool.d.ts:147](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L147)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"increaseAllowance"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Pool.d.ts:148](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L148)

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

[src/wrappers/Pool.d.ts:149](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L149)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"interestPerPeriod"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Pool.d.ts:150](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L150)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"interestPerSecond"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Pool.d.ts:151](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L151)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"interestToPay"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Pool.d.ts:152](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L152)

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

[src/wrappers/Pool.d.ts:153](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L153)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"lenders"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Pool.d.ts:154](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L154)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"liquidateCancelPenalty"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Pool.d.ts:155](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L155)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"liquidateForLender"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Pool.d.ts:156](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L156)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"liquidatePool"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Pool.d.ts:157](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L157)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"name"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Pool.d.ts:158](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L158)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"paused"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Pool.d.ts:159](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L159)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"poolConstants"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Pool.d.ts:160](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L160)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"poolVariables"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Pool.d.ts:161](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L161)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"requestMarginCall"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Pool.d.ts:162](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L162)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"symbol"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Pool.d.ts:163](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L163)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"terminatePool"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Pool.d.ts:164](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L164)

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

[src/wrappers/Pool.d.ts:165](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L165)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"transfer"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Pool.d.ts:166](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L166)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"transferFrom"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Pool.d.ts:167](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L167)

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

[src/wrappers/Pool.d.ts:168](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L168)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawLiquidity"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Pool.d.ts:169](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L169)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawRepayment"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Pool.d.ts:170](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L170)

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

[src/wrappers/Pool.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L68)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"allowance"`` |
| `values` | [`string`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Pool.d.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L69)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"approve"`` |
| `values` | [`string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Pool.d.ts:70](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L70)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"balanceOf"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Pool.d.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L71)

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

[src/wrappers/Pool.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L72)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"calculateCollateralRatio"`` |
| `values` | [`BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Pool.d.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L73)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"calculateCurrentPeriod"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Pool.d.ts:74](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L74)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"calculateRepaymentWithdrawable"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Pool.d.ts:75](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L75)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"cancelPool"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Pool.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L76)

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

[src/wrappers/Pool.d.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L77)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"correspondingBorrowTokens"`` |
| `values` | [`BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Pool.d.ts:78](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L78)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"decimals"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Pool.d.ts:79](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L79)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"decreaseAllowance"`` |
| `values` | [`string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Pool.d.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L80)

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

[src/wrappers/Pool.d.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L81)

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

[src/wrappers/Pool.d.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L82)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getCurrentCollateralRatio"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Pool.d.ts:83](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L83)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getEquivalentTokens"`` |
| `values` | [`string`, `string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Pool.d.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L84)

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

[src/wrappers/Pool.d.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L85)

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

[src/wrappers/Pool.d.ts:86](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L86)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"increaseAllowance"`` |
| `values` | [`string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Pool.d.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L87)

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

[src/wrappers/Pool.d.ts:88](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L88)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"interestPerPeriod"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Pool.d.ts:107](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L107)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"interestPerSecond"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Pool.d.ts:108](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L108)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"interestToPay"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Pool.d.ts:109](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L109)

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

[src/wrappers/Pool.d.ts:110](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L110)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"lenders"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Pool.d.ts:111](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L111)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"liquidateCancelPenalty"`` |
| `values` | [`boolean`, `boolean`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Pool.d.ts:112](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L112)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"liquidateForLender"`` |
| `values` | [`string`, `boolean`, `boolean`, `boolean`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Pool.d.ts:113](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L113)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"liquidatePool"`` |
| `values` | [`boolean`, `boolean`, `boolean`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Pool.d.ts:114](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L114)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"name"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Pool.d.ts:115](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L115)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"paused"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Pool.d.ts:116](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L116)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"poolConstants"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Pool.d.ts:117](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L117)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"poolVariables"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Pool.d.ts:118](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L118)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"requestMarginCall"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Pool.d.ts:119](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L119)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"symbol"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Pool.d.ts:120](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L120)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"terminatePool"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Pool.d.ts:121](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L121)

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

[src/wrappers/Pool.d.ts:122](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L122)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"transfer"`` |
| `values` | [`string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Pool.d.ts:123](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L123)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"transferFrom"`` |
| `values` | [`string`, `string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Pool.d.ts:124](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L124)

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

[src/wrappers/Pool.d.ts:125](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L125)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawLiquidity"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Pool.d.ts:126](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L126)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawRepayment"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Pool.d.ts:127](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L127)

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

[src/wrappers/Pool.d.ts:191](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L191)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"Approval"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/Pool.d.ts:192](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L192)

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

[src/wrappers/Pool.d.ts:193](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L193)

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

[src/wrappers/Pool.d.ts:194](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L194)

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

[src/wrappers/Pool.d.ts:195](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L195)

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

[src/wrappers/Pool.d.ts:196](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L196)

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

[src/wrappers/Pool.d.ts:197](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L197)

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

[src/wrappers/Pool.d.ts:198](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L198)

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

[src/wrappers/Pool.d.ts:199](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L199)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"Paused"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/Pool.d.ts:200](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L200)

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

[src/wrappers/Pool.d.ts:201](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L201)

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

[src/wrappers/Pool.d.ts:202](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L202)

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

[src/wrappers/Pool.d.ts:203](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L203)

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

[src/wrappers/Pool.d.ts:204](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L204)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"Transfer"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/Pool.d.ts:205](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L205)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"Unpaused"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/Pool.d.ts:206](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/Pool.d.ts#L206)

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
