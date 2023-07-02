---
sidebar_position: 3
---

# 入門

這裡有一個使用 discord.js v14 的示例教程。如果你使用的是較早版本，請更新它。[discord.js 指南](https://discordjs.guide/) 提供了資源來幫助你進行更新過程。  

### 初始化 LavaShark 和 discord.js 函式庫

```js
const { Client, GatewayIntentBits } = require('discord.js');
const { LavaShark } = require('lavashark');

const TOKEN = 'your_token'; // Discord 機器人 token
const prefix = '-';         // 文字命令前綴


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates,
    ]
});

const lavashark = new LavaShark({
    nodes: [
        {
            id: 'Node 1',
            hostname: 'localhost',
            port: 2333,
            password: 'youshallnotpass'
        }
    ],
    sendWS: (guildId, payload) => { client.guilds.cache.get(guildId)?.shard.send(payload); }
});

client.lavashark = lavashark;
client.login(TOKEN);
```

### 註冊事件

```js
// -- LavaShark 事件 --

// 當音軌開始播放時觸發
client.lavashark.on('trackStart', (player, track) => {
    const channel = client.channels.cache.get(player.textChannelId);
    channel.send(`Now playing \`${track.title}\``);
});

// 當隊列結束時觸發
client.lavashark.on('queueEnd', (player) => {
    const channel = client.channels.cache.get(player.textChannelId);
    channel.send(`Queue ended`);
    player.destroy();
});

// 此事件用於捕捉 LavaShark 上發生的任何錯誤
client.lavashark.on('error', (node, err) => {
    console.error('[LavaShark]', `Error on node ${node.identifier}`, err.message);
});


// -- Client 事件 --

client.on('ready', () => {
    console.log('Ready!');

    // 啟動 LavaShark 並連接到所有 lavalink 節點
    client.lavashark.start(client.user.id);
});

// -- 必需的 --
client.on('raw', (packet) => client.lavashark.handleVoiceUpdate(packet));

```

### 命令配置

```js
client.on('messageCreate', async message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;


    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (!message.member.voice.channel)
        return message.reply('❌ | You are not connected to an audio channel.');

    if (message.guild.members.me.voice.channel && message.member.voice.channelId !== message.guild.members.me.voice.channelId)
        return message.reply('❌ | You are not on the same audio channel as me.');


    console.log('--', command);

    if (command === 'play') {
        const track = args[0];

        const res = await client.lavashark.search(track);

        if (res.loadType === "LOAD_FAILED") {
            console.log(`Search Error: ${res.exception.message}`);
            return message.reply('❌ | Not found music.');
        }
        else if (res.loadType === "NO_MATCHES") {
            console.log(`Search Error: NO_MATCHES`);
            return message.reply('❌ | No matches.');
        }

        // 創建音頻播放器
        const player = client.lavashark.createPlayer({
            guildId: message.guild.id,
            voiceChannelId: message.member.voice.channelId,
            textChannelId: message.channel.id,
            selfDeaf: true
        });

        // 連接到語音頻道
        try {
            player.connect();
        } catch (error) {
            console.log(error);
            return message.reply('❌ | I can\'t join voice channel.');
        }

        if (res.loadType === 'PLAYLIST_LOADED') {
            for (const track of res.tracks) {
                track.setRequester(message.user);
                player.queue.add(track);
            }

            message.reply(`Playlist \`${res.playlistInfo.name}\` loaded!`);
        }
        else {
            const track = res.tracks[0];
            track.setRequester(message.user);

            player.queue.add(track);
            message.reply(`Queued \`${track.title}\``);
        }

        if (!player.playing) player.play();
    }
});
```