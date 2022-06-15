[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/CompoundYield](../modules/wrappers_CompoundYield.md) / CompoundYield

# Class: CompoundYield

[wrappers/CompoundYield](../modules/wrappers_CompoundYield.md).CompoundYield

## Hierarchy

- `Contract`

  ↳ **`CompoundYield`**

## Table of contents

### Constructors

- [constructor](wrappers_CompoundYield.CompoundYield.md#constructor)

### Properties

- [\_deployedPromise](wrappers_CompoundYield.CompoundYield.md#_deployedpromise)
- [\_runningEvents](wrappers_CompoundYield.CompoundYield.md#_runningevents)
- [\_wrappedEmits](wrappers_CompoundYield.CompoundYield.md#_wrappedemits)
- [address](wrappers_CompoundYield.CompoundYield.md#address)
- [callStatic](wrappers_CompoundYield.CompoundYield.md#callstatic)
- [deployTransaction](wrappers_CompoundYield.CompoundYield.md#deploytransaction)
- [estimateGas](wrappers_CompoundYield.CompoundYield.md#estimategas)
- [filters](wrappers_CompoundYield.CompoundYield.md#filters)
- [functions](wrappers_CompoundYield.CompoundYield.md#functions)
- [interface](wrappers_CompoundYield.CompoundYield.md#interface)
- [populateTransaction](wrappers_CompoundYield.CompoundYield.md#populatetransaction)
- [provider](wrappers_CompoundYield.CompoundYield.md#provider)
- [resolvedAddress](wrappers_CompoundYield.CompoundYield.md#resolvedaddress)
- [signer](wrappers_CompoundYield.CompoundYield.md#signer)

### Methods

- [SAVINGS\_ACCOUNT](wrappers_CompoundYield.CompoundYield.md#savings_account)
- [SAVINGS\_ACCOUNT()](wrappers_CompoundYield.CompoundYield.md#savings_account())
- [TREASURY](wrappers_CompoundYield.CompoundYield.md#treasury)
- [TREASURY()](wrappers_CompoundYield.CompoundYield.md#treasury())
- [WETH](wrappers_CompoundYield.CompoundYield.md#weth)
- [WETH()](wrappers_CompoundYield.CompoundYield.md#weth())
- [\_checkRunningEvents](wrappers_CompoundYield.CompoundYield.md#_checkrunningevents)
- [\_deployed](wrappers_CompoundYield.CompoundYield.md#_deployed)
- [\_wrapEvent](wrappers_CompoundYield.CompoundYield.md#_wrapevent)
- [addTokenAddress](wrappers_CompoundYield.CompoundYield.md#addtokenaddress)
- [addTokenAddress(address,address)](wrappers_CompoundYield.CompoundYield.md#addtokenaddress(address,address))
- [attach](wrappers_CompoundYield.CompoundYield.md#attach)
- [claimCompTokens](wrappers_CompoundYield.CompoundYield.md#claimcomptokens)
- [claimCompTokens(address,address)](wrappers_CompoundYield.CompoundYield.md#claimcomptokens(address,address))
- [connect](wrappers_CompoundYield.CompoundYield.md#connect)
- [deployed](wrappers_CompoundYield.CompoundYield.md#deployed)
- [depositLimit](wrappers_CompoundYield.CompoundYield.md#depositlimit)
- [depositLimit(address)](wrappers_CompoundYield.CompoundYield.md#depositlimit(address))
- [emergencyWithdraw](wrappers_CompoundYield.CompoundYield.md#emergencywithdraw)
- [emergencyWithdraw(address,address)](wrappers_CompoundYield.CompoundYield.md#emergencywithdraw(address,address))
- [emit](wrappers_CompoundYield.CompoundYield.md#emit)
- [fallback](wrappers_CompoundYield.CompoundYield.md#fallback)
- [forceUpdateTokenAddress](wrappers_CompoundYield.CompoundYield.md#forceupdatetokenaddress)
- [forceUpdateTokenAddress(address,address)](wrappers_CompoundYield.CompoundYield.md#forceupdatetokenaddress(address,address))
- [getSharesForTokens](wrappers_CompoundYield.CompoundYield.md#getsharesfortokens)
- [getSharesForTokens(uint256,address)](wrappers_CompoundYield.CompoundYield.md#getsharesfortokens(uint256,address))
- [getTokensForShares](wrappers_CompoundYield.CompoundYield.md#gettokensforshares)
- [getTokensForShares(uint256,address)](wrappers_CompoundYield.CompoundYield.md#gettokensforshares(uint256,address))
- [initialize](wrappers_CompoundYield.CompoundYield.md#initialize)
- [initialize(address)](wrappers_CompoundYield.CompoundYield.md#initialize(address))
- [liquidityToken](wrappers_CompoundYield.CompoundYield.md#liquiditytoken)
- [liquidityToken(address)](wrappers_CompoundYield.CompoundYield.md#liquiditytoken(address))
- [listenerCount](wrappers_CompoundYield.CompoundYield.md#listenercount)
- [listeners](wrappers_CompoundYield.CompoundYield.md#listeners)
- [lockTokens](wrappers_CompoundYield.CompoundYield.md#locktokens)
- [lockTokens(address,address,uint256)](wrappers_CompoundYield.CompoundYield.md#locktokens(address,address,uint256))
- [off](wrappers_CompoundYield.CompoundYield.md#off)
- [on](wrappers_CompoundYield.CompoundYield.md#on)
- [once](wrappers_CompoundYield.CompoundYield.md#once)
- [owner](wrappers_CompoundYield.CompoundYield.md#owner)
- [owner()](wrappers_CompoundYield.CompoundYield.md#owner())
- [queryFilter](wrappers_CompoundYield.CompoundYield.md#queryfilter)
- [removeAllListeners](wrappers_CompoundYield.CompoundYield.md#removealllisteners)
- [removeListener](wrappers_CompoundYield.CompoundYield.md#removelistener)
- [removeTokenAddress](wrappers_CompoundYield.CompoundYield.md#removetokenaddress)
- [removeTokenAddress(address,address)](wrappers_CompoundYield.CompoundYield.md#removetokenaddress(address,address))
- [renounceOwnership](wrappers_CompoundYield.CompoundYield.md#renounceownership)
- [renounceOwnership()](wrappers_CompoundYield.CompoundYield.md#renounceownership())
- [setDepositLimit](wrappers_CompoundYield.CompoundYield.md#setdepositlimit)
- [setDepositLimit(address,uint256)](wrappers_CompoundYield.CompoundYield.md#setdepositlimit(address,uint256))
- [transferOwnership](wrappers_CompoundYield.CompoundYield.md#transferownership)
- [transferOwnership(address)](wrappers_CompoundYield.CompoundYield.md#transferownership(address))
- [unlockShares](wrappers_CompoundYield.CompoundYield.md#unlockshares)
- [unlockShares(address,address,uint256)](wrappers_CompoundYield.CompoundYield.md#unlockshares(address,address,uint256))
- [unlockTokens](wrappers_CompoundYield.CompoundYield.md#unlocktokens)
- [unlockTokens(address,address,uint256)](wrappers_CompoundYield.CompoundYield.md#unlocktokens(address,address,uint256))
- [getContractAddress](wrappers_CompoundYield.CompoundYield.md#getcontractaddress)
- [getInterface](wrappers_CompoundYield.CompoundYield.md#getinterface)
- [isIndexed](wrappers_CompoundYield.CompoundYield.md#isindexed)

## Constructors

### constructor

• **new CompoundYield**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `WETH` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `WETH()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `addTokenAddress` | (`_asset`: `string`, `_liquidityToken`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `addTokenAddress(address,address)` | (`_asset`: `string`, `_liquidityToken`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `claimCompTokens` | (`_comptroller`: `string`, `_compToken`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `claimCompTokens(address,address)` | (`_comptroller`: `string`, `_compToken`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `depositLimit` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `depositLimit(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `emergencyWithdraw` | (`_asset`: `string`, `_wallet`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `emergencyWithdraw(address,address)` | (`_asset`: `string`, `_wallet`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `forceUpdateTokenAddress` | (`_asset`: `string`, `_liquidityToken`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `forceUpdateTokenAddress(address,address)` | (`_asset`: `string`, `_liquidityToken`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getSharesForTokens` | (`_amount`: `BigNumberish`, `_asset`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getSharesForTokens(uint256,address)` | (`_amount`: `BigNumberish`, `_asset`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTokensForShares` | (`_shares`: `BigNumberish`, `_asset`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTokensForShares(uint256,address)` | (`_shares`: `BigNumberish`, `_asset`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `initialize` | (`_owner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialize(address)` | (`_owner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `liquidityToken` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `liquidityToken(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `lockTokens` | (`_user`: `string`, `_asset`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `lockTokens(address,address,uint256)` | (`_user`: `string`, `_asset`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `removeTokenAddress` | (`_asset`: `string`, `_liquidityToken`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `removeTokenAddress(address,address)` | (`_asset`: `string`, `_liquidityToken`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `renounceOwnership` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `renounceOwnership()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setDepositLimit` | (`_asset`: `string`, `_limit`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setDepositLimit(address,uint256)` | (`_asset`: `string`, `_limit`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unlockShares` | (`_asset`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `unlockShares(address,address,uint256)` | (`_asset`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `unlockTokens` | (`_asset`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `unlockTokens(address,address,uint256)` | (`_asset`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/CompoundYield.d.ts:503](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L503)

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
| `WETH` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `WETH()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `addTokenAddress` | (`_asset`: `string`, `_liquidityToken`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `addTokenAddress(address,address)` | (`_asset`: `string`, `_liquidityToken`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `claimCompTokens` | (`_comptroller`: `string`, `_compToken`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `claimCompTokens(address,address)` | (`_comptroller`: `string`, `_compToken`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `depositLimit` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `depositLimit(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `emergencyWithdraw` | (`_asset`: `string`, `_wallet`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `emergencyWithdraw(address,address)` | (`_asset`: `string`, `_wallet`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `forceUpdateTokenAddress` | (`_asset`: `string`, `_liquidityToken`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `forceUpdateTokenAddress(address,address)` | (`_asset`: `string`, `_liquidityToken`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getSharesForTokens` | (`_amount`: `BigNumberish`, `_asset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getSharesForTokens(uint256,address)` | (`_amount`: `BigNumberish`, `_asset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getTokensForShares` | (`_shares`: `BigNumberish`, `_asset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getTokensForShares(uint256,address)` | (`_shares`: `BigNumberish`, `_asset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initialize` | (`_owner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initialize(address)` | (`_owner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `liquidityToken` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `liquidityToken(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `lockTokens` | (`_user`: `string`, `_asset`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `lockTokens(address,address,uint256)` | (`_user`: `string`, `_asset`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `removeTokenAddress` | (`_asset`: `string`, `_liquidityToken`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `removeTokenAddress(address,address)` | (`_asset`: `string`, `_liquidityToken`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setDepositLimit` | (`_asset`: `string`, `_limit`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setDepositLimit(address,uint256)` | (`_asset`: `string`, `_limit`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unlockShares` | (`_asset`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unlockShares(address,address,uint256)` | (`_asset`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unlockTokens` | (`_asset`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unlockTokens(address,address,uint256)` | (`_asset`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/CompoundYield.d.ts:636](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L636)

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
| `TokenAddressesUpdated` | (`asset`: `string`, `protocolToken`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`], { `asset`: `string` ; `protocolToken`: `string`  }\> |
| `UnlockedShares` | (`asset`: `string`, `sharesReleased`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `BigNumber`], { `asset`: `string` ; `sharesReleased`: `BigNumber`  }\> |
| `UnlockedTokens` | (`investedTo`: `string`, `collateralReceived`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `BigNumber`], { `collateralReceived`: `BigNumber` ; `investedTo`: `string`  }\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/CompoundYield.d.ts:600](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L600)

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
| `WETH` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `WETH()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `addTokenAddress` | (`_asset`: `string`, `_liquidityToken`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `addTokenAddress(address,address)` | (`_asset`: `string`, `_liquidityToken`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `claimCompTokens` | (`_comptroller`: `string`, `_compToken`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `claimCompTokens(address,address)` | (`_comptroller`: `string`, `_compToken`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `depositLimit` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `depositLimit(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `emergencyWithdraw` | (`_asset`: `string`, `_wallet`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `emergencyWithdraw(address,address)` | (`_asset`: `string`, `_wallet`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `forceUpdateTokenAddress` | (`_asset`: `string`, `_liquidityToken`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `forceUpdateTokenAddress(address,address)` | (`_asset`: `string`, `_liquidityToken`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getSharesForTokens` | (`_amount`: `BigNumberish`, `_asset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getSharesForTokens(uint256,address)` | (`_amount`: `BigNumberish`, `_asset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getTokensForShares` | (`_shares`: `BigNumberish`, `_asset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getTokensForShares(uint256,address)` | (`_shares`: `BigNumberish`, `_asset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialize` | (`_owner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialize(address)` | (`_owner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `liquidityToken` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `liquidityToken(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `lockTokens` | (`_user`: `string`, `_asset`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `lockTokens(address,address,uint256)` | (`_user`: `string`, `_asset`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `removeTokenAddress` | (`_asset`: `string`, `_liquidityToken`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `removeTokenAddress(address,address)` | (`_asset`: `string`, `_liquidityToken`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setDepositLimit` | (`_asset`: `string`, `_limit`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setDepositLimit(address,uint256)` | (`_asset`: `string`, `_limit`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unlockShares` | (`_asset`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unlockShares(address,address,uint256)` | (`_asset`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unlockTokens` | (`_asset`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unlockTokens(address,address,uint256)` | (`_asset`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/CompoundYield.d.ts:150](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L150)

___

### interface

• **interface**: [`CompoundYieldInterface`](../interfaces/wrappers_CompoundYield.CompoundYieldInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/CompoundYield.d.ts:148](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L148)

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
| `WETH` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `WETH()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `addTokenAddress` | (`_asset`: `string`, `_liquidityToken`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `addTokenAddress(address,address)` | (`_asset`: `string`, `_liquidityToken`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `claimCompTokens` | (`_comptroller`: `string`, `_compToken`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `claimCompTokens(address,address)` | (`_comptroller`: `string`, `_compToken`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `depositLimit` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `depositLimit(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `emergencyWithdraw` | (`_asset`: `string`, `_wallet`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `emergencyWithdraw(address,address)` | (`_asset`: `string`, `_wallet`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `forceUpdateTokenAddress` | (`_asset`: `string`, `_liquidityToken`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `forceUpdateTokenAddress(address,address)` | (`_asset`: `string`, `_liquidityToken`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getSharesForTokens` | (`_amount`: `BigNumberish`, `_asset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getSharesForTokens(uint256,address)` | (`_amount`: `BigNumberish`, `_asset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getTokensForShares` | (`_shares`: `BigNumberish`, `_asset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getTokensForShares(uint256,address)` | (`_shares`: `BigNumberish`, `_asset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialize` | (`_owner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialize(address)` | (`_owner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `liquidityToken` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `liquidityToken(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `lockTokens` | (`_user`: `string`, `_asset`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `lockTokens(address,address,uint256)` | (`_user`: `string`, `_asset`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `removeTokenAddress` | (`_asset`: `string`, `_liquidityToken`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `removeTokenAddress(address,address)` | (`_asset`: `string`, `_liquidityToken`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setDepositLimit` | (`_asset`: `string`, `_limit`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setDepositLimit(address,uint256)` | (`_asset`: `string`, `_limit`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unlockShares` | (`_asset`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unlockShares(address,address,uint256)` | (`_asset`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unlockTokens` | (`_asset`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unlockTokens(address,address,uint256)` | (`_asset`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/CompoundYield.d.ts:804](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L804)

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

[src/wrappers/CompoundYield.d.ts:329](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L329)

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

[src/wrappers/CompoundYield.d.ts:331](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L331)

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

[src/wrappers/CompoundYield.d.ts:333](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L333)

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

[src/wrappers/CompoundYield.d.ts:335](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L335)

___

### WETH

▸ **WETH**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/CompoundYield.d.ts:337](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L337)

___

### WETH()

▸ **WETH()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/CompoundYield.d.ts:339](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L339)

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

### addTokenAddress

▸ **addTokenAddress**(`_asset`, `_liquidityToken`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_asset` | `string` |
| `_liquidityToken` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CompoundYield.d.ts:341](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L341)

___

### addTokenAddress(address,address)

▸ **addTokenAddress(address,address)**(`_asset`, `_liquidityToken`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_asset` | `string` |
| `_liquidityToken` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CompoundYield.d.ts:347](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L347)

___

### attach

▸ **attach**(`addressOrName`): [`CompoundYield`](wrappers_CompoundYield.CompoundYield.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`CompoundYield`](wrappers_CompoundYield.CompoundYield.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/CompoundYield.d.ts:109](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L109)

___

### claimCompTokens

▸ **claimCompTokens**(`_comptroller`, `_compToken`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_comptroller` | `string` |
| `_compToken` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CompoundYield.d.ts:353](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L353)

___

### claimCompTokens(address,address)

▸ **claimCompTokens(address,address)**(`_comptroller`, `_compToken`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_comptroller` | `string` |
| `_compToken` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CompoundYield.d.ts:359](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L359)

___

### connect

▸ **connect**(`signerOrProvider`): [`CompoundYield`](wrappers_CompoundYield.CompoundYield.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`CompoundYield`](wrappers_CompoundYield.CompoundYield.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/CompoundYield.d.ts:108](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L108)

___

### deployed

▸ **deployed**(): `Promise`<[`CompoundYield`](wrappers_CompoundYield.CompoundYield.md)\>

#### Returns

`Promise`<[`CompoundYield`](wrappers_CompoundYield.CompoundYield.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/CompoundYield.d.ts:110](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L110)

___

### depositLimit

▸ **depositLimit**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/CompoundYield.d.ts:365](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L365)

___

### depositLimit(address)

▸ **depositLimit(address)**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/CompoundYield.d.ts:367](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L367)

___

### emergencyWithdraw

▸ **emergencyWithdraw**(`_asset`, `_wallet`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_asset` | `string` |
| `_wallet` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CompoundYield.d.ts:369](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L369)

___

### emergencyWithdraw(address,address)

▸ **emergencyWithdraw(address,address)**(`_asset`, `_wallet`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_asset` | `string` |
| `_wallet` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CompoundYield.d.ts:375](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L375)

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

### forceUpdateTokenAddress

▸ **forceUpdateTokenAddress**(`_asset`, `_liquidityToken`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_asset` | `string` |
| `_liquidityToken` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CompoundYield.d.ts:381](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L381)

___

### forceUpdateTokenAddress(address,address)

▸ **forceUpdateTokenAddress(address,address)**(`_asset`, `_liquidityToken`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_asset` | `string` |
| `_liquidityToken` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CompoundYield.d.ts:387](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L387)

___

### getSharesForTokens

▸ **getSharesForTokens**(`_amount`, `_asset`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_amount` | `BigNumberish` |
| `_asset` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CompoundYield.d.ts:393](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L393)

___

### getSharesForTokens(uint256,address)

▸ **getSharesForTokens(uint256,address)**(`_amount`, `_asset`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_amount` | `BigNumberish` |
| `_asset` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CompoundYield.d.ts:399](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L399)

___

### getTokensForShares

▸ **getTokensForShares**(`_shares`, `_asset`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_shares` | `BigNumberish` |
| `_asset` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CompoundYield.d.ts:405](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L405)

___

### getTokensForShares(uint256,address)

▸ **getTokensForShares(uint256,address)**(`_shares`, `_asset`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_shares` | `BigNumberish` |
| `_asset` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CompoundYield.d.ts:411](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L411)

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

[src/wrappers/CompoundYield.d.ts:417](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L417)

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

[src/wrappers/CompoundYield.d.ts:419](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L419)

___

### liquidityToken

▸ **liquidityToken**(`arg0`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/CompoundYield.d.ts:421](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L421)

___

### liquidityToken(address)

▸ **liquidityToken(address)**(`arg0`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/CompoundYield.d.ts:423](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L423)

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

[src/wrappers/CompoundYield.d.ts:112](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L112)

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

[src/wrappers/CompoundYield.d.ts:135](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L135)

___

### lockTokens

▸ **lockTokens**(`_user`, `_asset`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_asset` | `string` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CompoundYield.d.ts:425](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L425)

___

### lockTokens(address,address,uint256)

▸ **lockTokens(address,address,uint256)**(`_user`, `_asset`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_asset` | `string` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CompoundYield.d.ts:432](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L432)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`CompoundYield`](wrappers_CompoundYield.CompoundYield.md)

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

[`CompoundYield`](wrappers_CompoundYield.CompoundYield.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/CompoundYield.d.ts:115](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L115)

▸ **off**(`eventName`, `listener`): [`CompoundYield`](wrappers_CompoundYield.CompoundYield.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`CompoundYield`](wrappers_CompoundYield.CompoundYield.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/CompoundYield.d.ts:136](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L136)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`CompoundYield`](wrappers_CompoundYield.CompoundYield.md)

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

[`CompoundYield`](wrappers_CompoundYield.CompoundYield.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/CompoundYield.d.ts:119](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L119)

▸ **on**(`eventName`, `listener`): [`CompoundYield`](wrappers_CompoundYield.CompoundYield.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`CompoundYield`](wrappers_CompoundYield.CompoundYield.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/CompoundYield.d.ts:137](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L137)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`CompoundYield`](wrappers_CompoundYield.CompoundYield.md)

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

[`CompoundYield`](wrappers_CompoundYield.CompoundYield.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/CompoundYield.d.ts:123](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L123)

▸ **once**(`eventName`, `listener`): [`CompoundYield`](wrappers_CompoundYield.CompoundYield.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`CompoundYield`](wrappers_CompoundYield.CompoundYield.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/CompoundYield.d.ts:138](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L138)

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

[src/wrappers/CompoundYield.d.ts:439](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L439)

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

[src/wrappers/CompoundYield.d.ts:441](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L441)

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

[src/wrappers/CompoundYield.d.ts:142](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L142)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`CompoundYield`](wrappers_CompoundYield.CompoundYield.md)

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

[`CompoundYield`](wrappers_CompoundYield.CompoundYield.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/CompoundYield.d.ts:131](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L131)

▸ **removeAllListeners**(`eventName?`): [`CompoundYield`](wrappers_CompoundYield.CompoundYield.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`CompoundYield`](wrappers_CompoundYield.CompoundYield.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/CompoundYield.d.ts:140](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L140)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`CompoundYield`](wrappers_CompoundYield.CompoundYield.md)

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

[`CompoundYield`](wrappers_CompoundYield.CompoundYield.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/CompoundYield.d.ts:127](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L127)

▸ **removeListener**(`eventName`, `listener`): [`CompoundYield`](wrappers_CompoundYield.CompoundYield.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`CompoundYield`](wrappers_CompoundYield.CompoundYield.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/CompoundYield.d.ts:139](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L139)

___

### removeTokenAddress

▸ **removeTokenAddress**(`_asset`, `_liquidityToken`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_asset` | `string` |
| `_liquidityToken` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CompoundYield.d.ts:443](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L443)

___

### removeTokenAddress(address,address)

▸ **removeTokenAddress(address,address)**(`_asset`, `_liquidityToken`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_asset` | `string` |
| `_liquidityToken` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CompoundYield.d.ts:449](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L449)

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

[src/wrappers/CompoundYield.d.ts:455](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L455)

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

[src/wrappers/CompoundYield.d.ts:457](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L457)

___

### setDepositLimit

▸ **setDepositLimit**(`_asset`, `_limit`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_asset` | `string` |
| `_limit` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CompoundYield.d.ts:459](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L459)

___

### setDepositLimit(address,uint256)

▸ **setDepositLimit(address,uint256)**(`_asset`, `_limit`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_asset` | `string` |
| `_limit` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CompoundYield.d.ts:465](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L465)

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

[src/wrappers/CompoundYield.d.ts:471](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L471)

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

[src/wrappers/CompoundYield.d.ts:473](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L473)

___

### unlockShares

▸ **unlockShares**(`_asset`, `_to`, `_shares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_asset` | `string` |
| `_to` | `string` |
| `_shares` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CompoundYield.d.ts:475](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L475)

___

### unlockShares(address,address,uint256)

▸ **unlockShares(address,address,uint256)**(`_asset`, `_to`, `_shares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_asset` | `string` |
| `_to` | `string` |
| `_shares` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CompoundYield.d.ts:482](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L482)

___

### unlockTokens

▸ **unlockTokens**(`_asset`, `_to`, `_shares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_asset` | `string` |
| `_to` | `string` |
| `_shares` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CompoundYield.d.ts:489](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L489)

___

### unlockTokens(address,address,uint256)

▸ **unlockTokens(address,address,uint256)**(`_asset`, `_to`, `_shares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_asset` | `string` |
| `_to` | `string` |
| `_shares` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CompoundYield.d.ts:496](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/CompoundYield.d.ts#L496)

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
