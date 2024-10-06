# @types/Node.WebSocketClosedEvent

[@types/Node.types](../Node.types.md).WebSocketClosedEvent

Lavalink node incoming payloads

## Hierarchy

- [`PlayerEventPayload`](Node.types.PlayerEventPayload.md)

  ↳ **`WebSocketClosedEvent`**

## Table of contents

### Properties

- [byRemote](Node.types.WebSocketClosedEvent.md#byremote)
- [code](Node.types.WebSocketClosedEvent.md#code)
- [guildId](Node.types.WebSocketClosedEvent.md#guildid)
- [op](Node.types.WebSocketClosedEvent.md#op)
- [reason](Node.types.WebSocketClosedEvent.md#reason)
- [type](Node.types.WebSocketClosedEvent.md#type)

## Properties

### byRemote

• **byRemote**: `boolean`

#### Defined in

[@types/Node.types.ts:142](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/@types/Node.types.ts#L142)

___

### code

• **code**: `number`

#### Defined in

[@types/Node.types.ts:140](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/@types/Node.types.ts#L140)

___

### guildId

• **guildId**: `string`

#### Inherited from

[PlayerEventPayload](Node.types.PlayerEventPayload.md).[guildId](Node.types.PlayerEventPayload.md#guildid)

#### Defined in

[@types/Node.types.ts:109](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/@types/Node.types.ts#L109)

___

### op

• **op**: ``"event"``

#### Inherited from

[PlayerEventPayload](Node.types.PlayerEventPayload.md).[op](Node.types.PlayerEventPayload.md#op)

#### Defined in

[@types/Node.types.ts:107](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/@types/Node.types.ts#L107)

___

### reason

• **reason**: `string`

#### Defined in

[@types/Node.types.ts:141](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/@types/Node.types.ts#L141)

___

### type

• **type**: ``"TrackStartEvent"`` \| ``"TrackEndEvent"`` \| ``"TrackExceptionEvent"`` \| ``"TrackStuckEvent"`` \| ``"WebSocketClosedEvent"``

#### Inherited from

[PlayerEventPayload](Node.types.PlayerEventPayload.md).[type](Node.types.PlayerEventPayload.md#type)

#### Defined in

[@types/Node.types.ts:108](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/@types/Node.types.ts#L108)
