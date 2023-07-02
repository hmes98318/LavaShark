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
- [queueRepeat](Player.md#queuerepeat)
- [selfDeaf](Player.md#selfdeaf)
- [selfMute](Player.md#selfmute)
- [state](Player.md#state)
- [textChannelId](Player.md#textchannelid)
- [trackRepeat](Player.md#trackrepeat)
- [voiceChannelId](Player.md#voicechannelid)
- [voiceState](Player.md#voicestate)

### Accessors

- [exactPosition](Player.md#exactposition)
- [queueDuration](Player.md#queueduration)
- [volume](Player.md#volume)

### Methods

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

Create a new Player instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lavashark` | [`LavaShark`](LavaShark.md) | The lavashark instance |
| `options` | [`PlayerOptions`](../types/types.md#playeroptions) | The player options |

#### Defined in

[lib/Player.ts:78](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L78)

## Properties

### current

• **current**: ``null`` \| [`Track`](Track.md)

#### Defined in

[lib/Player.ts:39](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L39)

___

### filters

• `Readonly` **filters**: [`Filters`](Filters.md)

#### Defined in

[lib/Player.ts:29](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L29)

___

### guildId

• `Readonly` **guildId**: `string`

#### Defined in

[lib/Player.ts:27](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L27)

___

### moving

• **moving**: `boolean`

#### Defined in

[lib/Player.ts:54](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L54)

___

### node

• **node**: ``null`` \| [`Node`](Node.md)

#### Defined in

[lib/Player.ts:25](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L25)

___

### paused

• **paused**: `boolean`

#### Defined in

[lib/Player.ts:49](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L49)

___

### playing

• **playing**: `boolean`

#### Defined in

[lib/Player.ts:48](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L48)

___

### position

• **position**: `number`

#### Defined in

[lib/Player.ts:45](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L45)

___

### queue

• **queue**: `Queue`

#### Defined in

[lib/Player.ts:40](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L40)

___

### queueRepeat

• **queueRepeat**: `boolean`

#### Defined in

[lib/Player.ts:42](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L42)

___

### selfDeaf

• `Optional` **selfDeaf**: `boolean`

#### Defined in

[lib/Player.ts:36](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L36)

___

### selfMute

• `Optional` **selfMute**: `boolean`

#### Defined in

[lib/Player.ts:37](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L37)

___

### state

• **state**: `ConnectionState`

#### Defined in

[lib/Player.ts:51](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L51)

___

### textChannelId

• `Optional` **textChannelId**: ``null`` \| `string`

#### Defined in

[lib/Player.ts:34](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L34)

___

### trackRepeat

• **trackRepeat**: `boolean`

#### Defined in

[lib/Player.ts:43](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L43)

___

### voiceChannelId

• **voiceChannelId**: `string`

#### Defined in

[lib/Player.ts:33](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L33)

___

### voiceState

• **voiceState**: [`VoiceState`](../types/types.md#voicestate)

#### Defined in

[lib/Player.ts:52](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L52)

## Accessors

### exactPosition

• `get` **exactPosition**(): `number`

Gets the exact track position based on the last playerUpdate packet

#### Returns

`number`

#### Defined in

[lib/Player.ts:118](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L118)

___

### queueDuration

• `get` **queueDuration**(): `number`

Gets the queue duration in milliseconds

**`Deprecated`**

- Use `queue.duration` instead

#### Returns

`number`

#### Defined in

[lib/Player.ts:133](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L133)

___

### volume

• `get` **volume**(): `number`

Gets the volume of the player

#### Returns

`number`

#### Defined in

[lib/Player.ts:140](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L140)

## Methods

### connect

▸ **connect**(): `void`

Connects to the voice channel

#### Returns

`void`

#### Defined in

[lib/Player.ts:158](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L158)

___

### destroy

▸ **destroy**(): `Promise`<`void`\>

Destroys the player

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/Player.ts:207](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L207)

___

### disconnect

▸ **disconnect**(): `void`

Disconnects from the voice channel

#### Returns

`void`

#### Defined in

[lib/Player.ts:186](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L186)

___

### moveNode

▸ **moveNode**(`node`): `Promise`<`void`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | [`Node`](Node.md) | The target node to move the player |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/Player.ts:221](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L221)

___

### pause

▸ **pause**(`state?`): `Promise`<`boolean`\>

Pause or unpause the player

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `state?` | `boolean` | `true` | Whether to pause or unpause the player |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[lib/Player.ts:321](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L321)

___

### ping

▸ **ping**(): `Promise`<`number`\>

Gets the latency between lavalink client & node

#### Returns

`Promise`<`number`\>

- In milliseconds

#### Defined in

[lib/Player.ts:260](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L260)

___

### play

▸ **play**(`options?`): `Promise`<`void`\>

Plays a track

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`PlayOptions`](../types/types.md#playoptions) | Play options |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/Player.ts:282](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L282)

___

### resume

▸ **resume**(): `Promise`<`boolean`\>

Resume the player

#### Returns

`Promise`<`boolean`\>

#### Defined in

[lib/Player.ts:342](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L342)

___

### seek

▸ **seek**(`position`): `Promise`<`void`\>

Seek to a specific position in the track

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `number` | The position to seek, in milliseconds |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/Player.ts:378](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L378)

___

### sendVoiceUpdate

▸ **sendVoiceUpdate**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/Player.ts:478](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L478)

___

### setRepeatMode

▸ **setRepeatMode**(`mode`): `void`

Set repeat mode for this queue

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mode` | [`RepeatMode`](../types/enums/types.RepeatMode.md) | The repeat mode to apply |

#### Returns

`void`

#### Defined in

[lib/Player.ts:398](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L398)

___

### setSelfDeaf

▸ **setSelfDeaf**(`state`): `void`

Sets the bot's self deaf state

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `boolean` | Whether to self deaf or not |

#### Returns

`void`

#### Defined in

[lib/Player.ts:443](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L443)

___

### setSelfMute

▸ **setSelfMute**(`state`): `void`

Sets the bot's self mute state

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `boolean` | Whether to self mute or not |

#### Returns

`void`

#### Defined in

[lib/Player.ts:456](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L456)

___

### setVoiceChannel

▸ **setVoiceChannel**(`channelId`): `void`

Sets the player voice channel

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | The voice channel id |

#### Returns

`void`

#### Defined in

[lib/Player.ts:469](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L469)

___

### skip

▸ **skip**(`amount?`): `Promise`<`boolean`\>

Skips the current playing track

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount?` | `number` | The amount of tracks to skip |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[lib/Player.ts:350](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L350)

___

### update

▸ **update**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`PlayerState`](../types/types.md#playerstate) |

#### Returns

`void`

#### Defined in

[lib/Player.ts:501](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L501)

___

### checkOptions

▸ `Static` **checkOptions**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`PlayerOptions`](../types/types.md#playeroptions) |

#### Returns

`void`

#### Defined in

[lib/Player.ts:56](https://github.com/hmes98318/LavaShark/blob/51b03f2/src/lib/Player.ts#L56)
