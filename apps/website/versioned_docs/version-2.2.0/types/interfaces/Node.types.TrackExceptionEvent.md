# @types/Node.TrackExceptionEvent

[@types/Node.types](../Node.types.md).TrackExceptionEvent

Lavalink node incoming payloads

## Hierarchy

- [`PlayerEventPayload`](Node.types.PlayerEventPayload.md)

  ↳ **`TrackExceptionEvent`**

## Table of contents

### Properties

- [exception](Node.types.TrackExceptionEvent.md#exception)
- [guildId](Node.types.TrackExceptionEvent.md#guildid)
- [op](Node.types.TrackExceptionEvent.md#op)
- [track](Node.types.TrackExceptionEvent.md#track)
- [type](Node.types.TrackExceptionEvent.md#type)

## Properties

### exception

• **exception**: [`LoadException`](../REST.types.md#loadexception) & { `cause`: `string`  }

#### Defined in

[@types/Node.types.ts:128](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/@types/Node.types.ts#L128)

___

### guildId

• **guildId**: `string`

#### Inherited from

[PlayerEventPayload](Node.types.PlayerEventPayload.md).[guildId](Node.types.PlayerEventPayload.md#guildid)

#### Defined in

[@types/Node.types.ts:109](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/@types/Node.types.ts#L109)

___

### op

• **op**: ``"event"``

#### Inherited from

[PlayerEventPayload](Node.types.PlayerEventPayload.md).[op](Node.types.PlayerEventPayload.md#op)

#### Defined in

[@types/Node.types.ts:107](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/@types/Node.types.ts#L107)

___

### track

• **track**: `string`

#### Defined in

[@types/Node.types.ts:127](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/@types/Node.types.ts#L127)

___

### type

• **type**: ``"TrackExceptionEvent"``

#### Overrides

[PlayerEventPayload](Node.types.PlayerEventPayload.md).[type](Node.types.PlayerEventPayload.md#type)

#### Defined in

[@types/Node.types.ts:126](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/@types/Node.types.ts#L126)
