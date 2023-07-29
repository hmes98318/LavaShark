# @types/Track

## Table of contents

### Interfaces

- [ITrack](./interfaces/Track.types.ITrack.md)
- [Timestamp](./interfaces/Track.types.Timestamp.md)

### Type Aliases

- [PlaylistInfo](Track.types.md#playlistinfo)
- [TrackInfo](Track.types.md#trackinfo)

## Type Aliases

### PlaylistInfo

Ƭ **PlaylistInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `duration` | `number` |
| `name` | `string` |
| `selectedTrack` | `number` |

#### Defined in

[@types/Track.types.ts:1](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/@types/Track.types.ts#L1)

___

### TrackInfo

Ƭ **TrackInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `author` | `string` |
| `identifier` | `string` |
| `isSeekable` | `boolean` |
| `isStream` | `boolean` |
| `length` | `number` |
| `position` | `number` |
| `sourceName` | `string` \| ``null`` |
| `thumbnail?` | `string` |
| `title` | `string` |
| `uri` | `string` |

#### Defined in

[@types/Track.types.ts:7](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/@types/Track.types.ts#L7)
