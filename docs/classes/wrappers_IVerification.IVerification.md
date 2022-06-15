[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/IVerification](../modules/wrappers_IVerification.md) / IVerification

# Class: IVerification

[wrappers/IVerification](../modules/wrappers_IVerification.md).IVerification

## Hierarchy

- `Contract`

  ↳ **`IVerification`**

## Table of contents

### Constructors

- [constructor](wrappers_IVerification.IVerification.md#constructor)

### Properties

- [\_deployedPromise](wrappers_IVerification.IVerification.md#_deployedpromise)
- [\_runningEvents](wrappers_IVerification.IVerification.md#_runningevents)
- [\_wrappedEmits](wrappers_IVerification.IVerification.md#_wrappedemits)
- [address](wrappers_IVerification.IVerification.md#address)
- [callStatic](wrappers_IVerification.IVerification.md#callstatic)
- [deployTransaction](wrappers_IVerification.IVerification.md#deploytransaction)
- [estimateGas](wrappers_IVerification.IVerification.md#estimategas)
- [filters](wrappers_IVerification.IVerification.md#filters)
- [functions](wrappers_IVerification.IVerification.md#functions)
- [interface](wrappers_IVerification.IVerification.md#interface)
- [populateTransaction](wrappers_IVerification.IVerification.md#populatetransaction)
- [provider](wrappers_IVerification.IVerification.md#provider)
- [resolvedAddress](wrappers_IVerification.IVerification.md#resolvedaddress)
- [signer](wrappers_IVerification.IVerification.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_IVerification.IVerification.md#_checkrunningevents)
- [\_deployed](wrappers_IVerification.IVerification.md#_deployed)
- [\_wrapEvent](wrappers_IVerification.IVerification.md#_wrapevent)
- [attach](wrappers_IVerification.IVerification.md#attach)
- [connect](wrappers_IVerification.IVerification.md#connect)
- [deployed](wrappers_IVerification.IVerification.md#deployed)
- [emit](wrappers_IVerification.IVerification.md#emit)
- [fallback](wrappers_IVerification.IVerification.md#fallback)
- [isUser](wrappers_IVerification.IVerification.md#isuser)
- [isUser(address,address)](wrappers_IVerification.IVerification.md#isuser(address,address))
- [listenerCount](wrappers_IVerification.IVerification.md#listenercount)
- [listeners](wrappers_IVerification.IVerification.md#listeners)
- [off](wrappers_IVerification.IVerification.md#off)
- [on](wrappers_IVerification.IVerification.md#on)
- [once](wrappers_IVerification.IVerification.md#once)
- [queryFilter](wrappers_IVerification.IVerification.md#queryfilter)
- [registerMasterAddress](wrappers_IVerification.IVerification.md#registermasteraddress)
- [registerMasterAddress(address,bool)](wrappers_IVerification.IVerification.md#registermasteraddress(address,bool))
- [removeAllListeners](wrappers_IVerification.IVerification.md#removealllisteners)
- [removeListener](wrappers_IVerification.IVerification.md#removelistener)
- [unregisterMasterAddress](wrappers_IVerification.IVerification.md#unregistermasteraddress)
- [unregisterMasterAddress(address,address)](wrappers_IVerification.IVerification.md#unregistermasteraddress(address,address))
- [verifiers](wrappers_IVerification.IVerification.md#verifiers)
- [verifiers(address)](wrappers_IVerification.IVerification.md#verifiers(address))
- [getContractAddress](wrappers_IVerification.IVerification.md#getcontractaddress)
- [getInterface](wrappers_IVerification.IVerification.md#getinterface)
- [isIndexed](wrappers_IVerification.IVerification.md#isindexed)

## Constructors

### constructor

• **new IVerification**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `isUser` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `isUser(address,address)` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `registerMasterAddress` | (`_masterAddress`: `string`, `_isMasterLinked`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerMasterAddress(address,bool)` | (`_masterAddress`: `string`, `_isMasterLinked`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unregisterMasterAddress` | (`_masterAddress`: `string`, `_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unregisterMasterAddress(address,address)` | (`_masterAddress`: `string`, `_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `verifiers` | (`_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `verifiers(address)` | (`_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/IVerification.d.ts:176](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/IVerification.d.ts#L176)

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
| `isUser` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isUser(address,address)` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `registerMasterAddress` | (`_masterAddress`: `string`, `_isMasterLinked`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `registerMasterAddress(address,bool)` | (`_masterAddress`: `string`, `_isMasterLinked`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unregisterMasterAddress` | (`_masterAddress`: `string`, `_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unregisterMasterAddress(address,address)` | (`_masterAddress`: `string`, `_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `verifiers` | (`_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `verifiers(address)` | (`_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/IVerification.d.ts:235](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/IVerification.d.ts#L235)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ActivationDelayUpdated` | (`activationDelay`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`], { `activationDelay`: `BigNumber`  }\> |
| `AddressLinked` | (`linkedAddress`: `string`, `masterAddress`: `string`, `activatesAt`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `BigNumber`], { `activatesAt`: `BigNumber` ; `linkedAddress`: `string` ; `masterAddress`: `string`  }\> |
| `AddressLinkingRequestCancelled` | (`linkedAddress`: `string`, `masterAddress`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`], { `linkedAddress`: `string` ; `masterAddress`: `string`  }\> |
| `AddressLinkingRequested` | (`linkedAddress`: `string`, `masterAddress`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`], { `linkedAddress`: `string` ; `masterAddress`: `string`  }\> |
| `AddressUnlinked` | (`linkedAddress`: `string`, `masterAddress`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`], { `linkedAddress`: `string` ; `masterAddress`: `string`  }\> |
| `UserRegistered` | (`masterAddress`: `string`, `verifier`: `string`, `activatesAt`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `BigNumber`], { `activatesAt`: `BigNumber` ; `masterAddress`: `string` ; `verifier`: `string`  }\> |
| `UserUnregistered` | (`masterAddress`: `string`, `verifier`: `string`, `unregisteredBy`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `string`], { `masterAddress`: `string` ; `unregisteredBy`: `string` ; `verifier`: `string`  }\> |
| `VerifierAdded` | (`verifier`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `verifier`: `string`  }\> |
| `VerifierRemoved` | (`verifier`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `verifier`: `string`  }\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/IVerification.d.ts:194](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/IVerification.d.ts#L194)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isUser` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `isMsgSenderUser`: `boolean`  }\> |
| `isUser(address,address)` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `isMsgSenderUser`: `boolean`  }\> |
| `registerMasterAddress` | (`_masterAddress`: `string`, `_isMasterLinked`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registerMasterAddress(address,bool)` | (`_masterAddress`: `string`, `_isMasterLinked`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unregisterMasterAddress` | (`_masterAddress`: `string`, `_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unregisterMasterAddress(address,address)` | (`_masterAddress`: `string`, `_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `verifiers` | (`_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `isValid`: `boolean`  }\> |
| `verifiers(address)` | (`_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `isValid`: `boolean`  }\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/IVerification.d.ts:106](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/IVerification.d.ts#L106)

___

### interface

• **interface**: [`IVerificationInterface`](../interfaces/wrappers_IVerification.IVerificationInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/IVerification.d.ts:104](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/IVerification.d.ts#L104)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isUser` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isUser(address,address)` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `registerMasterAddress` | (`_masterAddress`: `string`, `_isMasterLinked`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registerMasterAddress(address,bool)` | (`_masterAddress`: `string`, `_isMasterLinked`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unregisterMasterAddress` | (`_masterAddress`: `string`, `_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unregisterMasterAddress(address,address)` | (`_masterAddress`: `string`, `_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `verifiers` | (`_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `verifiers(address)` | (`_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/IVerification.d.ts:269](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/IVerification.d.ts#L269)

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

▸ **attach**(`addressOrName`): [`IVerification`](wrappers_IVerification.IVerification.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IVerification`](wrappers_IVerification.IVerification.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/IVerification.d.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/IVerification.d.ts#L65)

___

### connect

▸ **connect**(`signerOrProvider`): [`IVerification`](wrappers_IVerification.IVerification.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IVerification`](wrappers_IVerification.IVerification.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/IVerification.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/IVerification.d.ts#L64)

___

### deployed

▸ **deployed**(): `Promise`<[`IVerification`](wrappers_IVerification.IVerification.md)\>

#### Returns

`Promise`<[`IVerification`](wrappers_IVerification.IVerification.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/IVerification.d.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/IVerification.d.ts#L66)

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

### isUser

▸ **isUser**(`_user`, `_verifier`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_verifier` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/IVerification.d.ts:144](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/IVerification.d.ts#L144)

___

### isUser(address,address)

▸ **isUser(address,address)**(`_user`, `_verifier`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_verifier` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/IVerification.d.ts:146](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/IVerification.d.ts#L146)

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

[src/wrappers/IVerification.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/IVerification.d.ts#L68)

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

[src/wrappers/IVerification.d.ts:91](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/IVerification.d.ts#L91)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IVerification`](wrappers_IVerification.IVerification.md)

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

[`IVerification`](wrappers_IVerification.IVerification.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IVerification.d.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/IVerification.d.ts#L71)

▸ **off**(`eventName`, `listener`): [`IVerification`](wrappers_IVerification.IVerification.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IVerification`](wrappers_IVerification.IVerification.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IVerification.d.ts:92](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/IVerification.d.ts#L92)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IVerification`](wrappers_IVerification.IVerification.md)

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

[`IVerification`](wrappers_IVerification.IVerification.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IVerification.d.ts:75](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/IVerification.d.ts#L75)

▸ **on**(`eventName`, `listener`): [`IVerification`](wrappers_IVerification.IVerification.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IVerification`](wrappers_IVerification.IVerification.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IVerification.d.ts:93](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/IVerification.d.ts#L93)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IVerification`](wrappers_IVerification.IVerification.md)

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

[`IVerification`](wrappers_IVerification.IVerification.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IVerification.d.ts:79](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/IVerification.d.ts#L79)

▸ **once**(`eventName`, `listener`): [`IVerification`](wrappers_IVerification.IVerification.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IVerification`](wrappers_IVerification.IVerification.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IVerification.d.ts:94](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/IVerification.d.ts#L94)

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

[src/wrappers/IVerification.d.ts:98](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/IVerification.d.ts#L98)

___

### registerMasterAddress

▸ **registerMasterAddress**(`_masterAddress`, `_isMasterLinked`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_masterAddress` | `string` |
| `_isMasterLinked` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IVerification.d.ts:148](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/IVerification.d.ts#L148)

___

### registerMasterAddress(address,bool)

▸ **registerMasterAddress(address,bool)**(`_masterAddress`, `_isMasterLinked`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_masterAddress` | `string` |
| `_isMasterLinked` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IVerification.d.ts:154](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/IVerification.d.ts#L154)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`IVerification`](wrappers_IVerification.IVerification.md)

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

[`IVerification`](wrappers_IVerification.IVerification.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IVerification.d.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/IVerification.d.ts#L87)

▸ **removeAllListeners**(`eventName?`): [`IVerification`](wrappers_IVerification.IVerification.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IVerification`](wrappers_IVerification.IVerification.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IVerification.d.ts:96](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/IVerification.d.ts#L96)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IVerification`](wrappers_IVerification.IVerification.md)

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

[`IVerification`](wrappers_IVerification.IVerification.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IVerification.d.ts:83](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/IVerification.d.ts#L83)

▸ **removeListener**(`eventName`, `listener`): [`IVerification`](wrappers_IVerification.IVerification.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IVerification`](wrappers_IVerification.IVerification.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IVerification.d.ts:95](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/IVerification.d.ts#L95)

___

### unregisterMasterAddress

▸ **unregisterMasterAddress**(`_masterAddress`, `_verifier`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_masterAddress` | `string` |
| `_verifier` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IVerification.d.ts:160](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/IVerification.d.ts#L160)

___

### unregisterMasterAddress(address,address)

▸ **unregisterMasterAddress(address,address)**(`_masterAddress`, `_verifier`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_masterAddress` | `string` |
| `_verifier` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IVerification.d.ts:166](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/IVerification.d.ts#L166)

___

### verifiers

▸ **verifiers**(`_verifier`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_verifier` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/IVerification.d.ts:172](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/IVerification.d.ts#L172)

___

### verifiers(address)

▸ **verifiers(address)**(`_verifier`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_verifier` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/IVerification.d.ts:174](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/IVerification.d.ts#L174)

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
