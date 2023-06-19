# types.TrackExceptionEvent

[@types](../types.md).TrackExceptionEvent

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

• **exception**: `LoadException` & { `cause`: `string`  }

#### Defined in

[@types/index.ts:308](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L308)

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

### track

• **track**: `string`

#### Defined in

[@types/index.ts:307](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L307)

___

### type

• **type**: ``"TrackExceptionEvent"``

#### Overrides

[PlayerEventPayload](types.PlayerEventPayload.md).[type](types.PlayerEventPayload.md#type)

#### Defined in

[@types/index.ts:306](https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L306)
