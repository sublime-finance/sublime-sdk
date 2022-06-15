[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/factories/CreditLine\_\_factory](../modules/wrappers_factories_CreditLine__factory.md) / CreditLine\_\_factory

# Class: CreditLine\_\_factory

[wrappers/factories/CreditLine__factory](../modules/wrappers_factories_CreditLine__factory.md).CreditLine__factory

## Hierarchy

- `ContractFactory`

  ↳ **`CreditLine__factory`**

## Table of contents

### Constructors

- [constructor](wrappers_factories_CreditLine__factory.CreditLine__factory.md#constructor)

### Properties

- [bytecode](wrappers_factories_CreditLine__factory.CreditLine__factory.md#bytecode)
- [interface](wrappers_factories_CreditLine__factory.CreditLine__factory.md#interface)
- [signer](wrappers_factories_CreditLine__factory.CreditLine__factory.md#signer)

### Methods

- [attach](wrappers_factories_CreditLine__factory.CreditLine__factory.md#attach)
- [connect](wrappers_factories_CreditLine__factory.CreditLine__factory.md#connect)
- [deploy](wrappers_factories_CreditLine__factory.CreditLine__factory.md#deploy)
- [getDeployTransaction](wrappers_factories_CreditLine__factory.CreditLine__factory.md#getdeploytransaction)
- [connect](wrappers_factories_CreditLine__factory.CreditLine__factory.md#connect)
- [fromSolidity](wrappers_factories_CreditLine__factory.CreditLine__factory.md#fromsolidity)
- [getContract](wrappers_factories_CreditLine__factory.CreditLine__factory.md#getcontract)
- [getContractAddress](wrappers_factories_CreditLine__factory.CreditLine__factory.md#getcontractaddress)
- [getInterface](wrappers_factories_CreditLine__factory.CreditLine__factory.md#getinterface)

## Constructors

### constructor

• **new CreditLine__factory**(`signer?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer?` | `Signer` |

#### Overrides

ContractFactory.constructor

#### Defined in

[src/wrappers/factories/CreditLine__factory.ts:11](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/factories/CreditLine__factory.ts#L11)

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

▸ **attach**(`address`): [`CreditLine`](wrappers_CreditLine.CreditLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`CreditLine`](wrappers_CreditLine.CreditLine.md)

#### Overrides

ContractFactory.attach

#### Defined in

[src/wrappers/factories/CreditLine__factory.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/factories/CreditLine__factory.ts#L33)

___

### connect

▸ **connect**(`signer`): [`CreditLine__factory`](wrappers_factories_CreditLine__factory.CreditLine__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`CreditLine__factory`](wrappers_factories_CreditLine__factory.CreditLine__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

[src/wrappers/factories/CreditLine__factory.ts:36](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/factories/CreditLine__factory.ts#L36)

___

### deploy

▸ **deploy**(`_usdc`, `_priceOracle`, `_savingsAccount`, `_strategyRegistry`, `overrides?`): `Promise`<[`CreditLine`](wrappers_CreditLine.CreditLine.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_usdc` | `string` |
| `_priceOracle` | `string` |
| `_savingsAccount` | `string` |
| `_strategyRegistry` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`CreditLine`](wrappers_CreditLine.CreditLine.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

[src/wrappers/factories/CreditLine__factory.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/factories/CreditLine__factory.ts#L15)

___

### getDeployTransaction

▸ **getDeployTransaction**(`_usdc`, `_priceOracle`, `_savingsAccount`, `_strategyRegistry`, `overrides?`): `TransactionRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_usdc` | `string` |
| `_priceOracle` | `string` |
| `_savingsAccount` | `string` |
| `_strategyRegistry` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`TransactionRequest`

#### Overrides

ContractFactory.getDeployTransaction

#### Defined in

[src/wrappers/factories/CreditLine__factory.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/factories/CreditLine__factory.ts#L24)

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`CreditLine`](wrappers_CreditLine.CreditLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`CreditLine`](wrappers_CreditLine.CreditLine.md)

#### Defined in

[src/wrappers/factories/CreditLine__factory.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/factories/CreditLine__factory.ts#L39)

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
