[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/LenderPool](../modules/wrappers_LenderPool.md) / LenderPoolInterface

# Interface: LenderPoolInterface

[wrappers/LenderPool](../modules/wrappers_LenderPool.md).LenderPoolInterface

## Hierarchy

- `Interface`

  ↳ **`LenderPoolInterface`**

## Table of contents

### Properties

- [\_abiCoder](wrappers_LenderPool.LenderPoolInterface.md#_abicoder)
- [\_isInterface](wrappers_LenderPool.LenderPoolInterface.md#_isinterface)
- [deploy](wrappers_LenderPool.LenderPoolInterface.md#deploy)
- [errors](wrappers_LenderPool.LenderPoolInterface.md#errors)
- [events](wrappers_LenderPool.LenderPoolInterface.md#events)
- [fragments](wrappers_LenderPool.LenderPoolInterface.md#fragments)
- [functions](wrappers_LenderPool.LenderPoolInterface.md#functions)
- [structs](wrappers_LenderPool.LenderPoolInterface.md#structs)

### Methods

- [\_decodeParams](wrappers_LenderPool.LenderPoolInterface.md#_decodeparams)
- [\_encodeParams](wrappers_LenderPool.LenderPoolInterface.md#_encodeparams)
- [decodeErrorResult](wrappers_LenderPool.LenderPoolInterface.md#decodeerrorresult)
- [decodeEventLog](wrappers_LenderPool.LenderPoolInterface.md#decodeeventlog)
- [decodeFunctionData](wrappers_LenderPool.LenderPoolInterface.md#decodefunctiondata)
- [decodeFunctionResult](wrappers_LenderPool.LenderPoolInterface.md#decodefunctionresult)
- [encodeDeploy](wrappers_LenderPool.LenderPoolInterface.md#encodedeploy)
- [encodeErrorResult](wrappers_LenderPool.LenderPoolInterface.md#encodeerrorresult)
- [encodeEventLog](wrappers_LenderPool.LenderPoolInterface.md#encodeeventlog)
- [encodeFilterTopics](wrappers_LenderPool.LenderPoolInterface.md#encodefiltertopics)
- [encodeFunctionData](wrappers_LenderPool.LenderPoolInterface.md#encodefunctiondata)
- [encodeFunctionResult](wrappers_LenderPool.LenderPoolInterface.md#encodefunctionresult)
- [format](wrappers_LenderPool.LenderPoolInterface.md#format)
- [getError](wrappers_LenderPool.LenderPoolInterface.md#geterror)
- [getEvent](wrappers_LenderPool.LenderPoolInterface.md#getevent)
- [getEventTopic](wrappers_LenderPool.LenderPoolInterface.md#geteventtopic)
- [getFunction](wrappers_LenderPool.LenderPoolInterface.md#getfunction)
- [getSighash](wrappers_LenderPool.LenderPoolInterface.md#getsighash)
- [parseError](wrappers_LenderPool.LenderPoolInterface.md#parseerror)
- [parseLog](wrappers_LenderPool.LenderPoolInterface.md#parselog)
- [parseTransaction](wrappers_LenderPool.LenderPoolInterface.md#parsetransaction)

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
| `ApprovalForAll(address,address,bool)` | `EventFragment` |
| `InterestWithdrawn(uint256,address,uint256)` | `EventFragment` |
| `Lend(uint256,address,uint256)` | `EventFragment` |
| `Liquidated(uint256,uint256)` | `EventFragment` |
| `LiquidationWithdrawn(uint256,address,uint256)` | `EventFragment` |
| `LiquidityWithdrawn(uint256,address)` | `EventFragment` |
| `TransferBatch(address,address,address,uint256[],uint256[])` | `EventFragment` |
| `TransferSingle(address,address,address,uint256,uint256)` | `EventFragment` |
| `URI(string,uint256)` | `EventFragment` |
| `WithdrawLiquidity(uint256,address,uint256)` | `EventFragment` |
| `WithdrawLiquidityOnCancel(uint256,address,uint256)` | `EventFragment` |

#### Overrides

ethers.utils.Interface.events

#### Defined in

[src/wrappers/LenderPool.d.ts:121](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L121)

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
| `POOLED_CREDIT_LINE()` | `FunctionFragment` |
| `SAVINGS_ACCOUNT()` | `FunctionFragment` |
| `VERIFICATION()` | `FunctionFragment` |
| `balanceOf(address,uint256)` | `FunctionFragment` |
| `balanceOfBatch(address[],uint256[])` | `FunctionFragment` |
| `borrowed(uint256,uint256)` | `FunctionFragment` |
| `calculatePrincipalWithdrawable(uint256,address)` | `FunctionFragment` |
| `create(uint256,address,address,address,uint256,uint256,uint256,bool)` | `FunctionFragment` |
| `getLenderInfo(uint256,address)` | `FunctionFragment` |
| `getLenderInterest(uint256,address)` | `FunctionFragment` |
| `initialize()` | `FunctionFragment` |
| `isApprovedForAll(address,address)` | `FunctionFragment` |
| `lend(uint256,uint256)` | `FunctionFragment` |
| `liquidate(uint256,bool)` | `FunctionFragment` |
| `pooledCLConstants(uint256)` | `FunctionFragment` |
| `pooledCLVariables(uint256)` | `FunctionFragment` |
| `repaid(uint256,uint256,uint256)` | `FunctionFragment` |
| `requestCancelled(uint256)` | `FunctionFragment` |
| `safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)` | `FunctionFragment` |
| `safeTransferFrom(address,address,uint256,uint256,bytes)` | `FunctionFragment` |
| `setApprovalForAll(address,bool)` | `FunctionFragment` |
| `start(uint256)` | `FunctionFragment` |
| `supportsInterface(bytes4)` | `FunctionFragment` |
| `terminate(uint256,address)` | `FunctionFragment` |
| `totalSupply(uint256)` | `FunctionFragment` |
| `uri(uint256)` | `FunctionFragment` |
| `withdrawInterest(uint256)` | `FunctionFragment` |
| `withdrawLiquidatedCollateral(uint256)` | `FunctionFragment` |
| `withdrawLiquidity(uint256)` | `FunctionFragment` |

#### Overrides

ethers.utils.Interface.functions

#### Defined in

[src/wrappers/LenderPool.d.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L23)

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
| `functionFragment` | ``"POOLED_CREDIT_LINE"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/LenderPool.d.ts:91](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L91)

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

[src/wrappers/LenderPool.d.ts:92](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L92)

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

[src/wrappers/LenderPool.d.ts:93](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L93)

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

[src/wrappers/LenderPool.d.ts:94](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L94)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"balanceOfBatch"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/LenderPool.d.ts:95](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L95)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"borrowed"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/LenderPool.d.ts:96](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L96)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"calculatePrincipalWithdrawable"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/LenderPool.d.ts:97](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L97)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"create"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/LenderPool.d.ts:98](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L98)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getLenderInfo"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/LenderPool.d.ts:99](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L99)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getLenderInterest"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/LenderPool.d.ts:100](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L100)

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

[src/wrappers/LenderPool.d.ts:101](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L101)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"isApprovedForAll"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/LenderPool.d.ts:102](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L102)

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

[src/wrappers/LenderPool.d.ts:103](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L103)

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

[src/wrappers/LenderPool.d.ts:104](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L104)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"pooledCLConstants"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/LenderPool.d.ts:105](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L105)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"pooledCLVariables"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/LenderPool.d.ts:106](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L106)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"repaid"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/LenderPool.d.ts:107](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L107)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"requestCancelled"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/LenderPool.d.ts:108](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L108)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"safeBatchTransferFrom"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/LenderPool.d.ts:109](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L109)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"safeTransferFrom"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/LenderPool.d.ts:110](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L110)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setApprovalForAll"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/LenderPool.d.ts:111](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L111)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"start"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/LenderPool.d.ts:112](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L112)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"supportsInterface"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/LenderPool.d.ts:113](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L113)

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

[src/wrappers/LenderPool.d.ts:114](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L114)

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

[src/wrappers/LenderPool.d.ts:115](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L115)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"uri"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/LenderPool.d.ts:116](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L116)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawInterest"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/LenderPool.d.ts:117](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L117)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawLiquidatedCollateral"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/LenderPool.d.ts:118](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L118)

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

[src/wrappers/LenderPool.d.ts:119](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L119)

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
| `functionFragment` | ``"POOLED_CREDIT_LINE"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/LenderPool.d.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L55)

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

[src/wrappers/LenderPool.d.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L56)

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

[src/wrappers/LenderPool.d.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L57)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"balanceOf"`` |
| `values` | [`string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/LenderPool.d.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L58)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"balanceOfBatch"`` |
| `values` | [`string`[], `BigNumberish`[]] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/LenderPool.d.ts:59](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L59)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"borrowed"`` |
| `values` | [`BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/LenderPool.d.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L60)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"calculatePrincipalWithdrawable"`` |
| `values` | [`BigNumberish`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/LenderPool.d.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L61)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"create"`` |
| `values` | [`BigNumberish`, `string`, `string`, `string`, `BigNumberish`, `BigNumberish`, `BigNumberish`, `boolean`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/LenderPool.d.ts:62](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L62)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getLenderInfo"`` |
| `values` | [`BigNumberish`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/LenderPool.d.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L66)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getLenderInterest"`` |
| `values` | [`BigNumberish`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/LenderPool.d.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L67)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"initialize"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/LenderPool.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L68)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"isApprovedForAll"`` |
| `values` | [`string`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/LenderPool.d.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L69)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"lend"`` |
| `values` | [`BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/LenderPool.d.ts:70](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L70)

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

[src/wrappers/LenderPool.d.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L71)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"pooledCLConstants"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/LenderPool.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L72)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"pooledCLVariables"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/LenderPool.d.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L73)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"repaid"`` |
| `values` | [`BigNumberish`, `BigNumberish`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/LenderPool.d.ts:74](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L74)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"requestCancelled"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/LenderPool.d.ts:75](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L75)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"safeBatchTransferFrom"`` |
| `values` | [`string`, `string`, `BigNumberish`[], `BigNumberish`[], `BytesLike`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/LenderPool.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L76)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"safeTransferFrom"`` |
| `values` | [`string`, `string`, `BigNumberish`, `BigNumberish`, `BytesLike`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/LenderPool.d.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L80)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setApprovalForAll"`` |
| `values` | [`string`, `boolean`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/LenderPool.d.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L81)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"start"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/LenderPool.d.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L82)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"supportsInterface"`` |
| `values` | [`BytesLike`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/LenderPool.d.ts:83](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L83)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"terminate"`` |
| `values` | [`BigNumberish`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/LenderPool.d.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L84)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"totalSupply"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/LenderPool.d.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L85)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"uri"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/LenderPool.d.ts:86](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L86)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawInterest"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/LenderPool.d.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L87)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawLiquidatedCollateral"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/LenderPool.d.ts:88](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L88)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawLiquidity"`` |
| `values` | [`BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/LenderPool.d.ts:89](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L89)

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
| `nameOrSignatureOrTopic` | ``"ApprovalForAll"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/LenderPool.d.ts:135](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L135)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"InterestWithdrawn"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/LenderPool.d.ts:136](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L136)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"Lend"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/LenderPool.d.ts:137](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L137)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"Liquidated"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/LenderPool.d.ts:138](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L138)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"LiquidationWithdrawn"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/LenderPool.d.ts:139](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L139)

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

[src/wrappers/LenderPool.d.ts:140](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L140)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TransferBatch"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/LenderPool.d.ts:141](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L141)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TransferSingle"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/LenderPool.d.ts:142](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L142)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"URI"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/LenderPool.d.ts:143](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L143)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"WithdrawLiquidity"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/LenderPool.d.ts:144](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L144)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"WithdrawLiquidityOnCancel"`` |

#### Returns

`EventFragment`

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

[src/wrappers/LenderPool.d.ts:145](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/LenderPool.d.ts#L145)

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
