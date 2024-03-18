"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[6556],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(r),k=n,d=s["".concat(o,".").concat(k)]||s[k]||m[k]||l;return r?a.createElement(d,i(i({ref:t},u),{},{components:r})):a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:n,i[1]=p;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},7621:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const l={sidebar_position:2},i="2023",p={unversionedId:"weekly/2023",id:"weekly/2023",title:"2023",description:"2023-11-23",source:"@site/docs/weekly/2023.md",sourceDirName:"weekly",slug:"/weekly/2023",permalink:"/docs/weekly/2023",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/weekly/2023.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"wikiSidebar",previous:{title:"2024",permalink:"/docs/weekly/2024"},next:{title:"Collection",permalink:"/docs/category/collection"}},o={},c=[{value:"2023-11-23",id:"2023-11-23",level:2},{value:"2023-11-27",id:"2023-11-27",level:2},{value:"2023-12-06",id:"2023-12-06",level:2},{value:"2023-12-12",id:"2023-12-12",level:2}],u={toc:c},s="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"2023"},"2023"),(0,n.kt)("h2",{id:"2023-11-23"},"2023-11-23"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://joshcollinsworth.com/blog/antiquated-react"},"Things you forgot (or never knew) because of React - \u56e0 React \u800c\u5fd8\u8bb0\uff08\u6216\u4ece\u4e0d\u77e5\u9053\uff09\u7684\u4e8b\u60c5")),(0,n.kt)("p",{parentName:"li"},"\u4f5c\u8005\u8ba4\u4e3a\u8bb8\u591a\u5f00\u53d1\u4eba\u5458\u5bf9\u4e8e\u53ef\u80fd\u66f4\u9002\u5408\u4ed6\u4eec\u9700\u6c42\u7684 React \u66ff\u4ee3\u54c1\u5e76\u4e0d\u4e86\u89e3\u3002\u65b0\u7684\u6846\u67b6\u901a\u8fc7\u66f4\u4f18\u5316\u7684\u65b9\u5f0f\u6784\u5efa\u5728 React \u7684\u601d\u60f3\u4e4b\u4e0a\uff0c\u89e3\u51b3\u4e86\u5b83\u7684\u95ee\u9898\uff0c\u5177\u6709\u66f4\u597d\u7684\u6027\u80fd\u3001\u66f4\u5c11\u7684\u590d\u6742\u6027\u548c\u66f4\u5bb9\u6613\u7684\u5b66\u4e60\u66f2\u7ebf\u3002\u50cf hooks \u8fd9\u6837\u7684\u7279\u6027\u73b0\u5728\u5df2\u7ecf\u6210\u4e3a\u6807\u51c6\uff0c\u4f46\u5728\u5176\u4ed6\u6846\u67b6\u4e2d\u5b9e\u73b0\u5f97\u66f4\u52a0\u667a\u80fd\u3002React \u7684\u521a\u6027\u4e5f\u5bfc\u81f4\u4e86\u5728\u8868\u5355\u3001\u6837\u5f0f\u548c\u4e0e\u5176\u4ed6\u5e93\u7684\u517c\u5bb9\u6027\u65b9\u9762\u7684\u95ee\u9898\uff0c\u800c\u65b0\u7684\u9009\u62e9\u5219\u907f\u514d\u4e86\u8fd9\u4e9b\u95ee\u9898\u3002\u603b\u7684\u6765\u8bf4\uff0c\u8fd9\u7bc7\u6587\u7ae0\u5efa\u8bae\u63a2\u7d22\u50cf Svelte\u3001Vue\u3001Solid \u548c Preact \u8fd9\u6837\u7684\u66ff\u4ee3\u54c1\uff0c\u5b83\u4eec\u53ef\u80fd\u63d0\u4f9b\u66f4\u597d\u7684\u5f00\u53d1\u4eba\u5458\u4f53\u9a8c\u800c\u4e0d\u4f1a\u727a\u7272\u529f\u80fd\u3002\u670d\u52a1\u5668\u6e32\u67d3\u6846\u67b6\u7684\u5174\u8d77\u4e5f\u4e3a\u5f00\u53d1\u4eba\u5458\u63d0\u4f9b\u4e86\u8d85\u8d8a React \u7b49\u5ba2\u6237\u7aef\u91cd\u91cf\u7ea7\u6846\u67b6\u7684\u66f4\u591a\u9009\u62e9\u3002\u9f13\u52b1\u5f00\u53d1\u4eba\u5458\u8d85\u8d8a\u719f\u6089\u7684\u8303\u56f4\uff0c\u4e86\u89e3\u751f\u6001\u7cfb\u7edf\u73b0\u5728\u63d0\u4f9b\u7684\u5176\u4ed6\u9009\u62e9\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://chrlschn.dev/blog/2023/02/react-is-the-new-ibm/"},"React is the New IBM"),"\nReact \u5df2\u6210\u4e3a\u4e3b\u5bfc\u7684\u524d\u7aef\u6846\u67b6\uff0c\u5c31\u50cf\u8fc7\u53bb\u7684 IBM \u4e00\u6837\u3002\u7136\u800c\uff0c\u6587\u7ae0\u8ba4\u4e3a React \u73b0\u5728\u6210\u4e3a\u4e86\u4e00\u4e2a\u95ee\u9898\uff0c\u56e0\u4e3a\u5b83\u7684\u6027\u80fd\u5dee\u3001\u590d\u6742\u5ea6\u9ad8\uff0c\u4ee5\u53ca\u963b\u788d\u521b\u65b0\u7684\u751f\u6001\u7cfb\u7edf\u3002\u867d\u7136 React \u53ef\u80fd\u662f\u4e00\u4e2a\u5b89\u5168\u7684\u9009\u62e9\uff0c\u4f46\u6b63\u786e\u5b9e\u65bd\u5b83\u662f\u6602\u8d35\u7684\uff0c\u800c\u4e14\u5de5\u4f5c\u8d77\u6765\u6ca1\u6709\u4e50\u8da3\u3002\u968f\u7740\u5e02\u573a\u4efd\u989d\u7684\u589e\u957f\uff0c\u8fd9\u4e2a\u6846\u67b6\u53d8\u5f97\u8d8a\u6765\u8d8a\u96be\u4ee5\u6539\u8fdb\u548c\u4f18\u5316\u3002\u50cf Svelte \u548c Preact \u8fd9\u6837\u7684\u66ff\u4ee3\u54c1\u5728\u6027\u80fd\u4e0a\u66f4\u597d\uff0c\u800c\u50cf Vue \u8fd9\u6837\u7684\u6846\u67b6\u5219\u66f4\u52a0\u5f00\u653e\u521b\u65b0\u3002React \u56e2\u961f\u901a\u8fc7\u201c\u7f16\u8bd1\u5668\u9b54\u6cd5\u201d\u6765\u89e3\u51b3\u95ee\u9898\uff0c\u800c\u4e0d\u662f\u91cd\u65b0\u8bbe\u8ba1\u57fa\u672c\u539f\u7406\u3002\u6700\u7ec8\uff0cReact \u53ef\u80fd\u4f1a\u5931\u53bb\u5176\u738b\u51a0\uff0c\u56e0\u4e3a\u5176\u4ed6\u9009\u62e9\u5728\u8fdb\u6b65\u5e76\u89e3\u51b3\u5176\u6838\u5fc3\u9650\u5236\uff0c\u5c31\u50cf\u8fc7\u53bb IBM \u7684\u60c5\u51b5\u4e00\u6837\u3002"),(0,n.kt)("p",{parentName:"li"},"React \u662f\u65b0\u7684 IBM\uff1a\u4f60\u5e94\u8be5\u5b66\u4e60\u5b83\uff0c\u4f60\u5e94\u8be5\u4e86\u89e3\u5b83\u7684\u7f3a\u70b9\uff0c\u4f60\u53ef\u80fd\u4ecd\u7136\u5e94\u8be5\u90e8\u7f72\u5b83\u3002\u4f60\u6c38\u8fdc\u4e0d\u4f1a\u56e0\u4e3a\u9009\u62e9\u5b83\u800c\u88ab\u89e3\u96c7\uff0c\u4f46\u5b83\u4f1a\u5f88\u6602\u8d35\u3001\u81c3\u80bf\u3001\u96be\u4ee5\u6b63\u786e\u5b9e\u65bd\uff0c\u800c\u4e14\u6bcf\u4e00\u6b65\u7684\u5b9e\u65bd\u90fd\u4f1a\u6beb\u65e0\u4e50\u8da3\u3002"))),(0,n.kt)("h2",{id:"2023-11-27"},"2023-11-27"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://survey.devographics.com/zh-Hans/survey/state-of-js/2023"},"State of JavaScript 2023")),(0,n.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u4e86 2023 \u5e74\u7684 JavaScript \u95ee\u5377\u8c03\u67e5, \u95ee\u5377\u4e2d\u63d0\u5230\u8bb8\u591a\u6280\u672f\u6846\u67b6\u6709\u4e9b\u964c\u751f."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"JavaScript Edge/Serverless Runtimes"),(0,n.kt)("li",{parentName:"ul"},"Libraries(Ramda, Zod, Partytown, Mitosis, Yup)"),(0,n.kt)("li",{parentName:"ul"},"Graphics & Animations(Popmotion, Lottie, GreenSock, Theatre, Framer Motion)"),(0,n.kt)("li",{parentName:"ul"},"Architecture and rendering patterns (Islands Architecture)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://ryanholiday.net/these-38-reading-rules-changed-my-life/"},"These 38 Reading Rules Changed My Life - \u8fd9 38 \u6761\u9605\u8bfb\u89c4\u5219\u6539\u53d8\u4e86\u6211\u7684\u751f\u6d3b")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u770b\u5230\u60f3\u8981\u7684\u4e66\uff0c\u5c31\u4e70\u5427\u3002\u4e0d\u7528\u62c5\u5fc3\u4ef7\u683c\u3002\u8bfb\u4e66\u5e76\u4e0d\u662f\u4e00\u4ef6\u5962\u4f88\u7684\u4e8b\u60c5\u3002\u8fd9\u4e0d\u662f\u4f60\u6325\u970d\u7684\u4e1c\u897f\u3002\u8fd9\u662f\u5fc5\u9700\u54c1\u3002\u5373\u4f7f\u4f60\u4ece\u4e66\u4e2d\u5f97\u5230\u7684\u53ea\u662f\u4e00\u4e2a\u6539\u53d8\u751f\u6d3b\u7684\u60f3\u6cd5\uff0c\u8fd9\u4ecd\u7136\u662f\u4e00\u4e2a\u76f8\u5f53\u4e0d\u9519\u7684\u6295\u8d44\u56de\u62a5\u7387\u3002"),(0,n.kt)("li",{parentName:"ul"},'"we never step in the same river twice"\uff0c\u4e0d\u8981\u53ea\u770b\u4e66\uff0c\u8981\u91cd\u8bfb\u4e66\u3002\u65af\u591a\u845b\u5b66\u6d3e\u6709\u4e00\u53e5\u8bdd\u5f88\u559c\u6b22\u2014\u2014\u6211\u4eec\u6c38\u8fdc\u4e0d\u4f1a\u4e24\u6b21\u8e0f\u5165\u540c\u4e00\u6761\u6cb3\u6d41\u3002\u4e66\u6ca1\u53d8\uff0c\u4f46\u4f60\u53d8\u4e86\u3002'),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u672c\u4e66\u5f88\u7cdf\u7cd5\uff0c\u5c31\u505c\u6b62\u9605\u8bfb\u3002\u6700\u597d\u7684\u8bfb\u8005\u5b9e\u9645\u4e0a\u653e\u5f03\u4e86\u5f88\u591a\u4e66\u3002\u4eba\u751f\u82e6\u77ed\uff0c\u6ca1\u65f6\u95f4\u53bb\u8bfb\u4f60\u4e0d\u559c\u6b22\u8bfb\u7684\u4e66\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5e7f\u6cdb\u9605\u8bfb\u548c\u4f60\u4e0d\u540c\u610f\u7684\u4eba\u7684\u89c2\u70b9\u3002\u65af\u591a\u845b\u5b66\u6d3e\u8ba4\u4e3a\uff0c\u6211\u4eec\u5e94\u8be5\u79ef\u6781\u4e0e\u4efb\u4f55\u53ef\u4ee5\u6210\u4e3a\u6211\u4eec\u667a\u6167\u6e90\u6cc9\u7684\u4eba\u4ea4\u5f80\uff0c\u65e0\u8bba\u4ed6\u4eec\u7684\u51fa\u8eab\u5982\u4f55\u3002\u5982\u679c\u5b58\u5728\u667a\u6167\uff0c\u6211\u4eec\u5e94\u8be5\u660e\u667a\u5730\u5229\u7528\u5b83\u3002")))),(0,n.kt)("h2",{id:"2023-12-06"},"2023-12-06"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.duozhuayu.com/posts/1012"},"\u4e1a\u4f59\u4f5c\u8005\u5982\u4f55\u6478\u7d22\u51fa\u8def - \u591a\u6293\u9c7c")),(0,n.kt)("p",{parentName:"li"},"\u300c\u541f\u5b89\u4e00\u4e2a\u5b57\uff0c\u637b\u65ad\u6570\u830e\u987b\u300d\u7684\u4fee\u8f9e\u4f20\u7edf\u4e4b\u4e0b\uff0c\u8bb8\u591a\u8bb8\u591a\u7684\u4f20\u4e16\u4f5c\u54c1\uff0c\u5b9e\u9645\u4e0a\u90fd\u662f\u4e00\u79cd\u6587\u73a9\u4ea7\u7269\uff0c\u5ba1\u7f8e\u4e5f\u8bb8\u662f\u597d\u7684\uff0c\u5374\u53ea\u6709\u4e00\u4e2a\u76c6\u666f\u90a3\u4e48\u5927\u7684\u683c\u5c40\u3002\u4eba\u4eec\u592a\u559c\u6b22\u53e3\u5410\u83b2\u82b1\u548c\u5b57\u5b57\u73e0\u7391\uff0c\u6700\u540e\u5fd8\u4e86\u771f\u6b63\u8981\u8bf4\u4ec0\u4e48\u3002"))),(0,n.kt)("h2",{id:"2023-12-12"},"2023-12-12"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/f82GBadLcQJCiFHcGWzkCA"},"\u5bf9\u6297\u8f6f\u4ef6\u590d\u6742\u5ea6\u7684\u6218\u4e89"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/48Jy1CXQNzRLUAYDzA0Xbg"},"\u5fae\u524d\u7aef\u65f6\u4ee3\uff1a\u6253\u9020\u9ad8\u6548\u3001\u7075\u6d3b\u7684\u524d\u7aef\u5f00\u53d1\u4f53\u7cfb"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://developer.chrome.com/blog/css-wrapped-2023?hl=zh-cn#live-demo-scroll-timeline"},"CSS Wrapped: 2023!")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u67b6\u6784\u57fa\u7840\uff1a\u4e09\u89d2\u51fd\u6570\u3001\u590d\u6742\u7684\u7b2c n-","*","\u9009\u62e9\u3001@scoped\u3001\u9009\u62e9\u5668\u5d4c\u5957\u3001\u5b50\u7f51\u683c"),(0,n.kt)("li",{parentName:"ul"},"\u6392\u7248\uff1a\u9996\u5b57\u6bcd\u3001\u6587\u672c\u6362\u884c/\u7f8e\u89c2"),(0,n.kt)("li",{parentName:"ul"},"\u989c\u8272\uff1a \u989c\u8272\u7ea7\u522b\u3001Color-mix \u51fd\u6570\u3001\u76f8\u5bf9\u989c\u8272\u8bed\u6cd5"),(0,n.kt)("li",{parentName:"ul"},"\u81ea\u9002\u5e94\u8bbe\u8ba1\uff1a\u5bb9\u5668\u67e5\u8be2\u3001\u6837\u5f0f\u67e5\u8be2\u3001:has \u9009\u62e9\u5668"),(0,n.kt)("li",{parentName:"ul"},"\u4ea4\u4e92\uff1a\u8bd5\u56fe\u8f6c\u6362\u3001\u6eda\u52a8\u7ed3\u675f\u3001\u6eda\u52a8\u6761\u9a71\u52a8\u52a8\u753b"),(0,n.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\uff1a\u5f39\u51fa\u5f0f\u7a97\u53e3 Popover\u3001Select \u4e2d\u7684",(0,n.kt)("inlineCode",{parentName:"li"},"<hr />"),"\u5206\u5272\u5143\u7d20\u3001:user-valid/invalid \u4f2a\u7c7b")))))}m.isMDXComponent=!0}}]);