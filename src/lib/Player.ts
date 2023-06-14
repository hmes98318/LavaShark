import { LavaShark } from './LavaShark';
import Node, { NodeState } from './Node';
import { Queue } from './queue/Queue';
import Track from './queue/Track';
import UnresolvedTrack from './queue/UnresolvedTrack';
import Filters from './Filters';

import {
    PlayerOptions,
    PlayerState,
    PlayOptions,
    VoiceState
} from '../@types';


export enum ConnectionState {
    CONNECTING,
    CONNECTED,
    DISCONNECTED
}

export default class Player {
    private readonly lavashark: LavaShark;
    public node: Node | null;

    public readonly guildId: string;

    public readonly filters: Filters;

    declare private connectTimeout?: NodeJS.Timeout;

    public voiceChannelId: string;
    public textChannelId?: string | null;

    public selfDeaf?: boolean;
    public selfMute?: boolean;

    public current: Track | null;
    public queue: Queue;

    public queueRepeat: boolean;
    public trackRepeat: boolean;

    public position: number;
    private positionTimestamp: number;

    public playing: boolean;
    public paused: boolean;

    public state: ConnectionState;
    public voiceState: VoiceState;

    public moving: boolean;

    static checkOptions(options: PlayerOptions) {
        if (!options.guildId) throw new TypeError('You must provide a guildId.');
        if (typeof options.guildId !== 'string') throw new TypeError('guildId must be a string.');
        if (!options.voiceChannelId) throw new TypeError('You must provide a voiceChannelId.');
        if (typeof options.voiceChannelId !== 'string') throw new TypeError('voiceChannelId must be a string.');
        if (options.textChannelId && typeof options.textChannelId !== 'string') throw new TypeError('textChannelId must be a string.');
        if (options.selfDeaf && typeof options.selfDeaf !== 'boolean') throw new TypeError('selfDeaf must be a boolean.');
        if (options.selfMute && typeof options.selfMute !== 'boolean') throw new TypeError('selfMute must be a boolean.');
        if (options.queue && !(options.queue instanceof Queue)) throw new TypeError('Queue must extend Queue.');
    }

    /**
     * Create a new Player instance
     * @param {LavaShark} lavashark - The lavashark instance
     * @param {Object} options - The player options
     * @param {String} options.guildId - The guild id of this player
     * @param {String} options.voiceChannelId - The voice channel id of this player
     * @param {String} [options.textChannelId] - The text channel id of this player
     * @param {Boolean} [options.selfMute] - Whether or not this player is muted
     * @param {Boolean} [options.selfDeaf] - Whether or not this player is deafened
     * @param {Queue} [options.queue] - The queue for this player
     */
    constructor(lavashark: LavaShark, options: PlayerOptions) {
        Player.checkOptions(options);

        this.lavashark = lavashark;
        this.guildId = options.guildId;

        this.filters = new Filters(this);

        this.voiceChannelId = options.voiceChannelId;
        this.textChannelId = options.textChannelId ?? null;

        this.selfDeaf = options.selfDeaf ?? false;
        this.selfMute = options.selfMute ?? false;

        this.current = null;
        this.queue = options.queue ?? new Queue();

        this.queueRepeat = false;
        this.trackRepeat = false;

        this.position = 0;
        this.positionTimestamp = 0;

        this.playing = false;
        this.paused = false;

        this.moving = false;

        this.state = ConnectionState.DISCONNECTED;
        this.voiceState = {};

        this.lavashark.emit('debug', `Player created for guild ${this.guildId}`);
        this.assignNode();

        this.lavashark.emit('playerCreate', this);
    }

    /**
     * Gets the exact track position based on the last playerUpdate packet
     */
    get exactPosition(): number {
        if (this.paused) return this.position;

        const filterConfig = this.filters.active.timescale;

        const rate = filterConfig?.rate ?? 1;
        const speed = filterConfig?.speed ?? 1;

        return Math.min(this.current?.duration ?? 0, (this.position + (Date.now() - this.positionTimestamp)) * rate * speed);
    }

    /**
     * Gets the queue duration in milliseconds
     * @deprecated - Use `queue.duration` instead
     */
    get queueDuration(): number {
        return this.queue.duration;
    }

    /**
     * Gets the volume of the player
     */
    get volume(): number {
        return (this.filters.active.volume ?? 1) * 100;
    }

    /**
     * Assigns a Node to this player
     * @private
     */
    private assignNode() {
        const node = this.lavashark.bestNode;

        this.node = node;
        this.lavashark.emit('debug', `Assigned node ${node.identifier} to player ${this.guildId}`);
    }

    /**
     * Connects to the voice channel
     */
    public connect() {
        if (this.state !== ConnectionState.DISCONNECTED) return;

        if (!this.voiceChannelId) {
            throw new Error('No voice channel id provided');
        }

        this.lavashark.emit('debug', `Connecting player ${this.guildId} to voice channel ${this.voiceChannelId}`);

        if (this.node === null) {
            this.assignNode();
        }

        this.state = ConnectionState.CONNECTING;

        this.sendVoiceState();

        if (this.connectTimeout) clearTimeout(this.connectTimeout);

        this.connectTimeout = setTimeout(() => {
            this.state = ConnectionState.DISCONNECTED;
            throw new Error('Voice connection timeout.');
        }, 10000);
    }

    /**
     * Disconnects from the voice channel
     */
    public disconnect() {
        clearTimeout(this.connectTimeout);

        this.lavashark.sendWS(this.guildId, {
            op: 4,
            d: {
                guild_id: this.guildId,
                channel_id: null
            }
        });

        this.voiceState = {};

        this.state = ConnectionState.DISCONNECTED;

        this.lavashark.emit('debug', `Player ${this.guildId} disconnected from voice channel`);
    }

    /**
     * Destroys the player
     */
    public async destroy() {
        this.disconnect();

        await this.node?.rest.destroyPlayer(this.guildId);

        this.lavashark.players.delete(this.guildId);

        this.lavashark.emit('playerDestroy', this);
        this.lavashark.emit('debug', `Player ${this.guildId} destroyed`);
    }

    /**
     * @param {Node} node - The target node to move the player
     */
    public async moveNode(node: Node) {
        if (!node) throw new TypeError('You must provide a Node instance.');
        if (node.state !== NodeState.CONNECTED) throw new Error('The provided node is not connected.');
        if (this.node === node) return;

        this.lavashark.emit('debug', `Moving player ${this.guildId} from node ${this.node?.identifier ?? 'None'} to node ${node.identifier}`);

        this.moving = true;

        await this.node?.rest.destroyPlayer(this.guildId);


        this.node = node;

        if (Object.keys(this.voiceState).length === 2) {
            this.state = ConnectionState.CONNECTING;

            await this.sendVoiceUpdate();
        }

        if (this.filters.enabled) {
            this.filters.apply();
        }

        if (this.playing && this.current) {
            await this.node.rest.updatePlayer(this.guildId, {
                encodedTrack: this.current.encodedTrack,
                position: this.current.isStream ? 0 : this.position
            });
        }
        else {
            this.moving = false;
        }
    }

    /**
     * Gets the latency between lavalink client & node
     * @returns {Promise<Number>} - In milliseconds
     */
    public async ping(): Promise<Number> {
        if (this.node === null || this.state !== ConnectionState.CONNECTED) return -1;

        try {
            const startTime = Date.now();
            await this.node.getVersion();
            const endTime = Date.now();

            const ping = endTime - startTime;
            return ping;
        } catch (_) {
            return -1;
        }
    }

    /**
     * Plays a track
     * @param {Object} [options] - Play options
     * @param {Number} [options.startTime] - Start time in milliseconds
     * @param {Number} [options.endTime] - End time in milliseconds
     * @param {Boolean} [options.noReplace] - Whether to ignore operation if a track is already playing or paused
     */
    public async play(options?: PlayOptions) {
        if (this.node === null) {
            this.assignNode();
        }

        if (!this.current) {
            let newTrack = this.queue.poll();

            if (newTrack) {
                if (newTrack instanceof UnresolvedTrack) {
                    try {
                        newTrack = await newTrack.build();
                    } catch (e) {
                        this.lavashark.emit('trackException', this, newTrack, e);
                        if (this.queue.size > 0) this.play();
                        return;
                    }
                }
            }
            else {
                throw new Error('The queue is empty!');
            }

            this.current = newTrack;
        }

        this.playing = true;

        await this.node?.rest.updatePlayer(this.guildId, {
            encodedTrack: this.current.encodedTrack,
            position: options?.startTime ?? 0,
            ...options
        });
    }

    /**
     * Sends a voice state update payload to the discord gateway
     * @private
     */
    private sendVoiceState() {
        this.lavashark.sendWS(this.guildId, {
            op: 4,
            d: {
                guild_id: this.guildId,
                channel_id: this.voiceChannelId,
                self_mute: this.selfMute,
                self_deaf: this.selfDeaf
            }
        });

        this.lavashark.emit('debug', `Sent voiceStateUpdate to discord gateway for player ${this.guildId}. Channel: ${this.voiceChannelId}. Self mute: ${this.selfMute}. Self deaf: ${this.selfDeaf}`);
    }

    /**
     * Sets the bot's self deaf state
     * @param state - Whether to self deaf or not
     */
    public setSelfDeaf(state: boolean) {
        if (typeof state !== 'boolean') throw new TypeError('state must be a boolean');

        if (this.selfDeaf !== state && this.state !== ConnectionState.DISCONNECTED) {
            this.selfDeaf = state;
            this.sendVoiceState();
        }
    }

    /**
     * Sets the bot's self mute state
     * @param {Boolean} state - Whether to self mute or not
     */
    public setSelfMute(state: boolean) {
        if (typeof state !== 'boolean') throw new TypeError('state must be a boolean');

        if (this.selfMute !== state && this.state !== ConnectionState.DISCONNECTED) {
            this.selfMute = state;
            this.sendVoiceState();
        }
    }

    /**
     * Sets the track looping
     * @param {Boolean} state - Whether to enable track looping or not
     */
    public setTrackLoop(state: boolean) {
        this.trackRepeat = state;
    }

    /**
     * Sets the queue looping
     * @param {Boolean} state - Whether to enable queue looping or not
     */
    public setQueueLoop(state: boolean) {
        this.queueRepeat = state;
    }

    /**
     * Sets the player voice channel
     * @param {String} channelId - The voice channel id
     */
    public setVoiceChannel(channelId: string) {
        if (!channelId || typeof channelId !== 'string') throw new TypeError('Voice channel id must be a string.');
        if (this.voiceChannelId === channelId) return;

        this.voiceChannelId = channelId;
        this.state = ConnectionState.DISCONNECTED;
        this.connect();
    }

    /**
     * Shuffles the queue
     * @deprecated Use `queue.shuffle()` instead
     */
    /*
    public shuffleQueue() {
        if (this.queue instanceof Queue) {
            (this.queue as Queue).shuffle();
        }
    }*/

    /**
     * Skips the current playing track
     * @param {Number} [amount=1] - The amount of tracks to skip
     */
    public async skip(amount: number = 1) {
        if (!this.playing) return false;

        if (amount > this.queue.size) {
            this.queue.clear();
        }
        else {
            this.queue.skipNTracks(amount);
        }

        try {
            await this.node?.rest.updatePlayer(this.guildId, {
                encodedTrack: null
            });

            return true;
        } catch (_) {
            return false
        }
    }

    /**
     * Pause or unpause the player
     * @param {Boolean} [state=true] - Whether to pause or unpause the player
     */
    public async pause(state: boolean = true) {
        if (typeof state !== 'boolean') {
            throw new TypeError('State must be a boolean');
        }

        if (this.node === null) throw new Error('Assertion failed. The player does not have a node.');

        if (!this.playing) return false;

        this.paused = state;

        await this.node.rest.updatePlayer(this.guildId, {
            paused: state
        });

        return true;
    }

    /**
     * Resume the player
     */
    public async resume() {
        return await this.pause(false);
    }

    /**
     * Seek to a specific position in the track
     * @param {Number} position - The position to seek, in milliseconds
     */
    public async seek(position: number) {
        if (!this.playing || !this.current || !this.current.isSeekable) return;
        if (typeof position !== 'number') {
            throw new TypeError('Position must be a number');
        }

        if (position > this.current.duration) {
            await this.skip();
            return;
        }

        await this.node?.rest.updatePlayer(this.guildId, {
            position
        });
    }

    public async sendVoiceUpdate() {
        if (this.node === null) {
            this.assignNode();
        }

        if (this.connectTimeout) {
            clearTimeout(this.connectTimeout);
            delete this.connectTimeout;
        }

        this.state = ConnectionState.CONNECTED;

        await this.node?.rest.updatePlayer(this.guildId, {
            voice: {
                sessionId: this.voiceState.sessionId!,
                token: this.voiceState.event!.token!,
                endpoint: this.voiceState.event!.endpoint!
            }
        });

        this.lavashark.emit('debug', `Sent voiceUpdate to lavalink node for player ${this.guildId}.`);
    }

    public update(state: PlayerState): void {
        if (state.position) this.position = state.position;
        if (state.time) this.positionTimestamp = state.time;

        if (state.connected) {
            this.state = ConnectionState.CONNECTED;
        } else if (this.state === ConnectionState.CONNECTED) {
            this.state = ConnectionState.DISCONNECTED;
        }
    }
}
