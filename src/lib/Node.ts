import { IncomingMessage } from 'http';
import { setTimeout as promisesSetTimeout } from 'timers/promises';

import WebSocket, { CloseEvent, ErrorEvent, MessageEvent } from 'ws';

import { LavaShark } from './LavaShark';
import Player, { ConnectionState, RepeatMode } from './Player';
import { RESTController } from './rest/RESTController';
import { API_VERSION } from './rest/RESTPaths';
import UnresolvedTrack from './queue/UnresolvedTrack';
import { generateRandomKey } from './utils/generateRandomKey';

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
    WebSocketClosedEvent,
    version
} from '../@types';
import { VERSION } from "../index";


export enum NodeState {
    CONNECTING,
    CONNECTED,
    DISCONNECTED
}

export default class Node {
    private readonly lavashark: LavaShark;
    public readonly options: NodeOptions;

    declare private penalties?: number;
    declare private ws: WebSocket | null;

    private packetQueue: string[];

    public rest: RESTController;
    private resumeKey: string;

    public retryAttempts: number;

    public state: NodeState;
    public stats: NodeStats;

    private keepAliveInterval: NodeJS.Timer;

    declare public version?: version;

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
        if (options.resumeKey && typeof options.resumeKey !== 'string') {
            throw new TypeError('NodeOptions.resumeKey must be a string');
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
     * Create a new LavaShark instance
     * @param {LavaShark} lavashark - The LavaShark instance
     * @param {Object} options - The node options
     * @param {String} [options.id] - The lavalink node identifier
     * @param {String} options.hostname - The lavalink node hostname
     * @param {Number} options.port - The lavalink node port
     * @param {String} [options.password] - The lavalink node password
     * @param {Boolean} [options.secure] - Whether the lavalink node uses TLS/SSL or not
     * @param {String} [options.region] - The lavalink node region
     * @param {String} [options.resumeKey] - The resume key
     * @param {Number} [options.resumeTimeout] - The resume timeout, in seconds
     * @param {Number} [options.maxRetryAttempts] - The max number of reconnect attempts
     * @param {Number} [options.retryAttemptsInterval] - The interval between reconnect attempts, in milliseconds
     * @param {Boolean} [options.followRedirects] - Whether to follow redirects (3xx status codes)
     * @param {Boolean} [options.sendSpeakingEvents=false] - Tells the lavalink node to send speaking events (Supported in my custom lavalink fork)
     */
    constructor(lavashark: LavaShark, options: NodeOptions) {
        Node.checkOptions(options);

        this.lavashark = lavashark;
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

        this.packetQueue = [];

        this.rest = new RESTController(this);
        this.ws = null;
    }

    get identifier() {
        return this.options.id ?? this.options.hostname;
    }

    get totalPenalties() {
        if (this.state !== NodeState.CONNECTED || !this.ws) {
            return Infinity;
        }
        else {
            return this.penalties ?? 0;
        }
    }

    private calcPenalties() {
        // https://github.com/freyacodes/Lavalink-Client/blob/d71003475376d440baf081faa79577bd11221684/src/main/java/lavalink/client/io/LavalinkLoadBalancer.java#L131-L141

        const cpuPenalty = Math.pow(1.05, 100 * this.stats.cpu.systemLoad) * 10 - 10;

        let deficitFramePenalty = 0, nullFramePenalty = 0;

        if (this.stats.frameStats) {
            deficitFramePenalty = Math.pow(1.03, 500 * this.stats.frameStats.deficit / 3000) * 600 - 600;
            nullFramePenalty = Math.pow(1.03, 500 * this.stats.frameStats.nulled / 3000) * 300 - 300;
            nullFramePenalty *= 2;
        }

        this.penalties = ~~(cpuPenalty + deficitFramePenalty + nullFramePenalty + this.stats.playingPlayers);
    }

    /**
     * Connect to node 
     */
    public connect() {
        if (this.state !== NodeState.DISCONNECTED) return;

        ++this.retryAttempts;

        this.state = NodeState.CONNECTING;

        const headers = {
            'User-Id': this.lavashark.clientId,
            'Client-Name': `LavaShark/${VERSION}`,
            Authorization: this.options.password ?? 'youshallnotpass'
        };

        if (this.options.resumeKey !== 'disable' && this.options.resumeKey !== 'DISABLE') {
            this.resumeKey = `LavaShark_${VERSION}_${generateRandomKey(8)}`;
            Object.assign(headers, { 'Resume-Key': this.resumeKey });
        }

        const wsUrl = `ws${this.options.secure ? 's' : ''}://${this.options.hostname}:${this.options.port}/v${API_VERSION}/websocket`;

        this.ws = new WebSocket(wsUrl, {
            headers,
            followRedirects: this.options.followRedirects
        });

        this.ws.onopen = this.open.bind(this);
        this.ws.onmessage = this.message.bind(this);
        this.ws.onerror = this.error.bind(this);
        this.ws.onclose = this.close.bind(this);
        this.ws.on('upgrade', this.upgrade.bind(this));
        this.ws.on('pong', this.pong.bind(this));
    }

    /**
     * Disconnect from node
     */
    public disconnect() {
        if (this.ws !== null) this.ws.close(1000, 'LavaShark: disconnect');
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
     * Check session exists
     */
    public async checkNodeSession(): Promise<void> {
        try {
            await this.rest.updateSession(this.resumeKey, this.options.resumeTimeout ?? 60);
        } catch (_) {
            this.lavashark.emit('error', this, `Updating session failed, try to reconnect node "${this.options.id}"`);
            await this.reconnect();
        }
    }

    private KeepingNodeAwake(milliseconds: number) {
        this.keepAliveInterval = setInterval(async () => {
            try {
                this.ws?.ping();
            } catch (error) {
                this.lavashark.emit('error', this, `Keeping node awake failed, try to reconnect node "${this.options.id}"`);
                await this.reconnect();
            }
        }, milliseconds);
    }

    private stopKeepingNodeAwake() {
        clearInterval(this.keepAliveInterval);
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
     * Gets the route planner status
     * @returns {Promise<Object>}
     */
    public getRoutePlannerStatus(): Promise<RoutePlannerStatus> {
        return this.rest.getRoutePlannerStatus();
    }

    /**
     * Unmarks a failed address
     * @param {String} address - The address to unmark
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
    public async updateStats(): Promise<void> {
        try {
            await Promise.race([
                this.getStats(),
                new Promise<void>((_, reject) => {
                    setTimeout(() => {
                        reject(new Error('Update stats timed out'));
                    }, 1500);
                })
            ]);
            this.calcPenalties();
        } catch (_) {
            this.disconnect();
            this.lavashark.emit('error', this, new Error(`An error occurred while updating stats: Unable to connect to the node`));
        }
    }

    private async pollTrack(player: Player) {
        let newTrack = player.queue.poll();

        if (newTrack) {
            if (newTrack instanceof UnresolvedTrack) {
                try {
                    newTrack = await newTrack.build();
                } catch (err) {
                    this.lavashark.emit('trackException', player, newTrack, err);
                    this.pollTrack(player);
                    return;
                }
            }

            player.current = newTrack;
            player.play();
            return;
        }

        player.current = null;
        this.lavashark.emit('queueEnd', player);
    }

    private handlePlayerEvent(e: PlayerEventPayload) {
        const player = this.lavashark.players.get(e.guildId);

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
                this.lavashark.emit('warn', this, `Unhandled player event. Unknown event type: ${e.type}`);
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

        this.lavashark.emit('trackStart', player, player.current);
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
            this.lavashark.emit('trackEnd', player, player.current, ev.reason);

            this.pollTrack(player);
            return;
        }

        this.lavashark.emit('trackEnd', player, player.current, ev.reason);

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
        this.lavashark.emit('trackStuck', player, player.current, ev.thresholdMs);
    }

    private handleTrackException(ev: TrackExceptionEvent, player: Player) {
        this.lavashark.emit('trackException', player, player.current, ev.exception);
        player.skip();
    }

    private handleWSClose(ev: WebSocketClosedEvent, player: Player) {
        this.lavashark.emit('playerDisconnect', player, ev.code, ev.reason);

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
        this.lavashark.emit('nodeConnect', this);

        this.retryAttempts = 0;
        this.KeepingNodeAwake(30 * 1000);

        for (let i = 0; i < this.packetQueue.length; i++) {
            if (this.state !== NodeState.CONNECTED) break;
            const packet = this.packetQueue.shift();

            if (packet) this.ws?.send(packet);
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
                break;
            }
            case 'playerUpdate': {
                this.lavashark.players.get(payload.guildId)?.update(payload.state);
                break;
            }
            case 'event': {
                this.handlePlayerEvent(payload);
                break;
            }
            default: {
                this.lavashark.emit('warn', this, 'Unknown payload op: ' + payload.op);
                break;
            }
        }

        this.lavashark.emit('raw', this, payload);
    }

    private error({ error, message }: ErrorEvent) {
        if (message.includes('connect ECONNREFUSED')) return;
        if (message.includes('401')) {
            this.retryAttempts = Infinity;
            this.lavashark.emit('error', this, new Error('Authentication failed!'));
            return;
        }
        this.lavashark.emit('error', this, error);
    }

    private async close({ code, reason, wasClean }: CloseEvent) {
        this.state = NodeState.DISCONNECTED;

        this.stopKeepingNodeAwake();

        this.ws?.removeAllListeners();
        this.ws = null;

        if (wasClean) {
            this.lavashark.emit('nodeDisconnect', this, code, reason);
            return;
        }

        try {
            const newNode = await this.lavashark.bestNode();

            if (newNode) {
                for (const player of this.lavashark.players.values()) {
                    if (player.node === this) {
                        await player.moveNode(newNode);
                    }
                }
            }
        } catch (_) {
            // no available nodes, so we can't move the players
        }

        this.lavashark.emit('error', this, new Error(`WebSocket closed abnormally with code ${code}.`));

        if (this.retryAttempts > (this.options.maxRetryAttempts ?? 10)) return;

        if (this.retryAttempts === 0) this.connect();
        else setTimeout(() => this.connect(), this.options.retryAttemptsInterval ?? 5000);
    }

    private upgrade(msg: IncomingMessage) {
        if (msg.headers['session-resumed'] === 'true') {
            this.lavashark.emit('nodeResume', this);
        }
    }

    private pong(data: Buffer) {
        this.lavashark.emit('pong', this, data);
    }

    // ----------------------------------------------
}
