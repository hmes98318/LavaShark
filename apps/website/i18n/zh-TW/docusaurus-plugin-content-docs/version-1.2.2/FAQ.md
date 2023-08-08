---
sidebar_position: 4
---

# FAQ 常見問題

### 節點無法連接
如果你的節點無法連接，請檢查你的 Lavalink 節點版本  
**LavaShark v1** 不支持不帶有 **REST API** 的 **Lavalink v3** 節點  
僅對版本 **3.7.x** 的 Lavalink 節點兼容  


### 機器人加入頻道但沒有任何聲音播出
檢查你是否註冊了 [`GuildVoiceStates`](https://discord-api-types.dev/api/discord-api-types-v10/enum/GatewayIntentBits) 的網關意圖，  
以及是否在 discord 的 client 上註冊 `raw` 事件。

```js
client.on('raw', (packet) => client.lavashark.handleVoiceUpdate(packet));
```