[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/TwitterVerifier](../modules/wrappers_TwitterVerifier.md) / TwitterVerifier

# Class: TwitterVerifier

[wrappers/TwitterVerifier](../modules/wrappers_TwitterVerifier.md).TwitterVerifier

## Hierarchy

- `Contract`

  ↳ **`TwitterVerifier`**

## Table of contents

### Constructors

- [constructor](wrappers_TwitterVerifier.TwitterVerifier.md#constructor)

### Properties

- [\_deployedPromise](wrappers_TwitterVerifier.TwitterVerifier.md#_deployedpromise)
- [\_runningEvents](wrappers_TwitterVerifier.TwitterVerifier.md#_runningevents)
- [\_wrappedEmits](wrappers_TwitterVerifier.TwitterVerifier.md#_wrappedemits)
- [address](wrappers_TwitterVerifier.TwitterVerifier.md#address)
- [callStatic](wrappers_TwitterVerifier.TwitterVerifier.md#callstatic)
- [deployTransaction](wrappers_TwitterVerifier.TwitterVerifier.md#deploytransaction)
- [estimateGas](wrappers_TwitterVerifier.TwitterVerifier.md#estimategas)
- [filters](wrappers_TwitterVerifier.TwitterVerifier.md#filters)
- [functions](wrappers_TwitterVerifier.TwitterVerifier.md#functions)
- [interface](wrappers_TwitterVerifier.TwitterVerifier.md#interface)
- [populateTransaction](wrappers_TwitterVerifier.TwitterVerifier.md#populatetransaction)
- [provider](wrappers_TwitterVerifier.TwitterVerifier.md#provider)
- [resolvedAddress](wrappers_TwitterVerifier.TwitterVerifier.md#resolvedaddress)
- [signer](wrappers_TwitterVerifier.TwitterVerifier.md#signer)

### Methods

- [VERIFICATION](wrappers_TwitterVerifier.TwitterVerifier.md#verification)
- [VERIFICATION()](wrappers_TwitterVerifier.TwitterVerifier.md#verification())
- [\_checkRunningEvents](wrappers_TwitterVerifier.TwitterVerifier.md#_checkrunningevents)
- [\_deployed](wrappers_TwitterVerifier.TwitterVerifier.md#_deployed)
- [\_wrapEvent](wrappers_TwitterVerifier.TwitterVerifier.md#_wrapevent)
- [attach](wrappers_TwitterVerifier.TwitterVerifier.md#attach)
- [blackListDigest](wrappers_TwitterVerifier.TwitterVerifier.md#blacklistdigest)
- [blackListDigest(bytes32)](wrappers_TwitterVerifier.TwitterVerifier.md#blacklistdigest(bytes32))
- [connect](wrappers_TwitterVerifier.TwitterVerifier.md#connect)
- [deployed](wrappers_TwitterVerifier.TwitterVerifier.md#deployed)
- [emit](wrappers_TwitterVerifier.TwitterVerifier.md#emit)
- [fallback](wrappers_TwitterVerifier.TwitterVerifier.md#fallback)
- [initialize](wrappers_TwitterVerifier.TwitterVerifier.md#initialize)
- [initialize(address,address,uint256,string,string)](wrappers_TwitterVerifier.TwitterVerifier.md#initialize(address,address,uint256,string,string))
- [listenerCount](wrappers_TwitterVerifier.TwitterVerifier.md#listenercount)
- [listeners](wrappers_TwitterVerifier.TwitterVerifier.md#listeners)
- [off](wrappers_TwitterVerifier.TwitterVerifier.md#off)
- [on](wrappers_TwitterVerifier.TwitterVerifier.md#on)
- [once](wrappers_TwitterVerifier.TwitterVerifier.md#once)
- [owner](wrappers_TwitterVerifier.TwitterVerifier.md#owner)
- [owner()](wrappers_TwitterVerifier.TwitterVerifier.md#owner())
- [queryFilter](wrappers_TwitterVerifier.TwitterVerifier.md#queryfilter)
- [registerSelf](wrappers_TwitterVerifier.TwitterVerifier.md#registerself)
- [registerSelf(bool,uint8,bytes32,bytes32,string,string,uint256)](wrappers_TwitterVerifier.TwitterVerifier.md#registerself(bool,uint8,bytes32,bytes32,string,string,uint256))
- [removeAllListeners](wrappers_TwitterVerifier.TwitterVerifier.md#removealllisteners)
- [removeListener](wrappers_TwitterVerifier.TwitterVerifier.md#removelistener)
- [renounceOwnership](wrappers_TwitterVerifier.TwitterVerifier.md#renounceownership)
- [renounceOwnership()](wrappers_TwitterVerifier.TwitterVerifier.md#renounceownership())
- [signValidity](wrappers_TwitterVerifier.TwitterVerifier.md#signvalidity)
- [signValidity()](wrappers_TwitterVerifier.TwitterVerifier.md#signvalidity())
- [signerAddress](wrappers_TwitterVerifier.TwitterVerifier.md#signeraddress)
- [signerAddress()](wrappers_TwitterVerifier.TwitterVerifier.md#signeraddress())
- [transferOwnership](wrappers_TwitterVerifier.TwitterVerifier.md#transferownership)
- [transferOwnership(address)](wrappers_TwitterVerifier.TwitterVerifier.md#transferownership(address))
- [twitterIdMap](wrappers_TwitterVerifier.TwitterVerifier.md#twitteridmap)
- [twitterIdMap(string)](wrappers_TwitterVerifier.TwitterVerifier.md#twitteridmap(string))
- [unregisterSelf](wrappers_TwitterVerifier.TwitterVerifier.md#unregisterself)
- [unregisterSelf()](wrappers_TwitterVerifier.TwitterVerifier.md#unregisterself())
- [unregisterUser](wrappers_TwitterVerifier.TwitterVerifier.md#unregisteruser)
- [unregisterUser(address)](wrappers_TwitterVerifier.TwitterVerifier.md#unregisteruser(address))
- [updateSignValidity](wrappers_TwitterVerifier.TwitterVerifier.md#updatesignvalidity)
- [updateSignValidity(uint256)](wrappers_TwitterVerifier.TwitterVerifier.md#updatesignvalidity(uint256))
- [updateSignerAddress](wrappers_TwitterVerifier.TwitterVerifier.md#updatesigneraddress)
- [updateSignerAddress(address)](wrappers_TwitterVerifier.TwitterVerifier.md#updatesigneraddress(address))
- [usedTweetIds](wrappers_TwitterVerifier.TwitterVerifier.md#usedtweetids)
- [usedTweetIds(string)](wrappers_TwitterVerifier.TwitterVerifier.md#usedtweetids(string))
- [userData](wrappers_TwitterVerifier.TwitterVerifier.md#userdata)
- [userData(address)](wrappers_TwitterVerifier.TwitterVerifier.md#userdata(address))
- [getContractAddress](wrappers_TwitterVerifier.TwitterVerifier.md#getcontractaddress)
- [getInterface](wrappers_TwitterVerifier.TwitterVerifier.md#getinterface)
- [isIndexed](wrappers_TwitterVerifier.TwitterVerifier.md#isindexed)

## Constructors

### constructor

• **new TwitterVerifier**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `VERIFICATION` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `VERIFICATION()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `blackListDigest` | (`_hash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `blackListDigest(bytes32)` | (`_hash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialize` | (`_admin`: `string`, `_signerAddress`: `string`, `_signValidity`: `BigNumberish`, `_name`: `string`, `_version`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialize(address,address,uint256,string,string)` | (`_admin`: `string`, `_signerAddress`: `string`, `_signValidity`: `BigNumberish`, `_name`: `string`, `_version`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `registerSelf` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_twitterId`: `string`, `_tweetId`: `string`, `_timestamp`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerSelf(bool,uint8,bytes32,bytes32,string,string,uint256)` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_twitterId`: `string`, `_tweetId`: `string`, `_timestamp`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `renounceOwnership` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `renounceOwnership()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `signValidity` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `signValidity()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
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
| `updateSignValidity` | (`_signValidity`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateSignValidity(uint256)` | (`_signValidity`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateSignerAddress` | (`_signerAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateSignerAddress(address)` | (`_signerAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `usedTweetIds` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `usedTweetIds(string)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `userData` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `string`] & { `tweetId`: `string` ; `twitterId`: `string`  }\> |
| `userData(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `string`] & { `tweetId`: `string` ; `twitterId`: `string`  }\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:352](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L352)

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
| `VERIFICATION` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `VERIFICATION()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `blackListDigest` | (`_hash`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `blackListDigest(bytes32)` | (`_hash`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initialize` | (`_admin`: `string`, `_signerAddress`: `string`, `_signValidity`: `BigNumberish`, `_name`: `string`, `_version`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initialize(address,address,uint256,string,string)` | (`_admin`: `string`, `_signerAddress`: `string`, `_signValidity`: `BigNumberish`, `_name`: `string`, `_version`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `registerSelf` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_twitterId`: `string`, `_tweetId`: `string`, `_timestamp`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `registerSelf(bool,uint8,bytes32,bytes32,string,string,uint256)` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_twitterId`: `string`, `_tweetId`: `string`, `_timestamp`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `signValidity` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `signValidity()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
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
| `updateSignValidity` | (`_signValidity`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateSignValidity(uint256)` | (`_signValidity`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateSignerAddress` | (`_signerAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateSignerAddress(address)` | (`_signerAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `usedTweetIds` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `usedTweetIds(string)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `userData` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `userData(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:469](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L469)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `OwnershipTransferred` | (`previousOwner`: `string`, `newOwner`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`], { `newOwner`: `string` ; `previousOwner`: `string`  }\> |
| `SignValidityUpdated` | (`signValidity`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`], { `signValidity`: `BigNumber`  }\> |
| `SignerUpdated` | (`signerAddress`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `signerAddress`: `string`  }\> |
| `UserRegistered` | (`user`: `string`, `isMasterLinked`: ``null``, `metadata`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `boolean`, `string`], { `isMasterLinked`: `boolean` ; `metadata`: `string` ; `user`: `string`  }\> |
| `UserUnregistered` | (`user`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `user`: `string`  }\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:450](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L450)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `VERIFICATION` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `VERIFICATION()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `blackListDigest` | (`_hash`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `blackListDigest(bytes32)` | (`_hash`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialize` | (`_admin`: `string`, `_signerAddress`: `string`, `_signValidity`: `BigNumberish`, `_name`: `string`, `_version`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialize(address,address,uint256,string,string)` | (`_admin`: `string`, `_signerAddress`: `string`, `_signValidity`: `BigNumberish`, `_name`: `string`, `_version`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `registerSelf` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_twitterId`: `string`, `_tweetId`: `string`, `_timestamp`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registerSelf(bool,uint8,bytes32,bytes32,string,string,uint256)` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_twitterId`: `string`, `_tweetId`: `string`, `_timestamp`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `signValidity` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `signValidity()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
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
| `updateSignValidity` | (`_signValidity`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateSignValidity(uint256)` | (`_signValidity`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateSignerAddress` | (`_signerAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateSignerAddress(address)` | (`_signerAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `usedTweetIds` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `usedTweetIds(string)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `userData` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `string`] & { `tweetId`: `string` ; `twitterId`: `string`  }\> |
| `userData(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `string`] & { `tweetId`: `string` ; `twitterId`: `string`  }\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:137](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L137)

___

### interface

• **interface**: [`TwitterVerifierInterface`](../interfaces/wrappers_TwitterVerifier.TwitterVerifierInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:135](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L135)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `VERIFICATION` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `VERIFICATION()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `blackListDigest` | (`_hash`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `blackListDigest(bytes32)` | (`_hash`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialize` | (`_admin`: `string`, `_signerAddress`: `string`, `_signValidity`: `BigNumberish`, `_name`: `string`, `_version`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialize(address,address,uint256,string,string)` | (`_admin`: `string`, `_signerAddress`: `string`, `_signValidity`: `BigNumberish`, `_name`: `string`, `_version`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `registerSelf` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_twitterId`: `string`, `_tweetId`: `string`, `_timestamp`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registerSelf(bool,uint8,bytes32,bytes32,string,string,uint256)` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_twitterId`: `string`, `_tweetId`: `string`, `_timestamp`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `signValidity` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `signValidity()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
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
| `updateSignValidity` | (`_signValidity`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateSignValidity(uint256)` | (`_signValidity`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateSignerAddress` | (`_signerAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateSignerAddress(address)` | (`_signerAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `usedTweetIds` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `usedTweetIds(string)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `userData` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `userData(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:570](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L570)

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

### VERIFICATION

▸ **VERIFICATION**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:247](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L247)

___

### VERIFICATION()

▸ **VERIFICATION()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:249](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L249)

___

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

▸ **attach**(`addressOrName`): [`TwitterVerifier`](wrappers_TwitterVerifier.TwitterVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`TwitterVerifier`](wrappers_TwitterVerifier.TwitterVerifier.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:96](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L96)

___

### blackListDigest

▸ **blackListDigest**(`_hash`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_hash` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:251](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L251)

___

### blackListDigest(bytes32)

▸ **blackListDigest(bytes32)**(`_hash`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_hash` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:253](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L253)

___

### connect

▸ **connect**(`signerOrProvider`): [`TwitterVerifier`](wrappers_TwitterVerifier.TwitterVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`TwitterVerifier`](wrappers_TwitterVerifier.TwitterVerifier.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:95](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L95)

___

### deployed

▸ **deployed**(): `Promise`<[`TwitterVerifier`](wrappers_TwitterVerifier.TwitterVerifier.md)\>

#### Returns

`Promise`<[`TwitterVerifier`](wrappers_TwitterVerifier.TwitterVerifier.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:97](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L97)

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

▸ **initialize**(`_admin`, `_signerAddress`, `_signValidity`, `_name`, `_version`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_admin` | `string` |
| `_signerAddress` | `string` |
| `_signValidity` | `BigNumberish` |
| `_name` | `string` |
| `_version` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:255](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L255)

___

### initialize(address,address,uint256,string,string)

▸ **initialize(address,address,uint256,string,string)**(`_admin`, `_signerAddress`, `_signValidity`, `_name`, `_version`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_admin` | `string` |
| `_signerAddress` | `string` |
| `_signValidity` | `BigNumberish` |
| `_name` | `string` |
| `_version` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:264](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L264)

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

[src/wrappers/TwitterVerifier.d.ts:99](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L99)

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

[src/wrappers/TwitterVerifier.d.ts:122](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L122)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`TwitterVerifier`](wrappers_TwitterVerifier.TwitterVerifier.md)

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

[`TwitterVerifier`](wrappers_TwitterVerifier.TwitterVerifier.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:102](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L102)

▸ **off**(`eventName`, `listener`): [`TwitterVerifier`](wrappers_TwitterVerifier.TwitterVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`TwitterVerifier`](wrappers_TwitterVerifier.TwitterVerifier.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:123](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L123)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`TwitterVerifier`](wrappers_TwitterVerifier.TwitterVerifier.md)

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

[`TwitterVerifier`](wrappers_TwitterVerifier.TwitterVerifier.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:106](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L106)

▸ **on**(`eventName`, `listener`): [`TwitterVerifier`](wrappers_TwitterVerifier.TwitterVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`TwitterVerifier`](wrappers_TwitterVerifier.TwitterVerifier.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:124](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L124)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`TwitterVerifier`](wrappers_TwitterVerifier.TwitterVerifier.md)

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

[`TwitterVerifier`](wrappers_TwitterVerifier.TwitterVerifier.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:110](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L110)

▸ **once**(`eventName`, `listener`): [`TwitterVerifier`](wrappers_TwitterVerifier.TwitterVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`TwitterVerifier`](wrappers_TwitterVerifier.TwitterVerifier.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:125](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L125)

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

[src/wrappers/TwitterVerifier.d.ts:273](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L273)

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

[src/wrappers/TwitterVerifier.d.ts:275](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L275)

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

[src/wrappers/TwitterVerifier.d.ts:129](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L129)

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

[src/wrappers/TwitterVerifier.d.ts:277](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L277)

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

[src/wrappers/TwitterVerifier.d.ts:288](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L288)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`TwitterVerifier`](wrappers_TwitterVerifier.TwitterVerifier.md)

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

[`TwitterVerifier`](wrappers_TwitterVerifier.TwitterVerifier.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:118](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L118)

▸ **removeAllListeners**(`eventName?`): [`TwitterVerifier`](wrappers_TwitterVerifier.TwitterVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`TwitterVerifier`](wrappers_TwitterVerifier.TwitterVerifier.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:127](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L127)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`TwitterVerifier`](wrappers_TwitterVerifier.TwitterVerifier.md)

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

[`TwitterVerifier`](wrappers_TwitterVerifier.TwitterVerifier.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:114](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L114)

▸ **removeListener**(`eventName`, `listener`): [`TwitterVerifier`](wrappers_TwitterVerifier.TwitterVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`TwitterVerifier`](wrappers_TwitterVerifier.TwitterVerifier.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:126](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L126)

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

[src/wrappers/TwitterVerifier.d.ts:299](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L299)

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

[src/wrappers/TwitterVerifier.d.ts:301](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L301)

___

### signValidity

▸ **signValidity**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:303](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L303)

___

### signValidity()

▸ **signValidity()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:305](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L305)

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

[src/wrappers/TwitterVerifier.d.ts:307](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L307)

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

[src/wrappers/TwitterVerifier.d.ts:309](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L309)

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

[src/wrappers/TwitterVerifier.d.ts:311](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L311)

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

[src/wrappers/TwitterVerifier.d.ts:313](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L313)

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

[src/wrappers/TwitterVerifier.d.ts:315](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L315)

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

[src/wrappers/TwitterVerifier.d.ts:317](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L317)

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

[src/wrappers/TwitterVerifier.d.ts:319](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L319)

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

[src/wrappers/TwitterVerifier.d.ts:321](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L321)

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

[src/wrappers/TwitterVerifier.d.ts:323](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L323)

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

[src/wrappers/TwitterVerifier.d.ts:325](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L325)

___

### updateSignValidity

▸ **updateSignValidity**(`_signValidity`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_signValidity` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:327](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L327)

___

### updateSignValidity(uint256)

▸ **updateSignValidity(uint256)**(`_signValidity`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_signValidity` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:332](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L332)

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

[src/wrappers/TwitterVerifier.d.ts:337](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L337)

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

[src/wrappers/TwitterVerifier.d.ts:339](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L339)

___

### usedTweetIds

▸ **usedTweetIds**(`arg0`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:344](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L344)

___

### usedTweetIds(string)

▸ **usedTweetIds(string)**(`arg0`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/TwitterVerifier.d.ts:346](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L346)

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

[src/wrappers/TwitterVerifier.d.ts:348](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L348)

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

[src/wrappers/TwitterVerifier.d.ts:350](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/TwitterVerifier.d.ts#L350)

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
