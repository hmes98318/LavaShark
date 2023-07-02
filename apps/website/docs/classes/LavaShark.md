# LavaShark

## Table of contents

## Hierarchy

- `EventEmitter`

  ↳ **`LavaShark`**

## Table of contents

### Constructors

- [constructor](LavaShark.md#constructor)

### Properties

- [clientId](LavaShark.md#clientid)
- [nodes](LavaShark.md#nodes)
- [on](LavaShark.md#on)
- [once](LavaShark.md#once)
- [players](LavaShark.md#players)
- [sendWS](LavaShark.md#sendws)
- [unresolvedSearchSource](LavaShark.md#unresolvedsearchsource)
- [useISRC](LavaShark.md#useisrc)

### Accessors

- [bestNode](LavaShark.md#bestnode)

### Methods

- [addExternalSource](LavaShark.md#addexternalsource)
- [createPlayer](LavaShark.md#createplayer)
- [decodeTrack](LavaShark.md#decodetrack)
- [decodeTracks](LavaShark.md#decodetracks)
- [getPlayer](LavaShark.md#getplayer)
- [handleVoiceUpdate](LavaShark.md#handlevoiceupdate)
- [nodesPing](LavaShark.md#nodesping)
- [search](LavaShark.md#search)
- [start](LavaShark.md#start)
- [checkOptions](LavaShark.md#checkoptions)

## Constructors

### constructor

• **new LavaShark**(`options`)

Create a new LavaShark instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`LavaSharkOptions`](../types/types.md#lavasharkoptions) | The LavaShark options |

#### Defined in

[lib/LavaShark.ts:114](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/LavaShark.ts#L114)

## Properties

### clientId

• **clientId**: `string`

#### Defined in

[lib/LavaShark.ts:31](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/LavaShark.ts#L31)

___

### nodes

• **nodes**: [`Node`](Node.md)[]

#### Defined in

[lib/LavaShark.ts:32](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/LavaShark.ts#L32)

___

### on

• **on**: [`EventListeners`](../types/types.md#eventlisteners)<[`LavaShark`](LavaShark.md)\>

#### Defined in

[lib/LavaShark.ts:27](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/LavaShark.ts#L27)

___

### once

• **once**: [`EventListeners`](../types/types.md#eventlisteners)<[`LavaShark`](LavaShark.md)\>

#### Defined in

[lib/LavaShark.ts:26](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/LavaShark.ts#L26)

___

### players

• **players**: `Map`<`string`, [`Player`](Player.md)\>

<guildId, Player>

#### Defined in

[lib/LavaShark.ts:41](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/LavaShark.ts#L41)

___

### sendWS

• `Readonly` **sendWS**: (`guildId`: `string`, `payload`: [`OutgoingDiscordPayload`](../types/types.md#outgoingdiscordpayload)) => `void`

#### Type declaration

▸ (`guildId`, `payload`): `void`

**`Example`**

```ts
sendWS: (guildId, payload) => {
    client.guilds.cache.get(guildId)?.shard.send(payload); 
}
```

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | guildId |
| `payload` | [`OutgoingDiscordPayload`](../types/types.md#outgoingdiscordpayload) | payload |

##### Returns

`void`

#### Defined in

[lib/LavaShark.ts:56](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/LavaShark.ts#L56)

___

### unresolvedSearchSource

• `Readonly` **unresolvedSearchSource**: [`SEARCH_SOURCE`](../types/types.md#search_source)

#### Defined in

[lib/LavaShark.ts:35](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/LavaShark.ts#L35)

___

### useISRC

• `Readonly` **useISRC**: `boolean`

#### Defined in

[lib/LavaShark.ts:36](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/LavaShark.ts#L36)

## Accessors

### bestNode

• `get` **bestNode**(): [`Node`](Node.md)

#### Returns

[`Node`](Node.md)

#### Defined in

[lib/LavaShark.ts:151](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/LavaShark.ts#L151)

## Methods

### addExternalSource

▸ **addExternalSource**(`extSource`): `void`

Adds an external source that produces a SearchResult with UnresolvedTracks

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extSource` | `AbstractExternalSource` | The external source |

#### Returns

`void`

#### Defined in

[lib/LavaShark.ts:176](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/LavaShark.ts#L176)

___

### createPlayer

▸ **createPlayer**(`options`): [`Player`](Player.md)

Creates a new player or returns an existing one

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`PlayerOptions`](../types/types.md#playeroptions) | The player options |

#### Returns

[`Player`](Player.md)

#### Defined in

[lib/LavaShark.ts:221](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/LavaShark.ts#L221)

___

### decodeTrack

▸ **decodeTrack**(`encodedTrack`): `Promise`<[`Track`](Track.md)\>

Decodes a track by its base64 string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encodedTrack` | `string` | The base64 encoded track |

#### Returns

`Promise`<[`Track`](Track.md)\>

#### Defined in

[lib/LavaShark.ts:189](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/LavaShark.ts#L189)

___

### decodeTracks

▸ **decodeTracks**(`encodedTracks`): `Promise`<[`Track`](Track.md)[]\>

Decodes multiple tracks by their base64 string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encodedTracks` | `string`[] | The base64 encoded tracks |

#### Returns

`Promise`<[`Track`](Track.md)[]\>

#### Defined in

[lib/LavaShark.ts:202](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/LavaShark.ts#L202)

___

### getPlayer

▸ **getPlayer**(`guildId`): [`Player`](Player.md)

Retrieve an existing player using the guild id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | The guild id that player belongs to |

#### Returns

[`Player`](Player.md) \| ``null``

#### Defined in

[lib/LavaShark.ts:239](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/LavaShark.ts#L239)

___

### handleVoiceUpdate

▸ **handleVoiceUpdate**(`payload`): `void`

Handles voice state & voice server update packets

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `payload` | [`IncomingDiscordPayload`](../types/types.md#incomingdiscordpayload) | The voice packet |

#### Returns

`void`

#### Defined in

[lib/LavaShark.ts:317](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/LavaShark.ts#L317)

___

### nodesPing

▸ **nodesPing**(): `Promise`<`number`[]\>

Get the ping for all nodes

#### Returns

`Promise`<`number`[]\>

- All node latency, in milliseconds

#### Defined in

[lib/LavaShark.ts:371](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/LavaShark.ts#L371)

___

### search

▸ **search**(`query`, `source?`): `Promise`<[`SearchResult`](../types/types.md#searchresult)\>

Search by song name or use music URL

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | The query to search for |
| `source?` | [`SEARCH_SOURCE`](../types/types.md#search_source) | The search source |

#### Returns

`Promise`<[`SearchResult`](../types/types.md#searchresult)\>

#### Defined in

[lib/LavaShark.ts:256](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/LavaShark.ts#L256)

___

### start

▸ **start**(`clientId`): `void`

Connects to all lavalink nodes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clientId` | `string` | The client id (BOT) |

#### Returns

`void`

#### Defined in

[lib/LavaShark.ts:301](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/LavaShark.ts#L301)

___

### checkOptions

▸ `Static` **checkOptions**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`LavaSharkOptions`](../types/types.md#lavasharkoptions) |

#### Returns

`void`

#### Defined in

[lib/LavaShark.ts:58](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/LavaShark.ts#L58)
