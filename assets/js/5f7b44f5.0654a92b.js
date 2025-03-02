"use strict";(self.webpackChunk_lavashark_website=self.webpackChunk_lavashark_website||[]).push([[5510],{4761:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=t(8168),a=(t(6540),t(5680));const s={sidebar_position:3},o="Getting started",i={unversionedId:"getting-started",id:"version-1.1.1/getting-started",title:"Getting started",description:"Here is an example tutorial for using discord.js v14. If you're using an earlier version, please update it. The discord.js Guide provides resources to help you with the update process.",source:"@site/versioned_docs/version-1.1.1/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/1.1.1/getting-started",draft:!1,editUrl:"https://github.com/hmes98318/LavaShark/blob/main/apps/website/versioned_docs/version-1.1.1/getting-started.md",tags:[],version:"1.1.1",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Server configuration",permalink:"/docs/1.1.1/server-config"},next:{title:"Classes",permalink:"/docs/1.1.1/category/classes"}},l={},c=[{value:"Initializing the LavaShark and discord.js library",id:"initializing-the-lavashark-and-discordjs-library",level:3},{value:"Registering events",id:"registering-events",level:3},{value:"Command configuration",id:"command-configuration",level:3}],d={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"getting-started"},"Getting started"),(0,a.yg)("p",null,"Here is an example tutorial for using discord.js v14. If you're using an earlier version, please update it. The ",(0,a.yg)("a",{parentName:"p",href:"https://discordjs.guide/"},"discord.js Guide")," provides resources to help you with the update process.  "),(0,a.yg)("h3",{id:"initializing-the-lavashark-and-discordjs-library"},"Initializing the LavaShark and discord.js library"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const { Client, GatewayIntentBits } = require('discord.js');\nconst { LavaShark } = require('lavashark');\n\nconst TOKEN = 'your_token'; // Discord bot token\nconst prefix = '-';         // Command prefix\n\n\nconst client = new Client({\n    intents: [\n        GatewayIntentBits.Guilds,\n        GatewayIntentBits.GuildMessages,\n        GatewayIntentBits.MessageContent,\n        GatewayIntentBits.GuildVoiceStates,\n    ]\n});\n\nconst lavashark = new LavaShark({\n    nodes: [\n        {\n            id: 'Node 1',\n            hostname: 'localhost',\n            port: 2333,\n            password: 'youshallnotpass'\n        }\n    ],\n    sendWS: (guildId, payload) => { client.guilds.cache.get(guildId)?.shard.send(payload); }\n});\n\nclient.lavashark = lavashark;\nclient.login(TOKEN);\n")),(0,a.yg)("h3",{id:"registering-events"},"Registering events"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"// -- LavaShark events --\n\n// Fired when a track starts playing\nclient.lavashark.on('trackStart', (player, track) => {\n    const channel = client.channels.cache.get(player.textChannelId);\n    channel.send(`Now playing \\`${track.title}\\``);\n});\n\n// Fired when the queue ends\nclient.lavashark.on('queueEnd', (player) => {\n    const channel = client.channels.cache.get(player.textChannelId);\n    channel.send(`Queue ended`);\n    player.destroy();\n});\n\n// This event is needed to catch any errors that occur on LavaShark\nclient.lavashark.on('error', (node, err) => {\n    console.error('[LavaShark]', `Error on node ${node.identifier}`, err.message);\n});\n\n\n// -- Client events --\n\nclient.on('ready', () => {\n    console.log('Ready!');\n\n    // Starts the lavashark & connects to all lavalink nodes\n    client.lavashark.start(client.user.id);\n});\n\n// -- REQUIRED --\nclient.on('raw', (packet) => client.lavashark.handleVoiceUpdate(packet));\n\n")),(0,a.yg)("h3",{id:"command-configuration"},"Command configuration"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"client.on('messageCreate', async message => {\n    if (message.author.bot) return;\n    if (message.content.indexOf(prefix) !== 0) return;\n\n\n    const args = message.content.slice(prefix.length).trim().split(/ +/g);\n    const command = args.shift().toLowerCase();\n\n    if (!message.member.voice.channel)\n        return message.reply('\u274c | You are not connected to an audio channel.');\n\n    if (message.guild.members.me.voice.channel && message.member.voice.channelId !== message.guild.members.me.voice.channelId)\n        return message.reply('\u274c | You are not on the same audio channel as me.');\n\n\n    console.log('--', command);\n\n    if (command === 'play') {\n        const track = args[0];\n\n        const res = await client.lavashark.search(track);\n\n        if (res.loadType === \"LOAD_FAILED\") {\n            console.log(`Search Error: ${res.exception.message}`);\n            return message.reply('\u274c | Not found music.');\n        }\n        else if (res.loadType === \"NO_MATCHES\") {\n            console.log(`Search Error: NO_MATCHES`);\n            return message.reply('\u274c | No matches.');\n        }\n\n        // Creates the audio player\n        const player = client.lavashark.createPlayer({\n            guildId: message.guild.id,\n            voiceChannelId: message.member.voice.channelId,\n            textChannelId: message.channel.id,\n            selfDeaf: true\n        });\n\n        // Connects to the voice channel\n        try {\n            player.connect();\n        } catch (error) {\n            console.log(error);\n            return message.reply('\u274c | I can\\'t join voice channel.');\n        }\n\n        if (res.loadType === 'PLAYLIST_LOADED') {\n            for (const track of res.tracks) {\n                track.setRequester(message.user);\n                player.queue.add(track);\n            }\n\n            message.reply(`Playlist \\`${res.playlistInfo.name}\\` loaded!`);\n        }\n        else {\n            const track = res.tracks[0];\n            track.setRequester(message.user);\n\n            player.queue.add(track);\n            message.reply(`Queued \\`${track.title}\\``);\n        }\n\n        if (!player.playing) player.play();\n    }\n});\n")))}p.isMDXComponent=!0},5680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>m});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),g=a,m=u["".concat(l,".").concat(g)]||u[g]||p[g]||s;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=g;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);