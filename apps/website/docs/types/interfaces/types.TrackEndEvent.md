# Interface: TrackEndEvent

[@types](../types.md).TrackEndEvent

Lavalink node incoming payloads

## Hierarchy

- [`PlayerEventPayload`](types.PlayerEventPayload.md)

  ↳ **`TrackEndEvent`**

## Table of contents

### Properties

- [guildId](types.TrackEndEvent.md#guildid)
- [op](types.TrackEndEvent.md#op)
- [reason](types.TrackEndEvent.md#reason)
- [track](types.TrackEndEvent.md#track)
- [type](types.TrackEndEvent.md#type)

## Properties

### guildId

• **guildId**: `string`

#### Inherited from

[PlayerEventPayload](types.PlayerEventPayload.md).[guildId](types.PlayerEventPayload.md#guildid)

#### Defined in

[@types/Node.types.ts:109](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Node.types.ts#L109)

___

### op

• **op**: ``"event"``

#### Inherited from

[PlayerEventPayload](types.PlayerEventPayload.md).[op](types.PlayerEventPayload.md#op)

#### Defined in

[@types/Node.types.ts:107](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Node.types.ts#L107)

___

### reason

• **reason**: [`TrackEndReason`](../types.md#trackendreason)

#### Defined in

[@types/Node.types.ts:122](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Node.types.ts#L122)

___

### track

• **track**: `string`

#### Defined in

[@types/Node.types.ts:121](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Node.types.ts#L121)

___

### type

• **type**: ``"TrackEndEvent"``

#### Overrides

[PlayerEventPayload](types.PlayerEventPayload.md).[type](types.PlayerEventPayload.md#type)

#### Defined in

[@types/Node.types.ts:120](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Node.types.ts#L120)
