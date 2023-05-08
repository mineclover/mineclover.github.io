"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[8824],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=i(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:o,s[1]=c;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1,date:new Date("2023-03-14T00:00:00.000Z"),modified:new Date("2023-05-01T00:00:00.000Z")},s=void 0,c={unversionedId:"front/redux-toolkit/array-export-anti-patten/array-export-anti-patten",id:"front/redux-toolkit/array-export-anti-patten/array-export-anti-patten",title:"array-export-anti-patten",description:"\ud0c0\uc785 \ucd94\ub860 \uc548\ub418\ub294 \uc548\ud2f0\ud328\ud134 \uc18c\uac1c",source:"@site/docs/front/redux-toolkit/array-export-anti-patten/array-export-anti-patten.md",sourceDirName:"front/redux-toolkit/array-export-anti-patten",slug:"/front/redux-toolkit/array-export-anti-patten/",permalink:"/docs/front/redux-toolkit/array-export-anti-patten/",draft:!1,editUrl:"https://github.com/mineclover/my-blog/docs/front/redux-toolkit/array-export-anti-patten/array-export-anti-patten.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,date:"2023-03-14T00:00:00.000Z",modified:"2023-05-01T00:00:00.000Z"},sidebar:"tutorialSidebar",previous:{title:"context-patten",permalink:"/docs/front/react-toast/context-patten/"},next:{title:"basic",permalink:"/docs/front/redux-toolkit/basic/"}},p={},i=[{value:"\uc18c\uac1c",id:"\uc18c\uac1c",level:2},{value:"\ubcc0\uacbd \ud6c4 \ucf54\ub4dc",id:"\ubcc0\uacbd-\ud6c4-\ucf54\ub4dc",level:2}],l={toc:i},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\ud0c0\uc785 \ucd94\ub860 \uc548\ub418\ub294 \uc548\ud2f0\ud328\ud134 \uc18c\uac1c\nTypeScript 4.9.5"),(0,o.kt)("h2",{id:"\uc18c\uac1c"},"\uc18c\uac1c"),(0,o.kt)("p",null,"\uc74c... \uae30\ub2a5\uc740 \uc798\ub418\ub294\ub370 \uc65c \uc548\ud2f0\ud328\ud134\uc774\ub0d0...\n\uc77c\ub2e8 Default \uc5ec\uc11c \ucc38\uc870\ud615\uc73c\ub85c \ubcc0\ud558\uba74\uc11c \uc548\ub418\ub294 \uac83 \uac19\uc74c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import type { PayloadAction } from '@reduxjs/toolkit';\nimport { createSlice } from '@reduxjs/toolkit';\nimport type { RootState } from '@/app/store';\nimport { components, markdowns } from '@/router/Router';\n\nconst postState = markdowns;\n\nexport const markdownSlice = createSlice({\n  name: 'posts',\n  initialState: postState,\n  // The `reducers` field lets us define reducers and generate associated actions\n  reducers: {},\n});\n\nconst componentsState = components;\n\nexport const componentsSlice = createSlice({\n  name: 'components',\n  initialState: componentsState,\n  // The `reducers` field lets us define reducers and generate associated actions\n  reducers: {},\n});\n\ninterface SubjectObject {\n  [key: string]: Subject[];\n}\n\ninterface Subject {\n  index: string;\n  path: string;\n}\n\nexport const selectSubject = (state: RootState) => {\n  const result: SubjectObject = {};\n  state.posts.forEach((post) => {\n    const splitPath = post.path.split('/');\n    if (result[post.category] === undefined) result[post.category] = [];\n    result[post.category].push({ index: splitPath[1], path: post.path });\n  });\n  console.log('selectSubject', result);\n\n  return result;\n};\nexport const order = ['front', 'back', 'work', 'language', 'blog'];\nexport default [markdownSlice.reducer, componentsSlice.reducer];\n")),(0,o.kt)("p",null,"\uc774 \ubc29\uc2dd\uc73c\ub85c \ud588\uc744 \ub54c\nstore.tsx \uc5d0\uc11c \uc774\ub7f0\uc2dd\uc73c\ub85c \ubc1b\uc558\ub2e4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import Reducers from '@/features/postSlice';\nconst [markdownReducer, componentsReducer] = Reducers;\n")),(0,o.kt)("p",null,"\uadf8\ub7ac\ub354\ub2c8 \ud0c0\uc785\ucd94\ub860\uc774 Never \ub85c \ub418\ubc84\ub9bc\n\uadf8\ub798\uc11c \uc6d0\ub798 \ud615\ud0dc\uc778"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"export default markdownSlice.reducer;\n")),(0,o.kt)("p",null,"\ub85c \ubc14\uafe8\ub354\ub2c8 \uc798 \ub42c\ub2e4 \uc5ec\uae30\uc11c...\n\uc774 ",(0,o.kt)("inlineCode",{parentName:"p"},"[object, object]")," \ud615\ud0dc\uac00 \ubb38\uc81c\ub97c \uc77c\uc73c\ud0b4\uc744 \uc54c \uc218 \uc788\uc5c8\ub2e4\n\uadf8\ub798\uc11c\n",(0,o.kt)("inlineCode",{parentName:"p"},"export authSlice.reducer")," \ub97c \ud574\uc57c\ud558\ub294 \uc0c1\ud669\uc774\uc5ec\uc11c... \uc5b4\ub5bb\uac8c \ud558\ub098 \uc2dc\ub3c4\ub97c \ud574\ubd24\ub2e4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"slice.tsx","slice.tsx":!0},"export const markdownReducer = markdownSlice.reducer;\nexport const componentsReducer = componentsSlice.reducer;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"store.tsx","store.tsx":!0},"import { markdownReducer, componentsReducer } from '@/features/postSlice';\n")),(0,o.kt)("p",null,"\uc774 \uc791\uc5c5\uc744 \ud558\uba74\uc11c export \uc2dc \uac10\uc2f8\uc11c \ubcf4\ub0b4\ub294 \uac83\uc774 \ubb38\uc81c\ub97c \ubc1c\uc0dd\uc2dc\ud0ac \uc218 \uc788\uc74c\uc744 \uc54c \uc218 \uc788\uc5c8\ub2e4\n\uc544\ub9c8\ub3c4 const \ud615\ud0dc\uc5ec\uc11c \uadf8\ub7f0\uac78\uae4c \ub77c\ub294 \ucd94\ub860\uc744 \ub4a4\ub2a6\uac8c \ud574\ubcf4\uc558\ub2e4 > let \uc73c\ub85c \ubc14\uafd4\ubd04\n\uc791\ub3d9\uc5d0 \ubb38\uc81c\ub294 \uc5c6\uc5c8\uc9c0\ub9cc\n\ub3d9\uc77c\ud55c \ubb38\uc81c\ub85c \ucd94\ub860\uc774 \uc798\ub418\uc9c0 \uc54a\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc5c8\ub2e4"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3248).Z,width:"754",height:"453"})),(0,o.kt)("h2",{id:"\ubcc0\uacbd-\ud6c4-\ucf54\ub4dc"},"\ubcc0\uacbd \ud6c4 \ucf54\ub4dc"),(0,o.kt)("p",null,"\uac01\uac01 export \ud558\uace0 import \uc2dc\ucf1c\uc57c \ud0c0\uc785 \ucd94\ub860\uc774 \ub41c\ub2e4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import type { PayloadAction } from '@reduxjs/toolkit';\nimport { createSlice } from '@reduxjs/toolkit';\nimport type { RootState } from '@/app/store';\nimport { components, markdowns } from '@/router/Router';\n\nconst postState = markdowns;\n\nexport const markdownSlice = createSlice({\n  name: 'posts',\n  initialState: postState,\n  // The `reducers` field lets us define reducers and generate associated actions\n  reducers: {},\n});\n\nconst componentsState = components;\n\nexport const componentsSlice = createSlice({\n  name: 'components',\n  initialState: componentsState,\n  // The `reducers` field lets us define reducers and generate associated actions\n  reducers: {},\n});\n\ninterface SubjectObject {\n  [key: string]: Subject[];\n}\n\ninterface Subject {\n  index: string;\n  path: string;\n}\n\nexport const selectSubject = (state: RootState) => {\n  const result: SubjectObject = {};\n  state.posts.forEach((post) => {\n    const splitPath = post.path.split('/');\n    if (result[post.category] === undefined) result[post.category] = [];\n    result[post.category].push({ index: splitPath[1], path: post.path });\n  });\n  console.log('selectSubject', result);\n\n  return result;\n};\nexport const order = ['front', 'back', 'work', 'language', 'blog'];\n\nexport const markdownReducer = markdownSlice.reducer;\nexport const componentsReducer = componentsSlice.reducer;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"store.tsx","store.tsx":!0},"import { markdownReducer, componentsReducer } from '@/features/postSlice';\n")))}d.isMDXComponent=!0},3248:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/01-array-export-anti-patten-a1705f94f226ae0d8fdf10a8a5f34fcc.png"}}]);