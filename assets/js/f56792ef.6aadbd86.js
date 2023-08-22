"use strict";(self.webpackChunkmylar_3_website=self.webpackChunkmylar_3_website||[]).push([[6659],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9382:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"Where does the metadata come from?"},i=void 0,s={unversionedId:"where_metadata",id:"where_metadata",title:"Where does the metadata come from?",description:"Mylar uses ComicVine (CV) for it's metadata (series, issues, etc) and for subsequent updates to said metadata.",source:"@site/docs/where_metadata.md",sourceDirName:".",slug:"/where_metadata",permalink:"/mylar3-website/docs/where_metadata",draft:!1,editUrl:"https://github.com/${organizationName}/${projectName}/tree/main/docs/where_metadata.md",tags:[],version:"current",frontMatter:{title:"Where does the metadata come from?"}},l={},c=[],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Mylar uses ComicVine (CV) for it's metadata (series, issues, etc) and for subsequent updates to said metadata."),(0,a.kt)("p",null,"When CV updates their data for a particular series/issue, it's also updated within Mylar shortly thereafter. For new issues (ie. weekly pullist) this occurs every 4 hours. For\nissues that are outside of a 2 week window (previous week + current week) window, it updates only the items that have been updated by CV every 24hrs. "),(0,a.kt)("p",null,"However there are times when CV does not update the issue information that are new for the given week's pullist in a timely manner. When this happens, it may seem that Mylar is\nnot post-processing issues, or that it doesn't know what to do with said files if they've already been manually downloaded and/or exist on indexers and Mylar isn't retrieving\nthem. "),(0,a.kt)("p",null,"Because Mylar relies on CV for issue information, it can't handle anything until the relevant issue information has been posted (lately this has become increasingly later in the\nweek, sometimes even on the Sunday following the Wednesday new releases). In these cases Mylar knows that an issue is due out for that specific week, but can't verify anything\nagainst CV - so it changes the status of it to Wanted on the weekly pullist, but does not mark it as Wanted for the actual series (as there is nothing to link it to yet). "),(0,a.kt)("p",null,"It does create an entry under the Upcoming section in the Wanted tab (at the bottom of the page) to indicate that it's awaiting more information. Once that information has been\nretrieved from CV (by either refreshing the series manually or by letting the pullist refresh every 4 hours automatically), Mylar will move the issue out of the Upcoming\nsection and into the Wanted section whereby it can be searched for, post-processed against, etc."),(0,a.kt)("p",null,"Basically, patience. Sometimes it can take a few extra days for issue information to populate due to CV..."))}p.isMDXComponent=!0}}]);