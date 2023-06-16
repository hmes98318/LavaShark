import Track from './Track';
import { LavaShark } from '../LavaShark';
export default class UnresolvedTrack {
    private readonly lavashark;
    readonly title: string;
    readonly author: string;
    readonly duration: number;
    readonly uri: string;
    readonly source: string;
    requester: unknown;
    private readonly isrc;
    constructor(lavashark: LavaShark, title: string, author: string, duration?: number, uri?: string, source?: string, isrc?: string);
    get query(): string;
    build(): Promise<Track>;
    setRequester(requester: unknown): void;
}
