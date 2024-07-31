"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[8811],{1553:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>p,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>t});var s=e(4848),a=e(8453);const l={sidebar_position:6,tags:["blockchain","uniswap"]},r="Uniswap",c={id:"blockchain/uniswap",title:"Uniswap",description:"\u4ecb\u7ecd",source:"@site/docs/blockchain/uniswap.md",sourceDirName:"blockchain",slug:"/blockchain/uniswap",permalink:"/docs/blockchain/uniswap",draft:!1,unlisted:!1,tags:[{inline:!0,label:"blockchain",permalink:"/docs/tags/blockchain"},{inline:!0,label:"uniswap",permalink:"/docs/tags/uniswap"}],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,tags:["blockchain","uniswap"]},sidebar:"wikiSidebar",previous:{title:"\u9ed8\u514b\u5c14\u6811",permalink:"/docs/blockchain/merkle-tree"},next:{title:"\u8d44\u6599",permalink:"/docs/blockchain/reference"}},p={},t=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"Uniswap V1",id:"uniswap-v1",level:3},{value:"Uniswap v2",id:"uniswap-v2",level:3},{value:"Uniswap V3",id:"uniswap-v3",level:3},{value:"\u5f15\u7528\u53c2\u8003",id:"\u5f15\u7528\u53c2\u8003",level:2}];function d(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,a.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"uniswap",children:"Uniswap"}),"\n",(0,s.jsx)(i.h2,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,s.jsx)(i.p,{children:"Uniswap \u662f\u4e00\u79cd\u53bb\u4e2d\u5fc3\u5316\u7684\u91d1\u878d\u534f\u8bae\uff0c\u4e3b\u8981\u7528\u4e8e\u5728\u4ee5\u592a\u574a\u533a\u5757\u94fe\u4e0a\u4ea4\u6362\u52a0\u5bc6\u8d27\u5e01\u3002\u5b83\u5229\u7528\u81ea\u52a8\u505a\u5e02\u5546\uff08AMM\uff09\u6a21\u578b\uff0c\u5141\u8bb8\u7528\u6237\u5728\u6ca1\u6709\u4f20\u7edf\u4ea4\u6613\u6240\u548c\u8ba2\u5355\u7c3f\u7684\u60c5\u51b5\u4e0b\u8fdb\u884c\u4ee3\u5e01\u4ea4\u6613\u3002Uniswap \u7684\u8bbe\u8ba1\u76ee\u7684\u662f\u63d0\u9ad8\u4ea4\u6613\u6548\u7387\uff0c\u51cf\u5c11\u6ed1\u70b9\uff0c\u5e76\u4e3a\u7528\u6237\u63d0\u4f9b\u66f4\u5e73\u7b49\u7684\u4ea4\u6613\u673a\u4f1a\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u5728 AMM \u4e2d\uff0c\u4e00\u4e2a\u6838\u5fc3\u6982\u5ff5\u4e3a\u6c60\u5b50(pooling)\uff1a\u6bcf\u4e2a\u5408\u7ea6\u90fd\u662f\u4e00\u4e2a\u5b58\u50a8\u6d41\u52a8\u6027\u7684\u6c60\u5b50\uff0c\u5141\u8bb8\u4e0d\u540c\u7684\u7528\u6237\uff08\u5305\u62ec\u5176\u4ed6\u5408\u7ea6\uff09\u5728\u5176\u4e2d\u8fdb\u884c\u67d0\u79cd\u65b9\u5f0f\u7684\u4ea4\u6613\u3002AMM \u4e2d\u6709\u4e24\u79cd\u89d2\u8272\uff0c*\u6d41\u52a8\u6027\u63d0\u4f9b\u8005(LP)*\u4ee5\u53ca\u4ea4\u6613\u8005(trader)\uff1b\u8fd9\u4e24\u65b9\u901a\u8fc7\u6d41\u52a8\u6027\u6c60\u8fdb\u884c\u4ea4\u4e92\uff0c\u800c\u4ea4\u4e92\u7684\u65b9\u5f0f\u7531\u5408\u7ea6\u8fdb\u884c\u89c4\u5b9a\u4e14\u4e0d\u53ef\u66f4\u6539\u3002"}),"\n",(0,s.jsx)(i.h3,{id:"uniswap-v1",children:"Uniswap V1"}),"\n",(0,s.jsxs)(i.p,{children:["\u662f\u4e00\u4e2a\u7b80\u5355\u7684",(0,s.jsx)(i.code,{children:"ETH/ERC-20"}),"\u4ea4\u6362\u534f\u8bae\u3002\u5728\u8fd9\u4e2a\u7248\u672c\u4e2d\uff0c\u6bcf\u4e2a\u4ea4\u6613\u5bf9\u90fd\u5fc5\u987b\u6709\u4ee5\u592a\u5e01\uff08ETH\uff09\u4f5c\u4e3a\u4e00\u4e2a\u8d44\u4ea7\uff0c\u8fd9\u610f\u5473\u7740\u6240\u6709\u7684\u4ea4\u6362\u90fd\u5fc5\u987b\u6d89\u53ca ETH\uff0c\u4ece\u4e00\u4e2a ERC-20 \u4ee3\u5e01\u5230 ETH\uff0c\u6216\u8005\u53cd\u8fc7\u6765\u3002V1 \u7684\u4e3b\u8981\u7279\u70b9\u662f\u5b83\u7684\u7b80\u5355\u6027\u548c\u521b\u65b0\u7684 AMM \u7cfb\u7edf\uff0c\u4f46\u5b83\u7684\u7f3a\u70b9\u662f\u53ea\u80fd\u5904\u7406\u4e0e ETH \u7684\u4ea4\u6362\u3002"]}),"\n",(0,s.jsx)(i.h3,{id:"uniswap-v2",children:"Uniswap v2"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u76f4\u63a5\u4ea4\u6362 ERC-20 \u4ee3\u5e01\uff1a\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u4ea4\u6362\u4e24\u79cd ERC-20 \u4ee3\u5e01\uff0c\u4e0d\u518d\u5f3a\u5236\u901a\u8fc7 ETH \u8fdb\u884c\u4e2d\u4ecb\u3002"}),"\n",(0,s.jsx)(i.li,{children:"\u4ef7\u683c\u9884\u8a00\u673a\u529f\u80fd\uff1aV2 \u901a\u8fc7\u4f7f\u7528\u7d2f\u79ef\u7684\u4ef7\u683c\u548c\u65f6\u95f4\u6233\u4fe1\u606f\u6765\u589e\u52a0\u4e00\u79cd\u7b80\u5355\u7684\u9884\u8a00\u673a\u529f\u80fd\uff0c\u4f7f\u5f97\u5916\u90e8\u667a\u80fd\u5408\u7ea6\u53ef\u4ee5\u66f4\u5b89\u5168\u5730\u4f7f\u7528\u4ef7\u683c\u6570\u636e\u3002"}),"\n",(0,s.jsx)(i.li,{children:"\u95ea\u7535\u4ea4\u6613\uff08Flash Swaps\uff09\uff1a\u7528\u6237\u53ef\u4ee5\u5148\u501f\u51fa\u4efb\u610f\u6570\u91cf\u7684 ERC-20 \u4ee3\u5e01\uff0c\u53ea\u8981\u5728\u4ea4\u6613\u7ed3\u675f\u65f6\u5f52\u8fd8\u7b49\u503c\u8d44\u4ea7\u5373\u53ef\u3002"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"uniswap-v3",children:"Uniswap V3"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u96c6\u4e2d\u6d41\u52a8\u6027\uff1a\u7528\u6237\u53ef\u4ee5\u4e3a\u4ed6\u4eec\u7684\u6d41\u52a8\u6027\u63d0\u4f9b\u8bbe\u5b9a\u7279\u5b9a\u4ef7\u683c\u8303\u56f4\uff0c\u8fd9\u4f7f\u5f97\u8d44\u672c\u5229\u7528\u7387\u66f4\u9ad8\u3002\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u53ef\u4ee5\u5728\u4ed6\u4eec\u9884\u671f\u7684\u4ea4\u6613\u4ef7\u683c\u8303\u56f4\u5185\u96c6\u4e2d\u8d44\u91d1\uff0c\u4ece\u800c\u51cf\u5c11\u65e0\u6548\u8d44\u672c\u7684\u5360\u7528\u5e76\u589e\u52a0\u6f5c\u5728\u7684\u4ea4\u6613\u8d39\u6536\u76ca\u3002"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"Uniswap V3 \u5f15\u5165\u4e86 \u96c6\u4e2d\u6d41\u52a8\u6027(concentrated liquidity) \u7684\u6982\u5ff5\uff1aLP \u53ef\u4ee5\u9009\u62e9\u4ed6\u4eec\u5e0c\u671b\u5728\u54ea\u4e2a\u4ef7\u683c\u533a\u95f4\u63d0\u4f9b\u6d41\u52a8\u6027\u3002\u8fd9\u4e2a\u673a\u5236\u901a\u8fc7\u5c06\u66f4\u591a\u7684\u6d41\u52a8\u6027\u63d0\u4f9b\u5728\u4e00\u4e2a\u76f8\u5bf9\u72ed\u7a84\u7684\u4ef7\u683c\u533a\u95f4\uff0c\u6765\u5927\u5927\u63d0\u9ad8\u8d44\u4ea7\u5229\u7528\u6548\u7387\uff1b\u8fd9\u4e5f\u4f7f Uniswap \u7684\u4f7f\u7528\u573a\u666f\u66f4\u52a0\u591a\u6837\u5316\uff1a\u5b83\u73b0\u5728\u53ef\u4ee5\u5bf9\u4e8e\u4e0d\u540c\u4ef7\u683c\u6ce2\u52a8\u6027\u7684\u6c60\u5b50\u8fdb\u884c\u4e0d\u540c\u7684\u914d\u7f6e\u3002\u8fd9\u5c31\u662f V3 \u76f8\u5bf9\u4e8e V2 \u7684\u4e3b\u8981\u63d0\u5347\u70b9\u3002"}),"\n"]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"\u7b80\u5355\u5730\u6765\u8bf4\uff0c\u4e00\u4e2a Uniswap V3 \u7684\u4ea4\u6613\u5bf9\u7531\u8bb8\u591a\u4e2a Uniswap V2 \u7684\u4ea4\u6613\u5bf9\u6784\u6210\u3002V2 \u4e0e V3 \u7684\u533a\u522b\u662f\uff0c\u5728 V3 \u4e2d\uff0c\u4e00\u4e2a\u4ea4\u6613\u5bf9\u6709\u8bb8\u591a\u7684\u4ef7\u683c\u533a\u95f4\uff0c\u800c\u6bcf\u4e2a\u4ef7\u683c\u533a\u95f4\u5185\u90fd\u6709\u4e00\u5b9a\u6570\u91cf\u7684\u8d44\u4ea7\u3002\u4ece\u96f6\u5230\u6b63\u65e0\u7a77\u7684\u6574\u4e2a\u4ef7\u683c\u533a\u95f4\u88ab\u5212\u5206\u6210\u4e86\u8bb8\u591a\u4e2a\u5c0f\u7684\u4ef7\u683c\u533a\u95f4\uff0c\u6bcf\u4e00\u4e2a\u533a\u95f4\u4e2d\u90fd\u6709\u4e00\u5b9a\u6570\u91cf\u7684\u6d41\u52a8\u6027\u3002\u800c\u66f4\u5173\u952e\u7684\u70b9\u5728\u4e8e\uff0c\u5728\u6bcf\u4e2a\u5c0f\u7684\u4ef7\u683c\u533a\u95f4\u4e2d\uff0c\u5de5\u4f5c\u673a\u5236\u4e0e Uniswap V2 \u5b8c\u5168\u4e00\u6837\u3002\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48\u6211\u4eec\u8bf4\u4e00\u4e2a Uniswap V3 \u7684\u6c60\u5b50\u5c31\u662f\u8bb8\u591a\u4e2a V2 \u7684\u6c60\u5b50\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u591a\u5c42\u8d39\u7387\u7ed3\u6784\uff1a\u4e0d\u540c\u7684\u4ea4\u6613\u5bf9\u53ef\u4ee5\u6709\u4e0d\u540c\u7684\u8d39\u7387\u7ed3\u6784\uff0c\u6839\u636e\u5176\u9884\u671f\u7684\u6ce2\u52a8\u7387\u548c\u6d41\u52a8\u6027\u9700\u6c42\u8c03\u6574\u3002"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u9ad8\u7ea7\u9884\u8a00\u673a\u529f\u80fd\uff1aV3 \u63d0\u4f9b\u66f4\u9ad8\u7cbe\u5ea6\u548c\u66f4\u65b0\u66f4\u9891\u7e41\u7684\u4ef7\u683c\u4fe1\u606f\uff0c\u4f7f\u5f97\u5176\u4ed6 DeFi \u5e94\u7528\u53ef\u4ee5\u66f4\u6709\u6548\u5730\u6574\u5408\u548c\u5229\u7528\u8fd9\u4e9b\u6570\u636e\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"\u5f15\u7528\u53c2\u8003",children:"\u5f15\u7528\u53c2\u8003"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://y1cunhui.github.io/uniswapV3-book-zh-cn/",children:"Uniswap V3 Book \u4e2d\u6587\u7248"})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/Dapp-Learning-DAO/Dapp-Learning/blob/main/defi/Uniswap-V3/readme.md",children:"Uniswap V3 - Dapp-Learning"})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/Dapp-Learning-DAO/Dapp-Learning/blob/main/defi/Uniswap-V3/contractGuide/readme.md",children:"GitHub - UniswapV3 \u5408\u7ea6\u5bfc\u8bfb-Dapp-Learning"})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/Dapp-Learning-DAO/Dapp-Learning/blob/main/defi/Uniswap-V3/whitepaperGuide/understandV3Witepaper.md",children:"Github - Understand UniswapV3 whitepaper-Dapp-Learning"})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/Dapp-Learning-DAO/Dapp-Learning/blob/main/defi/Uniswap-V2/design/graphs.md",children:"Github - Uniswap V2 \u4ea4\u6613\u66f2\u7ebf-Dapp-Learning"})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/quiknode-labs/qn-guide-examples/tree/main/defi/uniswap-v3-swaps",children:"Github - Uniswap V3 Swap Example"})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://learnblockchain.cn/article/2357",children:"Uniswap V3 \u6280\u672f\u767d\u76ae\u4e66\u5bfc\u8bfb"})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://learnblockchain.cn/article/2371",children:"Uniswap V3 \u6e90\u4ee3\u7801\u5bfc\u8bfb"})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:i}={...(0,a.R)(),...n.components};return i?(0,s.jsx)(i,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},8453:(n,i,e)=>{e.d(i,{R:()=>r,x:()=>c});var s=e(6540);const a={},l=s.createContext(a);function r(n){const i=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function c(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),s.createElement(l.Provider,{value:i},n.children)}}}]);