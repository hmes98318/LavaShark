import { parse } from "node-html-parser";
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


export default class Spotify extends AbstractExternalSource {
    public static readonly SPOTIFY_REGEX = /^(?:https?:\/\/(?:open\.)?spotify\.com|spotify)[/:](?:intl-[a-zA-Z]+\/)?(?<type>track|album|playlist|artist)[/:](?<id>[a-zA-Z0-9]+)/;

    private static readonly USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36';

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
            console.error('Error renewing Spotify token:', error);
            await this.getTokenFallback();
        }
    }

    private async getTokenFallback() {
        try {
            const response = await fetch("https://open.spotify.com/");
            const body = await response.text();
            const token = body.match(/"accessToken":"(.+?)"/)?.[1];
            const expiresAfter = Number(body.match(/"accessTokenExpirationTimestampMs":(\d+)/)?.[1]) || 1000 * 60 * 60;

            if (!token) throw new Error("Failed to retrieve access token from Spotify.");

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

    private calculateToken(hex: Array<number>) {
        const token = hex.map((v, i) => v ^ ((i % 33) + 9));
        const bufferToken = Buffer.from(token.join(""), "utf8").toString("hex");

        return Secret.fromHex(bufferToken);
    }

    /**
     * The function that generates an anonymous token is adapted from the iTsMaaT/discord-player-spotify repository.
     * Source: https://github.com/iTsMaaT/discord-player-spotify
     * Commit: ece41db6390e0f22eb8e6008e8892851425a0142
     *
     * The original code is licensed under the MIT License.
     */
    private async getAccessTokenUrl() {
        if (this.auth) return "https://accounts.spotify.com/api/token?grant_type=client_credentials";

        const token = this.calculateToken([12, 56, 76, 33, 88, 44, 88, 33, 78, 78, 11, 66, 22, 22, 55, 69, 54]);

        const spotifyHtml = await fetch("https://open.spotify.com", {
            headers: {
                "User-Agent": Spotify.USER_AGENT,
            },
        }).then((v) => v.text());

        const root = parse(spotifyHtml);
        const scriptTags = root.querySelectorAll("script");
        const playerSrc = scriptTags.find((v) => v.getAttribute("src")?.includes("web-player/web-player."))?.getAttribute("src");

        if (!playerSrc) throw new Error("Could not find player script source");


        const playerScript = await fetch(playerSrc, {
            headers: {
                Dnt: "1",
                Referer: "https://open.spotify.com/",
                "User-Agent": Spotify.USER_AGENT,
            },
        }).then((v) => v.text());

        const versionMatch = playerScript.match(/buildVer["']?\s*:\s*["']?([^,"'}\s]+)["']?,\s*buildDate["']?\s*:\s*["']?([^,"'}\s]+)["']?/);

        if (!versionMatch)
            throw new Error("Could not extract buildVer/buildDate from player script");

        const version = {
            buildVer: versionMatch[1],
            buildDate: versionMatch[2],
        };

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
        searchParams.set("buildVer", version.buildVer);
        searchParams.set("buildDate", version.buildDate);

        return url;
    }

    private async getAnonymousToken() {
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
        } catch (error) {
            // Let the error propagate up to try the fallback method
            console.error('Error getting Spotify anonymous token:', error);
            throw error;
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