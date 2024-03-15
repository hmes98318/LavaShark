# @types/Node

## Table of contents

### Interfaces

- [PlayerEventPayload](./interfaces/Node.types.PlayerEventPayload.md)
- [TrackEndEvent](./interfaces/Node.types.TrackEndEvent.md)
- [TrackExceptionEvent](./interfaces/Node.types.TrackExceptionEvent.md)
- [TrackStartEvent](./interfaces/Node.types.TrackStartEvent.md)
- [TrackStuckEvent](./interfaces/Node.types.TrackStuckEvent.md)
- [WebSocketClosedEvent](./interfaces/Node.types.WebSocketClosedEvent.md)

### Type Aliases

- [Info](Node.types.md#info)
- [NodeOptions](Node.types.md#nodeoptions)
- [NodeStats](Node.types.md#nodestats)
- [PlayerState](Node.types.md#playerstate)
- [RoutePlannerDetails](Node.types.md#routeplannerdetails)
- [RoutePlannerStatus](Node.types.md#routeplannerstatus)
- [TrackEndReason](Node.types.md#trackendreason)
- [version](Node.types.md#version)

## Type Aliases

### Info

Ƭ **Info**: `Object`

Lavalink Info

#### Type declaration

| Name | Type |
| :------ | :------ |
| `buildTime` | `number` |
| `filters` | `string`[] |
| `git` | { `branch`: `string` ; `commit`: `string` ; `commitTime`: `number`  } |
| `git.branch` | `string` |
| `git.commit` | `string` |
| `git.commitTime` | `number` |
| `jvm` | `string` |
| `lavaplayer` | `string` |
| `plugins` | { `name`: `string` ; `version`: `string`  }[] |
| `sourceManagers` | `string`[] |
| `version` | { `major`: `number` ; `minor`: `number` ; `patch`: `number` ; `preRelease`: `string` \| ``null`` ; `semver`: `string`  } |
| `version.major` | `number` |
| `version.minor` | `number` |
| `version.patch` | `number` |
| `version.preRelease` | `string` \| ``null`` |
| `version.semver` | `string` |

#### Defined in

[@types/Node.types.ts:81](https://github.com/hmes98318/LavaShark/blob/50abc40/src/@types/Node.types.ts#L81)

___

### NodeOptions

Ƭ **NodeOptions**: `Object`

Lavalink node options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `followRedirects?` | `boolean` | 是否遵循重定向（默認為 false） |
| `hostname` | `string` | 節點主機名 |
| `id?` | `string` | 節點標識符 |
| `maxRetryAttempts?` | `number` | 最大重試次數 |
| `password?` | `string` | 節點密碼 |
| `port` | `number` | 節點端口 |
| `resumeKey?` | ``"enable"`` \| ``"disable"`` \| ``"ENABLE"`` \| ``"DISABLE"`` | 是否啟用恢復密鑰 |
| `resumeTimeout?` | `number` | 恢復超時，以秒為單位 |
| `retryAttemptsInterval?` | `number` | 重試嘗試之間的間隔 |
| `secure?` | `boolean` | 是否使用SSL/TLS |

#### Defined in

[@types/Node.types.ts:5](https://github.com/hmes98318/LavaShark/blob/50abc40/src/@types/Node.types.ts#L5)

___

### NodeStats

Ƭ **NodeStats**: `Object`

Lavalink node stats

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cpu` | { `cores`: `number` ; `lavalinkLoad`: `number` ; `systemLoad`: `number`  } | CPU 統計信息, [0, 1] |
| `cpu.cores` | `number` | - |
| `cpu.lavalinkLoad` | `number` | - |
| `cpu.systemLoad` | `number` | - |
| `frameStats?` | { `deficit`: `number` ; `nulled`: `number` ; `sent`: `number`  } | 音頻幀統計 |
| `frameStats.deficit` | `number` | - |
| `frameStats.nulled` | `number` | - |
| `frameStats.sent` | `number` | - |
| `memory` | { `allocated`: `number` ; `free`: `number` ; `reservable`: `number` ; `used`: `number`  } | RAM 統計信息，以 byte 為單位 |
| `memory.allocated` | `number` | - |
| `memory.free` | `number` | - |
| `memory.reservable` | `number` | - |
| `memory.used` | `number` | - |
| `players` | `number` | 總共的 Player 數量 |
| `playingPlayers` | `number` | 正在播放的 Player 數量 |
| `uptime` | `number` | lavalink 節點正常運行時間，以秒為單位 |

#### Defined in

[@types/Node.types.ts:29](https://github.com/hmes98318/LavaShark/blob/50abc40/src/@types/Node.types.ts#L29)

___

### PlayerState

Ƭ **PlayerState**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `connected` | `boolean` | Player 是否已連接 discord 語音網關 |
| `position?` | `number` | Track 位置（以毫秒為單位） |
| `time` | `number` | 選取位置時的 Unix 時間戳 |

#### Defined in

[@types/Node.types.ts:145](https://github.com/hmes98318/LavaShark/blob/50abc40/src/@types/Node.types.ts#L145)

___

### RoutePlannerDetails

Ƭ **RoutePlannerDetails**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blockIndex?` | `string` |
| `currentAddressIndex?` | `string` |
| `failingAddresses` | { `address`: `string` ; `failingTime`: `string` ; `failingTimestamp`: `number`  }[] |
| `ipBlock` | { `size`: `string` ; `type`: `string`  } |
| `ipBlock.size` | `string` |
| `ipBlock.type` | `string` |

#### Defined in

[@types/Node.types.ts:63](https://github.com/hmes98318/LavaShark/blob/50abc40/src/@types/Node.types.ts#L63)

___

### RoutePlannerStatus

Ƭ **RoutePlannerStatus**: `Object`

Route planner API

#### Type declaration

| Name | Type |
| :------ | :------ |
| `class` | `string` \| ``null`` |
| `details` | [`RoutePlannerDetails`](Node.types.md#routeplannerdetails) \| ``null`` |

#### Defined in

[@types/Node.types.ts:58](https://github.com/hmes98318/LavaShark/blob/50abc40/src/@types/Node.types.ts#L58)

___

### TrackEndReason

Ƭ **TrackEndReason**: ``"FINISHED"`` \| ``"LOAD_FAILED"`` \| ``"STOPPED"`` \| ``"REPLACED"`` \| ``"CLEANUP"``

#### Defined in

[@types/Node.types.ts:117](https://github.com/hmes98318/LavaShark/blob/50abc40/src/@types/Node.types.ts#L117)

___

### version

Ƭ **version**: `string`

Lavalink version

#### Defined in

[@types/Node.types.ts:78](https://github.com/hmes98318/LavaShark/blob/50abc40/src/@types/Node.types.ts#L78)
