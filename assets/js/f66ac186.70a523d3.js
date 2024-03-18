"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[8648],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),p=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),s=p(r),m=a,d=s["".concat(u,".").concat(m)]||s[m]||k[m]||o;return r?n.createElement(d,i(i({ref:e},c),{},{components:r})):n.createElement(d,i({ref:e},c))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l[s]="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1519:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1,tags:["blockchain","utxo"]},i="UTXO",l={unversionedId:"blockchain/utxo",id:"blockchain/utxo",title:"UTXO",description:"UTXO(Unspent transaction output)",source:"@site/docs/blockchain/utxo.md",sourceDirName:"blockchain",slug:"/blockchain/utxo",permalink:"/docs/blockchain/utxo",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/blockchain/utxo.md",tags:[{label:"blockchain",permalink:"/docs/tags/blockchain"},{label:"utxo",permalink:"/docs/tags/utxo"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["blockchain","utxo"]},sidebar:"wikiSidebar",previous:{title:"Wiki - \u533a\u5757\u94fe",permalink:"/docs/category/wiki---\u533a\u5757\u94fe"},next:{title:"PSBT",permalink:"/docs/blockchain/psbt"}},u={},p=[{value:"UTXO(Unspent transaction output)",id:"utxounspent-transaction-output",level:2},{value:"\u5f02\u5e38",id:"\u5f02\u5e38",level:2},{value:"Dust Error",id:"dust-error",level:3},{value:"BAD-TXNS-MISSINGORSPENT Error",id:"bad-txns-missingorspent-error",level:3}],c={toc:p},s="wrapper";function k(t){let{components:e,...r}=t;return(0,a.kt)(s,(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"utxo"},"UTXO"),(0,a.kt)("h2",{id:"utxounspent-transaction-output"},(0,a.kt)("a",{parentName:"h2",href:"https://nervosbook.github.io/book/zh/utxo.html"},"UTXO(Unspent transaction output)")),(0,a.kt)("p",null,"\u6bd4\u7279\u5e01\u7684\u533a\u5757\u94fe\u7531\u4e00\u4e2a\u4e2a\u533a\u5757\u4e32\u8054\u6784\u6210\uff0c\u800c\u6bcf\u4e2a\u533a\u5757\u53c8\u5305\u542b\u4e00\u4e2a\u6216\u591a\u4e2a\u4ea4\u6613\u3002"),(0,a.kt)("p",null,"\u6bd4\u7279\u5e01\u4e2d\u662f\u6ca1\u6709\u8d26\u6237\u8fd9\u4e2a\u6982\u5ff5\u7684\uff0c\u6240\u8c13\u4e00\u4e2a\u5730\u5740\u7684\u4f59\u989d\uff0c\u5176\u5b9e\u5c31\u662f\u7edf\u8ba1\u8fd9\u4e2a\u5730\u5740\u76f8\u5173\u7684\u6240\u6709\u4ea4\u6613\uff0c\u7136\u540e\u8fd0\u7b97\u51fa\u6765\u7684\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u6211\u4eec\u89c2\u5bdf\u4efb\u4f55\u4e00\u4e2a\u4ea4\u6613\uff0c\u5b83\u603b\u662f\u7531\u82e5\u5e72\u4e2a\u8f93\u5165\uff08Input\uff09\u548c\u82e5\u5e72\u4e2a\u8f93\u51fa\uff08Output\uff09\u6784\u6210\uff0c\u4e00\u4e2a Input \u6307\u5411\u7684\u662f\u524d\u9762\u533a\u5757\u7684\u67d0\u4e2a Output\uff0c\u53ea\u6709 Coinbase \u4ea4\u6613\uff08\u77ff\u5de5\u5956\u52b1\u7684\u94f8\u5e01\u4ea4\u6613\uff09\u6ca1\u6709\u8f93\u5165\uff0c\u53ea\u6709\u51ed\u7a7a\u8f93\u51fa\u3002\u6240\u4ee5\uff0c\u4efb\u4f55\u4ea4\u6613\uff0c\u603b\u662f\u53ef\u4ee5\u7531 Input \u6eaf\u6e90\u5230 Coinbase \u4ea4\u6613\u3002"),(0,a.kt)("p",null,"\u8fd8\u6ca1\u6709\u88ab\u4e0b\u4e00\u4e2a\u4ea4\u6613\u82b1\u8d39\u7684 Output \u88ab\u79f0\u4e3a UTXO\uff1aUnspent TX Output\uff0c\u5373\u672a\u82b1\u8d39\u4ea4\u6613\u8f93\u51fa\u3002\u7ed9\u5b9a\u4efb\u4f55\u4e00\u4e2a\u533a\u5757\uff0c\u8ba1\u7b97\u5f53\u524d\u6240\u6709\u7684 UXTO \u91d1\u989d\u4e4b\u548c\uff0c\u7b49\u540c\u4e8e\u81ea\u521b\u4e16\u533a\u5757\u5230\u7ed9\u5b9a\u533a\u5757\u7684\u6316\u77ff\u5956\u52b1\u4e4b\u548c\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u6bd4\u7279\u5e01\u7684\u4ea4\u6613\u6a21\u578b\u548c\u6211\u4eec\u5e73\u65f6\u4f7f\u7528\u7684\u94f6\u884c\u8d26\u53f7\u6709\u6240\u4e0d\u540c\uff0c\u5b83\u5e76\u6ca1\u6709\u8d26\u6237\u8fd9\u4e2a\u8bf4\u6cd5\uff0c\u53ea\u6709 UTXO\u3002\u60f3\u8981\u786e\u5b9a\u67d0\u4e2a\u4eba\u62e5\u6709\u7684\u6bd4\u7279\u5e01\uff0c\u5e76\u65e0\u6cd5\u901a\u8fc7\u67d0\u4e2a\u8d26\u6237\u67e5\u5230\uff0c\u5fc5\u987b\u77e5\u9053\u6b64\u4eba\u63a7\u5236\u7684\u6240\u6709 UTXO \u91d1\u989d\u4e4b\u548c\u3002"),(0,a.kt)("p",null,"\u5c0f\u660e\u7ed9\u5c0f\u521a\u8f6c\u8d26 1 \u6bd4\u7279\u5e01\u3002\u6574\u4e2a\u8fc7\u7a0b\u662f\u8fd9\u6837\u7684\uff0c\u5c0f\u660e\u8981\u6536\u96c6\u8db3\u591f\u7684\u8f93\u5165\uff0c\u6bd4\u5982\u5c0f\u660e\u7684\u5730\u5740\u5bf9\u5e94\u7684\u4ee5\u5f80\u4ea4\u6613\u4e2d\uff0c\u627e\u5230\u4e86\u4e00\u4e2a\u9762\u503c\u4e3a 0.9 \u7684 UTXO\uff0c\u4e0d\u591f 1 \u6bd4\u7279\u5e01\uff0c\u597d\u5728\u4ea4\u6613\u4e2d\u662f\u5141\u8bb8\u6709\u591a\u4e2a\u8f93\u5165\u7684\uff0c\u6240\u4ee5\u5c0f\u660e\u53c8\u627e\u5230\u4e86\u4e00\u4e2a\u9762\u503c 0.2 \u7684 UTXO\uff0c\u8fd9\u6837\u5728\u8fd9\u6b21\u8f6c\u8d26\u7684\u4ea4\u6613\u4e2d\uff0c\u5c31\u4f1a\u6709\u4e24\u4e2a\u8f93\u5165\u3002\u540c\u65f6\u8f93\u51fa\u4e5f\u4f1a\u6709\u4e24\u4e2a\uff0c\u4e00\u4e2a\u662f\u6307\u5411\u5c0f\u521a\u5730\u5740\uff0c\u9762\u503c\u662f 1 \u6bd4\u7279\u5e01\u3002\u53e6\u4e00\u4e2a\u6307\u5411\u5c0f\u660e\u7684\u5730\u5740\uff0c\u9762\u503c\u662f 0.1 \u6bd4\u7279\u5e01\uff0c\u8fd9\u4e2a\u8f93\u51fa\u5c31\u662f\u627e\u96f6\u4e86\u3002"),(0,a.kt)("p",null,"\u68b3\u7406\u4e00\u4e0b\uff0c\u6574\u4e2a\u6d41\u7a0b\u662f\u8fd9\u6837\u7684\uff1a\u5c0f\u660e\u9996\u5148\u8981\u51d1\u591f\u8db3\u591f\u9762\u989d\u7684 Input\uff0c\u8fd9\u91cc\u4ed6\u627e\u5230\u4e86\u4e24\u4e2a Input\uff0c\u800c\u8fd9\u4e24\u4e2a Input \u672c\u8eab\u90fd\u662f\u4ee5\u5f80\u4ea4\u6613\u7684 Output\u3002\u8fd9\u4e24\u4e2a Output \u5728\u672a\u6d88\u8d39\u4e4b\u524d\uff0c\u5c31\u662f UTXO\uff0c\u4f46\u662f\u5f53\u524d\u4ea4\u6613\u4e00\u65e6\u751f\u6548\uff0c\u5b83\u4eec\u4e24\u4e2a\u5c31\u4f1a\u88ab\u6d88\u8017\u6389\uff0c\u800c\u672c\u4ea4\u6613\u4e2d\u53c8\u4f1a\u751f\u6210\u4e24\u4e2a\u65b0\u7684 UTXO\uff0c\u4e00\u4e2a\u6307\u5411\u5c0f\u660e\uff0c\u4e00\u4e2a\u6307\u5411\u5c0f\u521a\u3002\u76f8\u5f53\u4e8e\u5c0f\u660e\u548c\u5c0f\u521a\u5404\u79cd\u9886\u5230\u624b\u4e00\u4e2a\u786c\u5e01\uff0c\u672a\u6765\u53ef\u4ee5\u5728\u5176\u4ed6\u4ea4\u6613\u4e2d\u53bb\u6d88\u8d39\u3002\u800c\u5c0f\u660e\u548c\u5c0f\u521a\u5404\u81ea\u5730\u5740\u7684\u4f59\u989d\uff0c\u5176\u5b9e\u5c31\u662f\u5404\u81ea\u5bf9\u5e94\u7684\u6240\u6709 UTXO \u7684\u603b\u548c\u3002"),(0,a.kt)("h2",{id:"\u5f02\u5e38"},"\u5f02\u5e38"),(0,a.kt)("h3",{id:"dust-error"},(0,a.kt)("a",{parentName:"h3",href:"https://help.crypto.com/en/articles/4056357-what-is-dust-utxo-error"},"Dust Error")),(0,a.kt)("p",null,"\u7070\u5c18\u662f\u6307\u5c11\u91cf\u7684\u5c0f\u6570\u4ee3\u5e01\uff0c\u901a\u5e38\u4f4e\u4e8e\u7f51\u7edc/\u4ea4\u6613\u8d39\u7528\u3002\u5f53\u7528\u6237\u6765\u56de\u53d1\u9001\u6bd4\u7279\u5e01\u65f6\uff0c\u6bd4\u7279\u5e01\u534f\u8bae\u6709\u65f6\u4f1a\u4ea7\u751f\u5c11\u91cf\u7684\u786c\u5e01\u8f93\u51fa\u3002\u4ece\u6bd4\u7279\u5e01\u5206\u53c9\u51fa\u6765\u7684\u5176\u4ed6 UTXO\uff08\u672a\u4f7f\u7528\u4ea4\u6613\u8f93\u51fa\uff09\u533a\u5757\u94fe\u4e5f\u4f1a\u4ea7\u751f\u540c\u6837\u7684\u5fae\u5c0f\u8f93\u51fa\uff0c\u4f8b\u5982\u83b1\u7279\u5e01\uff08LTC\uff09\u3001\u72d7\u72d7\u5e01\uff08DOGE\uff09\u3001\u6bd4\u7279\u5e01\u73b0\u91d1\uff08BCH\uff09\u3002"),(0,a.kt)("p",null,"\u7070\u5c18\u6709 3 \u4e2a\u8d1f\u9762\u5f71\u54cd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7528\u6237\u82b1\u8d39\u9700\u8981\u8f83\u5927\u7f51\u7edc\u8d39\u7528\u6765\u786e\u8ba4\u4ea4\u6613\u7684\u8d44\u91d1\u662f\u65e0\u5229\u53ef\u56fe\u7684")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5b83\u901a\u8fc7\u4e0d\u7ecf\u6d4e\u7684\u4ea4\u6613\u4f7f\u7f51\u7edc\u8d85\u8f7d\u800c\u6c61\u67d3\u751f\u6001\u7cfb\u7edf\uff08\u5728\u6570\u636e\u5b58\u50a8\u548c\u65f6\u95f4\u65b9\u9762\uff0c\u5c0f\u989d\u4ea4\u6613\u9700\u8981\u4e0e\u5927\u989d\u4ea4\u6613\u7c7b\u4f3c\u7684\u6570\u636e\u7a7a\u95f4\u5b58\u50a8\uff09")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5f53\u60a8\u5c06\u4e0d\u540c\u94b1\u5305\u4e2d\u7684\u7070\u5c18\u5408\u5e76\u5230\u4e00\u4e2a\u94b1\u5305\u4e2d\u65f6\uff0c\u5b83\u4f1a\u964d\u4f4e\u60a8\u7684\u9690\u79c1\u7ea7\u522b\uff0c\u8fd9\u4f1a\u66b4\u9732\u60a8\u7684\u94b1\u5305\u8eab\u4efd\uff0c\u5176\u4ed6\u4eba\u53ef\u4ee5\u731c\u6d4b\u8fd9\u4e9b\u94b1\u5305\u90fd\u5c5e\u4e8e\u4e00\u4e2a\u4eba"))),(0,a.kt)("p",null,"\u6211\u600e\u6837\u624d\u80fd\u89e3\u51b3\u8fd9\u4e2a\u7070\u5c18 UTXO \u9519\u8bef\uff1f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8bf7\u52ff\u53d1\u9001\u8d39\u7528\u8f83\u9ad8\u7684\u5c0f\u989d\u4ea4\u6613\u3002\u7531\u4e8e\u7f51\u7edc\u5c06\u5c1d\u8bd5\u4ece\u5c0f\u4ea4\u6613\u521b\u5efa UTXO\uff0c\u56e0\u6b64\u4ea4\u6613\u5c06\u4f1a\u5931\u8d25\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5c1d\u8bd5\u5148\u5411\u94b1\u5305\u6dfb\u52a0\u66f4\u591a\u8d44\u91d1\uff0c\u7136\u540e\u518d\u5c06\u5176\u5168\u90e8\u53d1\u9001\u51fa\u53bb\u3002\u62e5\u6709\u66f4\u5927\u7684\u4ea4\u6613\u5c06\u786e\u4fdd\u7f51\u7edc\u7acb\u5373\u63a5\u53d7\u4ea4\u6613\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728\u53d1\u9001\u786e\u8ba4\u5c4f\u5e55\u4e2d\u9009\u62e9\u8f83\u4f4e\u7684\u8d39\u7528\u7b49\u7ea7")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u786e\u4fdd\u5728\u94b1\u5305\u4e0a\u7559\u4e0b\u5927\u91cf\u5269\u4f59\u4f59\u989d\uff0c\u4ee5\u4fbf\u5f53\u60a8\u5c1d\u8bd5\u82b1\u8d39\u5269\u4f59\u4f59\u989d\u65f6\u7f51\u7edc\u4e0d\u4f1a\u5c06\u5176\u89c6\u4e3a\u7070\u5c18\u4ea4\u6613"))),(0,a.kt)("h3",{id:"bad-txns-missingorspent-error"},(0,a.kt)("a",{parentName:"h3",href:"https://medium.com/@JordanCamirand/solving-bad-txns-missingorspent-error-ledger-live-cda954a00255"},"BAD-TXNS-MISSINGORSPENT Error")))}k.isMDXComponent=!0}}]);