# @types/Player

## Table of contents

### Type Aliases

- [PlayOptions](Player.types.md#playoptions)
- [PlayerOptions](Player.types.md#playeroptions)
- [VoiceState](Player.types.md#voicestate)

## Type Aliases

### PlayOptions

Ƭ **PlayOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `endTime?` | `number` |
| `noReplace?` | `boolean` |
| `pause?` | `boolean` |
| `startTime?` | `number` |

#### Defined in

[@types/Player.types.ts:26](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/@types/Player.types.ts#L26)

___

### PlayerOptions

Ƭ **PlayerOptions**: `Object`

Main constructor options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Player 所屬的伺服器 ID |
| `queue?` | `Queue` | Player 將使用的隊列對象 |
| `selfDeaf?` | `boolean` |機器人是否自身拒聽加入語音頻道 |
| `selfMute?` | `boolean` | 機器人是否自身靜音加入語音頻道 |
| `textChannelId?` | `string` | 文字頻道 ID |
| `voiceChannelId` | `string` | 語音頻道 ID |

#### Defined in

[@types/Player.types.ts:6](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/@types/Player.types.ts#L6)

___

### VoiceState

Ƭ **VoiceState**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `event?` | [`VoiceServerUpdateData`](LavaShark.types.md#voiceserverupdatedata) |
| `sessionId?` | `string` |

#### Defined in

[@types/Player.types.ts:21](https://github.com/hmes98318/LavaShark/blob/accfd833a0203cc1d8758108ff5b6cd5af205387/src/@types/Player.types.ts#L21)
