# Interface: PlayerEventPayload

[@types](../types.md).PlayerEventPayload

Lavalink node incoming payloads

## Hierarchy

- **`PlayerEventPayload`**

  ↳ [`TrackStartEvent`](types.TrackStartEvent.md)

  ↳ [`TrackEndEvent`](types.TrackEndEvent.md)

  ↳ [`TrackExceptionEvent`](types.TrackExceptionEvent.md)

  ↳ [`TrackStuckEvent`](types.TrackStuckEvent.md)

  ↳ [`WebSocketClosedEvent`](types.WebSocketClosedEvent.md)

## Table of contents

### Properties

- [guildId](types.PlayerEventPayload.md#guildid)
- [op](types.PlayerEventPayload.md#op)
- [type](types.PlayerEventPayload.md#type)

## Properties

### guildId

• **guildId**: `string`

#### Defined in

[@types/Node.types.ts:109](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Node.types.ts#L109)

___

### op

• **op**: ``"event"``

#### Defined in

[@types/Node.types.ts:107](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Node.types.ts#L107)

___

### type

• **type**: ``"TrackStartEvent"`` \| ``"TrackEndEvent"`` \| ``"TrackExceptionEvent"`` \| ``"TrackStuckEvent"`` \| ``"WebSocketClosedEvent"``

#### Defined in

[@types/Node.types.ts:108](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Node.types.ts#L108)
