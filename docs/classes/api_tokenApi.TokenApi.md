[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [api/tokenApi](../modules/api_tokenApi.md) / TokenApi

# Class: TokenApi

[api/tokenApi](../modules/api_tokenApi.md).TokenApi

## Table of contents

### Constructors

- [constructor](api_tokenApi.TokenApi.md#constructor)

### Properties

- [signer](api_tokenApi.TokenApi.md#signer)
- [tokenContract](api_tokenApi.TokenApi.md#tokencontract)
- [tokenManager](api_tokenApi.TokenApi.md#tokenmanager)

### Methods

- [IncreaseAllowance](api_tokenApi.TokenApi.md#increaseallowance)
- [\_getBalance](api_tokenApi.TokenApi.md#_getbalance)
- [allowance](api_tokenApi.TokenApi.md#allowance)
- [approve](api_tokenApi.TokenApi.md#approve)
- [getTokenBalance](api_tokenApi.TokenApi.md#gettokenbalance)
- [getUserTokenBalance](api_tokenApi.TokenApi.md#getusertokenbalance)

## Constructors

### constructor

• **new TokenApi**(`signer`, `tokenAddress`, `tokenManager`)

**`description`** if tokenAddress is any invalid token address, the APIs of the class object will fail

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `tokenAddress` | `string` |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |

#### Defined in

[src/api/tokenApi.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/8121c28/src/api/tokenApi.ts#L33)

## Properties

### signer

• `Private` **signer**: `Signer`

**`description`** Signer Object

#### Defined in

[src/api/tokenApi.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/8121c28/src/api/tokenApi.ts#L15)

___

### tokenContract

• `Private` **tokenContract**: `Token`

**`description`** Contract instance for the given token

#### Defined in

[src/api/tokenApi.ts:20](https://github.com/sublime-finance/sublime-sdk/blob/8121c28/src/api/tokenApi.ts#L20)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

**`description`** Instance to update and fetch token metadata

#### Defined in

[src/api/tokenApi.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/8121c28/src/api/tokenApi.ts#L25)

## Methods

### IncreaseAllowance

▸ **IncreaseAllowance**(`to`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Increase Allowance to a another address

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `amount` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/tokenApi.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/8121c28/src/api/tokenApi.ts#L45)

___

### \_getBalance

▸ `Private` **_getBalance**(`user`, `prettified`): `Promise`<`string`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user` | `string` | address whose balance needs to be fetched |
| `prettified` | `any` |  |

#### Returns

`Promise`<`string`\>

Balance of the given address

#### Defined in

[src/api/tokenApi.ts:121](https://github.com/sublime-finance/sublime-sdk/blob/8121c28/src/api/tokenApi.ts#L121)

___

### allowance

▸ **allowance**(`owner`, `spender`, `prettified?`): `Promise`<`string`\>

**`description`** Returns the allowance of spender by owner

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `owner` | `string` | `undefined` |
| `spender` | `string` | `undefined` |
| `prettified` | `boolean` | `false` |

#### Returns

`Promise`<`string`\>

number

#### Defined in

[src/api/tokenApi.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/8121c28/src/api/tokenApi.ts#L84)

___

### approve

▸ **approve**(`to`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Approve Allowance to a another address

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `amount` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/tokenApi.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/8121c28/src/api/tokenApi.ts#L64)

___

### getTokenBalance

▸ **getTokenBalance**(`prettified?`): `Promise`<`string`\>

**`description`** return the current signers token balance.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `prettified` | `boolean` | `true` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/tokenApi.ts:101](https://github.com/sublime-finance/sublime-sdk/blob/8121c28/src/api/tokenApi.ts#L101)

___

### getUserTokenBalance

▸ **getUserTokenBalance**(`user`, `prettified?`): `Promise`<`string`\>

**`description`** return any user token balance

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `user` | `string` | `undefined` |
| `prettified` | `boolean` | `true` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/tokenApi.ts:111](https://github.com/sublime-finance/sublime-sdk/blob/8121c28/src/api/tokenApi.ts#L111)
