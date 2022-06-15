[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/CompoundYield](../modules/wrappers_CompoundYield.md) / CompoundYieldInterface

# Interface: CompoundYieldInterface

[wrappers/CompoundYield](../modules/wrappers_CompoundYield.md).CompoundYieldInterface

## Hierarchy

- `Interface`

  ↳ **`CompoundYieldInterface`**

## Table of contents

### Properties

- [\_abiCoder](wrappers_CompoundYield.CompoundYieldInterface.md#_abicoder)
- [\_isInterface](wrappers_CompoundYield.CompoundYieldInterface.md#_isinterface)
- [deploy](wrappers_CompoundYield.CompoundYieldInterface.md#deploy)
- [errors](wrappers_CompoundYield.CompoundYieldInterface.md#errors)
- [events](wrappers_CompoundYield.CompoundYieldInterface.md#events)
- [fragments](wrappers_CompoundYield.CompoundYieldInterface.md#fragments)
- [functions](wrappers_CompoundYield.CompoundYieldInterface.md#functions)
- [structs](wrappers_CompoundYield.CompoundYieldInterface.md#structs)

### Methods

- [\_decodeParams](wrappers_CompoundYield.CompoundYieldInterface.md#_decodeparams)
- [\_encodeParams](wrappers_CompoundYield.CompoundYieldInterface.md#_encodeparams)
- [decodeErrorResult](wrappers_CompoundYield.CompoundYieldInterface.md#decodeerrorresult)
- [decodeEventLog](wrappers_CompoundYield.CompoundYieldInterface.md#decodeeventlog)
- [decodeFunctionData](wrappers_CompoundYield.CompoundYieldInterface.md#decodefunctiondata)
- [decodeFunctionResult](wrappers_CompoundYield.CompoundYieldInterface.md#decodefunctionresult)
- [encodeDeploy](wrappers_CompoundYield.CompoundYieldInterface.md#encodedeploy)
- [encodeErrorResult](wrappers_CompoundYield.CompoundYieldInterface.md#encodeerrorresult)
- [encodeEventLog](wrappers_CompoundYield.CompoundYieldInterface.md#encodeeventlog)
- [encodeFilterTopics](wrappers_CompoundYield.CompoundYieldInterface.md#encodefiltertopics)
- [encodeFunctionData](wrappers_CompoundYield.CompoundYieldInterface.md#encodefunctiondata)
- [encodeFunctionResult](wrappers_CompoundYield.CompoundYieldInterface.md#encodefunctionresult)
- [format](wrappers_CompoundYield.CompoundYieldInterface.md#format)
- [getError](wrappers_CompoundYield.CompoundYieldInterface.md#geterror)
- [getEvent](wrappers_CompoundYield.CompoundYieldInterface.md#getevent)
- [getEventTopic](wrappers_CompoundYield.CompoundYieldInterface.md#geteventtopic)
- [getFunction](wrappers_CompoundYield.CompoundYieldInterface.md#getfunction)
- [getSighash](wrappers_CompoundYield.CompoundYieldInterface.md#getsighash)
- [parseError](wrappers_CompoundYield.CompoundYieldInterface.md#parseerror)
- [parseLog](wrappers_CompoundYield.CompoundYieldInterface.md#parselog)
- [parseTransaction](wrappers_CompoundYield.CompoundYieldInterface.md#parsetransaction)

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
| `EmergencyWithdraw(address,address,uint256)` | `EventFragment` |
| `LockedTokens(address,address,uint256)` | `EventFragment` |
| `OwnershipTransferred(address,address)` | `EventFragment` |
| `SavingsAccountUpdated(address)` | `EventFragment` |
| `TokenAddressesUpdated(address,address)` | `EventFragment` |
| `UnlockedShares(address,uint256)` | `EventFragment` |
| `UnlockedTokens(address,uint256)` | `EventFragment` |

#### Overrides

ethers.utils.Interface.events

#### Defined in

[src/wrappers/CompoundYield.d.ts:88](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L88)

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
| `SAVINGS_ACCOUNT()` | `FunctionFragment` |
| `TREASURY()` | `FunctionFragment` |
| `WETH()` | `FunctionFragment` |
| `addTokenAddress(address,address)` | `FunctionFragment` |
| `claimCompTokens(address,address)` | `FunctionFragment` |
| `depositLimit(address)` | `FunctionFragment` |
| `emergencyWithdraw(address,address)` | `FunctionFragment` |
| `forceUpdateTokenAddress(address,address)` | `FunctionFragment` |
| `getSharesForTokens(uint256,address)` | `FunctionFragment` |
| `getTokensForShares(uint256,address)` | `FunctionFragment` |
| `initialize(address)` | `FunctionFragment` |
| `liquidityToken(address)` | `FunctionFragment` |
| `lockTokens(address,address,uint256)` | `FunctionFragment` |
| `owner()` | `FunctionFragment` |
| `removeTokenAddress(address,address)` | `FunctionFragment` |
| `renounceOwnership()` | `FunctionFragment` |
| `setDepositLimit(address,uint256)` | `FunctionFragment` |
| `transferOwnership(address)` | `FunctionFragment` |
| `unlockShares(address,address,uint256)` | `FunctionFragment` |
| `unlockTokens(address,address,uint256)` | `FunctionFragment` |

#### Overrides

ethers.utils.Interface.functions

#### Defined in

[src/wrappers/CompoundYield.d.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L23)

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
| `functionFragment` | ``"SAVINGS_ACCOUNT"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CompoundYield.d.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L67)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"TREASURY"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CompoundYield.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L68)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"WETH"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CompoundYield.d.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L69)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"addTokenAddress"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CompoundYield.d.ts:70](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L70)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"claimCompTokens"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CompoundYield.d.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L71)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"depositLimit"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CompoundYield.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L72)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"emergencyWithdraw"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CompoundYield.d.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L73)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"forceUpdateTokenAddress"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CompoundYield.d.ts:74](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L74)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getSharesForTokens"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CompoundYield.d.ts:75](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L75)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getTokensForShares"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CompoundYield.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L76)

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

[src/wrappers/CompoundYield.d.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L77)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"liquidityToken"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CompoundYield.d.ts:78](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L78)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"lockTokens"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CompoundYield.d.ts:79](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L79)

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

[src/wrappers/CompoundYield.d.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L80)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"removeTokenAddress"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CompoundYield.d.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L81)

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

[src/wrappers/CompoundYield.d.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L82)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setDepositLimit"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CompoundYield.d.ts:83](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L83)

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

[src/wrappers/CompoundYield.d.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L84)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"unlockShares"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CompoundYield.d.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L85)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"unlockTokens"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/CompoundYield.d.ts:86](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L86)

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
| `functionFragment` | ``"SAVINGS_ACCOUNT"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CompoundYield.d.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L46)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"TREASURY"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CompoundYield.d.ts:47](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L47)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"WETH"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CompoundYield.d.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L48)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"addTokenAddress"`` |
| `values` | [`string`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CompoundYield.d.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L49)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"claimCompTokens"`` |
| `values` | [`string`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CompoundYield.d.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L50)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"depositLimit"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CompoundYield.d.ts:51](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L51)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"emergencyWithdraw"`` |
| `values` | [`string`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CompoundYield.d.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L52)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"forceUpdateTokenAddress"`` |
| `values` | [`string`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CompoundYield.d.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L53)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getSharesForTokens"`` |
| `values` | [`BigNumberish`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CompoundYield.d.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L54)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getTokensForShares"`` |
| `values` | [`BigNumberish`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CompoundYield.d.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L55)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"initialize"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CompoundYield.d.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L56)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"liquidityToken"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CompoundYield.d.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L57)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"lockTokens"`` |
| `values` | [`string`, `string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CompoundYield.d.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L58)

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

[src/wrappers/CompoundYield.d.ts:59](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L59)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"removeTokenAddress"`` |
| `values` | [`string`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CompoundYield.d.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L60)

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

[src/wrappers/CompoundYield.d.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L61)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setDepositLimit"`` |
| `values` | [`string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CompoundYield.d.ts:62](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L62)

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

[src/wrappers/CompoundYield.d.ts:63](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L63)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"unlockShares"`` |
| `values` | [`string`, `string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CompoundYield.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L64)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"unlockTokens"`` |
| `values` | [`string`, `string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/CompoundYield.d.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L65)

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
| `nameOrSignatureOrTopic` | ``"EmergencyWithdraw"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/CompoundYield.d.ts:98](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L98)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"LockedTokens"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/CompoundYield.d.ts:99](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L99)

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

[src/wrappers/CompoundYield.d.ts:100](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L100)

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

[src/wrappers/CompoundYield.d.ts:101](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L101)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TokenAddressesUpdated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/CompoundYield.d.ts:102](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L102)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"UnlockedShares"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/CompoundYield.d.ts:103](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L103)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"UnlockedTokens"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/CompoundYield.d.ts:104](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/CompoundYield.d.ts#L104)

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
