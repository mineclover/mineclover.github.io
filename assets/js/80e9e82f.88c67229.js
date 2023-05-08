"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[8912],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=m(n),g=a,d=s["".concat(c,".").concat(g)]||s[g]||u[g]||o;return n?r.createElement(d,p(p({ref:t},l),{},{components:n})):r.createElement(d,p({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,p[1]=i;for(var m=2;m<o;m++)p[m]=n[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const o={date:new Date("2023-05-05T00:00:00.000Z"),modified:new Date("2023-05-05T00:00:00.000Z")},p=void 0,i={unversionedId:"language/typescript/parameter-renaming/parameter-renaming",id:"language/typescript/parameter-renaming/parameter-renaming",title:"parameter-renaming",description:"javascript parameter renaming \uc740 \uacf5\uad50\ub86d\uac8c\ub3c4 \ud0c0\uc785 \uc9c0\uc815 \ubc29\uc2dd\uacfc \uc720\uc0ac\ud558\ub2e4",source:"@site/docs/language/typescript/parameter-renaming/parameter-renaming.md",sourceDirName:"language/typescript/parameter-renaming",slug:"/language/typescript/parameter-renaming/",permalink:"/docs/language/typescript/parameter-renaming/",draft:!1,editUrl:"https://github.com/mineclover/my-blog/docs/language/typescript/parameter-renaming/parameter-renaming.md",tags:[],version:"current",frontMatter:{date:"2023-05-05T00:00:00.000Z",modified:"2023-05-05T00:00:00.000Z"},sidebar:"tutorialSidebar",previous:{title:"files",permalink:"/docs/language/typescript/files"},next:{title:"typescript",permalink:"/docs/language/typescript/"}},c={},m=[],l={toc:m},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"javascript parameter renaming \uc740 \uacf5\uad50\ub86d\uac8c\ub3c4 \ud0c0\uc785 \uc9c0\uc815 \ubc29\uc2dd\uacfc \uc720\uc0ac\ud558\ub2e4"),(0,a.kt)("p",null,"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c \uc774 \ub450\uac00\uc9c0\ub97c \uac19\uc774 \uc4f0\uac8c \ub418\ub294 \uacbd\uc6b0\uac00 \uc788\uc5c8\ub2e4\n\uc774 \ucf54\ub4dc\uc5d0\uc11c named \ub97c components \ub85c \ubc14\uafd4\uc57c\ud558\uace0 \ub3d9\uc2dc\uc5d0 RouteList \ub77c\ub294 \ud0c0\uc785\uc73c\ub85c\ub3c4 \uc9c0\uc815\ud574\uc918\uc57c\ud588\ub2e4"),(0,a.kt)("p",null,"\ucd95\uc57d\ud558\uace0 \uc2f6\uc5b4\uc11c \ubc29\ubc95\uc774 \uc788\ub098 \ucc3e\uc544\ubd24\ub2e4\n\ub9c8\ub545\ud788 \uc88b\uc740 \ub2f5\ubcc0\uc744 \uae30\ub300\ud560 \uc21c \uc5c6\uc5c8\ub2e4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"cosnt named = [data];\n\nexport const namedRouteList = (named) => {\n  return components.map(({ path, component: Component }) => {\n    return <Route key={path} path={path} element={<Component />} />;\n  });\n};\n")),(0,a.kt)("p",null,"\ud760 \ud558\ub098\uc758 \ucf54\ub4dc\ub85c \uad00\ub9ac\ud558\uace0 \uc2f6\uc5c8\ub294\ub370 \uc774\ub984\uc744 \ubc14\uafb8\ub294\uac8c \uc5b4\ub824\uc6b4 \uac83 \uac19\ub2e4\n\uaf2d \ud544\uc694\ud55c \ud0c0\uc785\uc120\uc5b8\uc744 \uba3c\uc800\ud558\uace0 \ub0b4\ubd80\uc5d0\uc11c \ubc14\uafd4\uc8fc\uae30\ub85c \ud588\ub2e4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"export const namedRouteList = (named: RouteList) => {\n  const components = named;\n  return components.map(({ path, component: Component }) => {\n    return <Route key={path} path={path} element={<Component />} />;\n  });\n};\n")),(0,a.kt)("p",null,"\uc791\uc5c5 \uc911\uc5d0 \ub2e4 \ud574\ub2f9 \ub809\ud2f0\uceec \ubc94\uc704 \uac12 \ubc1b\ub294 \uac70\ub85c \ub178\uc120 \ubcc0\uacbd \ud588\ub2e4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"export const indexRouteList = () => {\n  const components = indexing;\n  return components.map(({ path, component: Component }) => {\n    return <Route key={path} path={path} element={<Component />} />;\n  });\n};\n")))}u.isMDXComponent=!0}}]);