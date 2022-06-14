[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/CreditLineEthUtils](../modules/wrappers_CreditLineEthUtils.md) / CreditLineEthUtils

# Class: CreditLineEthUtils

[wrappers/CreditLineEthUtils](../modules/wrappers_CreditLineEthUtils.md).CreditLineEthUtils

## Hierarchy

- `Contract`

  ↳ **`CreditLineEthUtils`**

## Table of contents

### Constructors

- [constructor](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#constructor)

### Properties

- [\_deployedPromise](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#_deployedpromise)
- [\_runningEvents](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#_runningevents)
- [\_wrappedEmits](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#_wrappedemits)
- [address](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#address)
- [callStatic](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#callstatic)
- [deployTransaction](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#deploytransaction)
- [estimateGas](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#estimategas)
- [filters](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#filters)
- [functions](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#functions)
- [interface](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#interface)
- [populateTransaction](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#populatetransaction)
- [provider](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#provider)
- [resolvedAddress](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#resolvedaddress)
- [signer](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#_checkrunningevents)
- [\_deployed](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#_deployed)
- [\_wrapEvent](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#_wrapevent)
- [attach](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#attach)
- [connect](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#connect)
- [creditlines](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#creditlines)
- [creditlines()](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#creditlines())
- [deployed](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#deployed)
- [depositEthAsCollateralToCreditLine](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#depositethascollateraltocreditline)
- [depositEthAsCollateralToCreditLine(uint256)](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#depositethascollateraltocreditline(uint256))
- [emit](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#emit)
- [fallback](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#fallback)
- [listenerCount](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#listenercount)
- [listeners](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#listeners)
- [off](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#off)
- [on](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#on)
- [once](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#once)
- [queryFilter](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#queryfilter)
- [removeAllListeners](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#removealllisteners)
- [removeListener](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#removelistener)
- [repayEthToCreditLines](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#repayethtocreditlines)
- [repayEthToCreditLines(uint256)](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#repayethtocreditlines(uint256))
- [weth](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#weth)
- [weth()](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#weth())
- [getContractAddress](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#getcontractaddress)
- [getInterface](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#getinterface)
- [isIndexed](wrappers_CreditLineEthUtils.CreditLineEthUtils.md#isindexed)

## Constructors

### constructor

• **new CreditLineEthUtils**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `creditlines` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `creditlines()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `depositEthAsCollateralToCreditLine` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `depositEthAsCollateralToCreditLine(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `repayEthToCreditLines` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `repayEthToCreditLines(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `weth` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `weth()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/CreditLineEthUtils.d.ts:144](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/CreditLineEthUtils.d.ts#L144)

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
| `creditlines` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `creditlines()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `depositEthAsCollateralToCreditLine` | (`_id`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `depositEthAsCollateralToCreditLine(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `repayEthToCreditLines` | (`_id`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `repayEthToCreditLines(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `weth` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `weth()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/CreditLineEthUtils.d.ts:164](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/CreditLineEthUtils.d.ts#L164)

___

### filters

• **filters**: `Object`

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/CreditLineEthUtils.d.ts:162](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/CreditLineEthUtils.d.ts#L162)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `creditlines` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `creditlines()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `depositEthAsCollateralToCreditLine` | (`_id`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `depositEthAsCollateralToCreditLine(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `repayEthToCreditLines` | (`_id`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `repayEthToCreditLines(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `weth` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `weth()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/CreditLineEthUtils.d.ts:86](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/CreditLineEthUtils.d.ts#L86)

___

### interface

• **interface**: [`CreditLineEthUtilsInterface`](../interfaces/wrappers_CreditLineEthUtils.CreditLineEthUtilsInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/CreditLineEthUtils.d.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/CreditLineEthUtils.d.ts#L84)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `creditlines` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `creditlines()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `depositEthAsCollateralToCreditLine` | (`_id`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `depositEthAsCollateralToCreditLine(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `repayEthToCreditLines` | (`_id`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `repayEthToCreditLines(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `weth` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `weth()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/CreditLineEthUtils.d.ts:191](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/CreditLineEthUtils.d.ts#L191)

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

### attach

▸ **attach**(`addressOrName`): [`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/CreditLineEthUtils.d.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/CreditLineEthUtils.d.ts#L45)

___

### connect

▸ **connect**(`signerOrProvider`): [`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/CreditLineEthUtils.d.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/CreditLineEthUtils.d.ts#L44)

___

### creditlines

▸ **creditlines**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/CreditLineEthUtils.d.ts:116](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/CreditLineEthUtils.d.ts#L116)

___

### creditlines()

▸ **creditlines()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/CreditLineEthUtils.d.ts:118](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/CreditLineEthUtils.d.ts#L118)

___

### deployed

▸ **deployed**(): `Promise`<[`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)\>

#### Returns

`Promise`<[`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/CreditLineEthUtils.d.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/CreditLineEthUtils.d.ts#L46)

___

### depositEthAsCollateralToCreditLine

▸ **depositEthAsCollateralToCreditLine**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLineEthUtils.d.ts:120](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/CreditLineEthUtils.d.ts#L120)

___

### depositEthAsCollateralToCreditLine(uint256)

▸ **depositEthAsCollateralToCreditLine(uint256)**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLineEthUtils.d.ts:125](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/CreditLineEthUtils.d.ts#L125)

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

[src/wrappers/CreditLineEthUtils.d.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/CreditLineEthUtils.d.ts#L48)

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

[src/wrappers/CreditLineEthUtils.d.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/CreditLineEthUtils.d.ts#L71)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)

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

[`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/CreditLineEthUtils.d.ts:51](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/CreditLineEthUtils.d.ts#L51)

▸ **off**(`eventName`, `listener`): [`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/CreditLineEthUtils.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/CreditLineEthUtils.d.ts#L72)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)

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

[`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/CreditLineEthUtils.d.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/CreditLineEthUtils.d.ts#L55)

▸ **on**(`eventName`, `listener`): [`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/CreditLineEthUtils.d.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/CreditLineEthUtils.d.ts#L73)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)

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

[`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/CreditLineEthUtils.d.ts:59](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/CreditLineEthUtils.d.ts#L59)

▸ **once**(`eventName`, `listener`): [`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/CreditLineEthUtils.d.ts:74](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/CreditLineEthUtils.d.ts#L74)

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

[src/wrappers/CreditLineEthUtils.d.ts:78](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/CreditLineEthUtils.d.ts#L78)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)

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

[`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/CreditLineEthUtils.d.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/CreditLineEthUtils.d.ts#L67)

▸ **removeAllListeners**(`eventName?`): [`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/CreditLineEthUtils.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/CreditLineEthUtils.d.ts#L76)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)

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

[`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/CreditLineEthUtils.d.ts:63](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/CreditLineEthUtils.d.ts#L63)

▸ **removeListener**(`eventName`, `listener`): [`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/CreditLineEthUtils.d.ts:75](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/CreditLineEthUtils.d.ts#L75)

___

### repayEthToCreditLines

▸ **repayEthToCreditLines**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLineEthUtils.d.ts:130](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/CreditLineEthUtils.d.ts#L130)

___

### repayEthToCreditLines(uint256)

▸ **repayEthToCreditLines(uint256)**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLineEthUtils.d.ts:135](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/CreditLineEthUtils.d.ts#L135)

___

### weth

▸ **weth**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/CreditLineEthUtils.d.ts:140](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/CreditLineEthUtils.d.ts#L140)

___

### weth()

▸ **weth()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/CreditLineEthUtils.d.ts:142](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/CreditLineEthUtils.d.ts#L142)

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
