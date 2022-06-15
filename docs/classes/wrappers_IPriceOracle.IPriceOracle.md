[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/IPriceOracle](../modules/wrappers_IPriceOracle.md) / IPriceOracle

# Class: IPriceOracle

[wrappers/IPriceOracle](../modules/wrappers_IPriceOracle.md).IPriceOracle

## Hierarchy

- `Contract`

  ↳ **`IPriceOracle`**

## Table of contents

### Constructors

- [constructor](wrappers_IPriceOracle.IPriceOracle.md#constructor)

### Properties

- [\_deployedPromise](wrappers_IPriceOracle.IPriceOracle.md#_deployedpromise)
- [\_runningEvents](wrappers_IPriceOracle.IPriceOracle.md#_runningevents)
- [\_wrappedEmits](wrappers_IPriceOracle.IPriceOracle.md#_wrappedemits)
- [address](wrappers_IPriceOracle.IPriceOracle.md#address)
- [callStatic](wrappers_IPriceOracle.IPriceOracle.md#callstatic)
- [deployTransaction](wrappers_IPriceOracle.IPriceOracle.md#deploytransaction)
- [estimateGas](wrappers_IPriceOracle.IPriceOracle.md#estimategas)
- [filters](wrappers_IPriceOracle.IPriceOracle.md#filters)
- [functions](wrappers_IPriceOracle.IPriceOracle.md#functions)
- [interface](wrappers_IPriceOracle.IPriceOracle.md#interface)
- [populateTransaction](wrappers_IPriceOracle.IPriceOracle.md#populatetransaction)
- [provider](wrappers_IPriceOracle.IPriceOracle.md#provider)
- [resolvedAddress](wrappers_IPriceOracle.IPriceOracle.md#resolvedaddress)
- [signer](wrappers_IPriceOracle.IPriceOracle.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_IPriceOracle.IPriceOracle.md#_checkrunningevents)
- [\_deployed](wrappers_IPriceOracle.IPriceOracle.md#_deployed)
- [\_wrapEvent](wrappers_IPriceOracle.IPriceOracle.md#_wrapevent)
- [attach](wrappers_IPriceOracle.IPriceOracle.md#attach)
- [connect](wrappers_IPriceOracle.IPriceOracle.md#connect)
- [deployed](wrappers_IPriceOracle.IPriceOracle.md#deployed)
- [doesFeedExist](wrappers_IPriceOracle.IPriceOracle.md#doesfeedexist)
- [doesFeedExist(address,address)](wrappers_IPriceOracle.IPriceOracle.md#doesfeedexist(address,address))
- [emit](wrappers_IPriceOracle.IPriceOracle.md#emit)
- [fallback](wrappers_IPriceOracle.IPriceOracle.md#fallback)
- [getLatestPrice](wrappers_IPriceOracle.IPriceOracle.md#getlatestprice)
- [getLatestPrice(address,address)](wrappers_IPriceOracle.IPriceOracle.md#getlatestprice(address,address))
- [listenerCount](wrappers_IPriceOracle.IPriceOracle.md#listenercount)
- [listeners](wrappers_IPriceOracle.IPriceOracle.md#listeners)
- [off](wrappers_IPriceOracle.IPriceOracle.md#off)
- [on](wrappers_IPriceOracle.IPriceOracle.md#on)
- [once](wrappers_IPriceOracle.IPriceOracle.md#once)
- [queryFilter](wrappers_IPriceOracle.IPriceOracle.md#queryfilter)
- [removeAllListeners](wrappers_IPriceOracle.IPriceOracle.md#removealllisteners)
- [removeListener](wrappers_IPriceOracle.IPriceOracle.md#removelistener)
- [getContractAddress](wrappers_IPriceOracle.IPriceOracle.md#getcontractaddress)
- [getInterface](wrappers_IPriceOracle.IPriceOracle.md#getinterface)
- [isIndexed](wrappers_IPriceOracle.IPriceOracle.md#isindexed)

## Constructors

### constructor

• **new IPriceOracle**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |
| `contractInterface` | `ContractInterface` |
| `signerOrProvider?` | `Signer` \| `Provider` |

#### Inherited from

Contract.constructor

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:105

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

Contract.\_deployedPromise

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:98

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

Contract.\_runningEvents

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:99

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

Contract.\_wrappedEmits

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:102

___

### address

• `Readonly` **address**: `string`

#### Inherited from

Contract.address

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:77

___

### callStatic

• **callStatic**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `doesFeedExist` | (`token1`: `string`, `token2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `doesFeedExist(address,address)` | (`token1`: `string`, `token2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getLatestPrice` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `decimals`: `BigNumber` ; `price`: `BigNumber`  }\> |
| `getLatestPrice(address,address)` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `decimals`: `BigNumber` ; `price`: `BigNumber`  }\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/IPriceOracle.d.ts:125](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPriceOracle.d.ts#L125)

___

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

Contract.deployTransaction

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:97

___

### estimateGas

• **estimateGas**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `doesFeedExist` | (`token1`: `string`, `token2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `doesFeedExist(address,address)` | (`token1`: `string`, `token2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getLatestPrice` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getLatestPrice(address,address)` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/IPriceOracle.d.ts:161](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPriceOracle.d.ts#L161)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ChainlinkFeedUpdated` | (`token`: `string`, `priceOracle`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`], { `priceOracle`: `string` ; `token`: `string`  }\> |
| `UniswapFeedUpdated` | (`token1`: `string`, `token2`: `string`, `feedId`: ``null``, `pool`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `string`, `string`], { `feedId`: `string` ; `pool`: `string` ; `token1`: `string` ; `token2`: `string`  }\> |
| `UniswapPriceAveragingPeriodUpdated` | (`uniswapPriceAveragingPeriod`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`number`], { `uniswapPriceAveragingPeriod`: `number`  }\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/IPriceOracle.d.ts:143](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPriceOracle.d.ts#L143)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `doesFeedExist` | (`token1`: `string`, `token2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `feedExists`: `boolean`  }\> |
| `doesFeedExist(address,address)` | (`token1`: `string`, `token2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `feedExists`: `boolean`  }\> |
| `getLatestPrice` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `decimals`: `BigNumber` ; `price`: `BigNumber`  }\> |
| `getLatestPrice(address,address)` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `decimals`: `BigNumber` ; `price`: `BigNumber`  }\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/IPriceOracle.d.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPriceOracle.d.ts#L87)

___

### interface

• **interface**: [`IPriceOracleInterface`](../interfaces/wrappers_IPriceOracle.IPriceOracleInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/IPriceOracle.d.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPriceOracle.d.ts#L85)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `doesFeedExist` | (`token1`: `string`, `token2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `doesFeedExist(address,address)` | (`token1`: `string`, `token2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getLatestPrice` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getLatestPrice(address,address)` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/IPriceOracle.d.ts:171](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPriceOracle.d.ts#L171)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

Contract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:80

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

Contract.resolvedAddress

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:96

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

Contract.signer

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:79

## Methods

### \_checkRunningEvents

▸ **_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |

#### Returns

`void`

#### Inherited from

Contract.\_checkRunningEvents

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:119

___

### \_deployed

▸ **_deployed**(`blockTag?`): `Promise`<`Contract`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | `BlockTag` |

#### Returns

`Promise`<`Contract`\>

#### Inherited from

Contract.\_deployed

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:112

___

### \_wrapEvent

▸ **_wrapEvent**(`runningEvent`, `log`, `listener`): `Event`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |
| `log` | `Log` |
| `listener` | `Listener` |

#### Returns

`Event`

#### Inherited from

Contract.\_wrapEvent

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:120

___

### attach

▸ **attach**(`addressOrName`): [`IPriceOracle`](wrappers_IPriceOracle.IPriceOracle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IPriceOracle`](wrappers_IPriceOracle.IPriceOracle.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/IPriceOracle.d.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPriceOracle.d.ts#L46)

___

### connect

▸ **connect**(`signerOrProvider`): [`IPriceOracle`](wrappers_IPriceOracle.IPriceOracle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IPriceOracle`](wrappers_IPriceOracle.IPriceOracle.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/IPriceOracle.d.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPriceOracle.d.ts#L45)

___

### deployed

▸ **deployed**(): `Promise`<[`IPriceOracle`](wrappers_IPriceOracle.IPriceOracle.md)\>

#### Returns

`Promise`<[`IPriceOracle`](wrappers_IPriceOracle.IPriceOracle.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/IPriceOracle.d.ts:47](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPriceOracle.d.ts#L47)

___

### doesFeedExist

▸ **doesFeedExist**(`token1`, `token2`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token1` | `string` |
| `token2` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/IPriceOracle.d.ts:109](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPriceOracle.d.ts#L109)

___

### doesFeedExist(address,address)

▸ **doesFeedExist(address,address)**(`token1`, `token2`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token1` | `string` |
| `token2` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/IPriceOracle.d.ts:111](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPriceOracle.d.ts#L111)

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `EventFilter` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

Contract.emit

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:125

___

### fallback

▸ **fallback**(`overrides?`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `TransactionRequest` |

#### Returns

`Promise`<`TransactionResponse`\>

#### Inherited from

Contract.fallback

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:113

___

### getLatestPrice

▸ **getLatestPrice**(`num`, `den`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `decimals`: `BigNumber` ; `price`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `string` |
| `den` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `decimals`: `BigNumber` ; `price`: `BigNumber`  }\>

#### Defined in

[src/wrappers/IPriceOracle.d.ts:113](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPriceOracle.d.ts#L113)

___

### getLatestPrice(address,address)

▸ **getLatestPrice(address,address)**(`num`, `den`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `decimals`: `BigNumber` ; `price`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `string` |
| `den` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `decimals`: `BigNumber` ; `price`: `BigNumber`  }\>

#### Defined in

[src/wrappers/IPriceOracle.d.ts:119](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPriceOracle.d.ts#L119)

___

### listenerCount

▸ **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| `EventFilter` |

#### Returns

`number`

#### Inherited from

Contract.listenerCount

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:126

___

### listeners

▸ **listeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter?`): [`TypedListener`](../modules/wrappers_commons.md#typedlistener)<`EventArgsArray`, `EventArgsObject`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter?` | [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`TypedListener`](../modules/wrappers_commons.md#typedlistener)<`EventArgsArray`, `EventArgsObject`\>[]

#### Overrides

Contract.listeners

#### Defined in

[src/wrappers/IPriceOracle.d.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPriceOracle.d.ts#L49)

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Overrides

Contract.listeners

#### Defined in

[src/wrappers/IPriceOracle.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPriceOracle.d.ts#L72)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IPriceOracle`](wrappers_IPriceOracle.IPriceOracle.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |
| `listener` | [`TypedListener`](../modules/wrappers_commons.md#typedlistener)<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`IPriceOracle`](wrappers_IPriceOracle.IPriceOracle.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IPriceOracle.d.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPriceOracle.d.ts#L52)

▸ **off**(`eventName`, `listener`): [`IPriceOracle`](wrappers_IPriceOracle.IPriceOracle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IPriceOracle`](wrappers_IPriceOracle.IPriceOracle.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IPriceOracle.d.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPriceOracle.d.ts#L73)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IPriceOracle`](wrappers_IPriceOracle.IPriceOracle.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |
| `listener` | [`TypedListener`](../modules/wrappers_commons.md#typedlistener)<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`IPriceOracle`](wrappers_IPriceOracle.IPriceOracle.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IPriceOracle.d.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPriceOracle.d.ts#L56)

▸ **on**(`eventName`, `listener`): [`IPriceOracle`](wrappers_IPriceOracle.IPriceOracle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IPriceOracle`](wrappers_IPriceOracle.IPriceOracle.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IPriceOracle.d.ts:74](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPriceOracle.d.ts#L74)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IPriceOracle`](wrappers_IPriceOracle.IPriceOracle.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |
| `listener` | [`TypedListener`](../modules/wrappers_commons.md#typedlistener)<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`IPriceOracle`](wrappers_IPriceOracle.IPriceOracle.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IPriceOracle.d.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPriceOracle.d.ts#L60)

▸ **once**(`eventName`, `listener`): [`IPriceOracle`](wrappers_IPriceOracle.IPriceOracle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IPriceOracle`](wrappers_IPriceOracle.IPriceOracle.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IPriceOracle.d.ts:75](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPriceOracle.d.ts#L75)

___

### queryFilter

▸ **queryFilter**<`EventArgsArray`, `EventArgsObject`\>(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<[`TypedEvent`](../interfaces/wrappers_commons.TypedEvent.md)<`EventArgsArray` & `EventArgsObject`\>[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |
| `fromBlockOrBlockhash?` | `string` \| `number` |
| `toBlock?` | `string` \| `number` |

#### Returns

`Promise`<[`TypedEvent`](../interfaces/wrappers_commons.TypedEvent.md)<`EventArgsArray` & `EventArgsObject`\>[]\>

#### Overrides

Contract.queryFilter

#### Defined in

[src/wrappers/IPriceOracle.d.ts:79](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPriceOracle.d.ts#L79)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`IPriceOracle`](wrappers_IPriceOracle.IPriceOracle.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`IPriceOracle`](wrappers_IPriceOracle.IPriceOracle.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IPriceOracle.d.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPriceOracle.d.ts#L68)

▸ **removeAllListeners**(`eventName?`): [`IPriceOracle`](wrappers_IPriceOracle.IPriceOracle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IPriceOracle`](wrappers_IPriceOracle.IPriceOracle.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IPriceOracle.d.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPriceOracle.d.ts#L77)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IPriceOracle`](wrappers_IPriceOracle.IPriceOracle.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |
| `listener` | [`TypedListener`](../modules/wrappers_commons.md#typedlistener)<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`IPriceOracle`](wrappers_IPriceOracle.IPriceOracle.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IPriceOracle.d.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPriceOracle.d.ts#L64)

▸ **removeListener**(`eventName`, `listener`): [`IPriceOracle`](wrappers_IPriceOracle.IPriceOracle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IPriceOracle`](wrappers_IPriceOracle.IPriceOracle.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IPriceOracle.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPriceOracle.d.ts#L76)

___

### getContractAddress

▸ `Static` **getContractAddress**(`transaction`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `Object` |
| `transaction.from` | `string` |
| `transaction.nonce` | `BigNumberish` |

#### Returns

`string`

#### Inherited from

Contract.getContractAddress

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:106

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

Contract.getInterface

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:110

___

### isIndexed

▸ `Static` **isIndexed**(`value`): value is Indexed

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Indexed

#### Inherited from

Contract.isIndexed

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:116
