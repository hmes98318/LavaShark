# Track

## Table of contents

### Constructors

- [constructor](Track.md#constructor)

### Properties

- [author](Track.md#author)
- [duration](Track.md#duration)
- [encodedTrack](Track.md#encodedtrack)
- [identifier](Track.md#identifier)
- [isSeekable](Track.md#isseekable)
- [isStream](Track.md#isstream)
- [metadata](Track.md#metadata)
- [position](Track.md#position)
- [requester](Track.md#requester)
- [source](Track.md#source)
- [title](Track.md#title)
- [uri](Track.md#uri)

### Accessors

- [thumbnail](Track.md#thumbnail)

### Methods

- [setRequester](Track.md#setrequester)

## Constructors

### constructor

• **new Track**(`data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ITrack`](../types/interfaces/Track.types.ITrack.md) |

#### Defined in

[lib/queue/Track.ts:24](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/lib/queue/Track.ts#L24)

## Properties

### author

• `Readonly` **author**: `string`

#### Defined in

[lib/queue/Track.ts:11](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/lib/queue/Track.ts#L11)

___

### duration

• `Readonly` **duration**: [`Timestamp`](../types/interfaces/Track.types.Timestamp.md)

#### Defined in

[lib/queue/Track.ts:12](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/lib/queue/Track.ts#L12)

___

### encoded

• **encoded**: `string`

#### Defined in

[lib/queue/Track.ts:19](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/lib/queue/Track.ts#L19)

___

### identifier

• `Readonly` **identifier**: `string`

#### Defined in

[lib/queue/Track.ts:8](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/lib/queue/Track.ts#L8)

___

### isSeekable

• `Readonly` **isSeekable**: `boolean`

#### Defined in

[lib/queue/Track.ts:14](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/lib/queue/Track.ts#L14)

___

### isStream

• `Readonly` **isStream**: `boolean`

#### Defined in

[lib/queue/Track.ts:15](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/lib/queue/Track.ts#L15)

___

### metadata

• `Optional` **metadata**: [`Metadata`](../types/LavaShark.types.md#metadata)

#### Defined in

[lib/queue/Track.ts:20](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/lib/queue/Track.ts#L20)

___

### position

• `Optional` **position**: `number`

#### Defined in

[lib/queue/Track.ts:18](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/lib/queue/Track.ts#L18)

___

### requester

• **requester**: ``null`` | `User`

#### Defined in

[lib/queue/Track.ts:17](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/lib/queue/Track.ts#L17)

___

### source

• `Readonly` **source**: `string`

#### Defined in

[lib/queue/Track.ts:13](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/lib/queue/Track.ts#L13)

___

### title

• `Readonly` **title**: `string`

#### Defined in

[lib/queue/Track.ts:10](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/lib/queue/Track.ts#L10)

___

### uri

• `Readonly` **uri**: `string`

#### Defined in

[lib/queue/Track.ts:9](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/lib/queue/Track.ts#L9)

## Accessors

### thumbnail

• `get` **thumbnail**(): ``null`` | `string`

#### Returns

``null`` | `string`

#### Defined in

[lib/queue/Track.ts:42](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/lib/queue/Track.ts#L42)

## Methods

### setRequester

▸ **setRequester**(`requester`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `requester` | ``null`` | `User` |

#### Returns

`void`

#### Defined in

[lib/queue/Track.ts:52](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/lib/queue/Track.ts#L52)
