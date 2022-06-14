[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/IERC1155ReceiverUpgradeable](../modules/wrappers_IERC1155ReceiverUpgradeable.md) / IERC1155ReceiverUpgradeable

# Class: IERC1155ReceiverUpgradeable

[wrappers/IERC1155ReceiverUpgradeable](../modules/wrappers_IERC1155ReceiverUpgradeable.md).IERC1155ReceiverUpgradeable

## Hierarchy

- `Contract`

  ↳ **`IERC1155ReceiverUpgradeable`**

## Table of contents

### Constructors

- [constructor](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#constructor)

### Properties

- [\_deployedPromise](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#_deployedpromise)
- [\_runningEvents](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#_runningevents)
- [\_wrappedEmits](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#_wrappedemits)
- [address](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#address)
- [callStatic](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#callstatic)
- [deployTransaction](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#deploytransaction)
- [estimateGas](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#estimategas)
- [filters](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#filters)
- [functions](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#functions)
- [interface](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#interface)
- [populateTransaction](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#populatetransaction)
- [provider](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#provider)
- [resolvedAddress](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#resolvedaddress)
- [signer](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#_checkrunningevents)
- [\_deployed](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#_deployed)
- [\_wrapEvent](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#_wrapevent)
- [attach](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#attach)
- [connect](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#connect)
- [deployed](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#deployed)
- [emit](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#emit)
- [fallback](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#fallback)
- [listenerCount](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#listenercount)
- [listeners](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#listeners)
- [off](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#off)
- [on](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#on)
- [onERC1155BatchReceived](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#onerc1155batchreceived)
- [onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#onerc1155batchreceived(address,address,uint256[],uint256[],bytes))
- [onERC1155Received](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#onerc1155received)
- [onERC1155Received(address,address,uint256,uint256,bytes)](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#onerc1155received(address,address,uint256,uint256,bytes))
- [once](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#once)
- [queryFilter](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#queryfilter)
- [removeAllListeners](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#removealllisteners)
- [removeListener](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#removelistener)
- [supportsInterface](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#supportsinterface)
- [supportsInterface(bytes4)](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#supportsinterface(bytes4))
- [getContractAddress](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#getcontractaddress)
- [getInterface](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#getinterface)
- [isIndexed](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md#isindexed)

## Constructors

### constructor

• **new IERC1155ReceiverUpgradeable**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `onERC1155BatchReceived` | (`operator`: `string`, `from`: `string`, `ids`: `BigNumberish`[], `values`: `BigNumberish`[], `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)` | (`operator`: `string`, `from`: `string`, `ids`: `BigNumberish`[], `values`: `BigNumberish`[], `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `onERC1155Received` | (`operator`: `string`, `from`: `string`, `id`: `BigNumberish`, `value`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `onERC1155Received(address,address,uint256,uint256,bytes)` | (`operator`: `string`, `from`: `string`, `id`: `BigNumberish`, `value`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `supportsInterface(bytes4)` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/IERC1155ReceiverUpgradeable.d.ts:168](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IERC1155ReceiverUpgradeable.d.ts#L168)

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
| `onERC1155BatchReceived` | (`operator`: `string`, `from`: `string`, `ids`: `BigNumberish`[], `values`: `BigNumberish`[], `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)` | (`operator`: `string`, `from`: `string`, `ids`: `BigNumberish`[], `values`: `BigNumberish`[], `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `onERC1155Received` | (`operator`: `string`, `from`: `string`, `id`: `BigNumberish`, `value`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `onERC1155Received(address,address,uint256,uint256,bytes)` | (`operator`: `string`, `from`: `string`, `id`: `BigNumberish`, `value`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `supportsInterface(bytes4)` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/IERC1155ReceiverUpgradeable.d.ts:212](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IERC1155ReceiverUpgradeable.d.ts#L212)

___

### filters

• **filters**: `Object`

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/IERC1155ReceiverUpgradeable.d.ts:210](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IERC1155ReceiverUpgradeable.d.ts#L210)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `onERC1155BatchReceived` | (`operator`: `string`, `from`: `string`, `ids`: `BigNumberish`[], `values`: `BigNumberish`[], `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)` | (`operator`: `string`, `from`: `string`, `ids`: `BigNumberish`[], `values`: `BigNumberish`[], `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `onERC1155Received` | (`operator`: `string`, `from`: `string`, `id`: `BigNumberish`, `value`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `onERC1155Received(address,address,uint256,uint256,bytes)` | (`operator`: `string`, `from`: `string`, `id`: `BigNumberish`, `value`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `supportsInterface(bytes4)` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/IERC1155ReceiverUpgradeable.d.ts:86](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IERC1155ReceiverUpgradeable.d.ts#L86)

___

### interface

• **interface**: [`IERC1155ReceiverUpgradeableInterface`](../interfaces/wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeableInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/IERC1155ReceiverUpgradeable.d.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IERC1155ReceiverUpgradeable.d.ts#L84)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `onERC1155BatchReceived` | (`operator`: `string`, `from`: `string`, `ids`: `BigNumberish`[], `values`: `BigNumberish`[], `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)` | (`operator`: `string`, `from`: `string`, `ids`: `BigNumberish`[], `values`: `BigNumberish`[], `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `onERC1155Received` | (`operator`: `string`, `from`: `string`, `id`: `BigNumberish`, `value`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `onERC1155Received(address,address,uint256,uint256,bytes)` | (`operator`: `string`, `from`: `string`, `id`: `BigNumberish`, `value`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `supportsInterface(bytes4)` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/IERC1155ReceiverUpgradeable.d.ts:254](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IERC1155ReceiverUpgradeable.d.ts#L254)

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

▸ **attach**(`addressOrName`): [`IERC1155ReceiverUpgradeable`](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IERC1155ReceiverUpgradeable`](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/IERC1155ReceiverUpgradeable.d.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IERC1155ReceiverUpgradeable.d.ts#L45)

___

### connect

▸ **connect**(`signerOrProvider`): [`IERC1155ReceiverUpgradeable`](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IERC1155ReceiverUpgradeable`](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/IERC1155ReceiverUpgradeable.d.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IERC1155ReceiverUpgradeable.d.ts#L44)

___

### deployed

▸ **deployed**(): `Promise`<[`IERC1155ReceiverUpgradeable`](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md)\>

#### Returns

`Promise`<[`IERC1155ReceiverUpgradeable`](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/IERC1155ReceiverUpgradeable.d.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IERC1155ReceiverUpgradeable.d.ts#L46)

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

[src/wrappers/IERC1155ReceiverUpgradeable.d.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IERC1155ReceiverUpgradeable.d.ts#L48)

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

[src/wrappers/IERC1155ReceiverUpgradeable.d.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IERC1155ReceiverUpgradeable.d.ts#L71)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC1155ReceiverUpgradeable`](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md)

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

[`IERC1155ReceiverUpgradeable`](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IERC1155ReceiverUpgradeable.d.ts:51](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IERC1155ReceiverUpgradeable.d.ts#L51)

▸ **off**(`eventName`, `listener`): [`IERC1155ReceiverUpgradeable`](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IERC1155ReceiverUpgradeable`](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IERC1155ReceiverUpgradeable.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IERC1155ReceiverUpgradeable.d.ts#L72)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC1155ReceiverUpgradeable`](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md)

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

[`IERC1155ReceiverUpgradeable`](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IERC1155ReceiverUpgradeable.d.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IERC1155ReceiverUpgradeable.d.ts#L55)

▸ **on**(`eventName`, `listener`): [`IERC1155ReceiverUpgradeable`](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IERC1155ReceiverUpgradeable`](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IERC1155ReceiverUpgradeable.d.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IERC1155ReceiverUpgradeable.d.ts#L73)

___

### onERC1155BatchReceived

▸ **onERC1155BatchReceived**(`operator`, `from`, `ids`, `values`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | `string` |
| `from` | `string` |
| `ids` | `BigNumberish`[] |
| `values` | `BigNumberish`[] |
| `data` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IERC1155ReceiverUpgradeable.d.ts:128](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IERC1155ReceiverUpgradeable.d.ts#L128)

___

### onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)

▸ **onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)**(`operator`, `from`, `ids`, `values`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | `string` |
| `from` | `string` |
| `ids` | `BigNumberish`[] |
| `values` | `BigNumberish`[] |
| `data` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IERC1155ReceiverUpgradeable.d.ts:137](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IERC1155ReceiverUpgradeable.d.ts#L137)

___

### onERC1155Received

▸ **onERC1155Received**(`operator`, `from`, `id`, `value`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | `string` |
| `from` | `string` |
| `id` | `BigNumberish` |
| `value` | `BigNumberish` |
| `data` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IERC1155ReceiverUpgradeable.d.ts:146](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IERC1155ReceiverUpgradeable.d.ts#L146)

___

### onERC1155Received(address,address,uint256,uint256,bytes)

▸ **onERC1155Received(address,address,uint256,uint256,bytes)**(`operator`, `from`, `id`, `value`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | `string` |
| `from` | `string` |
| `id` | `BigNumberish` |
| `value` | `BigNumberish` |
| `data` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IERC1155ReceiverUpgradeable.d.ts:155](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IERC1155ReceiverUpgradeable.d.ts#L155)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC1155ReceiverUpgradeable`](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md)

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

[`IERC1155ReceiverUpgradeable`](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IERC1155ReceiverUpgradeable.d.ts:59](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IERC1155ReceiverUpgradeable.d.ts#L59)

▸ **once**(`eventName`, `listener`): [`IERC1155ReceiverUpgradeable`](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IERC1155ReceiverUpgradeable`](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IERC1155ReceiverUpgradeable.d.ts:74](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IERC1155ReceiverUpgradeable.d.ts#L74)

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

[src/wrappers/IERC1155ReceiverUpgradeable.d.ts:78](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IERC1155ReceiverUpgradeable.d.ts#L78)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`IERC1155ReceiverUpgradeable`](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md)

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

[`IERC1155ReceiverUpgradeable`](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IERC1155ReceiverUpgradeable.d.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IERC1155ReceiverUpgradeable.d.ts#L67)

▸ **removeAllListeners**(`eventName?`): [`IERC1155ReceiverUpgradeable`](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IERC1155ReceiverUpgradeable`](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IERC1155ReceiverUpgradeable.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IERC1155ReceiverUpgradeable.d.ts#L76)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC1155ReceiverUpgradeable`](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md)

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

[`IERC1155ReceiverUpgradeable`](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IERC1155ReceiverUpgradeable.d.ts:63](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IERC1155ReceiverUpgradeable.d.ts#L63)

▸ **removeListener**(`eventName`, `listener`): [`IERC1155ReceiverUpgradeable`](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IERC1155ReceiverUpgradeable`](wrappers_IERC1155ReceiverUpgradeable.IERC1155ReceiverUpgradeable.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IERC1155ReceiverUpgradeable.d.ts:75](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IERC1155ReceiverUpgradeable.d.ts#L75)

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

[src/wrappers/IERC1155ReceiverUpgradeable.d.ts:164](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IERC1155ReceiverUpgradeable.d.ts#L164)

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

[src/wrappers/IERC1155ReceiverUpgradeable.d.ts:166](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/IERC1155ReceiverUpgradeable.d.ts#L166)

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
