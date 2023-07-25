# Interface: TrackStuckEvent

[@types](../types.md).TrackStuckEvent

Lavalink node incoming payloads

## Hierarchy

- [`PlayerEventPayload`](types.PlayerEventPayload.md)

  ↳ **`TrackStuckEvent`**

## Table of contents

### Properties

- [guildId](types.TrackStuckEvent.md#guildid)
- [op](types.TrackStuckEvent.md#op)
- [thresholdMs](types.TrackStuckEvent.md#thresholdms)
- [track](types.TrackStuckEvent.md#track)
- [type](types.TrackStuckEvent.md#type)

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

### thresholdMs

• **thresholdMs**: `number`

#### Defined in

[@types/Node.types.ts:136](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Node.types.ts#L136)

___

### track

• **track**: `string`

#### Defined in

[@types/Node.types.ts:135](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Node.types.ts#L135)

___

### type

• **type**: ``"TrackStuckEvent"``

#### Overrides

[PlayerEventPayload](types.PlayerEventPayload.md).[type](types.PlayerEventPayload.md#type)

#### Defined in

[@types/Node.types.ts:134](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Node.types.ts#L134)
