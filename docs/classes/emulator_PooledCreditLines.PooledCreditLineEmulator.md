[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [emulator/PooledCreditLines](../modules/emulator_PooledCreditLines.md) / PooledCreditLineEmulator

# Class: PooledCreditLineEmulator

[emulator/PooledCreditLines](../modules/emulator_PooledCreditLines.md).PooledCreditLineEmulator

## Hierarchy

- [`EmulatorHelper`](emulator_Helpers.EmulatorHelper.md)

  ↳ **`PooledCreditLineEmulator`**

## Table of contents

### Constructors

- [constructor](emulator_PooledCreditLines.PooledCreditLineEmulator.md#constructor)

### Properties

- [externalData](emulator_PooledCreditLines.PooledCreditLineEmulator.md#externaldata)
- [lenderPoolExternalData](emulator_PooledCreditLines.PooledCreditLineEmulator.md#lenderpoolexternaldata)
- [lenderPoolState](emulator_PooledCreditLines.PooledCreditLineEmulator.md#lenderpoolstate)
- [lendersPerPool](emulator_PooledCreditLines.PooledCreditLineEmulator.md#lendersperpool)
- [pooledCreditLineState](emulator_PooledCreditLines.PooledCreditLineEmulator.md#pooledcreditlinestate)

### Methods

- [\_equivalentCollateral](emulator_PooledCreditLines.PooledCreditLineEmulator.md#_equivalentcollateral)
- [borrowAsset](emulator_PooledCreditLines.PooledCreditLineEmulator.md#borrowasset)
- [borrowRate](emulator_PooledCreditLines.PooledCreditLineEmulator.md#borrowrate)
- [borrowerAddress](emulator_PooledCreditLines.PooledCreditLineEmulator.md#borroweraddress)
- [borrowerVerifier](emulator_PooledCreditLines.PooledCreditLineEmulator.md#borrowerverifier)
- [calculateBorrowableAmount](emulator_PooledCreditLines.PooledCreditLineEmulator.md#calculateborrowableamount)
- [calculateCurrentCollateralRatio](emulator_PooledCreditLines.PooledCreditLineEmulator.md#calculatecurrentcollateralratio)
- [calculateCurrentDebt](emulator_PooledCreditLines.PooledCreditLineEmulator.md#calculatecurrentdebt)
- [calculateInterest](emulator_PooledCreditLines.PooledCreditLineEmulator.md#calculateinterest)
- [calculateInterestAccrued](emulator_PooledCreditLines.PooledCreditLineEmulator.md#calculateinterestaccrued)
- [calculateTotalCollateralTokens](emulator_PooledCreditLines.PooledCreditLineEmulator.md#calculatetotalcollateraltokens)
- [collateralAsset](emulator_PooledCreditLines.PooledCreditLineEmulator.md#collateralasset)
- [collateralStrategy](emulator_PooledCreditLines.PooledCreditLineEmulator.md#collateralstrategy)
- [collateralTokensToLiquidate](emulator_PooledCreditLines.PooledCreditLineEmulator.md#collateraltokenstoliquidate)
- [createdAt](emulator_PooledCreditLines.PooledCreditLineEmulator.md#createdat)
- [defaultsAt](emulator_PooledCreditLines.PooledCreditLineEmulator.md#defaultsat)
- [depositedCollateralInShares](emulator_PooledCreditLines.PooledCreditLineEmulator.md#depositedcollateralinshares)
- [endsAt](emulator_PooledCreditLines.PooledCreditLineEmulator.md#endsat)
- [getBorrowLimit](emulator_PooledCreditLines.PooledCreditLineEmulator.md#getborrowlimit)
- [getId](emulator_PooledCreditLines.PooledCreditLineEmulator.md#getid)
- [getLenderPoolEmulator](emulator_PooledCreditLines.PooledCreditLineEmulator.md#getlenderpoolemulator)
- [getPrincipal](emulator_PooledCreditLines.PooledCreditLineEmulator.md#getprincipal)
- [getRequiredCollateral](emulator_PooledCreditLines.PooledCreditLineEmulator.md#getrequiredcollateral)
- [getStatus](emulator_PooledCreditLines.PooledCreditLineEmulator.md#getstatus)
- [gracePenaltyRate](emulator_PooledCreditLines.PooledCreditLineEmulator.md#gracepenaltyrate)
- [idealCollateralratio](emulator_PooledCreditLines.PooledCreditLineEmulator.md#idealcollateralratio)
- [interestAccruedTillLastPrincipalUpdate](emulator_PooledCreditLines.PooledCreditLineEmulator.md#interestaccruedtilllastprincipalupdate)
- [lastPrincipalUpdateTime](emulator_PooledCreditLines.PooledCreditLineEmulator.md#lastprincipalupdatetime)
- [lenderStrategy](emulator_PooledCreditLines.PooledCreditLineEmulator.md#lenderstrategy)
- [lenderVerifier](emulator_PooledCreditLines.PooledCreditLineEmulator.md#lenderverifier)
- [min](emulator_PooledCreditLines.PooledCreditLineEmulator.md#min)
- [minBorrowAmount](emulator_PooledCreditLines.PooledCreditLineEmulator.md#minborrowamount)
- [now](emulator_PooledCreditLines.PooledCreditLineEmulator.md#now)
- [startsAt](emulator_PooledCreditLines.PooledCreditLineEmulator.md#startsat)
- [totalAmountLent](emulator_PooledCreditLines.PooledCreditLineEmulator.md#totalamountlent)
- [totalInterestRepaid](emulator_PooledCreditLines.PooledCreditLineEmulator.md#totalinterestrepaid)
- [totalLentAmount](emulator_PooledCreditLines.PooledCreditLineEmulator.md#totallentamount)
- [totalSupply](emulator_PooledCreditLines.PooledCreditLineEmulator.md#totalsupply)
- [withdrawableCollateral](emulator_PooledCreditLines.PooledCreditLineEmulator.md#withdrawablecollateral)

## Constructors

### constructor

• **new PooledCreditLineEmulator**(`pooledCreditLineState`, `externalData`, `lenderPoolState`, `lendersPerPool`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pooledCreditLineState` | [`PooledCreditLineState`](../interfaces/types_emulator_pooledCreditlines.PooledCreditLineState.md) |
| `externalData` | [`PooledCreditLineExternalData`](../interfaces/types_emulator_pooledCreditlines.PooledCreditLineExternalData.md) |
| `lenderPoolState` | [`LenderPoolState`](../interfaces/types_emulator_lenderPool.LenderPoolState.md) |
| `lendersPerPool` | [`LenderPerPool`](../interfaces/types_emulator_lenderPool.LenderPerPool.md)[] |

#### Overrides

[EmulatorHelper](emulator_Helpers.EmulatorHelper.md).[constructor](emulator_Helpers.EmulatorHelper.md#constructor)

#### Defined in

[src/emulator/PooledCreditLines.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L25)

## Properties

### externalData

• `Private` **externalData**: [`PooledCreditLineExternalData`](../interfaces/types_emulator_pooledCreditlines.PooledCreditLineExternalData.md)

#### Defined in

[src/emulator/PooledCreditLines.ts:20](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L20)

___

### lenderPoolExternalData

• `Private` **lenderPoolExternalData**: [`LenderPoolExternalData`](../interfaces/types_emulator_lenderPool.LenderPoolExternalData.md)

#### Defined in

[src/emulator/PooledCreditLines.ts:22](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L22)

___

### lenderPoolState

• `Private` **lenderPoolState**: [`LenderPoolState`](../interfaces/types_emulator_lenderPool.LenderPoolState.md)

#### Defined in

[src/emulator/PooledCreditLines.ts:21](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L21)

___

### lendersPerPool

• `Private` **lendersPerPool**: [`LenderPerPool`](../interfaces/types_emulator_lenderPool.LenderPerPool.md)[]

#### Defined in

[src/emulator/PooledCreditLines.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L23)

___

### pooledCreditLineState

• `Private` **pooledCreditLineState**: [`PooledCreditLineState`](../interfaces/types_emulator_pooledCreditlines.PooledCreditLineState.md)

#### Defined in

[src/emulator/PooledCreditLines.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L19)

## Methods

### \_equivalentCollateral

▸ `Private` **_equivalentCollateral**(`_borrowTokennAmount`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_borrowTokennAmount` | `BigNumber` |

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:184](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L184)

___

### borrowAsset

▸ **borrowAsset**(): `string`

#### Returns

`string`

#### Defined in

[src/emulator/PooledCreditLines.ts:263](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L263)

___

### borrowRate

▸ **borrowRate**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:255](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L255)

___

### borrowerAddress

▸ **borrowerAddress**(): `string`

#### Returns

`string`

#### Defined in

[src/emulator/PooledCreditLines.ts:251](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L251)

___

### borrowerVerifier

▸ **borrowerVerifier**(): `string`

#### Returns

`string`

#### Defined in

[src/emulator/PooledCreditLines.ts:324](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L324)

___

### calculateBorrowableAmount

▸ **calculateBorrowableAmount**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:194](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L194)

___

### calculateCurrentCollateralRatio

▸ **calculateCurrentCollateralRatio**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:220](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L220)

___

### calculateCurrentDebt

▸ **calculateCurrentDebt**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:109](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L109)

___

### calculateInterest

▸ `Private` **calculateInterest**(`principal`, `borrowRate`, `timeElapsed`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `principal` | `BigNumber` |
| `borrowRate` | `BigNumber` |
| `timeElapsed` | `BigNumber` |

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:175](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L175)

___

### calculateInterestAccrued

▸ **calculateInterestAccrued**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L84)

___

### calculateTotalCollateralTokens

▸ **calculateTotalCollateralTokens**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:114](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L114)

___

### collateralAsset

▸ **collateralAsset**(): `string`

#### Returns

`string`

#### Defined in

[src/emulator/PooledCreditLines.ts:267](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L267)

___

### collateralStrategy

▸ **collateralStrategy**(): `string`

#### Returns

`string`

#### Defined in

[src/emulator/PooledCreditLines.ts:291](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L291)

___

### collateralTokensToLiquidate

▸ **collateralTokensToLiquidate**(`_borrowTokensToLiquidate`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_borrowTokensToLiquidate` | `BigNumber` |

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:190](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L190)

___

### createdAt

▸ **createdAt**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:271](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L271)

___

### defaultsAt

▸ **defaultsAt**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:283](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L283)

___

### depositedCollateralInShares

▸ **depositedCollateralInShares**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:319](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L319)

___

### endsAt

▸ **endsAt**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:279](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L279)

___

### getBorrowLimit

▸ **getBorrowLimit**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:239](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L239)

___

### getId

▸ **getId**(): `string`

#### Returns

`string`

#### Defined in

[src/emulator/PooledCreditLines.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L39)

___

### getLenderPoolEmulator

▸ **getLenderPoolEmulator**(): [`LenderPoolEmulator`](emulator_LenderPool.LenderPoolEmulator.md)

#### Returns

[`LenderPoolEmulator`](emulator_LenderPool.LenderPoolEmulator.md)

#### Defined in

[src/emulator/PooledCreditLines.ts:43](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L43)

___

### getPrincipal

▸ **getPrincipal**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:235](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L235)

___

### getRequiredCollateral

▸ **getRequiredCollateral**(`_borrowTokennAmount`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_borrowTokennAmount` | `BigNumber` |

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:179](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L179)

___

### getStatus

▸ **getStatus**(): [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)

#### Returns

[`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)

#### Defined in

[src/emulator/PooledCreditLines.ts:118](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L118)

___

### gracePenaltyRate

▸ **gracePenaltyRate**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:295](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L295)

___

### idealCollateralratio

▸ **idealCollateralratio**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:259](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L259)

___

### interestAccruedTillLastPrincipalUpdate

▸ **interestAccruedTillLastPrincipalUpdate**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:307](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L307)

___

### lastPrincipalUpdateTime

▸ **lastPrincipalUpdateTime**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:303](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L303)

___

### lenderStrategy

▸ **lenderStrategy**(): `string`

#### Returns

`string`

#### Defined in

[src/emulator/PooledCreditLines.ts:287](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L287)

___

### lenderVerifier

▸ **lenderVerifier**(): `string`

#### Returns

`string`

#### Defined in

[src/emulator/PooledCreditLines.ts:329](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L329)

___

### min

▸ `Protected` **min**(`a`, `b`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `BigNumber` |
| `b` | `BigNumber` |

#### Returns

`BigNumber`

#### Inherited from

[EmulatorHelper](emulator_Helpers.EmulatorHelper.md).[min](emulator_Helpers.EmulatorHelper.md#min)

#### Defined in

[src/emulator/Helpers.ts:10](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/Helpers.ts#L10)

___

### minBorrowAmount

▸ **minBorrowAmount**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:315](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L315)

___

### now

▸ `Protected` **now**(): `BigNumber`

#### Returns

`BigNumber`

#### Inherited from

[EmulatorHelper](emulator_Helpers.EmulatorHelper.md).[now](emulator_Helpers.EmulatorHelper.md#now)

#### Defined in

[src/emulator/Helpers.ts:6](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/Helpers.ts#L6)

___

### startsAt

▸ **startsAt**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:275](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L275)

___

### totalAmountLent

▸ **totalAmountLent**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:243](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L243)

___

### totalInterestRepaid

▸ **totalInterestRepaid**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:299](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L299)

___

### totalLentAmount

▸ **totalLentAmount**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:311](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L311)

___

### totalSupply

▸ **totalSupply**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:247](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L247)

___

### withdrawableCollateral

▸ **withdrawableCollateral**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/6bd8832/src/emulator/PooledCreditLines.ts#L55)
