import { formatTime } from "../utils/formatTime";

import type { User } from 'discord.js';
import type { ITrack, Metadata, Timestamp } from '../../@types';


export default class Track {
    public readonly identifier: string;
    public readonly uri: string;
    public readonly title: string;
    public readonly author: string;
    public readonly duration: Timestamp;
    public readonly source: string;
    public readonly isSeekable: boolean;
    public readonly isStream: boolean;

    public requester: User | null;
    public position?: number;
    public encodedTrack: string;
    declare public metadata?: Metadata;

    declare private readonly thumbnailUrl?: string;

    constructor(data: ITrack) {
        this.identifier = data.info.identifier;
        if (data.info.thumbnail) this.thumbnailUrl = data.info.thumbnail;
        this.isSeekable = data.info.isSeekable;
        this.author = data.info.author;
        this.duration = {
            label: formatTime(data.info.length),
            value: data.info.length
        };
        this.isStream = data.info.isStream;
        this.source = data.info.sourceName ?? 'unknown';
        this.position = data.info.position;
        this.title = data.info.title;
        this.uri = data.info.uri;

        this.encodedTrack = data.track;
    }

    get thumbnail(): string | null {
        if (this.thumbnailUrl) return this.thumbnailUrl;

        if (this.source === 'youtube') {
            return `https://img.youtube.com/vi/${this.identifier}/sddefault.jpg`;
        }

        return null;
    }

    public setRequester(requester: User | null): void {
        this.requester = requester;
    }
}