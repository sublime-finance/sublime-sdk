[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/factories/TransparentUpgradeableProxy\_\_factory](../modules/wrappers_factories_TransparentUpgradeableProxy__factory.md) / TransparentUpgradeableProxy\_\_factory

# Class: TransparentUpgradeableProxy\_\_factory

[wrappers/factories/TransparentUpgradeableProxy__factory](../modules/wrappers_factories_TransparentUpgradeableProxy__factory.md).TransparentUpgradeableProxy__factory

## Hierarchy

- `ContractFactory`

  ↳ **`TransparentUpgradeableProxy__factory`**

## Table of contents

### Constructors

- [constructor](wrappers_factories_TransparentUpgradeableProxy__factory.TransparentUpgradeableProxy__factory.md#constructor)

### Properties

- [bytecode](wrappers_factories_TransparentUpgradeableProxy__factory.TransparentUpgradeableProxy__factory.md#bytecode)
- [interface](wrappers_factories_TransparentUpgradeableProxy__factory.TransparentUpgradeableProxy__factory.md#interface)
- [signer](wrappers_factories_TransparentUpgradeableProxy__factory.TransparentUpgradeableProxy__factory.md#signer)

### Methods

- [attach](wrappers_factories_TransparentUpgradeableProxy__factory.TransparentUpgradeableProxy__factory.md#attach)
- [connect](wrappers_factories_TransparentUpgradeableProxy__factory.TransparentUpgradeableProxy__factory.md#connect)
- [deploy](wrappers_factories_TransparentUpgradeableProxy__factory.TransparentUpgradeableProxy__factory.md#deploy)
- [getDeployTransaction](wrappers_factories_TransparentUpgradeableProxy__factory.TransparentUpgradeableProxy__factory.md#getdeploytransaction)
- [connect](wrappers_factories_TransparentUpgradeableProxy__factory.TransparentUpgradeableProxy__factory.md#connect)
- [fromSolidity](wrappers_factories_TransparentUpgradeableProxy__factory.TransparentUpgradeableProxy__factory.md#fromsolidity)
- [getContract](wrappers_factories_TransparentUpgradeableProxy__factory.TransparentUpgradeableProxy__factory.md#getcontract)
- [getContractAddress](wrappers_factories_TransparentUpgradeableProxy__factory.TransparentUpgradeableProxy__factory.md#getcontractaddress)
- [getInterface](wrappers_factories_TransparentUpgradeableProxy__factory.TransparentUpgradeableProxy__factory.md#getinterface)

## Constructors

### constructor

• **new TransparentUpgradeableProxy__factory**(`signer?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer?` | `Signer` |

#### Overrides

ContractFactory.constructor

#### Defined in

[src/wrappers/factories/TransparentUpgradeableProxy__factory.ts:11](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/factories/TransparentUpgradeableProxy__factory.ts#L11)

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

▸ **attach**(`address`): [`TransparentUpgradeableProxy`](wrappers_TransparentUpgradeableProxy.TransparentUpgradeableProxy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`TransparentUpgradeableProxy`](wrappers_TransparentUpgradeableProxy.TransparentUpgradeableProxy.md)

#### Overrides

ContractFactory.attach

#### Defined in

[src/wrappers/factories/TransparentUpgradeableProxy__factory.ts:31](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/factories/TransparentUpgradeableProxy__factory.ts#L31)

___

### connect

▸ **connect**(`signer`): [`TransparentUpgradeableProxy__factory`](wrappers_factories_TransparentUpgradeableProxy__factory.TransparentUpgradeableProxy__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`TransparentUpgradeableProxy__factory`](wrappers_factories_TransparentUpgradeableProxy__factory.TransparentUpgradeableProxy__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

[src/wrappers/factories/TransparentUpgradeableProxy__factory.ts:34](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/factories/TransparentUpgradeableProxy__factory.ts#L34)

___

### deploy

▸ **deploy**(`_logic`, `admin_`, `_data`, `overrides?`): `Promise`<[`TransparentUpgradeableProxy`](wrappers_TransparentUpgradeableProxy.TransparentUpgradeableProxy.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_logic` | `string` |
| `admin_` | `string` |
| `_data` | `BytesLike` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`TransparentUpgradeableProxy`](wrappers_TransparentUpgradeableProxy.TransparentUpgradeableProxy.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

[src/wrappers/factories/TransparentUpgradeableProxy__factory.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/factories/TransparentUpgradeableProxy__factory.ts#L15)

___

### getDeployTransaction

▸ **getDeployTransaction**(`_logic`, `admin_`, `_data`, `overrides?`): `TransactionRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_logic` | `string` |
| `admin_` | `string` |
| `_data` | `BytesLike` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`TransactionRequest`

#### Overrides

ContractFactory.getDeployTransaction

#### Defined in

[src/wrappers/factories/TransparentUpgradeableProxy__factory.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/factories/TransparentUpgradeableProxy__factory.ts#L23)

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`TransparentUpgradeableProxy`](wrappers_TransparentUpgradeableProxy.TransparentUpgradeableProxy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`TransparentUpgradeableProxy`](wrappers_TransparentUpgradeableProxy.TransparentUpgradeableProxy.md)

#### Defined in

[src/wrappers/factories/TransparentUpgradeableProxy__factory.ts:37](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/factories/TransparentUpgradeableProxy__factory.ts#L37)

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
