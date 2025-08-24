# Node

## Table of contents

### Constructors

- [constructor](Node.md#constructor)

### Properties

- [options](Node.md#options)
- [rest](Node.md#rest)
- [retryAttempts](Node.md#retryattempts)
- [state](Node.md#state)
- [stats](Node.md#stats)
- [version](Node.md#version)

### Accessors

- [identifier](Node.md#identifier)
- [totalPenalties](Node.md#totalpenalties)

### Methods

- [connect](Node.md#connect)
- [disconnect](Node.md#disconnect)
- [getInfo](Node.md#getinfo)
- [getPing](Node.md#getping)
- [getRoutePlannerStatus](Node.md#getrouteplannerstatus)
- [getStats](Node.md#getstats)
- [getVersion](Node.md#getversion)
- [reconnect](Node.md#reconnect)
- [unmarkAllFailedAddress](Node.md#unmarkallfailedaddress)
- [unmarkFailedAddress](Node.md#unmarkfailedaddress)
- [updateStats](Node.md#updatestats)
- [updatseNodeSession](Node.md#updatsenodesession)
- [checkOptions](Node.md#checkoptions)

## Constructors

### constructor

• **new Node**(`lavashark`, `options`): [`Node`](Node.md)

創建一個 Node 實例

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lavashark` | [`LavaShark`](LavaShark.md) | LavaShark 實例 |
| `options` | [`NodeOptions`](../types/Node.types.md#nodeoptions) | Node 選項 |

#### Returns

[`Node`](Node.md)

#### Defined in

[lib/Node.ts:117](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Node.ts#L117)

## Properties

### options

• `Readonly` **options**: [`NodeOptions`](../types/Node.types.md#nodeoptions)

#### Defined in

[lib/Node.ts:38](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Node.ts#L38)

___

### rest

• **rest**: `RESTController`

#### Defined in

[lib/Node.ts:40](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Node.ts#L40)

___

### retryAttempts

• **retryAttempts**: `number`

#### Defined in

[lib/Node.ts:41](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Node.ts#L41)

___

### state

• **state**: [`NodeState`](../types/enums/enums.NodeState.md)

#### Defined in

[lib/Node.ts:43](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Node.ts#L43)

___

### stats

• **stats**: [`NodeStats`](../types/Node.types.md#nodestats)

#### Defined in

[lib/Node.ts:44](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Node.ts#L44)

___

### version

• `Optional` **version**: `string`

#### Defined in

[lib/Node.ts:37](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Node.ts#L37)

## Accessors

### identifier

• `get` **identifier**(): `string`

#### Returns

`string`

#### Defined in

[lib/Node.ts:157](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Node.ts#L157)

___

### totalPenalties

• `get` **totalPenalties**(): `number`

#### Returns

`number`

#### Defined in

[lib/Node.ts:161](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Node.ts#L161)

## Methods

### connect

▸ **connect**(): `void`

連接到節點

#### Returns

`void`

#### Defined in

[lib/Node.ts:199](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Node.ts#L199)

___

### disconnect

▸ **disconnect**(): `void`

與節點斷開連接

#### Returns

`void`

#### Defined in

[lib/Node.ts:230](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Node.ts#L230)

___

### getInfo

▸ **getInfo**(): `Promise`\<[`Info`](../types/Node.types.md#info)\>

獲取 Lavalink 節點資訊

#### Returns

`Promise`\<[`Info`](../types/Node.types.md#info)\>

#### Defined in

[lib/Node.ts:286](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Node.ts#L286)

___

### getPing

▸ **getPing**(`timeout?`): `Promise`\<`number`\>

獲取節點的 ping

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `timeout` | `number` | `1500` | 超時值，以毫秒為單位 |

#### Returns

`Promise`\<`number`\>

- 與節點的延遲，以毫秒為單位

#### Defined in

[lib/Node.ts:306](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Node.ts#L306)

___

### getRoutePlannerStatus

▸ **getRoutePlannerStatus**(): `Promise`\<[`RoutePlannerStatus`](../types/Node.types.md#routeplannerstatus)\>

獲取路徑規劃器狀態

#### Returns

`Promise`\<[`RoutePlannerStatus`](../types/Node.types.md#routeplannerstatus)\>

#### Defined in

[lib/Node.ts:333](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Node.ts#L333)

___

### getStats

▸ **getStats**(): `Promise`\<[`NodeStats`](../types/Node.types.md#nodestats)\>

獲取 Lavalink 節點統計訊息

#### Returns

`Promise`\<[`NodeStats`](../types/Node.types.md#nodestats)\>

#### Defined in

[lib/Node.ts:295](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Node.ts#L295)

___

### getVersion

▸ **getVersion**(): `Promise`\<`string`\>

獲取 Lavalink 節點版本

#### Returns

`Promise`\<`string`\>

#### Defined in

[lib/Node.ts:276](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Node.ts#L276)

___

### reconnect

▸ **reconnect**(): `Promise`\<`void`\>

與節點重新連接

#### Returns

`Promise`\<`void`\>

#### Defined in

[lib/Node.ts:237](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Node.ts#L237)

___

### unmarkAllFailedAddress

▸ **unmarkAllFailedAddress**(): `Promise`\<`void`\>

取消所有失敗的地址標記

#### Returns

`Promise`\<`void`\>

#### Defined in

[lib/Node.ts:348](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Node.ts#L348)

___

### unmarkFailedAddress

▸ **unmarkFailedAddress**(`address`): `Promise`\<`void`\>

取消一個失敗的地址標記

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | 要取消標記的地址 |

#### Returns

`Promise`\<`void`\>

#### Defined in

[lib/Node.ts:341](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Node.ts#L341)

___

### updateStats

▸ **updateStats**(`timeout?`): `Promise`\<`void`\>

更新節點統計訊息

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `timeout` | `number` | `1500` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[lib/Node.ts:355](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Node.ts#L355)

___

### updatseNodeSession

▸ **updatseNodeSession**(): `Promise`\<`boolean`\>

更新節點 session  

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[lib/Node.ts:247](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Node.ts#L247)

___

### checkOptions

▸ **checkOptions**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`NodeOptions`](../types/Node.types.md#nodeoptions) |

#### Returns

`void`

#### Defined in

[lib/Node.ts:55](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Node.ts#L55)
