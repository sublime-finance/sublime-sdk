[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/IPoolFactory](../modules/wrappers_IPoolFactory.md) / IPoolFactory

# Class: IPoolFactory

[wrappers/IPoolFactory](../modules/wrappers_IPoolFactory.md).IPoolFactory

## Hierarchy

- `Contract`

  ↳ **`IPoolFactory`**

## Table of contents

### Constructors

- [constructor](wrappers_IPoolFactory.IPoolFactory.md#constructor)

### Properties

- [\_deployedPromise](wrappers_IPoolFactory.IPoolFactory.md#_deployedpromise)
- [\_runningEvents](wrappers_IPoolFactory.IPoolFactory.md#_runningevents)
- [\_wrappedEmits](wrappers_IPoolFactory.IPoolFactory.md#_wrappedemits)
- [address](wrappers_IPoolFactory.IPoolFactory.md#address)
- [callStatic](wrappers_IPoolFactory.IPoolFactory.md#callstatic)
- [deployTransaction](wrappers_IPoolFactory.IPoolFactory.md#deploytransaction)
- [estimateGas](wrappers_IPoolFactory.IPoolFactory.md#estimategas)
- [filters](wrappers_IPoolFactory.IPoolFactory.md#filters)
- [functions](wrappers_IPoolFactory.IPoolFactory.md#functions)
- [interface](wrappers_IPoolFactory.IPoolFactory.md#interface)
- [populateTransaction](wrappers_IPoolFactory.IPoolFactory.md#populatetransaction)
- [provider](wrappers_IPoolFactory.IPoolFactory.md#provider)
- [resolvedAddress](wrappers_IPoolFactory.IPoolFactory.md#resolvedaddress)
- [signer](wrappers_IPoolFactory.IPoolFactory.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_IPoolFactory.IPoolFactory.md#_checkrunningevents)
- [\_deployed](wrappers_IPoolFactory.IPoolFactory.md#_deployed)
- [\_wrapEvent](wrappers_IPoolFactory.IPoolFactory.md#_wrapevent)
- [attach](wrappers_IPoolFactory.IPoolFactory.md#attach)
- [collectionPeriod](wrappers_IPoolFactory.IPoolFactory.md#collectionperiod)
- [collectionPeriod()](wrappers_IPoolFactory.IPoolFactory.md#collectionperiod())
- [connect](wrappers_IPoolFactory.IPoolFactory.md#connect)
- [deployed](wrappers_IPoolFactory.IPoolFactory.md#deployed)
- [emit](wrappers_IPoolFactory.IPoolFactory.md#emit)
- [fallback](wrappers_IPoolFactory.IPoolFactory.md#fallback)
- [getProtocolFeeData](wrappers_IPoolFactory.IPoolFactory.md#getprotocolfeedata)
- [getProtocolFeeData()](wrappers_IPoolFactory.IPoolFactory.md#getprotocolfeedata())
- [liquidatorRewardFraction](wrappers_IPoolFactory.IPoolFactory.md#liquidatorrewardfraction)
- [liquidatorRewardFraction()](wrappers_IPoolFactory.IPoolFactory.md#liquidatorrewardfraction())
- [listenerCount](wrappers_IPoolFactory.IPoolFactory.md#listenercount)
- [listeners](wrappers_IPoolFactory.IPoolFactory.md#listeners)
- [loanWithdrawalDuration](wrappers_IPoolFactory.IPoolFactory.md#loanwithdrawalduration)
- [loanWithdrawalDuration()](wrappers_IPoolFactory.IPoolFactory.md#loanwithdrawalduration())
- [marginCallDuration](wrappers_IPoolFactory.IPoolFactory.md#margincallduration)
- [marginCallDuration()](wrappers_IPoolFactory.IPoolFactory.md#margincallduration())
- [minBorrowFraction](wrappers_IPoolFactory.IPoolFactory.md#minborrowfraction)
- [minBorrowFraction()](wrappers_IPoolFactory.IPoolFactory.md#minborrowfraction())
- [noStrategyAddress](wrappers_IPoolFactory.IPoolFactory.md#nostrategyaddress)
- [noStrategyAddress()](wrappers_IPoolFactory.IPoolFactory.md#nostrategyaddress())
- [off](wrappers_IPoolFactory.IPoolFactory.md#off)
- [on](wrappers_IPoolFactory.IPoolFactory.md#on)
- [once](wrappers_IPoolFactory.IPoolFactory.md#once)
- [owner](wrappers_IPoolFactory.IPoolFactory.md#owner)
- [owner()](wrappers_IPoolFactory.IPoolFactory.md#owner())
- [poolCancelPenaltyMultiple](wrappers_IPoolFactory.IPoolFactory.md#poolcancelpenaltymultiple)
- [poolCancelPenaltyMultiple()](wrappers_IPoolFactory.IPoolFactory.md#poolcancelpenaltymultiple())
- [poolRegistry](wrappers_IPoolFactory.IPoolFactory.md#poolregistry)
- [poolRegistry(address)](wrappers_IPoolFactory.IPoolFactory.md#poolregistry(address))
- [priceOracle](wrappers_IPoolFactory.IPoolFactory.md#priceoracle)
- [priceOracle()](wrappers_IPoolFactory.IPoolFactory.md#priceoracle())
- [queryFilter](wrappers_IPoolFactory.IPoolFactory.md#queryfilter)
- [removeAllListeners](wrappers_IPoolFactory.IPoolFactory.md#removealllisteners)
- [removeListener](wrappers_IPoolFactory.IPoolFactory.md#removelistener)
- [repaymentImpl](wrappers_IPoolFactory.IPoolFactory.md#repaymentimpl)
- [repaymentImpl()](wrappers_IPoolFactory.IPoolFactory.md#repaymentimpl())
- [savingsAccount](wrappers_IPoolFactory.IPoolFactory.md#savingsaccount)
- [savingsAccount()](wrappers_IPoolFactory.IPoolFactory.md#savingsaccount())
- [userRegistry](wrappers_IPoolFactory.IPoolFactory.md#userregistry)
- [userRegistry()](wrappers_IPoolFactory.IPoolFactory.md#userregistry())
- [getContractAddress](wrappers_IPoolFactory.IPoolFactory.md#getcontractaddress)
- [getInterface](wrappers_IPoolFactory.IPoolFactory.md#getinterface)
- [isIndexed](wrappers_IPoolFactory.IPoolFactory.md#isindexed)

## Constructors

### constructor

• **new IPoolFactory**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `collectionPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `collectionPeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getProtocolFeeData` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `string`] & { `protocolFeeCollector`: `string` ; `protocolFeeFraction`: `BigNumber`  }\> |
| `getProtocolFeeData()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `string`] & { `protocolFeeCollector`: `string` ; `protocolFeeFraction`: `BigNumber`  }\> |
| `liquidatorRewardFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `liquidatorRewardFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `loanWithdrawalDuration` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `loanWithdrawalDuration()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `marginCallDuration` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `marginCallDuration()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `minBorrowFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `minBorrowFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `noStrategyAddress` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `noStrategyAddress()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `poolCancelPenaltyMultiple` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `poolCancelPenaltyMultiple()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `poolRegistry` | (`pool`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `poolRegistry(address)` | (`pool`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `priceOracle` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `priceOracle()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `repaymentImpl` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `repaymentImpl()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `savingsAccount` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `savingsAccount()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `userRegistry` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `userRegistry()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/IPoolFactory.d.ts:291](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L291)

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
| `collectionPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `collectionPeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getProtocolFeeData` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getProtocolFeeData()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `liquidatorRewardFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `liquidatorRewardFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `loanWithdrawalDuration` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `loanWithdrawalDuration()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `marginCallDuration` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `marginCallDuration()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `minBorrowFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `minBorrowFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `noStrategyAddress` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `noStrategyAddress()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `poolCancelPenaltyMultiple` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `poolCancelPenaltyMultiple()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `poolRegistry` | (`pool`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `poolRegistry(address)` | (`pool`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `priceOracle` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `priceOracle()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `repaymentImpl` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `repaymentImpl()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `savingsAccount` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `savingsAccount()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `userRegistry` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `userRegistry()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/IPoolFactory.d.ts:417](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L417)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `BorrowTokenUpdated` | (`borrowToken`: `string`, `isSupported`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `boolean`], { `borrowToken`: `string` ; `isSupported`: `boolean`  }\> |
| `CollateralTokenUpdated` | (`collateralToken`: `string`, `isSupported`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `boolean`], { `collateralToken`: `string` ; `isSupported`: `boolean`  }\> |
| `CollectionPeriodUpdated` | (`updatedCollectionPeriod`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`], { `updatedCollectionPeriod`: `BigNumber`  }\> |
| `LimitsUpdated` | (`limitType`: `string`, `max`: ``null``, `min`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `BigNumber`, `BigNumber`], { `limitType`: `string` ; `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `LiquidatorRewardFractionUpdated` | (`updatedLiquidatorRewardFraction`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`], { `updatedLiquidatorRewardFraction`: `BigNumber`  }\> |
| `LoanWithdrawalDurationUpdated` | (`updatedLoanWithdrawalDuration`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`], { `updatedLoanWithdrawalDuration`: `BigNumber`  }\> |
| `MarginCallDurationUpdated` | (`updatedMarginCallDuration`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`], { `updatedMarginCallDuration`: `BigNumber`  }\> |
| `MinBorrowFractionUpdated` | (`updatedMinBorrowFraction`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`], { `updatedMinBorrowFraction`: `BigNumber`  }\> |
| `NoStrategyUpdated` | (`noStrategy`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `noStrategy`: `string`  }\> |
| `PoolCancelPenaltyMultipleUpdated` | (`updatedPoolCancelPenaltyMultiple`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`], { `updatedPoolCancelPenaltyMultiple`: `BigNumber`  }\> |
| `PoolCreated` | (`pool`: `string`, `borrower`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`], { `borrower`: `string` ; `pool`: `string`  }\> |
| `PoolInitSelectorUpdated` | (`updatedSelector`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `updatedSelector`: `string`  }\> |
| `PoolLogicUpdated` | (`updatedPoolLogic`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `updatedPoolLogic`: `string`  }\> |
| `PriceOracleUpdated` | (`updatedPriceOracle`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `updatedPriceOracle`: `string`  }\> |
| `ProtocolFeeCollectorUpdated` | (`updatedProtocolFeeCollector`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `updatedProtocolFeeCollector`: `string`  }\> |
| `ProtocolFeeFractionUpdated` | (`updatedProtocolFee`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`], { `updatedProtocolFee`: `BigNumber`  }\> |
| `RepaymentImplUpdated` | (`updatedRepaymentImpl`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `updatedRepaymentImpl`: `string`  }\> |
| `SavingsAccountUpdated` | (`savingsAccount`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `savingsAccount`: `string`  }\> |
| `StrategyRegistryUpdated` | (`updatedStrategyRegistry`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `updatedStrategyRegistry`: `string`  }\> |
| `UserRegistryUpdated` | (`updatedBorrowerRegistry`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `updatedBorrowerRegistry`: `string`  }\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/IPoolFactory.d.ts:359](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L359)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `collectionPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `collectionPeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getProtocolFeeData` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `string`] & { `protocolFeeCollector`: `string` ; `protocolFeeFraction`: `BigNumber`  }\> |
| `getProtocolFeeData()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `string`] & { `protocolFeeCollector`: `string` ; `protocolFeeFraction`: `BigNumber`  }\> |
| `liquidatorRewardFraction` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `liquidatorRewardFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `loanWithdrawalDuration` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `loanWithdrawalDuration()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `marginCallDuration` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `marginCallDuration()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `minBorrowFraction` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `minBorrowFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `noStrategyAddress` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `noStrategyAddress()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `poolCancelPenaltyMultiple` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `poolCancelPenaltyMultiple()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `poolRegistry` | (`pool`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `poolRegistry(address)` | (`pool`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `priceOracle` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `priceOracle()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `repaymentImpl` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `repaymentImpl()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `savingsAccount` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `savingsAccount()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `userRegistry` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `userRegistry()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/IPoolFactory.d.ts:157](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L157)

___

### interface

• **interface**: [`IPoolFactoryInterface`](../interfaces/wrappers_IPoolFactory.IPoolFactoryInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/IPoolFactory.d.ts:155](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L155)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `collectionPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `collectionPeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getProtocolFeeData` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getProtocolFeeData()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `liquidatorRewardFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `liquidatorRewardFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `loanWithdrawalDuration` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `loanWithdrawalDuration()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `marginCallDuration` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `marginCallDuration()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `minBorrowFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `minBorrowFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `noStrategyAddress` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `noStrategyAddress()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `poolCancelPenaltyMultiple` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `poolCancelPenaltyMultiple()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `poolRegistry` | (`pool`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `poolRegistry(address)` | (`pool`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `priceOracle` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `priceOracle()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `repaymentImpl` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `repaymentImpl()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `savingsAccount` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `savingsAccount()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `userRegistry` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `userRegistry()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/IPoolFactory.d.ts:475](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L475)

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

▸ **attach**(`addressOrName`): [`IPoolFactory`](wrappers_IPoolFactory.IPoolFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IPoolFactory`](wrappers_IPoolFactory.IPoolFactory.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/IPoolFactory.d.ts:116](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L116)

___

### collectionPeriod

▸ **collectionPeriod**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IPoolFactory.d.ts:225](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L225)

___

### collectionPeriod()

▸ **collectionPeriod()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IPoolFactory.d.ts:227](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L227)

___

### connect

▸ **connect**(`signerOrProvider`): [`IPoolFactory`](wrappers_IPoolFactory.IPoolFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IPoolFactory`](wrappers_IPoolFactory.IPoolFactory.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/IPoolFactory.d.ts:115](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L115)

___

### deployed

▸ **deployed**(): `Promise`<[`IPoolFactory`](wrappers_IPoolFactory.IPoolFactory.md)\>

#### Returns

`Promise`<[`IPoolFactory`](wrappers_IPoolFactory.IPoolFactory.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/IPoolFactory.d.ts:117](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L117)

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

### getProtocolFeeData

▸ **getProtocolFeeData**(`overrides?`): `Promise`<[`BigNumber`, `string`] & { `protocolFeeCollector`: `string` ; `protocolFeeFraction`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `string`] & { `protocolFeeCollector`: `string` ; `protocolFeeFraction`: `BigNumber`  }\>

#### Defined in

[src/wrappers/IPoolFactory.d.ts:229](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L229)

___

### getProtocolFeeData()

▸ **getProtocolFeeData()**(`overrides?`): `Promise`<[`BigNumber`, `string`] & { `protocolFeeCollector`: `string` ; `protocolFeeFraction`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `string`] & { `protocolFeeCollector`: `string` ; `protocolFeeFraction`: `BigNumber`  }\>

#### Defined in

[src/wrappers/IPoolFactory.d.ts:236](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L236)

___

### liquidatorRewardFraction

▸ **liquidatorRewardFraction**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IPoolFactory.d.ts:243](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L243)

___

### liquidatorRewardFraction()

▸ **liquidatorRewardFraction()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IPoolFactory.d.ts:245](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L245)

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

[src/wrappers/IPoolFactory.d.ts:119](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L119)

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

[src/wrappers/IPoolFactory.d.ts:142](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L142)

___

### loanWithdrawalDuration

▸ **loanWithdrawalDuration**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IPoolFactory.d.ts:247](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L247)

___

### loanWithdrawalDuration()

▸ **loanWithdrawalDuration()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IPoolFactory.d.ts:249](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L249)

___

### marginCallDuration

▸ **marginCallDuration**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IPoolFactory.d.ts:251](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L251)

___

### marginCallDuration()

▸ **marginCallDuration()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IPoolFactory.d.ts:253](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L253)

___

### minBorrowFraction

▸ **minBorrowFraction**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IPoolFactory.d.ts:255](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L255)

___

### minBorrowFraction()

▸ **minBorrowFraction()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IPoolFactory.d.ts:257](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L257)

___

### noStrategyAddress

▸ **noStrategyAddress**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/IPoolFactory.d.ts:259](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L259)

___

### noStrategyAddress()

▸ **noStrategyAddress()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/IPoolFactory.d.ts:261](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L261)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IPoolFactory`](wrappers_IPoolFactory.IPoolFactory.md)

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

[`IPoolFactory`](wrappers_IPoolFactory.IPoolFactory.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IPoolFactory.d.ts:122](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L122)

▸ **off**(`eventName`, `listener`): [`IPoolFactory`](wrappers_IPoolFactory.IPoolFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IPoolFactory`](wrappers_IPoolFactory.IPoolFactory.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IPoolFactory.d.ts:143](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L143)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IPoolFactory`](wrappers_IPoolFactory.IPoolFactory.md)

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

[`IPoolFactory`](wrappers_IPoolFactory.IPoolFactory.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IPoolFactory.d.ts:126](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L126)

▸ **on**(`eventName`, `listener`): [`IPoolFactory`](wrappers_IPoolFactory.IPoolFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IPoolFactory`](wrappers_IPoolFactory.IPoolFactory.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IPoolFactory.d.ts:144](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L144)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IPoolFactory`](wrappers_IPoolFactory.IPoolFactory.md)

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

[`IPoolFactory`](wrappers_IPoolFactory.IPoolFactory.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IPoolFactory.d.ts:130](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L130)

▸ **once**(`eventName`, `listener`): [`IPoolFactory`](wrappers_IPoolFactory.IPoolFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IPoolFactory`](wrappers_IPoolFactory.IPoolFactory.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IPoolFactory.d.ts:145](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L145)

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

[src/wrappers/IPoolFactory.d.ts:263](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L263)

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

[src/wrappers/IPoolFactory.d.ts:265](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L265)

___

### poolCancelPenaltyMultiple

▸ **poolCancelPenaltyMultiple**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IPoolFactory.d.ts:267](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L267)

___

### poolCancelPenaltyMultiple()

▸ **poolCancelPenaltyMultiple()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IPoolFactory.d.ts:269](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L269)

___

### poolRegistry

▸ **poolRegistry**(`pool`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IPoolFactory.d.ts:271](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L271)

___

### poolRegistry(address)

▸ **poolRegistry(address)**(`pool`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IPoolFactory.d.ts:273](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L273)

___

### priceOracle

▸ **priceOracle**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/IPoolFactory.d.ts:275](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L275)

___

### priceOracle()

▸ **priceOracle()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/IPoolFactory.d.ts:277](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L277)

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

[src/wrappers/IPoolFactory.d.ts:149](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L149)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`IPoolFactory`](wrappers_IPoolFactory.IPoolFactory.md)

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

[`IPoolFactory`](wrappers_IPoolFactory.IPoolFactory.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IPoolFactory.d.ts:138](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L138)

▸ **removeAllListeners**(`eventName?`): [`IPoolFactory`](wrappers_IPoolFactory.IPoolFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IPoolFactory`](wrappers_IPoolFactory.IPoolFactory.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IPoolFactory.d.ts:147](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L147)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IPoolFactory`](wrappers_IPoolFactory.IPoolFactory.md)

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

[`IPoolFactory`](wrappers_IPoolFactory.IPoolFactory.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IPoolFactory.d.ts:134](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L134)

▸ **removeListener**(`eventName`, `listener`): [`IPoolFactory`](wrappers_IPoolFactory.IPoolFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IPoolFactory`](wrappers_IPoolFactory.IPoolFactory.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IPoolFactory.d.ts:146](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L146)

___

### repaymentImpl

▸ **repaymentImpl**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/IPoolFactory.d.ts:279](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L279)

___

### repaymentImpl()

▸ **repaymentImpl()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/IPoolFactory.d.ts:281](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L281)

___

### savingsAccount

▸ **savingsAccount**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/IPoolFactory.d.ts:283](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L283)

___

### savingsAccount()

▸ **savingsAccount()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/IPoolFactory.d.ts:285](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L285)

___

### userRegistry

▸ **userRegistry**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/IPoolFactory.d.ts:287](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L287)

___

### userRegistry()

▸ **userRegistry()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/IPoolFactory.d.ts:289](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/wrappers/IPoolFactory.d.ts#L289)

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
