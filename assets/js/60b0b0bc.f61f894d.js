"use strict";(self.webpackChunkmylar_3_website=self.webpackChunkmylar_3_website||[]).push([[9828],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g=r.createContext({}),s=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(g.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,g=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,d=p["".concat(g,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={title:"Debug Logging"},a=void 0,l={unversionedId:"guides/debug_logging",id:"guides/debug_logging",title:"Debug Logging",description:"Debug (sometimes we call it Verbose) logging logs more detailed information to the log files from the point of activation.",source:"@site/docs/guides/debug_logging.md",sourceDirName:"guides",slug:"/guides/debug_logging",permalink:"/mylar3-website/docs/guides/debug_logging",draft:!1,editUrl:"https://github.com/${organizationName}/${projectName}/tree/main/docs/guides/debug_logging.md",tags:[],version:"current",frontMatter:{title:"Debug Logging"},sidebar:"docsSidebar",previous:{title:"Carepackage",permalink:"/mylar3-website/docs/guides/carepackage"},next:{title:"Automatic Backups",permalink:"/mylar3-website/docs/guides/auto_backups"}},g={},s=[{value:"How to enable Debug logging",id:"how-to-enable-debug-logging",level:2}],u={toc:s},p="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Debug (sometimes we call it Verbose) logging logs more detailed information to the log files from the point of activation. "),(0,o.kt)("p",null,"The point of activation is either on startup, or while Mylar is running."),(0,o.kt)("h2",{id:"how-to-enable-debug-logging"},"How to enable Debug logging"),(0,o.kt)("p",null,"There are 3 ways to enable debug logging:"),(0,o.kt)("p",null,"1) ","[",(0,o.kt)("strong",{parentName:"p"},"Activation: startup"),"]"," Use the ",(0,o.kt)("strong",{parentName:"p"},"-v")," switch on the command line when you execute Mylar (ie. ",(0,o.kt)("em",{parentName:"p"},"python Mylar.py -v"),")"),(0,o.kt)("p",null,"2) ","[",(0,o.kt)("strong",{parentName:"p"},"Activation: startup"),"]"," In the config.ini file, change the ",(0,o.kt)("strong",{parentName:"p"},"log_level")," to a value of ",(0,o.kt)("strong",{parentName:"p"},"2")," (ie. ",(0,o.kt)("em",{parentName:"p"},"log_level = 2"),")"),(0,o.kt)("p",null,"3) ","[",(0,o.kt)("strong",{parentName:"p"},"Activation: running"),"]"," In the GUI, go to the ",(0,o.kt)("strong",{parentName:"p"},"History tab / View Logs button / Toggle Debug Logging ON"),". You'll get a brief message in the logs (on that same page) indicating that verbose/debug logging has been enabled for the session."),(0,o.kt)("p",null,"Keep in mind that options 1 & 2 are persistent thru restarts of Mylar. Option 3 will revert back to whatever you have started Mylar with on the next restart."),(0,o.kt)("p",null,"Also, if you use the command line option that will over-ride whatever value you have in the config.ini."))}c.isMDXComponent=!0}}]);