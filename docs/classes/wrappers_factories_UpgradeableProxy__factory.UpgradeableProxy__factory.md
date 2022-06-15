[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/factories/UpgradeableProxy\_\_factory](../modules/wrappers_factories_UpgradeableProxy__factory.md) / UpgradeableProxy\_\_factory

# Class: UpgradeableProxy\_\_factory

[wrappers/factories/UpgradeableProxy__factory](../modules/wrappers_factories_UpgradeableProxy__factory.md).UpgradeableProxy__factory

## Hierarchy

- `ContractFactory`

  ↳ **`UpgradeableProxy__factory`**

## Table of contents

### Constructors

- [constructor](wrappers_factories_UpgradeableProxy__factory.UpgradeableProxy__factory.md#constructor)

### Properties

- [bytecode](wrappers_factories_UpgradeableProxy__factory.UpgradeableProxy__factory.md#bytecode)
- [interface](wrappers_factories_UpgradeableProxy__factory.UpgradeableProxy__factory.md#interface)
- [signer](wrappers_factories_UpgradeableProxy__factory.UpgradeableProxy__factory.md#signer)

### Methods

- [attach](wrappers_factories_UpgradeableProxy__factory.UpgradeableProxy__factory.md#attach)
- [connect](wrappers_factories_UpgradeableProxy__factory.UpgradeableProxy__factory.md#connect)
- [deploy](wrappers_factories_UpgradeableProxy__factory.UpgradeableProxy__factory.md#deploy)
- [getDeployTransaction](wrappers_factories_UpgradeableProxy__factory.UpgradeableProxy__factory.md#getdeploytransaction)
- [connect](wrappers_factories_UpgradeableProxy__factory.UpgradeableProxy__factory.md#connect)
- [fromSolidity](wrappers_factories_UpgradeableProxy__factory.UpgradeableProxy__factory.md#fromsolidity)
- [getContract](wrappers_factories_UpgradeableProxy__factory.UpgradeableProxy__factory.md#getcontract)
- [getContractAddress](wrappers_factories_UpgradeableProxy__factory.UpgradeableProxy__factory.md#getcontractaddress)
- [getInterface](wrappers_factories_UpgradeableProxy__factory.UpgradeableProxy__factory.md#getinterface)

## Constructors

### constructor

• **new UpgradeableProxy__factory**(`signer?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer?` | `Signer` |

#### Overrides

ContractFactory.constructor

#### Defined in

[src/wrappers/factories/UpgradeableProxy__factory.ts:11](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/factories/UpgradeableProxy__factory.ts#L11)

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

▸ **attach**(`address`): [`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)

#### Overrides

ContractFactory.attach

#### Defined in

[src/wrappers/factories/UpgradeableProxy__factory.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/factories/UpgradeableProxy__factory.ts#L25)

___

### connect

▸ **connect**(`signer`): [`UpgradeableProxy__factory`](wrappers_factories_UpgradeableProxy__factory.UpgradeableProxy__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`UpgradeableProxy__factory`](wrappers_factories_UpgradeableProxy__factory.UpgradeableProxy__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

[src/wrappers/factories/UpgradeableProxy__factory.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/factories/UpgradeableProxy__factory.ts#L28)

___

### deploy

▸ **deploy**(`_logic`, `_data`, `overrides?`): `Promise`<[`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_logic` | `string` |
| `_data` | `BytesLike` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

[src/wrappers/factories/UpgradeableProxy__factory.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/factories/UpgradeableProxy__factory.ts#L15)

___

### getDeployTransaction

▸ **getDeployTransaction**(`_logic`, `_data`, `overrides?`): `TransactionRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_logic` | `string` |
| `_data` | `BytesLike` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`TransactionRequest`

#### Overrides

ContractFactory.getDeployTransaction

#### Defined in

[src/wrappers/factories/UpgradeableProxy__factory.ts:18](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/factories/UpgradeableProxy__factory.ts#L18)

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`UpgradeableProxy`](wrappers_UpgradeableProxy.UpgradeableProxy.md)

#### Defined in

[src/wrappers/factories/UpgradeableProxy__factory.ts:31](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/factories/UpgradeableProxy__factory.ts#L31)

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
