"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[5787],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var u=n.createContext({}),l=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(a),m=s,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,r=new Array(o);r[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:s,r[1]=i;for(var l=2;l<o;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6024:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=a(7462),s=(a(7294),a(3905));const o={sidebar_position:3,date:new Date("2023-05-03T00:00:00.000Z"),modified:new Date("2023-05-14T00:00:00.000Z")},r=void 0,i={unversionedId:"back/supabase/discord/Q1-supabase-A-few-basic-questions",id:"back/supabase/discord/Q1-supabase-A-few-basic-questions",title:"Q1-supabase-A-few-basic-questions",description:"\uc9c8\ubb38",source:"@site/docs/back/supabase/discord/Q1-supabase-A-few-basic-questions.md",sourceDirName:"back/supabase/discord",slug:"/back/supabase/discord/Q1-supabase-A-few-basic-questions",permalink:"/docs/back/supabase/discord/Q1-supabase-A-few-basic-questions",draft:!1,editUrl:"https://github.com/mineclover/my-blog/docs/back/supabase/discord/Q1-supabase-A-few-basic-questions.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,date:"2023-05-03T00:00:00.000Z",modified:"2023-05-14T00:00:00.000Z"},sidebar:"tutorialSidebar",previous:{title:"discord",permalink:"/docs/category/discord"},next:{title:"discord",permalink:"/docs/back/supabase/discord/"}},u={},l=[{value:"\uc9c8\ubb38",id:"\uc9c8\ubb38",level:2},{value:"1",id:"1",level:3},{value:"2",id:"2",level:3},{value:"3",id:"3",level:3},{value:"\ub2f5\ubcc0",id:"\ub2f5\ubcc0",level:2},{value:"\ubd84\uc11d",id:"\ubd84\uc11d",level:2},{value:"1 \ubc88",id:"1-\ubc88",level:3},{value:"2 \ubc88",id:"2-\ubc88",level:3},{value:"\ub450\ubc88\uc9f8 \ubc29\ubc95",id:"\ub450\ubc88\uc9f8-\ubc29\ubc95",level:4},{value:"3 \ubc88",id:"3-\ubc88",level:3}],c={toc:l},p="wrapper";function d(e){let{components:t,...a}=e;return(0,s.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\uc9c8\ubb38"},"\uc9c8\ubb38"),(0,s.kt)("p",null,"Originally I didn't use db, but I'm using supabase for the first time. studied for a week"),(0,s.kt)("h3",{id:"1"},"1"),(0,s.kt)("p",null,"If you look at the usage, if you do not create a schema, the default value is set, so select 'public' as the schema."),(0,s.kt)("p",null,"There are other schemas, and it seems that you can put an arbitrary schema into the database with a command, but I don't think this is a recommended usage. Is it right?"),(0,s.kt)("h3",{id:"2"},"2"),(0,s.kt)("p",null,"I want to change the role given to a user."),(0,s.kt)("p",null,"try to give more ratings The interface doesn't seem to be provided what to do Which roles are already designed for use? 2-1. I tested it manually When an anonymous connection matches anon, it is processed as anon. When I logged in, it seemed to treat it as authenticated if the address was the same as the preset address. I figured it out manually. Is there a document that organizes this?"),(0,s.kt)("h3",{id:"3"},"3"),(0,s.kt)("p",null,"I want to speed up the logout cycle"),(0,s.kt)("p",null,"Do you have logout logic? If not, should I just clear local storage and cookies?"),(0,s.kt)("h2",{id:"\ub2f5\ubcc0"},"\ub2f5\ubcc0"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"you can create custom schemas and either allow the API access or not. You have to deal with grants on them if you want them to be accessible to any other user than Postgres.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Supabase has 3 roles. anon, authenticated and service_role. Supabase provides no support for additional roles."),(0,s.kt)("p",{parentName:"li"}," You have to handle it on your own. Two ways to deal with other roles are ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/supabase-community/supabase-custom-claims"},"https://github.com/supabase-community/supabase-custom-claims")," and ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/orgs/supabase/discussions/11948"},"https://github.com/orgs/supabase/discussions/11948")," ."),(0,s.kt)("p",{parentName:"li"}," This has a bit more info on roles ",(0,s.kt)("a",{parentName:"p",href:"https://supabase.com/docs/learn/auth-deep-dive/auth-policies"},"https://supabase.com/docs/learn/auth-deep-dive/auth-policies"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"signOut()."))),(0,s.kt)("h2",{id:"\ubd84\uc11d"},"\ubd84\uc11d"),(0,s.kt)("h3",{id:"1-\ubc88"},"1 \ubc88"),(0,s.kt)("p",null,"\uadf8\ub0e5 \uad8c\ud55c\ucc98\ub9ac\ud574\uc11c \uc811\uc18d\ud558\ub824\ud558\uba74 \ud560 \uc218 \uc788\ub2e4 \ub77c\uace0 \ud574\uc11d\ud560 \uc218 \uc788\ub2e4\n\uc560\ucd08\uc5d0 \ub0b4\uac00 \uc9c8\ubb38 \ud55c \uac83\ub3c4 schemas.table \uc778 \uacbd\uc6b0\uc5d0 \ub2e4\ub978 \uc2a4\ud0a4\ub9c8\ub3c4 \ub9cc\ub4e4\uc5b4 \uc4f0\ub824\uba74 \uc4f8 \uc218 \uc788\uc5b4\ubcf4\uc774\ub124? \ub77c\ub294 \uc9c8\ubb38\uc774\uc600\uae30 \ub54c\ubb38\n\uc774\uc81c \uadf8\uac83\uacfc \uad00\ub828\ud55c \uad8c\ud55c \ubd80\uc5ec\ub294 \uc9c1\uc811 \ub530\ub85c \ud574\uc918\uc57c\ud55c\ub2e4\ub77c\ub294 \uc758\ubbf8\ub85c \ubcf4\uc778\ub2e4"),(0,s.kt)("h3",{id:"2-\ubc88"},"2 \ubc88"),(0,s.kt)("p",null,"\uc880 \uae38\ub2e4"),(0,s.kt)("p",null,"\ub9c1\ud06c\uc5d0\uc11c \ud1a0\ub860\uc774 \uc788\uc5c8\ub2e4 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/orgs/supabase/discussions/11948"},"CLS RBAC - Assigning PG_roles to logged users \xb7 supabase \xb7 Discussion #11948 \xb7 GitHub")," \uc5d0 \uc758\ud574\uc11c \ubb38\uc81c\uac00 \uc778\uc2dd\ub42c\uace0\n\uadf8 \uacb0\uacfc\ubb3c\uc774 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/supabase-community/supabase-custom-claims"},"GitHub - supabase-community/supabase-custom-claims: How to implement custom claims with Supabase")," \uc778 \uac83\uc73c\ub85c \ubcf4\uc778\ub2e4"),(0,s.kt)("p",null,"\ubcf5\uc7a1\ud55c \uae30\ub2a5 \ub123\uc9c0 \ub9d0\uae4c..??\n\uad8c\ud55c \ubd80\uc5ec\ud558\uace0 \uad00\ub9ac\ud558\uace0... \ud560 \uac70 \uc0dd\uac01\ud558\uba74 \ubc8c\uc368 \uba38\ub9ac\uac00 \uc544\ud504\ub2e4 \uc5ed\uc2dc \ubc31\uc564\ub4dc\ub294 \ub9ce\uc774 \uc5b4\ub835\ub2e4"),(0,s.kt)("p",null,"\uc77c\ub2e8 \uae30\uc874\uc5d0 \ubcf8\uc778\uc758 \uac8c\uc2dc\uae00\uc5d0 \uad8c\ud55c\uc744 \uac00\uc9c0\ub294 \ubc29\ubc95\uc740 \ubd88\ub7ec\uc62c \uac1d\uccb4\uac00 \uac00\uc9c0\uace0 \uc788\ub294 \uc18c\uc720\uc790 \uc18d\uc131\uc5d0 \ubcf8\uc778\uc758 \uace0\uc720\uc2dd\ubcc4\uc790\uac00 \uc788\uc73c\uba74 \uad8c\ud55c\uc744 \uac00\uc9c4\ub2e4 \uc774\ub2e4\n\uc694\uccad \uad6c\ubd84\uc740 ",(0,s.kt)("inlineCode",{parentName:"p"},"auth.jwt() === { email }")," \uc774\ub7f0 \uc2dd\uc73c\ub85c \ud55c\ub2e4\n\uadf8\ub798\uc11c \uc608\uc81c\uc5d0\uc11c \uadf8\ub0e5 \uc544\uc608 \uc804\uccb4 \uc870\ud68c\ud55c\ub2e4\ub97c \uc608\uc2dc\ub85c \uc124\uba85\ud558\uace0 \uc788\ub2e4"),(0,s.kt)("p",null,"\uadfc\ub370 \uc9c8\ubb38\uc774\ub791 \ub2f5\ubcc0\uc774 \uc880 \ub2e4\ub978 \uac83 \uac19\ub2e4"),(0,s.kt)("p",null,"\uc77d\ub2e4\ubcf4\ub2c8\uae4c\n",(0,s.kt)("a",{parentName:"p",href:"https://supabase.com/docs/guides/auth/row-level-security#policies-with-joins"},"Row Level Security | Supabase Docs")),(0,s.kt)("p",null,"\uc870\uc778\uc774 \ub418\uae30 \ub54c\ubb38\uc5d0 \uc678\ubd80 \ucffc\ub9ac\uc5d0\uc11c \uad8c\ud55c \uc124\uc815\uc6a9\uc73c\ub85c \ub9cc\ub4e4\uc5b4\ub454 \ud2b9\uc815 \ud14c\uc774\ube14\uc5d0\uc11c \uac12\uc744 \uac00\uc838\uc640\uc11c \ube44\uad50 \uc2dc\ud0ac \uc218 \uc788\uc744 \uac83 \uac19\ub2e4\n\uc5ec\uae30\uc11c \ubcf4\uba74 \uc870\uac74\uc5d0 teams \uc5d0 \ub300\ud574\uc11c update \uad8c\ud55c\uc744 using \uc5d0 \ub9de\uc73c\uba74 \ud5c8\ub77d\ud55c\ub2e4\n\uc804\uc1a1 \ubc1b\uc740 \uc544\uc774\ub514\uac00 in \ub2e4\uc74c \uc870\uac74\uc808\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\uc73c\uba74~ \uc774\ub77c\ub294 SQL \uc774\ub2e4!\n\uac80\uc0c9\uc5b4 : select \ubb38 \ud558\uc704\uc9c8\uc758\uc5b4 in"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},'create policy "Team members can update team details if they belong to the team."\n  on teams\n  for update using (\n    auth.uid() in (\n      select user_id from members\n      where team_id = id\n    )\n  );\n')),(0,s.kt)("p",null,"\uc5ec\uae30\uc11c id \ub294 \uc5b4\ub514\uc11c \ud280\uc5b4\ub098\uc654\ub098 \uc2f6\uc740\ub370\n\ud300\ub4e4\uc758 id \uc911\uc5d0\uc11c \ub9de\ub294 \uc544\uc774\ub514 \ucc3e\uace0 \uc788\ub294 \uac83\uc774\ub2e4\n\ucc3e\ub294 \ud300\uc774 \uc788\ub294 \uc0c1\ud669\uc784\n\uc544 \uc5ec\uae30\uc11c id \uac00 \uc5b4\ub514\uc11c \ub118\uc5b4\uc654\ub294\uc9c0\ub97c \ubabb\ucc3e\uaca0\ub2e4\n\uc77c\ub2e8 \ub098\ub294 \ud2b9\uc815 \ud300\uc5d0 \ub300\ud55c \uad8c\ud55c\uc744 \uc8fc\uace0 \uc788\ub294\uac8c \uc544\ub2c8\uae30 \ub54c\ubb38\uc5d0 \uc0dd\ub7b5\ud574\ub3c4 \ub41c\ub2e4"),(0,s.kt)("p",null,"\uc6d0\ub798 \uc804\uccb4 \uc870\ud68c\uc640 \uc0ad\uc81c\uc5d0 \ub300\ud55c \uad8c\ud55c\uc740 \uc720\uc800\uc5d0\uac8c \ubd80\uc5ec\ub418\uc9c0\ub9cc\n\ud2b9\uc815 \uc870\uac74\uc744 \ucda9\uc871\ud560 \uacbd\uc6b0 \uc804\uccb4 \uc870\ud68c\uc640 \uc804\uccb4 \uc0ad\uc81c\uac00 \uac00\ub2a5\ud55c \uad8c\ud55c\uc744 \uc8fc\ub294 \uc2dd\uc73c\ub85c \uc811\uadfc \ud560 \uc218 \uc788\uc5b4\ubcf4\uc778\ub2e4"),(0,s.kt)("h4",{id:"\ub450\ubc88\uc9f8-\ubc29\ubc95"},"\ub450\ubc88\uc9f8 \ubc29\ubc95"),(0,s.kt)("p",null,"\uacc4\uc18d \uc77d\uace0 \uc788\uc73c\ub2c8 \uc810\uc810 \ubcf4\uc774\ub294\ub370 \uadf8\ub0e5 \ucc98\uc74c \uc4f8 \ub54c \ubc14\ub85c \ud14c\uc774\ube14\uc744 \uc9c0\uc815\ud560 \uc218 \uc788\ub2e4 ",(0,s.kt)("inlineCode",{parentName:"p"},"auth.uid() = posts.creator_id"),"\n\uadf8\ub798\uc11c \uc54c \uc218 \uc788\ub294 \uac83\uc740 \ub0b4\ubd80\uac00 \uc870\uac74 \ucda9\uc871\ub9cc \ub418\uba74 \ub41c\ub2e4"),(0,s.kt)("p",null,"\uadf8 \uc678\ub85c \ub2e4\uc591\ud55c \uae30\ub2a5\ub4e4\uc774 \uad6c\ud604\ub420 \uc218 \uc788\ub2e4 SQL \uc790\uccb4\uac00 \uadf8\ub0e5 \ud14c\uc774\ube14\ub85c \ud560 \uc218 \uc788\ub294 \uac74 \ub2e4 \ub418\ub294 \uac83\uc73c\ub85c \ubcf4\uc778\ub2e4"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"using (\n  auth.uid() = posts.creator_id\n);\n\nusing (\n    auth.uid() in (\n      select user_id from members\n    )\n  );\n\n")),(0,s.kt)("h3",{id:"3-\ubc88"},"3 \ubc88"),(0,s.kt)("p",null,"\ud14c\uc2a4\ud2b8 \uc911\uc5d0 \ubcc4\ub3c4\uc758 \ub85c\uadf8\uc544\uc6c3\uc774 \uc5c6\uc5c8\ub354\ub2c8 \ub85c\uadf8\uc778 \ub418\uc5b4\uc788\ub2e4\ub77c\ub294 \uac83\uc744 \ub4a4\ub2a6\uac8c \uc54c\uac8c\ub42c\ub2e4\n\uc815\ucc45 \ud14c\uc2a4\ud2b8\ud558\ub2e4\uac00 \ud639\uc2dc\ub098 \ud574\uc11c \ucfe0\ud0a4\ub791 \ub85c\uceec \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \uc5f4\uc5c8\ub354\ub2c8 \ub370\uc774\ud130\uac00 \uc788\uc5c8\uace0\n\ub85c\uadf8\uc544\uc6c3 \uc0c1\ud0dc\ub294 anon \ub85c \ucc98\ub9ac\ub418\ub294 \uac83\uc744 \ud655\uc778\ud568"),(0,s.kt)("p",null,"\uc989 \uad8c\ud55c\uc740 \ud06c\uac8c \ub450\uac1c\ub2e4 \uc775\uba85\uacfc \uc778\uc99d\n\uadf8\ub9ac\uace0 \uc778\uc99d\uc740 JWT \uc5d0 \uacc4\uc815 \uc815\ubcf4 \ub2f4\uc544\uc11c \ud55c\ub2e4\n\uc774\uac83\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc815\ubcf4\ub294 RLS \uc5d0 \uc788\ub2e4\n",(0,s.kt)("a",{parentName:"p",href:"https://supabase.com/docs/guides/auth/row-level-security"},"Row Level Security | Supabase Docs")),(0,s.kt)("p",null,"\uadf8\ub798\uc11c \uc544\ubb34\ud2bc \uadf8\ub798\uc11c \ubcc4\ub3c4\uc758 \ub85c\uadf8\uc544\uc6c3\uc774 \ud544\uc694\ud55c \uac83\uc744 \uc54c\uac8c \ub428\n\uadfc\ub370 \uadf8\ub7ec\uba74 \ub85c\uadf8\uc544\uc6c3 \uc548\ud558\uba74 \ud3c9\uc0dd \ub85c\uadf8\uc778\ub418\uc788\uc5b4\uc57c\ud558\ub098?"),(0,s.kt)("p",null,"\uc694\uccad \uc804\uc1a1\uc790\uc758 uuid \ub098 jwt \ub97c \uc54c \uc218 \uc788\ub294 \uac74 \uc88b\ub2e4\n\uadfc\ub370 \uadf8\uac78 \uad8c\ud55c\uc5d0 \uc5f0\uacb0 \uc2dc\ud0ac \uc218 \uc788\ub290\ub0d0\ub294\uac70\uc784"))}d.isMDXComponent=!0}}]);