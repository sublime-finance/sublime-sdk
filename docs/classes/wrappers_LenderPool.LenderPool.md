[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/LenderPool](../modules/wrappers_LenderPool.md) / LenderPool

# Class: LenderPool

[wrappers/LenderPool](../modules/wrappers_LenderPool.md).LenderPool

## Hierarchy

- `Contract`

  ↳ **`LenderPool`**

## Table of contents

### Constructors

- [constructor](wrappers_LenderPool.LenderPool.md#constructor)

### Properties

- [\_deployedPromise](wrappers_LenderPool.LenderPool.md#_deployedpromise)
- [\_runningEvents](wrappers_LenderPool.LenderPool.md#_runningevents)
- [\_wrappedEmits](wrappers_LenderPool.LenderPool.md#_wrappedemits)
- [address](wrappers_LenderPool.LenderPool.md#address)
- [callStatic](wrappers_LenderPool.LenderPool.md#callstatic)
- [deployTransaction](wrappers_LenderPool.LenderPool.md#deploytransaction)
- [estimateGas](wrappers_LenderPool.LenderPool.md#estimategas)
- [filters](wrappers_LenderPool.LenderPool.md#filters)
- [functions](wrappers_LenderPool.LenderPool.md#functions)
- [interface](wrappers_LenderPool.LenderPool.md#interface)
- [populateTransaction](wrappers_LenderPool.LenderPool.md#populatetransaction)
- [provider](wrappers_LenderPool.LenderPool.md#provider)
- [resolvedAddress](wrappers_LenderPool.LenderPool.md#resolvedaddress)
- [signer](wrappers_LenderPool.LenderPool.md#signer)

### Methods

- [POOLED\_CREDIT\_LINE](wrappers_LenderPool.LenderPool.md#pooled_credit_line)
- [POOLED\_CREDIT\_LINE()](wrappers_LenderPool.LenderPool.md#pooled_credit_line())
- [SAVINGS\_ACCOUNT](wrappers_LenderPool.LenderPool.md#savings_account)
- [SAVINGS\_ACCOUNT()](wrappers_LenderPool.LenderPool.md#savings_account())
- [VERIFICATION](wrappers_LenderPool.LenderPool.md#verification)
- [VERIFICATION()](wrappers_LenderPool.LenderPool.md#verification())
- [\_checkRunningEvents](wrappers_LenderPool.LenderPool.md#_checkrunningevents)
- [\_deployed](wrappers_LenderPool.LenderPool.md#_deployed)
- [\_wrapEvent](wrappers_LenderPool.LenderPool.md#_wrapevent)
- [attach](wrappers_LenderPool.LenderPool.md#attach)
- [balanceOf](wrappers_LenderPool.LenderPool.md#balanceof)
- [balanceOf(address,uint256)](wrappers_LenderPool.LenderPool.md#balanceof(address,uint256))
- [balanceOfBatch](wrappers_LenderPool.LenderPool.md#balanceofbatch)
- [balanceOfBatch(address[],uint256[])](wrappers_LenderPool.LenderPool.md#balanceofbatch(address[],uint256[]))
- [borrowed](wrappers_LenderPool.LenderPool.md#borrowed)
- [borrowed(uint256,uint256)](wrappers_LenderPool.LenderPool.md#borrowed(uint256,uint256))
- [calculatePrincipalWithdrawable](wrappers_LenderPool.LenderPool.md#calculateprincipalwithdrawable)
- [calculatePrincipalWithdrawable(uint256,address)](wrappers_LenderPool.LenderPool.md#calculateprincipalwithdrawable(uint256,address))
- [connect](wrappers_LenderPool.LenderPool.md#connect)
- [create](wrappers_LenderPool.LenderPool.md#create)
- [create(uint256,address,address,address,uint256,uint256,uint256,bool)](wrappers_LenderPool.LenderPool.md#create(uint256,address,address,address,uint256,uint256,uint256,bool))
- [deployed](wrappers_LenderPool.LenderPool.md#deployed)
- [emit](wrappers_LenderPool.LenderPool.md#emit)
- [fallback](wrappers_LenderPool.LenderPool.md#fallback)
- [getLenderInfo](wrappers_LenderPool.LenderPool.md#getlenderinfo)
- [getLenderInfo(uint256,address)](wrappers_LenderPool.LenderPool.md#getlenderinfo(uint256,address))
- [getLenderInterest](wrappers_LenderPool.LenderPool.md#getlenderinterest)
- [getLenderInterest(uint256,address)](wrappers_LenderPool.LenderPool.md#getlenderinterest(uint256,address))
- [initialize](wrappers_LenderPool.LenderPool.md#initialize)
- [initialize()](wrappers_LenderPool.LenderPool.md#initialize())
- [isApprovedForAll](wrappers_LenderPool.LenderPool.md#isapprovedforall)
- [isApprovedForAll(address,address)](wrappers_LenderPool.LenderPool.md#isapprovedforall(address,address))
- [lend](wrappers_LenderPool.LenderPool.md#lend)
- [lend(uint256,uint256)](wrappers_LenderPool.LenderPool.md#lend(uint256,uint256))
- [liquidate](wrappers_LenderPool.LenderPool.md#liquidate)
- [liquidate(uint256,bool)](wrappers_LenderPool.LenderPool.md#liquidate(uint256,bool))
- [listenerCount](wrappers_LenderPool.LenderPool.md#listenercount)
- [listeners](wrappers_LenderPool.LenderPool.md#listeners)
- [off](wrappers_LenderPool.LenderPool.md#off)
- [on](wrappers_LenderPool.LenderPool.md#on)
- [once](wrappers_LenderPool.LenderPool.md#once)
- [pooledCLConstants](wrappers_LenderPool.LenderPool.md#pooledclconstants)
- [pooledCLConstants(uint256)](wrappers_LenderPool.LenderPool.md#pooledclconstants(uint256))
- [pooledCLVariables](wrappers_LenderPool.LenderPool.md#pooledclvariables)
- [pooledCLVariables(uint256)](wrappers_LenderPool.LenderPool.md#pooledclvariables(uint256))
- [queryFilter](wrappers_LenderPool.LenderPool.md#queryfilter)
- [removeAllListeners](wrappers_LenderPool.LenderPool.md#removealllisteners)
- [removeListener](wrappers_LenderPool.LenderPool.md#removelistener)
- [repaid](wrappers_LenderPool.LenderPool.md#repaid)
- [repaid(uint256,uint256,uint256)](wrappers_LenderPool.LenderPool.md#repaid(uint256,uint256,uint256))
- [requestCancelled](wrappers_LenderPool.LenderPool.md#requestcancelled)
- [requestCancelled(uint256)](wrappers_LenderPool.LenderPool.md#requestcancelled(uint256))
- [safeBatchTransferFrom](wrappers_LenderPool.LenderPool.md#safebatchtransferfrom)
- [safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)](wrappers_LenderPool.LenderPool.md#safebatchtransferfrom(address,address,uint256[],uint256[],bytes))
- [safeTransferFrom](wrappers_LenderPool.LenderPool.md#safetransferfrom)
- [safeTransferFrom(address,address,uint256,uint256,bytes)](wrappers_LenderPool.LenderPool.md#safetransferfrom(address,address,uint256,uint256,bytes))
- [setApprovalForAll](wrappers_LenderPool.LenderPool.md#setapprovalforall)
- [setApprovalForAll(address,bool)](wrappers_LenderPool.LenderPool.md#setapprovalforall(address,bool))
- [start](wrappers_LenderPool.LenderPool.md#start)
- [start(uint256)](wrappers_LenderPool.LenderPool.md#start(uint256))
- [supportsInterface](wrappers_LenderPool.LenderPool.md#supportsinterface)
- [supportsInterface(bytes4)](wrappers_LenderPool.LenderPool.md#supportsinterface(bytes4))
- [terminate](wrappers_LenderPool.LenderPool.md#terminate)
- [terminate(uint256,address)](wrappers_LenderPool.LenderPool.md#terminate(uint256,address))
- [totalSupply](wrappers_LenderPool.LenderPool.md#totalsupply)
- [totalSupply(uint256)](wrappers_LenderPool.LenderPool.md#totalsupply(uint256))
- [uri](wrappers_LenderPool.LenderPool.md#uri)
- [uri(uint256)](wrappers_LenderPool.LenderPool.md#uri(uint256))
- [withdrawInterest](wrappers_LenderPool.LenderPool.md#withdrawinterest)
- [withdrawInterest(uint256)](wrappers_LenderPool.LenderPool.md#withdrawinterest(uint256))
- [withdrawLiquidatedCollateral](wrappers_LenderPool.LenderPool.md#withdrawliquidatedcollateral)
- [withdrawLiquidatedCollateral(uint256)](wrappers_LenderPool.LenderPool.md#withdrawliquidatedcollateral(uint256))
- [withdrawLiquidity](wrappers_LenderPool.LenderPool.md#withdrawliquidity)
- [withdrawLiquidity(uint256)](wrappers_LenderPool.LenderPool.md#withdrawliquidity(uint256))
- [getContractAddress](wrappers_LenderPool.LenderPool.md#getcontractaddress)
- [getInterface](wrappers_LenderPool.LenderPool.md#getinterface)
- [isIndexed](wrappers_LenderPool.LenderPool.md#isindexed)

## Constructors

### constructor

• **new LenderPool**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `POOLED_CREDIT_LINE` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `POOLED_CREDIT_LINE()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `SAVINGS_ACCOUNT` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `SAVINGS_ACCOUNT()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `VERIFICATION` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `VERIFICATION()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `balanceOf` | (`account`: `string`, `id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `balanceOf(address,uint256)` | (`account`: `string`, `id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `balanceOfBatch` | (`accounts`: `string`[], `ids`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`[]\> |
| `balanceOfBatch(address[],uint256[])` | (`accounts`: `string`[], `ids`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`[]\> |
| `borrowed` | (`_id`: `BigNumberish`, `_sharesBorrowed`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `borrowed(uint256,uint256)` | (`_id`: `BigNumberish`, `_sharesBorrowed`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `calculatePrincipalWithdrawable` | (`_id`: `BigNumberish`, `_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculatePrincipalWithdrawable(uint256,address)` | (`_id`: `BigNumberish`, `_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `create` | (`_id`: `BigNumberish`, `_lenderVerifier`: `string`, `_borrowAsset`: `string`, `_borrowAssetStrategy`: `string`, `_borrowLimit`: `BigNumberish`, `_minBorrowAmount`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `_areTokensTransferable`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `create(uint256,address,address,address,uint256,uint256,uint256,bool)` | (`_id`: `BigNumberish`, `_lenderVerifier`: `string`, `_borrowAsset`: `string`, `_borrowAssetStrategy`: `string`, `_borrowLimit`: `BigNumberish`, `_minBorrowAmount`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `_areTokensTransferable`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getLenderInfo` | (`_id`: `BigNumberish`, `_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `borrowerInterestSharesWithdrawn`: `BigNumber` ; `yieldInterestWithdrawnShares`: `BigNumber`  }\> |
| `getLenderInfo(uint256,address)` | (`_id`: `BigNumberish`, `_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `borrowerInterestSharesWithdrawn`: `BigNumber` ; `yieldInterestWithdrawnShares`: `BigNumber`  }\> |
| `getLenderInterest` | (`_id`: `BigNumberish`, `_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getLenderInterest(uint256,address)` | (`_id`: `BigNumberish`, `_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `initialize` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialize()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `isApprovedForAll` | (`account`: `string`, `operator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `isApprovedForAll(address,address)` | (`account`: `string`, `operator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `lend` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `lend(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `liquidate` | (`_id`: `BigNumberish`, `_withdraw`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `liquidate(uint256,bool)` | (`_id`: `BigNumberish`, `_withdraw`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `pooledCLConstants` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `string`, `string`, `BigNumber`, `BigNumber`, `string`, `string`, `boolean`] & { `areTokensTransferable`: `boolean` ; `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumber` ; `collateralAsset`: `string` ; `lenderVerifier`: `string` ; `minBorrowAmount`: `BigNumber` ; `startTime`: `BigNumber`  }\> |
| `pooledCLConstants(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `string`, `string`, `BigNumber`, `BigNumber`, `string`, `string`, `boolean`] & { `areTokensTransferable`: `boolean` ; `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumber` ; `collateralAsset`: `string` ; `lenderVerifier`: `string` ; `minBorrowAmount`: `BigNumber` ; `startTime`: `BigNumber`  }\> |
| `pooledCLVariables` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `borrowerInterestShares`: `BigNumber` ; `borrowerInterestSharesWithdrawn`: `BigNumber` ; `collateralHeld`: `BigNumber` ; `sharesHeld`: `BigNumber` ; `yieldInterestWithdrawnShares`: `BigNumber`  }\> |
| `pooledCLVariables(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `borrowerInterestShares`: `BigNumber` ; `borrowerInterestSharesWithdrawn`: `BigNumber` ; `collateralHeld`: `BigNumber` ; `sharesHeld`: `BigNumber` ; `yieldInterestWithdrawnShares`: `BigNumber`  }\> |
| `repaid` | (`_id`: `BigNumberish`, `_sharesRepaid`: `BigNumberish`, `_interestShares`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `repaid(uint256,uint256,uint256)` | (`_id`: `BigNumberish`, `_sharesRepaid`: `BigNumberish`, `_interestShares`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `requestCancelled` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `requestCancelled(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `safeBatchTransferFrom` | (`from`: `string`, `to`: `string`, `ids`: `BigNumberish`[], `amounts`: `BigNumberish`[], `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)` | (`from`: `string`, `to`: `string`, `ids`: `BigNumberish`[], `amounts`: `BigNumberish`[], `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `safeTransferFrom` | (`from`: `string`, `to`: `string`, `id`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `safeTransferFrom(address,address,uint256,uint256,bytes)` | (`from`: `string`, `to`: `string`, `id`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setApprovalForAll` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setApprovalForAll(address,bool)` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `start` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `start(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `supportsInterface(bytes4)` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `terminate` | (`_id`: `BigNumberish`, `_to`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `terminate(uint256,address)` | (`_id`: `BigNumberish`, `_to`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `totalSupply` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `uri` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `uri(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `withdrawInterest` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdrawInterest(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdrawLiquidatedCollateral` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdrawLiquidatedCollateral(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdrawLiquidity` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdrawLiquidity(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/LenderPool.d.ts:805](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L805)

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
| `POOLED_CREDIT_LINE` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `POOLED_CREDIT_LINE()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `SAVINGS_ACCOUNT` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `SAVINGS_ACCOUNT()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `VERIFICATION` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `VERIFICATION()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `balanceOf` | (`account`: `string`, `id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `balanceOf(address,uint256)` | (`account`: `string`, `id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `balanceOfBatch` | (`accounts`: `string`[], `ids`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `balanceOfBatch(address[],uint256[])` | (`accounts`: `string`[], `ids`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `borrowed` | (`_id`: `BigNumberish`, `_sharesBorrowed`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `borrowed(uint256,uint256)` | (`_id`: `BigNumberish`, `_sharesBorrowed`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `calculatePrincipalWithdrawable` | (`_id`: `BigNumberish`, `_lender`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `calculatePrincipalWithdrawable(uint256,address)` | (`_id`: `BigNumberish`, `_lender`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `create` | (`_id`: `BigNumberish`, `_lenderVerifier`: `string`, `_borrowAsset`: `string`, `_borrowAssetStrategy`: `string`, `_borrowLimit`: `BigNumberish`, `_minBorrowAmount`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `_areTokensTransferable`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `create(uint256,address,address,address,uint256,uint256,uint256,bool)` | (`_id`: `BigNumberish`, `_lenderVerifier`: `string`, `_borrowAsset`: `string`, `_borrowAssetStrategy`: `string`, `_borrowLimit`: `BigNumberish`, `_minBorrowAmount`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `_areTokensTransferable`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getLenderInfo` | (`_id`: `BigNumberish`, `_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getLenderInfo(uint256,address)` | (`_id`: `BigNumberish`, `_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getLenderInterest` | (`_id`: `BigNumberish`, `_lender`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getLenderInterest(uint256,address)` | (`_id`: `BigNumberish`, `_lender`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initialize` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `initialize()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `isApprovedForAll` | (`account`: `string`, `operator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isApprovedForAll(address,address)` | (`account`: `string`, `operator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `lend` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `lend(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `liquidate` | (`_id`: `BigNumberish`, `_withdraw`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `liquidate(uint256,bool)` | (`_id`: `BigNumberish`, `_withdraw`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `pooledCLConstants` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `pooledCLConstants(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `pooledCLVariables` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `pooledCLVariables(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `repaid` | (`_id`: `BigNumberish`, `_sharesRepaid`: `BigNumberish`, `_interestShares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `repaid(uint256,uint256,uint256)` | (`_id`: `BigNumberish`, `_sharesRepaid`: `BigNumberish`, `_interestShares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `requestCancelled` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `requestCancelled(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `safeBatchTransferFrom` | (`from`: `string`, `to`: `string`, `ids`: `BigNumberish`[], `amounts`: `BigNumberish`[], `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)` | (`from`: `string`, `to`: `string`, `ids`: `BigNumberish`[], `amounts`: `BigNumberish`[], `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `safeTransferFrom` | (`from`: `string`, `to`: `string`, `id`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `safeTransferFrom(address,address,uint256,uint256,bytes)` | (`from`: `string`, `to`: `string`, `id`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setApprovalForAll` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setApprovalForAll(address,bool)` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `start` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `start(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `supportsInterface(bytes4)` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `terminate` | (`_id`: `BigNumberish`, `_to`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `terminate(uint256,address)` | (`_id`: `BigNumberish`, `_to`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `totalSupply` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `uri` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `uri(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `withdrawInterest` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawInterest(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawLiquidatedCollateral` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawLiquidatedCollateral(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawLiquidity` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawLiquidity(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/LenderPool.d.ts:1128](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L1128)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ApprovalForAll` | (`account`: `string`, `operator`: `string`, `approved`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `boolean`], { `account`: `string` ; `approved`: `boolean` ; `operator`: `string`  }\> |
| `InterestWithdrawn` | (`id`: `BigNumberish`, `user`: `string`, `shares`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `string`, `BigNumber`], { `id`: `BigNumber` ; `shares`: `BigNumber` ; `user`: `string`  }\> |
| `Lend` | (`id`: `BigNumberish`, `user`: `string`, `amount`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `string`, `BigNumber`], { `amount`: `BigNumber` ; `id`: `BigNumber` ; `user`: `string`  }\> |
| `Liquidated` | (`id`: `BigNumberish`, `collateralLiquidated`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `BigNumber`], { `collateralLiquidated`: `BigNumber` ; `id`: `BigNumber`  }\> |
| `LiquidationWithdrawn` | (`id`: `BigNumberish`, `user`: `string`, `collateralShare`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `string`, `BigNumber`], { `collateralShare`: `BigNumber` ; `id`: `BigNumber` ; `user`: `string`  }\> |
| `LiquidityWithdrawn` | (`amount`: ``null``, `lenderAddress`: `string`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `string`], { `amount`: `BigNumber` ; `lenderAddress`: `string`  }\> |
| `TransferBatch` | (`operator`: `string`, `from`: `string`, `to`: `string`, `ids`: ``null``, `values`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `string`, `BigNumber`[], `BigNumber`[]], { `from`: `string` ; `ids`: `BigNumber`[] ; `operator`: `string` ; `to`: `string` ; `values`: `BigNumber`[]  }\> |
| `TransferSingle` | (`operator`: `string`, `from`: `string`, `to`: `string`, `id`: ``null``, `value`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `string`, `string`, `BigNumber`, `BigNumber`], { `from`: `string` ; `id`: `BigNumber` ; `operator`: `string` ; `to`: `string` ; `value`: `BigNumber`  }\> |
| `URI` | (`value`: ``null``, `id`: `BigNumberish`) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`string`, `BigNumber`], { `id`: `BigNumber` ; `value`: `string`  }\> |
| `WithdrawLiquidity` | (`id`: `BigNumberish`, `user`: `string`, `shares`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `string`, `BigNumber`], { `id`: `BigNumber` ; `shares`: `BigNumber` ; `user`: `string`  }\> |
| `WithdrawLiquidityOnCancel` | (`id`: `BigNumberish`, `user`: `string`, `amount`: ``null``) => [`TypedEventFilter`](../interfaces/wrappers_commons.TypedEventFilter.md)<[`BigNumber`, `string`, `BigNumber`], { `amount`: `BigNumber` ; `id`: `BigNumber` ; `user`: `string`  }\> |

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/LenderPool.d.ts:1044](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L1044)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `POOLED_CREDIT_LINE` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `POOLED_CREDIT_LINE()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `SAVINGS_ACCOUNT` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `SAVINGS_ACCOUNT()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `VERIFICATION` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `VERIFICATION()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `balanceOf` | (`account`: `string`, `id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `balanceOf(address,uint256)` | (`account`: `string`, `id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `balanceOfBatch` | (`accounts`: `string`[], `ids`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`[]]\> |
| `balanceOfBatch(address[],uint256[])` | (`accounts`: `string`[], `ids`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`[]]\> |
| `borrowed` | (`_id`: `BigNumberish`, `_sharesBorrowed`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `borrowed(uint256,uint256)` | (`_id`: `BigNumberish`, `_sharesBorrowed`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `calculatePrincipalWithdrawable` | (`_id`: `BigNumberish`, `_lender`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `calculatePrincipalWithdrawable(uint256,address)` | (`_id`: `BigNumberish`, `_lender`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `create` | (`_id`: `BigNumberish`, `_lenderVerifier`: `string`, `_borrowAsset`: `string`, `_borrowAssetStrategy`: `string`, `_borrowLimit`: `BigNumberish`, `_minBorrowAmount`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `_areTokensTransferable`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `create(uint256,address,address,address,uint256,uint256,uint256,bool)` | (`_id`: `BigNumberish`, `_lenderVerifier`: `string`, `_borrowAsset`: `string`, `_borrowAssetStrategy`: `string`, `_borrowLimit`: `BigNumberish`, `_minBorrowAmount`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `_areTokensTransferable`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getLenderInfo` | (`_id`: `BigNumberish`, `_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[[`BigNumber`, `BigNumber`] & { `borrowerInterestSharesWithdrawn`: `BigNumber` ; `yieldInterestWithdrawnShares`: `BigNumber`  }]\> |
| `getLenderInfo(uint256,address)` | (`_id`: `BigNumberish`, `_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[[`BigNumber`, `BigNumber`] & { `borrowerInterestSharesWithdrawn`: `BigNumber` ; `yieldInterestWithdrawnShares`: `BigNumber`  }]\> |
| `getLenderInterest` | (`_id`: `BigNumberish`, `_lender`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getLenderInterest(uint256,address)` | (`_id`: `BigNumberish`, `_lender`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialize` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialize()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `isApprovedForAll` | (`account`: `string`, `operator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `isApprovedForAll(address,address)` | (`account`: `string`, `operator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `lend` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `lend(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `liquidate` | (`_id`: `BigNumberish`, `_withdraw`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `liquidate(uint256,bool)` | (`_id`: `BigNumberish`, `_withdraw`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `pooledCLConstants` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `string`, `string`, `BigNumber`, `BigNumber`, `string`, `string`, `boolean`] & { `areTokensTransferable`: `boolean` ; `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumber` ; `collateralAsset`: `string` ; `lenderVerifier`: `string` ; `minBorrowAmount`: `BigNumber` ; `startTime`: `BigNumber`  }\> |
| `pooledCLConstants(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `string`, `string`, `BigNumber`, `BigNumber`, `string`, `string`, `boolean`] & { `areTokensTransferable`: `boolean` ; `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumber` ; `collateralAsset`: `string` ; `lenderVerifier`: `string` ; `minBorrowAmount`: `BigNumber` ; `startTime`: `BigNumber`  }\> |
| `pooledCLVariables` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `borrowerInterestShares`: `BigNumber` ; `borrowerInterestSharesWithdrawn`: `BigNumber` ; `collateralHeld`: `BigNumber` ; `sharesHeld`: `BigNumber` ; `yieldInterestWithdrawnShares`: `BigNumber`  }\> |
| `pooledCLVariables(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `borrowerInterestShares`: `BigNumber` ; `borrowerInterestSharesWithdrawn`: `BigNumber` ; `collateralHeld`: `BigNumber` ; `sharesHeld`: `BigNumber` ; `yieldInterestWithdrawnShares`: `BigNumber`  }\> |
| `repaid` | (`_id`: `BigNumberish`, `_sharesRepaid`: `BigNumberish`, `_interestShares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `repaid(uint256,uint256,uint256)` | (`_id`: `BigNumberish`, `_sharesRepaid`: `BigNumberish`, `_interestShares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `requestCancelled` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `requestCancelled(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `safeBatchTransferFrom` | (`from`: `string`, `to`: `string`, `ids`: `BigNumberish`[], `amounts`: `BigNumberish`[], `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)` | (`from`: `string`, `to`: `string`, `ids`: `BigNumberish`[], `amounts`: `BigNumberish`[], `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `safeTransferFrom` | (`from`: `string`, `to`: `string`, `id`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `safeTransferFrom(address,address,uint256,uint256,bytes)` | (`from`: `string`, `to`: `string`, `id`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setApprovalForAll` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setApprovalForAll(address,bool)` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `start` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `start(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `supportsInterface(bytes4)` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `terminate` | (`_id`: `BigNumberish`, `_to`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `terminate(uint256,address)` | (`_id`: `BigNumberish`, `_to`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `totalSupply` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `totalSupply(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `uri` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `uri(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `withdrawInterest` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawInterest(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawLiquidatedCollateral` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawLiquidatedCollateral(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawLiquidity` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawLiquidity(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/LenderPool.d.ts:191](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L191)

___

### interface

• **interface**: [`LenderPoolInterface`](../interfaces/wrappers_LenderPool.LenderPoolInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/LenderPool.d.ts:189](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L189)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `POOLED_CREDIT_LINE` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `POOLED_CREDIT_LINE()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `SAVINGS_ACCOUNT` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `SAVINGS_ACCOUNT()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `VERIFICATION` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `VERIFICATION()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `balanceOf` | (`account`: `string`, `id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `balanceOf(address,uint256)` | (`account`: `string`, `id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `balanceOfBatch` | (`accounts`: `string`[], `ids`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `balanceOfBatch(address[],uint256[])` | (`accounts`: `string`[], `ids`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `borrowed` | (`_id`: `BigNumberish`, `_sharesBorrowed`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `borrowed(uint256,uint256)` | (`_id`: `BigNumberish`, `_sharesBorrowed`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `calculatePrincipalWithdrawable` | (`_id`: `BigNumberish`, `_lender`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `calculatePrincipalWithdrawable(uint256,address)` | (`_id`: `BigNumberish`, `_lender`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `create` | (`_id`: `BigNumberish`, `_lenderVerifier`: `string`, `_borrowAsset`: `string`, `_borrowAssetStrategy`: `string`, `_borrowLimit`: `BigNumberish`, `_minBorrowAmount`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `_areTokensTransferable`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `create(uint256,address,address,address,uint256,uint256,uint256,bool)` | (`_id`: `BigNumberish`, `_lenderVerifier`: `string`, `_borrowAsset`: `string`, `_borrowAssetStrategy`: `string`, `_borrowLimit`: `BigNumberish`, `_minBorrowAmount`: `BigNumberish`, `_collectionPeriod`: `BigNumberish`, `_areTokensTransferable`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getLenderInfo` | (`_id`: `BigNumberish`, `_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getLenderInfo(uint256,address)` | (`_id`: `BigNumberish`, `_lender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getLenderInterest` | (`_id`: `BigNumberish`, `_lender`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getLenderInterest(uint256,address)` | (`_id`: `BigNumberish`, `_lender`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialize` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialize()` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `isApprovedForAll` | (`account`: `string`, `operator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isApprovedForAll(address,address)` | (`account`: `string`, `operator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `lend` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `lend(uint256,uint256)` | (`_id`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `liquidate` | (`_id`: `BigNumberish`, `_withdraw`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `liquidate(uint256,bool)` | (`_id`: `BigNumberish`, `_withdraw`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `pooledCLConstants` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `pooledCLConstants(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `pooledCLVariables` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `pooledCLVariables(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `repaid` | (`_id`: `BigNumberish`, `_sharesRepaid`: `BigNumberish`, `_interestShares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `repaid(uint256,uint256,uint256)` | (`_id`: `BigNumberish`, `_sharesRepaid`: `BigNumberish`, `_interestShares`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `requestCancelled` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `requestCancelled(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `safeBatchTransferFrom` | (`from`: `string`, `to`: `string`, `ids`: `BigNumberish`[], `amounts`: `BigNumberish`[], `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)` | (`from`: `string`, `to`: `string`, `ids`: `BigNumberish`[], `amounts`: `BigNumberish`[], `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `safeTransferFrom` | (`from`: `string`, `to`: `string`, `id`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `safeTransferFrom(address,address,uint256,uint256,bytes)` | (`from`: `string`, `to`: `string`, `id`: `BigNumberish`, `amount`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setApprovalForAll` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setApprovalForAll(address,bool)` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `start` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `start(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `supportsInterface(bytes4)` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `terminate` | (`_id`: `BigNumberish`, `_to`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `terminate(uint256,address)` | (`_id`: `BigNumberish`, `_to`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `uri` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `uri(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `withdrawInterest` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawInterest(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawLiquidatedCollateral` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawLiquidatedCollateral(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawLiquidity` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawLiquidity(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/LenderPool.d.ts:1343](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L1343)

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

### POOLED\_CREDIT\_LINE

▸ **POOLED_CREDIT_LINE**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:506](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L506)

___

### POOLED\_CREDIT\_LINE()

▸ **POOLED_CREDIT_LINE()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:508](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L508)

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

[src/wrappers/LenderPool.d.ts:510](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L510)

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

[src/wrappers/LenderPool.d.ts:512](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L512)

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

[src/wrappers/LenderPool.d.ts:514](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L514)

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

[src/wrappers/LenderPool.d.ts:516](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L516)

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

### attach

▸ **attach**(`addressOrName`): [`LenderPool`](wrappers_LenderPool.LenderPool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`LenderPool`](wrappers_LenderPool.LenderPool.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/LenderPool.d.ts:150](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L150)

___

### balanceOf

▸ **balanceOf**(`account`, `id`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `id` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:518](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L518)

___

### balanceOf(address,uint256)

▸ **balanceOf(address,uint256)**(`account`, `id`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `id` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:520](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L520)

___

### balanceOfBatch

▸ **balanceOfBatch**(`accounts`, `ids`, `overrides?`): `Promise`<`BigNumber`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accounts` | `string`[] |
| `ids` | `BigNumberish`[] |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`[]\>

#### Defined in

[src/wrappers/LenderPool.d.ts:522](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L522)

___

### balanceOfBatch(address[],uint256[])

▸ **balanceOfBatch(address[],uint256[])**(`accounts`, `ids`, `overrides?`): `Promise`<`BigNumber`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accounts` | `string`[] |
| `ids` | `BigNumberish`[] |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`[]\>

#### Defined in

[src/wrappers/LenderPool.d.ts:524](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L524)

___

### borrowed

▸ **borrowed**(`_id`, `_sharesBorrowed`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_sharesBorrowed` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:526](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L526)

___

### borrowed(uint256,uint256)

▸ **borrowed(uint256,uint256)**(`_id`, `_sharesBorrowed`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_sharesBorrowed` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:532](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L532)

___

### calculatePrincipalWithdrawable

▸ **calculatePrincipalWithdrawable**(`_id`, `_lender`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_lender` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:538](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L538)

___

### calculatePrincipalWithdrawable(uint256,address)

▸ **calculatePrincipalWithdrawable(uint256,address)**(`_id`, `_lender`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_lender` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:544](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L544)

___

### connect

▸ **connect**(`signerOrProvider`): [`LenderPool`](wrappers_LenderPool.LenderPool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`LenderPool`](wrappers_LenderPool.LenderPool.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/LenderPool.d.ts:149](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L149)

___

### create

▸ **create**(`_id`, `_lenderVerifier`, `_borrowAsset`, `_borrowAssetStrategy`, `_borrowLimit`, `_minBorrowAmount`, `_collectionPeriod`, `_areTokensTransferable`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_lenderVerifier` | `string` |
| `_borrowAsset` | `string` |
| `_borrowAssetStrategy` | `string` |
| `_borrowLimit` | `BigNumberish` |
| `_minBorrowAmount` | `BigNumberish` |
| `_collectionPeriod` | `BigNumberish` |
| `_areTokensTransferable` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:550](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L550)

___

### create(uint256,address,address,address,uint256,uint256,uint256,bool)

▸ **create(uint256,address,address,address,uint256,uint256,uint256,bool)**(`_id`, `_lenderVerifier`, `_borrowAsset`, `_borrowAssetStrategy`, `_borrowLimit`, `_minBorrowAmount`, `_collectionPeriod`, `_areTokensTransferable`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_lenderVerifier` | `string` |
| `_borrowAsset` | `string` |
| `_borrowAssetStrategy` | `string` |
| `_borrowLimit` | `BigNumberish` |
| `_minBorrowAmount` | `BigNumberish` |
| `_collectionPeriod` | `BigNumberish` |
| `_areTokensTransferable` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:562](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L562)

___

### deployed

▸ **deployed**(): `Promise`<[`LenderPool`](wrappers_LenderPool.LenderPool.md)\>

#### Returns

`Promise`<[`LenderPool`](wrappers_LenderPool.LenderPool.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/LenderPool.d.ts:151](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L151)

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

### getLenderInfo

▸ **getLenderInfo**(`_id`, `_lender`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `borrowerInterestSharesWithdrawn`: `BigNumber` ; `yieldInterestWithdrawnShares`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_lender` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `borrowerInterestSharesWithdrawn`: `BigNumber` ; `yieldInterestWithdrawnShares`: `BigNumber`  }\>

#### Defined in

[src/wrappers/LenderPool.d.ts:574](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L574)

___

### getLenderInfo(uint256,address)

▸ **getLenderInfo(uint256,address)**(`_id`, `_lender`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `borrowerInterestSharesWithdrawn`: `BigNumber` ; `yieldInterestWithdrawnShares`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_lender` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `borrowerInterestSharesWithdrawn`: `BigNumber` ; `yieldInterestWithdrawnShares`: `BigNumber`  }\>

#### Defined in

[src/wrappers/LenderPool.d.ts:585](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L585)

___

### getLenderInterest

▸ **getLenderInterest**(`_id`, `_lender`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_lender` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:596](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L596)

___

### getLenderInterest(uint256,address)

▸ **getLenderInterest(uint256,address)**(`_id`, `_lender`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_lender` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:602](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L602)

___

### initialize

▸ **initialize**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:608](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L608)

___

### initialize()

▸ **initialize()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:610](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L610)

___

### isApprovedForAll

▸ **isApprovedForAll**(`account`, `operator`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `operator` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:612](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L612)

___

### isApprovedForAll(address,address)

▸ **isApprovedForAll(address,address)**(`account`, `operator`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `operator` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:614](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L614)

___

### lend

▸ **lend**(`_id`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:616](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L616)

___

### lend(uint256,uint256)

▸ **lend(uint256,uint256)**(`_id`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:618](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L618)

___

### liquidate

▸ **liquidate**(`_id`, `_withdraw`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_withdraw` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:624](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L624)

___

### liquidate(uint256,bool)

▸ **liquidate(uint256,bool)**(`_id`, `_withdraw`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_withdraw` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:630](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L630)

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

[src/wrappers/LenderPool.d.ts:153](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L153)

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

[src/wrappers/LenderPool.d.ts:176](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L176)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`LenderPool`](wrappers_LenderPool.LenderPool.md)

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

[`LenderPool`](wrappers_LenderPool.LenderPool.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/LenderPool.d.ts:156](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L156)

▸ **off**(`eventName`, `listener`): [`LenderPool`](wrappers_LenderPool.LenderPool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`LenderPool`](wrappers_LenderPool.LenderPool.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/LenderPool.d.ts:177](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L177)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`LenderPool`](wrappers_LenderPool.LenderPool.md)

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

[`LenderPool`](wrappers_LenderPool.LenderPool.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/LenderPool.d.ts:160](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L160)

▸ **on**(`eventName`, `listener`): [`LenderPool`](wrappers_LenderPool.LenderPool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`LenderPool`](wrappers_LenderPool.LenderPool.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/LenderPool.d.ts:178](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L178)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`LenderPool`](wrappers_LenderPool.LenderPool.md)

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

[`LenderPool`](wrappers_LenderPool.LenderPool.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/LenderPool.d.ts:164](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L164)

▸ **once**(`eventName`, `listener`): [`LenderPool`](wrappers_LenderPool.LenderPool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`LenderPool`](wrappers_LenderPool.LenderPool.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/LenderPool.d.ts:179](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L179)

___

### pooledCLConstants

▸ **pooledCLConstants**(`arg0`, `overrides?`): `Promise`<[`BigNumber`, `string`, `string`, `BigNumber`, `BigNumber`, `string`, `string`, `boolean`] & { `areTokensTransferable`: `boolean` ; `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumber` ; `collateralAsset`: `string` ; `lenderVerifier`: `string` ; `minBorrowAmount`: `BigNumber` ; `startTime`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `string`, `string`, `BigNumber`, `BigNumber`, `string`, `string`, `boolean`] & { `areTokensTransferable`: `boolean` ; `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumber` ; `collateralAsset`: `string` ; `lenderVerifier`: `string` ; `minBorrowAmount`: `BigNumber` ; `startTime`: `BigNumber`  }\>

#### Defined in

[src/wrappers/LenderPool.d.ts:636](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L636)

___

### pooledCLConstants(uint256)

▸ **pooledCLConstants(uint256)**(`arg0`, `overrides?`): `Promise`<[`BigNumber`, `string`, `string`, `BigNumber`, `BigNumber`, `string`, `string`, `boolean`] & { `areTokensTransferable`: `boolean` ; `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumber` ; `collateralAsset`: `string` ; `lenderVerifier`: `string` ; `minBorrowAmount`: `BigNumber` ; `startTime`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `string`, `string`, `BigNumber`, `BigNumber`, `string`, `string`, `boolean`] & { `areTokensTransferable`: `boolean` ; `borrowAsset`: `string` ; `borrowAssetStrategy`: `string` ; `borrowLimit`: `BigNumber` ; `collateralAsset`: `string` ; `lenderVerifier`: `string` ; `minBorrowAmount`: `BigNumber` ; `startTime`: `BigNumber`  }\>

#### Defined in

[src/wrappers/LenderPool.d.ts:652](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L652)

___

### pooledCLVariables

▸ **pooledCLVariables**(`arg0`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `borrowerInterestShares`: `BigNumber` ; `borrowerInterestSharesWithdrawn`: `BigNumber` ; `collateralHeld`: `BigNumber` ; `sharesHeld`: `BigNumber` ; `yieldInterestWithdrawnShares`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `borrowerInterestShares`: `BigNumber` ; `borrowerInterestSharesWithdrawn`: `BigNumber` ; `collateralHeld`: `BigNumber` ; `sharesHeld`: `BigNumber` ; `yieldInterestWithdrawnShares`: `BigNumber`  }\>

#### Defined in

[src/wrappers/LenderPool.d.ts:668](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L668)

___

### pooledCLVariables(uint256)

▸ **pooledCLVariables(uint256)**(`arg0`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `borrowerInterestShares`: `BigNumber` ; `borrowerInterestSharesWithdrawn`: `BigNumber` ; `collateralHeld`: `BigNumber` ; `sharesHeld`: `BigNumber` ; `yieldInterestWithdrawnShares`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `borrowerInterestShares`: `BigNumber` ; `borrowerInterestSharesWithdrawn`: `BigNumber` ; `collateralHeld`: `BigNumber` ; `sharesHeld`: `BigNumber` ; `yieldInterestWithdrawnShares`: `BigNumber`  }\>

#### Defined in

[src/wrappers/LenderPool.d.ts:681](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L681)

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

[src/wrappers/LenderPool.d.ts:183](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L183)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`LenderPool`](wrappers_LenderPool.LenderPool.md)

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

[`LenderPool`](wrappers_LenderPool.LenderPool.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/LenderPool.d.ts:172](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L172)

▸ **removeAllListeners**(`eventName?`): [`LenderPool`](wrappers_LenderPool.LenderPool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`LenderPool`](wrappers_LenderPool.LenderPool.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/LenderPool.d.ts:181](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L181)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`LenderPool`](wrappers_LenderPool.LenderPool.md)

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

[`LenderPool`](wrappers_LenderPool.LenderPool.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/LenderPool.d.ts:168](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L168)

▸ **removeListener**(`eventName`, `listener`): [`LenderPool`](wrappers_LenderPool.LenderPool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`LenderPool`](wrappers_LenderPool.LenderPool.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/LenderPool.d.ts:180](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L180)

___

### repaid

▸ **repaid**(`_id`, `_sharesRepaid`, `_interestShares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_sharesRepaid` | `BigNumberish` |
| `_interestShares` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:694](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L694)

___

### repaid(uint256,uint256,uint256)

▸ **repaid(uint256,uint256,uint256)**(`_id`, `_sharesRepaid`, `_interestShares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_sharesRepaid` | `BigNumberish` |
| `_interestShares` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:701](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L701)

___

### requestCancelled

▸ **requestCancelled**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:708](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L708)

___

### requestCancelled(uint256)

▸ **requestCancelled(uint256)**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:710](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L710)

___

### safeBatchTransferFrom

▸ **safeBatchTransferFrom**(`from`, `to`, `ids`, `amounts`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `ids` | `BigNumberish`[] |
| `amounts` | `BigNumberish`[] |
| `data` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:712](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L712)

___

### safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)

▸ **safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)**(`from`, `to`, `ids`, `amounts`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `ids` | `BigNumberish`[] |
| `amounts` | `BigNumberish`[] |
| `data` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:721](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L721)

___

### safeTransferFrom

▸ **safeTransferFrom**(`from`, `to`, `id`, `amount`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `id` | `BigNumberish` |
| `amount` | `BigNumberish` |
| `data` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:730](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L730)

___

### safeTransferFrom(address,address,uint256,uint256,bytes)

▸ **safeTransferFrom(address,address,uint256,uint256,bytes)**(`from`, `to`, `id`, `amount`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `id` | `BigNumberish` |
| `amount` | `BigNumberish` |
| `data` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:739](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L739)

___

### setApprovalForAll

▸ **setApprovalForAll**(`operator`, `approved`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | `string` |
| `approved` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:748](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L748)

___

### setApprovalForAll(address,bool)

▸ **setApprovalForAll(address,bool)**(`operator`, `approved`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | `string` |
| `approved` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:754](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L754)

___

### start

▸ **start**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:760](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L760)

___

### start(uint256)

▸ **start(uint256)**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:762](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L762)

___

### supportsInterface

▸ **supportsInterface**(`interfaceId`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `interfaceId` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:764](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L764)

___

### supportsInterface(bytes4)

▸ **supportsInterface(bytes4)**(`interfaceId`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `interfaceId` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:766](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L766)

___

### terminate

▸ **terminate**(`_id`, `_to`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_to` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:768](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L768)

___

### terminate(uint256,address)

▸ **terminate(uint256,address)**(`_id`, `_to`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `_to` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:770](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L770)

___

### totalSupply

▸ **totalSupply**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:776](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L776)

___

### totalSupply(uint256)

▸ **totalSupply(uint256)**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:778](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L778)

___

### uri

▸ **uri**(`arg0`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:780](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L780)

___

### uri(uint256)

▸ **uri(uint256)**(`arg0`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:782](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L782)

___

### withdrawInterest

▸ **withdrawInterest**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:784](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L784)

___

### withdrawInterest(uint256)

▸ **withdrawInterest(uint256)**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:786](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L786)

___

### withdrawLiquidatedCollateral

▸ **withdrawLiquidatedCollateral**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:788](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L788)

___

### withdrawLiquidatedCollateral(uint256)

▸ **withdrawLiquidatedCollateral(uint256)**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:793](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L793)

___

### withdrawLiquidity

▸ **withdrawLiquidity**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:798](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L798)

___

### withdrawLiquidity(uint256)

▸ **withdrawLiquidity(uint256)**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/LenderPool.d.ts:800](https://github.com/sublime-finance/sublime-sdk/blob/0aed62a/src/wrappers/LenderPool.d.ts#L800)

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
