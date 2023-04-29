"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[907],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={date:new Date("2023-04-04T00:00:00.000Z"),modified:new Date("2023-04-29T00:00:00.000Z")},i=void 0,p={unversionedId:"front/axios/REST-method-patten",id:"front/axios/REST-method-patten",title:"REST-method-patten",description:"\uc694\uccad Config |\xa0Axios Docs",source:"@site/docs/front/axios/REST-method-patten.md",sourceDirName:"front/axios",slug:"/front/axios/REST-method-patten",permalink:"/docs/front/axios/REST-method-patten",draft:!1,editUrl:"https://github.com/mineclover/my-blog/docs/front/axios/REST-method-patten.md",tags:[],version:"current",frontMatter:{date:"2023-04-04T00:00:00.000Z",modified:"2023-04-29T00:00:00.000Z"},sidebar:"tutorialSidebar",previous:{title:"axios",permalink:"/docs/category/axios"},next:{title:"Progress-Bar",permalink:"/docs/front/css/Progress-Bar/"}},l={},c=[{value:"GET",id:"get",level:2},{value:"POST",id:"post",level:2},{value:"type=&quot;file&quot;",id:"typefile",level:3}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://axios-http.com/kr/docs/req_config"},"\uc694\uccad Config |\xa0Axios Docs")),(0,o.kt)("h2",{id:"get"},"GET"),(0,o.kt)("p",null,"get \ubc29\uc2dd\uc73c\ub85c \ud560 \ub54c\ub294 URL URLSearchParams \ucffc\ub9ac\ub97c \uc4f4\ub2e4"),(0,o.kt)("p",null,"\uc774\uac78 axios \uc5d0\uc11c\ub294 config \uc5d0\uc11c params \uc5d0 \ub2f4\uc544 \ub80c\ub354\ub9c1 \ud55c\ub2e4"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"[!NOTE]"," axios \ubc88\uc5ed\uccb4\n",(0,o.kt)("inlineCode",{parentName:"p"},"params")," \uc740 \uc694\uccad\uacfc \ud568\uaed8 \uc804\uc1a1\ub418\ub294 URL \ud30c\ub77c\ubbf8\ud130\uc785\ub2c8\ub2e4.\n\ubc18\ub4dc\uc2dc \uc77c\ubc18 \uac1d\uccb4\ub098 URLSearchParams \uac1d\uccb4\uc5ec\uc57c \ud569\ub2c8\ub2e4.\n\ucc38\uace0: null \uc774\ub098 undefined \ub294 URL \uc5d0 \ub80c\ub354\ub9c1\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export const getKeyword = async (page, keyword) => {\n  const sending = {\n    pageno: page,\n    keyword: keyword,\n  };\n  return instance.get(`tourlist/keyword`, { params: { ...sending } });\n};\n")),(0,o.kt)("h2",{id:"post"},"POST"),(0,o.kt)("p",null,"post \ubc29\uc2dd\uc740 body \uc5d0 \ub123\uc5b4\uc11c \uac12\uc744 \ubcf4\ub0b4\uace4 \ud55c\ub2e4"),(0,o.kt)("h3",{id:"typefile"},'type="file"'),(0,o.kt)("p",null,"jpg , png , pdf \uac19\uc740 \uac78 \ubcf4\ub0bc \ub54c\ub294 form-data \ub97c \uc4f4\ub2e4\npost \uc911\uc5d0\uc11c\ub3c4 header \uc5d0 ",(0,o.kt)("inlineCode",{parentName:"p"},'Content-Type : "multipart/form-data"')," \uac00 \ub4e4\uc5b4\uac08 \uacbd\uc6b0\n\ubcf4\ub0b4\ub294 data \ub294 body \uac00 \uc544\ub2c8\ub77c formData \ub97c \uadf8\ub300\ub85c \uc4f4\ub2e4\nformData \ubcc0\uc218\uc758 \uc774\ub984\uc740 abc \uc5ec\ub3c4 \ub3d9\uc791\ud55c\ub2e4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const formData = new FormData();\ninstance.post('upload', formData, config);\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../../work/PM-project-manager/etc-%ED%8A%B8%EB%9F%AC%EB%B8%94%EC%8A%88%ED%8C%85/CORS%20%EC%97%90%EB%9F%AC%EC%98%80%EB%8D%98%20API%20%EC%97%B0%EA%B2%B0%20%EB%AC%B8%EC%A0%9C"},"CORS \uc5d0\ub7ec\uc600\ub358 API \uc5f0\uacb0 \ubb38\uc81c")))}d.isMDXComponent=!0}}]);