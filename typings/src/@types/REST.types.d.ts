import type { Dispatcher } from "undici";
import type Track from "../lib/queue/Track";
import type UnresolvedTrack from "../lib/queue/UnresolvedTrack";
import type { FilterOptions } from "./Filter.types";
import type { ITrack, PlaylistInfo } from "./Track.types";
export type UpdatePlayerOptions = {
    encodedTrack?: string | null;
    position?: number;
    endTime?: number;
    volume?: number;
    paused?: boolean;
    filters?: FilterOptions;
    voice?: {
        sessionId: string;
        token: string;
        endpoint: string;
    };
    noReplace?: boolean;
};
export type LavalinkRESTError = {
    timestamp: number;
    status: number;
    error: string;
    trace?: string;
    message: string;
    path: string;
};
export type RequestOptions = {
    path: string;
    method: Dispatcher.HttpMethod;
    json?: unknown;
    headers?: Record<string, string>;
};
export type LoadException = {
    message: string;
    severity: 'COMMON' | 'SUSPIOUS' | 'FAULT';
};
export type LoadResultBase = {
    loadType: 'TRACK_LOADED' | 'PLAYLIST_LOADED' | 'SEARCH_RESULT' | 'NO_MATCHES' | 'LOAD_FAILED';
    playlistInfo: PlaylistInfo;
    exception?: LoadException;
};
export type LoadTracksResult = LoadResultBase & {
    tracks: ITrack[];
};
export type SearchResult = LoadResultBase & {
    tracks: Array<Track | UnresolvedTrack>;
};
