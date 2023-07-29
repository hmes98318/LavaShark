# LavaShark

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

### Methods

- [addExternalSource](LavaShark.md#addexternalsource)
- [bestNode](LavaShark.md#bestnode)
- [createPlayer](LavaShark.md#createplayer)
- [decodeTrack](LavaShark.md#decodetrack)
- [decodeTracks](LavaShark.md#decodetracks)
- [getPlayer](LavaShark.md#getplayer)
- [handleVoiceUpdate](LavaShark.md#handlevoiceupdate)
- [nodePing](LavaShark.md#nodeping)
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
| `options` | [`LavaSharkOptions`](../types/LavaShark.types.md#lavasharkoptions) | The LavaShark options |

#### Defined in

[lib/LavaShark.ts:114](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/LavaShark.ts#L114)

## Properties

### clientId

• **clientId**: `string`

#### Defined in

[lib/LavaShark.ts:31](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/LavaShark.ts#L31)

___

### nodes

• **nodes**: [`Node`](Node.md)[]

#### Defined in

[lib/LavaShark.ts:32](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/LavaShark.ts#L32)

___

### on

• **on**: [`EventListeners`](../types/LavaShark.types.md#eventlisteners)<[`LavaShark`](LavaShark.md)\>

#### Defined in

[lib/LavaShark.ts:27](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/LavaShark.ts#L27)

___

### once

• **once**: [`EventListeners`](../types/LavaShark.types.md#eventlisteners)<[`LavaShark`](LavaShark.md)\>

#### Defined in

[lib/LavaShark.ts:26](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/LavaShark.ts#L26)

___

### players

• **players**: `Map`<`string`, [`Player`](Player.md)\>

<guildId, Player>

#### Defined in

[lib/LavaShark.ts:41](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/LavaShark.ts#L41)

___

### sendWS

• `Readonly` **sendWS**: (`guildId`: `string`, `payload`: [`OutgoingDiscordPayload`](../types/LavaShark.types.md#outgoingdiscordpayload)) => `void`

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
| `payload` | [`OutgoingDiscordPayload`](../types/LavaShark.types.md#outgoingdiscordpayload) | payload |

##### Returns

`void`

#### Defined in

[lib/LavaShark.ts:56](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/LavaShark.ts#L56)

___

### unresolvedSearchSource

• `Readonly` **unresolvedSearchSource**: [`SEARCH_SOURCE`](../types/LavaShark.types.md#search_source)

#### Defined in

[lib/LavaShark.ts:35](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/LavaShark.ts#L35)

___

### useISRC

• `Readonly` **useISRC**: `boolean`

#### Defined in

[lib/LavaShark.ts:36](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/LavaShark.ts#L36)

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

[lib/LavaShark.ts:181](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/LavaShark.ts#L181)

___

### bestNode

▸ **bestNode**(): `Promise`<[`Node`](Node.md)\>

#### Returns

`Promise`<[`Node`](Node.md)\>

#### Defined in

[lib/LavaShark.ts:151](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/LavaShark.ts#L151)

___

### createPlayer

▸ **createPlayer**(`options`): [`Player`](Player.md)

Creates a new player or returns an existing one

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`PlayerOptions`](../types/Player.types.md#playeroptions) | The player options |

#### Returns

[`Player`](Player.md)

#### Defined in

[lib/LavaShark.ts:224](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/LavaShark.ts#L224)

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

[lib/LavaShark.ts:194](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/LavaShark.ts#L194)

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

[lib/LavaShark.ts:206](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/LavaShark.ts#L206)

___

### getPlayer

▸ **getPlayer**(`guildId`): ``null`` \| [`Player`](Player.md)

Retrieve an existing player using the guild id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | The guild id that player belongs to |

#### Returns

``null`` \| [`Player`](Player.md)

#### Defined in

[lib/LavaShark.ts:242](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/LavaShark.ts#L242)

___

### handleVoiceUpdate

▸ **handleVoiceUpdate**(`payload`): `void`

Handles voice state & voice server update packets

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `payload` | [`IncomingDiscordPayload`](../types/LavaShark.types.md#incomingdiscordpayload) | The voice packet |

#### Returns

`void`

#### Defined in

[lib/LavaShark.ts:323](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/LavaShark.ts#L323)

___

### nodePing

▸ **nodePing**(`node`, `timeout?`): `Promise`<`number`\>

Get the ping for a single node

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `node` | [`Node`](Node.md) | `undefined` | The node to ping |
| `timeout` | `number` | `1500` | Timeout value in milliseconds |

#### Returns

`Promise`<`number`\>

- Node latency, in milliseconds

#### Defined in

[lib/LavaShark.ts:377](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/LavaShark.ts#L377)

___

### nodesPing

▸ **nodesPing**(): `Promise`<`number`[]\>

Get the ping for all nodes

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `timeout` | `number` | `1500` | Timeout value in milliseconds |

#### Returns

`Promise`<`number`[]\>

- All node latency, in milliseconds

#### Defined in

[lib/LavaShark.ts:407](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/LavaShark.ts#L407)

___

### search

▸ **search**(`query`, `source?`): `Promise`<[`SearchResult`](../types/REST.types.md#searchresult)\>

Search by song name or use music URL

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | The query to search for |
| `source?` | [`SEARCH_SOURCE`](../types/LavaShark.types.md#search_source) | The search source |

#### Returns

`Promise`<[`SearchResult`](../types/REST.types.md#searchresult)\>

#### Defined in

[lib/LavaShark.ts:263](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/LavaShark.ts#L263)

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

[lib/LavaShark.ts:307](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/LavaShark.ts#L307)

___

### checkOptions

▸ `Static` **checkOptions**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`LavaSharkOptions`](../types/LavaShark.types.md#lavasharkoptions) |

#### Returns

`void`

#### Defined in

[lib/LavaShark.ts:58](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/LavaShark.ts#L58)
