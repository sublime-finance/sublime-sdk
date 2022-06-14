[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/PoolFactory](../modules/wrappers_PoolFactory.md) / PoolFactory

# Class: PoolFactory

[wrappers/PoolFactory](../modules/wrappers_PoolFactory.md).PoolFactory

## Hierarchy

- `Contract`

  ↳ **`PoolFactory`**

## Table of contents

### Constructors

- [constructor](wrappers_PoolFactory.PoolFactory.md#constructor)

### Properties

- [\_deployedPromise](wrappers_PoolFactory.PoolFactory.md#_deployedpromise)
- [\_runningEvents](wrappers_PoolFactory.PoolFactory.md#_runningevents)
- [\_wrappedEmits](wrappers_PoolFactory.PoolFactory.md#_wrappedemits)
- [address](wrappers_PoolFactory.PoolFactory.md#address)
- [callStatic](wrappers_PoolFactory.PoolFactory.md#callstatic)
- [deployTransaction](wrappers_PoolFactory.PoolFactory.md#deploytransaction)
- [estimateGas](wrappers_PoolFactory.PoolFactory.md#estimategas)
- [filters](wrappers_PoolFactory.PoolFactory.md#filters)
- [functions](wrappers_PoolFactory.PoolFactory.md#functions)
- [interface](wrappers_PoolFactory.PoolFactory.md#interface)
- [populateTransaction](wrappers_PoolFactory.PoolFactory.md#populatetransaction)
- [provider](wrappers_PoolFactory.PoolFactory.md#provider)
- [resolvedAddress](wrappers_PoolFactory.PoolFactory.md#resolvedaddress)
- [signer](wrappers_PoolFactory.PoolFactory.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_PoolFactory.PoolFactory.md#_checkrunningevents)
- [\_deployed](wrappers_PoolFactory.PoolFactory.md#_deployed)
- [\_wrapEvent](wrappers_PoolFactory.PoolFactory.md#_wrapevent)
- [attach](wrappers_PoolFactory.PoolFactory.md#attach)
- [beacon](wrappers_PoolFactory.PoolFactory.md#beacon)
- [beacon()](wrappers_PoolFactory.PoolFactory.md#beacon())
- [borrowRateLimit](wrappers_PoolFactory.PoolFactory.md#borrowratelimit)
- [borrowRateLimit()](wrappers_PoolFactory.PoolFactory.md#borrowratelimit())
- [collectionPeriod](wrappers_PoolFactory.PoolFactory.md#collectionperiod)
- [collectionPeriod()](wrappers_PoolFactory.PoolFactory.md#collectionperiod())
- [connect](wrappers_PoolFactory.PoolFactory.md#connect)
- [createPool](wrappers_PoolFactory.PoolFactory.md#createpool)
- [createPool(uint256,uint256,address,address,uint256,uint64,uint64,address,uint256,bool,bytes32,address,address)](wrappers_PoolFactory.PoolFactory.md#createpool(uint256,uint256,address,address,uint256,uint64,uint64,address,uint256,bool,bytes32,address,address))
- [deployed](wrappers_PoolFactory.PoolFactory.md#deployed)
- [emit](wrappers_PoolFactory.PoolFactory.md#emit)
- [fallback](wrappers_PoolFactory.PoolFactory.md#fallback)
- [getProtocolFeeData](wrappers_PoolFactory.PoolFactory.md#getprotocolfeedata)
- [getProtocolFeeData()](wrappers_PoolFactory.PoolFactory.md#getprotocolfeedata())
- [idealCollateralRatioLimit](wrappers_PoolFactory.PoolFactory.md#idealcollateralratiolimit)
- [idealCollateralRatioLimit()](wrappers_PoolFactory.PoolFactory.md#idealcollateralratiolimit())
- [initialize](wrappers_PoolFactory.PoolFactory.md#initialize)
- [initialize(address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address)](wrappers_PoolFactory.PoolFactory.md#initialize(address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address))
- [isBorrowToken](wrappers_PoolFactory.PoolFactory.md#isborrowtoken)
- [isBorrowToken(address)](wrappers_PoolFactory.PoolFactory.md#isborrowtoken(address))
- [isCollateralToken](wrappers_PoolFactory.PoolFactory.md#iscollateraltoken)
- [isCollateralToken(address)](wrappers_PoolFactory.PoolFactory.md#iscollateraltoken(address))
- [liquidatorRewardFraction](wrappers_PoolFactory.PoolFactory.md#liquidatorrewardfraction)
- [liquidatorRewardFraction()](wrappers_PoolFactory.PoolFactory.md#liquidatorrewardfraction())
- [listenerCount](wrappers_PoolFactory.PoolFactory.md#listenercount)
- [listeners](wrappers_PoolFactory.PoolFactory.md#listeners)
- [loanWithdrawalDuration](wrappers_PoolFactory.PoolFactory.md#loanwithdrawalduration)
- [loanWithdrawalDuration()](wrappers_PoolFactory.PoolFactory.md#loanwithdrawalduration())
- [marginCallDuration](wrappers_PoolFactory.PoolFactory.md#margincallduration)
- [marginCallDuration()](wrappers_PoolFactory.PoolFactory.md#margincallduration())
- [minBorrowFraction](wrappers_PoolFactory.PoolFactory.md#minborrowfraction)
- [minBorrowFraction()](wrappers_PoolFactory.PoolFactory.md#minborrowfraction())
- [noOfRepaymentIntervalsLimit](wrappers_PoolFactory.PoolFactory.md#noofrepaymentintervalslimit)
- [noOfRepaymentIntervalsLimit()](wrappers_PoolFactory.PoolFactory.md#noofrepaymentintervalslimit())
- [noStrategyAddress](wrappers_PoolFactory.PoolFactory.md#nostrategyaddress)
- [noStrategyAddress()](wrappers_PoolFactory.PoolFactory.md#nostrategyaddress())
- [off](wrappers_PoolFactory.PoolFactory.md#off)
- [on](wrappers_PoolFactory.PoolFactory.md#on)
- [once](wrappers_PoolFactory.PoolFactory.md#once)
- [owner](wrappers_PoolFactory.PoolFactory.md#owner)
- [owner()](wrappers_PoolFactory.PoolFactory.md#owner())
- [poolCancelPenaltyMultiple](wrappers_PoolFactory.PoolFactory.md#poolcancelpenaltymultiple)
- [poolCancelPenaltyMultiple()](wrappers_PoolFactory.PoolFactory.md#poolcancelpenaltymultiple())
- [poolRegistry](wrappers_PoolFactory.PoolFactory.md#poolregistry)
- [poolRegistry(address)](wrappers_PoolFactory.PoolFactory.md#poolregistry(address))
- [poolSizeLimit](wrappers_PoolFactory.PoolFactory.md#poolsizelimit)
- [poolSizeLimit()](wrappers_PoolFactory.PoolFactory.md#poolsizelimit())
- [preComputeAddress](wrappers_PoolFactory.PoolFactory.md#precomputeaddress)
- [preComputeAddress(address,bytes32)](wrappers_PoolFactory.PoolFactory.md#precomputeaddress(address,bytes32))
- [priceOracle](wrappers_PoolFactory.PoolFactory.md#priceoracle)
- [priceOracle()](wrappers_PoolFactory.PoolFactory.md#priceoracle())
- [protocolFeeCollector](wrappers_PoolFactory.PoolFactory.md#protocolfeecollector)
- [protocolFeeCollector()](wrappers_PoolFactory.PoolFactory.md#protocolfeecollector())
- [protocolFeeFraction](wrappers_PoolFactory.PoolFactory.md#protocolfeefraction)
- [protocolFeeFraction()](wrappers_PoolFactory.PoolFactory.md#protocolfeefraction())
- [queryFilter](wrappers_PoolFactory.PoolFactory.md#queryfilter)
- [removeAllListeners](wrappers_PoolFactory.PoolFactory.md#removealllisteners)
- [removeListener](wrappers_PoolFactory.PoolFactory.md#removelistener)
- [renounceOwnership](wrappers_PoolFactory.PoolFactory.md#renounceownership)
- [renounceOwnership()](wrappers_PoolFactory.PoolFactory.md#renounceownership())
- [repaymentImpl](wrappers_PoolFactory.PoolFactory.md#repaymentimpl)
- [repaymentImpl()](wrappers_PoolFactory.PoolFactory.md#repaymentimpl())
- [repaymentIntervalLimit](wrappers_PoolFactory.PoolFactory.md#repaymentintervallimit)
- [repaymentIntervalLimit()](wrappers_PoolFactory.PoolFactory.md#repaymentintervallimit())
- [savingsAccount](wrappers_PoolFactory.PoolFactory.md#savingsaccount)
- [savingsAccount()](wrappers_PoolFactory.PoolFactory.md#savingsaccount())
- [setImplementations](wrappers_PoolFactory.PoolFactory.md#setimplementations)
- [setImplementations(address,address,address,address,address)](wrappers_PoolFactory.PoolFactory.md#setimplementations(address,address,address,address,address))
- [strategyRegistry](wrappers_PoolFactory.PoolFactory.md#strategyregistry)
- [strategyRegistry()](wrappers_PoolFactory.PoolFactory.md#strategyregistry())
- [transferOwnership](wrappers_PoolFactory.PoolFactory.md#transferownership)
- [transferOwnership(address)](wrappers_PoolFactory.PoolFactory.md#transferownership(address))
- [updateBorrowRateLimit](wrappers_PoolFactory.PoolFactory.md#updateborrowratelimit)
- [updateBorrowRateLimit(uint256,uint256)](wrappers_PoolFactory.PoolFactory.md#updateborrowratelimit(uint256,uint256))
- [updateCollectionPeriod](wrappers_PoolFactory.PoolFactory.md#updatecollectionperiod)
- [updateCollectionPeriod(uint256)](wrappers_PoolFactory.PoolFactory.md#updatecollectionperiod(uint256))
- [updateLiquidatorRewardFraction](wrappers_PoolFactory.PoolFactory.md#updateliquidatorrewardfraction)
- [updateLiquidatorRewardFraction(uint256)](wrappers_PoolFactory.PoolFactory.md#updateliquidatorrewardfraction(uint256))
- [updateLoanWithdrawalDuration](wrappers_PoolFactory.PoolFactory.md#updateloanwithdrawalduration)
- [updateLoanWithdrawalDuration(uint256)](wrappers_PoolFactory.PoolFactory.md#updateloanwithdrawalduration(uint256))
- [updateMarginCallDuration](wrappers_PoolFactory.PoolFactory.md#updatemargincallduration)
- [updateMarginCallDuration(uint256)](wrappers_PoolFactory.PoolFactory.md#updatemargincallduration(uint256))
- [updateMinBorrowFraction](wrappers_PoolFactory.PoolFactory.md#updateminborrowfraction)
- [updateMinBorrowFraction(uint256)](wrappers_PoolFactory.PoolFactory.md#updateminborrowfraction(uint256))
- [updateNoOfRepaymentIntervalsLimit](wrappers_PoolFactory.PoolFactory.md#updatenoofrepaymentintervalslimit)
- [updateNoOfRepaymentIntervalsLimit(uint256,uint256)](wrappers_PoolFactory.PoolFactory.md#updatenoofrepaymentintervalslimit(uint256,uint256))
- [updateNoStrategy](wrappers_PoolFactory.PoolFactory.md#updatenostrategy)
- [updateNoStrategy(address)](wrappers_PoolFactory.PoolFactory.md#updatenostrategy(address))
- [updatePoolCancelPenaltyMultiple](wrappers_PoolFactory.PoolFactory.md#updatepoolcancelpenaltymultiple)
- [updatePoolCancelPenaltyMultiple(uint256)](wrappers_PoolFactory.PoolFactory.md#updatepoolcancelpenaltymultiple(uint256))
- [updatePoolSizeLimit](wrappers_PoolFactory.PoolFactory.md#updatepoolsizelimit)
- [updatePoolSizeLimit(uint256,uint256)](wrappers_PoolFactory.PoolFactory.md#updatepoolsizelimit(uint256,uint256))
- [updatePriceoracle](wrappers_PoolFactory.PoolFactory.md#updatepriceoracle)
- [updatePriceoracle(address)](wrappers_PoolFactory.PoolFactory.md#updatepriceoracle(address))
- [updateProtocolFeeCollector](wrappers_PoolFactory.PoolFactory.md#updateprotocolfeecollector)
- [updateProtocolFeeCollector(address)](wrappers_PoolFactory.PoolFactory.md#updateprotocolfeecollector(address))
- [updateProtocolFeeFraction](wrappers_PoolFactory.PoolFactory.md#updateprotocolfeefraction)
- [updateProtocolFeeFraction(uint256)](wrappers_PoolFactory.PoolFactory.md#updateprotocolfeefraction(uint256))
- [updateRepaymentImpl](wrappers_PoolFactory.PoolFactory.md#updaterepaymentimpl)
- [updateRepaymentImpl(address)](wrappers_PoolFactory.PoolFactory.md#updaterepaymentimpl(address))
- [updateRepaymentIntervalLimit](wrappers_PoolFactory.PoolFactory.md#updaterepaymentintervallimit)
- [updateRepaymentIntervalLimit(uint256,uint256)](wrappers_PoolFactory.PoolFactory.md#updaterepaymentintervallimit(uint256,uint256))
- [updateSavingsAccount](wrappers_PoolFactory.PoolFactory.md#updatesavingsaccount)
- [updateSavingsAccount(address)](wrappers_PoolFactory.PoolFactory.md#updatesavingsaccount(address))
- [updateStrategyRegistry](wrappers_PoolFactory.PoolFactory.md#updatestrategyregistry)
- [updateStrategyRegistry(address)](wrappers_PoolFactory.PoolFactory.md#updatestrategyregistry(address))
- [updateSupportedBorrowTokens](wrappers_PoolFactory.PoolFactory.md#updatesupportedborrowtokens)
- [updateSupportedBorrowTokens(address,bool)](wrappers_PoolFactory.PoolFactory.md#updatesupportedborrowtokens(address,bool))
- [updateSupportedCollateralTokens](wrappers_PoolFactory.PoolFactory.md#updatesupportedcollateraltokens)
- [updateSupportedCollateralTokens(address,bool)](wrappers_PoolFactory.PoolFactory.md#updatesupportedcollateraltokens(address,bool))
- [updateUserRegistry](wrappers_PoolFactory.PoolFactory.md#updateuserregistry)
- [updateUserRegistry(address)](wrappers_PoolFactory.PoolFactory.md#updateuserregistry(address))
- [updateidealCollateralRatioLimit](wrappers_PoolFactory.PoolFactory.md#updateidealcollateralratiolimit)
- [updateidealCollateralRatioLimit(uint256,uint256)](wrappers_PoolFactory.PoolFactory.md#updateidealcollateralratiolimit(uint256,uint256))
- [usdcAsset](wrappers_PoolFactory.PoolFactory.md#usdcasset)
- [usdcAsset()](wrappers_PoolFactory.PoolFactory.md#usdcasset())
- [userRegistry](wrappers_PoolFactory.PoolFactory.md#userregistry)
- [userRegistry()](wrappers_PoolFactory.PoolFactory.md#userregistry())
- [getContractAddress](wrappers_PoolFactory.PoolFactory.md#getcontractaddress)
- [getInterface](wrappers_PoolFactory.PoolFactory.md#getinterface)
- [isIndexed](wrappers_PoolFactory.PoolFactory.md#isindexed)

## Constructors

### constructor

• **new PoolFactory**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `beacon` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `beacon()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `borrowRateLimit` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `borrowRateLimit()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `collectionPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `collectionPeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `createPool` | (`_poolSize`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_borrowToken`: `string`, `_collateralToken`: `string`, `_idealCollateralRatio`: `BigNumberish`, `_repaymentInterval`: `BigNumberish`, `_noOfRepaymentIntervals`: `BigNumberish`, `_poolSavingsStrategy`: `string`, `_collateralAmount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `_salt`: `BytesLike`, `_borrowerVerifier`: `string`, `_lenderVerifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `createPool(uint256,uint256,address,address,uint256,uint64,uint64,address,uint256,bool,bytes32,address,address)` | (`_poolSize`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_borrowToken`: `string`, `_collateralToken`: `string`, `_idealCollateralRatio`: `BigNumberish`, `_repaymentInterval`: `BigNumberish`, `_noOfRepaymentIntervals`: `BigNumberish`, `_poolSavingsStrategy`: `string`, `_collateralAmount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `_salt`: `BytesLike`, `_borrowerVerifier`: `string`, `_lenderVerifier`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getProtocolFeeData` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `string`]\> |
| `getProtocolFeeData()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `string`]\> |
| `idealCollateralRatioLimit` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `idealCollateralRatioLimit()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `initialize` | (`_admin`: `string`, `_collectionPeriod`: `BigNumberish`, `_loanWithdrawalDuration`: `BigNumberish`, `_marginCallDuration`: `BigNumberish`, `_liquidatorRewardFraction`: `BigNumberish`, `_poolCancelPenaltyMultiple`: `BigNumberish`, `_minBorrowFraction`: `BigNumberish`, `_protocolFeeFraction`: `BigNumberish`, `_protocolFeeCollector`: `string`, `_noStrategy`: `string`, `_beacon`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialize(address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address)` | (`_admin`: `string`, `_collectionPeriod`: `BigNumberish`, `_loanWithdrawalDuration`: `BigNumberish`, `_marginCallDuration`: `BigNumberish`, `_liquidatorRewardFraction`: `BigNumberish`, `_poolCancelPenaltyMultiple`: `BigNumberish`, `_minBorrowFraction`: `BigNumberish`, `_protocolFeeFraction`: `BigNumberish`, `_protocolFeeCollector`: `string`, `_noStrategy`: `string`, `_beacon`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `isBorrowToken` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isBorrowToken(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isCollateralToken` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isCollateralToken(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `liquidatorRewardFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `liquidatorRewardFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `loanWithdrawalDuration` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `loanWithdrawalDuration()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `marginCallDuration` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `marginCallDuration()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `minBorrowFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `minBorrowFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `noOfRepaymentIntervalsLimit` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `noOfRepaymentIntervalsLimit()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `noStrategyAddress` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `noStrategyAddress()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `poolCancelPenaltyMultiple` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `poolCancelPenaltyMultiple()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `poolRegistry` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `poolRegistry(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `poolSizeLimit` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `poolSizeLimit()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `preComputeAddress` | (`creator`: `string`, `salt`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `preComputeAddress(address,bytes32)` | (`creator`: `string`, `salt`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `priceOracle` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `priceOracle()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `protocolFeeCollector` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `protocolFeeCollector()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `protocolFeeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `protocolFeeFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `renounceOwnership` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `renounceOwnership()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `repaymentImpl` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `repaymentImpl()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `repaymentIntervalLimit` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `repaymentIntervalLimit()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `savingsAccount` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `savingsAccount()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `setImplementations` | (`_repaymentImpl`: `string`, `_userRegistry`: `string`, `_strategyRegistry`: `string`, `_priceOracle`: `string`, `_savingsAccount`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setImplementations(address,address,address,address,address)` | (`_repaymentImpl`: `string`, `_userRegistry`: `string`, `_strategyRegistry`: `string`, `_priceOracle`: `string`, `_savingsAccount`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `strategyRegistry` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `strategyRegistry()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateBorrowRateLimit` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateBorrowRateLimit(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateCollectionPeriod` | (`_collectionPeriod`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateCollectionPeriod(uint256)` | (`_collectionPeriod`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateLiquidatorRewardFraction` | (`_liquidatorRewardFraction`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateLiquidatorRewardFraction(uint256)` | (`_liquidatorRewardFraction`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateLoanWithdrawalDuration` | (`_loanWithdrawalDuration`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateLoanWithdrawalDuration(uint256)` | (`_loanWithdrawalDuration`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateMarginCallDuration` | (`_marginCallDuration`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateMarginCallDuration(uint256)` | (`_marginCallDuration`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateMinBorrowFraction` | (`_minBorrowFraction`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateMinBorrowFraction(uint256)` | (`_minBorrowFraction`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateNoOfRepaymentIntervalsLimit` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateNoOfRepaymentIntervalsLimit(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateNoStrategy` | (`_noStrategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateNoStrategy(address)` | (`_noStrategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updatePoolCancelPenaltyMultiple` | (`_poolCancelPenaltyMultiple`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updatePoolCancelPenaltyMultiple(uint256)` | (`_poolCancelPenaltyMultiple`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updatePoolSizeLimit` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updatePoolSizeLimit(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updatePriceoracle` | (`_priceOracle`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updatePriceoracle(address)` | (`_priceOracle`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateProtocolFeeCollector` | (`_protocolFeeCollector`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateProtocolFeeCollector(address)` | (`_protocolFeeCollector`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateProtocolFeeFraction` | (`_protocolFee`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateProtocolFeeFraction(uint256)` | (`_protocolFee`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateRepaymentImpl` | (`_repaymentImpl`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateRepaymentImpl(address)` | (`_repaymentImpl`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateRepaymentIntervalLimit` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateRepaymentIntervalLimit(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateSavingsAccount` | (`_savingsAccount`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateSavingsAccount(address)` | (`_savingsAccount`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateStrategyRegistry` | (`_strategyRegistry`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateStrategyRegistry(address)` | (`_strategyRegistry`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateSupportedBorrowTokens` | (`_borrowToken`: `string`, `_isSupported`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateSupportedBorrowTokens(address,bool)` | (`_borrowToken`: `string`, `_isSupported`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateSupportedCollateralTokens` | (`_collateralToken`: `string`, `_isSupported`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateSupportedCollateralTokens(address,bool)` | (`_collateralToken`: `string`, `_isSupported`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateUserRegistry` | (`_userRegistry`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateUserRegistry(address)` | (`_userRegistry`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateidealCollateralRatioLimit` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateidealCollateralRatioLimit(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `usdcAsset` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `usdcAsset()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `userRegistry` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `userRegistry()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/PoolFactory.d.ts:1135](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1135)

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
| `beacon` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `beacon()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `borrowRateLimit` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `borrowRateLimit()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `collectionPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `collectionPeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `createPool` | (`_poolSize`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_borrowToken`: `string`, `_collateralToken`: `string`, `_idealCollateralRatio`: `BigNumberish`, `_repaymentInterval`: `BigNumberish`, `_noOfRepaymentIntervals`: `BigNumberish`, `_poolSavingsStrategy`: `string`, `_collateralAmount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `_salt`: `BytesLike`, `_borrowerVerifier`: `string`, `_lenderVerifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `createPool(uint256,uint256,address,address,uint256,uint64,uint64,address,uint256,bool,bytes32,address,address)` | (`_poolSize`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_borrowToken`: `string`, `_collateralToken`: `string`, `_idealCollateralRatio`: `BigNumberish`, `_repaymentInterval`: `BigNumberish`, `_noOfRepaymentIntervals`: `BigNumberish`, `_poolSavingsStrategy`: `string`, `_collateralAmount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `_salt`: `BytesLike`, `_borrowerVerifier`: `string`, `_lenderVerifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getProtocolFeeData` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getProtocolFeeData()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `idealCollateralRatioLimit` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `idealCollateralRatioLimit()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `initialize` | (`_admin`: `string`, `_collectionPeriod`: `BigNumberish`, `_loanWithdrawalDuration`: `BigNumberish`, `_marginCallDuration`: `BigNumberish`, `_liquidatorRewardFraction`: `BigNumberish`, `_poolCancelPenaltyMultiple`: `BigNumberish`, `_minBorrowFraction`: `BigNumberish`, `_protocolFeeFraction`: `BigNumberish`, `_protocolFeeCollector`: `string`, `_noStrategy`: `string`, `_beacon`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initialize(address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address)` | (`_admin`: `string`, `_collectionPeriod`: `BigNumberish`, `_loanWithdrawalDuration`: `BigNumberish`, `_marginCallDuration`: `BigNumberish`, `_liquidatorRewardFraction`: `BigNumberish`, `_poolCancelPenaltyMultiple`: `BigNumberish`, `_minBorrowFraction`: `BigNumberish`, `_protocolFeeFraction`: `BigNumberish`, `_protocolFeeCollector`: `string`, `_noStrategy`: `string`, `_beacon`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `isBorrowToken` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isBorrowToken(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isCollateralToken` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isCollateralToken(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `liquidatorRewardFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `liquidatorRewardFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `loanWithdrawalDuration` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `loanWithdrawalDuration()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `marginCallDuration` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `marginCallDuration()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `minBorrowFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `minBorrowFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `noOfRepaymentIntervalsLimit` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `noOfRepaymentIntervalsLimit()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `noStrategyAddress` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `noStrategyAddress()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `poolCancelPenaltyMultiple` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `poolCancelPenaltyMultiple()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `poolRegistry` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `poolRegistry(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `poolSizeLimit` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `poolSizeLimit()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `preComputeAddress` | (`creator`: `string`, `salt`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `preComputeAddress(address,bytes32)` | (`creator`: `string`, `salt`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `priceOracle` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `priceOracle()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `protocolFeeCollector` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `protocolFeeCollector()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `protocolFeeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `protocolFeeFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `repaymentImpl` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `repaymentImpl()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `repaymentIntervalLimit` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `repaymentIntervalLimit()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `savingsAccount` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `savingsAccount()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `setImplementations` | (`_repaymentImpl`: `string`, `_userRegistry`: `string`, `_strategyRegistry`: `string`, `_priceOracle`: `string`, `_savingsAccount`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setImplementations(address,address,address,address,address)` | (`_repaymentImpl`: `string`, `_userRegistry`: `string`, `_strategyRegistry`: `string`, `_priceOracle`: `string`, `_savingsAccount`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `strategyRegistry` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `strategyRegistry()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateBorrowRateLimit` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateBorrowRateLimit(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateCollectionPeriod` | (`_collectionPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateCollectionPeriod(uint256)` | (`_collectionPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateLiquidatorRewardFraction` | (`_liquidatorRewardFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateLiquidatorRewardFraction(uint256)` | (`_liquidatorRewardFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateLoanWithdrawalDuration` | (`_loanWithdrawalDuration`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateLoanWithdrawalDuration(uint256)` | (`_loanWithdrawalDuration`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateMarginCallDuration` | (`_marginCallDuration`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateMarginCallDuration(uint256)` | (`_marginCallDuration`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateMinBorrowFraction` | (`_minBorrowFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateMinBorrowFraction(uint256)` | (`_minBorrowFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateNoOfRepaymentIntervalsLimit` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateNoOfRepaymentIntervalsLimit(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateNoStrategy` | (`_noStrategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateNoStrategy(address)` | (`_noStrategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updatePoolCancelPenaltyMultiple` | (`_poolCancelPenaltyMultiple`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updatePoolCancelPenaltyMultiple(uint256)` | (`_poolCancelPenaltyMultiple`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updatePoolSizeLimit` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updatePoolSizeLimit(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updatePriceoracle` | (`_priceOracle`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updatePriceoracle(address)` | (`_priceOracle`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateProtocolFeeCollector` | (`_protocolFeeCollector`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateProtocolFeeCollector(address)` | (`_protocolFeeCollector`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateProtocolFeeFraction` | (`_protocolFee`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateProtocolFeeFraction(uint256)` | (`_protocolFee`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateRepaymentImpl` | (`_repaymentImpl`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateRepaymentImpl(address)` | (`_repaymentImpl`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateRepaymentIntervalLimit` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateRepaymentIntervalLimit(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateSavingsAccount` | (`_savingsAccount`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateSavingsAccount(address)` | (`_savingsAccount`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateStrategyRegistry` | (`_strategyRegistry`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateStrategyRegistry(address)` | (`_strategyRegistry`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateSupportedBorrowTokens` | (`_borrowToken`: `string`, `_isSupported`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateSupportedBorrowTokens(address,bool)` | (`_borrowToken`: `string`, `_isSupported`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateSupportedCollateralTokens` | (`_collateralToken`: `string`, `_isSupported`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateSupportedCollateralTokens(address,bool)` | (`_collateralToken`: `string`, `_isSupported`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateUserRegistry` | (`_userRegistry`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateUserRegistry(address)` | (`_userRegistry`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateidealCollateralRatioLimit` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateidealCollateralRatioLimit(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `usdcAsset` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `usdcAsset()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `userRegistry` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `userRegistry()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/PoolFactory.d.ts:1486](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1486)

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
| `OwnershipTransferred` | (`previousOwner`: `string`, `newOwner`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`], { `newOwner`: `string` ; `previousOwner`: `string`  }\> |
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

[src/wrappers/PoolFactory.d.ts:1423](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1423)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `beacon` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `beacon()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `borrowRateLimit` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `borrowRateLimit()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `collectionPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `collectionPeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `createPool` | (`_poolSize`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_borrowToken`: `string`, `_collateralToken`: `string`, `_idealCollateralRatio`: `BigNumberish`, `_repaymentInterval`: `BigNumberish`, `_noOfRepaymentIntervals`: `BigNumberish`, `_poolSavingsStrategy`: `string`, `_collateralAmount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `_salt`: `BytesLike`, `_borrowerVerifier`: `string`, `_lenderVerifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `createPool(uint256,uint256,address,address,uint256,uint64,uint64,address,uint256,bool,bytes32,address,address)` | (`_poolSize`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_borrowToken`: `string`, `_collateralToken`: `string`, `_idealCollateralRatio`: `BigNumberish`, `_repaymentInterval`: `BigNumberish`, `_noOfRepaymentIntervals`: `BigNumberish`, `_poolSavingsStrategy`: `string`, `_collateralAmount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `_salt`: `BytesLike`, `_borrowerVerifier`: `string`, `_lenderVerifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getProtocolFeeData` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `string`]\> |
| `getProtocolFeeData()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `string`]\> |
| `idealCollateralRatioLimit` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `idealCollateralRatioLimit()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `initialize` | (`_admin`: `string`, `_collectionPeriod`: `BigNumberish`, `_loanWithdrawalDuration`: `BigNumberish`, `_marginCallDuration`: `BigNumberish`, `_liquidatorRewardFraction`: `BigNumberish`, `_poolCancelPenaltyMultiple`: `BigNumberish`, `_minBorrowFraction`: `BigNumberish`, `_protocolFeeFraction`: `BigNumberish`, `_protocolFeeCollector`: `string`, `_noStrategy`: `string`, `_beacon`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialize(address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address)` | (`_admin`: `string`, `_collectionPeriod`: `BigNumberish`, `_loanWithdrawalDuration`: `BigNumberish`, `_marginCallDuration`: `BigNumberish`, `_liquidatorRewardFraction`: `BigNumberish`, `_poolCancelPenaltyMultiple`: `BigNumberish`, `_minBorrowFraction`: `BigNumberish`, `_protocolFeeFraction`: `BigNumberish`, `_protocolFeeCollector`: `string`, `_noStrategy`: `string`, `_beacon`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `isBorrowToken` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `isBorrowToken(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `isCollateralToken` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `isCollateralToken(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `liquidatorRewardFraction` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `liquidatorRewardFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `loanWithdrawalDuration` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `loanWithdrawalDuration()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `marginCallDuration` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `marginCallDuration()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `minBorrowFraction` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `minBorrowFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `noOfRepaymentIntervalsLimit` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `noOfRepaymentIntervalsLimit()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `noStrategyAddress` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `noStrategyAddress()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `poolCancelPenaltyMultiple` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `poolCancelPenaltyMultiple()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `poolRegistry` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `poolRegistry(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `poolSizeLimit` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `poolSizeLimit()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `preComputeAddress` | (`creator`: `string`, `salt`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `predicted`: `string`  }\> |
| `preComputeAddress(address,bytes32)` | (`creator`: `string`, `salt`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `predicted`: `string`  }\> |
| `priceOracle` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `priceOracle()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `protocolFeeCollector` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `protocolFeeCollector()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `protocolFeeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `protocolFeeFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `repaymentImpl` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `repaymentImpl()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `repaymentIntervalLimit` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `repaymentIntervalLimit()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `savingsAccount` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `savingsAccount()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `setImplementations` | (`_repaymentImpl`: `string`, `_userRegistry`: `string`, `_strategyRegistry`: `string`, `_priceOracle`: `string`, `_savingsAccount`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setImplementations(address,address,address,address,address)` | (`_repaymentImpl`: `string`, `_userRegistry`: `string`, `_strategyRegistry`: `string`, `_priceOracle`: `string`, `_savingsAccount`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `strategyRegistry` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `strategyRegistry()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateBorrowRateLimit` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateBorrowRateLimit(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateCollectionPeriod` | (`_collectionPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateCollectionPeriod(uint256)` | (`_collectionPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateLiquidatorRewardFraction` | (`_liquidatorRewardFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateLiquidatorRewardFraction(uint256)` | (`_liquidatorRewardFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateLoanWithdrawalDuration` | (`_loanWithdrawalDuration`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateLoanWithdrawalDuration(uint256)` | (`_loanWithdrawalDuration`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateMarginCallDuration` | (`_marginCallDuration`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateMarginCallDuration(uint256)` | (`_marginCallDuration`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateMinBorrowFraction` | (`_minBorrowFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateMinBorrowFraction(uint256)` | (`_minBorrowFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateNoOfRepaymentIntervalsLimit` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateNoOfRepaymentIntervalsLimit(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateNoStrategy` | (`_noStrategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateNoStrategy(address)` | (`_noStrategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updatePoolCancelPenaltyMultiple` | (`_poolCancelPenaltyMultiple`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updatePoolCancelPenaltyMultiple(uint256)` | (`_poolCancelPenaltyMultiple`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updatePoolSizeLimit` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updatePoolSizeLimit(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updatePriceoracle` | (`_priceOracle`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updatePriceoracle(address)` | (`_priceOracle`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateProtocolFeeCollector` | (`_protocolFeeCollector`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateProtocolFeeCollector(address)` | (`_protocolFeeCollector`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateProtocolFeeFraction` | (`_protocolFee`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateProtocolFeeFraction(uint256)` | (`_protocolFee`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateRepaymentImpl` | (`_repaymentImpl`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateRepaymentImpl(address)` | (`_repaymentImpl`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateRepaymentIntervalLimit` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateRepaymentIntervalLimit(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateSavingsAccount` | (`_savingsAccount`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateSavingsAccount(address)` | (`_savingsAccount`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateStrategyRegistry` | (`_strategyRegistry`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateStrategyRegistry(address)` | (`_strategyRegistry`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateSupportedBorrowTokens` | (`_borrowToken`: `string`, `_isSupported`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateSupportedBorrowTokens(address,bool)` | (`_borrowToken`: `string`, `_isSupported`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateSupportedCollateralTokens` | (`_collateralToken`: `string`, `_isSupported`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateSupportedCollateralTokens(address,bool)` | (`_collateralToken`: `string`, `_isSupported`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateUserRegistry` | (`_userRegistry`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateUserRegistry(address)` | (`_userRegistry`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateidealCollateralRatioLimit` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateidealCollateralRatioLimit(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `usdcAsset` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `usdcAsset()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `userRegistry` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `userRegistry()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/PoolFactory.d.ts:309](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L309)

___

### interface

• **interface**: [`PoolFactoryInterface`](../interfaces/wrappers_PoolFactory.PoolFactoryInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/PoolFactory.d.ts:307](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L307)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `beacon` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `beacon()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `borrowRateLimit` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `borrowRateLimit()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `collectionPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `collectionPeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `createPool` | (`_poolSize`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_borrowToken`: `string`, `_collateralToken`: `string`, `_idealCollateralRatio`: `BigNumberish`, `_repaymentInterval`: `BigNumberish`, `_noOfRepaymentIntervals`: `BigNumberish`, `_poolSavingsStrategy`: `string`, `_collateralAmount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `_salt`: `BytesLike`, `_borrowerVerifier`: `string`, `_lenderVerifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `createPool(uint256,uint256,address,address,uint256,uint64,uint64,address,uint256,bool,bytes32,address,address)` | (`_poolSize`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_borrowToken`: `string`, `_collateralToken`: `string`, `_idealCollateralRatio`: `BigNumberish`, `_repaymentInterval`: `BigNumberish`, `_noOfRepaymentIntervals`: `BigNumberish`, `_poolSavingsStrategy`: `string`, `_collateralAmount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `_salt`: `BytesLike`, `_borrowerVerifier`: `string`, `_lenderVerifier`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getProtocolFeeData` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getProtocolFeeData()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `idealCollateralRatioLimit` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `idealCollateralRatioLimit()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `initialize` | (`_admin`: `string`, `_collectionPeriod`: `BigNumberish`, `_loanWithdrawalDuration`: `BigNumberish`, `_marginCallDuration`: `BigNumberish`, `_liquidatorRewardFraction`: `BigNumberish`, `_poolCancelPenaltyMultiple`: `BigNumberish`, `_minBorrowFraction`: `BigNumberish`, `_protocolFeeFraction`: `BigNumberish`, `_protocolFeeCollector`: `string`, `_noStrategy`: `string`, `_beacon`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialize(address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address)` | (`_admin`: `string`, `_collectionPeriod`: `BigNumberish`, `_loanWithdrawalDuration`: `BigNumberish`, `_marginCallDuration`: `BigNumberish`, `_liquidatorRewardFraction`: `BigNumberish`, `_poolCancelPenaltyMultiple`: `BigNumberish`, `_minBorrowFraction`: `BigNumberish`, `_protocolFeeFraction`: `BigNumberish`, `_protocolFeeCollector`: `string`, `_noStrategy`: `string`, `_beacon`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `isBorrowToken` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isBorrowToken(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isCollateralToken` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isCollateralToken(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `liquidatorRewardFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `liquidatorRewardFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `loanWithdrawalDuration` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `loanWithdrawalDuration()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `marginCallDuration` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `marginCallDuration()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `minBorrowFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `minBorrowFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `noOfRepaymentIntervalsLimit` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `noOfRepaymentIntervalsLimit()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `noStrategyAddress` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `noStrategyAddress()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `poolCancelPenaltyMultiple` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `poolCancelPenaltyMultiple()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `poolRegistry` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `poolRegistry(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `poolSizeLimit` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `poolSizeLimit()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `preComputeAddress` | (`creator`: `string`, `salt`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `preComputeAddress(address,bytes32)` | (`creator`: `string`, `salt`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `priceOracle` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `priceOracle()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `protocolFeeCollector` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `protocolFeeCollector()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `protocolFeeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `protocolFeeFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `repaymentImpl` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `repaymentImpl()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `repaymentIntervalLimit` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `repaymentIntervalLimit()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `savingsAccount` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `savingsAccount()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `setImplementations` | (`_repaymentImpl`: `string`, `_userRegistry`: `string`, `_strategyRegistry`: `string`, `_priceOracle`: `string`, `_savingsAccount`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setImplementations(address,address,address,address,address)` | (`_repaymentImpl`: `string`, `_userRegistry`: `string`, `_strategyRegistry`: `string`, `_priceOracle`: `string`, `_savingsAccount`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `strategyRegistry` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `strategyRegistry()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateBorrowRateLimit` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateBorrowRateLimit(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateCollectionPeriod` | (`_collectionPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateCollectionPeriod(uint256)` | (`_collectionPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateLiquidatorRewardFraction` | (`_liquidatorRewardFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateLiquidatorRewardFraction(uint256)` | (`_liquidatorRewardFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateLoanWithdrawalDuration` | (`_loanWithdrawalDuration`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateLoanWithdrawalDuration(uint256)` | (`_loanWithdrawalDuration`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateMarginCallDuration` | (`_marginCallDuration`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateMarginCallDuration(uint256)` | (`_marginCallDuration`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateMinBorrowFraction` | (`_minBorrowFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateMinBorrowFraction(uint256)` | (`_minBorrowFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateNoOfRepaymentIntervalsLimit` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateNoOfRepaymentIntervalsLimit(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateNoStrategy` | (`_noStrategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateNoStrategy(address)` | (`_noStrategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updatePoolCancelPenaltyMultiple` | (`_poolCancelPenaltyMultiple`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updatePoolCancelPenaltyMultiple(uint256)` | (`_poolCancelPenaltyMultiple`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updatePoolSizeLimit` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updatePoolSizeLimit(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updatePriceoracle` | (`_priceOracle`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updatePriceoracle(address)` | (`_priceOracle`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateProtocolFeeCollector` | (`_protocolFeeCollector`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateProtocolFeeCollector(address)` | (`_protocolFeeCollector`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateProtocolFeeFraction` | (`_protocolFee`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateProtocolFeeFraction(uint256)` | (`_protocolFee`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateRepaymentImpl` | (`_repaymentImpl`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateRepaymentImpl(address)` | (`_repaymentImpl`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateRepaymentIntervalLimit` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateRepaymentIntervalLimit(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateSavingsAccount` | (`_savingsAccount`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateSavingsAccount(address)` | (`_savingsAccount`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateStrategyRegistry` | (`_strategyRegistry`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateStrategyRegistry(address)` | (`_strategyRegistry`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateSupportedBorrowTokens` | (`_borrowToken`: `string`, `_isSupported`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateSupportedBorrowTokens(address,bool)` | (`_borrowToken`: `string`, `_isSupported`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateSupportedCollateralTokens` | (`_collateralToken`: `string`, `_isSupported`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateSupportedCollateralTokens(address,bool)` | (`_collateralToken`: `string`, `_isSupported`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateUserRegistry` | (`_userRegistry`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateUserRegistry(address)` | (`_userRegistry`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateidealCollateralRatioLimit` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateidealCollateralRatioLimit(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `usdcAsset` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `usdcAsset()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `userRegistry` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `userRegistry()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/PoolFactory.d.ts:1877](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1877)

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

▸ **attach**(`addressOrName`): [`PoolFactory`](wrappers_PoolFactory.PoolFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`PoolFactory`](wrappers_PoolFactory.PoolFactory.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/PoolFactory.d.ts:268](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L268)

___

### beacon

▸ **beacon**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:728](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L728)

___

### beacon()

▸ **beacon()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:730](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L730)

___

### borrowRateLimit

▸ **borrowRateLimit**(`overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:732](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L732)

___

### borrowRateLimit()

▸ **borrowRateLimit()**(`overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:734](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L734)

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

[src/wrappers/PoolFactory.d.ts:736](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L736)

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

[src/wrappers/PoolFactory.d.ts:738](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L738)

___

### connect

▸ **connect**(`signerOrProvider`): [`PoolFactory`](wrappers_PoolFactory.PoolFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`PoolFactory`](wrappers_PoolFactory.PoolFactory.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/PoolFactory.d.ts:267](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L267)

___

### createPool

▸ **createPool**(`_poolSize`, `_borrowRate`, `_borrowToken`, `_collateralToken`, `_idealCollateralRatio`, `_repaymentInterval`, `_noOfRepaymentIntervals`, `_poolSavingsStrategy`, `_collateralAmount`, `_transferFromSavingsAccount`, `_salt`, `_borrowerVerifier`, `_lenderVerifier`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolSize` | `BigNumberish` |
| `_borrowRate` | `BigNumberish` |
| `_borrowToken` | `string` |
| `_collateralToken` | `string` |
| `_idealCollateralRatio` | `BigNumberish` |
| `_repaymentInterval` | `BigNumberish` |
| `_noOfRepaymentIntervals` | `BigNumberish` |
| `_poolSavingsStrategy` | `string` |
| `_collateralAmount` | `BigNumberish` |
| `_transferFromSavingsAccount` | `boolean` |
| `_salt` | `BytesLike` |
| `_borrowerVerifier` | `string` |
| `_lenderVerifier` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:740](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L740)

___

### createPool(uint256,uint256,address,address,uint256,uint64,uint64,address,uint256,bool,bytes32,address,address)

▸ **createPool(uint256,uint256,address,address,uint256,uint64,uint64,address,uint256,bool,bytes32,address,address)**(`_poolSize`, `_borrowRate`, `_borrowToken`, `_collateralToken`, `_idealCollateralRatio`, `_repaymentInterval`, `_noOfRepaymentIntervals`, `_poolSavingsStrategy`, `_collateralAmount`, `_transferFromSavingsAccount`, `_salt`, `_borrowerVerifier`, `_lenderVerifier`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolSize` | `BigNumberish` |
| `_borrowRate` | `BigNumberish` |
| `_borrowToken` | `string` |
| `_collateralToken` | `string` |
| `_idealCollateralRatio` | `BigNumberish` |
| `_repaymentInterval` | `BigNumberish` |
| `_noOfRepaymentIntervals` | `BigNumberish` |
| `_poolSavingsStrategy` | `string` |
| `_collateralAmount` | `BigNumberish` |
| `_transferFromSavingsAccount` | `boolean` |
| `_salt` | `BytesLike` |
| `_borrowerVerifier` | `string` |
| `_lenderVerifier` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:757](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L757)

___

### deployed

▸ **deployed**(): `Promise`<[`PoolFactory`](wrappers_PoolFactory.PoolFactory.md)\>

#### Returns

`Promise`<[`PoolFactory`](wrappers_PoolFactory.PoolFactory.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/PoolFactory.d.ts:269](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L269)

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

▸ **getProtocolFeeData**(`overrides?`): `Promise`<[`BigNumber`, `string`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `string`]\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:774](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L774)

___

### getProtocolFeeData()

▸ **getProtocolFeeData()**(`overrides?`): `Promise`<[`BigNumber`, `string`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `string`]\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:776](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L776)

___

### idealCollateralRatioLimit

▸ **idealCollateralRatioLimit**(`overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:778](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L778)

___

### idealCollateralRatioLimit()

▸ **idealCollateralRatioLimit()**(`overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:780](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L780)

___

### initialize

▸ **initialize**(`_admin`, `_collectionPeriod`, `_loanWithdrawalDuration`, `_marginCallDuration`, `_liquidatorRewardFraction`, `_poolCancelPenaltyMultiple`, `_minBorrowFraction`, `_protocolFeeFraction`, `_protocolFeeCollector`, `_noStrategy`, `_beacon`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_admin` | `string` |
| `_collectionPeriod` | `BigNumberish` |
| `_loanWithdrawalDuration` | `BigNumberish` |
| `_marginCallDuration` | `BigNumberish` |
| `_liquidatorRewardFraction` | `BigNumberish` |
| `_poolCancelPenaltyMultiple` | `BigNumberish` |
| `_minBorrowFraction` | `BigNumberish` |
| `_protocolFeeFraction` | `BigNumberish` |
| `_protocolFeeCollector` | `string` |
| `_noStrategy` | `string` |
| `_beacon` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:782](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L782)

___

### initialize(address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address)

▸ **initialize(address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address)**(`_admin`, `_collectionPeriod`, `_loanWithdrawalDuration`, `_marginCallDuration`, `_liquidatorRewardFraction`, `_poolCancelPenaltyMultiple`, `_minBorrowFraction`, `_protocolFeeFraction`, `_protocolFeeCollector`, `_noStrategy`, `_beacon`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_admin` | `string` |
| `_collectionPeriod` | `BigNumberish` |
| `_loanWithdrawalDuration` | `BigNumberish` |
| `_marginCallDuration` | `BigNumberish` |
| `_liquidatorRewardFraction` | `BigNumberish` |
| `_poolCancelPenaltyMultiple` | `BigNumberish` |
| `_minBorrowFraction` | `BigNumberish` |
| `_protocolFeeFraction` | `BigNumberish` |
| `_protocolFeeCollector` | `string` |
| `_noStrategy` | `string` |
| `_beacon` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:797](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L797)

___

### isBorrowToken

▸ **isBorrowToken**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:812](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L812)

___

### isBorrowToken(address)

▸ **isBorrowToken(address)**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:814](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L814)

___

### isCollateralToken

▸ **isCollateralToken**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:816](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L816)

___

### isCollateralToken(address)

▸ **isCollateralToken(address)**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:818](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L818)

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

[src/wrappers/PoolFactory.d.ts:820](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L820)

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

[src/wrappers/PoolFactory.d.ts:822](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L822)

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

[src/wrappers/PoolFactory.d.ts:271](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L271)

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

[src/wrappers/PoolFactory.d.ts:294](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L294)

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

[src/wrappers/PoolFactory.d.ts:824](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L824)

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

[src/wrappers/PoolFactory.d.ts:826](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L826)

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

[src/wrappers/PoolFactory.d.ts:828](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L828)

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

[src/wrappers/PoolFactory.d.ts:830](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L830)

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

[src/wrappers/PoolFactory.d.ts:832](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L832)

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

[src/wrappers/PoolFactory.d.ts:834](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L834)

___

### noOfRepaymentIntervalsLimit

▸ **noOfRepaymentIntervalsLimit**(`overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:836](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L836)

___

### noOfRepaymentIntervalsLimit()

▸ **noOfRepaymentIntervalsLimit()**(`overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:838](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L838)

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

[src/wrappers/PoolFactory.d.ts:840](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L840)

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

[src/wrappers/PoolFactory.d.ts:842](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L842)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`PoolFactory`](wrappers_PoolFactory.PoolFactory.md)

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

[`PoolFactory`](wrappers_PoolFactory.PoolFactory.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/PoolFactory.d.ts:274](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L274)

▸ **off**(`eventName`, `listener`): [`PoolFactory`](wrappers_PoolFactory.PoolFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`PoolFactory`](wrappers_PoolFactory.PoolFactory.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/PoolFactory.d.ts:295](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L295)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`PoolFactory`](wrappers_PoolFactory.PoolFactory.md)

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

[`PoolFactory`](wrappers_PoolFactory.PoolFactory.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/PoolFactory.d.ts:278](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L278)

▸ **on**(`eventName`, `listener`): [`PoolFactory`](wrappers_PoolFactory.PoolFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`PoolFactory`](wrappers_PoolFactory.PoolFactory.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/PoolFactory.d.ts:296](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L296)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`PoolFactory`](wrappers_PoolFactory.PoolFactory.md)

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

[`PoolFactory`](wrappers_PoolFactory.PoolFactory.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/PoolFactory.d.ts:282](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L282)

▸ **once**(`eventName`, `listener`): [`PoolFactory`](wrappers_PoolFactory.PoolFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`PoolFactory`](wrappers_PoolFactory.PoolFactory.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/PoolFactory.d.ts:297](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L297)

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

[src/wrappers/PoolFactory.d.ts:844](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L844)

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

[src/wrappers/PoolFactory.d.ts:846](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L846)

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

[src/wrappers/PoolFactory.d.ts:848](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L848)

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

[src/wrappers/PoolFactory.d.ts:850](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L850)

___

### poolRegistry

▸ **poolRegistry**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:852](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L852)

___

### poolRegistry(address)

▸ **poolRegistry(address)**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:854](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L854)

___

### poolSizeLimit

▸ **poolSizeLimit**(`overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:856](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L856)

___

### poolSizeLimit()

▸ **poolSizeLimit()**(`overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:858](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L858)

___

### preComputeAddress

▸ **preComputeAddress**(`creator`, `salt`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `creator` | `string` |
| `salt` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:860](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L860)

___

### preComputeAddress(address,bytes32)

▸ **preComputeAddress(address,bytes32)**(`creator`, `salt`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `creator` | `string` |
| `salt` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:862](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L862)

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

[src/wrappers/PoolFactory.d.ts:864](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L864)

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

[src/wrappers/PoolFactory.d.ts:866](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L866)

___

### protocolFeeCollector

▸ **protocolFeeCollector**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:868](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L868)

___

### protocolFeeCollector()

▸ **protocolFeeCollector()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:870](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L870)

___

### protocolFeeFraction

▸ **protocolFeeFraction**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:872](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L872)

___

### protocolFeeFraction()

▸ **protocolFeeFraction()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:874](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L874)

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

[src/wrappers/PoolFactory.d.ts:301](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L301)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`PoolFactory`](wrappers_PoolFactory.PoolFactory.md)

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

[`PoolFactory`](wrappers_PoolFactory.PoolFactory.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/PoolFactory.d.ts:290](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L290)

▸ **removeAllListeners**(`eventName?`): [`PoolFactory`](wrappers_PoolFactory.PoolFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`PoolFactory`](wrappers_PoolFactory.PoolFactory.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/PoolFactory.d.ts:299](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L299)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`PoolFactory`](wrappers_PoolFactory.PoolFactory.md)

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

[`PoolFactory`](wrappers_PoolFactory.PoolFactory.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/PoolFactory.d.ts:286](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L286)

▸ **removeListener**(`eventName`, `listener`): [`PoolFactory`](wrappers_PoolFactory.PoolFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`PoolFactory`](wrappers_PoolFactory.PoolFactory.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/PoolFactory.d.ts:298](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L298)

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

[src/wrappers/PoolFactory.d.ts:876](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L876)

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

[src/wrappers/PoolFactory.d.ts:878](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L878)

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

[src/wrappers/PoolFactory.d.ts:880](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L880)

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

[src/wrappers/PoolFactory.d.ts:882](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L882)

___

### repaymentIntervalLimit

▸ **repaymentIntervalLimit**(`overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:884](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L884)

___

### repaymentIntervalLimit()

▸ **repaymentIntervalLimit()**(`overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:886](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L886)

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

[src/wrappers/PoolFactory.d.ts:888](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L888)

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

[src/wrappers/PoolFactory.d.ts:890](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L890)

___

### setImplementations

▸ **setImplementations**(`_repaymentImpl`, `_userRegistry`, `_strategyRegistry`, `_priceOracle`, `_savingsAccount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_repaymentImpl` | `string` |
| `_userRegistry` | `string` |
| `_strategyRegistry` | `string` |
| `_priceOracle` | `string` |
| `_savingsAccount` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:892](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L892)

___

### setImplementations(address,address,address,address,address)

▸ **setImplementations(address,address,address,address,address)**(`_repaymentImpl`, `_userRegistry`, `_strategyRegistry`, `_priceOracle`, `_savingsAccount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_repaymentImpl` | `string` |
| `_userRegistry` | `string` |
| `_strategyRegistry` | `string` |
| `_priceOracle` | `string` |
| `_savingsAccount` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:901](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L901)

___

### strategyRegistry

▸ **strategyRegistry**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:910](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L910)

___

### strategyRegistry()

▸ **strategyRegistry()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:912](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L912)

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

[src/wrappers/PoolFactory.d.ts:914](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L914)

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

[src/wrappers/PoolFactory.d.ts:916](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L916)

___

### updateBorrowRateLimit

▸ **updateBorrowRateLimit**(`_min`, `_max`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_min` | `BigNumberish` |
| `_max` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:918](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L918)

___

### updateBorrowRateLimit(uint256,uint256)

▸ **updateBorrowRateLimit(uint256,uint256)**(`_min`, `_max`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_min` | `BigNumberish` |
| `_max` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:924](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L924)

___

### updateCollectionPeriod

▸ **updateCollectionPeriod**(`_collectionPeriod`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_collectionPeriod` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:930](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L930)

___

### updateCollectionPeriod(uint256)

▸ **updateCollectionPeriod(uint256)**(`_collectionPeriod`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_collectionPeriod` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:935](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L935)

___

### updateLiquidatorRewardFraction

▸ **updateLiquidatorRewardFraction**(`_liquidatorRewardFraction`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_liquidatorRewardFraction` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:940](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L940)

___

### updateLiquidatorRewardFraction(uint256)

▸ **updateLiquidatorRewardFraction(uint256)**(`_liquidatorRewardFraction`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_liquidatorRewardFraction` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:945](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L945)

___

### updateLoanWithdrawalDuration

▸ **updateLoanWithdrawalDuration**(`_loanWithdrawalDuration`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_loanWithdrawalDuration` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:950](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L950)

___

### updateLoanWithdrawalDuration(uint256)

▸ **updateLoanWithdrawalDuration(uint256)**(`_loanWithdrawalDuration`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_loanWithdrawalDuration` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:955](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L955)

___

### updateMarginCallDuration

▸ **updateMarginCallDuration**(`_marginCallDuration`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_marginCallDuration` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:960](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L960)

___

### updateMarginCallDuration(uint256)

▸ **updateMarginCallDuration(uint256)**(`_marginCallDuration`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_marginCallDuration` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:965](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L965)

___

### updateMinBorrowFraction

▸ **updateMinBorrowFraction**(`_minBorrowFraction`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_minBorrowFraction` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:970](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L970)

___

### updateMinBorrowFraction(uint256)

▸ **updateMinBorrowFraction(uint256)**(`_minBorrowFraction`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_minBorrowFraction` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:975](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L975)

___

### updateNoOfRepaymentIntervalsLimit

▸ **updateNoOfRepaymentIntervalsLimit**(`_min`, `_max`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_min` | `BigNumberish` |
| `_max` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:980](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L980)

___

### updateNoOfRepaymentIntervalsLimit(uint256,uint256)

▸ **updateNoOfRepaymentIntervalsLimit(uint256,uint256)**(`_min`, `_max`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_min` | `BigNumberish` |
| `_max` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:986](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L986)

___

### updateNoStrategy

▸ **updateNoStrategy**(`_noStrategy`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_noStrategy` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:992](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L992)

___

### updateNoStrategy(address)

▸ **updateNoStrategy(address)**(`_noStrategy`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_noStrategy` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:994](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L994)

___

### updatePoolCancelPenaltyMultiple

▸ **updatePoolCancelPenaltyMultiple**(`_poolCancelPenaltyMultiple`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolCancelPenaltyMultiple` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:999](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L999)

___

### updatePoolCancelPenaltyMultiple(uint256)

▸ **updatePoolCancelPenaltyMultiple(uint256)**(`_poolCancelPenaltyMultiple`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolCancelPenaltyMultiple` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:1004](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1004)

___

### updatePoolSizeLimit

▸ **updatePoolSizeLimit**(`_min`, `_max`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_min` | `BigNumberish` |
| `_max` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:1009](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1009)

___

### updatePoolSizeLimit(uint256,uint256)

▸ **updatePoolSizeLimit(uint256,uint256)**(`_min`, `_max`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_min` | `BigNumberish` |
| `_max` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:1015](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1015)

___

### updatePriceoracle

▸ **updatePriceoracle**(`_priceOracle`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_priceOracle` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:1021](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1021)

___

### updatePriceoracle(address)

▸ **updatePriceoracle(address)**(`_priceOracle`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_priceOracle` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:1023](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1023)

___

### updateProtocolFeeCollector

▸ **updateProtocolFeeCollector**(`_protocolFeeCollector`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_protocolFeeCollector` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:1028](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1028)

___

### updateProtocolFeeCollector(address)

▸ **updateProtocolFeeCollector(address)**(`_protocolFeeCollector`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_protocolFeeCollector` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:1033](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1033)

___

### updateProtocolFeeFraction

▸ **updateProtocolFeeFraction**(`_protocolFee`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_protocolFee` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:1038](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1038)

___

### updateProtocolFeeFraction(uint256)

▸ **updateProtocolFeeFraction(uint256)**(`_protocolFee`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_protocolFee` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:1043](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1043)

___

### updateRepaymentImpl

▸ **updateRepaymentImpl**(`_repaymentImpl`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_repaymentImpl` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:1048](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1048)

___

### updateRepaymentImpl(address)

▸ **updateRepaymentImpl(address)**(`_repaymentImpl`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_repaymentImpl` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:1050](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1050)

___

### updateRepaymentIntervalLimit

▸ **updateRepaymentIntervalLimit**(`_min`, `_max`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_min` | `BigNumberish` |
| `_max` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:1055](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1055)

___

### updateRepaymentIntervalLimit(uint256,uint256)

▸ **updateRepaymentIntervalLimit(uint256,uint256)**(`_min`, `_max`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_min` | `BigNumberish` |
| `_max` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:1061](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1061)

___

### updateSavingsAccount

▸ **updateSavingsAccount**(`_savingsAccount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_savingsAccount` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:1067](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1067)

___

### updateSavingsAccount(address)

▸ **updateSavingsAccount(address)**(`_savingsAccount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_savingsAccount` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:1069](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1069)

___

### updateStrategyRegistry

▸ **updateStrategyRegistry**(`_strategyRegistry`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_strategyRegistry` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:1074](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1074)

___

### updateStrategyRegistry(address)

▸ **updateStrategyRegistry(address)**(`_strategyRegistry`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_strategyRegistry` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:1079](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1079)

___

### updateSupportedBorrowTokens

▸ **updateSupportedBorrowTokens**(`_borrowToken`, `_isSupported`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_borrowToken` | `string` |
| `_isSupported` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:1084](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1084)

___

### updateSupportedBorrowTokens(address,bool)

▸ **updateSupportedBorrowTokens(address,bool)**(`_borrowToken`, `_isSupported`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_borrowToken` | `string` |
| `_isSupported` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:1090](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1090)

___

### updateSupportedCollateralTokens

▸ **updateSupportedCollateralTokens**(`_collateralToken`, `_isSupported`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_collateralToken` | `string` |
| `_isSupported` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:1096](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1096)

___

### updateSupportedCollateralTokens(address,bool)

▸ **updateSupportedCollateralTokens(address,bool)**(`_collateralToken`, `_isSupported`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_collateralToken` | `string` |
| `_isSupported` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:1102](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1102)

___

### updateUserRegistry

▸ **updateUserRegistry**(`_userRegistry`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_userRegistry` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:1108](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1108)

___

### updateUserRegistry(address)

▸ **updateUserRegistry(address)**(`_userRegistry`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_userRegistry` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:1110](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1110)

___

### updateidealCollateralRatioLimit

▸ **updateidealCollateralRatioLimit**(`_min`, `_max`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_min` | `BigNumberish` |
| `_max` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:1115](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1115)

___

### updateidealCollateralRatioLimit(uint256,uint256)

▸ **updateidealCollateralRatioLimit(uint256,uint256)**(`_min`, `_max`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_min` | `BigNumberish` |
| `_max` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:1121](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1121)

___

### usdcAsset

▸ **usdcAsset**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:1127](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1127)

___

### usdcAsset()

▸ **usdcAsset()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/PoolFactory.d.ts:1129](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1129)

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

[src/wrappers/PoolFactory.d.ts:1131](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1131)

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

[src/wrappers/PoolFactory.d.ts:1133](https://github.com/sublime-finance/sublime-sdk/blob/f8c66d9/src/wrappers/PoolFactory.d.ts#L1133)

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
