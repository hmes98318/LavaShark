# types.WebSocketClosedEvent

[@types](../types.md).WebSocketClosedEvent

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

[@types/index.ts:322](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L322)

___

### code

• **code**: `number`

#### Defined in

[@types/index.ts:320](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L320)

___

### guildId

• **guildId**: `string`

#### Inherited from

[PlayerEventPayload](types.PlayerEventPayload.md).[guildId](types.PlayerEventPayload.md#guildid)

#### Defined in

[@types/index.ts:290](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L290)

___

### op

• **op**: ``"event"``

#### Inherited from

[PlayerEventPayload](types.PlayerEventPayload.md).[op](types.PlayerEventPayload.md#op)

#### Defined in

[@types/index.ts:288](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L288)

___

### reason

• **reason**: `string`

#### Defined in

[@types/index.ts:321](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L321)

___

### type

• **type**: ``"TrackStartEvent"`` \| ``"TrackEndEvent"`` \| ``"TrackExceptionEvent"`` \| ``"TrackStuckEvent"`` \| ``"WebSocketClosedEvent"``

#### Inherited from

[PlayerEventPayload](types.PlayerEventPayload.md).[type](types.PlayerEventPayload.md#type)

#### Defined in

[@types/index.ts:289](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L289)
