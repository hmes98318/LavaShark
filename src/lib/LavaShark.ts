import { EventEmitter } from 'events';

import Node, { NodeState } from './Node';
import Player, { ConnectionState } from './Player';
import Track from './queue/Track';

import { AbstractExternalSource } from './sources/AbstractExternalSource';
import AppleMusic from './sources/AppleMusic';
import Deezer from './sources/Deezer';
import Spotify from './sources/Spotify';

import type {
    ITrack,
    IncomingDiscordPayload,
    LavaSharkEvents,
    LavaSharkOptions,
    OutgoingDiscordPayload,
    PlayerOptions,
    PlaylistData,
    SEARCH_SOURCE,
    SearchResult,
    VoiceServerUpdatePayload,
    VoiceStateUpdatePayload
} from '../@types';


export default class LavaShark extends EventEmitter {
    public clientId: string;
    public nodes: Node[];
    public players: Map<string, Player>;    // <guildId, Player> 

    #externalSources: AbstractExternalSource[];
    #checkNodesStateTimer!: NodeJS.Timeout | undefined;
    #lastNodeSorting: number;

    readonly #defaultSearchSource: SEARCH_SOURCE;
    public readonly unresolvedSearchSource: SEARCH_SOURCE;
    public readonly useISRC: boolean;

    /**
     * @param {String} guildId - guildId
     * @param {OutgoingDiscordPayload} payload - payload
     * 
     * @example
     * ```ts
     * sendWS: (guildId, payload) => {
     *     client.guilds.cache.get(guildId)?.shard.send(payload); 
     * }
     * ```
     */
    public readonly sendWS: (guildId: string, payload: OutgoingDiscordPayload) => void;

    static checkOptions(options: LavaSharkOptions) {
        if (typeof options !== 'object') {
            throw new TypeError('LavaSharkOptions must be an object');
        }

        if (!options.nodes) {
            throw new TypeError('LavaSharkOptions must contain a nodes property');
        }

        if (!Array.isArray(options.nodes)) {
            throw new TypeError('LavaSharkOptions.nodes must be an array');
        }

        if (options.nodes.length === 0) {
            throw new TypeError('LavaSharkOptions.nodes must contain at least one node');
        }

        if (!options.sendWS || typeof options.sendWS !== 'function') {
            throw new TypeError('LavaSharkOptions.sendWS must be a function');
        }

        if (options.disabledSources && typeof options.disabledSources !== 'object' && !Array.isArray(options.disabledSources)) {
            throw new TypeError('LavaSharkOptions.disabledSources must be an array');
        }

        if (options.useISRC && typeof options.useISRC !== 'boolean') {
            throw new TypeError('LavaSharkOptions.useISRC must be a boolean');
        }
    }

    /**
     * Create a new LavaShark instance
     * @param {object} options - The LavaShark options
     * @param {object[]} options.nodes - The lavalink nodes array
     * @param {string} [options.nodes[].id] - The lavalink node identifier
     * @param {string} [options.nodes[].hostname] - The lavalink node hostname
     * @param {number} [options.nodes[].port] - The lavalink node port
     * @param {string} [options.nodes[].password] - The lavalink node password
     * @param {boolean} [options.nodes[].secure] - Whether the lavalink node uses TLS/SSL or not
     * @param {boolean} [options.nodes[].followRedirects] - Whether to follow redirects or not (default is false)
     * @param {string} [options.nodes[].resumeKey] - The resume key
     * @param {number} [options.nodes[].resumeTimeout] - The resume timeout, in seconds
     * @param {number} [options.nodes[].maxRetryAttempts] - The max number of retry attempts
     * @param {number} [options.nodes[].retryAttemptsInterval] - The interval between retry attempts
     * @param {string} [options.defaultSearchSource] - The default search source
     * @param {string} [options.unresolvedSearchSource] - The unresolved search source
     * 
     * @param {object} [options.spotify] - The spotify credential options
     * @param {string} [options.spotify.clientId] - The spotify client id
     * @param {string} [options.spotify.clientSecret] - The spotify client secret
     * @param {string} [options.spotify.market] - The spotify market
     * 
     * @param {string[]} [options.disabledSources] - Disables, apple music, deezer or spotify
     * @param {boolean} [options.useISRC] - Whether to use ISRC to resolve tracks or not
     * @param {Function} options.sendWS - The function to send websocket messages to the main gateway
     */
    constructor(options: LavaSharkOptions) {
        super();

        LavaShark.checkOptions(options);

        this.nodes = [];
        this.#defaultSearchSource = options.defaultSearchSource ?? 'youtube';
        this.unresolvedSearchSource = options.unresolvedSearchSource ?? 'youtube';
        this.useISRC = options.useISRC ?? true;

        this.#externalSources = [];

        if (options.disabledSources) {
            if (!options.disabledSources.includes('SPOTIFY')) this.#externalSources.push(new Spotify(this, options.spotify?.clientId, options.spotify?.clientSecret, options.spotify?.market));
            if (!options.disabledSources.includes('APPLE_MUSIC')) this.#externalSources.push(new AppleMusic(this));
            if (!options.disabledSources.includes('DEEZER')) this.#externalSources.push(new Deezer(this));
        }
        else {
            this.#externalSources = [
                new Spotify(this, options.spotify?.clientId, options.spotify?.clientSecret, options.spotify?.market),
                new AppleMusic(this),
                new Deezer(this)
            ];
        }

        this.sendWS = options.sendWS;

        this.players = new Map();

        for (const node of options.nodes) {
            const newNode = new Node(this, node);
            this.nodes.push(newNode);
        }

        this.#lastNodeSorting = 0;
    }

    public emit<EventName extends keyof LavaSharkEvents>(event: EventName, ...args: Parameters<LavaSharkEvents[EventName]>): boolean {
        return super.emit(event, ...args);
    }

    public on<EventName extends keyof LavaSharkEvents>(event: EventName, listener: LavaSharkEvents[EventName]): this {
        return super.on(event, listener);
    }

    public once<EventName extends keyof LavaSharkEvents>(event: EventName, listener: LavaSharkEvents[EventName]): this {
        return super.once(event, listener);
    }


    /**
     * Get the best available node
     * @returns {Promise<Node>}
     */
    public async bestNode(): Promise<Node> {
        if (Date.now() < this.#lastNodeSorting + 30000) {
            if (this.nodes[0].state === NodeState.CONNECTED) {
                return this.nodes[0];
            }
            else {
                this.#lastNodeSorting = 0;
                return this.bestNode();
            }
        }


        this.nodes = this.nodes.sort((a, b) => a.totalPenalties - b.totalPenalties);

        const node = this.nodes[0];
        this.#lastNodeSorting = Date.now();

        if (!node || node.state !== NodeState.CONNECTED) {
            throw new Error('No connected nodes!');
        }

        try {
            await node.getPing();
        } catch (_) {
            this.#lastNodeSorting = 0;
            return this.bestNode();
        }

        return node;
    }

    /**
     * Adds an external source that produces a SearchResult with UnresolvedTracks
     * @param {AbstractExternalSource} extSource - The external source
     */
    public addExternalSource(extSource: AbstractExternalSource) {
        if (extSource instanceof AbstractExternalSource) {
            throw new Error(`${extSource.constructor.name} must extend AbstractExternalSource`);
        }

        this.#externalSources.push(extSource);
    }

    /**
     * Decodes a track by its base64 string
     * @param {string} encoded - The base64 encoded track
     * @returns {Promise<Track>}
     */
    public async decodeTrack(encoded: string): Promise<Track> {
        const node = await this.bestNode();
        const trackInfo = await node.rest.decodeTrack(encoded);

        return new Track({ encoded: encoded, info: { ...trackInfo } });
    }

    /**
     * Decodes multiple tracks by their base64 string
     * @param {string[]} encodedTracks - The base64 encoded tracks
     * @returns {Promise<Track[]>}
     */
    public async decodeTracks(encodedTracks: string[]): Promise<Track[]> {
        const node = await this.bestNode();
        const res = await node.rest.decodeTracks(encodedTracks);

        return res.map(it => new Track(it));
    }

    /**
     * Regularly check the connection state of all nodes
     */
    private keepCheckNodesState() {
        this.#checkNodesStateTimer = setInterval(() => {
            const reconnectPromises = this.nodes.map(async node => {
                if (node.state === NodeState.DISCONNECTED) {
                    this.emit('warn', node, `Try to reconnect to the disconnected node "${node.identifier}"`);

                    try {
                        await node.reconnect();
                        this.emit('debug', `Successfully reconnected the disconnected node "${node.identifier}"`);
                    } catch {
                        this.emit('warn', node, `Failed to reconnect the disconnected node "${node.identifier}"`);
                    }
                }
                else {
                    // NodeState.CONNECTED
                    return Promise.resolve();
                }
            });

            Promise.allSettled(reconnectPromises).then(() => {
                this.emit('debug', 'Checked the connection status of all nodes');
            });
        }, 5 * 60 * 1000);      // 5 minutes
    }

    /**
     * Stop the reconnection check of the node
     * @param {string} nodeIdentifier - The identifier of the node
     */
    public stopCheckNodeState(nodeIdentifier: string) {
        this.nodes = this.nodes.filter(node => node.identifier !== nodeIdentifier);

        if (this.nodes.length === 0 && this.#checkNodesStateTimer) {
            clearInterval(this.#checkNodesStateTimer);
            this.#checkNodesStateTimer = undefined;
            this.emit('debug', 'Stopped checking node states because there are no connected nodes left');
        }
    }

    /**
     * Creates a new player or returns an existing one
     * @param {object} options - The player options
     * @param {string} options.guildId - The guild id that player belongs to
     * @param {string} options.voiceChannelId - The voice channel id
     * @param {string} [options.textChannelId] - The text channel id
     * @param {boolean} [options.selfDeaf=false] - Whether the bot joins the voice channel deafened or not
     * @param {boolean} [options.selfMute=false] - Whether the bot joins the voice channel muted or not
     * @param {Queue} [options.queue] - The queue for this player
     * @returns {Player}
     */
    public createPlayer(options: PlayerOptions): Player {
        let player = this.players.get(options.guildId);

        if (player) {
            return player;
        }

        player = new Player(this, options);
        this.players.set(options.guildId, player);

        return player;
    }

    /**
     * Retrieve an existing player using the guild id
     * @param {string} guildId - The guild id that player belongs to
     * @returns {Player}
     */
    public getPlayer(guildId: string): Player | null {
        if (typeof guildId !== 'string') {
            throw new TypeError('guildId must be a non-empty string');
        }

        const player = this.players.get(guildId);

        if (!player) {
            return null;
        }
        else {
            return player || null;
        }
    }

    /**
     * Search by song name or use music URL
     * @param {string} query - The query to search for
     * @param {('youtube' | 'youtubemusic' | 'soundcloud')} [source=youtube] - The search source
     * @returns {Promise<SearchResult>}
     */
    public async search(query: string, source: SEARCH_SOURCE = this.#defaultSearchSource): Promise<SearchResult> {
        if (typeof query !== 'string') {
            throw new TypeError('Search query must be a non-empty string');
        }

        for (const source of this.#externalSources) {
            const loadRes = await source.loadItem(query);

            if (loadRes) return loadRes;
        }

        const sourceMap = {
            youtube: 'ytsearch:',
            youtubemusic: 'ytmsearch:',
            soundcloud: 'scsearch:'
        };

        if (!query.startsWith('https://') && !query.startsWith('http://')) {
            query = `${sourceMap[source] || 'ytsearch:'}${query}`;
        }

        const node = await this.bestNode();
        const res = await node.rest.loadTracks(query);

        /**
         * loadType: playlist, search, track, empty, error
         */
        if (res.loadType === 'error' || res.loadType === 'empty') {
            return res as unknown as SearchResult;
        }
        else {
            let tracks: Track[] = [];

            if (res.loadType === 'playlist') {
                const playlistData = res.data as unknown as PlaylistData;

                tracks = playlistData.tracks.map(t => new Track(t));

                res.playlistInfo = {
                    name: playlistData.info.name,
                    duration: tracks.reduce((acc, cur) => acc + cur.duration.value, 0) ?? 0,
                    selectedTrack: playlistData.info.selectedTrack
                };
            }
            else if (res.loadType === 'search') {
                tracks = (res.data as ITrack[]).map(t => new Track(t));
            }
            else if (res.loadType === 'track') {
                tracks = [new Track(res.data as unknown as ITrack)];
            }


            return {
                ...res,
                tracks
            };
        }
    }

    /**
     * Connects to all lavalink nodes
     * @param {string} clientId - The client id (BOT)
     */
    public start(clientId: string) {
        if (typeof clientId !== 'string') {
            throw new TypeError('clientId must be a string');
        }

        this.clientId = clientId;

        for (const node of this.nodes) {
            node.connect();
        }

        if (this.#checkNodesStateTimer) clearInterval(this.#checkNodesStateTimer);
        this.keepCheckNodesState();
    }

    /**
     * Handles voice state & voice server update packets
     * @param payload - The voice packet
     */
    public handleVoiceUpdate(payload: IncomingDiscordPayload) {
        if (payload.op !== 0 || !(payload.d as Record<string, unknown>).guild_id) return;

        const player = this.players.get((payload.d as Record<string, unknown>).guild_id as string);

        if (!player) return;

        if (payload.t === 'VOICE_STATE_UPDATE') {
            const packet = payload as VoiceStateUpdatePayload;

            if (packet.d.user_id !== this.clientId || !packet.d.channel_id) return;

            player.voiceChannelId = packet.d.channel_id;

            if (player.voiceState.sessionId === packet.d.session_id) return;
            player.voiceState.sessionId = packet.d.session_id;

            this.emit('debug', `Received voiceStateUpdate from discord gateway for player ${player.guildId}. Voice channel id: ${player.voiceChannelId}. SessionID: ${player.voiceState.sessionId}`);

            if (player.voiceState.event) {
                player.sendVoiceUpdate();
            }
        }
        else if (payload.t === 'VOICE_SERVER_UPDATE') {
            const packet = payload as VoiceServerUpdatePayload;

            // Sometimes discord sends a partial voice server update packet, with null endpoint
            // Just wait for a new one I guess ?
            if (!packet.d.endpoint) {
                return;
            }

            player.voiceState.event = {
                ...packet.d
            };

            // A node should be assigned to the player on Player#connect()
            if (player.node === null) {
                player.state = ConnectionState.DISCONNECTED;
                throw new Error('Assertion failed. The Player does not have a node.');
            }

            this.emit('debug', `Received voiceServerUpdate from discord gateway for player ${player.guildId}. Endpoint: ${player.voiceState.event.endpoint}. Token: ${player.voiceState.event.token}`);

            if (player.voiceState.sessionId) {
                player.sendVoiceUpdate();
            }
        }
    }

    /**
     * Get the ping for a single node
     * @param {Node} node - The node to ping
     * @param {number} timeout - Timeout value in milliseconds
     * @returns {Promise<number>} - Node latency, in milliseconds
     */
    public async nodePing(node: Node, timeout: number = 1500): Promise<number> {
        if (!node || !(node instanceof Node)) {
            throw new Error('Invalid node parameter. Expected Node instance.');
        }

        return await node.getPing(timeout);
    }

    /**
     * Get the ping for all nodes
     * @param {number} timeout - Timeout value in milliseconds
     * @returns {Promise<Number[]>} - All node latency, in milliseconds
     */
    public async nodesPing(timeout: number = 1500): Promise<number[]> {
        const nodes = this.nodes;

        if (nodes.length === 0) {
            throw new Error('No nodes available for pinging.');
        }

        const pingPromises = nodes.map(async (node) => {
            return node.getPing(timeout);
        });

        const pingList = await Promise.all(pingPromises);
        return pingList;
    }
}