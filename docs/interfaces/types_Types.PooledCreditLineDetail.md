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
- [currentCollateralRatio](types_Types.PooledCreditLineDetail.md#currentcollateralratio)
- [currentDebt](types_Types.PooledCreditLineDetail.md#currentdebt)
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

[src/types/Types.ts:257](https://github.com/sublime-finance/sublime-sdk/blob/96b51e9/src/types/Types.ts#L257)

___

### borrowLimit

• **borrowLimit**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:253](https://github.com/sublime-finance/sublime-sdk/blob/96b51e9/src/types/Types.ts#L253)

___

### borrowRate

• **borrowRate**: `string`

#### Defined in

[src/types/Types.ts:254](https://github.com/sublime-finance/sublime-sdk/blob/96b51e9/src/types/Types.ts#L254)

___

### borrowerAddress

• **borrowerAddress**: `string`

#### Defined in

[src/types/Types.ts:252](https://github.com/sublime-finance/sublime-sdk/blob/96b51e9/src/types/Types.ts#L252)

___

### collateralAsset

• **collateralAsset**: [`Asset`](types_Types.Asset.md)

#### Defined in

[src/types/Types.ts:258](https://github.com/sublime-finance/sublime-sdk/blob/96b51e9/src/types/Types.ts#L258)

___

### collateralStrategy

• **collateralStrategy**: [`Strategy`](types_Types.Strategy.md)

#### Defined in

[src/types/Types.ts:264](https://github.com/sublime-finance/sublime-sdk/blob/96b51e9/src/types/Types.ts#L264)

___

### collateralTokens

• **collateralTokens**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:256](https://github.com/sublime-finance/sublime-sdk/blob/96b51e9/src/types/Types.ts#L256)

___

### createdAt

• **createdAt**: `string`

#### Defined in

[src/types/Types.ts:259](https://github.com/sublime-finance/sublime-sdk/blob/96b51e9/src/types/Types.ts#L259)

___

### currentCollateralRatio

• **currentCollateralRatio**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:272](https://github.com/sublime-finance/sublime-sdk/blob/96b51e9/src/types/Types.ts#L272)

___

### currentDebt

• **currentDebt**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:273](https://github.com/sublime-finance/sublime-sdk/blob/96b51e9/src/types/Types.ts#L273)

___

### defaultsAt

• **defaultsAt**: `string`

#### Defined in

[src/types/Types.ts:262](https://github.com/sublime-finance/sublime-sdk/blob/96b51e9/src/types/Types.ts#L262)

___

### endsAt

• **endsAt**: `string`

#### Defined in

[src/types/Types.ts:261](https://github.com/sublime-finance/sublime-sdk/blob/96b51e9/src/types/Types.ts#L261)

___

### gracePenaltyRate

• **gracePenaltyRate**: `string`

#### Defined in

[src/types/Types.ts:265](https://github.com/sublime-finance/sublime-sdk/blob/96b51e9/src/types/Types.ts#L265)

___

### id

• **id**: `string`

#### Defined in

[src/types/Types.ts:251](https://github.com/sublime-finance/sublime-sdk/blob/96b51e9/src/types/Types.ts#L251)

___

### idealCollateralRatio

• **idealCollateralRatio**: `string`

#### Defined in

[src/types/Types.ts:255](https://github.com/sublime-finance/sublime-sdk/blob/96b51e9/src/types/Types.ts#L255)

___

### interestAccruedTillLastPrincipalUpdate

• **interestAccruedTillLastPrincipalUpdate**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:270](https://github.com/sublime-finance/sublime-sdk/blob/96b51e9/src/types/Types.ts#L270)

___

### lastPrincipalUpdateTime

• **lastPrincipalUpdateTime**: `string`

#### Defined in

[src/types/Types.ts:269](https://github.com/sublime-finance/sublime-sdk/blob/96b51e9/src/types/Types.ts#L269)

___

### lenderStrategy

• **lenderStrategy**: [`Strategy`](types_Types.Strategy.md)

#### Defined in

[src/types/Types.ts:263](https://github.com/sublime-finance/sublime-sdk/blob/96b51e9/src/types/Types.ts#L263)

___

### principal

• **principal**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:267](https://github.com/sublime-finance/sublime-sdk/blob/96b51e9/src/types/Types.ts#L267)

___

### startsAt

• **startsAt**: `string`

#### Defined in

[src/types/Types.ts:260](https://github.com/sublime-finance/sublime-sdk/blob/96b51e9/src/types/Types.ts#L260)

___

### status

• **status**: [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)

#### Defined in

[src/types/Types.ts:266](https://github.com/sublime-finance/sublime-sdk/blob/96b51e9/src/types/Types.ts#L266)

___

### totalInterestRepaid

• **totalInterestRepaid**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:268](https://github.com/sublime-finance/sublime-sdk/blob/96b51e9/src/types/Types.ts#L268)

___

### totalLentAmount

• **totalLentAmount**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:271](https://github.com/sublime-finance/sublime-sdk/blob/96b51e9/src/types/Types.ts#L271)
