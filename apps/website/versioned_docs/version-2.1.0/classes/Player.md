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
- [prioritizePlay](Player.md#prioritizeplay)
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

[lib/Player.ts:88](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L88)

## Properties

### current

• **current**: ``null`` | [`Track`](Track.md)

#### Defined in

[lib/Player.ts:48](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L48)

___

### filters

• `Readonly` **filters**: [`Filters`](Filters.md)

#### Defined in

[lib/Player.ts:38](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L38)

___

### guildId

• `Readonly` **guildId**: `string`

#### Defined in

[lib/Player.ts:37](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L37)

___

### moving

• **moving**: `boolean`

#### Defined in

[lib/Player.ts:61](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L61)

___

### node

• **node**: ``null`` | [`Node`](Node.md)

#### Defined in

[lib/Player.ts:40](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L40)

___

### paused

• **paused**: `boolean`

#### Defined in

[lib/Player.ts:56](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L56)

___

### playing

• **playing**: `boolean`

#### Defined in

[lib/Player.ts:55](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L55)

___

### position

• **position**: `number`

#### Defined in

[lib/Player.ts:53](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L53)

___

### queue

• **queue**: `Queue`

#### Defined in

[lib/Player.ts:49](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L49)

___

### repeatMode

• **repeatMode**: [`RepeatMode`](../types/enums/enums.RepeatMode.md)

#### Defined in

[lib/Player.ts:51](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L51)

___

### selfDeaf

• `Optional` **selfDeaf**: `boolean`

#### Defined in

[lib/Player.ts:45](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L45)

___

### selfMute

• `Optional` **selfMute**: `boolean`

#### Defined in

[lib/Player.ts:46](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L46)

___

### state

• **state**: [`ConnectionState`](../types/enums/enums.ConnectionState.md)

#### Defined in

[lib/Player.ts:58](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L58)

___

### textChannelId

• `Optional` **textChannelId**: ``null`` | `string`

#### Defined in

[lib/Player.ts:43](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L43)

___

### voiceChannelId

• **voiceChannelId**: `string`

#### Defined in

[lib/Player.ts:42](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L42)

___

### voiceState

• **voiceState**: [`VoiceState`](../types/Player.types.md#voicestate)

#### Defined in

[lib/Player.ts:59](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L59)

## Accessors

### exactPosition

• `get` **exactPosition**(): `number`

Gets the exact track position based on the last playerUpdate packet

#### Returns

`number`

#### Defined in

[lib/Player.ts:127](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L127)

___

### queueDuration

• `get` **queueDuration**(): `number`

Gets the queue duration in milliseconds

#### Returns

`number`

**`Deprecated`**

- Use `queue.duration` instead

#### Defined in

[lib/Player.ts:142](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L142)

___

### volume

• `get` **volume**(): `number`

Gets the volume of the player

#### Returns

`number`

#### Defined in

[lib/Player.ts:149](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L149)

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

[lib/Player.ts:169](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L169)

___

### connect

▸ **connect**(): `Promise`\<`void`\>

Connects to the voice channel

#### Returns

`Promise`\<`void`\>

#### Defined in

[lib/Player.ts:188](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L188)

___

### destroy

▸ **destroy**(): `void`

Destroys the player

#### Returns

`void`

#### Defined in

[lib/Player.ts:229](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L229)

___

### disconnect

▸ **disconnect**(): `void`

Disconnects from the voice channel

#### Returns

`void`

#### Defined in

[lib/Player.ts:210](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L210)

___

### moveNode

▸ **moveNode**(`node`): `Promise`\<`void`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | [`Node`](Node.md) | The target node to move the player |

#### Returns

`Promise`\<`void`\>

#### Defined in

[lib/Player.ts:247](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L247)

___

### pause

▸ **pause**(`state?`): `Promise`\<`boolean`\>

Pause or unpause the player

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `state?` | `boolean` | `true` | Whether to pause or unpause the player |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[lib/Player.ts:370](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L370)

___

### ping

▸ **ping**(): `Promise`\<`number`\>

Gets the latency between lavalink client & node

#### Returns

`Promise`\<`number`\>

- In milliseconds

#### Defined in

[lib/Player.ts:286](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L286)

___

### play

▸ **play**(`options?`): `Promise`\<`void`\>

Plays a track

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`PlayOptions`](../types/Player.types.md#playoptions) | Play options |

#### Returns

`Promise`\<`void`\>

#### Defined in

[lib/Player.ts:308](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L308)

___

### prioritizePlay

▸ **prioritizePlay**(`track`, `requester`): `Promise`\<`boolean`\>

Prioritizes playing a new track

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `track` | [`Track`](Track.md) | The track to prioritize |
| `requester` | `User` | The requester of the track |

#### Returns

`Promise`\<`void`\>

#### Defined in

[lib/Player.ts:347](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L347)

___

### resume

▸ **resume**(): `Promise`\<`boolean`\>

Resume the player

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[lib/Player.ts:394](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L394)

___

### seek

▸ **seek**(`position`): `Promise`\<`void`\>

Seek to a specific position in the track

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `number` | The position to seek, in milliseconds |

#### Returns

`Promise`\<`void`\>

#### Defined in

[lib/Player.ts:430](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L430)

___

### sendVoiceUpdate

▸ **sendVoiceUpdate**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[lib/Player.ts:527](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L527)

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

[lib/Player.ts:450](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L450)

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

[lib/Player.ts:492](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L492)

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

[lib/Player.ts:505](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L505)

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

[lib/Player.ts:518](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L518)

___

### skip

▸ **skip**(`amount?`): `Promise`\<`boolean`\>

Skips the current playing track

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount?` | `number` | The amount of tracks to skip |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[lib/Player.ts:402](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L402)

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

[lib/Player.ts:550](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L550)

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

[lib/Player.ts:66](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Player.ts#L66)
