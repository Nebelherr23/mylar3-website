"use strict";(self.webpackChunkmylar_3_website=self.webpackChunkmylar_3_website||[]).push([[6864],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),h=i,d=p["".concat(s,".").concat(h)]||p[h]||m[h]||o;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9289:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={title:"Moving to a new file-system?"},a=void 0,l={unversionedId:"guides/locmove",id:"guides/locmove",title:"Moving to a new file-system?",description:"- Make sure that the Comic Location path in the Mylar GUI is pointing to the original location where the comics were previously stored",source:"@site/docs/guides/locmove.md",sourceDirName:"guides",slug:"/guides/locmove",permalink:"/mylar3-website/docs/guides/locmove",draft:!1,editUrl:"https://github.com/${organizationName}/${projectName}/tree/main/docs/guides/locmove.md",tags:[],version:"current",frontMatter:{title:"Moving to a new file-system?"},sidebar:"docsSidebar",previous:{title:"Folder/File Formats",permalink:"/mylar3-website/docs/guides/formats"},next:{title:"Setting up Mylar as a service on Windows",permalink:"/mylar3-website/docs/guides/windows_service"}},s={},c=[],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Make sure that the Comic Location path in the Mylar GUI is pointing to the original location where the comics were previously stored")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Shutdown Mylar and edit the config.ini file")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the config.ini, and find the ","[Update]"," section (if you're running an up-to-date version of Mylar). If you're not up-to-date on either branch, either update prior to doing this, or just search for the variables as they're mentioned")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Set the variables to the following:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"locmove = True"),(0,i.kt)("li",{parentName:"ul"},"new_comdir to the location of where the new comics will be located"),(0,i.kt)("li",{parentName:"ul"},"fftonewcom_dir = True if you have special folder formatting that involves subdirectories (ie. your folder format is set to $Publisher/$Series kinda thing...)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Now when you start up Mylar it will convert all the database locations from the original path to the new_comdir path. Once it's finished, you can verify it worked by just going into a few series and making sure they're pointing to the correct location.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Change the Comic Location path in the GUI to the new location path. Save the config.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Once it's converted, the locmove value will be automatically set back to a False value so that the process doesn't run on every startup sequence thereafter.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Just keep in mind that at this stage, it's just changing the location in the database - it's not creating/moving directories at all. If however, the directories don't exist in the new location, when Mylar attempts to update the series via either a Refresh or via automated scheduling, it will create the directory in the new location. If the creation of directories is something that you don't really want/need - Mylar will only create them when it needs to put an issue in the given series directory if you have the create_folders option in the config.ini set to a value of False. Otherwise, by default it's set to True, it will create if they don't exist (when Refreshing/Adding)."))))}m.isMDXComponent=!0}}]);