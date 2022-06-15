[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/IPooledCreditLine](../modules/wrappers_IPooledCreditLine.md) / IPooledCreditLine

# Class: IPooledCreditLine

[wrappers/IPooledCreditLine](../modules/wrappers_IPooledCreditLine.md).IPooledCreditLine

## Hierarchy

- `Contract`

  ↳ **`IPooledCreditLine`**

## Table of contents

### Constructors

- [constructor](wrappers_IPooledCreditLine.IPooledCreditLine.md#constructor)

### Properties

- [\_deployedPromise](wrappers_IPooledCreditLine.IPooledCreditLine.md#_deployedpromise)
- [\_runningEvents](wrappers_IPooledCreditLine.IPooledCreditLine.md#_runningevents)
- [\_wrappedEmits](wrappers_IPooledCreditLine.IPooledCreditLine.md#_wrappedemits)
- [address](wrappers_IPooledCreditLine.IPooledCreditLine.md#address)
- [callStatic](wrappers_IPooledCreditLine.IPooledCreditLine.md#callstatic)
- [deployTransaction](wrappers_IPooledCreditLine.IPooledCreditLine.md#deploytransaction)
- [estimateGas](wrappers_IPooledCreditLine.IPooledCreditLine.md#estimategas)
- [filters](wrappers_IPooledCreditLine.IPooledCreditLine.md#filters)
- [functions](wrappers_IPooledCreditLine.IPooledCreditLine.md#functions)
- [interface](wrappers_IPooledCreditLine.IPooledCreditLine.md#interface)
- [populateTransaction](wrappers_IPooledCreditLine.IPooledCreditLine.md#populatetransaction)
- [provider](wrappers_IPooledCreditLine.IPooledCreditLine.md#provider)
- [resolvedAddress](wrappers_IPooledCreditLine.IPooledCreditLine.md#resolvedaddress)
- [signer](wrappers_IPooledCreditLine.IPooledCreditLine.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_IPooledCreditLine.IPooledCreditLine.md#_checkrunningevents)
- [\_deployed](wrappers_IPooledCreditLine.IPooledCreditLine.md#_deployed)
- [\_wrapEvent](wrappers_IPooledCreditLine.IPooledCreditLine.md#_wrapevent)
- [accept](wrappers_IPooledCreditLine.IPooledCreditLine.md#accept)
- [accept(uint256,uint256)](wrappers_IPooledCreditLine.IPooledCreditLine.md#accept(uint256,uint256))
- [attach](wrappers_IPooledCreditLine.IPooledCreditLine.md#attach)
- [cancelRequestOnLowCollection](wrappers_IPooledCreditLine.IPooledCreditLine.md#cancelrequestonlowcollection)
- [cancelRequestOnLowCollection(uint256)](wrappers_IPooledCreditLine.IPooledCreditLine.md#cancelrequestonlowcollection(uint256))
- [cancelRequestOnRequestedStateAtEnd](wrappers_IPooledCreditLine.IPooledCreditLine.md#cancelrequestonrequestedstateatend)
- [cancelRequestOnRequestedStateAtEnd(uint256)](wrappers_IPooledCreditLine.IPooledCreditLine.md#cancelrequestonrequestedstateatend(uint256))
- [connect](wrappers_IPooledCreditLine.IPooledCreditLine.md#connect)
- [deployed](wrappers_IPooledCreditLine.IPooledCreditLine.md#deployed)
- [emit](wrappers_IPooledCreditLine.IPooledCreditLine.md#emit)
- [fallback](wrappers_IPooledCreditLine.IPooledCreditLine.md#fallback)
- [getEndsAt](wrappers_IPooledCreditLine.IPooledCreditLine.md#getendsat)
- [getEndsAt(uint256)](wrappers_IPooledCreditLine.IPooledCreditLine.md#getendsat(uint256))
- [getPrincipal](wrappers_IPooledCreditLine.IPooledCreditLine.md#getprincipal)
- [getPrincipal(uint256)](wrappers_IPooledCreditLine.IPooledCreditLine.md#getprincipal(uint256))
- [getStatusAndUpdate](wrappers_IPooledCreditLine.IPooledCreditLine.md#getstatusandupdate)
- [getStatusAndUpdate(uint256)](wrappers_IPooledCreditLine.IPooledCreditLine.md#getstatusandupdate(uint256))
- [liquidate](wrappers_IPooledCreditLine.IPooledCreditLine.md#liquidate)
- [liquidate(uint256)](wrappers_IPooledCreditLine.IPooledCreditLine.md#liquidate(uint256))
- [listenerCount](wrappers_IPooledCreditLine.IPooledCreditLine.md#listenercount)
- [listeners](wrappers_IPooledCreditLine.IPooledCreditLine.md#listeners)
- [off](wrappers_IPooledCreditLine.IPooledCreditLine.md#off)
- [on](wrappers_IPooledCreditLine.IPooledCreditLine.md#on)
- [once](wrappers_IPooledCreditLine.IPooledCreditLine.md#once)
- [queryFilter](wrappers_IPooledCreditLine.IPooledCreditLine.md#queryfilter)
- [removeAllListeners](wrappers_IPooledCreditLine.IPooledCreditLine.md#removealllisteners)
- [removeListener](wrappers_IPooledCreditLine.IPooledCreditLine.md#removelistener)
- [getContractAddress](wrappers_IPooledCreditLine.IPooledCreditLine.md#getcontractaddress)
- [getInterface](wrappers_IPooledCreditLine.IPooledCreditLine.md#getinterface)
- [isIndexed](wrappers_IPooledCreditLine.IPooledCreditLine.md#isindexed)

## Constructors

### constructor

• **new IPooledCreditLine**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `accept` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `accept(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `cancelRequestOnLowCollection` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `cancelRequestOnLowCollection(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `cancelRequestOnRequestedStateAtEnd` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `cancelRequestOnRequestedStateAtEnd(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getEndsAt` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getEndsAt(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getPrincipal` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getPrincipal(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getStatusAndUpdate` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `getStatusAndUpdate(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `liquidate` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `BigNumber`]\> |
| `liquidate(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `BigNumber`]\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:199](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L199)

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
| `accept` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `accept(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `cancelRequestOnLowCollection` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `cancelRequestOnLowCollection(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `cancelRequestOnRequestedStateAtEnd` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `cancelRequestOnRequestedStateAtEnd(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getEndsAt` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getEndsAt(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getPrincipal` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getPrincipal(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getStatusAndUpdate` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getStatusAndUpdate(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `liquidate` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `liquidate(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:231](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L231)

___

### filters

• **filters**: `Object`

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:229](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L229)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accept` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `accept(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `cancelRequestOnLowCollection` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `cancelRequestOnLowCollection(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `cancelRequestOnRequestedStateAtEnd` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `cancelRequestOnRequestedStateAtEnd(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getEndsAt` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getEndsAt(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getPrincipal` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getPrincipal(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getStatusAndUpdate` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getStatusAndUpdate(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `liquidate` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `liquidate(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:95](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L95)

___

### interface

• **interface**: [`IPooledCreditLineInterface`](../interfaces/wrappers_IPooledCreditLine.IPooledCreditLineInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:93](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L93)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accept` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `accept(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `cancelRequestOnLowCollection` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `cancelRequestOnLowCollection(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `cancelRequestOnRequestedStateAtEnd` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `cancelRequestOnRequestedStateAtEnd(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getEndsAt` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getEndsAt(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getPrincipal` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getPrincipal(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getStatusAndUpdate` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getStatusAndUpdate(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `liquidate` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `liquidate(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:271](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L271)

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

### accept

▸ **accept**(`_id`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:148](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L148)

___

### accept(uint256,uint256)

▸ **accept(uint256,uint256)**(`_id`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:154](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L154)

___

### attach

▸ **attach**(`addressOrName`): [`IPooledCreditLine`](wrappers_IPooledCreditLine.IPooledCreditLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IPooledCreditLine`](wrappers_IPooledCreditLine.IPooledCreditLine.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L54)

___

### cancelRequestOnLowCollection

▸ **cancelRequestOnLowCollection**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:160](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L160)

___

### cancelRequestOnLowCollection(uint256)

▸ **cancelRequestOnLowCollection(uint256)**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:165](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L165)

___

### cancelRequestOnRequestedStateAtEnd

▸ **cancelRequestOnRequestedStateAtEnd**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:170](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L170)

___

### cancelRequestOnRequestedStateAtEnd(uint256)

▸ **cancelRequestOnRequestedStateAtEnd(uint256)**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:175](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L175)

___

### connect

▸ **connect**(`signerOrProvider`): [`IPooledCreditLine`](wrappers_IPooledCreditLine.IPooledCreditLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IPooledCreditLine`](wrappers_IPooledCreditLine.IPooledCreditLine.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L53)

___

### deployed

▸ **deployed**(): `Promise`<[`IPooledCreditLine`](wrappers_IPooledCreditLine.IPooledCreditLine.md)\>

#### Returns

`Promise`<[`IPooledCreditLine`](wrappers_IPooledCreditLine.IPooledCreditLine.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L55)

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

### getEndsAt

▸ **getEndsAt**(`_id`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:180](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L180)

___

### getEndsAt(uint256)

▸ **getEndsAt(uint256)**(`_id`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:182](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L182)

___

### getPrincipal

▸ **getPrincipal**(`_id`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:184](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L184)

___

### getPrincipal(uint256)

▸ **getPrincipal(uint256)**(`_id`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:186](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L186)

___

### getStatusAndUpdate

▸ **getStatusAndUpdate**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:188](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L188)

___

### getStatusAndUpdate(uint256)

▸ **getStatusAndUpdate(uint256)**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:190](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L190)

___

### liquidate

▸ **liquidate**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:195](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L195)

___

### liquidate(uint256)

▸ **liquidate(uint256)**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:197](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L197)

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

[src/wrappers/IPooledCreditLine.d.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L57)

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

[src/wrappers/IPooledCreditLine.d.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L80)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IPooledCreditLine`](wrappers_IPooledCreditLine.IPooledCreditLine.md)

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

[`IPooledCreditLine`](wrappers_IPooledCreditLine.IPooledCreditLine.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L60)

▸ **off**(`eventName`, `listener`): [`IPooledCreditLine`](wrappers_IPooledCreditLine.IPooledCreditLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IPooledCreditLine`](wrappers_IPooledCreditLine.IPooledCreditLine.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L81)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IPooledCreditLine`](wrappers_IPooledCreditLine.IPooledCreditLine.md)

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

[`IPooledCreditLine`](wrappers_IPooledCreditLine.IPooledCreditLine.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L64)

▸ **on**(`eventName`, `listener`): [`IPooledCreditLine`](wrappers_IPooledCreditLine.IPooledCreditLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IPooledCreditLine`](wrappers_IPooledCreditLine.IPooledCreditLine.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L82)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IPooledCreditLine`](wrappers_IPooledCreditLine.IPooledCreditLine.md)

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

[`IPooledCreditLine`](wrappers_IPooledCreditLine.IPooledCreditLine.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L68)

▸ **once**(`eventName`, `listener`): [`IPooledCreditLine`](wrappers_IPooledCreditLine.IPooledCreditLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IPooledCreditLine`](wrappers_IPooledCreditLine.IPooledCreditLine.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:83](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L83)

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

[src/wrappers/IPooledCreditLine.d.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L87)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`IPooledCreditLine`](wrappers_IPooledCreditLine.IPooledCreditLine.md)

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

[`IPooledCreditLine`](wrappers_IPooledCreditLine.IPooledCreditLine.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L76)

▸ **removeAllListeners**(`eventName?`): [`IPooledCreditLine`](wrappers_IPooledCreditLine.IPooledCreditLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IPooledCreditLine`](wrappers_IPooledCreditLine.IPooledCreditLine.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L85)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IPooledCreditLine`](wrappers_IPooledCreditLine.IPooledCreditLine.md)

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

[`IPooledCreditLine`](wrappers_IPooledCreditLine.IPooledCreditLine.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L72)

▸ **removeListener**(`eventName`, `listener`): [`IPooledCreditLine`](wrappers_IPooledCreditLine.IPooledCreditLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IPooledCreditLine`](wrappers_IPooledCreditLine.IPooledCreditLine.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IPooledCreditLine.d.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/IPooledCreditLine.d.ts#L84)

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
