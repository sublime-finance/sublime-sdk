[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/Repayments](../modules/wrappers_Repayments.md) / RepaymentsInterface

# Interface: RepaymentsInterface

[wrappers/Repayments](../modules/wrappers_Repayments.md).RepaymentsInterface

## Hierarchy

- `Interface`

  ↳ **`RepaymentsInterface`**

## Table of contents

### Properties

- [\_abiCoder](wrappers_Repayments.RepaymentsInterface.md#_abicoder)
- [\_isInterface](wrappers_Repayments.RepaymentsInterface.md#_isinterface)
- [deploy](wrappers_Repayments.RepaymentsInterface.md#deploy)
- [errors](wrappers_Repayments.RepaymentsInterface.md#errors)
- [events](wrappers_Repayments.RepaymentsInterface.md#events)
- [fragments](wrappers_Repayments.RepaymentsInterface.md#fragments)
- [functions](wrappers_Repayments.RepaymentsInterface.md#functions)
- [structs](wrappers_Repayments.RepaymentsInterface.md#structs)

### Methods

- [\_decodeParams](wrappers_Repayments.RepaymentsInterface.md#_decodeparams)
- [\_encodeParams](wrappers_Repayments.RepaymentsInterface.md#_encodeparams)
- [decodeErrorResult](wrappers_Repayments.RepaymentsInterface.md#decodeerrorresult)
- [decodeEventLog](wrappers_Repayments.RepaymentsInterface.md#decodeeventlog)
- [decodeFunctionData](wrappers_Repayments.RepaymentsInterface.md#decodefunctiondata)
- [decodeFunctionResult](wrappers_Repayments.RepaymentsInterface.md#decodefunctionresult)
- [encodeDeploy](wrappers_Repayments.RepaymentsInterface.md#encodedeploy)
- [encodeErrorResult](wrappers_Repayments.RepaymentsInterface.md#encodeerrorresult)
- [encodeEventLog](wrappers_Repayments.RepaymentsInterface.md#encodeeventlog)
- [encodeFilterTopics](wrappers_Repayments.RepaymentsInterface.md#encodefiltertopics)
- [encodeFunctionData](wrappers_Repayments.RepaymentsInterface.md#encodefunctiondata)
- [encodeFunctionResult](wrappers_Repayments.RepaymentsInterface.md#encodefunctionresult)
- [format](wrappers_Repayments.RepaymentsInterface.md#format)
- [getError](wrappers_Repayments.RepaymentsInterface.md#geterror)
- [getEvent](wrappers_Repayments.RepaymentsInterface.md#getevent)
- [getEventTopic](wrappers_Repayments.RepaymentsInterface.md#geteventtopic)
- [getFunction](wrappers_Repayments.RepaymentsInterface.md#getfunction)
- [getSighash](wrappers_Repayments.RepaymentsInterface.md#getsighash)
- [parseError](wrappers_Repayments.RepaymentsInterface.md#parseerror)
- [parseLog](wrappers_Repayments.RepaymentsInterface.md#parselog)
- [parseTransaction](wrappers_Repayments.RepaymentsInterface.md#parsetransaction)

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
| `GracePenaltyRateUpdated(uint256)` | `EventFragment` |
| `GracePenaltyRepaid(address,uint256)` | `EventFragment` |
| `GracePeriodFractionUpdated(uint256)` | `EventFragment` |
| `InterestRepaid(address,uint256)` | `EventFragment` |
| `InterestRepaymentComplete(address,uint256)` | `EventFragment` |
| `PoolFactoryUpdated(address)` | `EventFragment` |
| `PrincipalRepaid(address,uint256)` | `EventFragment` |

#### Overrides

ethers.utils.Interface.events

#### Defined in

[src/wrappers/Repayments.d.ts:106](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L106)

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
| `didBorrowerDefault(address)` | `FunctionFragment` |
| `getCurrentInstalmentInterval(address)` | `FunctionFragment` |
| `getCurrentLoanInterval(address)` | `FunctionFragment` |
| `getGracePeriodFraction()` | `FunctionFragment` |
| `getInstalmentsCompleted(address)` | `FunctionFragment` |
| `getInterest(address,uint256)` | `FunctionFragment` |
| `getInterestCalculationVars(address)` | `FunctionFragment` |
| `getInterestDueTillInstalmentDeadline(address)` | `FunctionFragment` |
| `getInterestLeft(address)` | `FunctionFragment` |
| `getInterestPerSecond(address)` | `FunctionFragment` |
| `getNextInstalmentDeadline(address)` | `FunctionFragment` |
| `getRepaidDuration(address,uint256)` | `FunctionFragment` |
| `getTotalRepaidAmount(address)` | `FunctionFragment` |
| `gracePenaltyRate()` | `FunctionFragment` |
| `gracePeriodFraction()` | `FunctionFragment` |
| `initialize(address,uint128,uint128)` | `FunctionFragment` |
| `initializeRepayment(uint64,uint256,uint256,uint256,address)` | `FunctionFragment` |
| `isGracePenaltyApplicable(address)` | `FunctionFragment` |
| `repay(address,uint256)` | `FunctionFragment` |
| `repayConstants(address)` | `FunctionFragment` |
| `repayPrincipal(address)` | `FunctionFragment` |
| `repayVariables(address)` | `FunctionFragment` |
| `updateGracePenaltyRate(uint128)` | `FunctionFragment` |
| `updateGracePeriodFraction(uint128)` | `FunctionFragment` |
| `updatePoolFactory(address)` | `FunctionFragment` |

#### Overrides

ethers.utils.Interface.functions

#### Defined in

[src/wrappers/Repayments.d.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L23)

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
| `functionFragment` | ``"didBorrowerDefault"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Repayments.d.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L80)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getCurrentInstalmentInterval"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Repayments.d.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L81)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getCurrentLoanInterval"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Repayments.d.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L82)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getGracePeriodFraction"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Repayments.d.ts:83](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L83)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getInstalmentsCompleted"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Repayments.d.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L84)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getInterest"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Repayments.d.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L85)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getInterestCalculationVars"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Repayments.d.ts:86](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L86)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getInterestDueTillInstalmentDeadline"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Repayments.d.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L87)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getInterestLeft"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Repayments.d.ts:88](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L88)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getInterestPerSecond"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Repayments.d.ts:89](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L89)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getNextInstalmentDeadline"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Repayments.d.ts:90](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L90)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getRepaidDuration"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Repayments.d.ts:91](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L91)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getTotalRepaidAmount"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Repayments.d.ts:92](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L92)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"gracePenaltyRate"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Repayments.d.ts:93](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L93)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"gracePeriodFraction"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Repayments.d.ts:94](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L94)

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

[src/wrappers/Repayments.d.ts:95](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L95)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"initializeRepayment"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Repayments.d.ts:96](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L96)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"isGracePenaltyApplicable"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Repayments.d.ts:97](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L97)

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

[src/wrappers/Repayments.d.ts:98](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L98)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"repayConstants"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Repayments.d.ts:99](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L99)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"repayPrincipal"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Repayments.d.ts:100](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L100)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"repayVariables"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Repayments.d.ts:101](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L101)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateGracePenaltyRate"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Repayments.d.ts:102](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L102)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateGracePeriodFraction"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Repayments.d.ts:103](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L103)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updatePoolFactory"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/Repayments.d.ts:104](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L104)

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
| `functionFragment` | ``"didBorrowerDefault"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Repayments.d.ts:51](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L51)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getCurrentInstalmentInterval"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Repayments.d.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L52)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getCurrentLoanInterval"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Repayments.d.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L53)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getGracePeriodFraction"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Repayments.d.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L54)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getInstalmentsCompleted"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Repayments.d.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L55)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getInterest"`` |
| `values` | [`string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Repayments.d.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L56)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getInterestCalculationVars"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Repayments.d.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L57)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getInterestDueTillInstalmentDeadline"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Repayments.d.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L58)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getInterestLeft"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Repayments.d.ts:59](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L59)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getInterestPerSecond"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Repayments.d.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L60)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getNextInstalmentDeadline"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Repayments.d.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L61)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getRepaidDuration"`` |
| `values` | [`string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Repayments.d.ts:62](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L62)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getTotalRepaidAmount"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Repayments.d.ts:63](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L63)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"gracePenaltyRate"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Repayments.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L64)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"gracePeriodFraction"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Repayments.d.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L65)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"initialize"`` |
| `values` | [`string`, `BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Repayments.d.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L66)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"initializeRepayment"`` |
| `values` | [`BigNumberish`, `BigNumberish`, `BigNumberish`, `BigNumberish`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Repayments.d.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L67)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"isGracePenaltyApplicable"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Repayments.d.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L71)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"repay"`` |
| `values` | [`string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Repayments.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L72)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"repayConstants"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Repayments.d.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L73)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"repayPrincipal"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Repayments.d.ts:74](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L74)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"repayVariables"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Repayments.d.ts:75](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L75)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateGracePenaltyRate"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Repayments.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L76)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateGracePeriodFraction"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Repayments.d.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L77)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updatePoolFactory"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/Repayments.d.ts:78](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L78)

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
| `nameOrSignatureOrTopic` | ``"GracePenaltyRateUpdated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/Repayments.d.ts:116](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L116)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"GracePenaltyRepaid"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/Repayments.d.ts:117](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L117)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"GracePeriodFractionUpdated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/Repayments.d.ts:118](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L118)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"InterestRepaid"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/Repayments.d.ts:119](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L119)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"InterestRepaymentComplete"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/Repayments.d.ts:120](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L120)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PoolFactoryUpdated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/Repayments.d.ts:121](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L121)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PrincipalRepaid"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/Repayments.d.ts:122](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L122)

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
