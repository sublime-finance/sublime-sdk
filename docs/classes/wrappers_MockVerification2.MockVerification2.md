[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/MockVerification2](../modules/wrappers_MockVerification2.md) / MockVerification2

# Class: MockVerification2

[wrappers/MockVerification2](../modules/wrappers_MockVerification2.md).MockVerification2

## Hierarchy

- `Contract`

  ↳ **`MockVerification2`**

## Table of contents

### Constructors

- [constructor](wrappers_MockVerification2.MockVerification2.md#constructor)

### Properties

- [\_deployedPromise](wrappers_MockVerification2.MockVerification2.md#_deployedpromise)
- [\_runningEvents](wrappers_MockVerification2.MockVerification2.md#_runningevents)
- [\_wrappedEmits](wrappers_MockVerification2.MockVerification2.md#_wrappedemits)
- [address](wrappers_MockVerification2.MockVerification2.md#address)
- [callStatic](wrappers_MockVerification2.MockVerification2.md#callstatic)
- [deployTransaction](wrappers_MockVerification2.MockVerification2.md#deploytransaction)
- [estimateGas](wrappers_MockVerification2.MockVerification2.md#estimategas)
- [filters](wrappers_MockVerification2.MockVerification2.md#filters)
- [functions](wrappers_MockVerification2.MockVerification2.md#functions)
- [interface](wrappers_MockVerification2.MockVerification2.md#interface)
- [populateTransaction](wrappers_MockVerification2.MockVerification2.md#populatetransaction)
- [provider](wrappers_MockVerification2.MockVerification2.md#provider)
- [resolvedAddress](wrappers_MockVerification2.MockVerification2.md#resolvedaddress)
- [signer](wrappers_MockVerification2.MockVerification2.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_MockVerification2.MockVerification2.md#_checkrunningevents)
- [\_deployed](wrappers_MockVerification2.MockVerification2.md#_deployed)
- [\_wrapEvent](wrappers_MockVerification2.MockVerification2.md#_wrapevent)
- [attach](wrappers_MockVerification2.MockVerification2.md#attach)
- [connect](wrappers_MockVerification2.MockVerification2.md#connect)
- [deployed](wrappers_MockVerification2.MockVerification2.md#deployed)
- [emit](wrappers_MockVerification2.MockVerification2.md#emit)
- [fallback](wrappers_MockVerification2.MockVerification2.md#fallback)
- [isUser](wrappers_MockVerification2.MockVerification2.md#isuser)
- [isUser(address,address)](wrappers_MockVerification2.MockVerification2.md#isuser(address,address))
- [listenerCount](wrappers_MockVerification2.MockVerification2.md#listenercount)
- [listeners](wrappers_MockVerification2.MockVerification2.md#listeners)
- [off](wrappers_MockVerification2.MockVerification2.md#off)
- [on](wrappers_MockVerification2.MockVerification2.md#on)
- [once](wrappers_MockVerification2.MockVerification2.md#once)
- [queryFilter](wrappers_MockVerification2.MockVerification2.md#queryfilter)
- [removeAllListeners](wrappers_MockVerification2.MockVerification2.md#removealllisteners)
- [removeListener](wrappers_MockVerification2.MockVerification2.md#removelistener)
- [unverifyUser](wrappers_MockVerification2.MockVerification2.md#unverifyuser)
- [unverifyUser(address)](wrappers_MockVerification2.MockVerification2.md#unverifyuser(address))
- [verifiedUsers](wrappers_MockVerification2.MockVerification2.md#verifiedusers)
- [verifiedUsers(address,address)](wrappers_MockVerification2.MockVerification2.md#verifiedusers(address,address))
- [verifiers](wrappers_MockVerification2.MockVerification2.md#verifiers)
- [verifiers(address)](wrappers_MockVerification2.MockVerification2.md#verifiers(address))
- [verifyUser](wrappers_MockVerification2.MockVerification2.md#verifyuser)
- [verifyUser(address,address)](wrappers_MockVerification2.MockVerification2.md#verifyuser(address,address))
- [whitelistVerifier](wrappers_MockVerification2.MockVerification2.md#whitelistverifier)
- [whitelistVerifier(address)](wrappers_MockVerification2.MockVerification2.md#whitelistverifier(address))
- [getContractAddress](wrappers_MockVerification2.MockVerification2.md#getcontractaddress)
- [getInterface](wrappers_MockVerification2.MockVerification2.md#getinterface)
- [isIndexed](wrappers_MockVerification2.MockVerification2.md#isindexed)

## Constructors

### constructor

• **new MockVerification2**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `unverifyUser` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unverifyUser(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `verifiedUsers` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `verifiedUsers(address,address)` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `verifiers` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `verifiers(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `verifyUser` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `verifyUser(address,address)` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `whitelistVerifier` | (`_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `whitelistVerifier(address)` | (`_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/MockVerification2.d.ts:156](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L156)

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
| `unverifyUser` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unverifyUser(address)` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `verifiedUsers` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `verifiedUsers(address,address)` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `verifiers` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `verifiers(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `verifyUser` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `verifyUser(address,address)` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `whitelistVerifier` | (`_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `whitelistVerifier(address)` | (`_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/MockVerification2.d.ts:184](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L184)

___

### filters

• **filters**: `Object`

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/MockVerification2.d.ts:182](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L182)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isUser` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `isUser(address,address)` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `unverifyUser` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unverifyUser(address)` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `verifiedUsers` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `verifiedUsers(address,address)` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `verifiers` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `verifiers(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `verifyUser` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `verifyUser(address,address)` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `whitelistVerifier` | (`_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `whitelistVerifier(address)` | (`_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/MockVerification2.d.ts:92](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L92)

___

### interface

• **interface**: [`MockVerification2Interface`](../interfaces/wrappers_MockVerification2.MockVerification2Interface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/MockVerification2.d.ts:90](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L90)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isUser` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isUser(address,address)` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `unverifyUser` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unverifyUser(address)` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `verifiedUsers` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `verifiedUsers(address,address)` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `verifiers` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `verifiers(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `verifyUser` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `verifyUser(address,address)` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `whitelistVerifier` | (`_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `whitelistVerifier(address)` | (`_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/MockVerification2.d.ts:214](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L214)

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

▸ **attach**(`addressOrName`): [`MockVerification2`](wrappers_MockVerification2.MockVerification2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`MockVerification2`](wrappers_MockVerification2.MockVerification2.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/MockVerification2.d.ts:51](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L51)

___

### connect

▸ **connect**(`signerOrProvider`): [`MockVerification2`](wrappers_MockVerification2.MockVerification2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`MockVerification2`](wrappers_MockVerification2.MockVerification2.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/MockVerification2.d.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L50)

___

### deployed

▸ **deployed**(): `Promise`<[`MockVerification2`](wrappers_MockVerification2.MockVerification2.md)\>

#### Returns

`Promise`<[`MockVerification2`](wrappers_MockVerification2.MockVerification2.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/MockVerification2.d.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L52)

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

[src/wrappers/MockVerification2.d.ts:125](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L125)

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

[src/wrappers/MockVerification2.d.ts:127](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L127)

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

[src/wrappers/MockVerification2.d.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L54)

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

[src/wrappers/MockVerification2.d.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L77)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockVerification2`](wrappers_MockVerification2.MockVerification2.md)

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

[`MockVerification2`](wrappers_MockVerification2.MockVerification2.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/MockVerification2.d.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L57)

▸ **off**(`eventName`, `listener`): [`MockVerification2`](wrappers_MockVerification2.MockVerification2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockVerification2`](wrappers_MockVerification2.MockVerification2.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/MockVerification2.d.ts:78](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L78)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockVerification2`](wrappers_MockVerification2.MockVerification2.md)

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

[`MockVerification2`](wrappers_MockVerification2.MockVerification2.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/MockVerification2.d.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L61)

▸ **on**(`eventName`, `listener`): [`MockVerification2`](wrappers_MockVerification2.MockVerification2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockVerification2`](wrappers_MockVerification2.MockVerification2.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/MockVerification2.d.ts:79](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L79)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockVerification2`](wrappers_MockVerification2.MockVerification2.md)

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

[`MockVerification2`](wrappers_MockVerification2.MockVerification2.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/MockVerification2.d.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L65)

▸ **once**(`eventName`, `listener`): [`MockVerification2`](wrappers_MockVerification2.MockVerification2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockVerification2`](wrappers_MockVerification2.MockVerification2.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/MockVerification2.d.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L80)

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

[src/wrappers/MockVerification2.d.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L84)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`MockVerification2`](wrappers_MockVerification2.MockVerification2.md)

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

[`MockVerification2`](wrappers_MockVerification2.MockVerification2.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/MockVerification2.d.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L73)

▸ **removeAllListeners**(`eventName?`): [`MockVerification2`](wrappers_MockVerification2.MockVerification2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`MockVerification2`](wrappers_MockVerification2.MockVerification2.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/MockVerification2.d.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L82)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockVerification2`](wrappers_MockVerification2.MockVerification2.md)

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

[`MockVerification2`](wrappers_MockVerification2.MockVerification2.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/MockVerification2.d.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L69)

▸ **removeListener**(`eventName`, `listener`): [`MockVerification2`](wrappers_MockVerification2.MockVerification2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockVerification2`](wrappers_MockVerification2.MockVerification2.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/MockVerification2.d.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L81)

___

### unverifyUser

▸ **unverifyUser**(`_user`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockVerification2.d.ts:129](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L129)

___

### unverifyUser(address)

▸ **unverifyUser(address)**(`_user`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockVerification2.d.ts:131](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L131)

___

### verifiedUsers

▸ **verifiedUsers**(`arg0`, `arg1`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/MockVerification2.d.ts:133](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L133)

___

### verifiedUsers(address,address)

▸ **verifiedUsers(address,address)**(`arg0`, `arg1`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/MockVerification2.d.ts:135](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L135)

___

### verifiers

▸ **verifiers**(`arg0`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/MockVerification2.d.ts:137](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L137)

___

### verifiers(address)

▸ **verifiers(address)**(`arg0`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/MockVerification2.d.ts:139](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L139)

___

### verifyUser

▸ **verifyUser**(`_user`, `_verifier`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_verifier` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockVerification2.d.ts:141](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L141)

___

### verifyUser(address,address)

▸ **verifyUser(address,address)**(`_user`, `_verifier`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_verifier` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockVerification2.d.ts:143](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L143)

___

### whitelistVerifier

▸ **whitelistVerifier**(`_verifier`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_verifier` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockVerification2.d.ts:149](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L149)

___

### whitelistVerifier(address)

▸ **whitelistVerifier(address)**(`_verifier`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_verifier` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockVerification2.d.ts:151](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/MockVerification2.d.ts#L151)

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
