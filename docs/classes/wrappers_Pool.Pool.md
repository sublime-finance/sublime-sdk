[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/Pool](../modules/wrappers_Pool.md) / Pool

# Class: Pool

[wrappers/Pool](../modules/wrappers_Pool.md).Pool

## Hierarchy

- `Contract`

  ↳ **`Pool`**

## Table of contents

### Constructors

- [constructor](wrappers_Pool.Pool.md#constructor)

### Properties

- [\_deployedPromise](wrappers_Pool.Pool.md#_deployedpromise)
- [\_runningEvents](wrappers_Pool.Pool.md#_runningevents)
- [\_wrappedEmits](wrappers_Pool.Pool.md#_wrappedemits)
- [address](wrappers_Pool.Pool.md#address)
- [callStatic](wrappers_Pool.Pool.md#callstatic)
- [deployTransaction](wrappers_Pool.Pool.md#deploytransaction)
- [estimateGas](wrappers_Pool.Pool.md#estimategas)
- [filters](wrappers_Pool.Pool.md#filters)
- [functions](wrappers_Pool.Pool.md#functions)
- [interface](wrappers_Pool.Pool.md#interface)
- [populateTransaction](wrappers_Pool.Pool.md#populatetransaction)
- [provider](wrappers_Pool.Pool.md#provider)
- [resolvedAddress](wrappers_Pool.Pool.md#resolvedaddress)
- [signer](wrappers_Pool.Pool.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_Pool.Pool.md#_checkrunningevents)
- [\_deployed](wrappers_Pool.Pool.md#_deployed)
- [\_wrapEvent](wrappers_Pool.Pool.md#_wrapevent)
- [addCollateralInMarginCall](wrappers_Pool.Pool.md#addcollateralinmargincall)
- [addCollateralInMarginCall(address,uint256,bool)](wrappers_Pool.Pool.md#addcollateralinmargincall(address,uint256,bool))
- [allowance](wrappers_Pool.Pool.md#allowance)
- [allowance(address,address)](wrappers_Pool.Pool.md#allowance(address,address))
- [approve](wrappers_Pool.Pool.md#approve)
- [approve(address,uint256)](wrappers_Pool.Pool.md#approve(address,uint256))
- [attach](wrappers_Pool.Pool.md#attach)
- [balanceOf](wrappers_Pool.Pool.md#balanceof)
- [balanceOf(address)](wrappers_Pool.Pool.md#balanceof(address))
- [borrower](wrappers_Pool.Pool.md#borrower)
- [borrower()](wrappers_Pool.Pool.md#borrower())
- [calculateCollateralRatio](wrappers_Pool.Pool.md#calculatecollateralratio)
- [calculateCollateralRatio(uint256,uint256)](wrappers_Pool.Pool.md#calculatecollateralratio(uint256,uint256))
- [calculateCurrentPeriod](wrappers_Pool.Pool.md#calculatecurrentperiod)
- [calculateCurrentPeriod()](wrappers_Pool.Pool.md#calculatecurrentperiod())
- [calculateRepaymentWithdrawable](wrappers_Pool.Pool.md#calculaterepaymentwithdrawable)
- [calculateRepaymentWithdrawable(address)](wrappers_Pool.Pool.md#calculaterepaymentwithdrawable(address))
- [cancelPool](wrappers_Pool.Pool.md#cancelpool)
- [cancelPool()](wrappers_Pool.Pool.md#cancelpool())
- [closeLoan](wrappers_Pool.Pool.md#closeloan)
- [closeLoan()](wrappers_Pool.Pool.md#closeloan())
- [connect](wrappers_Pool.Pool.md#connect)
- [correspondingBorrowTokens](wrappers_Pool.Pool.md#correspondingborrowtokens)
- [correspondingBorrowTokens(uint256,uint256)](wrappers_Pool.Pool.md#correspondingborrowtokens(uint256,uint256))
- [decimals](wrappers_Pool.Pool.md#decimals)
- [decimals()](wrappers_Pool.Pool.md#decimals())
- [decreaseAllowance](wrappers_Pool.Pool.md#decreaseallowance)
- [decreaseAllowance(address,uint256)](wrappers_Pool.Pool.md#decreaseallowance(address,uint256))
- [deployed](wrappers_Pool.Pool.md#deployed)
- [depositCollateral](wrappers_Pool.Pool.md#depositcollateral)
- [depositCollateral(uint256,bool)](wrappers_Pool.Pool.md#depositcollateral(uint256,bool))
- [emit](wrappers_Pool.Pool.md#emit)
- [fallback](wrappers_Pool.Pool.md#fallback)
- [getBalanceDetails](wrappers_Pool.Pool.md#getbalancedetails)
- [getBalanceDetails(address)](wrappers_Pool.Pool.md#getbalancedetails(address))
- [getCurrentCollateralRatio()](wrappers_Pool.Pool.md#getcurrentcollateralratio())
- [getCurrentCollateralRatio(address)](wrappers_Pool.Pool.md#getcurrentcollateralratio(address))
- [getEquivalentTokens](wrappers_Pool.Pool.md#getequivalenttokens)
- [getEquivalentTokens(address,address,uint256)](wrappers_Pool.Pool.md#getequivalenttokens(address,address,uint256))
- [getLoanStatus](wrappers_Pool.Pool.md#getloanstatus)
- [getLoanStatus()](wrappers_Pool.Pool.md#getloanstatus())
- [getMarginCallEndTime](wrappers_Pool.Pool.md#getmargincallendtime)
- [getMarginCallEndTime(address)](wrappers_Pool.Pool.md#getmargincallendtime(address))
- [increaseAllowance](wrappers_Pool.Pool.md#increaseallowance)
- [increaseAllowance(address,uint256)](wrappers_Pool.Pool.md#increaseallowance(address,uint256))
- [initialize](wrappers_Pool.Pool.md#initialize)
- [initialize(uint256,uint256,address,address,address,uint256,uint64,uint64,address,uint256,bool,address,uint256,uint256)](wrappers_Pool.Pool.md#initialize(uint256,uint256,address,address,address,uint256,uint64,uint64,address,uint256,bool,address,uint256,uint256))
- [interestPerPeriod](wrappers_Pool.Pool.md#interestperperiod)
- [interestPerPeriod(uint256)](wrappers_Pool.Pool.md#interestperperiod(uint256))
- [interestPerSecond](wrappers_Pool.Pool.md#interestpersecond)
- [interestPerSecond(uint256)](wrappers_Pool.Pool.md#interestpersecond(uint256))
- [interestToPay](wrappers_Pool.Pool.md#interesttopay)
- [interestToPay()](wrappers_Pool.Pool.md#interesttopay())
- [lend](wrappers_Pool.Pool.md#lend)
- [lend(address,uint256,address,bool)](wrappers_Pool.Pool.md#lend(address,uint256,address,bool))
- [lenders](wrappers_Pool.Pool.md#lenders)
- [lenders(address)](wrappers_Pool.Pool.md#lenders(address))
- [liquidateCancelPenalty](wrappers_Pool.Pool.md#liquidatecancelpenalty)
- [liquidateCancelPenalty(bool,bool)](wrappers_Pool.Pool.md#liquidatecancelpenalty(bool,bool))
- [liquidateForLender](wrappers_Pool.Pool.md#liquidateforlender)
- [liquidateForLender(address,bool,bool,bool)](wrappers_Pool.Pool.md#liquidateforlender(address,bool,bool,bool))
- [liquidatePool](wrappers_Pool.Pool.md#liquidatepool)
- [liquidatePool(bool,bool,bool)](wrappers_Pool.Pool.md#liquidatepool(bool,bool,bool))
- [listenerCount](wrappers_Pool.Pool.md#listenercount)
- [listeners](wrappers_Pool.Pool.md#listeners)
- [name](wrappers_Pool.Pool.md#name)
- [name()](wrappers_Pool.Pool.md#name())
- [off](wrappers_Pool.Pool.md#off)
- [on](wrappers_Pool.Pool.md#on)
- [once](wrappers_Pool.Pool.md#once)
- [paused](wrappers_Pool.Pool.md#paused)
- [paused()](wrappers_Pool.Pool.md#paused())
- [poolConstants](wrappers_Pool.Pool.md#poolconstants)
- [poolConstants()](wrappers_Pool.Pool.md#poolconstants())
- [poolVariables](wrappers_Pool.Pool.md#poolvariables)
- [poolVariables()](wrappers_Pool.Pool.md#poolvariables())
- [queryFilter](wrappers_Pool.Pool.md#queryfilter)
- [removeAllListeners](wrappers_Pool.Pool.md#removealllisteners)
- [removeListener](wrappers_Pool.Pool.md#removelistener)
- [requestMarginCall](wrappers_Pool.Pool.md#requestmargincall)
- [requestMarginCall()](wrappers_Pool.Pool.md#requestmargincall())
- [symbol](wrappers_Pool.Pool.md#symbol)
- [symbol()](wrappers_Pool.Pool.md#symbol())
- [terminatePool](wrappers_Pool.Pool.md#terminatepool)
- [terminatePool()](wrappers_Pool.Pool.md#terminatepool())
- [totalSupply](wrappers_Pool.Pool.md#totalsupply)
- [totalSupply()](wrappers_Pool.Pool.md#totalsupply())
- [transfer](wrappers_Pool.Pool.md#transfer)
- [transfer(address,uint256)](wrappers_Pool.Pool.md#transfer(address,uint256))
- [transferFrom](wrappers_Pool.Pool.md#transferfrom)
- [transferFrom(address,address,uint256)](wrappers_Pool.Pool.md#transferfrom(address,address,uint256))
- [withdrawBorrowedAmount](wrappers_Pool.Pool.md#withdrawborrowedamount)
- [withdrawBorrowedAmount()](wrappers_Pool.Pool.md#withdrawborrowedamount())
- [withdrawLiquidity](wrappers_Pool.Pool.md#withdrawliquidity)
- [withdrawLiquidity()](wrappers_Pool.Pool.md#withdrawliquidity())
- [withdrawRepayment](wrappers_Pool.Pool.md#withdrawrepayment)
- [withdrawRepayment()](wrappers_Pool.Pool.md#withdrawrepayment())
- [getContractAddress](wrappers_Pool.Pool.md#getcontractaddress)
- [getInterface](wrappers_Pool.Pool.md#getinterface)
- [isIndexed](wrappers_Pool.Pool.md#isindexed)

## Constructors

### constructor

• **new Pool**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `addCollateralInMarginCall` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `addCollateralInMarginCall(address,uint256,bool)` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `allowance(address,address)` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `approve(address,uint256)` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `balanceOf` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `balanceOf(address)` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `borrower` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `borrower()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `calculateCollateralRatio` | (`_balance`: `BigNumberish`, `_liquidityShares`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateCollateralRatio(uint256,uint256)` | (`_balance`: `BigNumberish`, `_liquidityShares`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateCurrentPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateCurrentPeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateRepaymentWithdrawable` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateRepaymentWithdrawable(address)` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `cancelPool` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `cancelPool()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `closeLoan` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `closeLoan()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `correspondingBorrowTokens` | (`_totalCollateralTokens`: `BigNumberish`, `_fraction`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `correspondingBorrowTokens(uint256,uint256)` | (`_totalCollateralTokens`: `BigNumberish`, `_fraction`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `decreaseAllowance` | (`spender`: `string`, `subtractedValue`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `decreaseAllowance(address,uint256)` | (`spender`: `string`, `subtractedValue`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `depositCollateral` | (`_amount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `depositCollateral(uint256,bool)` | (`_amount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getBalanceDetails` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`]\> |
| `getBalanceDetails(address)` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`]\> |
| `getCurrentCollateralRatio()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCurrentCollateralRatio(address)` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getEquivalentTokens` | (`_source`: `string`, `_target`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getEquivalentTokens(address,address,uint256)` | (`_source`: `string`, `_target`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getLoanStatus` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getLoanStatus()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMarginCallEndTime` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMarginCallEndTime(address)` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `increaseAllowance` | (`spender`: `string`, `addedValue`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `increaseAllowance(address,uint256)` | (`spender`: `string`, `addedValue`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `initialize` | (`_borrowAmountRequested`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_borrower`: `string`, `_borrowAsset`: `string`, `_collateralAsset`: `string`, `_idealCollateralRatio`: `BigNumberish`, `_repaymentInterval`: `BigNumberish`, `_noOfRepaymentIntervals`: `BigNumberish`, `_poolSavingsStrategy`: `string`, `_collateralAmount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `_lenderVerifier`: `string`, `_loanWithdrawalDuration`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialize(uint256,uint256,address,address,address,uint256,uint64,uint64,address,uint256,bool,address,uint256,uint256)` | (`_borrowAmountRequested`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_borrower`: `string`, `_borrowAsset`: `string`, `_collateralAsset`: `string`, `_idealCollateralRatio`: `BigNumberish`, `_repaymentInterval`: `BigNumberish`, `_noOfRepaymentIntervals`: `BigNumberish`, `_poolSavingsStrategy`: `string`, `_collateralAmount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `_lenderVerifier`: `string`, `_loanWithdrawalDuration`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `interestPerPeriod` | (`_balance`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `interestPerPeriod(uint256)` | (`_balance`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `interestPerSecond` | (`_principal`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `interestPerSecond(uint256)` | (`_principal`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `interestToPay` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `interestToPay()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `lend` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_strategy`: `string`, `_fromSavingsAccount`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `lend(address,uint256,address,bool)` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_strategy`: `string`, `_fromSavingsAccount`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `lenders` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`] & { `effectiveInterestWithdrawn`: `BigNumber` ; `extraLiquidityShares`: `BigNumber` ; `marginCallEndTime`: `BigNumber`  }\> |
| `lenders(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`] & { `effectiveInterestWithdrawn`: `BigNumber` ; `extraLiquidityShares`: `BigNumber` ; `marginCallEndTime`: `BigNumber`  }\> |
| `liquidateCancelPenalty` | (`_toSavingsAccount`: `boolean`, `_receiveLiquidityShare`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `liquidateCancelPenalty(bool,bool)` | (`_toSavingsAccount`: `boolean`, `_receiveLiquidityShare`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `liquidateForLender` | (`_lender`: `string`, `_fromSavingsAccount`: `boolean`, `_toSavingsAccount`: `boolean`, `_recieveLiquidityShare`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `liquidateForLender(address,bool,bool,bool)` | (`_lender`: `string`, `_fromSavingsAccount`: `boolean`, `_toSavingsAccount`: `boolean`, `_recieveLiquidityShare`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `liquidatePool` | (`_fromSavingsAccount`: `boolean`, `_toSavingsAccount`: `boolean`, `_recieveLiquidityShare`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `liquidatePool(bool,bool,bool)` | (`_fromSavingsAccount`: `boolean`, `_toSavingsAccount`: `boolean`, `_recieveLiquidityShare`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `name()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `paused` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `paused()` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `poolConstants` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `string`, `string`, `string`, `BigNumber`, `BigNumber`, `BigNumber`] & { `borrowAmountRequested`: `BigNumber` ; `borrowAsset`: `string` ; `borrowRate`: `BigNumber` ; `borrower`: `string` ; `collateralAsset`: `string` ; `idealCollateralRatio`: `BigNumber` ; `lenderVerifier`: `string` ; `loanStartTime`: `BigNumber` ; `loanWithdrawalDeadline`: `BigNumber` ; `noOfRepaymentIntervals`: `BigNumber` ; `poolSavingsStrategy`: `string` ; `repaymentInterval`: `BigNumber`  }\> |
| `poolConstants()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `string`, `string`, `string`, `BigNumber`, `BigNumber`, `BigNumber`] & { `borrowAmountRequested`: `BigNumber` ; `borrowAsset`: `string` ; `borrowRate`: `BigNumber` ; `borrower`: `string` ; `collateralAsset`: `string` ; `idealCollateralRatio`: `BigNumber` ; `lenderVerifier`: `string` ; `loanStartTime`: `BigNumber` ; `loanWithdrawalDeadline`: `BigNumber` ; `noOfRepaymentIntervals`: `BigNumber` ; `poolSavingsStrategy`: `string` ; `repaymentInterval`: `BigNumber`  }\> |
| `poolVariables` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`, `BigNumber`, `BigNumber`, `BigNumber`] & { `baseLiquidityShares`: `BigNumber` ; `extraLiquidityShares`: `BigNumber` ; `loanStatus`: `number` ; `penaltyLiquidityAmount`: `BigNumber`  }\> |
| `poolVariables()` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`, `BigNumber`, `BigNumber`, `BigNumber`] & { `baseLiquidityShares`: `BigNumber` ; `extraLiquidityShares`: `BigNumber` ; `loanStatus`: `number` ; `penaltyLiquidityAmount`: `BigNumber`  }\> |
| `requestMarginCall` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `requestMarginCall()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `symbol()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `terminatePool` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `terminatePool()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transfer(address,uint256)` | (`recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transferFrom` | (`sender`: `string`, `recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transferFrom(address,address,uint256)` | (`sender`: `string`, `recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `withdrawBorrowedAmount` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdrawBorrowedAmount()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdrawLiquidity` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdrawLiquidity()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdrawRepayment` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdrawRepayment()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/Pool.d.ts:1022](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L1022)

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
| `addCollateralInMarginCall` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `addCollateralInMarginCall(address,uint256,bool)` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `allowance(address,address)` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `approve(address,uint256)` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `balanceOf` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `balanceOf(address)` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `borrower` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `borrower()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateCollateralRatio` | (`_balance`: `BigNumberish`, `_liquidityShares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `calculateCollateralRatio(uint256,uint256)` | (`_balance`: `BigNumberish`, `_liquidityShares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `calculateCurrentPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateCurrentPeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateRepaymentWithdrawable` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateRepaymentWithdrawable(address)` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `cancelPool` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `cancelPool()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `closeLoan` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `closeLoan()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `correspondingBorrowTokens` | (`_totalCollateralTokens`: `BigNumberish`, `_fraction`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `correspondingBorrowTokens(uint256,uint256)` | (`_totalCollateralTokens`: `BigNumberish`, `_fraction`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decreaseAllowance` | (`spender`: `string`, `subtractedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `decreaseAllowance(address,uint256)` | (`spender`: `string`, `subtractedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `depositCollateral` | (`_amount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `depositCollateral(uint256,bool)` | (`_amount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getBalanceDetails` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getBalanceDetails(address)` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCurrentCollateralRatio()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getCurrentCollateralRatio(address)` | (`_lender`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getEquivalentTokens` | (`_source`: `string`, `_target`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getEquivalentTokens(address,address,uint256)` | (`_source`: `string`, `_target`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getLoanStatus` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getLoanStatus()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMarginCallEndTime` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMarginCallEndTime(address)` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `increaseAllowance` | (`spender`: `string`, `addedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `increaseAllowance(address,uint256)` | (`spender`: `string`, `addedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initialize` | (`_borrowAmountRequested`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_borrower`: `string`, `_borrowAsset`: `string`, `_collateralAsset`: `string`, `_idealCollateralRatio`: `BigNumberish`, `_repaymentInterval`: `BigNumberish`, `_noOfRepaymentIntervals`: `BigNumberish`, `_poolSavingsStrategy`: `string`, `_collateralAmount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `_lenderVerifier`: `string`, `_loanWithdrawalDuration`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initialize(uint256,uint256,address,address,address,uint256,uint64,uint64,address,uint256,bool,address,uint256,uint256)` | (`_borrowAmountRequested`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_borrower`: `string`, `_borrowAsset`: `string`, `_collateralAsset`: `string`, `_idealCollateralRatio`: `BigNumberish`, `_repaymentInterval`: `BigNumberish`, `_noOfRepaymentIntervals`: `BigNumberish`, `_poolSavingsStrategy`: `string`, `_collateralAmount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `_lenderVerifier`: `string`, `_loanWithdrawalDuration`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `interestPerPeriod` | (`_balance`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `interestPerPeriod(uint256)` | (`_balance`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `interestPerSecond` | (`_principal`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `interestPerSecond(uint256)` | (`_principal`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `interestToPay` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `interestToPay()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `lend` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_strategy`: `string`, `_fromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `lend(address,uint256,address,bool)` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_strategy`: `string`, `_fromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `lenders` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `lenders(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `liquidateCancelPenalty` | (`_toSavingsAccount`: `boolean`, `_receiveLiquidityShare`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `liquidateCancelPenalty(bool,bool)` | (`_toSavingsAccount`: `boolean`, `_receiveLiquidityShare`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `liquidateForLender` | (`_lender`: `string`, `_fromSavingsAccount`: `boolean`, `_toSavingsAccount`: `boolean`, `_recieveLiquidityShare`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `liquidateForLender(address,bool,bool,bool)` | (`_lender`: `string`, `_fromSavingsAccount`: `boolean`, `_toSavingsAccount`: `boolean`, `_recieveLiquidityShare`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `liquidatePool` | (`_fromSavingsAccount`: `boolean`, `_toSavingsAccount`: `boolean`, `_recieveLiquidityShare`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `liquidatePool(bool,bool,bool)` | (`_fromSavingsAccount`: `boolean`, `_toSavingsAccount`: `boolean`, `_recieveLiquidityShare`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `name()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `paused` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `paused()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `poolConstants` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `poolConstants()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `poolVariables` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `poolVariables()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `requestMarginCall` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `requestMarginCall()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `symbol()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `terminatePool` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `terminatePool()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transfer(address,uint256)` | (`recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferFrom` | (`sender`: `string`, `recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferFrom(address,address,uint256)` | (`sender`: `string`, `recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawBorrowedAmount` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawBorrowedAmount()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawLiquidity` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawLiquidity()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawRepayment` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawRepayment()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/Pool.d.ts:1425](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L1425)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AmountBorrowed` | (`amount`: ``null``, `protocolFee`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `BigNumber`], { `amount`: `BigNumber` ; `protocolFee`: `BigNumber`  }\> |
| `Approval` | (`owner`: `string`, `spender`: `string`, `value`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `BigNumber`], { `owner`: `string` ; `spender`: `string` ; `value`: `BigNumber`  }\> |
| `CollateralAdded` | (`borrower`: `string`, `amount`: ``null``, `sharesReceived`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `BigNumber`, `BigNumber`], { `amount`: `BigNumber` ; `borrower`: `string` ; `sharesReceived`: `BigNumber`  }\> |
| `CollateralWithdrawn` | (`borrower`: `string`, `amount`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `BigNumber`], { `amount`: `BigNumber` ; `borrower`: `string`  }\> |
| `LenderLiquidated` | (`liquidator`: `string`, `lender`: `string`, `_tokenReceived`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `BigNumber`], { `_tokenReceived`: `BigNumber` ; `lender`: `string` ; `liquidator`: `string`  }\> |
| `LiquiditySupplied` | (`amountSupplied`: ``null``, `lenderAddress`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `string`], { `amountSupplied`: `BigNumber` ; `lenderAddress`: `string`  }\> |
| `LiquidityWithdrawn` | (`amount`: ``null``, `lenderAddress`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `string`], { `amount`: `BigNumber` ; `lenderAddress`: `string`  }\> |
| `MarginCallCollateralAdded` | (`borrower`: `string`, `lender`: `string`, `amount`: ``null``, `sharesReceived`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `BigNumber`, `BigNumber`], { `amount`: `BigNumber` ; `borrower`: `string` ; `lender`: `string` ; `sharesReceived`: `BigNumber`  }\> |
| `MarginCalled` | (`lenderAddress`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `lenderAddress`: `string`  }\> |
| `Paused` | (`account`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `account`: `string`  }\> |
| `PoolCancelled` | () => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[], {}\> |
| `PoolClosed` | () => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[], {}\> |
| `PoolLiquidated` | (`liquidator`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `liquidator`: `string`  }\> |
| `PoolTerminated` | () => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[], {}\> |
| `Transfer` | (`from`: `string`, `to`: `string`, `value`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `BigNumber`], { `from`: `string` ; `to`: `string` ; `value`: `BigNumber`  }\> |
| `Unpaused` | (`account`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `account`: `string`  }\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/Pool.d.ts:1350](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L1350)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addCollateralInMarginCall` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `addCollateralInMarginCall(address,uint256,bool)` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `allowance(address,address)` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `approve(address,uint256)` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `balanceOf` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `balanceOf(address)` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `borrower` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `borrower()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `calculateCollateralRatio` | (`_balance`: `BigNumberish`, `_liquidityShares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `calculateCollateralRatio(uint256,uint256)` | (`_balance`: `BigNumberish`, `_liquidityShares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `calculateCurrentPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `calculateCurrentPeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `calculateRepaymentWithdrawable` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `calculateRepaymentWithdrawable(address)` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `cancelPool` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `cancelPool()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `closeLoan` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `closeLoan()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `correspondingBorrowTokens` | (`_totalCollateralTokens`: `BigNumberish`, `_fraction`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `correspondingBorrowTokens(uint256,uint256)` | (`_totalCollateralTokens`: `BigNumberish`, `_fraction`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `decreaseAllowance` | (`spender`: `string`, `subtractedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `decreaseAllowance(address,uint256)` | (`spender`: `string`, `subtractedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `depositCollateral` | (`_amount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `depositCollateral(uint256,bool)` | (`_amount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getBalanceDetails` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`]\> |
| `getBalanceDetails(address)` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`]\> |
| `getCurrentCollateralRatio()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getCurrentCollateralRatio(address)` | (`_lender`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getEquivalentTokens` | (`_source`: `string`, `_target`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getEquivalentTokens(address,address,uint256)` | (`_source`: `string`, `_target`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getLoanStatus` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getLoanStatus()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getMarginCallEndTime` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getMarginCallEndTime(address)` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `increaseAllowance` | (`spender`: `string`, `addedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `increaseAllowance(address,uint256)` | (`spender`: `string`, `addedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialize` | (`_borrowAmountRequested`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_borrower`: `string`, `_borrowAsset`: `string`, `_collateralAsset`: `string`, `_idealCollateralRatio`: `BigNumberish`, `_repaymentInterval`: `BigNumberish`, `_noOfRepaymentIntervals`: `BigNumberish`, `_poolSavingsStrategy`: `string`, `_collateralAmount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `_lenderVerifier`: `string`, `_loanWithdrawalDuration`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialize(uint256,uint256,address,address,address,uint256,uint64,uint64,address,uint256,bool,address,uint256,uint256)` | (`_borrowAmountRequested`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_borrower`: `string`, `_borrowAsset`: `string`, `_collateralAsset`: `string`, `_idealCollateralRatio`: `BigNumberish`, `_repaymentInterval`: `BigNumberish`, `_noOfRepaymentIntervals`: `BigNumberish`, `_poolSavingsStrategy`: `string`, `_collateralAmount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `_lenderVerifier`: `string`, `_loanWithdrawalDuration`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `interestPerPeriod` | (`_balance`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `interestPerPeriod(uint256)` | (`_balance`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `interestPerSecond` | (`_principal`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `interestPerSecond(uint256)` | (`_principal`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `interestToPay` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `interestToPay()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `lend` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_strategy`: `string`, `_fromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `lend(address,uint256,address,bool)` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_strategy`: `string`, `_fromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `lenders` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`] & { `effectiveInterestWithdrawn`: `BigNumber` ; `extraLiquidityShares`: `BigNumber` ; `marginCallEndTime`: `BigNumber`  }\> |
| `lenders(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`] & { `effectiveInterestWithdrawn`: `BigNumber` ; `extraLiquidityShares`: `BigNumber` ; `marginCallEndTime`: `BigNumber`  }\> |
| `liquidateCancelPenalty` | (`_toSavingsAccount`: `boolean`, `_receiveLiquidityShare`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `liquidateCancelPenalty(bool,bool)` | (`_toSavingsAccount`: `boolean`, `_receiveLiquidityShare`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `liquidateForLender` | (`_lender`: `string`, `_fromSavingsAccount`: `boolean`, `_toSavingsAccount`: `boolean`, `_recieveLiquidityShare`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `liquidateForLender(address,bool,bool,bool)` | (`_lender`: `string`, `_fromSavingsAccount`: `boolean`, `_toSavingsAccount`: `boolean`, `_recieveLiquidityShare`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `liquidatePool` | (`_fromSavingsAccount`: `boolean`, `_toSavingsAccount`: `boolean`, `_recieveLiquidityShare`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `liquidatePool(bool,bool,bool)` | (`_fromSavingsAccount`: `boolean`, `_toSavingsAccount`: `boolean`, `_recieveLiquidityShare`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `name()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `paused` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `paused()` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `poolConstants` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `string`, `string`, `string`, `BigNumber`, `BigNumber`, `BigNumber`] & { `borrowAmountRequested`: `BigNumber` ; `borrowAsset`: `string` ; `borrowRate`: `BigNumber` ; `borrower`: `string` ; `collateralAsset`: `string` ; `idealCollateralRatio`: `BigNumber` ; `lenderVerifier`: `string` ; `loanStartTime`: `BigNumber` ; `loanWithdrawalDeadline`: `BigNumber` ; `noOfRepaymentIntervals`: `BigNumber` ; `poolSavingsStrategy`: `string` ; `repaymentInterval`: `BigNumber`  }\> |
| `poolConstants()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `string`, `string`, `string`, `BigNumber`, `BigNumber`, `BigNumber`] & { `borrowAmountRequested`: `BigNumber` ; `borrowAsset`: `string` ; `borrowRate`: `BigNumber` ; `borrower`: `string` ; `collateralAsset`: `string` ; `idealCollateralRatio`: `BigNumber` ; `lenderVerifier`: `string` ; `loanStartTime`: `BigNumber` ; `loanWithdrawalDeadline`: `BigNumber` ; `noOfRepaymentIntervals`: `BigNumber` ; `poolSavingsStrategy`: `string` ; `repaymentInterval`: `BigNumber`  }\> |
| `poolVariables` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`, `BigNumber`, `BigNumber`, `BigNumber`] & { `baseLiquidityShares`: `BigNumber` ; `extraLiquidityShares`: `BigNumber` ; `loanStatus`: `number` ; `penaltyLiquidityAmount`: `BigNumber`  }\> |
| `poolVariables()` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`, `BigNumber`, `BigNumber`, `BigNumber`] & { `baseLiquidityShares`: `BigNumber` ; `extraLiquidityShares`: `BigNumber` ; `loanStatus`: `number` ; `penaltyLiquidityAmount`: `BigNumber`  }\> |
| `requestMarginCall` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `requestMarginCall()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `symbol()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `terminatePool` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `terminatePool()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `totalSupply()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `transfer` | (`recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transfer(address,uint256)` | (`recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferFrom` | (`sender`: `string`, `recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferFrom(address,address,uint256)` | (`sender`: `string`, `recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawBorrowedAmount` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawBorrowedAmount()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawLiquidity` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawLiquidity()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawRepayment` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawRepayment()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/Pool.d.ts:252](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L252)

___

### interface

• **interface**: [`PoolInterface`](../interfaces/wrappers_Pool.PoolInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/Pool.d.ts:250](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L250)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addCollateralInMarginCall` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `addCollateralInMarginCall(address,uint256,bool)` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `allowance(address,address)` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `approve(address,uint256)` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `balanceOf` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `balanceOf(address)` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `borrower` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `borrower()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `calculateCollateralRatio` | (`_balance`: `BigNumberish`, `_liquidityShares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `calculateCollateralRatio(uint256,uint256)` | (`_balance`: `BigNumberish`, `_liquidityShares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `calculateCurrentPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `calculateCurrentPeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `calculateRepaymentWithdrawable` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `calculateRepaymentWithdrawable(address)` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `cancelPool` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `cancelPool()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `closeLoan` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `closeLoan()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `correspondingBorrowTokens` | (`_totalCollateralTokens`: `BigNumberish`, `_fraction`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `correspondingBorrowTokens(uint256,uint256)` | (`_totalCollateralTokens`: `BigNumberish`, `_fraction`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `decreaseAllowance` | (`spender`: `string`, `subtractedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `decreaseAllowance(address,uint256)` | (`spender`: `string`, `subtractedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `depositCollateral` | (`_amount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `depositCollateral(uint256,bool)` | (`_amount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getBalanceDetails` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getBalanceDetails(address)` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCurrentCollateralRatio()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getCurrentCollateralRatio(address)` | (`_lender`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getEquivalentTokens` | (`_source`: `string`, `_target`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getEquivalentTokens(address,address,uint256)` | (`_source`: `string`, `_target`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getLoanStatus` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getLoanStatus()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMarginCallEndTime` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMarginCallEndTime(address)` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `increaseAllowance` | (`spender`: `string`, `addedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `increaseAllowance(address,uint256)` | (`spender`: `string`, `addedValue`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialize` | (`_borrowAmountRequested`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_borrower`: `string`, `_borrowAsset`: `string`, `_collateralAsset`: `string`, `_idealCollateralRatio`: `BigNumberish`, `_repaymentInterval`: `BigNumberish`, `_noOfRepaymentIntervals`: `BigNumberish`, `_poolSavingsStrategy`: `string`, `_collateralAmount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `_lenderVerifier`: `string`, `_loanWithdrawalDuration`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialize(uint256,uint256,address,address,address,uint256,uint64,uint64,address,uint256,bool,address,uint256,uint256)` | (`_borrowAmountRequested`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_borrower`: `string`, `_borrowAsset`: `string`, `_collateralAsset`: `string`, `_idealCollateralRatio`: `BigNumberish`, `_repaymentInterval`: `BigNumberish`, `_noOfRepaymentIntervals`: `BigNumberish`, `_poolSavingsStrategy`: `string`, `_collateralAmount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `_lenderVerifier`: `string`, `_loanWithdrawalDuration`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `interestPerPeriod` | (`_balance`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `interestPerPeriod(uint256)` | (`_balance`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `interestPerSecond` | (`_principal`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `interestPerSecond(uint256)` | (`_principal`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `interestToPay` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `interestToPay()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `lend` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_strategy`: `string`, `_fromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `lend(address,uint256,address,bool)` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_strategy`: `string`, `_fromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `lenders` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `lenders(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `liquidateCancelPenalty` | (`_toSavingsAccount`: `boolean`, `_receiveLiquidityShare`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `liquidateCancelPenalty(bool,bool)` | (`_toSavingsAccount`: `boolean`, `_receiveLiquidityShare`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `liquidateForLender` | (`_lender`: `string`, `_fromSavingsAccount`: `boolean`, `_toSavingsAccount`: `boolean`, `_recieveLiquidityShare`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `liquidateForLender(address,bool,bool,bool)` | (`_lender`: `string`, `_fromSavingsAccount`: `boolean`, `_toSavingsAccount`: `boolean`, `_recieveLiquidityShare`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `liquidatePool` | (`_fromSavingsAccount`: `boolean`, `_toSavingsAccount`: `boolean`, `_recieveLiquidityShare`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `liquidatePool(bool,bool,bool)` | (`_fromSavingsAccount`: `boolean`, `_toSavingsAccount`: `boolean`, `_recieveLiquidityShare`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `name()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `paused` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `paused()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `poolConstants` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `poolConstants()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `poolVariables` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `poolVariables()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `requestMarginCall` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `requestMarginCall()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `symbol()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `terminatePool` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `terminatePool()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transfer` | (`recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transfer(address,uint256)` | (`recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom` | (`sender`: `string`, `recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom(address,address,uint256)` | (`sender`: `string`, `recipient`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawBorrowedAmount` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawBorrowedAmount()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawLiquidity` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawLiquidity()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawRepayment` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawRepayment()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/Pool.d.ts:1738](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L1738)

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

### addCollateralInMarginCall

▸ **addCollateralInMarginCall**(`_lender`, `_amount`, `_transferFromSavingsAccount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_lender` | `string` |
| `_amount` | `BigNumberish` |
| `_transferFromSavingsAccount` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:642](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L642)

___

### addCollateralInMarginCall(address,uint256,bool)

▸ **addCollateralInMarginCall(address,uint256,bool)**(`_lender`, `_amount`, `_transferFromSavingsAccount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_lender` | `string` |
| `_amount` | `BigNumberish` |
| `_transferFromSavingsAccount` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:649](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L649)

___

### allowance

▸ **allowance**(`owner`, `spender`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `spender` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Pool.d.ts:656](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L656)

___

### allowance(address,address)

▸ **allowance(address,address)**(`owner`, `spender`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `spender` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Pool.d.ts:658](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L658)

___

### approve

▸ **approve**(`spender`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spender` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:660](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L660)

___

### approve(address,uint256)

▸ **approve(address,uint256)**(`spender`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spender` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:662](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L662)

___

### attach

▸ **attach**(`addressOrName`): [`Pool`](wrappers_Pool.Pool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`Pool`](wrappers_Pool.Pool.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/Pool.d.ts:211](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L211)

___

### balanceOf

▸ **balanceOf**(`account`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Pool.d.ts:668](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L668)

___

### balanceOf(address)

▸ **balanceOf(address)**(`account`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Pool.d.ts:670](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L670)

___

### borrower

▸ **borrower**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/Pool.d.ts:672](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L672)

___

### borrower()

▸ **borrower()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/Pool.d.ts:674](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L674)

___

### calculateCollateralRatio

▸ **calculateCollateralRatio**(`_balance`, `_liquidityShares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_balance` | `BigNumberish` |
| `_liquidityShares` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:676](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L676)

___

### calculateCollateralRatio(uint256,uint256)

▸ **calculateCollateralRatio(uint256,uint256)**(`_balance`, `_liquidityShares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_balance` | `BigNumberish` |
| `_liquidityShares` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:682](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L682)

___

### calculateCurrentPeriod

▸ **calculateCurrentPeriod**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Pool.d.ts:688](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L688)

___

### calculateCurrentPeriod()

▸ **calculateCurrentPeriod()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Pool.d.ts:690](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L690)

___

### calculateRepaymentWithdrawable

▸ **calculateRepaymentWithdrawable**(`_lender`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_lender` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Pool.d.ts:692](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L692)

___

### calculateRepaymentWithdrawable(address)

▸ **calculateRepaymentWithdrawable(address)**(`_lender`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_lender` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Pool.d.ts:694](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L694)

___

### cancelPool

▸ **cancelPool**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:696](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L696)

___

### cancelPool()

▸ **cancelPool()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:698](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L698)

___

### closeLoan

▸ **closeLoan**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:700](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L700)

___

### closeLoan()

▸ **closeLoan()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:702](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L702)

___

### connect

▸ **connect**(`signerOrProvider`): [`Pool`](wrappers_Pool.Pool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`Pool`](wrappers_Pool.Pool.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/Pool.d.ts:210](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L210)

___

### correspondingBorrowTokens

▸ **correspondingBorrowTokens**(`_totalCollateralTokens`, `_fraction`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_totalCollateralTokens` | `BigNumberish` |
| `_fraction` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Pool.d.ts:704](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L704)

___

### correspondingBorrowTokens(uint256,uint256)

▸ **correspondingBorrowTokens(uint256,uint256)**(`_totalCollateralTokens`, `_fraction`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_totalCollateralTokens` | `BigNumberish` |
| `_fraction` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Pool.d.ts:706](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L706)

___

### decimals

▸ **decimals**(`overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/wrappers/Pool.d.ts:712](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L712)

___

### decimals()

▸ **decimals()**(`overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/wrappers/Pool.d.ts:714](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L714)

___

### decreaseAllowance

▸ **decreaseAllowance**(`spender`, `subtractedValue`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spender` | `string` |
| `subtractedValue` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:716](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L716)

___

### decreaseAllowance(address,uint256)

▸ **decreaseAllowance(address,uint256)**(`spender`, `subtractedValue`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spender` | `string` |
| `subtractedValue` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:722](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L722)

___

### deployed

▸ **deployed**(): `Promise`<[`Pool`](wrappers_Pool.Pool.md)\>

#### Returns

`Promise`<[`Pool`](wrappers_Pool.Pool.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/Pool.d.ts:212](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L212)

___

### depositCollateral

▸ **depositCollateral**(`_amount`, `_transferFromSavingsAccount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_amount` | `BigNumberish` |
| `_transferFromSavingsAccount` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:728](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L728)

___

### depositCollateral(uint256,bool)

▸ **depositCollateral(uint256,bool)**(`_amount`, `_transferFromSavingsAccount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_amount` | `BigNumberish` |
| `_transferFromSavingsAccount` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:734](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L734)

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

### getBalanceDetails

▸ **getBalanceDetails**(`_lender`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_lender` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`]\>

#### Defined in

[src/wrappers/Pool.d.ts:740](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L740)

___

### getBalanceDetails(address)

▸ **getBalanceDetails(address)**(`_lender`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_lender` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`]\>

#### Defined in

[src/wrappers/Pool.d.ts:742](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L742)

___

### getCurrentCollateralRatio()

▸ **getCurrentCollateralRatio()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:749](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L749)

___

### getCurrentCollateralRatio(address)

▸ **getCurrentCollateralRatio(address)**(`_lender`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_lender` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:744](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L744)

___

### getEquivalentTokens

▸ **getEquivalentTokens**(`_source`, `_target`, `_amount`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_source` | `string` |
| `_target` | `string` |
| `_amount` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Pool.d.ts:751](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L751)

___

### getEquivalentTokens(address,address,uint256)

▸ **getEquivalentTokens(address,address,uint256)**(`_source`, `_target`, `_amount`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_source` | `string` |
| `_target` | `string` |
| `_amount` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Pool.d.ts:753](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L753)

___

### getLoanStatus

▸ **getLoanStatus**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Pool.d.ts:760](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L760)

___

### getLoanStatus()

▸ **getLoanStatus()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Pool.d.ts:762](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L762)

___

### getMarginCallEndTime

▸ **getMarginCallEndTime**(`_lender`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_lender` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Pool.d.ts:764](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L764)

___

### getMarginCallEndTime(address)

▸ **getMarginCallEndTime(address)**(`_lender`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_lender` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Pool.d.ts:766](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L766)

___

### increaseAllowance

▸ **increaseAllowance**(`spender`, `addedValue`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spender` | `string` |
| `addedValue` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:768](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L768)

___

### increaseAllowance(address,uint256)

▸ **increaseAllowance(address,uint256)**(`spender`, `addedValue`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spender` | `string` |
| `addedValue` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:774](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L774)

___

### initialize

▸ **initialize**(`_borrowAmountRequested`, `_borrowRate`, `_borrower`, `_borrowAsset`, `_collateralAsset`, `_idealCollateralRatio`, `_repaymentInterval`, `_noOfRepaymentIntervals`, `_poolSavingsStrategy`, `_collateralAmount`, `_transferFromSavingsAccount`, `_lenderVerifier`, `_loanWithdrawalDuration`, `_collectionPeriod`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_borrowAmountRequested` | `BigNumberish` |
| `_borrowRate` | `BigNumberish` |
| `_borrower` | `string` |
| `_borrowAsset` | `string` |
| `_collateralAsset` | `string` |
| `_idealCollateralRatio` | `BigNumberish` |
| `_repaymentInterval` | `BigNumberish` |
| `_noOfRepaymentIntervals` | `BigNumberish` |
| `_poolSavingsStrategy` | `string` |
| `_collateralAmount` | `BigNumberish` |
| `_transferFromSavingsAccount` | `boolean` |
| `_lenderVerifier` | `string` |
| `_loanWithdrawalDuration` | `BigNumberish` |
| `_collectionPeriod` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:780](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L780)

___

### initialize(uint256,uint256,address,address,address,uint256,uint64,uint64,address,uint256,bool,address,uint256,uint256)

▸ **initialize(uint256,uint256,address,address,address,uint256,uint64,uint64,address,uint256,bool,address,uint256,uint256)**(`_borrowAmountRequested`, `_borrowRate`, `_borrower`, `_borrowAsset`, `_collateralAsset`, `_idealCollateralRatio`, `_repaymentInterval`, `_noOfRepaymentIntervals`, `_poolSavingsStrategy`, `_collateralAmount`, `_transferFromSavingsAccount`, `_lenderVerifier`, `_loanWithdrawalDuration`, `_collectionPeriod`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_borrowAmountRequested` | `BigNumberish` |
| `_borrowRate` | `BigNumberish` |
| `_borrower` | `string` |
| `_borrowAsset` | `string` |
| `_collateralAsset` | `string` |
| `_idealCollateralRatio` | `BigNumberish` |
| `_repaymentInterval` | `BigNumberish` |
| `_noOfRepaymentIntervals` | `BigNumberish` |
| `_poolSavingsStrategy` | `string` |
| `_collateralAmount` | `BigNumberish` |
| `_transferFromSavingsAccount` | `boolean` |
| `_lenderVerifier` | `string` |
| `_loanWithdrawalDuration` | `BigNumberish` |
| `_collectionPeriod` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:798](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L798)

___

### interestPerPeriod

▸ **interestPerPeriod**(`_balance`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_balance` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Pool.d.ts:816](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L816)

___

### interestPerPeriod(uint256)

▸ **interestPerPeriod(uint256)**(`_balance`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_balance` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Pool.d.ts:818](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L818)

___

### interestPerSecond

▸ **interestPerSecond**(`_principal`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_principal` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Pool.d.ts:820](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L820)

___

### interestPerSecond(uint256)

▸ **interestPerSecond(uint256)**(`_principal`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_principal` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Pool.d.ts:822](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L822)

___

### interestToPay

▸ **interestToPay**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Pool.d.ts:824](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L824)

___

### interestToPay()

▸ **interestToPay()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Pool.d.ts:826](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L826)

___

### lend

▸ **lend**(`_lender`, `_amount`, `_strategy`, `_fromSavingsAccount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_lender` | `string` |
| `_amount` | `BigNumberish` |
| `_strategy` | `string` |
| `_fromSavingsAccount` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:828](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L828)

___

### lend(address,uint256,address,bool)

▸ **lend(address,uint256,address,bool)**(`_lender`, `_amount`, `_strategy`, `_fromSavingsAccount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_lender` | `string` |
| `_amount` | `BigNumberish` |
| `_strategy` | `string` |
| `_fromSavingsAccount` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:836](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L836)

___

### lenders

▸ **lenders**(`arg0`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`] & { `effectiveInterestWithdrawn`: `BigNumber` ; `extraLiquidityShares`: `BigNumber` ; `marginCallEndTime`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`, `BigNumber`] & { `effectiveInterestWithdrawn`: `BigNumber` ; `extraLiquidityShares`: `BigNumber` ; `marginCallEndTime`: `BigNumber`  }\>

#### Defined in

[src/wrappers/Pool.d.ts:844](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L844)

___

### lenders(address)

▸ **lenders(address)**(`arg0`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`] & { `effectiveInterestWithdrawn`: `BigNumber` ; `extraLiquidityShares`: `BigNumber` ; `marginCallEndTime`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`, `BigNumber`] & { `effectiveInterestWithdrawn`: `BigNumber` ; `extraLiquidityShares`: `BigNumber` ; `marginCallEndTime`: `BigNumber`  }\>

#### Defined in

[src/wrappers/Pool.d.ts:855](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L855)

___

### liquidateCancelPenalty

▸ **liquidateCancelPenalty**(`_toSavingsAccount`, `_receiveLiquidityShare`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_toSavingsAccount` | `boolean` |
| `_receiveLiquidityShare` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:866](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L866)

___

### liquidateCancelPenalty(bool,bool)

▸ **liquidateCancelPenalty(bool,bool)**(`_toSavingsAccount`, `_receiveLiquidityShare`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_toSavingsAccount` | `boolean` |
| `_receiveLiquidityShare` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:872](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L872)

___

### liquidateForLender

▸ **liquidateForLender**(`_lender`, `_fromSavingsAccount`, `_toSavingsAccount`, `_recieveLiquidityShare`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_lender` | `string` |
| `_fromSavingsAccount` | `boolean` |
| `_toSavingsAccount` | `boolean` |
| `_recieveLiquidityShare` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:878](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L878)

___

### liquidateForLender(address,bool,bool,bool)

▸ **liquidateForLender(address,bool,bool,bool)**(`_lender`, `_fromSavingsAccount`, `_toSavingsAccount`, `_recieveLiquidityShare`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_lender` | `string` |
| `_fromSavingsAccount` | `boolean` |
| `_toSavingsAccount` | `boolean` |
| `_recieveLiquidityShare` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:886](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L886)

___

### liquidatePool

▸ **liquidatePool**(`_fromSavingsAccount`, `_toSavingsAccount`, `_recieveLiquidityShare`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_fromSavingsAccount` | `boolean` |
| `_toSavingsAccount` | `boolean` |
| `_recieveLiquidityShare` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:894](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L894)

___

### liquidatePool(bool,bool,bool)

▸ **liquidatePool(bool,bool,bool)**(`_fromSavingsAccount`, `_toSavingsAccount`, `_recieveLiquidityShare`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_fromSavingsAccount` | `boolean` |
| `_toSavingsAccount` | `boolean` |
| `_recieveLiquidityShare` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:901](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L901)

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

[src/wrappers/Pool.d.ts:214](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L214)

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

[src/wrappers/Pool.d.ts:237](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L237)

___

### name

▸ **name**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/Pool.d.ts:908](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L908)

___

### name()

▸ **name()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/Pool.d.ts:910](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L910)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Pool`](wrappers_Pool.Pool.md)

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

[`Pool`](wrappers_Pool.Pool.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/Pool.d.ts:217](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L217)

▸ **off**(`eventName`, `listener`): [`Pool`](wrappers_Pool.Pool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Pool`](wrappers_Pool.Pool.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/Pool.d.ts:238](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L238)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Pool`](wrappers_Pool.Pool.md)

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

[`Pool`](wrappers_Pool.Pool.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/Pool.d.ts:221](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L221)

▸ **on**(`eventName`, `listener`): [`Pool`](wrappers_Pool.Pool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Pool`](wrappers_Pool.Pool.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/Pool.d.ts:239](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L239)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Pool`](wrappers_Pool.Pool.md)

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

[`Pool`](wrappers_Pool.Pool.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/Pool.d.ts:225](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L225)

▸ **once**(`eventName`, `listener`): [`Pool`](wrappers_Pool.Pool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Pool`](wrappers_Pool.Pool.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/Pool.d.ts:240](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L240)

___

### paused

▸ **paused**(`overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/Pool.d.ts:912](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L912)

___

### paused()

▸ **paused()**(`overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/Pool.d.ts:914](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L914)

___

### poolConstants

▸ **poolConstants**(`overrides?`): `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `string`, `string`, `string`, `BigNumber`, `BigNumber`, `BigNumber`] & { `borrowAmountRequested`: `BigNumber` ; `borrowAsset`: `string` ; `borrowRate`: `BigNumber` ; `borrower`: `string` ; `collateralAsset`: `string` ; `idealCollateralRatio`: `BigNumber` ; `lenderVerifier`: `string` ; `loanStartTime`: `BigNumber` ; `loanWithdrawalDeadline`: `BigNumber` ; `noOfRepaymentIntervals`: `BigNumber` ; `poolSavingsStrategy`: `string` ; `repaymentInterval`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `string`, `string`, `string`, `BigNumber`, `BigNumber`, `BigNumber`] & { `borrowAmountRequested`: `BigNumber` ; `borrowAsset`: `string` ; `borrowRate`: `BigNumber` ; `borrower`: `string` ; `collateralAsset`: `string` ; `idealCollateralRatio`: `BigNumber` ; `lenderVerifier`: `string` ; `loanStartTime`: `BigNumber` ; `loanWithdrawalDeadline`: `BigNumber` ; `noOfRepaymentIntervals`: `BigNumber` ; `poolSavingsStrategy`: `string` ; `repaymentInterval`: `BigNumber`  }\>

#### Defined in

[src/wrappers/Pool.d.ts:916](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L916)

___

### poolConstants()

▸ **poolConstants()**(`overrides?`): `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `string`, `string`, `string`, `BigNumber`, `BigNumber`, `BigNumber`] & { `borrowAmountRequested`: `BigNumber` ; `borrowAsset`: `string` ; `borrowRate`: `BigNumber` ; `borrower`: `string` ; `collateralAsset`: `string` ; `idealCollateralRatio`: `BigNumber` ; `lenderVerifier`: `string` ; `loanStartTime`: `BigNumber` ; `loanWithdrawalDeadline`: `BigNumber` ; `noOfRepaymentIntervals`: `BigNumber` ; `poolSavingsStrategy`: `string` ; `repaymentInterval`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `string`, `string`, `string`, `string`, `string`, `BigNumber`, `BigNumber`, `BigNumber`] & { `borrowAmountRequested`: `BigNumber` ; `borrowAsset`: `string` ; `borrowRate`: `BigNumber` ; `borrower`: `string` ; `collateralAsset`: `string` ; `idealCollateralRatio`: `BigNumber` ; `lenderVerifier`: `string` ; `loanStartTime`: `BigNumber` ; `loanWithdrawalDeadline`: `BigNumber` ; `noOfRepaymentIntervals`: `BigNumber` ; `poolSavingsStrategy`: `string` ; `repaymentInterval`: `BigNumber`  }\>

#### Defined in

[src/wrappers/Pool.d.ts:933](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L933)

___

### poolVariables

▸ **poolVariables**(`overrides?`): `Promise`<[`number`, `BigNumber`, `BigNumber`, `BigNumber`] & { `baseLiquidityShares`: `BigNumber` ; `extraLiquidityShares`: `BigNumber` ; `loanStatus`: `number` ; `penaltyLiquidityAmount`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`number`, `BigNumber`, `BigNumber`, `BigNumber`] & { `baseLiquidityShares`: `BigNumber` ; `extraLiquidityShares`: `BigNumber` ; `loanStatus`: `number` ; `penaltyLiquidityAmount`: `BigNumber`  }\>

#### Defined in

[src/wrappers/Pool.d.ts:950](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L950)

___

### poolVariables()

▸ **poolVariables()**(`overrides?`): `Promise`<[`number`, `BigNumber`, `BigNumber`, `BigNumber`] & { `baseLiquidityShares`: `BigNumber` ; `extraLiquidityShares`: `BigNumber` ; `loanStatus`: `number` ; `penaltyLiquidityAmount`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`number`, `BigNumber`, `BigNumber`, `BigNumber`] & { `baseLiquidityShares`: `BigNumber` ; `extraLiquidityShares`: `BigNumber` ; `loanStatus`: `number` ; `penaltyLiquidityAmount`: `BigNumber`  }\>

#### Defined in

[src/wrappers/Pool.d.ts:959](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L959)

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

[src/wrappers/Pool.d.ts:244](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L244)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`Pool`](wrappers_Pool.Pool.md)

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

[`Pool`](wrappers_Pool.Pool.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/Pool.d.ts:233](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L233)

▸ **removeAllListeners**(`eventName?`): [`Pool`](wrappers_Pool.Pool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`Pool`](wrappers_Pool.Pool.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/Pool.d.ts:242](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L242)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Pool`](wrappers_Pool.Pool.md)

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

[`Pool`](wrappers_Pool.Pool.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/Pool.d.ts:229](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L229)

▸ **removeListener**(`eventName`, `listener`): [`Pool`](wrappers_Pool.Pool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Pool`](wrappers_Pool.Pool.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/Pool.d.ts:241](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L241)

___

### requestMarginCall

▸ **requestMarginCall**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:968](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L968)

___

### requestMarginCall()

▸ **requestMarginCall()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:970](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L970)

___

### symbol

▸ **symbol**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/Pool.d.ts:972](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L972)

___

### symbol()

▸ **symbol()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/Pool.d.ts:974](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L974)

___

### terminatePool

▸ **terminatePool**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:976](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L976)

___

### terminatePool()

▸ **terminatePool()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:978](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L978)

___

### totalSupply

▸ **totalSupply**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Pool.d.ts:980](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L980)

___

### totalSupply()

▸ **totalSupply()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Pool.d.ts:982](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L982)

___

### transfer

▸ **transfer**(`recipient`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipient` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:984](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L984)

___

### transfer(address,uint256)

▸ **transfer(address,uint256)**(`recipient`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipient` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:990](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L990)

___

### transferFrom

▸ **transferFrom**(`sender`, `recipient`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | `string` |
| `recipient` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:996](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L996)

___

### transferFrom(address,address,uint256)

▸ **transferFrom(address,address,uint256)**(`sender`, `recipient`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | `string` |
| `recipient` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:1003](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L1003)

___

### withdrawBorrowedAmount

▸ **withdrawBorrowedAmount**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:1010](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L1010)

___

### withdrawBorrowedAmount()

▸ **withdrawBorrowedAmount()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:1012](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L1012)

___

### withdrawLiquidity

▸ **withdrawLiquidity**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:1014](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L1014)

___

### withdrawLiquidity()

▸ **withdrawLiquidity()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:1016](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L1016)

___

### withdrawRepayment

▸ **withdrawRepayment**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:1018](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L1018)

___

### withdrawRepayment()

▸ **withdrawRepayment()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Pool.d.ts:1020](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/wrappers/Pool.d.ts#L1020)

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
