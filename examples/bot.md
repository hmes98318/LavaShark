# Example Bot

Download the Lavalink node ([lavalink-devs/Lavalink](https://github.com/lavalink-devs/Lavalink)) and run it or use other public nodes.  

```js
const { Client, GatewayIntentBits } = require('discord.js');
const { LavaShark } = require('lavashark');


const TOKEN = 'your_discord_token'
const prefix = '-' // command prefix


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates,
    ]
});


client.lavashark = new LavaShark({
    nodes: [
        {
            id: 'Node 1',
            hostname: 'localhost',
            port: 2333,
            password: 'youshallnotpass'
        }
    ],
    sendWS: (guildId, payload) => { client.guilds.cache.get(guildId)?.shard.send(payload); }
})




// -- LavaShark events --

// Fired when a track starts playing
client.lavashark.on('trackStart', (player, track) => {
    const channel = client.channels.cache.get(player.textChannelId);

    channel.send(`Now playing \`${track.title}\``);
});

// Fired when the queue ends
client.lavashark.on('queueEnd', (player) => {
    const channel = client.channels.cache.get(player.textChannelId);

    channel.send(`Queue ended!`);

    player.destroy();
});

// This event is needed to catch any errors that occur on LavaShark
client.lavashark.on('error', (node, err) => {
    console.error('[LavaShark]', `Error on node ${node.identifier}`, err.message);
});

// LavaShark debuger
// client.lavashark.on('debug', (msg) => console.log('[Debug]', msg));


// -- Client events --

client.on('ready', () => {
    console.log('Ready!');

    // Starts the lavashark & connects to all lavalink nodes
    client.lavashark.start(client.user.id);
});

// -- REQUIRED --
client.on('raw', (packet) => client.lavashark.handleVoiceUpdate(packet));

// -- Events end --




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

    if (command === 'p') {
        const track = args[0];

        const res = await client.lavashark.search(track);

        if (res.loadType === "LOAD_FAILED") {
            console.log(`Search Error: ${res.exception.message}`);
            return message.reply('Not found music');
        }
        else if (res.loadType === "NO_MATCHES") {
            return message.reply(':x: No matches!');
        }

        // Creates the audio player
        const player = client.lavashark.createPlayer({
            guildId: message.guild.id,
            voiceChannelId: message.member.voice.channelId,
            textChannelId: message.channel.id,
            selfDeaf: true
        });

        player.connect(); // Connects to the voice channel
        player.filters.enabled;

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

    else if (command === 'skip') {
        const player = client.lavashark.getPlayer(message.guild.id);
        player.skip();
        return message.reply('skipped');
    }

    else if (command === 'stop') {
        const player = client.lavashark.getPlayer(message.guild.id);
        player.destroy();
        return message.reply('stopped');
    }

    else if (command === 'join') {
        const player = client.lavashark.getPlayer(message.guild.id);
        player.connect();
        return message.reply('joined');
    }

    else if (command === 'pause') {
        const player = client.lavashark.getPlayer(message.guild.id);
        SUCCESS = await player.pause();
        console.log('SUCCESS pause', SUCCESS);
        return message.reply('paused: ' + SUCCESS);
    }
    else if (command === 'resume') {
        const player = client.lavashark.getPlayer(message.guild.id);
        SUCCESS = await player.resume();
        console.log('SUCCESS resume', SUCCESS);
        return message.reply('resumed: ' + SUCCESS);
    }

    else if (command === 'random') {
        const player = client.lavashark.getPlayer(message.guild.id);
        player.queue.shuffle();
        return message.reply('randomed');
    }


    else if (command === 'v') {
        const version = await client.lavashark.nodes[0].getVersion();
        const info = JSON.stringify(await client.lavashark.nodes[0].getInfo());

        console.log('getVersion():', version);
        console.log(' getInfo():', info);
        message.reply('getVersion():' + version + ' getInfo():' + info);
    }

    else if (command === 'ping') {
        const pings = await client.lavashark.nodesPing();
        let str = pings.map((e, i) => `node ${i + 1}:  ${e}ms`).join('\n');

        console.log(str);
        message.reply(str);
    }


    else if (command === 'filter') {
        const player = client.lavashark.getPlayer(message.guild.id);

        player.filters.setTimescale({ pitch: 1.2, rate: 1.1 }, false)
            .setEqualizer([0.2, 0.2], false)
            .setTremolo({ depth: 0.3, frequency: 14 }, false)
            .apply();

        return message.reply('filtered');
    }
});


client.login(TOKEN);
```