[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [api/yieldAndStrategy](../modules/api_yieldAndStrategy.md) / YieldAndStrategyApi

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

[src/api/yieldAndStrategy.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/70621b7/src/api/yieldAndStrategy.ts#L40)

## Properties

### config

• `Private` **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

**`description`** Internal store for all sublime contracts addresses

#### Defined in

[src/api/yieldAndStrategy.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/70621b7/src/api/yieldAndStrategy.ts#L23)

___

### displayName

• `Private` **displayName**: `Record`<`string`, `string`\> = `{}`

**`description`** Display names of all strategies

#### Defined in

[src/api/yieldAndStrategy.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/70621b7/src/api/yieldAndStrategy.ts#L33)

___

### logo

• `Private` **logo**: `Record`<`string`, `string`\> = `{}`

**`description`** Logo for all strategies

#### Defined in

[src/api/yieldAndStrategy.ts:38](https://github.com/sublime-finance/sublime-sdk/blob/70621b7/src/api/yieldAndStrategy.ts#L38)

___

### signer

• `Private` **signer**: `Signer`

**`description`** Signer Object

#### Defined in

[src/api/yieldAndStrategy.ts:18](https://github.com/sublime-finance/sublime-sdk/blob/70621b7/src/api/yieldAndStrategy.ts#L18)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

**`description`** Object to update and fetch token meta data

#### Defined in

[src/api/yieldAndStrategy.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/70621b7/src/api/yieldAndStrategy.ts#L28)

## Methods

### getSharesForTokens

▸ **getSharesForTokens**(`yieldType`, `asset`, `amount`): `Promise`<`string`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `yieldType` | [`StrategyType`](../enums/types_Types.StrategyType.md) | Type of yield/strategy |
| `asset` | `string` | Address of the asset/token |
| `amount` | `string` | Number of tokens |

#### Returns

`Promise`<`string`\>

Number of shares that will be generated for given number of tokens and strategy

#### Defined in

[src/api/yieldAndStrategy.ts:95](https://github.com/sublime-finance/sublime-sdk/blob/70621b7/src/api/yieldAndStrategy.ts#L95)

___

### getStrategies

▸ **getStrategies**(): [`Strategy`](../interfaces/types_Types.Strategy.md)[]

**`description`** returns all strategies supported sublime-sdk

#### Returns

[`Strategy`](../interfaces/types_Types.Strategy.md)[]

#### Defined in

[src/api/yieldAndStrategy.ts:121](https://github.com/sublime-finance/sublime-sdk/blob/70621b7/src/api/yieldAndStrategy.ts#L121)

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

[src/api/yieldAndStrategy.ts:158](https://github.com/sublime-finance/sublime-sdk/blob/70621b7/src/api/yieldAndStrategy.ts#L158)

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

[src/api/yieldAndStrategy.ts:143](https://github.com/sublime-finance/sublime-sdk/blob/70621b7/src/api/yieldAndStrategy.ts#L143)

___

### getStrategyDisplayName

▸ **getStrategyDisplayName**(`address`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | yield/strategy address |

#### Returns

`string`

Display Name/Info for the strategy

#### Defined in

[src/api/yieldAndStrategy.ts:189](https://github.com/sublime-finance/sublime-sdk/blob/70621b7/src/api/yieldAndStrategy.ts#L189)

___

### getStrategyLogo

▸ **getStrategyLogo**(`address`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | yield/strategy address |

#### Returns

`string`

URL of the strategy logo

#### Defined in

[src/api/yieldAndStrategy.ts:176](https://github.com/sublime-finance/sublime-sdk/blob/70621b7/src/api/yieldAndStrategy.ts#L176)

___

### getTokensForShares

▸ **getTokensForShares**(`yieldType`, `asset`, `shares`, `sharesInLowestUnits?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `yieldType` | [`StrategyType`](../enums/types_Types.StrategyType.md) | Type of yield/strategy |
| `asset` | `string` | Address of the asset/token |
| `shares` | `BigNumber` | Number of shares |
| `sharesInLowestUnits?` | `boolean` | If true, token decimals for shares are ignored |

#### Returns

`Promise`<`BigNumber`\>

Total number of underlying tokens for a given asset and strategy

#### Defined in

[src/api/yieldAndStrategy.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/70621b7/src/api/yieldAndStrategy.ts#L58)
