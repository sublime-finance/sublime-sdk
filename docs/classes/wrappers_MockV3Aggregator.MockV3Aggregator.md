[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [wrappers/MockV3Aggregator](../modules/wrappers_MockV3Aggregator.md) / MockV3Aggregator

# Class: MockV3Aggregator

[wrappers/MockV3Aggregator](../modules/wrappers_MockV3Aggregator.md).MockV3Aggregator

## Hierarchy

- `Contract`

  ↳ **`MockV3Aggregator`**

## Table of contents

### Constructors

- [constructor](wrappers_MockV3Aggregator.MockV3Aggregator.md#constructor)

### Properties

- [\_deployedPromise](wrappers_MockV3Aggregator.MockV3Aggregator.md#_deployedpromise)
- [\_runningEvents](wrappers_MockV3Aggregator.MockV3Aggregator.md#_runningevents)
- [\_wrappedEmits](wrappers_MockV3Aggregator.MockV3Aggregator.md#_wrappedemits)
- [address](wrappers_MockV3Aggregator.MockV3Aggregator.md#address)
- [callStatic](wrappers_MockV3Aggregator.MockV3Aggregator.md#callstatic)
- [deployTransaction](wrappers_MockV3Aggregator.MockV3Aggregator.md#deploytransaction)
- [estimateGas](wrappers_MockV3Aggregator.MockV3Aggregator.md#estimategas)
- [filters](wrappers_MockV3Aggregator.MockV3Aggregator.md#filters)
- [functions](wrappers_MockV3Aggregator.MockV3Aggregator.md#functions)
- [interface](wrappers_MockV3Aggregator.MockV3Aggregator.md#interface)
- [populateTransaction](wrappers_MockV3Aggregator.MockV3Aggregator.md#populatetransaction)
- [provider](wrappers_MockV3Aggregator.MockV3Aggregator.md#provider)
- [resolvedAddress](wrappers_MockV3Aggregator.MockV3Aggregator.md#resolvedaddress)
- [signer](wrappers_MockV3Aggregator.MockV3Aggregator.md#signer)

### Methods

- [\_checkRunningEvents](wrappers_MockV3Aggregator.MockV3Aggregator.md#_checkrunningevents)
- [\_deployed](wrappers_MockV3Aggregator.MockV3Aggregator.md#_deployed)
- [\_wrapEvent](wrappers_MockV3Aggregator.MockV3Aggregator.md#_wrapevent)
- [attach](wrappers_MockV3Aggregator.MockV3Aggregator.md#attach)
- [connect](wrappers_MockV3Aggregator.MockV3Aggregator.md#connect)
- [decimals](wrappers_MockV3Aggregator.MockV3Aggregator.md#decimals)
- [decimals()](wrappers_MockV3Aggregator.MockV3Aggregator.md#decimals())
- [deployed](wrappers_MockV3Aggregator.MockV3Aggregator.md#deployed)
- [description](wrappers_MockV3Aggregator.MockV3Aggregator.md#description)
- [description()](wrappers_MockV3Aggregator.MockV3Aggregator.md#description())
- [emit](wrappers_MockV3Aggregator.MockV3Aggregator.md#emit)
- [fallback](wrappers_MockV3Aggregator.MockV3Aggregator.md#fallback)
- [getAnswer](wrappers_MockV3Aggregator.MockV3Aggregator.md#getanswer)
- [getAnswer(uint256)](wrappers_MockV3Aggregator.MockV3Aggregator.md#getanswer(uint256))
- [getRoundData](wrappers_MockV3Aggregator.MockV3Aggregator.md#getrounddata)
- [getRoundData(uint80)](wrappers_MockV3Aggregator.MockV3Aggregator.md#getrounddata(uint80))
- [getTimestamp](wrappers_MockV3Aggregator.MockV3Aggregator.md#gettimestamp)
- [getTimestamp(uint256)](wrappers_MockV3Aggregator.MockV3Aggregator.md#gettimestamp(uint256))
- [latestAnswer](wrappers_MockV3Aggregator.MockV3Aggregator.md#latestanswer)
- [latestAnswer()](wrappers_MockV3Aggregator.MockV3Aggregator.md#latestanswer())
- [latestRound](wrappers_MockV3Aggregator.MockV3Aggregator.md#latestround)
- [latestRound()](wrappers_MockV3Aggregator.MockV3Aggregator.md#latestround())
- [latestRoundData](wrappers_MockV3Aggregator.MockV3Aggregator.md#latestrounddata)
- [latestRoundData()](wrappers_MockV3Aggregator.MockV3Aggregator.md#latestrounddata())
- [latestTimestamp](wrappers_MockV3Aggregator.MockV3Aggregator.md#latesttimestamp)
- [latestTimestamp()](wrappers_MockV3Aggregator.MockV3Aggregator.md#latesttimestamp())
- [listenerCount](wrappers_MockV3Aggregator.MockV3Aggregator.md#listenercount)
- [listeners](wrappers_MockV3Aggregator.MockV3Aggregator.md#listeners)
- [off](wrappers_MockV3Aggregator.MockV3Aggregator.md#off)
- [on](wrappers_MockV3Aggregator.MockV3Aggregator.md#on)
- [once](wrappers_MockV3Aggregator.MockV3Aggregator.md#once)
- [queryFilter](wrappers_MockV3Aggregator.MockV3Aggregator.md#queryfilter)
- [removeAllListeners](wrappers_MockV3Aggregator.MockV3Aggregator.md#removealllisteners)
- [removeListener](wrappers_MockV3Aggregator.MockV3Aggregator.md#removelistener)
- [setAnswer](wrappers_MockV3Aggregator.MockV3Aggregator.md#setanswer)
- [setAnswer(int256)](wrappers_MockV3Aggregator.MockV3Aggregator.md#setanswer(int256))
- [updateAnswer](wrappers_MockV3Aggregator.MockV3Aggregator.md#updateanswer)
- [updateAnswer(int256)](wrappers_MockV3Aggregator.MockV3Aggregator.md#updateanswer(int256))
- [updateRoundData](wrappers_MockV3Aggregator.MockV3Aggregator.md#updaterounddata)
- [updateRoundData(uint80,int256,uint256,uint256)](wrappers_MockV3Aggregator.MockV3Aggregator.md#updaterounddata(uint80,int256,uint256,uint256))
- [version](wrappers_MockV3Aggregator.MockV3Aggregator.md#version)
- [version()](wrappers_MockV3Aggregator.MockV3Aggregator.md#version())
- [getContractAddress](wrappers_MockV3Aggregator.MockV3Aggregator.md#getcontractaddress)
- [getInterface](wrappers_MockV3Aggregator.MockV3Aggregator.md#getinterface)
- [isIndexed](wrappers_MockV3Aggregator.MockV3Aggregator.md#isindexed)

## Constructors

### constructor

• **new MockV3Aggregator**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `description` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `description()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getAnswer` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getAnswer(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getRoundData` | (`_roundId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\> |
| `getRoundData(uint80)` | (`_roundId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\> |
| `getTimestamp` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTimestamp(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `latestAnswer` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `latestAnswer()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `latestRound` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `latestRound()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `latestRoundData` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\> |
| `latestRoundData()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\> |
| `latestTimestamp` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `latestTimestamp()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `setAnswer` | (`_answer`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setAnswer(int256)` | (`_answer`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateAnswer` | (`_answer`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateAnswer(int256)` | (`_answer`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateRoundData` | (`_roundId`: `BigNumberish`, `_answer`: `BigNumberish`, `_timestamp`: `BigNumberish`, `_startedAt`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateRoundData(uint80,int256,uint256,uint256)` | (`_roundId`: `BigNumberish`, `_answer`: `BigNumberish`, `_timestamp`: `BigNumberish`, `_startedAt`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.callStatic

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:322](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L322)

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
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `description` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `description()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getAnswer` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getAnswer(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getRoundData` | (`_roundId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getRoundData(uint80)` | (`_roundId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTimestamp` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTimestamp(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `latestAnswer` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `latestAnswer()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `latestRound` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `latestRound()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `latestRoundData` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `latestRoundData()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `latestTimestamp` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `latestTimestamp()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `setAnswer` | (`_answer`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setAnswer(int256)` | (`_answer`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateAnswer` | (`_answer`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateAnswer(int256)` | (`_answer`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateRoundData` | (`_roundId`: `BigNumberish`, `_answer`: `BigNumberish`, `_timestamp`: `BigNumberish`, `_startedAt`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateRoundData(uint80,int256,uint256,uint256)` | (`_roundId`: `BigNumberish`, `_answer`: `BigNumberish`, `_timestamp`: `BigNumberish`, `_startedAt`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

Contract.estimateGas

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:428](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L428)

___

### filters

• **filters**: `Object`

#### Overrides

Contract.filters

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:426](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L426)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `description` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `description()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getAnswer` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getAnswer(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getRoundData` | (`_roundId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\> |
| `getRoundData(uint80)` | (`_roundId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\> |
| `getTimestamp` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getTimestamp(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `latestAnswer` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `latestAnswer()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `latestRound` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `latestRound()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `latestRoundData` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\> |
| `latestRoundData()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\> |
| `latestTimestamp` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `latestTimestamp()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `setAnswer` | (`_answer`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setAnswer(int256)` | (`_answer`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateAnswer` | (`_answer`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateAnswer(int256)` | (`_answer`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateRoundData` | (`_roundId`: `BigNumberish`, `_answer`: `BigNumberish`, `_timestamp`: `BigNumberish`, `_startedAt`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateRoundData(uint80,int256,uint256,uint256)` | (`_roundId`: `BigNumberish`, `_answer`: `BigNumberish`, `_timestamp`: `BigNumberish`, `_startedAt`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |

#### Overrides

Contract.functions

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:113](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L113)

___

### interface

• **interface**: [`MockV3AggregatorInterface`](../interfaces/wrappers_MockV3Aggregator.MockV3AggregatorInterface.md)

#### Overrides

Contract.interface

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:111](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L111)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `description` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `description()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getAnswer` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getAnswer(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getRoundData` | (`_roundId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getRoundData(uint80)` | (`_roundId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTimestamp` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTimestamp(uint256)` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `latestAnswer` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `latestAnswer()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `latestRound` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `latestRound()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `latestRoundData` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `latestRoundData()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `latestTimestamp` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `latestTimestamp()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `setAnswer` | (`_answer`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setAnswer(int256)` | (`_answer`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateAnswer` | (`_answer`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateAnswer(int256)` | (`_answer`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateRoundData` | (`_roundId`: `BigNumberish`, `_answer`: `BigNumberish`, `_timestamp`: `BigNumberish`, `_startedAt`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateRoundData(uint80,int256,uint256,uint256)` | (`_roundId`: `BigNumberish`, `_answer`: `BigNumberish`, `_timestamp`: `BigNumberish`, `_startedAt`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

Contract.populateTransaction

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:494](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L494)

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

▸ **attach**(`addressOrName`): [`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)

#### Overrides

Contract.attach

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L72)

___

### connect

▸ **connect**(`signerOrProvider`): [`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)

#### Overrides

Contract.connect

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L71)

___

### decimals

▸ **decimals**(`overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:220](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L220)

___

### decimals()

▸ **decimals()**(`overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:222](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L222)

___

### deployed

▸ **deployed**(): `Promise`<[`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)\>

#### Returns

`Promise`<[`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)\>

#### Overrides

Contract.deployed

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L73)

___

### description

▸ **description**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:224](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L224)

___

### description()

▸ **description()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:226](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L226)

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

### getAnswer

▸ **getAnswer**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:228](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L228)

___

### getAnswer(uint256)

▸ **getAnswer(uint256)**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:230](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L230)

___

### getRoundData

▸ **getRoundData**(`_roundId`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_roundId` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\>

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:232](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L232)

___

### getRoundData(uint80)

▸ **getRoundData(uint80)**(`_roundId`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_roundId` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\>

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:245](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L245)

___

### getTimestamp

▸ **getTimestamp**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:258](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L258)

___

### getTimestamp(uint256)

▸ **getTimestamp(uint256)**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:260](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L260)

___

### latestAnswer

▸ **latestAnswer**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:262](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L262)

___

### latestAnswer()

▸ **latestAnswer()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:264](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L264)

___

### latestRound

▸ **latestRound**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:266](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L266)

___

### latestRound()

▸ **latestRound()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:268](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L268)

___

### latestRoundData

▸ **latestRoundData**(`overrides?`): `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\>

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:270](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L270)

___

### latestRoundData()

▸ **latestRoundData()**(`overrides?`): `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\>

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:280](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L280)

___

### latestTimestamp

▸ **latestTimestamp**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:290](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L290)

___

### latestTimestamp()

▸ **latestTimestamp()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:292](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L292)

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

[src/wrappers/MockV3Aggregator.d.ts:75](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L75)

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

[src/wrappers/MockV3Aggregator.d.ts:98](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L98)

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)

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

[`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:78](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L78)

▸ **off**(`eventName`, `listener`): [`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)

#### Overrides

Contract.off

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:99](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L99)

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)

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

[`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L82)

▸ **on**(`eventName`, `listener`): [`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)

#### Overrides

Contract.on

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:100](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L100)

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)

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

[`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:86](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L86)

▸ **once**(`eventName`, `listener`): [`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)

#### Overrides

Contract.once

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:101](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L101)

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

[src/wrappers/MockV3Aggregator.d.ts:105](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L105)

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)

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

[`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:94](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L94)

▸ **removeAllListeners**(`eventName?`): [`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)

#### Overrides

Contract.removeAllListeners

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:103](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L103)

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)

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

[`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:90](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L90)

▸ **removeListener**(`eventName`, `listener`): [`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`MockV3Aggregator`](wrappers_MockV3Aggregator.MockV3Aggregator.md)

#### Overrides

Contract.removeListener

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:102](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L102)

___

### setAnswer

▸ **setAnswer**(`_answer`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_answer` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:294](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L294)

___

### setAnswer(int256)

▸ **setAnswer(int256)**(`_answer`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_answer` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:296](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L296)

___

### updateAnswer

▸ **updateAnswer**(`_answer`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_answer` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:298](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L298)

___

### updateAnswer(int256)

▸ **updateAnswer(int256)**(`_answer`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_answer` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:300](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L300)

___

### updateRoundData

▸ **updateRoundData**(`_roundId`, `_answer`, `_timestamp`, `_startedAt`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_roundId` | `BigNumberish` |
| `_answer` | `BigNumberish` |
| `_timestamp` | `BigNumberish` |
| `_startedAt` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:302](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L302)

___

### updateRoundData(uint80,int256,uint256,uint256)

▸ **updateRoundData(uint80,int256,uint256,uint256)**(`_roundId`, `_answer`, `_timestamp`, `_startedAt`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_roundId` | `BigNumberish` |
| `_answer` | `BigNumberish` |
| `_timestamp` | `BigNumberish` |
| `_startedAt` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:310](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L310)

___

### version

▸ **version**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:318](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L318)

___

### version()

▸ **version()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/wrappers/MockV3Aggregator.d.ts:320](https://github.com/sublime-finance/sublime-sdk/blob/d3b62bd/src/wrappers/MockV3Aggregator.d.ts#L320)

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
