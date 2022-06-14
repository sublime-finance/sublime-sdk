[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/MockWETH](../modules/wrappers_MockWETH.md) / MockWETH

# Class: MockWETH

[wrappers/MockWETH](../modules/wrappers_MockWETH.md).MockWETH

## Hierarchy

- `Contract`

  ↳ **`MockWETH`**

## Table of contents

### Constructors

- [constructor](wrappers_MockWETH.MockWETH.md#constructor)

### Properties

- [\_deployedPromise](wrappers_MockWETH.MockWETH.md#_deployedpromise)
- [\_runningEvents](wrappers_MockWETH.MockWETH.md#_runningevents)
- [\_wrappedEmits](wrappers_MockWETH.MockWETH.md#_wrappedemits)
- [address](wrappers_MockWETH.MockWETH.md#address)
- [callStatic](wrappers_MockWETH.MockWETH.md#callstatic)
- [deployTransaction](wrappers_MockWETH.MockWETH.md#deploytransaction)
- [estimateGas](wrappers_MockWETH.MockWETH.md#estimategas)
- [filters](wrappers_MockWETH.MockWETH.md#filters)
- [functions](wrappers_MockWETH.MockWETH.md#functions)
- [interface](wrappers_MockWETH.MockWETH.md#interface)
- [populateTransaction](wrappers_MockWETH.MockWETH.md#populatetransaction)
- [provider](wrappers_MockWETH.MockWETH.md#provider)
- [resolvedAddress](wrappers_MockWETH.MockWETH.md#resolvedaddress)
- [signer](wrappers_MockWETH.MockWETH.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_MockWETH.MockWETH.md#_checkrunningevents)
- [\_deployed](wrappers_MockWETH.MockWETH.md#_deployed)
- [\_wrapEvent](wrappers_MockWETH.MockWETH.md#_wrapevent)
- [allowance](wrappers_MockWETH.MockWETH.md#allowance)
- [allowance(address,address)](wrappers_MockWETH.MockWETH.md#allowance(address,address))
- [approve](wrappers_MockWETH.MockWETH.md#approve)
- [approve(address,uint256)](wrappers_MockWETH.MockWETH.md#approve(address,uint256))
- [attach](wrappers_MockWETH.MockWETH.md#attach)
- [balanceOf](wrappers_MockWETH.MockWETH.md#balanceof)
- [balanceOf(address)](wrappers_MockWETH.MockWETH.md#balanceof(address))
- [connect](wrappers_MockWETH.MockWETH.md#connect)
- [decimals](wrappers_MockWETH.MockWETH.md#decimals)
- [decimals()](wrappers_MockWETH.MockWETH.md#decimals())
- [deployed](wrappers_MockWETH.MockWETH.md#deployed)
- [deposit](wrappers_MockWETH.MockWETH.md#deposit)
- [deposit()](wrappers_MockWETH.MockWETH.md#deposit())
- [emit](wrappers_MockWETH.MockWETH.md#emit)
- [fallback](wrappers_MockWETH.MockWETH.md#fallback)
- [listenerCount](wrappers_MockWETH.MockWETH.md#listenercount)
- [listeners](wrappers_MockWETH.MockWETH.md#listeners)
- [name](wrappers_MockWETH.MockWETH.md#name)
- [name()](wrappers_MockWETH.MockWETH.md#name())
- [off](wrappers_MockWETH.MockWETH.md#off)
- [on](wrappers_MockWETH.MockWETH.md#on)
- [once](wrappers_MockWETH.MockWETH.md#once)
- [queryFilter](wrappers_MockWETH.MockWETH.md#queryfilter)
- [removeAllListeners](wrappers_MockWETH.MockWETH.md#removealllisteners)
- [removeListener](wrappers_MockWETH.MockWETH.md#removelistener)
- [symbol](wrappers_MockWETH.MockWETH.md#symbol)
- [symbol()](wrappers_MockWETH.MockWETH.md#symbol())
- [totalSupply](wrappers_MockWETH.MockWETH.md#totalsupply)
- [totalSupply()](wrappers_MockWETH.MockWETH.md#totalsupply())
- [transfer](wrappers_MockWETH.MockWETH.md#transfer)
- [transfer(address,uint256)](wrappers_MockWETH.MockWETH.md#transfer(address,uint256))
- [transferFrom](wrappers_MockWETH.MockWETH.md#transferfrom)
- [transferFrom(address,address,uint256)](wrappers_MockWETH.MockWETH.md#transferfrom(address,address,uint256))
- [withdraw](wrappers_MockWETH.MockWETH.md#withdraw)
- [withdraw(uint256)](wrappers_MockWETH.MockWETH.md#withdraw(uint256))
- [getContractAddress](wrappers_MockWETH.MockWETH.md#getcontractaddress)
- [getInterface](wrappers_MockWETH.MockWETH.md#getinterface)
- [isIndexed](wrappers_MockWETH.MockWETH.md#isindexed)

## Constructors

### constructor

• **new MockWETH**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `allowance` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `allowance(address,address)` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `approve(address,uint256)` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `balanceOf` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `balanceOf(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `deposit` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deposit()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `name()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `symbol()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transfer(address,uint256)` | (`dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transferFrom` | (`src`: `string`, `dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transferFrom(address,address,uint256)` | (`src`: `string`, `dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `withdraw` | (`wad`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdraw(uint256)` | (`wad`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/MockWETH.d.ts:244](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L244)

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
| `allowance` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `allowance(address,address)` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `approve(address,uint256)` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `balanceOf` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `balanceOf(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `deposit` | (`overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `deposit()` | (`overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `name()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `symbol()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transfer(address,uint256)` | (`dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferFrom` | (`src`: `string`, `dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferFrom(address,address,uint256)` | (`src`: `string`, `dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdraw` | (`wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdraw(uint256)` | (`wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/MockWETH.d.ts:308](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L308)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Approval` | (`src`: `string`, `guy`: `string`, `wad`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `BigNumber`], { `guy`: `string` ; `src`: `string` ; `wad`: `BigNumber`  }\> |
| `Deposit` | (`dst`: `string`, `wad`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `BigNumber`], { `dst`: `string` ; `wad`: `BigNumber`  }\> |
| `Transfer` | (`src`: `string`, `dst`: `string`, `wad`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `BigNumber`], { `dst`: `string` ; `src`: `string` ; `wad`: `BigNumber`  }\> |
| `Withdrawal` | (`src`: `string`, `wad`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `BigNumber`], { `src`: `string` ; `wad`: `BigNumber`  }\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/MockWETH.d.ts:290](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L290)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowance` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `allowance(address,address)` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `approve` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `approve(address,uint256)` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `balanceOf` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `balanceOf(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `deposit` | (`overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `deposit()` | (`overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `name()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `symbol()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `totalSupply()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `transfer` | (`dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transfer(address,uint256)` | (`dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferFrom` | (`src`: `string`, `dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferFrom(address,address,uint256)` | (`src`: `string`, `dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdraw` | (`wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdraw(uint256)` | (`wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/MockWETH.d.ts:118](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L118)

___

### interface

• **interface**: [`MockWETHInterface`](../interfaces/wrappers_MockWETH.MockWETHInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/MockWETH.d.ts:116](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L116)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowance` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `allowance(address,address)` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `approve` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `approve(address,uint256)` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `balanceOf` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `balanceOf(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `deposit` | (`overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `deposit()` | (`overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `name()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `symbol()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transfer` | (`dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transfer(address,uint256)` | (`dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom` | (`src`: `string`, `dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom(address,address,uint256)` | (`src`: `string`, `dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdraw` | (`wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdraw(uint256)` | (`wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/MockWETH.d.ts:372](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L372)

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

▸ **allowance**(`arg0`, `arg1`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/MockWETH.d.ts:182](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L182)

___

### allowance(address,address)

▸ **allowance(address,address)**(`arg0`, `arg1`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/MockWETH.d.ts:184](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L184)

___

### approve

▸ **approve**(`guy`, `wad`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guy` | `string` |
| `wad` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockWETH.d.ts:186](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L186)

___

### approve(address,uint256)

▸ **approve(address,uint256)**(`guy`, `wad`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guy` | `string` |
| `wad` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockWETH.d.ts:188](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L188)

___

### attach

▸ **attach**(`addressOrName`): [`MockWETH`](wrappers_MockWETH.MockWETH.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`MockWETH`](wrappers_MockWETH.MockWETH.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/MockWETH.d.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L77)

___

### balanceOf

▸ **balanceOf**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/MockWETH.d.ts:194](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L194)

___

### balanceOf(address)

▸ **balanceOf(address)**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/MockWETH.d.ts:196](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L196)

___

### connect

▸ **connect**(`signerOrProvider`): [`MockWETH`](wrappers_MockWETH.MockWETH.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`MockWETH`](wrappers_MockWETH.MockWETH.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/MockWETH.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L76)

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

[src/wrappers/MockWETH.d.ts:198](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L198)

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

[src/wrappers/MockWETH.d.ts:200](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L200)

___

### deployed

▸ **deployed**(): `Promise`<[`MockWETH`](wrappers_MockWETH.MockWETH.md)\>

#### Returns

`Promise`<[`MockWETH`](wrappers_MockWETH.MockWETH.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/MockWETH.d.ts:78](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L78)

___

### deposit

▸ **deposit**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockWETH.d.ts:202](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L202)

___

### deposit()

▸ **deposit()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockWETH.d.ts:204](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L204)

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

[src/wrappers/MockWETH.d.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L80)

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

[src/wrappers/MockWETH.d.ts:103](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L103)

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

[src/wrappers/MockWETH.d.ts:206](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L206)

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

[src/wrappers/MockWETH.d.ts:208](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L208)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockWETH`](wrappers_MockWETH.MockWETH.md)

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

[`MockWETH`](wrappers_MockWETH.MockWETH.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/MockWETH.d.ts:83](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L83)

▸ **off**(`eventName`, `listener`): [`MockWETH`](wrappers_MockWETH.MockWETH.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockWETH`](wrappers_MockWETH.MockWETH.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/MockWETH.d.ts:104](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L104)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockWETH`](wrappers_MockWETH.MockWETH.md)

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

[`MockWETH`](wrappers_MockWETH.MockWETH.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/MockWETH.d.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L87)

▸ **on**(`eventName`, `listener`): [`MockWETH`](wrappers_MockWETH.MockWETH.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockWETH`](wrappers_MockWETH.MockWETH.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/MockWETH.d.ts:105](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L105)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockWETH`](wrappers_MockWETH.MockWETH.md)

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

[`MockWETH`](wrappers_MockWETH.MockWETH.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/MockWETH.d.ts:91](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L91)

▸ **once**(`eventName`, `listener`): [`MockWETH`](wrappers_MockWETH.MockWETH.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockWETH`](wrappers_MockWETH.MockWETH.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/MockWETH.d.ts:106](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L106)

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

[src/wrappers/MockWETH.d.ts:110](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L110)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`MockWETH`](wrappers_MockWETH.MockWETH.md)

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

[`MockWETH`](wrappers_MockWETH.MockWETH.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/MockWETH.d.ts:99](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L99)

▸ **removeAllListeners**(`eventName?`): [`MockWETH`](wrappers_MockWETH.MockWETH.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`MockWETH`](wrappers_MockWETH.MockWETH.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/MockWETH.d.ts:108](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L108)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockWETH`](wrappers_MockWETH.MockWETH.md)

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

[`MockWETH`](wrappers_MockWETH.MockWETH.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/MockWETH.d.ts:95](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L95)

▸ **removeListener**(`eventName`, `listener`): [`MockWETH`](wrappers_MockWETH.MockWETH.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockWETH`](wrappers_MockWETH.MockWETH.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/MockWETH.d.ts:107](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L107)

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

[src/wrappers/MockWETH.d.ts:210](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L210)

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

[src/wrappers/MockWETH.d.ts:212](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L212)

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

[src/wrappers/MockWETH.d.ts:214](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L214)

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

[src/wrappers/MockWETH.d.ts:216](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L216)

___

### transfer

▸ **transfer**(`dst`, `wad`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dst` | `string` |
| `wad` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockWETH.d.ts:218](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L218)

___

### transfer(address,uint256)

▸ **transfer(address,uint256)**(`dst`, `wad`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dst` | `string` |
| `wad` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockWETH.d.ts:220](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L220)

___

### transferFrom

▸ **transferFrom**(`src`, `dst`, `wad`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dst` | `string` |
| `wad` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockWETH.d.ts:226](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L226)

___

### transferFrom(address,address,uint256)

▸ **transferFrom(address,address,uint256)**(`src`, `dst`, `wad`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dst` | `string` |
| `wad` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockWETH.d.ts:233](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L233)

___

### withdraw

▸ **withdraw**(`wad`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wad` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockWETH.d.ts:240](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L240)

___

### withdraw(uint256)

▸ **withdraw(uint256)**(`wad`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wad` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockWETH.d.ts:242](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/MockWETH.d.ts#L242)

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
