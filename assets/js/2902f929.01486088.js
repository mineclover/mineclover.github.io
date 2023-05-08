"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[7671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(r),f=o,y=s["".concat(u,".").concat(f)]||s[f]||d[f]||a;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7622:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={date:new Date("2023-05-01T00:00:00.000Z"),modified:new Date("2023-05-03T00:00:00.000Z")},i=void 0,l={unversionedId:"front/redux-toolkit/RTK-query/RTK-query",id:"front/redux-toolkit/RTK-query/RTK-query",title:"RTK-query",description:"\uc0dd\uac01\ubcf4\ub2e4 \ubcf5\uc7a1\ud574\uc11c \uc790\ub8cc\ub97c \ud55c\ucc38 \ucc3e\uc558\ub2e4",source:"@site/docs/front/redux-toolkit/RTK-query/RTK-query.md",sourceDirName:"front/redux-toolkit/RTK-query",slug:"/front/redux-toolkit/RTK-query/",permalink:"/docs/front/redux-toolkit/RTK-query/",draft:!1,editUrl:"https://github.com/mineclover/my-blog/docs/front/redux-toolkit/RTK-query/RTK-query.md",tags:[],version:"current",frontMatter:{date:"2023-05-01T00:00:00.000Z",modified:"2023-05-03T00:00:00.000Z"},sidebar:"tutorialSidebar",previous:{title:"dispatch-serve",permalink:"/docs/front/redux-toolkit/dispatch-serve/"},next:{title:"styled-extend",permalink:"/docs/front/styled-components/styled-extend/"}},u={},c=[{value:"\ub208\uc5d0 \ub744\ub294 \uc7a5\uc810",id:"\ub208\uc5d0-\ub744\ub294-\uc7a5\uc810",level:2},{value:"\uc2e4\uc2b5 \uae30\ud68d",id:"\uc2e4\uc2b5-\uae30\ud68d",level:2}],p={toc:c},s="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\uc0dd\uac01\ubcf4\ub2e4 \ubcf5\uc7a1\ud574\uc11c \uc790\ub8cc\ub97c \ud55c\ucc38 \ucc3e\uc558\ub2e4"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/rtk-query/overview"},"RTK Query Overview | Redux Toolkit")),(0,o.kt)("p",null,"\uc720\ud29c\ube0c\uc5d0\uc11c \ucc3e\ub294\uac8c \uc880 \ub354 \ub098\uc558\ub2e4\n",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=pnpO3o8mLBU&t=1517s"},"React \uc11c\ubc84 \ud1b5\uc2e0\uc5d0 \ud68c\uc758\uac00 \ub4e0\ub2e4\uba74 - RTK Query - YouTube")),(0,o.kt)("h2",{id:"\ub208\uc5d0-\ub744\ub294-\uc7a5\uc810"},"\ub208\uc5d0 \ub744\ub294 \uc7a5\uc810"),(0,o.kt)("p",null,"\uc694\uccad \uad6c\ubb38\uc744 \ucd94\uc0c1\ud654\ud558\uace0 \uce90\uc2f1\ud558\ub294 \uae30\ub2a5"),(0,o.kt)("h2",{id:"\uc2e4\uc2b5-\uae30\ud68d"},"\uc2e4\uc2b5 \uae30\ud68d"),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\uc601\uc0c1\uc5d0 \ub098\uc624\ub294 \uac83 \ucc98\ub7fc \uac01\uac01 \uc694\uccad\ubcf4\ub0b4\uc838\uc11c \uad00\ub9ac\ub418\ub294 \uce74\uc6b4\ud2b8 \uad6c\ud604\ud574\ubcf4\uae30",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\uac19\uc740 id \ub294 \uac19\uc774 \uc5c5\ub370\uc774\ud2b8 \ub418\uc57c\ud55c\ub2e4")))))}d.isMDXComponent=!0}}]);