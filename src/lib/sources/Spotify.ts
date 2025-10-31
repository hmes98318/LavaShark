import { Secret, TOTP } from "otpauth";
import { request } from 'undici';

import { AbstractExternalSource } from './AbstractExternalSource';
import LavaShark from '../LavaShark';
import UnresolvedTrack from '../queue/UnresolvedTrack';

import type { PlaylistInfo, SearchResult } from '../../@types';


interface IAnonymousTokenResponse {
    clientId: string;
    accessToken: string;
    accessTokenExpirationTimestampMs: number;
}
interface IRenewResponse {
    token_type: string;
    access_token: string;
    expires_in: number;
}

interface ISpotifyTrack {
    name: string;
    artists: Array<{
        id: string;
        name: string;
    }>;
    external_urls: {
        spotify: string;
    };
    external_ids?: {
        isrc: string;
    }
    duration_ms: number;
}

interface ISpotifyAlbumTracks {
    items: ISpotifyTrack[];
    next: null | string;
}

interface ISpotifyAlbum {
    name: string;
    tracks: ISpotifyAlbumTracks;
}

interface ISpotifyPlaylistTracks {
    items: Array<{
        track: ISpotifyTrack | null;
    }>;
    next: null | string;
}

interface ISpotifyPlaylist {
    name: string;
    tracks: ISpotifyPlaylistTracks;
}

interface ISpotifyError {
    message: string;
}

interface ISpotifySecret {
    version: number;
    secret: number[];
}


export default class Spotify extends AbstractExternalSource {
    public static readonly SPOTIFY_REGEX = /^(?:https?:\/\/(?:open\.)?spotify\.com|spotify)[/:](?:intl-[a-zA-Z]+\/)?(?<type>track|album|playlist|artist)[/:](?<id>[a-zA-Z0-9]+)/;

    private static readonly USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36';

    /**
     * Secrets URL from https://github.com/xyloflake/spot-secrets-go
     */
    private readonly SECRETS_URL = 'https://raw.githubusercontent.com/xyloflake/spot-secrets-go/refs/heads/main/secrets/secretBytes.json';
    private readonly CACHE_DURATION = 30 * 60 * 1000;   // 30 minutes

    private cachedSecrets: ISpotifySecret[] | null = null;
    private secretsCacheTime: number = 0;

    private readonly auth: string | null;
    private readonly market: string;

    private token: string | null;
    private renewDate: number;

    constructor(lavashark: LavaShark, clientId?: string, clientSecret?: string, market = 'US') {
        super(lavashark);

        if (clientId && clientSecret) {
            this.auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
        }
        else {
            this.auth = null;
        }

        this.market = market;

        this.token = null;
        this.renewDate = 0;
    }

    public async loadItem(query: string): Promise<SearchResult | null> {
        const spotifyMatch = query.match(Spotify.SPOTIFY_REGEX);

        if (!spotifyMatch || !spotifyMatch.groups) {
            return null;
        }

        switch (spotifyMatch.groups['type']) {
            case 'track': {
                return this.getTrack(spotifyMatch.groups['id']);
            }
            case 'album': {
                return this.getAlbum(spotifyMatch.groups['id']);
            }
            case 'playlist': {
                return this.getPlaylist(spotifyMatch.groups['id']);
            }
            case 'artist': {
                return this.getArtistTopTracks(spotifyMatch.groups['id']);
            }
        }

        return null;
    }

    public async getTrack(id: string): Promise<SearchResult> {
        const res = await this.makeRequest<ISpotifyTrack>(`tracks/${id}`);

        if (res instanceof SpotifyError) {
            return this.handleErrorResult(res);
        }

        return {
            loadType: 'track',
            playlistInfo: {} as PlaylistInfo,
            tracks: [this.buildTrack(res)],
        };
    }

    public async getAlbum(id: string): Promise<SearchResult> {
        const unresolvedTracks: UnresolvedTrack[] = [];

        let res: ISpotifyAlbum | ISpotifyAlbumTracks | SpotifyError = await this.makeRequest<ISpotifyAlbum>(`albums/${id}`);

        if (res instanceof SpotifyError) {
            return this.handleErrorResult(res);
        }

        const title = res.name;

        for (const it of res.tracks.items) {
            if (it === null) continue;

            unresolvedTracks.push(this.buildTrack(it));
        }

        let next = res.tracks.next !== null;

        while (next && unresolvedTracks.length < 400) {
            res = await this.makeRequest<ISpotifyAlbumTracks>(`albums/${id}/tracks?offset=${unresolvedTracks.length}&limit=50`);

            if (res instanceof SpotifyError) {
                return this.handleErrorResult(res);
            }

            next = res.next !== null;

            for (const it of res.items) {
                unresolvedTracks.push(this.buildTrack(it));
            }
        }

        return {
            loadType: 'playlist',
            playlistInfo: {
                name: title,
                duration: unresolvedTracks.reduce((acc, curr) => acc + curr.duration.value, 0),
                selectedTrack: 0
            },
            tracks: unresolvedTracks,
        };
    }

    public async getPlaylist(id: string): Promise<SearchResult> {
        const unresolvedTracks: UnresolvedTrack[] = [];

        let res: ISpotifyPlaylist | ISpotifyPlaylistTracks | SpotifyError = await this.makeRequest<ISpotifyPlaylist>(`playlists/${id}`);

        if (res instanceof SpotifyError) {
            return this.handleErrorResult(res);
        }

        const title = res.name;

        for (const it of res.tracks.items) {
            if (it.track === null) continue;

            unresolvedTracks.push(this.buildTrack(it.track));
        }

        let next = res.tracks.next !== null;

        while (next && unresolvedTracks.length < 400) {
            res = await this.makeRequest<ISpotifyPlaylistTracks>(`playlists/${id}/tracks?offset=${unresolvedTracks.length}`);

            if (res instanceof SpotifyError) {
                return this.handleErrorResult(res);
            }

            next = res.next !== null;

            for (const it of res.items) {
                if (it.track === null) continue;

                unresolvedTracks.push(this.buildTrack(it.track));
            }
        }

        return {
            loadType: 'playlist',
            playlistInfo: {
                name: title,
                duration: unresolvedTracks.reduce((acc, curr) => acc + curr.duration.value, 0),
                selectedTrack: 0
            },
            tracks: unresolvedTracks,
        };
    }

    public async getArtistTopTracks(id: string): Promise<SearchResult> {
        const res = await this.makeRequest<{ tracks: ISpotifyTrack[] }>(`artists/${id}/top-tracks?market=${this.market}`);

        if (res instanceof SpotifyError) {
            return this.handleErrorResult(res);
        }

        const tracks = res.tracks.map(t => this.buildTrack(t));

        return {
            loadType: 'playlist',
            playlistInfo: {
                name: `${res.tracks[0].artists.find(a => a.id === id)?.name ?? ''} Top Tracks`,
                duration: tracks.reduce((acc, curr) => acc + curr.duration.value, 0),
                selectedTrack: 0
            },
            tracks: tracks
        };
    }

    private handleErrorResult(error: SpotifyError): SearchResult {
        return {
            loadType: 'error',
            playlistInfo: {} as PlaylistInfo,
            tracks: [],
            exception: {
                message: error.toString(),
                severity: 'SUSPIOUS'
            }
        };
    }

    private buildTrack({ name, artists, external_urls: { spotify }, external_ids, duration_ms }: ISpotifyTrack): UnresolvedTrack {
        const artistNames = artists.map(({ name }) => name).join(', ');

        return new UnresolvedTrack(
            this.lavashark,
            name,
            artistNames,
            duration_ms,
            spotify,
            'spotify',
            external_ids?.isrc
        );
    }

    private async makeRequest<T>(endpoint: string): Promise<T | SpotifyError> {
        if (!this.token || this.renewDate === 0 || Date.now() > this.renewDate) await this.renewToken();

        const res = await request(`https://api.spotify.com/v1/${endpoint}`, {
            headers: {
                Authorization: this.token as string,
                Referer: "https://open.spotify.com/",
                Origin: "https://open.spotify.com",
            }
        }).then(r => r.body.json()) as any;

        if (res.error) {
            return new SpotifyError(res.error.message);
        }

        return res as T;
    }

    private async renewToken() {
        try {
            if (this.auth) {
                await this.getToken();
            } else {
                await this.getAnonymousToken();
            }
        } catch (error) {
            // Try fallback method
            this.lavashark.emit('debug', `[Spotify] Error getting Spotify anonymous token: ${error}`);
            await this.getTokenFallback();
        }
    }

    private async getTokenFallback() {
        try {
            const response = await fetch("https://open.spotify.com/", {
                headers: {
                    "User-Agent": Spotify.USER_AGENT,
                    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
                    "Accept-Language": "en-US,en;q=0.5",
                    "Accept-Encoding": "gzip, deflate, br",
                    "DNT": "1",
                    "Connection": "keep-alive",
                    "Upgrade-Insecure-Requests": "1"
                }
            });

            const body = await response.text();

            // Trying multiple patterns to extract the token
            let token = body.match(/"accessToken":"([^"]+)"/)?.[1];

            if (!token) {
                token = body.match(/accessToken["']?\s*:\s*["']([^"']+)["']/)?.[1];
            }
            if (!token) {
                token = body.match(/token["']?\s*:\s*["']([^"']+)["']/)?.[1];
            }


            // Trying multiple patterns to extract the expiration time
            let expiresAfter = Number(body.match(/"accessTokenExpirationTimestampMs":(\d+)/)?.[1]);
            if (!expiresAfter) {
                expiresAfter = Number(body.match(/accessTokenExpirationTimestampMs["']?\s*:\s*(\d+)/)?.[1]);
            }
            if (!expiresAfter) {
                // Default to 1 hour
                expiresAfter = Date.now() + 1000 * 60 * 60;
            }


            if (!token) throw new Error("Could not extract access token from Spotify homepage");

            this.token = `Bearer ${token}`;
            this.renewDate = expiresAfter - 5000;
        } catch (error) {
            throw new Error("Failed to retrieve access token from Spotify.");
        }
    }

    private buildTokenUrl() {
        const baseUrl = new URL("https://open.spotify.com/api/token");

        baseUrl.searchParams.set("reason", "init");
        baseUrl.searchParams.set("productType", "web-player");

        return baseUrl;
    }

    private calculateToken(hex: Array<number>, version: number) {
        const token = hex.map((v, i) => v ^ ((i % version) + 9));
        const bufferToken = Buffer.from(token.join(""), "utf8").toString("hex");

        return Secret.fromHex(bufferToken);
    }

    /**
     * Fetch the latest secrets from remote URL
     */
    private async fetchSecretsFromRemote(): Promise<ISpotifySecret[]> {
        try {
            const response = await fetch(this.SECRETS_URL, {
                headers: {
                    'User-Agent': Spotify.USER_AGENT,
                    'Accept': 'application/json',
                    'Cache-Control': 'no-cache'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const secrets = await response.json() as unknown;

            if (!Array.isArray(secrets) || secrets.length === 0) {
                throw new Error('Invalid secrets format received');
            }

            // Validate secrets format
            const validatedSecrets: ISpotifySecret[] = [];
            for (const secret of secrets) {
                if (typeof secret === 'object' && secret !== null &&
                    typeof (secret as any).version === 'number' &&
                    Array.isArray((secret as any).secret)) {
                    validatedSecrets.push(secret as ISpotifySecret);
                } else {
                    throw new Error('Invalid secret format');
                }
            }

            return validatedSecrets;
        } catch (error) {
            this.lavashark.emit('debug', `[Spotify] Failed to fetch secrets from remote: ${error}`);
            throw error;
        }
    }

    /**
     * Get secrets (prioritize cache, re-fetch when expired)
     */
    private async getSecrets(): Promise<ISpotifySecret[]> {
        const now = Date.now();

        // Check if cache is valid
        if (this.cachedSecrets && (now - this.secretsCacheTime) < this.CACHE_DURATION) {
            this.lavashark.emit('debug', '[Spotify] Using cached secrets');
            return this.cachedSecrets;
        }

        try {
            // Try to fetch from remote
            const secrets = await this.fetchSecretsFromRemote();

            // Update cache
            this.cachedSecrets = secrets;
            this.secretsCacheTime = now;

            this.lavashark.emit('debug', `[Spotify] Successfully fetched ${secrets.length} secrets from remote`);
            return secrets;
        } catch (error) {
            this.lavashark.emit('debug', `[Spotify] Failed to fetch remote secrets: ${error}`);

            // If there's old cache, use old cache
            if (this.cachedSecrets) {
                this.lavashark.emit('debug', '[Spotify] Using expired cache as fallback');
                return this.cachedSecrets;
            }

            // No available secrets, throw error
            throw new Error('No secrets available and unable to fetch from remote');
        }
    }

    /**
     * Randomly select an available secret
     */
    private async getRandomSecret(): Promise<ISpotifySecret> {
        const secrets = await this.getSecrets();
        const randomIndex = Math.floor(Math.random() * secrets.length);
        return secrets[randomIndex];
    }

    /**
     * Force refresh secrets cache
     */
    private async refreshSecrets(): Promise<ISpotifySecret[]> {
        try {
            const secrets = await this.fetchSecretsFromRemote();
            this.cachedSecrets = secrets;
            this.secretsCacheTime = Date.now();
            this.lavashark.emit('debug', '[Spotify] Successfully refreshed secrets cache');
            return secrets;
        } catch (error) {
            this.lavashark.emit('debug', `[Spotify] Failed to refresh secrets: ${error}`);
            throw error;
        }
    }

    /**
     * The function that generates an anonymous token is adapted from the iTsMaaT/discord-player-spotify repository.
     * Source: https://github.com/iTsMaaT/discord-player-spotify
     * Commit: ece41db6390e0f22eb8e6008e8892851425a0142
     *
     * The original code is licensed under the MIT License.
     */
    private async getAccessTokenUrl(): Promise<URL | string> {
        if (this.auth) return "https://accounts.spotify.com/api/token?grant_type=client_credentials";

        const selectedSecret = await this.getRandomSecret();
        const token = this.calculateToken(selectedSecret.secret, selectedSecret.version);
        this.lavashark.emit('debug', `[Spotify] Using secret version ${selectedSecret.version}`);

        const url = this.buildTokenUrl();
        const { searchParams } = url;

        const cTime = Date.now();
        const sTime = await fetch("https://open.spotify.com/api/server-time/", {
            headers: {
                Referer: "https://open.spotify.com/",
                Origin: "https://open.spotify.com",
                "User-Agent": Spotify.USER_AGENT,
            },
        })
            .then((v) => v.json())
            .then((v: any) => v.serverTime);

        const totp = new TOTP({
            secret: token,
            period: 30,
            digits: 6,
            algorithm: "SHA1",
        });

        const totpServer = totp.generate({
            timestamp: sTime * 1e3,
        });
        const totpClient = totp.generate({
            timestamp: cTime,
        });

        searchParams.set("sTime", String(sTime));
        searchParams.set("cTime", String(cTime));
        searchParams.set("totp", totpClient);
        searchParams.set("totpServer", totpServer);
        searchParams.set("totpVer", "5");
        searchParams.set("buildVer", String(selectedSecret.version));
        // searchParams.set("buildDate", new Date().toISOString().split('T')[0].replace(/-/g, ''));

        return url;
    }

    private async getAnonymousToken() {
        let retryCount = 0;
        const maxRetries = 2;

        while (retryCount <= maxRetries) {
            try {
                const accessTokenUrl = await this.getAccessTokenUrl();

                const {
                    accessToken,
                    accessTokenExpirationTimestampMs
                } = await request(accessTokenUrl, {
                    headers: {
                        Referer: "https://open.spotify.com/",
                        Origin: "https://open.spotify.com",
                        'User-Agent': Spotify.USER_AGENT
                    }
                }).then(r => r.body.json() as Promise<IAnonymousTokenResponse>);

                if (!accessToken) {
                    throw new Error('Failed to get anonymous token on Spotify.');
                }

                this.token = `Bearer ${accessToken}`;
                this.renewDate = accessTokenExpirationTimestampMs - 5000;

                this.lavashark.emit('debug', '[Spotify] Successfully obtained anonymous token');
                return;
            } catch (error) {
                this.lavashark.emit('debug', `[Spotify] Attempt ${retryCount + 1} failed: ${error}`);

                if (retryCount < maxRetries) {
                    // Refresh secrets on first retry
                    if (retryCount === 0) {
                        this.lavashark.emit('debug', '[Spotify] Refreshing secrets cache and retrying...');
                        try {
                            await this.refreshSecrets();
                        } catch (refreshError) {
                            this.lavashark.emit('debug', `[Spotify] Failed to refresh secrets: ${refreshError}`);
                        }
                    }

                    retryCount++;
                    // Wait for some time before retrying
                    await new Promise(resolve => setTimeout(resolve, 1000 * retryCount));
                } else {
                    // All retries failed, throw error
                    this.lavashark.emit('debug', '[Spotify] All retry attempts failed');
                    throw error;
                }
            }
        }
    }

    private async getToken() {
        const {
            token_type,
            access_token,
            expires_in
        } = await request('https://accounts.spotify.com/api/token?grant_type=client_credentials', {
            method: 'POST',
            headers: {
                Authorization: `Basic ${this.auth}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(r => r.body.json() as Promise<IRenewResponse>);

        this.token = `${token_type} ${access_token}`;
        this.renewDate = Date.now() + expires_in * 1000 - 5000;
    }
}

class SpotifyError implements ISpotifyError {
    readonly message: string;

    constructor(error: string) {
        this.message = error;
    }

    toString(): string {
        return `SpotifyError: ${this.message}`;
    }
}