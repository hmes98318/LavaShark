/// <reference types="node" />
import type Node from "../lib/Node";
import type Player from "../lib/Player";
import type Track from "../lib/queue/Track";
import type UnresolvedTrack from "../lib/queue/UnresolvedTrack";
import type { NodeOptions, TrackEndReason } from "./Node.types";
import type { LoadException } from "./REST.types";
import type { TrackInfo, Timestamp } from "./Track.types";
export type IncomingDiscordPayload = {
    op: number;
    d?: unknown;
    s?: number;
    t?: string;
};
export type VoiceStateUpdatePayload = IncomingDiscordPayload & {
    t: 'VOICE_STATE_UPDATE';
    d: {
        session_id: string;
        channel_id: string | null;
        user_id: string;
        guild_id: string;
    };
};
export type VoiceServerUpdateData = {
    token: string;
    guild_id: string;
    endpoint: string;
};
export type VoiceServerUpdatePayload = IncomingDiscordPayload & {
    t: 'VOICE_SERVER_UPDATE';
    d: VoiceServerUpdateData;
};
export type Metadata = Pick<TrackInfo, 'title' | 'author' | 'uri'> & {
    duration: Timestamp;
    source: string;
    isrc?: string;
};
/** LavaShark events */
export interface LavaSharkEvents {
    once: EventListeners<this>;
    on: EventListeners<this>;
}
export type EventListeners<T> = {
    (event: 'debug', listener: (message: string) => void): T;
    (event: 'raw', listener: (node: Node, payload: unknown) => void): T;
    (event: 'nodeConnect', listener: (node: Node) => void): T;
    (event: 'nodeResume', listener: (node: Node) => void): T;
    (event: 'nodeDisconnect', listener: (node: Node, code: number, reason: string) => void): T;
    (event: 'warn', listener: (node: Node, warn: string) => void): T;
    (event: 'error', listener: (node: Node, error: Error) => void): T;
    (event: 'trackAdd', listener: (player: Player, tracks: Track | Array<Track>) => void): T;
    (event: 'trackStart', listener: (player: Player, track: Track) => void): T;
    (event: 'trackEnd', listener: (player: Player, track: Track, reason: TrackEndReason) => void): T;
    (event: 'trackStuck', listener: (player: Player, track: Track, thresholdMs: number) => void): T;
    (event: 'trackException', listener: (player: Player, track: Track | UnresolvedTrack, exception: LoadException & {
        cause: string;
    }) => void): T;
    (event: 'playerConnect', listener: (player: Player) => void): T;
    (event: 'playerCreate', listener: (player: Player) => void): T;
    (event: 'playerDestroy', listener: (player: Player) => void): T;
    (event: 'playerDisconnect', listener: (player: Player, code: number, reason: string) => void): T;
    (event: 'queueEnd', listener: (player: Player) => void): T;
    (event: 'pong', listener: (node: Node, buffer: Buffer) => void): T;
};
export type OutgoingDiscordPayload = {
    op: number;
    d: Record<string, unknown>;
};
export type SEARCH_SOURCE = 'youtube' | 'youtubemusic' | 'soundcloud';
export type UNRESOLVED_SOURCES = 'APPLE_MUSIC' | 'DEEZER' | 'SPOTIFY';
export type SpotifyConfig = {
    clientId: string;
    clientSecret: string;
    market?: string;
};
/** Main constructor options */
export type LavaSharkOptions = {
    /** The array of lavalink nodes */
    nodes: NodeOptions[];
    /** Function to send voice channel connect payloads to discord */
    sendWS: (guildId: string, payload: OutgoingDiscordPayload) => void;
    /** The default source to search for tracks */
    defaultSearchSource?: SEARCH_SOURCE;
    /** The default source to search for unresolved tracks */
    unresolvedSearchSource?: SEARCH_SOURCE;
    /** The spotify credentials */
    spotify?: SpotifyConfig;
    /** Disables spotify, apple music or deezer */
    disabledSources?: UNRESOLVED_SOURCES[];
    /** Whether to search for ISRC to resolve tracks or not */
    useISRC?: boolean;
};
