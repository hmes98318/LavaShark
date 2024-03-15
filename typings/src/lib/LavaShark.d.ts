/// <reference types="node" />
import { EventEmitter } from 'events';
import Node from './Node';
import Player from './Player';
import Track from './queue/Track';
import { AbstractExternalSource } from './sources/AbstractExternalSource';
import type { IncomingDiscordPayload, OutgoingDiscordPayload, LavaSharkEvents, PlayerOptions, SearchResult, SEARCH_SOURCE, LavaSharkOptions } from '../@types';
export declare class LavaShark extends EventEmitter implements LavaSharkEvents {
    clientId: string;
    nodes: Node[];
    private readonly defaultSearchSource;
    readonly unresolvedSearchSource: SEARCH_SOURCE;
    readonly useISRC: boolean;
    private externalSources;
    players: Map<string, Player>;
    private checkNodesStateTimer;
    private lastNodeSorting;
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
     * @param {Object} options - The LavaShark options
     * @param {Object[]} options.nodes - The lavalink nodes array
     * @param {String} [options.nodes[].id] - The lavalink node identifier
     * @param {String} [options.nodes[].hostname] - The lavalink node hostname
     * @param {Number} [options.nodes[].port] - The lavalink node port
     * @param {String} [options.nodes[].password] - The lavalink node password
     * @param {Boolean} [options.nodes[].secure] - Whether the lavalink node uses TLS/SSL or not
     * @param {Boolean} [options.nodes[].followRedirects] - Whether to follow redirects or not (default is false)
     * @param {String} [options.nodes[].resumeKey] - The resume key
     * @param {Number} [options.nodes[].resumeTimeout] - The resume timeout, in seconds
     * @param {Number} [options.nodes[].maxRetryAttempts] - The max number of retry attempts
     * @param {Number} [options.nodes[].retryAttemptsInterval] - The interval between retry attempts
     * @param {String} [options.defaultSearchSource] - The default search source
     * @param {String} [options.unresolvedSearchSource] - The unresolved search source
     *
     * @param {Object} [options.spotify] - The spotify credential options
     * @param {String} [options.spotify.clientId] - The spotify client id
     * @param {String} [options.spotify.clientSecret] - The spotify client secret
     * @param {String} [options.spotify.market] - The spotify market
     *
     * @param {String[]} [options.disabledSources] - Disables, apple music, deezer or spotify
     * @param {Boolean} [options.useISRC] - Whether to use ISRC to resolve tracks or not
     * @param {Function} options.sendWS - The function to send websocket messages to the main gateway
     */
    constructor(options: LavaSharkOptions);
    bestNode(): Promise<Node>;
    /**
     * Adds an external source that produces a SearchResult with UnresolvedTracks
     * @param {AbstractExternalSource} extSource - The external source
     */
    addExternalSource(extSource: AbstractExternalSource): void;
    /**
     * Decodes a track by its base64 string
     * @param {String} encodedTrack - The base64 encoded track
     * @returns {Promise<Track>}
     */
    decodeTrack(encodedTrack: string): Promise<Track>;
    /**
     * Decodes multiple tracks by their base64 string
     * @param {String[]} encodedTracks - The base64 encoded tracks
     * @returns {Promise<Track[]>}
     */
    decodeTracks(encodedTracks: string[]): Promise<Track[]>;
    /**
     * Regularly check the connection state of all nodes
     */
    private keepCheckNodesState;
    /**
     * Creates a new player or returns an existing one
     * @param {Object} options - The player options
     * @param {String} options.guildId - The guild id that player belongs to
     * @param {String} options.voiceChannelId - The voice channel id
     * @param {String} [options.textChannelId] - The text channel id
     * @param {Boolean} [options.selfDeaf=false] - Whether the bot joins the voice channel deafened or not
     * @param {Boolean} [options.selfMute=false] - Whether the bot joins the voice channel muted or not
     * @param {Queue} [options.queue] - The queue for this player
     * @returns {Player}
     */
    createPlayer(options: PlayerOptions): Player;
    /**
     * Retrieve an existing player using the guild id
     * @param {String} guildId - The guild id that player belongs to
     * @returns {Player}
     */
    getPlayer(guildId: string): Player | null;
    /**
     * Search by song name or use music URL
     * @param {String} query - The query to search for
     * @param {('youtube' | 'youtubemusic' | 'soundcloud')} [source=youtube] - The search source
     * @returns {Promise<SearchResult>}
     */
    search(query: string, source?: SEARCH_SOURCE): Promise<SearchResult>;
    /**
     * Connects to all lavalink nodes
     * @param {String} clientId - The client id (BOT)
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
