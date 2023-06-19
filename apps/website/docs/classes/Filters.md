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

Creates an instance of filters

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | [`Player`](Player.md) |

#### Defined in

[lib/Filters.ts:24](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Filters.ts#L24)

## Accessors

### active

• `get` **active**(): [`FilterOptions`](../types/types.md#filteroptions)

Gets a copy of active filters object

#### Returns

[`FilterOptions`](../types/types.md#filteroptions)

#### Defined in

[lib/Filters.ts:35](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Filters.ts#L35)

___

### enabled

• `get` **enabled**(): `boolean`

Checks if some filter is enabled

#### Returns

`boolean`

#### Defined in

[lib/Filters.ts:30](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Filters.ts#L30)

## Methods

### apply

▸ **apply**(): `void`

Sends filters payload to Lavalink Node

#### Returns

`void`

#### Defined in

[lib/Filters.ts:245](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Filters.ts#L245)

___

### clear

▸ **clear**(): `void`

Clears all active filters

#### Returns

`void`

#### Defined in

[lib/Filters.ts:238](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Filters.ts#L238)

___

### set

▸ **set**(`filters`): `void`

Sets all filters

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters` | [`FilterOptions`](../types/types.md#filteroptions) |

#### Returns

`void`

#### Defined in

[lib/Filters.ts:224](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Filters.ts#L224)

___

### setChannelMix

▸ **setChannelMix**(`options`, `apply?`): [`Filters`](Filters.md)

Sets ChannelMix filter

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | ``null`` \| [`ChannelMixOptions`](../types/types.md#channelmixoptions) | `undefined` | The channel mix options |
| `apply` | `boolean` | `true` | Whether to send filter payload to Lavalink or not |

#### Returns

[`Filters`](Filters.md)

The filters instance, for chaining calls

#### Defined in

[lib/Filters.ts:49](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Filters.ts#L49)

___

### setDistortion

▸ **setDistortion**(`options`, `apply?`): [`Filters`](Filters.md)

Sets Distortion filter

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | ``null`` \| [`DistortionOptions`](../types/types.md#distortionoptions) | `undefined` | The distortion options |
| `apply` | `boolean` | `true` | Whether to send filter payload to Lavalink or not |

#### Returns

[`Filters`](Filters.md)

The filters instance, for chaining calls

#### Defined in

[lib/Filters.ts:72](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Filters.ts#L72)

___

### setEqualizer

▸ **setEqualizer**(`options`, `apply?`): [`Filters`](Filters.md)

Sets Equalizer filter

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | ``null`` \| `number`[] | `undefined` | The equalizer band array |
| `apply` | `boolean` | `true` | Whether to send filter payload to Lavalink or not |

#### Returns

[`Filters`](Filters.md)

The filters instance, for chaining calls

#### Defined in

[lib/Filters.ts:87](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Filters.ts#L87)

___

### setKaraoke

▸ **setKaraoke**(`options`, `apply?`): [`Filters`](Filters.md)

Sets Karaoke filter

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | ``null`` \| [`KaraokeOptions`](../types/types.md#karaokeoptions) | `undefined` | The karaoke options |
| `apply` | `boolean` | `true` | Whether to send filter payload to Lavalink or not |

#### Returns

[`Filters`](Filters.md)

The filters instance, for chaining calls

#### Defined in

[lib/Filters.ts:113](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Filters.ts#L113)

___

### setLowPass

▸ **setLowPass**(`options`, `apply?`): [`Filters`](Filters.md)

Sets LowPass filter

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | ``null`` \| [`LowPassOptions`](../types/types.md#lowpassoptions) | `undefined` | The lowpass options |
| `apply` | `boolean` | `true` | Whether to send filter payload to Lavalink or not |

#### Returns

[`Filters`](Filters.md)

The filters instance, for chaining calls

#### Defined in

[lib/Filters.ts:129](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Filters.ts#L129)

___

### setRotation

▸ **setRotation**(`options`, `apply?`): [`Filters`](Filters.md)

Sets Rotation filter

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | ``null`` \| [`RotationOptions`](../types/types.md#rotationoptions) | `undefined` | The rotation options |
| `apply` | `boolean` | `true` | Whether to send filter payload to Lavalink or not |

#### Returns

[`Filters`](Filters.md)

The filters instance, for chaining calls

#### Defined in

[lib/Filters.ts:145](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Filters.ts#L145)

___

### setTimescale

▸ **setTimescale**(`options`, `apply?`): [`Filters`](Filters.md)

Sets Timescale filter

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | ``null`` \| [`TimescaleOptions`](../types/types.md#timescaleoptions) | `undefined` | The timescale options |
| `apply` | `boolean` | `true` | Whether to send filter payload to Lavalink or not |

#### Returns

[`Filters`](Filters.md)

The filters instance, for chaining calls

#### Defined in

[lib/Filters.ts:163](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Filters.ts#L163)

___

### setTremolo

▸ **setTremolo**(`options`, `apply?`): [`Filters`](Filters.md)

Sets Tremolo filter

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | ``null`` \| [`TremoloOptions`](../types/types.md#tremolooptions) | `undefined` | The tremolo options |
| `apply` | `boolean` | `true` | Whether to send filter payload to Lavalink or not |

#### Returns

[`Filters`](Filters.md)

The filters instance, for chaining calls

#### Defined in

[lib/Filters.ts:180](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Filters.ts#L180)

___

### setVibrato

▸ **setVibrato**(`options`, `apply?`): [`Filters`](Filters.md)

Sets Vibrato filter

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | ``null`` \| [`VibratoOptions`](../types/types.md#vibratooptions) | `undefined` | The vibrato options |
| `apply` | `boolean` | `true` | Whether to send filter payload to Lavalink or not |

#### Returns

[`Filters`](Filters.md)

The filters instance, for chaining calls

#### Defined in

[lib/Filters.ts:197](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Filters.ts#L197)

___

### setVolume

▸ **setVolume**(`vol`, `apply?`): [`Filters`](Filters.md)

Sets the volume

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `vol` | `number` | `undefined` | The volume to set [0,500] |
| `apply` | `boolean` | `true` | Whether to send filter payload to Lavalink or not |

#### Returns

[`Filters`](Filters.md)

The filters instance, for chaining calls

#### Defined in

[lib/Filters.ts:212](https://github.com/hmes98318/LavaShark/blob/main/src/lib/Filters.ts#L212)
