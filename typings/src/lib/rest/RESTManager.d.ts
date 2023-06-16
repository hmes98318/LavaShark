/// <reference types="node" />
import Node from '../Node';
import { Info, ITrack, LoadTracksResult, RequestOptions, RoutePlannerStatus, TrackInfo, UpdatePlayerOptions } from '../../@types';
export declare class RESTManager {
    #private;
    private readonly node;
    private readonly restUrl;
    set sessionId(sessionId: string);
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
    info(): Promise<Info>;
    version(): Promise<Buffer>;
    request<T = unknown>(options: RequestOptions): Promise<T>;
}
