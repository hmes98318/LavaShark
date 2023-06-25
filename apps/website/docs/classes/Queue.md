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
- [remove](Queue.md#remove)
- [shuffle](Queue.md#shuffle)
- [skipNTracks](Queue.md#skipntracks)

## Constructors

### constructor

• **new Queue**()

#### Defined in

[Queue.ts:8](https://github.com/hmes98318/LavaShark/blob/ff4f702/src/lib/queue/Queue.ts#L8)

## Properties

### tracks

• **tracks**: (`default` \| `default`)[]

#### Defined in

[Queue.ts:6](https://github.com/hmes98318/LavaShark/blob/ff4f702/src/lib/queue/Queue.ts#L6)

## Accessors

### duration

• `get` **duration**(): `number`

Gets the queue duration in milliseconds.

#### Returns

`number`

#### Defined in

[Queue.ts:22](https://github.com/hmes98318/LavaShark/blob/ff4f702/src/lib/queue/Queue.ts#L22)

___

### size

• `get` **size**(): `number`

Gets the queue size.

#### Returns

`number`

#### Defined in

[Queue.ts:15](https://github.com/hmes98318/LavaShark/blob/ff4f702/src/lib/queue/Queue.ts#L15)

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

[Queue.ts:39](https://github.com/hmes98318/LavaShark/blob/ff4f702/src/lib/queue/Queue.ts#L39)

___

### clear

▸ **clear**(): `void`

Clears the queue.

#### Returns

`void`

#### Defined in

[Queue.ts:76](https://github.com/hmes98318/LavaShark/blob/ff4f702/src/lib/queue/Queue.ts#L76)

___

### poll

▸ **poll**(): ``null`` \| `default` \| `default`

Polls the queue for the next track.

#### Returns

``null`` \| `default` \| `default`

The next track in the queue or null if the queue is empty.

#### Defined in

[Queue.ts:47](https://github.com/hmes98318/LavaShark/blob/ff4f702/src/lib/queue/Queue.ts#L47)

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

[Queue.ts:31](https://github.com/hmes98318/LavaShark/blob/ff4f702/src/lib/queue/Queue.ts#L31)

___

### remove

▸ **remove**(): `boolean`

Removes the first track in the queue.

#### Returns

`boolean`

Returns true if the track was successfully removed, false otherwise

#### Defined in

[Queue.ts:84](https://github.com/hmes98318/LavaShark/blob/ff4f702/src/lib/queue/Queue.ts#L84)

▸ **remove**(`index`): `boolean`

Removes the track at the specified position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index of the track to remove. |

#### Returns

`boolean`

Returns true if the track was successfully removed, false otherwise

#### Defined in

[Queue.ts:90](https://github.com/hmes98318/LavaShark/blob/ff4f702/src/lib/queue/Queue.ts#L90)

▸ **remove**(`start`, `end`): `boolean`

Removes the tracks in the specified range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The start index of the range. |
| `end` | `number` | The end index of the range. |

#### Returns

`boolean`

Returns true if the tracks were successfully removed, false otherwise

#### Defined in

[Queue.ts:97](https://github.com/hmes98318/LavaShark/blob/ff4f702/src/lib/queue/Queue.ts#L97)

___

### shuffle

▸ **shuffle**(): `void`

Shuffles the queue

#### Returns

`void`

#### Defined in

[Queue.ts:62](https://github.com/hmes98318/LavaShark/blob/ff4f702/src/lib/queue/Queue.ts#L62)

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

[Queue.ts:55](https://github.com/hmes98318/LavaShark/blob/ff4f702/src/lib/queue/Queue.ts#L55)
