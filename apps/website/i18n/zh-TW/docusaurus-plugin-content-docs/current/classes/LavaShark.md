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

創建一個 LavaShark 實例

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`LavaSharkOptions`](../types/LavaShark.types.md#lavasharkoptions) | LavaShark 選項 |

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

添加一個外部來源，生成帶有 UnresolvedTracks 的 SearchResult

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extSource` | `AbstractExternalSource` | 外部來源 |

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

創建一個新的 Player 或返回一個現有的 Player

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`PlayerOptions`](../types/Player.types.md#playeroptions) | Player 選項 |

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

使用 guild ID 檢索現有的 Player

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | 該 Player 所屬的 guild ID |

#### Returns

``null`` \| [`Player`](Player.md)

#### Defined in

[lib/LavaShark.ts:242](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/LavaShark.ts#L242)

___

### handleVoiceUpdate

▸ **handleVoiceUpdate**(`payload`): `void`

處理語音狀態和語音伺服器更新封包

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `payload` | [`IncomingDiscordPayload`](../types/LavaShark.types.md#incomingdiscordpayload) | 語音封包 |

#### Returns

`void`

#### Defined in

[lib/LavaShark.ts:323](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/LavaShark.ts#L323)

___

### nodePing

▸ **nodePing**(`node`, `timeout?`): `Promise`<`number`\>

獲取單個節點的 ping 值

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `node` | [`Node`](Node.md) | `undefined` | 要 ping 的節點 |
| `timeout` | `number` | `1500` | 超時值，以毫秒為單位 |

#### Returns

`Promise`<`number`\>

- 節點的延遲，以毫秒為單位

#### Defined in

[lib/LavaShark.ts:377](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/LavaShark.ts#L377)

___

### nodesPing

▸ **nodesPing**(): `Promise`<`number`[]\>

獲取所有節點的 ping 值

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `timeout` | `number` | `1500` | 超時值，以毫秒為單位 |

#### Returns

`Promise`<`number`[]\>

- 所有節點的延遲，以毫秒為單位

#### Defined in

[lib/LavaShark.ts:407](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/LavaShark.ts#L407)

___

### search

▸ **search**(`query`, `source?`): `Promise`<[`SearchResult`](../types/REST.types.md#searchresult)\>

通過歌曲名稱進行搜索或使用歌曲連結

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | 要搜索的內容 |
| `source?` | [`SEARCH_SOURCE`](../types/LavaShark.types.md#search_source) | 搜尋來源 |

#### Returns

`Promise`<[`SearchResult`](../types/REST.types.md#searchresult)\>

#### Defined in

[lib/LavaShark.ts:263](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/LavaShark.ts#L263)

___

### start

▸ **start**(`clientId`): `void`

連接到所有 Lavalink 節點

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clientId` | `string` | client ID (BOT) |

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
