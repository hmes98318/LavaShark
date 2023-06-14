// API version
export const LAVALINK_API_VERSION = 3;

// Sessions
export const SESSIONS = (sessionId: string) => `/v${LAVALINK_API_VERSION}/sessions/${sessionId}`;

// Player
export const PLAYER = (sessionId: string, guildId: string) => `/v${LAVALINK_API_VERSION}/sessions/${sessionId}/players/${guildId}`;
export const LOAD_TRACKS = (identifier: string) => `/v${LAVALINK_API_VERSION}/loadtracks?identifier=${encodeURIComponent(identifier)}`;
export const DECODE_TRACKS = () => `/v${LAVALINK_API_VERSION}/decodetracks`;

// Route planner
export const ROUTE_PLANNER_STATUS = () => `/v${LAVALINK_API_VERSION}/routeplanner/status`;
export const ROUTE_PLANNER_FREE_ADDR = () => `/v${LAVALINK_API_VERSION}/routeplanner/free`;
export const ROUTE_PLANNER_FREE_ALL = () => `/v${LAVALINK_API_VERSION}/routeplanner/free/all`;

// Versions
export const VERSION = () => '/version';
export const VERSIONS = () => '/versions';
export const INFO = () => `/v${LAVALINK_API_VERSION}/info`;