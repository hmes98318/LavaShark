import { fetch, request } from 'undici';

import { AbstractExternalSource } from './AbstractExternalSource';
import LavaShark from '../LavaShark';
import UnresolvedTrack from '../queue/UnresolvedTrack';

import type { PlaylistInfo, SearchResult } from '../../@types';


interface IAppleMusicTrack {
    name: string;
    artistName: string;
    isrc: string;
    url: string;
    durationInMillis: number;
}

interface IMusicVideoData {
    attributes: IAppleMusicTrack;
}

interface IMusicVideoResponse {
    data: IMusicVideoData[];
}

interface IAppleMusicArtist {
    data: Array<{
        attributes: {
            name: string;
        }
    }>;
}

interface ISongsResponse {
    data: Array<{
        attributes: IAppleMusicTrack;
    }>;
}

interface IPlaylistData {
    attributes: {
        name: string;
    };
    relationships: {
        tracks: {
            next?: string;
            data: Array<{
                attributes: IAppleMusicTrack;
            }>;
        };
    };
}

interface IAppleMusicList {
    data: IPlaylistData[];
}

interface ITrackList {
    next?: string;
    data: Array<{
        attributes: IAppleMusicTrack;
    }>;
}

interface IAppleMusicError {
    title: string;
    detail: string;
}
interface IErrorResponse {
    errors: IAppleMusicError[];
}

interface IAppleMusicSchemaArtist {
    name?: string;
}

interface IAppleMusicSchemaTrack {
    name?: string;
    duration?: string;
    url?: string;
    byArtist?: IAppleMusicSchemaArtist | IAppleMusicSchemaArtist[];
    creator?: IAppleMusicSchemaArtist | IAppleMusicSchemaArtist[];
}

interface IAppleMusicSchema extends IAppleMusicSchemaTrack {
    '@type'?: string;
    track?: IAppleMusicSchemaTrack[];
    tracks?: IAppleMusicSchemaTrack[];
}

interface IItunesLookupTrack {
    artistName?: string;
    trackId?: number;
    trackName?: string;
    trackTimeMillis?: number;
    trackViewUrl?: string;
}

interface IItunesLookupResponse {
    results: IItunesLookupTrack[];
}

export default class AppleMusic extends AbstractExternalSource {
    public static readonly APPLE_MUSIC_REGEX = /^(?:https?:\/\/|)?(?:music\.)?apple\.com\/(?<storefront>[a-z]{2})\/(?<type>album|playlist|artist|music-video)(?:\/[^/]+)?\/(?<id>[^/?]+)(?:\?i=(?<albumtrackid>\d+))?/;
    private static readonly RENEW_URL = 'https://music.apple.com';
    private static readonly SCRIPTS_REGEX = /<script\b[^>]*\bsrc=["'](?<endpoint>\/assets\/index[^"']+\.js)["'][^>]*>/g;
    private static readonly TOKEN_REGEX = /const \w{2}="(?<token>ey[\w.-]+)"/;

    private static readonly USER_AGENT = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36';

    private token: string | null;
    private renewDate: number;

    constructor(lavashark: LavaShark) {
        super(lavashark);

        this.token = null;
        this.renewDate = 0;
    }

    public async loadItem(query: string): Promise<SearchResult | null> {
        const appleMusicMatch = query.match(AppleMusic.APPLE_MUSIC_REGEX);

        if (!appleMusicMatch || !appleMusicMatch.groups) {
            return null;
        }

        const storefront = appleMusicMatch.groups['storefront'];

        switch (appleMusicMatch.groups['type']) {
            case 'music-video': {
                return this.getMusicVideo(appleMusicMatch.groups['id'], storefront);
            }
            case 'album': {
                if (appleMusicMatch[4]) {
                    return this.getTrack(appleMusicMatch.groups['albumtrackid'], storefront);
                }
                else {
                    return this.getList('ALBUM', appleMusicMatch.groups['id'], storefront);
                }
            }
            case 'playlist': {
                return this.getList('PLAYLIST', appleMusicMatch.groups['id'], storefront);
            }
            case 'artist': {
                return this.getArtistTopTracks(appleMusicMatch.groups['id'], storefront);
            }
        }

        return null;
    }

    public async getMusicVideo(id: string, storefront: string): Promise<SearchResult> {
        const res = await this.makeRequest<IMusicVideoResponse>(`music-videos/${id}`, storefront);

        if (res instanceof AppleMusicError) {
            return this.getPublicPageResult('music-video', id, storefront);
        }

        return {
            loadType: 'track',
            playlistInfo: {} as PlaylistInfo,
            tracks: [this.buildTrack(res.data[0].attributes)],
        };
    }

    public async getTrack(id: string, storefront: string): Promise<SearchResult> {
        const res = await this.makeRequest<ISongsResponse>(`songs/${id}`, storefront);

        if (res instanceof AppleMusicError) {
            return this.getPublicPageResult('song', id, storefront);
        }

        return {
            loadType: 'track',
            playlistInfo: {} as PlaylistInfo,
            tracks: [this.buildTrack(res.data[0].attributes)],
        };
    }

    public async getList(type: 'ALBUM' | 'PLAYLIST', id: string, storefront: string): Promise<SearchResult> {
        const unresolvedTracks: UnresolvedTrack[] = [];
        const res = await this.makeRequest<IAppleMusicList>(`${type === 'ALBUM' ? 'albums' : 'playlists'}/${id}`, storefront);

        if (res instanceof AppleMusicError) {
            return this.getPublicPageResult(
                type === 'ALBUM' ? 'album' : 'playlist', id, storefront);
        }

        const title = res.data[0].attributes.name;
        let next = res.data[0].relationships.tracks.next;

        for (const it of res.data[0].relationships.tracks.data) {
            unresolvedTracks.push(this.buildTrack(it.attributes));
        }

        while (next && unresolvedTracks.length < 400) {
            const nextRes = await this.makeRequest<ITrackList>(next.split('/').slice(4).join('/'), storefront);

            if (nextRes instanceof AppleMusicError) {
                return this.handleErrorResult(nextRes);
            }

            next = nextRes.next;

            for (const it of nextRes.data) {
                unresolvedTracks.push(this.buildTrack(it.attributes));
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

    public async getArtistTopTracks(id: string, storefront: string): Promise<SearchResult> {
        const artistRes = await this.makeRequest<IAppleMusicArtist>(`artists/${id}`, storefront);

        const unresolvedTracks: UnresolvedTrack[] = [];

        const res = await this.makeRequest<ISongsResponse>(`artists/${id}/view/top-songs`, storefront);

        if (res instanceof AppleMusicError) {
            return this.getPublicPageResult('artist', id, storefront);
        }

        if (artistRes instanceof AppleMusicError) {
            return this.getPublicPageResult('artist', id, storefront);
        }

        for (const it of res.data) {
            unresolvedTracks.push(this.buildTrack(it.attributes));
        }

        return {
            loadType: 'playlist',
            playlistInfo: {
                name: `${artistRes.data[0].attributes.name}'s top tracks`,
                duration: unresolvedTracks.reduce((acc, curr) => acc + curr.duration.value, 0),
                selectedTrack: 0
            },
            tracks: unresolvedTracks
        };
    }

    private handleErrorResult(error: AppleMusicError): SearchResult {
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

    private buildTrack({ name, artistName, url, durationInMillis, isrc }: IAppleMusicTrack): UnresolvedTrack {
        return new UnresolvedTrack(
            this.lavashark,
            name,
            artistName,
            durationInMillis,
            url,
            'apple-music',
            isrc
        );
    }

    private async getPublicPageResult(
        type: 'album' | 'artist' | 'music-video' | 'playlist' | 'song',
        id: string,
        storefront: string
    ): Promise<SearchResult> {
        try {
            const response = await fetch(
                `https://music.apple.com/${storefront}/${type}/_/${id}`,
                { headers: { 'User-Agent': AppleMusic.USER_AGENT } }
            );

            if (!response.ok) {
                return this.handleErrorResult(this.createPublicPageError(
                    `Apple Music public page returned HTTP ${response.status}`
                ));
            }

            const html = await response.text();
            const schemas = [...html.matchAll(
                /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>(?<json>[\s\S]*?)<\/script>/g
            )];
            const schema = schemas
                .map(match => AppleMusic.parseSchema(match.groups?.['json']))
                .find(candidate => candidate?.name);

            if (!schema) {
                return this.handleErrorResult(this.createPublicPageError(
                    'Could not parse Apple Music public page metadata'
                ));
            }

            let unresolvedTracks: UnresolvedTrack[];

            if (type === 'artist') {
                unresolvedTracks = await this.getPublicArtistTracks(html, storefront);
            } else {
                const schemaTracks = type === 'song' || type === 'music-video'
                    ? [schema]
                    : schema.tracks ?? schema.track ?? [];
                const limitedTracks = schemaTracks.slice(0, 400);
                const trackIds = limitedTracks
                    .map(track => AppleMusic.getTrackId(track.url))
                    .filter((trackId): trackId is string => Boolean(trackId));
                const lookupTracks = await this.lookupItunesTracks(trackIds, storefront);
                const defaultArtist = AppleMusic.getArtistName(schema.byArtist ?? schema.creator);
                unresolvedTracks = limitedTracks
                    .map(track => this.buildPublicPageTrack(
                        track, lookupTracks, defaultArtist))
                    .filter((track): track is UnresolvedTrack => Boolean(track));
            }

            if (unresolvedTracks.length === 0) {
                return this.handleErrorResult(this.createPublicPageError(
                    'Apple Music public page returned no usable tracks'
                ));
            }

            if (type === 'song' || type === 'music-video') {
                return {
                    loadType: 'track',
                    playlistInfo: {} as PlaylistInfo,
                    tracks: [unresolvedTracks[0]]
                };
            }

            const title = type === 'artist'
                ? `${schema.name}'s top tracks`
                : schema.name ?? '';
            return {
                loadType: 'playlist',
                playlistInfo: {
                    name: title,
                    duration: unresolvedTracks.reduce(
                        (total, track) => total + track.duration.value, 0),
                    selectedTrack: 0
                },
                tracks: unresolvedTracks
            };
        } catch (error) {
            return this.handleErrorResult(this.createPublicPageError(
                error instanceof Error ? error.message : String(error)
            ));
        }
    }

    private async getPublicArtistTracks(html: string, storefront: string): Promise<UnresolvedTrack[]> {
        // Artist JSON-LD omits songs; the web player's Top Songs section includes full durations.
        const match = html.match(
            /<script\b[^>]*\bid=["']serialized-server-data["'][^>]*>(?<json>[\s\S]*?)<\/script>/
        );
        const json = match?.groups?.['json'];
        if (!json) return [];

        const payload: unknown = JSON.parse(json);
        if (!AppleMusic.isObject(payload) || !Array.isArray(payload.data)) return [];

        const tracks: Array<{
            title: string;
            duration: number;
            url: string;
        }> = [];
        for (const page of payload.data) {
            if (!AppleMusic.isObject(page) || !AppleMusic.isObject(page.data) ||
                !Array.isArray(page.data.sections)) continue;

            for (const section of page.data.sections) {
                if (!AppleMusic.isObject(section) ||
                    section.itemKind !== 'artistFeaturedContentAndTracks' ||
                    !Array.isArray(section.items)) continue;

                for (const item of section.items) {
                    if (!AppleMusic.isObject(item) || !Array.isArray(item.tracks)) continue;

                    for (const track of item.tracks) {
                        if (tracks.length === 400) break;
                        if (!AppleMusic.isObject(track)) continue;

                        const descriptor = track.contentDescriptor;
                        if (!AppleMusic.isObject(descriptor) || descriptor.kind !== 'song' ||
                            typeof descriptor.url !== 'string' || !descriptor.url ||
                            typeof track.title !== 'string' || !track.title ||
                            typeof track.duration !== 'number' ||
                            !Number.isFinite(track.duration) || track.duration <= 0) continue;

                        tracks.push({
                            title: track.title,
                            duration: track.duration,
                            url: descriptor.url,
                        });
                    }
                }
            }
        }

        const trackIds = tracks
            .map(track => AppleMusic.getTrackId(track.url))
            .filter((id): id is string => Boolean(id));
        const lookupTracks = await this.lookupItunesTracks(trackIds, storefront);

        return tracks.map(track => {
            const id = AppleMusic.getTrackId(track.url);
            const artistName = id ? lookupTracks.get(id)?.artistName : undefined;

            // Artist pages also include guest appearances credited to other artists.
            if (!artistName) {
                throw new Error(`Could not determine the author of Apple Music track ${track.url}`);
            }

            return new UnresolvedTrack(
                this.lavashark,
                track.title,
                artistName,
                track.duration,
                track.url,
                'apple-music'
            );
        });
    }

    private async lookupItunesTracks(
        trackIds: string[],
        storefront: string
    ): Promise<Map<string, IItunesLookupTrack>> {
        const tracks = new Map<string, IItunesLookupTrack>();

        for (let offset = 0; offset < trackIds.length; offset += 100) {
            const ids = trackIds.slice(offset, offset + 100);
            const url = new URL('https://itunes.apple.com/lookup');
            url.searchParams.set('id', ids.join(','));
            url.searchParams.set('country', storefront);

            const response = await fetch(url, {
                headers: { 'User-Agent': AppleMusic.USER_AGENT }
            });
            if (!response.ok) continue;

            const payload = await response.json() as IItunesLookupResponse;
            for (const track of payload.results) {
                if (track.trackId !== undefined) {
                    tracks.set(String(track.trackId), track);
                }
            }
        }

        return tracks;
    }

    private buildPublicPageTrack(
        schemaTrack: IAppleMusicSchemaTrack,
        lookupTracks: Map<string, IItunesLookupTrack>,
        defaultArtist?: string
    ): UnresolvedTrack | null {
        const id = AppleMusic.getTrackId(schemaTrack.url);
        const lookupTrack = id ? lookupTracks.get(id) : undefined;
        const title = lookupTrack?.trackName ?? schemaTrack.name;
        const artist = lookupTrack?.artistName ??
            AppleMusic.getArtistName(
                schemaTrack.byArtist ?? schemaTrack.creator) ??
            defaultArtist;
        const duration = lookupTrack?.trackTimeMillis ??
            AppleMusic.parseIsoDuration(schemaTrack.duration);
        const url = lookupTrack?.trackViewUrl ?? schemaTrack.url;

        if (!title || !artist || duration === undefined || !url) {
            return null;
        }

        return new UnresolvedTrack(
            this.lavashark,
            title,
            artist,
            duration,
            url,
            'apple-music'
        );
    }

    private createPublicPageError(message: string): AppleMusicError {
        return new AppleMusicError({
            errors: [{ title: 'Apple Music public page error', detail: message }]
        });
    }

    private static parseSchema(json: string | undefined): IAppleMusicSchema | null {
        if (!json) return null;

        try {
            const schema = JSON.parse(json) as unknown;
            return typeof schema === 'object' && schema !== null
                ? schema as IAppleMusicSchema
                : null;
        } catch {
            return null;
        }
    }

    private static isObject(value: unknown): value is Record<string, unknown> {
        return typeof value === 'object' && value !== null && !Array.isArray(value);
    }

    private static getTrackId(url: string | undefined): string | undefined {
        // Album URLs identify the song with i; the numeric path identifies the album.
        return url?.match(/[?&]i=(\d+)(?:[&#]|$)/)?.[1] ??
            url?.match(/\/(\d+)(?:[?#]|$)/)?.[1];
    }

    private static getArtistName(
        artist: IAppleMusicSchemaArtist | IAppleMusicSchemaArtist[] | undefined
    ): string | undefined {
        if (Array.isArray(artist)) {
            const names = artist
                .map(item => item.name)
                .filter((name): name is string => Boolean(name));
            return names.length > 0 ? names.join(', ') : undefined;
        }

        return artist?.name;
    }

    private static parseIsoDuration(duration: string | undefined): number | undefined {
        const match = duration?.match(
            /^PT(?:(?<hours>\d+)H)?(?:(?<minutes>\d+)M)?(?:(?<seconds>\d+(?:\.\d+)?)S)?$/
        );
        if (!match?.groups) return undefined;

        const hours = Number(match.groups['hours'] ?? 0);
        const minutes = Number(match.groups['minutes'] ?? 0);
        const seconds = Number(match.groups['seconds'] ?? 0);
        return Math.round((hours * 3600 + minutes * 60 + seconds) * 1000);
    }

    private async makeRequest<T>(endpoint: string, storefront: string): Promise<T | AppleMusicError> {
        if (!this.token || this.renewDate === 0 || Date.now() > this.renewDate) await this.renewToken();

        const res = await request(`https://api.music.apple.com/v1/catalog/${storefront}/${endpoint}`, {
            headers: {
                'User-Agent': AppleMusic.USER_AGENT,
                Authorization: `Bearer ${this.token}`,
                Origin: 'https://music.apple.com',
                Referer: 'https://music.apple.com/'
            }
        });
        const body = await res.body.text();

        if (!body) {
            return new AppleMusicError({
                errors: [{
                    title: `HTTP ${res.statusCode}`,
                    detail: `Apple Music API returned HTTP ${res.statusCode} with an empty response`
                }]
            });
        }

        let payload: unknown;
        try {
            payload = JSON.parse(body) as unknown;
        } catch {
            return new AppleMusicError({
                errors: [{
                    title: `HTTP ${res.statusCode}`,
                    detail: `Apple Music API returned invalid JSON with HTTP ${res.statusCode}`
                }]
            });
        }

        return res.statusCode === 200
            ? payload as T
            : new AppleMusicError(payload as IErrorResponse);
    }

    private async renewToken() {
        const response = await fetch(AppleMusic.RENEW_URL + '/us/browse', {
            headers: {
                'User-Agent': AppleMusic.USER_AGENT
            },
        });

        if (!response.ok) {
            throw new Error(
                `Could not load Apple Music token page: HTTP ${response.status}`
            );
        }

        const html = await response.text();

        const scriptsMatch = [...html.matchAll(AppleMusic.SCRIPTS_REGEX)];

        if (!scriptsMatch.length) {
            throw new Error('Could not get Apple Music token scripts!');
        }

        for (const scriptMatch of scriptsMatch) {
            const script = await request(`${AppleMusic.RENEW_URL}${scriptMatch[1]}`, {
                headers: {
                    'User-Agent': AppleMusic.USER_AGENT
                }
            }).then(r => r.body.text());

            const tokenMatch = script.match(AppleMusic.TOKEN_REGEX);

            if (tokenMatch) {
                this.token = tokenMatch.groups?.['token'] ?? null;
                break;
            }
        }

        if (!this.token) {
            throw new Error('Could not get Apple Music token!');
        }

        // 2 months but just in case ;)
        this.renewDate = JSON.parse(Buffer.from(this.token.split('.')[1], 'base64').toString()).exp * 1000;
    }
}

class AppleMusicError implements IAppleMusicError {
    readonly title: string;
    readonly detail: string;

    constructor(errorRes: IErrorResponse) {
        this.title = errorRes.errors[0].title;
        this.detail = errorRes.errors[0].detail;
    }

    toString(): string {
        return `AppleMusicError: ${this.detail ?? this.title}`;
    }
}
