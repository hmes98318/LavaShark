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

Create a new Player instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lavashark` | [`LavaShark`](LavaShark.md) | The lavashark instance |
| `options` | [`PlayerOptions`](../types/Player.types.md#playeroptions) | The player options |

#### Defined in

[lib/Player.ts:88](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L88)

## Properties

### current

• **current**: ``null`` | [`Track`](Track.md)

#### Defined in

[lib/Player.ts:47](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L47)

___

### filters

• `Readonly` **filters**: [`Filters`](Filters.md)

#### Defined in

[lib/Player.ts:37](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L37)

___

### guildId

• `Readonly` **guildId**: `string`

#### Defined in

[lib/Player.ts:36](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L36)

___

### moving

• **moving**: `boolean`

#### Defined in

[lib/Player.ts:60](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L60)

___

### node

• **node**: ``null`` | [`Node`](Node.md)

#### Defined in

[lib/Player.ts:39](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L39)

___

### paused

• **paused**: `boolean`

#### Defined in

[lib/Player.ts:55](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L55)

___

### playing

• **playing**: `boolean`

#### Defined in

[lib/Player.ts:54](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L54)

___

### position

• **position**: `number`

#### Defined in

[lib/Player.ts:52](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L52)

___

### queue

• **queue**: `Queue`

#### Defined in

[lib/Player.ts:48](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L48)

___

### repeatMode

• **repeatMode**: [`RepeatMode`](../types/enums/enums.RepeatMode.md)

#### Defined in

[lib/Player.ts:50](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L50)

___

### selfDeaf

• `Optional` **selfDeaf**: `boolean`

#### Defined in

[lib/Player.ts:44](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L44)

___

### selfMute

• `Optional` **selfMute**: `boolean`

#### Defined in

[lib/Player.ts:45](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L45)

___

### state

• **state**: [`ConnectionState`](../types/enums/enums.ConnectionState.md)

#### Defined in

[lib/Player.ts:57](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L57)

___

### textChannelId

• `Optional` **textChannelId**: ``null`` | `string`

#### Defined in

[lib/Player.ts:42](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L42)

___

### voiceChannelId

• **voiceChannelId**: `string`

#### Defined in

[lib/Player.ts:41](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L41)

___

### voiceState

• **voiceState**: [`VoiceState`](../types/Player.types.md#voicestate)

#### Defined in

[lib/Player.ts:58](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L58)

## Accessors

### exactPosition

• `get` **exactPosition**(): `number`

Gets the exact track position based on the last playerUpdate packet

#### Returns

`number`

#### Defined in

[lib/Player.ts:126](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L126)

___

### queueDuration

• `get` **queueDuration**(): `number`

Gets the queue duration in milliseconds

#### Returns

`number`

**`Deprecated`**

- Use `queue.duration` instead

#### Defined in

[lib/Player.ts:141](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L141)

___

### volume

• `get` **volume**(): `number`

Gets the volume of the player

#### Returns

`number`

#### Defined in

[lib/Player.ts:148](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L148)

## Methods

### addTracks

▸ **addTracks**(`tracks`, `requester`): `void`

Adds one or more tracks to the queue

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tracks` | `default` | [`Track`](Track.md) | (`default` | [`Track`](Track.md))[] | The track(s) to add to the queue |
| `requester` | `User` | The requester of the track(s) |

#### Returns

`void`

#### Defined in

[lib/Player.ts:168](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L168)

___

### connect

▸ **connect**(): `Promise`<`void`>

Connects to the voice channel

#### Returns

`Promise`<`void`>

#### Defined in

[lib/Player.ts:187](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L187)

___

### destroy

▸ **destroy**(): `void`

Destroys the player

#### Returns

`void`

#### Defined in

[lib/Player.ts:228](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L228)

___

### disconnect

▸ **disconnect**(): `void`

Disconnects from the voice channel

#### Returns

`void`

#### Defined in

[lib/Player.ts:209](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L209)

___

### moveNode

▸ **moveNode**(`node`): `Promise`<`void`>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | [`Node`](Node.md) | The target node to move the player |

#### Returns

`Promise`<`void`>

#### Defined in

[lib/Player.ts:246](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L246)

___

### pause

▸ **pause**(`state?`): `Promise`<`boolean`>

Pause or unpause the player

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `state?` | `boolean` | `true` | Whether to pause or unpause the player |

#### Returns

`Promise`<`boolean`>

#### Defined in

[lib/Player.ts:346](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L346)

___

### ping

▸ **ping**(): `Promise`<`number`>

Gets the latency between lavalink client & node

#### Returns

`Promise`<`number`>

- In milliseconds

#### Defined in

[lib/Player.ts:285](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L285)

___

### play

▸ **play**(`options?`): `Promise`<`void`>

Plays a track

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`PlayOptions`](../types/Player.types.md#playoptions) | Play options |

#### Returns

`Promise`<`void`>

#### Defined in

[lib/Player.ts:307](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L307)

___

### resume

▸ **resume**(): `Promise`<`boolean`>

Resume the player

#### Returns

`Promise`<`boolean`>

#### Defined in

[lib/Player.ts:370](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L370)

___

### seek

▸ **seek**(`position`): `Promise`<`void`>

Seek to a specific position in the track

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `number` | The position to seek, in milliseconds |

#### Returns

`Promise`<`void`>

#### Defined in

[lib/Player.ts:406](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L406)

___

### sendVoiceUpdate

▸ **sendVoiceUpdate**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

#### Defined in

[lib/Player.ts:503](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L503)

___

### setRepeatMode

▸ **setRepeatMode**(`mode`): `void`

Set repeat mode for this queue

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mode` | [`RepeatMode`](../types/enums/enums.RepeatMode.md) | The repeat mode to apply |

#### Returns

`void`

#### Defined in

[lib/Player.ts:426](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L426)

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

[lib/Player.ts:468](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L468)

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

[lib/Player.ts:481](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L481)

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

[lib/Player.ts:494](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L494)

___

### skip

▸ **skip**(`amount?`): `Promise`<`boolean`>

Skips the current playing track

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount?` | `number` | The amount of tracks to skip |

#### Returns

`Promise`<`boolean`>

#### Defined in

[lib/Player.ts:378](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L378)

___

### update

▸ **update**(`state`): `void`

Update player state

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`PlayerState`](../types/Node.types.md#playerstate) | playerUpdate event |

#### Returns

`void`

**`Inner`**

#### Defined in

[lib/Player.ts:526](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L526)

___

### checkOptions

▸ **checkOptions**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`PlayerOptions`](../types/Player.types.md#playeroptions) |

#### Returns

`void`

#### Defined in

[lib/Player.ts:65](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Player.ts#L65)
