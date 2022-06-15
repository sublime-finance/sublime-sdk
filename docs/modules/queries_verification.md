[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / queries/verification

# Module: queries/verification

## Table of contents

### Functions

- [getTwitterDetails](queries_verification.md#gettwitterdetails)
- [getTwitterId](queries_verification.md#gettwitterid)
- [getUserMetadata](queries_verification.md#getusermetadata)

## Functions

### getTwitterDetails

▸ **getTwitterDetails**(`twtID`): `Promise`<[`UserTwitterDetails`](../interfaces/types_Types.UserTwitterDetails.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `twtID` | `string` | This is twitter id |

#### Returns

`Promise`<[`UserTwitterDetails`](../interfaces/types_Types.UserTwitterDetails.md)\>

#### Defined in

[src/queries/verification.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/queries/verification.ts#L69)

___

### getTwitterId

▸ **getTwitterId**(`url`, `address`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `any` |
| `address` | `string` |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/verification.ts:7](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/queries/verification.ts#L7)

___

### getUserMetadata

▸ **getUserMetadata**(`url`, `address`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `any` |
| `address` | `string` |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/verification.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/queries/verification.ts#L33)
