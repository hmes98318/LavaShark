import { AbstractExternalSource } from './AbstractExternalSource';
import LavaShark from '../LavaShark';
import type { SearchResult } from '../../@types';
export default class Spotify extends AbstractExternalSource {
    static readonly SPOTIFY_REGEX: RegExp;
    private static readonly USER_AGENT;
    /**
     * Secrets URL from https://github.com/Thereallo1026/spotify-secrets
     */
    private readonly SECRETS_URL;
    private readonly CACHE_DURATION;
    private cachedSecrets;
    private secretsCacheTime;
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
    private getTokenFallback;
    private buildTokenUrl;
    private calculateToken;
    /**
     * Fetch the latest secrets from remote URL
     */
    private fetchSecretsFromRemote;
    /**
     * Get secrets (prioritize cache, re-fetch when expired)
     */
    private getSecrets;
    /**
     * Randomly select an available secret
     */
    private getRandomSecret;
    /**
     * Force refresh secrets cache
     */
    private refreshSecrets;
    /**
     * The function that generates an anonymous token is adapted from the iTsMaaT/discord-player-spotify repository.
     * Source: https://github.com/iTsMaaT/discord-player-spotify
     * Commit: ece41db6390e0f22eb8e6008e8892851425a0142
     *
     * The original code is licensed under the MIT License.
     */
    private getAccessTokenUrl;
    private getAnonymousToken;
    private getToken;
}
