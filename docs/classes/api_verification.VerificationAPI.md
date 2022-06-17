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

- [\_buildDomainSeparator\_withContractAddress](api_verification.VerificationAPI.md#_builddomainseparator_withcontractaddress)
- [\_domainSeparatorV4\_withContractAddress](api_verification.VerificationAPI.md#_domainseparatorv4_withcontractaddress)
- [\_hashTypedDataV4\_withContractAddress](api_verification.VerificationAPI.md#_hashtypeddatav4_withcontractaddress)
- [addVerifier](api_verification.VerificationAPI.md#addverifier)
- [addressToPaddedHex](api_verification.VerificationAPI.md#addresstopaddedhex)
- [blacklistDigest](api_verification.VerificationAPI.md#blacklistdigest)
- [calculateDigestForTwitterVerifier](api_verification.VerificationAPI.md#calculatedigestfortwitterverifier)
- [generateSignatureForTwitterVerifier](api_verification.VerificationAPI.md#generatesignaturefortwitterverifier)
- [getSupportedVerifiers](api_verification.VerificationAPI.md#getsupportedverifiers)
- [getVerifierAddress](api_verification.VerificationAPI.md#getverifieraddress)
- [getVerifierDetails](api_verification.VerificationAPI.md#getverifierdetails)
- [getVerifierDisplayName](api_verification.VerificationAPI.md#getverifierdisplayname)
- [getVerifierType](api_verification.VerificationAPI.md#getverifiertype)
- [isUser](api_verification.VerificationAPI.md#isuser)
- [isVerifier](api_verification.VerificationAPI.md#isverifier)
- [keccak256](api_verification.VerificationAPI.md#keccak256)
- [padLeft](api_verification.VerificationAPI.md#padleft)
- [registerMasterAddress](api_verification.VerificationAPI.md#registermasteraddress)
- [registerSelfUsingTwitterVerifier](api_verification.VerificationAPI.md#registerselfusingtwitterverifier)
- [registerUsingAdminVerifier](api_verification.VerificationAPI.md#registerusingadminverifier)
- [registerUsingPersonaVerifier](api_verification.VerificationAPI.md#registerusingpersonaverifier)
- [timestampPaddedHex](api_verification.VerificationAPI.md#timestamppaddedhex)
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

[src/api/verification.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L53)

## Properties

### adminVerifier

• `Private` **adminVerifier**: `AdminVerifier`

**`description`** Admin Verifier contract instance

#### Defined in

[src/api/verification.ts:41](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L41)

___

### config

• `Private` **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

**`description`** Internal store for all sublime contracts addresses

#### Defined in

[src/api/verification.ts:47](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L47)

___

### personaVerifier

• `Private` **personaVerifier**: `AdminVerifier`

#### Defined in

[src/api/verification.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L42)

___

### signer

• `Private` **signer**: `Signer`

**`description`** Signer Object

#### Defined in

[src/api/verification.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L26)

___

### twitterVerifier

• `Private` **twitterVerifier**: `TwitterVerifier`

**`description`** Twitter Verifier contract instance

#### Defined in

[src/api/verification.ts:36](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L36)

___

### verification

• `Private` **verification**: `Verification`

**`description`** verification contract instance

#### Defined in

[src/api/verification.ts:31](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L31)

## Methods

### \_buildDomainSeparator\_withContractAddress

▸ `Private` **_buildDomainSeparator_withContractAddress**(`typeHash`, `nameHash`, `versionHash`, `contractAddress`, `chainId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeHash` | `string` |
| `nameHash` | `string` |
| `versionHash` | `string` |
| `contractAddress` | `string` |
| `chainId` | `string` |

#### Returns

`string`

#### Defined in

[src/api/verification.ts:299](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L299)

___

### \_domainSeparatorV4\_withContractAddress

▸ `Private` **_domainSeparatorV4_withContractAddress**(`verifier`, `name`, `version`, `chainId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `verifier` | [`VerifierType`](../enums/types_Types.VerifierType.md) |
| `name` | `string` |
| `version` | `string` |
| `chainId` | `string` |

#### Returns

`string`

#### Defined in

[src/api/verification.ts:283](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L283)

___

### \_hashTypedDataV4\_withContractAddress

▸ `Private` **_hashTypedDataV4_withContractAddress**(`structHash`, `verifier`, `name`, `version`, `chainId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `structHash` | `string` |
| `verifier` | [`VerifierType`](../enums/types_Types.VerifierType.md) |
| `name` | `string` |
| `version` | `string` |
| `chainId` | `string` |

#### Returns

`string`

#### Defined in

[src/api/verification.ts:272](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L272)

___

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

[src/api/verification.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L85)

___

### addressToPaddedHex

▸ `Private` **addressToPaddedHex**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`string`

#### Defined in

[src/api/verification.ts:324](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L324)

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

[src/api/verification.ts:181](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L181)

___

### calculateDigestForTwitterVerifier

▸ `Private` **calculateDigestForTwitterVerifier**(`_twitterId`, `_tweetId`, `_user`, `_timestamp`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_twitterId` | `string` |
| `_tweetId` | `string` |
| `_user` | `string` |
| `_timestamp` | `string` |

#### Returns

`string`

#### Defined in

[src/api/verification.ts:310](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L310)

___

### generateSignatureForTwitterVerifier

▸ **generateSignatureForTwitterVerifier**(`verifierName`, `verifierVersion`, `twitterId`, `tweetId`, `msgSender`, `timestamp`, `signerPrivate`): `Promise`<[`TwitterVerifierSignatureData`](../interfaces/types_Types.TwitterVerifierSignatureData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `verifierName` | `string` |
| `verifierVersion` | `string` |
| `twitterId` | `string` |
| `tweetId` | `string` |
| `msgSender` | `string` |
| `timestamp` | `string` |
| `signerPrivate` | `string` |

#### Returns

`Promise`<[`TwitterVerifierSignatureData`](../interfaces/types_Types.TwitterVerifierSignatureData.md)\>

#### Defined in

[src/api/verification.ts:246](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L246)

___

### getSupportedVerifiers

▸ **getSupportedVerifiers**(): [`Verifier`](../interfaces/types_Types.Verifier.md)[]

#### Returns

[`Verifier`](../interfaces/types_Types.Verifier.md)[]

#### Defined in

[src/api/verification.ts:240](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L240)

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

[src/api/verification.ts:189](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L189)

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

[src/api/verification.ts:236](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L236)

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

[src/api/verification.ts:221](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L221)

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

[src/api/verification.ts:206](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L206)

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

[src/api/verification.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L67)

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

[src/api/verification.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L77)

___

### keccak256

▸ `Private` **keccak256**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`string`

#### Defined in

[src/api/verification.ts:320](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L320)

___

### padLeft

▸ `Private` **padLeft**(`data`, `size?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `string` | `undefined` |
| `size` | `number` | `64` |

#### Returns

`string`

#### Defined in

[src/api/verification.ts:335](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L335)

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

[src/api/verification.ts:94](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L94)

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

[src/api/verification.ts:107](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L107)

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

[src/api/verification.ts:135](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L135)

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

[src/api/verification.ts:147](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L147)

___

### timestampPaddedHex

▸ `Private` **timestampPaddedHex**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`string`

#### Defined in

[src/api/verification.ts:330](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L330)

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

[src/api/verification.ts:163](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L163)

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

[src/api/verification.ts:159](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L159)

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

[src/api/verification.ts:120](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L120)

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

[src/api/verification.ts:172](https://github.com/sublime-finance/sublime-sdk/blob/4c48079/src/api/verification.ts#L172)
