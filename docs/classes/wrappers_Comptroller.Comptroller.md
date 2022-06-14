[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/Comptroller](../modules/wrappers_Comptroller.md) / Comptroller

# Class: Comptroller

[wrappers/Comptroller](../modules/wrappers_Comptroller.md).Comptroller

## Hierarchy

- `Contract`

  ↳ **`Comptroller`**

## Table of contents

### Constructors

- [constructor](wrappers_Comptroller.Comptroller.md#constructor)

### Properties

- [\_deployedPromise](wrappers_Comptroller.Comptroller.md#_deployedpromise)
- [\_runningEvents](wrappers_Comptroller.Comptroller.md#_runningevents)
- [\_wrappedEmits](wrappers_Comptroller.Comptroller.md#_wrappedemits)
- [address](wrappers_Comptroller.Comptroller.md#address)
- [callStatic](wrappers_Comptroller.Comptroller.md#callstatic)
- [deployTransaction](wrappers_Comptroller.Comptroller.md#deploytransaction)
- [estimateGas](wrappers_Comptroller.Comptroller.md#estimategas)
- [filters](wrappers_Comptroller.Comptroller.md#filters)
- [functions](wrappers_Comptroller.Comptroller.md#functions)
- [interface](wrappers_Comptroller.Comptroller.md#interface)
- [populateTransaction](wrappers_Comptroller.Comptroller.md#populatetransaction)
- [provider](wrappers_Comptroller.Comptroller.md#provider)
- [resolvedAddress](wrappers_Comptroller.Comptroller.md#resolvedaddress)
- [signer](wrappers_Comptroller.Comptroller.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_Comptroller.Comptroller.md#_checkrunningevents)
- [\_deployed](wrappers_Comptroller.Comptroller.md#_deployed)
- [\_wrapEvent](wrappers_Comptroller.Comptroller.md#_wrapevent)
- [attach](wrappers_Comptroller.Comptroller.md#attach)
- [claimComp(address)](wrappers_Comptroller.Comptroller.md#claimcomp(address))
- [claimComp(address[],address[],bool,bool)](wrappers_Comptroller.Comptroller.md#claimcomp(address[],address[],bool,bool))
- [compSpeeds](wrappers_Comptroller.Comptroller.md#compspeeds)
- [compSpeeds(address)](wrappers_Comptroller.Comptroller.md#compspeeds(address))
- [compSupplySpeeds](wrappers_Comptroller.Comptroller.md#compsupplyspeeds)
- [compSupplySpeeds(address)](wrappers_Comptroller.Comptroller.md#compsupplyspeeds(address))
- [connect](wrappers_Comptroller.Comptroller.md#connect)
- [deployed](wrappers_Comptroller.Comptroller.md#deployed)
- [emit](wrappers_Comptroller.Comptroller.md#emit)
- [fallback](wrappers_Comptroller.Comptroller.md#fallback)
- [listenerCount](wrappers_Comptroller.Comptroller.md#listenercount)
- [listeners](wrappers_Comptroller.Comptroller.md#listeners)
- [off](wrappers_Comptroller.Comptroller.md#off)
- [on](wrappers_Comptroller.Comptroller.md#on)
- [once](wrappers_Comptroller.Comptroller.md#once)
- [queryFilter](wrappers_Comptroller.Comptroller.md#queryfilter)
- [removeAllListeners](wrappers_Comptroller.Comptroller.md#removealllisteners)
- [removeListener](wrappers_Comptroller.Comptroller.md#removelistener)
- [getContractAddress](wrappers_Comptroller.Comptroller.md#getcontractaddress)
- [getInterface](wrappers_Comptroller.Comptroller.md#getinterface)
- [isIndexed](wrappers_Comptroller.Comptroller.md#isindexed)

## Constructors

### constructor

• **new Comptroller**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `claimComp(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `claimComp(address[],address[],bool,bool)` | (`holders`: `string`[], `cTokens`: `string`[], `borrowers`: `boolean`, `suppliers`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `compSpeeds` | (`_cToken`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `compSpeeds(address)` | (`_cToken`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `compSupplySpeeds` | (`_cToken`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `compSupplySpeeds(address)` | (`_cToken`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/Comptroller.d.ts:121](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/Comptroller.d.ts#L121)

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
| `claimComp(address)` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `claimComp(address[],address[],bool,bool)` | (`holders`: `string`[], `cTokens`: `string`[], `borrowers`: `boolean`, `suppliers`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `compSpeeds` | (`_cToken`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `compSpeeds(address)` | (`_cToken`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `compSupplySpeeds` | (`_cToken`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `compSupplySpeeds(address)` | (`_cToken`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/Comptroller.d.ts:143](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/Comptroller.d.ts#L143)

___

### filters

• **filters**: `Object`

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/Comptroller.d.ts:141](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/Comptroller.d.ts#L141)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `claimComp(address)` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `claimComp(address[],address[],bool,bool)` | (`holders`: `string`[], `cTokens`: `string`[], `borrowers`: `boolean`, `suppliers`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `compSpeeds` | (`_cToken`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `compSpeeds(address)` | (`_cToken`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `compSupplySpeeds` | (`_cToken`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `compSupplySpeeds(address)` | (`_cToken`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/Comptroller.d.ts:83](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/Comptroller.d.ts#L83)

___

### interface

• **interface**: [`ComptrollerInterface`](../interfaces/wrappers_Comptroller.ComptrollerInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/Comptroller.d.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/Comptroller.d.ts#L81)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `claimComp(address)` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `claimComp(address[],address[],bool,bool)` | (`holders`: `string`[], `cTokens`: `string`[], `borrowers`: `boolean`, `suppliers`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `compSpeeds` | (`_cToken`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `compSpeeds(address)` | (`_cToken`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `compSupplySpeeds` | (`_cToken`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `compSupplySpeeds(address)` | (`_cToken`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/Comptroller.d.ts:163](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/Comptroller.d.ts#L163)

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

▸ **attach**(`addressOrName`): [`Comptroller`](wrappers_Comptroller.Comptroller.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`Comptroller`](wrappers_Comptroller.Comptroller.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/Comptroller.d.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/Comptroller.d.ts#L42)

___

### claimComp(address)

▸ **claimComp(address)**(`arg0`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Comptroller.d.ts:111](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/Comptroller.d.ts#L111)

___

### claimComp(address[],address[],bool,bool)

▸ **claimComp(address[],address[],bool,bool)**(`holders`, `cTokens`, `borrowers`, `suppliers`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `holders` | `string`[] |
| `cTokens` | `string`[] |
| `borrowers` | `boolean` |
| `suppliers` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Comptroller.d.ts:103](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/Comptroller.d.ts#L103)

___

### compSpeeds

▸ **compSpeeds**(`_cToken`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_cToken` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Comptroller.d.ts:113](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/Comptroller.d.ts#L113)

___

### compSpeeds(address)

▸ **compSpeeds(address)**(`_cToken`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_cToken` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Comptroller.d.ts:115](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/Comptroller.d.ts#L115)

___

### compSupplySpeeds

▸ **compSupplySpeeds**(`_cToken`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_cToken` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Comptroller.d.ts:117](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/Comptroller.d.ts#L117)

___

### compSupplySpeeds(address)

▸ **compSupplySpeeds(address)**(`_cToken`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_cToken` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Comptroller.d.ts:119](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/Comptroller.d.ts#L119)

___

### connect

▸ **connect**(`signerOrProvider`): [`Comptroller`](wrappers_Comptroller.Comptroller.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`Comptroller`](wrappers_Comptroller.Comptroller.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/Comptroller.d.ts:41](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/Comptroller.d.ts#L41)

___

### deployed

▸ **deployed**(): `Promise`<[`Comptroller`](wrappers_Comptroller.Comptroller.md)\>

#### Returns

`Promise`<[`Comptroller`](wrappers_Comptroller.Comptroller.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/Comptroller.d.ts:43](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/Comptroller.d.ts#L43)

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

[src/wrappers/Comptroller.d.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/Comptroller.d.ts#L45)

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

[src/wrappers/Comptroller.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/Comptroller.d.ts#L68)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Comptroller`](wrappers_Comptroller.Comptroller.md)

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

[`Comptroller`](wrappers_Comptroller.Comptroller.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/Comptroller.d.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/Comptroller.d.ts#L48)

▸ **off**(`eventName`, `listener`): [`Comptroller`](wrappers_Comptroller.Comptroller.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Comptroller`](wrappers_Comptroller.Comptroller.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/Comptroller.d.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/Comptroller.d.ts#L69)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Comptroller`](wrappers_Comptroller.Comptroller.md)

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

[`Comptroller`](wrappers_Comptroller.Comptroller.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/Comptroller.d.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/Comptroller.d.ts#L52)

▸ **on**(`eventName`, `listener`): [`Comptroller`](wrappers_Comptroller.Comptroller.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Comptroller`](wrappers_Comptroller.Comptroller.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/Comptroller.d.ts:70](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/Comptroller.d.ts#L70)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Comptroller`](wrappers_Comptroller.Comptroller.md)

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

[`Comptroller`](wrappers_Comptroller.Comptroller.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/Comptroller.d.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/Comptroller.d.ts#L56)

▸ **once**(`eventName`, `listener`): [`Comptroller`](wrappers_Comptroller.Comptroller.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Comptroller`](wrappers_Comptroller.Comptroller.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/Comptroller.d.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/Comptroller.d.ts#L71)

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

[src/wrappers/Comptroller.d.ts:75](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/Comptroller.d.ts#L75)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`Comptroller`](wrappers_Comptroller.Comptroller.md)

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

[`Comptroller`](wrappers_Comptroller.Comptroller.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/Comptroller.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/Comptroller.d.ts#L64)

▸ **removeAllListeners**(`eventName?`): [`Comptroller`](wrappers_Comptroller.Comptroller.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`Comptroller`](wrappers_Comptroller.Comptroller.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/Comptroller.d.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/Comptroller.d.ts#L73)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Comptroller`](wrappers_Comptroller.Comptroller.md)

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

[`Comptroller`](wrappers_Comptroller.Comptroller.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/Comptroller.d.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/Comptroller.d.ts#L60)

▸ **removeListener**(`eventName`, `listener`): [`Comptroller`](wrappers_Comptroller.Comptroller.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Comptroller`](wrappers_Comptroller.Comptroller.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/Comptroller.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/Comptroller.d.ts#L72)

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
