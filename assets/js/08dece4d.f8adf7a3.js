"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[8131],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(y,a(a({ref:t},i),{},{components:n})):r.createElement(y,a({ref:t},i))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const l={date:new Date("2023-03-23T00:00:00.000Z"),modified:new Date("2023-05-14T00:00:00.000Z")},a=void 0,s={unversionedId:"front/styled-components/styled-extend/styled-extend",id:"front/styled-components/styled-extend/styled-extend",title:"styled-extend",description:"\uc18c\uac1c",source:"@site/docs/front/styled-components/01-styled-extend/01-styled-extend.md",sourceDirName:"front/styled-components/01-styled-extend",slug:"/front/styled-components/styled-extend/",permalink:"/docs/front/styled-components/styled-extend/",draft:!1,editUrl:"https://github.com/mineclover/my-blog/docs/front/styled-components/01-styled-extend/01-styled-extend.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{date:"2023-03-23T00:00:00.000Z",modified:"2023-05-14T00:00:00.000Z"},sidebar:"tutorialSidebar",previous:{title:"RTK-query",permalink:"/docs/front/redux-toolkit/RTK-query/"},next:{title:"styled-with-className",permalink:"/docs/front/styled-components/styled-with-className/"}},c={},p=[{value:"\uc18c\uac1c",id:"\uc18c\uac1c",level:2},{value:"\ud655\uc7a5 \uae30\ub2a5 \uc0ac\uc6a9\uc2dc \uc788\uc5c8\ub358 \ud5e4\ud504\ub2dd",id:"\ud655\uc7a5-\uae30\ub2a5-\uc0ac\uc6a9\uc2dc-\uc788\uc5c8\ub358-\ud5e4\ud504\ub2dd",level:2}],i={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\uc18c\uac1c"},"\uc18c\uac1c"),(0,o.kt)("p",null,"styled \ucef4\ud3ec\ub10c\ud2b8\ub294 \ud655\uc7a5\uc774 \uac00\ub2a5\ud558\ub2e4",(0,o.kt)("br",{parentName:"p"}),"\n","\uc774\uac74 \uc77c\ubc18 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc744 \uc7ac\uc0ac\uc6a9\ud558\ub294 \uac83\ub3c4 \uac00\ub2a5\ud558\ub2e4"),(0,o.kt)("p",null,"\uc2a4\ud0c0\uc77c\uc774 \ubd80\uc5ec\ub41c \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9cc\ub4e4\uae30"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const Text = styled.p`\n  font-size: 10px;\n  margin: 5px;\n  line-height: 10px;\n  color: #194384;\n`;\n")),(0,o.kt)("p",null,"\uae30\uc874 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ucd94\uac00 \uc2a4\ud0c0\uc77c\uc744 \ubd80\uc5ec\ud558\uae30",(0,o.kt)("br",{parentName:"p"}),"\n","(styled \ucef4\ud3ec\ub10c\ud2b8 \uc678\uc5d0 \uc774\ubbf8 \uc0dd\uc131\ub41c \ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\ub3c4 \ub123\uc744 \uc218 \uc788\ub2e4 )"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const ButtonText = styled(Text)`\n  color: red;\n`;\n")),(0,o.kt)("p",null,"\ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ubd80\uc5ec\ub41c html \ud0dc\uadf8\ub97c \ubc14\uafb8\uae30"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const Anchor = Button.withComponent('a');\n")),(0,o.kt)("p",null,"\ubc14\uafb8\uba74\uc11c \ud655\uc7a5\ud558\uae30"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const Anchor = styled(Button.withComponent('a'))`\n  text-decoration: none;\n`;\n")),(0,o.kt)("h2",{id:"\ud655\uc7a5-\uae30\ub2a5-\uc0ac\uc6a9\uc2dc-\uc788\uc5c8\ub358-\ud5e4\ud504\ub2dd"},"\ud655\uc7a5 \uae30\ub2a5 \uc0ac\uc6a9\uc2dc \uc788\uc5c8\ub358 \ud5e4\ud504\ub2dd"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../../../language/HTML/a-tag-Attributes/a+tag-Attributes"},"a tag-Attributes")))}u.isMDXComponent=!0}}]);