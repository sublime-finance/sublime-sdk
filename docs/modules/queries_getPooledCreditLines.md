[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / queries/getPooledCreditLines

# Module: queries/getPooledCreditLines

## Table of contents

### Functions

- [getAllLendersPerPool](queries_getPooledCreditLines.md#getalllendersperpool)
- [getAllPooledCreditLines](queries_getPooledCreditLines.md#getallpooledcreditlines)
- [getAllPooledCreditLinesForCount](queries_getPooledCreditLines.md#getallpooledcreditlinesforcount)
- [getAllPooledCreditLinesForCountWithState](queries_getPooledCreditLines.md#getallpooledcreditlinesforcountwithstate)
- [getAllPooledCreditLinesForCountWithStateNotIn](queries_getPooledCreditLines.md#getallpooledcreditlinesforcountwithstatenotin)
- [getAllPooledCreditLinesOfBorrower](queries_getPooledCreditLines.md#getallpooledcreditlinesofborrower)
- [getAllPooledCreditLinesOfBorrowerWithState](queries_getPooledCreditLines.md#getallpooledcreditlinesofborrowerwithstate)
- [getAllPooledCreditLinesOfBorrowerWithStateNotIn](queries_getPooledCreditLines.md#getallpooledcreditlinesofborrowerwithstatenotin)
- [getAllPooledCreditLinesOfLender](queries_getPooledCreditLines.md#getallpooledcreditlinesoflender)
- [getAllPooledCreditLinesOfLenderWithState](queries_getPooledCreditLines.md#getallpooledcreditlinesoflenderwithstate)
- [getAllPooledCreditLinesOfLenderWithStateNotIn](queries_getPooledCreditLines.md#getallpooledcreditlinesoflenderwithstatenotin)
- [getAllPooledCreditLinesWithNotState](queries_getPooledCreditLines.md#getallpooledcreditlineswithnotstate)
- [getAllPooledCreditLinesWithState](queries_getPooledCreditLines.md#getallpooledcreditlineswithstate)
- [getLenderPerPool](queries_getPooledCreditLines.md#getlenderperpool)
- [getLendersOfPooledCreditLines](queries_getPooledCreditLines.md#getlendersofpooledcreditlines)
- [getPCLandLpTogether](queries_getPooledCreditLines.md#getpclandlptogether)
- [getPooledCreditLineById](queries_getPooledCreditLines.md#getpooledcreditlinebyid)
- [getPooledCreditLineTimeline](queries_getPooledCreditLines.md#getpooledcreditlinetimeline)
- [getPooledCreditLinesForLenderById](queries_getPooledCreditLines.md#getpooledcreditlinesforlenderbyid)
- [getPooledCreditLinesOfBorrower](queries_getPooledCreditLines.md#getpooledcreditlinesofborrower)
- [getPooledCreditLinesOfBorrowerWithNotState](queries_getPooledCreditLines.md#getpooledcreditlinesofborrowerwithnotstate)
- [getPooledCreditLinesOfBorrowerWithState](queries_getPooledCreditLines.md#getpooledcreditlinesofborrowerwithstate)
- [getPooledCreditLinesOfLender](queries_getPooledCreditLines.md#getpooledcreditlinesoflender)
- [getPooledCreditLinesOfLenderCanLendTo](queries_getPooledCreditLines.md#getpooledcreditlinesoflendercanlendto)

## Functions

### getAllLendersPerPool

▸ **getAllLendersPerPool**(`url`, `poolIds`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `poolIds` | `string`[] |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getPooledCreditLines.ts:1160](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/queries/getPooledCreditLines.ts#L1160)

___

### getAllPooledCreditLines

▸ **getAllPooledCreditLines**(`url`, `count`, `skip`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `count` | `number` |
| `skip` | `number` |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getPooledCreditLines.ts:500](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/queries/getPooledCreditLines.ts#L500)

___

### getAllPooledCreditLinesForCount

▸ **getAllPooledCreditLinesForCount**(`url`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getPooledCreditLines.ts:722](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/queries/getPooledCreditLines.ts#L722)

___

### getAllPooledCreditLinesForCountWithState

▸ **getAllPooledCreditLinesForCountWithState**(`url`, `status`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `status` | `string`[] |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getPooledCreditLines.ts:753](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/queries/getPooledCreditLines.ts#L753)

___

### getAllPooledCreditLinesForCountWithStateNotIn

▸ **getAllPooledCreditLinesForCountWithStateNotIn**(`url`, `status`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `status` | `string`[] |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getPooledCreditLines.ts:787](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/queries/getPooledCreditLines.ts#L787)

___

### getAllPooledCreditLinesOfBorrower

▸ **getAllPooledCreditLinesOfBorrower**(`url`, `borrowerAddress`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `borrowerAddress` | `string` |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getPooledCreditLines.ts:1032](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/queries/getPooledCreditLines.ts#L1032)

___

### getAllPooledCreditLinesOfBorrowerWithState

▸ **getAllPooledCreditLinesOfBorrowerWithState**(`url`, `borrowerAddress`, `status`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `borrowerAddress` | `string` |
| `status` | `string`[] |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getPooledCreditLines.ts:956](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/queries/getPooledCreditLines.ts#L956)

___

### getAllPooledCreditLinesOfBorrowerWithStateNotIn

▸ **getAllPooledCreditLinesOfBorrowerWithStateNotIn**(`url`, `borrowerAddress`, `status`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `borrowerAddress` | `string` |
| `status` | `string`[] |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getPooledCreditLines.ts:993](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/queries/getPooledCreditLines.ts#L993)

___

### getAllPooledCreditLinesOfLender

▸ **getAllPooledCreditLinesOfLender**(`url`, `lenderAddress`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `lenderAddress` | `string` |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getPooledCreditLines.ts:866](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/queries/getPooledCreditLines.ts#L866)

___

### getAllPooledCreditLinesOfLenderWithState

▸ **getAllPooledCreditLinesOfLenderWithState**(`url`, `lenderAddress`, `status`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `lenderAddress` | `string` |
| `status` | `string`[] |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getPooledCreditLines.ts:821](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/queries/getPooledCreditLines.ts#L821)

___

### getAllPooledCreditLinesOfLenderWithStateNotIn

▸ **getAllPooledCreditLinesOfLenderWithStateNotIn**(`url`, `lenderAddress`, `status`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `lenderAddress` | `string` |
| `status` | `string`[] |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getPooledCreditLines.ts:911](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/queries/getPooledCreditLines.ts#L911)

___

### getAllPooledCreditLinesWithNotState

▸ **getAllPooledCreditLinesWithNotState**(`url`, `count`, `skip`, `status`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `count` | `number` |
| `skip` | `number` |
| `status` | `string`[] |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getPooledCreditLines.ts:616](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/queries/getPooledCreditLines.ts#L616)

___

### getAllPooledCreditLinesWithState

▸ **getAllPooledCreditLinesWithState**(`url`, `count`, `skip`, `status`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `count` | `number` |
| `skip` | `number` |
| `status` | `string`[] |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getPooledCreditLines.ts:558](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/queries/getPooledCreditLines.ts#L558)

___

### getLenderPerPool

▸ **getLenderPerPool**(`url`, `id`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `id` | `string` |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getPooledCreditLines.ts:674](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/queries/getPooledCreditLines.ts#L674)

___

### getLendersOfPooledCreditLines

▸ **getLendersOfPooledCreditLines**(`url`, `id`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `id` | `string` |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getPooledCreditLines.ts:1067](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/queries/getPooledCreditLines.ts#L1067)

___

### getPCLandLpTogether

▸ **getPCLandLpTogether**(`url`, `count`, `skip`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `count` | `number` |
| `skip` | `number` |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getPooledCreditLines.ts:1104](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/queries/getPooledCreditLines.ts#L1104)

___

### getPooledCreditLineById

▸ **getPooledCreditLineById**(`url`, `id`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `id` | `number` |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getPooledCreditLines.ts:442](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/queries/getPooledCreditLines.ts#L442)

___

### getPooledCreditLineTimeline

▸ **getPooledCreditLineTimeline**(`url`, `pooledCreditLineId`, `count`, `skip`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `pooledCreditLineId` | `string` |
| `count` | `number` |
| `skip` | `number` |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getPooledCreditLines.ts:3](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/queries/getPooledCreditLines.ts#L3)

___

### getPooledCreditLinesForLenderById

▸ **getPooledCreditLinesForLenderById**(`url`, `lenderAddress`, `id`): `Promise`<[`any`[], `any`[]]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `lenderAddress` | `string` |
| `id` | `string` |

#### Returns

`Promise`<[`any`[], `any`[]]\>

#### Defined in

[src/queries/getPooledCreditLines.ts:114](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/queries/getPooledCreditLines.ts#L114)

___

### getPooledCreditLinesOfBorrower

▸ **getPooledCreditLinesOfBorrower**(`url`, `borrower`, `count`, `skip`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `borrower` | `string` |
| `count` | `number` |
| `skip` | `number` |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getPooledCreditLines.ts:195](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/queries/getPooledCreditLines.ts#L195)

___

### getPooledCreditLinesOfBorrowerWithNotState

▸ **getPooledCreditLinesOfBorrowerWithNotState**(`url`, `borrower`, `count`, `skip`, `status`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `borrower` | `string` |
| `count` | `number` |
| `skip` | `number` |
| `status` | `string`[] |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getPooledCreditLines.ts:318](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/queries/getPooledCreditLines.ts#L318)

___

### getPooledCreditLinesOfBorrowerWithState

▸ **getPooledCreditLinesOfBorrowerWithState**(`url`, `borrower`, `count`, `skip`, `status`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `borrower` | `string` |
| `count` | `number` |
| `skip` | `number` |
| `status` | `string`[] |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getPooledCreditLines.ts:254](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/queries/getPooledCreditLines.ts#L254)

___

### getPooledCreditLinesOfLender

▸ **getPooledCreditLinesOfLender**(`url`, `lenderAddress`, `count`, `skip`): `Promise`<[`any`[], `any`[]]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `lenderAddress` | `string` |
| `count` | `number` |
| `skip` | `number` |

#### Returns

`Promise`<[`any`[], `any`[]]\>

#### Defined in

[src/queries/getPooledCreditLines.ts:30](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/queries/getPooledCreditLines.ts#L30)

___

### getPooledCreditLinesOfLenderCanLendTo

▸ **getPooledCreditLinesOfLenderCanLendTo**(`url`, `lender`, `count`, `skip`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `lender` | `string` |
| `count` | `number` |
| `skip` | `number` |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getPooledCreditLines.ts:383](https://github.com/sublime-finance/sublime-sdk/blob/f5d6e70/src/queries/getPooledCreditLines.ts#L383)
