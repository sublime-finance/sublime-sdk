[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/ICToken](../modules/wrappers_ICToken.md) / ICToken

# Class: ICToken

[wrappers/ICToken](../modules/wrappers_ICToken.md).ICToken

## Hierarchy

- `Contract`

  ↳ **`ICToken`**

## Table of contents

### Constructors

- [constructor](wrappers_ICToken.ICToken.md#constructor)

### Properties

- [\_deployedPromise](wrappers_ICToken.ICToken.md#_deployedpromise)
- [\_runningEvents](wrappers_ICToken.ICToken.md#_runningevents)
- [\_wrappedEmits](wrappers_ICToken.ICToken.md#_wrappedemits)
- [address](wrappers_ICToken.ICToken.md#address)
- [callStatic](wrappers_ICToken.ICToken.md#callstatic)
- [deployTransaction](wrappers_ICToken.ICToken.md#deploytransaction)
- [estimateGas](wrappers_ICToken.ICToken.md#estimategas)
- [filters](wrappers_ICToken.ICToken.md#filters)
- [functions](wrappers_ICToken.ICToken.md#functions)
- [interface](wrappers_ICToken.ICToken.md#interface)
- [populateTransaction](wrappers_ICToken.ICToken.md#populatetransaction)
- [provider](wrappers_ICToken.ICToken.md#provider)
- [resolvedAddress](wrappers_ICToken.ICToken.md#resolvedaddress)
- [signer](wrappers_ICToken.ICToken.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_ICToken.ICToken.md#_checkrunningevents)
- [\_deployed](wrappers_ICToken.ICToken.md#_deployed)
- [\_wrapEvent](wrappers_ICToken.ICToken.md#_wrapevent)
- [attach](wrappers_ICToken.ICToken.md#attach)
- [balanceOfUnderlying](wrappers_ICToken.ICToken.md#balanceofunderlying)
- [balanceOfUnderlying(address)](wrappers_ICToken.ICToken.md#balanceofunderlying(address))
- [comptroller](wrappers_ICToken.ICToken.md#comptroller)
- [comptroller()](wrappers_ICToken.ICToken.md#comptroller())
- [connect](wrappers_ICToken.ICToken.md#connect)
- [deployed](wrappers_ICToken.ICToken.md#deployed)
- [emit](wrappers_ICToken.ICToken.md#emit)
- [exchangeRateCurrent](wrappers_ICToken.ICToken.md#exchangeratecurrent)
- [exchangeRateCurrent()](wrappers_ICToken.ICToken.md#exchangeratecurrent())
- [fallback](wrappers_ICToken.ICToken.md#fallback)
- [getCash](wrappers_ICToken.ICToken.md#getcash)
- [getCash()](wrappers_ICToken.ICToken.md#getcash())
- [listenerCount](wrappers_ICToken.ICToken.md#listenercount)
- [listeners](wrappers_ICToken.ICToken.md#listeners)
- [mint](wrappers_ICToken.ICToken.md#mint)
- [mint(uint256)](wrappers_ICToken.ICToken.md#mint(uint256))
- [off](wrappers_ICToken.ICToken.md#off)
- [on](wrappers_ICToken.ICToken.md#on)
- [once](wrappers_ICToken.ICToken.md#once)
- [queryFilter](wrappers_ICToken.ICToken.md#queryfilter)
- [redeem](wrappers_ICToken.ICToken.md#redeem)
- [redeem(uint256)](wrappers_ICToken.ICToken.md#redeem(uint256))
- [removeAllListeners](wrappers_ICToken.ICToken.md#removealllisteners)
- [removeListener](wrappers_ICToken.ICToken.md#removelistener)
- [underlying](wrappers_ICToken.ICToken.md#underlying)
- [underlying()](wrappers_ICToken.ICToken.md#underlying())
- [getContractAddress](wrappers_ICToken.ICToken.md#getcontractaddress)
- [getInterface](wrappers_ICToken.ICToken.md#getinterface)
- [isIndexed](wrappers_ICToken.ICToken.md#isindexed)

## Constructors

### constructor

• **new ICToken**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `balanceOfUnderlying` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `balanceOfUnderlying(address)` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `comptroller` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `comptroller()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `exchangeRateCurrent` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `exchangeRateCurrent()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCash` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCash()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `mint` | (`mintAmount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `mint(uint256)` | (`mintAmount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `redeem` | (`redeemTokens`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `redeem(uint256)` | (`redeemTokens`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `underlying` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `underlying()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/ICToken.d.ts:162](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L162)

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
| `balanceOfUnderlying` | (`account`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `balanceOfUnderlying(address)` | (`account`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `comptroller` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `comptroller()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `exchangeRateCurrent` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `exchangeRateCurrent()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getCash` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getCash()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `mint` | (`mintAmount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `mint(uint256)` | (`mintAmount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `redeem` | (`redeemTokens`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `redeem(uint256)` | (`redeemTokens`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `underlying` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `underlying()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/ICToken.d.ts:194](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L194)

___

### filters

• **filters**: `Object`

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/ICToken.d.ts:192](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L192)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `balanceOfUnderlying` | (`account`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `balanceOfUnderlying(address)` | (`account`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `comptroller` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `comptroller()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `exchangeRateCurrent` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `exchangeRateCurrent()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getCash` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getCash()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `mint` | (`mintAmount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `mint(uint256)` | (`mintAmount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `redeem` | (`redeemTokens`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `redeem(uint256)` | (`redeemTokens`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `underlying` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `underlying()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/ICToken.d.ts:95](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L95)

___

### interface

• **interface**: [`ICTokenInterface`](../interfaces/wrappers_ICToken.ICTokenInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/ICToken.d.ts:93](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L93)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `balanceOfUnderlying` | (`account`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `balanceOfUnderlying(address)` | (`account`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `comptroller` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `comptroller()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `exchangeRateCurrent` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `exchangeRateCurrent()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getCash` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getCash()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `mint` | (`mintAmount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `mint(uint256)` | (`mintAmount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `redeem` | (`redeemTokens`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `redeem(uint256)` | (`redeemTokens`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `underlying` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `underlying()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/ICToken.d.ts:224](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L224)

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

▸ **attach**(`addressOrName`): [`ICToken`](wrappers_ICToken.ICToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`ICToken`](wrappers_ICToken.ICToken.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/ICToken.d.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L54)

___

### balanceOfUnderlying

▸ **balanceOfUnderlying**(`account`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ICToken.d.ts:131](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L131)

___

### balanceOfUnderlying(address)

▸ **balanceOfUnderlying(address)**(`account`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ICToken.d.ts:133](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L133)

___

### comptroller

▸ **comptroller**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/ICToken.d.ts:138](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L138)

___

### comptroller()

▸ **comptroller()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/ICToken.d.ts:140](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L140)

___

### connect

▸ **connect**(`signerOrProvider`): [`ICToken`](wrappers_ICToken.ICToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`ICToken`](wrappers_ICToken.ICToken.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/ICToken.d.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L53)

___

### deployed

▸ **deployed**(): `Promise`<[`ICToken`](wrappers_ICToken.ICToken.md)\>

#### Returns

`Promise`<[`ICToken`](wrappers_ICToken.ICToken.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/ICToken.d.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L55)

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

### exchangeRateCurrent

▸ **exchangeRateCurrent**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ICToken.d.ts:142](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L142)

___

### exchangeRateCurrent()

▸ **exchangeRateCurrent()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ICToken.d.ts:144](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L144)

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

[src/wrappers/ICToken.d.ts:146](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L146)

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

[src/wrappers/ICToken.d.ts:148](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L148)

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

[src/wrappers/ICToken.d.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L57)

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

[src/wrappers/ICToken.d.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L80)

___

### mint

▸ **mint**(`mintAmount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mintAmount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ICToken.d.ts:150](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L150)

___

### mint(uint256)

▸ **mint(uint256)**(`mintAmount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mintAmount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ICToken.d.ts:152](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L152)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ICToken`](wrappers_ICToken.ICToken.md)

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

[`ICToken`](wrappers_ICToken.ICToken.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/ICToken.d.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L60)

▸ **off**(`eventName`, `listener`): [`ICToken`](wrappers_ICToken.ICToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ICToken`](wrappers_ICToken.ICToken.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/ICToken.d.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L81)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ICToken`](wrappers_ICToken.ICToken.md)

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

[`ICToken`](wrappers_ICToken.ICToken.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/ICToken.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L64)

▸ **on**(`eventName`, `listener`): [`ICToken`](wrappers_ICToken.ICToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ICToken`](wrappers_ICToken.ICToken.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/ICToken.d.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L82)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ICToken`](wrappers_ICToken.ICToken.md)

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

[`ICToken`](wrappers_ICToken.ICToken.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/ICToken.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L68)

▸ **once**(`eventName`, `listener`): [`ICToken`](wrappers_ICToken.ICToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ICToken`](wrappers_ICToken.ICToken.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/ICToken.d.ts:83](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L83)

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

[src/wrappers/ICToken.d.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L87)

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

[src/wrappers/ICToken.d.ts:154](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L154)

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

[src/wrappers/ICToken.d.ts:156](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L156)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`ICToken`](wrappers_ICToken.ICToken.md)

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

[`ICToken`](wrappers_ICToken.ICToken.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/ICToken.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L76)

▸ **removeAllListeners**(`eventName?`): [`ICToken`](wrappers_ICToken.ICToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`ICToken`](wrappers_ICToken.ICToken.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/ICToken.d.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L85)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ICToken`](wrappers_ICToken.ICToken.md)

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

[`ICToken`](wrappers_ICToken.ICToken.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/ICToken.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L72)

▸ **removeListener**(`eventName`, `listener`): [`ICToken`](wrappers_ICToken.ICToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ICToken`](wrappers_ICToken.ICToken.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/ICToken.d.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L84)

___

### underlying

▸ **underlying**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/ICToken.d.ts:158](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L158)

___

### underlying()

▸ **underlying()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/ICToken.d.ts:160](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/ICToken.d.ts#L160)

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
