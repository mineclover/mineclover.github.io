"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[8964],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={date:new Date("2023-03-30T00:00:00.000Z"),modified:new Date("2023-04-27T00:00:00.000Z")},i=void 0,c={unversionedId:"topic/tech-review/T2023-03-30/echart \uc9c8\ubb38",id:"topic/tech-review/T2023-03-30/echart \uc9c8\ubb38",title:"echart \uc9c8\ubb38",description:"echarts-for-react \uc5d0\uc11c regression \uc2a4\ud0c0\uc77c\uc744 \uc801\uc6a9\ud558\ub294 \ubc29\ubc95\uc740 option \uac1d\uccb4 \ub0b4\uc5d0\uc11c series \uc18d\uc131\uc744 \uc124\uc815\ud558\uba74 \ub429\ub2c8\ub2e4. \uc544\ub798\ub294 \uc608\uc2dc \ucf54\ub4dc\uc785\ub2c8\ub2e4.",source:"@site/docs/topic/tech-review/T2023-03-30/echart \uc9c8\ubb38.md",sourceDirName:"topic/tech-review/T2023-03-30",slug:"/topic/tech-review/T2023-03-30/echart \uc9c8\ubb38",permalink:"/docs/topic/tech-review/T2023-03-30/echart \uc9c8\ubb38",draft:!1,editUrl:"https://github.com/mineclover/my-blog/docs/topic/tech-review/T2023-03-30/echart \uc9c8\ubb38.md",tags:[],version:"current",frontMatter:{date:"2023-03-30T00:00:00.000Z",modified:"2023-04-27T00:00:00.000Z"},sidebar:"tutorialSidebar",previous:{title:"T2023-03-30",permalink:"/docs/topic/tech-review/T2023-03-30/"},next:{title:"\ub2e8\uc5b4 \uac80\uc0c9 \uc778\ub371\uc2f1 \uc801\uc6a9 \uc54c\uace0\ub9ac\uc998 \ub9cc\ub4e4\uae30",permalink:"/docs/topic/tech-review/T2023-03-30/\ub2e8\uc5b4 \uac80\uc0c9 \uc778\ub371\uc2f1 \uc801\uc6a9 \uc54c\uace0\ub9ac\uc998 \ub9cc\ub4e4\uae30"}},p={},l=[],s={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"echarts-for-react")," \uc5d0\uc11c regression \uc2a4\ud0c0\uc77c\uc744 \uc801\uc6a9\ud558\ub294 \ubc29\ubc95\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," \uac1d\uccb4 \ub0b4\uc5d0\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"series")," \uc18d\uc131\uc744 \uc124\uc815\ud558\uba74 \ub429\ub2c8\ub2e4. \uc544\ub798\ub294 \uc608\uc2dc \ucf54\ub4dc\uc785\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import ReactEcharts from 'echarts-for-react';\n\nconst data = [\n  [0, 0],\n  [1, 2],\n  [2, 3],\n  [3, 6],\n  [4, 8],\n  [5, 9],\n];\n\nconst option = {\n  xAxis: {\n    type: 'value',\n  },\n  yAxis: {\n    type: 'value',\n  },\n  series: [\n    {\n      type: 'scatter',\n      data: data,\n    },\n    {\n      type: 'line',\n      symbol: 'none',\n      data: getRegression(data),\n      lineStyle: {\n        color: '#f00',\n        width: 2,\n        type: 'dashed',\n      },\n    },\n  ],\n};\n\nfunction getRegression(data) {\n  // Your regression function here\n  // This function should return an array of points that represents the regression line\n}\n\nfunction MyEchartsComponent() {\n  return <ReactEcharts option={option} />;\n}\n")),(0,o.kt)("p",null,"\uc704 \ucf54\ub4dc\uc5d0\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," \ub294 \uc0b0\uc810\ub3c4 \ub370\uc774\ud130\ub97c \ub098\ud0c0\ub0b4\uba70, ",(0,o.kt)("inlineCode",{parentName:"p"},"getRegression")," \ud568\uc218\ub294 \uc801\ud569\ud55c \ud68c\uadc0\uc2dd\uc744 \uacc4\uc0b0\ud558\uc5ec \uadf8 \uacb0\uacfc\ub97c \ubc18\ud658\ud574\uc57c \ud569\ub2c8\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," \uac1d\uccb4\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"series")," \uc18d\uc131\uc5d0\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," \uc774 ",(0,o.kt)("inlineCode",{parentName:"p"},"scatter")," \uc778 \uc2dc\ub9ac\uc988\ub294 \uc0b0\uc810\ub3c4\ub97c \ub098\ud0c0\ub0b4\uba70, ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," \uc774 ",(0,o.kt)("inlineCode",{parentName:"p"},"line")," \uc778 \uc2dc\ub9ac\uc988\ub294 \ud68c\uadc0\uc120\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"p"},"lineStyle")," \uc18d\uc131\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud68c\uadc0\uc120\uc758 \uc2a4\ud0c0\uc77c\uc744 \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}d.isMDXComponent=!0}}]);