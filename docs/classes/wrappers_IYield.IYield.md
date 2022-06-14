[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/IYield](../modules/wrappers_IYield.md) / IYield

# Class: IYield

[wrappers/IYield](../modules/wrappers_IYield.md).IYield

## Hierarchy

- `Contract`

  ↳ **`IYield`**

## Table of contents

### Constructors

- [constructor](wrappers_IYield.IYield.md#constructor)

### Properties

- [\_deployedPromise](wrappers_IYield.IYield.md#_deployedpromise)
- [\_runningEvents](wrappers_IYield.IYield.md#_runningevents)
- [\_wrappedEmits](wrappers_IYield.IYield.md#_wrappedemits)
- [address](wrappers_IYield.IYield.md#address)
- [callStatic](wrappers_IYield.IYield.md#callstatic)
- [deployTransaction](wrappers_IYield.IYield.md#deploytransaction)
- [estimateGas](wrappers_IYield.IYield.md#estimategas)
- [filters](wrappers_IYield.IYield.md#filters)
- [functions](wrappers_IYield.IYield.md#functions)
- [interface](wrappers_IYield.IYield.md#interface)
- [populateTransaction](wrappers_IYield.IYield.md#populatetransaction)
- [provider](wrappers_IYield.IYield.md#provider)
- [resolvedAddress](wrappers_IYield.IYield.md#resolvedaddress)
- [signer](wrappers_IYield.IYield.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_IYield.IYield.md#_checkrunningevents)
- [\_deployed](wrappers_IYield.IYield.md#_deployed)
- [\_wrapEvent](wrappers_IYield.IYield.md#_wrapevent)
- [attach](wrappers_IYield.IYield.md#attach)
- [connect](wrappers_IYield.IYield.md#connect)
- [deployed](wrappers_IYield.IYield.md#deployed)
- [emit](wrappers_IYield.IYield.md#emit)
- [fallback](wrappers_IYield.IYield.md#fallback)
- [getSharesForTokens](wrappers_IYield.IYield.md#getsharesfortokens)
- [getSharesForTokens(uint256,address)](wrappers_IYield.IYield.md#getsharesfortokens(uint256,address))
- [getTokensForShares](wrappers_IYield.IYield.md#gettokensforshares)
- [getTokensForShares(uint256,address)](wrappers_IYield.IYield.md#gettokensforshares(uint256,address))
- [liquidityToken](wrappers_IYield.IYield.md#liquiditytoken)
- [liquidityToken(address)](wrappers_IYield.IYield.md#liquiditytoken(address))
- [listenerCount](wrappers_IYield.IYield.md#listenercount)
- [listeners](wrappers_IYield.IYield.md#listeners)
- [lockTokens](wrappers_IYield.IYield.md#locktokens)
- [lockTokens(address,address,uint256)](wrappers_IYield.IYield.md#locktokens(address,address,uint256))
- [off](wrappers_IYield.IYield.md#off)
- [on](wrappers_IYield.IYield.md#on)
- [once](wrappers_IYield.IYield.md#once)
- [queryFilter](wrappers_IYield.IYield.md#queryfilter)
- [removeAllListeners](wrappers_IYield.IYield.md#removealllisteners)
- [removeListener](wrappers_IYield.IYield.md#removelistener)
- [unlockShares](wrappers_IYield.IYield.md#unlockshares)
- [unlockShares(address,address,uint256)](wrappers_IYield.IYield.md#unlockshares(address,address,uint256))
- [unlockTokens](wrappers_IYield.IYield.md#unlocktokens)
- [unlockTokens(address,address,uint256)](wrappers_IYield.IYield.md#unlocktokens(address,address,uint256))
- [getContractAddress](wrappers_IYield.IYield.md#getcontractaddress)
- [getInterface](wrappers_IYield.IYield.md#getinterface)
- [isIndexed](wrappers_IYield.IYield.md#isindexed)

## Constructors

### constructor

• **new IYield**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `getSharesForTokens` | (`amount`: `BigNumberish`, `asset`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getSharesForTokens(uint256,address)` | (`amount`: `BigNumberish`, `asset`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTokensForShares` | (`shares`: `BigNumberish`, `asset`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTokensForShares(uint256,address)` | (`shares`: `BigNumberish`, `asset`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `liquidityToken` | (`asset`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `liquidityToken(address)` | (`asset`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `lockTokens` | (`user`: `string`, `asset`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `lockTokens(address,address,uint256)` | (`user`: `string`, `asset`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `unlockShares` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `unlockShares(address,address,uint256)` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `unlockTokens` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `unlockTokens(address,address,uint256)` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/IYield.d.ts:244](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L244)

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
| `getSharesForTokens` | (`amount`: `BigNumberish`, `asset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getSharesForTokens(uint256,address)` | (`amount`: `BigNumberish`, `asset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getTokensForShares` | (`shares`: `BigNumberish`, `asset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getTokensForShares(uint256,address)` | (`shares`: `BigNumberish`, `asset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `liquidityToken` | (`asset`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `liquidityToken(address)` | (`asset`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `lockTokens` | (`user`: `string`, `asset`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `lockTokens(address,address,uint256)` | (`user`: `string`, `asset`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unlockShares` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unlockShares(address,address,uint256)` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unlockTokens` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unlockTokens(address,address,uint256)` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/IYield.d.ts:290](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L290)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `LockedTokens` | (`user`: `string`, `investedTo`: `string`, `lpTokensReceived`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `BigNumber`], { `investedTo`: `string` ; `lpTokensReceived`: `BigNumber` ; `user`: `string`  }\> |
| `SavingsAccountUpdated` | (`savingsAccount`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `savingsAccount`: `string`  }\> |
| `UnlockedShares` | (`asset`: `string`, `sharesReleased`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `BigNumber`], { `asset`: `string` ; `sharesReleased`: `BigNumber`  }\> |
| `UnlockedTokens` | (`investedTo`: `string`, `collateralReceived`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `BigNumber`], { `collateralReceived`: `BigNumber` ; `investedTo`: `string`  }\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/IYield.d.ts:270](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L270)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getSharesForTokens` | (`amount`: `BigNumberish`, `asset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getSharesForTokens(uint256,address)` | (`amount`: `BigNumberish`, `asset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getTokensForShares` | (`shares`: `BigNumberish`, `asset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getTokensForShares(uint256,address)` | (`shares`: `BigNumberish`, `asset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `liquidityToken` | (`asset`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `tokenAddress`: `string`  }\> |
| `liquidityToken(address)` | (`asset`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `tokenAddress`: `string`  }\> |
| `lockTokens` | (`user`: `string`, `asset`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `lockTokens(address,address,uint256)` | (`user`: `string`, `asset`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unlockShares` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unlockShares(address,address,uint256)` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unlockTokens` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unlockTokens(address,address,uint256)` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/IYield.d.ts:102](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L102)

___

### interface

• **interface**: [`IYieldInterface`](../interfaces/wrappers_IYield.IYieldInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/IYield.d.ts:100](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L100)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getSharesForTokens` | (`amount`: `BigNumberish`, `asset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getSharesForTokens(uint256,address)` | (`amount`: `BigNumberish`, `asset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getTokensForShares` | (`shares`: `BigNumberish`, `asset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getTokensForShares(uint256,address)` | (`shares`: `BigNumberish`, `asset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `liquidityToken` | (`asset`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `liquidityToken(address)` | (`asset`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `lockTokens` | (`user`: `string`, `asset`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `lockTokens(address,address,uint256)` | (`user`: `string`, `asset`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unlockShares` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unlockShares(address,address,uint256)` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unlockTokens` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unlockTokens(address,address,uint256)` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/IYield.d.ts:362](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L362)

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

▸ **attach**(`addressOrName`): [`IYield`](wrappers_IYield.IYield.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IYield`](wrappers_IYield.IYield.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/IYield.d.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L61)

___

### connect

▸ **connect**(`signerOrProvider`): [`IYield`](wrappers_IYield.IYield.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IYield`](wrappers_IYield.IYield.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/IYield.d.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L60)

___

### deployed

▸ **deployed**(): `Promise`<[`IYield`](wrappers_IYield.IYield.md)\>

#### Returns

`Promise`<[`IYield`](wrappers_IYield.IYield.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/IYield.d.ts:62](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L62)

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

### getSharesForTokens

▸ **getSharesForTokens**(`amount`, `asset`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BigNumberish` |
| `asset` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IYield.d.ts:174](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L174)

___

### getSharesForTokens(uint256,address)

▸ **getSharesForTokens(uint256,address)**(`amount`, `asset`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BigNumberish` |
| `asset` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IYield.d.ts:180](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L180)

___

### getTokensForShares

▸ **getTokensForShares**(`shares`, `asset`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shares` | `BigNumberish` |
| `asset` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IYield.d.ts:186](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L186)

___

### getTokensForShares(uint256,address)

▸ **getTokensForShares(uint256,address)**(`shares`, `asset`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shares` | `BigNumberish` |
| `asset` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IYield.d.ts:192](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L192)

___

### liquidityToken

▸ **liquidityToken**(`asset`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `asset` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/IYield.d.ts:198](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L198)

___

### liquidityToken(address)

▸ **liquidityToken(address)**(`asset`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `asset` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/IYield.d.ts:200](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L200)

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

[src/wrappers/IYield.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L64)

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

[src/wrappers/IYield.d.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L87)

___

### lockTokens

▸ **lockTokens**(`user`, `asset`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |
| `asset` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IYield.d.ts:202](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L202)

___

### lockTokens(address,address,uint256)

▸ **lockTokens(address,address,uint256)**(`user`, `asset`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |
| `asset` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IYield.d.ts:209](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L209)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IYield`](wrappers_IYield.IYield.md)

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

[`IYield`](wrappers_IYield.IYield.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IYield.d.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L67)

▸ **off**(`eventName`, `listener`): [`IYield`](wrappers_IYield.IYield.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IYield`](wrappers_IYield.IYield.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IYield.d.ts:88](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L88)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IYield`](wrappers_IYield.IYield.md)

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

[`IYield`](wrappers_IYield.IYield.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IYield.d.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L71)

▸ **on**(`eventName`, `listener`): [`IYield`](wrappers_IYield.IYield.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IYield`](wrappers_IYield.IYield.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IYield.d.ts:89](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L89)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IYield`](wrappers_IYield.IYield.md)

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

[`IYield`](wrappers_IYield.IYield.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IYield.d.ts:75](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L75)

▸ **once**(`eventName`, `listener`): [`IYield`](wrappers_IYield.IYield.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IYield`](wrappers_IYield.IYield.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IYield.d.ts:90](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L90)

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

[src/wrappers/IYield.d.ts:94](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L94)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`IYield`](wrappers_IYield.IYield.md)

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

[`IYield`](wrappers_IYield.IYield.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IYield.d.ts:83](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L83)

▸ **removeAllListeners**(`eventName?`): [`IYield`](wrappers_IYield.IYield.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IYield`](wrappers_IYield.IYield.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IYield.d.ts:92](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L92)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IYield`](wrappers_IYield.IYield.md)

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

[`IYield`](wrappers_IYield.IYield.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IYield.d.ts:79](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L79)

▸ **removeListener**(`eventName`, `listener`): [`IYield`](wrappers_IYield.IYield.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IYield`](wrappers_IYield.IYield.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IYield.d.ts:91](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L91)

___

### unlockShares

▸ **unlockShares**(`asset`, `to`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `asset` | `string` |
| `to` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IYield.d.ts:216](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L216)

___

### unlockShares(address,address,uint256)

▸ **unlockShares(address,address,uint256)**(`asset`, `to`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `asset` | `string` |
| `to` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IYield.d.ts:223](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L223)

___

### unlockTokens

▸ **unlockTokens**(`asset`, `to`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `asset` | `string` |
| `to` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IYield.d.ts:230](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L230)

___

### unlockTokens(address,address,uint256)

▸ **unlockTokens(address,address,uint256)**(`asset`, `to`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `asset` | `string` |
| `to` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IYield.d.ts:237](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IYield.d.ts#L237)

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
