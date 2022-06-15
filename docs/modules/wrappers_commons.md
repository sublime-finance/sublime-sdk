[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / wrappers/commons

# Module: wrappers/commons

## Table of contents

### Interfaces

- [TypedEvent](../interfaces/wrappers_commons.TypedEvent.md)
- [TypedEventFilter](../interfaces/wrappers_commons.TypedEventFilter.md)

### Type aliases

- [TypedListener](wrappers_commons.md#typedlistener)

## Type aliases

### TypedListener

Ƭ **TypedListener**<`EventArgsArray`, `EventArgsObject`\>: (...`listenerArg`: [...EventArgsArray, [`TypedEvent`](../interfaces/wrappers_commons.TypedEvent.md)<`EventArgsArray` & `EventArgsObject`\>]) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Type declaration

▸ (...`listenerArg`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...listenerArg` | [...EventArgsArray, [`TypedEvent`](../interfaces/wrappers_commons.TypedEvent.md)<`EventArgsArray` & `EventArgsObject`\>] |

##### Returns

`void`

#### Defined in

[src/wrappers/commons.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/6985802/src/wrappers/commons.ts#L14)
