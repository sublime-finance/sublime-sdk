[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/MockAdminVerifier](../modules/wrappers_MockAdminVerifier.md) / MockAdminVerifier

# Class: MockAdminVerifier

[wrappers/MockAdminVerifier](../modules/wrappers_MockAdminVerifier.md).MockAdminVerifier

## Hierarchy

- `Contract`

  ↳ **`MockAdminVerifier`**

## Table of contents

### Constructors

- [constructor](wrappers_MockAdminVerifier.MockAdminVerifier.md#constructor)

### Properties

- [\_deployedPromise](wrappers_MockAdminVerifier.MockAdminVerifier.md#_deployedpromise)
- [\_runningEvents](wrappers_MockAdminVerifier.MockAdminVerifier.md#_runningevents)
- [\_wrappedEmits](wrappers_MockAdminVerifier.MockAdminVerifier.md#_wrappedemits)
- [address](wrappers_MockAdminVerifier.MockAdminVerifier.md#address)
- [callStatic](wrappers_MockAdminVerifier.MockAdminVerifier.md#callstatic)
- [deployTransaction](wrappers_MockAdminVerifier.MockAdminVerifier.md#deploytransaction)
- [estimateGas](wrappers_MockAdminVerifier.MockAdminVerifier.md#estimategas)
- [filters](wrappers_MockAdminVerifier.MockAdminVerifier.md#filters)
- [functions](wrappers_MockAdminVerifier.MockAdminVerifier.md#functions)
- [interface](wrappers_MockAdminVerifier.MockAdminVerifier.md#interface)
- [populateTransaction](wrappers_MockAdminVerifier.MockAdminVerifier.md#populatetransaction)
- [provider](wrappers_MockAdminVerifier.MockAdminVerifier.md#provider)
- [resolvedAddress](wrappers_MockAdminVerifier.MockAdminVerifier.md#resolvedaddress)
- [signer](wrappers_MockAdminVerifier.MockAdminVerifier.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_MockAdminVerifier.MockAdminVerifier.md#_checkrunningevents)
- [\_deployed](wrappers_MockAdminVerifier.MockAdminVerifier.md#_deployed)
- [\_wrapEvent](wrappers_MockAdminVerifier.MockAdminVerifier.md#_wrapevent)
- [attach](wrappers_MockAdminVerifier.MockAdminVerifier.md#attach)
- [connect](wrappers_MockAdminVerifier.MockAdminVerifier.md#connect)
- [deployed](wrappers_MockAdminVerifier.MockAdminVerifier.md#deployed)
- [emit](wrappers_MockAdminVerifier.MockAdminVerifier.md#emit)
- [fallback](wrappers_MockAdminVerifier.MockAdminVerifier.md#fallback)
- [initialize](wrappers_MockAdminVerifier.MockAdminVerifier.md#initialize)
- [initialize(address,address,string,string)](wrappers_MockAdminVerifier.MockAdminVerifier.md#initialize(address,address,string,string))
- [listenerCount](wrappers_MockAdminVerifier.MockAdminVerifier.md#listenercount)
- [listeners](wrappers_MockAdminVerifier.MockAdminVerifier.md#listeners)
- [off](wrappers_MockAdminVerifier.MockAdminVerifier.md#off)
- [on](wrappers_MockAdminVerifier.MockAdminVerifier.md#on)
- [once](wrappers_MockAdminVerifier.MockAdminVerifier.md#once)
- [owner](wrappers_MockAdminVerifier.MockAdminVerifier.md#owner)
- [owner()](wrappers_MockAdminVerifier.MockAdminVerifier.md#owner())
- [queryFilter](wrappers_MockAdminVerifier.MockAdminVerifier.md#queryfilter)
- [registerSelf](wrappers_MockAdminVerifier.MockAdminVerifier.md#registerself)
- [registerSelf()](wrappers_MockAdminVerifier.MockAdminVerifier.md#registerself())
- [registerUserViaOwner](wrappers_MockAdminVerifier.MockAdminVerifier.md#registeruserviaowner)
- [registerUserViaOwner(address)](wrappers_MockAdminVerifier.MockAdminVerifier.md#registeruserviaowner(address))
- [removeAllListeners](wrappers_MockAdminVerifier.MockAdminVerifier.md#removealllisteners)
- [removeListener](wrappers_MockAdminVerifier.MockAdminVerifier.md#removelistener)
- [renounceOwnership](wrappers_MockAdminVerifier.MockAdminVerifier.md#renounceownership)
- [renounceOwnership()](wrappers_MockAdminVerifier.MockAdminVerifier.md#renounceownership())
- [transferOwnership](wrappers_MockAdminVerifier.MockAdminVerifier.md#transferownership)
- [transferOwnership(address)](wrappers_MockAdminVerifier.MockAdminVerifier.md#transferownership(address))
- [unregisterSelf](wrappers_MockAdminVerifier.MockAdminVerifier.md#unregisterself)
- [unregisterSelf()](wrappers_MockAdminVerifier.MockAdminVerifier.md#unregisterself())
- [unregisterUser](wrappers_MockAdminVerifier.MockAdminVerifier.md#unregisteruser)
- [unregisterUser(address)](wrappers_MockAdminVerifier.MockAdminVerifier.md#unregisteruser(address))
- [updateVerification](wrappers_MockAdminVerifier.MockAdminVerifier.md#updateverification)
- [updateVerification(address)](wrappers_MockAdminVerifier.MockAdminVerifier.md#updateverification(address))
- [verification](wrappers_MockAdminVerifier.MockAdminVerifier.md#verification)
- [verification()](wrappers_MockAdminVerifier.MockAdminVerifier.md#verification())
- [getContractAddress](wrappers_MockAdminVerifier.MockAdminVerifier.md#getcontractaddress)
- [getInterface](wrappers_MockAdminVerifier.MockAdminVerifier.md#getinterface)
- [isIndexed](wrappers_MockAdminVerifier.MockAdminVerifier.md#isindexed)

## Constructors

### constructor

• **new MockAdminVerifier**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `initialize` | (`_admin`: `string`, `_verification`: `string`, `_name`: `string`, `_version`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialize(address,address,string,string)` | (`_admin`: `string`, `_verification`: `string`, `_name`: `string`, `_version`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `registerSelf` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerSelf()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerUserViaOwner` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerUserViaOwner(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `renounceOwnership` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `renounceOwnership()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unregisterSelf` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unregisterSelf()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unregisterUser` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unregisterUser(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateVerification` | (`_verification`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateVerification(address)` | (`_verification`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `verification` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `verification()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:234](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L234)

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
| `initialize` | (`_admin`: `string`, `_verification`: `string`, `_name`: `string`, `_version`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initialize(address,address,string,string)` | (`_admin`: `string`, `_verification`: `string`, `_name`: `string`, `_version`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `registerSelf` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `registerSelf()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `registerUserViaOwner` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `registerUserViaOwner(address)` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unregisterSelf` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unregisterSelf()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unregisterUser` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unregisterUser(address)` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateVerification` | (`_verification`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateVerification(address)` | (`_verification`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `verification` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `verification()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:301](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L301)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `OwnershipTransferred` | (`previousOwner`: `string`, `newOwner`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`], { `newOwner`: `string` ; `previousOwner`: `string`  }\> |
| `SignerUpdated` | (`signerAddress`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `signerAddress`: `string`  }\> |
| `UserRegistered` | (`user`: `string`, `isMasterLinked`: ``null``, `metadata`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `boolean`, `string`], { `isMasterLinked`: `boolean` ; `metadata`: `string` ; `user`: `string`  }\> |
| `UserUnregistered` | (`user`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `user`: `string`  }\> |
| `VerificationUpdated` | (`verification`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `verification`: `string`  }\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:282](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L282)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `initialize` | (`_admin`: `string`, `_verification`: `string`, `_name`: `string`, `_version`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialize(address,address,string,string)` | (`_admin`: `string`, `_verification`: `string`, `_name`: `string`, `_version`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `registerSelf` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registerSelf()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registerUserViaOwner` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registerUserViaOwner(address)` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unregisterSelf` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unregisterSelf()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unregisterUser` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unregisterUser(address)` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateVerification` | (`_verification`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateVerification(address)` | (`_verification`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `verification` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `verification()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:116](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L116)

___

### interface

• **interface**: [`MockAdminVerifierInterface`](../interfaces/wrappers_MockAdminVerifier.MockAdminVerifierInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:114](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L114)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `initialize` | (`_admin`: `string`, `_verification`: `string`, `_name`: `string`, `_version`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialize(address,address,string,string)` | (`_admin`: `string`, `_verification`: `string`, `_name`: `string`, `_version`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `registerSelf` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registerSelf()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registerUserViaOwner` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registerUserViaOwner(address)` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unregisterSelf` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unregisterSelf()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unregisterUser` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unregisterUser(address)` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateVerification` | (`_verification`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateVerification(address)` | (`_verification`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `verification` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `verification()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:355](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L355)

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

▸ **attach**(`addressOrName`): [`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:75](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L75)

___

### connect

▸ **connect**(`signerOrProvider`): [`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:74](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L74)

___

### deployed

▸ **deployed**(): `Promise`<[`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)\>

#### Returns

`Promise`<[`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L76)

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

### initialize

▸ **initialize**(`_admin`, `_verification`, `_name`, `_version`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_admin` | `string` |
| `_verification` | `string` |
| `_name` | `string` |
| `_version` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:179](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L179)

___

### initialize(address,address,string,string)

▸ **initialize(address,address,string,string)**(`_admin`, `_verification`, `_name`, `_version`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_admin` | `string` |
| `_verification` | `string` |
| `_name` | `string` |
| `_version` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:187](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L187)

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

[src/wrappers/MockAdminVerifier.d.ts:78](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L78)

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

[src/wrappers/MockAdminVerifier.d.ts:101](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L101)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)

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

[`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L81)

▸ **off**(`eventName`, `listener`): [`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:102](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L102)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)

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

[`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L85)

▸ **on**(`eventName`, `listener`): [`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:103](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L103)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)

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

[`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:89](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L89)

▸ **once**(`eventName`, `listener`): [`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:104](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L104)

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

[src/wrappers/MockAdminVerifier.d.ts:195](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L195)

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

[src/wrappers/MockAdminVerifier.d.ts:197](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L197)

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

[src/wrappers/MockAdminVerifier.d.ts:108](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L108)

___

### registerSelf

▸ **registerSelf**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:199](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L199)

___

### registerSelf()

▸ **registerSelf()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:201](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L201)

___

### registerUserViaOwner

▸ **registerUserViaOwner**(`_user`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:203](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L203)

___

### registerUserViaOwner(address)

▸ **registerUserViaOwner(address)**(`_user`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:205](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L205)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)

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

[`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:97](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L97)

▸ **removeAllListeners**(`eventName?`): [`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:106](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L106)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)

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

[`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:93](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L93)

▸ **removeListener**(`eventName`, `listener`): [`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:105](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L105)

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

[src/wrappers/MockAdminVerifier.d.ts:207](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L207)

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

[src/wrappers/MockAdminVerifier.d.ts:209](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L209)

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

[src/wrappers/MockAdminVerifier.d.ts:211](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L211)

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

[src/wrappers/MockAdminVerifier.d.ts:213](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L213)

___

### unregisterSelf

▸ **unregisterSelf**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:215](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L215)

___

### unregisterSelf()

▸ **unregisterSelf()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:217](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L217)

___

### unregisterUser

▸ **unregisterUser**(`_user`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:219](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L219)

___

### unregisterUser(address)

▸ **unregisterUser(address)**(`_user`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:221](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L221)

___

### updateVerification

▸ **updateVerification**(`_verification`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_verification` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:223](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L223)

___

### updateVerification(address)

▸ **updateVerification(address)**(`_verification`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_verification` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:225](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L225)

___

### verification

▸ **verification**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:230](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L230)

___

### verification()

▸ **verification()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/MockAdminVerifier.d.ts:232](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockAdminVerifier.d.ts#L232)

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
