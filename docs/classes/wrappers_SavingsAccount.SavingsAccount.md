[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/SavingsAccount](../modules/wrappers_SavingsAccount.md) / SavingsAccount

# Class: SavingsAccount

[wrappers/SavingsAccount](../modules/wrappers_SavingsAccount.md).SavingsAccount

## Hierarchy

- `Contract`

  ↳ **`SavingsAccount`**

## Table of contents

### Constructors

- [constructor](wrappers_SavingsAccount.SavingsAccount.md#constructor)

### Properties

- [\_deployedPromise](wrappers_SavingsAccount.SavingsAccount.md#_deployedpromise)
- [\_runningEvents](wrappers_SavingsAccount.SavingsAccount.md#_runningevents)
- [\_wrappedEmits](wrappers_SavingsAccount.SavingsAccount.md#_wrappedemits)
- [address](wrappers_SavingsAccount.SavingsAccount.md#address)
- [callStatic](wrappers_SavingsAccount.SavingsAccount.md#callstatic)
- [deployTransaction](wrappers_SavingsAccount.SavingsAccount.md#deploytransaction)
- [estimateGas](wrappers_SavingsAccount.SavingsAccount.md#estimategas)
- [filters](wrappers_SavingsAccount.SavingsAccount.md#filters)
- [functions](wrappers_SavingsAccount.SavingsAccount.md#functions)
- [interface](wrappers_SavingsAccount.SavingsAccount.md#interface)
- [populateTransaction](wrappers_SavingsAccount.SavingsAccount.md#populatetransaction)
- [provider](wrappers_SavingsAccount.SavingsAccount.md#provider)
- [resolvedAddress](wrappers_SavingsAccount.SavingsAccount.md#resolvedaddress)
- [signer](wrappers_SavingsAccount.SavingsAccount.md#signer)

### Methods

- [STRATEGY\_REGISTRY](wrappers_SavingsAccount.SavingsAccount.md#strategy_registry)
- [STRATEGY\_REGISTRY()](wrappers_SavingsAccount.SavingsAccount.md#strategy_registry())
- [\_checkRunningEvents](wrappers_SavingsAccount.SavingsAccount.md#_checkrunningevents)
- [\_deployed](wrappers_SavingsAccount.SavingsAccount.md#_deployed)
- [\_wrapEvent](wrappers_SavingsAccount.SavingsAccount.md#_wrapevent)
- [allowance](wrappers_SavingsAccount.SavingsAccount.md#allowance)
- [allowance(address,address,address)](wrappers_SavingsAccount.SavingsAccount.md#allowance(address,address,address))
- [approve](wrappers_SavingsAccount.SavingsAccount.md#approve)
- [approve(address,address,uint256)](wrappers_SavingsAccount.SavingsAccount.md#approve(address,address,uint256))
- [attach](wrappers_SavingsAccount.SavingsAccount.md#attach)
- [balanceInShares](wrappers_SavingsAccount.SavingsAccount.md#balanceinshares)
- [balanceInShares(address,address,address)](wrappers_SavingsAccount.SavingsAccount.md#balanceinshares(address,address,address))
- [connect](wrappers_SavingsAccount.SavingsAccount.md#connect)
- [decreaseAllowance](wrappers_SavingsAccount.SavingsAccount.md#decreaseallowance)
- [decreaseAllowance(address,address,uint256)](wrappers_SavingsAccount.SavingsAccount.md#decreaseallowance(address,address,uint256))
- [deployed](wrappers_SavingsAccount.SavingsAccount.md#deployed)
- [deposit](wrappers_SavingsAccount.SavingsAccount.md#deposit)
- [deposit(address,address,address,uint256)](wrappers_SavingsAccount.SavingsAccount.md#deposit(address,address,address,uint256))
- [emit](wrappers_SavingsAccount.SavingsAccount.md#emit)
- [fallback](wrappers_SavingsAccount.SavingsAccount.md#fallback)
- [getTotalTokens](wrappers_SavingsAccount.SavingsAccount.md#gettotaltokens)
- [getTotalTokens(address,address)](wrappers_SavingsAccount.SavingsAccount.md#gettotaltokens(address,address))
- [increaseAllowance](wrappers_SavingsAccount.SavingsAccount.md#increaseallowance)
- [increaseAllowance(address,address,uint256)](wrappers_SavingsAccount.SavingsAccount.md#increaseallowance(address,address,uint256))
- [initialize](wrappers_SavingsAccount.SavingsAccount.md#initialize)
- [initialize(address)](wrappers_SavingsAccount.SavingsAccount.md#initialize(address))
- [listenerCount](wrappers_SavingsAccount.SavingsAccount.md#listenercount)
- [listeners](wrappers_SavingsAccount.SavingsAccount.md#listeners)
- [off](wrappers_SavingsAccount.SavingsAccount.md#off)
- [on](wrappers_SavingsAccount.SavingsAccount.md#on)
- [once](wrappers_SavingsAccount.SavingsAccount.md#once)
- [owner](wrappers_SavingsAccount.SavingsAccount.md#owner)
- [owner()](wrappers_SavingsAccount.SavingsAccount.md#owner())
- [queryFilter](wrappers_SavingsAccount.SavingsAccount.md#queryfilter)
- [removeAllListeners](wrappers_SavingsAccount.SavingsAccount.md#removealllisteners)
- [removeListener](wrappers_SavingsAccount.SavingsAccount.md#removelistener)
- [renounceOwnership](wrappers_SavingsAccount.SavingsAccount.md#renounceownership)
- [renounceOwnership()](wrappers_SavingsAccount.SavingsAccount.md#renounceownership())
- [switchStrategy](wrappers_SavingsAccount.SavingsAccount.md#switchstrategy)
- [switchStrategy(address,address,address,uint256)](wrappers_SavingsAccount.SavingsAccount.md#switchstrategy(address,address,address,uint256))
- [transfer](wrappers_SavingsAccount.SavingsAccount.md#transfer)
- [transfer(address,address,address,uint256)](wrappers_SavingsAccount.SavingsAccount.md#transfer(address,address,address,uint256))
- [transferFrom](wrappers_SavingsAccount.SavingsAccount.md#transferfrom)
- [transferFrom(address,address,address,address,uint256)](wrappers_SavingsAccount.SavingsAccount.md#transferfrom(address,address,address,address,uint256))
- [transferOwnership](wrappers_SavingsAccount.SavingsAccount.md#transferownership)
- [transferOwnership(address)](wrappers_SavingsAccount.SavingsAccount.md#transferownership(address))
- [transferShares](wrappers_SavingsAccount.SavingsAccount.md#transfershares)
- [transferShares(address,address,address,uint256)](wrappers_SavingsAccount.SavingsAccount.md#transfershares(address,address,address,uint256))
- [transferSharesFrom](wrappers_SavingsAccount.SavingsAccount.md#transfersharesfrom)
- [transferSharesFrom(address,address,address,address,uint256)](wrappers_SavingsAccount.SavingsAccount.md#transfersharesfrom(address,address,address,address,uint256))
- [withdraw](wrappers_SavingsAccount.SavingsAccount.md#withdraw)
- [withdraw(address,address,address,uint256,bool)](wrappers_SavingsAccount.SavingsAccount.md#withdraw(address,address,address,uint256,bool))
- [withdrawAll(address)](wrappers_SavingsAccount.SavingsAccount.md#withdrawall(address))
- [withdrawAll(address,address)](wrappers_SavingsAccount.SavingsAccount.md#withdrawall(address,address))
- [withdrawFrom](wrappers_SavingsAccount.SavingsAccount.md#withdrawfrom)
- [withdrawFrom(address,address,address,address,uint256,bool)](wrappers_SavingsAccount.SavingsAccount.md#withdrawfrom(address,address,address,address,uint256,bool))
- [withdrawShares](wrappers_SavingsAccount.SavingsAccount.md#withdrawshares)
- [withdrawShares(address,address,address,uint256,bool)](wrappers_SavingsAccount.SavingsAccount.md#withdrawshares(address,address,address,uint256,bool))
- [withdrawSharesFrom](wrappers_SavingsAccount.SavingsAccount.md#withdrawsharesfrom)
- [withdrawSharesFrom(address,address,address,address,uint256,bool)](wrappers_SavingsAccount.SavingsAccount.md#withdrawsharesfrom(address,address,address,address,uint256,bool))
- [getContractAddress](wrappers_SavingsAccount.SavingsAccount.md#getcontractaddress)
- [getInterface](wrappers_SavingsAccount.SavingsAccount.md#getinterface)
- [isIndexed](wrappers_SavingsAccount.SavingsAccount.md#isindexed)

## Constructors

### constructor

• **new SavingsAccount**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `STRATEGY_REGISTRY` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `STRATEGY_REGISTRY()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `allowance` | (`arg0`: `string`, `arg1`: `string`, `arg2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `allowance(address,address,address)` | (`arg0`: `string`, `arg1`: `string`, `arg2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`_token`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `approve(address,address,uint256)` | (`_token`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `balanceInShares` | (`arg0`: `string`, `arg1`: `string`, `arg2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `balanceInShares(address,address,address)` | (`arg0`: `string`, `arg1`: `string`, `arg2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decreaseAllowance` | (`_token`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `decreaseAllowance(address,address,uint256)` | (`_token`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deposit` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `deposit(address,address,address,uint256)` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalTokens` | (`_user`: `string`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalTokens(address,address)` | (`_user`: `string`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `increaseAllowance` | (`_token`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `increaseAllowance(address,address,uint256)` | (`_token`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialize` | (`_owner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialize(address)` | (`_owner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `renounceOwnership` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `renounceOwnership()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `switchStrategy` | (`_currentStrategy`: `string`, `_newStrategy`: `string`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `switchStrategy(address,address,address,uint256)` | (`_currentStrategy`: `string`, `_newStrategy`: `string`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transfer` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer(address,address,address,uint256)` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferFrom` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferFrom(address,address,address,address,uint256)` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferShares` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferShares(address,address,address,uint256)` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferSharesFrom` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferSharesFrom(address,address,address,address,uint256)` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `withdraw` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `withdraw(address,address,address,uint256,bool)` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `withdrawAll(address)` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `withdrawAll(address,address)` | (`_token`: `string`, `_strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `withdrawFrom` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `withdrawFrom(address,address,address,address,uint256,bool)` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `withdrawShares` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `withdrawShares(address,address,address,uint256,bool)` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `withdrawSharesFrom` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `withdrawSharesFrom(address,address,address,address,uint256,bool)` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/SavingsAccount.d.ts:693](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L693)

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
| `STRATEGY_REGISTRY` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `STRATEGY_REGISTRY()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `allowance` | (`arg0`: `string`, `arg1`: `string`, `arg2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `allowance(address,address,address)` | (`arg0`: `string`, `arg1`: `string`, `arg2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`_token`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `approve(address,address,uint256)` | (`_token`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `balanceInShares` | (`arg0`: `string`, `arg1`: `string`, `arg2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `balanceInShares(address,address,address)` | (`arg0`: `string`, `arg1`: `string`, `arg2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decreaseAllowance` | (`_token`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `decreaseAllowance(address,address,uint256)` | (`_token`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `deposit` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `deposit(address,address,address,uint256)` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getTotalTokens` | (`_user`: `string`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getTotalTokens(address,address)` | (`_user`: `string`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `increaseAllowance` | (`_token`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `increaseAllowance(address,address,uint256)` | (`_token`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initialize` | (`_owner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initialize(address)` | (`_owner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `switchStrategy` | (`_currentStrategy`: `string`, `_newStrategy`: `string`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `switchStrategy(address,address,address,uint256)` | (`_currentStrategy`: `string`, `_newStrategy`: `string`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transfer` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transfer(address,address,address,uint256)` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferFrom` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferFrom(address,address,address,address,uint256)` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferShares` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferShares(address,address,address,uint256)` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferSharesFrom` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferSharesFrom(address,address,address,address,uint256)` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdraw` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdraw(address,address,address,uint256,bool)` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawAll(address)` | (`_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawAll(address,address)` | (`_token`: `string`, `_strategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawFrom` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawFrom(address,address,address,address,uint256,bool)` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawShares` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawShares(address,address,address,uint256,bool)` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawSharesFrom` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawSharesFrom(address,address,address,address,uint256,bool)` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/SavingsAccount.d.ts:1020](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L1020)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Approved` | (`token`: `string`, `from`: `string`, `to`: `string`, `amount`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `string`, `BigNumber`], { `amount`: `BigNumber` ; `from`: `string` ; `to`: `string` ; `token`: `string`  }\> |
| `Deposited` | (`user`: `string`, `sharesReceived`: ``null``, `token`: `string`, `strategy`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `BigNumber`, `string`, `string`], { `sharesReceived`: `BigNumber` ; `strategy`: `string` ; `token`: `string` ; `user`: `string`  }\> |
| `OwnershipTransferred` | (`previousOwner`: `string`, `newOwner`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`], { `newOwner`: `string` ; `previousOwner`: `string`  }\> |
| `StrategyRegistryUpdated` | (`updatedStrategyRegistry`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `updatedStrategyRegistry`: `string`  }\> |
| `StrategySwitched` | (`user`: `string`, `token`: `string`, `sharesDecreasedInCurrentStrategy`: ``null``, `sharesIncreasedInNewStrategy`: ``null``, `currentStrategy`: ``null``, `newStrategy`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `BigNumber`, `BigNumber`, `string`, `string`], { `currentStrategy`: `string` ; `newStrategy`: `string` ; `sharesDecreasedInCurrentStrategy`: `BigNumber` ; `sharesIncreasedInNewStrategy`: `BigNumber` ; `token`: `string` ; `user`: `string`  }\> |
| `Transfer` | (`token`: `string`, `strategy`: ``null``, `from`: `string`, `to`: `string`, `amount`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `string`, `string`, `BigNumber`], { `amount`: `BigNumber` ; `from`: `string` ; `strategy`: `string` ; `to`: `string` ; `token`: `string`  }\> |
| `TransferShares` | (`token`: `string`, `strategy`: ``null``, `from`: `string`, `to`: `string`, `shares`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `string`, `string`, `BigNumber`], { `from`: `string` ; `shares`: `BigNumber` ; `strategy`: `string` ; `to`: `string` ; `token`: `string`  }\> |
| `Withdrawn` | (`from`: `string`, `to`: `string`, `sharesWithdrawn`: ``null``, `token`: `string`, `strategy`: ``null``, `receiveShares`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `BigNumber`, `string`, `string`, `boolean`], { `from`: `string` ; `receiveShares`: `boolean` ; `sharesWithdrawn`: `BigNumber` ; `strategy`: `string` ; `to`: `string` ; `token`: `string`  }\> |
| `WithdrawnAll` | (`user`: `string`, `tokenReceived`: ``null``, `token`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `BigNumber`, `string`], { `token`: `string` ; `tokenReceived`: `BigNumber` ; `user`: `string`  }\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/SavingsAccount.d.ts:911](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L911)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `STRATEGY_REGISTRY` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `STRATEGY_REGISTRY()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `allowance` | (`arg0`: `string`, `arg1`: `string`, `arg2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `allowance(address,address,address)` | (`arg0`: `string`, `arg1`: `string`, `arg2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `approve` | (`_token`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `approve(address,address,uint256)` | (`_token`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `balanceInShares` | (`arg0`: `string`, `arg1`: `string`, `arg2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `balanceInShares(address,address,address)` | (`arg0`: `string`, `arg1`: `string`, `arg2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `decreaseAllowance` | (`_token`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `decreaseAllowance(address,address,uint256)` | (`_token`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `deposit` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `deposit(address,address,address,uint256)` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getTotalTokens` | (`_user`: `string`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getTotalTokens(address,address)` | (`_user`: `string`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `increaseAllowance` | (`_token`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `increaseAllowance(address,address,uint256)` | (`_token`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialize` | (`_owner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialize(address)` | (`_owner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `switchStrategy` | (`_currentStrategy`: `string`, `_newStrategy`: `string`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `switchStrategy(address,address,address,uint256)` | (`_currentStrategy`: `string`, `_newStrategy`: `string`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transfer` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transfer(address,address,address,uint256)` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferFrom` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferFrom(address,address,address,address,uint256)` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferShares` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferShares(address,address,address,uint256)` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferSharesFrom` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferSharesFrom(address,address,address,address,uint256)` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdraw` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdraw(address,address,address,uint256,bool)` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawAll(address)` | (`_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawAll(address,address)` | (`_token`: `string`, `_strategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawFrom` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawFrom(address,address,address,address,uint256,bool)` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawShares` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawShares(address,address,address,uint256,bool)` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawSharesFrom` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawSharesFrom(address,address,address,address,uint256,bool)` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/SavingsAccount.d.ts:160](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L160)

___

### interface

• **interface**: [`SavingsAccountInterface`](../interfaces/wrappers_SavingsAccount.SavingsAccountInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/SavingsAccount.d.ts:158](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L158)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `STRATEGY_REGISTRY` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `STRATEGY_REGISTRY()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `allowance` | (`arg0`: `string`, `arg1`: `string`, `arg2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `allowance(address,address,address)` | (`arg0`: `string`, `arg1`: `string`, `arg2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `approve` | (`_token`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `approve(address,address,uint256)` | (`_token`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `balanceInShares` | (`arg0`: `string`, `arg1`: `string`, `arg2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `balanceInShares(address,address,address)` | (`arg0`: `string`, `arg1`: `string`, `arg2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `decreaseAllowance` | (`_token`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `decreaseAllowance(address,address,uint256)` | (`_token`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `deposit` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `deposit(address,address,address,uint256)` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getTotalTokens` | (`_user`: `string`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getTotalTokens(address,address)` | (`_user`: `string`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `increaseAllowance` | (`_token`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `increaseAllowance(address,address,uint256)` | (`_token`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialize` | (`_owner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialize(address)` | (`_owner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `switchStrategy` | (`_currentStrategy`: `string`, `_newStrategy`: `string`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `switchStrategy(address,address,address,uint256)` | (`_currentStrategy`: `string`, `_newStrategy`: `string`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transfer` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transfer(address,address,address,uint256)` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom(address,address,address,address,uint256)` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferShares` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferShares(address,address,address,uint256)` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferSharesFrom` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferSharesFrom(address,address,address,address,uint256)` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdraw` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdraw(address,address,address,uint256,bool)` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawAll(address)` | (`_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawAll(address,address)` | (`_token`: `string`, `_strategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawFrom` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawFrom(address,address,address,address,uint256,bool)` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_amount`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawShares` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawShares(address,address,address,uint256,bool)` | (`_token`: `string`, `_strategy`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawSharesFrom` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawSharesFrom(address,address,address,address,uint256,bool)` | (`_token`: `string`, `_strategy`: `string`, `_from`: `string`, `_to`: `string`, `_shares`: `BigNumberish`, `_receiveShares`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/SavingsAccount.d.ts:1284](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L1284)

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

### STRATEGY\_REGISTRY

▸ **STRATEGY_REGISTRY**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:431](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L431)

___

### STRATEGY\_REGISTRY()

▸ **STRATEGY_REGISTRY()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:433](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L433)

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

### allowance

▸ **allowance**(`arg0`, `arg1`, `arg2`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `string` |
| `arg2` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:435](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L435)

___

### allowance(address,address,address)

▸ **allowance(address,address,address)**(`arg0`, `arg1`, `arg2`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `string` |
| `arg2` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:437](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L437)

___

### approve

▸ **approve**(`_token`, `_to`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_to` | `string` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:439](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L439)

___

### approve(address,address,uint256)

▸ **approve(address,address,uint256)**(`_token`, `_to`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_to` | `string` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:446](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L446)

___

### attach

▸ **attach**(`addressOrName`): [`SavingsAccount`](wrappers_SavingsAccount.SavingsAccount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`SavingsAccount`](wrappers_SavingsAccount.SavingsAccount.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/SavingsAccount.d.ts:119](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L119)

___

### balanceInShares

▸ **balanceInShares**(`arg0`, `arg1`, `arg2`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `string` |
| `arg2` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:453](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L453)

___

### balanceInShares(address,address,address)

▸ **balanceInShares(address,address,address)**(`arg0`, `arg1`, `arg2`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `string` |
| `arg2` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:455](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L455)

___

### connect

▸ **connect**(`signerOrProvider`): [`SavingsAccount`](wrappers_SavingsAccount.SavingsAccount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`SavingsAccount`](wrappers_SavingsAccount.SavingsAccount.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/SavingsAccount.d.ts:118](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L118)

___

### decreaseAllowance

▸ **decreaseAllowance**(`_token`, `_to`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_to` | `string` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:457](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L457)

___

### decreaseAllowance(address,address,uint256)

▸ **decreaseAllowance(address,address,uint256)**(`_token`, `_to`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_to` | `string` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:464](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L464)

___

### deployed

▸ **deployed**(): `Promise`<[`SavingsAccount`](wrappers_SavingsAccount.SavingsAccount.md)\>

#### Returns

`Promise`<[`SavingsAccount`](wrappers_SavingsAccount.SavingsAccount.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/SavingsAccount.d.ts:120](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L120)

___

### deposit

▸ **deposit**(`_token`, `_strategy`, `_to`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_strategy` | `string` |
| `_to` | `string` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:471](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L471)

___

### deposit(address,address,address,uint256)

▸ **deposit(address,address,address,uint256)**(`_token`, `_strategy`, `_to`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_strategy` | `string` |
| `_to` | `string` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:479](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L479)

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

[src/wrappers/SavingsAccount.d.ts:487](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L487)

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

[src/wrappers/SavingsAccount.d.ts:489](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L489)

___

### increaseAllowance

▸ **increaseAllowance**(`_token`, `_to`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_to` | `string` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:495](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L495)

___

### increaseAllowance(address,address,uint256)

▸ **increaseAllowance(address,address,uint256)**(`_token`, `_to`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_to` | `string` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:502](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L502)

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

[src/wrappers/SavingsAccount.d.ts:509](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L509)

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

[src/wrappers/SavingsAccount.d.ts:511](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L511)

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

[src/wrappers/SavingsAccount.d.ts:122](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L122)

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

[src/wrappers/SavingsAccount.d.ts:145](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L145)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`SavingsAccount`](wrappers_SavingsAccount.SavingsAccount.md)

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

[`SavingsAccount`](wrappers_SavingsAccount.SavingsAccount.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/SavingsAccount.d.ts:125](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L125)

▸ **off**(`eventName`, `listener`): [`SavingsAccount`](wrappers_SavingsAccount.SavingsAccount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`SavingsAccount`](wrappers_SavingsAccount.SavingsAccount.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/SavingsAccount.d.ts:146](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L146)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`SavingsAccount`](wrappers_SavingsAccount.SavingsAccount.md)

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

[`SavingsAccount`](wrappers_SavingsAccount.SavingsAccount.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/SavingsAccount.d.ts:129](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L129)

▸ **on**(`eventName`, `listener`): [`SavingsAccount`](wrappers_SavingsAccount.SavingsAccount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`SavingsAccount`](wrappers_SavingsAccount.SavingsAccount.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/SavingsAccount.d.ts:147](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L147)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`SavingsAccount`](wrappers_SavingsAccount.SavingsAccount.md)

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

[`SavingsAccount`](wrappers_SavingsAccount.SavingsAccount.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/SavingsAccount.d.ts:133](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L133)

▸ **once**(`eventName`, `listener`): [`SavingsAccount`](wrappers_SavingsAccount.SavingsAccount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`SavingsAccount`](wrappers_SavingsAccount.SavingsAccount.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/SavingsAccount.d.ts:148](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L148)

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

[src/wrappers/SavingsAccount.d.ts:513](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L513)

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

[src/wrappers/SavingsAccount.d.ts:515](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L515)

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

[src/wrappers/SavingsAccount.d.ts:152](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L152)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`SavingsAccount`](wrappers_SavingsAccount.SavingsAccount.md)

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

[`SavingsAccount`](wrappers_SavingsAccount.SavingsAccount.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/SavingsAccount.d.ts:141](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L141)

▸ **removeAllListeners**(`eventName?`): [`SavingsAccount`](wrappers_SavingsAccount.SavingsAccount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`SavingsAccount`](wrappers_SavingsAccount.SavingsAccount.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/SavingsAccount.d.ts:150](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L150)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`SavingsAccount`](wrappers_SavingsAccount.SavingsAccount.md)

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

[`SavingsAccount`](wrappers_SavingsAccount.SavingsAccount.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/SavingsAccount.d.ts:137](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L137)

▸ **removeListener**(`eventName`, `listener`): [`SavingsAccount`](wrappers_SavingsAccount.SavingsAccount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`SavingsAccount`](wrappers_SavingsAccount.SavingsAccount.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/SavingsAccount.d.ts:149](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L149)

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

[src/wrappers/SavingsAccount.d.ts:517](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L517)

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

[src/wrappers/SavingsAccount.d.ts:519](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L519)

___

### switchStrategy

▸ **switchStrategy**(`_currentStrategy`, `_newStrategy`, `_token`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_currentStrategy` | `string` |
| `_newStrategy` | `string` |
| `_token` | `string` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:521](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L521)

___

### switchStrategy(address,address,address,uint256)

▸ **switchStrategy(address,address,address,uint256)**(`_currentStrategy`, `_newStrategy`, `_token`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_currentStrategy` | `string` |
| `_newStrategy` | `string` |
| `_token` | `string` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:529](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L529)

___

### transfer

▸ **transfer**(`_token`, `_strategy`, `_to`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_strategy` | `string` |
| `_to` | `string` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:537](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L537)

___

### transfer(address,address,address,uint256)

▸ **transfer(address,address,address,uint256)**(`_token`, `_strategy`, `_to`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_strategy` | `string` |
| `_to` | `string` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:545](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L545)

___

### transferFrom

▸ **transferFrom**(`_token`, `_strategy`, `_from`, `_to`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_strategy` | `string` |
| `_from` | `string` |
| `_to` | `string` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:553](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L553)

___

### transferFrom(address,address,address,address,uint256)

▸ **transferFrom(address,address,address,address,uint256)**(`_token`, `_strategy`, `_from`, `_to`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_strategy` | `string` |
| `_from` | `string` |
| `_to` | `string` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:562](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L562)

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

[src/wrappers/SavingsAccount.d.ts:571](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L571)

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

[src/wrappers/SavingsAccount.d.ts:573](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L573)

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

[src/wrappers/SavingsAccount.d.ts:575](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L575)

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

[src/wrappers/SavingsAccount.d.ts:583](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L583)

___

### transferSharesFrom

▸ **transferSharesFrom**(`_token`, `_strategy`, `_from`, `_to`, `_shares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_strategy` | `string` |
| `_from` | `string` |
| `_to` | `string` |
| `_shares` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:591](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L591)

___

### transferSharesFrom(address,address,address,address,uint256)

▸ **transferSharesFrom(address,address,address,address,uint256)**(`_token`, `_strategy`, `_from`, `_to`, `_shares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_strategy` | `string` |
| `_from` | `string` |
| `_to` | `string` |
| `_shares` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:600](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L600)

___

### withdraw

▸ **withdraw**(`_token`, `_strategy`, `_to`, `_amount`, `_receiveShares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_strategy` | `string` |
| `_to` | `string` |
| `_amount` | `BigNumberish` |
| `_receiveShares` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:609](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L609)

___

### withdraw(address,address,address,uint256,bool)

▸ **withdraw(address,address,address,uint256,bool)**(`_token`, `_strategy`, `_to`, `_amount`, `_receiveShares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_strategy` | `string` |
| `_to` | `string` |
| `_amount` | `BigNumberish` |
| `_receiveShares` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:618](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L618)

___

### withdrawAll(address)

▸ **withdrawAll(address)**(`_token`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:633](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L633)

___

### withdrawAll(address,address)

▸ **withdrawAll(address,address)**(`_token`, `_strategy`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_strategy` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:627](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L627)

___

### withdrawFrom

▸ **withdrawFrom**(`_token`, `_strategy`, `_from`, `_to`, `_amount`, `_receiveShares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_strategy` | `string` |
| `_from` | `string` |
| `_to` | `string` |
| `_amount` | `BigNumberish` |
| `_receiveShares` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:635](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L635)

___

### withdrawFrom(address,address,address,address,uint256,bool)

▸ **withdrawFrom(address,address,address,address,uint256,bool)**(`_token`, `_strategy`, `_from`, `_to`, `_amount`, `_receiveShares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_strategy` | `string` |
| `_from` | `string` |
| `_to` | `string` |
| `_amount` | `BigNumberish` |
| `_receiveShares` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:645](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L645)

___

### withdrawShares

▸ **withdrawShares**(`_token`, `_strategy`, `_to`, `_shares`, `_receiveShares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_strategy` | `string` |
| `_to` | `string` |
| `_shares` | `BigNumberish` |
| `_receiveShares` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:655](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L655)

___

### withdrawShares(address,address,address,uint256,bool)

▸ **withdrawShares(address,address,address,uint256,bool)**(`_token`, `_strategy`, `_to`, `_shares`, `_receiveShares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_strategy` | `string` |
| `_to` | `string` |
| `_shares` | `BigNumberish` |
| `_receiveShares` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:664](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L664)

___

### withdrawSharesFrom

▸ **withdrawSharesFrom**(`_token`, `_strategy`, `_from`, `_to`, `_shares`, `_receiveShares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_strategy` | `string` |
| `_from` | `string` |
| `_to` | `string` |
| `_shares` | `BigNumberish` |
| `_receiveShares` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:673](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L673)

___

### withdrawSharesFrom(address,address,address,address,uint256,bool)

▸ **withdrawSharesFrom(address,address,address,address,uint256,bool)**(`_token`, `_strategy`, `_from`, `_to`, `_shares`, `_receiveShares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_strategy` | `string` |
| `_from` | `string` |
| `_to` | `string` |
| `_shares` | `BigNumberish` |
| `_receiveShares` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/SavingsAccount.d.ts:683](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/SavingsAccount.d.ts#L683)

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
