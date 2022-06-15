[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/factories/SavingsAccountEthUtils\_\_factory](../modules/wrappers_factories_SavingsAccountEthUtils__factory.md) / SavingsAccountEthUtils\_\_factory

# Class: SavingsAccountEthUtils\_\_factory

[wrappers/factories/SavingsAccountEthUtils__factory](../modules/wrappers_factories_SavingsAccountEthUtils__factory.md).SavingsAccountEthUtils__factory

## Hierarchy

- `ContractFactory`

  ↳ **`SavingsAccountEthUtils__factory`**

## Table of contents

### Constructors

- [constructor](wrappers_factories_SavingsAccountEthUtils__factory.SavingsAccountEthUtils__factory.md#constructor)

### Properties

- [bytecode](wrappers_factories_SavingsAccountEthUtils__factory.SavingsAccountEthUtils__factory.md#bytecode)
- [interface](wrappers_factories_SavingsAccountEthUtils__factory.SavingsAccountEthUtils__factory.md#interface)
- [signer](wrappers_factories_SavingsAccountEthUtils__factory.SavingsAccountEthUtils__factory.md#signer)

### Methods

- [attach](wrappers_factories_SavingsAccountEthUtils__factory.SavingsAccountEthUtils__factory.md#attach)
- [connect](wrappers_factories_SavingsAccountEthUtils__factory.SavingsAccountEthUtils__factory.md#connect)
- [deploy](wrappers_factories_SavingsAccountEthUtils__factory.SavingsAccountEthUtils__factory.md#deploy)
- [getDeployTransaction](wrappers_factories_SavingsAccountEthUtils__factory.SavingsAccountEthUtils__factory.md#getdeploytransaction)
- [connect](wrappers_factories_SavingsAccountEthUtils__factory.SavingsAccountEthUtils__factory.md#connect)
- [fromSolidity](wrappers_factories_SavingsAccountEthUtils__factory.SavingsAccountEthUtils__factory.md#fromsolidity)
- [getContract](wrappers_factories_SavingsAccountEthUtils__factory.SavingsAccountEthUtils__factory.md#getcontract)
- [getContractAddress](wrappers_factories_SavingsAccountEthUtils__factory.SavingsAccountEthUtils__factory.md#getcontractaddress)
- [getInterface](wrappers_factories_SavingsAccountEthUtils__factory.SavingsAccountEthUtils__factory.md#getinterface)

## Constructors

### constructor

• **new SavingsAccountEthUtils__factory**(`signer?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer?` | `Signer` |

#### Overrides

ContractFactory.constructor

#### Defined in

[src/wrappers/factories/SavingsAccountEthUtils__factory.ts:11](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/factories/SavingsAccountEthUtils__factory.ts#L11)

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

▸ **attach**(`address`): [`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)

#### Overrides

ContractFactory.attach

#### Defined in

[src/wrappers/factories/SavingsAccountEthUtils__factory.ts:29](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/factories/SavingsAccountEthUtils__factory.ts#L29)

___

### connect

▸ **connect**(`signer`): [`SavingsAccountEthUtils__factory`](wrappers_factories_SavingsAccountEthUtils__factory.SavingsAccountEthUtils__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`SavingsAccountEthUtils__factory`](wrappers_factories_SavingsAccountEthUtils__factory.SavingsAccountEthUtils__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

[src/wrappers/factories/SavingsAccountEthUtils__factory.ts:32](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/factories/SavingsAccountEthUtils__factory.ts#L32)

___

### deploy

▸ **deploy**(`_weth`, `_savingsAccount`, `overrides?`): `Promise`<[`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_weth` | `string` |
| `_savingsAccount` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

[src/wrappers/factories/SavingsAccountEthUtils__factory.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/factories/SavingsAccountEthUtils__factory.ts#L15)

___

### getDeployTransaction

▸ **getDeployTransaction**(`_weth`, `_savingsAccount`, `overrides?`): `TransactionRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_weth` | `string` |
| `_savingsAccount` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`TransactionRequest`

#### Overrides

ContractFactory.getDeployTransaction

#### Defined in

[src/wrappers/factories/SavingsAccountEthUtils__factory.ts:22](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/factories/SavingsAccountEthUtils__factory.ts#L22)

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`SavingsAccountEthUtils`](wrappers_SavingsAccountEthUtils.SavingsAccountEthUtils.md)

#### Defined in

[src/wrappers/factories/SavingsAccountEthUtils__factory.ts:35](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/factories/SavingsAccountEthUtils__factory.ts#L35)

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
