[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/factories/LenderPool\_\_factory](../modules/wrappers_factories_LenderPool__factory.md) / LenderPool\_\_factory

# Class: LenderPool\_\_factory

[wrappers/factories/LenderPool__factory](../modules/wrappers_factories_LenderPool__factory.md).LenderPool__factory

## Hierarchy

- `ContractFactory`

  ↳ **`LenderPool__factory`**

## Table of contents

### Constructors

- [constructor](wrappers_factories_LenderPool__factory.LenderPool__factory.md#constructor)

### Properties

- [bytecode](wrappers_factories_LenderPool__factory.LenderPool__factory.md#bytecode)
- [interface](wrappers_factories_LenderPool__factory.LenderPool__factory.md#interface)
- [signer](wrappers_factories_LenderPool__factory.LenderPool__factory.md#signer)

### Methods

- [attach](wrappers_factories_LenderPool__factory.LenderPool__factory.md#attach)
- [connect](wrappers_factories_LenderPool__factory.LenderPool__factory.md#connect)
- [deploy](wrappers_factories_LenderPool__factory.LenderPool__factory.md#deploy)
- [getDeployTransaction](wrappers_factories_LenderPool__factory.LenderPool__factory.md#getdeploytransaction)
- [connect](wrappers_factories_LenderPool__factory.LenderPool__factory.md#connect)
- [fromSolidity](wrappers_factories_LenderPool__factory.LenderPool__factory.md#fromsolidity)
- [getContract](wrappers_factories_LenderPool__factory.LenderPool__factory.md#getcontract)
- [getContractAddress](wrappers_factories_LenderPool__factory.LenderPool__factory.md#getcontractaddress)
- [getInterface](wrappers_factories_LenderPool__factory.LenderPool__factory.md#getinterface)

## Constructors

### constructor

• **new LenderPool__factory**(`signer?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer?` | `Signer` |

#### Overrides

ContractFactory.constructor

#### Defined in

[src/wrappers/factories/LenderPool__factory.ts:11](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/factories/LenderPool__factory.ts#L11)

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

▸ **attach**(`address`): [`LenderPool`](wrappers_LenderPool.LenderPool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`LenderPool`](wrappers_LenderPool.LenderPool.md)

#### Overrides

ContractFactory.attach

#### Defined in

[src/wrappers/factories/LenderPool__factory.ts:31](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/factories/LenderPool__factory.ts#L31)

___

### connect

▸ **connect**(`signer`): [`LenderPool__factory`](wrappers_factories_LenderPool__factory.LenderPool__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`LenderPool__factory`](wrappers_factories_LenderPool__factory.LenderPool__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

[src/wrappers/factories/LenderPool__factory.ts:34](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/factories/LenderPool__factory.ts#L34)

___

### deploy

▸ **deploy**(`_pooledCreditLine`, `_savingsAccount`, `_verification`, `overrides?`): `Promise`<[`LenderPool`](wrappers_LenderPool.LenderPool.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_pooledCreditLine` | `string` |
| `_savingsAccount` | `string` |
| `_verification` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`LenderPool`](wrappers_LenderPool.LenderPool.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

[src/wrappers/factories/LenderPool__factory.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/factories/LenderPool__factory.ts#L15)

___

### getDeployTransaction

▸ **getDeployTransaction**(`_pooledCreditLine`, `_savingsAccount`, `_verification`, `overrides?`): `TransactionRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_pooledCreditLine` | `string` |
| `_savingsAccount` | `string` |
| `_verification` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`TransactionRequest`

#### Overrides

ContractFactory.getDeployTransaction

#### Defined in

[src/wrappers/factories/LenderPool__factory.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/factories/LenderPool__factory.ts#L23)

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`LenderPool`](wrappers_LenderPool.LenderPool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`LenderPool`](wrappers_LenderPool.LenderPool.md)

#### Defined in

[src/wrappers/factories/LenderPool__factory.ts:37](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/factories/LenderPool__factory.ts#L37)

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
