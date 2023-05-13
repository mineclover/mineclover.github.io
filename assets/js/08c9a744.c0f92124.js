"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[1282],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=o.createContext({}),s=function(e){var t=o.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(m.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,m=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=s(r),f=n,d=l["".concat(m,".").concat(f)]||l[f]||u[f]||a;return r?o.createElement(d,i(i({ref:t},p),{},{components:r})):o.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c[l]="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},23135:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const a={sidebar_position:5,date:new Date("2023-03-17T00:00:00.000Z"),modified:new Date("2023-05-14T00:00:00.000Z")},i=void 0,c={unversionedId:"front/react-hook-form/useForm-State/useForm-State",id:"front/react-hook-form/useForm-State/useForm-State",title:"useForm-State",description:"\uc18c\uac1c",source:"@site/docs/front/react-hook-form/useForm-State/useForm-State.md",sourceDirName:"front/react-hook-form/useForm-State",slug:"/front/react-hook-form/useForm-State/",permalink:"/docs/front/react-hook-form/useForm-State/",draft:!1,editUrl:"https://github.com/mineclover/my-blog/docs/front/react-hook-form/useForm-State/useForm-State.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,date:"2023-03-17T00:00:00.000Z",modified:"2023-05-14T00:00:00.000Z"},sidebar:"tutorialSidebar",previous:{title:"zod-rhf-styles",permalink:"/docs/front/react-hook-form/zod-rhf-styles/"},next:{title:"form-semantic",permalink:"/docs/category/form-semantic"}},m={},s=[{value:"\uc18c\uac1c",id:"\uc18c\uac1c",level:2}],p={toc:s},l="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(l,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\uc18c\uac1c"},"\uc18c\uac1c"),(0,n.kt)("p",null,"react-hook-form \uc5d0 \uc7a5\uc810\uc740 \ud3fc \uad00\ub9ac \ubaa8\ub4c8\ub4e4\ub3c4 \uc788\ub2e4\ub77c\ub294 \uac83\uc77c \uac83\uc77c\uae4c?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://react-hook-form.com/api/useform/formstate/"},"useForm - FormState | React Hook Form - Simple React forms validation"),(0,n.kt)("br",{parentName:"p"}),"\n","\uc5ec\uae30\uc11c \uba54\uc18c\ub4dc \uba85\uc138\uc11c\ub97c \ubcfc \uc218 \uc788\ub2e4"),(0,n.kt)("p",null,"\uc911\ubcf5 \ubc29\uc9c0\ub97c \uc704\ud574",(0,n.kt)("br",{parentName:"p"}),"\n","isSubmitting \uc740 \uc81c\ucd9c\uc911\uc77c \ub54c \uc804\uc1a1\uc774 \uc911\ubcf5\ub418\uc9c0 \uc54a\ub3c4\ub85d \ud558\ub294 \uae30\ub2a5\uc778\ub370",(0,n.kt)("br",{parentName:"p"}),"\n","\uc5b4\ub5bb\uac8c \uc81c\ucd9c\uc911\uc784\uc744 \uc778\uc9c0\ud558\ub294 \uac83\uc778\uc9c0 \uc758\ubb38\uc774 \ub4e4\uc5c8\ub2e4"),(0,n.kt)("p",null,'\uc608\uc0c1\ud558\uae30\ub85c "react-hook-form issubmitting \uac00 \ud65c\uc131\ud654\ub418\uace0 \uc720\uc9c0\ub418\ub294 \uae30\uc900 " \uc774 \uc788\uc744 \uac83\uc73c\ub85c \uc608\uc0c1\ud558\uc600\uace0'),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://jasonwatmore.com/post/2021/09/12/react-hook-form-submitting-loading-spinner-example"},"React Hook Form - Submitting (Loading) Spinner Example | Jason Watmore's Blog")),(0,n.kt)("p",null,"\ud655\uc778 \uacb0\uacfc \ub0b4\ubd80 \ucf5c\ubc31\uc5d0\uc11c promise \ub97c \ubc18\ud658\ud574\uc57c\ud558\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc5c8\ub2e4"))}u.isMDXComponent=!0}}]);