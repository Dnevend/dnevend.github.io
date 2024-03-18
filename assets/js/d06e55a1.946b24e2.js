"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[3855],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>u});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),m=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},d=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},c="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=m(r),s=n,u=c["".concat(p,".").concat(s)]||c[s]||k[s]||i;return r?a.createElement(u,l(l({ref:e},d),{},{components:r})):a.createElement(u,l({ref:e},d))}));function u(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[c]="string"==typeof t?t:n,l[1]=o;for(var m=2;m<i;m++)l[m]=r[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},1283:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:3,tags:["vim","linux"]},l="vim",o={unversionedId:"devops/vim",id:"devops/vim",title:"vim",description:"\u57fa\u672c\u4e0a vi/vim \u5171\u5206\u4e3a\u4e09\u79cd\u6a21\u5f0f\uff0c\u547d\u4ee4\u6a21\u5f0f\uff08Command Mode\uff09\u3001\u8f93\u5165\u6a21\u5f0f\uff08Insert Mode\uff09\u548c\u547d\u4ee4\u884c\u6a21\u5f0f\uff08Command-Line Mode\uff09\u3002",source:"@site/docs/devops/vim.md",sourceDirName:"devops",slug:"/devops/vim",permalink:"/docs/devops/vim",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/devops/vim.md",tags:[{label:"vim",permalink:"/docs/tags/vim"},{label:"linux",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,tags:["vim","linux"]},sidebar:"wikiSidebar",previous:{title:"Docker",permalink:"/docs/devops/docker"},next:{title:"\u547d\u4ee4\u5206\u7c7b",permalink:"/docs/category/\u547d\u4ee4\u5206\u7c7b"}},p={},m=[{value:"\u547d\u4ee4\u6a21\u5f0f",id:"\u547d\u4ee4\u6a21\u5f0f",level:2},{value:"\u8f93\u5165\u6a21\u5f0f",id:"\u8f93\u5165\u6a21\u5f0f",level:2},{value:"\u547d\u4ee4\u884c\u6a21\u5f0f",id:"\u547d\u4ee4\u884c\u6a21\u5f0f",level:2}],d={toc:m},c="wrapper";function k(t){let{components:e,...r}=t;return(0,n.kt)(c,(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"vim"},"vim"),(0,n.kt)("p",null,"\u57fa\u672c\u4e0a vi/vim \u5171\u5206\u4e3a\u4e09\u79cd\u6a21\u5f0f\uff0c\u547d\u4ee4\u6a21\u5f0f\uff08Command Mode\uff09\u3001\u8f93\u5165\u6a21\u5f0f\uff08Insert Mode\uff09\u548c\u547d\u4ee4\u884c\u6a21\u5f0f\uff08Command-Line Mode\uff09\u3002"),(0,n.kt)("h2",{id:"\u547d\u4ee4\u6a21\u5f0f"},"\u547d\u4ee4\u6a21\u5f0f"),(0,n.kt)("p",null,"\u7528\u6237\u521a\u521a\u542f\u52a8 vi/vim\uff0c\u4fbf\u8fdb\u5165\u4e86\u547d\u4ee4\u6a21\u5f0f\u3002\n\u6b64\u72b6\u6001\u4e0b\u6572\u51fb\u952e\u76d8\u52a8\u4f5c\u4f1a\u88ab Vim \u8bc6\u522b\u4e3a\u547d\u4ee4\uff0c\u800c\u975e\u8f93\u5165\u5b57\u7b26\uff0c\u6bd4\u5982\u6211\u4eec\u6b64\u65f6\u6309\u4e0b i\uff0c\u5e76\u4e0d\u4f1a\u8f93\u5165\u4e00\u4e2a\u5b57\u7b26\uff0ci \u88ab\u5f53\u4f5c\u4e86\u4e00\u4e2a\u547d\u4ee4\u3002\n\u4ee5\u4e0b\u662f\u666e\u901a\u6a21\u5f0f\u5e38\u7528\u7684\u51e0\u4e2a\u547d\u4ee4\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"\u547d\u4ee4"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u4ecb\u7ecd"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"i"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5207\u6362\u5230\u8f93\u5165\u6a21\u5f0f\uff0c\u5728\u5149\u6807\u5f53\u524d\u4f4d\u7f6e\u5f00\u59cb\u8f93\u5165\u6587\u672c\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5220\u9664\u5f53\u524d\u5149\u6807\u6240\u5728\u5904\u7684\u5b57\u7b26\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},":"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5207\u6362\u5230\u5e95\u7ebf\u547d\u4ee4\u6a21\u5f0f\uff0c\u4ee5\u5728\u6700\u5e95\u4e00\u884c\u8f93\u5165\u547d\u4ee4\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"a"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8fdb\u5165\u63d2\u5165\u6a21\u5f0f\uff0c\u5728\u5149\u6807\u4e0b\u4e00\u4e2a\u4f4d\u7f6e\u5f00\u59cb\u8f93\u5165\u6587\u672c\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"o"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5728\u5f53\u524d\u884c\u7684\u4e0b\u65b9\u63d2\u5165\u4e00\u4e2a\u65b0\u884c\uff0c\u5e76\u8fdb\u5165\u63d2\u5165\u6a21\u5f0f\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"O"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5728\u5f53\u524d\u884c\u7684\u4e0a\u65b9\u63d2\u5165\u4e00\u4e2a\u65b0\u884c\uff0c\u5e76\u8fdb\u5165\u63d2\u5165\u6a21\u5f0f\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"dd"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5220\u9664\u5f53\u524d\u884c\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"yy"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u590d\u5236\u5f53\u524d\u884c\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"p\uff08\u5c0f\u5199\uff09"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7c98\u8d34\u526a\u8d34\u677f\u5185\u5bb9\u5230\u5149\u6807\u4e0b\u65b9\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"P\uff08\u5927\u5199\uff09"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7c98\u8d34\u526a\u8d34\u677f\u5185\u5bb9\u5230\u5149\u6807\u4e0a\u65b9\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"u"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u64a4\u9500\u4e0a\u4e00\u6b21\u64cd\u4f5c\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Ctrl + r"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u91cd\u505a\u4e0a\u4e00\u6b21\u64a4\u9500\u7684\u64cd\u4f5c\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h2",{id:"\u8f93\u5165\u6a21\u5f0f"},"\u8f93\u5165\u6a21\u5f0f"),(0,n.kt)("p",null,"\u5728\u547d\u4ee4\u6a21\u5f0f\u4e0b\u6309\u4e0b i \u5c31\u8fdb\u5165\u4e86\u8f93\u5165\u6a21\u5f0f\uff0c\u4f7f\u7528 Esc \u952e\u53ef\u4ee5\u8fd4\u56de\u5230\u666e\u901a\u6a21\u5f0f\u3002"),(0,n.kt)("h2",{id:"\u547d\u4ee4\u884c\u6a21\u5f0f"},"\u547d\u4ee4\u884c\u6a21\u5f0f"),(0,n.kt)("p",null,"\u5728\u547d\u4ee4\u6a21\u5f0f\u4e0b\u6309\u4e0b ",(0,n.kt)("inlineCode",{parentName:"p"},":"),"\uff08\u82f1\u6587\u5192\u53f7\uff09\u5c31\u8fdb\u5165\u4e86\u5e95\u7ebf\u547d\u4ee4\u6a21\u5f0f\u3002"),(0,n.kt)("p",null,"\u5e95\u7ebf\u547d\u4ee4\u6a21\u5f0f\u53ef\u4ee5\u8f93\u5165\u5355\u4e2a\u6216\u591a\u4e2a\u5b57\u7b26\u7684\u547d\u4ee4\uff0c\u53ef\u7528\u7684\u547d\u4ee4\u975e\u5e38\u591a\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"\u547d\u4ee4"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u4ecb\u7ecd"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},":w"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4fdd\u5b58\u6587\u4ef6\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},":q"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9000\u51fa Vim \u7f16\u8f91\u5668\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},":wq"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4fdd\u5b58\u6587\u4ef6\u5e76\u9000\u51fa Vim \u7f16\u8f91\u5668\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},":q!"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5f3a\u5236\u9000\u51fa Vim \u7f16\u8f91\u5668\uff0c\u4e0d\u4fdd\u5b58\u4fee\u6539\u3002")))))}k.isMDXComponent=!0}}]);