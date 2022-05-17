[sublime-sdk](../README.md) / [Modules](../modules.md) / [subgraph/Base](../modules/subgraph_Base.md) / Base

# Class: Base

[subgraph/Base](../modules/subgraph_Base.md).Base

## Hierarchy

- **`Base`**

  ↳ [`CreditLineCalls`](subgraph_CreditLine.CreditLineCalls.md)

## Table of contents

### Constructors

- [constructor](subgraph_Base.Base.md#constructor)

### Properties

- [signer](subgraph_Base.Base.md#signer)
- [subgraphUrl](subgraph_Base.Base.md#subgraphurl)
- [sublimeAddresses](subgraph_Base.Base.md#sublimeaddresses)
- [tokenManager](subgraph_Base.Base.md#tokenmanager)
- [yieldApi](subgraph_Base.Base.md#yieldapi)

### Methods

- [getDashboardOverview](subgraph_Base.Base.md#getdashboardoverview)
- [getRandomInt](subgraph_Base.Base.md#getrandomint)

## Constructors

### constructor

• **new Base**(`url`, `signer`, `tokenManager`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `signer` | `Signer` |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |

#### Defined in

[src/subgraph/Base.ts:32](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L32)

## Properties

### signer

• `Protected` **signer**: `Signer`

**`description`** signer used to sign

#### Defined in

[src/subgraph/Base.ts:18](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L18)

___

### subgraphUrl

• `Protected` **subgraphUrl**: `string`

**`description`** subgraph url for fetching the sublime data

#### Defined in

[src/subgraph/Base.ts:13](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L13)

___

### sublimeAddresses

• `Protected` **sublimeAddresses**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

**`description`** sublime config. (Contains all addresses relevant to sublime ecosystem)

#### Defined in

[src/subgraph/Base.ts:30](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L30)

___

### tokenManager

• `Protected` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

**`description`** instance of token manager class that caches and retreives token data

#### Defined in

[src/subgraph/Base.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L23)

___

### yieldApi

• `Protected` **yieldApi**: [`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md)

#### Defined in

[src/subgraph/Base.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L25)

## Methods

### getDashboardOverview

▸ **getDashboardOverview**(`address`): `Promise`<[`DashboardOverview`](../interfaces/types_Types.DashboardOverview.md)\>

**`description`** Return the dashboard view type for a user

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<[`DashboardOverview`](../interfaces/types_Types.DashboardOverview.md)\>

#### Defined in

[src/subgraph/Base.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L54)

___

### getRandomInt

▸ `Protected` **getRandomInt**(`max`): `number`

**`description`** Function to generate a random decimals in range (0, max)

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `any` |

#### Returns

`number`

#### Defined in

[src/subgraph/Base.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/0de1592/src/subgraph/Base.ts#L46)
