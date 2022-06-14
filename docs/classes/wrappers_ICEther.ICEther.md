[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/ICEther](../modules/wrappers_ICEther.md) / ICEther

# Class: ICEther

[wrappers/ICEther](../modules/wrappers_ICEther.md).ICEther

## Hierarchy

- `Contract`

  ↳ **`ICEther`**

## Table of contents

### Constructors

- [constructor](wrappers_ICEther.ICEther.md#constructor)

### Properties

- [\_deployedPromise](wrappers_ICEther.ICEther.md#_deployedpromise)
- [\_runningEvents](wrappers_ICEther.ICEther.md#_runningevents)
- [\_wrappedEmits](wrappers_ICEther.ICEther.md#_wrappedemits)
- [address](wrappers_ICEther.ICEther.md#address)
- [callStatic](wrappers_ICEther.ICEther.md#callstatic)
- [deployTransaction](wrappers_ICEther.ICEther.md#deploytransaction)
- [estimateGas](wrappers_ICEther.ICEther.md#estimategas)
- [filters](wrappers_ICEther.ICEther.md#filters)
- [functions](wrappers_ICEther.ICEther.md#functions)
- [interface](wrappers_ICEther.ICEther.md#interface)
- [populateTransaction](wrappers_ICEther.ICEther.md#populatetransaction)
- [provider](wrappers_ICEther.ICEther.md#provider)
- [resolvedAddress](wrappers_ICEther.ICEther.md#resolvedaddress)
- [signer](wrappers_ICEther.ICEther.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_ICEther.ICEther.md#_checkrunningevents)
- [\_deployed](wrappers_ICEther.ICEther.md#_deployed)
- [\_wrapEvent](wrappers_ICEther.ICEther.md#_wrapevent)
- [attach](wrappers_ICEther.ICEther.md#attach)
- [connect](wrappers_ICEther.ICEther.md#connect)
- [deployed](wrappers_ICEther.ICEther.md#deployed)
- [emit](wrappers_ICEther.ICEther.md#emit)
- [fallback](wrappers_ICEther.ICEther.md#fallback)
- [getCash](wrappers_ICEther.ICEther.md#getcash)
- [getCash()](wrappers_ICEther.ICEther.md#getcash())
- [listenerCount](wrappers_ICEther.ICEther.md#listenercount)
- [listeners](wrappers_ICEther.ICEther.md#listeners)
- [mint](wrappers_ICEther.ICEther.md#mint)
- [mint()](wrappers_ICEther.ICEther.md#mint())
- [off](wrappers_ICEther.ICEther.md#off)
- [on](wrappers_ICEther.ICEther.md#on)
- [once](wrappers_ICEther.ICEther.md#once)
- [queryFilter](wrappers_ICEther.ICEther.md#queryfilter)
- [redeem](wrappers_ICEther.ICEther.md#redeem)
- [redeem(uint256)](wrappers_ICEther.ICEther.md#redeem(uint256))
- [removeAllListeners](wrappers_ICEther.ICEther.md#removealllisteners)
- [removeListener](wrappers_ICEther.ICEther.md#removelistener)
- [getContractAddress](wrappers_ICEther.ICEther.md#getcontractaddress)
- [getInterface](wrappers_ICEther.ICEther.md#getinterface)
- [isIndexed](wrappers_ICEther.ICEther.md#isindexed)

## Constructors

### constructor

• **new ICEther**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `getCash` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCash()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `mint` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `mint()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `redeem` | (`redeemTokens`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `redeem(uint256)` | (`redeemTokens`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/ICEther.d.ts:113](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/ICEther.d.ts#L113)

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
| `getCash` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getCash()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `mint` | (`overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `mint()` | (`overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `redeem` | (`redeemTokens`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `redeem(uint256)` | (`redeemTokens`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/ICEther.d.ts:129](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/ICEther.d.ts#L129)

___

### filters

• **filters**: `Object`

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/ICEther.d.ts:127](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/ICEther.d.ts#L127)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getCash` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getCash()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `mint` | (`overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `mint()` | (`overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `redeem` | (`redeemTokens`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `redeem(uint256)` | (`redeemTokens`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/ICEther.d.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/ICEther.d.ts#L84)

___

### interface

• **interface**: [`ICEtherInterface`](../interfaces/wrappers_ICEther.ICEtherInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/ICEther.d.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/ICEther.d.ts#L82)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getCash` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getCash()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `mint` | (`overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `mint()` | (`overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `redeem` | (`redeemTokens`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `redeem(uint256)` | (`redeemTokens`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/ICEther.d.ts:143](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/ICEther.d.ts#L143)

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

▸ **attach**(`addressOrName`): [`ICEther`](wrappers_ICEther.ICEther.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`ICEther`](wrappers_ICEther.ICEther.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/ICEther.d.ts:43](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/ICEther.d.ts#L43)

___

### connect

▸ **connect**(`signerOrProvider`): [`ICEther`](wrappers_ICEther.ICEther.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`ICEther`](wrappers_ICEther.ICEther.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/ICEther.d.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/ICEther.d.ts#L42)

___

### deployed

▸ **deployed**(): `Promise`<[`ICEther`](wrappers_ICEther.ICEther.md)\>

#### Returns

`Promise`<[`ICEther`](wrappers_ICEther.ICEther.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/ICEther.d.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/ICEther.d.ts#L44)

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

### getCash

▸ **getCash**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ICEther.d.ts:101](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/ICEther.d.ts#L101)

___

### getCash()

▸ **getCash()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ICEther.d.ts:103](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/ICEther.d.ts#L103)

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

[src/wrappers/ICEther.d.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/ICEther.d.ts#L46)

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

[src/wrappers/ICEther.d.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/ICEther.d.ts#L69)

___

### mint

▸ **mint**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ICEther.d.ts:105](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/ICEther.d.ts#L105)

___

### mint()

▸ **mint()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ICEther.d.ts:107](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/ICEther.d.ts#L107)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ICEther`](wrappers_ICEther.ICEther.md)

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

[`ICEther`](wrappers_ICEther.ICEther.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/ICEther.d.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/ICEther.d.ts#L49)

▸ **off**(`eventName`, `listener`): [`ICEther`](wrappers_ICEther.ICEther.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ICEther`](wrappers_ICEther.ICEther.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/ICEther.d.ts:70](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/ICEther.d.ts#L70)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ICEther`](wrappers_ICEther.ICEther.md)

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

[`ICEther`](wrappers_ICEther.ICEther.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/ICEther.d.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/ICEther.d.ts#L53)

▸ **on**(`eventName`, `listener`): [`ICEther`](wrappers_ICEther.ICEther.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ICEther`](wrappers_ICEther.ICEther.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/ICEther.d.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/ICEther.d.ts#L71)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ICEther`](wrappers_ICEther.ICEther.md)

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

[`ICEther`](wrappers_ICEther.ICEther.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/ICEther.d.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/ICEther.d.ts#L57)

▸ **once**(`eventName`, `listener`): [`ICEther`](wrappers_ICEther.ICEther.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ICEther`](wrappers_ICEther.ICEther.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/ICEther.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/ICEther.d.ts#L72)

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

[src/wrappers/ICEther.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/ICEther.d.ts#L76)

___

### redeem

▸ **redeem**(`redeemTokens`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `redeemTokens` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ICEther.d.ts:109](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/ICEther.d.ts#L109)

___

### redeem(uint256)

▸ **redeem(uint256)**(`redeemTokens`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `redeemTokens` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ICEther.d.ts:111](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/ICEther.d.ts#L111)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`ICEther`](wrappers_ICEther.ICEther.md)

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

[`ICEther`](wrappers_ICEther.ICEther.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/ICEther.d.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/ICEther.d.ts#L65)

▸ **removeAllListeners**(`eventName?`): [`ICEther`](wrappers_ICEther.ICEther.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`ICEther`](wrappers_ICEther.ICEther.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/ICEther.d.ts:74](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/ICEther.d.ts#L74)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ICEther`](wrappers_ICEther.ICEther.md)

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

[`ICEther`](wrappers_ICEther.ICEther.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/ICEther.d.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/ICEther.d.ts#L61)

▸ **removeListener**(`eventName`, `listener`): [`ICEther`](wrappers_ICEther.ICEther.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ICEther`](wrappers_ICEther.ICEther.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/ICEther.d.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/ICEther.d.ts#L73)

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
