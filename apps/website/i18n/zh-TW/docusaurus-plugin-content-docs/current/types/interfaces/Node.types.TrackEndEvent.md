# @types/Node.TrackEndEvent

Lavalink node incoming payloads

## Hierarchy

- [`PlayerEventPayload`](Node.types.PlayerEventPayload.md)

  ↳ **`TrackEndEvent`**

## Table of contents

### Properties

- [guildId](Node.types.TrackEndEvent.md#guildid)
- [op](Node.types.TrackEndEvent.md#op)
- [reason](Node.types.TrackEndEvent.md#reason)
- [track](Node.types.TrackEndEvent.md#track)
- [type](Node.types.TrackEndEvent.md#type)

## Properties

### guildId

• **guildId**: `string`

#### Inherited from

[PlayerEventPayload](Node.types.PlayerEventPayload.md).[guildId](Node.types.PlayerEventPayload.md#guildid)

#### Defined in

[@types/Node.types.ts:109](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/@types/Node.types.ts#L109)

___

### op

• **op**: ``"event"``

#### Inherited from

[PlayerEventPayload](Node.types.PlayerEventPayload.md).[op](Node.types.PlayerEventPayload.md#op)

#### Defined in

[@types/Node.types.ts:107](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/@types/Node.types.ts#L107)

___

### reason

• **reason**: [`TrackEndReason`](../Node.types.md#trackendreason)

#### Defined in

[@types/Node.types.ts:122](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/@types/Node.types.ts#L122)

___

### track

• **track**: `string`

#### Defined in

[@types/Node.types.ts:121](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/@types/Node.types.ts#L121)

___

### type

• **type**: ``"TrackEndEvent"``

#### Overrides

[PlayerEventPayload](Node.types.PlayerEventPayload.md).[type](Node.types.PlayerEventPayload.md#type)

#### Defined in

[@types/Node.types.ts:120](https://github.com/hmes98318/LavaShark/blob/3261a2e/src/@types/Node.types.ts#L120)
