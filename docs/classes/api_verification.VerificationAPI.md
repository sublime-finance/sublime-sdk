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

[src/api/verification.ts:30](https://github.com/sublime-finance/sublime-sdk/blob/2b2a7e7/src/api/verification.ts#L30)

## Properties

### adminVerifier

• `Private` **adminVerifier**: `AdminVerifier`

#### Defined in

[src/api/verification.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/2b2a7e7/src/api/verification.ts#L23)

___

### config

• `Private` **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

#### Defined in

[src/api/verification.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/2b2a7e7/src/api/verification.ts#L25)

___

### signer

• `Private` **signer**: `Signer`

#### Defined in

[src/api/verification.ts:20](https://github.com/sublime-finance/sublime-sdk/blob/2b2a7e7/src/api/verification.ts#L20)

___

### twitterVerifier

• `Private` **twitterVerifier**: `TwitterVerifier`

#### Defined in

[src/api/verification.ts:22](https://github.com/sublime-finance/sublime-sdk/blob/2b2a7e7/src/api/verification.ts#L22)

___

### verification

• `Private` **verification**: `Verification`

#### Defined in

[src/api/verification.ts:21](https://github.com/sublime-finance/sublime-sdk/blob/2b2a7e7/src/api/verification.ts#L21)

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

[src/api/verification.ts:59](https://github.com/sublime-finance/sublime-sdk/blob/2b2a7e7/src/api/verification.ts#L59)

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

[src/api/verification.ts:135](https://github.com/sublime-finance/sublime-sdk/blob/2b2a7e7/src/api/verification.ts#L135)

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

[src/api/verification.ts:145](https://github.com/sublime-finance/sublime-sdk/blob/2b2a7e7/src/api/verification.ts#L145)

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

[src/api/verification.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/2b2a7e7/src/api/verification.ts#L42)

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

[src/api/verification.ts:51](https://github.com/sublime-finance/sublime-sdk/blob/2b2a7e7/src/api/verification.ts#L51)

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

[src/api/verification.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/2b2a7e7/src/api/verification.ts#L68)

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

[src/api/verification.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/2b2a7e7/src/api/verification.ts#L81)

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

[src/api/verification.ts:101](https://github.com/sublime-finance/sublime-sdk/blob/2b2a7e7/src/api/verification.ts#L101)

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

[src/api/verification.ts:113](https://github.com/sublime-finance/sublime-sdk/blob/2b2a7e7/src/api/verification.ts#L113)

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

[src/api/verification.ts:97](https://github.com/sublime-finance/sublime-sdk/blob/2b2a7e7/src/api/verification.ts#L97)

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

[src/api/verification.ts:131](https://github.com/sublime-finance/sublime-sdk/blob/2b2a7e7/src/api/verification.ts#L131)

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

[src/api/verification.ts:122](https://github.com/sublime-finance/sublime-sdk/blob/2b2a7e7/src/api/verification.ts#L122)
