import type { Queue } from "../lib/queue/Queue";
import type { VoiceServerUpdateData } from "./LavaShark.types";
export type PlayerOptions = {
    /** The guild id that player belongs to */
    guildId: string;
    /** The voice channel id */
    voiceChannelId: string;
    /** The text channel id */
    textChannelId?: string;
    /** Whether the bot joins the voice channel deafened or not */
    selfDeaf?: boolean;
    /** Whether the bot joins the voice channel muted or not */
    selfMute?: boolean;
    /** The queue object that player will use */
    queue?: Queue;
};
export type VoiceState = {
    sessionId?: string;
    event?: VoiceServerUpdateData;
};
export type PlayOptions = {
    startTime?: number;
    endTime?: number;
    pause?: boolean;
    noReplace?: boolean;
};
