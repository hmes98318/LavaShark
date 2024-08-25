/// <reference types="node" />
import { EventEmitter } from 'events';
import Node from './Node';
import Player from './Player';
import Track from './queue/Track';
import { AbstractExternalSource } from './sources/AbstractExternalSource';
import type { IncomingDiscordPayload, LavaSharkEvents, LavaSharkOptions, OutgoingDiscordPayload, PlayerOptions, SEARCH_SOURCE, SearchResult } from '../@types';
export default class LavaShark extends EventEmitter {
    #private;
    clientId: string;
    nodes: Node[];
    players: Map<string, Player>;
    readonly unresolvedSearchSource: SEARCH_SOURCE;
    readonly useISRC: boolean;
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
    readonly sendWS: (guildId: string, payload: OutgoingDiscordPayload) => void;
    static checkOptions(options: LavaSharkOptions): void;
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
    constructor(options: LavaSharkOptions);
    emit<EventName extends keyof LavaSharkEvents>(event: EventName, ...args: Parameters<LavaSharkEvents[EventName]>): boolean;
    on<EventName extends keyof LavaSharkEvents>(event: EventName, listener: LavaSharkEvents[EventName]): this;
    once<EventName extends keyof LavaSharkEvents>(event: EventName, listener: LavaSharkEvents[EventName]): this;
    /**
     * Get the best available node
     * @returns {Promise<Node>}
     */
    bestNode(): Promise<Node>;
    /**
     * Adds an external source that produces a SearchResult with UnresolvedTracks
     * @param {AbstractExternalSource} extSource - The external source
     */
    addExternalSource(extSource: AbstractExternalSource): void;
    /**
     * Decodes a track by its base64 string
     * @param {string} encoded - The base64 encoded track
     * @returns {Promise<Track>}
     */
    decodeTrack(encoded: string): Promise<Track>;
    /**
     * Decodes multiple tracks by their base64 string
     * @param {string[]} encodedTracks - The base64 encoded tracks
     * @returns {Promise<Track[]>}
     */
    decodeTracks(encodedTracks: string[]): Promise<Track[]>;
    /**
     * Regularly check the connection state of all nodes
     */
    private keepCheckNodesState;
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
    createPlayer(options: PlayerOptions): Player;
    /**
     * Retrieve an existing player using the guild id
     * @param {string} guildId - The guild id that player belongs to
     * @returns {Player}
     */
    getPlayer(guildId: string): Player | null;
    /**
     * Search by song name or use music URL
     * @param {string} query - The query to search for
     * @param {('youtube' | 'youtubemusic' | 'soundcloud')} [source=youtube] - The search source
     * @returns {Promise<SearchResult>}
     */
    search(query: string, source?: SEARCH_SOURCE): Promise<SearchResult>;
    /**
     * Connects to all lavalink nodes
     * @param {string} clientId - The client id (BOT)
     */
    start(clientId: string): void;
    /**
     * Handles voice state & voice server update packets
     * @param payload - The voice packet
     */
    handleVoiceUpdate(payload: IncomingDiscordPayload): void;
    /**
     * Get the ping for a single node
     * @param {Node} node - The node to ping
     * @param {number} timeout - Timeout value in milliseconds
     * @returns {Promise<number>} - Node latency, in milliseconds
     */
    nodePing(node: Node, timeout?: number): Promise<number>;
    /**
     * Get the ping for all nodes
     * @param {number} timeout - Timeout value in milliseconds
     * @returns {Promise<Number[]>} - All node latency, in milliseconds
     */
    nodesPing(timeout?: number): Promise<number[]>;
}
