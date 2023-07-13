import { LavaShark } from "./lib/LavaShark";
import Node, { NodeState } from "./lib/Node";
import Player, { ConnectionState, RepeatMode } from "./lib/Player";
import Track from "./lib/queue/Track";
import Filters from "./lib/Filters";

import { version } from "../package.json";

const VERSION = version;


export {
    ConnectionState,
    Filters,
    LavaShark,
    Node,
    NodeState,
    Player,
    RepeatMode,
    Track,
    VERSION
};