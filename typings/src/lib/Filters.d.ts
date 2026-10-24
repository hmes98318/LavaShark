import Player from './Player';
import type { ChannelMixOptions, DistortionOptions, EchoOptions, FilterOptions, HighPassOptions, LavaDSPXEchoOptions, KaraokeOptions, LavaDSPXFiltersOptions, LavaDSPXLowPassOptions, LowPassOptions, NormalizationOptions, PluginFiltersOptions, RotationOptions, TimescaleOptions, TremoloOptions, VibratoOptions } from '../@types';
export default class Filters {
    private readonly player;
    private options;
    /**
     * Creates an instance of filters
     * @param player
     */
    constructor(player: Player);
    /** Checks if some filter is enabled */
    get enabled(): boolean;
    /** Gets a copy of active filters object */
    get active(): FilterOptions;
    /**
     * Sets ChannelMix filter
     * @param options - The channel mix options
     * @param options.leftToLeft - The left to left mix
     * @param options.leftToRight - The left to right mix
     * @param options.rightToLeft - The right to left mix
     * @param options.rightToRight - The right to right mix
     * @param apply - Whether to send filter payload to Lavalink or not
     * @returns The filters instance, for chaining calls
     */
    setChannelMix(options: ChannelMixOptions | null, apply?: boolean): this;
    /**
     * Sets Distortion filter
     * @param options - The distortion options
     * @param options.sinOffset - The sin offset
     * @param options.sinScale - The sin scale
     * @param options.cosOffset - The cos offset
     * @param options.cosScale - The cos scale
     * @param options.tanOffset - The tan offset
     * @param options.tanScale - The tan scale
     * @param options.offset - The offset
     * @param options.scale - The scale
     * @param apply - Whether to send filter payload to Lavalink or not
     * @returns The filters instance, for chaining calls
     */
    setDistortion(options: DistortionOptions | null, apply?: boolean): this;
    /**
     * Sets Equalizer filter
     * @param options - The equalizer band array
     * @param apply - Whether to send filter payload to Lavalink or not
     * @returns The filters instance, for chaining calls
     */
    setEqualizer(options: number[] | null, apply?: boolean): this;
    /**
     * Sets Karaoke filter
     * @param options - The karaoke options
     * @param options.level - The level
     * @param options.monoLevel - The mono level
     * @param options.filterBand - The band to filter
     * @param options.filterWidth - The filter width
     * @param apply - Whether to send filter payload to Lavalink or not
     * @returns The filters instance, for chaining calls
     */
    setKaraoke(options: KaraokeOptions | null, apply?: boolean): this;
    /**
     * Sets LowPass filter
     * @param options - The lowpass options
     * @param options.smoothing - The lowpass smoothing
     * @param apply - Whether to send filter payload to Lavalink or not
     * @returns The filters instance, for chaining calls
     */
    setLowPass(options: LowPassOptions | null, apply?: boolean): this;
    /**
     * Sets Rotation filter
     * @param options - The rotation options
     * @param options.rotationHz - The rotation speed, in Hertz
     * @param apply - Whether to send filter payload to Lavalink or not
     * @returns The filters instance, for chaining calls
     */
    setRotation(options: RotationOptions | null, apply?: boolean): this;
    /**
     * Sets Timescale filter
     * @param options - The timescale options
     * @param options.speed - The speed
     * @param options.rate - The rate
     * @param options.pitch - The pitch
     * @param apply - Whether to send filter payload to Lavalink or not
     * @returns The filters instance, for chaining calls
     */
    setTimescale(options: TimescaleOptions | null, apply?: boolean): this;
    /**
     * Sets Tremolo filter
     * @param options - The tremolo options
     * @param options.frequency - The frequency 0 < f ≤ 14
     * @param options.depth - The depth 0 < d ≤ 1
     * @param apply - Whether to send filter payload to Lavalink or not
     * @returns The filters instance, for chaining calls
     */
    setTremolo(options: TremoloOptions | null, apply?: boolean): this;
    /**
     * Sets Vibrato filter
     * @param options - The vibrato options
     * @param options.frequency - The frequency 0 < f ≤ 14
     * @param options.depth - The depth 0 < d ≤ 1
     * @param apply - Whether to send filter payload to Lavalink or not
     * @returns The filters instance, for chaining calls
     */
    setVibrato(options: VibratoOptions | null, apply?: boolean): this;
    setPluginFilters(options: PluginFiltersOptions | null, apply?: boolean): this;
    setPluginFilter(pluginName: string, options: Record<string, unknown> | null, apply?: boolean): this;
    setNormalization(options: NormalizationOptions | null, apply?: boolean): this;
    setEcho(options: EchoOptions | null, apply?: boolean): this;
    setHighPass(options: HighPassOptions | null, apply?: boolean): this;
    /** Sets the filters provided by LavaDSPX-Plugin. */
    setLavaDSPXFilters(options: LavaDSPXFiltersOptions | null, apply?: boolean): this;
    /** Sets LavaDSPX's normalization filter. */
    setLavaDSPXNormalization(options: NormalizationOptions | null, apply?: boolean): this;
    /** Sets LavaDSPX's echo filter. */
    setLavaDSPXEcho(options: LavaDSPXEchoOptions | null, apply?: boolean): this;
    /** Sets LavaDSPX's high-pass filter. */
    setLavaDSPXHighPass(options: HighPassOptions | null, apply?: boolean): this;
    /** Sets LavaDSPX's low-pass filter. */
    setLavaDSPXLowPass(options: LavaDSPXLowPassOptions | null, apply?: boolean): this;
    /**
     * Sets the volume
     * @param vol - The volume to set [0,500]
     * @returns The filters instance, for chaining calls
     */
    setVolume(vol: number): this;
    /** Sets all filters */
    set(filters: FilterOptions): void;
    /** Clears all active filters */
    clear(): void;
    /** Sends filters payload to Lavalink Node */
    apply(): void;
}
