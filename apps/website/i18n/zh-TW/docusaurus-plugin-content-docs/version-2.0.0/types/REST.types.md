# @types/REST

## Table of contents

### Type Aliases

- [LavalinkRESTError](REST.types.md#lavalinkresterror)
- [LoadException](REST.types.md#loadexception)
- [LoadResultBase](REST.types.md#loadresultbase)
- [LoadTracksResult](REST.types.md#loadtracksresult)
- [PlaylistData](REST.types.md#playlistdata)
- [PlaylistLoadResult](REST.types.md#playlistloadresult)
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

[@types/REST.types.ts:24](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/@types/REST.types.ts#L24)

___

### LoadException

Ƭ **LoadException**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `severity` | ``"COMMON"`` \| ``"SUSPIOUS"`` \| ``"FAULT"`` |

#### Defined in

[@types/REST.types.ts:40](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/@types/REST.types.ts#L40)

___

### LoadResultBase

Ƭ **LoadResultBase**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `exception?` | [`LoadException`](REST.types.md#loadexception) |
| `loadType` | ``"track"`` \| ``"playlist"`` \| ``"search"`` \| ``"empty"`` \| ``"error"`` |
| `playlistInfo?` | [`PlaylistInfo`](REST.types.md#playlistinfo) |

#### Defined in

[@types/REST.types.ts:48](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/@types/REST.types.ts#L48)

___

### LoadTracksResult

Ƭ **LoadTracksResult**: [`LoadResultBase`](REST.types.md#loadresultbase) & \{ `tracks`: [`ITrack`](./interfaces/Track.types.ITrack.md)[]  \}

#### Defined in

[@types/REST.types.ts:51](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/@types/REST.types.ts#L51)

___

### PlaylistData

Ƭ **PlaylistData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `info` | [`PlaylistInfo`](REST.types.md#playlistinfo) |
| `pluginInfo` | `object` |
| `tracks` | [`ITrack`](./interfaces/Track.types.ITrack.md)[] |

#### Defined in

[@types/REST.types.ts:58](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/@types/REST.types.ts#L58)

___

### PlaylistLoadResult

Ƭ **PlaylistLoadResult**: `Omit`\<[`LoadResultBase`](REST.types.md#loadresultbase), ``"loadType"``\> & \{ `data`: [`PlaylistData`](REST.types.md#playlistdata) ; `loadType`: ``"playlist"``  \}

#### Defined in

[@types/REST.types.ts:64](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/@types/REST.types.ts#L64)

___

### RequestOptions

Ƭ **RequestOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `headers?` | `Record`\<`string`, `string`\> |
| `json?` | `unknown` |
| `method` | `Dispatcher.HttpMethod` |
| `path` | `string` |

#### Defined in

[@types/REST.types.ts:33](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/@types/REST.types.ts#L33)

___

### SearchResult

Ƭ **SearchResult**: [`LoadResultBase`](REST.types.md#loadresultbase) & \{ `tracks`: ([`Track`](../classes/Track.md) \| `UnresolvedTrack`)[]  \}

#### Defined in

[@types/REST.types.ts:55](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/@types/REST.types.ts#L55)

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
| `voice?` | \{ `endpoint`: `string` ; `sessionId`: `string` ; `token`: `string`  \} | - |
| `voice.endpoint` | `string` | - |
| `voice.sessionId` | `string` | - |
| `voice.token` | `string` | - |
| `volume?` | `number` | - |

#### Defined in

[@types/REST.types.ts:8](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/@types/REST.types.ts#L8)
