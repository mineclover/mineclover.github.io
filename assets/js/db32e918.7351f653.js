"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[5458],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1462:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const l={date:new Date("2023-04-27T00:00:00.000Z"),modified:new Date("2023-04-28T00:00:00.000Z")},a=void 0,s={unversionedId:"blog/docusaurus/error-set the GIT_USER",id:"blog/docusaurus/error-set the GIT_USER",title:"error-set the GIT_USER",description:"\ubc30\ud3ec \ud560 \ub54c",source:"@site/docs/blog/docusaurus/error-set the GIT_USER.md",sourceDirName:"blog/docusaurus",slug:"/blog/docusaurus/error-set the GIT_USER",permalink:"/docs/blog/docusaurus/error-set the GIT_USER",draft:!1,editUrl:"https://github.com/mineclover/my-blog/docs/blog/docusaurus/error-set the GIT_USER.md",tags:[],version:"current",frontMatter:{date:"2023-04-27T00:00:00.000Z",modified:"2023-04-28T00:00:00.000Z"},sidebar:"tutorialSidebar",previous:{title:"deploy\uc640 CICD",permalink:"/docs/blog/docusaurus/deploy\uc640 CICD"},next:{title:"github-action",permalink:"/docs/blog/docusaurus/github-action/"}},i={},p=[{value:"\ud558\uc704 \uacbd\ub85c\uc5d0\uc11c prefix \uc2e4\ud589\uc5d0 \ub300\ud55c \ubb38\uc81c",id:"\ud558\uc704-\uacbd\ub85c\uc5d0\uc11c-prefix-\uc2e4\ud589\uc5d0-\ub300\ud55c-\ubb38\uc81c",level:2},{value:"\ubc30\uce58\ud504\ub85c\uadf8\ub7a8\uc5d0 \ub300\ud55c \uc774\ud574",id:"\ubc30\uce58\ud504\ub85c\uadf8\ub7a8\uc5d0-\ub300\ud55c-\uc774\ud574",level:3},{value:"SSH",id:"ssh",level:3},{value:"\ud574\uacb0",id:"\ud574\uacb0",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...l}=e;return(0,o.kt)(u,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\ubc30\ud3ec \ud560 \ub54c\n",(0,o.kt)("inlineCode",{parentName:"p"},"cmd /C 'set \"GIT_USER=USER\" && yarn deploy'")," \ub97c \uc4f0\ub77c\uace0 \ud55c\ub2e4"),(0,o.kt)("p",null,"cmd /C 'set \"GIT_USER=mineclover\" && yarn deploy'\n\uc774\uac78 \ucd95\uc57d\ud558\uae30\uc704\ud574\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},'set "GIT_USER=USER" && yarn deploy')," \uc774\ub77c\uace0 \uc4f0\uba74\nPlease set the GIT_USER environment variable, or explicitly specify USE_SSH instead!"),(0,o.kt)("p",null,"\uc5d0\ub7ec\uac00 \ub09c\ub2e4\n\uc774 \ubb38\uc81c\ub294 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/issues/3389"},"Error: Please set the GIT","_","USER environment variable! \xb7 Issue #3389 \xb7 facebook/docusaurus \xb7 GitHub")," \uc5d0\uc11c \uc5b8\uae09\ub41c \ubb38\uc81c\ub85c\ncmd /c \ub97c \uc0ac\uc6a9\ud558\ub294 \uc774\uc720 \uc790\uccb4\ub3c4 \ud30c\uc6cc\uc258\uc5d0 \uc758\ud55c \uac83\uc784\uc744 \uc54c \uc218 \uc788\ub2e4"),(0,o.kt)("p",null,"\uadf8\ub798\uc11c script-shell \uc5d0 \uc18d\uc131\uc744 \ubd80\uc5ec\ud55c\ub2e4\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v9/using-npm/config#script-shell"},"config | npm Docs"),"\n\ubd80\uc5ec\ud558\ub294 \ubc29\ubc95\uc740 \ub450\uac00\uc9c0\uc778\ub370\nnpm config set script-shell={\uacbd\ub85c} \ub97c \ud558\uac70\ub098\n.npmrc \ud3f4\ub354\uc5d0\nscript-shell=",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\Git\\bin\\sh.exe")," \uac19\uc740 \uac83\uc744 \ud558\uba74 \ub41c\ub2e4"),(0,o.kt)("h2",{id:"\ud558\uc704-\uacbd\ub85c\uc5d0\uc11c-prefix-\uc2e4\ud589\uc5d0-\ub300\ud55c-\ubb38\uc81c"},"\ud558\uc704 \uacbd\ub85c\uc5d0\uc11c prefix \uc2e4\ud589\uc5d0 \ub300\ud55c \ubb38\uc81c"),(0,o.kt)("p",null,"\uc0c1\uc704 \uacbd\ub85c\uc5d0\uc11c \ud558\uc704 \uacbd\ub85c\ub85c npm run --prefix \uc73c\ub85c \uc2e4\ud589\ud558\ub294 \uac83\uc5d0\uc11c cmd \ub97c \uc2e4\ud589\ud558\uc9c0 \uc54a\uc544 \ubc30\uce58 \ud504\ub85c\uadf8\ub7a8\uc73c\ub85c \uc774 \uae30\ub2a5\uc744 \uc218\ud589\ud558\uace0\uc790 \ud588\ub2e4"),(0,o.kt)("h3",{id:"\ubc30\uce58\ud504\ub85c\uadf8\ub7a8\uc5d0-\ub300\ud55c-\uc774\ud574"},"\ubc30\uce58\ud504\ub85c\uadf8\ub7a8\uc5d0 \ub300\ud55c \uc774\ud574"),(0,o.kt)("p",null,"\uadf8\ub0e5 .bat \ud30c\uc77c\uc774\uba74 \ub41c\ub2e4\ncmd \uac00 \uc2e4\ud589\ub418\uba70 \ub3c5\ub9bd\uc801\uc73c\ub85c \uc2e4\ud589\ub418\uae30 \ub54c\ubb38\uc5d0 git \uc778\uc99d\uc744 \ub2e4\uc2dc\ud574\uc918\uc57c\ud588\ub2e4"),(0,o.kt)("h3",{id:"ssh"},"SSH"),(0,o.kt)("p",null,"vscode \uac00 \uc544\ub2c8\uae30 \ub584\ubb38\uc5d0 git ssh \ub97c \uc5f0\uacb0\ud574\uc918\uc57c\ud588\ub2e4"),(0,o.kt)("p",null,"ssh \ub294 \ub2e8\ubc29\ud5a5 \uc554\ud638\ud654\ub85c \uacf5\uac1c\ud0a4 \uac1c\uc778\ud0a4 \ud615\uc2dd\uc758 \uc554\ud638\ud654\ub97c \ud574\uc8fc\ub294 \ubc29\uc2dd\uc774\uc600\ub2e4"),(0,o.kt)("p",null,"ssh-add \ub610\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"git config --global core.sshCommand")," \uc774\uc600\ub294\ub370 \ub458\ub2e4 \uc798 \uc548\ub42c\ub2e4\n\uadf8\ub798\uc11c ssh \ub9cc \ub4f1\ub85d\ud558\ub824\ud588\ub294\ub370"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ssh-add -d ~/C:\\Users\\junu\\.ssh\\id_rsa\n")),(0,o.kt)("p",null,"\uacbd\ub85c\ub97c \ub123\uc5b4\uc918\ub3c4 \uc624\ub958\uac00 \ub098\uc654\ub2e4\n",(0,o.kt)("img",{src:r(828).Z,width:"682",height:"299"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"p:\\.ssh")," \uc704\uce58\uc5d0 \ub46c\ub3c4 \uac19\uc740 \ubb38\uc81c\uac00 \uc788\uc5b4\uc11c \uc548\ub42c\ub2e4"),(0,o.kt)("p",null,"\uc815\ub9d0 \uc544\uc8fc \uac00\uae4c\uc774 \ud574\ub3c4 \uc548\ub42c\ub2e4\n",(0,o.kt)("img",{src:r(8950).Z,width:"523",height:"200"})),(0,o.kt)("h2",{id:"\ud574\uacb0"},"\ud574\uacb0"),(0,o.kt)("p",null,"\uadf8\ub798\uc11c \uc704 \uc2dc\ub3c4\ub97c \ud1a0\ub300\ub85c \uc548\ub41c\ub2e4\uace0 \uc0dd\uac01\ud574\uc11c \ubc30\ud3ec\uc5d0 \ub300\ud574\uc11c\ub294\n",(0,o.kt)("inlineCode",{parentName:"p"},'echo cmd /C \'set \\"GIT_USER=mineclover\\" && yarn deploy\'" ')," \ub85c \uc548\ub0b4\ud558\ub824\ud588\ub2e4 \uadf8\ub798\uc11c \ubcf5\uc0ac\ud574\uc11c \uc0ac\uc6a9\ud558\ub824\ub294 \uac83\uc774\uc600\uc74c\n\ubcf5\uc81c\ub97c \ud558\ub824\uba74 \ub530\uc634\ud45c\ub97c \ud45c\uc2dc\ud574\uc918\uc57c\ud574\uc11c \\\ub97c \uc55e\uc5d0 \ubd99\uc5ec\uc90c"),(0,o.kt)("p",null,"\uadf8\ub7f0\ub370 && \uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"\\&")," \ud558\ub294\uac83\uc73c\ub85c\ub294 \uc548\ub42c\ub2e4 \u314b\u314b\n\uc774\uac78 \uc791\uc5c5\ud574\ubcf4\ub2c8 \uc624 \uc774\uac78\ub3c4 \ub418\uaca0\ub294\ub370 \uc2f6\uc5b4\uc84c\ub2e4"),(0,o.kt)("p",null,'\uc5ec\uae30\uc11c \uc774 "GIT_USER=mineclover" \ub97c \ud45c\ud604\ud558\uae30 \uc704\ud55c\n',(0,o.kt)("inlineCode",{parentName:"p"},'\\"GIT_USER=mineclover\\"')," \uc5d0\uc11c \ud78c\ud2b8\ub97c \ubd24\ub2e4"),(0,o.kt)("p",null,"\uadf8\ub798\uc11c \ud558\uc704 \ub808\ud3ec\uc5d0"),(0,o.kt)("p",null,'"dd": "set \\"GIT_USER=mineclover\\" && yarn deploy", \ub97c \ubd99\uc600\uace0\n\uc774\uac78 \ud558\ub2c8\uae4c \uc544\ub798 \ucf54\ub4dc\uac00 \uc815\uc0c1 \uc791\ub3d9\ud558\uc600\uc74c\n',(0,o.kt)("inlineCode",{parentName:"p"},'"deploy": " npm run macro --prefix ./docusaurus \xa0&& npm run dd --prefix ./docusaurus",')))}d.isMDXComponent=!0},8950:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/error-set the GIT_USER-1-af8c92b7f6c4827f3fe742ac336b1775.png"},828:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/error-set the GIT_USER-86f636e3e74dd20af7da1fb0f941579d.png"}}]);