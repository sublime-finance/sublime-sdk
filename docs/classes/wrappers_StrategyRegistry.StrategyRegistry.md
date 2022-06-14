[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/StrategyRegistry](../modules/wrappers_StrategyRegistry.md) / StrategyRegistry

# Class: StrategyRegistry

[wrappers/StrategyRegistry](../modules/wrappers_StrategyRegistry.md).StrategyRegistry

## Hierarchy

- `Contract`

  ↳ **`StrategyRegistry`**

## Table of contents

### Constructors

- [constructor](wrappers_StrategyRegistry.StrategyRegistry.md#constructor)

### Properties

- [\_deployedPromise](wrappers_StrategyRegistry.StrategyRegistry.md#_deployedpromise)
- [\_runningEvents](wrappers_StrategyRegistry.StrategyRegistry.md#_runningevents)
- [\_wrappedEmits](wrappers_StrategyRegistry.StrategyRegistry.md#_wrappedemits)
- [address](wrappers_StrategyRegistry.StrategyRegistry.md#address)
- [callStatic](wrappers_StrategyRegistry.StrategyRegistry.md#callstatic)
- [deployTransaction](wrappers_StrategyRegistry.StrategyRegistry.md#deploytransaction)
- [estimateGas](wrappers_StrategyRegistry.StrategyRegistry.md#estimategas)
- [filters](wrappers_StrategyRegistry.StrategyRegistry.md#filters)
- [functions](wrappers_StrategyRegistry.StrategyRegistry.md#functions)
- [interface](wrappers_StrategyRegistry.StrategyRegistry.md#interface)
- [populateTransaction](wrappers_StrategyRegistry.StrategyRegistry.md#populatetransaction)
- [provider](wrappers_StrategyRegistry.StrategyRegistry.md#provider)
- [resolvedAddress](wrappers_StrategyRegistry.StrategyRegistry.md#resolvedaddress)
- [signer](wrappers_StrategyRegistry.StrategyRegistry.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_StrategyRegistry.StrategyRegistry.md#_checkrunningevents)
- [\_deployed](wrappers_StrategyRegistry.StrategyRegistry.md#_deployed)
- [\_wrapEvent](wrappers_StrategyRegistry.StrategyRegistry.md#_wrapevent)
- [addStrategy](wrappers_StrategyRegistry.StrategyRegistry.md#addstrategy)
- [addStrategy(address)](wrappers_StrategyRegistry.StrategyRegistry.md#addstrategy(address))
- [attach](wrappers_StrategyRegistry.StrategyRegistry.md#attach)
- [connect](wrappers_StrategyRegistry.StrategyRegistry.md#connect)
- [deployed](wrappers_StrategyRegistry.StrategyRegistry.md#deployed)
- [emit](wrappers_StrategyRegistry.StrategyRegistry.md#emit)
- [fallback](wrappers_StrategyRegistry.StrategyRegistry.md#fallback)
- [getStrategies](wrappers_StrategyRegistry.StrategyRegistry.md#getstrategies)
- [getStrategies()](wrappers_StrategyRegistry.StrategyRegistry.md#getstrategies())
- [initialize](wrappers_StrategyRegistry.StrategyRegistry.md#initialize)
- [initialize(address,uint256)](wrappers_StrategyRegistry.StrategyRegistry.md#initialize(address,uint256))
- [isValidStrategy](wrappers_StrategyRegistry.StrategyRegistry.md#isvalidstrategy)
- [isValidStrategy(address)](wrappers_StrategyRegistry.StrategyRegistry.md#isvalidstrategy(address))
- [listenerCount](wrappers_StrategyRegistry.StrategyRegistry.md#listenercount)
- [listeners](wrappers_StrategyRegistry.StrategyRegistry.md#listeners)
- [maxStrategies](wrappers_StrategyRegistry.StrategyRegistry.md#maxstrategies)
- [maxStrategies()](wrappers_StrategyRegistry.StrategyRegistry.md#maxstrategies())
- [off](wrappers_StrategyRegistry.StrategyRegistry.md#off)
- [on](wrappers_StrategyRegistry.StrategyRegistry.md#on)
- [once](wrappers_StrategyRegistry.StrategyRegistry.md#once)
- [owner](wrappers_StrategyRegistry.StrategyRegistry.md#owner)
- [owner()](wrappers_StrategyRegistry.StrategyRegistry.md#owner())
- [queryFilter](wrappers_StrategyRegistry.StrategyRegistry.md#queryfilter)
- [registry](wrappers_StrategyRegistry.StrategyRegistry.md#registry)
- [registry(address)](wrappers_StrategyRegistry.StrategyRegistry.md#registry(address))
- [removeAllListeners](wrappers_StrategyRegistry.StrategyRegistry.md#removealllisteners)
- [removeListener](wrappers_StrategyRegistry.StrategyRegistry.md#removelistener)
- [removeStrategy](wrappers_StrategyRegistry.StrategyRegistry.md#removestrategy)
- [removeStrategy(uint256,address)](wrappers_StrategyRegistry.StrategyRegistry.md#removestrategy(uint256,address))
- [renounceOwnership](wrappers_StrategyRegistry.StrategyRegistry.md#renounceownership)
- [renounceOwnership()](wrappers_StrategyRegistry.StrategyRegistry.md#renounceownership())
- [retiredRegistry](wrappers_StrategyRegistry.StrategyRegistry.md#retiredregistry)
- [retiredRegistry(address)](wrappers_StrategyRegistry.StrategyRegistry.md#retiredregistry(address))
- [strategies](wrappers_StrategyRegistry.StrategyRegistry.md#strategies)
- [strategies(uint256)](wrappers_StrategyRegistry.StrategyRegistry.md#strategies(uint256))
- [transferOwnership](wrappers_StrategyRegistry.StrategyRegistry.md#transferownership)
- [transferOwnership(address)](wrappers_StrategyRegistry.StrategyRegistry.md#transferownership(address))
- [updateMaxStrategies](wrappers_StrategyRegistry.StrategyRegistry.md#updatemaxstrategies)
- [updateMaxStrategies(uint256)](wrappers_StrategyRegistry.StrategyRegistry.md#updatemaxstrategies(uint256))
- [updateStrategy](wrappers_StrategyRegistry.StrategyRegistry.md#updatestrategy)
- [updateStrategy(uint256,address,address)](wrappers_StrategyRegistry.StrategyRegistry.md#updatestrategy(uint256,address,address))
- [getContractAddress](wrappers_StrategyRegistry.StrategyRegistry.md#getcontractaddress)
- [getInterface](wrappers_StrategyRegistry.StrategyRegistry.md#getinterface)
- [isIndexed](wrappers_StrategyRegistry.StrategyRegistry.md#isindexed)

## Constructors

### constructor

• **new StrategyRegistry**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `addStrategy` | (`_strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `addStrategy(address)` | (`_strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getStrategies` | (`overrides?`: `CallOverrides`) => `Promise`<`string`[]\> |
| `getStrategies()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`[]\> |
| `initialize` | (`_owner`: `string`, `_maxStrategies`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialize(address,uint256)` | (`_owner`: `string`, `_maxStrategies`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `isValidStrategy` | (`_strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `isValidStrategy(address)` | (`_strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `maxStrategies` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `maxStrategies()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `registry` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `registry(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `removeStrategy` | (`_strategyIndex`: `BigNumberish`, `_strategyAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `removeStrategy(uint256,address)` | (`_strategyIndex`: `BigNumberish`, `_strategyAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `renounceOwnership` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `renounceOwnership()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `retiredRegistry` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `retiredRegistry(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `strategies` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `strategies(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateMaxStrategies` | (`_maxStrategies`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateMaxStrategies(uint256)` | (`_maxStrategies`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateStrategy` | (`_strategyIndex`: `BigNumberish`, `_oldStrategy`: `string`, `_newStrategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateStrategy(uint256,address,address)` | (`_strategyIndex`: `BigNumberish`, `_oldStrategy`: `string`, `_newStrategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:307](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L307)

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
| `addStrategy` | (`_strategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `addStrategy(address)` | (`_strategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getStrategies` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getStrategies()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `initialize` | (`_owner`: `string`, `_maxStrategies`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initialize(address,uint256)` | (`_owner`: `string`, `_maxStrategies`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `isValidStrategy` | (`_strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isValidStrategy(address)` | (`_strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `maxStrategies` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `maxStrategies()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `registry` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `registry(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `removeStrategy` | (`_strategyIndex`: `BigNumberish`, `_strategyAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `removeStrategy(uint256,address)` | (`_strategyIndex`: `BigNumberish`, `_strategyAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `retiredRegistry` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `retiredRegistry(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `strategies` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `strategies(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateMaxStrategies` | (`_maxStrategies`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateMaxStrategies(uint256)` | (`_maxStrategies`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateStrategy` | (`_strategyIndex`: `BigNumberish`, `_oldStrategy`: `string`, `_newStrategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateStrategy(uint256,address,address)` | (`_strategyIndex`: `BigNumberish`, `_oldStrategy`: `string`, `_newStrategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:383](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L383)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `MaxStrategiesUpdated` | (`maxStrategies`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`], { `maxStrategies`: `BigNumber`  }\> |
| `OwnershipTransferred` | (`previousOwner`: `string`, `newOwner`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`], { `newOwner`: `string` ; `previousOwner`: `string`  }\> |
| `StrategyAdded` | (`strategy`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `strategy`: `string`  }\> |
| `StrategyRemoved` | (`strategy`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `strategy`: `string`  }\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:370](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L370)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addStrategy` | (`_strategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `addStrategy(address)` | (`_strategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getStrategies` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`[]]\> |
| `getStrategies()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`[]]\> |
| `initialize` | (`_owner`: `string`, `_maxStrategies`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialize(address,uint256)` | (`_owner`: `string`, `_maxStrategies`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `isValidStrategy` | (`_strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `isValidStrategy(address)` | (`_strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `maxStrategies` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `maxStrategies()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `registry` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `registry(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `removeStrategy` | (`_strategyIndex`: `BigNumberish`, `_strategyAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `removeStrategy(uint256,address)` | (`_strategyIndex`: `BigNumberish`, `_strategyAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `retiredRegistry` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `retiredRegistry(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `strategies` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `strategies(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateMaxStrategies` | (`_maxStrategies`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateMaxStrategies(uint256)` | (`_maxStrategies`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateStrategy` | (`_strategyIndex`: `BigNumberish`, `_oldStrategy`: `string`, `_newStrategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateStrategy(uint256,address,address)` | (`_strategyIndex`: `BigNumberish`, `_oldStrategy`: `string`, `_newStrategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:126](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L126)

___

### interface

• **interface**: [`StrategyRegistryInterface`](../interfaces/wrappers_StrategyRegistry.StrategyRegistryInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:124](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L124)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addStrategy` | (`_strategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `addStrategy(address)` | (`_strategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getStrategies` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getStrategies()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `initialize` | (`_owner`: `string`, `_maxStrategies`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialize(address,uint256)` | (`_owner`: `string`, `_maxStrategies`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `isValidStrategy` | (`_strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isValidStrategy(address)` | (`_strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `maxStrategies` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `maxStrategies()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `registry` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `registry(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `removeStrategy` | (`_strategyIndex`: `BigNumberish`, `_strategyAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `removeStrategy(uint256,address)` | (`_strategyIndex`: `BigNumberish`, `_strategyAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `retiredRegistry` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `retiredRegistry(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `strategies` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `strategies(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateMaxStrategies` | (`_maxStrategies`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateMaxStrategies(uint256)` | (`_maxStrategies`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateStrategy` | (`_strategyIndex`: `BigNumberish`, `_oldStrategy`: `string`, `_newStrategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateStrategy(uint256,address,address)` | (`_strategyIndex`: `BigNumberish`, `_oldStrategy`: `string`, `_newStrategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:470](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L470)

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

### addStrategy

▸ **addStrategy**(`_strategy`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_strategy` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:219](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L219)

___

### addStrategy(address)

▸ **addStrategy(address)**(`_strategy`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_strategy` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:221](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L221)

___

### attach

▸ **attach**(`addressOrName`): [`StrategyRegistry`](wrappers_StrategyRegistry.StrategyRegistry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`StrategyRegistry`](wrappers_StrategyRegistry.StrategyRegistry.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L85)

___

### connect

▸ **connect**(`signerOrProvider`): [`StrategyRegistry`](wrappers_StrategyRegistry.StrategyRegistry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`StrategyRegistry`](wrappers_StrategyRegistry.StrategyRegistry.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L84)

___

### deployed

▸ **deployed**(): `Promise`<[`StrategyRegistry`](wrappers_StrategyRegistry.StrategyRegistry.md)\>

#### Returns

`Promise`<[`StrategyRegistry`](wrappers_StrategyRegistry.StrategyRegistry.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:86](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L86)

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

### getStrategies

▸ **getStrategies**(`overrides?`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:223](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L223)

___

### getStrategies()

▸ **getStrategies()**(`overrides?`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:225](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L225)

___

### initialize

▸ **initialize**(`_owner`, `_maxStrategies`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_owner` | `string` |
| `_maxStrategies` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:227](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L227)

___

### initialize(address,uint256)

▸ **initialize(address,uint256)**(`_owner`, `_maxStrategies`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_owner` | `string` |
| `_maxStrategies` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:233](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L233)

___

### isValidStrategy

▸ **isValidStrategy**(`_strategy`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_strategy` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:239](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L239)

___

### isValidStrategy(address)

▸ **isValidStrategy(address)**(`_strategy`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_strategy` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:241](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L241)

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

[src/wrappers/StrategyRegistry.d.ts:88](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L88)

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

[src/wrappers/StrategyRegistry.d.ts:111](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L111)

___

### maxStrategies

▸ **maxStrategies**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:243](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L243)

___

### maxStrategies()

▸ **maxStrategies()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:245](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L245)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`StrategyRegistry`](wrappers_StrategyRegistry.StrategyRegistry.md)

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

[`StrategyRegistry`](wrappers_StrategyRegistry.StrategyRegistry.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:91](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L91)

▸ **off**(`eventName`, `listener`): [`StrategyRegistry`](wrappers_StrategyRegistry.StrategyRegistry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`StrategyRegistry`](wrappers_StrategyRegistry.StrategyRegistry.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:112](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L112)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`StrategyRegistry`](wrappers_StrategyRegistry.StrategyRegistry.md)

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

[`StrategyRegistry`](wrappers_StrategyRegistry.StrategyRegistry.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:95](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L95)

▸ **on**(`eventName`, `listener`): [`StrategyRegistry`](wrappers_StrategyRegistry.StrategyRegistry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`StrategyRegistry`](wrappers_StrategyRegistry.StrategyRegistry.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:113](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L113)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`StrategyRegistry`](wrappers_StrategyRegistry.StrategyRegistry.md)

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

[`StrategyRegistry`](wrappers_StrategyRegistry.StrategyRegistry.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:99](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L99)

▸ **once**(`eventName`, `listener`): [`StrategyRegistry`](wrappers_StrategyRegistry.StrategyRegistry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`StrategyRegistry`](wrappers_StrategyRegistry.StrategyRegistry.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:114](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L114)

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

[src/wrappers/StrategyRegistry.d.ts:247](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L247)

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

[src/wrappers/StrategyRegistry.d.ts:249](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L249)

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

[src/wrappers/StrategyRegistry.d.ts:118](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L118)

___

### registry

▸ **registry**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:251](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L251)

___

### registry(address)

▸ **registry(address)**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:253](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L253)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`StrategyRegistry`](wrappers_StrategyRegistry.StrategyRegistry.md)

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

[`StrategyRegistry`](wrappers_StrategyRegistry.StrategyRegistry.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:107](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L107)

▸ **removeAllListeners**(`eventName?`): [`StrategyRegistry`](wrappers_StrategyRegistry.StrategyRegistry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`StrategyRegistry`](wrappers_StrategyRegistry.StrategyRegistry.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:116](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L116)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`StrategyRegistry`](wrappers_StrategyRegistry.StrategyRegistry.md)

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

[`StrategyRegistry`](wrappers_StrategyRegistry.StrategyRegistry.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:103](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L103)

▸ **removeListener**(`eventName`, `listener`): [`StrategyRegistry`](wrappers_StrategyRegistry.StrategyRegistry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`StrategyRegistry`](wrappers_StrategyRegistry.StrategyRegistry.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:115](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L115)

___

### removeStrategy

▸ **removeStrategy**(`_strategyIndex`, `_strategyAddress`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_strategyIndex` | `BigNumberish` |
| `_strategyAddress` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:255](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L255)

___

### removeStrategy(uint256,address)

▸ **removeStrategy(uint256,address)**(`_strategyIndex`, `_strategyAddress`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_strategyIndex` | `BigNumberish` |
| `_strategyAddress` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:261](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L261)

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

[src/wrappers/StrategyRegistry.d.ts:267](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L267)

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

[src/wrappers/StrategyRegistry.d.ts:269](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L269)

___

### retiredRegistry

▸ **retiredRegistry**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:271](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L271)

___

### retiredRegistry(address)

▸ **retiredRegistry(address)**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:273](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L273)

___

### strategies

▸ **strategies**(`arg0`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:275](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L275)

___

### strategies(uint256)

▸ **strategies(uint256)**(`arg0`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:277](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L277)

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

[src/wrappers/StrategyRegistry.d.ts:279](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L279)

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

[src/wrappers/StrategyRegistry.d.ts:281](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L281)

___

### updateMaxStrategies

▸ **updateMaxStrategies**(`_maxStrategies`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_maxStrategies` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:283](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L283)

___

### updateMaxStrategies(uint256)

▸ **updateMaxStrategies(uint256)**(`_maxStrategies`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_maxStrategies` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:288](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L288)

___

### updateStrategy

▸ **updateStrategy**(`_strategyIndex`, `_oldStrategy`, `_newStrategy`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_strategyIndex` | `BigNumberish` |
| `_oldStrategy` | `string` |
| `_newStrategy` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:293](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L293)

___

### updateStrategy(uint256,address,address)

▸ **updateStrategy(uint256,address,address)**(`_strategyIndex`, `_oldStrategy`, `_newStrategy`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_strategyIndex` | `BigNumberish` |
| `_oldStrategy` | `string` |
| `_newStrategy` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/StrategyRegistry.d.ts:300](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/StrategyRegistry.d.ts#L300)

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
