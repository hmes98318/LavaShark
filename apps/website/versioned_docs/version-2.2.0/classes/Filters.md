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

[lib/Filters.ts:25](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/Filters.ts#L25)

## Accessors

### active

• `get` **active**(): [`FilterOptions`](../types/Filter.types.md#filteroptions)

Gets a copy of active filters object

#### Returns

[`FilterOptions`](../types/Filter.types.md#filteroptions)

#### Defined in

[lib/Filters.ts:36](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/Filters.ts#L36)

___

### enabled

• `get` **enabled**(): `boolean`

Checks if some filter is enabled

#### Returns

`boolean`

#### Defined in

[lib/Filters.ts:31](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/Filters.ts#L31)

## Methods

### apply

▸ **apply**(): `void`

Sends filters payload to Lavalink Node

#### Returns

`void`

#### Defined in

[lib/Filters.ts:245](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/Filters.ts#L302)

___

### clear

▸ **clear**(): `void`

Clears all active filters

#### Returns

`void`

#### Defined in

[lib/Filters.ts:238](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/Filters.ts#L295)

___

### set

▸ **set**(`filters`): `void`

Sets all filters

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters` | [`FilterOptions`](../types/Filter.types.md#filteroptions) |

#### Returns

`void`

#### Defined in

[lib/Filters.ts:224](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/Filters.ts#L279)

___

### setChannelMix

▸ **setChannelMix**(`options`, `apply?`): [`Filters`](Filters.md)

Sets ChannelMix filter

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | ``null`` \| [`ChannelMixOptions`](../types/Filter.types.md#channelmixoptions) | `undefined` | The channel mix options |
| `apply` | `boolean` | `true` | Whether to send filter payload to Lavalink or not |

#### Returns

[`Filters`](Filters.md)

The filters instance, for chaining calls

#### Defined in

[lib/Filters.ts:50](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/Filters.ts#L50)

___

### setDistortion

▸ **setDistortion**(`options`, `apply?`): [`Filters`](Filters.md)

Sets Distortion filter

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | ``null`` \| [`DistortionOptions`](../types/Filter.types.md#distortionoptions) | `undefined` | The distortion options |
| `apply` | `boolean` | `true` | Whether to send filter payload to Lavalink or not |

#### Returns

[`Filters`](Filters.md)

The filters instance, for chaining calls

#### Defined in

[lib/Filters.ts:73](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/Filters.ts#L80)

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

[lib/Filters.ts:88](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/Filters.ts#L102)

___

### setKaraoke

▸ **setKaraoke**(`options`, `apply?`): [`Filters`](Filters.md)

Sets Karaoke filter

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | ``null`` \| [`KaraokeOptions`](../types/Filter.types.md#karaokeoptions) | `undefined` | The karaoke options |
| `apply` | `boolean` | `true` | Whether to send filter payload to Lavalink or not |

#### Returns

[`Filters`](Filters.md)

The filters instance, for chaining calls

#### Defined in

[lib/Filters.ts:114](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/Filters.ts#L128)

___

### setLowPass

▸ **setLowPass**(`options`, `apply?`): [`Filters`](Filters.md)

Sets LowPass filter

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | ``null`` \| [`LowPassOptions`](../types/Filter.types.md#lowpassoptions) | `undefined` | The lowpass options |
| `apply` | `boolean` | `true` | Whether to send filter payload to Lavalink or not |

#### Returns

[`Filters`](Filters.md)

The filters instance, for chaining calls

#### Defined in

[lib/Filters.ts:130](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/Filters.ts#L151)

___

### setRotation

▸ **setRotation**(`options`, `apply?`): [`Filters`](Filters.md)

Sets Rotation filter

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | ``null`` \| [`RotationOptions`](../types/Filter.types.md#rotationoptions) | `undefined` | The rotation options |
| `apply` | `boolean` | `true` | Whether to send filter payload to Lavalink or not |

#### Returns

[`Filters`](Filters.md)

The filters instance, for chaining calls

#### Defined in

[lib/Filters.ts:146](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/Filters.ts#L173)

___

### setTimescale

▸ **setTimescale**(`options`, `apply?`): [`Filters`](Filters.md)

Sets Timescale filter

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | ``null`` \| [`TimescaleOptions`](../types/Filter.types.md#timescaleoptions) | `undefined` | The timescale options |
| `apply` | `boolean` | `true` | Whether to send filter payload to Lavalink or not |

#### Returns

[`Filters`](Filters.md)

The filters instance, for chaining calls

#### Defined in

[lib/Filters.ts:164](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/Filters.ts#L198)

___

### setTremolo

▸ **setTremolo**(`options`, `apply?`): [`Filters`](Filters.md)

Sets Tremolo filter

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | ``null`` \| [`TremoloOptions`](../types/Filter.types.md#tremolooptions) | `undefined` | The tremolo options |
| `apply` | `boolean` | `true` | Whether to send filter payload to Lavalink or not |

#### Returns

[`Filters`](Filters.md)

The filters instance, for chaining calls

#### Defined in

[lib/Filters.ts:181](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/Filters.ts#L222)

___

### setVibrato

▸ **setVibrato**(`options`, `apply?`): [`Filters`](Filters.md)

Sets Vibrato filter

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | ``null`` \| [`VibratoOptions`](../types/Filter.types.md#vibratooptions) | `undefined` | The vibrato options |
| `apply` | `boolean` | `true` | Whether to send filter payload to Lavalink or not |

#### Returns

[`Filters`](Filters.md)

The filters instance, for chaining calls

#### Defined in

[lib/Filters.ts:198](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/Filters.ts#L246)

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

[lib/Filters.ts:213](https://github.com/hmes98318/LavaShark/blob/45bf2120d636a6aca823f03d72da2dc01b7bbfbf/src/lib/Filters.ts#L267)
