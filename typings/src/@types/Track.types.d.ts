export type PlaylistInfo = {
    selectedTrack: number;
    name: string;
    duration: number;
};
export type TrackInfo = {
    identifier: string;
    thumbnail?: string;
    isSeekable: boolean;
    author: string;
    length: number;
    isStream: boolean;
    sourceName: string | null;
    position: number;
    title: string;
    uri: string;
};
export interface ITrack {
    track: string;
    info: TrackInfo;
}
export interface Timestamp {
    label: string;
    value: number;
}
