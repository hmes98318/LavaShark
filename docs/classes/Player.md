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
- [setQueueLoop](Player.md#setqueueloop)
- [setSelfDeaf](Player.md#setselfdeaf)
- [setSelfMute](Player.md#setselfmute)
- [setTrackLoop](Player.md#settrackloop)
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

[lib/Player.ts:77](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L77)

## Properties

### current

• **current**: ``null`` \| [`Track`](Track.md)

#### Defined in

[lib/Player.ts:38](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L38)

___

### filters

• `Readonly` **filters**: [`Filters`](Filters.md)

#### Defined in

[lib/Player.ts:28](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L28)

___

### guildId

• `Readonly` **guildId**: `string`

#### Defined in

[lib/Player.ts:26](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L26)

___

### moving

• **moving**: `boolean`

#### Defined in

[lib/Player.ts:53](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L53)

___

### node

• **node**: ``null`` \| [`Node`](Node.md)

#### Defined in

[lib/Player.ts:24](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L24)

___

### paused

• **paused**: `boolean`

#### Defined in

[lib/Player.ts:48](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L48)

___

### playing

• **playing**: `boolean`

#### Defined in

[lib/Player.ts:47](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L47)

___

### position

• **position**: `number`

#### Defined in

[lib/Player.ts:44](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L44)

___

### queue

• **queue**: `Queue`

#### Defined in

[lib/Player.ts:39](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L39)

___

### queueRepeat

• **queueRepeat**: `boolean`

#### Defined in

[lib/Player.ts:41](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L41)

___

### selfDeaf

• `Optional` **selfDeaf**: `boolean`

#### Defined in

[lib/Player.ts:35](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L35)

___

### selfMute

• `Optional` **selfMute**: `boolean`

#### Defined in

[lib/Player.ts:36](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L36)

___

### state

• **state**: `ConnectionState`

#### Defined in

[lib/Player.ts:50](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L50)

___

### textChannelId

• `Optional` **textChannelId**: ``null`` \| `string`

#### Defined in

[lib/Player.ts:33](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L33)

___

### trackRepeat

• **trackRepeat**: `boolean`

#### Defined in

[lib/Player.ts:42](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L42)

___

### voiceChannelId

• **voiceChannelId**: `string`

#### Defined in

[lib/Player.ts:32](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L32)

___

### voiceState

• **voiceState**: [`VoiceState`](../types/types.md#voicestate)

#### Defined in

[lib/Player.ts:51](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L51)

## Accessors

### exactPosition

• `get` **exactPosition**(): `number`

Gets the exact track position based on the last playerUpdate packet

#### Returns

`number`

#### Defined in

[lib/Player.ts:117](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L117)

___

### queueDuration

• `get` **queueDuration**(): `number`

Gets the queue duration in milliseconds

**`Deprecated`**

- Use `queue.duration` instead

#### Returns

`number`

#### Defined in

[lib/Player.ts:132](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L132)

___

### volume

• `get` **volume**(): `number`

Gets the volume of the player

#### Returns

`number`

#### Defined in

[lib/Player.ts:139](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L139)

## Methods

### connect

▸ **connect**(): `void`

Connects to the voice channel

#### Returns

`void`

#### Defined in

[lib/Player.ts:157](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L157)

___

### destroy

▸ **destroy**(): `Promise`<`void`\>

Destroys the player

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/Player.ts:206](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L206)

___

### disconnect

▸ **disconnect**(): `void`

Disconnects from the voice channel

#### Returns

`void`

#### Defined in

[lib/Player.ts:185](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L185)

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

[lib/Player.ts:220](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L220)

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

[lib/Player.ts:429](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L429)

___

### ping

▸ **ping**(): `Promise`<`Number`\>

Gets the latency between lavalink client & node

#### Returns

`Promise`<`Number`\>

- In milliseconds

#### Defined in

[lib/Player.ts:259](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L259)

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

[lib/Player.ts:281](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L281)

___

### resume

▸ **resume**(): `Promise`<`boolean`\>

Resume the player

#### Returns

`Promise`<`boolean`\>

#### Defined in

[lib/Player.ts:450](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L450)

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

[lib/Player.ts:458](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L458)

___

### sendVoiceUpdate

▸ **sendVoiceUpdate**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/Player.ts:474](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L474)

___

### setQueueLoop

▸ **setQueueLoop**(`state`): `void`

Sets the queue looping

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `boolean` | Whether to enable queue looping or not |

#### Returns

`void`

#### Defined in

[lib/Player.ts:372](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L372)

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

[lib/Player.ts:338](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L338)

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

[lib/Player.ts:351](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L351)

___

### setTrackLoop

▸ **setTrackLoop**(`state`): `void`

Sets the track looping

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `boolean` | Whether to enable track looping or not |

#### Returns

`void`

#### Defined in

[lib/Player.ts:364](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L364)

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

[lib/Player.ts:380](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L380)

___

### skip

▸ **skip**(`amount?`): `Promise`<`boolean`\>

Skips the current playing track

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `amount?` | `number` | `1` | The amount of tracks to skip |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[lib/Player.ts:404](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L404)

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

[lib/Player.ts:497](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L497)

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

[lib/Player.ts:55](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Player.ts#L55)
