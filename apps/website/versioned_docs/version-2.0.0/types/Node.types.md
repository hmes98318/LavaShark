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

[@types/Node.types.ts:81](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/@types/Node.types.ts#L81)

___

### NodeOptions

Ƭ **NodeOptions**: `Object`

Lavalink node options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `followRedirects?` | `boolean` | Whether to follow redirects or not (default is false) |
| `hostname` | `string` | The node hostname |
| `id?` | `string` | The node identifier |
| `maxRetryAttempts?` | `number` | The max number of retry attempts |
| `password?` | `string` | The node password |
| `port` | `number` | The node port |
| `resumeKey?` | ``"enable"`` \| ``"disable"`` \| ``"ENABLE"`` \| ``"DISABLE"`` | Whether to enable resume key |
| `resumeTimeout?` | `number` | The resume timeout, in seconds |
| `retryAttemptsInterval?` | `number` | The interval between retry attempts |
| `secure?` | `boolean` | Whether to use SSL/TLS or not |

#### Defined in

[@types/Node.types.ts:5](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/@types/Node.types.ts#L5)

___

### NodeStats

Ƭ **NodeStats**: `Object`

Lavalink node stats

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cpu` | { `cores`: `number` ; `lavalinkLoad`: `number` ; `systemLoad`: `number`  } | CPU stats, [0, 1] |
| `cpu.cores` | `number` | - |
| `cpu.lavalinkLoad` | `number` | - |
| `cpu.systemLoad` | `number` | - |
| `frameStats?` | { `deficit`: `number` ; `nulled`: `number` ; `sent`: `number`  } | Audio frame stats |
| `frameStats.deficit` | `number` | - |
| `frameStats.nulled` | `number` | - |
| `frameStats.sent` | `number` | - |
| `memory` | { `allocated`: `number` ; `free`: `number` ; `reservable`: `number` ; `used`: `number`  } | RAM stats, in bytes |
| `memory.allocated` | `number` | - |
| `memory.free` | `number` | - |
| `memory.reservable` | `number` | - |
| `memory.used` | `number` | - |
| `players` | `number` | The total player amount |
| `playingPlayers` | `number` | The amount of playing players |
| `uptime` | `number` | The lavalink node uptime, in seconds |

#### Defined in

[@types/Node.types.ts:29](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/@types/Node.types.ts#L29)

___

### PlayerState

Ƭ **PlayerState**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `connected` | `boolean` | Whether the player is connected to discord voice gateway |
| `position?` | `number` | Track position in ms |
| `time` | `number` | Unix timestamp when the position was picked |

#### Defined in

[@types/Node.types.ts:145](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/@types/Node.types.ts#L145)

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

[@types/Node.types.ts:63](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/@types/Node.types.ts#L63)

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

[@types/Node.types.ts:58](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/@types/Node.types.ts#L58)

___

### TrackEndReason

Ƭ **TrackEndReason**: ``"FINISHED"`` \| ``"LOAD_FAILED"`` \| ``"STOPPED"`` \| ``"REPLACED"`` \| ``"CLEANUP"``

#### Defined in

[@types/Node.types.ts:117](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/@types/Node.types.ts#L117)

___

### version

Ƭ **version**: `string`

Lavalink version

#### Defined in

[@types/Node.types.ts:78](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/@types/Node.types.ts#L78)
