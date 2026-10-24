export type ChannelMixOptions = {
    leftToLeft?: number;
    leftToRight?: number;
    rightToLeft?: number;
    rightToRight?: number;
}

export type DistortionOptions = {
    sinOffset?: number;
    sinScale?: number;
    tanOffset?: number;
    tanScale?: number;
    cosOffset?: number;
    cosScale?: number;
    offset?: number;
    scale?: number;
}

export type KaraokeOptions = {
    level?: number;
    monoLevel?: number;
    filterBand?: number;
    filterWidth?: number;
}

export type LowPassOptions = {
    smoothing?: number;
}

export type RotationOptions = {
    rotationHz?: number;
}

export type TimescaleOptions = {
    speed?: number;
    pitch?: number;
    rate?: number;
}

export type TremoloOptions = {
    frequency?: number;
    depth?: number;
}

export type VibratoOptions = {
    frequency?: number;
    depth?: number;
}

export type NormalizationOptions = {
    maxAmplitude?: number;
    adaptive?: boolean;
};

export type EchoOptions = {
    echoLength?: number;
    delay?: number;
    decay?: number;
};

export type HighPassOptions = {
    cutoffFrequency?: number;
    boostFactor?: number;
};

/** Options for the LavaDSPX plugin's low-pass filter. */
export type LavaDSPXLowPassOptions = {
    cutoffFrequency?: number;
    boostFactor?: number;
};

/** Options for the LavaDSPX plugin's echo filter. */
export type LavaDSPXEchoOptions = {
    echoLength?: number;
    decay?: number;
};

/** The filters currently exposed by LavaDSPX-Plugin. */
export type LavaDSPXFiltersOptions = {
    'low-pass'?: LavaDSPXLowPassOptions;
    'high-pass'?: HighPassOptions;
    normalization?: NormalizationOptions;
    echo?: LavaDSPXEchoOptions;
};

export type PluginFiltersOptions = {
    normalization?: NormalizationOptions;
    echo?: EchoOptions;
    'high-pass'?: HighPassOptions;
    highPass?: HighPassOptions;
    [key: string]: Record<string, unknown> | unknown;
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
    pluginFilters?: PluginFiltersOptions;
    rotation?: RotationOptions;
    timescale?: TimescaleOptions;
    tremolo?: TremoloOptions;
    vibrato?: VibratoOptions;
    volume?: number;

    [key: string]: unknown;
};
