import { AbstractExternalSource } from './AbstractExternalSource';
import { LavaShark } from '../LavaShark';
import type { SearchResult } from '../../@types';
export default class Spotify extends AbstractExternalSource {
    static readonly SPOTIFY_REGEX: RegExp;
    private static readonly USER_AGENT;
    private readonly auth;
    private readonly market;
    private token;
    private renewDate;
    constructor(lavashark: LavaShark, clientId?: string, clientSecret?: string, market?: string);
    loadItem(query: string): Promise<SearchResult | null>;
    getTrack(id: string): Promise<SearchResult>;
    getAlbum(id: string): Promise<SearchResult>;
    getPlaylist(id: string): Promise<SearchResult>;
    getArtistTopTracks(id: string): Promise<SearchResult>;
    private handleErrorResult;
    private buildTrack;
    private makeRequest;
    private renewToken;
    private getAnonymousToken;
    private getToken;
}
