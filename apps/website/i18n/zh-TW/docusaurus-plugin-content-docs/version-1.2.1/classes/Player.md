# Player

## Table of contents

### Constructors

- [constructor](Player.md#constructor)

### Properties

- [current](Player.md#current)
- [filters](Player.md#filters)
- [guildId](Player.md#guildid)
- [moving](Player.md#moving)
- [node](Player.md#node)
- [paused](Player.md#paused)
- [playing](Player.md#playing)
- [position](Player.md#position)
- [queue](Player.md#queue)
- [repeatMode](Player.md#repeatmode)
- [selfDeaf](Player.md#selfdeaf)
- [selfMute](Player.md#selfmute)
- [state](Player.md#state)
- [textChannelId](Player.md#textchannelid)
- [voiceChannelId](Player.md#voicechannelid)
- [voiceState](Player.md#voicestate)

### Accessors

- [exactPosition](Player.md#exactposition)
- [queueDuration](Player.md#queueduration)
- [volume](Player.md#volume)

### Methods

- [addTracks](Player.md#addtracks)
- [connect](Player.md#connect)
- [destroy](Player.md#destroy)
- [disconnect](Player.md#disconnect)
- [moveNode](Player.md#movenode)
- [pause](Player.md#pause)
- [ping](Player.md#ping)
- [play](Player.md#play)
- [resume](Player.md#resume)
- [seek](Player.md#seek)
- [sendVoiceUpdate](Player.md#sendvoiceupdate)
- [setRepeatMode](Player.md#setrepeatmode)
- [setSelfDeaf](Player.md#setselfdeaf)
- [setSelfMute](Player.md#setselfmute)
- [setVoiceChannel](Player.md#setvoicechannel)
- [skip](Player.md#skip)
- [update](Player.md#update)
- [checkOptions](Player.md#checkoptions)

## Constructors

### constructor

• **new Player**(`lavashark`, `options`)

創建一個 Player 實例

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lavashark` | [`LavaShark`](LavaShark.md) | LavaShark 實例 |
| `options` | [`PlayerOptions`](../types/Player.types.md#playeroptions) | Player 選項 |

#### Defined in

[lib/Player.ts:88](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L88)

## Properties

### current

• **current**: ``null`` \| [`Track`](Track.md)

#### Defined in

[lib/Player.ts:50](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L50)

___

### filters

• `Readonly` **filters**: [`Filters`](Filters.md)

#### Defined in

[lib/Player.ts:40](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L40)

___

### guildId

• `Readonly` **guildId**: `string`

#### Defined in

[lib/Player.ts:38](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L38)

___

### moving

• **moving**: `boolean`

#### Defined in

[lib/Player.ts:64](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L64)

___

### node

• **node**: ``null`` \| [`Node`](Node.md)

#### Defined in

[lib/Player.ts:36](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L36)

___

### paused

• **paused**: `boolean`

#### Defined in

[lib/Player.ts:59](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L59)

___

### playing

• **playing**: `boolean`

#### Defined in

[lib/Player.ts:58](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L58)

___

### position

• **position**: `number`

#### Defined in

[lib/Player.ts:55](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L55)

___

### queue

• **queue**: `Queue`

#### Defined in

[lib/Player.ts:51](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L51)

___

### repeatMode

• **repeatMode**: [`RepeatMode`](../types/enums/enums.RepeatMode.md)

#### Defined in

[lib/Player.ts:53](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L53)

___

### selfDeaf

• `Optional` **selfDeaf**: `boolean`

#### Defined in

[lib/Player.ts:47](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L47)

___

### selfMute

• `Optional` **selfMute**: `boolean`

#### Defined in

[lib/Player.ts:48](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L48)

___

### state

• **state**: [`ConnectionState`](../types/enums/enums.ConnectionState.md)

#### Defined in

[lib/Player.ts:61](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L61)

___

### textChannelId

• `Optional` **textChannelId**: ``null`` \| `string`

#### Defined in

[lib/Player.ts:45](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L45)

___

### voiceChannelId

• **voiceChannelId**: `string`

#### Defined in

[lib/Player.ts:44](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L44)

___

### voiceState

• **voiceState**: [`VoiceState`](../types/Player.types.md#voicestate)

#### Defined in

[lib/Player.ts:62](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L62)

## Accessors

### exactPosition

• `get` **exactPosition**(): `number`

Gets the exact track position based on the last playerUpdate packet

#### Returns

`number`

#### Defined in

[lib/Player.ts:127](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L127)

___

### queueDuration

• `get` **queueDuration**(): `number`

獲取隊列的持續時間，以毫秒為單位

**`Deprecated`**

- Use `queue.duration` instead

#### Returns

`number`

#### Defined in

[lib/Player.ts:142](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L142)

___

### volume

• `get` **volume**(): `number`

獲取播放器的音量

#### Returns

`number`

#### Defined in

[lib/Player.ts:149](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L149)

## Methods

### addTracks

▸ **addTracks**(`tracks`, `requester`): `void`

將一個或多個歌曲添加到隊列

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tracks` | `default` \| [`Track`](Track.md) \| (`default` \| [`Track`](Track.md))[] | 要添加到隊列的歌曲 |
| `requester` | `unknown` | 歌曲的請求者 |

#### Returns

`void`

#### Defined in

[lib/Player.ts:169](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L169)

___

### connect

▸ **connect**(): `Promise`<`void`\>

連接到語音頻道

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/Player.ts:188](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L188)

___

### destroy

▸ **destroy**(): `Promise`<`void`\>

摧毀 Player

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/Player.ts:239](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L239)

___

### disconnect

▸ **disconnect**(): `void`

與語音通道斷開連接

#### Returns

`void`

#### Defined in

[lib/Player.ts:218](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L218)

___

### moveNode

▸ **moveNode**(`node`): `Promise`<`void`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | [`Node`](Node.md) | 將 Player 移動到的目標節點 |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/Player.ts:253](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L253)

___

### pause

▸ **pause**(`state?`): `Promise`<`boolean`\>

暫停或取消暫停 Player

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `state?` | `boolean` | `true` | 是暫停還是取消暫停 Player |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[lib/Player.ts:353](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L353)

___

### ping

▸ **ping**(): `Promise`<`number`\>

獲取 Lavalink 客戶端與節點之間的延遲

#### Returns

`Promise`<`number`\>

- 以毫秒為單位

#### Defined in

[lib/Player.ts:292](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L292)

___

### play

▸ **play**(`options?`): `Promise`<`void`\>

Plays a track

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`PlayOptions`](../types/Player.types.md#playoptions) | Play options |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/Player.ts:314](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L314)

___

### resume

▸ **resume**(): `Promise`<`boolean`\>

恢復播放 Player

#### Returns

`Promise`<`boolean`\>

#### Defined in

[lib/Player.ts:374](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L374)

___

### seek

▸ **seek**(`position`): `Promise`<`void`\>

在音軌中跳轉到特定位置

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `number` | 要跳轉的位置，以毫秒為單位 |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/Player.ts:410](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L410)

___

### sendVoiceUpdate

▸ **sendVoiceUpdate**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/Player.ts:507](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L507)

___

### setRepeatMode

▸ **setRepeatMode**(`mode`): `void`

為這個隊列設置重複模式

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mode` | [`RepeatMode`](../types/enums/enums.RepeatMode.md) | 要使用的重複模式 |

#### Returns

`void`

#### Defined in

[lib/Player.ts:430](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L430)

___

### setSelfDeaf

▸ **setSelfDeaf**(`state`): `void`

設置機器人的自身拒聽狀態

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `boolean` | 是將機器人自身拒聽還是取消自身拒聽 |

#### Returns

`void`

#### Defined in

[lib/Player.ts:472](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L472)

___

### setSelfMute

▸ **setSelfMute**(`state`): `void`

設置機器人的自身靜音狀態

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `boolean` | 是將機器人自身靜音還是取消自身靜音 |

#### Returns

`void`

#### Defined in

[lib/Player.ts:485](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L485)

___

### setVoiceChannel

▸ **setVoiceChannel**(`channelId`): `void`

設置 Player 的語音頻道

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | 語音頻道 ID |

#### Returns

`void`

#### Defined in

[lib/Player.ts:498](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L498)

___

### skip

▸ **skip**(`amount?`): `Promise`<`boolean`\>

跳過正在播放的歌曲

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount?` | `number` | 要跳過的歌曲數量 |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[lib/Player.ts:382](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L382)

___

### update

▸ **update**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`PlayerState`](../types/Node.types.md#playerstate) |

#### Returns

`void`

#### Defined in

[lib/Player.ts:530](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L530)

___

### checkOptions

▸ `Static` **checkOptions**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`PlayerOptions`](../types/Player.types.md#playeroptions) |

#### Returns

`void`

#### Defined in

[lib/Player.ts:66](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/lib/Player.ts#L66)
