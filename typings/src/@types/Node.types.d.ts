import type { LoadException } from "./REST.types";
/** Lavalink node options */
export type NodeOptions = {
    /** The node identifier */
    id?: string;
    /** The node hostname */
    hostname: string;
    /** The node port */
    port: number;
    /** Whether to use SSL/TLS or not */
    secure?: boolean;
    /** Whether to follow redirects or not (default is false) */
    followRedirects?: boolean;
    /** The node password */
    password?: string;
    /** Whether to enable resume key */
    resumeKey?: "enable" | "disable" | "ENABLE" | "DISABLE";
    /** The resume timeout, in seconds (default is 60s) */
    resumeTimeout?: number;
    /** The max number of retry attempts */
    maxRetryAttempts?: number;
    /** The interval between retry attempts */
    retryAttemptsInterval?: number;
};
/** Lavalink node stats */
export type NodeStats = {
    /** The amount of playing players */
    playingPlayers: number;
    /** The total player amount */
    players: number;
    /** The lavalink node uptime, in seconds */
    uptime: number;
    /** RAM stats, in bytes */
    memory: {
        reservable: number;
        used: number;
        free: number;
        allocated: number;
    };
    /** CPU stats, [0, 1] */
    cpu: {
        cores: number;
        systemLoad: number;
        lavalinkLoad: number;
    };
    /** Audio frame stats */
    frameStats?: {
        sent: number;
        nulled: number;
        deficit: number;
    };
};
/** Route planner API */
export type RoutePlannerStatus = {
    class: string | null;
    details: RoutePlannerDetails | null;
};
export type RoutePlannerDetails = {
    ipBlock: {
        type: string;
        size: string;
    };
    failingAddresses: Array<{
        address: string;
        failingTimestamp: number;
        failingTime: string;
    }>;
    blockIndex?: string;
    currentAddressIndex?: string;
};
/** Lavalink version */
export type version = string;
/** Lavalink Info */
export type Info = {
    version: {
        semver: string;
        major: number;
        minor: number;
        patch: number;
        preRelease: string | null;
    };
    buildTime: number;
    git: {
        branch: string;
        commit: string;
        commitTime: number;
    };
    jvm: string;
    lavaplayer: string;
    sourceManagers: string[];
    filters: string[];
    plugins: Array<{
        name: string;
        version: string;
    }>;
};
/** Lavalink node incoming payloads */
export interface PlayerEventPayload {
    op: 'event';
    type: 'TrackStartEvent' | 'TrackEndEvent' | 'TrackExceptionEvent' | 'TrackStuckEvent' | 'WebSocketClosedEvent';
    guildId: string;
}
export interface TrackStartEvent extends PlayerEventPayload {
    type: 'TrackStartEvent';
    track: string;
}
export type TrackEndReason = 'FINISHED' | 'LOAD_FAILED' | 'STOPPED' | 'REPLACED' | 'CLEANUP';
export interface TrackEndEvent extends PlayerEventPayload {
    type: 'TrackEndEvent';
    track: string;
    reason: TrackEndReason;
}
export interface TrackExceptionEvent extends PlayerEventPayload {
    type: 'TrackExceptionEvent';
    track: string;
    exception: LoadException & {
        cause: string;
    };
}
export interface TrackStuckEvent extends PlayerEventPayload {
    type: 'TrackStuckEvent';
    track: string;
    thresholdMs: number;
}
export interface WebSocketClosedEvent extends PlayerEventPayload {
    code: number;
    reason: string;
    byRemote: boolean;
}
export type PlayerState = {
    /** Unix timestamp when the position was picked */
    time: number;
    /** Track position in ms */
    position?: number;
    /** Whether the player is connected to discord voice gateway */
    connected: boolean;
};
