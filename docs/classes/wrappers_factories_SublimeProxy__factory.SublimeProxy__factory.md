[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/factories/SublimeProxy\_\_factory](../modules/wrappers_factories_SublimeProxy__factory.md) / SublimeProxy\_\_factory

# Class: SublimeProxy\_\_factory

[wrappers/factories/SublimeProxy__factory](../modules/wrappers_factories_SublimeProxy__factory.md).SublimeProxy__factory

## Hierarchy

- `ContractFactory`

  ↳ **`SublimeProxy__factory`**

## Table of contents

### Constructors

- [constructor](wrappers_factories_SublimeProxy__factory.SublimeProxy__factory.md#constructor)

### Properties

- [bytecode](wrappers_factories_SublimeProxy__factory.SublimeProxy__factory.md#bytecode)
- [interface](wrappers_factories_SublimeProxy__factory.SublimeProxy__factory.md#interface)
- [signer](wrappers_factories_SublimeProxy__factory.SublimeProxy__factory.md#signer)

### Methods

- [attach](wrappers_factories_SublimeProxy__factory.SublimeProxy__factory.md#attach)
- [connect](wrappers_factories_SublimeProxy__factory.SublimeProxy__factory.md#connect)
- [deploy](wrappers_factories_SublimeProxy__factory.SublimeProxy__factory.md#deploy)
- [getDeployTransaction](wrappers_factories_SublimeProxy__factory.SublimeProxy__factory.md#getdeploytransaction)
- [connect](wrappers_factories_SublimeProxy__factory.SublimeProxy__factory.md#connect)
- [fromSolidity](wrappers_factories_SublimeProxy__factory.SublimeProxy__factory.md#fromsolidity)
- [getContract](wrappers_factories_SublimeProxy__factory.SublimeProxy__factory.md#getcontract)
- [getContractAddress](wrappers_factories_SublimeProxy__factory.SublimeProxy__factory.md#getcontractaddress)
- [getInterface](wrappers_factories_SublimeProxy__factory.SublimeProxy__factory.md#getinterface)

## Constructors

### constructor

• **new SublimeProxy__factory**(`signer?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer?` | `Signer` |

#### Overrides

ContractFactory.constructor

#### Defined in

[src/wrappers/factories/SublimeProxy__factory.ts:11](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/factories/SublimeProxy__factory.ts#L11)

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

▸ **attach**(`address`): [`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)

#### Overrides

ContractFactory.attach

#### Defined in

[src/wrappers/factories/SublimeProxy__factory.ts:31](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/factories/SublimeProxy__factory.ts#L31)

___

### connect

▸ **connect**(`signer`): [`SublimeProxy__factory`](wrappers_factories_SublimeProxy__factory.SublimeProxy__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`SublimeProxy__factory`](wrappers_factories_SublimeProxy__factory.SublimeProxy__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

[src/wrappers/factories/SublimeProxy__factory.ts:34](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/factories/SublimeProxy__factory.ts#L34)

___

### deploy

▸ **deploy**(`logic`, `admin`, `data`, `overrides?`): `Promise`<[`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `logic` | `string` |
| `admin` | `string` |
| `data` | `BytesLike` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

[src/wrappers/factories/SublimeProxy__factory.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/factories/SublimeProxy__factory.ts#L15)

___

### getDeployTransaction

▸ **getDeployTransaction**(`logic`, `admin`, `data`, `overrides?`): `TransactionRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `logic` | `string` |
| `admin` | `string` |
| `data` | `BytesLike` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`TransactionRequest`

#### Overrides

ContractFactory.getDeployTransaction

#### Defined in

[src/wrappers/factories/SublimeProxy__factory.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/factories/SublimeProxy__factory.ts#L23)

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`SublimeProxy`](wrappers_SublimeProxy.SublimeProxy.md)

#### Defined in

[src/wrappers/factories/SublimeProxy__factory.ts:37](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/factories/SublimeProxy__factory.ts#L37)

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
