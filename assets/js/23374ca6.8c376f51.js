"use strict";(self.webpackChunk_lavashark_website=self.webpackChunk_lavashark_website||[]).push([[2278],{5680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>m});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),y=n,m=u["".concat(p,".").concat(y)]||u[y]||g[y]||i;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},3502:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(8168),n=(r(6540),r(5680));const i={sidebar_position:1},o="LavaShark",l={unversionedId:"README",id:"README",title:"LavaShark",description:"A lightweight Lavalink client built with Node.js.",source:"@site/docs/README.md",sourceDirName:".",slug:"/",permalink:"/docs/next/",draft:!1,editUrl:"https://github.com/hmes98318/LavaShark/blob/main/apps/website/docs/README.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Server configuration",permalink:"/docs/next/server-config"}},p={},s=[{value:"Features",id:"features",level:3},{value:"Installation",id:"installation",level:2},{value:"Other resources",id:"other-resources",level:2}],c={toc:s},u="wrapper";function g(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"lavashark"},"LavaShark"),(0,n.yg)("p",null,"A lightweight Lavalink client built with Node.js.  "),(0,n.yg)("h3",{id:"features"},"Features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Stable  ")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Object-oriented  ")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Speedy and efficient  ")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Minimal CPU/memory footprint"))),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("strong",{parentName:"p"},"LavaShark v2")," only supports ",(0,n.yg)("strong",{parentName:"p"},"Lavalink v4")," nodes.  ")),(0,n.yg)("h2",{id:"installation"},"Installation"),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"Node.js ",(0,n.yg)("strong",{parentName:"p"},"v18.12")," or higher is required.  "),(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},"You need at least one ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/lavalink-devs/Lavalink"},(0,n.yg)("strong",{parentName:"a"},"Lavalink Server"))," node to run. Please refer to the ",(0,n.yg)("a",{parentName:"li",href:"/docs/next/server-config"},(0,n.yg)("strong",{parentName:"a"},"Server Configuration"))," section for setting up the configuration."))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"$ npm install lavashark\n# or\n$ yarn add lavashark\n")),(0,n.yg)("h2",{id:"other-resources"},"Other resources"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/hmes98318/LavaShark"},"Github repository")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/lavashark"},"NPM page")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://discord.gg/7rQEx7SPGr"},"Discord server"))))}g.isMDXComponent=!0}}]);