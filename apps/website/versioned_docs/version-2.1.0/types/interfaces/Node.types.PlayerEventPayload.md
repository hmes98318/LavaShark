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

[@types/Node.types.ts:109](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/@types/Node.types.ts#L109)

___

### op

• **op**: ``"event"``

#### Defined in

[@types/Node.types.ts:107](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/@types/Node.types.ts#L107)

___

### type

• **type**: ``"TrackStartEvent"`` \| ``"TrackEndEvent"`` \| ``"TrackExceptionEvent"`` \| ``"TrackStuckEvent"`` \| ``"WebSocketClosedEvent"``

#### Defined in

[@types/Node.types.ts:108](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/@types/Node.types.ts#L108)
