import type { ITrack, Metadata, Timestamp } from '../../@types';
export default class Track {
    readonly identifier: string;
    private readonly thumbnailUrl?;
    readonly isSeekable: boolean;
    readonly author: string;
    readonly duration: Timestamp;
    readonly isStream: boolean;
    readonly source: string;
    position?: number;
    readonly title: string;
    readonly uri: string;
    metadata?: Metadata;
    encodedTrack: string;
    requester: unknown;
    constructor(data: ITrack);
    get thumbnail(): string | null;
    setRequester(requester: unknown): void;
}
