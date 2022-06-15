[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/Verification](../modules/wrappers_Verification.md) / Verification

# Class: Verification

[wrappers/Verification](../modules/wrappers_Verification.md).Verification

## Hierarchy

- `Contract`

  ↳ **`Verification`**

## Table of contents

### Constructors

- [constructor](wrappers_Verification.Verification.md#constructor)

### Properties

- [\_deployedPromise](wrappers_Verification.Verification.md#_deployedpromise)
- [\_runningEvents](wrappers_Verification.Verification.md#_runningevents)
- [\_wrappedEmits](wrappers_Verification.Verification.md#_wrappedemits)
- [address](wrappers_Verification.Verification.md#address)
- [callStatic](wrappers_Verification.Verification.md#callstatic)
- [deployTransaction](wrappers_Verification.Verification.md#deploytransaction)
- [estimateGas](wrappers_Verification.Verification.md#estimategas)
- [filters](wrappers_Verification.Verification.md#filters)
- [functions](wrappers_Verification.Verification.md#functions)
- [interface](wrappers_Verification.Verification.md#interface)
- [populateTransaction](wrappers_Verification.Verification.md#populatetransaction)
- [provider](wrappers_Verification.Verification.md#provider)
- [resolvedAddress](wrappers_Verification.Verification.md#resolvedaddress)
- [signer](wrappers_Verification.Verification.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_Verification.Verification.md#_checkrunningevents)
- [\_deployed](wrappers_Verification.Verification.md#_deployed)
- [\_wrapEvent](wrappers_Verification.Verification.md#_wrapevent)
- [activationDelay](wrappers_Verification.Verification.md#activationdelay)
- [activationDelay()](wrappers_Verification.Verification.md#activationdelay())
- [addVerifier](wrappers_Verification.Verification.md#addverifier)
- [addVerifier(address)](wrappers_Verification.Verification.md#addverifier(address))
- [attach](wrappers_Verification.Verification.md#attach)
- [cancelAddressLinkingRequest](wrappers_Verification.Verification.md#canceladdresslinkingrequest)
- [cancelAddressLinkingRequest(address)](wrappers_Verification.Verification.md#canceladdresslinkingrequest(address))
- [connect](wrappers_Verification.Verification.md#connect)
- [deployed](wrappers_Verification.Verification.md#deployed)
- [emit](wrappers_Verification.Verification.md#emit)
- [fallback](wrappers_Verification.Verification.md#fallback)
- [initialize](wrappers_Verification.Verification.md#initialize)
- [initialize(address,uint256)](wrappers_Verification.Verification.md#initialize(address,uint256))
- [isUser](wrappers_Verification.Verification.md#isuser)
- [isUser(address,address)](wrappers_Verification.Verification.md#isuser(address,address))
- [linkAddress](wrappers_Verification.Verification.md#linkaddress)
- [linkAddress(address)](wrappers_Verification.Verification.md#linkaddress(address))
- [linkedAddresses](wrappers_Verification.Verification.md#linkedaddresses)
- [linkedAddresses(address)](wrappers_Verification.Verification.md#linkedaddresses(address))
- [listenerCount](wrappers_Verification.Verification.md#listenercount)
- [listeners](wrappers_Verification.Verification.md#listeners)
- [masterAddresses](wrappers_Verification.Verification.md#masteraddresses)
- [masterAddresses(address,address)](wrappers_Verification.Verification.md#masteraddresses(address,address))
- [off](wrappers_Verification.Verification.md#off)
- [on](wrappers_Verification.Verification.md#on)
- [once](wrappers_Verification.Verification.md#once)
- [owner](wrappers_Verification.Verification.md#owner)
- [owner()](wrappers_Verification.Verification.md#owner())
- [pendingLinkAddresses](wrappers_Verification.Verification.md#pendinglinkaddresses)
- [pendingLinkAddresses(address,address)](wrappers_Verification.Verification.md#pendinglinkaddresses(address,address))
- [queryFilter](wrappers_Verification.Verification.md#queryfilter)
- [registerMasterAddress](wrappers_Verification.Verification.md#registermasteraddress)
- [registerMasterAddress(address,bool)](wrappers_Verification.Verification.md#registermasteraddress(address,bool))
- [removeAllListeners](wrappers_Verification.Verification.md#removealllisteners)
- [removeListener](wrappers_Verification.Verification.md#removelistener)
- [removeVerifier](wrappers_Verification.Verification.md#removeverifier)
- [removeVerifier(address)](wrappers_Verification.Verification.md#removeverifier(address))
- [renounceOwnership](wrappers_Verification.Verification.md#renounceownership)
- [renounceOwnership()](wrappers_Verification.Verification.md#renounceownership())
- [requestAddressLinking](wrappers_Verification.Verification.md#requestaddresslinking)
- [requestAddressLinking(address)](wrappers_Verification.Verification.md#requestaddresslinking(address))
- [transferOwnership](wrappers_Verification.Verification.md#transferownership)
- [transferOwnership(address)](wrappers_Verification.Verification.md#transferownership(address))
- [unlinkAddress](wrappers_Verification.Verification.md#unlinkaddress)
- [unlinkAddress(address)](wrappers_Verification.Verification.md#unlinkaddress(address))
- [unregisterMasterAddress](wrappers_Verification.Verification.md#unregistermasteraddress)
- [unregisterMasterAddress(address,address)](wrappers_Verification.Verification.md#unregistermasteraddress(address,address))
- [updateActivationDelay](wrappers_Verification.Verification.md#updateactivationdelay)
- [updateActivationDelay(uint256)](wrappers_Verification.Verification.md#updateactivationdelay(uint256))
- [verifiers](wrappers_Verification.Verification.md#verifiers)
- [verifiers(address)](wrappers_Verification.Verification.md#verifiers(address))
- [getContractAddress](wrappers_Verification.Verification.md#getcontractaddress)
- [getInterface](wrappers_Verification.Verification.md#getinterface)
- [isIndexed](wrappers_Verification.Verification.md#isindexed)

## Constructors

### constructor

• **new Verification**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `activationDelay` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `activationDelay()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `addVerifier` | (`_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `addVerifier(address)` | (`_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `cancelAddressLinkingRequest` | (`_linkedAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `cancelAddressLinkingRequest(address)` | (`_linkedAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialize` | (`_admin`: `string`, `_activationDelay`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialize(address,uint256)` | (`_admin`: `string`, `_activationDelay`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `isUser` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `isUser(address,address)` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `linkAddress` | (`_masterAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `linkAddress(address)` | (`_masterAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `linkedAddresses` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `string`] & { `activatesAt`: `BigNumber` ; `masterAddress`: `string`  }\> |
| `linkedAddresses(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `string`] & { `activatesAt`: `BigNumber` ; `masterAddress`: `string`  }\> |
| `masterAddresses` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `masterAddresses(address,address)` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `pendingLinkAddresses` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `pendingLinkAddresses(address,address)` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `registerMasterAddress` | (`_masterAddress`: `string`, `_isMasterLinked`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerMasterAddress(address,bool)` | (`_masterAddress`: `string`, `_isMasterLinked`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `removeVerifier` | (`_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `removeVerifier(address)` | (`_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `renounceOwnership` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `renounceOwnership()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `requestAddressLinking` | (`_linkedAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `requestAddressLinking(address)` | (`_linkedAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unlinkAddress` | (`_linkedAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unlinkAddress(address)` | (`_linkedAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unregisterMasterAddress` | (`_masterAddress`: `string`, `_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unregisterMasterAddress(address,address)` | (`_masterAddress`: `string`, `_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateActivationDelay` | (`_activationDelay`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateActivationDelay(uint256)` | (`_activationDelay`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `verifiers` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `verifiers(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/Verification.d.ts:412](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L412)

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
| `activationDelay` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `activationDelay()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `addVerifier` | (`_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `addVerifier(address)` | (`_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `cancelAddressLinkingRequest` | (`_linkedAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `cancelAddressLinkingRequest(address)` | (`_linkedAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initialize` | (`_admin`: `string`, `_activationDelay`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initialize(address,uint256)` | (`_admin`: `string`, `_activationDelay`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `isUser` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isUser(address,address)` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `linkAddress` | (`_masterAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `linkAddress(address)` | (`_masterAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `linkedAddresses` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `linkedAddresses(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `masterAddresses` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `masterAddresses(address,address)` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `pendingLinkAddresses` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `pendingLinkAddresses(address,address)` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `registerMasterAddress` | (`_masterAddress`: `string`, `_isMasterLinked`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `registerMasterAddress(address,bool)` | (`_masterAddress`: `string`, `_isMasterLinked`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `removeVerifier` | (`_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `removeVerifier(address)` | (`_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `requestAddressLinking` | (`_linkedAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `requestAddressLinking(address)` | (`_linkedAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unlinkAddress` | (`_linkedAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unlinkAddress(address)` | (`_linkedAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unregisterMasterAddress` | (`_masterAddress`: `string`, `_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unregisterMasterAddress(address,address)` | (`_masterAddress`: `string`, `_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateActivationDelay` | (`_activationDelay`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateActivationDelay(uint256)` | (`_activationDelay`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `verifiers` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `verifiers(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/Verification.d.ts:542](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L542)

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
| `OwnershipTransferred` | (`previousOwner`: `string`, `newOwner`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`], { `newOwner`: `string` ; `previousOwner`: `string`  }\> |
| `UserRegistered` | (`masterAddress`: `string`, `verifier`: `string`, `activatesAt`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `BigNumber`], { `activatesAt`: `BigNumber` ; `masterAddress`: `string` ; `verifier`: `string`  }\> |
| `UserUnregistered` | (`masterAddress`: `string`, `verifier`: `string`, `unregisteredBy`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `string`], { `masterAddress`: `string` ; `unregisteredBy`: `string` ; `verifier`: `string`  }\> |
| `VerifierAdded` | (`verifier`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `verifier`: `string`  }\> |
| `VerifierRemoved` | (`verifier`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `verifier`: `string`  }\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/Verification.d.ts:496](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L496)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `activationDelay` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `activationDelay()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `addVerifier` | (`_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `addVerifier(address)` | (`_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `cancelAddressLinkingRequest` | (`_linkedAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `cancelAddressLinkingRequest(address)` | (`_linkedAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialize` | (`_admin`: `string`, `_activationDelay`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialize(address,uint256)` | (`_admin`: `string`, `_activationDelay`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `isUser` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `isUser(address,address)` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `linkAddress` | (`_masterAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `linkAddress(address)` | (`_masterAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `linkedAddresses` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `string`] & { `activatesAt`: `BigNumber` ; `masterAddress`: `string`  }\> |
| `linkedAddresses(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `string`] & { `activatesAt`: `BigNumber` ; `masterAddress`: `string`  }\> |
| `masterAddresses` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `masterAddresses(address,address)` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `pendingLinkAddresses` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `pendingLinkAddresses(address,address)` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `registerMasterAddress` | (`_masterAddress`: `string`, `_isMasterLinked`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registerMasterAddress(address,bool)` | (`_masterAddress`: `string`, `_isMasterLinked`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `removeVerifier` | (`_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `removeVerifier(address)` | (`_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `requestAddressLinking` | (`_linkedAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `requestAddressLinking(address)` | (`_linkedAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unlinkAddress` | (`_linkedAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unlinkAddress(address)` | (`_linkedAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unregisterMasterAddress` | (`_masterAddress`: `string`, `_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unregisterMasterAddress(address,address)` | (`_masterAddress`: `string`, `_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateActivationDelay` | (`_activationDelay`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateActivationDelay(uint256)` | (`_activationDelay`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `verifiers` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `verifiers(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/Verification.d.ts:153](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L153)

___

### interface

• **interface**: [`VerificationInterface`](../interfaces/wrappers_Verification.VerificationInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/Verification.d.ts:151](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L151)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `activationDelay` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `activationDelay()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `addVerifier` | (`_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `addVerifier(address)` | (`_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `cancelAddressLinkingRequest` | (`_linkedAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `cancelAddressLinkingRequest(address)` | (`_linkedAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialize` | (`_admin`: `string`, `_activationDelay`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialize(address,uint256)` | (`_admin`: `string`, `_activationDelay`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `isUser` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isUser(address,address)` | (`_user`: `string`, `_verifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `linkAddress` | (`_masterAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `linkAddress(address)` | (`_masterAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `linkedAddresses` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `linkedAddresses(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `masterAddresses` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `masterAddresses(address,address)` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `pendingLinkAddresses` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `pendingLinkAddresses(address,address)` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `registerMasterAddress` | (`_masterAddress`: `string`, `_isMasterLinked`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registerMasterAddress(address,bool)` | (`_masterAddress`: `string`, `_isMasterLinked`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `removeVerifier` | (`_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `removeVerifier(address)` | (`_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `requestAddressLinking` | (`_linkedAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `requestAddressLinking(address)` | (`_linkedAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unlinkAddress` | (`_linkedAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unlinkAddress(address)` | (`_linkedAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unregisterMasterAddress` | (`_masterAddress`: `string`, `_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unregisterMasterAddress(address,address)` | (`_masterAddress`: `string`, `_verifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateActivationDelay` | (`_activationDelay`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateActivationDelay(uint256)` | (`_activationDelay`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `verifiers` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `verifiers(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/Verification.d.ts:653](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L653)

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

### activationDelay

▸ **activationDelay**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Verification.d.ts:288](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L288)

___

### activationDelay()

▸ **activationDelay()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Verification.d.ts:290](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L290)

___

### addVerifier

▸ **addVerifier**(`_verifier`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_verifier` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Verification.d.ts:292](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L292)

___

### addVerifier(address)

▸ **addVerifier(address)**(`_verifier`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_verifier` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Verification.d.ts:294](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L294)

___

### attach

▸ **attach**(`addressOrName`): [`Verification`](wrappers_Verification.Verification.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`Verification`](wrappers_Verification.Verification.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/Verification.d.ts:112](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L112)

___

### cancelAddressLinkingRequest

▸ **cancelAddressLinkingRequest**(`_linkedAddress`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_linkedAddress` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Verification.d.ts:296](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L296)

___

### cancelAddressLinkingRequest(address)

▸ **cancelAddressLinkingRequest(address)**(`_linkedAddress`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_linkedAddress` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Verification.d.ts:301](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L301)

___

### connect

▸ **connect**(`signerOrProvider`): [`Verification`](wrappers_Verification.Verification.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`Verification`](wrappers_Verification.Verification.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/Verification.d.ts:111](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L111)

___

### deployed

▸ **deployed**(): `Promise`<[`Verification`](wrappers_Verification.Verification.md)\>

#### Returns

`Promise`<[`Verification`](wrappers_Verification.Verification.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/Verification.d.ts:113](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L113)

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

▸ **initialize**(`_admin`, `_activationDelay`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_admin` | `string` |
| `_activationDelay` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Verification.d.ts:306](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L306)

___

### initialize(address,uint256)

▸ **initialize(address,uint256)**(`_admin`, `_activationDelay`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_admin` | `string` |
| `_activationDelay` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Verification.d.ts:312](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L312)

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

[src/wrappers/Verification.d.ts:318](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L318)

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

[src/wrappers/Verification.d.ts:320](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L320)

___

### linkAddress

▸ **linkAddress**(`_masterAddress`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_masterAddress` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Verification.d.ts:322](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L322)

___

### linkAddress(address)

▸ **linkAddress(address)**(`_masterAddress`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_masterAddress` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Verification.d.ts:324](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L324)

___

### linkedAddresses

▸ **linkedAddresses**(`arg0`, `overrides?`): `Promise`<[`BigNumber`, `string`] & { `activatesAt`: `BigNumber` ; `masterAddress`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `string`] & { `activatesAt`: `BigNumber` ; `masterAddress`: `string`  }\>

#### Defined in

[src/wrappers/Verification.d.ts:326](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L326)

___

### linkedAddresses(address)

▸ **linkedAddresses(address)**(`arg0`, `overrides?`): `Promise`<[`BigNumber`, `string`] & { `activatesAt`: `BigNumber` ; `masterAddress`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `string`] & { `activatesAt`: `BigNumber` ; `masterAddress`: `string`  }\>

#### Defined in

[src/wrappers/Verification.d.ts:331](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L331)

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

[src/wrappers/Verification.d.ts:115](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L115)

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

[src/wrappers/Verification.d.ts:138](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L138)

___

### masterAddresses

▸ **masterAddresses**(`arg0`, `arg1`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Verification.d.ts:336](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L336)

___

### masterAddresses(address,address)

▸ **masterAddresses(address,address)**(`arg0`, `arg1`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Verification.d.ts:338](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L338)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Verification`](wrappers_Verification.Verification.md)

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

[`Verification`](wrappers_Verification.Verification.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/Verification.d.ts:118](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L118)

▸ **off**(`eventName`, `listener`): [`Verification`](wrappers_Verification.Verification.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Verification`](wrappers_Verification.Verification.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/Verification.d.ts:139](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L139)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Verification`](wrappers_Verification.Verification.md)

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

[`Verification`](wrappers_Verification.Verification.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/Verification.d.ts:122](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L122)

▸ **on**(`eventName`, `listener`): [`Verification`](wrappers_Verification.Verification.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Verification`](wrappers_Verification.Verification.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/Verification.d.ts:140](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L140)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Verification`](wrappers_Verification.Verification.md)

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

[`Verification`](wrappers_Verification.Verification.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/Verification.d.ts:126](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L126)

▸ **once**(`eventName`, `listener`): [`Verification`](wrappers_Verification.Verification.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Verification`](wrappers_Verification.Verification.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/Verification.d.ts:141](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L141)

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

[src/wrappers/Verification.d.ts:340](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L340)

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

[src/wrappers/Verification.d.ts:342](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L342)

___

### pendingLinkAddresses

▸ **pendingLinkAddresses**(`arg0`, `arg1`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/Verification.d.ts:344](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L344)

___

### pendingLinkAddresses(address,address)

▸ **pendingLinkAddresses(address,address)**(`arg0`, `arg1`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/Verification.d.ts:346](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L346)

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

[src/wrappers/Verification.d.ts:145](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L145)

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

[src/wrappers/Verification.d.ts:348](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L348)

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

[src/wrappers/Verification.d.ts:354](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L354)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`Verification`](wrappers_Verification.Verification.md)

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

[`Verification`](wrappers_Verification.Verification.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/Verification.d.ts:134](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L134)

▸ **removeAllListeners**(`eventName?`): [`Verification`](wrappers_Verification.Verification.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`Verification`](wrappers_Verification.Verification.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/Verification.d.ts:143](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L143)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Verification`](wrappers_Verification.Verification.md)

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

[`Verification`](wrappers_Verification.Verification.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/Verification.d.ts:130](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L130)

▸ **removeListener**(`eventName`, `listener`): [`Verification`](wrappers_Verification.Verification.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Verification`](wrappers_Verification.Verification.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/Verification.d.ts:142](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L142)

___

### removeVerifier

▸ **removeVerifier**(`_verifier`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_verifier` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Verification.d.ts:360](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L360)

___

### removeVerifier(address)

▸ **removeVerifier(address)**(`_verifier`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_verifier` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Verification.d.ts:362](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L362)

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

[src/wrappers/Verification.d.ts:364](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L364)

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

[src/wrappers/Verification.d.ts:366](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L366)

___

### requestAddressLinking

▸ **requestAddressLinking**(`_linkedAddress`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_linkedAddress` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Verification.d.ts:368](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L368)

___

### requestAddressLinking(address)

▸ **requestAddressLinking(address)**(`_linkedAddress`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_linkedAddress` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Verification.d.ts:370](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L370)

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

[src/wrappers/Verification.d.ts:375](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L375)

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

[src/wrappers/Verification.d.ts:377](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L377)

___

### unlinkAddress

▸ **unlinkAddress**(`_linkedAddress`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_linkedAddress` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Verification.d.ts:379](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L379)

___

### unlinkAddress(address)

▸ **unlinkAddress(address)**(`_linkedAddress`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_linkedAddress` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Verification.d.ts:381](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L381)

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

[src/wrappers/Verification.d.ts:386](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L386)

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

[src/wrappers/Verification.d.ts:392](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L392)

___

### updateActivationDelay

▸ **updateActivationDelay**(`_activationDelay`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_activationDelay` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Verification.d.ts:398](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L398)

___

### updateActivationDelay(uint256)

▸ **updateActivationDelay(uint256)**(`_activationDelay`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_activationDelay` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Verification.d.ts:403](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L403)

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

[src/wrappers/Verification.d.ts:408](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L408)

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

[src/wrappers/Verification.d.ts:410](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/Verification.d.ts#L410)

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
