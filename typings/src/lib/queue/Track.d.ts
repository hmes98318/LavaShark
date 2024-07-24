import type { User } from 'discord.js';
import type { ITrack, Metadata, Timestamp } from '../../@types';
export default class Track {
    #private;
    readonly identifier: string;
    readonly uri: string;
    readonly title: string;
    readonly author: string;
    readonly duration: Timestamp;
    readonly source: string;
    readonly isSeekable: boolean;
    readonly isStream: boolean;
    requester: User | null;
    position?: number;
    encoded: string;
    metadata?: Metadata;
    constructor(data: ITrack);
    get thumbnail(): string | null;
    setRequester(requester: User | null): void;
}
