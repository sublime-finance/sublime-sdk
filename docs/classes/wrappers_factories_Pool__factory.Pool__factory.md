[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/factories/Pool\_\_factory](../modules/wrappers_factories_Pool__factory.md) / Pool\_\_factory

# Class: Pool\_\_factory

[wrappers/factories/Pool__factory](../modules/wrappers_factories_Pool__factory.md).Pool__factory

## Hierarchy

- `ContractFactory`

  ↳ **`Pool__factory`**

## Table of contents

### Constructors

- [constructor](wrappers_factories_Pool__factory.Pool__factory.md#constructor)

### Properties

- [bytecode](wrappers_factories_Pool__factory.Pool__factory.md#bytecode)
- [interface](wrappers_factories_Pool__factory.Pool__factory.md#interface)
- [signer](wrappers_factories_Pool__factory.Pool__factory.md#signer)

### Methods

- [attach](wrappers_factories_Pool__factory.Pool__factory.md#attach)
- [connect](wrappers_factories_Pool__factory.Pool__factory.md#connect)
- [deploy](wrappers_factories_Pool__factory.Pool__factory.md#deploy)
- [getDeployTransaction](wrappers_factories_Pool__factory.Pool__factory.md#getdeploytransaction)
- [connect](wrappers_factories_Pool__factory.Pool__factory.md#connect)
- [fromSolidity](wrappers_factories_Pool__factory.Pool__factory.md#fromsolidity)
- [getContract](wrappers_factories_Pool__factory.Pool__factory.md#getcontract)
- [getContractAddress](wrappers_factories_Pool__factory.Pool__factory.md#getcontractaddress)
- [getInterface](wrappers_factories_Pool__factory.Pool__factory.md#getinterface)

## Constructors

### constructor

• **new Pool__factory**(`signer?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer?` | `Signer` |

#### Overrides

ContractFactory.constructor

#### Defined in

[src/wrappers/factories/Pool__factory.ts:11](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/factories/Pool__factory.ts#L11)

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

▸ **attach**(`address`): [`Pool`](wrappers_Pool.Pool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`Pool`](wrappers_Pool.Pool.md)

#### Overrides

ContractFactory.attach

#### Defined in

[src/wrappers/factories/Pool__factory.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/factories/Pool__factory.ts#L33)

___

### connect

▸ **connect**(`signer`): [`Pool__factory`](wrappers_factories_Pool__factory.Pool__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`Pool__factory`](wrappers_factories_Pool__factory.Pool__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

[src/wrappers/factories/Pool__factory.ts:36](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/factories/Pool__factory.ts#L36)

___

### deploy

▸ **deploy**(`_priceOracle`, `_savingsAccount`, `_repaymentImpl`, `_poolFactory`, `overrides?`): `Promise`<[`Pool`](wrappers_Pool.Pool.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_priceOracle` | `string` |
| `_savingsAccount` | `string` |
| `_repaymentImpl` | `string` |
| `_poolFactory` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`Pool`](wrappers_Pool.Pool.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

[src/wrappers/factories/Pool__factory.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/factories/Pool__factory.ts#L15)

___

### getDeployTransaction

▸ **getDeployTransaction**(`_priceOracle`, `_savingsAccount`, `_repaymentImpl`, `_poolFactory`, `overrides?`): `TransactionRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_priceOracle` | `string` |
| `_savingsAccount` | `string` |
| `_repaymentImpl` | `string` |
| `_poolFactory` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`TransactionRequest`

#### Overrides

ContractFactory.getDeployTransaction

#### Defined in

[src/wrappers/factories/Pool__factory.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/factories/Pool__factory.ts#L24)

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`Pool`](wrappers_Pool.Pool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`Pool`](wrappers_Pool.Pool.md)

#### Defined in

[src/wrappers/factories/Pool__factory.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/factories/Pool__factory.ts#L39)

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
