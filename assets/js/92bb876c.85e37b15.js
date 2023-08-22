"use strict";(self.webpackChunkmylar_3_website=self.webpackChunkmylar_3_website||[]).push([[6347],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,y=c["".concat(p,".").concat(d)]||c[d]||u[d]||o;return n?r.createElement(y,i(i({ref:t},m),{},{components:n})):r.createElement(y,i({ref:t},m))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Getting Started",description:"let's get the party started!"},i=void 0,l={unversionedId:"getting_started",id:"getting_started",title:"Getting Started",description:"let's get the party started!",source:"@site/docs/getting_started.md",sourceDirName:".",slug:"/getting_started",permalink:"/mylar3-website/docs/getting_started",draft:!1,editUrl:"https://github.com/${organizationName}/${projectName}/tree/main/docs/getting_started.md",tags:[],version:"current",frontMatter:{title:"Getting Started",description:"let's get the party started!"}},p={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"How to start Mylar",id:"how-to-start-mylar",level:2}],m={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"At least Python version 3.8.1 - most heavily tested with 3.9.4 (2.x is not supported). If you don't want to bork your system (ie. *nix), read about ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/pyenv/pyenv"},"pyenv"),"."),(0,a.kt)("li",{parentName:"ul"},"Unrar (linux/MacOS) or unRaR/winRaR (windows) are required for ComicTagger integration to work. If Unrar/winRaR is not in the system path, the full path to the binary must be specified in the ",(0,a.kt)("inlineCode",{parentName:"li"},"rar_exe_path")," field in ",(0,a.kt)("strong",{parentName:"li"},".ComicTagger/settings")," located in either the root of Mylar or the user's home directory."),(0,a.kt)("li",{parentName:"ul"},"ComicVine API key (found ",(0,a.kt)("a",{parentName:"li",href:"https://comicvine.gamespot.com/api/"},"here"),") - program will have limited to no functionality without it")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"from the root of the mylar installation (the location where you installed Mylar to), run the following command ",(0,a.kt)("inlineCode",{parentName:"li"},"pip3 install -r requirements.txt")," to install all required dependencies not included. "),(0,a.kt)("li",{parentName:"ul"},"Note Windows users may need to run ",(0,a.kt)("inlineCode",{parentName:"li"},"py -m pip install -r requirements.txt")," if the above fails."),(0,a.kt)("li",{parentName:"ul"},"Prefer Docker? Take a look over ",(0,a.kt)("a",{parentName:"li",href:"https://docs.linuxserver.io/images/docker-mylar3"},"here"),"! ")),(0,a.kt)("h2",{id:"how-to-start-mylar"},"How to start Mylar"),(0,a.kt)("p",null,"Depending on your version of python, and how many different versions you have installed on your machine - executing the python command itself may be different than normal. "),(0,a.kt)("p",null,"Typically this is either ",(0,a.kt)("inlineCode",{parentName:"p"},"python")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"python3")," - however in some cases, ",(0,a.kt)("inlineCode",{parentName:"p"},"python3.9")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"python39")," may also work (as an example if you had python3.9 installed, other versions you would just change out the 3.9/39 for that version). Note that this will normally coincide with the pip command above - ",(0,a.kt)("em",{parentName:"p"},"python3 = pip3"),", ",(0,a.kt)("em",{parentName:"p"},"python3.9 = pip3.9"),", ",(0,a.kt)("em",{parentName:"p"},"python = pip"),", etc"),(0,a.kt)("p",null,"From a command prompt/shell, and from within the Mylar program directory - type in ",(0,a.kt)("inlineCode",{parentName:"p"},"<python executable> Mylar.py")," where ",(0,a.kt)("em",{parentName:"p"},"python executable")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"python"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"python3"),",etc as previously mentioned above"),(0,a.kt)("p",null,"Once it's started, check out the wiki entry on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mylar3/mylar3/wiki/Usage#basic-usage"},"Basic Usage")))}u.isMDXComponent=!0}}]);