[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/factories/CreditLineEthUtils\_\_factory](../modules/wrappers_factories_CreditLineEthUtils__factory.md) / CreditLineEthUtils\_\_factory

# Class: CreditLineEthUtils\_\_factory

[wrappers/factories/CreditLineEthUtils__factory](../modules/wrappers_factories_CreditLineEthUtils__factory.md).CreditLineEthUtils__factory

## Hierarchy

- `ContractFactory`

  ↳ **`CreditLineEthUtils__factory`**

## Table of contents

### Constructors

- [constructor](wrappers_factories_CreditLineEthUtils__factory.CreditLineEthUtils__factory.md#constructor)

### Properties

- [bytecode](wrappers_factories_CreditLineEthUtils__factory.CreditLineEthUtils__factory.md#bytecode)
- [interface](wrappers_factories_CreditLineEthUtils__factory.CreditLineEthUtils__factory.md#interface)
- [signer](wrappers_factories_CreditLineEthUtils__factory.CreditLineEthUtils__factory.md#signer)

### Methods

- [attach](wrappers_factories_CreditLineEthUtils__factory.CreditLineEthUtils__factory.md#attach)
- [connect](wrappers_factories_CreditLineEthUtils__factory.CreditLineEthUtils__factory.md#connect)
- [deploy](wrappers_factories_CreditLineEthUtils__factory.CreditLineEthUtils__factory.md#deploy)
- [getDeployTransaction](wrappers_factories_CreditLineEthUtils__factory.CreditLineEthUtils__factory.md#getdeploytransaction)
- [connect](wrappers_factories_CreditLineEthUtils__factory.CreditLineEthUtils__factory.md#connect)
- [fromSolidity](wrappers_factories_CreditLineEthUtils__factory.CreditLineEthUtils__factory.md#fromsolidity)
- [getContract](wrappers_factories_CreditLineEthUtils__factory.CreditLineEthUtils__factory.md#getcontract)
- [getContractAddress](wrappers_factories_CreditLineEthUtils__factory.CreditLineEthUtils__factory.md#getcontractaddress)
- [getInterface](wrappers_factories_CreditLineEthUtils__factory.CreditLineEthUtils__factory.md#getinterface)

## Constructors

### constructor

• **new CreditLineEthUtils__factory**(`signer?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer?` | `Signer` |

#### Overrides

ContractFactory.constructor

#### Defined in

[src/wrappers/factories/CreditLineEthUtils__factory.ts:11](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/factories/CreditLineEthUtils__factory.ts#L11)

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

▸ **attach**(`address`): [`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)

#### Overrides

ContractFactory.attach

#### Defined in

[src/wrappers/factories/CreditLineEthUtils__factory.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/factories/CreditLineEthUtils__factory.ts#L25)

___

### connect

▸ **connect**(`signer`): [`CreditLineEthUtils__factory`](wrappers_factories_CreditLineEthUtils__factory.CreditLineEthUtils__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`CreditLineEthUtils__factory`](wrappers_factories_CreditLineEthUtils__factory.CreditLineEthUtils__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

[src/wrappers/factories/CreditLineEthUtils__factory.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/factories/CreditLineEthUtils__factory.ts#L28)

___

### deploy

▸ **deploy**(`_weth`, `_creditLines`, `overrides?`): `Promise`<[`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_weth` | `string` |
| `_creditLines` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

[src/wrappers/factories/CreditLineEthUtils__factory.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/factories/CreditLineEthUtils__factory.ts#L15)

___

### getDeployTransaction

▸ **getDeployTransaction**(`_weth`, `_creditLines`, `overrides?`): `TransactionRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_weth` | `string` |
| `_creditLines` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`TransactionRequest`

#### Overrides

ContractFactory.getDeployTransaction

#### Defined in

[src/wrappers/factories/CreditLineEthUtils__factory.ts:18](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/factories/CreditLineEthUtils__factory.ts#L18)

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`CreditLineEthUtils`](wrappers_CreditLineEthUtils.CreditLineEthUtils.md)

#### Defined in

[src/wrappers/factories/CreditLineEthUtils__factory.ts:31](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/factories/CreditLineEthUtils__factory.ts#L31)

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
