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
- [getRoutePlannerStatus](Node.md#getrouteplannerstatus)
- [getStats](Node.md#getstats)
- [getVersion](Node.md#getversion)
- [unmarkAllFailedAddress](Node.md#unmarkallfailedaddress)
- [unmarkFailedAddress](Node.md#unmarkfailedaddress)
- [updateStats](Node.md#updatestats)
- [checkOptions](Node.md#checkoptions)

## Constructors

### constructor

• **new Node**(`lavashark`, `options`)

創建一個 Node 實例

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lavashark` | [`LavaShark`](LavaShark.md) | LavaShark 實例 |
| `options` | [`NodeOptions`](../types/Node.types.md#nodeoptions) | Node 選項 |

#### Defined in

[lib/Node.ts:112](https://github.com/hmes98318/LavaShark/blob/21c4e47/src/lib/Node.ts#L112)

## Properties

### options

• `Readonly` **options**: [`NodeOptions`](../types/Node.types.md#nodeoptions)

#### Defined in

[lib/Node.ts:34](https://github.com/hmes98318/LavaShark/blob/21c4e47/src/lib/Node.ts#L34)

___

### rest

• `Readonly` **rest**: `RESTController`

#### Defined in

[lib/Node.ts:41](https://github.com/hmes98318/LavaShark/blob/21c4e47/src/lib/Node.ts#L41)

___

### retryAttempts

• **retryAttempts**: `number`

#### Defined in

[lib/Node.ts:43](https://github.com/hmes98318/LavaShark/blob/21c4e47/src/lib/Node.ts#L43)

___

### state

• **state**: [`NodeState`](../types/enums/enums.NodeState.md)

#### Defined in

[lib/Node.ts:45](https://github.com/hmes98318/LavaShark/blob/21c4e47/src/lib/Node.ts#L45)

___

### stats

• **stats**: [`NodeStats`](../types/Node.types.md#nodestats)

#### Defined in

[lib/Node.ts:46](https://github.com/hmes98318/LavaShark/blob/21c4e47/src/lib/Node.ts#L46)

___

### version

• `Optional` **version**: `string`

#### Defined in

[lib/Node.ts:48](https://github.com/hmes98318/LavaShark/blob/21c4e47/src/lib/Node.ts#L48)

## Accessors

### identifier

• `get` **identifier**(): `string`

#### Returns

`string`

#### Defined in

[lib/Node.ts:149](https://github.com/hmes98318/LavaShark/blob/21c4e47/src/lib/Node.ts#L149)

___

### totalPenalties

• `get` **totalPenalties**(): `number`

#### Returns

`number`

#### Defined in

[lib/Node.ts:153](https://github.com/hmes98318/LavaShark/blob/21c4e47/src/lib/Node.ts#L153)

## Methods

### connect

▸ **connect**(): `void`

#### Returns

`void`

#### Defined in

[lib/Node.ts:178](https://github.com/hmes98318/LavaShark/blob/21c4e47/src/lib/Node.ts#L178)

___

### disconnect

▸ **disconnect**(): `void`

#### Returns

`void`

#### Defined in

[lib/Node.ts:207](https://github.com/hmes98318/LavaShark/blob/21c4e47/src/lib/Node.ts#L207)

___

### getInfo

▸ **getInfo**(): `Promise`<[`Info`](../types/Node.types.md#info)\>

獲取 Lavalink 節點資訊

#### Returns

`Promise`<[`Info`](../types/Node.types.md#info)\>

#### Defined in

[lib/Node.ts:227](https://github.com/hmes98318/LavaShark/blob/21c4e47/src/lib/Node.ts#L227)

___

### getRoutePlannerStatus

▸ **getRoutePlannerStatus**(): `Promise`<[`RoutePlannerStatus`](../types/Node.types.md#routeplannerstatus)\>

獲取路徑規劃器狀態

#### Returns

`Promise`<[`RoutePlannerStatus`](../types/Node.types.md#routeplannerstatus)\>

#### Defined in

[lib/Node.ts:246](https://github.com/hmes98318/LavaShark/blob/21c4e47/src/lib/Node.ts#L246)

___

### getStats

▸ **getStats**(): `Promise`<[`NodeStats`](../types/Node.types.md#nodestats)\>

獲取 Lavalink 節點統計信息

#### Returns

`Promise`<[`NodeStats`](../types/Node.types.md#nodestats)\>

#### Defined in

[lib/Node.ts:236](https://github.com/hmes98318/LavaShark/blob/21c4e47/src/lib/Node.ts#L236)

___

### getVersion

▸ **getVersion**(): `Promise`<`string`\>

獲取 Lavalink 節點版本

#### Returns

`Promise`<`string`\>

#### Defined in

[lib/Node.ts:217](https://github.com/hmes98318/LavaShark/blob/21c4e47/src/lib/Node.ts#L217)

___

### unmarkAllFailedAddress

▸ **unmarkAllFailedAddress**(): `Promise`<`void`\>

Unmarks all failed address

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/Node.ts:261](https://github.com/hmes98318/LavaShark/blob/21c4e47/src/lib/Node.ts#L261)

___

### unmarkFailedAddress

▸ **unmarkFailedAddress**(`address`): `Promise`<`void`\>

Unmarks a failed address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address to unmark |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/Node.ts:254](https://github.com/hmes98318/LavaShark/blob/21c4e47/src/lib/Node.ts#L254)

___

### updateStats

▸ **updateStats**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/Node.ts:489](https://github.com/hmes98318/LavaShark/blob/21c4e47/src/lib/Node.ts#L489)

___

### checkOptions

▸ `Static` **checkOptions**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`NodeOptions`](../types/Node.types.md#nodeoptions) |

#### Returns

`void`

#### Defined in

[lib/Node.ts:50](https://github.com/hmes98318/LavaShark/blob/21c4e47/src/lib/Node.ts#L50)
