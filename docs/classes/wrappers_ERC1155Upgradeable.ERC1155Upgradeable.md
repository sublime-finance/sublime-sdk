[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/ERC1155Upgradeable](../modules/wrappers_ERC1155Upgradeable.md) / ERC1155Upgradeable

# Class: ERC1155Upgradeable

[wrappers/ERC1155Upgradeable](../modules/wrappers_ERC1155Upgradeable.md).ERC1155Upgradeable

## Hierarchy

- `Contract`

  ↳ **`ERC1155Upgradeable`**

## Table of contents

### Constructors

- [constructor](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#constructor)

### Properties

- [\_deployedPromise](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#_deployedpromise)
- [\_runningEvents](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#_runningevents)
- [\_wrappedEmits](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#_wrappedemits)
- [address](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#address)
- [callStatic](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#callstatic)
- [deployTransaction](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#deploytransaction)
- [estimateGas](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#estimategas)
- [filters](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#filters)
- [functions](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#functions)
- [interface](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#interface)
- [populateTransaction](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#populatetransaction)
- [provider](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#provider)
- [resolvedAddress](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#resolvedaddress)
- [signer](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#_checkrunningevents)
- [\_deployed](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#_deployed)
- [\_wrapEvent](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#_wrapevent)
- [attach](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#attach)
- [balanceOf](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#balanceof)
- [balanceOf(address,uint256)](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#balanceof(address,uint256))
- [balanceOfBatch](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#balanceofbatch)
- [balanceOfBatch(address[],uint256[])](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#balanceofbatch(address[],uint256[]))
- [connect](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#connect)
- [deployed](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#deployed)
- [emit](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#emit)
- [fallback](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#fallback)
- [isApprovedForAll](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#isapprovedforall)
- [isApprovedForAll(address,address)](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#isapprovedforall(address,address))
- [listenerCount](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#listenercount)
- [listeners](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#listeners)
- [off](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#off)
- [on](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#on)
- [once](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#once)
- [queryFilter](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#queryfilter)
- [removeAllListeners](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#removealllisteners)
- [removeListener](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#removelistener)
- [safeBatchTransferFrom](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#safebatchtransferfrom)
- [safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#safebatchtransferfrom(address,address,uint256[],uint256[],bytes))
- [safeTransferFrom](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#safetransferfrom)
- [safeTransferFrom(address,address,uint256,uint256,bytes)](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#safetransferfrom(address,address,uint256,uint256,bytes))
- [setApprovalForAll](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#setapprovalforall)
- [setApprovalForAll(address,bool)](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#setapprovalforall(address,bool))
- [supportsInterface](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#supportsinterface)
- [supportsInterface(bytes4)](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#supportsinterface(bytes4))
- [uri](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#uri)
- [uri(uint256)](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#uri(uint256))
- [getContractAddress](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#getcontractaddress)
- [getInterface](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#getinterface)
- [isIndexed](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md#isindexed)

## Constructors

### constructor

• **new ERC1155Upgradeable**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |
| `contractInterface` | `ContractInterface` |
| `signerOrProvider?` | `Signer` \| `Provider` |

#### Inherited from

Contract.constructor

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:105

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

Contract.\_deployedPromise

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:98

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

Contract.\_runningEvents

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:99

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

Contract.\_wrappedEmits

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:102

___

### address

• `Readonly` **address**: `string`

#### Inherited from

Contract.address

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:77

___

### callStatic

• **callStatic**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `balanceOf` | (`account`: `string`, `id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `balanceOf(address,uint256)` | (`account`: `string`, `id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `balanceOfBatch` | (`accounts`: `string`[], `ids`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`[]\> |
| `balanceOfBatch(address[],uint256[])` | (`accounts`: `string`[], `ids`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`[]\> |
| `isApprovedForAll` | (`account`: `string`, `operator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `isApprovedForAll(address,address)` | (`account`: `string`, `operator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `safeBatchTransferFrom` | (`from`: `string`, `to`: `string`, `ids`: `BigNumberish`[], `amounts`: `BigNumberish`[], `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)` | (`from`: `string`, `to`: `string`, `ids`: `BigNumberish`[], `amounts`: `BigNumberish`[], `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `safeTransferFrom` | (`from`: `string`, `to`: `string`, `id`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `safeTransferFrom(address,address,uint256,uint256,bytes)` | (`from`: `string`, `to`: `string`, `id`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setApprovalForAll` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setApprovalForAll(address,bool)` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `supportsInterface(bytes4)` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `uri` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `uri(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:249](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L249)

___

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

Contract.deployTransaction

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:97

___

### estimateGas

• **estimateGas**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `balanceOf` | (`account`: `string`, `id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `balanceOf(address,uint256)` | (`account`: `string`, `id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `balanceOfBatch` | (`accounts`: `string`[], `ids`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `balanceOfBatch(address[],uint256[])` | (`accounts`: `string`[], `ids`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isApprovedForAll` | (`account`: `string`, `operator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isApprovedForAll(address,address)` | (`account`: `string`, `operator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `safeBatchTransferFrom` | (`from`: `string`, `to`: `string`, `ids`: `BigNumberish`[], `amounts`: `BigNumberish`[], `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)` | (`from`: `string`, `to`: `string`, `ids`: `BigNumberish`[], `amounts`: `BigNumberish`[], `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `safeTransferFrom` | (`from`: `string`, `to`: `string`, `id`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `safeTransferFrom(address,address,uint256,uint256,bytes)` | (`from`: `string`, `to`: `string`, `id`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setApprovalForAll` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setApprovalForAll(address,bool)` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `supportsInterface(bytes4)` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `uri` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `uri(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:355](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L355)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ApprovalForAll` | (`account`: `string`, `operator`: `string`, `approved`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `boolean`], { `account`: `string` ; `approved`: `boolean` ; `operator`: `string`  }\> |
| `TransferBatch` | (`operator`: `string`, `from`: `string`, `to`: `string`, `ids`: ``null``, `values`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `string`, `BigNumber`[], `BigNumber`[]], { `from`: `string` ; `ids`: `BigNumber`[] ; `operator`: `string` ; `to`: `string` ; `values`: `BigNumber`[]  }\> |
| `TransferSingle` | (`operator`: `string`, `from`: `string`, `to`: `string`, `id`: ``null``, `value`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `string`, `BigNumber`, `BigNumber`], { `from`: `string` ; `id`: `BigNumber` ; `operator`: `string` ; `to`: `string` ; `value`: `BigNumber`  }\> |
| `URI` | (`value`: ``null``, `id`: `BigNumberish`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `BigNumber`], { `id`: `BigNumber` ; `value`: `string`  }\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:311](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L311)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `balanceOf` | (`account`: `string`, `id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `balanceOf(address,uint256)` | (`account`: `string`, `id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `balanceOfBatch` | (`accounts`: `string`[], `ids`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`[]]\> |
| `balanceOfBatch(address[],uint256[])` | (`accounts`: `string`[], `ids`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`[]]\> |
| `isApprovedForAll` | (`account`: `string`, `operator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `isApprovedForAll(address,address)` | (`account`: `string`, `operator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `safeBatchTransferFrom` | (`from`: `string`, `to`: `string`, `ids`: `BigNumberish`[], `amounts`: `BigNumberish`[], `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)` | (`from`: `string`, `to`: `string`, `ids`: `BigNumberish`[], `amounts`: `BigNumberish`[], `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `safeTransferFrom` | (`from`: `string`, `to`: `string`, `id`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `safeTransferFrom(address,address,uint256,uint256,bytes)` | (`from`: `string`, `to`: `string`, `id`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setApprovalForAll` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setApprovalForAll(address,bool)` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `supportsInterface(bytes4)` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `uri` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `uri(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:111](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L111)

___

### interface

• **interface**: [`ERC1155UpgradeableInterface`](../interfaces/wrappers_ERC1155Upgradeable.ERC1155UpgradeableInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:109](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L109)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `balanceOf` | (`account`: `string`, `id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `balanceOf(address,uint256)` | (`account`: `string`, `id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `balanceOfBatch` | (`accounts`: `string`[], `ids`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `balanceOfBatch(address[],uint256[])` | (`accounts`: `string`[], `ids`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isApprovedForAll` | (`account`: `string`, `operator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isApprovedForAll(address,address)` | (`account`: `string`, `operator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `safeBatchTransferFrom` | (`from`: `string`, `to`: `string`, `ids`: `BigNumberish`[], `amounts`: `BigNumberish`[], `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)` | (`from`: `string`, `to`: `string`, `ids`: `BigNumberish`[], `amounts`: `BigNumberish`[], `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `safeTransferFrom` | (`from`: `string`, `to`: `string`, `id`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `safeTransferFrom(address,address,uint256,uint256,bytes)` | (`from`: `string`, `to`: `string`, `id`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setApprovalForAll` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setApprovalForAll(address,bool)` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `supportsInterface(bytes4)` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `uri` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `uri(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:421](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L421)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

Contract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:80

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

Contract.resolvedAddress

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:96

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

Contract.signer

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:79

## Methods

### \_checkRunningEvents

▸ **_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |

#### Returns

`void`

#### Inherited from

Contract.\_checkRunningEvents

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:119

___

### \_deployed

▸ **_deployed**(`blockTag?`): `Promise`<`Contract`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | `BlockTag` |

#### Returns

`Promise`<`Contract`\>

#### Inherited from

Contract.\_deployed

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:112

___

### \_wrapEvent

▸ **_wrapEvent**(`runningEvent`, `log`, `listener`): `Event`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |
| `log` | `Log` |
| `listener` | `Listener` |

#### Returns

`Event`

#### Inherited from

Contract.\_wrapEvent

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:120

___

### attach

▸ **attach**(`addressOrName`): [`ERC1155Upgradeable`](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`ERC1155Upgradeable`](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:70](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L70)

___

### balanceOf

▸ **balanceOf**(`account`, `id`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `id` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:181](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L181)

___

### balanceOf(address,uint256)

▸ **balanceOf(address,uint256)**(`account`, `id`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `id` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:183](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L183)

___

### balanceOfBatch

▸ **balanceOfBatch**(`accounts`, `ids`, `overrides?`): `Promise`<`BigNumber`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accounts` | `string`[] |
| `ids` | `BigNumberish`[] |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`[]\>

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:185](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L185)

___

### balanceOfBatch(address[],uint256[])

▸ **balanceOfBatch(address[],uint256[])**(`accounts`, `ids`, `overrides?`): `Promise`<`BigNumber`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accounts` | `string`[] |
| `ids` | `BigNumberish`[] |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`[]\>

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:187](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L187)

___

### connect

▸ **connect**(`signerOrProvider`): [`ERC1155Upgradeable`](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`ERC1155Upgradeable`](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L69)

___

### deployed

▸ **deployed**(): `Promise`<[`ERC1155Upgradeable`](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md)\>

#### Returns

`Promise`<[`ERC1155Upgradeable`](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L71)

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `EventFilter` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

Contract.emit

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:125

___

### fallback

▸ **fallback**(`overrides?`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `TransactionRequest` |

#### Returns

`Promise`<`TransactionResponse`\>

#### Inherited from

Contract.fallback

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:113

___

### isApprovedForAll

▸ **isApprovedForAll**(`account`, `operator`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `operator` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:189](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L189)

___

### isApprovedForAll(address,address)

▸ **isApprovedForAll(address,address)**(`account`, `operator`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `operator` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:191](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L191)

___

### listenerCount

▸ **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| `EventFilter` |

#### Returns

`number`

#### Inherited from

Contract.listenerCount

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:126

___

### listeners

▸ **listeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter?`): [`TypedListener`](../modules/wrappers_commons.md#typedlistener)<`EventArgsArray`, `EventArgsObject`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter?` | [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`TypedListener`](../modules/wrappers_commons.md#typedlistener)<`EventArgsArray`, `EventArgsObject`\>[]

#### Overrides

Contract.listeners

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L73)

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Overrides

Contract.listeners

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:96](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L96)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ERC1155Upgradeable`](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |
| `listener` | [`TypedListener`](../modules/wrappers_commons.md#typedlistener)<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`ERC1155Upgradeable`](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L76)

▸ **off**(`eventName`, `listener`): [`ERC1155Upgradeable`](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ERC1155Upgradeable`](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:97](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L97)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ERC1155Upgradeable`](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |
| `listener` | [`TypedListener`](../modules/wrappers_commons.md#typedlistener)<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`ERC1155Upgradeable`](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L80)

▸ **on**(`eventName`, `listener`): [`ERC1155Upgradeable`](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ERC1155Upgradeable`](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:98](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L98)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ERC1155Upgradeable`](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |
| `listener` | [`TypedListener`](../modules/wrappers_commons.md#typedlistener)<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`ERC1155Upgradeable`](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L84)

▸ **once**(`eventName`, `listener`): [`ERC1155Upgradeable`](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ERC1155Upgradeable`](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:99](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L99)

___

### queryFilter

▸ **queryFilter**<`EventArgsArray`, `EventArgsObject`\>(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<[`TypedEvent`](../interfaces/wrappers_commons.TypedEvent.md)<`EventArgsArray` & `EventArgsObject`\>[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |
| `fromBlockOrBlockhash?` | `string` \| `number` |
| `toBlock?` | `string` \| `number` |

#### Returns

`Promise`<[`TypedEvent`](../interfaces/wrappers_commons.TypedEvent.md)<`EventArgsArray` & `EventArgsObject`\>[]\>

#### Overrides

Contract.queryFilter

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:103](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L103)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`ERC1155Upgradeable`](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`ERC1155Upgradeable`](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:92](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L92)

▸ **removeAllListeners**(`eventName?`): [`ERC1155Upgradeable`](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`ERC1155Upgradeable`](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:101](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L101)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ERC1155Upgradeable`](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |
| `listener` | [`TypedListener`](../modules/wrappers_commons.md#typedlistener)<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`ERC1155Upgradeable`](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:88](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L88)

▸ **removeListener**(`eventName`, `listener`): [`ERC1155Upgradeable`](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ERC1155Upgradeable`](wrappers_ERC1155Upgradeable.ERC1155Upgradeable.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:100](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L100)

___

### safeBatchTransferFrom

▸ **safeBatchTransferFrom**(`from`, `to`, `ids`, `amounts`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `ids` | `BigNumberish`[] |
| `amounts` | `BigNumberish`[] |
| `data` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:193](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L193)

___

### safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)

▸ **safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)**(`from`, `to`, `ids`, `amounts`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `ids` | `BigNumberish`[] |
| `amounts` | `BigNumberish`[] |
| `data` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:202](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L202)

___

### safeTransferFrom

▸ **safeTransferFrom**(`from`, `to`, `id`, `amount`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `id` | `BigNumberish` |
| `amount` | `BigNumberish` |
| `data` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:211](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L211)

___

### safeTransferFrom(address,address,uint256,uint256,bytes)

▸ **safeTransferFrom(address,address,uint256,uint256,bytes)**(`from`, `to`, `id`, `amount`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `id` | `BigNumberish` |
| `amount` | `BigNumberish` |
| `data` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:220](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L220)

___

### setApprovalForAll

▸ **setApprovalForAll**(`operator`, `approved`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | `string` |
| `approved` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:229](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L229)

___

### setApprovalForAll(address,bool)

▸ **setApprovalForAll(address,bool)**(`operator`, `approved`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | `string` |
| `approved` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:235](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L235)

___

### supportsInterface

▸ **supportsInterface**(`interfaceId`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `interfaceId` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:241](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L241)

___

### supportsInterface(bytes4)

▸ **supportsInterface(bytes4)**(`interfaceId`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `interfaceId` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:243](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L243)

___

### uri

▸ **uri**(`arg0`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:245](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L245)

___

### uri(uint256)

▸ **uri(uint256)**(`arg0`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/ERC1155Upgradeable.d.ts:247](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/ERC1155Upgradeable.d.ts#L247)

___

### getContractAddress

▸ `Static` **getContractAddress**(`transaction`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `Object` |
| `transaction.from` | `string` |
| `transaction.nonce` | `BigNumberish` |

#### Returns

`string`

#### Inherited from

Contract.getContractAddress

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:106

___

### getInterface

▸ `Static` **getInterface**(`contractInterface`): `Interface`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractInterface` | `ContractInterface` |

#### Returns

`Interface`

#### Inherited from

Contract.getInterface

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:110

___

### isIndexed

▸ `Static` **isIndexed**(`value`): value is Indexed

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Indexed

#### Inherited from

Contract.isIndexed

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:116
