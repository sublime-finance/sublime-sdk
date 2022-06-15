[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [api/yieldAndStrategy](../modules/api_yieldAndStrategy.md) / YieldAndStrategyApi

# Class: YieldAndStrategyApi

[api/yieldAndStrategy](../modules/api_yieldAndStrategy.md).YieldAndStrategyApi

## Table of contents

### Constructors

- [constructor](api_yieldAndStrategy.YieldAndStrategyApi.md#constructor)

### Properties

- [compoundYield](api_yieldAndStrategy.YieldAndStrategyApi.md#compoundyield)
- [config](api_yieldAndStrategy.YieldAndStrategyApi.md#config)
- [displayName](api_yieldAndStrategy.YieldAndStrategyApi.md#displayname)
- [logo](api_yieldAndStrategy.YieldAndStrategyApi.md#logo)
- [signer](api_yieldAndStrategy.YieldAndStrategyApi.md#signer)
- [tokenManager](api_yieldAndStrategy.YieldAndStrategyApi.md#tokenmanager)

### Methods

- [getApr](api_yieldAndStrategy.YieldAndStrategyApi.md#getapr)
- [getSharesForTokens](api_yieldAndStrategy.YieldAndStrategyApi.md#getsharesfortokens)
- [getStrategies](api_yieldAndStrategy.YieldAndStrategyApi.md#getstrategies)
- [getStrategy](api_yieldAndStrategy.YieldAndStrategyApi.md#getstrategy)
- [getStrategyAddress](api_yieldAndStrategy.YieldAndStrategyApi.md#getstrategyaddress)
- [getStrategyDisplayName](api_yieldAndStrategy.YieldAndStrategyApi.md#getstrategydisplayname)
- [getStrategyLogo](api_yieldAndStrategy.YieldAndStrategyApi.md#getstrategylogo)
- [getTokensForShares](api_yieldAndStrategy.YieldAndStrategyApi.md#gettokensforshares)
- [setDepositLimitInCompoundYield](api_yieldAndStrategy.YieldAndStrategyApi.md#setdepositlimitincompoundyield)
- [updateLiquidityTokenInCompoundYield](api_yieldAndStrategy.YieldAndStrategyApi.md#updateliquiditytokenincompoundyield)

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

[src/api/yieldAndStrategy.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/api/yieldAndStrategy.ts#L42)

## Properties

### compoundYield

• `Private` **compoundYield**: [`CompoundYield`](wrappers_CompoundYield.CompoundYield.md)

#### Defined in

[src/api/yieldAndStrategy.ts:20](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/api/yieldAndStrategy.ts#L20)

___

### config

• `Private` **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

**`description`** Internal store for all sublime contracts addresses

#### Defined in

[src/api/yieldAndStrategy.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/api/yieldAndStrategy.ts#L25)

___

### displayName

• `Private` **displayName**: `Record`<`string`, `string`\> = `{}`

**`description`** Display names of all strategies

#### Defined in

[src/api/yieldAndStrategy.ts:35](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/api/yieldAndStrategy.ts#L35)

___

### logo

• `Private` **logo**: `Record`<`string`, `string`\> = `{}`

**`description`** Logo for all strategies

#### Defined in

[src/api/yieldAndStrategy.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/api/yieldAndStrategy.ts#L40)

___

### signer

• `Private` **signer**: `Signer`

**`description`** Signer Object

#### Defined in

[src/api/yieldAndStrategy.ts:18](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/api/yieldAndStrategy.ts#L18)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

**`description`** Object to update and fetch token meta data

#### Defined in

[src/api/yieldAndStrategy.ts:30](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/api/yieldAndStrategy.ts#L30)

## Methods

### getApr

▸ **getApr**(`yieldType`, `asset`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `yieldType` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `asset` | `string` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/api/yieldAndStrategy.ts:106](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/api/yieldAndStrategy.ts#L106)

___

### getSharesForTokens

▸ **getSharesForTokens**(`yieldType`, `asset`, `amount`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `yieldType` | [`StrategyType`](../enums/types_Types.StrategyType.md) | Type of yield/strategy |
| `asset` | `string` | Address of the asset/token |
| `amount` | `string` | Number of tokens |

#### Returns

`Promise`<`BigNumber`\>

Number of shares that will be generated for given number of tokens and strategy

#### Defined in

[src/api/yieldAndStrategy.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/api/yieldAndStrategy.ts#L85)

___

### getStrategies

▸ **getStrategies**(): [`Strategy`](../interfaces/types_Types.Strategy.md)[]

**`description`** returns all strategies supported sublime-sdk

#### Returns

[`Strategy`](../interfaces/types_Types.Strategy.md)[]

#### Defined in

[src/api/yieldAndStrategy.ts:122](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/api/yieldAndStrategy.ts#L122)

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

[src/api/yieldAndStrategy.ts:159](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/api/yieldAndStrategy.ts#L159)

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

[src/api/yieldAndStrategy.ts:144](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/api/yieldAndStrategy.ts#L144)

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

[src/api/yieldAndStrategy.ts:190](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/api/yieldAndStrategy.ts#L190)

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

[src/api/yieldAndStrategy.ts:177](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/api/yieldAndStrategy.ts#L177)

___

### getTokensForShares

▸ **getTokensForShares**(`yieldType`, `asset`, `shares`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `yieldType` | [`StrategyType`](../enums/types_Types.StrategyType.md) | Type of yield/strategy |
| `asset` | `string` | Address of the asset/token |
| `shares` | `BigNumber` | Number of shares |

#### Returns

`Promise`<`BigNumber`\>

Total number of underlying tokens for a given asset and strategy

#### Defined in

[src/api/yieldAndStrategy.ts:62](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/api/yieldAndStrategy.ts#L62)

___

### setDepositLimitInCompoundYield

▸ **setDepositLimitInCompoundYield**(`asset`, `limit`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `asset` | `string` |
| `limit` | `BigNumberish` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/yieldAndStrategy.ts:203](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/api/yieldAndStrategy.ts#L203)

___

### updateLiquidityTokenInCompoundYield

▸ **updateLiquidityTokenInCompoundYield**(`asset`, `cToken`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `asset` | `string` |
| `cToken` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/yieldAndStrategy.ts:199](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/api/yieldAndStrategy.ts#L199)
