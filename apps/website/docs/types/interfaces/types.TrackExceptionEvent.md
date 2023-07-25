# Interface: TrackExceptionEvent

[@types](../types.md).TrackExceptionEvent

Lavalink node incoming payloads

## Hierarchy

- [`PlayerEventPayload`](types.PlayerEventPayload.md)

  ↳ **`TrackExceptionEvent`**

## Table of contents

### Properties

- [exception](types.TrackExceptionEvent.md#exception)
- [guildId](types.TrackExceptionEvent.md#guildid)
- [op](types.TrackExceptionEvent.md#op)
- [track](types.TrackExceptionEvent.md#track)
- [type](types.TrackExceptionEvent.md#type)

## Properties

### exception

• **exception**: [`LoadException`](../types.md#loadexception) & { `cause`: `string`  }

#### Defined in

[@types/Node.types.ts:128](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Node.types.ts#L128)

___

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

### track

• **track**: `string`

#### Defined in

[@types/Node.types.ts:127](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Node.types.ts#L127)

___

### type

• **type**: ``"TrackExceptionEvent"``

#### Overrides

[PlayerEventPayload](types.PlayerEventPayload.md).[type](types.PlayerEventPayload.md#type)

#### Defined in

[@types/Node.types.ts:126](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Node.types.ts#L126)
