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
     * Inserts a track at the specified index, moving subsequent tracks back.
     * @param {number} index - The index at which to insert the track.
     * @param {Track | UnresolvedTrack} track - The track to insert.
     * @throws {RangeError} Throws an error if the index is out of range.
     */
    public insert(index: number, track: Track | UnresolvedTrack) {
        if (index < 0 || index > this.tracks.length) {
            return false;
        }

        this.tracks.splice(index, 0, track);
        return true;
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
            const len = this.tracks.length;
            for (let i = 0; i < len; i++) {
                const rand = Math.floor(Math.random() * (len - i)) + i;
                [this.tracks[i], this.tracks[rand]] = [this.tracks[rand], this.tracks[i]];
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
        if (typeof arg1 === 'undefined') arg1 = 0;

        if (arg2 !== undefined) {
            if (typeof arg1 !== 'number' || isNaN(arg1)) throw TypeError('Start value must be a number');
            if (typeof arg2 !== 'number' || isNaN(arg2)) throw TypeError('End value must be a number');

            if (arg1 < 0 || arg2 < arg1 || arg1 > this.tracks.length || arg2 > this.tracks.length) {
                // Index out of range
                return false;
            }
            this.tracks.splice(arg1, arg2);
        }
        else {
            if (typeof arg1 !== 'number' || isNaN(arg1)) throw TypeError('Index must be a number');

            if (arg1 < 0 || arg1 > this.tracks.length) {
                // Index out of range
                return false;
            }
            this.tracks.splice(arg1, 1);
        }
        return true;
    }

    /**
     * Moves a track from one index to another within the queue.
     * @param {number} index1 - The current index of the track.
     * @param {number} index2 - The new index to which the track should be moved.
     * @returns {boolean} Returns true if the track was successfully moved, false otherwise.
     */
    public move(index1: number, index2: number): boolean {
        if (
            (index1 < 0 || index1 >= this.tracks.length) ||
            (index2 < 0 || index2 >= this.tracks.length)
        ) {
            // Invalid index
            return false;
        }

        // Swap the elements at index1 and index2
        [this.tracks[index1], this.tracks[index2]] = [this.tracks[index2], this.tracks[index1]];
        return true;
    }
}