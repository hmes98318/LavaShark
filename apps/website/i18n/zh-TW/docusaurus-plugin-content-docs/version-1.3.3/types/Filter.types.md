# @types/Filter

## Table of contents

### Type Aliases

- [ChannelMixOptions](Filter.types.md#channelmixoptions)
- [DistortionOptions](Filter.types.md#distortionoptions)
- [FilterOptions](Filter.types.md#filteroptions)
- [KaraokeOptions](Filter.types.md#karaokeoptions)
- [LowPassOptions](Filter.types.md#lowpassoptions)
- [RotationOptions](Filter.types.md#rotationoptions)
- [TimescaleOptions](Filter.types.md#timescaleoptions)
- [TremoloOptions](Filter.types.md#tremolooptions)
- [VibratoOptions](Filter.types.md#vibratooptions)

## Type Aliases

### ChannelMixOptions

Ƭ **ChannelMixOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `leftToLeft?` | `number` |
| `leftToRight?` | `number` |
| `rightToLeft?` | `number` |
| `rightToRight?` | `number` |

#### Defined in

[@types/Filter.types.ts:1](https://github.com/hmes98318/LavaShark/blob/50abc40/src/@types/Filter.types.ts#L1)

___

### DistortionOptions

Ƭ **DistortionOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cosOffset?` | `number` |
| `cosScale?` | `number` |
| `offset?` | `number` |
| `scale?` | `number` |
| `sinOffset?` | `number` |
| `sinScale?` | `number` |
| `tanOffset?` | `number` |
| `tanScale?` | `number` |

#### Defined in

[@types/Filter.types.ts:8](https://github.com/hmes98318/LavaShark/blob/50abc40/src/@types/Filter.types.ts#L8)

___

### FilterOptions

Ƭ **FilterOptions**: `Object`

#### Index signature

▪ [key: `string`]: `unknown`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelMix?` | [`ChannelMixOptions`](Filter.types.md#channelmixoptions) | - |
| `distortion?` | [`DistortionOptions`](Filter.types.md#distortionoptions) | - |
| `equalizer?` | `number`[] | 15 bands [0-14] 25 Hz, 40 Hz, 63 Hz, 100 Hz, 160 Hz, 250 Hz, 400 Hz, 630 Hz, 1 kHz, 1.6 kHz, 2.5 kHz, 4 kHz, 6.3 kHz, 10 kHz, 16 kHz |
| `karaoke?` | [`KaraokeOptions`](Filter.types.md#karaokeoptions) | - |
| `lowPass?` | [`LowPassOptions`](Filter.types.md#lowpassoptions) | - |
| `rotation?` | [`RotationOptions`](Filter.types.md#rotationoptions) | - |
| `timescale?` | [`TimescaleOptions`](Filter.types.md#timescaleoptions) | - |
| `tremolo?` | [`TremoloOptions`](Filter.types.md#tremolooptions) | - |
| `vibrato?` | [`VibratoOptions`](Filter.types.md#vibratooptions) | - |
| `volume?` | `number` | - |

#### Defined in

[@types/Filter.types.ts:50](https://github.com/hmes98318/LavaShark/blob/50abc40/src/@types/Filter.types.ts#L50)

___

### KaraokeOptions

Ƭ **KaraokeOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `filterBand?` | `number` |
| `filterWidth?` | `number` |
| `level?` | `number` |
| `monoLevel?` | `number` |

#### Defined in

[@types/Filter.types.ts:19](https://github.com/hmes98318/LavaShark/blob/50abc40/src/@types/Filter.types.ts#L19)

___

### LowPassOptions

Ƭ **LowPassOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `smoothing?` | `number` |

#### Defined in

[@types/Filter.types.ts:26](https://github.com/hmes98318/LavaShark/blob/50abc40/src/@types/Filter.types.ts#L26)

___

### RotationOptions

Ƭ **RotationOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `rotationHz?` | `number` |

#### Defined in

[@types/Filter.types.ts:30](https://github.com/hmes98318/LavaShark/blob/50abc40/src/@types/Filter.types.ts#L30)

___

### TimescaleOptions

Ƭ **TimescaleOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `pitch?` | `number` |
| `rate?` | `number` |
| `speed?` | `number` |

#### Defined in

[@types/Filter.types.ts:34](https://github.com/hmes98318/LavaShark/blob/50abc40/src/@types/Filter.types.ts#L34)

___

### TremoloOptions

Ƭ **TremoloOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `depth?` | `number` |
| `frequency?` | `number` |

#### Defined in

[@types/Filter.types.ts:40](https://github.com/hmes98318/LavaShark/blob/50abc40/src/@types/Filter.types.ts#L40)

___

### VibratoOptions

Ƭ **VibratoOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `depth?` | `number` |
| `frequency?` | `number` |

#### Defined in

[@types/Filter.types.ts:45](https://github.com/hmes98318/LavaShark/blob/50abc40/src/@types/Filter.types.ts#L45)
