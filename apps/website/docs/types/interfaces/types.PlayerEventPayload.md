# types.PlayerEventPayload

[@types](../types.md).PlayerEventPayload

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

[@types/index.ts:290](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L290)

___

### op

• **op**: ``"event"``

#### Defined in

[@types/index.ts:288](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L288)

___

### type

• **type**: ``"TrackStartEvent"`` \| ``"TrackEndEvent"`` \| ``"TrackExceptionEvent"`` \| ``"TrackStuckEvent"`` \| ``"WebSocketClosedEvent"``

#### Defined in

[@types/index.ts:289](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L289)
