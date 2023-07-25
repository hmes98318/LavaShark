# @types

## Table of contents

### Interfaces

- [ITrack](./interfaces/types.ITrack.md)
- [PlayerEventPayload](./interfaces/types.PlayerEventPayload.md)
- [Timestamp](./interfaces/types.Timestamp.md)
- [TrackEndEvent](./interfaces/types.TrackEndEvent.md)
- [TrackExceptionEvent](./interfaces/types.TrackExceptionEvent.md)
- [TrackStartEvent](./interfaces/types.TrackStartEvent.md)
- [TrackStuckEvent](./interfaces/types.TrackStuckEvent.md)
- [WebSocketClosedEvent](./interfaces/types.WebSocketClosedEvent.md)

### Type Aliases

- [ChannelMixOptions](types.md#channelmixoptions)
- [DistortionOptions](types.md#distortionoptions)
- [EventListeners](types.md#eventlisteners)
- [FilterOptions](types.md#filteroptions)
- [IncomingDiscordPayload](types.md#incomingdiscordpayload)
- [Info](types.md#info)
- [KaraokeOptions](types.md#karaokeoptions)
- [LavaSharkOptions](types.md#lavasharkoptions)
- [LavalinkRESTError](types.md#lavalinkresterror)
- [LoadException](types.md#loadexception)
- [LoadResultBase](types.md#loadresultbase)
- [LoadTracksResult](types.md#loadtracksresult)
- [LowPassOptions](types.md#lowpassoptions)
- [Metadata](types.md#metadata)
- [NodeOptions](types.md#nodeoptions)
- [NodeStats](types.md#nodestats)
- [OutgoingDiscordPayload](types.md#outgoingdiscordpayload)
- [PlayOptions](types.md#playoptions)
- [PlayerOptions](types.md#playeroptions)
- [PlayerState](types.md#playerstate)
- [PlaylistInfo](types.md#playlistinfo)
- [RequestOptions](types.md#requestoptions)
- [RotationOptions](types.md#rotationoptions)
- [RoutePlannerDetails](types.md#routeplannerdetails)
- [RoutePlannerStatus](types.md#routeplannerstatus)
- [SEARCH\_SOURCE](types.md#search_source)
- [SearchResult](types.md#searchresult)
- [SpotifyConfig](types.md#spotifyconfig)
- [TimescaleOptions](types.md#timescaleoptions)
- [TrackEndReason](types.md#trackendreason)
- [TrackInfo](types.md#trackinfo)
- [TremoloOptions](types.md#tremolooptions)
- [UNRESOLVED\_SOURCES](types.md#unresolved_sources)
- [UpdatePlayerOptions](types.md#updateplayeroptions)
- [VibratoOptions](types.md#vibratooptions)
- [VoiceServerUpdateData](types.md#voiceserverupdatedata)
- [VoiceServerUpdatePayload](types.md#voiceserverupdatepayload)
- [VoiceState](types.md#voicestate)
- [VoiceStateUpdatePayload](types.md#voicestateupdatepayload)
- [version](types.md#version)

## Type Aliases

### ChannelMixOptions

Ƭ **ChannelMixOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `leftToLeft?` | `number` |
| `leftToRight?` | `number` |
| `rightToLeft?` | `number` |
| `rightToRight?` | `number` |

#### Defined in

[@types/Filter.types.ts:1](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Filter.types.ts#L1)

___

### DistortionOptions

Ƭ **DistortionOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cosOffset?` | `number` |
| `cosScale?` | `number` |
| `offset?` | `number` |
| `scale?` | `number` |
| `sinOffset?` | `number` |
| `sinScale?` | `number` |
| `tanOffset?` | `number` |
| `tanScale?` | `number` |

#### Defined in

[@types/Filter.types.ts:8](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Filter.types.ts#L8)

___

### EventListeners

Ƭ **EventListeners**<`T`\>:  

#### Type declaration
| Event | listener |
| :------ | :------ |
| `debug` | `message`: `string` |
| `raw` | `node`: [`Node`](../classes/Node.md), `payload`: `unknown` |
| `nodeConnect` | `node`: [`Node`](../classes/Node.md) |
| `nodeResume` | `node`: [`Node`](../classes/Node.md) |
| `nodeDisconnect` | `node`: [`Node`](../classes/Node.md), `code`: `number`, `reason`: `string` |
| `warn` | `node`: [`Node`](../classes/Node.md), `warn`: `string` |
| `error` | `node`: [`Node`](../classes/Node.md), `error`: `Error` |
| `trackAdd` | `player`: [`Player`](../classes/Player.md), `tracks`: [`Track`](../classes/Track.md) \| Array<[`Track`](../classes/Track.md)> |
| `trackStart` | `player`: [`Player`](../classes/Player.md), `track`: [`Track`](../classes/Track.md) |
| `trackEnd` | `player`: [`Player`](../classes/Player.md), `track`: [`Track`](../classes/Track.md), `reason`: `TrackEndReason` |
| `trackStuck` | `player`: [`Player`](../classes/Player.md), `track`: [`Track`](../classes/Track.md), `thresholdMs`: `number` |
| `trackException` | `player`: [`Player`](../classes/Player.md), `track`: `default` \| [`Track`](../classes/Track.md), `exception`: `LoadException` & { `cause`: `string`  } |
| `playerCreate` | `player`: [`Player`](../classes/Player.md) |
| `playerDestroy` | `player`: [`Player`](../classes/Player.md) |
| `playerDisconnect` | `player`: [`Player`](../classes/Player.md), `code`: `number`, `reason`: `string` |
| `queueEnd` | `player`: [`Player`](../classes/Player.md) |
| `pong` | `node`: [`Node`](../classes/Node.md), `ping?`: `number` |

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`event`, `listener`): `T`

LavaShark events

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"debug"`` |
| `listener` | (`message`: `string`) => `void` |

##### Returns

`T`

▸ (`event`, `listener`): `T`

LavaShark events

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"raw"`` |
| `listener` | (`node`: [`Node`](../classes/Node.md), `payload`: `unknown`) => `void` |

##### Returns

`T`

▸ (`event`, `listener`): `T`

LavaShark events

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"nodeConnect"`` |
| `listener` | (`node`: [`Node`](../classes/Node.md)) => `void` |

##### Returns

`T`

▸ (`event`, `listener`): `T`

LavaShark events

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"nodeResume"`` |
| `listener` | (`node`: [`Node`](../classes/Node.md)) => `void` |

##### Returns

`T`

▸ (`event`, `listener`): `T`

LavaShark events

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"nodeDisconnect"`` |
| `listener` | (`node`: [`Node`](../classes/Node.md), `code`: `number`, `reason`: `string`) => `void` |

##### Returns

`T`

▸ (`event`, `listener`): `T`

LavaShark events

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"warn"`` |
| `listener` | (`node`: [`Node`](../classes/Node.md), `warn`: `string`) => `void` |

##### Returns

`T`

▸ (`event`, `listener`): `T`

LavaShark events

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`node`: [`Node`](../classes/Node.md), `error`: `Error`) => `void` |

##### Returns

`T`

▸ (`event`, `listener`): `T`

LavaShark events

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"trackAdd"`` |
| `listener` | (`player`: [`Player`](../classes/Player.md), `tracks`: [`Track`](../classes/Track.md) \| [`Track`](../classes/Track.md)[]) => `void` |

##### Returns

`T`

▸ (`event`, `listener`): `T`

LavaShark events

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"trackStart"`` |
| `listener` | (`player`: [`Player`](../classes/Player.md), `track`: [`Track`](../classes/Track.md)) => `void` |

##### Returns

`T`

▸ (`event`, `listener`): `T`

LavaShark events

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"trackEnd"`` |
| `listener` | (`player`: [`Player`](../classes/Player.md), `track`: [`Track`](../classes/Track.md), `reason`: [`TrackEndReason`](types.md#trackendreason)) => `void` |

##### Returns

`T`

▸ (`event`, `listener`): `T`

LavaShark events

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"trackStuck"`` |
| `listener` | (`player`: [`Player`](../classes/Player.md), `track`: [`Track`](../classes/Track.md), `thresholdMs`: `number`) => `void` |

##### Returns

`T`

▸ (`event`, `listener`): `T`

LavaShark events

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"trackException"`` |
| `listener` | (`player`: [`Player`](../classes/Player.md), `track`: `default` \| [`Track`](../classes/Track.md), `exception`: [`LoadException`](types.md#loadexception) & { `cause`: `string`  }) => `void` |

##### Returns

`T`

▸ (`event`, `listener`): `T`

LavaShark events

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"playerConnect"`` |
| `listener` | (`player`: [`Player`](../classes/Player.md)) => `void` |

##### Returns

`T`

▸ (`event`, `listener`): `T`

LavaShark events

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"playerCreate"`` |
| `listener` | (`player`: [`Player`](../classes/Player.md)) => `void` |

##### Returns

`T`

▸ (`event`, `listener`): `T`

LavaShark events

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"playerDestroy"`` |
| `listener` | (`player`: [`Player`](../classes/Player.md)) => `void` |

##### Returns

`T`

▸ (`event`, `listener`): `T`

LavaShark events

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"playerDisconnect"`` |
| `listener` | (`player`: [`Player`](../classes/Player.md), `code`: `number`, `reason`: `string`) => `void` |

##### Returns

`T`

▸ (`event`, `listener`): `T`

LavaShark events

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"queueEnd"`` |
| `listener` | (`player`: [`Player`](../classes/Player.md)) => `void` |

##### Returns

`T`

▸ (`event`, `listener`): `T`

LavaShark events

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pong"`` |
| `listener` | (`node`: [`Node`](../classes/Node.md), `ping?`: `number`) => `void` |

##### Returns

`T`

#### Defined in

[@types/LavaShark.types.ts:44](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/LavaShark.types.ts#L44)

___

### FilterOptions

Ƭ **FilterOptions**: `Object`

#### Index signature

▪ [key: `string`]: `unknown`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelMix?` | [`ChannelMixOptions`](types.md#channelmixoptions) | - |
| `distortion?` | [`DistortionOptions`](types.md#distortionoptions) | - |
| `equalizer?` | `number`[] | 15 bands [0-14] 25 Hz, 40 Hz, 63 Hz, 100 Hz, 160 Hz, 250 Hz, 400 Hz, 630 Hz, 1 kHz, 1.6 kHz, 2.5 kHz, 4 kHz, 6.3 kHz, 10 kHz, 16 kHz |
| `karaoke?` | [`KaraokeOptions`](types.md#karaokeoptions) | - |
| `lowPass?` | [`LowPassOptions`](types.md#lowpassoptions) | - |
| `rotation?` | [`RotationOptions`](types.md#rotationoptions) | - |
| `timescale?` | [`TimescaleOptions`](types.md#timescaleoptions) | - |
| `tremolo?` | [`TremoloOptions`](types.md#tremolooptions) | - |
| `vibrato?` | [`VibratoOptions`](types.md#vibratooptions) | - |
| `volume?` | `number` | - |

#### Defined in

[@types/Filter.types.ts:50](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Filter.types.ts#L50)

___

### IncomingDiscordPayload

Ƭ **IncomingDiscordPayload**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `d?` | `unknown` |
| `op` | `number` |
| `s?` | `number` |
| `t?` | `string` |

#### Defined in

[@types/LavaShark.types.ts:9](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/LavaShark.types.ts#L9)

___

### Info

Ƭ **Info**: `Object`

Lavalink Info

#### Type declaration

| Name | Type |
| :------ | :------ |
| `buildTime` | `number` |
| `filters` | `string`[] |
| `git` | { `branch`: `string` ; `commit`: `string` ; `commitTime`: `number`  } |
| `git.branch` | `string` |
| `git.commit` | `string` |
| `git.commitTime` | `number` |
| `jvm` | `string` |
| `lavaplayer` | `string` |
| `plugins` | { `name`: `string` ; `version`: `string`  }[] |
| `sourceManagers` | `string`[] |
| `version` | { `major`: `number` ; `minor`: `number` ; `patch`: `number` ; `preRelease`: `string` \| ``null`` ; `semver`: `string`  } |
| `version.major` | `number` |
| `version.minor` | `number` |
| `version.patch` | `number` |
| `version.preRelease` | `string` \| ``null`` |
| `version.semver` | `string` |

#### Defined in

[@types/Node.types.ts:81](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Node.types.ts#L81)

___

### KaraokeOptions

Ƭ **KaraokeOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `filterBand?` | `number` |
| `filterWidth?` | `number` |
| `level?` | `number` |
| `monoLevel?` | `number` |

#### Defined in

[@types/Filter.types.ts:19](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Filter.types.ts#L19)

___

### LavaSharkOptions

Ƭ **LavaSharkOptions**: `Object`

Main constructor options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `defaultSearchSource?` | [`SEARCH_SOURCE`](types.md#search_source) | The default source to search for tracks |
| `disabledSources?` | [`UNRESOLVED_SOURCES`](types.md#unresolved_sources)[] | Disables spotify, apple music or deezer |
| `nodes` | [`NodeOptions`](types.md#nodeoptions)[] | The array of lavalink nodes |
| `sendWS` | (`guildId`: `string`, `payload`: [`OutgoingDiscordPayload`](types.md#outgoingdiscordpayload)) => `void` | Function to send voice channel connect payloads to discord |
| `spotify?` | [`SpotifyConfig`](types.md#spotifyconfig) | The spotify credentials |
| `unresolvedSearchSource?` | [`SEARCH_SOURCE`](types.md#search_source) | The default source to search for unresolved tracks |
| `useISRC?` | `boolean` | Whether to search for ISRC to resolve tracks or not |

#### Defined in

[@types/LavaShark.types.ts:81](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/LavaShark.types.ts#L81)

___

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

[@types/REST.types.ts:23](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/REST.types.ts#L23)

___

### LoadException

Ƭ **LoadException**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `severity` | ``"COMMON"`` \| ``"SUSPIOUS"`` \| ``"FAULT"`` |

#### Defined in

[@types/REST.types.ts:68](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/REST.types.ts#L68)

___

### LoadResultBase

Ƭ **LoadResultBase**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `exception?` | [`LoadException`](types.md#loadexception) |
| `loadType` | ``"TRACK_LOADED"`` \| ``"PLAYLIST_LOADED"`` \| ``"SEARCH_RESULT"`` \| ``"NO_MATCHES"`` \| ``"LOAD_FAILED"`` |
| `playlistInfo` | [`PlaylistInfo`](types.md#playlistinfo) |

#### Defined in

[@types/REST.types.ts:73](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/REST.types.ts#L73)

___

### LoadTracksResult

Ƭ **LoadTracksResult**: [`LoadResultBase`](types.md#loadresultbase) & { `tracks`: [`ITrack`](./interfaces/types.ITrack.md)[]  }

#### Defined in

[@types/REST.types.ts:79](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/REST.types.ts#L79)

___

### LowPassOptions

Ƭ **LowPassOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `smoothing?` | `number` |

#### Defined in

[@types/Filter.types.ts:26](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Filter.types.ts#L26)

___

### Metadata

Ƭ **Metadata**: `Pick`<[`TrackInfo`](types.md#trackinfo), ``"title"`` \| ``"author"`` \| ``"uri"``\> & { `duration`: [`Timestamp`](./interfaces/types.Timestamp.md) ; `isrc?`: `string` ; `source`: `string`  }

#### Defined in

[@types/LavaShark.types.ts:37](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/LavaShark.types.ts#L37)

___

### NodeOptions

Ƭ **NodeOptions**: `Object`

Lavalink node options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `followRedirects?` | `boolean` | Whether to follow redirects or not (default is false) |
| `hostname` | `string` | The node hostname |
| `id?` | `string` | The node identifier |
| `maxRetryAttempts?` | `number` | The max number of retry attempts |
| `password?` | `string` | The node password |
| `port` | `number` | The node port |
| `resumeKey?` | `string` | The resume key |
| `resumeTimeout?` | `number` | The resume timeout, in seconds |
| `retryAttemptsInterval?` | `number` | The interval between retry attempts |
| `secure?` | `boolean` | Whether to use SSL/TLS or not |

#### Defined in

[@types/Node.types.ts:5](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Node.types.ts#L5)

___

### NodeStats

Ƭ **NodeStats**: `Object`

Lavalink node stats

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cpu` | { `cores`: `number` ; `lavalinkLoad`: `number` ; `systemLoad`: `number`  } | CPU stats, [0, 1] |
| `cpu.cores` | `number` | - |
| `cpu.lavalinkLoad` | `number` | - |
| `cpu.systemLoad` | `number` | - |
| `frameStats?` | { `deficit`: `number` ; `nulled`: `number` ; `sent`: `number`  } | Audio frame stats |
| `frameStats.deficit` | `number` | - |
| `frameStats.nulled` | `number` | - |
| `frameStats.sent` | `number` | - |
| `memory` | { `allocated`: `number` ; `free`: `number` ; `reservable`: `number` ; `used`: `number`  } | RAM stats, in bytes |
| `memory.allocated` | `number` | - |
| `memory.free` | `number` | - |
| `memory.reservable` | `number` | - |
| `memory.used` | `number` | - |
| `players` | `number` | The total player amount |
| `playingPlayers` | `number` | The amount of playing players |
| `uptime` | `number` | The lavalink node uptime, in seconds |

#### Defined in

[@types/Node.types.ts:29](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Node.types.ts#L29)

___

### OutgoingDiscordPayload

Ƭ **OutgoingDiscordPayload**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `d` | `Record`<`string`, `unknown`\> |
| `op` | `number` |

#### Defined in

[@types/LavaShark.types.ts:65](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/LavaShark.types.ts#L65)

___

### PlayOptions

Ƭ **PlayOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `endTime?` | `number` |
| `noReplace?` | `boolean` |
| `pause?` | `boolean` |
| `startTime?` | `number` |

#### Defined in

[@types/Player.types.ts:26](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Player.types.ts#L26)

___

### PlayerOptions

Ƭ **PlayerOptions**: `Object`

Main constructor options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | The guild id that player belongs to |
| `queue?` | `Queue` | The queue object that player will use |
| `selfDeaf?` | `boolean` | Whether the bot joins the voice channel deafened or not |
| `selfMute?` | `boolean` | Whether the bot joins the voice channel muted or not |
| `textChannelId?` | `string` | The text channel id |
| `voiceChannelId` | `string` | The voice channel id |

#### Defined in

[@types/Player.types.ts:6](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Player.types.ts#L6)

___

### PlayerState

Ƭ **PlayerState**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `connected` | `boolean` | Whether the player is connected to discord voice gateway |
| `position?` | `number` | Track position in ms |
| `time` | `number` | Unix timestamp when the position was picked |

#### Defined in

[@types/Node.types.ts:145](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Node.types.ts#L145)

___

### PlaylistInfo

Ƭ **PlaylistInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `duration` | `number` |
| `name` | `string` |
| `selectedTrack` | `number` |

#### Defined in

[@types/REST.types.ts:39](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/REST.types.ts#L39)

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

[@types/REST.types.ts:32](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/REST.types.ts#L32)

___

### RotationOptions

Ƭ **RotationOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `rotationHz?` | `number` |

#### Defined in

[@types/Filter.types.ts:30](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Filter.types.ts#L30)

___

### RoutePlannerDetails

Ƭ **RoutePlannerDetails**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blockIndex?` | `string` |
| `currentAddressIndex?` | `string` |
| `failingAddresses` | { `address`: `string` ; `failingTime`: `string` ; `failingTimestamp`: `number`  }[] |
| `ipBlock` | { `size`: `string` ; `type`: `string`  } |
| `ipBlock.size` | `string` |
| `ipBlock.type` | `string` |

#### Defined in

[@types/Node.types.ts:63](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Node.types.ts#L63)

___

### RoutePlannerStatus

Ƭ **RoutePlannerStatus**: `Object`

Route planner API

#### Type declaration

| Name | Type |
| :------ | :------ |
| `class` | `string` \| ``null`` |
| `details` | [`RoutePlannerDetails`](types.md#routeplannerdetails) \| ``null`` |

#### Defined in

[@types/Node.types.ts:58](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Node.types.ts#L58)

___

### SEARCH\_SOURCE

Ƭ **SEARCH\_SOURCE**: ``"youtube"`` \| ``"youtubemusic"`` \| ``"soundcloud"``

#### Defined in

[@types/LavaShark.types.ts:70](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/LavaShark.types.ts#L70)

___

### SearchResult

Ƭ **SearchResult**: [`LoadResultBase`](types.md#loadresultbase) & { `tracks`: ([`Track`](../classes/Track.md) \| `UnresolvedTrack`)[]  }

#### Defined in

[@types/REST.types.ts:83](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/REST.types.ts#L83)

___

### SpotifyConfig

Ƭ **SpotifyConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientId` | `string` |
| `clientSecret` | `string` |
| `market?` | `string` |

#### Defined in

[@types/LavaShark.types.ts:74](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/LavaShark.types.ts#L74)

___

### TimescaleOptions

Ƭ **TimescaleOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `pitch?` | `number` |
| `rate?` | `number` |
| `speed?` | `number` |

#### Defined in

[@types/Filter.types.ts:34](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Filter.types.ts#L34)

___

### TrackEndReason

Ƭ **TrackEndReason**: ``"FINISHED"`` \| ``"LOAD_FAILED"`` \| ``"STOPPED"`` \| ``"REPLACED"`` \| ``"CLEANUP"``

#### Defined in

[@types/Node.types.ts:117](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Node.types.ts#L117)

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

[@types/REST.types.ts:45](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/REST.types.ts#L45)

___

### TremoloOptions

Ƭ **TremoloOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `depth?` | `number` |
| `frequency?` | `number` |

#### Defined in

[@types/Filter.types.ts:40](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Filter.types.ts#L40)

___

### UNRESOLVED\_SOURCES

Ƭ **UNRESOLVED\_SOURCES**: ``"APPLE_MUSIC"`` \| ``"DEEZER"`` \| ``"SPOTIFY"``

#### Defined in

[@types/LavaShark.types.ts:72](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/LavaShark.types.ts#L72)

___

### UpdatePlayerOptions

Ƭ **UpdatePlayerOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `encodedTrack?` | `string` \| ``null`` | - |
| `endTime?` | `number` | - |
| `filters?` | [`FilterOptions`](types.md#filteroptions) | - |
| `noReplace?` | `boolean` | - |
| `paused?` | `boolean` | - |
| `position?` | `number` | identifier?: string; |
| `voice?` | { `endpoint`: `string` ; `sessionId`: `string` ; `token`: `string`  } | - |
| `voice.endpoint` | `string` | - |
| `voice.sessionId` | `string` | - |
| `voice.token` | `string` | - |
| `volume?` | `number` | - |

#### Defined in

[@types/REST.types.ts:7](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/REST.types.ts#L7)

___

### VibratoOptions

Ƭ **VibratoOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `depth?` | `number` |
| `frequency?` | `number` |

#### Defined in

[@types/Filter.types.ts:45](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Filter.types.ts#L45)

___

### VoiceServerUpdateData

Ƭ **VoiceServerUpdateData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |
| `guild_id` | `string` |
| `token` | `string` |

#### Defined in

[@types/LavaShark.types.ts:26](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/LavaShark.types.ts#L26)

___

### VoiceServerUpdatePayload

Ƭ **VoiceServerUpdatePayload**: [`IncomingDiscordPayload`](types.md#incomingdiscordpayload) & { `d`: [`VoiceServerUpdateData`](types.md#voiceserverupdatedata) ; `t`: ``"VOICE_SERVER_UPDATE"``  }

#### Defined in

[@types/LavaShark.types.ts:32](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/LavaShark.types.ts#L32)

___

### VoiceState

Ƭ **VoiceState**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `event?` | [`VoiceServerUpdateData`](types.md#voiceserverupdatedata) |
| `sessionId?` | `string` |

#### Defined in

[@types/Player.types.ts:21](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Player.types.ts#L21)

___

### VoiceStateUpdatePayload

Ƭ **VoiceStateUpdatePayload**: [`IncomingDiscordPayload`](types.md#incomingdiscordpayload) & { `d`: { `channel_id`: `string` \| ``null`` ; `guild_id`: `string` ; `session_id`: `string` ; `user_id`: `string`  } ; `t`: ``"VOICE_STATE_UPDATE"``  }

#### Defined in

[@types/LavaShark.types.ts:16](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/LavaShark.types.ts#L16)

___

### version

Ƭ **version**: `string`

Lavalink version

#### Defined in

[@types/Node.types.ts:78](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Node.types.ts#L78)
