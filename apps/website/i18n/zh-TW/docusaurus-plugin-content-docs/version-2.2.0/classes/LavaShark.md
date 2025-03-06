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

#### Returns

[`LavaShark`](LavaShark.md)

#### Overrides

EventEmitter.constructor

#### Defined in

[lib/LavaShark.ts:109](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/LavaShark.ts#L109)

## Properties

### clientId

• **clientId**: `string`

#### Defined in

[lib/LavaShark.ts:28](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/LavaShark.ts#L28)

___

### nodes

• **nodes**: [`Node`](Node.md)[]

#### Defined in

[lib/LavaShark.ts:29](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/LavaShark.ts#L29)

___

### players

• **players**: `Map`<`string`, [`Player`](Player.md)>

<guildId, Player>

#### Defined in

[lib/LavaShark.ts:30](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/LavaShark.ts#L30)

___

### sendWS

• `Readonly` **sendWS**: (`guildId`: `string`, `payload`: [`OutgoingDiscordPayload`](../types/LavaShark.types.md#outgoingdiscordpayload)) => `void`

**`範例`**

```ts
sendWS: (guildId, payload) => {
    client.guilds.cache.get(guildId)?.shard.send(payload); 
}
```

#### Type declaration

▸ (`guildId`, `payload`): `void`

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | guildId |
| `payload` | [`OutgoingDiscordPayload`](../types/LavaShark.types.md#outgoingdiscordpayload) | payload |

##### Returns

`void`

#### Defined in

[lib/LavaShark.ts:51](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/LavaShark.ts#L51)

___

### unresolvedSearchSource

• `Readonly` **unresolvedSearchSource**: [`SEARCH_SOURCE`](../types/LavaShark.types.md#search_source)

#### Defined in

[lib/LavaShark.ts:37](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/LavaShark.ts#L37)

___

### useISRC

• `Readonly` **useISRC**: `boolean`

#### Defined in

[lib/LavaShark.ts:38](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/LavaShark.ts#L38)

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

[lib/LavaShark.ts:198](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/LavaShark.ts#L198)

___

### bestNode

▸ **bestNode**(): `Promise`<[`Node`](Node.md)>

取得最佳可用節點  

#### Returns

`Promise`<[`Node`](Node.md)>

#### Defined in

[lib/LavaShark.ts:163](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/LavaShark.ts#L163)

___

### createPlayer

▸ **createPlayer**(`options`): [`Player`](Player.md)

創建一個新的 Player 或返回一個現有的 Player

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`PlayerOptions`](../types/Player.types.md#playeroptions) | The player options |

#### Returns

[`Player`](Player.md)

#### Defined in

[lib/LavaShark.ts:269](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/LavaShark.ts#L269)

___

### decodeTrack

▸ **decodeTrack**(`encoded`): `Promise`<[`Track`](Track.md)>

解碼以 base64 字串表示的音軌

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoded` | `string` | 該音軌的 base64 編碼 |

#### Returns

`Promise`<[`Track`](Track.md)>

#### Defined in

[lib/LavaShark.ts:211](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/LavaShark.ts#L211)

___

### decodeTracks

▸ **decodeTracks**(`encodedTracks`): `Promise`<[`Track`](Track.md)[]>

解碼多個音軌的 base64 字串

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encodedTracks` | `string`[] | The base64 encoded tracks |

#### Returns

`Promise`<[`Track`](Track.md)[]>

#### Defined in

[lib/LavaShark.ts:223](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/LavaShark.ts#L223)

___

### emit

▸ **emit**\<`EventName`\>(`event`, `...args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventName` | extends keyof [`LavaSharkEvents`](../types/LavaShark.types.md#lavasharkevents) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `EventName` |
| `...args` | `Parameters`\<[`LavaSharkEvents`](../types/LavaShark.types.md#lavasharkevents)[`EventName`]\> |

#### Returns

`boolean`

#### Overrides

EventEmitter.emit

#### Defined in

[lib/LavaShark.ts:146](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/LavaShark.ts#L146)

___

### getPlayer

▸ **getPlayer**(`guildId`): ``null`` | [`Player`](Player.md)

使用 guild ID 檢索現有的 Player

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | 該 Player 所屬的 guild ID |

#### Returns

``null`` | [`Player`](Player.md)

#### Defined in

[lib/LavaShark.ts:287](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/LavaShark.ts#L287)

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

[lib/LavaShark.ts:390](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/LavaShark.ts#L390)

___

### nodePing

▸ **nodePing**(`node`, `timeout?`): `Promise`<`number`>

獲取單個節點的 ping 值

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `node` | [`Node`](Node.md) | `undefined` | 要 ping 的節點 |
| `timeout` | `number` | `1500` | 超時值，以毫秒為單位 |

#### Returns

`Promise`<`number`>

- 節點的延遲，以毫秒為單位

#### Defined in

[lib/LavaShark.ts:446](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/LavaShark.ts#L446)

___

### nodesPing

▸ **nodesPing**(`timeout?`): `Promise`<`number`[]>

獲取所有節點的 ping 值

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `timeout` | `number` | `1500` | 超時值，以毫秒為單位 |

#### Returns

`Promise`<`number`[]>

- 所有節點的延遲，以毫秒為單位

#### Defined in

[lib/LavaShark.ts:459](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/LavaShark.ts#L459)

___

### on

▸ **on**\<`EventName`\>(`event`, `listener`): `this`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventName` | extends keyof [`LavaSharkEvents`](../types/LavaShark.types.md#lavasharkevents) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `EventName` |
| `listener` | [`LavaSharkEvents`](../types/LavaShark.types.md#lavasharkevents)[`EventName`] |

#### Returns

`this`

#### Overrides

EventEmitter.on

#### Defined in

[lib/LavaShark.ts:150](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/LavaShark.ts#L150)

___

### once

▸ **once**\<`EventName`\>(`event`, `listener`): `this`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventName` | extends keyof [`LavaSharkEvents`](../types/LavaShark.types.md#lavasharkevents) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `EventName` |
| `listener` | [`LavaSharkEvents`](../types/LavaShark.types.md#lavasharkevents)[`EventName`] |

#### Returns

`this`

#### Overrides

EventEmitter.once

#### Defined in

[lib/LavaShark.ts:154](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/LavaShark.ts#L154)

___

### search

▸ **search**(`query`, `source?`): `Promise`<[`SearchResult`](../types/REST.types.md#searchresult)>

通過歌曲名稱進行搜索或使用歌曲連結

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | 要搜索的內容 |
| `source?` | [`SEARCH_SOURCE`](../types/LavaShark.types.md#search_source) | 搜尋來源 |

#### Returns

`Promise`<[`SearchResult`](../types/REST.types.md#searchresult)>

#### Defined in

[lib/LavaShark.ts:308](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/LavaShark.ts#L308)

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

[lib/LavaShark.ts:371](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/LavaShark.ts#L371)

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

[lib/LavaShark.ts:53](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/LavaShark.ts#L53)
