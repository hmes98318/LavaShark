"use strict";(self.webpackChunk_lavashark_website=self.webpackChunk_lavashark_website||[]).push([[311],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),k=r,u=c["".concat(o,".").concat(k)]||c[k]||y[k]||i;return n?a.createElement(u,p(p({ref:t},d),{},{components:n})):a.createElement(u,p({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=k;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:r,p[1]=l;for(var s=2;s<i;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7424:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={},p="types.PlayerEventPayload",l={unversionedId:"types/interfaces/types.PlayerEventPayload",id:"version-1.1.1/types/interfaces/types.PlayerEventPayload",title:"types.PlayerEventPayload",description:"@types.PlayerEventPayload",source:"@site/versioned_docs/version-1.1.1/types/interfaces/types.PlayerEventPayload.md",sourceDirName:"types/interfaces",slug:"/types/interfaces/types.PlayerEventPayload",permalink:"/docs/types/interfaces/types.PlayerEventPayload",draft:!1,editUrl:"https://github.com/hmes98318/LavaShark/blob/main/apps/website/versioned_docs/version-1.1.1/types/interfaces/types.PlayerEventPayload.md",tags:[],version:"1.1.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"types.ITrack",permalink:"/docs/types/interfaces/types.ITrack"},next:{title:"types.SpeakingEventPayload",permalink:"/docs/types/interfaces/types.SpeakingEventPayload"}},o={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"guildId",id:"guildid",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"op",id:"op",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in-2",level:4}],d={toc:s},c="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"typesplayereventpayload"},"types.PlayerEventPayload"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/types/"},"@types"),".PlayerEventPayload"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"PlayerEventPayload"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/types/interfaces/types.TrackStartEvent"},(0,r.kt)("inlineCode",{parentName:"a"},"TrackStartEvent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/types/interfaces/types.TrackEndEvent"},(0,r.kt)("inlineCode",{parentName:"a"},"TrackEndEvent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/types/interfaces/types.TrackExceptionEvent"},(0,r.kt)("inlineCode",{parentName:"a"},"TrackExceptionEvent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/types/interfaces/types.TrackStuckEvent"},(0,r.kt)("inlineCode",{parentName:"a"},"TrackStuckEvent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/types/interfaces/types.WebSocketClosedEvent"},(0,r.kt)("inlineCode",{parentName:"a"},"WebSocketClosedEvent"))))),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/types/interfaces/types.PlayerEventPayload#guildid"},"guildId")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/types/interfaces/types.PlayerEventPayload#op"},"op")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/types/interfaces/types.PlayerEventPayload#type"},"type"))),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"guildid"},"guildId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"guildId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L290"},"@types/index.ts:290")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"op"},"op"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"op"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"event"')),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L288"},"@types/index.ts:288")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"type"},"type"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"TrackStartEvent"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"TrackEndEvent"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"TrackExceptionEvent"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"TrackStuckEvent"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"WebSocketClosedEvent"')),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hmes98318/LavaShark/blob/main/src/@types/index.ts#L289"},"@types/index.ts:289")))}y.isMDXComponent=!0}}]);