"use strict";(self.webpackChunkcode_snippet=self.webpackChunkcode_snippet||[]).push([[7049],{4668:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>I,contentTitle:()=>E,default:()=>A,frontMatter:()=>T,metadata:()=>g,toc:()=>_});var n=a(7462),l=a(7294),r=a(3905),i=a(6741);const s=(0,i.hg)("counter/fetchCount",(async e=>{const t=await function(e){return void 0===e&&(e=1),new Promise((t=>setTimeout((()=>t({data:e})),500)))}(e);return t.data})),c=(0,i.oM)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:e=>{e.value+=1},decrement:e=>{e.value-=1},incrementByAmount:(e,t)=>{e.value+=t.payload}},extraReducers:e=>{e.addCase(s.pending,(e=>{e.status="loading"})).addCase(s.fulfilled,((e,t)=>{e.status="idle",e.value+=t.payload})).addCase(s.rejected,(e=>{e.status="failed"}))}}),{increment:o,decrement:d,incrementByAmount:u}=c.actions,m=e=>e.counter.value,p=c.reducer,k=(0,i.xC)({reducer:{counter:p}});var N=a(9473);const x=N.v9,b="row_DjM7",v="value_Kg0A",h="button_uXaQ",f="textbox_yTNQ",y="asyncButton_Ys0N button_uXaQ",R=()=>{const e=x(m),t=(0,N.I0)(),[a,n]=(0,l.useState)("2"),r=Number(a)||0;return l.createElement("div",null,l.createElement("div",{className:b},l.createElement("button",{className:h,"aria-label":"Decrement value",onClick:()=>t(d())},"-"),l.createElement("span",{className:v},e),l.createElement("button",{className:h,"aria-label":"Increment value",onClick:()=>t(o())},"+")),l.createElement("div",{className:b},l.createElement("input",{className:f,"aria-label":"Set increment amount",value:a,onChange:e=>n(e.target.value)}),l.createElement("button",{className:h,onClick:()=>t(u(r))},"Add Amount"),l.createElement("button",{className:y,onClick:()=>t(s(r))},"Add Async"),l.createElement("button",{className:y,onClick:()=>{return t((e=r,(t,a)=>{m(a())%2==1&&t(u(e))}));var e}},"Add If Odd")))},C=()=>l.createElement(N.zt,{store:k},l.createElement(R,null)),T={aliases:"\ub9ac\ub355\uc2a4 \ud234\ud0b7 \uc774\ud574",date:new Date("2023-06-17T00:00:00.000Z"),modified:new Date("2023-06-19T00:00:00.000Z")},E="\ub9ac\ub355\uc2a4 \ud234\ud0b7 \uc774\ud574",g={unversionedId:"Redux-toolkit/Intro/index",id:"Redux-toolkit/Intro/index",title:"\ub9ac\ub355\uc2a4 \ud234\ud0b7 \uc774\ud574",description:"\ub9ac\ub355\uc2a4 \ud234\ud0b7\uc740 Redux \ub97c \uc880 \ub354 \ucd94\uc0c1\ud654\ud558\uace0 \ud45c\uc900\ud654\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac",source:"@site/docs/Redux-toolkit/01_Intro/index.mdx",sourceDirName:"Redux-toolkit/01_Intro",slug:"/Redux-toolkit/Intro/",permalink:"/docs/Redux-toolkit/Intro/",draft:!1,editUrl:"vscode://file/P:/DEV_PORTFOLIO/code-snippet/docs/Redux-toolkit/01_Intro/index.mdx",tags:[],version:"current",frontMatter:{aliases:"\ub9ac\ub355\uc2a4 \ud234\ud0b7 \uc774\ud574",date:"2023-06-17T00:00:00.000Z",modified:"2023-06-19T00:00:00.000Z"},sidebar:"ReactStoreSidebar",next:{title:"Redux toolkit \uc138\ud305 , \uc0ac\uc6a9 \ubc29\ubc95",permalink:"/docs/Redux-toolkit/Settings/"}},I={},_=[{value:"\uc124\uce58 \ubc29\ubc95",id:"\uc124\uce58-\ubc29\ubc95",level:2}],S={toc:_},w="wrapper";function A(e){let{components:t,...a}=e;return(0,r.kt)(w,(0,n.Z)({},S,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\ub9ac\ub355\uc2a4-\ud234\ud0b7-\uc774\ud574"},"\ub9ac\ub355\uc2a4 \ud234\ud0b7 \uc774\ud574"),(0,r.kt)("p",null,"\ub9ac\ub355\uc2a4 \ud234\ud0b7\uc740 Redux \ub97c \uc880 \ub354 \ucd94\uc0c1\ud654\ud558\uace0 \ud45c\uc900\ud654\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://ko.redux.js.org/redux-toolkit/overview/"},"official overview")),(0,r.kt)("p",null,"\ub9ac\ub355\uc2a4 \ud234\ud0b7\uc740 \uc0c1\ud0dc\ub97c \uc800\uc7a5\ud558\uae30 \uc704\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac\uace0 \ud568\uc218\ub098 Ref \uac1d\uccb4\uc758 \ucc38\uc870\ub97c \uc800\uc7a5 \ud560",(0,r.kt)("br",{parentName:"p"}),"\n","\uc218\ub294 \uc5c6\ub2e4"),(0,r.kt)("p",null,"reducer action \uc5d0\uc11c immer \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ub300\uc785 \uacfc\uc815\uc5d0\uc11c \uc0ac\uc6a9\ud574\uc11c",(0,r.kt)("br",{parentName:"p"}),"\n","\uc790\ub3d9\uc73c\ub85c \ubd88\ubcc0\uc131\uc744 \uc720\uc9c0\ud558\uba74\uc11c \uc0c1\ud0dc\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ubc29\ubc95\uc744 \uc81c\uacf5\ud568"),(0,r.kt)("h2",{id:"\uc124\uce58-\ubc29\ubc95"},"\uc124\uce58 \ubc29\ubc95"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install @reduxjs/toolkit react-redux\n")),(0,r.kt)("p",null,"JS \uc640 TS \uc758 \ud615\ud0dc \ucc28\uc774\uac00 \ud070 \ud3b8\uc774\ub2e4",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://redux.js.org/tutorials/essentials/part-2-app-structure"},"\ub9ac\ub355\uc2a4 \ud234\ud0b7 \uad6c\uc870")),(0,r.kt)("p",null,"\uacf5\uc2dd \ubb38\uc11c\uc5d0\uc11c \ucf54\ub4dc\uc5d0\uc11c \uc81c\uacf5\ub418\ub294 \uc608\uc81c\ub294 JS \uace0",(0,r.kt)("br",{parentName:"p"}),"\n","\uc870\uae08 \ub2e4\ub974\uac8c \ubb38\uc11c\ub294 TS \ub85c \uc608\uc81c\ub97c \uc784\ubca0\ub4dc \ud558\uc600\uc74c",(0,r.kt)("br",{parentName:"p"}),"\n","Template \uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ubb38\ubc95"),(0,r.kt)(C,{mdxType:"Main"}),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\ud55c\uc7a5 \uc694\uc57d"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\uc608\uc81c\ub97c \ud1b5\ud574 \ub9ac\ub355\uc2a4 \ud234\ud0b7\uc758 \uc138\ud305 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\uae30 ",(0,r.kt)("a",{parentName:"li",href:"/docs/Redux-toolkit/Settings/"},"\uc138\ud305 \ubc29\ubc95")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","redex toolkit \uc0ac\uc6a9\ubc29\ubc95"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","slice \ub0b4\uc5d0 reducers \uc120\uc5b8 \ubc29\ubc95"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","actions \ub97c \ucd94\uc0c1\ud654\ud558\ub294 \uac83\uacfc \ucd94\uc0c1\ud654\ub97c \ud1b5\ud574 Thunk"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Async actions \ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95")))}A.isMDXComponent=!0}}]);