[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/ISavingsAccount](../modules/wrappers_ISavingsAccount.md) / ISavingsAccount

# Class: ISavingsAccount

[wrappers/ISavingsAccount](../modules/wrappers_ISavingsAccount.md).ISavingsAccount

## Hierarchy

- `Contract`

  ↳ **`ISavingsAccount`**

## Table of contents

### Constructors

- [constructor](wrappers_ISavingsAccount.ISavingsAccount.md#constructor)

### Properties

- [\_deployedPromise](wrappers_ISavingsAccount.ISavingsAccount.md#_deployedpromise)
- [\_runningEvents](wrappers_ISavingsAccount.ISavingsAccount.md#_runningevents)
- [\_wrappedEmits](wrappers_ISavingsAccount.ISavingsAccount.md#_wrappedemits)
- [address](wrappers_ISavingsAccount.ISavingsAccount.md#address)
- [callStatic](wrappers_ISavingsAccount.ISavingsAccount.md#callstatic)
- [deployTransaction](wrappers_ISavingsAccount.ISavingsAccount.md#deploytransaction)
- [estimateGas](wrappers_ISavingsAccount.ISavingsAccount.md#estimategas)
- [filters](wrappers_ISavingsAccount.ISavingsAccount.md#filters)
- [functions](wrappers_ISavingsAccount.ISavingsAccount.md#functions)
- [interface](wrappers_ISavingsAccount.ISavingsAccount.md#interface)
- [populateTransaction](wrappers_ISavingsAccount.ISavingsAccount.md#populatetransaction)
- [provider](wrappers_ISavingsAccount.ISavingsAccount.md#provider)
- [resolvedAddress](wrappers_ISavingsAccount.ISavingsAccount.md#resolvedaddress)
- [signer](wrappers_ISavingsAccount.ISavingsAccount.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_ISavingsAccount.ISavingsAccount.md#_checkrunningevents)
- [\_deployed](wrappers_ISavingsAccount.ISavingsAccount.md#_deployed)
- [\_wrapEvent](wrappers_ISavingsAccount.ISavingsAccount.md#_wrapevent)
- [allowance](wrappers_ISavingsAccount.ISavingsAccount.md#allowance)
- [allowance(address,address,address)](wrappers_ISavingsAccount.ISavingsAccount.md#allowance(address,address,address))
- [approve](wrappers_ISavingsAccount.ISavingsAccount.md#approve)
- [approve(address,address,uint256)](wrappers_ISavingsAccount.ISavingsAccount.md#approve(address,address,uint256))
- [attach](wrappers_ISavingsAccount.ISavingsAccount.md#attach)
- [balanceInShares](wrappers_ISavingsAccount.ISavingsAccount.md#balanceinshares)
- [balanceInShares(address,address,address)](wrappers_ISavingsAccount.ISavingsAccount.md#balanceinshares(address,address,address))
- [connect](wrappers_ISavingsAccount.ISavingsAccount.md#connect)
- [decreaseAllowance](wrappers_ISavingsAccount.ISavingsAccount.md#decreaseallowance)
- [decreaseAllowance(address,address,uint256)](wrappers_ISavingsAccount.ISavingsAccount.md#decreaseallowance(address,address,uint256))
- [deployed](wrappers_ISavingsAccount.ISavingsAccount.md#deployed)
- [deposit](wrappers_ISavingsAccount.ISavingsAccount.md#deposit)
- [deposit(address,address,address,uint256)](wrappers_ISavingsAccount.ISavingsAccount.md#deposit(address,address,address,uint256))
- [emit](wrappers_ISavingsAccount.ISavingsAccount.md#emit)
- [fallback](wrappers_ISavingsAccount.ISavingsAccount.md#fallback)
- [getTotalTokens](wrappers_ISavingsAccount.ISavingsAccount.md#gettotaltokens)
- [getTotalTokens(address,address)](wrappers_ISavingsAccount.ISavingsAccount.md#gettotaltokens(address,address))
- [increaseAllowance](wrappers_ISavingsAccount.ISavingsAccount.md#increaseallowance)
- [increaseAllowance(address,address,uint256)](wrappers_ISavingsAccount.ISavingsAccount.md#increaseallowance(address,address,uint256))
- [listenerCount](wrappers_ISavingsAccount.ISavingsAccount.md#listenercount)
- [listeners](wrappers_ISavingsAccount.ISavingsAccount.md#listeners)
- [off](wrappers_ISavingsAccount.ISavingsAccount.md#off)
- [on](wrappers_ISavingsAccount.ISavingsAccount.md#on)
- [once](wrappers_ISavingsAccount.ISavingsAccount.md#once)
- [queryFilter](wrappers_ISavingsAccount.ISavingsAccount.md#queryfilter)
- [removeAllListeners](wrappers_ISavingsAccount.ISavingsAccount.md#removealllisteners)
- [removeListener](wrappers_ISavingsAccount.ISavingsAccount.md#removelistener)
- [switchStrategy](wrappers_ISavingsAccount.ISavingsAccount.md#switchstrategy)
- [switchStrategy(address,address,address,uint256)](wrappers_ISavingsAccount.ISavingsAccount.md#switchstrategy(address,address,address,uint256))
- [transfer](wrappers_ISavingsAccount.ISavingsAccount.md#transfer)
- [transfer(address,address,address,uint256)](wrappers_ISavingsAccount.ISavingsAccount.md#transfer(address,address,address,uint256))
- [transferFrom](wrappers_ISavingsAccount.ISavingsAccount.md#transferfrom)
- [transferFrom(address,address,address,address,uint256)](wrappers_ISavingsAccount.ISavingsAccount.md#transferfrom(address,address,address,address,uint256))
- [transferShares](wrappers_ISavingsAccount.ISavingsAccount.md#transfershares)
- [transferShares(address,address,address,uint256)](wrappers_ISavingsAccount.ISavingsAccount.md#transfershares(address,address,address,uint256))
- [transferSharesFrom](wrappers_ISavingsAccount.ISavingsAccount.md#transfersharesfrom)
- [transferSharesFrom(address,address,address,address,uint256)](wrappers_ISavingsAccount.ISavingsAccount.md#transfersharesfrom(address,address,address,address,uint256))
- [withdraw](wrappers_ISavingsAccount.ISavingsAccount.md#withdraw)
- [withdraw(address,address,address,uint256,bool)](wrappers_ISavingsAccount.ISavingsAccount.md#withdraw(address,address,address,uint256,bool))
- [withdrawAll(address)](wrappers_ISavingsAccount.ISavingsAccount.md#withdrawall(address))
- [withdrawAll(address,address)](wrappers_ISavingsAccount.ISavingsAccount.md#withdrawall(address,address))
- [withdrawFrom](wrappers_ISavingsAccount.ISavingsAccount.md#withdrawfrom)
- [withdrawFrom(address,address,address,address,uint256,bool)](wrappers_ISavingsAccount.ISavingsAccount.md#withdrawfrom(address,address,address,address,uint256,bool))
- [withdrawShares](wrappers_ISavingsAccount.ISavingsAccount.md#withdrawshares)
- [withdrawShares(address,address,address,uint256,bool)](wrappers_ISavingsAccount.ISavingsAccount.md#withdrawshares(address,address,address,uint256,bool))
- [withdrawSharesFrom](wrappers_ISavingsAccount.ISavingsAccount.md#withdrawsharesfrom)
- [withdrawSharesFrom(address,address,address,address,uint256,bool)](wrappers_ISavingsAccount.ISavingsAccount.md#withdrawsharesfrom(address,address,address,address,uint256,bool))
- [getContractAddress](wrappers_ISavingsAccount.ISavingsAccount.md#getcontractaddress)
- [getInterface](wrappers_ISavingsAccount.ISavingsAccount.md#getinterface)
- [isIndexed](wrappers_ISavingsAccount.ISavingsAccount.md#isindexed)

## Constructors

### constructor

• **new ISavingsAccount**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `allowance` | (`user`: `string`, `token`: `string`, `to`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `allowance(address,address,address)` | (`user`: `string`, `token`: `string`, `to`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`token`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `approve(address,address,uint256)` | (`token`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `balanceInShares` | (`user`: `string`, `token`: `string`, `strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `balanceInShares(address,address,address)` | (`user`: `string`, `token`: `string`, `strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decreaseAllowance` | (`token`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `decreaseAllowance(address,address,uint256)` | (`token`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deposit` | (`token`: `string`, `strategy`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `deposit(address,address,address,uint256)` | (`token`: `string`, `strategy`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalTokens` | (`_user`: `string`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalTokens(address,address)` | (`_user`: `string`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `increaseAllowance` | (`token`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `increaseAllowance(address,address,uint256)` | (`token`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `switchStrategy` | (`currentStrategy`: `string`, `newStrategy`: `string`, `token`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `switchStrategy(address,address,address,uint256)` | (`currentStrategy`: `string`, `newStrategy`: `string`, `token`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transfer` | (`token`: `string`, `strategy`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer(address,address,address,uint256)` | (`token`: `string`, `strategy`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferFrom` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferFrom(address,address,address,address,uint256)` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferShares` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferShares(address,address,address,uint256)` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferSharesFrom` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferSharesFrom(address,address,address,address,uint256)` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `withdraw` | (`token`: `string`, `strategy`: `string`, `withdrawTo`: `string`, `amount`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `withdraw(address,address,address,uint256,bool)` | (`token`: `string`, `strategy`: `string`, `withdrawTo`: `string`, `amount`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `withdrawAll(address)` | (`token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `withdrawAll(address,address)` | (`token`: `string`, `strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `withdrawFrom` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `withdrawFrom(address,address,address,address,uint256,bool)` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `withdrawShares` | (`token`: `string`, `strategy`: `string`, `to`: `string`, `shares`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `withdrawShares(address,address,address,uint256,bool)` | (`token`: `string`, `strategy`: `string`, `to`: `string`, `shares`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `withdrawSharesFrom` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `shares`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `withdrawSharesFrom(address,address,address,address,uint256,bool)` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `shares`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:663](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L663)

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
| `allowance` | (`user`: `string`, `token`: `string`, `to`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `allowance(address,address,address)` | (`user`: `string`, `token`: `string`, `to`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `approve` | (`token`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `approve(address,address,uint256)` | (`token`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `balanceInShares` | (`user`: `string`, `token`: `string`, `strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `balanceInShares(address,address,address)` | (`user`: `string`, `token`: `string`, `strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decreaseAllowance` | (`token`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `decreaseAllowance(address,address,uint256)` | (`token`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `deposit` | (`token`: `string`, `strategy`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `deposit(address,address,address,uint256)` | (`token`: `string`, `strategy`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getTotalTokens` | (`_user`: `string`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getTotalTokens(address,address)` | (`_user`: `string`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `increaseAllowance` | (`token`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `increaseAllowance(address,address,uint256)` | (`token`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `switchStrategy` | (`currentStrategy`: `string`, `newStrategy`: `string`, `token`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `switchStrategy(address,address,address,uint256)` | (`currentStrategy`: `string`, `newStrategy`: `string`, `token`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transfer` | (`token`: `string`, `strategy`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transfer(address,address,address,uint256)` | (`token`: `string`, `strategy`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferFrom` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferFrom(address,address,address,address,uint256)` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferShares` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferShares(address,address,address,uint256)` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferSharesFrom` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferSharesFrom(address,address,address,address,uint256)` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdraw` | (`token`: `string`, `strategy`: `string`, `withdrawTo`: `string`, `amount`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdraw(address,address,address,uint256,bool)` | (`token`: `string`, `strategy`: `string`, `withdrawTo`: `string`, `amount`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawAll(address)` | (`token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawAll(address,address)` | (`token`: `string`, `strategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawFrom` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawFrom(address,address,address,address,uint256,bool)` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawShares` | (`token`: `string`, `strategy`: `string`, `to`: `string`, `shares`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawShares(address,address,address,uint256,bool)` | (`token`: `string`, `strategy`: `string`, `to`: `string`, `shares`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawSharesFrom` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `shares`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawSharesFrom(address,address,address,address,uint256,bool)` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `shares`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:960](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L960)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Approved` | (`token`: `string`, `from`: `string`, `to`: `string`, `amount`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `string`, `BigNumber`], { `amount`: `BigNumber` ; `from`: `string` ; `to`: `string` ; `token`: `string`  }\> |
| `Deposited` | (`user`: `string`, `sharesReceived`: ``null``, `token`: `string`, `strategy`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `BigNumber`, `string`, `string`], { `sharesReceived`: `BigNumber` ; `strategy`: `string` ; `token`: `string` ; `user`: `string`  }\> |
| `StrategyRegistryUpdated` | (`updatedStrategyRegistry`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `updatedStrategyRegistry`: `string`  }\> |
| `StrategySwitched` | (`user`: `string`, `token`: `string`, `sharesDecreasedInCurrentStrategy`: ``null``, `sharesIncreasedInNewStrategy`: ``null``, `currentStrategy`: ``null``, `newStrategy`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `BigNumber`, `BigNumber`, `string`, `string`], { `currentStrategy`: `string` ; `newStrategy`: `string` ; `sharesDecreasedInCurrentStrategy`: `BigNumber` ; `sharesIncreasedInNewStrategy`: `BigNumber` ; `token`: `string` ; `user`: `string`  }\> |
| `Transfer` | (`token`: `string`, `strategy`: ``null``, `from`: `string`, `to`: `string`, `amount`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `string`, `string`, `BigNumber`], { `amount`: `BigNumber` ; `from`: `string` ; `strategy`: `string` ; `to`: `string` ; `token`: `string`  }\> |
| `TransferShares` | (`token`: `string`, `strategy`: ``null``, `from`: `string`, `to`: `string`, `shares`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `string`, `string`, `BigNumber`], { `from`: `string` ; `shares`: `BigNumber` ; `strategy`: `string` ; `to`: `string` ; `token`: `string`  }\> |
| `Withdrawn` | (`from`: `string`, `to`: `string`, `sharesWithdrawn`: ``null``, `token`: `string`, `strategy`: ``null``, `receiveShares`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `BigNumber`, `string`, `string`, `boolean`], { `from`: `string` ; `receiveShares`: `boolean` ; `sharesWithdrawn`: `BigNumber` ; `strategy`: `string` ; `to`: `string` ; `token`: `string`  }\> |
| `WithdrawnAll` | (`user`: `string`, `tokenReceived`: ``null``, `token`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `BigNumber`, `string`], { `token`: `string` ; `tokenReceived`: `BigNumber` ; `user`: `string`  }\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:856](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L856)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowance` | (`user`: `string`, `token`: `string`, `to`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `allowance(address,address,address)` | (`user`: `string`, `token`: `string`, `to`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `approve` | (`token`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `approve(address,address,uint256)` | (`token`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `balanceInShares` | (`user`: `string`, `token`: `string`, `strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `shareBalance`: `BigNumber`  }\> |
| `balanceInShares(address,address,address)` | (`user`: `string`, `token`: `string`, `strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `shareBalance`: `BigNumber`  }\> |
| `decreaseAllowance` | (`token`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `decreaseAllowance(address,address,uint256)` | (`token`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `deposit` | (`token`: `string`, `strategy`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `deposit(address,address,address,uint256)` | (`token`: `string`, `strategy`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getTotalTokens` | (`_user`: `string`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getTotalTokens(address,address)` | (`_user`: `string`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `increaseAllowance` | (`token`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `increaseAllowance(address,address,uint256)` | (`token`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `switchStrategy` | (`currentStrategy`: `string`, `newStrategy`: `string`, `token`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `switchStrategy(address,address,address,uint256)` | (`currentStrategy`: `string`, `newStrategy`: `string`, `token`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transfer` | (`token`: `string`, `strategy`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transfer(address,address,address,uint256)` | (`token`: `string`, `strategy`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferFrom` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferFrom(address,address,address,address,uint256)` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferShares` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferShares(address,address,address,uint256)` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferSharesFrom` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferSharesFrom(address,address,address,address,uint256)` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdraw` | (`token`: `string`, `strategy`: `string`, `withdrawTo`: `string`, `amount`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdraw(address,address,address,uint256,bool)` | (`token`: `string`, `strategy`: `string`, `withdrawTo`: `string`, `amount`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawAll(address)` | (`token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawAll(address,address)` | (`token`: `string`, `strategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawFrom` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawFrom(address,address,address,address,uint256,bool)` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawShares` | (`token`: `string`, `strategy`: `string`, `to`: `string`, `shares`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawShares(address,address,address,uint256,bool)` | (`token`: `string`, `strategy`: `string`, `to`: `string`, `shares`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawSharesFrom` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `shares`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawSharesFrom(address,address,address,address,uint256,bool)` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `shares`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:143](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L143)

___

### interface

• **interface**: [`ISavingsAccountInterface`](../interfaces/wrappers_ISavingsAccount.ISavingsAccountInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:141](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L141)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowance` | (`user`: `string`, `token`: `string`, `to`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `allowance(address,address,address)` | (`user`: `string`, `token`: `string`, `to`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `approve` | (`token`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `approve(address,address,uint256)` | (`token`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `balanceInShares` | (`user`: `string`, `token`: `string`, `strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `balanceInShares(address,address,address)` | (`user`: `string`, `token`: `string`, `strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `decreaseAllowance` | (`token`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `decreaseAllowance(address,address,uint256)` | (`token`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `deposit` | (`token`: `string`, `strategy`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `deposit(address,address,address,uint256)` | (`token`: `string`, `strategy`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getTotalTokens` | (`_user`: `string`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getTotalTokens(address,address)` | (`_user`: `string`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `increaseAllowance` | (`token`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `increaseAllowance(address,address,uint256)` | (`token`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `switchStrategy` | (`currentStrategy`: `string`, `newStrategy`: `string`, `token`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `switchStrategy(address,address,address,uint256)` | (`currentStrategy`: `string`, `newStrategy`: `string`, `token`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transfer` | (`token`: `string`, `strategy`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transfer(address,address,address,uint256)` | (`token`: `string`, `strategy`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom(address,address,address,address,uint256)` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferShares` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferShares(address,address,address,uint256)` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferSharesFrom` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferSharesFrom(address,address,address,address,uint256)` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdraw` | (`token`: `string`, `strategy`: `string`, `withdrawTo`: `string`, `amount`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdraw(address,address,address,uint256,bool)` | (`token`: `string`, `strategy`: `string`, `withdrawTo`: `string`, `amount`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawAll(address)` | (`token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawAll(address,address)` | (`token`: `string`, `strategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawFrom` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawFrom(address,address,address,address,uint256,bool)` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawShares` | (`token`: `string`, `strategy`: `string`, `to`: `string`, `shares`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawShares(address,address,address,uint256,bool)` | (`token`: `string`, `strategy`: `string`, `to`: `string`, `shares`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawSharesFrom` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `shares`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawSharesFrom(address,address,address,address,uint256,bool)` | (`token`: `string`, `strategy`: `string`, `from`: `string`, `to`: `string`, `shares`: `BigNumberish`, `receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:1214](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L1214)

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

### allowance

▸ **allowance**(`user`, `token`, `to`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |
| `token` | `string` |
| `to` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:411](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L411)

___

### allowance(address,address,address)

▸ **allowance(address,address,address)**(`user`, `token`, `to`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |
| `token` | `string` |
| `to` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:418](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L418)

___

### approve

▸ **approve**(`token`, `to`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `to` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:425](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L425)

___

### approve(address,address,uint256)

▸ **approve(address,address,uint256)**(`token`, `to`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `to` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:432](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L432)

___

### attach

▸ **attach**(`addressOrName`): [`ISavingsAccount`](wrappers_ISavingsAccount.ISavingsAccount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`ISavingsAccount`](wrappers_ISavingsAccount.ISavingsAccount.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:102](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L102)

___

### balanceInShares

▸ **balanceInShares**(`user`, `token`, `strategy`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |
| `token` | `string` |
| `strategy` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:439](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L439)

___

### balanceInShares(address,address,address)

▸ **balanceInShares(address,address,address)**(`user`, `token`, `strategy`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |
| `token` | `string` |
| `strategy` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:441](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L441)

___

### connect

▸ **connect**(`signerOrProvider`): [`ISavingsAccount`](wrappers_ISavingsAccount.ISavingsAccount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`ISavingsAccount`](wrappers_ISavingsAccount.ISavingsAccount.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:101](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L101)

___

### decreaseAllowance

▸ **decreaseAllowance**(`token`, `to`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `to` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:443](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L443)

___

### decreaseAllowance(address,address,uint256)

▸ **decreaseAllowance(address,address,uint256)**(`token`, `to`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `to` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:450](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L450)

___

### deployed

▸ **deployed**(): `Promise`<[`ISavingsAccount`](wrappers_ISavingsAccount.ISavingsAccount.md)\>

#### Returns

`Promise`<[`ISavingsAccount`](wrappers_ISavingsAccount.ISavingsAccount.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:103](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L103)

___

### deposit

▸ **deposit**(`token`, `strategy`, `to`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `strategy` | `string` |
| `to` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:457](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L457)

___

### deposit(address,address,address,uint256)

▸ **deposit(address,address,address,uint256)**(`token`, `strategy`, `to`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `strategy` | `string` |
| `to` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:465](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L465)

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

### getTotalTokens

▸ **getTotalTokens**(`_user`, `_token`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_token` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:473](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L473)

___

### getTotalTokens(address,address)

▸ **getTotalTokens(address,address)**(`_user`, `_token`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_token` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:475](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L475)

___

### increaseAllowance

▸ **increaseAllowance**(`token`, `to`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `to` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:481](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L481)

___

### increaseAllowance(address,address,uint256)

▸ **increaseAllowance(address,address,uint256)**(`token`, `to`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `to` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:488](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L488)

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

[src/wrappers/ISavingsAccount.d.ts:105](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L105)

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

[src/wrappers/ISavingsAccount.d.ts:128](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L128)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ISavingsAccount`](wrappers_ISavingsAccount.ISavingsAccount.md)

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

[`ISavingsAccount`](wrappers_ISavingsAccount.ISavingsAccount.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:108](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L108)

▸ **off**(`eventName`, `listener`): [`ISavingsAccount`](wrappers_ISavingsAccount.ISavingsAccount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ISavingsAccount`](wrappers_ISavingsAccount.ISavingsAccount.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:129](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L129)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ISavingsAccount`](wrappers_ISavingsAccount.ISavingsAccount.md)

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

[`ISavingsAccount`](wrappers_ISavingsAccount.ISavingsAccount.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:112](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L112)

▸ **on**(`eventName`, `listener`): [`ISavingsAccount`](wrappers_ISavingsAccount.ISavingsAccount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ISavingsAccount`](wrappers_ISavingsAccount.ISavingsAccount.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:130](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L130)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ISavingsAccount`](wrappers_ISavingsAccount.ISavingsAccount.md)

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

[`ISavingsAccount`](wrappers_ISavingsAccount.ISavingsAccount.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:116](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L116)

▸ **once**(`eventName`, `listener`): [`ISavingsAccount`](wrappers_ISavingsAccount.ISavingsAccount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ISavingsAccount`](wrappers_ISavingsAccount.ISavingsAccount.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:131](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L131)

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

[src/wrappers/ISavingsAccount.d.ts:135](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L135)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`ISavingsAccount`](wrappers_ISavingsAccount.ISavingsAccount.md)

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

[`ISavingsAccount`](wrappers_ISavingsAccount.ISavingsAccount.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:124](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L124)

▸ **removeAllListeners**(`eventName?`): [`ISavingsAccount`](wrappers_ISavingsAccount.ISavingsAccount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`ISavingsAccount`](wrappers_ISavingsAccount.ISavingsAccount.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:133](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L133)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ISavingsAccount`](wrappers_ISavingsAccount.ISavingsAccount.md)

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

[`ISavingsAccount`](wrappers_ISavingsAccount.ISavingsAccount.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:120](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L120)

▸ **removeListener**(`eventName`, `listener`): [`ISavingsAccount`](wrappers_ISavingsAccount.ISavingsAccount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ISavingsAccount`](wrappers_ISavingsAccount.ISavingsAccount.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:132](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L132)

___

### switchStrategy

▸ **switchStrategy**(`currentStrategy`, `newStrategy`, `token`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `currentStrategy` | `string` |
| `newStrategy` | `string` |
| `token` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:495](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L495)

___

### switchStrategy(address,address,address,uint256)

▸ **switchStrategy(address,address,address,uint256)**(`currentStrategy`, `newStrategy`, `token`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `currentStrategy` | `string` |
| `newStrategy` | `string` |
| `token` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:503](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L503)

___

### transfer

▸ **transfer**(`token`, `strategy`, `to`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `strategy` | `string` |
| `to` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:511](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L511)

___

### transfer(address,address,address,uint256)

▸ **transfer(address,address,address,uint256)**(`token`, `strategy`, `to`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `strategy` | `string` |
| `to` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:519](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L519)

___

### transferFrom

▸ **transferFrom**(`token`, `strategy`, `from`, `to`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `strategy` | `string` |
| `from` | `string` |
| `to` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:527](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L527)

___

### transferFrom(address,address,address,address,uint256)

▸ **transferFrom(address,address,address,address,uint256)**(`token`, `strategy`, `from`, `to`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `strategy` | `string` |
| `from` | `string` |
| `to` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:536](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L536)

___

### transferShares

▸ **transferShares**(`_token`, `_strategy`, `_to`, `_shares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_strategy` | `string` |
| `_to` | `string` |
| `_shares` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:545](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L545)

___

### transferShares(address,address,address,uint256)

▸ **transferShares(address,address,address,uint256)**(`_token`, `_strategy`, `_to`, `_shares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_strategy` | `string` |
| `_to` | `string` |
| `_shares` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:553](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L553)

___

### transferSharesFrom

▸ **transferSharesFrom**(`token`, `strategy`, `from`, `to`, `_shares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `strategy` | `string` |
| `from` | `string` |
| `to` | `string` |
| `_shares` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:561](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L561)

___

### transferSharesFrom(address,address,address,address,uint256)

▸ **transferSharesFrom(address,address,address,address,uint256)**(`token`, `strategy`, `from`, `to`, `_shares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `strategy` | `string` |
| `from` | `string` |
| `to` | `string` |
| `_shares` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:570](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L570)

___

### withdraw

▸ **withdraw**(`token`, `strategy`, `withdrawTo`, `amount`, `receiveShares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `strategy` | `string` |
| `withdrawTo` | `string` |
| `amount` | `BigNumberish` |
| `receiveShares` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:579](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L579)

___

### withdraw(address,address,address,uint256,bool)

▸ **withdraw(address,address,address,uint256,bool)**(`token`, `strategy`, `withdrawTo`, `amount`, `receiveShares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `strategy` | `string` |
| `withdrawTo` | `string` |
| `amount` | `BigNumberish` |
| `receiveShares` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:588](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L588)

___

### withdrawAll(address)

▸ **withdrawAll(address)**(`token`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:603](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L603)

___

### withdrawAll(address,address)

▸ **withdrawAll(address,address)**(`token`, `strategy`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `strategy` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:597](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L597)

___

### withdrawFrom

▸ **withdrawFrom**(`token`, `strategy`, `from`, `to`, `amount`, `receiveShares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `strategy` | `string` |
| `from` | `string` |
| `to` | `string` |
| `amount` | `BigNumberish` |
| `receiveShares` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:605](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L605)

___

### withdrawFrom(address,address,address,address,uint256,bool)

▸ **withdrawFrom(address,address,address,address,uint256,bool)**(`token`, `strategy`, `from`, `to`, `amount`, `receiveShares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `strategy` | `string` |
| `from` | `string` |
| `to` | `string` |
| `amount` | `BigNumberish` |
| `receiveShares` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:615](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L615)

___

### withdrawShares

▸ **withdrawShares**(`token`, `strategy`, `to`, `shares`, `receiveShares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `strategy` | `string` |
| `to` | `string` |
| `shares` | `BigNumberish` |
| `receiveShares` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:625](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L625)

___

### withdrawShares(address,address,address,uint256,bool)

▸ **withdrawShares(address,address,address,uint256,bool)**(`token`, `strategy`, `to`, `shares`, `receiveShares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `strategy` | `string` |
| `to` | `string` |
| `shares` | `BigNumberish` |
| `receiveShares` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:634](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L634)

___

### withdrawSharesFrom

▸ **withdrawSharesFrom**(`token`, `strategy`, `from`, `to`, `shares`, `receiveShares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `strategy` | `string` |
| `from` | `string` |
| `to` | `string` |
| `shares` | `BigNumberish` |
| `receiveShares` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:643](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L643)

___

### withdrawSharesFrom(address,address,address,address,uint256,bool)

▸ **withdrawSharesFrom(address,address,address,address,uint256,bool)**(`token`, `strategy`, `from`, `to`, `shares`, `receiveShares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `strategy` | `string` |
| `from` | `string` |
| `to` | `string` |
| `shares` | `BigNumberish` |
| `receiveShares` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ISavingsAccount.d.ts:653](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/ISavingsAccount.d.ts#L653)

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
