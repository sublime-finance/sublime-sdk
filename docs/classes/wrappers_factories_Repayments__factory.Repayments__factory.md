[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/factories/Repayments\_\_factory](../modules/wrappers_factories_Repayments__factory.md) / Repayments\_\_factory

# Class: Repayments\_\_factory

[wrappers/factories/Repayments__factory](../modules/wrappers_factories_Repayments__factory.md).Repayments__factory

## Hierarchy

- `ContractFactory`

  ↳ **`Repayments__factory`**

## Table of contents

### Constructors

- [constructor](wrappers_factories_Repayments__factory.Repayments__factory.md#constructor)

### Properties

- [bytecode](wrappers_factories_Repayments__factory.Repayments__factory.md#bytecode)
- [interface](wrappers_factories_Repayments__factory.Repayments__factory.md#interface)
- [signer](wrappers_factories_Repayments__factory.Repayments__factory.md#signer)

### Methods

- [attach](wrappers_factories_Repayments__factory.Repayments__factory.md#attach)
- [connect](wrappers_factories_Repayments__factory.Repayments__factory.md#connect)
- [deploy](wrappers_factories_Repayments__factory.Repayments__factory.md#deploy)
- [getDeployTransaction](wrappers_factories_Repayments__factory.Repayments__factory.md#getdeploytransaction)
- [connect](wrappers_factories_Repayments__factory.Repayments__factory.md#connect)
- [fromSolidity](wrappers_factories_Repayments__factory.Repayments__factory.md#fromsolidity)
- [getContract](wrappers_factories_Repayments__factory.Repayments__factory.md#getcontract)
- [getContractAddress](wrappers_factories_Repayments__factory.Repayments__factory.md#getcontractaddress)
- [getInterface](wrappers_factories_Repayments__factory.Repayments__factory.md#getinterface)

## Constructors

### constructor

• **new Repayments__factory**(`signer?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer?` | `Signer` |

#### Overrides

ContractFactory.constructor

#### Defined in

[src/wrappers/factories/Repayments__factory.ts:11](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/factories/Repayments__factory.ts#L11)

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

▸ **attach**(`address`): [`Repayments`](wrappers_Repayments.Repayments.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`Repayments`](wrappers_Repayments.Repayments.md)

#### Overrides

ContractFactory.attach

#### Defined in

[src/wrappers/factories/Repayments__factory.ts:21](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/factories/Repayments__factory.ts#L21)

___

### connect

▸ **connect**(`signer`): [`Repayments__factory`](wrappers_factories_Repayments__factory.Repayments__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`Repayments__factory`](wrappers_factories_Repayments__factory.Repayments__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

[src/wrappers/factories/Repayments__factory.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/factories/Repayments__factory.ts#L24)

___

### deploy

▸ **deploy**(`overrides?`): `Promise`<[`Repayments`](wrappers_Repayments.Repayments.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`Repayments`](wrappers_Repayments.Repayments.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

[src/wrappers/factories/Repayments__factory.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/factories/Repayments__factory.ts#L15)

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

[src/wrappers/factories/Repayments__factory.ts:18](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/factories/Repayments__factory.ts#L18)

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`Repayments`](wrappers_Repayments.Repayments.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`Repayments`](wrappers_Repayments.Repayments.md)

#### Defined in

[src/wrappers/factories/Repayments__factory.ts:27](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/factories/Repayments__factory.ts#L27)

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
