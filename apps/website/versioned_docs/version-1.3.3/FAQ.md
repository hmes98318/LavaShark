---
sidebar_position: 4
---

# FAQ

### Node can't connect
If your node is unable to connect, please check the version of your Lavalink node.  
**LavaShark v1** does not support **Lavalink v3** nodes without **REST API**.  
It is only compatible with Lavalink nodes of version **3.7.x**.  


### The bot joined the voice channel, but there was no sound playing.
Check if you have registered the [`GuildVoiceStates`](https://discord-api-types.dev/api/discord-api-types-v10/enum/GatewayIntentBits) gateway intent  
and if you have registered the `raw` event on the Discord client.

```js
client.on('raw', (packet) => client.lavashark.handleVoiceUpdate(packet));
```


### Executed Player.connect(), but the bot didn't join the voice channel.
Check if you're using **await** when calling `Player.connect()` and ensure that you've initialized `sendWS()` when creating the LavaShark instance.  

```js
client.lavashark = new LavaShark({
    nodes: nodeList,
    sendWS: (guildId, payload) => { client.guilds.cache.get(guildId)?.shard.send(payload); }
});
```