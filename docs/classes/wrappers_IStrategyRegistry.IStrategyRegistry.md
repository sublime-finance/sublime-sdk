[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/IStrategyRegistry](../modules/wrappers_IStrategyRegistry.md) / IStrategyRegistry

# Class: IStrategyRegistry

[wrappers/IStrategyRegistry](../modules/wrappers_IStrategyRegistry.md).IStrategyRegistry

## Hierarchy

- `Contract`

  ↳ **`IStrategyRegistry`**

## Table of contents

### Constructors

- [constructor](wrappers_IStrategyRegistry.IStrategyRegistry.md#constructor)

### Properties

- [\_deployedPromise](wrappers_IStrategyRegistry.IStrategyRegistry.md#_deployedpromise)
- [\_runningEvents](wrappers_IStrategyRegistry.IStrategyRegistry.md#_runningevents)
- [\_wrappedEmits](wrappers_IStrategyRegistry.IStrategyRegistry.md#_wrappedemits)
- [address](wrappers_IStrategyRegistry.IStrategyRegistry.md#address)
- [callStatic](wrappers_IStrategyRegistry.IStrategyRegistry.md#callstatic)
- [deployTransaction](wrappers_IStrategyRegistry.IStrategyRegistry.md#deploytransaction)
- [estimateGas](wrappers_IStrategyRegistry.IStrategyRegistry.md#estimategas)
- [filters](wrappers_IStrategyRegistry.IStrategyRegistry.md#filters)
- [functions](wrappers_IStrategyRegistry.IStrategyRegistry.md#functions)
- [interface](wrappers_IStrategyRegistry.IStrategyRegistry.md#interface)
- [populateTransaction](wrappers_IStrategyRegistry.IStrategyRegistry.md#populatetransaction)
- [provider](wrappers_IStrategyRegistry.IStrategyRegistry.md#provider)
- [resolvedAddress](wrappers_IStrategyRegistry.IStrategyRegistry.md#resolvedaddress)
- [signer](wrappers_IStrategyRegistry.IStrategyRegistry.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_IStrategyRegistry.IStrategyRegistry.md#_checkrunningevents)
- [\_deployed](wrappers_IStrategyRegistry.IStrategyRegistry.md#_deployed)
- [\_wrapEvent](wrappers_IStrategyRegistry.IStrategyRegistry.md#_wrapevent)
- [addStrategy](wrappers_IStrategyRegistry.IStrategyRegistry.md#addstrategy)
- [addStrategy(address)](wrappers_IStrategyRegistry.IStrategyRegistry.md#addstrategy(address))
- [attach](wrappers_IStrategyRegistry.IStrategyRegistry.md#attach)
- [connect](wrappers_IStrategyRegistry.IStrategyRegistry.md#connect)
- [deployed](wrappers_IStrategyRegistry.IStrategyRegistry.md#deployed)
- [emit](wrappers_IStrategyRegistry.IStrategyRegistry.md#emit)
- [fallback](wrappers_IStrategyRegistry.IStrategyRegistry.md#fallback)
- [getStrategies](wrappers_IStrategyRegistry.IStrategyRegistry.md#getstrategies)
- [getStrategies()](wrappers_IStrategyRegistry.IStrategyRegistry.md#getstrategies())
- [isValidStrategy](wrappers_IStrategyRegistry.IStrategyRegistry.md#isvalidstrategy)
- [isValidStrategy(address)](wrappers_IStrategyRegistry.IStrategyRegistry.md#isvalidstrategy(address))
- [listenerCount](wrappers_IStrategyRegistry.IStrategyRegistry.md#listenercount)
- [listeners](wrappers_IStrategyRegistry.IStrategyRegistry.md#listeners)
- [off](wrappers_IStrategyRegistry.IStrategyRegistry.md#off)
- [on](wrappers_IStrategyRegistry.IStrategyRegistry.md#on)
- [once](wrappers_IStrategyRegistry.IStrategyRegistry.md#once)
- [queryFilter](wrappers_IStrategyRegistry.IStrategyRegistry.md#queryfilter)
- [registry](wrappers_IStrategyRegistry.IStrategyRegistry.md#registry)
- [registry(address)](wrappers_IStrategyRegistry.IStrategyRegistry.md#registry(address))
- [removeAllListeners](wrappers_IStrategyRegistry.IStrategyRegistry.md#removealllisteners)
- [removeListener](wrappers_IStrategyRegistry.IStrategyRegistry.md#removelistener)
- [removeStrategy](wrappers_IStrategyRegistry.IStrategyRegistry.md#removestrategy)
- [removeStrategy(uint256,address)](wrappers_IStrategyRegistry.IStrategyRegistry.md#removestrategy(uint256,address))
- [updateStrategy](wrappers_IStrategyRegistry.IStrategyRegistry.md#updatestrategy)
- [updateStrategy(uint256,address,address)](wrappers_IStrategyRegistry.IStrategyRegistry.md#updatestrategy(uint256,address,address))
- [getContractAddress](wrappers_IStrategyRegistry.IStrategyRegistry.md#getcontractaddress)
- [getInterface](wrappers_IStrategyRegistry.IStrategyRegistry.md#getinterface)
- [isIndexed](wrappers_IStrategyRegistry.IStrategyRegistry.md#isindexed)

## Constructors

### constructor

• **new IStrategyRegistry**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `addStrategy` | (`strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `addStrategy(address)` | (`strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getStrategies` | (`overrides?`: `CallOverrides`) => `Promise`<`string`[]\> |
| `getStrategies()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`[]\> |
| `isValidStrategy` | (`strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `isValidStrategy(address)` | (`strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `registry` | (`_strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `registry(address)` | (`_strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `removeStrategy` | (`strategyIndex`: `BigNumberish`, `strategyAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `removeStrategy(uint256,address)` | (`strategyIndex`: `BigNumberish`, `strategyAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateStrategy` | (`_strategyIndex`: `BigNumberish`, `_oldStrategy`: `string`, `_newStrategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateStrategy(uint256,address,address)` | (`_strategyIndex`: `BigNumberish`, `_oldStrategy`: `string`, `_newStrategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/IStrategyRegistry.d.ts:186](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L186)

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
| `addStrategy` | (`strategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `addStrategy(address)` | (`strategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getStrategies` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getStrategies()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isValidStrategy` | (`strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isValidStrategy(address)` | (`strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `registry` | (`_strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `registry(address)` | (`_strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `removeStrategy` | (`strategyIndex`: `BigNumberish`, `strategyAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `removeStrategy(uint256,address)` | (`strategyIndex`: `BigNumberish`, `strategyAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateStrategy` | (`_strategyIndex`: `BigNumberish`, `_oldStrategy`: `string`, `_newStrategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateStrategy(uint256,address,address)` | (`_strategyIndex`: `BigNumberish`, `_oldStrategy`: `string`, `_newStrategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/IStrategyRegistry.d.ts:225](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L225)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `MaxStrategiesUpdated` | (`maxStrategies`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`], { `maxStrategies`: `BigNumber`  }\> |
| `StrategyAdded` | (`strategy`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `strategy`: `string`  }\> |
| `StrategyRemoved` | (`strategy`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `strategy`: `string`  }\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/IStrategyRegistry.d.ts:217](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L217)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addStrategy` | (`strategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `addStrategy(address)` | (`strategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getStrategies` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`[]] & { `strategies`: `string`[]  }\> |
| `getStrategies()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`[]] & { `strategies`: `string`[]  }\> |
| `isValidStrategy` | (`strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `validStrategy`: `boolean`  }\> |
| `isValidStrategy(address)` | (`strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `validStrategy`: `boolean`  }\> |
| `registry` | (`_strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `registry(address)` | (`_strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `removeStrategy` | (`strategyIndex`: `BigNumberish`, `strategyAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `removeStrategy(uint256,address)` | (`strategyIndex`: `BigNumberish`, `strategyAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateStrategy` | (`_strategyIndex`: `BigNumberish`, `_oldStrategy`: `string`, `_newStrategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateStrategy(uint256,address,address)` | (`_strategyIndex`: `BigNumberish`, `_oldStrategy`: `string`, `_newStrategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/IStrategyRegistry.d.ts:100](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L100)

___

### interface

• **interface**: [`IStrategyRegistryInterface`](../interfaces/wrappers_IStrategyRegistry.IStrategyRegistryInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/IStrategyRegistry.d.ts:98](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L98)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addStrategy` | (`strategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `addStrategy(address)` | (`strategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getStrategies` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getStrategies()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isValidStrategy` | (`strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isValidStrategy(address)` | (`strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `registry` | (`_strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `registry(address)` | (`_strategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `removeStrategy` | (`strategyIndex`: `BigNumberish`, `strategyAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `removeStrategy(uint256,address)` | (`strategyIndex`: `BigNumberish`, `strategyAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateStrategy` | (`_strategyIndex`: `BigNumberish`, `_oldStrategy`: `string`, `_newStrategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateStrategy(uint256,address,address)` | (`_strategyIndex`: `BigNumberish`, `_oldStrategy`: `string`, `_newStrategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/IStrategyRegistry.d.ts:269](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L269)

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

▸ **addStrategy**(`strategy`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IStrategyRegistry.d.ts:144](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L144)

___

### addStrategy(address)

▸ **addStrategy(address)**(`strategy`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IStrategyRegistry.d.ts:146](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L146)

___

### attach

▸ **attach**(`addressOrName`): [`IStrategyRegistry`](wrappers_IStrategyRegistry.IStrategyRegistry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IStrategyRegistry`](wrappers_IStrategyRegistry.IStrategyRegistry.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/IStrategyRegistry.d.ts:59](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L59)

___

### connect

▸ **connect**(`signerOrProvider`): [`IStrategyRegistry`](wrappers_IStrategyRegistry.IStrategyRegistry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IStrategyRegistry`](wrappers_IStrategyRegistry.IStrategyRegistry.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/IStrategyRegistry.d.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L58)

___

### deployed

▸ **deployed**(): `Promise`<[`IStrategyRegistry`](wrappers_IStrategyRegistry.IStrategyRegistry.md)\>

#### Returns

`Promise`<[`IStrategyRegistry`](wrappers_IStrategyRegistry.IStrategyRegistry.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/IStrategyRegistry.d.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L60)

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

[src/wrappers/IStrategyRegistry.d.ts:148](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L148)

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

[src/wrappers/IStrategyRegistry.d.ts:150](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L150)

___

### isValidStrategy

▸ **isValidStrategy**(`strategy`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/IStrategyRegistry.d.ts:152](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L152)

___

### isValidStrategy(address)

▸ **isValidStrategy(address)**(`strategy`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/IStrategyRegistry.d.ts:154](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L154)

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

[src/wrappers/IStrategyRegistry.d.ts:62](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L62)

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

[src/wrappers/IStrategyRegistry.d.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L85)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IStrategyRegistry`](wrappers_IStrategyRegistry.IStrategyRegistry.md)

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

[`IStrategyRegistry`](wrappers_IStrategyRegistry.IStrategyRegistry.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IStrategyRegistry.d.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L65)

▸ **off**(`eventName`, `listener`): [`IStrategyRegistry`](wrappers_IStrategyRegistry.IStrategyRegistry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IStrategyRegistry`](wrappers_IStrategyRegistry.IStrategyRegistry.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IStrategyRegistry.d.ts:86](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L86)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IStrategyRegistry`](wrappers_IStrategyRegistry.IStrategyRegistry.md)

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

[`IStrategyRegistry`](wrappers_IStrategyRegistry.IStrategyRegistry.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IStrategyRegistry.d.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L69)

▸ **on**(`eventName`, `listener`): [`IStrategyRegistry`](wrappers_IStrategyRegistry.IStrategyRegistry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IStrategyRegistry`](wrappers_IStrategyRegistry.IStrategyRegistry.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IStrategyRegistry.d.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L87)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IStrategyRegistry`](wrappers_IStrategyRegistry.IStrategyRegistry.md)

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

[`IStrategyRegistry`](wrappers_IStrategyRegistry.IStrategyRegistry.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IStrategyRegistry.d.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L73)

▸ **once**(`eventName`, `listener`): [`IStrategyRegistry`](wrappers_IStrategyRegistry.IStrategyRegistry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IStrategyRegistry`](wrappers_IStrategyRegistry.IStrategyRegistry.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IStrategyRegistry.d.ts:88](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L88)

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

[src/wrappers/IStrategyRegistry.d.ts:92](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L92)

___

### registry

▸ **registry**(`_strategy`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_strategy` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IStrategyRegistry.d.ts:156](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L156)

___

### registry(address)

▸ **registry(address)**(`_strategy`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_strategy` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IStrategyRegistry.d.ts:158](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L158)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`IStrategyRegistry`](wrappers_IStrategyRegistry.IStrategyRegistry.md)

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

[`IStrategyRegistry`](wrappers_IStrategyRegistry.IStrategyRegistry.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IStrategyRegistry.d.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L81)

▸ **removeAllListeners**(`eventName?`): [`IStrategyRegistry`](wrappers_IStrategyRegistry.IStrategyRegistry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IStrategyRegistry`](wrappers_IStrategyRegistry.IStrategyRegistry.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IStrategyRegistry.d.ts:90](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L90)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IStrategyRegistry`](wrappers_IStrategyRegistry.IStrategyRegistry.md)

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

[`IStrategyRegistry`](wrappers_IStrategyRegistry.IStrategyRegistry.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IStrategyRegistry.d.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L77)

▸ **removeListener**(`eventName`, `listener`): [`IStrategyRegistry`](wrappers_IStrategyRegistry.IStrategyRegistry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IStrategyRegistry`](wrappers_IStrategyRegistry.IStrategyRegistry.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IStrategyRegistry.d.ts:89](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L89)

___

### removeStrategy

▸ **removeStrategy**(`strategyIndex`, `strategyAddress`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategyIndex` | `BigNumberish` |
| `strategyAddress` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IStrategyRegistry.d.ts:160](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L160)

___

### removeStrategy(uint256,address)

▸ **removeStrategy(uint256,address)**(`strategyIndex`, `strategyAddress`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategyIndex` | `BigNumberish` |
| `strategyAddress` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IStrategyRegistry.d.ts:166](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L166)

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

[src/wrappers/IStrategyRegistry.d.ts:172](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L172)

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

[src/wrappers/IStrategyRegistry.d.ts:179](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/IStrategyRegistry.d.ts#L179)

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
