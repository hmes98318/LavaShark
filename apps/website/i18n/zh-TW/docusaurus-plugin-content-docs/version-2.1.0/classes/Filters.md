# Filters

## Table of contents

### Constructors

- [constructor](Filters.md#constructor)

### Accessors

- [active](Filters.md#active)
- [enabled](Filters.md#enabled)

### Methods

- [apply](Filters.md#apply)
- [clear](Filters.md#clear)
- [set](Filters.md#set)
- [setChannelMix](Filters.md#setchannelmix)
- [setDistortion](Filters.md#setdistortion)
- [setEqualizer](Filters.md#setequalizer)
- [setKaraoke](Filters.md#setkaraoke)
- [setLowPass](Filters.md#setlowpass)
- [setRotation](Filters.md#setrotation)
- [setTimescale](Filters.md#settimescale)
- [setTremolo](Filters.md#settremolo)
- [setVibrato](Filters.md#setvibrato)
- [setVolume](Filters.md#setvolume)

## Constructors

### constructor

• **new Filters**(`player`)

創建一個 Filters 實例

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | [`Player`](Player.md) |

#### Defined in

[lib/Filters.ts:25](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Filters.ts#L25)

## Accessors

### active

• `get` **active**(): [`FilterOptions`](../types/Filter.types.md#filteroptions)

獲取活動 Filters 物件的副本

#### Returns

[`FilterOptions`](../types/Filter.types.md#filteroptions)

#### Defined in

[lib/Filters.ts:36](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Filters.ts#L36)

___

### enabled

• `get` **enabled**(): `boolean`

檢查某個 Filters 是否已啟用

#### Returns

`boolean`

#### Defined in

[lib/Filters.ts:31](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Filters.ts#L31)

## Methods

### apply

▸ **apply**(): `void`

將 Filters 設置傳送到 Lavalink 節點

#### Returns

`void`

#### Defined in

[lib/Filters.ts:245](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Filters.ts#L245)

___

### clear

▸ **clear**(): `void`

清除所有活動的 Filters

#### Returns

`void`

#### Defined in

[lib/Filters.ts:238](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Filters.ts#L238)

___

### set

▸ **set**(`filters`): `void`

設置所有 Filters

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters` | [`FilterOptions`](../types/Filter.types.md#filteroptions) |

#### Returns

`void`

#### Defined in

[lib/Filters.ts:224](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Filters.ts#L224)

___

### setChannelMix

▸ **setChannelMix**(`options`, `apply?`): [`Filters`](Filters.md)

設置 ChannelMix Filter

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | ``null`` \| [`ChannelMixOptions`](../types/Filter.types.md#channelmixoptions) | `undefined` | channel mix 選項 |
| `apply` | `boolean` | `true` | 是否將 Filter 設置傳送到 Lavalink 節點 |

#### Returns

[`Filters`](Filters.md)

Filter 實例，用於鏈式呼叫

#### Defined in

[lib/Filters.ts:50](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Filters.ts#L50)

___

### setDistortion

▸ **setDistortion**(`options`, `apply?`): [`Filters`](Filters.md)

設置 Distortion Filter

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | ``null`` \| [`DistortionOptions`](../types/Filter.types.md#distortionoptions) | `undefined` | distortion 選項 |
| `apply` | `boolean` | `true` | 是否將 Filter 設置傳送到 Lavalink 節點 |

#### Returns

[`Filters`](Filters.md)

Filter 實例，用於鏈式呼叫

#### Defined in

[lib/Filters.ts:73](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Filters.ts#L73)

___

### setEqualizer

▸ **setEqualizer**(`options`, `apply?`): [`Filters`](Filters.md)

設置 Equalizer Filter

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | ``null`` \| `number`[] | `undefined` | 等化器陣列 |
| `apply` | `boolean` | `true` | 是否將 Filter 設置傳送到 Lavalink 節點 |

#### Returns

[`Filters`](Filters.md)

Filter 實例，用於鏈式呼叫

#### Defined in

[lib/Filters.ts:88](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Filters.ts#L88)

___

### setKaraoke

▸ **setKaraoke**(`options`, `apply?`): [`Filters`](Filters.md)

設置 Karaoke Filter

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | ``null`` \| [`KaraokeOptions`](../types/Filter.types.md#karaokeoptions) | `undefined` | karaoke 選項 |
| `apply` | `boolean` | `true` | 是否將 Filter 設置傳送到 Lavalink 節點 |

#### Returns

[`Filters`](Filters.md)

Filter 實例，用於鏈式呼叫

#### Defined in

[lib/Filters.ts:114](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Filters.ts#L114)

___

### setLowPass

▸ **setLowPass**(`options`, `apply?`): [`Filters`](Filters.md)

設置 LowPass Filter

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | ``null`` \| [`LowPassOptions`](../types/Filter.types.md#lowpassoptions) | `undefined` | lowpass 選項 |
| `apply` | `boolean` | `true` | 是否將 Filter 設置傳送到 Lavalink 節點 |

#### Returns

[`Filters`](Filters.md)

Filter 實例，用於鏈式呼叫

#### Defined in

[lib/Filters.ts:130](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Filters.ts#L130)

___

### setRotation

▸ **setRotation**(`options`, `apply?`): [`Filters`](Filters.md)

設置 Rotation Filter

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | ``null`` \| [`RotationOptions`](../types/Filter.types.md#rotationoptions) | `undefined` | rotation 選項 |
| `apply` | `boolean` | `true` | 是否將 Filter 設置傳送到 Lavalink 節點 |

#### Returns

[`Filters`](Filters.md)

Filter 實例，用於鏈式呼叫

#### Defined in

[lib/Filters.ts:146](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Filters.ts#L146)

___

### setTimescale

▸ **setTimescale**(`options`, `apply?`): [`Filters`](Filters.md)

設置 Timescale Filter

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | ``null`` \| [`TimescaleOptions`](../types/Filter.types.md#timescaleoptions) | `undefined` | timescale 選項 |
| `apply` | `boolean` | `true` | 是否將 Filter 設置傳送到 Lavalink 節點 |

#### Returns

[`Filters`](Filters.md)

Filter 實例，用於鏈式呼叫

#### Defined in

[lib/Filters.ts:164](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Filters.ts#L164)

___

### setTremolo

▸ **setTremolo**(`options`, `apply?`): [`Filters`](Filters.md)

設置 Tremolo filter

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | ``null`` \| [`TremoloOptions`](../types/Filter.types.md#tremolooptions) | `undefined` | tremolo 選項 |
| `apply` | `boolean` | `true` | 是否將 Filter 設置傳送到 Lavalink 節點 |

#### Returns

[`Filters`](Filters.md)

Filter 實例，用於鏈式呼叫

#### Defined in

[lib/Filters.ts:181](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Filters.ts#L181)

___

### setVibrato

▸ **setVibrato**(`options`, `apply?`): [`Filters`](Filters.md)

設置 Vibrato filter

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | ``null`` \| [`VibratoOptions`](../types/Filter.types.md#vibratooptions) | `undefined` | vibrato 選項 |
| `apply` | `boolean` | `true` | 是否將 Filter 設置傳送到 Lavalink 節點 |

#### Returns

[`Filters`](Filters.md)

Filter 實例，用於鏈式呼叫

#### Defined in

[lib/Filters.ts:198](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Filters.ts#L198)

___

### setVolume

▸ **setVolume**(`vol`, `apply?`): [`Filters`](Filters.md)

設置音量

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `vol` | `number` | `undefined` | 要設置的音量 [0,500] |
| `apply` | `boolean` | `true` | 是否將 Filter 設置傳送到 Lavalink 節點 |

#### Returns

[`Filters`](Filters.md)

Filter 實例，用於鏈式呼叫

#### Defined in

[lib/Filters.ts:213](https://github.com/hmes98318/LavaShark/blob/f32fcc81c4b5b95e62c43d544e14f8b81f1be683/src/lib/Filters.ts#L213)
