---
sidebar_position: 2
---

# Getting started

Initializing the LavaShark and discord.js library  

```js
const { Client, GatewayIntentBits } = require('discord.js');
const { LavaShark } = require('lavashark');
const TOKEN = 'your_discord_token';


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

Registering events  

```js
// -- LavaShark events --

// Fired when a track starts playing
client.lavashark.on('trackStart', (player, track) => {
    const channel = client.channels.cache.get(player.textChannelId);
    channel.send(`Now playing \`${track.title}\``);
});

// Fired when the queue ends
client.lavashark.on('queueEnd', (player) => {
    const channel = client.channels.cache.get(player.textChannelId);
    channel.send(`Queue ended`);
    player.destroy();
});

// This event is needed to catch any errors that occur on LavaShark
client.lavashark.on('error', (node, err) => {
    console.error('[LavaShark]', `Error on node ${node.identifier}`, err.message);
});


// -- Client events --

client.on('ready', () => {
    console.log('Ready!');

    // Starts the lavashark & connects to all lavalink nodes
    client.lavashark.start(client.user.id);
});

// -- REQUIRED --
client.on('raw', (packet) => client.lavashark.handleVoiceUpdate(packet));

```

Command configuration  

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

        // Creates the audio player
        const player = client.lavashark.createPlayer({
            guildId: message.guild.id,
            voiceChannelId: message.member.voice.channelId,
            textChannelId: message.channel.id,
            selfDeaf: true
        });

        // Connects to the voice channel
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