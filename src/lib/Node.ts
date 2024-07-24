import { IncomingMessage } from 'http';
import { setTimeout as promisesSetTimeout } from 'timers/promises';

import WebSocket, { CloseEvent, ErrorEvent, MessageEvent } from 'ws';

import LavaShark from './LavaShark';
import Player, { ConnectionState, RepeatMode } from './Player';
import { RESTController } from './rest/RESTController';
import { API_VERSION } from './rest/RESTPaths';
import UnresolvedTrack from './queue/UnresolvedTrack';
import { generateRandomKey } from './utils/generateRandomKey';
import { VERSION } from "../index";

import type {
    Info,
    NodeOptions,
    NodeStats,
    PlayerEventPayload,
    RoutePlannerStatus,
    TrackEndEvent,
    TrackExceptionEvent,
    TrackStartEvent,
    TrackStuckEvent,
    version,
    WebSocketClosedEvent
} from '../@types';


export enum NodeState {
    CONNECTING,
    CONNECTED,
    DISCONNECTED
}

export default class Node {
    public version?: version;   // Node.getVersion()
    public readonly options: NodeOptions;

    public rest: RESTController;
    public retryAttempts: number;

    public state: NodeState;
    public stats: NodeStats;

    #penalties?: number;
    #ws: WebSocket | null;

    #packetQueue: string[];
    #resuming: boolean;
    #keepAliveInterval: NodeJS.Timeout;

    readonly #lavashark: LavaShark;

    static checkOptions(options: NodeOptions) {
        if (typeof options !== 'object') {
            throw new TypeError('NodeOptions must be an object');
        }

        if (!options.hostname) {
            throw new TypeError('NodeOptions.hostname is required');
        }
        if (!options.port) {
            throw new TypeError('NodeOptions.port is required');
        }

        if (typeof options.hostname !== 'string') {
            throw new TypeError('NodeOptions.hostname must be a string');
        }
        if (typeof options.port !== 'number') {
            throw new TypeError('NodeOptions.port must be a number');
        }

        if (options.id && typeof options.id !== 'string') {
            throw new TypeError('NodeOptions.id must be a string');
        }
        if (options.password && typeof options.password !== 'string') {
            throw new TypeError('NodeOptions.password must be a string');
        }
        if (options.resuming && typeof options.resuming !== 'boolean') {
            throw new TypeError('NodeOptions.resuming must be a boolean');
        }
        if (options.resumeTimeout && typeof options.resumeTimeout !== 'number') {
            throw new TypeError('NodeOptions.resumeTimeout must be a number');
        }
        if (options.secure && typeof options.secure !== 'boolean') {
            throw new TypeError('NodeOptions.secure must be a boolean');
        }
        if (options.followRedirects && typeof options.followRedirects !== 'boolean') {
            throw new TypeError('NodeOptions.followRedirects must be a boolean');
        }
        if (options.maxRetryAttempts && typeof options.maxRetryAttempts !== 'number') {
            throw new TypeError('NodeOptions.maxRetryAttempts must be a number');
        }
        if (options.retryAttemptsInterval && typeof options.retryAttemptsInterval !== 'number') {
            throw new TypeError('NodeOptions.retryAttemptsInterval must be a number');
        }
    }

    /**
     * Create a new Node instance
     * @param {LavaShark} lavashark - The LavaShark instance
     * @param {object} options - The node options
     * @param {string} [options.id] - The lavalink node identifier
     * @param {string} options.hostname - The lavalink node hostname
     * @param {number} options.port - The lavalink node port
     * @param {string} [options.password] - The lavalink node password
     * @param {boolean} [options.secure] - Whether the lavalink node uses TLS/SSL or not
     * @param {string} [options.region] - The lavalink node region
     * @param {boolean} [options.resuming] - Whether to resume the session after the client disconnects
     * @param {number} [options.resumeTimeout] - The resume timeout, in seconds
     * @param {number} [options.maxRetryAttempts] - The max number of reconnect attempts
     * @param {number} [options.retryAttemptsInterval] - The interval between reconnect attempts, in milliseconds
     * @param {boolean} [options.followRedirects] - Whether to follow redirects (3xx status codes)
     * @param {boolean} [options.sendSpeakingEvents=false] - Tells the lavalink node to send speaking events (Supported in my custom lavalink fork)
     */
    constructor(lavashark: LavaShark, options: NodeOptions) {
        Node.checkOptions(options);

        this.#lavashark = lavashark;

        options.resuming = typeof (options.resuming) === 'undefined' ? true : options.resuming;
        options.followRedirects = typeof (options.followRedirects) === 'undefined' ? true : options.followRedirects;
        this.options = options;

        this.retryAttempts = 0;
        this.state = NodeState.DISCONNECTED;

        this.stats = {
            playingPlayers: 0,
            players: 0,
            uptime: 0,
            memory: {
                reservable: 0,
                used: 0,
                free: 0,
                allocated: 0,
            },
            cpu: {
                cores: 0,
                systemLoad: 0,
                lavalinkLoad: 0,
            },
            frameStats: {
                sent: 0,
                nulled: 0,
                deficit: 0,
            }
        };

        this.#packetQueue = [];

        this.rest = new RESTController(this);
        this.#ws = null;
    }

    get identifier() {
        return this.options.id ?? this.options.hostname;
    }

    get totalPenalties() {
        if (this.state !== NodeState.CONNECTED || !this.#ws) {
            return Infinity;
        }
        else {
            return this.#penalties ?? 0;
        }
    }

    private calcPenalties() {
        const totalWeight = 100; // Total weight is 100%

        // Weights for each penalty category
        const weightCpuPenalty = 25;
        const weightDeficitFramePenalty = 30;
        const weightNullFramePenalty = 15;
        const weightPlayingPlayers = 30;

        const cpuPenalty = Math.pow(1.05, 100 * this.stats.cpu.systemLoad) * 10 - 10;
        let deficitFramePenalty = 0, nullFramePenalty = 0;

        if (this.stats.frameStats) {
            deficitFramePenalty = Math.pow(1.03, this.stats.frameStats.deficit * 2);
            nullFramePenalty = Math.pow(1.03, this.stats.frameStats.nulled);
        }

        // Calculate weighted values for each penalty category
        const weightedPlayingPlayers = (weightPlayingPlayers / totalWeight) * this.stats.playingPlayers;
        const weightedDeficitFramePenalty = (weightDeficitFramePenalty / totalWeight) * deficitFramePenalty;
        const weightedNullFramePenalty = (weightNullFramePenalty / totalWeight) * nullFramePenalty;
        const weightedCpuPenalty = (weightCpuPenalty / totalWeight) * cpuPenalty;

        this.#penalties = ~~((weightedPlayingPlayers + weightedDeficitFramePenalty + weightedNullFramePenalty + weightedCpuPenalty) * 100);
    }

    /**
     * Connect to node 
     */
    public connect() {
        if (this.state !== NodeState.DISCONNECTED) return;

        ++this.retryAttempts;

        this.state = NodeState.CONNECTING;

        const headers = {
            'User-Id': this.#lavashark.clientId,
            'Client-Name': `LavaShark/${VERSION}_${generateRandomKey(8)}`,
            Authorization: this.options.password ?? 'youshallnotpass'
        };

        const wsUrl = `ws${this.options.secure ? 's' : ''}://${this.options.hostname}:${this.options.port}/v${API_VERSION}/websocket`;

        this.#ws = new WebSocket(wsUrl, {
            headers,
            followRedirects: this.options.followRedirects
        });

        this.#ws.onopen = this.open.bind(this);
        this.#ws.onmessage = this.message.bind(this);
        this.#ws.onerror = this.error.bind(this);
        this.#ws.onclose = this.close.bind(this);
        this.#ws.on('upgrade', this.upgrade.bind(this));
        this.#ws.on('pong', this.pong.bind(this));
    }

    /**
     * Disconnect from node
     */
    public disconnect() {
        if (this.#ws !== null) this.#ws.close(1000, 'LavaShark: disconnect');
    }

    /**
     * Reconnects the node
     */
    public async reconnect(): Promise<void> {
        this.disconnect();
        await promisesSetTimeout(50);
        this.connect();
        await promisesSetTimeout(2000);
    }

    /**
     * Update session exists
     */
    public async updatseNodeSession(): Promise<boolean> {
        try {
            await this.rest.updateSession(this.#resuming, this.options.resumeTimeout ?? 60);
            return true;
        } catch (_) {
            this.#lavashark.emit('error', this, `Updating session failed, on node "${this.options.id}"`);
            return false;
        }
    }

    private KeepingNodeAwake(milliseconds: number) {
        this.#keepAliveInterval = setInterval(async () => {
            try {
                this.#ws?.ping();
            } catch (error) {
                this.#lavashark.emit('error', this, `Keeping node awake failed, try to reconnect node "${this.options.id}"`);
                await this.reconnect();
            }
        }, milliseconds);
    }

    private stopKeepingNodeAwake() {
        clearInterval(this.#keepAliveInterval);
    }

    /**
     * Get the Lavalink Node version
     * @returns {Promise<version>}
     */
    public async getVersion(): Promise<version> {
        const version = (await this.rest.version()).toString();
        this.version = version;
        return version;
    }

    /**
     * Get the Lavalink Node information
     * @returns {Promise<Info>}
     */
    public async getInfo(): Promise<Info> {
        const info = await this.rest.info();
        return info;
    }

    /**
     * Get the Lavalink Node stats
     * @returns {Promise<NodeStats>}
     */
    public async getStats(): Promise<NodeStats> {
        const stats = await this.rest.stats();
        this.stats = stats;
        return stats;
    }

    /**
     * Get the ping for the node
     * @param {number} timeout - Timeout value in milliseconds
     * @returns {Promise<number>} - Node latency, in milliseconds
     */
    public async getPing(timeout: number = 1500): Promise<number> {
        try {
            const startTime = Date.now();

            await Promise.race([
                this.getStats(),
                new Promise<void>((_, reject) => {
                    setTimeout(() => {
                        reject(new Error('Update stats timed out'));
                    }, timeout);
                })
            ]);

            const endTime = Date.now();
            const ping = endTime - startTime;
            return ping;
        } catch (_) {
            this.disconnect();
            this.#lavashark.emit('error', this, new Error(`An error occurred while updating stats: Unable to connect to the node`));
            return -1;
        }
    }

    /**
     * Gets the route planner status
     * @returns {Promise<Object>}
     */
    public getRoutePlannerStatus(): Promise<RoutePlannerStatus> {
        return this.rest.getRoutePlannerStatus();
    }

    /**
     * Unmarks a failed address
     * @param {string} address - The address to unmark
     */
    public unmarkFailedAddress(address: string) {
        return this.rest.freeRoutePlannerAddress(address);
    }

    /**
     * Unmarks all failed address
     */
    public unmarkAllFailedAddress() {
        return this.rest.freeAllRoutePlannerAddresses();
    }

    /**
     * Update node stats
     */
    public async updateStats(timeout: number = 1500): Promise<void> {
        try {
            await Promise.race([
                this.getStats(),
                new Promise<void>((_, reject) => {
                    setTimeout(() => {
                        reject(new Error('Update stats timed out'));
                    }, timeout);
                })
            ]);
            this.calcPenalties();
        } catch (_) {
            this.disconnect();
            this.#lavashark.emit('error', this, new Error(`An error occurred while updating stats: Unable to connect to the node "${this.identifier}"`));
        }
    }

    private async pollTrack(player: Player) {
        let newTrack = player.queue.poll();

        if (newTrack) {
            if (newTrack instanceof UnresolvedTrack) {
                try {
                    newTrack = await newTrack.build();
                } catch (err) {
                    this.#lavashark.emit('trackException', player, newTrack, err);
                    this.pollTrack(player);
                    return;
                }
            }

            player.current = newTrack;
            player.play();
            return;
        }

        player.current = null;
        this.#lavashark.emit('queueEnd', player);
    }

    private handlePlayerEvent(e: PlayerEventPayload) {
        const player = this.#lavashark.players.get(e.guildId);

        if (!player || player.node !== this) return;

        switch (e.type) {
            case 'TrackStartEvent': {
                this.handleTrackStart(e as TrackStartEvent, player);
                break;
            }
            case 'TrackEndEvent': {
                this.handleTrackEnd(e as TrackEndEvent, player);
                break;
            }
            case 'TrackStuckEvent': {
                this.handleTrackStuck(e as TrackStuckEvent, player);
                break;
            }
            case 'TrackExceptionEvent': {
                this.handleTrackException(e as TrackExceptionEvent, player);
                break;
            }
            case 'WebSocketClosedEvent': {
                this.handleWSClose(e as WebSocketClosedEvent, player);
                break;
            }
            default: {
                this.#lavashark.emit('warn', this, `Unhandled player event. Unknown event type: ${e.type}`);
                break;
            }
        }
    }

    private handleTrackStart(_: TrackStartEvent, player: Player) {
        player.playing = true;
        player.paused = false;

        if (player.moving) {
            player.moving = false;
            return;
        }

        this.#lavashark.emit('trackStart', player, player.current);
    }

    private handleTrackEnd(ev: TrackEndEvent, player: Player) {
        if (ev.reason === 'REPLACED') {
            if (player.repeatMode === RepeatMode.QUEUE && player.current) {
                player.queue.add(player.current);
            }
            return;
        }

        player.playing = false;

        if (['LOAD_FAILED', 'CLEANUP'].includes(ev.reason)) {
            this.#lavashark.emit('trackEnd', player, player.current, ev.reason);

            this.pollTrack(player);
            return;
        }

        this.#lavashark.emit('trackEnd', player, player.current, ev.reason);

        if (player.repeatMode === RepeatMode.TRACK) {
            player.play();
            return;
        }

        if (player.repeatMode === RepeatMode.QUEUE && player.current) {
            player.queue.add(player.current);
        }

        this.pollTrack(player);
    }

    private handleTrackStuck(ev: TrackStuckEvent, player: Player) {
        this.#lavashark.emit('trackStuck', player, player.current, ev.thresholdMs);
    }

    private handleTrackException(ev: TrackExceptionEvent, player: Player) {
        this.#lavashark.emit('trackException', player, player.current, ev.exception);
        player.skip();
    }

    private handleWSClose(ev: WebSocketClosedEvent, player: Player) {
        this.#lavashark.emit('playerDisconnect', player, ev.code, ev.reason);

        switch (ev.code) {
            case 1001:
            case 1006:
            case 4015:
                player.sendVoiceUpdate();
                break;
            case 4006:
            case 4009:
                player.state = ConnectionState.DISCONNECTED;
                player.connect();
                break;
        }
    }

    // ---------- WebSocket event handlers ----------

    private open() {
        this.state = NodeState.CONNECTED;
        this.#lavashark.emit('nodeConnect', this);

        this.retryAttempts = 0;
        this.KeepingNodeAwake(30 * 1000);

        for (let i = 0; i < this.#packetQueue.length; i++) {
            if (this.state !== NodeState.CONNECTED) break;
            const packet = this.#packetQueue.shift();

            if (packet) this.#ws?.send(packet);
        }
    }

    private message({ data }: MessageEvent) {
        const payload = JSON.parse(data as string);

        switch (payload.op) {
            case 'ready': {
                this.rest.setSessionId = payload.sessionId;
                break;
            }
            case 'stats': {
                delete payload.op;
                this.stats = payload as NodeStats;
                this.calcPenalties();
                this.#lavashark.emit('debug', `Node "${this.identifier}" penalties: ${this.totalPenalties}`);
                break;
            }
            case 'playerUpdate': {
                this.#lavashark.players.get(payload.guildId)?.update(payload.state);
                break;
            }
            case 'event': {
                this.handlePlayerEvent(payload);
                break;
            }
            default: {
                this.#lavashark.emit('warn', this, 'Unknown payload op: ' + payload.op);
                break;
            }
        }

        this.#lavashark.emit('raw', this, payload);
    }

    private error({ error, message }: ErrorEvent) {
        if (message.includes('connect ECONNREFUSED')) return;
        if (message.includes('401')) {
            this.retryAttempts = Infinity;
            this.#lavashark.emit('error', this, new Error('Authentication failed!'));
            return;
        }
        this.#lavashark.emit('error', this, error);
    }

    private async close({ code, reason, wasClean }: CloseEvent) {
        this.state = NodeState.DISCONNECTED;

        this.stopKeepingNodeAwake();

        this.#ws?.removeAllListeners();
        this.#ws = null;

        if (wasClean) {
            this.#lavashark.emit('nodeDisconnect', this, code, reason);
            return;
        }

        try {
            const newNode = await this.#lavashark.bestNode();

            if (newNode) {
                for (const player of this.#lavashark.players.values()) {
                    if (player.node === this) {
                        await player.moveNode(newNode);
                    }
                }
            }
        } catch (_) {
            // no available nodes, so we can't move the players
        }

        this.#lavashark.emit('error', this, new Error(`WebSocket closed abnormally with code ${code}.`));

        if (this.retryAttempts > (this.options.maxRetryAttempts ?? 10)) return;

        if (this.retryAttempts === 0) this.connect();
        else setTimeout(() => this.connect(), this.options.retryAttemptsInterval ?? 5000);
    }

    private upgrade(msg: IncomingMessage) {
        if (msg.headers['session-resumed'] === 'true') {
            this.#lavashark.emit('nodeResume', this);
        }
    }

    private pong(data: Buffer) {
        this.#lavashark.emit('pong', this, data);
    }

    // ----------------------------------------------
}
