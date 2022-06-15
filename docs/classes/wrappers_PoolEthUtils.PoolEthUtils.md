[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/PoolEthUtils](../modules/wrappers_PoolEthUtils.md) / PoolEthUtils

# Class: PoolEthUtils

[wrappers/PoolEthUtils](../modules/wrappers_PoolEthUtils.md).PoolEthUtils

## Hierarchy

- `Contract`

  ↳ **`PoolEthUtils`**

## Table of contents

### Constructors

- [constructor](wrappers_PoolEthUtils.PoolEthUtils.md#constructor)

### Properties

- [\_deployedPromise](wrappers_PoolEthUtils.PoolEthUtils.md#_deployedpromise)
- [\_runningEvents](wrappers_PoolEthUtils.PoolEthUtils.md#_runningevents)
- [\_wrappedEmits](wrappers_PoolEthUtils.PoolEthUtils.md#_wrappedemits)
- [address](wrappers_PoolEthUtils.PoolEthUtils.md#address)
- [callStatic](wrappers_PoolEthUtils.PoolEthUtils.md#callstatic)
- [deployTransaction](wrappers_PoolEthUtils.PoolEthUtils.md#deploytransaction)
- [estimateGas](wrappers_PoolEthUtils.PoolEthUtils.md#estimategas)
- [filters](wrappers_PoolEthUtils.PoolEthUtils.md#filters)
- [functions](wrappers_PoolEthUtils.PoolEthUtils.md#functions)
- [interface](wrappers_PoolEthUtils.PoolEthUtils.md#interface)
- [populateTransaction](wrappers_PoolEthUtils.PoolEthUtils.md#populatetransaction)
- [provider](wrappers_PoolEthUtils.PoolEthUtils.md#provider)
- [resolvedAddress](wrappers_PoolEthUtils.PoolEthUtils.md#resolvedaddress)
- [signer](wrappers_PoolEthUtils.PoolEthUtils.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_PoolEthUtils.PoolEthUtils.md#_checkrunningevents)
- [\_deployed](wrappers_PoolEthUtils.PoolEthUtils.md#_deployed)
- [\_wrapEvent](wrappers_PoolEthUtils.PoolEthUtils.md#_wrapevent)
- [addEthCollateralInMarginCall](wrappers_PoolEthUtils.PoolEthUtils.md#addethcollateralinmargincall)
- [addEthCollateralInMarginCall(address,address)](wrappers_PoolEthUtils.PoolEthUtils.md#addethcollateralinmargincall(address,address))
- [attach](wrappers_PoolEthUtils.PoolEthUtils.md#attach)
- [connect](wrappers_PoolEthUtils.PoolEthUtils.md#connect)
- [deployed](wrappers_PoolEthUtils.PoolEthUtils.md#deployed)
- [depositEthAsCollateralToPool](wrappers_PoolEthUtils.PoolEthUtils.md#depositethascollateraltopool)
- [depositEthAsCollateralToPool(address)](wrappers_PoolEthUtils.PoolEthUtils.md#depositethascollateraltopool(address))
- [emit](wrappers_PoolEthUtils.PoolEthUtils.md#emit)
- [ethLend](wrappers_PoolEthUtils.PoolEthUtils.md#ethlend)
- [ethLend(address,address,address)](wrappers_PoolEthUtils.PoolEthUtils.md#ethlend(address,address,address))
- [fallback](wrappers_PoolEthUtils.PoolEthUtils.md#fallback)
- [listenerCount](wrappers_PoolEthUtils.PoolEthUtils.md#listenercount)
- [listeners](wrappers_PoolEthUtils.PoolEthUtils.md#listeners)
- [off](wrappers_PoolEthUtils.PoolEthUtils.md#off)
- [on](wrappers_PoolEthUtils.PoolEthUtils.md#on)
- [once](wrappers_PoolEthUtils.PoolEthUtils.md#once)
- [queryFilter](wrappers_PoolEthUtils.PoolEthUtils.md#queryfilter)
- [removeAllListeners](wrappers_PoolEthUtils.PoolEthUtils.md#removealllisteners)
- [removeListener](wrappers_PoolEthUtils.PoolEthUtils.md#removelistener)
- [weth](wrappers_PoolEthUtils.PoolEthUtils.md#weth)
- [weth()](wrappers_PoolEthUtils.PoolEthUtils.md#weth())
- [getContractAddress](wrappers_PoolEthUtils.PoolEthUtils.md#getcontractaddress)
- [getInterface](wrappers_PoolEthUtils.PoolEthUtils.md#getinterface)
- [isIndexed](wrappers_PoolEthUtils.PoolEthUtils.md#isindexed)

## Constructors

### constructor

• **new PoolEthUtils**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `addEthCollateralInMarginCall` | (`_pool`: `string`, `_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `addEthCollateralInMarginCall(address,address)` | (`_pool`: `string`, `_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `depositEthAsCollateralToPool` | (`_pool`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `depositEthAsCollateralToPool(address)` | (`_pool`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `ethLend` | (`_pool`: `string`, `_lender`: `string`, `_strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `ethLend(address,address,address)` | (`_pool`: `string`, `_lender`: `string`, `_strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `weth` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `weth()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:168](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/PoolEthUtils.d.ts#L168)

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
| `addEthCollateralInMarginCall` | (`_pool`: `string`, `_lender`: `string`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `addEthCollateralInMarginCall(address,address)` | (`_pool`: `string`, `_lender`: `string`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `depositEthAsCollateralToPool` | (`_pool`: `string`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `depositEthAsCollateralToPool(address)` | (`_pool`: `string`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `ethLend` | (`_pool`: `string`, `_lender`: `string`, `_strategy`: `string`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `ethLend(address,address,address)` | (`_pool`: `string`, `_lender`: `string`, `_strategy`: `string`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `weth` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `weth()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:188](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/PoolEthUtils.d.ts#L188)

___

### filters

• **filters**: `Object`

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:186](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/PoolEthUtils.d.ts#L186)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addEthCollateralInMarginCall` | (`_pool`: `string`, `_lender`: `string`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `addEthCollateralInMarginCall(address,address)` | (`_pool`: `string`, `_lender`: `string`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `depositEthAsCollateralToPool` | (`_pool`: `string`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `depositEthAsCollateralToPool(address)` | (`_pool`: `string`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `ethLend` | (`_pool`: `string`, `_lender`: `string`, `_strategy`: `string`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `ethLend(address,address,address)` | (`_pool`: `string`, `_lender`: `string`, `_strategy`: `string`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `weth` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `weth()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:86](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/PoolEthUtils.d.ts#L86)

___

### interface

• **interface**: [`PoolEthUtilsInterface`](../interfaces/wrappers_PoolEthUtils.PoolEthUtilsInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/PoolEthUtils.d.ts#L84)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addEthCollateralInMarginCall` | (`_pool`: `string`, `_lender`: `string`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `addEthCollateralInMarginCall(address,address)` | (`_pool`: `string`, `_lender`: `string`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `depositEthAsCollateralToPool` | (`_pool`: `string`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `depositEthAsCollateralToPool(address)` | (`_pool`: `string`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `ethLend` | (`_pool`: `string`, `_lender`: `string`, `_strategy`: `string`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `ethLend(address,address,address)` | (`_pool`: `string`, `_lender`: `string`, `_strategy`: `string`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `weth` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `weth()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:227](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/PoolEthUtils.d.ts#L227)

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

### addEthCollateralInMarginCall

▸ **addEthCollateralInMarginCall**(`_pool`, `_lender`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_pool` | `string` |
| `_lender` | `string` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:128](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/PoolEthUtils.d.ts#L128)

___

### addEthCollateralInMarginCall(address,address)

▸ **addEthCollateralInMarginCall(address,address)**(`_pool`, `_lender`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_pool` | `string` |
| `_lender` | `string` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:134](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/PoolEthUtils.d.ts#L134)

___

### attach

▸ **attach**(`addressOrName`): [`PoolEthUtils`](wrappers_PoolEthUtils.PoolEthUtils.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`PoolEthUtils`](wrappers_PoolEthUtils.PoolEthUtils.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/PoolEthUtils.d.ts#L45)

___

### connect

▸ **connect**(`signerOrProvider`): [`PoolEthUtils`](wrappers_PoolEthUtils.PoolEthUtils.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`PoolEthUtils`](wrappers_PoolEthUtils.PoolEthUtils.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/PoolEthUtils.d.ts#L44)

___

### deployed

▸ **deployed**(): `Promise`<[`PoolEthUtils`](wrappers_PoolEthUtils.PoolEthUtils.md)\>

#### Returns

`Promise`<[`PoolEthUtils`](wrappers_PoolEthUtils.PoolEthUtils.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/PoolEthUtils.d.ts#L46)

___

### depositEthAsCollateralToPool

▸ **depositEthAsCollateralToPool**(`_pool`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_pool` | `string` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:140](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/PoolEthUtils.d.ts#L140)

___

### depositEthAsCollateralToPool(address)

▸ **depositEthAsCollateralToPool(address)**(`_pool`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_pool` | `string` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:145](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/PoolEthUtils.d.ts#L145)

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

### ethLend

▸ **ethLend**(`_pool`, `_lender`, `_strategy`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_pool` | `string` |
| `_lender` | `string` |
| `_strategy` | `string` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:150](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/PoolEthUtils.d.ts#L150)

___

### ethLend(address,address,address)

▸ **ethLend(address,address,address)**(`_pool`, `_lender`, `_strategy`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_pool` | `string` |
| `_lender` | `string` |
| `_strategy` | `string` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:157](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/PoolEthUtils.d.ts#L157)

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

[src/wrappers/PoolEthUtils.d.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/PoolEthUtils.d.ts#L48)

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

[src/wrappers/PoolEthUtils.d.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/PoolEthUtils.d.ts#L71)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`PoolEthUtils`](wrappers_PoolEthUtils.PoolEthUtils.md)

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

[`PoolEthUtils`](wrappers_PoolEthUtils.PoolEthUtils.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:51](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/PoolEthUtils.d.ts#L51)

▸ **off**(`eventName`, `listener`): [`PoolEthUtils`](wrappers_PoolEthUtils.PoolEthUtils.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`PoolEthUtils`](wrappers_PoolEthUtils.PoolEthUtils.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/PoolEthUtils.d.ts#L72)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`PoolEthUtils`](wrappers_PoolEthUtils.PoolEthUtils.md)

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

[`PoolEthUtils`](wrappers_PoolEthUtils.PoolEthUtils.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/PoolEthUtils.d.ts#L55)

▸ **on**(`eventName`, `listener`): [`PoolEthUtils`](wrappers_PoolEthUtils.PoolEthUtils.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`PoolEthUtils`](wrappers_PoolEthUtils.PoolEthUtils.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/PoolEthUtils.d.ts#L73)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`PoolEthUtils`](wrappers_PoolEthUtils.PoolEthUtils.md)

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

[`PoolEthUtils`](wrappers_PoolEthUtils.PoolEthUtils.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:59](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/PoolEthUtils.d.ts#L59)

▸ **once**(`eventName`, `listener`): [`PoolEthUtils`](wrappers_PoolEthUtils.PoolEthUtils.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`PoolEthUtils`](wrappers_PoolEthUtils.PoolEthUtils.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:74](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/PoolEthUtils.d.ts#L74)

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

[src/wrappers/PoolEthUtils.d.ts:78](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/PoolEthUtils.d.ts#L78)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`PoolEthUtils`](wrappers_PoolEthUtils.PoolEthUtils.md)

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

[`PoolEthUtils`](wrappers_PoolEthUtils.PoolEthUtils.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/PoolEthUtils.d.ts#L67)

▸ **removeAllListeners**(`eventName?`): [`PoolEthUtils`](wrappers_PoolEthUtils.PoolEthUtils.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`PoolEthUtils`](wrappers_PoolEthUtils.PoolEthUtils.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/PoolEthUtils.d.ts#L76)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`PoolEthUtils`](wrappers_PoolEthUtils.PoolEthUtils.md)

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

[`PoolEthUtils`](wrappers_PoolEthUtils.PoolEthUtils.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:63](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/PoolEthUtils.d.ts#L63)

▸ **removeListener**(`eventName`, `listener`): [`PoolEthUtils`](wrappers_PoolEthUtils.PoolEthUtils.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`PoolEthUtils`](wrappers_PoolEthUtils.PoolEthUtils.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:75](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/PoolEthUtils.d.ts#L75)

___

### weth

▸ **weth**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:164](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/PoolEthUtils.d.ts#L164)

___

### weth()

▸ **weth()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/PoolEthUtils.d.ts:166](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/PoolEthUtils.d.ts#L166)

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
