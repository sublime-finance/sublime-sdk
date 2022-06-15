[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/Repayments](../modules/wrappers_Repayments.md) / Repayments

# Class: Repayments

[wrappers/Repayments](../modules/wrappers_Repayments.md).Repayments

## Hierarchy

- `Contract`

  ↳ **`Repayments`**

## Table of contents

### Constructors

- [constructor](wrappers_Repayments.Repayments.md#constructor)

### Properties

- [\_deployedPromise](wrappers_Repayments.Repayments.md#_deployedpromise)
- [\_runningEvents](wrappers_Repayments.Repayments.md#_runningevents)
- [\_wrappedEmits](wrappers_Repayments.Repayments.md#_wrappedemits)
- [address](wrappers_Repayments.Repayments.md#address)
- [callStatic](wrappers_Repayments.Repayments.md#callstatic)
- [deployTransaction](wrappers_Repayments.Repayments.md#deploytransaction)
- [estimateGas](wrappers_Repayments.Repayments.md#estimategas)
- [filters](wrappers_Repayments.Repayments.md#filters)
- [functions](wrappers_Repayments.Repayments.md#functions)
- [interface](wrappers_Repayments.Repayments.md#interface)
- [populateTransaction](wrappers_Repayments.Repayments.md#populatetransaction)
- [provider](wrappers_Repayments.Repayments.md#provider)
- [resolvedAddress](wrappers_Repayments.Repayments.md#resolvedaddress)
- [signer](wrappers_Repayments.Repayments.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_Repayments.Repayments.md#_checkrunningevents)
- [\_deployed](wrappers_Repayments.Repayments.md#_deployed)
- [\_wrapEvent](wrappers_Repayments.Repayments.md#_wrapevent)
- [attach](wrappers_Repayments.Repayments.md#attach)
- [connect](wrappers_Repayments.Repayments.md#connect)
- [deployed](wrappers_Repayments.Repayments.md#deployed)
- [didBorrowerDefault](wrappers_Repayments.Repayments.md#didborrowerdefault)
- [didBorrowerDefault(address)](wrappers_Repayments.Repayments.md#didborrowerdefault(address))
- [emit](wrappers_Repayments.Repayments.md#emit)
- [fallback](wrappers_Repayments.Repayments.md#fallback)
- [getCurrentInstalmentInterval](wrappers_Repayments.Repayments.md#getcurrentinstalmentinterval)
- [getCurrentInstalmentInterval(address)](wrappers_Repayments.Repayments.md#getcurrentinstalmentinterval(address))
- [getCurrentLoanInterval](wrappers_Repayments.Repayments.md#getcurrentloaninterval)
- [getCurrentLoanInterval(address)](wrappers_Repayments.Repayments.md#getcurrentloaninterval(address))
- [getGracePeriodFraction](wrappers_Repayments.Repayments.md#getgraceperiodfraction)
- [getGracePeriodFraction()](wrappers_Repayments.Repayments.md#getgraceperiodfraction())
- [getInstalmentsCompleted](wrappers_Repayments.Repayments.md#getinstalmentscompleted)
- [getInstalmentsCompleted(address)](wrappers_Repayments.Repayments.md#getinstalmentscompleted(address))
- [getInterest](wrappers_Repayments.Repayments.md#getinterest)
- [getInterest(address,uint256)](wrappers_Repayments.Repayments.md#getinterest(address,uint256))
- [getInterestCalculationVars](wrappers_Repayments.Repayments.md#getinterestcalculationvars)
- [getInterestCalculationVars(address)](wrappers_Repayments.Repayments.md#getinterestcalculationvars(address))
- [getInterestDueTillInstalmentDeadline](wrappers_Repayments.Repayments.md#getinterestduetillinstalmentdeadline)
- [getInterestDueTillInstalmentDeadline(address)](wrappers_Repayments.Repayments.md#getinterestduetillinstalmentdeadline(address))
- [getInterestLeft](wrappers_Repayments.Repayments.md#getinterestleft)
- [getInterestLeft(address)](wrappers_Repayments.Repayments.md#getinterestleft(address))
- [getInterestPerSecond](wrappers_Repayments.Repayments.md#getinterestpersecond)
- [getInterestPerSecond(address)](wrappers_Repayments.Repayments.md#getinterestpersecond(address))
- [getNextInstalmentDeadline](wrappers_Repayments.Repayments.md#getnextinstalmentdeadline)
- [getNextInstalmentDeadline(address)](wrappers_Repayments.Repayments.md#getnextinstalmentdeadline(address))
- [getRepaidDuration](wrappers_Repayments.Repayments.md#getrepaidduration)
- [getRepaidDuration(address,uint256)](wrappers_Repayments.Repayments.md#getrepaidduration(address,uint256))
- [getTotalRepaidAmount](wrappers_Repayments.Repayments.md#gettotalrepaidamount)
- [getTotalRepaidAmount(address)](wrappers_Repayments.Repayments.md#gettotalrepaidamount(address))
- [gracePenaltyRate](wrappers_Repayments.Repayments.md#gracepenaltyrate)
- [gracePenaltyRate()](wrappers_Repayments.Repayments.md#gracepenaltyrate())
- [gracePeriodFraction](wrappers_Repayments.Repayments.md#graceperiodfraction)
- [gracePeriodFraction()](wrappers_Repayments.Repayments.md#graceperiodfraction())
- [initialize](wrappers_Repayments.Repayments.md#initialize)
- [initialize(address,uint128,uint128)](wrappers_Repayments.Repayments.md#initialize(address,uint128,uint128))
- [initializeRepayment](wrappers_Repayments.Repayments.md#initializerepayment)
- [initializeRepayment(uint64,uint256,uint256,uint256,address)](wrappers_Repayments.Repayments.md#initializerepayment(uint64,uint256,uint256,uint256,address))
- [isGracePenaltyApplicable](wrappers_Repayments.Repayments.md#isgracepenaltyapplicable)
- [isGracePenaltyApplicable(address)](wrappers_Repayments.Repayments.md#isgracepenaltyapplicable(address))
- [listenerCount](wrappers_Repayments.Repayments.md#listenercount)
- [listeners](wrappers_Repayments.Repayments.md#listeners)
- [off](wrappers_Repayments.Repayments.md#off)
- [on](wrappers_Repayments.Repayments.md#on)
- [once](wrappers_Repayments.Repayments.md#once)
- [queryFilter](wrappers_Repayments.Repayments.md#queryfilter)
- [removeAllListeners](wrappers_Repayments.Repayments.md#removealllisteners)
- [removeListener](wrappers_Repayments.Repayments.md#removelistener)
- [repay](wrappers_Repayments.Repayments.md#repay)
- [repay(address,uint256)](wrappers_Repayments.Repayments.md#repay(address,uint256))
- [repayConstants](wrappers_Repayments.Repayments.md#repayconstants)
- [repayConstants(address)](wrappers_Repayments.Repayments.md#repayconstants(address))
- [repayPrincipal](wrappers_Repayments.Repayments.md#repayprincipal)
- [repayPrincipal(address)](wrappers_Repayments.Repayments.md#repayprincipal(address))
- [repayVariables](wrappers_Repayments.Repayments.md#repayvariables)
- [repayVariables(address)](wrappers_Repayments.Repayments.md#repayvariables(address))
- [updateGracePenaltyRate](wrappers_Repayments.Repayments.md#updategracepenaltyrate)
- [updateGracePenaltyRate(uint128)](wrappers_Repayments.Repayments.md#updategracepenaltyrate(uint128))
- [updateGracePeriodFraction](wrappers_Repayments.Repayments.md#updategraceperiodfraction)
- [updateGracePeriodFraction(uint128)](wrappers_Repayments.Repayments.md#updategraceperiodfraction(uint128))
- [updatePoolFactory](wrappers_Repayments.Repayments.md#updatepoolfactory)
- [updatePoolFactory(address)](wrappers_Repayments.Repayments.md#updatepoolfactory(address))
- [getContractAddress](wrappers_Repayments.Repayments.md#getcontractaddress)
- [getInterface](wrappers_Repayments.Repayments.md#getinterface)
- [isIndexed](wrappers_Repayments.Repayments.md#isindexed)

## Constructors

### constructor

• **new Repayments**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `didBorrowerDefault` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `didBorrowerDefault(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getCurrentInstalmentInterval` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCurrentInstalmentInterval(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCurrentLoanInterval` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCurrentLoanInterval(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getGracePeriodFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getGracePeriodFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getInstalmentsCompleted` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getInstalmentsCompleted(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getInterest` | (`_poolID`: `string`, `_scaledUpTime`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getInterest(address,uint256)` | (`_poolID`: `string`, `_scaledUpTime`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getInterestCalculationVars` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`]\> |
| `getInterestCalculationVars(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`]\> |
| `getInterestDueTillInstalmentDeadline` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getInterestDueTillInstalmentDeadline(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getInterestLeft` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getInterestLeft(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getInterestPerSecond` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getInterestPerSecond(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getNextInstalmentDeadline` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getNextInstalmentDeadline(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getRepaidDuration` | (`_poolID`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getRepaidDuration(address,uint256)` | (`_poolID`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalRepaidAmount` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalRepaidAmount(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `gracePenaltyRate` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `gracePenaltyRate()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `gracePeriodFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `gracePeriodFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `initialize` | (`_poolFactory`: `string`, `_gracePenaltyRate`: `BigNumberish`, `_gracePeriodFraction`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialize(address,uint128,uint128)` | (`_poolFactory`: `string`, `_gracePenaltyRate`: `BigNumberish`, `_gracePeriodFraction`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initializeRepayment` | (`numberOfTotalRepayments`: `BigNumberish`, `repaymentInterval`: `BigNumberish`, `borrowRate`: `BigNumberish`, `loanStartTime`: `BigNumberish`, `lentAsset`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initializeRepayment(uint64,uint256,uint256,uint256,address)` | (`numberOfTotalRepayments`: `BigNumberish`, `repaymentInterval`: `BigNumberish`, `borrowRate`: `BigNumberish`, `loanStartTime`: `BigNumberish`, `lentAsset`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `isGracePenaltyApplicable` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `isGracePenaltyApplicable(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `repay` | (`_poolID`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `repay(address,uint256)` | (`_poolID`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `repayConstants` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `string`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `borrowRate`: `BigNumber` ; `gracePenaltyRate`: `BigNumber` ; `gracePeriodFraction`: `BigNumber` ; `loanDuration`: `BigNumber` ; `loanStartTime`: `BigNumber` ; `numberOfTotalRepayments`: `BigNumber` ; `repayAsset`: `string` ; `repaymentInterval`: `BigNumber`  }\> |
| `repayConstants(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `string`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `borrowRate`: `BigNumber` ; `gracePenaltyRate`: `BigNumber` ; `gracePeriodFraction`: `BigNumber` ; `loanDuration`: `BigNumber` ; `loanStartTime`: `BigNumber` ; `numberOfTotalRepayments`: `BigNumber` ; `repayAsset`: `string` ; `repaymentInterval`: `BigNumber`  }\> |
| `repayPrincipal` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `repayPrincipal(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `repayVariables` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `loanDurationCovered`: `BigNumber` ; `repaidAmount`: `BigNumber`  }\> |
| `repayVariables(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `loanDurationCovered`: `BigNumber` ; `repaidAmount`: `BigNumber`  }\> |
| `updateGracePenaltyRate` | (`_gracePenaltyRate`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateGracePenaltyRate(uint128)` | (`_gracePenaltyRate`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateGracePeriodFraction` | (`_gracePeriodFraction`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateGracePeriodFraction(uint128)` | (`_gracePeriodFraction`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updatePoolFactory` | (`_poolFactory`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updatePoolFactory(address)` | (`_poolFactory`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/Repayments.d.ts:548](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L548)

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
| `didBorrowerDefault` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `didBorrowerDefault(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCurrentInstalmentInterval` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCurrentInstalmentInterval(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCurrentLoanInterval` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCurrentLoanInterval(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getGracePeriodFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getGracePeriodFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getInstalmentsCompleted` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getInstalmentsCompleted(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getInterest` | (`_poolID`: `string`, `_scaledUpTime`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getInterest(address,uint256)` | (`_poolID`: `string`, `_scaledUpTime`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getInterestCalculationVars` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getInterestCalculationVars(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getInterestDueTillInstalmentDeadline` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getInterestDueTillInstalmentDeadline(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getInterestLeft` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getInterestLeft(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getInterestPerSecond` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getInterestPerSecond(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getNextInstalmentDeadline` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getNextInstalmentDeadline(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getRepaidDuration` | (`_poolID`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getRepaidDuration(address,uint256)` | (`_poolID`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalRepaidAmount` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalRepaidAmount(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `gracePenaltyRate` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `gracePenaltyRate()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `gracePeriodFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `gracePeriodFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `initialize` | (`_poolFactory`: `string`, `_gracePenaltyRate`: `BigNumberish`, `_gracePeriodFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initialize(address,uint128,uint128)` | (`_poolFactory`: `string`, `_gracePenaltyRate`: `BigNumberish`, `_gracePeriodFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initializeRepayment` | (`numberOfTotalRepayments`: `BigNumberish`, `repaymentInterval`: `BigNumberish`, `borrowRate`: `BigNumberish`, `loanStartTime`: `BigNumberish`, `lentAsset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initializeRepayment(uint64,uint256,uint256,uint256,address)` | (`numberOfTotalRepayments`: `BigNumberish`, `repaymentInterval`: `BigNumberish`, `borrowRate`: `BigNumberish`, `loanStartTime`: `BigNumberish`, `lentAsset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `isGracePenaltyApplicable` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isGracePenaltyApplicable(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `repay` | (`_poolID`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `repay(address,uint256)` | (`_poolID`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `repayConstants` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `repayConstants(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `repayPrincipal` | (`_poolID`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `repayPrincipal(address)` | (`_poolID`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `repayVariables` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `repayVariables(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `updateGracePenaltyRate` | (`_gracePenaltyRate`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateGracePenaltyRate(uint128)` | (`_gracePenaltyRate`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateGracePeriodFraction` | (`_gracePeriodFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateGracePeriodFraction(uint128)` | (`_gracePeriodFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updatePoolFactory` | (`_poolFactory`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updatePoolFactory(address)` | (`_poolFactory`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/Repayments.d.ts:746](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L746)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `GracePenaltyRateUpdated` | (`gracePenaltyRate`: `BigNumberish`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`], { `gracePenaltyRate`: `BigNumber`  }\> |
| `GracePenaltyRepaid` | (`poolID`: `string`, `repayAmount`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `BigNumber`], { `poolID`: `string` ; `repayAmount`: `BigNumber`  }\> |
| `GracePeriodFractionUpdated` | (`gracePeriodFraction`: `BigNumberish`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`], { `gracePeriodFraction`: `BigNumber`  }\> |
| `InterestRepaid` | (`poolID`: `string`, `repayAmount`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `BigNumber`], { `poolID`: `string` ; `repayAmount`: `BigNumber`  }\> |
| `InterestRepaymentComplete` | (`poolID`: `string`, `repayAmount`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `BigNumber`], { `poolID`: `string` ; `repayAmount`: `BigNumber`  }\> |
| `PoolFactoryUpdated` | (`poolFactory`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `poolFactory`: `string`  }\> |
| `PrincipalRepaid` | (`poolID`: `string`, `repayAmount`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `BigNumber`], { `poolID`: `string` ; `repayAmount`: `BigNumber`  }\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/Repayments.d.ts:718](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L718)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `didBorrowerDefault` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `didBorrowerDefault(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `getCurrentInstalmentInterval` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getCurrentInstalmentInterval(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getCurrentLoanInterval` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getCurrentLoanInterval(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getGracePeriodFraction` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getGracePeriodFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getInstalmentsCompleted` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getInstalmentsCompleted(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getInterest` | (`_poolID`: `string`, `_scaledUpTime`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getInterest(address,uint256)` | (`_poolID`: `string`, `_scaledUpTime`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getInterestCalculationVars` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`]\> |
| `getInterestCalculationVars(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`]\> |
| `getInterestDueTillInstalmentDeadline` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getInterestDueTillInstalmentDeadline(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getInterestLeft` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getInterestLeft(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getInterestPerSecond` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getInterestPerSecond(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getNextInstalmentDeadline` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getNextInstalmentDeadline(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getRepaidDuration` | (`_poolID`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getRepaidDuration(address,uint256)` | (`_poolID`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getTotalRepaidAmount` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getTotalRepaidAmount(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `gracePenaltyRate` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `gracePenaltyRate()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `gracePeriodFraction` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `gracePeriodFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `initialize` | (`_poolFactory`: `string`, `_gracePenaltyRate`: `BigNumberish`, `_gracePeriodFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialize(address,uint128,uint128)` | (`_poolFactory`: `string`, `_gracePenaltyRate`: `BigNumberish`, `_gracePeriodFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initializeRepayment` | (`numberOfTotalRepayments`: `BigNumberish`, `repaymentInterval`: `BigNumberish`, `borrowRate`: `BigNumberish`, `loanStartTime`: `BigNumberish`, `lentAsset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initializeRepayment(uint64,uint256,uint256,uint256,address)` | (`numberOfTotalRepayments`: `BigNumberish`, `repaymentInterval`: `BigNumberish`, `borrowRate`: `BigNumberish`, `loanStartTime`: `BigNumberish`, `lentAsset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `isGracePenaltyApplicable` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `isGracePenaltyApplicable(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `repay` | (`_poolID`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `repay(address,uint256)` | (`_poolID`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `repayConstants` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `string`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `borrowRate`: `BigNumber` ; `gracePenaltyRate`: `BigNumber` ; `gracePeriodFraction`: `BigNumber` ; `loanDuration`: `BigNumber` ; `loanStartTime`: `BigNumber` ; `numberOfTotalRepayments`: `BigNumber` ; `repayAsset`: `string` ; `repaymentInterval`: `BigNumber`  }\> |
| `repayConstants(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `string`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `borrowRate`: `BigNumber` ; `gracePenaltyRate`: `BigNumber` ; `gracePeriodFraction`: `BigNumber` ; `loanDuration`: `BigNumber` ; `loanStartTime`: `BigNumber` ; `numberOfTotalRepayments`: `BigNumber` ; `repayAsset`: `string` ; `repaymentInterval`: `BigNumber`  }\> |
| `repayPrincipal` | (`_poolID`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `repayPrincipal(address)` | (`_poolID`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `repayVariables` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `loanDurationCovered`: `BigNumber` ; `repaidAmount`: `BigNumber`  }\> |
| `repayVariables(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `loanDurationCovered`: `BigNumber` ; `repaidAmount`: `BigNumber`  }\> |
| `updateGracePenaltyRate` | (`_gracePenaltyRate`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateGracePenaltyRate(uint128)` | (`_gracePenaltyRate`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateGracePeriodFraction` | (`_gracePeriodFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateGracePeriodFraction(uint128)` | (`_gracePeriodFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updatePoolFactory` | (`_poolFactory`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updatePoolFactory(address)` | (`_poolFactory`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/Repayments.d.ts:168](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L168)

___

### interface

• **interface**: [`RepaymentsInterface`](../interfaces/wrappers_Repayments.RepaymentsInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/Repayments.d.ts:166](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L166)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `didBorrowerDefault` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `didBorrowerDefault(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCurrentInstalmentInterval` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCurrentInstalmentInterval(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCurrentLoanInterval` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCurrentLoanInterval(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getGracePeriodFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getGracePeriodFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getInstalmentsCompleted` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getInstalmentsCompleted(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getInterest` | (`_poolID`: `string`, `_scaledUpTime`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getInterest(address,uint256)` | (`_poolID`: `string`, `_scaledUpTime`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getInterestCalculationVars` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getInterestCalculationVars(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getInterestDueTillInstalmentDeadline` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getInterestDueTillInstalmentDeadline(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getInterestLeft` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getInterestLeft(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getInterestPerSecond` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getInterestPerSecond(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getNextInstalmentDeadline` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getNextInstalmentDeadline(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getRepaidDuration` | (`_poolID`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getRepaidDuration(address,uint256)` | (`_poolID`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTotalRepaidAmount` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTotalRepaidAmount(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `gracePenaltyRate` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `gracePenaltyRate()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `gracePeriodFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `gracePeriodFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `initialize` | (`_poolFactory`: `string`, `_gracePenaltyRate`: `BigNumberish`, `_gracePeriodFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialize(address,uint128,uint128)` | (`_poolFactory`: `string`, `_gracePenaltyRate`: `BigNumberish`, `_gracePeriodFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initializeRepayment` | (`numberOfTotalRepayments`: `BigNumberish`, `repaymentInterval`: `BigNumberish`, `borrowRate`: `BigNumberish`, `loanStartTime`: `BigNumberish`, `lentAsset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initializeRepayment(uint64,uint256,uint256,uint256,address)` | (`numberOfTotalRepayments`: `BigNumberish`, `repaymentInterval`: `BigNumberish`, `borrowRate`: `BigNumberish`, `loanStartTime`: `BigNumberish`, `lentAsset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `isGracePenaltyApplicable` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isGracePenaltyApplicable(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `repay` | (`_poolID`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `repay(address,uint256)` | (`_poolID`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `repayConstants` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `repayConstants(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `repayPrincipal` | (`_poolID`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `repayPrincipal(address)` | (`_poolID`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `repayVariables` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `repayVariables(address)` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `updateGracePenaltyRate` | (`_gracePenaltyRate`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateGracePenaltyRate(uint128)` | (`_gracePenaltyRate`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateGracePeriodFraction` | (`_gracePeriodFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateGracePeriodFraction(uint128)` | (`_gracePeriodFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updatePoolFactory` | (`_poolFactory`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updatePoolFactory(address)` | (`_poolFactory`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/Repayments.d.ts:888](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L888)

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

▸ **attach**(`addressOrName`): [`Repayments`](wrappers_Repayments.Repayments.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`Repayments`](wrappers_Repayments.Repayments.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/Repayments.d.ts:127](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L127)

___

### connect

▸ **connect**(`signerOrProvider`): [`Repayments`](wrappers_Repayments.Repayments.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`Repayments`](wrappers_Repayments.Repayments.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/Repayments.d.ts:126](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L126)

___

### deployed

▸ **deployed**(): `Promise`<[`Repayments`](wrappers_Repayments.Repayments.md)\>

#### Returns

`Promise`<[`Repayments`](wrappers_Repayments.Repayments.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/Repayments.d.ts:128](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L128)

___

### didBorrowerDefault

▸ **didBorrowerDefault**(`_poolID`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolID` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/Repayments.d.ts:361](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L361)

___

### didBorrowerDefault(address)

▸ **didBorrowerDefault(address)**(`_poolID`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolID` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/Repayments.d.ts:363](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L363)

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

### getCurrentInstalmentInterval

▸ **getCurrentInstalmentInterval**(`_poolID`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolID` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Repayments.d.ts:365](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L365)

___

### getCurrentInstalmentInterval(address)

▸ **getCurrentInstalmentInterval(address)**(`_poolID`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolID` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Repayments.d.ts:367](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L367)

___

### getCurrentLoanInterval

▸ **getCurrentLoanInterval**(`_poolID`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolID` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Repayments.d.ts:369](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L369)

___

### getCurrentLoanInterval(address)

▸ **getCurrentLoanInterval(address)**(`_poolID`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolID` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Repayments.d.ts:371](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L371)

___

### getGracePeriodFraction

▸ **getGracePeriodFraction**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Repayments.d.ts:373](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L373)

___

### getGracePeriodFraction()

▸ **getGracePeriodFraction()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Repayments.d.ts:375](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L375)

___

### getInstalmentsCompleted

▸ **getInstalmentsCompleted**(`_poolID`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolID` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Repayments.d.ts:377](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L377)

___

### getInstalmentsCompleted(address)

▸ **getInstalmentsCompleted(address)**(`_poolID`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolID` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Repayments.d.ts:379](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L379)

___

### getInterest

▸ **getInterest**(`_poolID`, `_scaledUpTime`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolID` | `string` |
| `_scaledUpTime` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Repayments.d.ts:381](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L381)

___

### getInterest(address,uint256)

▸ **getInterest(address,uint256)**(`_poolID`, `_scaledUpTime`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolID` | `string` |
| `_scaledUpTime` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Repayments.d.ts:383](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L383)

___

### getInterestCalculationVars

▸ **getInterestCalculationVars**(`_poolID`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolID` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`]\>

#### Defined in

[src/wrappers/Repayments.d.ts:385](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L385)

___

### getInterestCalculationVars(address)

▸ **getInterestCalculationVars(address)**(`_poolID`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolID` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`]\>

#### Defined in

[src/wrappers/Repayments.d.ts:387](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L387)

___

### getInterestDueTillInstalmentDeadline

▸ **getInterestDueTillInstalmentDeadline**(`_poolID`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolID` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Repayments.d.ts:389](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L389)

___

### getInterestDueTillInstalmentDeadline(address)

▸ **getInterestDueTillInstalmentDeadline(address)**(`_poolID`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolID` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Repayments.d.ts:391](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L391)

___

### getInterestLeft

▸ **getInterestLeft**(`_poolID`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolID` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Repayments.d.ts:393](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L393)

___

### getInterestLeft(address)

▸ **getInterestLeft(address)**(`_poolID`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolID` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Repayments.d.ts:395](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L395)

___

### getInterestPerSecond

▸ **getInterestPerSecond**(`_poolID`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolID` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Repayments.d.ts:397](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L397)

___

### getInterestPerSecond(address)

▸ **getInterestPerSecond(address)**(`_poolID`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolID` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Repayments.d.ts:399](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L399)

___

### getNextInstalmentDeadline

▸ **getNextInstalmentDeadline**(`_poolID`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolID` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Repayments.d.ts:401](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L401)

___

### getNextInstalmentDeadline(address)

▸ **getNextInstalmentDeadline(address)**(`_poolID`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolID` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Repayments.d.ts:403](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L403)

___

### getRepaidDuration

▸ **getRepaidDuration**(`_poolID`, `_amount`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolID` | `string` |
| `_amount` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Repayments.d.ts:405](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L405)

___

### getRepaidDuration(address,uint256)

▸ **getRepaidDuration(address,uint256)**(`_poolID`, `_amount`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolID` | `string` |
| `_amount` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Repayments.d.ts:407](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L407)

___

### getTotalRepaidAmount

▸ **getTotalRepaidAmount**(`_poolID`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolID` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Repayments.d.ts:409](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L409)

___

### getTotalRepaidAmount(address)

▸ **getTotalRepaidAmount(address)**(`_poolID`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolID` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Repayments.d.ts:411](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L411)

___

### gracePenaltyRate

▸ **gracePenaltyRate**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Repayments.d.ts:413](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L413)

___

### gracePenaltyRate()

▸ **gracePenaltyRate()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Repayments.d.ts:415](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L415)

___

### gracePeriodFraction

▸ **gracePeriodFraction**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Repayments.d.ts:417](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L417)

___

### gracePeriodFraction()

▸ **gracePeriodFraction()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/Repayments.d.ts:419](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L419)

___

### initialize

▸ **initialize**(`_poolFactory`, `_gracePenaltyRate`, `_gracePeriodFraction`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolFactory` | `string` |
| `_gracePenaltyRate` | `BigNumberish` |
| `_gracePeriodFraction` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Repayments.d.ts:421](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L421)

___

### initialize(address,uint128,uint128)

▸ **initialize(address,uint128,uint128)**(`_poolFactory`, `_gracePenaltyRate`, `_gracePeriodFraction`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolFactory` | `string` |
| `_gracePenaltyRate` | `BigNumberish` |
| `_gracePeriodFraction` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Repayments.d.ts:428](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L428)

___

### initializeRepayment

▸ **initializeRepayment**(`numberOfTotalRepayments`, `repaymentInterval`, `borrowRate`, `loanStartTime`, `lentAsset`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `numberOfTotalRepayments` | `BigNumberish` |
| `repaymentInterval` | `BigNumberish` |
| `borrowRate` | `BigNumberish` |
| `loanStartTime` | `BigNumberish` |
| `lentAsset` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Repayments.d.ts:435](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L435)

___

### initializeRepayment(uint64,uint256,uint256,uint256,address)

▸ **initializeRepayment(uint64,uint256,uint256,uint256,address)**(`numberOfTotalRepayments`, `repaymentInterval`, `borrowRate`, `loanStartTime`, `lentAsset`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `numberOfTotalRepayments` | `BigNumberish` |
| `repaymentInterval` | `BigNumberish` |
| `borrowRate` | `BigNumberish` |
| `loanStartTime` | `BigNumberish` |
| `lentAsset` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Repayments.d.ts:444](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L444)

___

### isGracePenaltyApplicable

▸ **isGracePenaltyApplicable**(`_poolID`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolID` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/Repayments.d.ts:453](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L453)

___

### isGracePenaltyApplicable(address)

▸ **isGracePenaltyApplicable(address)**(`_poolID`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolID` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/Repayments.d.ts:455](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L455)

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

[src/wrappers/Repayments.d.ts:130](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L130)

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

[src/wrappers/Repayments.d.ts:153](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L153)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Repayments`](wrappers_Repayments.Repayments.md)

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

[`Repayments`](wrappers_Repayments.Repayments.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/Repayments.d.ts:133](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L133)

▸ **off**(`eventName`, `listener`): [`Repayments`](wrappers_Repayments.Repayments.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Repayments`](wrappers_Repayments.Repayments.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/Repayments.d.ts:154](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L154)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Repayments`](wrappers_Repayments.Repayments.md)

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

[`Repayments`](wrappers_Repayments.Repayments.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/Repayments.d.ts:137](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L137)

▸ **on**(`eventName`, `listener`): [`Repayments`](wrappers_Repayments.Repayments.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Repayments`](wrappers_Repayments.Repayments.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/Repayments.d.ts:155](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L155)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Repayments`](wrappers_Repayments.Repayments.md)

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

[`Repayments`](wrappers_Repayments.Repayments.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/Repayments.d.ts:141](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L141)

▸ **once**(`eventName`, `listener`): [`Repayments`](wrappers_Repayments.Repayments.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Repayments`](wrappers_Repayments.Repayments.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/Repayments.d.ts:156](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L156)

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

[src/wrappers/Repayments.d.ts:160](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L160)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`Repayments`](wrappers_Repayments.Repayments.md)

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

[`Repayments`](wrappers_Repayments.Repayments.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/Repayments.d.ts:149](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L149)

▸ **removeAllListeners**(`eventName?`): [`Repayments`](wrappers_Repayments.Repayments.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`Repayments`](wrappers_Repayments.Repayments.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/Repayments.d.ts:158](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L158)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`Repayments`](wrappers_Repayments.Repayments.md)

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

[`Repayments`](wrappers_Repayments.Repayments.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/Repayments.d.ts:145](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L145)

▸ **removeListener**(`eventName`, `listener`): [`Repayments`](wrappers_Repayments.Repayments.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`Repayments`](wrappers_Repayments.Repayments.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/Repayments.d.ts:157](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L157)

___

### repay

▸ **repay**(`_poolID`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolID` | `string` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Repayments.d.ts:457](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L457)

___

### repay(address,uint256)

▸ **repay(address,uint256)**(`_poolID`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolID` | `string` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Repayments.d.ts:459](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L459)

___

### repayConstants

▸ **repayConstants**(`arg0`, `overrides?`): `Promise`<[`BigNumber`, `string`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `borrowRate`: `BigNumber` ; `gracePenaltyRate`: `BigNumber` ; `gracePeriodFraction`: `BigNumber` ; `loanDuration`: `BigNumber` ; `loanStartTime`: `BigNumber` ; `numberOfTotalRepayments`: `BigNumber` ; `repayAsset`: `string` ; `repaymentInterval`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `string`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `borrowRate`: `BigNumber` ; `gracePenaltyRate`: `BigNumber` ; `gracePeriodFraction`: `BigNumber` ; `loanDuration`: `BigNumber` ; `loanStartTime`: `BigNumber` ; `numberOfTotalRepayments`: `BigNumber` ; `repayAsset`: `string` ; `repaymentInterval`: `BigNumber`  }\>

#### Defined in

[src/wrappers/Repayments.d.ts:465](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L465)

___

### repayConstants(address)

▸ **repayConstants(address)**(`arg0`, `overrides?`): `Promise`<[`BigNumber`, `string`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `borrowRate`: `BigNumber` ; `gracePenaltyRate`: `BigNumber` ; `gracePeriodFraction`: `BigNumber` ; `loanDuration`: `BigNumber` ; `loanStartTime`: `BigNumber` ; `numberOfTotalRepayments`: `BigNumber` ; `repayAsset`: `string` ; `repaymentInterval`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `string`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `borrowRate`: `BigNumber` ; `gracePenaltyRate`: `BigNumber` ; `gracePeriodFraction`: `BigNumber` ; `loanDuration`: `BigNumber` ; `loanStartTime`: `BigNumber` ; `numberOfTotalRepayments`: `BigNumber` ; `repayAsset`: `string` ; `repaymentInterval`: `BigNumber`  }\>

#### Defined in

[src/wrappers/Repayments.d.ts:481](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L481)

___

### repayPrincipal

▸ **repayPrincipal**(`_poolID`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolID` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Repayments.d.ts:497](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L497)

___

### repayPrincipal(address)

▸ **repayPrincipal(address)**(`_poolID`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolID` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Repayments.d.ts:499](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L499)

___

### repayVariables

▸ **repayVariables**(`arg0`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `loanDurationCovered`: `BigNumber` ; `repaidAmount`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `loanDurationCovered`: `BigNumber` ; `repaidAmount`: `BigNumber`  }\>

#### Defined in

[src/wrappers/Repayments.d.ts:501](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L501)

___

### repayVariables(address)

▸ **repayVariables(address)**(`arg0`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `loanDurationCovered`: `BigNumber` ; `repaidAmount`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `loanDurationCovered`: `BigNumber` ; `repaidAmount`: `BigNumber`  }\>

#### Defined in

[src/wrappers/Repayments.d.ts:511](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L511)

___

### updateGracePenaltyRate

▸ **updateGracePenaltyRate**(`_gracePenaltyRate`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_gracePenaltyRate` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Repayments.d.ts:521](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L521)

___

### updateGracePenaltyRate(uint128)

▸ **updateGracePenaltyRate(uint128)**(`_gracePenaltyRate`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_gracePenaltyRate` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Repayments.d.ts:526](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L526)

___

### updateGracePeriodFraction

▸ **updateGracePeriodFraction**(`_gracePeriodFraction`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_gracePeriodFraction` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Repayments.d.ts:531](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L531)

___

### updateGracePeriodFraction(uint128)

▸ **updateGracePeriodFraction(uint128)**(`_gracePeriodFraction`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_gracePeriodFraction` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Repayments.d.ts:536](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L536)

___

### updatePoolFactory

▸ **updatePoolFactory**(`_poolFactory`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolFactory` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Repayments.d.ts:541](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L541)

___

### updatePoolFactory(address)

▸ **updatePoolFactory(address)**(`_poolFactory`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_poolFactory` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/Repayments.d.ts:543](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/wrappers/Repayments.d.ts#L543)

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
