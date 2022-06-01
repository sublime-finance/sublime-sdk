[sublime-sdk](../README.md) / [Modules](../modules.md) / [api/verification](../modules/api_verification.md) / VerificationAPI

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
- [getVerifierAddress](api_verification.VerificationAPI.md#getverifieraddress)
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
- [updateVerification](api_verification.VerificationAPI.md#updateverification)

## Constructors

### constructor

• **new VerificationAPI**(`signer`, `config`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signer` | `Signer` | Signer |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) | SublimeConfig |

#### Defined in

[src/api/verification.ts:31](https://github.com/sublime-finance/sublime-sdk/blob/952980f/src/api/verification.ts#L31)

## Properties

### adminVerifier

• `Private` **adminVerifier**: `AdminVerifier`

#### Defined in

[src/api/verification.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/952980f/src/api/verification.ts#L23)

___

### config

• `Private` **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

#### Defined in

[src/api/verification.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/952980f/src/api/verification.ts#L26)

___

### personaVerifier

• `Private` **personaVerifier**: `AdminVerifier`

#### Defined in

[src/api/verification.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/952980f/src/api/verification.ts#L24)

___

### signer

• `Private` **signer**: `Signer`

#### Defined in

[src/api/verification.ts:20](https://github.com/sublime-finance/sublime-sdk/blob/952980f/src/api/verification.ts#L20)

___

### twitterVerifier

• `Private` **twitterVerifier**: `TwitterVerifier`

#### Defined in

[src/api/verification.ts:22](https://github.com/sublime-finance/sublime-sdk/blob/952980f/src/api/verification.ts#L22)

___

### verification

• `Private` **verification**: `Verification`

#### Defined in

[src/api/verification.ts:21](https://github.com/sublime-finance/sublime-sdk/blob/952980f/src/api/verification.ts#L21)

## Methods

### addVerifier

▸ **addVerifier**(`verifier?`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `verifier` | `string` | Address of the verifier contract. (Default is the admin verifier) |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/verification.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/952980f/src/api/verification.ts#L61)

___

### getVerifierAddress

▸ **getVerifierAddress**(`type`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`VerifierType`](../enums/types_Types.VerifierType.md) |

#### Returns

`string`

#### Defined in

[src/api/verification.ts:150](https://github.com/sublime-finance/sublime-sdk/blob/952980f/src/api/verification.ts#L150)

___

### getVerifierType

▸ **getVerifierType**(`address`): [`VerifierType`](../enums/types_Types.VerifierType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`VerifierType`](../enums/types_Types.VerifierType.md)

#### Defined in

[src/api/verification.ts:162](https://github.com/sublime-finance/sublime-sdk/blob/952980f/src/api/verification.ts#L162)

___

### isUser

▸ **isUser**(`user`): `Promise`<`boolean`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user` | `string` | Address to check |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/api/verification.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/952980f/src/api/verification.ts#L44)

___

### isVerifier

▸ **isVerifier**(`verifier`): `Promise`<`boolean`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `verifier` | `string` | Address of the verifier contract |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/api/verification.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/952980f/src/api/verification.ts#L53)

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

[src/api/verification.ts:70](https://github.com/sublime-finance/sublime-sdk/blob/952980f/src/api/verification.ts#L70)

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

[src/api/verification.ts:83](https://github.com/sublime-finance/sublime-sdk/blob/952980f/src/api/verification.ts#L83)

___

### registerUsingAdminVerifier

▸ **registerUsingAdminVerifier**(`_isMasterLinked`, `_v`, `_r`, `_s`, `_userData`, `_deadline`, `options?`): `Promise`<`ContractTransaction`\>

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

[src/api/verification.ts:100](https://github.com/sublime-finance/sublime-sdk/blob/952980f/src/api/verification.ts#L100)

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

[src/api/verification.ts:112](https://github.com/sublime-finance/sublime-sdk/blob/952980f/src/api/verification.ts#L112)

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

[src/api/verification.ts:128](https://github.com/sublime-finance/sublime-sdk/blob/952980f/src/api/verification.ts#L128)

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

[src/api/verification.ts:124](https://github.com/sublime-finance/sublime-sdk/blob/952980f/src/api/verification.ts#L124)

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

[src/api/verification.ts:96](https://github.com/sublime-finance/sublime-sdk/blob/952980f/src/api/verification.ts#L96)

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

[src/api/verification.ts:146](https://github.com/sublime-finance/sublime-sdk/blob/952980f/src/api/verification.ts#L146)

___

### updateVerification

▸ **updateVerification**(`_verification`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_verification` | `string` | Address of the verification contract |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/verification.ts:137](https://github.com/sublime-finance/sublime-sdk/blob/952980f/src/api/verification.ts#L137)
