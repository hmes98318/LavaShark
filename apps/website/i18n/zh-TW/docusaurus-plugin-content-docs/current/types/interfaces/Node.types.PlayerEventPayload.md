# @types/Node.PlayerEventPayload

[@types/Node.types](../Node.types.md).PlayerEventPayload

Lavalink node incoming payloads

## Hierarchy

- **`PlayerEventPayload`**

  ↳ [`TrackStartEvent`](Node.types.TrackStartEvent.md)

  ↳ [`TrackEndEvent`](Node.types.TrackEndEvent.md)

  ↳ [`TrackExceptionEvent`](Node.types.TrackExceptionEvent.md)

  ↳ [`TrackStuckEvent`](Node.types.TrackStuckEvent.md)

  ↳ [`WebSocketClosedEvent`](Node.types.WebSocketClosedEvent.md)

## Table of contents

### Properties

- [guildId](Node.types.PlayerEventPayload.md#guildid)
- [op](Node.types.PlayerEventPayload.md#op)
- [type](Node.types.PlayerEventPayload.md#type)

## Properties

### guildId

• **guildId**: `string`

#### Defined in

[@types/Node.types.ts:109](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/@types/Node.types.ts#L109)

___

### op

• **op**: ``"event"``

#### Defined in

[@types/Node.types.ts:107](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/@types/Node.types.ts#L107)

___

### type

• **type**: ``"TrackStartEvent"`` \| ``"TrackEndEvent"`` \| ``"TrackExceptionEvent"`` \| ``"TrackStuckEvent"`` \| ``"WebSocketClosedEvent"``

#### Defined in

[@types/Node.types.ts:108](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/@types/Node.types.ts#L108)
