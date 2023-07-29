# @types/LavaShark

## Table of contents

### Type Aliases

- [EventListeners](LavaShark.types.md#eventlisteners)
- [IncomingDiscordPayload](LavaShark.types.md#incomingdiscordpayload)
- [LavaSharkOptions](LavaShark.types.md#lavasharkoptions)
- [Metadata](LavaShark.types.md#metadata)
- [OutgoingDiscordPayload](LavaShark.types.md#outgoingdiscordpayload)
- [SEARCH\_SOURCE](LavaShark.types.md#search_source)
- [SpotifyConfig](LavaShark.types.md#spotifyconfig)
- [UNRESOLVED\_SOURCES](LavaShark.types.md#unresolved_sources)
- [VoiceServerUpdateData](LavaShark.types.md#voiceserverupdatedata)
- [VoiceServerUpdatePayload](LavaShark.types.md#voiceserverupdatepayload)
- [VoiceStateUpdatePayload](LavaShark.types.md#voicestateupdatepayload)

## Type Aliases

### EventListeners

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
| `trackEnd` | `player`: [`Player`](../classes/Player.md), `track`: [`Track`](../classes/Track.md), `reason`: [`TrackEndReason`](Node.types.md#trackendreason) |
| `trackStuck` | `player`: [`Player`](../classes/Player.md), `track`: [`Track`](../classes/Track.md), `thresholdMs`: `number` |
| `trackException` | `player`: [`Player`](../classes/Player.md), `track`: `default` \| [`Track`](../classes/Track.md), `exception`: [`LoadException`](REST.types.md#loadexception) & { `cause`: `string`  } |
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
| `listener` | (`player`: [`Player`](../classes/Player.md), `track`: [`Track`](../classes/Track.md), `reason`: [`TrackEndReason`](Node.types.md#trackendreason)) => `void` |

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
| `listener` | (`player`: [`Player`](../classes/Player.md), `track`: `default` \| [`Track`](../classes/Track.md), `exception`: [`LoadException`](REST.types.md#loadexception) & { `cause`: `string`  }) => `void` |

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

[@types/LavaShark.types.ts:44](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/@types/LavaShark.types.ts#L44)

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

[@types/LavaShark.types.ts:9](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/@types/LavaShark.types.ts#L9)

___

### LavaSharkOptions

Ƭ **LavaSharkOptions**: `Object`

Main constructor options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `defaultSearchSource?` | [`SEARCH_SOURCE`](LavaShark.types.md#search_source) | 搜索曲目的默認來源 |
| `disabledSources?` | [`UNRESOLVED_SOURCES`](LavaShark.types.md#unresolved_sources)[] | 禁用 Spotify、Apple Music 或 Deezer |
| `nodes` | [`NodeOptions`](Node.types.md#nodeoptions)[] | lavalink 節點陣列 |
| `sendWS` | (`guildId`: `string`, `payload`: [`OutgoingDiscordPayload`](LavaShark.types.md#outgoingdiscordpayload)) => `void` | 發送語音通道連接有效負載到不和諧的功能 |
| `spotify?` | [`SpotifyConfig`](LavaShark.types.md#spotifyconfig) | Spotify 憑證 |
| `unresolvedSearchSource?` | [`SEARCH_SOURCE`](LavaShark.types.md#search_source) | 搜索未解析曲目的默認來源 |
| `useISRC?` | `boolean` | 是否搜索ISRC來解析曲目 |

#### Defined in

[@types/LavaShark.types.ts:81](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/@types/LavaShark.types.ts#L81)

___

### Metadata

Ƭ **Metadata**: `Pick`<[`TrackInfo`](Track.types.md#trackinfo), ``"title"`` \| ``"author"`` \| ``"uri"``\> & { `duration`: [`Timestamp`](./interfaces/Track.types.Timestamp.md) ; `isrc?`: `string` ; `source`: `string`  }

#### Defined in

[@types/LavaShark.types.ts:37](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/@types/LavaShark.types.ts#L37)

___

### OutgoingDiscordPayload

Ƭ **OutgoingDiscordPayload**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `d` | `Record`<`string`, `unknown`\> |
| `op` | `number` |

#### Defined in

[@types/LavaShark.types.ts:65](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/@types/LavaShark.types.ts#L65)

___

### SEARCH\_SOURCE

Ƭ **SEARCH\_SOURCE**: ``"youtube"`` \| ``"youtubemusic"`` \| ``"soundcloud"``

#### Defined in

[@types/LavaShark.types.ts:70](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/@types/LavaShark.types.ts#L70)

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

[@types/LavaShark.types.ts:74](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/@types/LavaShark.types.ts#L74)

___

### UNRESOLVED\_SOURCES

Ƭ **UNRESOLVED\_SOURCES**: ``"APPLE_MUSIC"`` \| ``"DEEZER"`` \| ``"SPOTIFY"``

#### Defined in

[@types/LavaShark.types.ts:72](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/@types/LavaShark.types.ts#L72)

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

[@types/LavaShark.types.ts:26](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/@types/LavaShark.types.ts#L26)

___

### VoiceServerUpdatePayload

Ƭ **VoiceServerUpdatePayload**: [`IncomingDiscordPayload`](LavaShark.types.md#incomingdiscordpayload) & { `d`: [`VoiceServerUpdateData`](LavaShark.types.md#voiceserverupdatedata) ; `t`: ``"VOICE_SERVER_UPDATE"``  }

#### Defined in

[@types/LavaShark.types.ts:32](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/@types/LavaShark.types.ts#L32)

___

### VoiceStateUpdatePayload

Ƭ **VoiceStateUpdatePayload**: [`IncomingDiscordPayload`](LavaShark.types.md#incomingdiscordpayload) & { `d`: { `channel_id`: `string` \| ``null`` ; `guild_id`: `string` ; `session_id`: `string` ; `user_id`: `string`  } ; `t`: ``"VOICE_STATE_UPDATE"``  }

#### Defined in

[@types/LavaShark.types.ts:16](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/@types/LavaShark.types.ts#L16)
