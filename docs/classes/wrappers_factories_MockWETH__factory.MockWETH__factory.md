[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/factories/MockWETH\_\_factory](../modules/wrappers_factories_MockWETH__factory.md) / MockWETH\_\_factory

# Class: MockWETH\_\_factory

[wrappers/factories/MockWETH__factory](../modules/wrappers_factories_MockWETH__factory.md).MockWETH__factory

## Hierarchy

- `ContractFactory`

  ↳ **`MockWETH__factory`**

## Table of contents

### Constructors

- [constructor](wrappers_factories_MockWETH__factory.MockWETH__factory.md#constructor)

### Properties

- [bytecode](wrappers_factories_MockWETH__factory.MockWETH__factory.md#bytecode)
- [interface](wrappers_factories_MockWETH__factory.MockWETH__factory.md#interface)
- [signer](wrappers_factories_MockWETH__factory.MockWETH__factory.md#signer)

### Methods

- [attach](wrappers_factories_MockWETH__factory.MockWETH__factory.md#attach)
- [connect](wrappers_factories_MockWETH__factory.MockWETH__factory.md#connect)
- [deploy](wrappers_factories_MockWETH__factory.MockWETH__factory.md#deploy)
- [getDeployTransaction](wrappers_factories_MockWETH__factory.MockWETH__factory.md#getdeploytransaction)
- [connect](wrappers_factories_MockWETH__factory.MockWETH__factory.md#connect)
- [fromSolidity](wrappers_factories_MockWETH__factory.MockWETH__factory.md#fromsolidity)
- [getContract](wrappers_factories_MockWETH__factory.MockWETH__factory.md#getcontract)
- [getContractAddress](wrappers_factories_MockWETH__factory.MockWETH__factory.md#getcontractaddress)
- [getInterface](wrappers_factories_MockWETH__factory.MockWETH__factory.md#getinterface)

## Constructors

### constructor

• **new MockWETH__factory**(`signer?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer?` | `Signer` |

#### Overrides

ContractFactory.constructor

#### Defined in

[src/wrappers/factories/MockWETH__factory.ts:11](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/factories/MockWETH__factory.ts#L11)

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

▸ **attach**(`address`): [`MockWETH`](wrappers_MockWETH.MockWETH.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`MockWETH`](wrappers_MockWETH.MockWETH.md)

#### Overrides

ContractFactory.attach

#### Defined in

[src/wrappers/factories/MockWETH__factory.ts:21](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/factories/MockWETH__factory.ts#L21)

___

### connect

▸ **connect**(`signer`): [`MockWETH__factory`](wrappers_factories_MockWETH__factory.MockWETH__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`MockWETH__factory`](wrappers_factories_MockWETH__factory.MockWETH__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

[src/wrappers/factories/MockWETH__factory.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/factories/MockWETH__factory.ts#L24)

___

### deploy

▸ **deploy**(`overrides?`): `Promise`<[`MockWETH`](wrappers_MockWETH.MockWETH.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`MockWETH`](wrappers_MockWETH.MockWETH.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

[src/wrappers/factories/MockWETH__factory.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/factories/MockWETH__factory.ts#L15)

___

### getDeployTransaction

▸ **getDeployTransaction**(`overrides?`): `TransactionRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`TransactionRequest`

#### Overrides

ContractFactory.getDeployTransaction

#### Defined in

[src/wrappers/factories/MockWETH__factory.ts:18](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/factories/MockWETH__factory.ts#L18)

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`MockWETH`](wrappers_MockWETH.MockWETH.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`MockWETH`](wrappers_MockWETH.MockWETH.md)

#### Defined in

[src/wrappers/factories/MockWETH__factory.ts:27](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/factories/MockWETH__factory.ts#L27)

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
