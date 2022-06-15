[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/factories/MockToken\_\_factory](../modules/wrappers_factories_MockToken__factory.md) / MockToken\_\_factory

# Class: MockToken\_\_factory

[wrappers/factories/MockToken__factory](../modules/wrappers_factories_MockToken__factory.md).MockToken__factory

## Hierarchy

- `ContractFactory`

  ↳ **`MockToken__factory`**

## Table of contents

### Constructors

- [constructor](wrappers_factories_MockToken__factory.MockToken__factory.md#constructor)

### Properties

- [bytecode](wrappers_factories_MockToken__factory.MockToken__factory.md#bytecode)
- [interface](wrappers_factories_MockToken__factory.MockToken__factory.md#interface)
- [signer](wrappers_factories_MockToken__factory.MockToken__factory.md#signer)

### Methods

- [attach](wrappers_factories_MockToken__factory.MockToken__factory.md#attach)
- [connect](wrappers_factories_MockToken__factory.MockToken__factory.md#connect)
- [deploy](wrappers_factories_MockToken__factory.MockToken__factory.md#deploy)
- [getDeployTransaction](wrappers_factories_MockToken__factory.MockToken__factory.md#getdeploytransaction)
- [connect](wrappers_factories_MockToken__factory.MockToken__factory.md#connect)
- [fromSolidity](wrappers_factories_MockToken__factory.MockToken__factory.md#fromsolidity)
- [getContract](wrappers_factories_MockToken__factory.MockToken__factory.md#getcontract)
- [getContractAddress](wrappers_factories_MockToken__factory.MockToken__factory.md#getcontractaddress)
- [getInterface](wrappers_factories_MockToken__factory.MockToken__factory.md#getinterface)

## Constructors

### constructor

• **new MockToken__factory**(`signer?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer?` | `Signer` |

#### Overrides

ContractFactory.constructor

#### Defined in

[src/wrappers/factories/MockToken__factory.ts:11](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/factories/MockToken__factory.ts#L11)

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

▸ **attach**(`address`): [`MockToken`](wrappers_MockToken.MockToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`MockToken`](wrappers_MockToken.MockToken.md)

#### Overrides

ContractFactory.attach

#### Defined in

[src/wrappers/factories/MockToken__factory.ts:35](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/factories/MockToken__factory.ts#L35)

___

### connect

▸ **connect**(`signer`): [`MockToken__factory`](wrappers_factories_MockToken__factory.MockToken__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`MockToken__factory`](wrappers_factories_MockToken__factory.MockToken__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

[src/wrappers/factories/MockToken__factory.ts:38](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/factories/MockToken__factory.ts#L38)

___

### deploy

▸ **deploy**(`name`, `symbol`, `decimals_`, `initialSupply`, `_owner`, `overrides?`): `Promise`<[`MockToken`](wrappers_MockToken.MockToken.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `symbol` | `string` |
| `decimals_` | `BigNumberish` |
| `initialSupply` | `BigNumberish` |
| `_owner` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`MockToken`](wrappers_MockToken.MockToken.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

[src/wrappers/factories/MockToken__factory.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/factories/MockToken__factory.ts#L15)

___

### getDeployTransaction

▸ **getDeployTransaction**(`name`, `symbol`, `decimals_`, `initialSupply`, `_owner`, `overrides?`): `TransactionRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `symbol` | `string` |
| `decimals_` | `BigNumberish` |
| `initialSupply` | `BigNumberish` |
| `_owner` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`TransactionRequest`

#### Overrides

ContractFactory.getDeployTransaction

#### Defined in

[src/wrappers/factories/MockToken__factory.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/factories/MockToken__factory.ts#L25)

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`MockToken`](wrappers_MockToken.MockToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`MockToken`](wrappers_MockToken.MockToken.md)

#### Defined in

[src/wrappers/factories/MockToken__factory.ts:41](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/factories/MockToken__factory.ts#L41)

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
