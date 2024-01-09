import Track from './Track';
import { LavaShark } from '../LavaShark';
import type { User } from 'discord.js';
import type { Timestamp } from '../../@types';
export default class UnresolvedTrack {
    readonly title: string;
    readonly author: string;
    readonly duration: Timestamp;
    readonly uri: string;
    readonly source: string;
    requester: User | null;
    private readonly isrc;
    private readonly lavashark;
    constructor(lavashark: LavaShark, title: string, author: string, duration?: number, uri?: string, source?: string, isrc?: string);
    get query(): string;
    build(): Promise<Track>;
    setRequester(requester: User | null): void;
}
