[sublime-sdk](../README.md) / [Modules](../modules.md) / [types/Types](../modules/types_Types.md) / PooledCreditLineDetail

# Interface: PooledCreditLineDetail

[types/Types](../modules/types_Types.md).PooledCreditLineDetail

## Table of contents

### Properties

- [borrowAsset](types_Types.PooledCreditLineDetail.md#borrowasset)
- [borrowLimit](types_Types.PooledCreditLineDetail.md#borrowlimit)
- [borrowRate](types_Types.PooledCreditLineDetail.md#borrowrate)
- [borrowerAddress](types_Types.PooledCreditLineDetail.md#borroweraddress)
- [collateralAsset](types_Types.PooledCreditLineDetail.md#collateralasset)
- [collateralStrategy](types_Types.PooledCreditLineDetail.md#collateralstrategy)
- [collateralTokens](types_Types.PooledCreditLineDetail.md#collateraltokens)
- [createdAt](types_Types.PooledCreditLineDetail.md#createdat)
- [defaultsAt](types_Types.PooledCreditLineDetail.md#defaultsat)
- [endsAt](types_Types.PooledCreditLineDetail.md#endsat)
- [gracePenaltyRate](types_Types.PooledCreditLineDetail.md#gracepenaltyrate)
- [id](types_Types.PooledCreditLineDetail.md#id)
- [idealCollateralRatio](types_Types.PooledCreditLineDetail.md#idealcollateralratio)
- [interestAccruedTillLastPrincipalUpdate](types_Types.PooledCreditLineDetail.md#interestaccruedtilllastprincipalupdate)
- [lastPrincipalUpdateTime](types_Types.PooledCreditLineDetail.md#lastprincipalupdatetime)
- [lenderStrategy](types_Types.PooledCreditLineDetail.md#lenderstrategy)
- [principal](types_Types.PooledCreditLineDetail.md#principal)
- [startsAt](types_Types.PooledCreditLineDetail.md#startsat)
- [status](types_Types.PooledCreditLineDetail.md#status)
- [totalInterestRepaid](types_Types.PooledCreditLineDetail.md#totalinterestrepaid)
- [totalLentAmount](types_Types.PooledCreditLineDetail.md#totallentamount)

## Properties

### borrowAsset

• **borrowAsset**: [`Asset`](types_Types.Asset.md)

#### Defined in

[src/types/Types.ts:213](https://github.com/sublime-finance/sublime-sdk/blob/4f58a2a/src/types/Types.ts#L213)

___

### borrowLimit

• **borrowLimit**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:209](https://github.com/sublime-finance/sublime-sdk/blob/4f58a2a/src/types/Types.ts#L209)

___

### borrowRate

• **borrowRate**: `string`

#### Defined in

[src/types/Types.ts:210](https://github.com/sublime-finance/sublime-sdk/blob/4f58a2a/src/types/Types.ts#L210)

___

### borrowerAddress

• **borrowerAddress**: `string`

#### Defined in

[src/types/Types.ts:208](https://github.com/sublime-finance/sublime-sdk/blob/4f58a2a/src/types/Types.ts#L208)

___

### collateralAsset

• **collateralAsset**: [`Asset`](types_Types.Asset.md)

#### Defined in

[src/types/Types.ts:214](https://github.com/sublime-finance/sublime-sdk/blob/4f58a2a/src/types/Types.ts#L214)

___

### collateralStrategy

• **collateralStrategy**: `string`

#### Defined in

[src/types/Types.ts:220](https://github.com/sublime-finance/sublime-sdk/blob/4f58a2a/src/types/Types.ts#L220)

___

### collateralTokens

• **collateralTokens**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:212](https://github.com/sublime-finance/sublime-sdk/blob/4f58a2a/src/types/Types.ts#L212)

___

### createdAt

• **createdAt**: `string`

#### Defined in

[src/types/Types.ts:215](https://github.com/sublime-finance/sublime-sdk/blob/4f58a2a/src/types/Types.ts#L215)

___

### defaultsAt

• **defaultsAt**: `string`

#### Defined in

[src/types/Types.ts:218](https://github.com/sublime-finance/sublime-sdk/blob/4f58a2a/src/types/Types.ts#L218)

___

### endsAt

• **endsAt**: `string`

#### Defined in

[src/types/Types.ts:217](https://github.com/sublime-finance/sublime-sdk/blob/4f58a2a/src/types/Types.ts#L217)

___

### gracePenaltyRate

• **gracePenaltyRate**: `string`

#### Defined in

[src/types/Types.ts:221](https://github.com/sublime-finance/sublime-sdk/blob/4f58a2a/src/types/Types.ts#L221)

___

### id

• **id**: `string`

#### Defined in

[src/types/Types.ts:207](https://github.com/sublime-finance/sublime-sdk/blob/4f58a2a/src/types/Types.ts#L207)

___

### idealCollateralRatio

• **idealCollateralRatio**: `string`

#### Defined in

[src/types/Types.ts:211](https://github.com/sublime-finance/sublime-sdk/blob/4f58a2a/src/types/Types.ts#L211)

___

### interestAccruedTillLastPrincipalUpdate

• **interestAccruedTillLastPrincipalUpdate**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:226](https://github.com/sublime-finance/sublime-sdk/blob/4f58a2a/src/types/Types.ts#L226)

___

### lastPrincipalUpdateTime

• **lastPrincipalUpdateTime**: `string`

#### Defined in

[src/types/Types.ts:225](https://github.com/sublime-finance/sublime-sdk/blob/4f58a2a/src/types/Types.ts#L225)

___

### lenderStrategy

• **lenderStrategy**: `string`

#### Defined in

[src/types/Types.ts:219](https://github.com/sublime-finance/sublime-sdk/blob/4f58a2a/src/types/Types.ts#L219)

___

### principal

• **principal**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:223](https://github.com/sublime-finance/sublime-sdk/blob/4f58a2a/src/types/Types.ts#L223)

___

### startsAt

• **startsAt**: `string`

#### Defined in

[src/types/Types.ts:216](https://github.com/sublime-finance/sublime-sdk/blob/4f58a2a/src/types/Types.ts#L216)

___

### status

• **status**: [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)

#### Defined in

[src/types/Types.ts:222](https://github.com/sublime-finance/sublime-sdk/blob/4f58a2a/src/types/Types.ts#L222)

___

### totalInterestRepaid

• **totalInterestRepaid**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:224](https://github.com/sublime-finance/sublime-sdk/blob/4f58a2a/src/types/Types.ts#L224)

___

### totalLentAmount

• **totalLentAmount**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:227](https://github.com/sublime-finance/sublime-sdk/blob/4f58a2a/src/types/Types.ts#L227)
