// API version
export const API_VERSION = 4;

// Sessions
export const SESSIONS = (sessionId: string) => `/v${API_VERSION}/sessions/${sessionId}`;

// Player
export const PLAYER = (sessionId: string, guildId: string) => `/v${API_VERSION}/sessions/${sessionId}/players/${guildId}`;
export const LOAD_TRACKS = (identifier: string) => `/v${API_VERSION}/loadtracks?identifier=${encodeURIComponent(identifier)}`;

// Track decoding
export const DECODE_TRACK = () => `/v${API_VERSION}/decodetrack`;
export const DECODE_TRACKS = () => `/v${API_VERSION}/decodetracks`;

// Route planner
export const ROUTE_PLANNER_STATUS = () => `/v${API_VERSION}/routeplanner/status`;
export const ROUTE_PLANNER_FREE_ADDR = () => `/v${API_VERSION}/routeplanner/free`;
export const ROUTE_PLANNER_FREE_ALL = () => `/v${API_VERSION}/routeplanner/free/all`;

// Server info
export const VERSION = () => '/version';
export const INFO = () => `/v${API_VERSION}/info`;
export const STATS = () => `/v${API_VERSION}/stats`;