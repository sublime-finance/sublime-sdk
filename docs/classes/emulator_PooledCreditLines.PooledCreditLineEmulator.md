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
- [getStatusAndUpdate](emulator_PooledCreditLines.PooledCreditLineEmulator.md#getstatusandupdate)
- [gracePenaltyRate](emulator_PooledCreditLines.PooledCreditLineEmulator.md#gracepenaltyrate)
- [idealCollateralratio](emulator_PooledCreditLines.PooledCreditLineEmulator.md#idealcollateralratio)
- [interestAccruedTillLastPrincipalUpdate](emulator_PooledCreditLines.PooledCreditLineEmulator.md#interestaccruedtilllastprincipalupdate)
- [lastPrincipalUpdateTime](emulator_PooledCreditLines.PooledCreditLineEmulator.md#lastprincipalupdatetime)
- [lenderStrategy](emulator_PooledCreditLines.PooledCreditLineEmulator.md#lenderstrategy)
- [lenderVerifier](emulator_PooledCreditLines.PooledCreditLineEmulator.md#lenderverifier)
- [min](emulator_PooledCreditLines.PooledCreditLineEmulator.md#min)
- [minBorrowAmount](emulator_PooledCreditLines.PooledCreditLineEmulator.md#minborrowamount)
- [now](emulator_PooledCreditLines.PooledCreditLineEmulator.md#now)
- [ratioOfCollateralTokensVsBorrowTokensPrice](emulator_PooledCreditLines.PooledCreditLineEmulator.md#ratioofcollateraltokensvsborrowtokensprice)
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
| `pooledCreditLineState` | [`PooledCreditLineState`](../interfaces/types_Types.PooledCreditLineState.md) |
| `externalData` | [`PooledCreditLineExternalData`](../interfaces/types_Types.PooledCreditLineExternalData.md) |
| `lenderPoolState` | [`LenderPoolState`](../interfaces/types_Types.LenderPoolState.md) |
| `lendersPerPool` | [`LenderPerPool`](../interfaces/types_Types.LenderPerPool.md)[] |

#### Overrides

[EmulatorHelper](emulator_Helpers.EmulatorHelper.md).[constructor](emulator_Helpers.EmulatorHelper.md#constructor)

#### Defined in

[src/emulator/PooledCreditLines.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L26)

## Properties

### externalData

• `Private` **externalData**: [`PooledCreditLineExternalData`](../interfaces/types_Types.PooledCreditLineExternalData.md)

#### Defined in

[src/emulator/PooledCreditLines.ts:21](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L21)

___

### lenderPoolExternalData

• `Private` **lenderPoolExternalData**: [`LenderPoolExternalData`](../interfaces/types_Types.LenderPoolExternalData.md)

#### Defined in

[src/emulator/PooledCreditLines.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L23)

___

### lenderPoolState

• `Private` **lenderPoolState**: [`LenderPoolState`](../interfaces/types_Types.LenderPoolState.md)

#### Defined in

[src/emulator/PooledCreditLines.ts:22](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L22)

___

### lendersPerPool

• `Private` **lendersPerPool**: [`LenderPerPool`](../interfaces/types_Types.LenderPerPool.md)[]

#### Defined in

[src/emulator/PooledCreditLines.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L24)

___

### pooledCreditLineState

• `Private` **pooledCreditLineState**: [`PooledCreditLineState`](../interfaces/types_Types.PooledCreditLineState.md)

#### Defined in

[src/emulator/PooledCreditLines.ts:20](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L20)

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

[src/emulator/PooledCreditLines.ts:133](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L133)

___

### borrowAsset

▸ **borrowAsset**(): `string`

#### Returns

`string`

#### Defined in

[src/emulator/PooledCreditLines.ts:283](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L283)

___

### borrowRate

▸ **borrowRate**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:275](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L275)

___

### borrowerAddress

▸ **borrowerAddress**(): `string`

#### Returns

`string`

#### Defined in

[src/emulator/PooledCreditLines.ts:271](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L271)

___

### borrowerVerifier

▸ **borrowerVerifier**(): `string`

#### Returns

`string`

#### Defined in

[src/emulator/PooledCreditLines.ts:343](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L343)

___

### calculateBorrowableAmount

▸ **calculateBorrowableAmount**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:143](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L143)

___

### calculateCurrentCollateralRatio

▸ **calculateCurrentCollateralRatio**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:169](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L169)

___

### calculateCurrentDebt

▸ **calculateCurrentDebt**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:112](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L112)

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

[src/emulator/PooledCreditLines.ts:124](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L124)

___

### calculateInterestAccrued

▸ **calculateInterestAccrued**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L87)

___

### calculateTotalCollateralTokens

▸ **calculateTotalCollateralTokens**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:120](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L120)

___

### collateralAsset

▸ **collateralAsset**(): `string`

#### Returns

`string`

#### Defined in

[src/emulator/PooledCreditLines.ts:287](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L287)

___

### collateralStrategy

▸ **collateralStrategy**(): `string`

#### Returns

`string`

#### Defined in

[src/emulator/PooledCreditLines.ts:311](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L311)

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

[src/emulator/PooledCreditLines.ts:139](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L139)

___

### createdAt

▸ **createdAt**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:291](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L291)

___

### defaultsAt

▸ **defaultsAt**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:303](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L303)

___

### depositedCollateralInShares

▸ **depositedCollateralInShares**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:339](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L339)

___

### endsAt

▸ **endsAt**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:299](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L299)

___

### getBorrowLimit

▸ **getBorrowLimit**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:259](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L259)

___

### getId

▸ **getId**(): `string`

#### Returns

`string`

#### Defined in

[src/emulator/PooledCreditLines.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L40)

___

### getLenderPoolEmulator

▸ **getLenderPoolEmulator**(): [`LenderPoolEmulator`](emulator_LenderPool.LenderPoolEmulator.md)

#### Returns

[`LenderPoolEmulator`](emulator_LenderPool.LenderPoolEmulator.md)

#### Defined in

[src/emulator/PooledCreditLines.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L44)

___

### getPrincipal

▸ **getPrincipal**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:255](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L255)

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

[src/emulator/PooledCreditLines.ts:128](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L128)

___

### getStatus

▸ **getStatus**(): [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)

#### Returns

[`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)

#### Defined in

[src/emulator/PooledCreditLines.ts:198](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L198)

___

### getStatusAndUpdate

▸ **getStatusAndUpdate**(): [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)

#### Returns

[`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)

#### Defined in

[src/emulator/PooledCreditLines.ts:183](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L183)

___

### gracePenaltyRate

▸ **gracePenaltyRate**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:315](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L315)

___

### idealCollateralratio

▸ **idealCollateralratio**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:279](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L279)

___

### interestAccruedTillLastPrincipalUpdate

▸ **interestAccruedTillLastPrincipalUpdate**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:327](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L327)

___

### lastPrincipalUpdateTime

▸ **lastPrincipalUpdateTime**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:323](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L323)

___

### lenderStrategy

▸ **lenderStrategy**(): `string`

#### Returns

`string`

#### Defined in

[src/emulator/PooledCreditLines.ts:307](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L307)

___

### lenderVerifier

▸ **lenderVerifier**(): `string`

#### Returns

`string`

#### Defined in

[src/emulator/PooledCreditLines.ts:347](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L347)

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

[src/emulator/Helpers.ts:10](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/Helpers.ts#L10)

___

### minBorrowAmount

▸ **minBorrowAmount**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:335](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L335)

___

### now

▸ `Protected` **now**(): `BigNumber`

#### Returns

`BigNumber`

#### Inherited from

[EmulatorHelper](emulator_Helpers.EmulatorHelper.md).[now](emulator_Helpers.EmulatorHelper.md#now)

#### Defined in

[src/emulator/Helpers.ts:6](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/Helpers.ts#L6)

___

### ratioOfCollateralTokensVsBorrowTokensPrice

▸ **ratioOfCollateralTokensVsBorrowTokensPrice**(): [`Balance`](../interfaces/types_Types.Balance.md)

#### Returns

[`Balance`](../interfaces/types_Types.Balance.md)

#### Defined in

[src/emulator/PooledCreditLines.ts:351](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L351)

___

### startsAt

▸ **startsAt**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:295](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L295)

___

### totalAmountLent

▸ **totalAmountLent**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:263](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L263)

___

### totalInterestRepaid

▸ **totalInterestRepaid**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:319](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L319)

___

### totalLentAmount

▸ **totalLentAmount**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:331](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L331)

___

### totalSupply

▸ **totalSupply**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:267](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L267)

___

### withdrawableCollateral

▸ **withdrawableCollateral**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/34f0eee/src/emulator/PooledCreditLines.ts#L58)
