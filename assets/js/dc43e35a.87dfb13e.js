"use strict";(self.webpackChunkcode_snippet=self.webpackChunkcode_snippet||[]).push([[9059],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6077:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={},i="page \ub9cc\ub4e4\uae30",p={unversionedId:"tutorial-basics/create-a-page",id:"tutorial-basics/create-a-page",title:"page \ub9cc\ub4e4\uae30",description:"Add Markdown or React files to src/pages to create a standalone page:",source:"@site/docs/tutorial-basics/04_create-a-page.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-a-page",permalink:"/docs/tutorial-basics/create-a-page",draft:!1,editUrl:"vscode://file/P:/DEV_PORTFOLIO/code-snippet/docs/tutorial-basics/04_create-a-page.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Markdown Features",permalink:"/docs/tutorial-basics/markdown-features"},next:{title:"\uba54\ub274 \uc0dd\uc131 \ubc29\ubc95",permalink:"/docs/tutorial-basics/sidebar"}},l={},s=[{value:"Create your first React Page",id:"create-your-first-react-page",level:2},{value:"Create your first Markdown Page",id:"create-your-first-markdown-page",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"page-\ub9cc\ub4e4\uae30"},"page \ub9cc\ub4e4\uae30"),(0,n.kt)("p",null,"Add ",(0,n.kt)("strong",{parentName:"p"},"Markdown or React")," files to ",(0,n.kt)("inlineCode",{parentName:"p"},"src/pages")," to create a ",(0,n.kt)("strong",{parentName:"p"},"standalone page"),":\n",(0,n.kt)("inlineCode",{parentName:"p"},"src/pages"),"\uc5d0 \ub4e4\uc5b4\uac00\ub294 \ub80c\ub354\ub9c1 \ub418\ub294 jsx, tsx \ub610\ub294 md ,mdx \ub294 \ub2e8\uc77c \ud398\uc774\uc9c0\ub85c\uc368 \ub3d9\uc791"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"src/pages/index.js")," \u2192 ",(0,n.kt)("inlineCode",{parentName:"li"},"localhost:3000/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"src/pages/foo.md")," \u2192 ",(0,n.kt)("inlineCode",{parentName:"li"},"localhost:3000/foo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"src/pages/foo/bar.js")," \u2192 ",(0,n.kt)("inlineCode",{parentName:"li"},"localhost:3000/foo/bar"))),(0,n.kt)("p",null,"Layout\uc73c\ub85c \uac10\uc2f8\ub294 \uac83\uae4c\uc9c0 \ube7c\uba74 \uc644\uc804\ud788 \uc5f0\uad00\uc131 \uc5c6\ub294 \ud398\uc774\uc9c0\ucc98\ub7fc \ubcf4\uc5ec\uc9c4\ub2e4"),(0,n.kt)("h2",{id:"create-your-first-react-page"},"Create your first React Page"),(0,n.kt)("p",null,"Create a file at ",(0,n.kt)("inlineCode",{parentName:"p"},"src/pages/my-react-page.js"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/pages/my-react-page.js"',title:'"src/pages/my-react-page.js"'},"import React from 'react'\nimport Layout from '@theme/Layout'\n\nexport default function MyReactPage() {\n  return (\n    <Layout>\n      <h1>My React page</h1>\n      <p>This is a React page</p>\n    </Layout>\n  )\n}\n")),(0,n.kt)("p",null,"A new page is now available at\n",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/my-react-page"},"http://localhost:3000/my-react-page"),"."),(0,n.kt)("h2",{id:"create-your-first-markdown-page"},"Create your first Markdown Page"),(0,n.kt)("p",null,"Create a file at ",(0,n.kt)("inlineCode",{parentName:"p"},"src/pages/my-markdown-page.md"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-mdx",metastring:'title="src/pages/my-markdown-page.md"',title:'"src/pages/my-markdown-page.md"'},"# My Markdown page\n\nThis is a Markdown page\n")),(0,n.kt)("p",null,"A new page is now available at\n",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/my-markdown-page"},"http://localhost:3000/my-markdown-page"),"."))}m.isMDXComponent=!0}}]);