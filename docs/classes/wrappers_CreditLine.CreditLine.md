[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/CreditLine](../modules/wrappers_CreditLine.md) / CreditLine

# Class: CreditLine

[wrappers/CreditLine](../modules/wrappers_CreditLine.md).CreditLine

## Hierarchy

- `Contract`

  ↳ **`CreditLine`**

## Table of contents

### Constructors

- [constructor](wrappers_CreditLine.CreditLine.md#constructor)

### Properties

- [\_deployedPromise](wrappers_CreditLine.CreditLine.md#_deployedpromise)
- [\_runningEvents](wrappers_CreditLine.CreditLine.md#_runningevents)
- [\_wrappedEmits](wrappers_CreditLine.CreditLine.md#_wrappedemits)
- [address](wrappers_CreditLine.CreditLine.md#address)
- [callStatic](wrappers_CreditLine.CreditLine.md#callstatic)
- [deployTransaction](wrappers_CreditLine.CreditLine.md#deploytransaction)
- [estimateGas](wrappers_CreditLine.CreditLine.md#estimategas)
- [filters](wrappers_CreditLine.CreditLine.md#filters)
- [functions](wrappers_CreditLine.CreditLine.md#functions)
- [interface](wrappers_CreditLine.CreditLine.md#interface)
- [populateTransaction](wrappers_CreditLine.CreditLine.md#populatetransaction)
- [provider](wrappers_CreditLine.CreditLine.md#provider)
- [resolvedAddress](wrappers_CreditLine.CreditLine.md#resolvedaddress)
- [signer](wrappers_CreditLine.CreditLine.md#signer)

### Methods

- [PRICE\_ORACLE](wrappers_CreditLine.CreditLine.md#price_oracle)
- [PRICE\_ORACLE()](wrappers_CreditLine.CreditLine.md#price_oracle())
- [SAVINGS\_ACCOUNT](wrappers_CreditLine.CreditLine.md#savings_account)
- [SAVINGS\_ACCOUNT()](wrappers_CreditLine.CreditLine.md#savings_account())
- [STRATEGY\_REGISTRY](wrappers_CreditLine.CreditLine.md#strategy_registry)
- [STRATEGY\_REGISTRY()](wrappers_CreditLine.CreditLine.md#strategy_registry())
- [\_checkRunningEvents](wrappers_CreditLine.CreditLine.md#_checkrunningevents)
- [\_deployed](wrappers_CreditLine.CreditLine.md#_deployed)
- [\_wrapEvent](wrappers_CreditLine.CreditLine.md#_wrapevent)
- [accept](wrappers_CreditLine.CreditLine.md#accept)
- [accept(uint256)](wrappers_CreditLine.CreditLine.md#accept(uint256))
- [attach](wrappers_CreditLine.CreditLine.md#attach)
- [borrow](wrappers_CreditLine.CreditLine.md#borrow)
- [borrow(uint256,uint256)](wrappers_CreditLine.CreditLine.md#borrow(uint256,uint256))
- [borrowLimitLimits](wrappers_CreditLine.CreditLine.md#borrowlimitlimits)
- [borrowLimitLimits()](wrappers_CreditLine.CreditLine.md#borrowlimitlimits())
- [borrowRateLimits](wrappers_CreditLine.CreditLine.md#borrowratelimits)
- [borrowRateLimits()](wrappers_CreditLine.CreditLine.md#borrowratelimits())
- [borrowTokensToLiquidate](wrappers_CreditLine.CreditLine.md#borrowtokenstoliquidate)
- [borrowTokensToLiquidate(uint256)](wrappers_CreditLine.CreditLine.md#borrowtokenstoliquidate(uint256))
- [calculateBorrowableAmount](wrappers_CreditLine.CreditLine.md#calculateborrowableamount)
- [calculateBorrowableAmount(uint256)](wrappers_CreditLine.CreditLine.md#calculateborrowableamount(uint256))
- [calculateCurrentCollateralRatio](wrappers_CreditLine.CreditLine.md#calculatecurrentcollateralratio)
- [calculateCurrentCollateralRatio(uint256)](wrappers_CreditLine.CreditLine.md#calculatecurrentcollateralratio(uint256))
- [calculateCurrentDebt](wrappers_CreditLine.CreditLine.md#calculatecurrentdebt)
- [calculateCurrentDebt(uint256)](wrappers_CreditLine.CreditLine.md#calculatecurrentdebt(uint256))
- [calculateInterest](wrappers_CreditLine.CreditLine.md#calculateinterest)
- [calculateInterest(uint256,uint256,uint256)](wrappers_CreditLine.CreditLine.md#calculateinterest(uint256,uint256,uint256))
- [calculateInterestAccrued](wrappers_CreditLine.CreditLine.md#calculateinterestaccrued)
- [calculateInterestAccrued(uint256)](wrappers_CreditLine.CreditLine.md#calculateinterestaccrued(uint256))
- [calculateTotalCollateralTokens](wrappers_CreditLine.CreditLine.md#calculatetotalcollateraltokens)
- [calculateTotalCollateralTokens(uint256)](wrappers_CreditLine.CreditLine.md#calculatetotalcollateraltokens(uint256))
- [cancel](wrappers_CreditLine.CreditLine.md#cancel)
- [cancel(uint256)](wrappers_CreditLine.CreditLine.md#cancel(uint256))
- [close](wrappers_CreditLine.CreditLine.md#close)
- [close(uint256)](wrappers_CreditLine.CreditLine.md#close(uint256))
- [collateralShareInStrategy](wrappers_CreditLine.CreditLine.md#collateralshareinstrategy)
- [collateralShareInStrategy(uint256)](wrappers_CreditLine.CreditLine.md#collateralshareinstrategy(uint256))
- [connect](wrappers_CreditLine.CreditLine.md#connect)
- [creditLineConstants](wrappers_CreditLine.CreditLine.md#creditlineconstants)
- [creditLineConstants(uint256)](wrappers_CreditLine.CreditLine.md#creditlineconstants(uint256))
- [creditLineCounter](wrappers_CreditLine.CreditLine.md#creditlinecounter)
- [creditLineCounter()](wrappers_CreditLine.CreditLine.md#creditlinecounter())
- [creditLineVariables](wrappers_CreditLine.CreditLine.md#creditlinevariables)
- [creditLineVariables(uint256)](wrappers_CreditLine.CreditLine.md#creditlinevariables(uint256))
- [deployed](wrappers_CreditLine.CreditLine.md#deployed)
- [depositCollateral](wrappers_CreditLine.CreditLine.md#depositcollateral)
- [depositCollateral(uint256,uint256,bool)](wrappers_CreditLine.CreditLine.md#depositcollateral(uint256,uint256,bool))
- [emit](wrappers_CreditLine.CreditLine.md#emit)
- [fallback](wrappers_CreditLine.CreditLine.md#fallback)
- [getCreditLineStatus](wrappers_CreditLine.CreditLine.md#getcreditlinestatus)
- [getCreditLineStatus(uint256)](wrappers_CreditLine.CreditLine.md#getcreditlinestatus(uint256))
- [idealCollateralRatioLimits](wrappers_CreditLine.CreditLine.md#idealcollateralratiolimits)
- [idealCollateralRatioLimits()](wrappers_CreditLine.CreditLine.md#idealcollateralratiolimits())
- [initialize](wrappers_CreditLine.CreditLine.md#initialize)
- [initialize(address,uint256,address,uint256)](wrappers_CreditLine.CreditLine.md#initialize(address,uint256,address,uint256))
- [liquidate](wrappers_CreditLine.CreditLine.md#liquidate)
- [liquidate(uint256,bool)](wrappers_CreditLine.CreditLine.md#liquidate(uint256,bool))
- [liquidatorRewardFraction](wrappers_CreditLine.CreditLine.md#liquidatorrewardfraction)
- [liquidatorRewardFraction()](wrappers_CreditLine.CreditLine.md#liquidatorrewardfraction())
- [listenerCount](wrappers_CreditLine.CreditLine.md#listenercount)
- [listeners](wrappers_CreditLine.CreditLine.md#listeners)
- [off](wrappers_CreditLine.CreditLine.md#off)
- [on](wrappers_CreditLine.CreditLine.md#on)
- [once](wrappers_CreditLine.CreditLine.md#once)
- [owner](wrappers_CreditLine.CreditLine.md#owner)
- [owner()](wrappers_CreditLine.CreditLine.md#owner())
- [protocolFeeCollector](wrappers_CreditLine.CreditLine.md#protocolfeecollector)
- [protocolFeeCollector()](wrappers_CreditLine.CreditLine.md#protocolfeecollector())
- [protocolFeeFraction](wrappers_CreditLine.CreditLine.md#protocolfeefraction)
- [protocolFeeFraction()](wrappers_CreditLine.CreditLine.md#protocolfeefraction())
- [queryFilter](wrappers_CreditLine.CreditLine.md#queryfilter)
- [removeAllListeners](wrappers_CreditLine.CreditLine.md#removealllisteners)
- [removeListener](wrappers_CreditLine.CreditLine.md#removelistener)
- [renounceOwnership](wrappers_CreditLine.CreditLine.md#renounceownership)
- [renounceOwnership()](wrappers_CreditLine.CreditLine.md#renounceownership())
- [repay](wrappers_CreditLine.CreditLine.md#repay)
- [repay(uint256,uint256)](wrappers_CreditLine.CreditLine.md#repay(uint256,uint256))
- [request](wrappers_CreditLine.CreditLine.md#request)
- [request(address,uint128,uint128,bool,uint256,address,address,address,address,bool)](wrappers_CreditLine.CreditLine.md#request(address,uint128,uint128,bool,uint256,address,address,address,address,bool))
- [transferOwnership](wrappers_CreditLine.CreditLine.md#transferownership)
- [transferOwnership(address)](wrappers_CreditLine.CreditLine.md#transferownership(address))
- [updateBorrowLimit](wrappers_CreditLine.CreditLine.md#updateborrowlimit)
- [updateBorrowLimit(uint256,uint128)](wrappers_CreditLine.CreditLine.md#updateborrowlimit(uint256,uint128))
- [updateBorrowLimitLimits](wrappers_CreditLine.CreditLine.md#updateborrowlimitlimits)
- [updateBorrowLimitLimits(uint256,uint256)](wrappers_CreditLine.CreditLine.md#updateborrowlimitlimits(uint256,uint256))
- [updateBorrowRateLimits](wrappers_CreditLine.CreditLine.md#updateborrowratelimits)
- [updateBorrowRateLimits(uint256,uint256)](wrappers_CreditLine.CreditLine.md#updateborrowratelimits(uint256,uint256))
- [updateIdealCollateralRatioLimits](wrappers_CreditLine.CreditLine.md#updateidealcollateralratiolimits)
- [updateIdealCollateralRatioLimits(uint256,uint256)](wrappers_CreditLine.CreditLine.md#updateidealcollateralratiolimits(uint256,uint256))
- [updateLiquidatorRewardFraction](wrappers_CreditLine.CreditLine.md#updateliquidatorrewardfraction)
- [updateLiquidatorRewardFraction(uint256)](wrappers_CreditLine.CreditLine.md#updateliquidatorrewardfraction(uint256))
- [updateProtocolFeeCollector](wrappers_CreditLine.CreditLine.md#updateprotocolfeecollector)
- [updateProtocolFeeCollector(address)](wrappers_CreditLine.CreditLine.md#updateprotocolfeecollector(address))
- [updateProtocolFeeFraction](wrappers_CreditLine.CreditLine.md#updateprotocolfeefraction)
- [updateProtocolFeeFraction(uint256)](wrappers_CreditLine.CreditLine.md#updateprotocolfeefraction(uint256))
- [withdrawAllCollateral](wrappers_CreditLine.CreditLine.md#withdrawallcollateral)
- [withdrawAllCollateral(uint256,bool)](wrappers_CreditLine.CreditLine.md#withdrawallcollateral(uint256,bool))
- [withdrawCollateral](wrappers_CreditLine.CreditLine.md#withdrawcollateral)
- [withdrawCollateral(uint256,uint256,bool)](wrappers_CreditLine.CreditLine.md#withdrawcollateral(uint256,uint256,bool))
- [withdrawableCollateral](wrappers_CreditLine.CreditLine.md#withdrawablecollateral)
- [withdrawableCollateral(uint256)](wrappers_CreditLine.CreditLine.md#withdrawablecollateral(uint256))
- [getContractAddress](wrappers_CreditLine.CreditLine.md#getcontractaddress)
- [getInterface](wrappers_CreditLine.CreditLine.md#getinterface)
- [isIndexed](wrappers_CreditLine.CreditLine.md#isindexed)

## Constructors

### constructor

• **new CreditLine**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `PRICE_ORACLE` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `PRICE_ORACLE()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `SAVINGS_ACCOUNT` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `SAVINGS_ACCOUNT()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `STRATEGY_REGISTRY` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `STRATEGY_REGISTRY()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `accept` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `accept(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `borrow` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `borrow(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `borrowLimitLimits` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `borrowLimitLimits()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `borrowRateLimits` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `borrowRateLimits()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `borrowTokensToLiquidate` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `borrowTokensToLiquidate(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateBorrowableAmount` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateBorrowableAmount(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateCurrentCollateralRatio` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`]\> |
| `calculateCurrentCollateralRatio(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`]\> |
| `calculateCurrentDebt` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateCurrentDebt(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateInterest` | (`_principal`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_timeElapsed`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateInterest(uint256,uint256,uint256)` | (`_principal`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_timeElapsed`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateInterestAccrued` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateInterestAccrued(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateTotalCollateralTokens` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateTotalCollateralTokens(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `cancel` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `cancel(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `close` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `close(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `collateralShareInStrategy` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `collateralShareInStrategy(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `creditLineConstants` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`, `boolean`, `BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `string`, `string`, `string`, `string`] & { `autoLiquidation`: `boolean` ; `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumber` ; `borrowRate`: `BigNumber` ; `borrower`: `string` ; `collateralAsset`: `string` ; `collateralStrategy`: `string` ; `idealCollateralRatio`: `BigNumber` ; `lender`: `string` ; `requestByLender`: `boolean`  }\> |
| `creditLineConstants(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`, `boolean`, `BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `string`, `string`, `string`, `string`] & { `autoLiquidation`: `boolean` ; `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumber` ; `borrowRate`: `BigNumber` ; `borrower`: `string` ; `collateralAsset`: `string` ; `collateralStrategy`: `string` ; `idealCollateralRatio`: `BigNumber` ; `lender`: `string` ; `requestByLender`: `boolean`  }\> |
| `creditLineCounter` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `creditLineCounter()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `creditLineVariables` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `interestAccruedTillLastPrincipalUpdate`: `BigNumber` ; `lastPrincipalUpdateTime`: `BigNumber` ; `principal`: `BigNumber` ; `status`: `number` ; `totalInterestRepaid`: `BigNumber`  }\> |
| `creditLineVariables(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `interestAccruedTillLastPrincipalUpdate`: `BigNumber` ; `lastPrincipalUpdateTime`: `BigNumber` ; `principal`: `BigNumber` ; `status`: `number` ; `totalInterestRepaid`: `BigNumber`  }\> |
| `depositCollateral` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_fromSavingsAccount`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `depositCollateral(uint256,uint256,bool)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_fromSavingsAccount`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getCreditLineStatus` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `getCreditLineStatus(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `idealCollateralRatioLimits` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `idealCollateralRatioLimits()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `initialize` | (`_owner`: `string`, `_protocolFeeFraction`: `BigNumberish`, `_protocolFeeCollector`: `string`, `_liquidatorRewardFraction`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialize(address,uint256,address,uint256)` | (`_owner`: `string`, `_protocolFeeFraction`: `BigNumberish`, `_protocolFeeCollector`: `string`, `_liquidatorRewardFraction`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `liquidate` | (`_id`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `liquidate(uint256,bool)` | (`_id`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `liquidatorRewardFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `liquidatorRewardFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `protocolFeeCollector` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `protocolFeeCollector()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `protocolFeeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `protocolFeeFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `renounceOwnership` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `renounceOwnership()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `repay` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `repay(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `request` | (`_requestTo`: `string`, `_borrowLimit`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_autoLiquidation`: `boolean`, `_collateralRatio`: `BigNumberish`, `_borrowAsset`: `string`, `_borrowAssetStrategy`: `string`, `_collateralAsset`: `string`, `_collateralStrategy`: `string`, `_requestAsLender`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `request(address,uint128,uint128,bool,uint256,address,address,address,address,bool)` | (`_requestTo`: `string`, `_borrowLimit`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_autoLiquidation`: `boolean`, `_collateralRatio`: `BigNumberish`, `_borrowAsset`: `string`, `_borrowAssetStrategy`: `string`, `_collateralAsset`: `string`, `_collateralStrategy`: `string`, `_requestAsLender`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateBorrowLimit` | (`_id`: `BigNumberish`, `_newBorrowLimit`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateBorrowLimit(uint256,uint128)` | (`_id`: `BigNumberish`, `_newBorrowLimit`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateBorrowLimitLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateBorrowLimitLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateBorrowRateLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateBorrowRateLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateIdealCollateralRatioLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateIdealCollateralRatioLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateLiquidatorRewardFraction` | (`_rewardFraction`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateLiquidatorRewardFraction(uint256)` | (`_rewardFraction`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateProtocolFeeCollector` | (`_protocolFeeCollector`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateProtocolFeeCollector(address)` | (`_protocolFeeCollector`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateProtocolFeeFraction` | (`_protocolFee`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateProtocolFeeFraction(uint256)` | (`_protocolFee`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdrawAllCollateral` | (`_id`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdrawAllCollateral(uint256,bool)` | (`_id`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdrawCollateral` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdrawCollateral(uint256,uint256,bool)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdrawableCollateral` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `withdrawableCollateral(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/CreditLine.d.ts:1041](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L1041)

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
| `PRICE_ORACLE` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `PRICE_ORACLE()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `SAVINGS_ACCOUNT` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `SAVINGS_ACCOUNT()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `STRATEGY_REGISTRY` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `STRATEGY_REGISTRY()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `accept` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `accept(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `borrow` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `borrow(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `borrowLimitLimits` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `borrowLimitLimits()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `borrowRateLimits` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `borrowRateLimits()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `borrowTokensToLiquidate` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `borrowTokensToLiquidate(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `calculateBorrowableAmount` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `calculateBorrowableAmount(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `calculateCurrentCollateralRatio` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `calculateCurrentCollateralRatio(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `calculateCurrentDebt` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateCurrentDebt(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateInterest` | (`_principal`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_timeElapsed`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateInterest(uint256,uint256,uint256)` | (`_principal`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_timeElapsed`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateInterestAccrued` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateInterestAccrued(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateTotalCollateralTokens` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `calculateTotalCollateralTokens(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `cancel` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `cancel(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `close` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `close(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `collateralShareInStrategy` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `collateralShareInStrategy(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `creditLineConstants` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `creditLineConstants(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `creditLineCounter` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `creditLineCounter()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `creditLineVariables` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `creditLineVariables(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `depositCollateral` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_fromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `depositCollateral(uint256,uint256,bool)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_fromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getCreditLineStatus` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCreditLineStatus(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `idealCollateralRatioLimits` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `idealCollateralRatioLimits()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `initialize` | (`_owner`: `string`, `_protocolFeeFraction`: `BigNumberish`, `_protocolFeeCollector`: `string`, `_liquidatorRewardFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initialize(address,uint256,address,uint256)` | (`_owner`: `string`, `_protocolFeeFraction`: `BigNumberish`, `_protocolFeeCollector`: `string`, `_liquidatorRewardFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `liquidate` | (`_id`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `liquidate(uint256,bool)` | (`_id`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `liquidatorRewardFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `liquidatorRewardFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `protocolFeeCollector` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `protocolFeeCollector()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `protocolFeeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `protocolFeeFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `repay` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `repay(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `request` | (`_requestTo`: `string`, `_borrowLimit`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_autoLiquidation`: `boolean`, `_collateralRatio`: `BigNumberish`, `_borrowAsset`: `string`, `_borrowAssetStrategy`: `string`, `_collateralAsset`: `string`, `_collateralStrategy`: `string`, `_requestAsLender`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `request(address,uint128,uint128,bool,uint256,address,address,address,address,bool)` | (`_requestTo`: `string`, `_borrowLimit`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_autoLiquidation`: `boolean`, `_collateralRatio`: `BigNumberish`, `_borrowAsset`: `string`, `_borrowAssetStrategy`: `string`, `_collateralAsset`: `string`, `_collateralStrategy`: `string`, `_requestAsLender`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateBorrowLimit` | (`_id`: `BigNumberish`, `_newBorrowLimit`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateBorrowLimit(uint256,uint128)` | (`_id`: `BigNumberish`, `_newBorrowLimit`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateBorrowLimitLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateBorrowLimitLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateBorrowRateLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateBorrowRateLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateIdealCollateralRatioLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateIdealCollateralRatioLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateLiquidatorRewardFraction` | (`_rewardFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateLiquidatorRewardFraction(uint256)` | (`_rewardFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateProtocolFeeCollector` | (`_protocolFeeCollector`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateProtocolFeeCollector(address)` | (`_protocolFeeCollector`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateProtocolFeeFraction` | (`_protocolFee`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateProtocolFeeFraction(uint256)` | (`_protocolFee`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawAllCollateral` | (`_id`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawAllCollateral(uint256,bool)` | (`_id`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawCollateral` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawCollateral(uint256,uint256,bool)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawableCollateral` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawableCollateral(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/CreditLine.d.ts:1414](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L1414)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `BorrowLimitUpdated` | (`id`: `BigNumberish`, `updatedBorrowLimit`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `BigNumber`], { `id`: `BigNumber` ; `updatedBorrowLimit`: `BigNumber`  }\> |
| `BorrowedFromCreditLine` | (`id`: `BigNumberish`, `borrowAmount`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `BigNumber`], { `borrowAmount`: `BigNumber` ; `id`: `BigNumber`  }\> |
| `CollateralDeposited` | (`id`: `BigNumberish`, `shares`: ``null``, `strategy`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `BigNumber`, `string`], { `id`: `BigNumber` ; `shares`: `BigNumber` ; `strategy`: `string`  }\> |
| `CollateralWithdrawn` | (`id`: `BigNumberish`, `shares`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `BigNumber`], { `id`: `BigNumber` ; `shares`: `BigNumber`  }\> |
| `CompleteCreditLineRepaid` | (`id`: `BigNumberish`, `repayer`: `string`, `repayAmount`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `string`, `BigNumber`], { `id`: `BigNumber` ; `repayAmount`: `BigNumber` ; `repayer`: `string`  }\> |
| `CreditLineAccepted` | (`id`: `BigNumberish`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`], { `id`: `BigNumber`  }\> |
| `CreditLineCancelled` | (`id`: `BigNumberish`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`], { `id`: `BigNumber`  }\> |
| `CreditLineClosed` | (`id`: `BigNumberish`, `closedByLender`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `boolean`], { `closedByLender`: `boolean` ; `id`: `BigNumber`  }\> |
| `CreditLineLiquidated` | (`id`: `BigNumberish`, `liquidator`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `string`], { `id`: `BigNumber` ; `liquidator`: `string`  }\> |
| `CreditLineRequested` | (`id`: `BigNumberish`, `lender`: `string`, `borrower`: `string`, `requestByLender`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `string`, `string`, `boolean`], { `borrower`: `string` ; `id`: `BigNumber` ; `lender`: `string` ; `requestByLender`: `boolean`  }\> |
| `CreditLineReset` | (`id`: `BigNumberish`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`], { `id`: `BigNumber`  }\> |
| `LimitsUpdated` | (`limitType`: `string`, `max`: ``null``, `min`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `BigNumber`, `BigNumber`], { `limitType`: `string` ; `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `LiquidationRewardFractionUpdated` | (`liquidatorRewardFraction`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`], { `liquidatorRewardFraction`: `BigNumber`  }\> |
| `OwnershipTransferred` | (`previousOwner`: `string`, `newOwner`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`], { `newOwner`: `string` ; `previousOwner`: `string`  }\> |
| `PartialCreditLineRepaid` | (`id`: `BigNumberish`, `repayer`: `string`, `repayAmount`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `string`, `BigNumber`], { `id`: `BigNumber` ; `repayAmount`: `BigNumber` ; `repayer`: `string`  }\> |
| `ProtocolFeeCollectorUpdated` | (`updatedProtocolFeeCollector`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `updatedProtocolFeeCollector`: `string`  }\> |
| `ProtocolFeeFractionUpdated` | (`updatedProtocolFee`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`], { `updatedProtocolFee`: `BigNumber`  }\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/CreditLine.d.ts:1327](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L1327)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `PRICE_ORACLE` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `PRICE_ORACLE()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `SAVINGS_ACCOUNT` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `SAVINGS_ACCOUNT()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `STRATEGY_REGISTRY` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `STRATEGY_REGISTRY()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `accept` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `accept(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `borrow` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `borrow(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `borrowLimitLimits` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `borrowLimitLimits()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `borrowRateLimits` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `borrowRateLimits()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `borrowTokensToLiquidate` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `borrowTokensToLiquidate(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `calculateBorrowableAmount` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `calculateBorrowableAmount(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `calculateCurrentCollateralRatio` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `calculateCurrentCollateralRatio(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `calculateCurrentDebt` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `calculateCurrentDebt(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `calculateInterest` | (`_principal`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_timeElapsed`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `calculateInterest(uint256,uint256,uint256)` | (`_principal`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_timeElapsed`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `calculateInterestAccrued` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `calculateInterestAccrued(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `calculateTotalCollateralTokens` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `calculateTotalCollateralTokens(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `cancel` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `cancel(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `close` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `close(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `collateralShareInStrategy` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `collateralShareInStrategy(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `creditLineConstants` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`, `boolean`, `BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `string`, `string`, `string`, `string`] & { `autoLiquidation`: `boolean` ; `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumber` ; `borrowRate`: `BigNumber` ; `borrower`: `string` ; `collateralAsset`: `string` ; `collateralStrategy`: `string` ; `idealCollateralRatio`: `BigNumber` ; `lender`: `string` ; `requestByLender`: `boolean`  }\> |
| `creditLineConstants(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`, `boolean`, `BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `string`, `string`, `string`, `string`] & { `autoLiquidation`: `boolean` ; `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumber` ; `borrowRate`: `BigNumber` ; `borrower`: `string` ; `collateralAsset`: `string` ; `collateralStrategy`: `string` ; `idealCollateralRatio`: `BigNumber` ; `lender`: `string` ; `requestByLender`: `boolean`  }\> |
| `creditLineCounter` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `creditLineCounter()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `creditLineVariables` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `interestAccruedTillLastPrincipalUpdate`: `BigNumber` ; `lastPrincipalUpdateTime`: `BigNumber` ; `principal`: `BigNumber` ; `status`: `number` ; `totalInterestRepaid`: `BigNumber`  }\> |
| `creditLineVariables(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `interestAccruedTillLastPrincipalUpdate`: `BigNumber` ; `lastPrincipalUpdateTime`: `BigNumber` ; `principal`: `BigNumber` ; `status`: `number` ; `totalInterestRepaid`: `BigNumber`  }\> |
| `depositCollateral` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_fromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `depositCollateral(uint256,uint256,bool)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_fromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getCreditLineStatus` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `getCreditLineStatus(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `idealCollateralRatioLimits` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `idealCollateralRatioLimits()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `initialize` | (`_owner`: `string`, `_protocolFeeFraction`: `BigNumberish`, `_protocolFeeCollector`: `string`, `_liquidatorRewardFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialize(address,uint256,address,uint256)` | (`_owner`: `string`, `_protocolFeeFraction`: `BigNumberish`, `_protocolFeeCollector`: `string`, `_liquidatorRewardFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `liquidate` | (`_id`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `liquidate(uint256,bool)` | (`_id`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `liquidatorRewardFraction` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `liquidatorRewardFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `protocolFeeCollector` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `protocolFeeCollector()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `protocolFeeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `protocolFeeFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `repay` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `repay(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `request` | (`_requestTo`: `string`, `_borrowLimit`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_autoLiquidation`: `boolean`, `_collateralRatio`: `BigNumberish`, `_borrowAsset`: `string`, `_borrowAssetStrategy`: `string`, `_collateralAsset`: `string`, `_collateralStrategy`: `string`, `_requestAsLender`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `request(address,uint128,uint128,bool,uint256,address,address,address,address,bool)` | (`_requestTo`: `string`, `_borrowLimit`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_autoLiquidation`: `boolean`, `_collateralRatio`: `BigNumberish`, `_borrowAsset`: `string`, `_borrowAssetStrategy`: `string`, `_collateralAsset`: `string`, `_collateralStrategy`: `string`, `_requestAsLender`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateBorrowLimit` | (`_id`: `BigNumberish`, `_newBorrowLimit`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateBorrowLimit(uint256,uint128)` | (`_id`: `BigNumberish`, `_newBorrowLimit`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateBorrowLimitLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateBorrowLimitLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateBorrowRateLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateBorrowRateLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateIdealCollateralRatioLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateIdealCollateralRatioLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateLiquidatorRewardFraction` | (`_rewardFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateLiquidatorRewardFraction(uint256)` | (`_rewardFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateProtocolFeeCollector` | (`_protocolFeeCollector`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateProtocolFeeCollector(address)` | (`_protocolFeeCollector`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateProtocolFeeFraction` | (`_protocolFee`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateProtocolFeeFraction(uint256)` | (`_protocolFee`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawAllCollateral` | (`_id`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawAllCollateral(uint256,bool)` | (`_id`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawCollateral` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawCollateral(uint256,uint256,bool)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawableCollateral` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawableCollateral(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/CreditLine.d.ts:242](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L242)

___

### interface

• **interface**: [`CreditLineInterface`](../interfaces/wrappers_CreditLine.CreditLineInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/CreditLine.d.ts:240](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L240)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `PRICE_ORACLE` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `PRICE_ORACLE()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `SAVINGS_ACCOUNT` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `SAVINGS_ACCOUNT()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `STRATEGY_REGISTRY` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `STRATEGY_REGISTRY()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `accept` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `accept(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `borrow` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `borrow(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `borrowLimitLimits` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `borrowLimitLimits()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `borrowRateLimits` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `borrowRateLimits()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `borrowTokensToLiquidate` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `borrowTokensToLiquidate(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `calculateBorrowableAmount` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `calculateBorrowableAmount(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `calculateCurrentCollateralRatio` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `calculateCurrentCollateralRatio(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `calculateCurrentDebt` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `calculateCurrentDebt(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `calculateInterest` | (`_principal`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_timeElapsed`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `calculateInterest(uint256,uint256,uint256)` | (`_principal`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_timeElapsed`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `calculateInterestAccrued` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `calculateInterestAccrued(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `calculateTotalCollateralTokens` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `calculateTotalCollateralTokens(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `cancel` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `cancel(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `close` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `close(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `collateralShareInStrategy` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `collateralShareInStrategy(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `creditLineConstants` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `creditLineConstants(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `creditLineCounter` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `creditLineCounter()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `creditLineVariables` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `creditLineVariables(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `depositCollateral` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_fromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `depositCollateral(uint256,uint256,bool)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_fromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getCreditLineStatus` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCreditLineStatus(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `idealCollateralRatioLimits` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `idealCollateralRatioLimits()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `initialize` | (`_owner`: `string`, `_protocolFeeFraction`: `BigNumberish`, `_protocolFeeCollector`: `string`, `_liquidatorRewardFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialize(address,uint256,address,uint256)` | (`_owner`: `string`, `_protocolFeeFraction`: `BigNumberish`, `_protocolFeeCollector`: `string`, `_liquidatorRewardFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `liquidate` | (`_id`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `liquidate(uint256,bool)` | (`_id`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `liquidatorRewardFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `liquidatorRewardFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `protocolFeeCollector` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `protocolFeeCollector()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `protocolFeeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `protocolFeeFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `repay` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `repay(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `request` | (`_requestTo`: `string`, `_borrowLimit`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_autoLiquidation`: `boolean`, `_collateralRatio`: `BigNumberish`, `_borrowAsset`: `string`, `_borrowAssetStrategy`: `string`, `_collateralAsset`: `string`, `_collateralStrategy`: `string`, `_requestAsLender`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `request(address,uint128,uint128,bool,uint256,address,address,address,address,bool)` | (`_requestTo`: `string`, `_borrowLimit`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_autoLiquidation`: `boolean`, `_collateralRatio`: `BigNumberish`, `_borrowAsset`: `string`, `_borrowAssetStrategy`: `string`, `_collateralAsset`: `string`, `_collateralStrategy`: `string`, `_requestAsLender`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateBorrowLimit` | (`_id`: `BigNumberish`, `_newBorrowLimit`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateBorrowLimit(uint256,uint128)` | (`_id`: `BigNumberish`, `_newBorrowLimit`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateBorrowLimitLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateBorrowLimitLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateBorrowRateLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateBorrowRateLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateIdealCollateralRatioLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateIdealCollateralRatioLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateLiquidatorRewardFraction` | (`_rewardFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateLiquidatorRewardFraction(uint256)` | (`_rewardFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateProtocolFeeCollector` | (`_protocolFeeCollector`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateProtocolFeeCollector(address)` | (`_protocolFeeCollector`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateProtocolFeeFraction` | (`_protocolFee`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateProtocolFeeFraction(uint256)` | (`_protocolFee`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawAllCollateral` | (`_id`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawAllCollateral(uint256,bool)` | (`_id`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawCollateral` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawCollateral(uint256,uint256,bool)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawableCollateral` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawableCollateral(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/CreditLine.d.ts:1734](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L1734)

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

### PRICE\_ORACLE

▸ **PRICE_ORACLE**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:644](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L644)

___

### PRICE\_ORACLE()

▸ **PRICE_ORACLE()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:646](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L646)

___

### SAVINGS\_ACCOUNT

▸ **SAVINGS_ACCOUNT**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:648](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L648)

___

### SAVINGS\_ACCOUNT()

▸ **SAVINGS_ACCOUNT()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:650](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L650)

___

### STRATEGY\_REGISTRY

▸ **STRATEGY_REGISTRY**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:652](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L652)

___

### STRATEGY\_REGISTRY()

▸ **STRATEGY_REGISTRY()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:654](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L654)

___

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

### accept

▸ **accept**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:656](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L656)

___

### accept(uint256)

▸ **accept(uint256)**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:658](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L658)

___

### attach

▸ **attach**(`addressOrName`): [`CreditLine`](wrappers_CreditLine.CreditLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`CreditLine`](wrappers_CreditLine.CreditLine.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/CreditLine.d.ts:201](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L201)

___

### borrow

▸ **borrow**(`_id`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:660](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L660)

___

### borrow(uint256,uint256)

▸ **borrow(uint256,uint256)**(`_id`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:666](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L666)

___

### borrowLimitLimits

▸ **borrowLimitLimits**(`overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Defined in

[src/wrappers/CreditLine.d.ts:672](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L672)

___

### borrowLimitLimits()

▸ **borrowLimitLimits()**(`overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Defined in

[src/wrappers/CreditLine.d.ts:674](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L674)

___

### borrowRateLimits

▸ **borrowRateLimits**(`overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Defined in

[src/wrappers/CreditLine.d.ts:676](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L676)

___

### borrowRateLimits()

▸ **borrowRateLimits()**(`overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Defined in

[src/wrappers/CreditLine.d.ts:678](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L678)

___

### borrowTokensToLiquidate

▸ **borrowTokensToLiquidate**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:680](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L680)

___

### borrowTokensToLiquidate(uint256)

▸ **borrowTokensToLiquidate(uint256)**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:682](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L682)

___

### calculateBorrowableAmount

▸ **calculateBorrowableAmount**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:687](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L687)

___

### calculateBorrowableAmount(uint256)

▸ **calculateBorrowableAmount(uint256)**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:689](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L689)

___

### calculateCurrentCollateralRatio

▸ **calculateCurrentCollateralRatio**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:694](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L694)

___

### calculateCurrentCollateralRatio(uint256)

▸ **calculateCurrentCollateralRatio(uint256)**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:699](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L699)

___

### calculateCurrentDebt

▸ **calculateCurrentDebt**(`_id`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:704](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L704)

___

### calculateCurrentDebt(uint256)

▸ **calculateCurrentDebt(uint256)**(`_id`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:706](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L706)

___

### calculateInterest

▸ **calculateInterest**(`_principal`, `_borrowRate`, `_timeElapsed`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_principal` | `BigNumberish` |
| `_borrowRate` | `BigNumberish` |
| `_timeElapsed` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:708](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L708)

___

### calculateInterest(uint256,uint256,uint256)

▸ **calculateInterest(uint256,uint256,uint256)**(`_principal`, `_borrowRate`, `_timeElapsed`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_principal` | `BigNumberish` |
| `_borrowRate` | `BigNumberish` |
| `_timeElapsed` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:715](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L715)

___

### calculateInterestAccrued

▸ **calculateInterestAccrued**(`_id`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:722](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L722)

___

### calculateInterestAccrued(uint256)

▸ **calculateInterestAccrued(uint256)**(`_id`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:724](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L724)

___

### calculateTotalCollateralTokens

▸ **calculateTotalCollateralTokens**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:726](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L726)

___

### calculateTotalCollateralTokens(uint256)

▸ **calculateTotalCollateralTokens(uint256)**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:731](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L731)

___

### cancel

▸ **cancel**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:736](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L736)

___

### cancel(uint256)

▸ **cancel(uint256)**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:738](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L738)

___

### close

▸ **close**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:740](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L740)

___

### close(uint256)

▸ **close(uint256)**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:742](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L742)

___

### collateralShareInStrategy

▸ **collateralShareInStrategy**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:744](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L744)

___

### collateralShareInStrategy(uint256)

▸ **collateralShareInStrategy(uint256)**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:746](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L746)

___

### connect

▸ **connect**(`signerOrProvider`): [`CreditLine`](wrappers_CreditLine.CreditLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`CreditLine`](wrappers_CreditLine.CreditLine.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/CreditLine.d.ts:200](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L200)

___

### creditLineConstants

▸ **creditLineConstants**(`arg0`, `overrides?`): `Promise`<[`boolean`, `boolean`, `BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `string`, `string`, `string`, `string`] & { `autoLiquidation`: `boolean` ; `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumber` ; `borrowRate`: `BigNumber` ; `borrower`: `string` ; `collateralAsset`: `string` ; `collateralStrategy`: `string` ; `idealCollateralRatio`: `BigNumber` ; `lender`: `string` ; `requestByLender`: `boolean`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`boolean`, `boolean`, `BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `string`, `string`, `string`, `string`] & { `autoLiquidation`: `boolean` ; `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumber` ; `borrowRate`: `BigNumber` ; `borrower`: `string` ; `collateralAsset`: `string` ; `collateralStrategy`: `string` ; `idealCollateralRatio`: `BigNumber` ; `lender`: `string` ; `requestByLender`: `boolean`  }\>

#### Defined in

[src/wrappers/CreditLine.d.ts:748](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L748)

___

### creditLineConstants(uint256)

▸ **creditLineConstants(uint256)**(`arg0`, `overrides?`): `Promise`<[`boolean`, `boolean`, `BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `string`, `string`, `string`, `string`] & { `autoLiquidation`: `boolean` ; `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumber` ; `borrowRate`: `BigNumber` ; `borrower`: `string` ; `collateralAsset`: `string` ; `collateralStrategy`: `string` ; `idealCollateralRatio`: `BigNumber` ; `lender`: `string` ; `requestByLender`: `boolean`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`boolean`, `boolean`, `BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `string`, `string`, `string`, `string`] & { `autoLiquidation`: `boolean` ; `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumber` ; `borrowRate`: `BigNumber` ; `borrower`: `string` ; `collateralAsset`: `string` ; `collateralStrategy`: `string` ; `idealCollateralRatio`: `BigNumber` ; `lender`: `string` ; `requestByLender`: `boolean`  }\>

#### Defined in

[src/wrappers/CreditLine.d.ts:767](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L767)

___

### creditLineCounter

▸ **creditLineCounter**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:786](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L786)

___

### creditLineCounter()

▸ **creditLineCounter()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:788](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L788)

___

### creditLineVariables

▸ **creditLineVariables**(`arg0`, `overrides?`): `Promise`<[`number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `interestAccruedTillLastPrincipalUpdate`: `BigNumber` ; `lastPrincipalUpdateTime`: `BigNumber` ; `principal`: `BigNumber` ; `status`: `number` ; `totalInterestRepaid`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `interestAccruedTillLastPrincipalUpdate`: `BigNumber` ; `lastPrincipalUpdateTime`: `BigNumber` ; `principal`: `BigNumber` ; `status`: `number` ; `totalInterestRepaid`: `BigNumber`  }\>

#### Defined in

[src/wrappers/CreditLine.d.ts:790](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L790)

___

### creditLineVariables(uint256)

▸ **creditLineVariables(uint256)**(`arg0`, `overrides?`): `Promise`<[`number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `interestAccruedTillLastPrincipalUpdate`: `BigNumber` ; `lastPrincipalUpdateTime`: `BigNumber` ; `principal`: `BigNumber` ; `status`: `number` ; `totalInterestRepaid`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `interestAccruedTillLastPrincipalUpdate`: `BigNumber` ; `lastPrincipalUpdateTime`: `BigNumber` ; `principal`: `BigNumber` ; `status`: `number` ; `totalInterestRepaid`: `BigNumber`  }\>

#### Defined in

[src/wrappers/CreditLine.d.ts:803](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L803)

___

### deployed

▸ **deployed**(): `Promise`<[`CreditLine`](wrappers_CreditLine.CreditLine.md)\>

#### Returns

`Promise`<[`CreditLine`](wrappers_CreditLine.CreditLine.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/CreditLine.d.ts:202](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L202)

___

### depositCollateral

▸ **depositCollateral**(`_id`, `_amount`, `_fromSavingsAccount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_amount` | `BigNumberish` |
| `_fromSavingsAccount` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:816](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L816)

___

### depositCollateral(uint256,uint256,bool)

▸ **depositCollateral(uint256,uint256,bool)**(`_id`, `_amount`, `_fromSavingsAccount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_amount` | `BigNumberish` |
| `_fromSavingsAccount` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:823](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L823)

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

### getCreditLineStatus

▸ **getCreditLineStatus**(`_id`, `overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:830](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L830)

___

### getCreditLineStatus(uint256)

▸ **getCreditLineStatus(uint256)**(`_id`, `overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:832](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L832)

___

### idealCollateralRatioLimits

▸ **idealCollateralRatioLimits**(`overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Defined in

[src/wrappers/CreditLine.d.ts:834](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L834)

___

### idealCollateralRatioLimits()

▸ **idealCollateralRatioLimits()**(`overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `max`: `BigNumber` ; `min`: `BigNumber`  }\>

#### Defined in

[src/wrappers/CreditLine.d.ts:836](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L836)

___

### initialize

▸ **initialize**(`_owner`, `_protocolFeeFraction`, `_protocolFeeCollector`, `_liquidatorRewardFraction`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_owner` | `string` |
| `_protocolFeeFraction` | `BigNumberish` |
| `_protocolFeeCollector` | `string` |
| `_liquidatorRewardFraction` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:838](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L838)

___

### initialize(address,uint256,address,uint256)

▸ **initialize(address,uint256,address,uint256)**(`_owner`, `_protocolFeeFraction`, `_protocolFeeCollector`, `_liquidatorRewardFraction`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_owner` | `string` |
| `_protocolFeeFraction` | `BigNumberish` |
| `_protocolFeeCollector` | `string` |
| `_liquidatorRewardFraction` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:846](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L846)

___

### liquidate

▸ **liquidate**(`_id`, `_toSavingsAccount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_toSavingsAccount` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:854](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L854)

___

### liquidate(uint256,bool)

▸ **liquidate(uint256,bool)**(`_id`, `_toSavingsAccount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_toSavingsAccount` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:860](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L860)

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

[src/wrappers/CreditLine.d.ts:866](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L866)

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

[src/wrappers/CreditLine.d.ts:868](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L868)

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

[src/wrappers/CreditLine.d.ts:204](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L204)

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

[src/wrappers/CreditLine.d.ts:227](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L227)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`CreditLine`](wrappers_CreditLine.CreditLine.md)

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

[`CreditLine`](wrappers_CreditLine.CreditLine.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/CreditLine.d.ts:207](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L207)

▸ **off**(`eventName`, `listener`): [`CreditLine`](wrappers_CreditLine.CreditLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`CreditLine`](wrappers_CreditLine.CreditLine.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/CreditLine.d.ts:228](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L228)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`CreditLine`](wrappers_CreditLine.CreditLine.md)

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

[`CreditLine`](wrappers_CreditLine.CreditLine.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/CreditLine.d.ts:211](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L211)

▸ **on**(`eventName`, `listener`): [`CreditLine`](wrappers_CreditLine.CreditLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`CreditLine`](wrappers_CreditLine.CreditLine.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/CreditLine.d.ts:229](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L229)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`CreditLine`](wrappers_CreditLine.CreditLine.md)

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

[`CreditLine`](wrappers_CreditLine.CreditLine.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/CreditLine.d.ts:215](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L215)

▸ **once**(`eventName`, `listener`): [`CreditLine`](wrappers_CreditLine.CreditLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`CreditLine`](wrappers_CreditLine.CreditLine.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/CreditLine.d.ts:230](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L230)

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

[src/wrappers/CreditLine.d.ts:870](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L870)

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

[src/wrappers/CreditLine.d.ts:872](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L872)

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

[src/wrappers/CreditLine.d.ts:874](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L874)

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

[src/wrappers/CreditLine.d.ts:876](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L876)

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

[src/wrappers/CreditLine.d.ts:878](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L878)

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

[src/wrappers/CreditLine.d.ts:880](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L880)

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

[src/wrappers/CreditLine.d.ts:234](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L234)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`CreditLine`](wrappers_CreditLine.CreditLine.md)

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

[`CreditLine`](wrappers_CreditLine.CreditLine.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/CreditLine.d.ts:223](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L223)

▸ **removeAllListeners**(`eventName?`): [`CreditLine`](wrappers_CreditLine.CreditLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`CreditLine`](wrappers_CreditLine.CreditLine.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/CreditLine.d.ts:232](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L232)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`CreditLine`](wrappers_CreditLine.CreditLine.md)

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

[`CreditLine`](wrappers_CreditLine.CreditLine.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/CreditLine.d.ts:219](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L219)

▸ **removeListener**(`eventName`, `listener`): [`CreditLine`](wrappers_CreditLine.CreditLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`CreditLine`](wrappers_CreditLine.CreditLine.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/CreditLine.d.ts:231](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L231)

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

[src/wrappers/CreditLine.d.ts:882](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L882)

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

[src/wrappers/CreditLine.d.ts:884](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L884)

___

### repay

▸ **repay**(`_id`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:886](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L886)

___

### repay(uint256,uint256)

▸ **repay(uint256,uint256)**(`_id`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:892](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L892)

___

### request

▸ **request**(`_requestTo`, `_borrowLimit`, `_borrowRate`, `_autoLiquidation`, `_collateralRatio`, `_borrowAsset`, `_borrowAssetStrategy`, `_collateralAsset`, `_collateralStrategy`, `_requestAsLender`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_requestTo` | `string` |
| `_borrowLimit` | `BigNumberish` |
| `_borrowRate` | `BigNumberish` |
| `_autoLiquidation` | `boolean` |
| `_collateralRatio` | `BigNumberish` |
| `_borrowAsset` | `string` |
| `_borrowAssetStrategy` | `string` |
| `_collateralAsset` | `string` |
| `_collateralStrategy` | `string` |
| `_requestAsLender` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:898](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L898)

___

### request(address,uint128,uint128,bool,uint256,address,address,address,address,bool)

▸ **request(address,uint128,uint128,bool,uint256,address,address,address,address,bool)**(`_requestTo`, `_borrowLimit`, `_borrowRate`, `_autoLiquidation`, `_collateralRatio`, `_borrowAsset`, `_borrowAssetStrategy`, `_collateralAsset`, `_collateralStrategy`, `_requestAsLender`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_requestTo` | `string` |
| `_borrowLimit` | `BigNumberish` |
| `_borrowRate` | `BigNumberish` |
| `_autoLiquidation` | `boolean` |
| `_collateralRatio` | `BigNumberish` |
| `_borrowAsset` | `string` |
| `_borrowAssetStrategy` | `string` |
| `_collateralAsset` | `string` |
| `_collateralStrategy` | `string` |
| `_requestAsLender` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:912](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L912)

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

[src/wrappers/CreditLine.d.ts:926](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L926)

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

[src/wrappers/CreditLine.d.ts:928](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L928)

___

### updateBorrowLimit

▸ **updateBorrowLimit**(`_id`, `_newBorrowLimit`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_newBorrowLimit` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:930](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L930)

___

### updateBorrowLimit(uint256,uint128)

▸ **updateBorrowLimit(uint256,uint128)**(`_id`, `_newBorrowLimit`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_newBorrowLimit` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:936](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L936)

___

### updateBorrowLimitLimits

▸ **updateBorrowLimitLimits**(`_min`, `_max`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_min` | `BigNumberish` |
| `_max` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:942](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L942)

___

### updateBorrowLimitLimits(uint256,uint256)

▸ **updateBorrowLimitLimits(uint256,uint256)**(`_min`, `_max`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_min` | `BigNumberish` |
| `_max` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:948](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L948)

___

### updateBorrowRateLimits

▸ **updateBorrowRateLimits**(`_min`, `_max`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_min` | `BigNumberish` |
| `_max` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:954](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L954)

___

### updateBorrowRateLimits(uint256,uint256)

▸ **updateBorrowRateLimits(uint256,uint256)**(`_min`, `_max`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_min` | `BigNumberish` |
| `_max` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:960](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L960)

___

### updateIdealCollateralRatioLimits

▸ **updateIdealCollateralRatioLimits**(`_min`, `_max`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_min` | `BigNumberish` |
| `_max` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:966](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L966)

___

### updateIdealCollateralRatioLimits(uint256,uint256)

▸ **updateIdealCollateralRatioLimits(uint256,uint256)**(`_min`, `_max`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_min` | `BigNumberish` |
| `_max` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:972](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L972)

___

### updateLiquidatorRewardFraction

▸ **updateLiquidatorRewardFraction**(`_rewardFraction`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rewardFraction` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:978](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L978)

___

### updateLiquidatorRewardFraction(uint256)

▸ **updateLiquidatorRewardFraction(uint256)**(`_rewardFraction`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rewardFraction` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:983](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L983)

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

[src/wrappers/CreditLine.d.ts:988](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L988)

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

[src/wrappers/CreditLine.d.ts:993](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L993)

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

[src/wrappers/CreditLine.d.ts:998](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L998)

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

[src/wrappers/CreditLine.d.ts:1003](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L1003)

___

### withdrawAllCollateral

▸ **withdrawAllCollateral**(`_id`, `_toSavingsAccount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_toSavingsAccount` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:1008](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L1008)

___

### withdrawAllCollateral(uint256,bool)

▸ **withdrawAllCollateral(uint256,bool)**(`_id`, `_toSavingsAccount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_toSavingsAccount` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:1014](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L1014)

___

### withdrawCollateral

▸ **withdrawCollateral**(`_id`, `_amount`, `_toSavingsAccount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_amount` | `BigNumberish` |
| `_toSavingsAccount` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:1020](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L1020)

___

### withdrawCollateral(uint256,uint256,bool)

▸ **withdrawCollateral(uint256,uint256,bool)**(`_id`, `_amount`, `_toSavingsAccount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_amount` | `BigNumberish` |
| `_toSavingsAccount` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:1027](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L1027)

___

### withdrawableCollateral

▸ **withdrawableCollateral**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:1034](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L1034)

___

### withdrawableCollateral(uint256)

▸ **withdrawableCollateral(uint256)**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/CreditLine.d.ts:1036](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/CreditLine.d.ts#L1036)

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
