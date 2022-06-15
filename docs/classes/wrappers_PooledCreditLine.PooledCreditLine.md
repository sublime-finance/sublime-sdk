[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/PooledCreditLine](../modules/wrappers_PooledCreditLine.md) / PooledCreditLine

# Class: PooledCreditLine

[wrappers/PooledCreditLine](../modules/wrappers_PooledCreditLine.md).PooledCreditLine

## Hierarchy

- `Contract`

  ↳ **`PooledCreditLine`**

## Table of contents

### Constructors

- [constructor](wrappers_PooledCreditLine.PooledCreditLine.md#constructor)

### Properties

- [\_deployedPromise](wrappers_PooledCreditLine.PooledCreditLine.md#_deployedpromise)
- [\_runningEvents](wrappers_PooledCreditLine.PooledCreditLine.md#_runningevents)
- [\_wrappedEmits](wrappers_PooledCreditLine.PooledCreditLine.md#_wrappedemits)
- [address](wrappers_PooledCreditLine.PooledCreditLine.md#address)
- [callStatic](wrappers_PooledCreditLine.PooledCreditLine.md#callstatic)
- [deployTransaction](wrappers_PooledCreditLine.PooledCreditLine.md#deploytransaction)
- [estimateGas](wrappers_PooledCreditLine.PooledCreditLine.md#estimategas)
- [filters](wrappers_PooledCreditLine.PooledCreditLine.md#filters)
- [functions](wrappers_PooledCreditLine.PooledCreditLine.md#functions)
- [interface](wrappers_PooledCreditLine.PooledCreditLine.md#interface)
- [populateTransaction](wrappers_PooledCreditLine.PooledCreditLine.md#populatetransaction)
- [provider](wrappers_PooledCreditLine.PooledCreditLine.md#provider)
- [resolvedAddress](wrappers_PooledCreditLine.PooledCreditLine.md#resolvedaddress)
- [signer](wrappers_PooledCreditLine.PooledCreditLine.md#signer)

### Methods

- [LENDER\_POOL](wrappers_PooledCreditLine.PooledCreditLine.md#lender_pool)
- [LENDER\_POOL()](wrappers_PooledCreditLine.PooledCreditLine.md#lender_pool())
- [PRICE\_ORACLE](wrappers_PooledCreditLine.PooledCreditLine.md#price_oracle)
- [PRICE\_ORACLE()](wrappers_PooledCreditLine.PooledCreditLine.md#price_oracle())
- [SAVINGS\_ACCOUNT](wrappers_PooledCreditLine.PooledCreditLine.md#savings_account)
- [SAVINGS\_ACCOUNT()](wrappers_PooledCreditLine.PooledCreditLine.md#savings_account())
- [STRATEGY\_REGISTRY](wrappers_PooledCreditLine.PooledCreditLine.md#strategy_registry)
- [STRATEGY\_REGISTRY()](wrappers_PooledCreditLine.PooledCreditLine.md#strategy_registry())
- [USDC](wrappers_PooledCreditLine.PooledCreditLine.md#usdc)
- [USDC()](wrappers_PooledCreditLine.PooledCreditLine.md#usdc())
- [VERIFICATION](wrappers_PooledCreditLine.PooledCreditLine.md#verification)
- [VERIFICATION()](wrappers_PooledCreditLine.PooledCreditLine.md#verification())
- [\_checkRunningEvents](wrappers_PooledCreditLine.PooledCreditLine.md#_checkrunningevents)
- [\_deployed](wrappers_PooledCreditLine.PooledCreditLine.md#_deployed)
- [\_wrapEvent](wrappers_PooledCreditLine.PooledCreditLine.md#_wrapevent)
- [accept](wrappers_PooledCreditLine.PooledCreditLine.md#accept)
- [accept(uint256,uint256)](wrappers_PooledCreditLine.PooledCreditLine.md#accept(uint256,uint256))
- [attach](wrappers_PooledCreditLine.PooledCreditLine.md#attach)
- [borrow](wrappers_PooledCreditLine.PooledCreditLine.md#borrow)
- [borrow(uint256,uint256)](wrappers_PooledCreditLine.PooledCreditLine.md#borrow(uint256,uint256))
- [calculateBorrowableAmount](wrappers_PooledCreditLine.PooledCreditLine.md#calculateborrowableamount)
- [calculateBorrowableAmount(uint256)](wrappers_PooledCreditLine.PooledCreditLine.md#calculateborrowableamount(uint256))
- [calculateCurrentCollateralRatio](wrappers_PooledCreditLine.PooledCreditLine.md#calculatecurrentcollateralratio)
- [calculateCurrentCollateralRatio(uint256)](wrappers_PooledCreditLine.PooledCreditLine.md#calculatecurrentcollateralratio(uint256))
- [calculateCurrentDebt](wrappers_PooledCreditLine.PooledCreditLine.md#calculatecurrentdebt)
- [calculateCurrentDebt(uint256)](wrappers_PooledCreditLine.PooledCreditLine.md#calculatecurrentdebt(uint256))
- [calculateInterestAccrued](wrappers_PooledCreditLine.PooledCreditLine.md#calculateinterestaccrued)
- [calculateInterestAccrued(uint256)](wrappers_PooledCreditLine.PooledCreditLine.md#calculateinterestaccrued(uint256))
- [calculateTotalCollateralTokens](wrappers_PooledCreditLine.PooledCreditLine.md#calculatetotalcollateraltokens)
- [calculateTotalCollateralTokens(uint256)](wrappers_PooledCreditLine.PooledCreditLine.md#calculatetotalcollateraltokens(uint256))
- [cancelRequest](wrappers_PooledCreditLine.PooledCreditLine.md#cancelrequest)
- [cancelRequest(uint256)](wrappers_PooledCreditLine.PooledCreditLine.md#cancelrequest(uint256))
- [cancelRequestOnLowCollection](wrappers_PooledCreditLine.PooledCreditLine.md#cancelrequestonlowcollection)
- [cancelRequestOnLowCollection(uint256)](wrappers_PooledCreditLine.PooledCreditLine.md#cancelrequestonlowcollection(uint256))
- [cancelRequestOnRequestedStateAtEnd](wrappers_PooledCreditLine.PooledCreditLine.md#cancelrequestonrequestedstateatend)
- [cancelRequestOnRequestedStateAtEnd(uint256)](wrappers_PooledCreditLine.PooledCreditLine.md#cancelrequestonrequestedstateatend(uint256))
- [close](wrappers_PooledCreditLine.PooledCreditLine.md#close)
- [close(uint256)](wrappers_PooledCreditLine.PooledCreditLine.md#close(uint256))
- [collateralTokensToLiquidate](wrappers_PooledCreditLine.PooledCreditLine.md#collateraltokenstoliquidate)
- [collateralTokensToLiquidate(uint256,uint256)](wrappers_PooledCreditLine.PooledCreditLine.md#collateraltokenstoliquidate(uint256,uint256))
- [connect](wrappers_PooledCreditLine.PooledCreditLine.md#connect)
- [deployed](wrappers_PooledCreditLine.PooledCreditLine.md#deployed)
- [depositCollateral](wrappers_PooledCreditLine.PooledCreditLine.md#depositcollateral)
- [depositCollateral(uint256,uint256,bool)](wrappers_PooledCreditLine.PooledCreditLine.md#depositcollateral(uint256,uint256,bool))
- [depositedCollateralInShares](wrappers_PooledCreditLine.PooledCreditLine.md#depositedcollateralinshares)
- [depositedCollateralInShares(uint256)](wrappers_PooledCreditLine.PooledCreditLine.md#depositedcollateralinshares(uint256))
- [emit](wrappers_PooledCreditLine.PooledCreditLine.md#emit)
- [fallback](wrappers_PooledCreditLine.PooledCreditLine.md#fallback)
- [getEndsAt](wrappers_PooledCreditLine.PooledCreditLine.md#getendsat)
- [getEndsAt(uint256)](wrappers_PooledCreditLine.PooledCreditLine.md#getendsat(uint256))
- [getPrincipal](wrappers_PooledCreditLine.PooledCreditLine.md#getprincipal)
- [getPrincipal(uint256)](wrappers_PooledCreditLine.PooledCreditLine.md#getprincipal(uint256))
- [getRequiredCollateral](wrappers_PooledCreditLine.PooledCreditLine.md#getrequiredcollateral)
- [getRequiredCollateral(uint256,uint256)](wrappers_PooledCreditLine.PooledCreditLine.md#getrequiredcollateral(uint256,uint256))
- [getStatusAndUpdate](wrappers_PooledCreditLine.PooledCreditLine.md#getstatusandupdate)
- [getStatusAndUpdate(uint256)](wrappers_PooledCreditLine.PooledCreditLine.md#getstatusandupdate(uint256))
- [initialize](wrappers_PooledCreditLine.PooledCreditLine.md#initialize)
- [initialize(address,uint256,address)](wrappers_PooledCreditLine.PooledCreditLine.md#initialize(address,uint256,address))
- [liquidate](wrappers_PooledCreditLine.PooledCreditLine.md#liquidate)
- [liquidate(uint256)](wrappers_PooledCreditLine.PooledCreditLine.md#liquidate(uint256))
- [listenerCount](wrappers_PooledCreditLine.PooledCreditLine.md#listenercount)
- [listeners](wrappers_PooledCreditLine.PooledCreditLine.md#listeners)
- [maximumProtocolFeeFraction](wrappers_PooledCreditLine.PooledCreditLine.md#maximumprotocolfeefraction)
- [maximumProtocolFeeFraction()](wrappers_PooledCreditLine.PooledCreditLine.md#maximumprotocolfeefraction())
- [off](wrappers_PooledCreditLine.PooledCreditLine.md#off)
- [on](wrappers_PooledCreditLine.PooledCreditLine.md#on)
- [once](wrappers_PooledCreditLine.PooledCreditLine.md#once)
- [owner](wrappers_PooledCreditLine.PooledCreditLine.md#owner)
- [owner()](wrappers_PooledCreditLine.PooledCreditLine.md#owner())
- [pooledCreditLineConstants](wrappers_PooledCreditLine.PooledCreditLine.md#pooledcreditlineconstants)
- [pooledCreditLineConstants(uint256)](wrappers_PooledCreditLine.PooledCreditLine.md#pooledcreditlineconstants(uint256))
- [pooledCreditLineCounter](wrappers_PooledCreditLine.PooledCreditLine.md#pooledcreditlinecounter)
- [pooledCreditLineCounter()](wrappers_PooledCreditLine.PooledCreditLine.md#pooledcreditlinecounter())
- [pooledCreditLineVariables](wrappers_PooledCreditLine.PooledCreditLine.md#pooledcreditlinevariables)
- [pooledCreditLineVariables(uint256)](wrappers_PooledCreditLine.PooledCreditLine.md#pooledcreditlinevariables(uint256))
- [protocolFeeCollector](wrappers_PooledCreditLine.PooledCreditLine.md#protocolfeecollector)
- [protocolFeeCollector()](wrappers_PooledCreditLine.PooledCreditLine.md#protocolfeecollector())
- [protocolFeeFraction](wrappers_PooledCreditLine.PooledCreditLine.md#protocolfeefraction)
- [protocolFeeFraction()](wrappers_PooledCreditLine.PooledCreditLine.md#protocolfeefraction())
- [queryFilter](wrappers_PooledCreditLine.PooledCreditLine.md#queryfilter)
- [removeAllListeners](wrappers_PooledCreditLine.PooledCreditLine.md#removealllisteners)
- [removeListener](wrappers_PooledCreditLine.PooledCreditLine.md#removelistener)
- [renounceOwnership](wrappers_PooledCreditLine.PooledCreditLine.md#renounceownership)
- [renounceOwnership()](wrappers_PooledCreditLine.PooledCreditLine.md#renounceownership())
- [repay](wrappers_PooledCreditLine.PooledCreditLine.md#repay)
- [repay(uint256,uint256)](wrappers_PooledCreditLine.PooledCreditLine.md#repay(uint256,uint256))
- [request](wrappers_PooledCreditLine.PooledCreditLine.md#request)
- [request((uint256,uint256,address,uint256,uint256,uint256,uint256,uint128,uint128,address,address,address,address,address,bool))](wrappers_PooledCreditLine.PooledCreditLine.md#request((uint256,uint256,address,uint256,uint256,uint256,uint256,uint128,uint128,address,address,address,address,address,bool)))
- [terminate](wrappers_PooledCreditLine.PooledCreditLine.md#terminate)
- [terminate(uint256)](wrappers_PooledCreditLine.PooledCreditLine.md#terminate(uint256))
- [transferOwnership](wrappers_PooledCreditLine.PooledCreditLine.md#transferownership)
- [transferOwnership(address)](wrappers_PooledCreditLine.PooledCreditLine.md#transferownership(address))
- [updateBorrowLimitLimits](wrappers_PooledCreditLine.PooledCreditLine.md#updateborrowlimitlimits)
- [updateBorrowLimitLimits(uint256,uint256)](wrappers_PooledCreditLine.PooledCreditLine.md#updateborrowlimitlimits(uint256,uint256))
- [updateBorrowRateLimits](wrappers_PooledCreditLine.PooledCreditLine.md#updateborrowratelimits)
- [updateBorrowRateLimits(uint256,uint256)](wrappers_PooledCreditLine.PooledCreditLine.md#updateborrowratelimits(uint256,uint256))
- [updateCollectionPeriodLimits](wrappers_PooledCreditLine.PooledCreditLine.md#updatecollectionperiodlimits)
- [updateCollectionPeriodLimits(uint256,uint256)](wrappers_PooledCreditLine.PooledCreditLine.md#updatecollectionperiodlimits(uint256,uint256))
- [updateDefaultGracePeriodLimits](wrappers_PooledCreditLine.PooledCreditLine.md#updatedefaultgraceperiodlimits)
- [updateDefaultGracePeriodLimits(uint256,uint256)](wrappers_PooledCreditLine.PooledCreditLine.md#updatedefaultgraceperiodlimits(uint256,uint256))
- [updateDurationLimits](wrappers_PooledCreditLine.PooledCreditLine.md#updatedurationlimits)
- [updateDurationLimits(uint256,uint256)](wrappers_PooledCreditLine.PooledCreditLine.md#updatedurationlimits(uint256,uint256))
- [updateGracePenaltyRateLimits](wrappers_PooledCreditLine.PooledCreditLine.md#updategracepenaltyratelimits)
- [updateGracePenaltyRateLimits(uint256,uint256)](wrappers_PooledCreditLine.PooledCreditLine.md#updategracepenaltyratelimits(uint256,uint256))
- [updateIdealCollateralRatioLimits](wrappers_PooledCreditLine.PooledCreditLine.md#updateidealcollateralratiolimits)
- [updateIdealCollateralRatioLimits(uint256,uint256)](wrappers_PooledCreditLine.PooledCreditLine.md#updateidealcollateralratiolimits(uint256,uint256))
- [updateProtocolFeeCollector](wrappers_PooledCreditLine.PooledCreditLine.md#updateprotocolfeecollector)
- [updateProtocolFeeCollector(address)](wrappers_PooledCreditLine.PooledCreditLine.md#updateprotocolfeecollector(address))
- [updateProtocolFeeFraction](wrappers_PooledCreditLine.PooledCreditLine.md#updateprotocolfeefraction)
- [updateProtocolFeeFraction(uint256)](wrappers_PooledCreditLine.PooledCreditLine.md#updateprotocolfeefraction(uint256))
- [withdrawAllCollateral](wrappers_PooledCreditLine.PooledCreditLine.md#withdrawallcollateral)
- [withdrawAllCollateral(uint256,bool)](wrappers_PooledCreditLine.PooledCreditLine.md#withdrawallcollateral(uint256,bool))
- [withdrawCollateral](wrappers_PooledCreditLine.PooledCreditLine.md#withdrawcollateral)
- [withdrawCollateral(uint256,uint256,bool)](wrappers_PooledCreditLine.PooledCreditLine.md#withdrawcollateral(uint256,uint256,bool))
- [withdrawableCollateral](wrappers_PooledCreditLine.PooledCreditLine.md#withdrawablecollateral)
- [withdrawableCollateral(uint256)](wrappers_PooledCreditLine.PooledCreditLine.md#withdrawablecollateral(uint256))
- [getContractAddress](wrappers_PooledCreditLine.PooledCreditLine.md#getcontractaddress)
- [getInterface](wrappers_PooledCreditLine.PooledCreditLine.md#getinterface)
- [isIndexed](wrappers_PooledCreditLine.PooledCreditLine.md#isindexed)

## Constructors

### constructor

• **new PooledCreditLine**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `LENDER_POOL` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `LENDER_POOL()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `PRICE_ORACLE` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `PRICE_ORACLE()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `SAVINGS_ACCOUNT` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `SAVINGS_ACCOUNT()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `STRATEGY_REGISTRY` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `STRATEGY_REGISTRY()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `USDC` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `USDC()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `VERIFICATION` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `VERIFICATION()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `accept` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `accept(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `borrow` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `borrow(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `calculateBorrowableAmount` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateBorrowableAmount(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateCurrentCollateralRatio` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateCurrentCollateralRatio(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateCurrentDebt` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateCurrentDebt(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateInterestAccrued` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateInterestAccrued(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateTotalCollateralTokens` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateTotalCollateralTokens(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `cancelRequest` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `cancelRequest(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `cancelRequestOnLowCollection` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `cancelRequestOnLowCollection(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `cancelRequestOnRequestedStateAtEnd` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `cancelRequestOnRequestedStateAtEnd(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `close` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `close(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `collateralTokensToLiquidate` | (`_id`: `BigNumberish`, `_borrowTokenAmount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `collateralTokensToLiquidate(uint256,uint256)` | (`_id`: `BigNumberish`, `_borrowTokenAmount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `depositCollateral` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_fromSavingsAccount`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `depositCollateral(uint256,uint256,bool)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_fromSavingsAccount`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `depositedCollateralInShares` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `depositedCollateralInShares(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getEndsAt` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getEndsAt(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getPrincipal` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getPrincipal(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getRequiredCollateral` | (`_id`: `BigNumberish`, `_borrowTokenAmount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getRequiredCollateral(uint256,uint256)` | (`_id`: `BigNumberish`, `_borrowTokenAmount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getStatusAndUpdate` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `getStatusAndUpdate(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `initialize` | (`_owner`: `string`, `_protocolFeeFraction`: `BigNumberish`, `_protocolFeeCollector`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialize(address,uint256,address)` | (`_owner`: `string`, `_protocolFeeFraction`: `BigNumberish`, `_protocolFeeCollector`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `liquidate` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `BigNumber`]\> |
| `liquidate(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `BigNumber`]\> |
| `maximumProtocolFeeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `maximumProtocolFeeFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `pooledCreditLineConstants` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `string`, `BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `BigNumber`] & { `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumber` ; `borrowRate`: `BigNumber` ; `borrower`: `string` ; `collateralAsset`: `string` ; `collateralAssetStrategy`: `string` ; `defaultsAt`: `BigNumber` ; `endsAt`: `BigNumber` ; `gracePenaltyRate`: `BigNumber` ; `idealCollateralRatio`: `BigNumber` ; `startsAt`: `BigNumber`  }\> |
| `pooledCreditLineConstants(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `string`, `BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `BigNumber`] & { `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumber` ; `borrowRate`: `BigNumber` ; `borrower`: `string` ; `collateralAsset`: `string` ; `collateralAssetStrategy`: `string` ; `defaultsAt`: `BigNumber` ; `endsAt`: `BigNumber` ; `gracePenaltyRate`: `BigNumber` ; `idealCollateralRatio`: `BigNumber` ; `startsAt`: `BigNumber`  }\> |
| `pooledCreditLineCounter` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `pooledCreditLineCounter()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `pooledCreditLineVariables` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `interestAccruedTillLastPrincipalUpdate`: `BigNumber` ; `lastPrincipalUpdateTime`: `BigNumber` ; `principal`: `BigNumber` ; `status`: `number` ; `totalInterestRepaid`: `BigNumber`  }\> |
| `pooledCreditLineVariables(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `interestAccruedTillLastPrincipalUpdate`: `BigNumber` ; `lastPrincipalUpdateTime`: `BigNumber` ; `principal`: `BigNumber` ; `status`: `number` ; `totalInterestRepaid`: `BigNumber`  }\> |
| `protocolFeeCollector` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `protocolFeeCollector()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `protocolFeeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `protocolFeeFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `renounceOwnership` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `renounceOwnership()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `repay` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `repay(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `request` | (`_request`: { `areTokensTransferable`: `boolean` ; `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumberish` ; `borrowRate`: `BigNumberish` ; `borrowerVerifier`: `string` ; `collateralAsset`: `string` ; `collateralAssetStrategy`: `string` ; `collateralRatio`: `BigNumberish` ; `collectionPeriod`: `BigNumberish` ; `defaultGracePeriod`: `BigNumberish` ; `duration`: `BigNumberish` ; `gracePenaltyRate`: `BigNumberish` ; `lenderVerifier`: `string` ; `minBorrowAmount`: `BigNumberish`  }, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `request((uint256,uint256,address,uint256,uint256,uint256,uint256,uint128,uint128,address,address,address,address,address,bool))` | (`_request`: { `areTokensTransferable`: `boolean` ; `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumberish` ; `borrowRate`: `BigNumberish` ; `borrowerVerifier`: `string` ; `collateralAsset`: `string` ; `collateralAssetStrategy`: `string` ; `collateralRatio`: `BigNumberish` ; `collectionPeriod`: `BigNumberish` ; `defaultGracePeriod`: `BigNumberish` ; `duration`: `BigNumberish` ; `gracePenaltyRate`: `BigNumberish` ; `lenderVerifier`: `string` ; `minBorrowAmount`: `BigNumberish`  }, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `terminate` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `terminate(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateBorrowLimitLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateBorrowLimitLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateBorrowRateLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateBorrowRateLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateCollectionPeriodLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateCollectionPeriodLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateDefaultGracePeriodLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateDefaultGracePeriodLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateDurationLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateDurationLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateGracePenaltyRateLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateGracePenaltyRateLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateIdealCollateralRatioLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateIdealCollateralRatioLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateProtocolFeeCollector` | (`_protocolFeeCollector`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateProtocolFeeCollector(address)` | (`_protocolFeeCollector`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateProtocolFeeFraction` | (`_protocolFeeFraction`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateProtocolFeeFraction(uint256)` | (`_protocolFeeFraction`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdrawAllCollateral` | (`_id`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdrawAllCollateral(uint256,bool)` | (`_id`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdrawCollateral` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdrawCollateral(uint256,uint256,bool)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdrawableCollateral` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `withdrawableCollateral(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:1216](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1216)

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
| `LENDER_POOL` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `LENDER_POOL()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `PRICE_ORACLE` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `PRICE_ORACLE()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `SAVINGS_ACCOUNT` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `SAVINGS_ACCOUNT()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `STRATEGY_REGISTRY` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `STRATEGY_REGISTRY()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `USDC` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `USDC()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `VERIFICATION` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `VERIFICATION()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `accept` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `accept(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `borrow` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `borrow(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `calculateBorrowableAmount` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `calculateBorrowableAmount(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `calculateCurrentCollateralRatio` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `calculateCurrentCollateralRatio(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `calculateCurrentDebt` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateCurrentDebt(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateInterestAccrued` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateInterestAccrued(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateTotalCollateralTokens` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `calculateTotalCollateralTokens(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `cancelRequest` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `cancelRequest(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `cancelRequestOnLowCollection` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `cancelRequestOnLowCollection(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `cancelRequestOnRequestedStateAtEnd` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `cancelRequestOnRequestedStateAtEnd(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `close` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `close(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `collateralTokensToLiquidate` | (`_id`: `BigNumberish`, `_borrowTokenAmount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `collateralTokensToLiquidate(uint256,uint256)` | (`_id`: `BigNumberish`, `_borrowTokenAmount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `depositCollateral` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_fromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `depositCollateral(uint256,uint256,bool)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_fromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `depositedCollateralInShares` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `depositedCollateralInShares(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getEndsAt` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getEndsAt(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getPrincipal` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getPrincipal(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getRequiredCollateral` | (`_id`: `BigNumberish`, `_borrowTokenAmount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getRequiredCollateral(uint256,uint256)` | (`_id`: `BigNumberish`, `_borrowTokenAmount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getStatusAndUpdate` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getStatusAndUpdate(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initialize` | (`_owner`: `string`, `_protocolFeeFraction`: `BigNumberish`, `_protocolFeeCollector`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initialize(address,uint256,address)` | (`_owner`: `string`, `_protocolFeeFraction`: `BigNumberish`, `_protocolFeeCollector`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `liquidate` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `liquidate(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `maximumProtocolFeeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `maximumProtocolFeeFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `pooledCreditLineConstants` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `pooledCreditLineConstants(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `pooledCreditLineCounter` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `pooledCreditLineCounter()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `pooledCreditLineVariables` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `pooledCreditLineVariables(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `protocolFeeCollector` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `protocolFeeCollector()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `protocolFeeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `protocolFeeFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `repay` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `repay(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `request` | (`_request`: { `areTokensTransferable`: `boolean` ; `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumberish` ; `borrowRate`: `BigNumberish` ; `borrowerVerifier`: `string` ; `collateralAsset`: `string` ; `collateralAssetStrategy`: `string` ; `collateralRatio`: `BigNumberish` ; `collectionPeriod`: `BigNumberish` ; `defaultGracePeriod`: `BigNumberish` ; `duration`: `BigNumberish` ; `gracePenaltyRate`: `BigNumberish` ; `lenderVerifier`: `string` ; `minBorrowAmount`: `BigNumberish`  }, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `request((uint256,uint256,address,uint256,uint256,uint256,uint256,uint128,uint128,address,address,address,address,address,bool))` | (`_request`: { `areTokensTransferable`: `boolean` ; `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumberish` ; `borrowRate`: `BigNumberish` ; `borrowerVerifier`: `string` ; `collateralAsset`: `string` ; `collateralAssetStrategy`: `string` ; `collateralRatio`: `BigNumberish` ; `collectionPeriod`: `BigNumberish` ; `defaultGracePeriod`: `BigNumberish` ; `duration`: `BigNumberish` ; `gracePenaltyRate`: `BigNumberish` ; `lenderVerifier`: `string` ; `minBorrowAmount`: `BigNumberish`  }, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `terminate` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `terminate(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateBorrowLimitLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateBorrowLimitLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateBorrowRateLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateBorrowRateLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateCollectionPeriodLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateCollectionPeriodLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateDefaultGracePeriodLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateDefaultGracePeriodLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateDurationLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateDurationLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateGracePenaltyRateLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateGracePenaltyRateLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateIdealCollateralRatioLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateIdealCollateralRatioLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateProtocolFeeCollector` | (`_protocolFeeCollector`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateProtocolFeeCollector(address)` | (`_protocolFeeCollector`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateProtocolFeeFraction` | (`_protocolFeeFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateProtocolFeeFraction(uint256)` | (`_protocolFeeFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawAllCollateral` | (`_id`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawAllCollateral(uint256,bool)` | (`_id`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawCollateral` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawCollateral(uint256,uint256,bool)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawableCollateral` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawableCollateral(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:1606](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1606)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `BorrowedFromPooledCreditLine` | (`id`: `BigNumberish`, `borrowAmount`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `BigNumber`], { `borrowAmount`: `BigNumber` ; `id`: `BigNumber`  }\> |
| `CollateralDeposited` | (`id`: `BigNumberish`, `shares`: ``null``, `strategy`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `BigNumber`, `string`], { `id`: `BigNumber` ; `shares`: `BigNumber` ; `strategy`: `string`  }\> |
| `CollateralWithdrawn` | (`id`: `BigNumberish`, `shares`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `BigNumber`], { `id`: `BigNumber` ; `shares`: `BigNumber`  }\> |
| `CompletePooledCreditLineRepaid` | (`id`: `BigNumberish`, `repayer`: `string`, `repayAmount`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `string`, `BigNumber`], { `id`: `BigNumber` ; `repayAmount`: `BigNumber` ; `repayer`: `string`  }\> |
| `LimitsUpdated` | (`limitType`: `string`, `min`: ``null``, `max`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `BigNumber`, `BigNumber`], { `limitType`: `string` ; `max`: `BigNumber` ; `min`: `BigNumber`  }\> |
| `OwnershipTransferred` | (`previousOwner`: `string`, `newOwner`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`], { `newOwner`: `string` ; `previousOwner`: `string`  }\> |
| `PartialPooledCreditLineRepaid` | (`id`: `BigNumberish`, `repayer`: `string`, `repayAmount`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `string`, `BigNumber`], { `id`: `BigNumber` ; `repayAmount`: `BigNumber` ; `repayer`: `string`  }\> |
| `PooledCreditLineAccepted` | (`id`: `BigNumberish`, `amount`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `BigNumber`], { `amount`: `BigNumber` ; `id`: `BigNumber`  }\> |
| `PooledCreditLineCancelled` | (`id`: `BigNumberish`, `reason`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `string`], { `id`: `BigNumber` ; `reason`: `string`  }\> |
| `PooledCreditLineClosed` | (`id`: `BigNumberish`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`], { `id`: `BigNumber`  }\> |
| `PooledCreditLineLiquidated` | (`id`: `BigNumberish`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`], { `id`: `BigNumber`  }\> |
| `PooledCreditLineRequested` | (`id`: `BigNumberish`, `borrower`: `string`, `borrowerVerifier`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `string`, `string`], { `borrower`: `string` ; `borrowerVerifier`: `string` ; `id`: `BigNumber`  }\> |
| `PooledCreditLineTerminated` | (`id`: `BigNumberish`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`], { `id`: `BigNumber`  }\> |
| `ProtocolFeeCollectorUpdated` | (`updatedProtocolFeeCollector`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `updatedProtocolFeeCollector`: `string`  }\> |
| `ProtocolFeeFractionUpdated` | (`updatedProtocolFee`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`], { `updatedProtocolFee`: `BigNumber`  }\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:1537](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1537)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `LENDER_POOL` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `LENDER_POOL()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `PRICE_ORACLE` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `PRICE_ORACLE()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `SAVINGS_ACCOUNT` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `SAVINGS_ACCOUNT()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `STRATEGY_REGISTRY` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `STRATEGY_REGISTRY()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `USDC` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `USDC()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `VERIFICATION` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `VERIFICATION()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `accept` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `accept(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `borrow` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `borrow(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `calculateBorrowableAmount` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `calculateBorrowableAmount(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `calculateCurrentCollateralRatio` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `calculateCurrentCollateralRatio(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `calculateCurrentDebt` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `calculateCurrentDebt(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `calculateInterestAccrued` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `calculateInterestAccrued(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `calculateTotalCollateralTokens` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `calculateTotalCollateralTokens(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `cancelRequest` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `cancelRequest(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `cancelRequestOnLowCollection` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `cancelRequestOnLowCollection(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `cancelRequestOnRequestedStateAtEnd` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `cancelRequestOnRequestedStateAtEnd(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `close` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `close(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `collateralTokensToLiquidate` | (`_id`: `BigNumberish`, `_borrowTokenAmount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `collateralTokensToLiquidate(uint256,uint256)` | (`_id`: `BigNumberish`, `_borrowTokenAmount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `depositCollateral` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_fromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `depositCollateral(uint256,uint256,bool)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_fromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `depositedCollateralInShares` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `depositedCollateralInShares(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getEndsAt` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getEndsAt(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getPrincipal` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getPrincipal(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getRequiredCollateral` | (`_id`: `BigNumberish`, `_borrowTokenAmount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getRequiredCollateral(uint256,uint256)` | (`_id`: `BigNumberish`, `_borrowTokenAmount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getStatusAndUpdate` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getStatusAndUpdate(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialize` | (`_owner`: `string`, `_protocolFeeFraction`: `BigNumberish`, `_protocolFeeCollector`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialize(address,uint256,address)` | (`_owner`: `string`, `_protocolFeeFraction`: `BigNumberish`, `_protocolFeeCollector`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `liquidate` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `liquidate(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `maximumProtocolFeeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `maximumProtocolFeeFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `pooledCreditLineConstants` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `string`, `BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `BigNumber`] & { `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumber` ; `borrowRate`: `BigNumber` ; `borrower`: `string` ; `collateralAsset`: `string` ; `collateralAssetStrategy`: `string` ; `defaultsAt`: `BigNumber` ; `endsAt`: `BigNumber` ; `gracePenaltyRate`: `BigNumber` ; `idealCollateralRatio`: `BigNumber` ; `startsAt`: `BigNumber`  }\> |
| `pooledCreditLineConstants(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `string`, `BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `BigNumber`] & { `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumber` ; `borrowRate`: `BigNumber` ; `borrower`: `string` ; `collateralAsset`: `string` ; `collateralAssetStrategy`: `string` ; `defaultsAt`: `BigNumber` ; `endsAt`: `BigNumber` ; `gracePenaltyRate`: `BigNumber` ; `idealCollateralRatio`: `BigNumber` ; `startsAt`: `BigNumber`  }\> |
| `pooledCreditLineCounter` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `pooledCreditLineCounter()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `pooledCreditLineVariables` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `interestAccruedTillLastPrincipalUpdate`: `BigNumber` ; `lastPrincipalUpdateTime`: `BigNumber` ; `principal`: `BigNumber` ; `status`: `number` ; `totalInterestRepaid`: `BigNumber`  }\> |
| `pooledCreditLineVariables(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `interestAccruedTillLastPrincipalUpdate`: `BigNumber` ; `lastPrincipalUpdateTime`: `BigNumber` ; `principal`: `BigNumber` ; `status`: `number` ; `totalInterestRepaid`: `BigNumber`  }\> |
| `protocolFeeCollector` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `protocolFeeCollector()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `protocolFeeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `protocolFeeFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `repay` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `repay(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `request` | (`_request`: { `areTokensTransferable`: `boolean` ; `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumberish` ; `borrowRate`: `BigNumberish` ; `borrowerVerifier`: `string` ; `collateralAsset`: `string` ; `collateralAssetStrategy`: `string` ; `collateralRatio`: `BigNumberish` ; `collectionPeriod`: `BigNumberish` ; `defaultGracePeriod`: `BigNumberish` ; `duration`: `BigNumberish` ; `gracePenaltyRate`: `BigNumberish` ; `lenderVerifier`: `string` ; `minBorrowAmount`: `BigNumberish`  }, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `request((uint256,uint256,address,uint256,uint256,uint256,uint256,uint128,uint128,address,address,address,address,address,bool))` | (`_request`: { `areTokensTransferable`: `boolean` ; `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumberish` ; `borrowRate`: `BigNumberish` ; `borrowerVerifier`: `string` ; `collateralAsset`: `string` ; `collateralAssetStrategy`: `string` ; `collateralRatio`: `BigNumberish` ; `collectionPeriod`: `BigNumberish` ; `defaultGracePeriod`: `BigNumberish` ; `duration`: `BigNumberish` ; `gracePenaltyRate`: `BigNumberish` ; `lenderVerifier`: `string` ; `minBorrowAmount`: `BigNumberish`  }, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `terminate` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `terminate(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateBorrowLimitLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateBorrowLimitLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateBorrowRateLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateBorrowRateLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateCollectionPeriodLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateCollectionPeriodLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateDefaultGracePeriodLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateDefaultGracePeriodLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateDurationLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateDurationLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateGracePenaltyRateLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateGracePenaltyRateLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateIdealCollateralRatioLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateIdealCollateralRatioLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateProtocolFeeCollector` | (`_protocolFeeCollector`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateProtocolFeeCollector(address)` | (`_protocolFeeCollector`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateProtocolFeeFraction` | (`_protocolFeeFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateProtocolFeeFraction(uint256)` | (`_protocolFeeFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawAllCollateral` | (`_id`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawAllCollateral(uint256,bool)` | (`_id`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawCollateral` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawCollateral(uint256,uint256,bool)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawableCollateral` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawableCollateral(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:277](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L277)

___

### interface

• **interface**: [`PooledCreditLineInterface`](../interfaces/wrappers_PooledCreditLine.PooledCreditLineInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:275](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L275)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `LENDER_POOL` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `LENDER_POOL()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `PRICE_ORACLE` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `PRICE_ORACLE()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `SAVINGS_ACCOUNT` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `SAVINGS_ACCOUNT()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `STRATEGY_REGISTRY` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `STRATEGY_REGISTRY()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `USDC` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `USDC()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `VERIFICATION` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `VERIFICATION()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `accept` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `accept(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `borrow` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `borrow(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `calculateBorrowableAmount` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `calculateBorrowableAmount(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `calculateCurrentCollateralRatio` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `calculateCurrentCollateralRatio(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `calculateCurrentDebt` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `calculateCurrentDebt(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `calculateInterestAccrued` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `calculateInterestAccrued(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `calculateTotalCollateralTokens` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `calculateTotalCollateralTokens(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `cancelRequest` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `cancelRequest(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `cancelRequestOnLowCollection` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `cancelRequestOnLowCollection(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `cancelRequestOnRequestedStateAtEnd` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `cancelRequestOnRequestedStateAtEnd(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `close` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `close(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `collateralTokensToLiquidate` | (`_id`: `BigNumberish`, `_borrowTokenAmount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `collateralTokensToLiquidate(uint256,uint256)` | (`_id`: `BigNumberish`, `_borrowTokenAmount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `depositCollateral` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_fromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `depositCollateral(uint256,uint256,bool)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_fromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `depositedCollateralInShares` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `depositedCollateralInShares(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getEndsAt` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getEndsAt(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getPrincipal` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getPrincipal(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getRequiredCollateral` | (`_id`: `BigNumberish`, `_borrowTokenAmount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getRequiredCollateral(uint256,uint256)` | (`_id`: `BigNumberish`, `_borrowTokenAmount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getStatusAndUpdate` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getStatusAndUpdate(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialize` | (`_owner`: `string`, `_protocolFeeFraction`: `BigNumberish`, `_protocolFeeCollector`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialize(address,uint256,address)` | (`_owner`: `string`, `_protocolFeeFraction`: `BigNumberish`, `_protocolFeeCollector`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `liquidate` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `liquidate(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `maximumProtocolFeeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `maximumProtocolFeeFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `pooledCreditLineConstants` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `pooledCreditLineConstants(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `pooledCreditLineCounter` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `pooledCreditLineCounter()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `pooledCreditLineVariables` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `pooledCreditLineVariables(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `protocolFeeCollector` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `protocolFeeCollector()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `protocolFeeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `protocolFeeFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `repay` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `repay(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `request` | (`_request`: { `areTokensTransferable`: `boolean` ; `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumberish` ; `borrowRate`: `BigNumberish` ; `borrowerVerifier`: `string` ; `collateralAsset`: `string` ; `collateralAssetStrategy`: `string` ; `collateralRatio`: `BigNumberish` ; `collectionPeriod`: `BigNumberish` ; `defaultGracePeriod`: `BigNumberish` ; `duration`: `BigNumberish` ; `gracePenaltyRate`: `BigNumberish` ; `lenderVerifier`: `string` ; `minBorrowAmount`: `BigNumberish`  }, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `request((uint256,uint256,address,uint256,uint256,uint256,uint256,uint128,uint128,address,address,address,address,address,bool))` | (`_request`: { `areTokensTransferable`: `boolean` ; `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumberish` ; `borrowRate`: `BigNumberish` ; `borrowerVerifier`: `string` ; `collateralAsset`: `string` ; `collateralAssetStrategy`: `string` ; `collateralRatio`: `BigNumberish` ; `collectionPeriod`: `BigNumberish` ; `defaultGracePeriod`: `BigNumberish` ; `duration`: `BigNumberish` ; `gracePenaltyRate`: `BigNumberish` ; `lenderVerifier`: `string` ; `minBorrowAmount`: `BigNumberish`  }, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `terminate` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `terminate(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership(address)` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateBorrowLimitLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateBorrowLimitLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateBorrowRateLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateBorrowRateLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateCollectionPeriodLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateCollectionPeriodLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateDefaultGracePeriodLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateDefaultGracePeriodLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateDurationLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateDurationLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateGracePenaltyRateLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateGracePenaltyRateLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateIdealCollateralRatioLimits` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateIdealCollateralRatioLimits(uint256,uint256)` | (`_min`: `BigNumberish`, `_max`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateProtocolFeeCollector` | (`_protocolFeeCollector`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateProtocolFeeCollector(address)` | (`_protocolFeeCollector`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateProtocolFeeFraction` | (`_protocolFeeFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateProtocolFeeFraction(uint256)` | (`_protocolFeeFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawAllCollateral` | (`_id`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawAllCollateral(uint256,bool)` | (`_id`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawCollateral` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawCollateral(uint256,uint256,bool)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_toSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawableCollateral` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawableCollateral(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:1987](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1987)

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

### LENDER\_POOL

▸ **LENDER_POOL**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:749](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L749)

___

### LENDER\_POOL()

▸ **LENDER_POOL()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:751](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L751)

___

### PRICE\_ORACLE

▸ **PRICE_ORACLE**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:753](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L753)

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

[src/wrappers/PooledCreditLine.d.ts:755](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L755)

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

[src/wrappers/PooledCreditLine.d.ts:757](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L757)

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

[src/wrappers/PooledCreditLine.d.ts:759](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L759)

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

[src/wrappers/PooledCreditLine.d.ts:761](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L761)

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

[src/wrappers/PooledCreditLine.d.ts:763](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L763)

___

### USDC

▸ **USDC**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:765](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L765)

___

### USDC()

▸ **USDC()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:767](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L767)

___

### VERIFICATION

▸ **VERIFICATION**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:769](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L769)

___

### VERIFICATION()

▸ **VERIFICATION()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:771](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L771)

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

▸ **accept**(`_id`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:773](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L773)

___

### accept(uint256,uint256)

▸ **accept(uint256,uint256)**(`_id`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:779](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L779)

___

### attach

▸ **attach**(`addressOrName`): [`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:236](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L236)

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

[src/wrappers/PooledCreditLine.d.ts:785](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L785)

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

[src/wrappers/PooledCreditLine.d.ts:791](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L791)

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

[src/wrappers/PooledCreditLine.d.ts:797](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L797)

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

[src/wrappers/PooledCreditLine.d.ts:799](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L799)

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

[src/wrappers/PooledCreditLine.d.ts:804](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L804)

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

[src/wrappers/PooledCreditLine.d.ts:809](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L809)

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

[src/wrappers/PooledCreditLine.d.ts:814](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L814)

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

[src/wrappers/PooledCreditLine.d.ts:816](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L816)

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

[src/wrappers/PooledCreditLine.d.ts:818](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L818)

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

[src/wrappers/PooledCreditLine.d.ts:820](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L820)

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

[src/wrappers/PooledCreditLine.d.ts:822](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L822)

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

[src/wrappers/PooledCreditLine.d.ts:827](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L827)

___

### cancelRequest

▸ **cancelRequest**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:832](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L832)

___

### cancelRequest(uint256)

▸ **cancelRequest(uint256)**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:834](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L834)

___

### cancelRequestOnLowCollection

▸ **cancelRequestOnLowCollection**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:836](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L836)

___

### cancelRequestOnLowCollection(uint256)

▸ **cancelRequestOnLowCollection(uint256)**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:841](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L841)

___

### cancelRequestOnRequestedStateAtEnd

▸ **cancelRequestOnRequestedStateAtEnd**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:846](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L846)

___

### cancelRequestOnRequestedStateAtEnd(uint256)

▸ **cancelRequestOnRequestedStateAtEnd(uint256)**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:851](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L851)

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

[src/wrappers/PooledCreditLine.d.ts:856](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L856)

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

[src/wrappers/PooledCreditLine.d.ts:858](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L858)

___

### collateralTokensToLiquidate

▸ **collateralTokensToLiquidate**(`_id`, `_borrowTokenAmount`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_borrowTokenAmount` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:860](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L860)

___

### collateralTokensToLiquidate(uint256,uint256)

▸ **collateralTokensToLiquidate(uint256,uint256)**(`_id`, `_borrowTokenAmount`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_borrowTokenAmount` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:862](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L862)

___

### connect

▸ **connect**(`signerOrProvider`): [`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:235](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L235)

___

### deployed

▸ **deployed**(): `Promise`<[`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)\>

#### Returns

`Promise`<[`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:237](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L237)

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

[src/wrappers/PooledCreditLine.d.ts:868](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L868)

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

[src/wrappers/PooledCreditLine.d.ts:875](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L875)

___

### depositedCollateralInShares

▸ **depositedCollateralInShares**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:882](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L882)

___

### depositedCollateralInShares(uint256)

▸ **depositedCollateralInShares(uint256)**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:884](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L884)

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

### getEndsAt

▸ **getEndsAt**(`_id`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:886](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L886)

___

### getEndsAt(uint256)

▸ **getEndsAt(uint256)**(`_id`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:888](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L888)

___

### getPrincipal

▸ **getPrincipal**(`_id`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:890](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L890)

___

### getPrincipal(uint256)

▸ **getPrincipal(uint256)**(`_id`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:892](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L892)

___

### getRequiredCollateral

▸ **getRequiredCollateral**(`_id`, `_borrowTokenAmount`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_borrowTokenAmount` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:894](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L894)

___

### getRequiredCollateral(uint256,uint256)

▸ **getRequiredCollateral(uint256,uint256)**(`_id`, `_borrowTokenAmount`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_borrowTokenAmount` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:896](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L896)

___

### getStatusAndUpdate

▸ **getStatusAndUpdate**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:902](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L902)

___

### getStatusAndUpdate(uint256)

▸ **getStatusAndUpdate(uint256)**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:904](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L904)

___

### initialize

▸ **initialize**(`_owner`, `_protocolFeeFraction`, `_protocolFeeCollector`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_owner` | `string` |
| `_protocolFeeFraction` | `BigNumberish` |
| `_protocolFeeCollector` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:909](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L909)

___

### initialize(address,uint256,address)

▸ **initialize(address,uint256,address)**(`_owner`, `_protocolFeeFraction`, `_protocolFeeCollector`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_owner` | `string` |
| `_protocolFeeFraction` | `BigNumberish` |
| `_protocolFeeCollector` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:916](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L916)

___

### liquidate

▸ **liquidate**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:923](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L923)

___

### liquidate(uint256)

▸ **liquidate(uint256)**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:925](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L925)

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

[src/wrappers/PooledCreditLine.d.ts:239](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L239)

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

[src/wrappers/PooledCreditLine.d.ts:262](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L262)

___

### maximumProtocolFeeFraction

▸ **maximumProtocolFeeFraction**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:927](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L927)

___

### maximumProtocolFeeFraction()

▸ **maximumProtocolFeeFraction()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:929](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L929)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)

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

[`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:242](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L242)

▸ **off**(`eventName`, `listener`): [`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:263](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L263)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)

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

[`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:246](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L246)

▸ **on**(`eventName`, `listener`): [`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:264](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L264)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)

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

[`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:250](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L250)

▸ **once**(`eventName`, `listener`): [`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:265](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L265)

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

[src/wrappers/PooledCreditLine.d.ts:931](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L931)

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

[src/wrappers/PooledCreditLine.d.ts:933](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L933)

___

### pooledCreditLineConstants

▸ **pooledCreditLineConstants**(`arg0`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `string`, `BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `BigNumber`] & { `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumber` ; `borrowRate`: `BigNumber` ; `borrower`: `string` ; `collateralAsset`: `string` ; `collateralAssetStrategy`: `string` ; `defaultsAt`: `BigNumber` ; `endsAt`: `BigNumber` ; `gracePenaltyRate`: `BigNumber` ; `idealCollateralRatio`: `BigNumber` ; `startsAt`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `string`, `BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `BigNumber`] & { `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumber` ; `borrowRate`: `BigNumber` ; `borrower`: `string` ; `collateralAsset`: `string` ; `collateralAssetStrategy`: `string` ; `defaultsAt`: `BigNumber` ; `endsAt`: `BigNumber` ; `gracePenaltyRate`: `BigNumber` ; `idealCollateralRatio`: `BigNumber` ; `startsAt`: `BigNumber`  }\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:935](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L935)

___

### pooledCreditLineConstants(uint256)

▸ **pooledCreditLineConstants(uint256)**(`arg0`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `string`, `BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `BigNumber`] & { `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumber` ; `borrowRate`: `BigNumber` ; `borrower`: `string` ; `collateralAsset`: `string` ; `collateralAssetStrategy`: `string` ; `defaultsAt`: `BigNumber` ; `endsAt`: `BigNumber` ; `gracePenaltyRate`: `BigNumber` ; `idealCollateralRatio`: `BigNumber` ; `startsAt`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `string`, `BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `BigNumber`] & { `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumber` ; `borrowRate`: `BigNumber` ; `borrower`: `string` ; `collateralAsset`: `string` ; `collateralAssetStrategy`: `string` ; `defaultsAt`: `BigNumber` ; `endsAt`: `BigNumber` ; `gracePenaltyRate`: `BigNumber` ; `idealCollateralRatio`: `BigNumber` ; `startsAt`: `BigNumber`  }\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:955](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L955)

___

### pooledCreditLineCounter

▸ **pooledCreditLineCounter**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:975](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L975)

___

### pooledCreditLineCounter()

▸ **pooledCreditLineCounter()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:977](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L977)

___

### pooledCreditLineVariables

▸ **pooledCreditLineVariables**(`arg0`, `overrides?`): `Promise`<[`number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `interestAccruedTillLastPrincipalUpdate`: `BigNumber` ; `lastPrincipalUpdateTime`: `BigNumber` ; `principal`: `BigNumber` ; `status`: `number` ; `totalInterestRepaid`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `interestAccruedTillLastPrincipalUpdate`: `BigNumber` ; `lastPrincipalUpdateTime`: `BigNumber` ; `principal`: `BigNumber` ; `status`: `number` ; `totalInterestRepaid`: `BigNumber`  }\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:979](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L979)

___

### pooledCreditLineVariables(uint256)

▸ **pooledCreditLineVariables(uint256)**(`arg0`, `overrides?`): `Promise`<[`number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `interestAccruedTillLastPrincipalUpdate`: `BigNumber` ; `lastPrincipalUpdateTime`: `BigNumber` ; `principal`: `BigNumber` ; `status`: `number` ; `totalInterestRepaid`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `interestAccruedTillLastPrincipalUpdate`: `BigNumber` ; `lastPrincipalUpdateTime`: `BigNumber` ; `principal`: `BigNumber` ; `status`: `number` ; `totalInterestRepaid`: `BigNumber`  }\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:992](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L992)

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

[src/wrappers/PooledCreditLine.d.ts:1005](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1005)

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

[src/wrappers/PooledCreditLine.d.ts:1007](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1007)

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

[src/wrappers/PooledCreditLine.d.ts:1009](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1009)

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

[src/wrappers/PooledCreditLine.d.ts:1011](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1011)

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

[src/wrappers/PooledCreditLine.d.ts:269](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L269)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)

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

[`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:258](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L258)

▸ **removeAllListeners**(`eventName?`): [`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:267](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L267)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)

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

[`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:254](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L254)

▸ **removeListener**(`eventName`, `listener`): [`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`PooledCreditLine`](wrappers_PooledCreditLine.PooledCreditLine.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:266](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L266)

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

[src/wrappers/PooledCreditLine.d.ts:1013](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1013)

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

[src/wrappers/PooledCreditLine.d.ts:1015](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1015)

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

[src/wrappers/PooledCreditLine.d.ts:1017](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1017)

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

[src/wrappers/PooledCreditLine.d.ts:1023](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1023)

___

### request

▸ **request**(`_request`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_request` | `Object` |
| `_request.areTokensTransferable` | `boolean` |
| `_request.borrowAsset` | `string` |
| `_request.borrowAssetStrategy` | `string` |
| `_request.borrowLimit` | `BigNumberish` |
| `_request.borrowRate` | `BigNumberish` |
| `_request.borrowerVerifier` | `string` |
| `_request.collateralAsset` | `string` |
| `_request.collateralAssetStrategy` | `string` |
| `_request.collateralRatio` | `BigNumberish` |
| `_request.collectionPeriod` | `BigNumberish` |
| `_request.defaultGracePeriod` | `BigNumberish` |
| `_request.duration` | `BigNumberish` |
| `_request.gracePenaltyRate` | `BigNumberish` |
| `_request.lenderVerifier` | `string` |
| `_request.minBorrowAmount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:1029](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1029)

___

### request((uint256,uint256,address,uint256,uint256,uint256,uint256,uint128,uint128,address,address,address,address,address,bool))

▸ **request((uint256,uint256,address,uint256,uint256,uint256,uint256,uint128,uint128,address,address,address,address,address,bool))**(`_request`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_request` | `Object` |
| `_request.areTokensTransferable` | `boolean` |
| `_request.borrowAsset` | `string` |
| `_request.borrowAssetStrategy` | `string` |
| `_request.borrowLimit` | `BigNumberish` |
| `_request.borrowRate` | `BigNumberish` |
| `_request.borrowerVerifier` | `string` |
| `_request.collateralAsset` | `string` |
| `_request.collateralAssetStrategy` | `string` |
| `_request.collateralRatio` | `BigNumberish` |
| `_request.collectionPeriod` | `BigNumberish` |
| `_request.defaultGracePeriod` | `BigNumberish` |
| `_request.duration` | `BigNumberish` |
| `_request.gracePenaltyRate` | `BigNumberish` |
| `_request.lenderVerifier` | `string` |
| `_request.minBorrowAmount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:1050](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1050)

___

### terminate

▸ **terminate**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:1071](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1071)

___

### terminate(uint256)

▸ **terminate(uint256)**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:1073](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1073)

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

[src/wrappers/PooledCreditLine.d.ts:1075](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1075)

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

[src/wrappers/PooledCreditLine.d.ts:1077](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1077)

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

[src/wrappers/PooledCreditLine.d.ts:1079](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1079)

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

[src/wrappers/PooledCreditLine.d.ts:1085](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1085)

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

[src/wrappers/PooledCreditLine.d.ts:1091](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1091)

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

[src/wrappers/PooledCreditLine.d.ts:1097](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1097)

___

### updateCollectionPeriodLimits

▸ **updateCollectionPeriodLimits**(`_min`, `_max`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_min` | `BigNumberish` |
| `_max` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:1103](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1103)

___

### updateCollectionPeriodLimits(uint256,uint256)

▸ **updateCollectionPeriodLimits(uint256,uint256)**(`_min`, `_max`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_min` | `BigNumberish` |
| `_max` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:1109](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1109)

___

### updateDefaultGracePeriodLimits

▸ **updateDefaultGracePeriodLimits**(`_min`, `_max`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_min` | `BigNumberish` |
| `_max` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:1115](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1115)

___

### updateDefaultGracePeriodLimits(uint256,uint256)

▸ **updateDefaultGracePeriodLimits(uint256,uint256)**(`_min`, `_max`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_min` | `BigNumberish` |
| `_max` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:1121](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1121)

___

### updateDurationLimits

▸ **updateDurationLimits**(`_min`, `_max`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_min` | `BigNumberish` |
| `_max` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:1127](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1127)

___

### updateDurationLimits(uint256,uint256)

▸ **updateDurationLimits(uint256,uint256)**(`_min`, `_max`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_min` | `BigNumberish` |
| `_max` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:1133](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1133)

___

### updateGracePenaltyRateLimits

▸ **updateGracePenaltyRateLimits**(`_min`, `_max`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_min` | `BigNumberish` |
| `_max` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:1139](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1139)

___

### updateGracePenaltyRateLimits(uint256,uint256)

▸ **updateGracePenaltyRateLimits(uint256,uint256)**(`_min`, `_max`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_min` | `BigNumberish` |
| `_max` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:1145](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1145)

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

[src/wrappers/PooledCreditLine.d.ts:1151](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1151)

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

[src/wrappers/PooledCreditLine.d.ts:1157](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1157)

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

[src/wrappers/PooledCreditLine.d.ts:1163](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1163)

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

[src/wrappers/PooledCreditLine.d.ts:1168](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1168)

___

### updateProtocolFeeFraction

▸ **updateProtocolFeeFraction**(`_protocolFeeFraction`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_protocolFeeFraction` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:1173](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1173)

___

### updateProtocolFeeFraction(uint256)

▸ **updateProtocolFeeFraction(uint256)**(`_protocolFeeFraction`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_protocolFeeFraction` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/PooledCreditLine.d.ts:1178](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1178)

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

[src/wrappers/PooledCreditLine.d.ts:1183](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1183)

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

[src/wrappers/PooledCreditLine.d.ts:1189](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1189)

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

[src/wrappers/PooledCreditLine.d.ts:1195](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1195)

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

[src/wrappers/PooledCreditLine.d.ts:1202](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1202)

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

[src/wrappers/PooledCreditLine.d.ts:1209](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1209)

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

[src/wrappers/PooledCreditLine.d.ts:1211](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/PooledCreditLine.d.ts#L1211)

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
