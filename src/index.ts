import { LavaShark } from "./lib/LavaShark";
import Node from "./lib/Node";
import Player, { RepeatMode } from "./lib/Player";
import Track from "./lib/queue/Track";
import Filters from "./lib/Filters";

import { version } from "../package.json";

const VERSION = version;

export {
    LavaShark,
    Node,
    Player, RepeatMode,
    Track,
    Filters,
    VERSION
};