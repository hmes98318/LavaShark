export type ChannelMixOptions = {
    leftToLeft?: number;
    leftToRight?: number;
    rightToLeft?: number;
    rightToRight?: number;
};
export type DistortionOptions = {
    sinOffset?: number;
    sinScale?: number;
    tanOffset?: number;
    tanScale?: number;
    cosOffset?: number;
    cosScale?: number;
    offset?: number;
    scale?: number;
};
export type KaraokeOptions = {
    level?: number;
    monoLevel?: number;
    filterBand?: number;
    filterWidth?: number;
};
export type LowPassOptions = {
    smoothing?: number;
};
export type RotationOptions = {
    rotationHz?: number;
};
export type TimescaleOptions = {
    speed?: number;
    pitch?: number;
    rate?: number;
};
export type TremoloOptions = {
    frequency?: number;
    depth?: number;
};
export type VibratoOptions = {
    frequency?: number;
    depth?: number;
};
export type FilterOptions = {
    channelMix?: ChannelMixOptions;
    distortion?: DistortionOptions;
    /**
     * 15 bands [0-14]
     * 25 Hz, 40 Hz, 63 Hz, 100 Hz, 160 Hz, 250 Hz, 400 Hz, 630 Hz, 1 kHz, 1.6 kHz, 2.5 kHz, 4 kHz, 6.3 kHz, 10 kHz, 16 kHz
     */
    equalizer?: number[];
    karaoke?: KaraokeOptions;
    lowPass?: LowPassOptions;
    rotation?: RotationOptions;
    timescale?: TimescaleOptions;
    tremolo?: TremoloOptions;
    vibrato?: VibratoOptions;
    volume?: number;
    [key: string]: unknown;
};
