[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/NoYield](../modules/wrappers_NoYield.md) / NoYield

# Class: NoYield

[wrappers/NoYield](../modules/wrappers_NoYield.md).NoYield

## Hierarchy

- `Contract`

  ↳ **`NoYield`**

## Table of contents

### Constructors

- [constructor](wrappers_NoYield.NoYield.md#constructor)

### Properties

- [\_deployedPromise](wrappers_NoYield.NoYield.md#_deployedpromise)
- [\_runningEvents](wrappers_NoYield.NoYield.md#_runningevents)
- [\_wrappedEmits](wrappers_NoYield.NoYield.md#_wrappedemits)
- [address](wrappers_NoYield.NoYield.md#address)
- [callStatic](wrappers_NoYield.NoYield.md#callstatic)
- [deployTransaction](wrappers_NoYield.NoYield.md#deploytransaction)
- [estimateGas](wrappers_NoYield.NoYield.md#estimategas)
- [filters](wrappers_NoYield.NoYield.md#filters)
- [functions](wrappers_NoYield.NoYield.md#functions)
- [interface](wrappers_NoYield.NoYield.md#interface)
- [populateTransaction](wrappers_NoYield.NoYield.md#populatetransaction)
- [provider](wrappers_NoYield.NoYield.md#provider)
- [resolvedAddress](wrappers_NoYield.NoYield.md#resolvedaddress)
- [signer](wrappers_NoYield.NoYield.md#signer)

### Methods

- [SAVINGS\_ACCOUNT](wrappers_NoYield.NoYield.md#savings_account)
- [SAVINGS\_ACCOUNT()](wrappers_NoYield.NoYield.md#savings_account())
- [TREASURY](wrappers_NoYield.NoYield.md#treasury)
- [TREASURY()](wrappers_NoYield.NoYield.md#treasury())
- [\_checkRunningEvents](wrappers_NoYield.NoYield.md#_checkrunningevents)
- [\_deployed](wrappers_NoYield.NoYield.md#_deployed)
- [\_wrapEvent](wrappers_NoYield.NoYield.md#_wrapevent)
- [attach](wrappers_NoYield.NoYield.md#attach)
- [connect](wrappers_NoYield.NoYield.md#connect)
- [deployed](wrappers_NoYield.NoYield.md#deployed)
- [emergencyWithdraw](wrappers_NoYield.NoYield.md#emergencywithdraw)
- [emergencyWithdraw(address,uint256)](wrappers_NoYield.NoYield.md#emergencywithdraw(address,uint256))
- [emit](wrappers_NoYield.NoYield.md#emit)
- [fallback](wrappers_NoYield.NoYield.md#fallback)
- [getSharesForTokens](wrappers_NoYield.NoYield.md#getsharesfortokens)
- [getSharesForTokens(uint256,address)](wrappers_NoYield.NoYield.md#getsharesfortokens(uint256,address))
- [getTokensForShares](wrappers_NoYield.NoYield.md#gettokensforshares)
- [getTokensForShares(uint256,address)](wrappers_NoYield.NoYield.md#gettokensforshares(uint256,address))
- [initialize](wrappers_NoYield.NoYield.md#initialize)
- [initialize(address)](wrappers_NoYield.NoYield.md#initialize(address))
- [liquidityToken](wrappers_NoYield.NoYield.md#liquiditytoken)
- [liquidityToken(address)](wrappers_NoYield.NoYield.md#liquiditytoken(address))
- [listenerCount](wrappers_NoYield.NoYield.md#listenercount)
- [listeners](wrappers_NoYield.NoYield.md#listeners)
- [lockTokens](wrappers_NoYield.NoYield.md#locktokens)
- [lockTokens(address,address,uint256)](wrappers_NoYield.NoYield.md#locktokens(address,address,uint256))
- [off](wrappers_NoYield.NoYield.md#off)
- [on](wrappers_NoYield.NoYield.md#on)
- [once](wrappers_NoYield.NoYield.md#once)
- [owner](wrappers_NoYield.NoYield.md#owner)
- [owner()](wrappers_NoYield.NoYield.md#owner())
- [queryFilter](wrappers_NoYield.NoYield.md#queryfilter)
- [removeAllListeners](wrappers_NoYield.NoYield.md#removealllisteners)
- [removeListener](wrappers_NoYield.NoYield.md#removelistener)
- [renounceOwnership](wrappers_NoYield.NoYield.md#renounceownership)
- [renounceOwnership()](wrappers_NoYield.NoYield.md#renounceownership())
- [transferOwnership](wrappers_NoYield.NoYield.md#transferownership)
- [transferOwnership(address)](wrappers_NoYield.NoYield.md#transferownership(address))
- [unlockShares](wrappers_NoYield.NoYield.md#unlockshares)
- [unlockShares(address,address,uint256)](wrappers_NoYield.NoYield.md#unlockshares(address,address,uint256))
- [unlockTokens](wrappers_NoYield.NoYield.md#unlocktokens)
- [unlockTokens(address,address,uint256)](wrappers_NoYield.NoYield.md#unlocktokens(address,address,uint256))
- [getContractAddress](wrappers_NoYield.NoYield.md#getcontractaddress)
- [getInterface](wrappers_NoYield.NoYield.md#getinterface)
- [isIndexed](wrappers_NoYield.NoYield.md#isindexed)

## Constructors

### constructor

• **new NoYield**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `SAVINGS_ACCOUNT` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `SAVINGS_ACCOUNT()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `TREASURY` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `TREASURY()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `emergencyWithdraw` | (`_asset`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `emergencyWithdraw(address,uint256)` | (`_asset`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getSharesForTokens` | (`amount`: `BigNumberish`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getSharesForTokens(uint256,address)` | (`amount`: `BigNumberish`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTokensForShares` | (`shares`: `BigNumberish`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTokensForShares(uint256,address)` | (`shares`: `BigNumberish`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `initialize` | (`_owner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialize(address)` | (`_owner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `liquidityToken` | (`_asset`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `liquidityToken(address)` | (`_asset`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `lockTokens` | (`user`: `string`, `asset`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `lockTokens(address,address,uint256)` | (`user`: `string`, `asset`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `renounceOwnership` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `renounceOwnership()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unlockShares` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `unlockShares(address,address,uint256)` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `unlockTokens` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `unlockTokens(address,address,uint256)` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/NoYield.d.ts:312](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L312)

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
| `SAVINGS_ACCOUNT` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `SAVINGS_ACCOUNT()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `TREASURY` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `TREASURY()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `emergencyWithdraw` | (`_asset`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `emergencyWithdraw(address,uint256)` | (`_asset`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getSharesForTokens` | (`amount`: `BigNumberish`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getSharesForTokens(uint256,address)` | (`amount`: `BigNumberish`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTokensForShares` | (`shares`: `BigNumberish`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTokensForShares(uint256,address)` | (`shares`: `BigNumberish`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `initialize` | (`_owner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initialize(address)` | (`_owner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `liquidityToken` | (`_asset`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `liquidityToken(address)` | (`_asset`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `lockTokens` | (`user`: `string`, `asset`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `lockTokens(address,address,uint256)` | (`user`: `string`, `asset`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unlockShares` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unlockShares(address,address,uint256)` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unlockTokens` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unlockTokens(address,address,uint256)` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/NoYield.d.ts:397](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L397)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `EmergencyWithdraw` | (`asset`: `string`, `withdrawTo`: `string`, `tokensReceived`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `BigNumber`], { `asset`: `string` ; `tokensReceived`: `BigNumber` ; `withdrawTo`: `string`  }\> |
| `LockedTokens` | (`user`: `string`, `investedTo`: `string`, `lpTokensReceived`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `BigNumber`], { `investedTo`: `string` ; `lpTokensReceived`: `BigNumber` ; `user`: `string`  }\> |
| `OwnershipTransferred` | (`previousOwner`: `string`, `newOwner`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`], { `newOwner`: `string` ; `previousOwner`: `string`  }\> |
| `SavingsAccountUpdated` | (`savingsAccount`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `savingsAccount`: `string`  }\> |
| `UnlockedShares` | (`asset`: `string`, `sharesReleased`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `BigNumber`], { `asset`: `string` ; `sharesReleased`: `BigNumber`  }\> |
| `UnlockedTokens` | (`investedTo`: `string`, `collateralReceived`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `BigNumber`], { `collateralReceived`: `BigNumber` ; `investedTo`: `string`  }\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/NoYield.d.ts:366](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L366)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `SAVINGS_ACCOUNT` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `SAVINGS_ACCOUNT()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `TREASURY` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `TREASURY()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `emergencyWithdraw` | (`_asset`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `emergencyWithdraw(address,uint256)` | (`_asset`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getSharesForTokens` | (`amount`: `BigNumberish`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getSharesForTokens(uint256,address)` | (`amount`: `BigNumberish`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getTokensForShares` | (`shares`: `BigNumberish`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getTokensForShares(uint256,address)` | (`shares`: `BigNumberish`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `initialize` | (`_owner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialize(address)` | (`_owner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `liquidityToken` | (`_asset`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `liquidityToken(address)` | (`_asset`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `lockTokens` | (`user`: `string`, `asset`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `lockTokens(address,address,uint256)` | (`user`: `string`, `asset`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unlockShares` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unlockShares(address,address,uint256)` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unlockTokens` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unlockTokens(address,address,uint256)` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/NoYield.d.ts:127](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L127)

___

### interface

• **interface**: [`NoYieldInterface`](../interfaces/wrappers_NoYield.NoYieldInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/NoYield.d.ts:125](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L125)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `SAVINGS_ACCOUNT` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `SAVINGS_ACCOUNT()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `TREASURY` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `TREASURY()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `emergencyWithdraw` | (`_asset`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `emergencyWithdraw(address,uint256)` | (`_asset`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getSharesForTokens` | (`amount`: `BigNumberish`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getSharesForTokens(uint256,address)` | (`amount`: `BigNumberish`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTokensForShares` | (`shares`: `BigNumberish`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTokensForShares(uint256,address)` | (`shares`: `BigNumberish`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `initialize` | (`_owner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialize(address)` | (`_owner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `liquidityToken` | (`_asset`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `liquidityToken(address)` | (`_asset`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `lockTokens` | (`user`: `string`, `asset`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `lockTokens(address,address,uint256)` | (`user`: `string`, `asset`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unlockShares` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unlockShares(address,address,uint256)` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unlockTokens` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unlockTokens(address,address,uint256)` | (`asset`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/NoYield.d.ts:489](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L489)

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

### SAVINGS\_ACCOUNT

▸ **SAVINGS_ACCOUNT**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/NoYield.d.ts:222](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L222)

___

### SAVINGS\_ACCOUNT()

▸ **SAVINGS_ACCOUNT()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/NoYield.d.ts:224](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L224)

___

### TREASURY

▸ **TREASURY**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/NoYield.d.ts:226](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L226)

___

### TREASURY()

▸ **TREASURY()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/NoYield.d.ts:228](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L228)

___

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

▸ **attach**(`addressOrName`): [`NoYield`](wrappers_NoYield.NoYield.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`NoYield`](wrappers_NoYield.NoYield.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/NoYield.d.ts:86](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L86)

___

### connect

▸ **connect**(`signerOrProvider`): [`NoYield`](wrappers_NoYield.NoYield.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`NoYield`](wrappers_NoYield.NoYield.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/NoYield.d.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L85)

___

### deployed

▸ **deployed**(): `Promise`<[`NoYield`](wrappers_NoYield.NoYield.md)\>

#### Returns

`Promise`<[`NoYield`](wrappers_NoYield.NoYield.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/NoYield.d.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L87)

___

### emergencyWithdraw

▸ **emergencyWithdraw**(`_asset`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_asset` | `string` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/NoYield.d.ts:230](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L230)

___

### emergencyWithdraw(address,uint256)

▸ **emergencyWithdraw(address,uint256)**(`_asset`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_asset` | `string` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/NoYield.d.ts:236](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L236)

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

▸ **getSharesForTokens**(`amount`, `arg1`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BigNumberish` |
| `arg1` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/NoYield.d.ts:242](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L242)

___

### getSharesForTokens(uint256,address)

▸ **getSharesForTokens(uint256,address)**(`amount`, `arg1`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BigNumberish` |
| `arg1` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/NoYield.d.ts:244](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L244)

___

### getTokensForShares

▸ **getTokensForShares**(`shares`, `arg1`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shares` | `BigNumberish` |
| `arg1` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/NoYield.d.ts:246](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L246)

___

### getTokensForShares(uint256,address)

▸ **getTokensForShares(uint256,address)**(`shares`, `arg1`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shares` | `BigNumberish` |
| `arg1` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/NoYield.d.ts:248](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L248)

___

### initialize

▸ **initialize**(`_owner`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_owner` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/NoYield.d.ts:250](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L250)

___

### initialize(address)

▸ **initialize(address)**(`_owner`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_owner` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/NoYield.d.ts:252](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L252)

___

### liquidityToken

▸ **liquidityToken**(`_asset`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_asset` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/NoYield.d.ts:254](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L254)

___

### liquidityToken(address)

▸ **liquidityToken(address)**(`_asset`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_asset` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/NoYield.d.ts:256](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L256)

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

[src/wrappers/NoYield.d.ts:89](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L89)

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

[src/wrappers/NoYield.d.ts:112](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L112)

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

[src/wrappers/NoYield.d.ts:258](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L258)

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

[src/wrappers/NoYield.d.ts:265](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L265)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`NoYield`](wrappers_NoYield.NoYield.md)

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

[`NoYield`](wrappers_NoYield.NoYield.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/NoYield.d.ts:92](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L92)

▸ **off**(`eventName`, `listener`): [`NoYield`](wrappers_NoYield.NoYield.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`NoYield`](wrappers_NoYield.NoYield.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/NoYield.d.ts:113](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L113)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`NoYield`](wrappers_NoYield.NoYield.md)

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

[`NoYield`](wrappers_NoYield.NoYield.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/NoYield.d.ts:96](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L96)

▸ **on**(`eventName`, `listener`): [`NoYield`](wrappers_NoYield.NoYield.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`NoYield`](wrappers_NoYield.NoYield.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/NoYield.d.ts:114](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L114)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`NoYield`](wrappers_NoYield.NoYield.md)

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

[`NoYield`](wrappers_NoYield.NoYield.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/NoYield.d.ts:100](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L100)

▸ **once**(`eventName`, `listener`): [`NoYield`](wrappers_NoYield.NoYield.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`NoYield`](wrappers_NoYield.NoYield.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/NoYield.d.ts:115](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L115)

___

### owner

▸ **owner**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/NoYield.d.ts:272](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L272)

___

### owner()

▸ **owner()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/NoYield.d.ts:274](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L274)

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

[src/wrappers/NoYield.d.ts:119](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L119)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`NoYield`](wrappers_NoYield.NoYield.md)

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

[`NoYield`](wrappers_NoYield.NoYield.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/NoYield.d.ts:108](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L108)

▸ **removeAllListeners**(`eventName?`): [`NoYield`](wrappers_NoYield.NoYield.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`NoYield`](wrappers_NoYield.NoYield.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/NoYield.d.ts:117](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L117)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`NoYield`](wrappers_NoYield.NoYield.md)

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

[`NoYield`](wrappers_NoYield.NoYield.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/NoYield.d.ts:104](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L104)

▸ **removeListener**(`eventName`, `listener`): [`NoYield`](wrappers_NoYield.NoYield.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`NoYield`](wrappers_NoYield.NoYield.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/NoYield.d.ts:116](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L116)

___

### renounceOwnership

▸ **renounceOwnership**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/NoYield.d.ts:276](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L276)

___

### renounceOwnership()

▸ **renounceOwnership()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/NoYield.d.ts:278](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L278)

___

### transferOwnership

▸ **transferOwnership**(`newOwner`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `newOwner` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/NoYield.d.ts:280](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L280)

___

### transferOwnership(address)

▸ **transferOwnership(address)**(`newOwner`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `newOwner` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/NoYield.d.ts:282](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L282)

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

[src/wrappers/NoYield.d.ts:284](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L284)

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

[src/wrappers/NoYield.d.ts:291](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L291)

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

[src/wrappers/NoYield.d.ts:298](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L298)

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

[src/wrappers/NoYield.d.ts:305](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/NoYield.d.ts#L305)

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
