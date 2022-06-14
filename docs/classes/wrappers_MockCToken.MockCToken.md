[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/MockCToken](../modules/wrappers_MockCToken.md) / MockCToken

# Class: MockCToken

[wrappers/MockCToken](../modules/wrappers_MockCToken.md).MockCToken

## Hierarchy

- `Contract`

  ↳ **`MockCToken`**

## Table of contents

### Constructors

- [constructor](wrappers_MockCToken.MockCToken.md#constructor)

### Properties

- [\_deployedPromise](wrappers_MockCToken.MockCToken.md#_deployedpromise)
- [\_runningEvents](wrappers_MockCToken.MockCToken.md#_runningevents)
- [\_wrappedEmits](wrappers_MockCToken.MockCToken.md#_wrappedemits)
- [address](wrappers_MockCToken.MockCToken.md#address)
- [callStatic](wrappers_MockCToken.MockCToken.md#callstatic)
- [deployTransaction](wrappers_MockCToken.MockCToken.md#deploytransaction)
- [estimateGas](wrappers_MockCToken.MockCToken.md#estimategas)
- [filters](wrappers_MockCToken.MockCToken.md#filters)
- [functions](wrappers_MockCToken.MockCToken.md#functions)
- [interface](wrappers_MockCToken.MockCToken.md#interface)
- [populateTransaction](wrappers_MockCToken.MockCToken.md#populatetransaction)
- [provider](wrappers_MockCToken.MockCToken.md#provider)
- [resolvedAddress](wrappers_MockCToken.MockCToken.md#resolvedaddress)
- [signer](wrappers_MockCToken.MockCToken.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_MockCToken.MockCToken.md#_checkrunningevents)
- [\_deployed](wrappers_MockCToken.MockCToken.md#_deployed)
- [\_wrapEvent](wrappers_MockCToken.MockCToken.md#_wrapevent)
- [allowance](wrappers_MockCToken.MockCToken.md#allowance)
- [allowance(address,address)](wrappers_MockCToken.MockCToken.md#allowance(address,address))
- [approve](wrappers_MockCToken.MockCToken.md#approve)
- [approve(address,uint256)](wrappers_MockCToken.MockCToken.md#approve(address,uint256))
- [attach](wrappers_MockCToken.MockCToken.md#attach)
- [balanceOf](wrappers_MockCToken.MockCToken.md#balanceof)
- [balanceOf(address)](wrappers_MockCToken.MockCToken.md#balanceof(address))
- [balanceOfUnderlying](wrappers_MockCToken.MockCToken.md#balanceofunderlying)
- [balanceOfUnderlying(address)](wrappers_MockCToken.MockCToken.md#balanceofunderlying(address))
- [comptroller](wrappers_MockCToken.MockCToken.md#comptroller)
- [comptroller()](wrappers_MockCToken.MockCToken.md#comptroller())
- [connect](wrappers_MockCToken.MockCToken.md#connect)
- [decimals](wrappers_MockCToken.MockCToken.md#decimals)
- [decimals()](wrappers_MockCToken.MockCToken.md#decimals())
- [decreaseAllowance](wrappers_MockCToken.MockCToken.md#decreaseallowance)
- [decreaseAllowance(address,uint256)](wrappers_MockCToken.MockCToken.md#decreaseallowance(address,uint256))
- [deployed](wrappers_MockCToken.MockCToken.md#deployed)
- [emit](wrappers_MockCToken.MockCToken.md#emit)
- [exchangeRateCurrent](wrappers_MockCToken.MockCToken.md#exchangeratecurrent)
- [exchangeRateCurrent()](wrappers_MockCToken.MockCToken.md#exchangeratecurrent())
- [fallback](wrappers_MockCToken.MockCToken.md#fallback)
- [getCash](wrappers_MockCToken.MockCToken.md#getcash)
- [getCash()](wrappers_MockCToken.MockCToken.md#getcash())
- [increaseAllowance](wrappers_MockCToken.MockCToken.md#increaseallowance)
- [increaseAllowance(address,uint256)](wrappers_MockCToken.MockCToken.md#increaseallowance(address,uint256))
- [listenerCount](wrappers_MockCToken.MockCToken.md#listenercount)
- [listeners](wrappers_MockCToken.MockCToken.md#listeners)
- [mint](wrappers_MockCToken.MockCToken.md#mint)
- [mint(uint256)](wrappers_MockCToken.MockCToken.md#mint(uint256))
- [name](wrappers_MockCToken.MockCToken.md#name)
- [name()](wrappers_MockCToken.MockCToken.md#name())
- [off](wrappers_MockCToken.MockCToken.md#off)
- [on](wrappers_MockCToken.MockCToken.md#on)
- [once](wrappers_MockCToken.MockCToken.md#once)
- [queryFilter](wrappers_MockCToken.MockCToken.md#queryfilter)
- [redeem](wrappers_MockCToken.MockCToken.md#redeem)
- [redeem(uint256)](wrappers_MockCToken.MockCToken.md#redeem(uint256))
- [removeAllListeners](wrappers_MockCToken.MockCToken.md#removealllisteners)
- [removeListener](wrappers_MockCToken.MockCToken.md#removelistener)
- [symbol](wrappers_MockCToken.MockCToken.md#symbol)
- [symbol()](wrappers_MockCToken.MockCToken.md#symbol())
- [totalSupply](wrappers_MockCToken.MockCToken.md#totalsupply)
- [totalSupply()](wrappers_MockCToken.MockCToken.md#totalsupply())
- [transfer](wrappers_MockCToken.MockCToken.md#transfer)
- [transfer(address,uint256)](wrappers_MockCToken.MockCToken.md#transfer(address,uint256))
- [transferFrom](wrappers_MockCToken.MockCToken.md#transferfrom)
- [transferFrom(address,address,uint256)](wrappers_MockCToken.MockCToken.md#transferfrom(address,address,uint256))
- [underlying](wrappers_MockCToken.MockCToken.md#underlying)
- [underlying()](wrappers_MockCToken.MockCToken.md#underlying())
- [getContractAddress](wrappers_MockCToken.MockCToken.md#getcontractaddress)
- [getInterface](wrappers_MockCToken.MockCToken.md#getinterface)
- [isIndexed](wrappers_MockCToken.MockCToken.md#isindexed)

## Constructors

### constructor

• **new MockCToken**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `balanceOfUnderlying` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `balanceOfUnderlying(address)` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `comptroller` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `comptroller()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `decreaseAllowance` | (`spender`: `string`, `subtractedValue`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `decreaseAllowance(address,uint256)` | (`spender`: `string`, `subtractedValue`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `exchangeRateCurrent` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `exchangeRateCurrent()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCash` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCash()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `increaseAllowance` | (`spender`: `string`, `addedValue`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `increaseAllowance(address,uint256)` | (`spender`: `string`, `addedValue`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `mint` | (`mintAmount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `mint(uint256)` | (`mintAmount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `name()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `redeem` | (`redeemTokens`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `redeem(uint256)` | (`redeemTokens`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `symbol()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transfer(address,uint256)` | (`recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transferFrom` | (`sender`: `string`, `recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transferFrom(address,address,uint256)` | (`sender`: `string`, `recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `underlying` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `underlying()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/MockCToken.d.ts:369](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L369)

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
| `balanceOfUnderlying` | (`account`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `balanceOfUnderlying(address)` | (`account`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `comptroller` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `comptroller()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decreaseAllowance` | (`spender`: `string`, `subtractedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `decreaseAllowance(address,uint256)` | (`spender`: `string`, `subtractedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `exchangeRateCurrent` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `exchangeRateCurrent()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getCash` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getCash()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `increaseAllowance` | (`spender`: `string`, `addedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `increaseAllowance(address,uint256)` | (`spender`: `string`, `addedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `mint` | (`mintAmount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `mint(uint256)` | (`mintAmount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `name()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `redeem` | (`redeemTokens`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `redeem(uint256)` | (`redeemTokens`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `symbol()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transfer(address,uint256)` | (`recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferFrom` | (`sender`: `string`, `recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferFrom(address,address,uint256)` | (`sender`: `string`, `recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `underlying` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `underlying()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/MockCToken.d.ts:462](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L462)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Approval` | (`owner`: `string`, `spender`: `string`, `value`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `BigNumber`], { `owner`: `string` ; `spender`: `string` ; `value`: `BigNumber`  }\> |
| `Transfer` | (`from`: `string`, `to`: `string`, `value`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `BigNumber`], { `from`: `string` ; `to`: `string` ; `value`: `BigNumber`  }\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/MockCToken.d.ts:448](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L448)

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
| `balanceOfUnderlying` | (`account`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `balanceOfUnderlying(address)` | (`account`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `comptroller` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `comptroller()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `decreaseAllowance` | (`spender`: `string`, `subtractedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `decreaseAllowance(address,uint256)` | (`spender`: `string`, `subtractedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `exchangeRateCurrent` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `exchangeRateCurrent()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getCash` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getCash()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `increaseAllowance` | (`spender`: `string`, `addedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `increaseAllowance(address,uint256)` | (`spender`: `string`, `addedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `mint` | (`mintAmount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `mint(uint256)` | (`mintAmount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `name()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `redeem` | (`redeemTokens`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `redeem(uint256)` | (`redeemTokens`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `symbol()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `totalSupply()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `transfer` | (`recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transfer(address,uint256)` | (`recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferFrom` | (`sender`: `string`, `recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferFrom(address,address,uint256)` | (`sender`: `string`, `recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `underlying` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `underlying()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/MockCToken.d.ts:134](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L134)

___

### interface

• **interface**: [`MockCTokenInterface`](../interfaces/wrappers_MockCToken.MockCTokenInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/MockCToken.d.ts:132](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L132)

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
| `balanceOfUnderlying` | (`account`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `balanceOfUnderlying(address)` | (`account`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `comptroller` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `comptroller()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `decreaseAllowance` | (`spender`: `string`, `subtractedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `decreaseAllowance(address,uint256)` | (`spender`: `string`, `subtractedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `exchangeRateCurrent` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `exchangeRateCurrent()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getCash` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getCash()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `increaseAllowance` | (`spender`: `string`, `addedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `increaseAllowance(address,uint256)` | (`spender`: `string`, `addedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `mint` | (`mintAmount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `mint(uint256)` | (`mintAmount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `name()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `redeem` | (`redeemTokens`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `redeem(uint256)` | (`redeemTokens`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `symbol()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transfer` | (`recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transfer(address,uint256)` | (`recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom` | (`sender`: `string`, `recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom(address,address,uint256)` | (`sender`: `string`, `recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `underlying` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `underlying()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/MockCToken.d.ts:570](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L570)

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

[src/wrappers/MockCToken.d.ts:256](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L256)

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

[src/wrappers/MockCToken.d.ts:258](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L258)

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

[src/wrappers/MockCToken.d.ts:260](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L260)

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

[src/wrappers/MockCToken.d.ts:262](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L262)

___

### attach

▸ **attach**(`addressOrName`): [`MockCToken`](wrappers_MockCToken.MockCToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`MockCToken`](wrappers_MockCToken.MockCToken.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/MockCToken.d.ts:93](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L93)

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

[src/wrappers/MockCToken.d.ts:268](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L268)

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

[src/wrappers/MockCToken.d.ts:270](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L270)

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

[src/wrappers/MockCToken.d.ts:272](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L272)

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

[src/wrappers/MockCToken.d.ts:274](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L274)

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

[src/wrappers/MockCToken.d.ts:279](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L279)

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

[src/wrappers/MockCToken.d.ts:281](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L281)

___

### connect

▸ **connect**(`signerOrProvider`): [`MockCToken`](wrappers_MockCToken.MockCToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`MockCToken`](wrappers_MockCToken.MockCToken.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/MockCToken.d.ts:92](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L92)

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

[src/wrappers/MockCToken.d.ts:283](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L283)

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

[src/wrappers/MockCToken.d.ts:285](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L285)

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

[src/wrappers/MockCToken.d.ts:287](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L287)

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

[src/wrappers/MockCToken.d.ts:293](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L293)

___

### deployed

▸ **deployed**(): `Promise`<[`MockCToken`](wrappers_MockCToken.MockCToken.md)\>

#### Returns

`Promise`<[`MockCToken`](wrappers_MockCToken.MockCToken.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/MockCToken.d.ts:94](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L94)

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

[src/wrappers/MockCToken.d.ts:299](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L299)

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

[src/wrappers/MockCToken.d.ts:301](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L301)

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

[src/wrappers/MockCToken.d.ts:303](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L303)

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

[src/wrappers/MockCToken.d.ts:305](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L305)

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

[src/wrappers/MockCToken.d.ts:307](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L307)

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

[src/wrappers/MockCToken.d.ts:313](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L313)

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

[src/wrappers/MockCToken.d.ts:96](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L96)

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

[src/wrappers/MockCToken.d.ts:119](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L119)

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

[src/wrappers/MockCToken.d.ts:319](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L319)

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

[src/wrappers/MockCToken.d.ts:321](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L321)

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

[src/wrappers/MockCToken.d.ts:323](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L323)

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

[src/wrappers/MockCToken.d.ts:325](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L325)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockCToken`](wrappers_MockCToken.MockCToken.md)

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

[`MockCToken`](wrappers_MockCToken.MockCToken.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/MockCToken.d.ts:99](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L99)

▸ **off**(`eventName`, `listener`): [`MockCToken`](wrappers_MockCToken.MockCToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockCToken`](wrappers_MockCToken.MockCToken.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/MockCToken.d.ts:120](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L120)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockCToken`](wrappers_MockCToken.MockCToken.md)

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

[`MockCToken`](wrappers_MockCToken.MockCToken.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/MockCToken.d.ts:103](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L103)

▸ **on**(`eventName`, `listener`): [`MockCToken`](wrappers_MockCToken.MockCToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockCToken`](wrappers_MockCToken.MockCToken.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/MockCToken.d.ts:121](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L121)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockCToken`](wrappers_MockCToken.MockCToken.md)

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

[`MockCToken`](wrappers_MockCToken.MockCToken.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/MockCToken.d.ts:107](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L107)

▸ **once**(`eventName`, `listener`): [`MockCToken`](wrappers_MockCToken.MockCToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockCToken`](wrappers_MockCToken.MockCToken.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/MockCToken.d.ts:122](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L122)

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

[src/wrappers/MockCToken.d.ts:126](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L126)

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

[src/wrappers/MockCToken.d.ts:327](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L327)

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

[src/wrappers/MockCToken.d.ts:329](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L329)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`MockCToken`](wrappers_MockCToken.MockCToken.md)

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

[`MockCToken`](wrappers_MockCToken.MockCToken.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/MockCToken.d.ts:115](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L115)

▸ **removeAllListeners**(`eventName?`): [`MockCToken`](wrappers_MockCToken.MockCToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`MockCToken`](wrappers_MockCToken.MockCToken.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/MockCToken.d.ts:124](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L124)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockCToken`](wrappers_MockCToken.MockCToken.md)

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

[`MockCToken`](wrappers_MockCToken.MockCToken.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/MockCToken.d.ts:111](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L111)

▸ **removeListener**(`eventName`, `listener`): [`MockCToken`](wrappers_MockCToken.MockCToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockCToken`](wrappers_MockCToken.MockCToken.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/MockCToken.d.ts:123](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L123)

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

[src/wrappers/MockCToken.d.ts:331](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L331)

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

[src/wrappers/MockCToken.d.ts:333](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L333)

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

[src/wrappers/MockCToken.d.ts:335](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L335)

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

[src/wrappers/MockCToken.d.ts:337](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L337)

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

[src/wrappers/MockCToken.d.ts:339](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L339)

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

[src/wrappers/MockCToken.d.ts:345](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L345)

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

[src/wrappers/MockCToken.d.ts:351](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L351)

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

[src/wrappers/MockCToken.d.ts:358](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L358)

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

[src/wrappers/MockCToken.d.ts:365](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L365)

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

[src/wrappers/MockCToken.d.ts:367](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/MockCToken.d.ts#L367)

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
