[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/IRepayment](../modules/wrappers_IRepayment.md) / IRepayment

# Class: IRepayment

[wrappers/IRepayment](../modules/wrappers_IRepayment.md).IRepayment

## Hierarchy

- `Contract`

  ↳ **`IRepayment`**

## Table of contents

### Constructors

- [constructor](wrappers_IRepayment.IRepayment.md#constructor)

### Properties

- [\_deployedPromise](wrappers_IRepayment.IRepayment.md#_deployedpromise)
- [\_runningEvents](wrappers_IRepayment.IRepayment.md#_runningevents)
- [\_wrappedEmits](wrappers_IRepayment.IRepayment.md#_wrappedemits)
- [address](wrappers_IRepayment.IRepayment.md#address)
- [callStatic](wrappers_IRepayment.IRepayment.md#callstatic)
- [deployTransaction](wrappers_IRepayment.IRepayment.md#deploytransaction)
- [estimateGas](wrappers_IRepayment.IRepayment.md#estimategas)
- [filters](wrappers_IRepayment.IRepayment.md#filters)
- [functions](wrappers_IRepayment.IRepayment.md#functions)
- [interface](wrappers_IRepayment.IRepayment.md#interface)
- [populateTransaction](wrappers_IRepayment.IRepayment.md#populatetransaction)
- [provider](wrappers_IRepayment.IRepayment.md#provider)
- [resolvedAddress](wrappers_IRepayment.IRepayment.md#resolvedaddress)
- [signer](wrappers_IRepayment.IRepayment.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_IRepayment.IRepayment.md#_checkrunningevents)
- [\_deployed](wrappers_IRepayment.IRepayment.md#_deployed)
- [\_wrapEvent](wrappers_IRepayment.IRepayment.md#_wrapevent)
- [attach](wrappers_IRepayment.IRepayment.md#attach)
- [connect](wrappers_IRepayment.IRepayment.md#connect)
- [deployed](wrappers_IRepayment.IRepayment.md#deployed)
- [didBorrowerDefault](wrappers_IRepayment.IRepayment.md#didborrowerdefault)
- [didBorrowerDefault(address)](wrappers_IRepayment.IRepayment.md#didborrowerdefault(address))
- [emit](wrappers_IRepayment.IRepayment.md#emit)
- [fallback](wrappers_IRepayment.IRepayment.md#fallback)
- [getCurrentLoanInterval](wrappers_IRepayment.IRepayment.md#getcurrentloaninterval)
- [getCurrentLoanInterval(address)](wrappers_IRepayment.IRepayment.md#getcurrentloaninterval(address))
- [getGracePeriodFraction](wrappers_IRepayment.IRepayment.md#getgraceperiodfraction)
- [getGracePeriodFraction()](wrappers_IRepayment.IRepayment.md#getgraceperiodfraction())
- [getInterestCalculationVars](wrappers_IRepayment.IRepayment.md#getinterestcalculationvars)
- [getInterestCalculationVars(address)](wrappers_IRepayment.IRepayment.md#getinterestcalculationvars(address))
- [getNextInstalmentDeadline](wrappers_IRepayment.IRepayment.md#getnextinstalmentdeadline)
- [getNextInstalmentDeadline(address)](wrappers_IRepayment.IRepayment.md#getnextinstalmentdeadline(address))
- [getTotalRepaidAmount](wrappers_IRepayment.IRepayment.md#gettotalrepaidamount)
- [getTotalRepaidAmount(address)](wrappers_IRepayment.IRepayment.md#gettotalrepaidamount(address))
- [initializeRepayment](wrappers_IRepayment.IRepayment.md#initializerepayment)
- [initializeRepayment(uint64,uint256,uint256,uint256,address)](wrappers_IRepayment.IRepayment.md#initializerepayment(uint64,uint256,uint256,uint256,address))
- [listenerCount](wrappers_IRepayment.IRepayment.md#listenercount)
- [listeners](wrappers_IRepayment.IRepayment.md#listeners)
- [off](wrappers_IRepayment.IRepayment.md#off)
- [on](wrappers_IRepayment.IRepayment.md#on)
- [once](wrappers_IRepayment.IRepayment.md#once)
- [queryFilter](wrappers_IRepayment.IRepayment.md#queryfilter)
- [removeAllListeners](wrappers_IRepayment.IRepayment.md#removealllisteners)
- [removeListener](wrappers_IRepayment.IRepayment.md#removelistener)
- [getContractAddress](wrappers_IRepayment.IRepayment.md#getcontractaddress)
- [getInterface](wrappers_IRepayment.IRepayment.md#getinterface)
- [isIndexed](wrappers_IRepayment.IRepayment.md#isindexed)

## Constructors

### constructor

• **new IRepayment**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `getCurrentLoanInterval` | (`poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCurrentLoanInterval(address)` | (`poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getGracePeriodFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getGracePeriodFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getInterestCalculationVars` | (`poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `interestPerSecond`: `BigNumber` ; `loanDurationCovered`: `BigNumber`  }\> |
| `getInterestCalculationVars(address)` | (`poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `interestPerSecond`: `BigNumber` ; `loanDurationCovered`: `BigNumber`  }\> |
| `getNextInstalmentDeadline` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getNextInstalmentDeadline(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalRepaidAmount` | (`poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalRepaidAmount(address)` | (`poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `initializeRepayment` | (`numberOfTotalRepayments`: `BigNumberish`, `repaymentInterval`: `BigNumberish`, `borrowRate`: `BigNumberish`, `loanStartTime`: `BigNumberish`, `lentAsset`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initializeRepayment(uint64,uint256,uint256,uint256,address)` | (`numberOfTotalRepayments`: `BigNumberish`, `repaymentInterval`: `BigNumberish`, `borrowRate`: `BigNumberish`, `loanStartTime`: `BigNumberish`, `lentAsset`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/IRepayment.d.ts:241](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L241)

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
| `getCurrentLoanInterval` | (`poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCurrentLoanInterval(address)` | (`poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getGracePeriodFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getGracePeriodFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getInterestCalculationVars` | (`poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getInterestCalculationVars(address)` | (`poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getNextInstalmentDeadline` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getNextInstalmentDeadline(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalRepaidAmount` | (`poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalRepaidAmount(address)` | (`poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `initializeRepayment` | (`numberOfTotalRepayments`: `BigNumberish`, `repaymentInterval`: `BigNumberish`, `borrowRate`: `BigNumberish`, `loanStartTime`: `BigNumberish`, `lentAsset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initializeRepayment(uint64,uint256,uint256,uint256,address)` | (`numberOfTotalRepayments`: `BigNumberish`, `repaymentInterval`: `BigNumberish`, `borrowRate`: `BigNumberish`, `loanStartTime`: `BigNumberish`, `lentAsset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/IRepayment.d.ts:329](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L329)

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

[src/wrappers/IRepayment.d.ts:301](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L301)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `didBorrowerDefault` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `isBorrowerDefaulter`: `boolean`  }\> |
| `didBorrowerDefault(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `isBorrowerDefaulter`: `boolean`  }\> |
| `getCurrentLoanInterval` | (`poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `scaledCurrentInterval`: `BigNumber`  }\> |
| `getCurrentLoanInterval(address)` | (`poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `scaledCurrentInterval`: `BigNumber`  }\> |
| `getGracePeriodFraction` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `gracePeriod`: `BigNumber`  }\> |
| `getGracePeriodFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `gracePeriod`: `BigNumber`  }\> |
| `getInterestCalculationVars` | (`poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `interestPerSecond`: `BigNumber` ; `loanDurationCovered`: `BigNumber`  }\> |
| `getInterestCalculationVars(address)` | (`poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `interestPerSecond`: `BigNumber` ; `loanDurationCovered`: `BigNumber`  }\> |
| `getNextInstalmentDeadline` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nextInstalmentDeadlineTimestamp`: `BigNumber`  }\> |
| `getNextInstalmentDeadline(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nextInstalmentDeadlineTimestamp`: `BigNumber`  }\> |
| `getTotalRepaidAmount` | (`poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `amountRepaid`: `BigNumber`  }\> |
| `getTotalRepaidAmount(address)` | (`poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `amountRepaid`: `BigNumber`  }\> |
| `initializeRepayment` | (`numberOfTotalRepayments`: `BigNumberish`, `repaymentInterval`: `BigNumberish`, `borrowRate`: `BigNumberish`, `loanStartTime`: `BigNumberish`, `lentAsset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initializeRepayment(uint64,uint256,uint256,uint256,address)` | (`numberOfTotalRepayments`: `BigNumberish`, `repaymentInterval`: `BigNumberish`, `borrowRate`: `BigNumberish`, `loanStartTime`: `BigNumberish`, `lentAsset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/IRepayment.d.ts:114](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L114)

___

### interface

• **interface**: [`IRepaymentInterface`](../interfaces/wrappers_IRepayment.IRepaymentInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/IRepayment.d.ts:112](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L112)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `didBorrowerDefault` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `didBorrowerDefault(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCurrentLoanInterval` | (`poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCurrentLoanInterval(address)` | (`poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getGracePeriodFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getGracePeriodFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getInterestCalculationVars` | (`poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getInterestCalculationVars(address)` | (`poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getNextInstalmentDeadline` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getNextInstalmentDeadline(address)` | (`_poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTotalRepaidAmount` | (`poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTotalRepaidAmount(address)` | (`poolID`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `initializeRepayment` | (`numberOfTotalRepayments`: `BigNumberish`, `repaymentInterval`: `BigNumberish`, `borrowRate`: `BigNumberish`, `loanStartTime`: `BigNumberish`, `lentAsset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initializeRepayment(uint64,uint256,uint256,uint256,address)` | (`numberOfTotalRepayments`: `BigNumberish`, `repaymentInterval`: `BigNumberish`, `borrowRate`: `BigNumberish`, `loanStartTime`: `BigNumberish`, `lentAsset`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/IRepayment.d.ts:373](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L373)

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

▸ **attach**(`addressOrName`): [`IRepayment`](wrappers_IRepayment.IRepayment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IRepayment`](wrappers_IRepayment.IRepayment.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/IRepayment.d.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L73)

___

### connect

▸ **connect**(`signerOrProvider`): [`IRepayment`](wrappers_IRepayment.IRepayment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IRepayment`](wrappers_IRepayment.IRepayment.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/IRepayment.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L72)

___

### deployed

▸ **deployed**(): `Promise`<[`IRepayment`](wrappers_IRepayment.IRepayment.md)\>

#### Returns

`Promise`<[`IRepayment`](wrappers_IRepayment.IRepayment.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/IRepayment.d.ts:74](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L74)

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

[src/wrappers/IRepayment.d.ts:183](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L183)

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

[src/wrappers/IRepayment.d.ts:185](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L185)

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

### getCurrentLoanInterval

▸ **getCurrentLoanInterval**(`poolID`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolID` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IRepayment.d.ts:187](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L187)

___

### getCurrentLoanInterval(address)

▸ **getCurrentLoanInterval(address)**(`poolID`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolID` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IRepayment.d.ts:189](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L189)

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

[src/wrappers/IRepayment.d.ts:191](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L191)

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

[src/wrappers/IRepayment.d.ts:193](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L193)

___

### getInterestCalculationVars

▸ **getInterestCalculationVars**(`poolID`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `interestPerSecond`: `BigNumber` ; `loanDurationCovered`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolID` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `interestPerSecond`: `BigNumber` ; `loanDurationCovered`: `BigNumber`  }\>

#### Defined in

[src/wrappers/IRepayment.d.ts:195](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L195)

___

### getInterestCalculationVars(address)

▸ **getInterestCalculationVars(address)**(`poolID`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `interestPerSecond`: `BigNumber` ; `loanDurationCovered`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolID` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `interestPerSecond`: `BigNumber` ; `loanDurationCovered`: `BigNumber`  }\>

#### Defined in

[src/wrappers/IRepayment.d.ts:205](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L205)

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

[src/wrappers/IRepayment.d.ts:215](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L215)

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

[src/wrappers/IRepayment.d.ts:217](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L217)

___

### getTotalRepaidAmount

▸ **getTotalRepaidAmount**(`poolID`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolID` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IRepayment.d.ts:219](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L219)

___

### getTotalRepaidAmount(address)

▸ **getTotalRepaidAmount(address)**(`poolID`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolID` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/IRepayment.d.ts:221](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L221)

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

[src/wrappers/IRepayment.d.ts:223](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L223)

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

[src/wrappers/IRepayment.d.ts:232](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L232)

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

[src/wrappers/IRepayment.d.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L76)

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

[src/wrappers/IRepayment.d.ts:99](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L99)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IRepayment`](wrappers_IRepayment.IRepayment.md)

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

[`IRepayment`](wrappers_IRepayment.IRepayment.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IRepayment.d.ts:79](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L79)

▸ **off**(`eventName`, `listener`): [`IRepayment`](wrappers_IRepayment.IRepayment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IRepayment`](wrappers_IRepayment.IRepayment.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/IRepayment.d.ts:100](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L100)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IRepayment`](wrappers_IRepayment.IRepayment.md)

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

[`IRepayment`](wrappers_IRepayment.IRepayment.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IRepayment.d.ts:83](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L83)

▸ **on**(`eventName`, `listener`): [`IRepayment`](wrappers_IRepayment.IRepayment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IRepayment`](wrappers_IRepayment.IRepayment.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/IRepayment.d.ts:101](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L101)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IRepayment`](wrappers_IRepayment.IRepayment.md)

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

[`IRepayment`](wrappers_IRepayment.IRepayment.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IRepayment.d.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L87)

▸ **once**(`eventName`, `listener`): [`IRepayment`](wrappers_IRepayment.IRepayment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IRepayment`](wrappers_IRepayment.IRepayment.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/IRepayment.d.ts:102](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L102)

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

[src/wrappers/IRepayment.d.ts:106](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L106)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`IRepayment`](wrappers_IRepayment.IRepayment.md)

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

[`IRepayment`](wrappers_IRepayment.IRepayment.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IRepayment.d.ts:95](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L95)

▸ **removeAllListeners**(`eventName?`): [`IRepayment`](wrappers_IRepayment.IRepayment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IRepayment`](wrappers_IRepayment.IRepayment.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/IRepayment.d.ts:104](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L104)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IRepayment`](wrappers_IRepayment.IRepayment.md)

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

[`IRepayment`](wrappers_IRepayment.IRepayment.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IRepayment.d.ts:91](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L91)

▸ **removeListener**(`eventName`, `listener`): [`IRepayment`](wrappers_IRepayment.IRepayment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IRepayment`](wrappers_IRepayment.IRepayment.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/IRepayment.d.ts:103](https://github.com/sublime-finance/sublime-sdk/blob/c854fc6/src/wrappers/IRepayment.d.ts#L103)

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
