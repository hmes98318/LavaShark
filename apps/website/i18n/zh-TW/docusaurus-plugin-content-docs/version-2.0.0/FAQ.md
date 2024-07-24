---
sidebar_position: 4
---

# FAQ 常見問題

### 節點無法連接
如果你的節點無法連接，請檢查你的 Lavalink 節點版本。  
**LavaShark v2** 只支援 **Lavalink v4** 節點。  


### 機器人加入頻道但沒有任何聲音播出
檢查你是否註冊了 [`GuildVoiceStates`](https://discord-api-types.dev/api/discord-api-types-v10/enum/GatewayIntentBits) 的網關意圖，  
以及是否在 discord 的 client 上註冊 `raw` 事件。

```js
client.on('raw', (packet) => client.lavashark.handleVoiceUpdate(packet));
```


### 執行了Player.connect()，但機器人沒有加入語音頻道。
檢查調用 `Player.connect()` 時是否使用 **await**，並確保在創建 LavaShark 實例時已初始化 `sendWS()`。  

```js
client.lavashark = new LavaShark({
    nodes: nodeList,
    sendWS: (guildId, payload) => { client.guilds.cache.get(guildId)?.shard.send(payload); }
});
```