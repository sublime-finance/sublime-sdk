[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/IPool](../modules/wrappers_IPool.md) / IPool

# Class: IPool

[wrappers/IPool](../modules/wrappers_IPool.md).IPool

## Hierarchy

- `Contract`

  ↳ **`IPool`**

## Table of contents

### Constructors

- [constructor](wrappers_IPool.IPool.md#constructor)

### Properties

- [\_deployedPromise](wrappers_IPool.IPool.md#_deployedpromise)
- [\_runningEvents](wrappers_IPool.IPool.md#_runningevents)
- [\_wrappedEmits](wrappers_IPool.IPool.md#_wrappedemits)
- [address](wrappers_IPool.IPool.md#address)
- [callStatic](wrappers_IPool.IPool.md#callstatic)
- [deployTransaction](wrappers_IPool.IPool.md#deploytransaction)
- [estimateGas](wrappers_IPool.IPool.md#estimategas)
- [filters](wrappers_IPool.IPool.md#filters)
- [functions](wrappers_IPool.IPool.md#functions)
- [interface](wrappers_IPool.IPool.md#interface)
- [populateTransaction](wrappers_IPool.IPool.md#populatetransaction)
- [provider](wrappers_IPool.IPool.md#provider)
- [resolvedAddress](wrappers_IPool.IPool.md#resolvedaddress)
- [signer](wrappers_IPool.IPool.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_IPool.IPool.md#_checkrunningevents)
- [\_deployed](wrappers_IPool.IPool.md#_deployed)
- [\_wrapEvent](wrappers_IPool.IPool.md#_wrapevent)
- [addCollateralInMarginCall](wrappers_IPool.IPool.md#addcollateralinmargincall)
- [addCollateralInMarginCall(address,uint256,bool)](wrappers_IPool.IPool.md#addcollateralinmargincall(address,uint256,bool))
- [attach](wrappers_IPool.IPool.md#attach)
- [borrower](wrappers_IPool.IPool.md#borrower)
- [borrower()](wrappers_IPool.IPool.md#borrower())
- [closeLoan](wrappers_IPool.IPool.md#closeloan)
- [closeLoan()](wrappers_IPool.IPool.md#closeloan())
- [connect](wrappers_IPool.IPool.md#connect)
- [deployed](wrappers_IPool.IPool.md#deployed)
- [depositCollateral](wrappers_IPool.IPool.md#depositcollateral)
- [depositCollateral(uint256,bool)](wrappers_IPool.IPool.md#depositcollateral(uint256,bool))
- [emit](wrappers_IPool.IPool.md#emit)
- [fallback](wrappers_IPool.IPool.md#fallback)
- [getBalanceDetails](wrappers_IPool.IPool.md#getbalancedetails)
- [getBalanceDetails(address)](wrappers_IPool.IPool.md#getbalancedetails(address))
- [getLoanStatus](wrappers_IPool.IPool.md#getloanstatus)
- [getLoanStatus()](wrappers_IPool.IPool.md#getloanstatus())
- [getMarginCallEndTime](wrappers_IPool.IPool.md#getmargincallendtime)
- [getMarginCallEndTime(address)](wrappers_IPool.IPool.md#getmargincallendtime(address))
- [initialize](wrappers_IPool.IPool.md#initialize)
- [initialize(uint256,uint256,address,address,address,uint256,uint64,uint64,address,uint256,bool,address,uint256,uint256)](wrappers_IPool.IPool.md#initialize(uint256,uint256,address,address,address,uint256,uint64,uint64,address,uint256,bool,address,uint256,uint256))
- [lend](wrappers_IPool.IPool.md#lend)
- [lend(address,uint256,address,bool)](wrappers_IPool.IPool.md#lend(address,uint256,address,bool))
- [listenerCount](wrappers_IPool.IPool.md#listenercount)
- [listeners](wrappers_IPool.IPool.md#listeners)
- [off](wrappers_IPool.IPool.md#off)
- [on](wrappers_IPool.IPool.md#on)
- [once](wrappers_IPool.IPool.md#once)
- [queryFilter](wrappers_IPool.IPool.md#queryfilter)
- [removeAllListeners](wrappers_IPool.IPool.md#removealllisteners)
- [removeListener](wrappers_IPool.IPool.md#removelistener)
- [totalSupply](wrappers_IPool.IPool.md#totalsupply)
- [totalSupply()](wrappers_IPool.IPool.md#totalsupply())
- [withdrawBorrowedAmount](wrappers_IPool.IPool.md#withdrawborrowedamount)
- [withdrawBorrowedAmount()](wrappers_IPool.IPool.md#withdrawborrowedamount())
- [getContractAddress](wrappers_IPool.IPool.md#getcontractaddress)
- [getInterface](wrappers_IPool.IPool.md#getinterface)
- [isIndexed](wrappers_IPool.IPool.md#isindexed)

## Constructors

### constructor

• **new IPool**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `addCollateralInMarginCall` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_isDirect`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `addCollateralInMarginCall(address,uint256,bool)` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_isDirect`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `borrower` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `borrower()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `closeLoan` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `closeLoan()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `depositCollateral` | (`_amount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `depositCollateral(uint256,bool)` | (`_amount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getBalanceDetails` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `lenderPoolTokens`: `BigNumber` ; `totalPoolTokens`: `BigNumber`  }\> |
| `getBalanceDetails(address)` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `lenderPoolTokens`: `BigNumber` ; `totalPoolTokens`: `BigNumber`  }\> |
| `getLoanStatus` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getLoanStatus()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMarginCallEndTime` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMarginCallEndTime(address)` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `initialize` | (`_borrowAmountRequested`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_borrower`: `string`, `_borrowAsset`: `string`, `_collateralAsset`: `string`, `_idealCollateralRatio`: `BigNumberish`, `_repaymentInterval`: `BigNumberish`, `_noOfRepaymentIntervals`: `BigNumberish`, `_poolSavingsStrategy`: `string`, `_collateralAmount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `_lenderVerifier`: `string`, `_loanWithdrawalDuration`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialize(uint256,uint256,address,address,address,uint256,uint64,uint64,address,uint256,bool,address,uint256,uint256)` | (`_borrowAmountRequested`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_borrower`: `string`, `_borrowAsset`: `string`, `_collateralAsset`: `string`, `_idealCollateralRatio`: `BigNumberish`, `_repaymentInterval`: `BigNumberish`, `_noOfRepaymentIntervals`: `BigNumberish`, `_poolSavingsStrategy`: `string`, `_collateralAmount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `_lenderVerifier`: `string`, `_loanWithdrawalDuration`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `lend` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_strategy`: `string`, `_fromSavingsAccount`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `lend(address,uint256,address,bool)` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_strategy`: `string`, `_fromSavingsAccount`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `withdrawBorrowedAmount` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdrawBorrowedAmount()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/IPool.d.ts:403](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L403)

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
| `addCollateralInMarginCall` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_isDirect`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `addCollateralInMarginCall(address,uint256,bool)` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_isDirect`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `borrower` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `borrower()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `closeLoan` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `closeLoan()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `depositCollateral` | (`_amount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `depositCollateral(uint256,bool)` | (`_amount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getBalanceDetails` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getBalanceDetails(address)` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getLoanStatus` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getLoanStatus()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMarginCallEndTime` | (`_lender`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getMarginCallEndTime(address)` | (`_lender`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initialize` | (`_borrowAmountRequested`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_borrower`: `string`, `_borrowAsset`: `string`, `_collateralAsset`: `string`, `_idealCollateralRatio`: `BigNumberish`, `_repaymentInterval`: `BigNumberish`, `_noOfRepaymentIntervals`: `BigNumberish`, `_poolSavingsStrategy`: `string`, `_collateralAmount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `_lenderVerifier`: `string`, `_loanWithdrawalDuration`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initialize(uint256,uint256,address,address,address,uint256,uint64,uint64,address,uint256,bool,address,uint256,uint256)` | (`_borrowAmountRequested`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_borrower`: `string`, `_borrowAsset`: `string`, `_collateralAsset`: `string`, `_idealCollateralRatio`: `BigNumberish`, `_repaymentInterval`: `BigNumberish`, `_noOfRepaymentIntervals`: `BigNumberish`, `_poolSavingsStrategy`: `string`, `_collateralAmount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `_lenderVerifier`: `string`, `_loanWithdrawalDuration`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `lend` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_strategy`: `string`, `_fromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `lend(address,uint256,address,bool)` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_strategy`: `string`, `_fromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `withdrawBorrowedAmount` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawBorrowedAmount()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/IPool.d.ts:571](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L571)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AmountBorrowed` | (`amount`: ``null``, `protocolFee`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `BigNumber`], { `amount`: `BigNumber` ; `protocolFee`: `BigNumber`  }\> |
| `CollateralAdded` | (`borrower`: `string`, `amount`: ``null``, `sharesReceived`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `BigNumber`, `BigNumber`], { `amount`: `BigNumber` ; `borrower`: `string` ; `sharesReceived`: `BigNumber`  }\> |
| `CollateralWithdrawn` | (`borrower`: `string`, `amount`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `BigNumber`], { `amount`: `BigNumber` ; `borrower`: `string`  }\> |
| `LenderLiquidated` | (`liquidator`: `string`, `lender`: `string`, `_tokenReceived`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `BigNumber`], { `_tokenReceived`: `BigNumber` ; `lender`: `string` ; `liquidator`: `string`  }\> |
| `LiquiditySupplied` | (`amountSupplied`: ``null``, `lenderAddress`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `string`], { `amountSupplied`: `BigNumber` ; `lenderAddress`: `string`  }\> |
| `LiquidityWithdrawn` | (`amount`: ``null``, `lenderAddress`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `string`], { `amount`: `BigNumber` ; `lenderAddress`: `string`  }\> |
| `MarginCallCollateralAdded` | (`borrower`: `string`, `lender`: `string`, `amount`: ``null``, `sharesReceived`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `BigNumber`, `BigNumber`], { `amount`: `BigNumber` ; `borrower`: `string` ; `lender`: `string` ; `sharesReceived`: `BigNumber`  }\> |
| `MarginCalled` | (`lenderAddress`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `lenderAddress`: `string`  }\> |
| `PoolCancelled` | () => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[], {}\> |
| `PoolClosed` | () => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[], {}\> |
| `PoolLiquidated` | (`liquidator`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`], { `liquidator`: `string`  }\> |
| `PoolTerminated` | () => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[], {}\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/IPool.d.ts:512](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L512)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addCollateralInMarginCall` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_isDirect`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `addCollateralInMarginCall(address,uint256,bool)` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_isDirect`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `borrower` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `borrower()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `closeLoan` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `closeLoan()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `depositCollateral` | (`_amount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `depositCollateral(uint256,bool)` | (`_amount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getBalanceDetails` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `lenderPoolTokens`: `BigNumber` ; `totalPoolTokens`: `BigNumber`  }\> |
| `getBalanceDetails(address)` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `lenderPoolTokens`: `BigNumber` ; `totalPoolTokens`: `BigNumber`  }\> |
| `getLoanStatus` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `loanStatus`: `BigNumber`  }\> |
| `getLoanStatus()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `loanStatus`: `BigNumber`  }\> |
| `getMarginCallEndTime` | (`_lender`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getMarginCallEndTime(address)` | (`_lender`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialize` | (`_borrowAmountRequested`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_borrower`: `string`, `_borrowAsset`: `string`, `_collateralAsset`: `string`, `_idealCollateralRatio`: `BigNumberish`, `_repaymentInterval`: `BigNumberish`, `_noOfRepaymentIntervals`: `BigNumberish`, `_poolSavingsStrategy`: `string`, `_collateralAmount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `_lenderVerifier`: `string`, `_loanWithdrawalDuration`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialize(uint256,uint256,address,address,address,uint256,uint64,uint64,address,uint256,bool,address,uint256,uint256)` | (`_borrowAmountRequested`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_borrower`: `string`, `_borrowAsset`: `string`, `_collateralAsset`: `string`, `_idealCollateralRatio`: `BigNumberish`, `_repaymentInterval`: `BigNumberish`, `_noOfRepaymentIntervals`: `BigNumberish`, `_poolSavingsStrategy`: `string`, `_collateralAmount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `_lenderVerifier`: `string`, `_loanWithdrawalDuration`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `lend` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_strategy`: `string`, `_fromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `lend(address,uint256,address,bool)` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_strategy`: `string`, `_fromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `totalPoolTokens`: `BigNumber`  }\> |
| `totalSupply()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `totalPoolTokens`: `BigNumber`  }\> |
| `withdrawBorrowedAmount` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawBorrowedAmount()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/IPool.d.ts:151](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L151)

___

### interface

• **interface**: [`IPoolInterface`](../interfaces/wrappers_IPool.IPoolInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/IPool.d.ts:149](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L149)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addCollateralInMarginCall` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_isDirect`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `addCollateralInMarginCall(address,uint256,bool)` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_isDirect`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `borrower` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `borrower()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `closeLoan` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `closeLoan()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `depositCollateral` | (`_amount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `depositCollateral(uint256,bool)` | (`_amount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getBalanceDetails` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getBalanceDetails(address)` | (`_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getLoanStatus` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getLoanStatus()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMarginCallEndTime` | (`_lender`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getMarginCallEndTime(address)` | (`_lender`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialize` | (`_borrowAmountRequested`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_borrower`: `string`, `_borrowAsset`: `string`, `_collateralAsset`: `string`, `_idealCollateralRatio`: `BigNumberish`, `_repaymentInterval`: `BigNumberish`, `_noOfRepaymentIntervals`: `BigNumberish`, `_poolSavingsStrategy`: `string`, `_collateralAmount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `_lenderVerifier`: `string`, `_loanWithdrawalDuration`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialize(uint256,uint256,address,address,address,uint256,uint64,uint64,address,uint256,bool,address,uint256,uint256)` | (`_borrowAmountRequested`: `BigNumberish`, `_borrowRate`: `BigNumberish`, `_borrower`: `string`, `_borrowAsset`: `string`, `_collateralAsset`: `string`, `_idealCollateralRatio`: `BigNumberish`, `_repaymentInterval`: `BigNumberish`, `_noOfRepaymentIntervals`: `BigNumberish`, `_poolSavingsStrategy`: `string`, `_collateralAmount`: `BigNumberish`, `_transferFromSavingsAccount`: `boolean`, `_lenderVerifier`: `string`, `_loanWithdrawalDuration`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `lend` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_strategy`: `string`, `_fromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `lend(address,uint256,address,bool)` | (`_lender`: `string`, `_amount`: `BigNumberish`, `_strategy`: `string`, `_fromSavingsAccount`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `withdrawBorrowedAmount` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawBorrowedAmount()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/IPool.d.ts:679](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L679)

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

▸ **addCollateralInMarginCall**(`_lender`, `_amount`, `_isDirect`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_lender` | `string` |
| `_amount` | `BigNumberish` |
| `_isDirect` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IPool.d.ts:278](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L278)

___

### addCollateralInMarginCall(address,uint256,bool)

▸ **addCollateralInMarginCall(address,uint256,bool)**(`_lender`, `_amount`, `_isDirect`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_lender` | `string` |
| `_amount` | `BigNumberish` |
| `_isDirect` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IPool.d.ts:285](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L285)

___

### attach

▸ **attach**(`addressOrName`): [`IPool`](wrappers_IPool.IPool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IPool`](wrappers_IPool.IPool.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/IPool.d.ts:110](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L110)

___

### borrower

▸ **borrower**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IPool.d.ts:292](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L292)

___

### borrower()

▸ **borrower()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IPool.d.ts:294](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L294)

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

[src/wrappers/IPool.d.ts:296](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L296)

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

[src/wrappers/IPool.d.ts:298](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L298)

___

### connect

▸ **connect**(`signerOrProvider`): [`IPool`](wrappers_IPool.IPool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IPool`](wrappers_IPool.IPool.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/IPool.d.ts:109](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L109)

___

### deployed

▸ **deployed**(): `Promise`<[`IPool`](wrappers_IPool.IPool.md)\>

#### Returns

`Promise`<[`IPool`](wrappers_IPool.IPool.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/IPool.d.ts:111](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L111)

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

[src/wrappers/IPool.d.ts:300](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L300)

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

[src/wrappers/IPool.d.ts:306](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L306)

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

▸ **getBalanceDetails**(`_lender`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `lenderPoolTokens`: `BigNumber` ; `totalPoolTokens`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_lender` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `lenderPoolTokens`: `BigNumber` ; `totalPoolTokens`: `BigNumber`  }\>

#### Defined in

[src/wrappers/IPool.d.ts:312](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L312)

___

### getBalanceDetails(address)

▸ **getBalanceDetails(address)**(`_lender`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `lenderPoolTokens`: `BigNumber` ; `totalPoolTokens`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_lender` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `lenderPoolTokens`: `BigNumber` ; `totalPoolTokens`: `BigNumber`  }\>

#### Defined in

[src/wrappers/IPool.d.ts:322](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L322)

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

[src/wrappers/IPool.d.ts:332](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L332)

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

[src/wrappers/IPool.d.ts:334](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L334)

___

### getMarginCallEndTime

▸ **getMarginCallEndTime**(`_lender`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_lender` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IPool.d.ts:336](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L336)

___

### getMarginCallEndTime(address)

▸ **getMarginCallEndTime(address)**(`_lender`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_lender` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/IPool.d.ts:338](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L338)

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

[src/wrappers/IPool.d.ts:343](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L343)

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

[src/wrappers/IPool.d.ts:361](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L361)

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

[src/wrappers/IPool.d.ts:379](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L379)

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

[src/wrappers/IPool.d.ts:387](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L387)

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

[src/wrappers/IPool.d.ts:113](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L113)

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

[src/wrappers/IPool.d.ts:136](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L136)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IPool`](wrappers_IPool.IPool.md)

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

[`IPool`](wrappers_IPool.IPool.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IPool.d.ts:116](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L116)

▸ **off**(`eventName`, `listener`): [`IPool`](wrappers_IPool.IPool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IPool`](wrappers_IPool.IPool.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IPool.d.ts:137](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L137)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IPool`](wrappers_IPool.IPool.md)

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

[`IPool`](wrappers_IPool.IPool.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IPool.d.ts:120](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L120)

▸ **on**(`eventName`, `listener`): [`IPool`](wrappers_IPool.IPool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IPool`](wrappers_IPool.IPool.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IPool.d.ts:138](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L138)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IPool`](wrappers_IPool.IPool.md)

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

[`IPool`](wrappers_IPool.IPool.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IPool.d.ts:124](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L124)

▸ **once**(`eventName`, `listener`): [`IPool`](wrappers_IPool.IPool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IPool`](wrappers_IPool.IPool.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IPool.d.ts:139](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L139)

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

[src/wrappers/IPool.d.ts:143](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L143)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`IPool`](wrappers_IPool.IPool.md)

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

[`IPool`](wrappers_IPool.IPool.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IPool.d.ts:132](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L132)

▸ **removeAllListeners**(`eventName?`): [`IPool`](wrappers_IPool.IPool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IPool`](wrappers_IPool.IPool.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IPool.d.ts:141](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L141)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IPool`](wrappers_IPool.IPool.md)

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

[`IPool`](wrappers_IPool.IPool.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IPool.d.ts:128](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L128)

▸ **removeListener**(`eventName`, `listener`): [`IPool`](wrappers_IPool.IPool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IPool`](wrappers_IPool.IPool.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IPool.d.ts:140](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L140)

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

[src/wrappers/IPool.d.ts:395](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L395)

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

[src/wrappers/IPool.d.ts:397](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L397)

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

[src/wrappers/IPool.d.ts:399](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L399)

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

[src/wrappers/IPool.d.ts:401](https://github.com/sublime-finance/sublime-sdk/blob/2f42fde/src/wrappers/IPool.d.ts#L401)

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
