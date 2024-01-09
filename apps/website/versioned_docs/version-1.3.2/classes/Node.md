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

- [checkNodeSession](Node.md#checknodesession)
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
- [checkOptions](Node.md#checkoptions)

## Constructors

### constructor

• **new Node**(`lavashark`, `options`)

Create a new Node instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lavashark` | [`LavaShark`](LavaShark.md) | The LavaShark instance |
| `options` | [`NodeOptions`](../types/Node.types.md#nodeoptions) | The node options |

#### Defined in

[lib/Node.ts:118](https://github.com/hmes98318/LavaShark/blob/624651a/src/lib/Node.ts#L118)

## Properties

### options

• `Readonly` **options**: [`NodeOptions`](../types/Node.types.md#nodeoptions)

#### Defined in

[lib/Node.ts:37](https://github.com/hmes98318/LavaShark/blob/624651a/src/lib/Node.ts#L37)

___

### rest

• **rest**: `RESTController`

#### Defined in

[lib/Node.ts:44](https://github.com/hmes98318/LavaShark/blob/624651a/src/lib/Node.ts#L44)

___

### retryAttempts

• **retryAttempts**: `number`

#### Defined in

[lib/Node.ts:47](https://github.com/hmes98318/LavaShark/blob/624651a/src/lib/Node.ts#L47)

___

### state

• **state**: [`NodeState`](../types/enums/enums.NodeState.md)

#### Defined in

[lib/Node.ts:49](https://github.com/hmes98318/LavaShark/blob/624651a/src/lib/Node.ts#L49)

___

### stats

• **stats**: [`NodeStats`](../types/Node.types.md#nodestats)

#### Defined in

[lib/Node.ts:50](https://github.com/hmes98318/LavaShark/blob/624651a/src/lib/Node.ts#L50)

___

### version

• `Optional` **version**: `string`

#### Defined in

[lib/Node.ts:54](https://github.com/hmes98318/LavaShark/blob/624651a/src/lib/Node.ts#L54)

## Accessors

### identifier

• `get` **identifier**(): `string`

#### Returns

`string`

#### Defined in

[lib/Node.ts:155](https://github.com/hmes98318/LavaShark/blob/624651a/src/lib/Node.ts#L155)

___

### totalPenalties

• `get` **totalPenalties**(): `number`

#### Returns

`number`

#### Defined in

[lib/Node.ts:159](https://github.com/hmes98318/LavaShark/blob/624651a/src/lib/Node.ts#L159)

## Methods

### checkNodeSession

▸ **checkNodeSession**(): `Promise`<`void`\>

Check session exists

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/Node.ts:240](https://github.com/hmes98318/LavaShark/blob/624651a/src/lib/Node.ts#L240)

___

### connect

▸ **connect**(): `void`

Connect to node

#### Returns

`void`

#### Defined in

[lib/Node.ts:187](https://github.com/hmes98318/LavaShark/blob/624651a/src/lib/Node.ts#L187)

___

### disconnect

▸ **disconnect**(): `void`

Disconnect from node

#### Returns

`void`

#### Defined in

[lib/Node.ts:223](https://github.com/hmes98318/LavaShark/blob/624651a/src/lib/Node.ts#L223)

___

### getInfo

▸ **getInfo**(): `Promise`<[`Info`](../types/Node.types.md#info)\>

Get the Lavalink Node information

#### Returns

`Promise`<[`Info`](../types/Node.types.md#info)\>

#### Defined in

[lib/Node.ts:278](https://github.com/hmes98318/LavaShark/blob/624651a/src/lib/Node.ts#L278)

___

### getPing

▸ **getPing**(`timeout?`): `Promise`<`number`\>

Get the ping for the node

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `timeout` | `number` | `1500` | Timeout value in milliseconds |

#### Returns

`Promise`<`number`\>

- Node latency, in milliseconds

#### Defined in

[lib/Node.ts:308](https://github.com/hmes98318/LavaShark/blob/624651a/src/lib/Node.ts#L308)

___

### getRoutePlannerStatus

▸ **getRoutePlannerStatus**(): `Promise`<[`RoutePlannerStatus`](../types/Node.types.md#routeplannerstatus)\>

Gets the route planner status

#### Returns

`Promise`<[`RoutePlannerStatus`](../types/Node.types.md#routeplannerstatus)\>

#### Defined in

[lib/Node.ts:335](https://github.com/hmes98318/LavaShark/blob/624651a/src/lib/Node.ts#L335)

___

### getStats

▸ **getStats**(): `Promise`<[`NodeStats`](../types/Node.types.md#nodestats)\>

Get the Lavalink Node stats

#### Returns

`Promise`<[`NodeStats`](../types/Node.types.md#nodestats)\>

#### Defined in

[lib/Node.ts:297](https://github.com/hmes98318/LavaShark/blob/624651a/src/lib/Node.ts#L297)

___

### getVersion

▸ **getVersion**(): `Promise`<`string`\>

Get the Lavalink Node version

#### Returns

`Promise`<`string`\>

#### Defined in

[lib/Node.ts:278](https://github.com/hmes98318/LavaShark/blob/624651a/src/lib/Node.ts#L278)

___

### reconnect

▸ **reconnect**(): `Promise`<`void`\>

Reconnects the node

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/Node.ts:240](https://github.com/hmes98318/LavaShark/blob/624651a/src/lib/Node.ts#L240)

___

### unmarkAllFailedAddress

▸ **unmarkAllFailedAddress**(): `Promise`<`void`\>

Unmarks all failed address

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/Node.ts:350](https://github.com/hmes98318/LavaShark/blob/624651a/src/lib/Node.ts#L350)

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

[lib/Node.ts:343](https://github.com/hmes98318/LavaShark/blob/624651a/src/lib/Node.ts#L343)

___

### updateStats

▸ **updateStats**(`timeout?`): `Promise`<`void`\>

Update node stats

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `timeout` | `number` | `1500` |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/Node.ts:357](https://github.com/hmes98318/LavaShark/blob/624651a/src/lib/Node.ts#L357)

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

[lib/Node.ts:56](https://github.com/hmes98318/LavaShark/blob/624651a/src/lib/Node.ts#L56)
