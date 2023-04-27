"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[7344],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,b=u["".concat(s,".").concat(d)]||u[d]||f[d]||l;return r?n.createElement(b,a(a({ref:t},p),{},{components:r})):n.createElement(b,a({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5321:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const l={sidebar_position:1,date:new Date("2023-03-18T00:00:00.000Z"),modified:new Date("2023-04-27T00:00:00.000Z")},a=void 0,i={unversionedId:"front/protocol/axios-request-controll/axios-request-controll",id:"front/protocol/axios-request-controll/axios-request-controll",title:"axios-request-controll",description:"\uc18c\uac1c",source:"@site/docs/front/protocol/axios-request-controll/axios-request-controll.md",sourceDirName:"front/protocol/axios-request-controll",slug:"/front/protocol/axios-request-controll/",permalink:"/docs/front/protocol/axios-request-controll/",draft:!1,editUrl:"https://github.com/mineclover/my-blog/docs/front/protocol/axios-request-controll/axios-request-controll.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,date:"2023-03-18T00:00:00.000Z",modified:"2023-04-27T00:00:00.000Z"},sidebar:"tutorialSidebar",previous:{title:"open-graph-scraper",permalink:"/docs/front/open-graph-scraper/"},next:{title:"http-pdf-file-post",permalink:"/docs/front/protocol/http-pdf-file-post/"}},s={},c=[{value:"\uc18c\uac1c",id:"\uc18c\uac1c",level:2},{value:"abort \uc0ac\uc6a9\ud558\ub294 \ud328\ud134 \uc608\uc2dc",id:"abort-\uc0ac\uc6a9\ud558\ub294-\ud328\ud134-\uc608\uc2dc",level:3},{value:"AbortController \uad6c\uc870",id:"abortcontroller-\uad6c\uc870",level:2},{value:"signal.aborted",id:"signalaborted",level:3}],p={toc:c},u="wrapper";function f(e){let{components:t,...l}=e;return(0,o.kt)(u,(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\uc18c\uac1c"},"\uc18c\uac1c"),(0,o.kt)("p",null,"\uc791\uc5c5 \uc804\uc5d0 interceptors \uc5d0 \ub123\ub294 \uac83\uacfc\n\uc2dc\uadf8\ub110 \uc8fc\uc785\uc73c\ub85c \uc5f4\ub9b0 request \ub97c \ub2eb\ub294 \uae30\ub2a5\uc744 \uc815\ub9ac\ud588\ub2e4"),(0,o.kt)("p",null,"\uc6b0\uc120 \uc774 \uc791\uc5c5\uc740 \ud300\ud504\ub85c\uc81d\ud2b8\ub85c \uc9c4\ud589\ud588\ub358 \ud640\ub9ac\ubab0\ub9ac \ud504\ub860\ud2b8 PDF \uac1c\ubc1c\uc5d0 \ub4e4\uc5b4\uc788\ub2e4"),(0,o.kt)("p",null,"\ucc38\uace0\ub294 \uc608\uc804\uc5d0 \uc368\ub47f\ub358 \uac78 \ucc38\uace0 \ud588\ub2e4\n",(0,o.kt)("a",{parentName:"p",href:"obsidian://open?vault=source&file=00-Project%2F03-R-%EB%B0%B1%EC%95%A4%EB%93%9C%20%ED%98%91%EC%97%85%2F02%20%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4%20%EB%AF%B8%EB%8B%88%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%2F%EB%A1%9C%EA%B7%B8%EC%9D%B8%20%26%20%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85%2F%ED%8E%98%EC%9D%B4%EC%A7%80%20%EC%9D%B4%EB%8F%99%20%EB%A1%9C%EC%A7%81%2FQ-axios%20%EC%9A%94%EC%B2%AD%20%EC%B7%A8%EC%86%8C%EC%97%90%20%EB%8C%80%ED%95%B4"},"\uba54\ubaa8\ud588\ub358 axios \uc694\uccad \ucde8\uc18c")),(0,o.kt)("p",null,"\ucde8\uc18c\ub97c \uc704\ud55c \ub85c\uc9c1\uc5d0\uc11c \ub808\uac70\uc2dc \ud328\ud134\uc740 cancelToken \uc774\uace0\n\ucd5c\uc2e0 \ud328\ud134\uc740 AbortController \uc774\ub2e4"),(0,o.kt)("p",null,"config \uc758 signal \uc5d0 \uac12\uc744 \ub123\uc5b4\uc11c \uc0ac\uc6a9\ud55c\ub2e4\n\ud55c\ubc88 abort() \ub418\uba74 \uacc4\uc18d \uc694\uccad\uc744 \ube44\ud65c\uc131\ud654 \uc2dc\ud0a4\uae30 \ub54c\ubb38\uc5d0 \uc0c8\ub85c\uc6b4 \ucee8\ud2b8\ub864\ub7ec\ub97c \uc804\uc1a1 \uc774\ubca4\ud2b8 \ubc1c\uc0dd \uc2dc \ub123\uc5b4\uc918\uc57c\ud55c\ub2e4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// react\uc5d0\uc11c \uc2dc\uadf8\ub110 \ubd88\ubcc0\uc131 \ubcf4\uc7a5\nconst controllerRef = useRef(new AbortController());\n\n// \ucde8\uc18c \ub3d9\uc791\uc744 \ucea1\uc290\ud654\ud574\uc11c \uc0ac\uc6a9 ( \uc774\ub984\uc744 \uac04\uc18c\ud654\ud558\uace0, \ud638\ucd9c \uad6c\uc870\uc758 \ucea1\uc290\ud654 )\nconst cancelRequest = () => {\n  controllerRef.current.abort();\n};\n\n// reset\ncontrollerRef.current = new AbortController();\n\n//config\nsignal: controllerRef.current.signal;\n")),(0,o.kt)("h3",{id:"abort-\uc0ac\uc6a9\ud558\ub294-\ud328\ud134-\uc608\uc2dc"},"abort \uc0ac\uc6a9\ud558\ub294 \ud328\ud134 \uc608\uc2dc"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://velog.io/@sehyunny/abort-controller-is-your-friend"},"(\ubc88\uc5ed) AbortController\ub294 \ub2f9\uc2e0\uc758 \uce5c\uad6c\uc785\ub2c8\ub2e4")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AbortSignal.timeout(ms)"),": \uc77c\uc815 \uc2dc\uac04 \uc774\ud6c4\uc5d0 \uc790\ub3d9\uc73c\ub85c \uc911\ub2e8\ub418\ub294 \ub2e8\uc77c\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"AbortSignal")," \uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. \ud544\uc694\ud558\ub2e4\uba74 \uc27d\uac8c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function abortTimeout(ms) {\n  const controller = new AbortController();\n  setTimeout(() => controller.abort(), ms);\n  return controller.signal;\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AbortSignal.any(signals)"),": \uc804\ub2ec\ub41c \uc2dc\uadf8\ub110 \uc911 \uc5b4\ub5a4 \ud558\ub098\ub77c\ub3c4 \uc911\ub2e8\ub418\uba74 \uc911\ub2e8\ub418\ub294 \uc2dc\uadf8\ub110\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ul"},"\ub2e4\uc2dc \ud55c\ubc88 \ub9d0\uc500\ub4dc\ub9ac\uba74, \uc774\ub97c \uc5ec\ub7ec\ubd84 \uc2a4\uc2a4\ub85c \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc8fc\uc758\ud558\uc154\uc57c \ud560 \uac74 \uc544\ubb34\ub7f0 \uc2dc\uadf8\ub110\ub3c4 \uc804\ub2ec\ud558\uc9c0 \uc54a\uc73c\uba74 \ud30c\uc0dd\ub41c \uc2dc\uadf8\ub110\uc740\xa0",(0,o.kt)("em",{parentName:"li"},"\uc808\ub300"),"\xa0\uc911\ub2e8\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function abortAny(signals) {\n  const controller = new AbortController();\n  signals.forEach((signal) => {\n    if (signal.aborted) {\n      controller.abort();\n    } else {\n      signal.addEventListener('abort', () => controller.abort());\n    }\n  });\n  return controller.signal;\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AbortSignal.throwIfAborted()"),": \uc911\ub2e8\ub410\uc744 \uacbd\uc6b0 \uc5d0\ub7ec\ub97c \ubc1c\uc0dd\uc2dc\ud0a4\ub294\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"AbortSignal")," \uc758 \ud5ec\ud37c\uc785\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uacc4\uc18d \ud655\uc778\ud558\ub294 \ub3d9\uc791\uc744 \ubc29\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc544\ub798\uc640 \uac19\uc774 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"if (signal.aborted) {\n    throw new Error(...);\n  }\n  // \uc544\ub798\uc640 \uac19\uc774 \ub429\ub2c8\ub2e4\n  signal.throwIfAborted();\n")),(0,o.kt)("p",null,"\ud3f4\ub9ac\ud544\ud558\uae30 \ub354 \uc5b4\ub835\uc9c0\ub9cc, \ub2e4\uc74c\uacfc \uac19\uc774 \ud5ec\ud37c\ub97c \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function throwIfSignalAborted(signal) {\n  if (signal.aborted) {\n    throw new Error(...);\n  }\n}\n")),(0,o.kt)("h2",{id:"abortcontroller-\uad6c\uc870"},"AbortController \uad6c\uc870"),(0,o.kt)("p",null,"\uc815\ud655\ud788\ub294 siganl \uacfc .abort() \uac00 \uc788\ub2e4\n\uc2dc\uadf8\ub110\uc5d0\uc11c aborted \ub77c\ub294 \uc18d\uc131\uc744 \ud1b5\ud574 \uc815\uc9c0 \uc2e4\ud589\uc5ec\ubd80\ub97c \ud655\uc778 \uac00\ub2a5\ud558\ub2e4"),(0,o.kt)("h3",{id:"signalaborted"},"signal.aborted"),(0,o.kt)("p",null,"false \uac00 \uc2e4\ud589\ub418\uc9c0 \uc54a\uc740 \uac83\uc774\uace0 true \uac00 \uc2e4\ud589\ub41c \uac83...\n",(0,o.kt)("img",{src:r(7645).Z,width:"997",height:"508"})))}f.isMDXComponent=!0},7645:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/01-axios-request-controll-727d0c95ee0fc392b28b63ec24b75c6c.png"}}]);