import { fetch } from 'undici';

import Node from '../Node';
import {
    DECODE_TRACKS,
    INFO,
    LOAD_TRACKS,
    PLAYER,
    SESSIONS,
    STATS,
    ROUTE_PLANNER_STATUS,
    ROUTE_PLANNER_FREE_ALL,
    ROUTE_PLANNER_FREE_ADDR,
    VERSION
} from './RESTPaths';

import type {
    Info,
    ITrack,
    LavalinkRESTError,
    LoadTracksResult,
    NodeStats,
    RequestOptions,
    RoutePlannerStatus,
    TrackInfo,
    UpdatePlayerOptions,
} from '../../@types';


export class RESTController {
    private readonly restUrl: string;
    private _sessionId: string;

    set setSessionId(sessionId: string) {
        this._sessionId = sessionId;
    }

    constructor(private readonly node: Node) {
        this.restUrl = `http${node.options.secure ? 's' : ''}://${node.options.hostname}:${node.options.port}`;
    }

    public async decodeTrack(encodedTrack: string): Promise<TrackInfo> {
        return this.request({
            method: 'GET',
            path: DECODE_TRACKS() + `?track=${encodeURIComponent(encodedTrack)}`
        });
    }

    public async decodeTracks(encodedTracks: string[]): Promise<ITrack[]> {
        return this.request({
            method: 'POST',
            path: DECODE_TRACKS(),
            json: encodedTracks
        });
    }

    public async getRoutePlannerStatus(): Promise<RoutePlannerStatus> {
        return this.request({
            method: 'GET',
            path: ROUTE_PLANNER_STATUS()
        });
    }

    public async freeRoutePlannerAddress(address: string) {
        await this.request({
            method: 'POST',
            path: ROUTE_PLANNER_FREE_ADDR(),
            json: {
                address
            }
        });
    }

    public async freeAllRoutePlannerAddresses() {
        await this.request({
            method: 'POST',
            path: ROUTE_PLANNER_FREE_ALL()
        });
    }

    public async loadTracks(identifier: string): Promise<LoadTracksResult> {
        return this.request({
            method: 'GET',
            path: LOAD_TRACKS(identifier)
        });
    }

    public async updateSession(resumeKey: string, timeout?: number) {
        await this.request({
            method: 'PATCH',
            path: SESSIONS(this._sessionId),
            json: {
                resumeKey,
                timeout
            }
        });
    }

    public async destroyPlayer(guildId: string) {
        await this.request({
            method: 'DELETE',
            path: PLAYER(this._sessionId, guildId)
        });
    }

    public async updatePlayer(guildId: string, options: UpdatePlayerOptions) {
        let path = PLAYER(this._sessionId, guildId);

        if (options.noReplace) {
            path += '?noReplace=true';
        }
        delete options.noReplace;

        await this.request({
            method: 'PATCH',
            path,
            json: options
        });
    }

    public async version(): Promise<Buffer> {
        return this.request({
            method: 'GET',
            path: VERSION(),
        });
    }

    public async info(): Promise<Info> {
        return this.request({
            method: 'GET',
            path: INFO()
        });
    }

    public async stats(): Promise<NodeStats> {
        return this.request({
            method: 'GET',
            path: STATS(),
        });
    }

    public async request<T = unknown>(options: RequestOptions): Promise<T> {
        const { method, path, json } = options;

        const headers: Record<string, string> = {
            ...options.headers,
            'authorization': this.node.options.password ?? 'youshallnotpass',
        };
        let body: string | null = null;

        if (json) {
            headers['Content-Type'] = 'application/json';
            body = JSON.stringify(json);
        }

        const res = await fetch(`${this.restUrl}${path}`, {
            method,
            headers,
            body
        });

        if (res.status >= 400) {
            if (res.headers.get('content-type') === 'application/json') {
                const error = await res.json() as LavalinkRESTError;

                throw new Error(`Lavalink request failed with status code ${res.status}. Path: ${error.path}. ERROR: ${error.error}: ${error.message}`);
            }
            throw new Error(`Request failed with status code ${res.status}`);
        }


        let resBody;

        if (res.status === 204) {
            resBody = null;
        }
        else if (res.headers.get('content-type') === 'application/json') {
            resBody = await res.json();
        }
        else {
            resBody = Buffer.from(await res.arrayBuffer());
        }

        return resBody as T;
    }
}