import Track from './Track';
import { LavaShark } from '../LavaShark';
import { formatTime } from "../utils/formatTime";

import type { Timestamp } from '../../@types';


export default class UnresolvedTrack {
    private readonly lavashark: LavaShark;

    public readonly title: string;
    public readonly author: string;
    public readonly duration: Timestamp;
    public readonly uri: string;
    public readonly source: string;
    public requester: unknown;

    declare private readonly isrc: string;

    constructor(lavashark: LavaShark, title: string, author: string, duration?: number, uri?: string, source?: string, isrc?: string) {
        this.lavashark = lavashark;

        this.title = title;
        this.author = author;
        this.duration = {
            label: formatTime(duration ?? 0),
            value: duration ?? 0
        };
        this.uri = uri ?? '';
        this.source = source ?? 'Unknown';

        if (isrc && lavashark.useISRC) this.isrc = isrc;

        this.requester = null;
    }

    get query() {
        return this.isrc ? `"${this.isrc}"` : `${this.author} - ${this.title}`;
    }

    public async build(): Promise<Track> {
        let res = await this.lavashark.search(this.query, this.lavashark.unresolvedSearchSource);

        if (res.loadType !== 'SEARCH_RESULT' || !res.tracks.length) {
            if (!this.isrc) throw new Error(`Failed to resolve track ${this.uri}`);

            res = await this.lavashark.search(`${this.author} - ${this.title}`, this.lavashark.unresolvedSearchSource);

            if (res.loadType !== 'SEARCH_RESULT' || !res.tracks.length) throw new Error(`Failed to resolve track ${this.uri}`);
        }

        const track = res.tracks[0] as Track;
        track.setRequester(this.requester);

        track.metadata = {
            title: this.title,
            author: this.author,
            duration: this.duration,
            uri: this.uri,
            source: this.source,
            isrc: this.isrc,
        };

        return track;
    }

    public setRequester(requester: unknown) {
        this.requester = requester;
    }
}
