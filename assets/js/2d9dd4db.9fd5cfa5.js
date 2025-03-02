"use strict";(self.webpackChunk_lavashark_website=self.webpackChunk_lavashark_website||[]).push([[7948],{4228:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=t(8168),r=(t(6540),t(5680));const s={sidebar_position:3},i="Getting started",o={unversionedId:"getting-started",id:"version-1.2.1/getting-started",title:"Getting started",description:"Here is an example tutorial for using discord.js v14. If you're using an earlier version, please update it. The discord.js Guide provides resources to help you with the update process.",source:"@site/versioned_docs/version-1.2.1/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/1.2.1/getting-started",draft:!1,editUrl:"https://github.com/hmes98318/LavaShark/blob/main/apps/website/versioned_docs/version-1.2.1/getting-started.md",tags:[],version:"1.2.1",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Server configuration",permalink:"/docs/1.2.1/server-config"},next:{title:"FAQ",permalink:"/docs/1.2.1/FAQ"}},l={},c=[{value:"Initializing the LavaShark and discord.js library",id:"initializing-the-lavashark-and-discordjs-library",level:3},{value:"Registering events",id:"registering-events",level:3},{value:"Command configuration",id:"command-configuration",level:3}],d={toc:c},p="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"getting-started"},"Getting started"),(0,r.yg)("p",null,"Here is an example tutorial for using discord.js v14. If you're using an earlier version, please update it. The ",(0,r.yg)("a",{parentName:"p",href:"https://discordjs.guide/"},"discord.js Guide")," provides resources to help you with the update process.  "),(0,r.yg)("h3",{id:"initializing-the-lavashark-and-discordjs-library"},"Initializing the LavaShark and discord.js library"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"const { Client, GatewayIntentBits } = require('discord.js');\nconst { LavaShark } = require('lavashark');\n\nconst TOKEN = 'your_token'; // Discord bot token\nconst prefix = '-';         // Command prefix\n\n\nconst client = new Client({\n    intents: [\n        GatewayIntentBits.Guilds,\n        GatewayIntentBits.GuildMessages,\n        GatewayIntentBits.MessageContent,\n        GatewayIntentBits.GuildVoiceStates,\n    ]\n});\n\nconst lavashark = new LavaShark({\n    nodes: [\n        {\n            id: 'Node 1',\n            hostname: 'localhost',\n            port: 2333,\n            password: 'youshallnotpass'\n        }\n    ],\n    sendWS: (guildId, payload) => { client.guilds.cache.get(guildId)?.shard.send(payload); }\n});\n\nclient.lavashark = lavashark;\nclient.login(TOKEN);\n")),(0,r.yg)("h3",{id:"registering-events"},"Registering events"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"// -- LavaShark events --\n\n// Fired when a track starts playing\nclient.lavashark.on('trackStart', (player, track) => {\n    const channel = client.channels.cache.get(player.textChannelId);\n    channel.send(`Now playing \\`${track.title}\\``);\n});\n\n// Fired when the queue ends\nclient.lavashark.on('queueEnd', (player) => {\n    const channel = client.channels.cache.get(player.textChannelId);\n    channel.send(`Queue ended`);\n    player.destroy();\n});\n\n// This event is needed to catch any errors that occur on LavaShark\nclient.lavashark.on('error', (node, err) => {\n    console.error('[LavaShark]', `Error on node ${node.identifier}`, err.message);\n});\n\n\n// -- Client events --\n\nclient.on('ready', () => {\n    console.log('Ready!');\n\n    // Starts the lavashark & connects to all lavalink nodes\n    client.lavashark.start(client.user.id);\n});\n\n// -- REQUIRED --\nclient.on('raw', (packet) => client.lavashark.handleVoiceUpdate(packet));\n\n")),(0,r.yg)("h3",{id:"command-configuration"},"Command configuration"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"client.on('messageCreate', async message => {\n    if (message.author.bot) return;\n    if (message.content.indexOf(prefix) !== 0) return;\n\n\n    const args = message.content.slice(prefix.length).trim().split(/ +/g);\n    const command = args.shift().toLowerCase();\n\n    if (!message.member.voice.channel)\n        return message.reply('\u274c | You are not connected to an audio channel.');\n\n    if (message.guild.members.me.voice.channel && message.member.voice.channelId !== message.guild.members.me.voice.channelId)\n        return message.reply('\u274c | You are not on the same audio channel as me.');\n\n\n    console.log('--', command);\n\n    if (command === 'play') {\n        const track = args[0];\n\n        const res = await client.lavashark.search(track);\n\n        if (res.loadType === \"LOAD_FAILED\") {\n            console.log(`Search Error: ${res.exception.message}`);\n            return message.reply('\u274c | Not found music.');\n        }\n        else if (res.loadType === \"NO_MATCHES\") {\n            console.log(`Search Error: NO_MATCHES`);\n            return message.reply('\u274c | No matches.');\n        }\n\n        // Creates the audio player\n        const player = client.lavashark.createPlayer({\n            guildId: message.guild.id,\n            voiceChannelId: message.member.voice.channelId,\n            textChannelId: message.channel.id,\n            selfDeaf: true\n        });\n\n        try {\n            await player.connect(); // Connects to the voice channel\n        } catch (error) {\n            console.log(error);\n            return message.reply({ content: `\u274c | I can't join audio channel.`, allowedMentions: { repliedUser: false } });\n        }\n\n        if (res.loadType === 'PLAYLIST_LOADED') {\n            player.addTracks(res.tracks, message.author);\n\n            message.reply(`Playlist \\`${res.playlistInfo.name}\\` loaded!`);\n        }\n        else {\n            const track = res.tracks[0];\n            player.addTracks(res.tracks[0], message.author);\n            message.reply(`Added \\`${track.title}\\``);\n        }\n\n        if (!player.playing) await player.play();\n    }\n});\n")))}g.isMDXComponent=!0},5680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>m});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(t),u=r,m=p["".concat(l,".").concat(u)]||p[u]||g[u]||s;return t?a.createElement(m,i(i({ref:n},d),{},{components:t})):a.createElement(m,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);