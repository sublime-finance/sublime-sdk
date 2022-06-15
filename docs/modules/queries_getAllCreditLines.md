[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / queries/getAllCreditLines

# Module: queries/getAllCreditLines

## Table of contents

### Functions

- [getAllCreditLinesForCount](queries_getAllCreditLines.md#getallcreditlinesforcount)
- [getAllCreditLinesFromSubgraph](queries_getAllCreditLines.md#getallcreditlinesfromsubgraph)
- [getConfirmedCreditLinesOfBorrower](queries_getAllCreditLines.md#getconfirmedcreditlinesofborrower)
- [getConfirmedCreditLinesOfLender](queries_getAllCreditLines.md#getconfirmedcreditlinesoflender)
- [getCreditLine](queries_getAllCreditLines.md#getcreditline)
- [getCreditLineTimeline](queries_getAllCreditLines.md#getcreditlinetimeline)
- [getCreditLinesLenderCanLenderTo](queries_getAllCreditLines.md#getcreditlineslendercanlenderto)
- [getCreditLinesOfBorrowerWithState](queries_getAllCreditLines.md#getcreditlinesofborrowerwithstate)
- [getCreditLinesOfBorrowerWithStateNotIn](queries_getAllCreditLines.md#getcreditlinesofborrowerwithstatenotin)
- [getCreditLinesOfBorrowerWithStateNotIn\_requestByLender](queries_getAllCreditLines.md#getcreditlinesofborrowerwithstatenotin_requestbylender)
- [getCreditLinesOfBorrowerWithState\_requestByLender](queries_getAllCreditLines.md#getcreditlinesofborrowerwithstate_requestbylender)
- [getCreditLinesOfLenderWithState](queries_getAllCreditLines.md#getcreditlinesoflenderwithstate)
- [getCreditLinesOfLenderWithStateNotIn](queries_getAllCreditLines.md#getcreditlinesoflenderwithstatenotin)
- [getCreditLinesOfLenderWithStateNotIn\_requestByLender](queries_getAllCreditLines.md#getcreditlinesoflenderwithstatenotin_requestbylender)
- [getCreditLinesOfLenderWithState\_requestByLender](queries_getAllCreditLines.md#getcreditlinesoflenderwithstate_requestbylender)
- [getPendingCreditLinesRequestedByBorrower](queries_getAllCreditLines.md#getpendingcreditlinesrequestedbyborrower)
- [getPendingCreditLinesRequestedToBorrower](queries_getAllCreditLines.md#getpendingcreditlinesrequestedtoborrower)
- [getPendingCreditLinesRequestedToLender](queries_getAllCreditLines.md#getpendingcreditlinesrequestedtolender)
- [getPendingCreditlinesRequestedByLender](queries_getAllCreditLines.md#getpendingcreditlinesrequestedbylender)

## Functions

### getAllCreditLinesForCount

▸ **getAllCreditLinesForCount**(`url`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getAllCreditLines.ts:706](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/queries/getAllCreditLines.ts#L706)

___

### getAllCreditLinesFromSubgraph

▸ **getAllCreditLinesFromSubgraph**(`url`, `count`, `skip`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `count` | `number` |
| `skip` | `number` |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getAllCreditLines.ts:37](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/queries/getAllCreditLines.ts#L37)

___

### getConfirmedCreditLinesOfBorrower

▸ **getConfirmedCreditLinesOfBorrower**(`url`, `borrower`, `count`, `skip`): `Promise`<`any`[]\>

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

[src/queries/getAllCreditLines.ts:350](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/queries/getAllCreditLines.ts#L350)

___

### getConfirmedCreditLinesOfLender

▸ **getConfirmedCreditLinesOfLender**(`url`, `lender`, `count`, `skip`): `Promise`<`any`[]\>

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

[src/queries/getAllCreditLines.ts:359](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/queries/getAllCreditLines.ts#L359)

___

### getCreditLine

▸ **getCreditLine**(`url`, `id`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `id` | `string` |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getAllCreditLines.ts:157](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/queries/getAllCreditLines.ts#L157)

___

### getCreditLineTimeline

▸ **getCreditLineTimeline**(`url`, `creditLineNumber`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `creditLineNumber` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/queries/getAllCreditLines.ts:3](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/queries/getAllCreditLines.ts#L3)

___

### getCreditLinesLenderCanLenderTo

▸ **getCreditLinesLenderCanLenderTo**(`url`, `lender`, `count`, `skip`): `Promise`<`any`[]\>

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

[src/queries/getAllCreditLines.ts:341](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/queries/getAllCreditLines.ts#L341)

___

### getCreditLinesOfBorrowerWithState

▸ **getCreditLinesOfBorrowerWithState**(`url`, `address`, `status`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `address` | `string` |
| `status` | `string`[] |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getAllCreditLines.ts:404](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/queries/getAllCreditLines.ts#L404)

___

### getCreditLinesOfBorrowerWithStateNotIn

▸ **getCreditLinesOfBorrowerWithStateNotIn**(`url`, `address`, `status`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `address` | `string` |
| `status` | `string`[] |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getAllCreditLines.ts:474](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/queries/getAllCreditLines.ts#L474)

___

### getCreditLinesOfBorrowerWithStateNotIn\_requestByLender

▸ **getCreditLinesOfBorrowerWithStateNotIn_requestByLender**(`url`, `address`, `requestByLender`, `status`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `address` | `string` |
| `requestByLender` | `boolean` |
| `status` | `string`[] |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getAllCreditLines.ts:626](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/queries/getAllCreditLines.ts#L626)

___

### getCreditLinesOfBorrowerWithState\_requestByLender

▸ **getCreditLinesOfBorrowerWithState_requestByLender**(`url`, `address`, `requestByLender`, `status`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `address` | `string` |
| `requestByLender` | `boolean` |
| `status` | `string`[] |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getAllCreditLines.ts:546](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/queries/getAllCreditLines.ts#L546)

___

### getCreditLinesOfLenderWithState

▸ **getCreditLinesOfLenderWithState**(`url`, `address`, `status`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `address` | `string` |
| `status` | `string`[] |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getAllCreditLines.ts:439](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/queries/getAllCreditLines.ts#L439)

___

### getCreditLinesOfLenderWithStateNotIn

▸ **getCreditLinesOfLenderWithStateNotIn**(`url`, `address`, `status`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `address` | `string` |
| `status` | `string`[] |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getAllCreditLines.ts:509](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/queries/getAllCreditLines.ts#L509)

___

### getCreditLinesOfLenderWithStateNotIn\_requestByLender

▸ **getCreditLinesOfLenderWithStateNotIn_requestByLender**(`url`, `address`, `requestByLender`, `status`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `address` | `string` |
| `requestByLender` | `boolean` |
| `status` | `string`[] |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getAllCreditLines.ts:666](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/queries/getAllCreditLines.ts#L666)

___

### getCreditLinesOfLenderWithState\_requestByLender

▸ **getCreditLinesOfLenderWithState_requestByLender**(`url`, `address`, `requestByLender`, `status`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `address` | `string` |
| `requestByLender` | `boolean` |
| `status` | `string`[] |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/queries/getAllCreditLines.ts:586](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/queries/getAllCreditLines.ts#L586)

___

### getPendingCreditLinesRequestedByBorrower

▸ **getPendingCreditLinesRequestedByBorrower**(`url`, `borrower`, `count`, `skip`): `Promise`<`any`[]\>

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

[src/queries/getAllCreditLines.ts:386](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/queries/getAllCreditLines.ts#L386)

___

### getPendingCreditLinesRequestedToBorrower

▸ **getPendingCreditLinesRequestedToBorrower**(`url`, `borrower`, `count`, `skip`): `Promise`<`any`[]\>

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

[src/queries/getAllCreditLines.ts:395](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/queries/getAllCreditLines.ts#L395)

___

### getPendingCreditLinesRequestedToLender

▸ **getPendingCreditLinesRequestedToLender**(`url`, `lender`, `count`, `skip`): `Promise`<`any`[]\>

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

[src/queries/getAllCreditLines.ts:377](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/queries/getAllCreditLines.ts#L377)

___

### getPendingCreditlinesRequestedByLender

▸ **getPendingCreditlinesRequestedByLender**(`url`, `lender`, `count`, `skip`): `Promise`<`any`[]\>

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

[src/queries/getAllCreditLines.ts:368](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/queries/getAllCreditLines.ts#L368)
