# @types/REST

## Table of contents

### Type Aliases

- [LavalinkRESTError](REST.types.md#lavalinkresterror)
- [LoadException](REST.types.md#loadexception)
- [LoadResultBase](REST.types.md#loadresultbase)
- [LoadTracksResult](REST.types.md#loadtracksresult)
- [RequestOptions](REST.types.md#requestoptions)
- [SearchResult](REST.types.md#searchresult)
- [UpdatePlayerOptions](REST.types.md#updateplayeroptions)

## Type Aliases

### LavalinkRESTError

Ƭ **LavalinkRESTError**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `error` | `string` |
| `message` | `string` |
| `path` | `string` |
| `status` | `number` |
| `timestamp` | `number` |
| `trace?` | `string` |

#### Defined in

[@types/REST.types.ts:24](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/@types/REST.types.ts#L24)

___

### LoadException

Ƭ **LoadException**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `severity` | ``"COMMON"`` \| ``"SUSPIOUS"`` \| ``"FAULT"`` |

#### Defined in

[@types/REST.types.ts:40](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/@types/REST.types.ts#L40)

___

### LoadResultBase

Ƭ **LoadResultBase**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `exception?` | [`LoadException`](REST.types.md#loadexception) |
| `loadType` | ``"TRACK_LOADED"`` \| ``"PLAYLIST_LOADED"`` \| ``"SEARCH_RESULT"`` \| ``"NO_MATCHES"`` \| ``"LOAD_FAILED"`` |
| `playlistInfo` | [`PlaylistInfo`](Track.types.md#playlistinfo) |

#### Defined in

[@types/REST.types.ts:45](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/@types/REST.types.ts#L45)

___

### LoadTracksResult

Ƭ **LoadTracksResult**: [`LoadResultBase`](REST.types.md#loadresultbase) & { `tracks`: [`ITrack`](./interfaces/Track.types.ITrack.md)[]  }

#### Defined in

[@types/REST.types.ts:51](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/@types/REST.types.ts#L51)

___

### RequestOptions

Ƭ **RequestOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `headers?` | `Record`<`string`, `string`\> |
| `json?` | `unknown` |
| `method` | `Dispatcher.HttpMethod` |
| `path` | `string` |

#### Defined in

[@types/REST.types.ts:33](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/@types/REST.types.ts#L33)

___

### SearchResult

Ƭ **SearchResult**: [`LoadResultBase`](REST.types.md#loadresultbase) & { `tracks`: ([`Track`](../classes/Track.md) \| `UnresolvedTrack`)[]  }

#### Defined in

[@types/REST.types.ts:55](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/@types/REST.types.ts#L55)

___

### UpdatePlayerOptions

Ƭ **UpdatePlayerOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `encodedTrack?` | `string` \| ``null`` | - |
| `endTime?` | `number` | - |
| `filters?` | [`FilterOptions`](Filter.types.md#filteroptions) | - |
| `noReplace?` | `boolean` | - |
| `paused?` | `boolean` | - |
| `position?` | `number` | identifier?: string; |
| `voice?` | { `endpoint`: `string` ; `sessionId`: `string` ; `token`: `string`  } | - |
| `voice.endpoint` | `string` | - |
| `voice.sessionId` | `string` | - |
| `voice.token` | `string` | - |
| `volume?` | `number` | - |

#### Defined in

[@types/REST.types.ts:8](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/@types/REST.types.ts#L8)
