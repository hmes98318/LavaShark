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

[lib/Node.ts:118](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Node.ts#L118)

## Properties

### options

• `Readonly` **options**: [`NodeOptions`](../types/Node.types.md#nodeoptions)

#### Defined in

[lib/Node.ts:37](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Node.ts#L37)

___

### rest

• **rest**: `RESTController`

#### Defined in

[lib/Node.ts:39](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Node.ts#L39)

___

### retryAttempts

• **retryAttempts**: `number`

#### Defined in

[lib/Node.ts:40](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Node.ts#L40)

___

### state

• **state**: [`NodeState`](../types/enums/enums.NodeState.md)

#### Defined in

[lib/Node.ts:42](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Node.ts#L42)

___

### stats

• **stats**: [`NodeStats`](../types/Node.types.md#nodestats)

#### Defined in

[lib/Node.ts:43](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Node.ts#L43)

___

### version

• `Optional` **version**: `string`

#### Defined in

[lib/Node.ts:36](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Node.ts#L36)

## Accessors

### identifier

• `get` **identifier**(): `string`

#### Returns

`string`

#### Defined in

[lib/Node.ts:156](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Node.ts#L156)

___

### totalPenalties

• `get` **totalPenalties**(): `number`

#### Returns

`number`

#### Defined in

[lib/Node.ts:160](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Node.ts#L160)

## Methods

### connect

▸ **connect**(): `void`

Connect to node

#### Returns

`void`

#### Defined in

[lib/Node.ts:198](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Node.ts#L198)

___

### disconnect

▸ **disconnect**(): `void`

Disconnect from node

#### Returns

`void`

#### Defined in

[lib/Node.ts:229](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Node.ts#L229)

___

### getInfo

▸ **getInfo**(): `Promise`<[`Info`](../types/Node.types.md#info)>

Get the Lavalink Node information

#### Returns

`Promise`<[`Info`](../types/Node.types.md#info)>

#### Defined in

[lib/Node.ts:285](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Node.ts#L285)

___

### getPing

▸ **getPing**(`timeout?`): `Promise`<`number`>

Get the ping for the node

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `timeout` | `number` | `1500` | Timeout value in milliseconds |

#### Returns

`Promise`<`number`>

- Node latency, in milliseconds

#### Defined in

[lib/Node.ts:305](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Node.ts#L305)

___

### getRoutePlannerStatus

▸ **getRoutePlannerStatus**(): `Promise`<[`RoutePlannerStatus`](../types/Node.types.md#routeplannerstatus)>

Gets the route planner status

#### Returns

`Promise`<[`RoutePlannerStatus`](../types/Node.types.md#routeplannerstatus)>

#### Defined in

[lib/Node.ts:332](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Node.ts#L332)

___

### getStats

▸ **getStats**(): `Promise`<[`NodeStats`](../types/Node.types.md#nodestats)>

Get the Lavalink Node stats

#### Returns

`Promise`<[`NodeStats`](../types/Node.types.md#nodestats)>

#### Defined in

[lib/Node.ts:294](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Node.ts#L294)

___

### getVersion

▸ **getVersion**(): `Promise`<`string`>

Get the Lavalink Node version

#### Returns

`Promise`<`string`>

#### Defined in

[lib/Node.ts:275](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Node.ts#L275)

___

### reconnect

▸ **reconnect**(): `Promise`<`void`>

Reconnects the node

#### Returns

`Promise`<`void`>

#### Defined in

[lib/Node.ts:236](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Node.ts#L236)

___

### unmarkAllFailedAddress

▸ **unmarkAllFailedAddress**(): `Promise`<`void`>

Unmarks all failed address

#### Returns

`Promise`<`void`>

#### Defined in

[lib/Node.ts:347](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Node.ts#L347)

___

### unmarkFailedAddress

▸ **unmarkFailedAddress**(`address`): `Promise`<`void`>

Unmarks a failed address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address to unmark |

#### Returns

`Promise`<`void`>

#### Defined in

[lib/Node.ts:340](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Node.ts#L340)

___

### updateStats

▸ **updateStats**(`timeout?`): `Promise`<`void`>

Update node stats

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `timeout` | `number` | `1500` |

#### Returns

`Promise`<`void`>

#### Defined in

[lib/Node.ts:354](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Node.ts#L354)

___

### updatseNodeSession

▸ **updatseNodeSession**(): `Promise`<`boolean`>

Update session exists

#### Returns

`Promise`<`boolean`>

#### Defined in

[lib/Node.ts:246](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Node.ts#L246)

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

[lib/Node.ts:54](https://github.com/hmes98318/LavaShark/blob/bdb5d6203c6316405b9087cfd884b2899d298a4f/src/lib/Node.ts#L54)
