[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/IWETH9](../modules/wrappers_IWETH9.md) / IWETH9

# Class: IWETH9

[wrappers/IWETH9](../modules/wrappers_IWETH9.md).IWETH9

## Hierarchy

- `Contract`

  ↳ **`IWETH9`**

## Table of contents

### Constructors

- [constructor](wrappers_IWETH9.IWETH9.md#constructor)

### Properties

- [\_deployedPromise](wrappers_IWETH9.IWETH9.md#_deployedpromise)
- [\_runningEvents](wrappers_IWETH9.IWETH9.md#_runningevents)
- [\_wrappedEmits](wrappers_IWETH9.IWETH9.md#_wrappedemits)
- [address](wrappers_IWETH9.IWETH9.md#address)
- [callStatic](wrappers_IWETH9.IWETH9.md#callstatic)
- [deployTransaction](wrappers_IWETH9.IWETH9.md#deploytransaction)
- [estimateGas](wrappers_IWETH9.IWETH9.md#estimategas)
- [filters](wrappers_IWETH9.IWETH9.md#filters)
- [functions](wrappers_IWETH9.IWETH9.md#functions)
- [interface](wrappers_IWETH9.IWETH9.md#interface)
- [populateTransaction](wrappers_IWETH9.IWETH9.md#populatetransaction)
- [provider](wrappers_IWETH9.IWETH9.md#provider)
- [resolvedAddress](wrappers_IWETH9.IWETH9.md#resolvedaddress)
- [signer](wrappers_IWETH9.IWETH9.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_IWETH9.IWETH9.md#_checkrunningevents)
- [\_deployed](wrappers_IWETH9.IWETH9.md#_deployed)
- [\_wrapEvent](wrappers_IWETH9.IWETH9.md#_wrapevent)
- [approve](wrappers_IWETH9.IWETH9.md#approve)
- [approve(address,uint256)](wrappers_IWETH9.IWETH9.md#approve(address,uint256))
- [attach](wrappers_IWETH9.IWETH9.md#attach)
- [connect](wrappers_IWETH9.IWETH9.md#connect)
- [deployed](wrappers_IWETH9.IWETH9.md#deployed)
- [deposit](wrappers_IWETH9.IWETH9.md#deposit)
- [deposit()](wrappers_IWETH9.IWETH9.md#deposit())
- [emit](wrappers_IWETH9.IWETH9.md#emit)
- [fallback](wrappers_IWETH9.IWETH9.md#fallback)
- [listenerCount](wrappers_IWETH9.IWETH9.md#listenercount)
- [listeners](wrappers_IWETH9.IWETH9.md#listeners)
- [off](wrappers_IWETH9.IWETH9.md#off)
- [on](wrappers_IWETH9.IWETH9.md#on)
- [once](wrappers_IWETH9.IWETH9.md#once)
- [queryFilter](wrappers_IWETH9.IWETH9.md#queryfilter)
- [removeAllListeners](wrappers_IWETH9.IWETH9.md#removealllisteners)
- [removeListener](wrappers_IWETH9.IWETH9.md#removelistener)
- [withdraw](wrappers_IWETH9.IWETH9.md#withdraw)
- [withdraw(uint256)](wrappers_IWETH9.IWETH9.md#withdraw(uint256))
- [getContractAddress](wrappers_IWETH9.IWETH9.md#getcontractaddress)
- [getInterface](wrappers_IWETH9.IWETH9.md#getinterface)
- [isIndexed](wrappers_IWETH9.IWETH9.md#isindexed)

## Constructors

### constructor

• **new IWETH9**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `approve(address,uint256)` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `deposit` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deposit()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdraw` | (`wad`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdraw(uint256)` | (`wad`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/IWETH9.d.ts:122](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IWETH9.d.ts#L122)

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
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `approve(address,uint256)` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `deposit` | (`overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `deposit()` | (`overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdraw` | (`wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdraw(uint256)` | (`wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/IWETH9.d.ts:138](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IWETH9.d.ts#L138)

___

### filters

• **filters**: `Object`

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/IWETH9.d.ts:136](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IWETH9.d.ts#L136)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `approve(address,uint256)` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `deposit` | (`overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `deposit()` | (`overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdraw` | (`wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdraw(uint256)` | (`wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/IWETH9.d.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IWETH9.d.ts#L84)

___

### interface

• **interface**: [`IWETH9Interface`](../interfaces/wrappers_IWETH9.IWETH9Interface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/IWETH9.d.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IWETH9.d.ts#L82)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `approve(address,uint256)` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `deposit` | (`overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `deposit()` | (`overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdraw` | (`wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdraw(uint256)` | (`wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/IWETH9.d.ts:156](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IWETH9.d.ts#L156)

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

### approve

▸ **approve**(`spender`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spender` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IWETH9.d.ts:106](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IWETH9.d.ts#L106)

___

### approve(address,uint256)

▸ **approve(address,uint256)**(`spender`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spender` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IWETH9.d.ts:108](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IWETH9.d.ts#L108)

___

### attach

▸ **attach**(`addressOrName`): [`IWETH9`](wrappers_IWETH9.IWETH9.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IWETH9`](wrappers_IWETH9.IWETH9.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/IWETH9.d.ts:43](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IWETH9.d.ts#L43)

___

### connect

▸ **connect**(`signerOrProvider`): [`IWETH9`](wrappers_IWETH9.IWETH9.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IWETH9`](wrappers_IWETH9.IWETH9.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/IWETH9.d.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IWETH9.d.ts#L42)

___

### deployed

▸ **deployed**(): `Promise`<[`IWETH9`](wrappers_IWETH9.IWETH9.md)\>

#### Returns

`Promise`<[`IWETH9`](wrappers_IWETH9.IWETH9.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/IWETH9.d.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IWETH9.d.ts#L44)

___

### deposit

▸ **deposit**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IWETH9.d.ts:114](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IWETH9.d.ts#L114)

___

### deposit()

▸ **deposit()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IWETH9.d.ts:116](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IWETH9.d.ts#L116)

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

[src/wrappers/IWETH9.d.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IWETH9.d.ts#L46)

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

[src/wrappers/IWETH9.d.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IWETH9.d.ts#L69)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IWETH9`](wrappers_IWETH9.IWETH9.md)

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

[`IWETH9`](wrappers_IWETH9.IWETH9.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IWETH9.d.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IWETH9.d.ts#L49)

▸ **off**(`eventName`, `listener`): [`IWETH9`](wrappers_IWETH9.IWETH9.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IWETH9`](wrappers_IWETH9.IWETH9.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IWETH9.d.ts:70](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IWETH9.d.ts#L70)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IWETH9`](wrappers_IWETH9.IWETH9.md)

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

[`IWETH9`](wrappers_IWETH9.IWETH9.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IWETH9.d.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IWETH9.d.ts#L53)

▸ **on**(`eventName`, `listener`): [`IWETH9`](wrappers_IWETH9.IWETH9.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IWETH9`](wrappers_IWETH9.IWETH9.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IWETH9.d.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IWETH9.d.ts#L71)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IWETH9`](wrappers_IWETH9.IWETH9.md)

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

[`IWETH9`](wrappers_IWETH9.IWETH9.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IWETH9.d.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IWETH9.d.ts#L57)

▸ **once**(`eventName`, `listener`): [`IWETH9`](wrappers_IWETH9.IWETH9.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IWETH9`](wrappers_IWETH9.IWETH9.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IWETH9.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IWETH9.d.ts#L72)

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

[src/wrappers/IWETH9.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IWETH9.d.ts#L76)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`IWETH9`](wrappers_IWETH9.IWETH9.md)

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

[`IWETH9`](wrappers_IWETH9.IWETH9.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IWETH9.d.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IWETH9.d.ts#L65)

▸ **removeAllListeners**(`eventName?`): [`IWETH9`](wrappers_IWETH9.IWETH9.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IWETH9`](wrappers_IWETH9.IWETH9.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IWETH9.d.ts:74](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IWETH9.d.ts#L74)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IWETH9`](wrappers_IWETH9.IWETH9.md)

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

[`IWETH9`](wrappers_IWETH9.IWETH9.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IWETH9.d.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IWETH9.d.ts#L61)

▸ **removeListener**(`eventName`, `listener`): [`IWETH9`](wrappers_IWETH9.IWETH9.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IWETH9`](wrappers_IWETH9.IWETH9.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IWETH9.d.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IWETH9.d.ts#L73)

___

### withdraw

▸ **withdraw**(`wad`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wad` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IWETH9.d.ts:118](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IWETH9.d.ts#L118)

___

### withdraw(uint256)

▸ **withdraw(uint256)**(`wad`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wad` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IWETH9.d.ts:120](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IWETH9.d.ts#L120)

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
