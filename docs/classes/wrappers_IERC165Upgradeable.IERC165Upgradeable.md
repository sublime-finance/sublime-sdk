[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/IERC165Upgradeable](../modules/wrappers_IERC165Upgradeable.md) / IERC165Upgradeable

# Class: IERC165Upgradeable

[wrappers/IERC165Upgradeable](../modules/wrappers_IERC165Upgradeable.md).IERC165Upgradeable

## Hierarchy

- `Contract`

  ↳ **`IERC165Upgradeable`**

## Table of contents

### Constructors

- [constructor](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#constructor)

### Properties

- [\_deployedPromise](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#_deployedpromise)
- [\_runningEvents](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#_runningevents)
- [\_wrappedEmits](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#_wrappedemits)
- [address](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#address)
- [callStatic](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#callstatic)
- [deployTransaction](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#deploytransaction)
- [estimateGas](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#estimategas)
- [filters](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#filters)
- [functions](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#functions)
- [interface](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#interface)
- [populateTransaction](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#populatetransaction)
- [provider](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#provider)
- [resolvedAddress](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#resolvedaddress)
- [signer](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#_checkrunningevents)
- [\_deployed](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#_deployed)
- [\_wrapEvent](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#_wrapevent)
- [attach](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#attach)
- [connect](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#connect)
- [deployed](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#deployed)
- [emit](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#emit)
- [fallback](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#fallback)
- [listenerCount](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#listenercount)
- [listeners](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#listeners)
- [off](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#off)
- [on](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#on)
- [once](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#once)
- [queryFilter](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#queryfilter)
- [removeAllListeners](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#removealllisteners)
- [removeListener](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#removelistener)
- [supportsInterface](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#supportsinterface)
- [supportsInterface(bytes4)](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#supportsinterface(bytes4))
- [getContractAddress](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#getcontractaddress)
- [getInterface](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#getinterface)
- [isIndexed](wrappers_IERC165Upgradeable.IERC165Upgradeable.md#isindexed)

## Constructors

### constructor

• **new IERC165Upgradeable**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `supportsInterface(bytes4)` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/IERC165Upgradeable.d.ts:86](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IERC165Upgradeable.d.ts#L86)

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
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `supportsInterface(bytes4)` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/IERC165Upgradeable.d.ts:94](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IERC165Upgradeable.d.ts#L94)

___

### filters

• **filters**: `Object`

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/IERC165Upgradeable.d.ts:92](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IERC165Upgradeable.d.ts#L92)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `supportsInterface(bytes4)` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/IERC165Upgradeable.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IERC165Upgradeable.d.ts#L76)

___

### interface

• **interface**: [`IERC165UpgradeableInterface`](../interfaces/wrappers_IERC165Upgradeable.IERC165UpgradeableInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/IERC165Upgradeable.d.ts:74](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IERC165Upgradeable.d.ts#L74)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `supportsInterface(bytes4)` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/IERC165Upgradeable.d.ts:100](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IERC165Upgradeable.d.ts#L100)

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

▸ **attach**(`addressOrName`): [`IERC165Upgradeable`](wrappers_IERC165Upgradeable.IERC165Upgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IERC165Upgradeable`](wrappers_IERC165Upgradeable.IERC165Upgradeable.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/IERC165Upgradeable.d.ts:35](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IERC165Upgradeable.d.ts#L35)

___

### connect

▸ **connect**(`signerOrProvider`): [`IERC165Upgradeable`](wrappers_IERC165Upgradeable.IERC165Upgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IERC165Upgradeable`](wrappers_IERC165Upgradeable.IERC165Upgradeable.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/IERC165Upgradeable.d.ts:34](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IERC165Upgradeable.d.ts#L34)

___

### deployed

▸ **deployed**(): `Promise`<[`IERC165Upgradeable`](wrappers_IERC165Upgradeable.IERC165Upgradeable.md)\>

#### Returns

`Promise`<[`IERC165Upgradeable`](wrappers_IERC165Upgradeable.IERC165Upgradeable.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/IERC165Upgradeable.d.ts:36](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IERC165Upgradeable.d.ts#L36)

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

[src/wrappers/IERC165Upgradeable.d.ts:38](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IERC165Upgradeable.d.ts#L38)

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

[src/wrappers/IERC165Upgradeable.d.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IERC165Upgradeable.d.ts#L61)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC165Upgradeable`](wrappers_IERC165Upgradeable.IERC165Upgradeable.md)

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

[`IERC165Upgradeable`](wrappers_IERC165Upgradeable.IERC165Upgradeable.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IERC165Upgradeable.d.ts:41](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IERC165Upgradeable.d.ts#L41)

▸ **off**(`eventName`, `listener`): [`IERC165Upgradeable`](wrappers_IERC165Upgradeable.IERC165Upgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IERC165Upgradeable`](wrappers_IERC165Upgradeable.IERC165Upgradeable.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IERC165Upgradeable.d.ts:62](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IERC165Upgradeable.d.ts#L62)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC165Upgradeable`](wrappers_IERC165Upgradeable.IERC165Upgradeable.md)

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

[`IERC165Upgradeable`](wrappers_IERC165Upgradeable.IERC165Upgradeable.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IERC165Upgradeable.d.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IERC165Upgradeable.d.ts#L45)

▸ **on**(`eventName`, `listener`): [`IERC165Upgradeable`](wrappers_IERC165Upgradeable.IERC165Upgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IERC165Upgradeable`](wrappers_IERC165Upgradeable.IERC165Upgradeable.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IERC165Upgradeable.d.ts:63](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IERC165Upgradeable.d.ts#L63)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC165Upgradeable`](wrappers_IERC165Upgradeable.IERC165Upgradeable.md)

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

[`IERC165Upgradeable`](wrappers_IERC165Upgradeable.IERC165Upgradeable.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IERC165Upgradeable.d.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IERC165Upgradeable.d.ts#L49)

▸ **once**(`eventName`, `listener`): [`IERC165Upgradeable`](wrappers_IERC165Upgradeable.IERC165Upgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IERC165Upgradeable`](wrappers_IERC165Upgradeable.IERC165Upgradeable.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IERC165Upgradeable.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IERC165Upgradeable.d.ts#L64)

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

[src/wrappers/IERC165Upgradeable.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IERC165Upgradeable.d.ts#L68)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`IERC165Upgradeable`](wrappers_IERC165Upgradeable.IERC165Upgradeable.md)

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

[`IERC165Upgradeable`](wrappers_IERC165Upgradeable.IERC165Upgradeable.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IERC165Upgradeable.d.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IERC165Upgradeable.d.ts#L57)

▸ **removeAllListeners**(`eventName?`): [`IERC165Upgradeable`](wrappers_IERC165Upgradeable.IERC165Upgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IERC165Upgradeable`](wrappers_IERC165Upgradeable.IERC165Upgradeable.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IERC165Upgradeable.d.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IERC165Upgradeable.d.ts#L66)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC165Upgradeable`](wrappers_IERC165Upgradeable.IERC165Upgradeable.md)

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

[`IERC165Upgradeable`](wrappers_IERC165Upgradeable.IERC165Upgradeable.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IERC165Upgradeable.d.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IERC165Upgradeable.d.ts#L53)

▸ **removeListener**(`eventName`, `listener`): [`IERC165Upgradeable`](wrappers_IERC165Upgradeable.IERC165Upgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IERC165Upgradeable`](wrappers_IERC165Upgradeable.IERC165Upgradeable.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IERC165Upgradeable.d.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IERC165Upgradeable.d.ts#L65)

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

[src/wrappers/IERC165Upgradeable.d.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IERC165Upgradeable.d.ts#L82)

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

[src/wrappers/IERC165Upgradeable.d.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IERC165Upgradeable.d.ts#L84)

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
