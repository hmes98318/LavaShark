"use strict";(self.webpackChunk_lavashark_website=self.webpackChunk_lavashark_website||[]).push([[6154],{5680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>y});var a=t(6540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),p=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=p(e.components);return a.createElement(s.Provider,{value:r},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=n,y=u["".concat(s,".").concat(m)]||u[m]||g[m]||i;return t?a.createElement(y,o(o({ref:r},c),{},{components:t})):a.createElement(y,o({ref:r},c))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3907:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(8168),n=(t(6540),t(5680));const i={sidebar_position:1},o="LavaShark",l={unversionedId:"README",id:"version-1.3.3/README",title:"LavaShark",description:"A lightweight Lavalink client built with Node.js.",source:"@site/versioned_docs/version-1.3.3/README.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/hmes98318/LavaShark/blob/main/apps/website/versioned_docs/version-1.3.3/README.md",tags:[],version:"1.3.3",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Server configuration",permalink:"/docs/server-config"}},s={},p=[{value:"Features",id:"features",level:3},{value:"Installation",id:"installation",level:2},{value:"Other resources",id:"other-resources",level:2}],c={toc:p},u="wrapper";function g(e){let{components:r,...t}=e;return(0,n.yg)(u,(0,a.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"lavashark"},"LavaShark"),(0,n.yg)("p",null,"A lightweight Lavalink client built with Node.js.  "),(0,n.yg)("h3",{id:"features"},"Features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Stable  ")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Object-oriented  ")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Speedy and efficient  ")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Minimal CPU/memory footprint"))),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"Only compatible with Lavalink server that support ",(0,n.yg)("strong",{parentName:"p"},"REST API")," (version 3.7.x).",(0,n.yg)("br",{parentName:"p"}),"\n","Current stable Lavalink server version ",(0,n.yg)("strong",{parentName:"p"},"v3.7.11"),"  ")),(0,n.yg)("h2",{id:"installation"},"Installation"),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"Node.js ",(0,n.yg)("strong",{parentName:"p"},"v18.12")," or higher is required.  "),(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},"You need at least one ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/lavalink-devs/Lavalink"},(0,n.yg)("strong",{parentName:"a"},"Lavalink Server"))," node to run. Please refer to the ",(0,n.yg)("a",{parentName:"li",href:"/docs/server-config"},(0,n.yg)("strong",{parentName:"a"},"Server Configuration"))," section for setting up the configuration."))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"$ npm install lavashark\n# or\n$ yarn add lavashark\n")),(0,n.yg)("h2",{id:"other-resources"},"Other resources"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/hmes98318/LavaShark"},"Github repository")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/lavashark"},"NPM page")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://discord.gg/7rQEx7SPGr"},"Discord server"))))}g.isMDXComponent=!0}}]);