[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/factories/NoYield\_\_factory](../modules/wrappers_factories_NoYield__factory.md) / NoYield\_\_factory

# Class: NoYield\_\_factory

[wrappers/factories/NoYield__factory](../modules/wrappers_factories_NoYield__factory.md).NoYield__factory

## Hierarchy

- `ContractFactory`

  ↳ **`NoYield__factory`**

## Table of contents

### Constructors

- [constructor](wrappers_factories_NoYield__factory.NoYield__factory.md#constructor)

### Properties

- [bytecode](wrappers_factories_NoYield__factory.NoYield__factory.md#bytecode)
- [interface](wrappers_factories_NoYield__factory.NoYield__factory.md#interface)
- [signer](wrappers_factories_NoYield__factory.NoYield__factory.md#signer)

### Methods

- [attach](wrappers_factories_NoYield__factory.NoYield__factory.md#attach)
- [connect](wrappers_factories_NoYield__factory.NoYield__factory.md#connect)
- [deploy](wrappers_factories_NoYield__factory.NoYield__factory.md#deploy)
- [getDeployTransaction](wrappers_factories_NoYield__factory.NoYield__factory.md#getdeploytransaction)
- [connect](wrappers_factories_NoYield__factory.NoYield__factory.md#connect)
- [fromSolidity](wrappers_factories_NoYield__factory.NoYield__factory.md#fromsolidity)
- [getContract](wrappers_factories_NoYield__factory.NoYield__factory.md#getcontract)
- [getContractAddress](wrappers_factories_NoYield__factory.NoYield__factory.md#getcontractaddress)
- [getInterface](wrappers_factories_NoYield__factory.NoYield__factory.md#getinterface)

## Constructors

### constructor

• **new NoYield__factory**(`signer?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer?` | `Signer` |

#### Overrides

ContractFactory.constructor

#### Defined in

[src/wrappers/factories/NoYield__factory.ts:11](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/factories/NoYield__factory.ts#L11)

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

▸ **attach**(`address`): [`NoYield`](wrappers_NoYield.NoYield.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`NoYield`](wrappers_NoYield.NoYield.md)

#### Overrides

ContractFactory.attach

#### Defined in

[src/wrappers/factories/NoYield__factory.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/factories/NoYield__factory.ts#L25)

___

### connect

▸ **connect**(`signer`): [`NoYield__factory`](wrappers_factories_NoYield__factory.NoYield__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`NoYield__factory`](wrappers_factories_NoYield__factory.NoYield__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

[src/wrappers/factories/NoYield__factory.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/factories/NoYield__factory.ts#L28)

___

### deploy

▸ **deploy**(`_treasury`, `_savingsAccount`, `overrides?`): `Promise`<[`NoYield`](wrappers_NoYield.NoYield.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_treasury` | `string` |
| `_savingsAccount` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`NoYield`](wrappers_NoYield.NoYield.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

[src/wrappers/factories/NoYield__factory.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/factories/NoYield__factory.ts#L15)

___

### getDeployTransaction

▸ **getDeployTransaction**(`_treasury`, `_savingsAccount`, `overrides?`): `TransactionRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_treasury` | `string` |
| `_savingsAccount` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`TransactionRequest`

#### Overrides

ContractFactory.getDeployTransaction

#### Defined in

[src/wrappers/factories/NoYield__factory.ts:18](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/factories/NoYield__factory.ts#L18)

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`NoYield`](wrappers_NoYield.NoYield.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`NoYield`](wrappers_NoYield.NoYield.md)

#### Defined in

[src/wrappers/factories/NoYield__factory.ts:31](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/factories/NoYield__factory.ts#L31)

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
