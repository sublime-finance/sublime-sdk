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

[src/queries/getAllCreditLines.ts:712](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/queries/getAllCreditLines.ts#L712)

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

[src/queries/getAllCreditLines.ts:38](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/queries/getAllCreditLines.ts#L38)

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

[src/queries/getAllCreditLines.ts:356](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/queries/getAllCreditLines.ts#L356)

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

[src/queries/getAllCreditLines.ts:365](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/queries/getAllCreditLines.ts#L365)

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

[src/queries/getAllCreditLines.ts:160](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/queries/getAllCreditLines.ts#L160)

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

[src/queries/getAllCreditLines.ts:3](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/queries/getAllCreditLines.ts#L3)

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

[src/queries/getAllCreditLines.ts:347](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/queries/getAllCreditLines.ts#L347)

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

[src/queries/getAllCreditLines.ts:410](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/queries/getAllCreditLines.ts#L410)

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

[src/queries/getAllCreditLines.ts:480](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/queries/getAllCreditLines.ts#L480)

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

[src/queries/getAllCreditLines.ts:632](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/queries/getAllCreditLines.ts#L632)

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

[src/queries/getAllCreditLines.ts:552](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/queries/getAllCreditLines.ts#L552)

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

[src/queries/getAllCreditLines.ts:445](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/queries/getAllCreditLines.ts#L445)

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

[src/queries/getAllCreditLines.ts:515](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/queries/getAllCreditLines.ts#L515)

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

[src/queries/getAllCreditLines.ts:672](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/queries/getAllCreditLines.ts#L672)

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

[src/queries/getAllCreditLines.ts:592](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/queries/getAllCreditLines.ts#L592)

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

[src/queries/getAllCreditLines.ts:392](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/queries/getAllCreditLines.ts#L392)

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

[src/queries/getAllCreditLines.ts:401](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/queries/getAllCreditLines.ts#L401)

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

[src/queries/getAllCreditLines.ts:383](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/queries/getAllCreditLines.ts#L383)

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

[src/queries/getAllCreditLines.ts:374](https://github.com/sublime-finance/sublime-sdk/blob/b39ddff/src/queries/getAllCreditLines.ts#L374)
