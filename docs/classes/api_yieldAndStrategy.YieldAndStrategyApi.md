[sublime-sdk](../README.md) / [Modules](../modules.md) / [api/yieldAndStrategy](../modules/api_yieldAndStrategy.md) / YieldAndStrategyApi

# Class: YieldAndStrategyApi

[api/yieldAndStrategy](../modules/api_yieldAndStrategy.md).YieldAndStrategyApi

## Table of contents

### Constructors

- [constructor](api_yieldAndStrategy.YieldAndStrategyApi.md#constructor)

### Properties

- [config](api_yieldAndStrategy.YieldAndStrategyApi.md#config)
- [displayName](api_yieldAndStrategy.YieldAndStrategyApi.md#displayname)
- [logo](api_yieldAndStrategy.YieldAndStrategyApi.md#logo)
- [signer](api_yieldAndStrategy.YieldAndStrategyApi.md#signer)
- [tokenManager](api_yieldAndStrategy.YieldAndStrategyApi.md#tokenmanager)

### Methods

- [getSharesForTokens](api_yieldAndStrategy.YieldAndStrategyApi.md#getsharesfortokens)
- [getStrategies](api_yieldAndStrategy.YieldAndStrategyApi.md#getstrategies)
- [getStrategy](api_yieldAndStrategy.YieldAndStrategyApi.md#getstrategy)
- [getStrategyAddress](api_yieldAndStrategy.YieldAndStrategyApi.md#getstrategyaddress)
- [getStrategyDisplayName](api_yieldAndStrategy.YieldAndStrategyApi.md#getstrategydisplayname)
- [getStrategyLogo](api_yieldAndStrategy.YieldAndStrategyApi.md#getstrategylogo)
- [getTokensForShares](api_yieldAndStrategy.YieldAndStrategyApi.md#gettokensforshares)

## Constructors

### constructor

• **new YieldAndStrategyApi**(`signer`, `config`, `tokenManger`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |
| `tokenManger` | [`TokenManager`](tokenManager.TokenManager.md) |

#### Defined in

[src/api/yieldAndStrategy.ts:22](https://github.com/sublime-finance/sublime-sdk/blob/5bcc6fc/src/api/yieldAndStrategy.ts#L22)

## Properties

### config

• **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

#### Defined in

[src/api/yieldAndStrategy.ts:16](https://github.com/sublime-finance/sublime-sdk/blob/5bcc6fc/src/api/yieldAndStrategy.ts#L16)

___

### displayName

• `Private` **displayName**: `Record`<`string`, `string`\> = `{}`

#### Defined in

[src/api/yieldAndStrategy.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/5bcc6fc/src/api/yieldAndStrategy.ts#L19)

___

### logo

• `Private` **logo**: `Record`<`string`, `string`\> = `{}`

#### Defined in

[src/api/yieldAndStrategy.ts:20](https://github.com/sublime-finance/sublime-sdk/blob/5bcc6fc/src/api/yieldAndStrategy.ts#L20)

___

### signer

• `Private` **signer**: `Signer`

#### Defined in

[src/api/yieldAndStrategy.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/5bcc6fc/src/api/yieldAndStrategy.ts#L15)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

#### Defined in

[src/api/yieldAndStrategy.ts:17](https://github.com/sublime-finance/sublime-sdk/blob/5bcc6fc/src/api/yieldAndStrategy.ts#L17)

## Methods

### getSharesForTokens

▸ **getSharesForTokens**(`yieldAddress`, `asset`, `amount`): `Promise`<`string`\>

**`description`** returns the number shares that will be generated for given number of tokens

#### Parameters

| Name | Type |
| :------ | :------ |
| `yieldAddress` | `string` |
| `asset` | `string` |
| `amount` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/yieldAndStrategy.ts:78](https://github.com/sublime-finance/sublime-sdk/blob/5bcc6fc/src/api/yieldAndStrategy.ts#L78)

___

### getStrategies

▸ **getStrategies**(): [`Strategy`](../interfaces/types_Types.Strategy.md)[]

**`description`** returns strategies supported sublime-sdk

#### Returns

[`Strategy`](../interfaces/types_Types.Strategy.md)[]

#### Defined in

[src/api/yieldAndStrategy.ts:103](https://github.com/sublime-finance/sublime-sdk/blob/5bcc6fc/src/api/yieldAndStrategy.ts#L103)

___

### getStrategy

▸ **getStrategy**(`address`): [`StrategyType`](../enums/types_Types.StrategyType.md)

**`description`** Get Strategy name from given address,

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`StrategyType`](../enums/types_Types.StrategyType.md)

null if invalid strategy address is given in input

#### Defined in

[src/api/yieldAndStrategy.ts:140](https://github.com/sublime-finance/sublime-sdk/blob/5bcc6fc/src/api/yieldAndStrategy.ts#L140)

___

### getStrategyAddress

▸ **getStrategyAddress**(`strategy`): `string`

**`description`** Get Strategy address from name

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |

#### Returns

`string`

null if invalid strategy name is given

#### Defined in

[src/api/yieldAndStrategy.ts:125](https://github.com/sublime-finance/sublime-sdk/blob/5bcc6fc/src/api/yieldAndStrategy.ts#L125)

___

### getStrategyDisplayName

▸ **getStrategyDisplayName**(`address`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`string`

#### Defined in

[src/api/yieldAndStrategy.ts:163](https://github.com/sublime-finance/sublime-sdk/blob/5bcc6fc/src/api/yieldAndStrategy.ts#L163)

___

### getStrategyLogo

▸ **getStrategyLogo**(`address`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`string`

#### Defined in

[src/api/yieldAndStrategy.ts:154](https://github.com/sublime-finance/sublime-sdk/blob/5bcc6fc/src/api/yieldAndStrategy.ts#L154)

___

### getTokensForShares

▸ **getTokensForShares**(`yieldAddress`, `asset`, `shares`, `sharesInLowestUnits?`): `Promise`<`BigNumber`\>

**`description`** Returns the number of tokens that will be redeemed for given number of shares

#### Parameters

| Name | Type |
| :------ | :------ |
| `yieldAddress` | `string` |
| `asset` | `string` |
| `shares` | `BigNumber` |
| `sharesInLowestUnits?` | `boolean` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/api/yieldAndStrategy.ts:41](https://github.com/sublime-finance/sublime-sdk/blob/5bcc6fc/src/api/yieldAndStrategy.ts#L41)
