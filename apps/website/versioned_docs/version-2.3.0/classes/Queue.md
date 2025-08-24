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
- [insert](Queue.md#insert)
- [move](Queue.md#move)
- [poll](Queue.md#poll)
- [remove](Queue.md#remove)
- [shuffle](Queue.md#shuffle)
- [skipNTracks](Queue.md#skipntracks)

## Constructors

### constructor

• **new Queue**()

#### Defined in

[Queue.ts:8](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/lib/queue/Queue.ts#L8)

## Properties

### tracks

• **tracks**: ([`Track`](./Track.md))[]

#### Defined in

[Queue.ts:6](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/lib/queue/Queue.ts#L6)

## Accessors

### duration

• `get` **duration**(): `number`

Gets the queue duration in milliseconds.

#### Returns

`number`

#### Defined in

[Queue.ts:22](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/lib/queue/Queue.ts#L22)

___

### size

• `get` **size**(): `number`

Gets the queue size.

#### Returns

`number`

#### Defined in

[Queue.ts:15](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/lib/queue/Queue.ts#L15)

## Methods

### add

▸ **add**(`track`): `void`

[Internal] Adds a track to the queue. External users should use Player.addTracks() method instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `track` | [`Track`](./Track.md) | The track to add to the queue |

#### Returns

`void`

#### Defined in

[Queue.ts:30](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/lib/queue/Queue.ts#L30)

___

### clear

▸ **clear**(): `void`

Clears the queue.

#### Returns

`void`

#### Defined in

[Queue.ts:81](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/lib/queue/Queue.ts#L81)

___

### insert

▸ **insert**(`index`, `track`): `boolean`

Inserts a track at the specified index, moving subsequent tracks back.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index at which to insert the track. |
| `track` | [`Track`](./Track.md) | The track to insert. |

#### Returns

`boolean`

**`Throws`**

Throws an error if the index is out of range.

#### Defined in

[Queue.ts:40](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/lib/queue/Queue.ts#L40)

___

### move

▸ **move**(`index1`, `index2`): `boolean`

Moves a track from one index to another within the queue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index1` | `number` | The current index of the track. |
| `index2` | `number` | The new index to which the track should be moved. |

#### Returns

`boolean`

Returns true if the track was successfully moved, false otherwise.

#### Defined in

[Queue.ts:134](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/lib/queue/Queue.ts#L134)

___

### poll

▸ **poll**(): ``null`` \| [`Track`](./Track.md)

Polls the queue for the next track.

#### Returns

``null`` \| [`Track`](./Track.md)

The next track in the queue or null if the queue is empty.

#### Defined in

[Queue.ts:53](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/lib/queue/Queue.ts#L53)

___

### remove

▸ **remove**(): `boolean`

Removes the first track in the queue.

#### Returns

`boolean`

Returns true if the track was successfully removed, false otherwise

#### Defined in

[Queue.ts:89](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/lib/queue/Queue.ts#L89)

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

[Queue.ts:95](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/lib/queue/Queue.ts#L95)

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

[Queue.ts:102](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/lib/queue/Queue.ts#L102)

___

### shuffle

▸ **shuffle**(): `void`

Shuffles the queue

#### Returns

`void`

#### Defined in

[Queue.ts:68](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/lib/queue/Queue.ts#L68)

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

[Queue.ts:61](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/lib/queue/Queue.ts#L61)
