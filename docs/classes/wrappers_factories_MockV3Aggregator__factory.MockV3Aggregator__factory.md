[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/factories/MockV3Aggregator\_\_factory](../modules/wrappers_factories_MockV3Aggregator__factory.md) / MockV3Aggregator\_\_factory

# Class: MockV3Aggregator\_\_factory

[wrappers/factories/MockV3Aggregator__factory](../modules/wrappers_factories_MockV3Aggregator__factory.md).MockV3Aggregator__factory

## Hierarchy

- `ContractFactory`

  ↳ **`MockV3Aggregator__factory`**

## Table of contents

### Constructors

- [constructor](wrappers_factories_MockV3Aggregator__factory.MockV3Aggregator__factory.md#constructor)

### Properties

- [bytecode](wrappers_factories_MockV3Aggregator__factory.MockV3Aggregator__factory.md#bytecode)
- [interface](wrappers_factories_MockV3Aggregator__factory.MockV3Aggregator__factory.md#interface)
- [signer](wrappers_factories_MockV3Aggregator__factory.MockV3Aggregator__factory.md#signer)

### Methods

- [attach](wrappers_factories_MockV3Aggregator__factory.MockV3Aggregator__factory.md#attach)
- [connect](wrappers_factories_MockV3Aggregator__factory.MockV3Aggregator__factory.md#connect)
- [deploy](wrappers_factories_MockV3Aggregator__factory.MockV3Aggregator__factory.md#deploy)
- [getDeployTransaction](wrappers_factories_MockV3Aggregator__factory.MockV3Aggregator__factory.md#getdeploytransaction)
- [connect](wrappers_factories_MockV3Aggregator__factory.MockV3Aggregator__factory.md#connect)
- [fromSolidity](wrappers_factories_MockV3Aggregator__factory.MockV3Aggregator__factory.md#fromsolidity)
- [getContract](wrappers_factories_MockV3Aggregator__factory.MockV3Aggregator__factory.md#getcontract)
- [getContractAddress](wrappers_factories_MockV3Aggregator__factory.MockV3Aggregator__factory.md#getcontractaddress)
- [getInterface](wrappers_factories_MockV3Aggregator__factory.MockV3Aggregator__factory.md#getinterface)

## Constructors

### constructor

• **new MockV3Aggregator__factory**(`signer?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer?` | `Signer` |

#### Overrides

ContractFactory.constructor

#### Defined in

[src/wrappers/factories/MockV3Aggregator__factory.ts:11](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/factories/MockV3Aggregator__factory.ts#L11)

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

▸ **attach**(`address`): [`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)

#### Overrides

ContractFactory.attach

#### Defined in

[src/wrappers/factories/MockV3Aggregator__factory.ts:29](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/factories/MockV3Aggregator__factory.ts#L29)

___

### connect

▸ **connect**(`signer`): [`MockV3Aggregator__factory`](wrappers_factories_MockV3Aggregator__factory.MockV3Aggregator__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`MockV3Aggregator__factory`](wrappers_factories_MockV3Aggregator__factory.MockV3Aggregator__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

[src/wrappers/factories/MockV3Aggregator__factory.ts:32](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/factories/MockV3Aggregator__factory.ts#L32)

___

### deploy

▸ **deploy**(`_decimals`, `_initialAnswer`, `overrides?`): `Promise`<[`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_decimals` | `BigNumberish` |
| `_initialAnswer` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

[src/wrappers/factories/MockV3Aggregator__factory.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/factories/MockV3Aggregator__factory.ts#L15)

___

### getDeployTransaction

▸ **getDeployTransaction**(`_decimals`, `_initialAnswer`, `overrides?`): `TransactionRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_decimals` | `BigNumberish` |
| `_initialAnswer` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`TransactionRequest`

#### Overrides

ContractFactory.getDeployTransaction

#### Defined in

[src/wrappers/factories/MockV3Aggregator__factory.ts:22](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/factories/MockV3Aggregator__factory.ts#L22)

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)

#### Defined in

[src/wrappers/factories/MockV3Aggregator__factory.ts:35](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/factories/MockV3Aggregator__factory.ts#L35)

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
