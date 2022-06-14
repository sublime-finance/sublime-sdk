[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/MockCEther](../modules/wrappers_MockCEther.md) / MockCEther

# Class: MockCEther

[wrappers/MockCEther](../modules/wrappers_MockCEther.md).MockCEther

## Hierarchy

- `Contract`

  ↳ **`MockCEther`**

## Table of contents

### Constructors

- [constructor](wrappers_MockCEther.MockCEther.md#constructor)

### Properties

- [\_deployedPromise](wrappers_MockCEther.MockCEther.md#_deployedpromise)
- [\_runningEvents](wrappers_MockCEther.MockCEther.md#_runningevents)
- [\_wrappedEmits](wrappers_MockCEther.MockCEther.md#_wrappedemits)
- [address](wrappers_MockCEther.MockCEther.md#address)
- [callStatic](wrappers_MockCEther.MockCEther.md#callstatic)
- [deployTransaction](wrappers_MockCEther.MockCEther.md#deploytransaction)
- [estimateGas](wrappers_MockCEther.MockCEther.md#estimategas)
- [filters](wrappers_MockCEther.MockCEther.md#filters)
- [functions](wrappers_MockCEther.MockCEther.md#functions)
- [interface](wrappers_MockCEther.MockCEther.md#interface)
- [populateTransaction](wrappers_MockCEther.MockCEther.md#populatetransaction)
- [provider](wrappers_MockCEther.MockCEther.md#provider)
- [resolvedAddress](wrappers_MockCEther.MockCEther.md#resolvedaddress)
- [signer](wrappers_MockCEther.MockCEther.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_MockCEther.MockCEther.md#_checkrunningevents)
- [\_deployed](wrappers_MockCEther.MockCEther.md#_deployed)
- [\_wrapEvent](wrappers_MockCEther.MockCEther.md#_wrapevent)
- [allowance](wrappers_MockCEther.MockCEther.md#allowance)
- [allowance(address,address)](wrappers_MockCEther.MockCEther.md#allowance(address,address))
- [approve](wrappers_MockCEther.MockCEther.md#approve)
- [approve(address,uint256)](wrappers_MockCEther.MockCEther.md#approve(address,uint256))
- [attach](wrappers_MockCEther.MockCEther.md#attach)
- [balanceOf](wrappers_MockCEther.MockCEther.md#balanceof)
- [balanceOf(address)](wrappers_MockCEther.MockCEther.md#balanceof(address))
- [balanceOfUnderlying](wrappers_MockCEther.MockCEther.md#balanceofunderlying)
- [balanceOfUnderlying(address)](wrappers_MockCEther.MockCEther.md#balanceofunderlying(address))
- [connect](wrappers_MockCEther.MockCEther.md#connect)
- [decimals](wrappers_MockCEther.MockCEther.md#decimals)
- [decimals()](wrappers_MockCEther.MockCEther.md#decimals())
- [decreaseAllowance](wrappers_MockCEther.MockCEther.md#decreaseallowance)
- [decreaseAllowance(address,uint256)](wrappers_MockCEther.MockCEther.md#decreaseallowance(address,uint256))
- [deployed](wrappers_MockCEther.MockCEther.md#deployed)
- [emit](wrappers_MockCEther.MockCEther.md#emit)
- [exchangeRateCurrent](wrappers_MockCEther.MockCEther.md#exchangeratecurrent)
- [exchangeRateCurrent()](wrappers_MockCEther.MockCEther.md#exchangeratecurrent())
- [fallback](wrappers_MockCEther.MockCEther.md#fallback)
- [getCash](wrappers_MockCEther.MockCEther.md#getcash)
- [getCash()](wrappers_MockCEther.MockCEther.md#getcash())
- [increaseAllowance](wrappers_MockCEther.MockCEther.md#increaseallowance)
- [increaseAllowance(address,uint256)](wrappers_MockCEther.MockCEther.md#increaseallowance(address,uint256))
- [listenerCount](wrappers_MockCEther.MockCEther.md#listenercount)
- [listeners](wrappers_MockCEther.MockCEther.md#listeners)
- [mint](wrappers_MockCEther.MockCEther.md#mint)
- [mint()](wrappers_MockCEther.MockCEther.md#mint())
- [name](wrappers_MockCEther.MockCEther.md#name)
- [name()](wrappers_MockCEther.MockCEther.md#name())
- [off](wrappers_MockCEther.MockCEther.md#off)
- [on](wrappers_MockCEther.MockCEther.md#on)
- [once](wrappers_MockCEther.MockCEther.md#once)
- [queryFilter](wrappers_MockCEther.MockCEther.md#queryfilter)
- [redeem](wrappers_MockCEther.MockCEther.md#redeem)
- [redeem(uint256)](wrappers_MockCEther.MockCEther.md#redeem(uint256))
- [removeAllListeners](wrappers_MockCEther.MockCEther.md#removealllisteners)
- [removeListener](wrappers_MockCEther.MockCEther.md#removelistener)
- [symbol](wrappers_MockCEther.MockCEther.md#symbol)
- [symbol()](wrappers_MockCEther.MockCEther.md#symbol())
- [totalSupply](wrappers_MockCEther.MockCEther.md#totalsupply)
- [totalSupply()](wrappers_MockCEther.MockCEther.md#totalsupply())
- [transfer](wrappers_MockCEther.MockCEther.md#transfer)
- [transfer(address,uint256)](wrappers_MockCEther.MockCEther.md#transfer(address,uint256))
- [transferFrom](wrappers_MockCEther.MockCEther.md#transferfrom)
- [transferFrom(address,address,uint256)](wrappers_MockCEther.MockCEther.md#transferfrom(address,address,uint256))
- [getContractAddress](wrappers_MockCEther.MockCEther.md#getcontractaddress)
- [getInterface](wrappers_MockCEther.MockCEther.md#getinterface)
- [isIndexed](wrappers_MockCEther.MockCEther.md#isindexed)

## Constructors

### constructor

• **new MockCEther**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `mint` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `mint()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
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

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/MockCEther.d.ts:348](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L348)

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
| `mint` | (`overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `mint()` | (`overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
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

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/MockCEther.d.ts:433](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L433)

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

[src/wrappers/MockCEther.d.ts:419](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L419)

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
| `mint` | (`overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `mint()` | (`overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
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

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/MockCEther.d.ts:129](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L129)

___

### interface

• **interface**: [`MockCEtherInterface`](../interfaces/wrappers_MockCEther.MockCEtherInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/MockCEther.d.ts:127](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L127)

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
| `mint` | (`overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `mint()` | (`overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
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

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/MockCEther.d.ts:533](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L533)

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

[src/wrappers/MockCEther.d.ts:243](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L243)

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

[src/wrappers/MockCEther.d.ts:245](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L245)

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

[src/wrappers/MockCEther.d.ts:247](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L247)

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

[src/wrappers/MockCEther.d.ts:249](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L249)

___

### attach

▸ **attach**(`addressOrName`): [`MockCEther`](wrappers_MockCEther.MockCEther.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`MockCEther`](wrappers_MockCEther.MockCEther.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/MockCEther.d.ts:88](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L88)

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

[src/wrappers/MockCEther.d.ts:255](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L255)

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

[src/wrappers/MockCEther.d.ts:257](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L257)

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

[src/wrappers/MockCEther.d.ts:259](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L259)

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

[src/wrappers/MockCEther.d.ts:261](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L261)

___

### connect

▸ **connect**(`signerOrProvider`): [`MockCEther`](wrappers_MockCEther.MockCEther.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`MockCEther`](wrappers_MockCEther.MockCEther.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/MockCEther.d.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L87)

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

[src/wrappers/MockCEther.d.ts:266](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L266)

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

[src/wrappers/MockCEther.d.ts:268](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L268)

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

[src/wrappers/MockCEther.d.ts:270](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L270)

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

[src/wrappers/MockCEther.d.ts:276](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L276)

___

### deployed

▸ **deployed**(): `Promise`<[`MockCEther`](wrappers_MockCEther.MockCEther.md)\>

#### Returns

`Promise`<[`MockCEther`](wrappers_MockCEther.MockCEther.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/MockCEther.d.ts:89](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L89)

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

[src/wrappers/MockCEther.d.ts:282](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L282)

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

[src/wrappers/MockCEther.d.ts:284](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L284)

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

[src/wrappers/MockCEther.d.ts:286](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L286)

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

[src/wrappers/MockCEther.d.ts:288](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L288)

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

[src/wrappers/MockCEther.d.ts:290](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L290)

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

[src/wrappers/MockCEther.d.ts:296](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L296)

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

[src/wrappers/MockCEther.d.ts:91](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L91)

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

[src/wrappers/MockCEther.d.ts:114](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L114)

___

### mint

▸ **mint**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockCEther.d.ts:302](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L302)

___

### mint()

▸ **mint()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockCEther.d.ts:304](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L304)

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

[src/wrappers/MockCEther.d.ts:306](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L306)

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

[src/wrappers/MockCEther.d.ts:308](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L308)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockCEther`](wrappers_MockCEther.MockCEther.md)

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

[`MockCEther`](wrappers_MockCEther.MockCEther.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/MockCEther.d.ts:94](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L94)

▸ **off**(`eventName`, `listener`): [`MockCEther`](wrappers_MockCEther.MockCEther.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockCEther`](wrappers_MockCEther.MockCEther.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/MockCEther.d.ts:115](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L115)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockCEther`](wrappers_MockCEther.MockCEther.md)

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

[`MockCEther`](wrappers_MockCEther.MockCEther.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/MockCEther.d.ts:98](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L98)

▸ **on**(`eventName`, `listener`): [`MockCEther`](wrappers_MockCEther.MockCEther.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockCEther`](wrappers_MockCEther.MockCEther.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/MockCEther.d.ts:116](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L116)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockCEther`](wrappers_MockCEther.MockCEther.md)

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

[`MockCEther`](wrappers_MockCEther.MockCEther.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/MockCEther.d.ts:102](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L102)

▸ **once**(`eventName`, `listener`): [`MockCEther`](wrappers_MockCEther.MockCEther.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockCEther`](wrappers_MockCEther.MockCEther.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/MockCEther.d.ts:117](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L117)

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

[src/wrappers/MockCEther.d.ts:121](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L121)

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

[src/wrappers/MockCEther.d.ts:310](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L310)

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

[src/wrappers/MockCEther.d.ts:312](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L312)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`MockCEther`](wrappers_MockCEther.MockCEther.md)

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

[`MockCEther`](wrappers_MockCEther.MockCEther.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/MockCEther.d.ts:110](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L110)

▸ **removeAllListeners**(`eventName?`): [`MockCEther`](wrappers_MockCEther.MockCEther.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`MockCEther`](wrappers_MockCEther.MockCEther.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/MockCEther.d.ts:119](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L119)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockCEther`](wrappers_MockCEther.MockCEther.md)

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

[`MockCEther`](wrappers_MockCEther.MockCEther.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/MockCEther.d.ts:106](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L106)

▸ **removeListener**(`eventName`, `listener`): [`MockCEther`](wrappers_MockCEther.MockCEther.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockCEther`](wrappers_MockCEther.MockCEther.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/MockCEther.d.ts:118](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L118)

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

[src/wrappers/MockCEther.d.ts:314](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L314)

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

[src/wrappers/MockCEther.d.ts:316](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L316)

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

[src/wrappers/MockCEther.d.ts:318](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L318)

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

[src/wrappers/MockCEther.d.ts:320](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L320)

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

[src/wrappers/MockCEther.d.ts:322](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L322)

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

[src/wrappers/MockCEther.d.ts:328](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L328)

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

[src/wrappers/MockCEther.d.ts:334](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L334)

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

[src/wrappers/MockCEther.d.ts:341](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/MockCEther.d.ts#L341)

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
