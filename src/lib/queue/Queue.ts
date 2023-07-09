import Track from './Track';
import UnresolvedTrack from './UnresolvedTrack';


export class Queue {
    public tracks: Array<Track | UnresolvedTrack>;

    constructor() {
        this.tracks = [];
    }

    /**
     * Gets the queue size.
     */
    get size(): number {
        return this.tracks.length;
    }

    /**
     * Gets the queue duration in milliseconds.
     */
    get duration(): number {
        return this.tracks.reduce((acc, track) => acc + track.duration.value, 0);
    }

    /**
     * [Internal] Adds a track to the queue. External users should use Player.addTracks() method instead.
     * @param {Track | UnresolvedTrack} track - The track to add to the queue
     */
    public add(track: Track | UnresolvedTrack) {
        this.tracks.push(track);
    }

    /**
     * Polls the queue for the next track.
     * @returns {Track | UnresolvedTrack | null} The next track in the queue or null if the queue is empty.
     */
    public poll(): Track | UnresolvedTrack | null {
        return this.tracks.shift() ?? null;
    }

    /**
     * Remove the next n tracks from the queue
     * @param {number} n - The number of tracks to skip
     */
    public skipNTracks(n: number) {
        this.tracks.splice(0, n - 1);
    }

    /**
     * Shuffles the queue
     */
    public shuffle() {
        if (this.tracks.length) {
            let j;
            for (let i = this.tracks.length - 1; i; i--) {
                j = Math.floor(Math.random() * (i + 1));

                [this.tracks[i], this.tracks[j]] = [this.tracks[j], this.tracks[i]];
            }
        }
    }

    /**
     * Clears the queue.
     */
    public clear() {
        this.tracks = [];
    }

    /**
     * Removes the first track in the queue.
     * @returns {boolean} Returns true if the track was successfully removed, false otherwise
     */
    public remove(): boolean;
    /**
     * Removes the track at the specified position.
     * @param {number} index - The index of the track to remove.
     * @returns {boolean} Returns true if the track was successfully removed, false otherwise
     */
    public remove(index: number): boolean;
    /**
     * Removes the tracks in the specified range.
     * @param {number} start - The start index of the range.
     * @param {number} end - The end index of the range.
     * @returns {boolean} Returns true if the tracks were successfully removed, false otherwise
     */
    public remove(start: number, end: number): boolean;
    public remove(arg1?: number, arg2?: number): boolean {
        if (typeof arg1 === 'undefined') arg1 = 1;

        if (arg2 !== undefined) {
            if (typeof arg1 !== 'number' || isNaN(arg1)) throw TypeError('Start value must be a number');
            if (typeof arg2 !== 'number' || isNaN(arg2)) throw TypeError('End value must be a number');

            if (arg1 < 1 || arg2 < arg1 || arg1 > this.tracks.length || arg2 > this.tracks.length) {
                // Index out of range
                return false;
            }
            this.tracks.splice(arg1 - 1, arg2 - arg1 + 1);
        }
        else {
            if (typeof arg1 !== 'number' || isNaN(arg1)) throw TypeError('Index must be a number');

            if (arg1 < 1 || arg1 > this.tracks.length) {
                // Index out of range
                return false;
            }
            this.tracks.splice(arg1 - 1, 1);
        }
        return true;
    }
}