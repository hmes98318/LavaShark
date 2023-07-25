# Interface: WebSocketClosedEvent

[@types](../types.md).WebSocketClosedEvent

Lavalink node incoming payloads

## Hierarchy

- [`PlayerEventPayload`](types.PlayerEventPayload.md)

  ↳ **`WebSocketClosedEvent`**

## Table of contents

### Properties

- [byRemote](types.WebSocketClosedEvent.md#byremote)
- [code](types.WebSocketClosedEvent.md#code)
- [guildId](types.WebSocketClosedEvent.md#guildid)
- [op](types.WebSocketClosedEvent.md#op)
- [reason](types.WebSocketClosedEvent.md#reason)
- [type](types.WebSocketClosedEvent.md#type)

## Properties

### byRemote

• **byRemote**: `boolean`

#### Defined in

[@types/Node.types.ts:142](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Node.types.ts#L142)

___

### code

• **code**: `number`

#### Defined in

[@types/Node.types.ts:140](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Node.types.ts#L140)

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

### reason

• **reason**: `string`

#### Defined in

[@types/Node.types.ts:141](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Node.types.ts#L141)

___

### type

• **type**: ``"TrackStartEvent"`` \| ``"TrackEndEvent"`` \| ``"TrackExceptionEvent"`` \| ``"TrackStuckEvent"`` \| ``"WebSocketClosedEvent"``

#### Inherited from

[PlayerEventPayload](types.PlayerEventPayload.md).[type](types.PlayerEventPayload.md#type)

#### Defined in

[@types/Node.types.ts:108](https://github.com/hmes98318/LavaShark/blob/cb14d9b/src/@types/Node.types.ts#L108)
