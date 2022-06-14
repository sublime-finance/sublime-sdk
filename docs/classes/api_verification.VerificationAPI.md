[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [api/verification](../modules/api_verification.md) / VerificationAPI

# Class: VerificationAPI

[api/verification](../modules/api_verification.md).VerificationAPI

## Table of contents

### Constructors

- [constructor](api_verification.VerificationAPI.md#constructor)

### Properties

- [adminVerifier](api_verification.VerificationAPI.md#adminverifier)
- [config](api_verification.VerificationAPI.md#config)
- [personaVerifier](api_verification.VerificationAPI.md#personaverifier)
- [signer](api_verification.VerificationAPI.md#signer)
- [twitterVerifier](api_verification.VerificationAPI.md#twitterverifier)
- [verification](api_verification.VerificationAPI.md#verification)

### Methods

- [addVerifier](api_verification.VerificationAPI.md#addverifier)
- [blacklistDigest](api_verification.VerificationAPI.md#blacklistdigest)
- [getSupportedVerifiers](api_verification.VerificationAPI.md#getsupportedverifiers)
- [getVerifierAddress](api_verification.VerificationAPI.md#getverifieraddress)
- [getVerifierDetails](api_verification.VerificationAPI.md#getverifierdetails)
- [getVerifierDisplayName](api_verification.VerificationAPI.md#getverifierdisplayname)
- [getVerifierType](api_verification.VerificationAPI.md#getverifiertype)
- [isUser](api_verification.VerificationAPI.md#isuser)
- [isVerifier](api_verification.VerificationAPI.md#isverifier)
- [registerMasterAddress](api_verification.VerificationAPI.md#registermasteraddress)
- [registerSelfUsingTwitterVerifier](api_verification.VerificationAPI.md#registerselfusingtwitterverifier)
- [registerUsingAdminVerifier](api_verification.VerificationAPI.md#registerusingadminverifier)
- [registerUsingPersonaVerifier](api_verification.VerificationAPI.md#registerusingpersonaverifier)
- [unregisterSelfUsingAdminVerifier](api_verification.VerificationAPI.md#unregisterselfusingadminverifier)
- [unregisterSelfUsingPersonaVerifier](api_verification.VerificationAPI.md#unregisterselfusingpersonaverifier)
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

[src/api/verification.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/api/verification.ts#L50)

## Properties

### adminVerifier

• `Private` **adminVerifier**: [`AdminVerifier`](wrappers_AdminVerifier.AdminVerifier.md)

**`description`** Admin Verifier contract instance

#### Defined in

[src/api/verification.ts:38](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/api/verification.ts#L38)

___

### config

• `Private` **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

**`description`** Internal store for all sublime contracts addresses

#### Defined in

[src/api/verification.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/api/verification.ts#L44)

___

### personaVerifier

• `Private` **personaVerifier**: [`AdminVerifier`](wrappers_AdminVerifier.AdminVerifier.md)

#### Defined in

[src/api/verification.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/api/verification.ts#L39)

___

### signer

• `Private` **signer**: `Signer`

**`description`** Signer Object

#### Defined in

[src/api/verification.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/api/verification.ts#L23)

___

### twitterVerifier

• `Private` **twitterVerifier**: [`TwitterVerifier`](wrappers_TwitterVerifier.TwitterVerifier.md)

**`description`** Twitter Verifier contract instance

#### Defined in

[src/api/verification.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/api/verification.ts#L33)

___

### verification

• `Private` **verification**: [`Verification`](wrappers_Verification.Verification.md)

**`description`** verification contract instance

#### Defined in

[src/api/verification.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/api/verification.ts#L28)

## Methods

### addVerifier

▸ **addVerifier**(`verifier`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `verifier` | `string` | Address of the verifier contract. Only Admin can call |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/verification.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/api/verification.ts#L82)

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

[src/api/verification.ts:178](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/api/verification.ts#L178)

___

### getSupportedVerifiers

▸ **getSupportedVerifiers**(): [`Verifier`](../interfaces/types_Types.Verifier.md)[]

#### Returns

[`Verifier`](../interfaces/types_Types.Verifier.md)[]

#### Defined in

[src/api/verification.ts:237](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/api/verification.ts#L237)

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

[src/api/verification.ts:186](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/api/verification.ts#L186)

___

### getVerifierDetails

▸ **getVerifierDetails**(`address`): [`Verifier`](../interfaces/types_Types.Verifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`Verifier`](../interfaces/types_Types.Verifier.md)

#### Defined in

[src/api/verification.ts:233](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/api/verification.ts#L233)

___

### getVerifierDisplayName

▸ **getVerifierDisplayName**(`address`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`string`

#### Defined in

[src/api/verification.ts:218](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/api/verification.ts#L218)

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

[src/api/verification.ts:203](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/api/verification.ts#L203)

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

[src/api/verification.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/api/verification.ts#L64)

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

[src/api/verification.ts:74](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/api/verification.ts#L74)

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

[src/api/verification.ts:91](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/api/verification.ts#L91)

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

[src/api/verification.ts:104](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/api/verification.ts#L104)

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

[src/api/verification.ts:132](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/api/verification.ts#L132)

___

### registerUsingPersonaVerifier

▸ **registerUsingPersonaVerifier**(`_isMasterLinked`, `_v`, `_r`, `_s`, `_userData`, `_deadline`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_isMasterLinked` | `boolean` |
| `_v` | `BigNumberish` |
| `_r` | `BytesLike` |
| `_s` | `BytesLike` |
| `_userData` | `string` |
| `_deadline` | `BigNumberish` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/verification.ts:144](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/api/verification.ts#L144)

___

### unregisterSelfUsingAdminVerifier

▸ **unregisterSelfUsingAdminVerifier**(`options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/verification.ts:160](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/api/verification.ts#L160)

___

### unregisterSelfUsingPersonaVerifier

▸ **unregisterSelfUsingPersonaVerifier**(`options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/verification.ts:156](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/api/verification.ts#L156)

___

### unregisterSelfUsingTwitterVerifier

▸ **unregisterSelfUsingTwitterVerifier**(`options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/verification.ts:117](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/api/verification.ts#L117)

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

[src/api/verification.ts:169](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/api/verification.ts#L169)
