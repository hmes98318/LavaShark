# Queue

## Table of contents

### Constructors

- [constructor](Queue.md#constructor)

### Properties

- [tracks](Queue.md#tracks)

### Accessors

- [duration](Queue.md#duration)
- [size](Queue.md#size)

### Methods

- [add](Queue.md#add)
- [clear](Queue.md#clear)
- [poll](Queue.md#poll)
- [remove](Queue.md#remove)
- [shuffle](Queue.md#shuffle)
- [skipNTracks](Queue.md#skipntracks)

## Constructors

### constructor

• **new Queue**()

#### Defined in

[Queue.ts:8](https://github.com/hmes98318/LavaShark/blob/50abc40/src/lib/queue/Queue.ts#L8)

## Properties

### tracks

• **tracks**: (`default` \| `default`)[]

#### Defined in

[Queue.ts:6](https://github.com/hmes98318/LavaShark/blob/50abc40/src/lib/queue/Queue.ts#L6)

## Accessors

### duration

• `get` **duration**(): `number`

獲取隊列的持續時間，以毫秒為單位

#### Returns

`number`

#### Defined in

[Queue.ts:22](https://github.com/hmes98318/LavaShark/blob/50abc40/src/lib/queue/Queue.ts#L22)

___

### size

• `get` **size**(): `number`

獲取隊列的大小

#### Returns

`number`

#### Defined in

[Queue.ts:15](https://github.com/hmes98318/LavaShark/blob/50abc40/src/lib/queue/Queue.ts#L15)

## Methods

### add

▸ **add**(`track`): `void`

[內部使用] 將音軌添加到隊列中。外部使用者應使用 Player.addTracks() 方法代替

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `track` | `default` \| `default` | 要添加到隊列的歌曲 |

#### Returns

`void`

#### Defined in

[Queue.ts:30](https://github.com/hmes98318/LavaShark/blob/50abc40/src/lib/queue/Queue.ts#L30)

___

### clear

▸ **clear**(): `void`

清空隊列

#### Returns

`void`

#### Defined in

[Queue.ts:67](https://github.com/hmes98318/LavaShark/blob/50abc40/src/lib/queue/Queue.ts#L67)

___

### poll

▸ **poll**(): ``null`` \| `default` \| `default`

從隊列中取出下一首歌曲

#### Returns

``null`` \| `default` \| `default`

隊列中的下一個歌曲，如果隊列為空則返回 null

#### Defined in

[Queue.ts:38](https://github.com/hmes98318/LavaShark/blob/50abc40/src/lib/queue/Queue.ts#L38)

___

### remove

▸ **remove**(): `boolean`

移除隊列中的第一首歌曲

#### Returns

`boolean`

如果歌曲成功移除則返回 true，否則返回 false

#### Defined in

[Queue.ts:75](https://github.com/hmes98318/LavaShark/blob/50abc40/src/lib/queue/Queue.ts#L75)

▸ **remove**(`index`): `boolean`

移除指定位置的歌曲

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 要移除的歌曲的索引 |

#### Returns

`boolean`

如果歌曲成功移除則返回 true，否則返回 false

#### Defined in

[Queue.ts:81](https://github.com/hmes98318/LavaShark/blob/50abc40/src/lib/queue/Queue.ts#L81)

▸ **remove**(`start`, `end`): `boolean`

移除指定範圍內的歌曲

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | 範圍的開始索引 |
| `end` | `number` | 範圍的結束索引 |

#### Returns

`boolean`

如果歌曲成功移除則返回 true，否則返回 false

#### Defined in

[Queue.ts:88](https://github.com/hmes98318/LavaShark/blob/50abc40/src/lib/queue/Queue.ts#L88)

___

### shuffle

▸ **shuffle**(): `void`

隨機洗牌隊列

#### Returns

`void`

#### Defined in

[Queue.ts:53](https://github.com/hmes98318/LavaShark/blob/50abc40/src/lib/queue/Queue.ts#L53)

___

### skipNTracks

▸ **skipNTracks**(`n`): `void`

從隊列中移除 n 首歌曲

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | 要跳過的歌曲數量 |

#### Returns

`void`

#### Defined in

[Queue.ts:46](https://github.com/hmes98318/LavaShark/blob/50abc40/src/lib/queue/Queue.ts#L46)
