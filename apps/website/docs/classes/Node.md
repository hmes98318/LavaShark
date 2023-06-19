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
- [getVersion](Node.md#getversion)
- [unmarkAllFailedAddress](Node.md#unmarkallfailedaddress)
- [unmarkFailedAddress](Node.md#unmarkfailedaddress)
- [checkOptions](Node.md#checkoptions)

## Constructors

### constructor

• **new Node**(`lavashark`, `options`)

Create a new LavaShark instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lavashark` | [`LavaShark`](LavaShark.md) | The LavaShark instance |
| `options` | [`NodeOptions`](../types/types.md#nodeoptions) | The node options |

#### Defined in

[lib/Node.ts:113](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Node.ts#L113)

## Properties

### options

• `Readonly` **options**: [`NodeOptions`](../types/types.md#nodeoptions)

#### Defined in

[lib/Node.ts:35](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Node.ts#L35)

___

### rest

• `Readonly` **rest**: `RESTManager`

#### Defined in

[lib/Node.ts:42](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Node.ts#L42)

___

### retryAttempts

• **retryAttempts**: `number`

#### Defined in

[lib/Node.ts:44](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Node.ts#L44)

___

### state

• **state**: `NodeState`

#### Defined in

[lib/Node.ts:46](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Node.ts#L46)

___

### stats

• **stats**: [`NodeStats`](../types/types.md#nodestats)

#### Defined in

[lib/Node.ts:47](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Node.ts#L47)

___

### version

• `Optional` **version**: `string`

#### Defined in

[lib/Node.ts:49](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Node.ts#L49)

## Accessors

### identifier

• `get` **identifier**(): `string`

#### Returns

`string`

#### Defined in

[lib/Node.ts:156](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Node.ts#L156)

___

### totalPenalties

• `get` **totalPenalties**(): `number`

#### Returns

`number`

#### Defined in

[lib/Node.ts:150](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Node.ts#L150)

## Methods

### connect

▸ **connect**(): `void`

#### Returns

`void`

#### Defined in

[lib/Node.ts:176](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Node.ts#L176)

___

### disconnect

▸ **disconnect**(): `void`

#### Returns

`void`

#### Defined in

[lib/Node.ts:205](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Node.ts#L205)

___

### getInfo

▸ **getInfo**(): `Promise`<[`Info`](../types/types.md#info)\>

Get the Lavalink Node information

#### Returns

`Promise`<[`Info`](../types/types.md#info)\>

#### Defined in

[lib/Node.ts:225](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Node.ts#L225)

___

### getRoutePlannerStatus

▸ **getRoutePlannerStatus**(): `Promise`<[`RoutePlannerStatus`](../types/types.md#routeplannerstatus)\>

Gets the route planner status

#### Returns

`Promise`<[`RoutePlannerStatus`](../types/types.md#routeplannerstatus)\>

#### Defined in

[lib/Node.ts:234](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Node.ts#L234)

___

### getVersion

▸ **getVersion**(): `Promise`<`string`\>

Get the Lavalink Node version

#### Returns

`Promise`<`string`\>

#### Defined in

[lib/Node.ts:215](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Node.ts#L215)

___

### unmarkAllFailedAddress

▸ **unmarkAllFailedAddress**(): `Promise`<`void`\>

Unmarks all failed address

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/Node.ts:249](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Node.ts#L249)

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

[lib/Node.ts:242](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Node.ts#L242)

___

### checkOptions

▸ `Static` **checkOptions**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`NodeOptions`](../types/types.md#nodeoptions) |

#### Returns

`void`

#### Defined in

[lib/Node.ts:51](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Node.ts#L51)
