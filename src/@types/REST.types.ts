import type { Dispatcher } from "undici";
import type Track from "../lib/queue/Track";
import type UnresolvedTrack from "../lib/queue/UnresolvedTrack";
import type { FilterOptions } from "./Filter.types";


export type UpdatePlayerOptions = {
    encodedTrack?: string | null;
    // identifier?: string;
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
}

export type LavalinkRESTError = {
    timestamp: number;
    status: number;
    error: string;
    trace?: string;
    message: string;
    path: string;
}

export type RequestOptions = {
    path: string;
    method: Dispatcher.HttpMethod;
    json?: unknown;
    headers?: Record<string, string>;
}

export type PlaylistInfo = {
    selectedTrack: number;
    name: string;
    duration: number;
};

export type TrackInfo = {
    identifier: string;
    thumbnail?: string;
    isSeekable: boolean;
    author: string;
    length: number;
    isStream: boolean;
    sourceName: string | null;
    position: number;
    title: string;
    uri: string;
};

export interface ITrack {
    track: string;
    info: TrackInfo;
}

export interface Timestamp {
    label: string;
    value: number;
}

export type LoadException = {
    message: string;
    severity: 'COMMON' | 'SUSPIOUS' | 'FAULT';
}

export type LoadResultBase = {
    loadType: 'TRACK_LOADED' | 'PLAYLIST_LOADED' | 'SEARCH_RESULT' | 'NO_MATCHES' | 'LOAD_FAILED';
    playlistInfo: PlaylistInfo;
    exception?: LoadException;
}

export type LoadTracksResult = LoadResultBase & {
    tracks: ITrack[];
}

export type SearchResult = LoadResultBase & {
    tracks: Array<Track | UnresolvedTrack>;
}