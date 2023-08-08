/// <reference types="node" />
import Node from '../Node';
import type { Info, ITrack, LoadTracksResult, NodeStats, RequestOptions, RoutePlannerStatus, TrackInfo, UpdatePlayerOptions } from '../../@types';
export declare class RESTController {
    private readonly node;
    private readonly restUrl;
    private _sessionId;
    set setSessionId(sessionId: string);
    constructor(node: Node);
    decodeTrack(encodedTrack: string): Promise<TrackInfo>;
    decodeTracks(encodedTracks: string[]): Promise<ITrack[]>;
    getRoutePlannerStatus(): Promise<RoutePlannerStatus>;
    freeRoutePlannerAddress(address: string): Promise<void>;
    freeAllRoutePlannerAddresses(): Promise<void>;
    loadTracks(identifier: string): Promise<LoadTracksResult>;
    updateSession(resumeKey: string, timeout?: number): Promise<void>;
    destroyPlayer(guildId: string): Promise<void>;
    updatePlayer(guildId: string, options: UpdatePlayerOptions): Promise<void>;
    version(): Promise<Buffer>;
    info(): Promise<Info>;
    stats(): Promise<NodeStats>;
    request<T = unknown>(options: RequestOptions): Promise<T>;
}
