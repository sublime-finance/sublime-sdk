[sublime-sdk](../README.md) / [Modules](../modules.md) / [api/verification](../modules/api_verification.md) / VerificationAPI

# Class: VerificationAPI

[api/verification](../modules/api_verification.md).VerificationAPI

## Table of contents

### Constructors

- [constructor](api_verification.VerificationAPI.md#constructor)

### Properties

- [adminVerifier](api_verification.VerificationAPI.md#adminverifier)
- [config](api_verification.VerificationAPI.md#config)
- [signer](api_verification.VerificationAPI.md#signer)
- [twitterVerifier](api_verification.VerificationAPI.md#twitterverifier)
- [verification](api_verification.VerificationAPI.md#verification)

### Methods

- [addVerifier](api_verification.VerificationAPI.md#addverifier)
- [blacklistDigest](api_verification.VerificationAPI.md#blacklistdigest)
- [getVerifierAddress](api_verification.VerificationAPI.md#getverifieraddress)
- [getVerifierType](api_verification.VerificationAPI.md#getverifiertype)
- [isUser](api_verification.VerificationAPI.md#isuser)
- [isVerifier](api_verification.VerificationAPI.md#isverifier)
- [registerMasterAddress](api_verification.VerificationAPI.md#registermasteraddress)
- [registerSelfUsingTwitterVerifier](api_verification.VerificationAPI.md#registerselfusingtwitterverifier)
- [registerUsingAdminVerifier](api_verification.VerificationAPI.md#registerusingadminverifier)
- [unregisterSelfUsingAdminVerifier](api_verification.VerificationAPI.md#unregisterselfusingadminverifier)
- [unregisterSelfUsingTwitterVerifier](api_verification.VerificationAPI.md#unregisterselfusingtwitterverifier)
- [updateSignerAddress](api_verification.VerificationAPI.md#updatesigneraddress)

## Constructors

### constructor

• **new VerificationAPI**(`signer`, `config`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signer` | `Signer` | Signer |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) | SublimeConfig |

#### Defined in

[src/api/verification.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/1cc42d8/src/api/verification.ts#L49)

## Properties

### adminVerifier

• `Private` **adminVerifier**: `AdminVerifier`

**`description`** Admin Verifier contract instance

#### Defined in

[src/api/verification.ts:38](https://github.com/sublime-finance/sublime-sdk/blob/1cc42d8/src/api/verification.ts#L38)

___

### config

• `Private` **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

**`description`** Internal store for all sublime contracts addresses

#### Defined in

[src/api/verification.ts:43](https://github.com/sublime-finance/sublime-sdk/blob/1cc42d8/src/api/verification.ts#L43)

___

### signer

• `Private` **signer**: `Signer`

**`description`** Signer Object

#### Defined in

[src/api/verification.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/1cc42d8/src/api/verification.ts#L23)

___

### twitterVerifier

• `Private` **twitterVerifier**: `TwitterVerifier`

**`description`** Twitter Verifier contract instance

#### Defined in

[src/api/verification.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/1cc42d8/src/api/verification.ts#L33)

___

### verification

• `Private` **verification**: `Verification`

**`description`** verification contract instance

#### Defined in

[src/api/verification.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/1cc42d8/src/api/verification.ts#L28)

## Methods

### addVerifier

▸ **addVerifier**(`verifier`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Only Verification Admin can call this function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `verifier` | `string` | address of the new verifier contract |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/verification.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/1cc42d8/src/api/verification.ts#L81)

___

### blacklistDigest

▸ **blacklistDigest**(`hash`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hash` | `BytesLike` | Hash to blacklist |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |  |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/verification.ts:171](https://github.com/sublime-finance/sublime-sdk/blob/1cc42d8/src/api/verification.ts#L171)

___

### getVerifierAddress

▸ **getVerifierAddress**(`type`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`VerifierType`](../enums/types_Types.VerifierType.md) | Type of verifier |

#### Returns

`string`

Contract address of the given verifier

#### Defined in

[src/api/verification.ts:179](https://github.com/sublime-finance/sublime-sdk/blob/1cc42d8/src/api/verification.ts#L179)

___

### getVerifierType

▸ **getVerifierType**(`address`): [`VerifierType`](../enums/types_Types.VerifierType.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | Contract address of the verifier |

#### Returns

[`VerifierType`](../enums/types_Types.VerifierType.md)

Type of verifier

#### Defined in

[src/api/verification.ts:194](https://github.com/sublime-finance/sublime-sdk/blob/1cc42d8/src/api/verification.ts#L194)

___

### isUser

▸ **isUser**(`user`, `verifierType`): `Promise`<`boolean`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user` | `string` | Address of the user to be verifier |
| `verifierType` | [`VerifierType`](../enums/types_Types.VerifierType.md) | Type of Verifier |

#### Returns

`Promise`<`boolean`\>

true if the address is verified by a given verifier

#### Defined in

[src/api/verification.ts:62](https://github.com/sublime-finance/sublime-sdk/blob/1cc42d8/src/api/verification.ts#L62)

___

### isVerifier

▸ **isVerifier**(`verifier`): `Promise`<`boolean`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `verifier` | `string` | Address of the verifier contract |

#### Returns

`Promise`<`boolean`\>

true if the given address is a verifier

#### Defined in

[src/api/verification.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/1cc42d8/src/api/verification.ts#L72)

___

### registerMasterAddress

▸ **registerMasterAddress**(`_masterAddress`, `_isMasterLinked`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_masterAddress` | `string` | Master Address |
| `_isMasterLinked` | `boolean` | True if the master address is linked |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/verification.ts:90](https://github.com/sublime-finance/sublime-sdk/blob/1cc42d8/src/api/verification.ts#L90)

___

### registerSelfUsingTwitterVerifier

▸ **registerSelfUsingTwitterVerifier**(`_isMasterLinked`, `_v`, `_r`, `_s`, `_twitterId`, `_tweetId`, `_deadline`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_isMasterLinked` | `boolean` | True if the master address is linked |
| `_v` | `BigNumberish` | V component of the signature |
| `_r` | `BytesLike` | R component of the signature |
| `_s` | `BytesLike` | S component of the signature |
| `_twitterId` | `string` | Twitter ID of the user |
| `_tweetId` | `string` | - |
| `_deadline` | `BigNumberish` | Deadline for the registration |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/verification.ts:103](https://github.com/sublime-finance/sublime-sdk/blob/1cc42d8/src/api/verification.ts#L103)

___

### registerUsingAdminVerifier

▸ **registerUsingAdminVerifier**(`_isMasterLinked`, `_v`, `_r`, `_s`, `_userData`, `_deadline`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_isMasterLinked` | `boolean` | True if master address is linked |
| `_v` | `BigNumberish` | V component of the signature |
| `_r` | `BytesLike` | R component of the signature |
| `_s` | `BytesLike` | S component of the signature |
| `_userData` | `string` | Any use metadata that is associated with the address |
| `_deadline` | `BigNumberish` | deadline for the transaction to be mined |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |  |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/verification.ts:136](https://github.com/sublime-finance/sublime-sdk/blob/1cc42d8/src/api/verification.ts#L136)

___

### unregisterSelfUsingAdminVerifier

▸ **unregisterSelfUsingAdminVerifier**(`options?`): `Promise`<`ContractTransaction`\>

**`description`** user should call this function from his wallet if he wants to unregister from admin verifier

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/verification.ts:153](https://github.com/sublime-finance/sublime-sdk/blob/1cc42d8/src/api/verification.ts#L153)

___

### unregisterSelfUsingTwitterVerifier

▸ **unregisterSelfUsingTwitterVerifier**(`options?`): `Promise`<`ContractTransaction`\>

**`description`** user should call this function from his wallet if he wants to unregister from twitter verifier

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/verification.ts:121](https://github.com/sublime-finance/sublime-sdk/blob/1cc42d8/src/api/verification.ts#L121)

___

### updateSignerAddress

▸ **updateSignerAddress**(`_signerAddress`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_signerAddress` | `string` | Address of the signer |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/verification.ts:162](https://github.com/sublime-finance/sublime-sdk/blob/1cc42d8/src/api/verification.ts#L162)
