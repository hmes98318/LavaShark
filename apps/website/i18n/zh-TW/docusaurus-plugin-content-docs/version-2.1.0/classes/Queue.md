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
- [insert](Queue.md#insert)
- [move](Queue.md#move)
- [poll](Queue.md#poll)
- [remove](Queue.md#remove)
- [shuffle](Queue.md#shuffle)
- [skipNTracks](Queue.md#skipntracks)

## Constructors

### constructor

• **new Queue**()

#### Defined in

[Queue.ts:8](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/queue/Queue.ts#L8)

## Properties

### tracks

• **tracks**: ([`Track`](./Track.md))[]

#### Defined in

[Queue.ts:6](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/queue/Queue.ts#L6)

## Accessors

### duration

• `get` **duration**(): `number`

獲取隊列的持續時間，以毫秒為單位

#### Returns

`number`

#### Defined in

[Queue.ts:22](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/queue/Queue.ts#L22)

___

### size

• `get` **size**(): `number`

獲取隊列的大小

#### Returns

`number`

#### Defined in

[Queue.ts:15](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/queue/Queue.ts#L15)

## Methods

### add

▸ **add**(`track`): `void`

[內部使用] 將音軌添加到隊列中。外部使用者應使用 Player.addTracks() 方法代替

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `track` | `default` | `default` | 要添加到隊列的歌曲 |

#### Returns

`void`

#### Defined in

[Queue.ts:30](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/queue/Queue.ts#L30)

___

### clear

▸ **clear**(): `void`

清空隊列

#### Returns

`void`

#### Defined in

[Queue.ts:81](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/queue/Queue.ts#L81)

___

### insert

▸ **insert**(`index`, `track`): `boolean`

在指定索引處插入歌曲，向後移動後續歌曲。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 插入歌曲的索引位置 |
| `track` | [`Track`](./Track.md) | 要插入的歌曲 |

#### Returns

`boolean`

**`Throws`**

如果索引超出範圍，則拋出錯誤。

#### Defined in

[Queue.ts:40](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/queue/Queue.ts#L40)

___

### move

▸ **move**(`index1`, `index2`): `boolean`

將歌曲從對列中的一個索引移動到另一個索引交換。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index1` | `number` | 歌曲當前的索引位置 |
| `index2` | `number` | 歌曲應移動到的新索引位置 |

#### Returns

`boolean`

如果歌曲已成功移動，則傳回 true，否則傳回 false。

#### Defined in

[Queue.ts:134](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/queue/Queue.ts#L134)

___

### poll

▸ **poll**(): [`Track`](./Track.md)

從隊列中取出下一首歌曲

#### Returns

[`Track`](./Track.md)

隊列中的下一個歌曲，如果隊列為空則返回 null

#### Defined in

[Queue.ts:53](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/queue/Queue.ts#L53)

___

### remove

▸ **remove**(): `boolean`

移除隊列中的第一首歌曲

#### Returns

`boolean`

如果歌曲成功移除則返回 true，否則返回 false

#### Defined in

[Queue.ts:89](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/queue/Queue.ts#L89)

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

[Queue.ts:95](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/queue/Queue.ts#L95)

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

[Queue.ts:102](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/queue/Queue.ts#L102)

___

### shuffle

▸ **shuffle**(): `void`

隨機洗牌隊列

#### Returns

`void`

#### Defined in

[Queue.ts:68](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/queue/Queue.ts#L68)

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

[Queue.ts:61](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/queue/Queue.ts#L61)
