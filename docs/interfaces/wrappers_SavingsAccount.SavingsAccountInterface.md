[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/SavingsAccount](../modules/wrappers_SavingsAccount.md) / SavingsAccountInterface

# Interface: SavingsAccountInterface

[wrappers/SavingsAccount](../modules/wrappers_SavingsAccount.md).SavingsAccountInterface

## Hierarchy

- `Interface`

  ↳ **`SavingsAccountInterface`**

## Table of contents

### Properties

- [\_abiCoder](wrappers_SavingsAccount.SavingsAccountInterface.md#_abicoder)
- [\_isInterface](wrappers_SavingsAccount.SavingsAccountInterface.md#_isinterface)
- [deploy](wrappers_SavingsAccount.SavingsAccountInterface.md#deploy)
- [errors](wrappers_SavingsAccount.SavingsAccountInterface.md#errors)
- [events](wrappers_SavingsAccount.SavingsAccountInterface.md#events)
- [fragments](wrappers_SavingsAccount.SavingsAccountInterface.md#fragments)
- [functions](wrappers_SavingsAccount.SavingsAccountInterface.md#functions)
- [structs](wrappers_SavingsAccount.SavingsAccountInterface.md#structs)

### Methods

- [\_decodeParams](wrappers_SavingsAccount.SavingsAccountInterface.md#_decodeparams)
- [\_encodeParams](wrappers_SavingsAccount.SavingsAccountInterface.md#_encodeparams)
- [decodeErrorResult](wrappers_SavingsAccount.SavingsAccountInterface.md#decodeerrorresult)
- [decodeEventLog](wrappers_SavingsAccount.SavingsAccountInterface.md#decodeeventlog)
- [decodeFunctionData](wrappers_SavingsAccount.SavingsAccountInterface.md#decodefunctiondata)
- [decodeFunctionResult](wrappers_SavingsAccount.SavingsAccountInterface.md#decodefunctionresult)
- [encodeDeploy](wrappers_SavingsAccount.SavingsAccountInterface.md#encodedeploy)
- [encodeErrorResult](wrappers_SavingsAccount.SavingsAccountInterface.md#encodeerrorresult)
- [encodeEventLog](wrappers_SavingsAccount.SavingsAccountInterface.md#encodeeventlog)
- [encodeFilterTopics](wrappers_SavingsAccount.SavingsAccountInterface.md#encodefiltertopics)
- [encodeFunctionData](wrappers_SavingsAccount.SavingsAccountInterface.md#encodefunctiondata)
- [encodeFunctionResult](wrappers_SavingsAccount.SavingsAccountInterface.md#encodefunctionresult)
- [format](wrappers_SavingsAccount.SavingsAccountInterface.md#format)
- [getError](wrappers_SavingsAccount.SavingsAccountInterface.md#geterror)
- [getEvent](wrappers_SavingsAccount.SavingsAccountInterface.md#getevent)
- [getEventTopic](wrappers_SavingsAccount.SavingsAccountInterface.md#geteventtopic)
- [getFunction](wrappers_SavingsAccount.SavingsAccountInterface.md#getfunction)
- [getSighash](wrappers_SavingsAccount.SavingsAccountInterface.md#getsighash)
- [parseError](wrappers_SavingsAccount.SavingsAccountInterface.md#parseerror)
- [parseLog](wrappers_SavingsAccount.SavingsAccountInterface.md#parselog)
- [parseTransaction](wrappers_SavingsAccount.SavingsAccountInterface.md#parsetransaction)

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
| `Approved(address,address,address,uint256)` | `EventFragment` |
| `Deposited(address,uint256,address,address)` | `EventFragment` |
| `OwnershipTransferred(address,address)` | `EventFragment` |
| `StrategyRegistryUpdated(address)` | `EventFragment` |
| `StrategySwitched(address,address,uint256,uint256,address,address)` | `EventFragment` |
| `Transfer(address,address,address,address,uint256)` | `EventFragment` |
| `TransferShares(address,address,address,address,uint256)` | `EventFragment` |
| `Withdrawn(address,address,uint256,address,address,bool)` | `EventFragment` |
| `WithdrawnAll(address,uint256,address)` | `EventFragment` |

#### Overrides

ethers.utils.Interface.events

#### Defined in

[src/wrappers/SavingsAccount.d.ts:94](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L94)

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
| `STRATEGY_REGISTRY()` | `FunctionFragment` |
| `allowance(address,address,address)` | `FunctionFragment` |
| `approve(address,address,uint256)` | `FunctionFragment` |
| `balanceInShares(address,address,address)` | `FunctionFragment` |
| `decreaseAllowance(address,address,uint256)` | `FunctionFragment` |
| `deposit(address,address,address,uint256)` | `FunctionFragment` |
| `getTotalTokens(address,address)` | `FunctionFragment` |
| `increaseAllowance(address,address,uint256)` | `FunctionFragment` |
| `initialize(address)` | `FunctionFragment` |
| `owner()` | `FunctionFragment` |
| `renounceOwnership()` | `FunctionFragment` |
| `switchStrategy(address,address,address,uint256)` | `FunctionFragment` |
| `transfer(address,address,address,uint256)` | `FunctionFragment` |
| `transferFrom(address,address,address,address,uint256)` | `FunctionFragment` |
| `transferOwnership(address)` | `FunctionFragment` |
| `transferShares(address,address,address,uint256)` | `FunctionFragment` |
| `transferSharesFrom(address,address,address,address,uint256)` | `FunctionFragment` |
| `withdraw(address,address,address,uint256,bool)` | `FunctionFragment` |
| `withdrawAll(address,address)` | `FunctionFragment` |
| `withdrawFrom(address,address,address,address,uint256,bool)` | `FunctionFragment` |
| `withdrawShares(address,address,address,uint256,bool)` | `FunctionFragment` |
| `withdrawSharesFrom(address,address,address,address,uint256,bool)` | `FunctionFragment` |

#### Overrides

ethers.utils.Interface.functions

#### Defined in

[src/wrappers/SavingsAccount.d.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L23)

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
| `functionFragment` | ``"STRATEGY_REGISTRY"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/SavingsAccount.d.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L71)

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

[src/wrappers/SavingsAccount.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L72)

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

[src/wrappers/SavingsAccount.d.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L73)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"balanceInShares"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/SavingsAccount.d.ts:74](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L74)

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

[src/wrappers/SavingsAccount.d.ts:75](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L75)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"deposit"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/SavingsAccount.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L76)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getTotalTokens"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/SavingsAccount.d.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L77)

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

[src/wrappers/SavingsAccount.d.ts:78](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L78)

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

[src/wrappers/SavingsAccount.d.ts:79](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L79)

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

[src/wrappers/SavingsAccount.d.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L80)

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

[src/wrappers/SavingsAccount.d.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L81)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"switchStrategy"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/SavingsAccount.d.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L82)

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

[src/wrappers/SavingsAccount.d.ts:83](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L83)

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

[src/wrappers/SavingsAccount.d.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L84)

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

[src/wrappers/SavingsAccount.d.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L85)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"transferShares"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/SavingsAccount.d.ts:86](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L86)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"transferSharesFrom"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/SavingsAccount.d.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L87)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdraw"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/SavingsAccount.d.ts:88](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L88)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawAll"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/SavingsAccount.d.ts:89](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L89)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawFrom"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/SavingsAccount.d.ts:90](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L90)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawShares"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/SavingsAccount.d.ts:91](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L91)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawSharesFrom"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/SavingsAccount.d.ts:92](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L92)

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
| `functionFragment` | ``"STRATEGY_REGISTRY"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/SavingsAccount.d.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L48)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"allowance"`` |
| `values` | [`string`, `string`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/SavingsAccount.d.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L49)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"approve"`` |
| `values` | [`string`, `string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/SavingsAccount.d.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L50)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"balanceInShares"`` |
| `values` | [`string`, `string`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/SavingsAccount.d.ts:51](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L51)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"decreaseAllowance"`` |
| `values` | [`string`, `string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/SavingsAccount.d.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L52)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"deposit"`` |
| `values` | [`string`, `string`, `string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/SavingsAccount.d.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L53)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getTotalTokens"`` |
| `values` | [`string`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/SavingsAccount.d.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L54)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"increaseAllowance"`` |
| `values` | [`string`, `string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/SavingsAccount.d.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L55)

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

[src/wrappers/SavingsAccount.d.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L56)

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

[src/wrappers/SavingsAccount.d.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L57)

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

[src/wrappers/SavingsAccount.d.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L58)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"switchStrategy"`` |
| `values` | [`string`, `string`, `string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/SavingsAccount.d.ts:59](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L59)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"transfer"`` |
| `values` | [`string`, `string`, `string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/SavingsAccount.d.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L60)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"transferFrom"`` |
| `values` | [`string`, `string`, `string`, `string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/SavingsAccount.d.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L61)

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

[src/wrappers/SavingsAccount.d.ts:62](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L62)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"transferShares"`` |
| `values` | [`string`, `string`, `string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/SavingsAccount.d.ts:63](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L63)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"transferSharesFrom"`` |
| `values` | [`string`, `string`, `string`, `string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/SavingsAccount.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L64)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdraw"`` |
| `values` | [`string`, `string`, `string`, `BigNumberish`, `boolean`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/SavingsAccount.d.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L65)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawAll"`` |
| `values` | [`string`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/SavingsAccount.d.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L66)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawFrom"`` |
| `values` | [`string`, `string`, `string`, `string`, `BigNumberish`, `boolean`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/SavingsAccount.d.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L67)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawShares"`` |
| `values` | [`string`, `string`, `string`, `BigNumberish`, `boolean`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/SavingsAccount.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L68)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawSharesFrom"`` |
| `values` | [`string`, `string`, `string`, `string`, `BigNumberish`, `boolean`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/SavingsAccount.d.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L69)

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
| `nameOrSignatureOrTopic` | ``"Approved"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/SavingsAccount.d.ts:106](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L106)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"Deposited"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/SavingsAccount.d.ts:107](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L107)

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

[src/wrappers/SavingsAccount.d.ts:108](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L108)

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

[src/wrappers/SavingsAccount.d.ts:109](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L109)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"StrategySwitched"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/SavingsAccount.d.ts:110](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L110)

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

[src/wrappers/SavingsAccount.d.ts:111](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L111)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TransferShares"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/SavingsAccount.d.ts:112](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L112)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"Withdrawn"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/SavingsAccount.d.ts:113](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L113)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"WithdrawnAll"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/SavingsAccount.d.ts:114](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/SavingsAccount.d.ts#L114)

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
