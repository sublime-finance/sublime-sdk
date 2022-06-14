[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/MockTwitterVerifier](../modules/wrappers_MockTwitterVerifier.md) / MockTwitterVerifier

# Class: MockTwitterVerifier

[wrappers/MockTwitterVerifier](../modules/wrappers_MockTwitterVerifier.md).MockTwitterVerifier

## Hierarchy

- `Contract`

  ↳ **`MockTwitterVerifier`**

## Table of contents

### Constructors

- [constructor](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#constructor)

### Properties

- [\_deployedPromise](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#_deployedpromise)
- [\_runningEvents](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#_runningevents)
- [\_wrappedEmits](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#_wrappedemits)
- [address](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#address)
- [callStatic](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#callstatic)
- [deployTransaction](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#deploytransaction)
- [estimateGas](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#estimategas)
- [filters](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#filters)
- [functions](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#functions)
- [interface](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#interface)
- [populateTransaction](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#populatetransaction)
- [provider](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#provider)
- [resolvedAddress](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#resolvedaddress)
- [signer](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#_checkrunningevents)
- [\_deployed](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#_deployed)
- [\_wrapEvent](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#_wrapevent)
- [attach](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#attach)
- [connect](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#connect)
- [deployed](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#deployed)
- [emit](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#emit)
- [fallback](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#fallback)
- [initialize](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#initialize)
- [initialize(address,address,address,string,string)](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#initialize(address,address,address,string,string))
- [listenerCount](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#listenercount)
- [listeners](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#listeners)
- [off](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#off)
- [on](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#on)
- [once](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#once)
- [owner](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#owner)
- [owner()](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#owner())
- [queryFilter](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#queryfilter)
- [registerSelf](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#registerself)
- [registerSelf(bool,uint8,bytes32,bytes32,string,string,uint256)](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#registerself(bool,uint8,bytes32,bytes32,string,string,uint256))
- [registerUserViaOwner](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#registeruserviaowner)
- [registerUserViaOwner(bool,address,string,string)](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#registeruserviaowner(bool,address,string,string))
- [removeAllListeners](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#removealllisteners)
- [removeListener](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#removelistener)
- [renounceOwnership](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#renounceownership)
- [renounceOwnership()](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#renounceownership())
- [signerAddress](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#signeraddress)
- [signerAddress()](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#signeraddress())
- [transferOwnership](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#transferownership)
- [transferOwnership(address)](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#transferownership(address))
- [twitterIdMap](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#twitteridmap)
- [twitterIdMap(string)](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#twitteridmap(string))
- [unregisterSelf](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#unregisterself)
- [unregisterSelf()](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#unregisterself())
- [unregisterUser](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#unregisteruser)
- [unregisterUser(address)](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#unregisteruser(address))
- [updateSignerAddress](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#updatesigneraddress)
- [updateSignerAddress(address)](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#updatesigneraddress(address))
- [updateVerification](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#updateverification)
- [updateVerification(address)](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#updateverification(address))
- [userData](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#userdata)
- [userData(address)](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#userdata(address))
- [verification](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#verification)
- [verification()](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#verification())
- [getContractAddress](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#getcontractaddress)
- [getInterface](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#getinterface)
- [isIndexed](wrappers_MockTwitterVerifier.MockTwitterVerifier.md#isindexed)

## Constructors

### constructor

• **new MockTwitterVerifier**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `initialize` | (`_admin`: `string`, `_verification`: `string`, `_signerAddress`: `string`, `_name`: `string`, `_version`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialize(address,address,address,string,string)` | (`_admin`: `string`, `_verification`: `string`, `_signerAddress`: `string`, `_name`: `string`, `_version`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `registerSelf` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_twitterId`: `string`, `_tweetId`: `string`, `_timestamp`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerSelf(bool,uint8,bytes32,bytes32,string,string,uint256)` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_twitterId`: `string`, `_tweetId`: `string`, `_timestamp`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerUserViaOwner` | (`_isMasterLinked`: `boolean`, `_user`: `string`, `_twitterId`: `string`, `_tweetId`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerUserViaOwner(bool,address,string,string)` | (`_isMasterLinked`: `boolean`, `_user`: `string`, `_twitterId`: `string`, `_tweetId`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `renounceOwnership` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `renounceOwnership()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `signerAddress` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `signerAddress()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `twitterIdMap` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `twitterIdMap(string)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `unregisterSelf` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unregisterSelf()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unregisterUser` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unregisterUser(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateSignerAddress` | (`_signerAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateSignerAddress(address)` | (`_signerAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateVerification` | (`_verification`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateVerification(address)` | (`_verification`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `userData` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `string`] & { `tweetId`: `string` ; `twitterId`: `string`  }\> |
| `userData(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `string`] & { `tweetId`: `string` ; `twitterId`: `string`  }\> |
| `verification` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `verification()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:348](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L348)

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
| `initialize` | (`_admin`: `string`, `_verification`: `string`, `_signerAddress`: `string`, `_name`: `string`, `_version`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initialize(address,address,address,string,string)` | (`_admin`: `string`, `_verification`: `string`, `_signerAddress`: `string`, `_name`: `string`, `_version`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `registerSelf` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_twitterId`: `string`, `_tweetId`: `string`, `_timestamp`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `registerSelf(bool,uint8,bytes32,bytes32,string,string,uint256)` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_twitterId`: `string`, `_tweetId`: `string`, `_timestamp`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `registerUserViaOwner` | (`_isMasterLinked`: `boolean`, `_user`: `string`, `_twitterId`: `string`, `_tweetId`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `registerUserViaOwner(bool,address,string,string)` | (`_isMasterLinked`: `boolean`, `_user`: `string`, `_twitterId`: `string`, `_tweetId`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `signerAddress` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `signerAddress()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `twitterIdMap` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `twitterIdMap(string)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `unregisterSelf` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unregisterSelf()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unregisterUser` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unregisterUser(address)` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateSignerAddress` | (`_signerAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateSignerAddress(address)` | (`_signerAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateVerification` | (`_verification`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateVerification(address)` | (`_verification`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `userData` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `userData(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `verification` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `verification()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:469](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L469)

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

[src/wrappers/MockTwitterVerifier.d.ts:450](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L450)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `initialize` | (`_admin`: `string`, `_verification`: `string`, `_signerAddress`: `string`, `_name`: `string`, `_version`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialize(address,address,address,string,string)` | (`_admin`: `string`, `_verification`: `string`, `_signerAddress`: `string`, `_name`: `string`, `_version`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `registerSelf` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_twitterId`: `string`, `_tweetId`: `string`, `_timestamp`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registerSelf(bool,uint8,bytes32,bytes32,string,string,uint256)` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_twitterId`: `string`, `_tweetId`: `string`, `_timestamp`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registerUserViaOwner` | (`_isMasterLinked`: `boolean`, `_user`: `string`, `_twitterId`: `string`, `_tweetId`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registerUserViaOwner(bool,address,string,string)` | (`_isMasterLinked`: `boolean`, `_user`: `string`, `_twitterId`: `string`, `_tweetId`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `signerAddress` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `signerAddress()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `twitterIdMap` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `twitterIdMap(string)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `unregisterSelf` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unregisterSelf()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unregisterUser` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unregisterUser(address)` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateSignerAddress` | (`_signerAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateSignerAddress(address)` | (`_signerAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateVerification` | (`_verification`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateVerification(address)` | (`_verification`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `userData` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `string`] & { `tweetId`: `string` ; `twitterId`: `string`  }\> |
| `userData(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `string`] & { `tweetId`: `string` ; `twitterId`: `string`  }\> |
| `verification` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `verification()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:131](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L131)

___

### interface

• **interface**: [`MockTwitterVerifierInterface`](../interfaces/wrappers_MockTwitterVerifier.MockTwitterVerifierInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:129](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L129)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `initialize` | (`_admin`: `string`, `_verification`: `string`, `_signerAddress`: `string`, `_name`: `string`, `_version`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialize(address,address,address,string,string)` | (`_admin`: `string`, `_verification`: `string`, `_signerAddress`: `string`, `_name`: `string`, `_version`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `registerSelf` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_twitterId`: `string`, `_tweetId`: `string`, `_timestamp`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registerSelf(bool,uint8,bytes32,bytes32,string,string,uint256)` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_twitterId`: `string`, `_tweetId`: `string`, `_timestamp`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registerUserViaOwner` | (`_isMasterLinked`: `boolean`, `_user`: `string`, `_twitterId`: `string`, `_tweetId`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registerUserViaOwner(bool,address,string,string)` | (`_isMasterLinked`: `boolean`, `_user`: `string`, `_twitterId`: `string`, `_tweetId`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `signerAddress` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `signerAddress()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `twitterIdMap` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `twitterIdMap(string)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `unregisterSelf` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unregisterSelf()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unregisterUser` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unregisterUser(address)` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateSignerAddress` | (`_signerAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateSignerAddress(address)` | (`_signerAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateVerification` | (`_verification`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateVerification(address)` | (`_verification`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `userData` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `userData(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `verification` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `verification()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:571](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L571)

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

▸ **attach**(`addressOrName`): [`MockTwitterVerifier`](wrappers_MockTwitterVerifier.MockTwitterVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`MockTwitterVerifier`](wrappers_MockTwitterVerifier.MockTwitterVerifier.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:90](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L90)

___

### connect

▸ **connect**(`signerOrProvider`): [`MockTwitterVerifier`](wrappers_MockTwitterVerifier.MockTwitterVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`MockTwitterVerifier`](wrappers_MockTwitterVerifier.MockTwitterVerifier.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:89](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L89)

___

### deployed

▸ **deployed**(): `Promise`<[`MockTwitterVerifier`](wrappers_MockTwitterVerifier.MockTwitterVerifier.md)\>

#### Returns

`Promise`<[`MockTwitterVerifier`](wrappers_MockTwitterVerifier.MockTwitterVerifier.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:91](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L91)

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

▸ **initialize**(`_admin`, `_verification`, `_signerAddress`, `_name`, `_version`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_admin` | `string` |
| `_verification` | `string` |
| `_signerAddress` | `string` |
| `_name` | `string` |
| `_version` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:242](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L242)

___

### initialize(address,address,address,string,string)

▸ **initialize(address,address,address,string,string)**(`_admin`, `_verification`, `_signerAddress`, `_name`, `_version`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_admin` | `string` |
| `_verification` | `string` |
| `_signerAddress` | `string` |
| `_name` | `string` |
| `_version` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:251](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L251)

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

[src/wrappers/MockTwitterVerifier.d.ts:93](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L93)

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

[src/wrappers/MockTwitterVerifier.d.ts:116](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L116)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockTwitterVerifier`](wrappers_MockTwitterVerifier.MockTwitterVerifier.md)

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

[`MockTwitterVerifier`](wrappers_MockTwitterVerifier.MockTwitterVerifier.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:96](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L96)

▸ **off**(`eventName`, `listener`): [`MockTwitterVerifier`](wrappers_MockTwitterVerifier.MockTwitterVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockTwitterVerifier`](wrappers_MockTwitterVerifier.MockTwitterVerifier.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:117](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L117)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockTwitterVerifier`](wrappers_MockTwitterVerifier.MockTwitterVerifier.md)

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

[`MockTwitterVerifier`](wrappers_MockTwitterVerifier.MockTwitterVerifier.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:100](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L100)

▸ **on**(`eventName`, `listener`): [`MockTwitterVerifier`](wrappers_MockTwitterVerifier.MockTwitterVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockTwitterVerifier`](wrappers_MockTwitterVerifier.MockTwitterVerifier.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:118](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L118)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockTwitterVerifier`](wrappers_MockTwitterVerifier.MockTwitterVerifier.md)

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

[`MockTwitterVerifier`](wrappers_MockTwitterVerifier.MockTwitterVerifier.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:104](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L104)

▸ **once**(`eventName`, `listener`): [`MockTwitterVerifier`](wrappers_MockTwitterVerifier.MockTwitterVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockTwitterVerifier`](wrappers_MockTwitterVerifier.MockTwitterVerifier.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:119](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L119)

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

[src/wrappers/MockTwitterVerifier.d.ts:260](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L260)

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

[src/wrappers/MockTwitterVerifier.d.ts:262](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L262)

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

[src/wrappers/MockTwitterVerifier.d.ts:123](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L123)

___

### registerSelf

▸ **registerSelf**(`_isMasterLinked`, `_v`, `_r`, `_s`, `_twitterId`, `_tweetId`, `_timestamp`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_isMasterLinked` | `boolean` |
| `_v` | `BigNumberish` |
| `_r` | `BytesLike` |
| `_s` | `BytesLike` |
| `_twitterId` | `string` |
| `_tweetId` | `string` |
| `_timestamp` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:264](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L264)

___

### registerSelf(bool,uint8,bytes32,bytes32,string,string,uint256)

▸ **registerSelf(bool,uint8,bytes32,bytes32,string,string,uint256)**(`_isMasterLinked`, `_v`, `_r`, `_s`, `_twitterId`, `_tweetId`, `_timestamp`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_isMasterLinked` | `boolean` |
| `_v` | `BigNumberish` |
| `_r` | `BytesLike` |
| `_s` | `BytesLike` |
| `_twitterId` | `string` |
| `_tweetId` | `string` |
| `_timestamp` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:275](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L275)

___

### registerUserViaOwner

▸ **registerUserViaOwner**(`_isMasterLinked`, `_user`, `_twitterId`, `_tweetId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_isMasterLinked` | `boolean` |
| `_user` | `string` |
| `_twitterId` | `string` |
| `_tweetId` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:286](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L286)

___

### registerUserViaOwner(bool,address,string,string)

▸ **registerUserViaOwner(bool,address,string,string)**(`_isMasterLinked`, `_user`, `_twitterId`, `_tweetId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_isMasterLinked` | `boolean` |
| `_user` | `string` |
| `_twitterId` | `string` |
| `_tweetId` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:294](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L294)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`MockTwitterVerifier`](wrappers_MockTwitterVerifier.MockTwitterVerifier.md)

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

[`MockTwitterVerifier`](wrappers_MockTwitterVerifier.MockTwitterVerifier.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:112](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L112)

▸ **removeAllListeners**(`eventName?`): [`MockTwitterVerifier`](wrappers_MockTwitterVerifier.MockTwitterVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`MockTwitterVerifier`](wrappers_MockTwitterVerifier.MockTwitterVerifier.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:121](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L121)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockTwitterVerifier`](wrappers_MockTwitterVerifier.MockTwitterVerifier.md)

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

[`MockTwitterVerifier`](wrappers_MockTwitterVerifier.MockTwitterVerifier.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:108](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L108)

▸ **removeListener**(`eventName`, `listener`): [`MockTwitterVerifier`](wrappers_MockTwitterVerifier.MockTwitterVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockTwitterVerifier`](wrappers_MockTwitterVerifier.MockTwitterVerifier.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:120](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L120)

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

[src/wrappers/MockTwitterVerifier.d.ts:302](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L302)

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

[src/wrappers/MockTwitterVerifier.d.ts:304](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L304)

___

### signerAddress

▸ **signerAddress**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:306](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L306)

___

### signerAddress()

▸ **signerAddress()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:308](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L308)

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

[src/wrappers/MockTwitterVerifier.d.ts:310](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L310)

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

[src/wrappers/MockTwitterVerifier.d.ts:312](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L312)

___

### twitterIdMap

▸ **twitterIdMap**(`arg0`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:314](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L314)

___

### twitterIdMap(string)

▸ **twitterIdMap(string)**(`arg0`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:316](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L316)

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

[src/wrappers/MockTwitterVerifier.d.ts:318](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L318)

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

[src/wrappers/MockTwitterVerifier.d.ts:320](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L320)

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

[src/wrappers/MockTwitterVerifier.d.ts:322](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L322)

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

[src/wrappers/MockTwitterVerifier.d.ts:324](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L324)

___

### updateSignerAddress

▸ **updateSignerAddress**(`_signerAddress`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_signerAddress` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:326](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L326)

___

### updateSignerAddress(address)

▸ **updateSignerAddress(address)**(`_signerAddress`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_signerAddress` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:328](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L328)

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

[src/wrappers/MockTwitterVerifier.d.ts:333](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L333)

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

[src/wrappers/MockTwitterVerifier.d.ts:335](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L335)

___

### userData

▸ **userData**(`arg0`, `overrides?`): `Promise`<[`string`, `string`] & { `tweetId`: `string` ; `twitterId`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`string`, `string`] & { `tweetId`: `string` ; `twitterId`: `string`  }\>

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:340](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L340)

___

### userData(address)

▸ **userData(address)**(`arg0`, `overrides?`): `Promise`<[`string`, `string`] & { `tweetId`: `string` ; `twitterId`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`string`, `string`] & { `tweetId`: `string` ; `twitterId`: `string`  }\>

#### Defined in

[src/wrappers/MockTwitterVerifier.d.ts:342](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L342)

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

[src/wrappers/MockTwitterVerifier.d.ts:344](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L344)

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

[src/wrappers/MockTwitterVerifier.d.ts:346](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/MockTwitterVerifier.d.ts#L346)

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
