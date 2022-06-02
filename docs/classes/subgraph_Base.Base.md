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
- [verificationApi](subgraph_Base.Base.md#verificationapi)
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

[src/subgraph/Base.ts:35](https://github.com/sublime-finance/sublime-sdk/blob/ca090ee/src/subgraph/Base.ts#L35)

## Properties

### signer

• `Protected` **signer**: `Signer`

**`description`** signer used to sign

#### Defined in

[src/subgraph/Base.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/ca090ee/src/subgraph/Base.ts#L19)

___

### subgraphUrl

• `Protected` **subgraphUrl**: `string`

**`description`** subgraph url for fetching the sublime data

#### Defined in

[src/subgraph/Base.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/ca090ee/src/subgraph/Base.ts#L14)

___

### sublimeAddresses

• `Protected` **sublimeAddresses**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

**`description`** sublime config. (Contains all addresses relevant to sublime ecosystem)

#### Defined in

[src/subgraph/Base.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/ca090ee/src/subgraph/Base.ts#L33)

___

### tokenManager

• `Protected` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

**`description`** instance of token manager class that caches and retreives token data

#### Defined in

[src/subgraph/Base.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/ca090ee/src/subgraph/Base.ts#L24)

___

### verificationApi

• `Protected` **verificationApi**: [`VerificationAPI`](api_verification.VerificationAPI.md)

#### Defined in

[src/subgraph/Base.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/ca090ee/src/subgraph/Base.ts#L28)

___

### yieldApi

• `Protected` **yieldApi**: [`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md)

#### Defined in

[src/subgraph/Base.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/ca090ee/src/subgraph/Base.ts#L26)

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

[src/subgraph/Base.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/ca090ee/src/subgraph/Base.ts#L58)

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

[src/subgraph/Base.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/ca090ee/src/subgraph/Base.ts#L50)
