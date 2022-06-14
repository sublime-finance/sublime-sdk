[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/AdminVerifier](../modules/wrappers_AdminVerifier.md) / AdminVerifier

# Class: AdminVerifier

[wrappers/AdminVerifier](../modules/wrappers_AdminVerifier.md).AdminVerifier

## Hierarchy

- `Contract`

  ↳ **`AdminVerifier`**

## Table of contents

### Constructors

- [constructor](wrappers_AdminVerifier.AdminVerifier.md#constructor)

### Properties

- [\_deployedPromise](wrappers_AdminVerifier.AdminVerifier.md#_deployedpromise)
- [\_runningEvents](wrappers_AdminVerifier.AdminVerifier.md#_runningevents)
- [\_wrappedEmits](wrappers_AdminVerifier.AdminVerifier.md#_wrappedemits)
- [address](wrappers_AdminVerifier.AdminVerifier.md#address)
- [callStatic](wrappers_AdminVerifier.AdminVerifier.md#callstatic)
- [deployTransaction](wrappers_AdminVerifier.AdminVerifier.md#deploytransaction)
- [estimateGas](wrappers_AdminVerifier.AdminVerifier.md#estimategas)
- [filters](wrappers_AdminVerifier.AdminVerifier.md#filters)
- [functions](wrappers_AdminVerifier.AdminVerifier.md#functions)
- [interface](wrappers_AdminVerifier.AdminVerifier.md#interface)
- [populateTransaction](wrappers_AdminVerifier.AdminVerifier.md#populatetransaction)
- [provider](wrappers_AdminVerifier.AdminVerifier.md#provider)
- [resolvedAddress](wrappers_AdminVerifier.AdminVerifier.md#resolvedaddress)
- [signer](wrappers_AdminVerifier.AdminVerifier.md#signer)

### Methods

- [VERIFICATION](wrappers_AdminVerifier.AdminVerifier.md#verification)
- [VERIFICATION()](wrappers_AdminVerifier.AdminVerifier.md#verification())
- [\_checkRunningEvents](wrappers_AdminVerifier.AdminVerifier.md#_checkrunningevents)
- [\_deployed](wrappers_AdminVerifier.AdminVerifier.md#_deployed)
- [\_wrapEvent](wrappers_AdminVerifier.AdminVerifier.md#_wrapevent)
- [attach](wrappers_AdminVerifier.AdminVerifier.md#attach)
- [blackListDigest](wrappers_AdminVerifier.AdminVerifier.md#blacklistdigest)
- [blackListDigest(bytes32)](wrappers_AdminVerifier.AdminVerifier.md#blacklistdigest(bytes32))
- [connect](wrappers_AdminVerifier.AdminVerifier.md#connect)
- [deployed](wrappers_AdminVerifier.AdminVerifier.md#deployed)
- [emit](wrappers_AdminVerifier.AdminVerifier.md#emit)
- [fallback](wrappers_AdminVerifier.AdminVerifier.md#fallback)
- [initialize](wrappers_AdminVerifier.AdminVerifier.md#initialize)
- [initialize(address,address,uint256,string,string)](wrappers_AdminVerifier.AdminVerifier.md#initialize(address,address,uint256,string,string))
- [listenerCount](wrappers_AdminVerifier.AdminVerifier.md#listenercount)
- [listeners](wrappers_AdminVerifier.AdminVerifier.md#listeners)
- [off](wrappers_AdminVerifier.AdminVerifier.md#off)
- [on](wrappers_AdminVerifier.AdminVerifier.md#on)
- [once](wrappers_AdminVerifier.AdminVerifier.md#once)
- [owner](wrappers_AdminVerifier.AdminVerifier.md#owner)
- [owner()](wrappers_AdminVerifier.AdminVerifier.md#owner())
- [queryFilter](wrappers_AdminVerifier.AdminVerifier.md#queryfilter)
- [registerSelf](wrappers_AdminVerifier.AdminVerifier.md#registerself)
- [registerSelf(bool,uint8,bytes32,bytes32,string,uint256)](wrappers_AdminVerifier.AdminVerifier.md#registerself(bool,uint8,bytes32,bytes32,string,uint256))
- [removeAllListeners](wrappers_AdminVerifier.AdminVerifier.md#removealllisteners)
- [removeListener](wrappers_AdminVerifier.AdminVerifier.md#removelistener)
- [renounceOwnership](wrappers_AdminVerifier.AdminVerifier.md#renounceownership)
- [renounceOwnership()](wrappers_AdminVerifier.AdminVerifier.md#renounceownership())
- [signValidity](wrappers_AdminVerifier.AdminVerifier.md#signvalidity)
- [signValidity()](wrappers_AdminVerifier.AdminVerifier.md#signvalidity())
- [signerAddress](wrappers_AdminVerifier.AdminVerifier.md#signeraddress)
- [signerAddress()](wrappers_AdminVerifier.AdminVerifier.md#signeraddress())
- [transferOwnership](wrappers_AdminVerifier.AdminVerifier.md#transferownership)
- [transferOwnership(address)](wrappers_AdminVerifier.AdminVerifier.md#transferownership(address))
- [unregisterSelf](wrappers_AdminVerifier.AdminVerifier.md#unregisterself)
- [unregisterSelf()](wrappers_AdminVerifier.AdminVerifier.md#unregisterself())
- [unregisterUser](wrappers_AdminVerifier.AdminVerifier.md#unregisteruser)
- [unregisterUser(address)](wrappers_AdminVerifier.AdminVerifier.md#unregisteruser(address))
- [updateSignValidity](wrappers_AdminVerifier.AdminVerifier.md#updatesignvalidity)
- [updateSignValidity(uint256)](wrappers_AdminVerifier.AdminVerifier.md#updatesignvalidity(uint256))
- [updateSignerAddress](wrappers_AdminVerifier.AdminVerifier.md#updatesigneraddress)
- [updateSignerAddress(address)](wrappers_AdminVerifier.AdminVerifier.md#updatesigneraddress(address))
- [userData](wrappers_AdminVerifier.AdminVerifier.md#userdata)
- [userData(address)](wrappers_AdminVerifier.AdminVerifier.md#userdata(address))
- [getContractAddress](wrappers_AdminVerifier.AdminVerifier.md#getcontractaddress)
- [getInterface](wrappers_AdminVerifier.AdminVerifier.md#getinterface)
- [isIndexed](wrappers_AdminVerifier.AdminVerifier.md#isindexed)

## Constructors

### constructor

• **new AdminVerifier**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `registerSelf` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_userData`: `string`, `_timestamp`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerSelf(bool,uint8,bytes32,bytes32,string,uint256)` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_userData`: `string`, `_timestamp`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `renounceOwnership` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `renounceOwnership()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `signValidity` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `signValidity()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `signerAddress` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `signerAddress()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unregisterSelf` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unregisterSelf()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unregisterUser` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unregisterUser(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateSignValidity` | (`_signValidity`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateSignValidity(uint256)` | (`_signValidity`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateSignerAddress` | (`_signerAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateSignerAddress(address)` | (`_signerAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `userData` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `userData(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/AdminVerifier.d.ts:323](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L323)

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
| `registerSelf` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_userData`: `string`, `_timestamp`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `registerSelf(bool,uint8,bytes32,bytes32,string,uint256)` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_userData`: `string`, `_timestamp`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `signValidity` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `signValidity()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `signerAddress` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `signerAddress()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unregisterSelf` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unregisterSelf()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unregisterUser` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unregisterUser(address)` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateSignValidity` | (`_signValidity`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateSignValidity(uint256)` | (`_signValidity`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateSignerAddress` | (`_signerAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateSignerAddress(address)` | (`_signerAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `userData` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `userData(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/AdminVerifier.d.ts:430](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L430)

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

[src/wrappers/AdminVerifier.d.ts:411](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L411)

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
| `registerSelf` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_userData`: `string`, `_timestamp`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registerSelf(bool,uint8,bytes32,bytes32,string,uint256)` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_userData`: `string`, `_timestamp`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `signValidity` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `signValidity()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `signerAddress` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `signerAddress()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unregisterSelf` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unregisterSelf()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unregisterUser` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unregisterUser(address)` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateSignValidity` | (`_signValidity`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateSignValidity(uint256)` | (`_signValidity`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateSignerAddress` | (`_signerAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateSignerAddress(address)` | (`_signerAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `userData` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `userData(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/AdminVerifier.d.ts:128](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L128)

___

### interface

• **interface**: [`AdminVerifierInterface`](../interfaces/wrappers_AdminVerifier.AdminVerifierInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/AdminVerifier.d.ts:126](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L126)

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
| `registerSelf` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_userData`: `string`, `_timestamp`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registerSelf(bool,uint8,bytes32,bytes32,string,uint256)` | (`_isMasterLinked`: `boolean`, `_v`: `BigNumberish`, `_r`: `BytesLike`, `_s`: `BytesLike`, `_userData`: `string`, `_timestamp`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `signValidity` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `signValidity()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `signerAddress` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `signerAddress()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unregisterSelf` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unregisterSelf()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unregisterUser` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unregisterUser(address)` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateSignValidity` | (`_signValidity`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateSignValidity(uint256)` | (`_signValidity`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateSignerAddress` | (`_signerAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateSignerAddress(address)` | (`_signerAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `userData` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `userData(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/AdminVerifier.d.ts:521](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L521)

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

[src/wrappers/AdminVerifier.d.ts:228](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L228)

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

[src/wrappers/AdminVerifier.d.ts:230](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L230)

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

▸ **attach**(`addressOrName`): [`AdminVerifier`](wrappers_AdminVerifier.AdminVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`AdminVerifier`](wrappers_AdminVerifier.AdminVerifier.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/AdminVerifier.d.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L87)

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

[src/wrappers/AdminVerifier.d.ts:232](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L232)

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

[src/wrappers/AdminVerifier.d.ts:234](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L234)

___

### connect

▸ **connect**(`signerOrProvider`): [`AdminVerifier`](wrappers_AdminVerifier.AdminVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`AdminVerifier`](wrappers_AdminVerifier.AdminVerifier.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/AdminVerifier.d.ts:86](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L86)

___

### deployed

▸ **deployed**(): `Promise`<[`AdminVerifier`](wrappers_AdminVerifier.AdminVerifier.md)\>

#### Returns

`Promise`<[`AdminVerifier`](wrappers_AdminVerifier.AdminVerifier.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/AdminVerifier.d.ts:88](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L88)

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

[src/wrappers/AdminVerifier.d.ts:236](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L236)

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

[src/wrappers/AdminVerifier.d.ts:245](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L245)

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

[src/wrappers/AdminVerifier.d.ts:90](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L90)

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

[src/wrappers/AdminVerifier.d.ts:113](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L113)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`AdminVerifier`](wrappers_AdminVerifier.AdminVerifier.md)

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

[`AdminVerifier`](wrappers_AdminVerifier.AdminVerifier.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/AdminVerifier.d.ts:93](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L93)

▸ **off**(`eventName`, `listener`): [`AdminVerifier`](wrappers_AdminVerifier.AdminVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`AdminVerifier`](wrappers_AdminVerifier.AdminVerifier.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/AdminVerifier.d.ts:114](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L114)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`AdminVerifier`](wrappers_AdminVerifier.AdminVerifier.md)

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

[`AdminVerifier`](wrappers_AdminVerifier.AdminVerifier.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/AdminVerifier.d.ts:97](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L97)

▸ **on**(`eventName`, `listener`): [`AdminVerifier`](wrappers_AdminVerifier.AdminVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`AdminVerifier`](wrappers_AdminVerifier.AdminVerifier.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/AdminVerifier.d.ts:115](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L115)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`AdminVerifier`](wrappers_AdminVerifier.AdminVerifier.md)

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

[`AdminVerifier`](wrappers_AdminVerifier.AdminVerifier.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/AdminVerifier.d.ts:101](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L101)

▸ **once**(`eventName`, `listener`): [`AdminVerifier`](wrappers_AdminVerifier.AdminVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`AdminVerifier`](wrappers_AdminVerifier.AdminVerifier.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/AdminVerifier.d.ts:116](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L116)

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

[src/wrappers/AdminVerifier.d.ts:254](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L254)

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

[src/wrappers/AdminVerifier.d.ts:256](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L256)

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

[src/wrappers/AdminVerifier.d.ts:120](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L120)

___

### registerSelf

▸ **registerSelf**(`_isMasterLinked`, `_v`, `_r`, `_s`, `_userData`, `_timestamp`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_isMasterLinked` | `boolean` |
| `_v` | `BigNumberish` |
| `_r` | `BytesLike` |
| `_s` | `BytesLike` |
| `_userData` | `string` |
| `_timestamp` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/AdminVerifier.d.ts:258](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L258)

___

### registerSelf(bool,uint8,bytes32,bytes32,string,uint256)

▸ **registerSelf(bool,uint8,bytes32,bytes32,string,uint256)**(`_isMasterLinked`, `_v`, `_r`, `_s`, `_userData`, `_timestamp`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_isMasterLinked` | `boolean` |
| `_v` | `BigNumberish` |
| `_r` | `BytesLike` |
| `_s` | `BytesLike` |
| `_userData` | `string` |
| `_timestamp` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/AdminVerifier.d.ts:268](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L268)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`AdminVerifier`](wrappers_AdminVerifier.AdminVerifier.md)

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

[`AdminVerifier`](wrappers_AdminVerifier.AdminVerifier.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/AdminVerifier.d.ts:109](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L109)

▸ **removeAllListeners**(`eventName?`): [`AdminVerifier`](wrappers_AdminVerifier.AdminVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`AdminVerifier`](wrappers_AdminVerifier.AdminVerifier.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/AdminVerifier.d.ts:118](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L118)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`AdminVerifier`](wrappers_AdminVerifier.AdminVerifier.md)

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

[`AdminVerifier`](wrappers_AdminVerifier.AdminVerifier.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/AdminVerifier.d.ts:105](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L105)

▸ **removeListener**(`eventName`, `listener`): [`AdminVerifier`](wrappers_AdminVerifier.AdminVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`AdminVerifier`](wrappers_AdminVerifier.AdminVerifier.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/AdminVerifier.d.ts:117](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L117)

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

[src/wrappers/AdminVerifier.d.ts:278](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L278)

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

[src/wrappers/AdminVerifier.d.ts:280](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L280)

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

[src/wrappers/AdminVerifier.d.ts:282](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L282)

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

[src/wrappers/AdminVerifier.d.ts:284](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L284)

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

[src/wrappers/AdminVerifier.d.ts:286](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L286)

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

[src/wrappers/AdminVerifier.d.ts:288](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L288)

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

[src/wrappers/AdminVerifier.d.ts:290](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L290)

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

[src/wrappers/AdminVerifier.d.ts:292](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L292)

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

[src/wrappers/AdminVerifier.d.ts:294](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L294)

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

[src/wrappers/AdminVerifier.d.ts:296](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L296)

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

[src/wrappers/AdminVerifier.d.ts:298](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L298)

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

[src/wrappers/AdminVerifier.d.ts:300](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L300)

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

[src/wrappers/AdminVerifier.d.ts:302](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L302)

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

[src/wrappers/AdminVerifier.d.ts:307](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L307)

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

[src/wrappers/AdminVerifier.d.ts:312](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L312)

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

[src/wrappers/AdminVerifier.d.ts:314](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L314)

___

### userData

▸ **userData**(`arg0`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/AdminVerifier.d.ts:319](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L319)

___

### userData(address)

▸ **userData(address)**(`arg0`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/AdminVerifier.d.ts:321](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/AdminVerifier.d.ts#L321)

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
