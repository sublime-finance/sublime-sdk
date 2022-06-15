[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/IERC1155Upgradeable](../modules/wrappers_IERC1155Upgradeable.md) / IERC1155UpgradeableInterface

# Interface: IERC1155UpgradeableInterface

[wrappers/IERC1155Upgradeable](../modules/wrappers_IERC1155Upgradeable.md).IERC1155UpgradeableInterface

## Hierarchy

- `Interface`

  ↳ **`IERC1155UpgradeableInterface`**

## Table of contents

### Properties

- [\_abiCoder](wrappers_IERC1155Upgradeable.IERC1155UpgradeableInterface.md#_abicoder)
- [\_isInterface](wrappers_IERC1155Upgradeable.IERC1155UpgradeableInterface.md#_isinterface)
- [deploy](wrappers_IERC1155Upgradeable.IERC1155UpgradeableInterface.md#deploy)
- [errors](wrappers_IERC1155Upgradeable.IERC1155UpgradeableInterface.md#errors)
- [events](wrappers_IERC1155Upgradeable.IERC1155UpgradeableInterface.md#events)
- [fragments](wrappers_IERC1155Upgradeable.IERC1155UpgradeableInterface.md#fragments)
- [functions](wrappers_IERC1155Upgradeable.IERC1155UpgradeableInterface.md#functions)
- [structs](wrappers_IERC1155Upgradeable.IERC1155UpgradeableInterface.md#structs)

### Methods

- [\_decodeParams](wrappers_IERC1155Upgradeable.IERC1155UpgradeableInterface.md#_decodeparams)
- [\_encodeParams](wrappers_IERC1155Upgradeable.IERC1155UpgradeableInterface.md#_encodeparams)
- [decodeErrorResult](wrappers_IERC1155Upgradeable.IERC1155UpgradeableInterface.md#decodeerrorresult)
- [decodeEventLog](wrappers_IERC1155Upgradeable.IERC1155UpgradeableInterface.md#decodeeventlog)
- [decodeFunctionData](wrappers_IERC1155Upgradeable.IERC1155UpgradeableInterface.md#decodefunctiondata)
- [decodeFunctionResult](wrappers_IERC1155Upgradeable.IERC1155UpgradeableInterface.md#decodefunctionresult)
- [encodeDeploy](wrappers_IERC1155Upgradeable.IERC1155UpgradeableInterface.md#encodedeploy)
- [encodeErrorResult](wrappers_IERC1155Upgradeable.IERC1155UpgradeableInterface.md#encodeerrorresult)
- [encodeEventLog](wrappers_IERC1155Upgradeable.IERC1155UpgradeableInterface.md#encodeeventlog)
- [encodeFilterTopics](wrappers_IERC1155Upgradeable.IERC1155UpgradeableInterface.md#encodefiltertopics)
- [encodeFunctionData](wrappers_IERC1155Upgradeable.IERC1155UpgradeableInterface.md#encodefunctiondata)
- [encodeFunctionResult](wrappers_IERC1155Upgradeable.IERC1155UpgradeableInterface.md#encodefunctionresult)
- [format](wrappers_IERC1155Upgradeable.IERC1155UpgradeableInterface.md#format)
- [getError](wrappers_IERC1155Upgradeable.IERC1155UpgradeableInterface.md#geterror)
- [getEvent](wrappers_IERC1155Upgradeable.IERC1155UpgradeableInterface.md#getevent)
- [getEventTopic](wrappers_IERC1155Upgradeable.IERC1155UpgradeableInterface.md#geteventtopic)
- [getFunction](wrappers_IERC1155Upgradeable.IERC1155UpgradeableInterface.md#getfunction)
- [getSighash](wrappers_IERC1155Upgradeable.IERC1155UpgradeableInterface.md#getsighash)
- [parseError](wrappers_IERC1155Upgradeable.IERC1155UpgradeableInterface.md#parseerror)
- [parseLog](wrappers_IERC1155Upgradeable.IERC1155UpgradeableInterface.md#parselog)
- [parseTransaction](wrappers_IERC1155Upgradeable.IERC1155UpgradeableInterface.md#parsetransaction)

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
| `TransferBatch(address,address,address,uint256[],uint256[])` | `EventFragment` |
| `TransferSingle(address,address,address,uint256,uint256)` | `EventFragment` |
| `URI(string,uint256)` | `EventFragment` |

#### Overrides

ethers.utils.Interface.events

#### Defined in

[src/wrappers/IERC1155Upgradeable.d.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IERC1155Upgradeable.d.ts#L52)

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
| `balanceOf(address,uint256)` | `FunctionFragment` |
| `balanceOfBatch(address[],uint256[])` | `FunctionFragment` |
| `isApprovedForAll(address,address)` | `FunctionFragment` |
| `safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)` | `FunctionFragment` |
| `safeTransferFrom(address,address,uint256,uint256,bytes)` | `FunctionFragment` |
| `setApprovalForAll(address,bool)` | `FunctionFragment` |
| `supportsInterface(bytes4)` | `FunctionFragment` |

#### Overrides

ethers.utils.Interface.functions

#### Defined in

[src/wrappers/IERC1155Upgradeable.d.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IERC1155Upgradeable.d.ts#L23)

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
| `functionFragment` | ``"balanceOf"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

[src/wrappers/IERC1155Upgradeable.d.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IERC1155Upgradeable.d.ts#L44)

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

[src/wrappers/IERC1155Upgradeable.d.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IERC1155Upgradeable.d.ts#L45)

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

[src/wrappers/IERC1155Upgradeable.d.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IERC1155Upgradeable.d.ts#L46)

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

[src/wrappers/IERC1155Upgradeable.d.ts:47](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IERC1155Upgradeable.d.ts#L47)

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

[src/wrappers/IERC1155Upgradeable.d.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IERC1155Upgradeable.d.ts#L48)

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

[src/wrappers/IERC1155Upgradeable.d.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IERC1155Upgradeable.d.ts#L49)

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

[src/wrappers/IERC1155Upgradeable.d.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IERC1155Upgradeable.d.ts#L50)

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
| `functionFragment` | ``"balanceOf"`` |
| `values` | [`string`, `BigNumberish`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

[src/wrappers/IERC1155Upgradeable.d.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IERC1155Upgradeable.d.ts#L33)

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

[src/wrappers/IERC1155Upgradeable.d.ts:34](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IERC1155Upgradeable.d.ts#L34)

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

[src/wrappers/IERC1155Upgradeable.d.ts:35](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IERC1155Upgradeable.d.ts#L35)

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

[src/wrappers/IERC1155Upgradeable.d.ts:36](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IERC1155Upgradeable.d.ts#L36)

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

[src/wrappers/IERC1155Upgradeable.d.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IERC1155Upgradeable.d.ts#L40)

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

[src/wrappers/IERC1155Upgradeable.d.ts:41](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IERC1155Upgradeable.d.ts#L41)

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

[src/wrappers/IERC1155Upgradeable.d.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IERC1155Upgradeable.d.ts#L42)

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

[src/wrappers/IERC1155Upgradeable.d.ts:59](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IERC1155Upgradeable.d.ts#L59)

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

[src/wrappers/IERC1155Upgradeable.d.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IERC1155Upgradeable.d.ts#L60)

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

[src/wrappers/IERC1155Upgradeable.d.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IERC1155Upgradeable.d.ts#L61)

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

[src/wrappers/IERC1155Upgradeable.d.ts:62](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/IERC1155Upgradeable.d.ts#L62)

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
