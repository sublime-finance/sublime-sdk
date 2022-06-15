[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [tokenManager](../modules/tokenManager.md) / TokenManager

# Class: TokenManager

[tokenManager](../modules/tokenManager.md).TokenManager

**`description`** An token manager stores, retrieves and caches the data like token name, decimals, logos and prices.

## Table of contents

### Constructors

- [constructor](tokenManager.TokenManager.md#constructor)

### Properties

- [addressMapper](tokenManager.TokenManager.md#addressmapper)
- [decimals](tokenManager.TokenManager.md#decimals)
- [logoUrlTemplate](tokenManager.TokenManager.md#logourltemplate)
- [logos](tokenManager.TokenManager.md#logos)
- [names](tokenManager.TokenManager.md#names)
- [priceLastUpdatedAt](tokenManager.TokenManager.md#pricelastupdatedat)
- [priceRefreshInterval](tokenManager.TokenManager.md#pricerefreshinterval)
- [priceSubgraphUrl](tokenManager.TokenManager.md#pricesubgraphurl)
- [prices](tokenManager.TokenManager.md#prices)
- [signer](tokenManager.TokenManager.md#signer)
- [subgraph](tokenManager.TokenManager.md#subgraph)

### Methods

- [getAssetMeta](tokenManager.TokenManager.md#getassetmeta)
- [getLogo](tokenManager.TokenManager.md#getlogo)
- [getPricePerAsset](tokenManager.TokenManager.md#getpriceperasset)
- [getTokenDecimals](tokenManager.TokenManager.md#gettokendecimals)
- [getTokenName](tokenManager.TokenManager.md#gettokenname)
- [updateAll](tokenManager.TokenManager.md#updateall)
- [updateLogo](tokenManager.TokenManager.md#updatelogo)
- [updatePricePerAsset](tokenManager.TokenManager.md#updatepriceperasset)
- [updateTokenDecimals](tokenManager.TokenManager.md#updatetokendecimals)
- [updateTokenName](tokenManager.TokenManager.md#updatetokenname)

## Constructors

### constructor

• **new TokenManager**(`signer`, `priceSubgraphUrl`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `priceSubgraphUrl` | `string` |

#### Defined in

[src/tokenManager.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/b2496c0/src/tokenManager.ts#L67)

## Properties

### addressMapper

• `Private` **addressMapper**: `Object` = `{}`

**`description`** used for mapping tokens logos of testnet

#### Defined in

[src/tokenManager.ts:43](https://github.com/sublime-finance/sublime-sdk/blob/b2496c0/src/tokenManager.ts#L43)

___

### decimals

• `Private` **decimals**: `Object` = `{}`

**`description`** caches number of decimals for a token address

#### Defined in

[src/tokenManager.ts:18](https://github.com/sublime-finance/sublime-sdk/blob/b2496c0/src/tokenManager.ts#L18)

___

### logoUrlTemplate

• `Private` **logoUrlTemplate**: `string` = `'https://tokens.1inch.io/ADDRESS.png'`

**`description`** Base path for logos

#### Defined in

[src/tokenManager.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/b2496c0/src/tokenManager.ts#L48)

___

### logos

• `Private` **logos**: `Object` = `{}`

**`description`** caches the token logo

#### Defined in

[src/tokenManager.ts:38](https://github.com/sublime-finance/sublime-sdk/blob/b2496c0/src/tokenManager.ts#L38)

___

### names

• `Private` **names**: `Object` = `{}`

**`description`** caches name of token

#### Defined in

[src/tokenManager.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/b2496c0/src/tokenManager.ts#L23)

___

### priceLastUpdatedAt

• `Private` **priceLastUpdatedAt**: `Object` = `{}`

**`description`** stores when last time when the token price was updated

#### Defined in

[src/tokenManager.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/b2496c0/src/tokenManager.ts#L33)

___

### priceRefreshInterval

• `Private` **priceRefreshInterval**: `number` = `60000`

**`description`** interval at which prices are refreshed in the SDK

#### Defined in

[src/tokenManager.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/b2496c0/src/tokenManager.ts#L58)

___

### priceSubgraphUrl

• `Private` **priceSubgraphUrl**: `string`

**`description`** subgraph URL that fetches prices

#### Defined in

[src/tokenManager.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/b2496c0/src/tokenManager.ts#L53)

___

### prices

• `Private` **prices**: `Object` = `{}`

**`description`** cache the price of token, Updates every 1 min

#### Defined in

[src/tokenManager.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/b2496c0/src/tokenManager.ts#L28)

___

### signer

• `Private` **signer**: `Signer`

**`description`** web3 signer

#### Defined in

[src/tokenManager.ts:63](https://github.com/sublime-finance/sublime-sdk/blob/b2496c0/src/tokenManager.ts#L63)

___

### subgraph

• `Private` **subgraph**: [`SublimeSubgraph`](subgraph.SublimeSubgraph.md)

#### Defined in

[src/tokenManager.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/b2496c0/src/tokenManager.ts#L65)

## Methods

### getAssetMeta

▸ **getAssetMeta**(`tokenAddress`): `Promise`<[`Asset`](../interfaces/types_Types.Asset.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`Promise`<[`Asset`](../interfaces/types_Types.Asset.md)\>

#### Defined in

[src/tokenManager.ts:218](https://github.com/sublime-finance/sublime-sdk/blob/b2496c0/src/tokenManager.ts#L218)

___

### getLogo

▸ **getLogo**(`tokenAddress`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`string`

return url which renders the logo/pic of the token

#### Defined in

[src/tokenManager.ts:205](https://github.com/sublime-finance/sublime-sdk/blob/b2496c0/src/tokenManager.ts#L205)

___

### getPricePerAsset

▸ **getPricePerAsset**(`tokenAddress`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`Promise`<`BigNumber`\>

price of asset

#### Defined in

[src/tokenManager.ts:191](https://github.com/sublime-finance/sublime-sdk/blob/b2496c0/src/tokenManager.ts#L191)

___

### getTokenDecimals

▸ **getTokenDecimals**(`tokenAddress`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`number`

number of token decimals

#### Defined in

[src/tokenManager.ts:165](https://github.com/sublime-finance/sublime-sdk/blob/b2496c0/src/tokenManager.ts#L165)

___

### getTokenName

▸ **getTokenName**(`tokenAddress`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`string`

token name

#### Defined in

[src/tokenManager.ts:178](https://github.com/sublime-finance/sublime-sdk/blob/b2496c0/src/tokenManager.ts#L178)

___

### updateAll

▸ **updateAll**(`tokenAddress`): `Promise`<`void`\>

**`description`** Updates the token meta data

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/tokenManager.ts:83](https://github.com/sublime-finance/sublime-sdk/blob/b2496c0/src/tokenManager.ts#L83)

___

### updateLogo

▸ **updateLogo**(`tokenAddress`): `Promise`<`void`\>

**`description`** Updates token Logo

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/tokenManager.ts:147](https://github.com/sublime-finance/sublime-sdk/blob/b2496c0/src/tokenManager.ts#L147)

___

### updatePricePerAsset

▸ **updatePricePerAsset**(`tokenAddress`): `Promise`<`void`\>

**`description`** Updates token price

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/tokenManager.ts:128](https://github.com/sublime-finance/sublime-sdk/blob/b2496c0/src/tokenManager.ts#L128)

___

### updateTokenDecimals

▸ **updateTokenDecimals**(`tokenAddress`): `Promise`<`void`\>

**`description`** Updated the token decimals

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/tokenManager.ts:96](https://github.com/sublime-finance/sublime-sdk/blob/b2496c0/src/tokenManager.ts#L96)

___

### updateTokenName

▸ **updateTokenName**(`tokenAddress`): `Promise`<`void`\>

**`description`** Updates token name

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/tokenManager.ts:112](https://github.com/sublime-finance/sublime-sdk/blob/b2496c0/src/tokenManager.ts#L112)
