import Track from './Track';
import UnresolvedTrack from './UnresolvedTrack';
export declare class Queue {
    tracks: Array<Track | UnresolvedTrack>;
    constructor();
    /**
     * Gets the queue size.
     */
    get size(): number;
    /**
     * Gets the queue duration in milliseconds.
     */
    get duration(): number;
    /**
     * [Internal] Adds a track to the queue. External users should use Player.addTracks() method instead.
     * @param {Track | UnresolvedTrack} track - The track to add to the queue
     */
    add(track: Track | UnresolvedTrack): void;
    /**
     * Polls the queue for the next track.
     * @returns {Track | UnresolvedTrack | null} The next track in the queue or null if the queue is empty.
     */
    poll(): Track | UnresolvedTrack | null;
    /**
     * Remove the next n tracks from the queue
     * @param {number} n - The number of tracks to skip
     */
    skipNTracks(n: number): void;
    /**
     * Shuffles the queue
     */
    shuffle(): void;
    /**
     * Clears the queue.
     */
    clear(): void;
    /**
     * Removes the first track in the queue.
     * @returns {boolean} Returns true if the track was successfully removed, false otherwise
     */
    remove(): boolean;
    /**
     * Removes the track at the specified position.
     * @param {number} index - The index of the track to remove.
     * @returns {boolean} Returns true if the track was successfully removed, false otherwise
     */
    remove(index: number): boolean;
    /**
     * Removes the tracks in the specified range.
     * @param {number} start - The start index of the range.
     * @param {number} end - The end index of the range.
     * @returns {boolean} Returns true if the tracks were successfully removed, false otherwise
     */
    remove(start: number, end: number): boolean;
}
