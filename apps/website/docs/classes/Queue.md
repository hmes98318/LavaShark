# Queue

## Table of contents

### Constructors

- [constructor](Queue.md#constructor)

### Properties

- [tracks](Queue.md#tracks)

### Accessors

- [duration](Queue.md#duration)
- [size](Queue.md#size)

### Methods

- [add](Queue.md#add)
- [clear](Queue.md#clear)
- [poll](Queue.md#poll)
- [push](Queue.md#push)
- [shuffle](Queue.md#shuffle)
- [skipNTracks](Queue.md#skipntracks)

## Constructors

### constructor

• **new Queue**()

#### Defined in

[Queue.ts:8](https://github.com/hmes98318/LavaShark/blob/main/src/lib/queue/Queue.ts#L8)

## Properties

### tracks

• **tracks**: (`default` \| `default`)[]

#### Defined in

[Queue.ts:6](https://github.com/hmes98318/LavaShark/blob/main/src/lib/queue/Queue.ts#L6)

## Accessors

### duration

• `get` **duration**(): `number`

Gets the queue duration in milliseconds.

#### Returns

`number`

#### Defined in

[Queue.ts:23](https://github.com/hmes98318/LavaShark/blob/main/src/lib/queue/Queue.ts#L23)

___

### size

• `get` **size**(): `number`

Gets the queue size.

#### Returns

`number`

#### Defined in

[Queue.ts:16](https://github.com/hmes98318/LavaShark/blob/main/src/lib/queue/Queue.ts#L16)

## Methods

### add

▸ **add**(`track`): `void`

Adds a track to the queue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `track` | `default` \| `default` | The track to add to the queue |

#### Returns

`void`

#### Defined in

[Queue.ts:40](https://github.com/hmes98318/LavaShark/blob/main/src/lib/queue/Queue.ts#L40)

___

### clear

▸ **clear**(): `void`

Clears the queue.

#### Returns

`void`

#### Defined in

[Queue.ts:77](https://github.com/hmes98318/LavaShark/blob/main/src/lib/queue/Queue.ts#L77)

___

### poll

▸ **poll**(): ``null`` \| `default` \| `default`

Polls the queue for the next track.

#### Returns

``null`` \| `default` \| `default`

The next track in the queue or null if the queue is empty.

#### Defined in

[Queue.ts:48](https://github.com/hmes98318/LavaShark/blob/main/src/lib/queue/Queue.ts#L48)

___

### push

▸ **push**(`track`): `void`

Adds a track to the queue.

**`Deprecated`**

- Use `add()` instead

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `track` | `default` \| `default` | The track to add to the queue |

#### Returns

`void`

#### Defined in

[Queue.ts:32](https://github.com/hmes98318/LavaShark/blob/main/src/lib/queue/Queue.ts#L32)

___

### shuffle

▸ **shuffle**(): `void`

Shuffles the queue

#### Returns

`void`

#### Defined in

[Queue.ts:63](https://github.com/hmes98318/LavaShark/blob/main/src/lib/queue/Queue.ts#L63)

___

### skipNTracks

▸ **skipNTracks**(`n`): `void`

Remove the next n tracks from the queue

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | The number of tracks to skip |

#### Returns

`void`

#### Defined in

[Queue.ts:56](https://github.com/hmes98318/LavaShark/blob/main/src/lib/queue/Queue.ts#L56)
