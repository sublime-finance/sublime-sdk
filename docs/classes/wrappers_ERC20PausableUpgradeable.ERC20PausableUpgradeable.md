[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/ERC20PausableUpgradeable](../modules/wrappers_ERC20PausableUpgradeable.md) / ERC20PausableUpgradeable

# Class: ERC20PausableUpgradeable

[wrappers/ERC20PausableUpgradeable](../modules/wrappers_ERC20PausableUpgradeable.md).ERC20PausableUpgradeable

## Hierarchy

- `Contract`

  ↳ **`ERC20PausableUpgradeable`**

## Table of contents

### Constructors

- [constructor](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#constructor)

### Properties

- [\_deployedPromise](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#_deployedpromise)
- [\_runningEvents](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#_runningevents)
- [\_wrappedEmits](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#_wrappedemits)
- [address](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#address)
- [callStatic](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#callstatic)
- [deployTransaction](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#deploytransaction)
- [estimateGas](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#estimategas)
- [filters](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#filters)
- [functions](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#functions)
- [interface](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#interface)
- [populateTransaction](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#populatetransaction)
- [provider](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#provider)
- [resolvedAddress](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#resolvedaddress)
- [signer](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#_checkrunningevents)
- [\_deployed](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#_deployed)
- [\_wrapEvent](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#_wrapevent)
- [allowance](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#allowance)
- [allowance(address,address)](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#allowance(address,address))
- [approve](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#approve)
- [approve(address,uint256)](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#approve(address,uint256))
- [attach](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#attach)
- [balanceOf](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#balanceof)
- [balanceOf(address)](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#balanceof(address))
- [connect](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#connect)
- [decimals](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#decimals)
- [decimals()](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#decimals())
- [decreaseAllowance](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#decreaseallowance)
- [decreaseAllowance(address,uint256)](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#decreaseallowance(address,uint256))
- [deployed](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#deployed)
- [emit](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#emit)
- [fallback](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#fallback)
- [increaseAllowance](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#increaseallowance)
- [increaseAllowance(address,uint256)](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#increaseallowance(address,uint256))
- [listenerCount](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#listenercount)
- [listeners](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#listeners)
- [name](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#name)
- [name()](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#name())
- [off](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#off)
- [on](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#on)
- [once](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#once)
- [paused](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#paused)
- [paused()](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#paused())
- [queryFilter](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#queryfilter)
- [removeAllListeners](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#removealllisteners)
- [removeListener](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#removelistener)
- [symbol](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#symbol)
- [symbol()](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#symbol())
- [totalSupply](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#totalsupply)
- [totalSupply()](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#totalsupply())
- [transfer](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#transfer)
- [transfer(address,uint256)](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#transfer(address,uint256))
- [transferFrom](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#transferfrom)
- [transferFrom(address,address,uint256)](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#transferfrom(address,address,uint256))
- [getContractAddress](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#getcontractaddress)
- [getInterface](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#getinterface)
- [isIndexed](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md#isindexed)

## Constructors

### constructor

• **new ERC20PausableUpgradeable**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `allowance(address,address)` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `approve(address,uint256)` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `balanceOf` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `balanceOf(address)` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `decreaseAllowance` | (`spender`: `string`, `subtractedValue`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `decreaseAllowance(address,uint256)` | (`spender`: `string`, `subtractedValue`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `increaseAllowance` | (`spender`: `string`, `addedValue`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `increaseAllowance(address,uint256)` | (`spender`: `string`, `addedValue`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `name()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `paused` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `paused()` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `symbol()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transfer(address,uint256)` | (`recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transferFrom` | (`sender`: `string`, `recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transferFrom(address,address,uint256)` | (`sender`: `string`, `recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:298](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L298)

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
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `allowance(address,address)` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `approve(address,uint256)` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `balanceOf` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `balanceOf(address)` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decreaseAllowance` | (`spender`: `string`, `subtractedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `decreaseAllowance(address,uint256)` | (`spender`: `string`, `subtractedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `increaseAllowance` | (`spender`: `string`, `addedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `increaseAllowance(address,uint256)` | (`spender`: `string`, `addedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `name()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `paused` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `paused()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `symbol()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transfer(address,uint256)` | (`recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferFrom` | (`sender`: `string`, `recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferFrom(address,address,uint256)` | (`sender`: `string`, `recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:371](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L371)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Approval` | (`owner`: `string`, `spender`: `string`, `value`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `BigNumber`], { `owner`: `string` ; `spender`: `string` ; `value`: `BigNumber`  }\> |
| `Paused` | (`account`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `account`: `string`  }\> |
| `Transfer` | (`from`: `string`, `to`: `string`, `value`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `BigNumber`], { `from`: `string` ; `to`: `string` ; `value`: `BigNumber`  }\> |
| `Unpaused` | (`account`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `account`: `string`  }\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:353](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L353)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `allowance(address,address)` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `approve(address,uint256)` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `balanceOf` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `balanceOf(address)` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `decreaseAllowance` | (`spender`: `string`, `subtractedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `decreaseAllowance(address,uint256)` | (`spender`: `string`, `subtractedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `increaseAllowance` | (`spender`: `string`, `addedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `increaseAllowance(address,uint256)` | (`spender`: `string`, `addedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `name()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `paused` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `paused()` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `symbol()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `totalSupply()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `transfer` | (`recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transfer(address,uint256)` | (`recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferFrom` | (`sender`: `string`, `recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferFrom(address,address,uint256)` | (`sender`: `string`, `recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:120](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L120)

___

### interface

• **interface**: [`ERC20PausableUpgradeableInterface`](../interfaces/wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeableInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:118](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L118)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `allowance(address,address)` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `approve(address,uint256)` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `balanceOf` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `balanceOf(address)` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `decreaseAllowance` | (`spender`: `string`, `subtractedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `decreaseAllowance(address,uint256)` | (`spender`: `string`, `subtractedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `increaseAllowance` | (`spender`: `string`, `addedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `increaseAllowance(address,uint256)` | (`spender`: `string`, `addedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `name()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `paused` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `paused()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `symbol()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transfer` | (`recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transfer(address,uint256)` | (`recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom` | (`sender`: `string`, `recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom(address,address,uint256)` | (`sender`: `string`, `recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:455](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L455)

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

▸ **allowance**(`owner`, `spender`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `spender` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:212](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L212)

___

### allowance(address,address)

▸ **allowance(address,address)**(`owner`, `spender`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `spender` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:214](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L214)

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

[src/wrappers/ERC20PausableUpgradeable.d.ts:216](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L216)

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

[src/wrappers/ERC20PausableUpgradeable.d.ts:218](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L218)

___

### attach

▸ **attach**(`addressOrName`): [`ERC20PausableUpgradeable`](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`ERC20PausableUpgradeable`](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:79](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L79)

___

### balanceOf

▸ **balanceOf**(`account`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:224](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L224)

___

### balanceOf(address)

▸ **balanceOf(address)**(`account`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:226](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L226)

___

### connect

▸ **connect**(`signerOrProvider`): [`ERC20PausableUpgradeable`](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`ERC20PausableUpgradeable`](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:78](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L78)

___

### decimals

▸ **decimals**(`overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:228](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L228)

___

### decimals()

▸ **decimals()**(`overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:230](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L230)

___

### decreaseAllowance

▸ **decreaseAllowance**(`spender`, `subtractedValue`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spender` | `string` |
| `subtractedValue` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:232](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L232)

___

### decreaseAllowance(address,uint256)

▸ **decreaseAllowance(address,uint256)**(`spender`, `subtractedValue`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spender` | `string` |
| `subtractedValue` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:238](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L238)

___

### deployed

▸ **deployed**(): `Promise`<[`ERC20PausableUpgradeable`](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md)\>

#### Returns

`Promise`<[`ERC20PausableUpgradeable`](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L80)

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

### increaseAllowance

▸ **increaseAllowance**(`spender`, `addedValue`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spender` | `string` |
| `addedValue` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:244](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L244)

___

### increaseAllowance(address,uint256)

▸ **increaseAllowance(address,uint256)**(`spender`, `addedValue`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spender` | `string` |
| `addedValue` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:250](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L250)

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

[src/wrappers/ERC20PausableUpgradeable.d.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L82)

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

[src/wrappers/ERC20PausableUpgradeable.d.ts:105](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L105)

___

### name

▸ **name**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:256](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L256)

___

### name()

▸ **name()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:258](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L258)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ERC20PausableUpgradeable`](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md)

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

[`ERC20PausableUpgradeable`](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L85)

▸ **off**(`eventName`, `listener`): [`ERC20PausableUpgradeable`](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ERC20PausableUpgradeable`](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:106](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L106)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ERC20PausableUpgradeable`](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md)

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

[`ERC20PausableUpgradeable`](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:89](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L89)

▸ **on**(`eventName`, `listener`): [`ERC20PausableUpgradeable`](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ERC20PausableUpgradeable`](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:107](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L107)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ERC20PausableUpgradeable`](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md)

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

[`ERC20PausableUpgradeable`](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:93](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L93)

▸ **once**(`eventName`, `listener`): [`ERC20PausableUpgradeable`](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ERC20PausableUpgradeable`](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:108](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L108)

___

### paused

▸ **paused**(`overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:260](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L260)

___

### paused()

▸ **paused()**(`overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:262](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L262)

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

[src/wrappers/ERC20PausableUpgradeable.d.ts:112](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L112)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`ERC20PausableUpgradeable`](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md)

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

[`ERC20PausableUpgradeable`](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:101](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L101)

▸ **removeAllListeners**(`eventName?`): [`ERC20PausableUpgradeable`](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`ERC20PausableUpgradeable`](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:110](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L110)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ERC20PausableUpgradeable`](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md)

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

[`ERC20PausableUpgradeable`](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:97](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L97)

▸ **removeListener**(`eventName`, `listener`): [`ERC20PausableUpgradeable`](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`ERC20PausableUpgradeable`](wrappers_ERC20PausableUpgradeable.ERC20PausableUpgradeable.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:109](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L109)

___

### symbol

▸ **symbol**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:264](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L264)

___

### symbol()

▸ **symbol()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:266](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L266)

___

### totalSupply

▸ **totalSupply**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:268](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L268)

___

### totalSupply()

▸ **totalSupply()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:270](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L270)

___

### transfer

▸ **transfer**(`recipient`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipient` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:272](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L272)

___

### transfer(address,uint256)

▸ **transfer(address,uint256)**(`recipient`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipient` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:278](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L278)

___

### transferFrom

▸ **transferFrom**(`sender`, `recipient`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | `string` |
| `recipient` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:284](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L284)

___

### transferFrom(address,address,uint256)

▸ **transferFrom(address,address,uint256)**(`sender`, `recipient`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | `string` |
| `recipient` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/ERC20PausableUpgradeable.d.ts:291](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/ERC20PausableUpgradeable.d.ts#L291)

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
