import type { Dispatcher } from "undici";
import type Track from "../lib/queue/Track";
import type UnresolvedTrack from "../lib/queue/UnresolvedTrack";
import type { FilterOptions } from "./Filter.types";
import type { ITrack, PlaylistInfo } from "./Track.types";
export type UpdatePlayerOptions = {
    track?: {
        encoded?: string | null;
        identifier?: string;
    };
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
    loadType: 'track' | 'playlist' | 'search' | 'empty' | 'error';
    playlistInfo?: PlaylistInfo;
    exception?: LoadException;
};
export type LoadTracksResult = LoadResultBase & {
    data: ITrack[];
};
export type PlaylistData = {
    info: PlaylistInfo;
    pluginInfo: object;
    tracks: ITrack[];
};
export type PlaylistLoadResult = Omit<LoadResultBase, 'loadType'> & {
    loadType: 'playlist';
    data: PlaylistData;
};
export type SearchResult = LoadResultBase & {
    tracks: Array<Track | UnresolvedTrack>;
};
