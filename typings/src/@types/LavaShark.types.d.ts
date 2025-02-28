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
export type LavaSharkEvents = {
    'debug': (message: string) => void;
    'raw': (node: Node, payload: unknown) => void;
    'nodeConnect': (node: Node) => void;
    'nodeResume': (node: Node) => void;
    'nodeDisconnect': (node: Node, code: number, reason: string) => void;
    'warn': (node: Node, warn: string) => void;
    'error': (node: Node, error: Error) => void;
    'trackAdd': (player: Player, tracks: Track | UnresolvedTrack | Array<Track | UnresolvedTrack>) => void;
    'trackStart': (player: Player, track: Track) => void;
    'trackEnd': (player: Player, track: Track, reason: TrackEndReason) => void;
    'trackStuck': (player: Player, track: Track, thresholdMs: number) => void;
    'trackException': (player: Player, track: Track | UnresolvedTrack, exception: LoadException & {
        cause: string;
    }) => void;
    'playerConnect': (player: Player) => void;
    'playerCreate': (player: Player) => void;
    'playerDestroy': (player: Player) => void;
    'playerDisconnect': (player: Player, code: number, reason: string) => void;
    'queueEnd': (player: Player) => void;
    'pong': (node: Node, buffer: Buffer) => void;
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
