[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/factories/PooledCreditLine\_\_factory](../modules/wrappers_factories_PooledCreditLine__factory.md) / PooledCreditLine\_\_factory

# Class: PooledCreditLine\_\_factory

[wrappers/factories/PooledCreditLine__factory](../modules/wrappers_factories_PooledCreditLine__factory.md).PooledCreditLine__factory

## Hierarchy

- `ContractFactory`

  ↳ **`PooledCreditLine__factory`**

## Table of contents

### Constructors

- [constructor](wrappers_factories_PooledCreditLine__factory.PooledCreditLine__factory.md#constructor)

### Properties

- [bytecode](wrappers_factories_PooledCreditLine__factory.PooledCreditLine__factory.md#bytecode)
- [interface](wrappers_factories_PooledCreditLine__factory.PooledCreditLine__factory.md#interface)
- [signer](wrappers_factories_PooledCreditLine__factory.PooledCreditLine__factory.md#signer)

### Methods

- [attach](wrappers_factories_PooledCreditLine__factory.PooledCreditLine__factory.md#attach)
- [connect](wrappers_factories_PooledCreditLine__factory.PooledCreditLine__factory.md#connect)
- [deploy](wrappers_factories_PooledCreditLine__factory.PooledCreditLine__factory.md#deploy)
- [getDeployTransaction](wrappers_factories_PooledCreditLine__factory.PooledCreditLine__factory.md#getdeploytransaction)
- [connect](wrappers_factories_PooledCreditLine__factory.PooledCreditLine__factory.md#connect)
- [fromSolidity](wrappers_factories_PooledCreditLine__factory.PooledCreditLine__factory.md#fromsolidity)
- [getContract](wrappers_factories_PooledCreditLine__factory.PooledCreditLine__factory.md#getcontract)
- [getContractAddress](wrappers_factories_PooledCreditLine__factory.PooledCreditLine__factory.md#getcontractaddress)
- [getInterface](wrappers_factories_PooledCreditLine__factory.PooledCreditLine__factory.md#getinterface)

## Constructors

### constructor

• **new PooledCreditLine__factory**(`signer?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer?` | `Signer` |

#### Overrides

ContractFactory.constructor

#### Defined in

[src/wrappers/factories/PooledCreditLine__factory.ts:11](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/factories/PooledCreditLine__factory.ts#L11)

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

▸ **attach**(`address`): [`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)

#### Overrides

ContractFactory.attach

#### Defined in

[src/wrappers/factories/PooledCreditLine__factory.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/factories/PooledCreditLine__factory.ts#L57)

___

### connect

▸ **connect**(`signer`): [`PooledCreditLine__factory`](wrappers_factories_PooledCreditLine__factory.PooledCreditLine__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`PooledCreditLine__factory`](wrappers_factories_PooledCreditLine__factory.PooledCreditLine__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

[src/wrappers/factories/PooledCreditLine__factory.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/factories/PooledCreditLine__factory.ts#L60)

___

### deploy

▸ **deploy**(`_lenderPool`, `_usdc`, `_priceOracle`, `_savingsAccount`, `_strategyRegistry`, `_verification`, `_maximumProtocolFeeFraction`, `overrides?`): `Promise`<[`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_lenderPool` | `string` |
| `_usdc` | `string` |
| `_priceOracle` | `string` |
| `_savingsAccount` | `string` |
| `_strategyRegistry` | `string` |
| `_verification` | `string` |
| `_maximumProtocolFeeFraction` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

[src/wrappers/factories/PooledCreditLine__factory.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/factories/PooledCreditLine__factory.ts#L15)

___

### getDeployTransaction

▸ **getDeployTransaction**(`_lenderPool`, `_usdc`, `_priceOracle`, `_savingsAccount`, `_strategyRegistry`, `_verification`, `_maximumProtocolFeeFraction`, `overrides?`): `TransactionRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_lenderPool` | `string` |
| `_usdc` | `string` |
| `_priceOracle` | `string` |
| `_savingsAccount` | `string` |
| `_strategyRegistry` | `string` |
| `_verification` | `string` |
| `_maximumProtocolFeeFraction` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`TransactionRequest`

#### Overrides

ContractFactory.getDeployTransaction

#### Defined in

[src/wrappers/factories/PooledCreditLine__factory.ts:36](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/factories/PooledCreditLine__factory.ts#L36)

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)

#### Defined in

[src/wrappers/factories/PooledCreditLine__factory.ts:63](https://github.com/sublime-finance/sublime-sdk/blob/691c55a/src/wrappers/factories/PooledCreditLine__factory.ts#L63)

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
