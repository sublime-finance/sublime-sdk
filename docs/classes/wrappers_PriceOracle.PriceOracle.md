[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/PriceOracle](../modules/wrappers_PriceOracle.md) / PriceOracle

# Class: PriceOracle

[wrappers/PriceOracle](../modules/wrappers_PriceOracle.md).PriceOracle

## Hierarchy

- `Contract`

  ↳ **`PriceOracle`**

## Table of contents

### Constructors

- [constructor](wrappers_PriceOracle.PriceOracle.md#constructor)

### Properties

- [\_deployedPromise](wrappers_PriceOracle.PriceOracle.md#_deployedpromise)
- [\_runningEvents](wrappers_PriceOracle.PriceOracle.md#_runningevents)
- [\_wrappedEmits](wrappers_PriceOracle.PriceOracle.md#_wrappedemits)
- [address](wrappers_PriceOracle.PriceOracle.md#address)
- [callStatic](wrappers_PriceOracle.PriceOracle.md#callstatic)
- [deployTransaction](wrappers_PriceOracle.PriceOracle.md#deploytransaction)
- [estimateGas](wrappers_PriceOracle.PriceOracle.md#estimategas)
- [filters](wrappers_PriceOracle.PriceOracle.md#filters)
- [functions](wrappers_PriceOracle.PriceOracle.md#functions)
- [interface](wrappers_PriceOracle.PriceOracle.md#interface)
- [populateTransaction](wrappers_PriceOracle.PriceOracle.md#populatetransaction)
- [provider](wrappers_PriceOracle.PriceOracle.md#provider)
- [resolvedAddress](wrappers_PriceOracle.PriceOracle.md#resolvedaddress)
- [signer](wrappers_PriceOracle.PriceOracle.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_PriceOracle.PriceOracle.md#_checkrunningevents)
- [\_deployed](wrappers_PriceOracle.PriceOracle.md#_deployed)
- [\_wrapEvent](wrappers_PriceOracle.PriceOracle.md#_wrapevent)
- [attach](wrappers_PriceOracle.PriceOracle.md#attach)
- [chainlinkFeedAddresses](wrappers_PriceOracle.PriceOracle.md#chainlinkfeedaddresses)
- [chainlinkFeedAddresses(address)](wrappers_PriceOracle.PriceOracle.md#chainlinkfeedaddresses(address))
- [connect](wrappers_PriceOracle.PriceOracle.md#connect)
- [deployed](wrappers_PriceOracle.PriceOracle.md#deployed)
- [doesFeedExist](wrappers_PriceOracle.PriceOracle.md#doesfeedexist)
- [doesFeedExist(address,address)](wrappers_PriceOracle.PriceOracle.md#doesfeedexist(address,address))
- [emit](wrappers_PriceOracle.PriceOracle.md#emit)
- [fallback](wrappers_PriceOracle.PriceOracle.md#fallback)
- [getChainlinkLatestPrice](wrappers_PriceOracle.PriceOracle.md#getchainlinklatestprice)
- [getChainlinkLatestPrice(address,address)](wrappers_PriceOracle.PriceOracle.md#getchainlinklatestprice(address,address))
- [getLatestPrice](wrappers_PriceOracle.PriceOracle.md#getlatestprice)
- [getLatestPrice(address,address)](wrappers_PriceOracle.PriceOracle.md#getlatestprice(address,address))
- [getUniswapLatestPrice](wrappers_PriceOracle.PriceOracle.md#getuniswaplatestprice)
- [getUniswapLatestPrice(address,address)](wrappers_PriceOracle.PriceOracle.md#getuniswaplatestprice(address,address))
- [initialize](wrappers_PriceOracle.PriceOracle.md#initialize)
- [initialize(address,uint32)](wrappers_PriceOracle.PriceOracle.md#initialize(address,uint32))
- [listenerCount](wrappers_PriceOracle.PriceOracle.md#listenercount)
- [listeners](wrappers_PriceOracle.PriceOracle.md#listeners)
- [off](wrappers_PriceOracle.PriceOracle.md#off)
- [on](wrappers_PriceOracle.PriceOracle.md#on)
- [once](wrappers_PriceOracle.PriceOracle.md#once)
- [owner](wrappers_PriceOracle.PriceOracle.md#owner)
- [owner()](wrappers_PriceOracle.PriceOracle.md#owner())
- [queryFilter](wrappers_PriceOracle.PriceOracle.md#queryfilter)
- [removeAllListeners](wrappers_PriceOracle.PriceOracle.md#removealllisteners)
- [removeListener](wrappers_PriceOracle.PriceOracle.md#removelistener)
- [renounceOwnership](wrappers_PriceOracle.PriceOracle.md#renounceownership)
- [renounceOwnership()](wrappers_PriceOracle.PriceOracle.md#renounceownership())
- [setChainlinkFeedAddress](wrappers_PriceOracle.PriceOracle.md#setchainlinkfeedaddress)
- [setChainlinkFeedAddress(address,address)](wrappers_PriceOracle.PriceOracle.md#setchainlinkfeedaddress(address,address))
- [setUniswapFeedAddress](wrappers_PriceOracle.PriceOracle.md#setuniswapfeedaddress)
- [setUniswapFeedAddress(address,address,address)](wrappers_PriceOracle.PriceOracle.md#setuniswapfeedaddress(address,address,address))
- [setUniswapPriceAveragingPeriod](wrappers_PriceOracle.PriceOracle.md#setuniswappriceaveragingperiod)
- [setUniswapPriceAveragingPeriod(uint32)](wrappers_PriceOracle.PriceOracle.md#setuniswappriceaveragingperiod(uint32))
- [transferOwnership](wrappers_PriceOracle.PriceOracle.md#transferownership)
- [transferOwnership(address)](wrappers_PriceOracle.PriceOracle.md#transferownership(address))
- [uniswapPools](wrappers_PriceOracle.PriceOracle.md#uniswappools)
- [uniswapPools(bytes32)](wrappers_PriceOracle.PriceOracle.md#uniswappools(bytes32))
- [getContractAddress](wrappers_PriceOracle.PriceOracle.md#getcontractaddress)
- [getInterface](wrappers_PriceOracle.PriceOracle.md#getinterface)
- [isIndexed](wrappers_PriceOracle.PriceOracle.md#isindexed)

## Constructors

### constructor

• **new PriceOracle**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `chainlinkFeedAddresses` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `number`] & { `decimals`: `number` ; `oracle`: `string`  }\> |
| `chainlinkFeedAddresses(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `number`] & { `decimals`: `number` ; `oracle`: `string`  }\> |
| `doesFeedExist` | (`token1`: `string`, `token2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `doesFeedExist(address,address)` | (`token1`: `string`, `token2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getChainlinkLatestPrice` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`]\> |
| `getChainlinkLatestPrice(address,address)` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`]\> |
| `getLatestPrice` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`]\> |
| `getLatestPrice(address,address)` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`]\> |
| `getUniswapLatestPrice` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`]\> |
| `getUniswapLatestPrice(address,address)` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`]\> |
| `initialize` | (`_admin`: `string`, `_uniswapPriceAveragingPeriod`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialize(address,uint32)` | (`_admin`: `string`, `_uniswapPriceAveragingPeriod`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `renounceOwnership` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `renounceOwnership()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setChainlinkFeedAddress` | (`token`: `string`, `priceOracle`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setChainlinkFeedAddress(address,address)` | (`token`: `string`, `priceOracle`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setUniswapFeedAddress` | (`token1`: `string`, `token2`: `string`, `pool`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setUniswapFeedAddress(address,address,address)` | (`token1`: `string`, `token2`: `string`, `pool`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setUniswapPriceAveragingPeriod` | (`_uniswapPriceAveragingPeriod`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setUniswapPriceAveragingPeriod(uint32)` | (`_uniswapPriceAveragingPeriod`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `uniswapPools` | (`arg0`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `uniswapPools(bytes32)` | (`arg0`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/PriceOracle.d.ts:302](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L302)

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
| `chainlinkFeedAddresses` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `chainlinkFeedAddresses(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `doesFeedExist` | (`token1`: `string`, `token2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `doesFeedExist(address,address)` | (`token1`: `string`, `token2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getChainlinkLatestPrice` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getChainlinkLatestPrice(address,address)` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getLatestPrice` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getLatestPrice(address,address)` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getUniswapLatestPrice` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getUniswapLatestPrice(address,address)` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `initialize` | (`_admin`: `string`, `_uniswapPriceAveragingPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initialize(address,uint32)` | (`_admin`: `string`, `_uniswapPriceAveragingPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setChainlinkFeedAddress` | (`token`: `string`, `priceOracle`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setChainlinkFeedAddress(address,address)` | (`token`: `string`, `priceOracle`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setUniswapFeedAddress` | (`token1`: `string`, `token2`: `string`, `pool`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setUniswapFeedAddress(address,address,address)` | (`token1`: `string`, `token2`: `string`, `pool`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setUniswapPriceAveragingPeriod` | (`_uniswapPriceAveragingPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setUniswapPriceAveragingPeriod(uint32)` | (`_uniswapPriceAveragingPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `uniswapPools` | (`arg0`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `uniswapPools(bytes32)` | (`arg0`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/PriceOracle.d.ts:387](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L387)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ChainlinkFeedUpdated` | (`token`: `string`, `priceOracle`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`], { `priceOracle`: `string` ; `token`: `string`  }\> |
| `OwnershipTransferred` | (`previousOwner`: `string`, `newOwner`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`], { `newOwner`: `string` ; `previousOwner`: `string`  }\> |
| `UniswapFeedUpdated` | (`token1`: `string`, `token2`: `string`, `feedId`: ``null``, `pool`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `string`, `string`], { `feedId`: `string` ; `pool`: `string` ; `token1`: `string` ; `token2`: `string`  }\> |
| `UniswapPriceAveragingPeriodUpdated` | (`uniswapPriceAveragingPeriod`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`number`], { `uniswapPriceAveragingPeriod`: `number`  }\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/PriceOracle.d.ts:364](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L364)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `chainlinkFeedAddresses` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `number`] & { `decimals`: `number` ; `oracle`: `string`  }\> |
| `chainlinkFeedAddresses(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `number`] & { `decimals`: `number` ; `oracle`: `string`  }\> |
| `doesFeedExist` | (`token1`: `string`, `token2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `doesFeedExist(address,address)` | (`token1`: `string`, `token2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `getChainlinkLatestPrice` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`]\> |
| `getChainlinkLatestPrice(address,address)` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`]\> |
| `getLatestPrice` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`]\> |
| `getLatestPrice(address,address)` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`]\> |
| `getUniswapLatestPrice` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`]\> |
| `getUniswapLatestPrice(address,address)` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`]\> |
| `initialize` | (`_admin`: `string`, `_uniswapPriceAveragingPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialize(address,uint32)` | (`_admin`: `string`, `_uniswapPriceAveragingPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setChainlinkFeedAddress` | (`token`: `string`, `priceOracle`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setChainlinkFeedAddress(address,address)` | (`token`: `string`, `priceOracle`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setUniswapFeedAddress` | (`token1`: `string`, `token2`: `string`, `pool`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setUniswapFeedAddress(address,address,address)` | (`token1`: `string`, `token2`: `string`, `pool`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setUniswapPriceAveragingPeriod` | (`_uniswapPriceAveragingPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setUniswapPriceAveragingPeriod(uint32)` | (`_uniswapPriceAveragingPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `uniswapPools` | (`arg0`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `uniswapPools(bytes32)` | (`arg0`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/PriceOracle.d.ts:123](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L123)

___

### interface

• **interface**: [`PriceOracleInterface`](../interfaces/wrappers_PriceOracle.PriceOracleInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/PriceOracle.d.ts:121](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L121)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `chainlinkFeedAddresses` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `chainlinkFeedAddresses(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `doesFeedExist` | (`token1`: `string`, `token2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `doesFeedExist(address,address)` | (`token1`: `string`, `token2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getChainlinkLatestPrice` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getChainlinkLatestPrice(address,address)` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getLatestPrice` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getLatestPrice(address,address)` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getUniswapLatestPrice` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getUniswapLatestPrice(address,address)` | (`num`: `string`, `den`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `initialize` | (`_admin`: `string`, `_uniswapPriceAveragingPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialize(address,uint32)` | (`_admin`: `string`, `_uniswapPriceAveragingPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setChainlinkFeedAddress` | (`token`: `string`, `priceOracle`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setChainlinkFeedAddress(address,address)` | (`token`: `string`, `priceOracle`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setUniswapFeedAddress` | (`token1`: `string`, `token2`: `string`, `pool`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setUniswapFeedAddress(address,address,address)` | (`token1`: `string`, `token2`: `string`, `pool`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setUniswapPriceAveragingPeriod` | (`_uniswapPriceAveragingPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setUniswapPriceAveragingPeriod(uint32)` | (`_uniswapPriceAveragingPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `uniswapPools` | (`arg0`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `uniswapPools(bytes32)` | (`arg0`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/PriceOracle.d.ts:473](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L473)

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

▸ **attach**(`addressOrName`): [`PriceOracle`](wrappers_PriceOracle.PriceOracle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`PriceOracle`](wrappers_PriceOracle.PriceOracle.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/PriceOracle.d.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L82)

___

### chainlinkFeedAddresses

▸ **chainlinkFeedAddresses**(`arg0`, `overrides?`): `Promise`<[`string`, `number`] & { `decimals`: `number` ; `oracle`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`string`, `number`] & { `decimals`: `number` ; `oracle`: `string`  }\>

#### Defined in

[src/wrappers/PriceOracle.d.ts:215](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L215)

___

### chainlinkFeedAddresses(address)

▸ **chainlinkFeedAddresses(address)**(`arg0`, `overrides?`): `Promise`<[`string`, `number`] & { `decimals`: `number` ; `oracle`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`string`, `number`] & { `decimals`: `number` ; `oracle`: `string`  }\>

#### Defined in

[src/wrappers/PriceOracle.d.ts:217](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L217)

___

### connect

▸ **connect**(`signerOrProvider`): [`PriceOracle`](wrappers_PriceOracle.PriceOracle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`PriceOracle`](wrappers_PriceOracle.PriceOracle.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/PriceOracle.d.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L81)

___

### deployed

▸ **deployed**(): `Promise`<[`PriceOracle`](wrappers_PriceOracle.PriceOracle.md)\>

#### Returns

`Promise`<[`PriceOracle`](wrappers_PriceOracle.PriceOracle.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/PriceOracle.d.ts:83](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L83)

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

[src/wrappers/PriceOracle.d.ts:222](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L222)

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

[src/wrappers/PriceOracle.d.ts:224](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L224)

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

### getChainlinkLatestPrice

▸ **getChainlinkLatestPrice**(`num`, `den`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `string` |
| `den` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`]\>

#### Defined in

[src/wrappers/PriceOracle.d.ts:226](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L226)

___

### getChainlinkLatestPrice(address,address)

▸ **getChainlinkLatestPrice(address,address)**(`num`, `den`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `string` |
| `den` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`]\>

#### Defined in

[src/wrappers/PriceOracle.d.ts:228](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L228)

___

### getLatestPrice

▸ **getLatestPrice**(`num`, `den`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `string` |
| `den` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`]\>

#### Defined in

[src/wrappers/PriceOracle.d.ts:230](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L230)

___

### getLatestPrice(address,address)

▸ **getLatestPrice(address,address)**(`num`, `den`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `string` |
| `den` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`]\>

#### Defined in

[src/wrappers/PriceOracle.d.ts:232](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L232)

___

### getUniswapLatestPrice

▸ **getUniswapLatestPrice**(`num`, `den`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `string` |
| `den` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`]\>

#### Defined in

[src/wrappers/PriceOracle.d.ts:234](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L234)

___

### getUniswapLatestPrice(address,address)

▸ **getUniswapLatestPrice(address,address)**(`num`, `den`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `string` |
| `den` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`]\>

#### Defined in

[src/wrappers/PriceOracle.d.ts:236](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L236)

___

### initialize

▸ **initialize**(`_admin`, `_uniswapPriceAveragingPeriod`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_admin` | `string` |
| `_uniswapPriceAveragingPeriod` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PriceOracle.d.ts:238](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L238)

___

### initialize(address,uint32)

▸ **initialize(address,uint32)**(`_admin`, `_uniswapPriceAveragingPeriod`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_admin` | `string` |
| `_uniswapPriceAveragingPeriod` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PriceOracle.d.ts:244](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L244)

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

[src/wrappers/PriceOracle.d.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L85)

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

[src/wrappers/PriceOracle.d.ts:108](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L108)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`PriceOracle`](wrappers_PriceOracle.PriceOracle.md)

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

[`PriceOracle`](wrappers_PriceOracle.PriceOracle.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/PriceOracle.d.ts:88](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L88)

▸ **off**(`eventName`, `listener`): [`PriceOracle`](wrappers_PriceOracle.PriceOracle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`PriceOracle`](wrappers_PriceOracle.PriceOracle.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/PriceOracle.d.ts:109](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L109)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`PriceOracle`](wrappers_PriceOracle.PriceOracle.md)

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

[`PriceOracle`](wrappers_PriceOracle.PriceOracle.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/PriceOracle.d.ts:92](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L92)

▸ **on**(`eventName`, `listener`): [`PriceOracle`](wrappers_PriceOracle.PriceOracle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`PriceOracle`](wrappers_PriceOracle.PriceOracle.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/PriceOracle.d.ts:110](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L110)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`PriceOracle`](wrappers_PriceOracle.PriceOracle.md)

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

[`PriceOracle`](wrappers_PriceOracle.PriceOracle.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/PriceOracle.d.ts:96](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L96)

▸ **once**(`eventName`, `listener`): [`PriceOracle`](wrappers_PriceOracle.PriceOracle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`PriceOracle`](wrappers_PriceOracle.PriceOracle.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/PriceOracle.d.ts:111](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L111)

___

### owner

▸ **owner**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/PriceOracle.d.ts:250](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L250)

___

### owner()

▸ **owner()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/PriceOracle.d.ts:252](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L252)

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

[src/wrappers/PriceOracle.d.ts:115](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L115)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`PriceOracle`](wrappers_PriceOracle.PriceOracle.md)

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

[`PriceOracle`](wrappers_PriceOracle.PriceOracle.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/PriceOracle.d.ts:104](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L104)

▸ **removeAllListeners**(`eventName?`): [`PriceOracle`](wrappers_PriceOracle.PriceOracle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`PriceOracle`](wrappers_PriceOracle.PriceOracle.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/PriceOracle.d.ts:113](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L113)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`PriceOracle`](wrappers_PriceOracle.PriceOracle.md)

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

[`PriceOracle`](wrappers_PriceOracle.PriceOracle.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/PriceOracle.d.ts:100](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L100)

▸ **removeListener**(`eventName`, `listener`): [`PriceOracle`](wrappers_PriceOracle.PriceOracle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`PriceOracle`](wrappers_PriceOracle.PriceOracle.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/PriceOracle.d.ts:112](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L112)

___

### renounceOwnership

▸ **renounceOwnership**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PriceOracle.d.ts:254](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L254)

___

### renounceOwnership()

▸ **renounceOwnership()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PriceOracle.d.ts:256](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L256)

___

### setChainlinkFeedAddress

▸ **setChainlinkFeedAddress**(`token`, `priceOracle`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `priceOracle` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PriceOracle.d.ts:258](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L258)

___

### setChainlinkFeedAddress(address,address)

▸ **setChainlinkFeedAddress(address,address)**(`token`, `priceOracle`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `priceOracle` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PriceOracle.d.ts:264](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L264)

___

### setUniswapFeedAddress

▸ **setUniswapFeedAddress**(`token1`, `token2`, `pool`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token1` | `string` |
| `token2` | `string` |
| `pool` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PriceOracle.d.ts:270](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L270)

___

### setUniswapFeedAddress(address,address,address)

▸ **setUniswapFeedAddress(address,address,address)**(`token1`, `token2`, `pool`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token1` | `string` |
| `token2` | `string` |
| `pool` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PriceOracle.d.ts:277](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L277)

___

### setUniswapPriceAveragingPeriod

▸ **setUniswapPriceAveragingPeriod**(`_uniswapPriceAveragingPeriod`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_uniswapPriceAveragingPeriod` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PriceOracle.d.ts:284](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L284)

___

### setUniswapPriceAveragingPeriod(uint32)

▸ **setUniswapPriceAveragingPeriod(uint32)**(`_uniswapPriceAveragingPeriod`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_uniswapPriceAveragingPeriod` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PriceOracle.d.ts:289](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L289)

___

### transferOwnership

▸ **transferOwnership**(`newOwner`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `newOwner` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PriceOracle.d.ts:294](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L294)

___

### transferOwnership(address)

▸ **transferOwnership(address)**(`newOwner`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `newOwner` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PriceOracle.d.ts:296](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L296)

___

### uniswapPools

▸ **uniswapPools**(`arg0`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/PriceOracle.d.ts:298](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L298)

___

### uniswapPools(bytes32)

▸ **uniswapPools(bytes32)**(`arg0`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/PriceOracle.d.ts:300](https://github.com/sublime-finance/sublime-sdk/blob/230dfd0/src/wrappers/PriceOracle.d.ts#L300)

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
