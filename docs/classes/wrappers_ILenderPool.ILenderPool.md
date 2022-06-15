[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/ILenderPool](../modules/wrappers_ILenderPool.md) / ILenderPool

# Class: ILenderPool

[wrappers/ILenderPool](../modules/wrappers_ILenderPool.md).ILenderPool

## Hierarchy

- `Contract`

  ↳ **`ILenderPool`**

## Table of contents

### Constructors

- [constructor](wrappers_ILenderPool.ILenderPool.md#constructor)

### Properties

- [\_deployedPromise](wrappers_ILenderPool.ILenderPool.md#_deployedpromise)
- [\_runningEvents](wrappers_ILenderPool.ILenderPool.md#_runningevents)
- [\_wrappedEmits](wrappers_ILenderPool.ILenderPool.md#_wrappedemits)
- [address](wrappers_ILenderPool.ILenderPool.md#address)
- [callStatic](wrappers_ILenderPool.ILenderPool.md#callstatic)
- [deployTransaction](wrappers_ILenderPool.ILenderPool.md#deploytransaction)
- [estimateGas](wrappers_ILenderPool.ILenderPool.md#estimategas)
- [filters](wrappers_ILenderPool.ILenderPool.md#filters)
- [functions](wrappers_ILenderPool.ILenderPool.md#functions)
- [interface](wrappers_ILenderPool.ILenderPool.md#interface)
- [populateTransaction](wrappers_ILenderPool.ILenderPool.md#populatetransaction)
- [provider](wrappers_ILenderPool.ILenderPool.md#provider)
- [resolvedAddress](wrappers_ILenderPool.ILenderPool.md#resolvedaddress)
- [signer](wrappers_ILenderPool.ILenderPool.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_ILenderPool.ILenderPool.md#_checkrunningevents)
- [\_deployed](wrappers_ILenderPool.ILenderPool.md#_deployed)
- [\_wrapEvent](wrappers_ILenderPool.ILenderPool.md#_wrapevent)
- [attach](wrappers_ILenderPool.ILenderPool.md#attach)
- [borrowed](wrappers_ILenderPool.ILenderPool.md#borrowed)
- [borrowed(uint256,uint256)](wrappers_ILenderPool.ILenderPool.md#borrowed(uint256,uint256))
- [connect](wrappers_ILenderPool.ILenderPool.md#connect)
- [create](wrappers_ILenderPool.ILenderPool.md#create)
- [create(uint256,address,address,address,uint256,uint256,uint256,bool)](wrappers_ILenderPool.ILenderPool.md#create(uint256,address,address,address,uint256,uint256,uint256,bool))
- [deployed](wrappers_ILenderPool.ILenderPool.md#deployed)
- [emit](wrappers_ILenderPool.ILenderPool.md#emit)
- [fallback](wrappers_ILenderPool.ILenderPool.md#fallback)
- [listenerCount](wrappers_ILenderPool.ILenderPool.md#listenercount)
- [listeners](wrappers_ILenderPool.ILenderPool.md#listeners)
- [off](wrappers_ILenderPool.ILenderPool.md#off)
- [on](wrappers_ILenderPool.ILenderPool.md#on)
- [once](wrappers_ILenderPool.ILenderPool.md#once)
- [queryFilter](wrappers_ILenderPool.ILenderPool.md#queryfilter)
- [removeAllListeners](wrappers_ILenderPool.ILenderPool.md#removealllisteners)
- [removeListener](wrappers_ILenderPool.ILenderPool.md#removelistener)
- [repaid](wrappers_ILenderPool.ILenderPool.md#repaid)
- [repaid(uint256,uint256,uint256)](wrappers_ILenderPool.ILenderPool.md#repaid(uint256,uint256,uint256))
- [requestCancelled](wrappers_ILenderPool.ILenderPool.md#requestcancelled)
- [requestCancelled(uint256)](wrappers_ILenderPool.ILenderPool.md#requestcancelled(uint256))
- [start](wrappers_ILenderPool.ILenderPool.md#start)
- [start(uint256)](wrappers_ILenderPool.ILenderPool.md#start(uint256))
- [terminate](wrappers_ILenderPool.ILenderPool.md#terminate)
- [terminate(uint256,address)](wrappers_ILenderPool.ILenderPool.md#terminate(uint256,address))
- [getContractAddress](wrappers_ILenderPool.ILenderPool.md#getcontractaddress)
- [getInterface](wrappers_ILenderPool.ILenderPool.md#getinterface)
- [isIndexed](wrappers_ILenderPool.ILenderPool.md#isindexed)

## Constructors

### constructor

• **new ILenderPool**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `borrowed` | (`_id`: `BigNumberish`, `_sharesBorrowed`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `borrowed(uint256,uint256)` | (`_id`: `BigNumberish`, `_sharesBorrowed`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `create` | (`_id`: `BigNumberish`, `_verifier`: `string`, `_token`: `string`, `_strategy`: `string`, `_borrowLimit`: `BigNumberish`, `_minBorrowAmount`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `_areTokensTransferable`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `create(uint256,address,address,address,uint256,uint256,uint256,bool)` | (`_id`: `BigNumberish`, `_verifier`: `string`, `_token`: `string`, `_strategy`: `string`, `_borrowLimit`: `BigNumberish`, `_minBorrowAmount`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `_areTokensTransferable`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `repaid` | (`_id`: `BigNumberish`, `_sharesRepaid`: `BigNumberish`, `_interestShares`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `repaid(uint256,uint256,uint256)` | (`_id`: `BigNumberish`, `_sharesRepaid`: `BigNumberish`, `_interestShares`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `requestCancelled` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `requestCancelled(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `start` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `start(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `terminate` | (`id`: `BigNumberish`, `to`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `terminate(uint256,address)` | (`id`: `BigNumberish`, `to`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/ILenderPool.d.ts:236](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L236)

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
| `borrowed` | (`_id`: `BigNumberish`, `_sharesBorrowed`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `borrowed(uint256,uint256)` | (`_id`: `BigNumberish`, `_sharesBorrowed`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `create` | (`_id`: `BigNumberish`, `_verifier`: `string`, `_token`: `string`, `_strategy`: `string`, `_borrowLimit`: `BigNumberish`, `_minBorrowAmount`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `_areTokensTransferable`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `create(uint256,address,address,address,uint256,uint256,uint256,bool)` | (`_id`: `BigNumberish`, `_verifier`: `string`, `_token`: `string`, `_strategy`: `string`, `_borrowLimit`: `BigNumberish`, `_minBorrowAmount`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `_areTokensTransferable`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `repaid` | (`_id`: `BigNumberish`, `_sharesRepaid`: `BigNumberish`, `_interestShares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `repaid(uint256,uint256,uint256)` | (`_id`: `BigNumberish`, `_sharesRepaid`: `BigNumberish`, `_interestShares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `requestCancelled` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `requestCancelled(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `start` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `start(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `terminate` | (`id`: `BigNumberish`, `to`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `terminate(uint256,address)` | (`id`: `BigNumberish`, `to`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/ILenderPool.d.ts:294](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L294)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `LiquidityWithdrawn` | (`amount`: ``null``, `lenderAddress`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `string`], { `amount`: `BigNumber` ; `lenderAddress`: `string`  }\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/ILenderPool.d.ts:287](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L287)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `borrowed` | (`_id`: `BigNumberish`, `_sharesBorrowed`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `borrowed(uint256,uint256)` | (`_id`: `BigNumberish`, `_sharesBorrowed`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `create` | (`_id`: `BigNumberish`, `_verifier`: `string`, `_token`: `string`, `_strategy`: `string`, `_borrowLimit`: `BigNumberish`, `_minBorrowAmount`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `_areTokensTransferable`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `create(uint256,address,address,address,uint256,uint256,uint256,bool)` | (`_id`: `BigNumberish`, `_verifier`: `string`, `_token`: `string`, `_strategy`: `string`, `_borrowLimit`: `BigNumberish`, `_minBorrowAmount`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `_areTokensTransferable`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `repaid` | (`_id`: `BigNumberish`, `_sharesRepaid`: `BigNumberish`, `_interestShares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `repaid(uint256,uint256,uint256)` | (`_id`: `BigNumberish`, `_sharesRepaid`: `BigNumberish`, `_interestShares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `requestCancelled` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `requestCancelled(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `start` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `start(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `terminate` | (`id`: `BigNumberish`, `to`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `terminate(uint256,address)` | (`id`: `BigNumberish`, `to`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/ILenderPool.d.ts:99](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L99)

___

### interface

• **interface**: [`ILenderPoolInterface`](../interfaces/wrappers_ILenderPool.ILenderPoolInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/ILenderPool.d.ts:97](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L97)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `borrowed` | (`_id`: `BigNumberish`, `_sharesBorrowed`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `borrowed(uint256,uint256)` | (`_id`: `BigNumberish`, `_sharesBorrowed`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `create` | (`_id`: `BigNumberish`, `_verifier`: `string`, `_token`: `string`, `_strategy`: `string`, `_borrowLimit`: `BigNumberish`, `_minBorrowAmount`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `_areTokensTransferable`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `create(uint256,address,address,address,uint256,uint256,uint256,bool)` | (`_id`: `BigNumberish`, `_verifier`: `string`, `_token`: `string`, `_strategy`: `string`, `_borrowLimit`: `BigNumberish`, `_minBorrowAmount`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `_areTokensTransferable`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `repaid` | (`_id`: `BigNumberish`, `_sharesRepaid`: `BigNumberish`, `_interestShares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `repaid(uint256,uint256,uint256)` | (`_id`: `BigNumberish`, `_sharesRepaid`: `BigNumberish`, `_interestShares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `requestCancelled` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `requestCancelled(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `start` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `start(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `terminate` | (`id`: `BigNumberish`, `to`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `terminate(uint256,address)` | (`id`: `BigNumberish`, `to`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/ILenderPool.d.ts:362](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L362)

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

▸ **attach**(`addressOrName`): [`ILenderPool`](wrappers_ILenderPool.ILenderPool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`ILenderPool`](wrappers_ILenderPool.ILenderPool.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/ILenderPool.d.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L58)

___

### borrowed

▸ **borrowed**(`_id`, `_sharesBorrowed`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_sharesBorrowed` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ILenderPool.d.ts:170](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L170)

___

### borrowed(uint256,uint256)

▸ **borrowed(uint256,uint256)**(`_id`, `_sharesBorrowed`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_sharesBorrowed` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ILenderPool.d.ts:176](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L176)

___

### connect

▸ **connect**(`signerOrProvider`): [`ILenderPool`](wrappers_ILenderPool.ILenderPool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`ILenderPool`](wrappers_ILenderPool.ILenderPool.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/ILenderPool.d.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L57)

___

### create

▸ **create**(`_id`, `_verifier`, `_token`, `_strategy`, `_borrowLimit`, `_minBorrowAmount`, `_collectionPeriod`, `_areTokensTransferable`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_verifier` | `string` |
| `_token` | `string` |
| `_strategy` | `string` |
| `_borrowLimit` | `BigNumberish` |
| `_minBorrowAmount` | `BigNumberish` |
| `_collectionPeriod` | `BigNumberish` |
| `_areTokensTransferable` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ILenderPool.d.ts:182](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L182)

___

### create(uint256,address,address,address,uint256,uint256,uint256,bool)

▸ **create(uint256,address,address,address,uint256,uint256,uint256,bool)**(`_id`, `_verifier`, `_token`, `_strategy`, `_borrowLimit`, `_minBorrowAmount`, `_collectionPeriod`, `_areTokensTransferable`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_verifier` | `string` |
| `_token` | `string` |
| `_strategy` | `string` |
| `_borrowLimit` | `BigNumberish` |
| `_minBorrowAmount` | `BigNumberish` |
| `_collectionPeriod` | `BigNumberish` |
| `_areTokensTransferable` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ILenderPool.d.ts:194](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L194)

___

### deployed

▸ **deployed**(): `Promise`<[`ILenderPool`](wrappers_ILenderPool.ILenderPool.md)\>

#### Returns

`Promise`<[`ILenderPool`](wrappers_ILenderPool.ILenderPool.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/ILenderPool.d.ts:59](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L59)

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

[src/wrappers/ILenderPool.d.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L61)

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

[src/wrappers/ILenderPool.d.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L84)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ILenderPool`](wrappers_ILenderPool.ILenderPool.md)

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

[`ILenderPool`](wrappers_ILenderPool.ILenderPool.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/ILenderPool.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L64)

▸ **off**(`eventName`, `listener`): [`ILenderPool`](wrappers_ILenderPool.ILenderPool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ILenderPool`](wrappers_ILenderPool.ILenderPool.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/ILenderPool.d.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L85)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ILenderPool`](wrappers_ILenderPool.ILenderPool.md)

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

[`ILenderPool`](wrappers_ILenderPool.ILenderPool.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/ILenderPool.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L68)

▸ **on**(`eventName`, `listener`): [`ILenderPool`](wrappers_ILenderPool.ILenderPool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ILenderPool`](wrappers_ILenderPool.ILenderPool.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/ILenderPool.d.ts:86](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L86)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ILenderPool`](wrappers_ILenderPool.ILenderPool.md)

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

[`ILenderPool`](wrappers_ILenderPool.ILenderPool.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/ILenderPool.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L72)

▸ **once**(`eventName`, `listener`): [`ILenderPool`](wrappers_ILenderPool.ILenderPool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ILenderPool`](wrappers_ILenderPool.ILenderPool.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/ILenderPool.d.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L87)

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

[src/wrappers/ILenderPool.d.ts:91](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L91)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`ILenderPool`](wrappers_ILenderPool.ILenderPool.md)

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

[`ILenderPool`](wrappers_ILenderPool.ILenderPool.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/ILenderPool.d.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L80)

▸ **removeAllListeners**(`eventName?`): [`ILenderPool`](wrappers_ILenderPool.ILenderPool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`ILenderPool`](wrappers_ILenderPool.ILenderPool.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/ILenderPool.d.ts:89](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L89)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ILenderPool`](wrappers_ILenderPool.ILenderPool.md)

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

[`ILenderPool`](wrappers_ILenderPool.ILenderPool.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/ILenderPool.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L76)

▸ **removeListener**(`eventName`, `listener`): [`ILenderPool`](wrappers_ILenderPool.ILenderPool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ILenderPool`](wrappers_ILenderPool.ILenderPool.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/ILenderPool.d.ts:88](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L88)

___

### repaid

▸ **repaid**(`_id`, `_sharesRepaid`, `_interestShares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_sharesRepaid` | `BigNumberish` |
| `_interestShares` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ILenderPool.d.ts:206](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L206)

___

### repaid(uint256,uint256,uint256)

▸ **repaid(uint256,uint256,uint256)**(`_id`, `_sharesRepaid`, `_interestShares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_sharesRepaid` | `BigNumberish` |
| `_interestShares` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ILenderPool.d.ts:213](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L213)

___

### requestCancelled

▸ **requestCancelled**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ILenderPool.d.ts:220](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L220)

___

### requestCancelled(uint256)

▸ **requestCancelled(uint256)**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ILenderPool.d.ts:222](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L222)

___

### start

▸ **start**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ILenderPool.d.ts:224](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L224)

___

### start(uint256)

▸ **start(uint256)**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ILenderPool.d.ts:226](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L226)

___

### terminate

▸ **terminate**(`id`, `to`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `BigNumberish` |
| `to` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ILenderPool.d.ts:228](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L228)

___

### terminate(uint256,address)

▸ **terminate(uint256,address)**(`id`, `to`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `BigNumberish` |
| `to` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ILenderPool.d.ts:230](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/ILenderPool.d.ts#L230)

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
