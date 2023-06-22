# @types

## Table of contents

### Interfaces

- [ITrack](./interfaces/types.ITrack.md)
- [PlayerEventPayload](./interfaces/types.PlayerEventPayload.md)
- [SpeakingEventPayload](./interfaces/types.SpeakingEventPayload.md)
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
- [RoutePlannerStatus](types.md#routeplannerstatus)
- [SEARCH\_SOURCE](types.md#search_source)
- [SearchResult](types.md#searchresult)
- [TimescaleOptions](types.md#timescaleoptions)
- [TrackInfo](types.md#trackinfo)
- [TremoloOptions](types.md#tremolooptions)
- [UpdatePlayerOptions](types.md#updateplayeroptions)
- [VibratoOptions](types.md#vibratooptions)
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

[@types/index.ts:372](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L372)

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

[@types/index.ts:379](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L379)

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
| `listener` | (`player`: [`Player`](../classes/Player.md), `track`: [`Track`](../classes/Track.md), `reason`: `TrackEndReason`) => `void` |

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
| `listener` | (`player`: [`Player`](../classes/Player.md), `track`: `default` \| [`Track`](../classes/Track.md), `exception`: `LoadException` & { `cause`: `string`  }) => `void` |

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

[@types/index.ts:75](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L75)

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

[@types/index.ts:421](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L421)

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

[@types/index.ts:14](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L14)

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

[@types/index.ts:256](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L256)

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

[@types/index.ts:390](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L390)

___

### LavaSharkOptions

Ƭ **LavaSharkOptions**: `Object`

Main constructor options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `defaultSearchSource?` | [`SEARCH_SOURCE`](types.md#search_source) | The default source to search for tracks |
| `disabledSources?` | `UNRESOLVED_SOURCES`[] | Disables spotify, apple music or deezer |
| `nodes` | [`NodeOptions`](types.md#nodeoptions)[] | The array of lavalink nodes |
| `sendWS` | (`guildId`: `string`, `payload`: [`OutgoingDiscordPayload`](types.md#outgoingdiscordpayload)) => `void` | Function to send voice channel connect payloads to discord |
| `spotify?` | `SpotifyConfig` | The spotify credentials |
| `unresolvedSearchSource?` | [`SEARCH_SOURCE`](types.md#search_source) | The default source to search for unresolved tracks |
| `useISRC?` | `boolean` | Whether to search for ISRC to resolve tracks or not |

#### Defined in

[@types/index.ts:57](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L57)

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

[@types/index.ts:115](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L115)

___

### LoadTracksResult

Ƭ **LoadTracksResult**: `LoadResultBase` & { `tracks`: [`ITrack`](./interfaces/types.ITrack.md)[]  }

#### Defined in

[@types/index.ts:164](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L164)

___

### LowPassOptions

Ƭ **LowPassOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `smoothing?` | `number` |

#### Defined in

[@types/index.ts:397](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L397)

___

### Metadata

Ƭ **Metadata**: `Pick`<[`TrackInfo`](types.md#trackinfo), ``"title"`` \| ``"author"`` \| ``"uri"``\> & { `duration`: `number` ; `isrc?`: `string` ; `source`: `string`  }

#### Defined in

[@types/index.ts:48](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L48)

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

[@types/index.ts:180](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L180)

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

[@types/index.ts:204](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L204)

___

### OutgoingDiscordPayload

Ƭ **OutgoingDiscordPayload**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `d` | `Record`<`string`, `unknown`\> |
| `op` | `number` |

#### Defined in

[@types/index.ts:9](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L9)

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

[@types/index.ts:360](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L360)

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

[@types/index.ts:340](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L340)

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

[@types/index.ts:325](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L325)

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

[@types/index.ts:131](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L131)

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

[@types/index.ts:124](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L124)

___

### RotationOptions

Ƭ **RotationOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `rotationHz?` | `number` |

#### Defined in

[@types/index.ts:401](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L401)

___

### RoutePlannerStatus

Ƭ **RoutePlannerStatus**: `Object`

Route planner API

#### Type declaration

| Name | Type |
| :------ | :------ |
| `class` | `string` \| ``null`` |
| `details` | `RoutePlannerDetails` \| ``null`` |

#### Defined in

[@types/index.ts:233](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L233)

___

### SEARCH\_SOURCE

Ƭ **SEARCH\_SOURCE**: ``"youtube"`` \| ``"youtubemusic"`` \| ``"soundcloud"``

#### Defined in

[@types/index.ts:95](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L95)

___

### SearchResult

Ƭ **SearchResult**: `LoadResultBase` & { `tracks`: ([`Track`](../classes/Track.md) \| `UnresolvedTrack`)[]  }

#### Defined in

[@types/index.ts:168](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L168)

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

[@types/index.ts:405](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L405)

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

[@types/index.ts:137](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L137)

___

### TremoloOptions

Ƭ **TremoloOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `depth?` | `number` |
| `frequency?` | `number` |

#### Defined in

[@types/index.ts:411](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L411)

___

### UpdatePlayerOptions

Ƭ **UpdatePlayerOptions**: `Object`

----- REST API -----

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

[@types/index.ts:99](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L99)

___

### VibratoOptions

Ƭ **VibratoOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `depth?` | `number` |
| `frequency?` | `number` |

#### Defined in

[@types/index.ts:416](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L416)

___

### VoiceServerUpdatePayload

Ƭ **VoiceServerUpdatePayload**: [`IncomingDiscordPayload`](types.md#incomingdiscordpayload) & { `d`: `VoiceServerUpdateData` ; `t`: ``"VOICE_SERVER_UPDATE"``  }

#### Defined in

[@types/index.ts:37](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L37)

___

### VoiceState

Ƭ **VoiceState**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `event?` | `VoiceServerUpdateData` |
| `sessionId?` | `string` |

#### Defined in

[@types/index.ts:355](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L355)

___

### VoiceStateUpdatePayload

Ƭ **VoiceStateUpdatePayload**: [`IncomingDiscordPayload`](types.md#incomingdiscordpayload) &  
{
    `d`: { `channel_id`: `string` \| ``null`` ;  
    `guild_id`: `string` ;  
    `session_id`: `string` ;  
    `user_id`: `string`  
    } ;  
    `t`: ``"VOICE_STATE_UPDATE"``  
}

#### Defined in

[@types/index.ts:21](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L21)

___

### version

Ƭ **version**: `string`

Lavalink version

#### Defined in

[@types/index.ts:253](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L253)
