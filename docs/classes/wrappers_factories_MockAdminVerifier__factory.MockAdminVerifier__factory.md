[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/factories/MockAdminVerifier\_\_factory](../modules/wrappers_factories_MockAdminVerifier__factory.md) / MockAdminVerifier\_\_factory

# Class: MockAdminVerifier\_\_factory

[wrappers/factories/MockAdminVerifier__factory](../modules/wrappers_factories_MockAdminVerifier__factory.md).MockAdminVerifier__factory

## Hierarchy

- `ContractFactory`

  ↳ **`MockAdminVerifier__factory`**

## Table of contents

### Constructors

- [constructor](wrappers_factories_MockAdminVerifier__factory.MockAdminVerifier__factory.md#constructor)

### Properties

- [bytecode](wrappers_factories_MockAdminVerifier__factory.MockAdminVerifier__factory.md#bytecode)
- [interface](wrappers_factories_MockAdminVerifier__factory.MockAdminVerifier__factory.md#interface)
- [signer](wrappers_factories_MockAdminVerifier__factory.MockAdminVerifier__factory.md#signer)

### Methods

- [attach](wrappers_factories_MockAdminVerifier__factory.MockAdminVerifier__factory.md#attach)
- [connect](wrappers_factories_MockAdminVerifier__factory.MockAdminVerifier__factory.md#connect)
- [deploy](wrappers_factories_MockAdminVerifier__factory.MockAdminVerifier__factory.md#deploy)
- [getDeployTransaction](wrappers_factories_MockAdminVerifier__factory.MockAdminVerifier__factory.md#getdeploytransaction)
- [connect](wrappers_factories_MockAdminVerifier__factory.MockAdminVerifier__factory.md#connect)
- [fromSolidity](wrappers_factories_MockAdminVerifier__factory.MockAdminVerifier__factory.md#fromsolidity)
- [getContract](wrappers_factories_MockAdminVerifier__factory.MockAdminVerifier__factory.md#getcontract)
- [getContractAddress](wrappers_factories_MockAdminVerifier__factory.MockAdminVerifier__factory.md#getcontractaddress)
- [getInterface](wrappers_factories_MockAdminVerifier__factory.MockAdminVerifier__factory.md#getinterface)

## Constructors

### constructor

• **new MockAdminVerifier__factory**(`signer?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer?` | `Signer` |

#### Overrides

ContractFactory.constructor

#### Defined in

[src/wrappers/factories/MockAdminVerifier__factory.ts:11](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/factories/MockAdminVerifier__factory.ts#L11)

## Properties

### bytecode

• `Readonly` **bytecode**: `string`

#### Inherited from

ContractFactory.bytecode

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:137

___

### interface

• `Readonly` **interface**: `Interface`

#### Inherited from

ContractFactory.interface

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:136

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

ContractFactory.signer

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:138

## Methods

### attach

▸ **attach**(`address`): [`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)

#### Overrides

ContractFactory.attach

#### Defined in

[src/wrappers/factories/MockAdminVerifier__factory.ts:21](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/factories/MockAdminVerifier__factory.ts#L21)

___

### connect

▸ **connect**(`signer`): [`MockAdminVerifier__factory`](wrappers_factories_MockAdminVerifier__factory.MockAdminVerifier__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`MockAdminVerifier__factory`](wrappers_factories_MockAdminVerifier__factory.MockAdminVerifier__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

[src/wrappers/factories/MockAdminVerifier__factory.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/factories/MockAdminVerifier__factory.ts#L24)

___

### deploy

▸ **deploy**(`overrides?`): `Promise`<[`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

[src/wrappers/factories/MockAdminVerifier__factory.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/factories/MockAdminVerifier__factory.ts#L15)

___

### getDeployTransaction

▸ **getDeployTransaction**(`overrides?`): `TransactionRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`TransactionRequest`

#### Overrides

ContractFactory.getDeployTransaction

#### Defined in

[src/wrappers/factories/MockAdminVerifier__factory.ts:18](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/factories/MockAdminVerifier__factory.ts#L18)

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`MockAdminVerifier`](wrappers_MockAdminVerifier.MockAdminVerifier.md)

#### Defined in

[src/wrappers/factories/MockAdminVerifier__factory.ts:27](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/factories/MockAdminVerifier__factory.ts#L27)

___

### fromSolidity

▸ `Static` **fromSolidity**(`compilerOutput`, `signer?`): `ContractFactory`

#### Parameters

| Name | Type |
| :------ | :------ |
| `compilerOutput` | `any` |
| `signer?` | `Signer` |

#### Returns

`ContractFactory`

#### Inherited from

ContractFactory.fromSolidity

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:146

___

### getContract

▸ `Static` **getContract**(`address`, `contractInterface`, `signer?`): `Contract`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `contractInterface` | `ContractInterface` |
| `signer?` | `Signer` |

#### Returns

`Contract`

#### Inherited from

ContractFactory.getContract

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:152

___

### getContractAddress

▸ `Static` **getContractAddress**(`tx`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Object` |
| `tx.from` | `string` |
| `tx.nonce` | `number` \| `BigNumber` \| `BytesLike` |

#### Returns

`string`

#### Inherited from

ContractFactory.getContractAddress

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:148

___

### getInterface

▸ `Static` **getInterface**(`contractInterface`): `Interface`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractInterface` | `ContractInterface` |

#### Returns

`Interface`

#### Inherited from

ContractFactory.getInterface

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:147
