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

[src/emulator/PooledCreditLines.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L26)

## Properties

### externalData

• `Private` **externalData**: [`PooledCreditLineExternalData`](../interfaces/types_Types.PooledCreditLineExternalData.md)

#### Defined in

[src/emulator/PooledCreditLines.ts:21](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L21)

___

### lenderPoolExternalData

• `Private` **lenderPoolExternalData**: [`LenderPoolExternalData`](../interfaces/types_Types.LenderPoolExternalData.md)

#### Defined in

[src/emulator/PooledCreditLines.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L23)

___

### lenderPoolState

• `Private` **lenderPoolState**: [`LenderPoolState`](../interfaces/types_Types.LenderPoolState.md)

#### Defined in

[src/emulator/PooledCreditLines.ts:22](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L22)

___

### lendersPerPool

• `Private` **lendersPerPool**: [`LenderPerPool`](../interfaces/types_Types.LenderPerPool.md)[]

#### Defined in

[src/emulator/PooledCreditLines.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L24)

___

### pooledCreditLineState

• `Private` **pooledCreditLineState**: [`PooledCreditLineState`](../interfaces/types_Types.PooledCreditLineState.md)

#### Defined in

[src/emulator/PooledCreditLines.ts:20](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L20)

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

[src/emulator/PooledCreditLines.ts:133](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L133)

___

### borrowAsset

▸ **borrowAsset**(): `string`

#### Returns

`string`

#### Defined in

[src/emulator/PooledCreditLines.ts:282](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L282)

___

### borrowRate

▸ **borrowRate**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:274](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L274)

___

### borrowerAddress

▸ **borrowerAddress**(): `string`

#### Returns

`string`

#### Defined in

[src/emulator/PooledCreditLines.ts:270](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L270)

___

### borrowerVerifier

▸ **borrowerVerifier**(): `string`

#### Returns

`string`

#### Defined in

[src/emulator/PooledCreditLines.ts:342](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L342)

___

### calculateBorrowableAmount

▸ **calculateBorrowableAmount**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:143](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L143)

___

### calculateCurrentCollateralRatio

▸ **calculateCurrentCollateralRatio**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:168](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L168)

___

### calculateCurrentDebt

▸ **calculateCurrentDebt**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:112](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L112)

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

[src/emulator/PooledCreditLines.ts:124](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L124)

___

### calculateInterestAccrued

▸ **calculateInterestAccrued**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L87)

___

### calculateTotalCollateralTokens

▸ **calculateTotalCollateralTokens**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:120](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L120)

___

### collateralAsset

▸ **collateralAsset**(): `string`

#### Returns

`string`

#### Defined in

[src/emulator/PooledCreditLines.ts:286](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L286)

___

### collateralStrategy

▸ **collateralStrategy**(): `string`

#### Returns

`string`

#### Defined in

[src/emulator/PooledCreditLines.ts:310](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L310)

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

[src/emulator/PooledCreditLines.ts:139](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L139)

___

### createdAt

▸ **createdAt**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:290](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L290)

___

### defaultsAt

▸ **defaultsAt**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:302](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L302)

___

### depositedCollateralInShares

▸ **depositedCollateralInShares**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:338](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L338)

___

### endsAt

▸ **endsAt**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:298](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L298)

___

### getBorrowLimit

▸ **getBorrowLimit**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:258](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L258)

___

### getId

▸ **getId**(): `string`

#### Returns

`string`

#### Defined in

[src/emulator/PooledCreditLines.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L40)

___

### getLenderPoolEmulator

▸ **getLenderPoolEmulator**(): [`LenderPoolEmulator`](emulator_LenderPool.LenderPoolEmulator.md)

#### Returns

[`LenderPoolEmulator`](emulator_LenderPool.LenderPoolEmulator.md)

#### Defined in

[src/emulator/PooledCreditLines.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L44)

___

### getPrincipal

▸ **getPrincipal**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:254](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L254)

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

[src/emulator/PooledCreditLines.ts:128](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L128)

___

### getStatus

▸ **getStatus**(): [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)

#### Returns

[`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)

#### Defined in

[src/emulator/PooledCreditLines.ts:197](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L197)

___

### getStatusAndUpdate

▸ **getStatusAndUpdate**(): [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)

#### Returns

[`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)

#### Defined in

[src/emulator/PooledCreditLines.ts:182](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L182)

___

### gracePenaltyRate

▸ **gracePenaltyRate**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:314](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L314)

___

### idealCollateralratio

▸ **idealCollateralratio**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:278](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L278)

___

### interestAccruedTillLastPrincipalUpdate

▸ **interestAccruedTillLastPrincipalUpdate**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:326](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L326)

___

### lastPrincipalUpdateTime

▸ **lastPrincipalUpdateTime**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:322](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L322)

___

### lenderStrategy

▸ **lenderStrategy**(): `string`

#### Returns

`string`

#### Defined in

[src/emulator/PooledCreditLines.ts:306](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L306)

___

### lenderVerifier

▸ **lenderVerifier**(): `string`

#### Returns

`string`

#### Defined in

[src/emulator/PooledCreditLines.ts:346](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L346)

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

[src/emulator/Helpers.ts:10](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/Helpers.ts#L10)

___

### minBorrowAmount

▸ **minBorrowAmount**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:334](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L334)

___

### now

▸ `Protected` **now**(): `BigNumber`

#### Returns

`BigNumber`

#### Inherited from

[EmulatorHelper](emulator_Helpers.EmulatorHelper.md).[now](emulator_Helpers.EmulatorHelper.md#now)

#### Defined in

[src/emulator/Helpers.ts:6](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/Helpers.ts#L6)

___

### ratioOfCollateralTokensVsBorrowTokensPrice

▸ **ratioOfCollateralTokensVsBorrowTokensPrice**(): [`Balance`](../interfaces/types_Types.Balance.md)

#### Returns

[`Balance`](../interfaces/types_Types.Balance.md)

#### Defined in

[src/emulator/PooledCreditLines.ts:350](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L350)

___

### startsAt

▸ **startsAt**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:294](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L294)

___

### totalAmountLent

▸ **totalAmountLent**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:262](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L262)

___

### totalInterestRepaid

▸ **totalInterestRepaid**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:318](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L318)

___

### totalLentAmount

▸ **totalLentAmount**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:330](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L330)

___

### totalSupply

▸ **totalSupply**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:266](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L266)

___

### withdrawableCollateral

▸ **withdrawableCollateral**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/PooledCreditLines.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/0d24205/src/emulator/PooledCreditLines.ts#L58)
