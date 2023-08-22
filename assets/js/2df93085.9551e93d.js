"use strict";(self.webpackChunkmylar_3_website=self.webpackChunkmylar_3_website||[]).push([[8161],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={title:"Helpful hints"},a=void 0,l={unversionedId:"hints",id:"hints",title:"Helpful hints",description:"- Ensure Comic Location is specified in the configuration (Configuration --\x3e Web Interface --\x3e Comic Location)",source:"@site/docs/hints.md",sourceDirName:".",slug:"/hints",permalink:"/mylar3-website/docs/hints",draft:!1,editUrl:"https://github.com/${organizationName}/${projectName}/tree/main/docs/hints.md",tags:[],version:"current",frontMatter:{title:"Helpful hints"}},s={},c=[],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ensure ",(0,i.kt)("inlineCode",{parentName:"li"},"Comic Location")," is specified in the configuration (",(0,i.kt)("em",{parentName:"li"},"Configuration --\x3e Web Interface --\x3e Comic Location"),")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Mylar auto-creates the comic series directories under the Comic Location. The directory is displayed on the Comic Detail page)."),(0,i.kt)("li",{parentName:"ul"},"If you do not want directories to be created until there are issues present, set ",(0,i.kt)("inlineCode",{parentName:"li"},"create_folders = False")," in the config.ini."))),(0,i.kt)("li",{parentName:"ul"},"A search provider needs to be specified to perform any search-related functions"),(0,i.kt)("li",{parentName:"ul"},"Enabling ",(0,i.kt)("inlineCode",{parentName:"li"},"Automatically Mark Upcoming Issues as Wanted")," in settings will mark any ",(0,i.kt)("strong",{parentName:"li"},"NEW")," comic from the Pullist that is on your 'watchlist' as wanted"),(0,i.kt)("li",{parentName:"ul"},"Add a comic (series) using the Search button or via the Weekly tab (which shows the weekly Pull-list). "),(0,i.kt)("li",{parentName:"ul"},"If you know the CV comicid, enter the full id into the search box (ie. ",(0,i.kt)("inlineCode",{parentName:"li"},"4050-XXXXX"),")"),(0,i.kt)("li",{parentName:"ul"},'If adding a comic fails with "Error", submit a bug and it will be checked out (usually an easy fix)'),(0,i.kt)("li",{parentName:"ul"},"Post-Processing is for adding new issues into existing series on your watchlist, Import is for adding files for series that don't exist on your watchlist into your watchlist"),(0,i.kt)("li",{parentName:"ul"},"For the most up-to-date build, use the python3-dev build",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Master doesn't get updated as frequently (> month), and python3-dev is more-or-less stable"))),(0,i.kt)("li",{parentName:"ul"},"If your comic collection resides on a different computer than your Mylar installation and you have that location as your ComicLocation path - turn OFF enforce permissions (Mylar cannot enforce permissions across different systems).")))}m.isMDXComponent=!0}}]);