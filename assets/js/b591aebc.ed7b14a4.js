"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[373],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>c});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},o=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),m=u(t),k=l,c=m["".concat(s,".").concat(k)]||m[k]||d[k]||r;return t?a.createElement(c,i(i({ref:n},o),{},{components:t})):a.createElement(c,i({ref:n},o))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=k;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[m]="string"==typeof e?e:l,i[1]=p;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},1049:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var a=t(7462),l=(t(7294),t(3905));const r={sidebar_position:1,tags:["command","linux"]},i="\u7cfb\u7edf\u7ba1\u7406",p={unversionedId:"devops/command/system",id:"devops/command/system",title:"\u7cfb\u7edf\u7ba1\u7406",description:"- \u7cfb\u7edf\u5b89\u5168",source:"@site/docs/devops/command/system.md",sourceDirName:"devops/command",slug:"/devops/command/system",permalink:"/docs/devops/command/system",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/devops/command/system.md",tags:[{label:"command",permalink:"/docs/tags/command"},{label:"linux",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["command","linux"]},sidebar:"wikiSidebar",previous:{title:"\u547d\u4ee4\u5206\u7c7b",permalink:"/docs/category/\u547d\u4ee4\u5206\u7c7b"},next:{title:"\u7f51\u7edc\u7ba1\u7406",permalink:"/docs/devops/command/network"}},s={},u=[{value:"\u8fdb\u7a0b\u4fe1\u606f",id:"\u8fdb\u7a0b\u4fe1\u606f",level:2},{value:"Systemd &amp; systemctl",id:"systemd--systemctl",level:3},{value:"ps",id:"ps",level:3},{value:"pstree",id:"pstree",level:3},{value:"at",id:"at",level:3},{value:"nice",id:"nice",level:3},{value:"renice",id:"renice",level:3},{value:"kill",id:"kill",level:3},{value:"nohup",id:"nohup",level:3},{value:"\u7528\u6237\u548c\u5de5\u4f5c\u7ec4",id:"\u7528\u6237\u548c\u5de5\u4f5c\u7ec4",level:2},{value:"useradd",id:"useradd",level:3},{value:"userdel",id:"userdel",level:3},{value:"usermod",id:"usermod",level:3},{value:"groupadd",id:"groupadd",level:3},{value:"groupdel",id:"groupdel",level:3},{value:"groupmode",id:"groupmode",level:3},{value:"passwd",id:"passwd",level:3},{value:"su",id:"su",level:3},{value:"sudo",id:"sudo",level:3},{value:"id",id:"id",level:3},{value:"\u67e5\u770b\u7528\u6237\u4fe1\u606f",id:"\u67e5\u770b\u7528\u6237\u4fe1\u606f",level:3},{value:"\u67e5\u770b\u7528\u6237\u914d\u7f6e\u6587\u4ef6",id:"\u67e5\u770b\u7528\u6237\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u4fee\u6539\u7528\u6237\u914d\u7f6e\u6587\u4ef6",id:"\u4fee\u6539\u7528\u6237\u914d\u7f6e\u6587\u4ef6",level:3}],o={toc:u},m="wrapper";function d(e){let{components:n,...t}=e;return(0,l.kt)(m,(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u7cfb\u7edf\u7ba1\u7406"},"\u7cfb\u7edf\u7ba1\u7406"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u5b89\u5168",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sudo")," \u4ee5\u5176\u4ed6\u8eab\u4efd\uff08\u8d85\u7ea7\u7528\u6237\uff09\u6765\u6267\u884c\u547d\u4ee4"))),(0,l.kt)("li",{parentName:"ul"},"\u8fdb\u7a0b\u548c\u4f5c\u4e1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"systemctl")," \u7cfb\u7edf\u670d\u52a1\u7ba1\u7406\u5668\u6307\u4ee4"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"service")," \u63a7\u5236\u7cfb\u7edf\u670d\u52a1\u7684\u5b9e\u7528\u5de5\u5177"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"w")," \u663e\u793a\u76ee\u524d\u767b\u5165\u7cfb\u7edf\u7684\u7528\u6237\u4fe1\u606f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"watch")," \u5468\u671f\u6027\u6267\u884c\u7ed9\u5b9a\u7684\u6307\u4ee4"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pidof")," \u67e5\u627e\u6307\u5b9a\u540d\u79f0\u7684\u8fdb\u7a0b\u7684\u8fdb\u7a0b ID \u53f7"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ps")," \u62a5\u544a\u5f53\u524d\u7cfb\u7edf\u7684\u8fdb\u7a0b\u72b6\u6001"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"telint")," \u5207\u6362\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u7cfb\u7edf\u7684\u8fd0\u884c\u7b49\u7ea7"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"init")," \u6240\u6709 Linux \u8fdb\u7a0b\u7684\u7236\u8fdb\u7a0b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"at")," \u5728\u6307\u5b9a\u65f6\u95f4\u6267\u884c\u4e00\u4e2a\u4efb\u52a1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"crontab")," \u63d0\u4ea4\u548c\u7ba1\u7406\u7528\u6237\u7684\u9700\u8981\u5468\u671f\u6027\u6267\u884c\u7684\u4efb\u52a1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nohup")," \u5c06\u7a0b\u5e8f\u4ee5\u5ffd\u7565\u6302\u8d77\u4fe1\u53f7\u7684\u65b9\u5f0f\u8fd0\u884c\u8d77\u6765"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nice")," \u6307\u5b9a\u7684\u8fdb\u7a0b\u8c03\u5ea6\u4f18\u5148\u7ea7\u542f\u52a8\u5176\u4ed6\u7a0b\u5e8f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"renice")," \u4fee\u6539\u6b63\u5728\u8fd0\u884c\u7684\u8fdb\u7a0b\u7684\u8c03\u5ea6\u4f18\u5148\u7ea7"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kill")," \u5220\u9664\u6267\u884c\u4e2d\u7684\u7a0b\u5e8f\u6216\u5de5\u4f5c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pkill")," \u53ef\u4ee5\u6309\u7167\u8fdb\u7a0b\u540d\u6740\u6b7b\u8fdb\u7a0b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"skill")," \u5411\u9009\u5b9a\u7684\u8fdb\u7a0b\u53d1\u9001\u4fe1\u53f7\u51bb\u7ed3\u8fdb\u7a0b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"killall")," \u4f7f\u7528\u8fdb\u7a0b\u7684\u540d\u79f0\u6765\u6740\u6b7b\u4e00\u7ec4\u8fdb\u7a0b"))),(0,l.kt)("li",{parentName:"ul"},"\u7528\u6237\u548c\u5de5\u4f5c\u7ec4",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"useradd")," \u65b0\u5efa\u7528\u6237"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"userdel")," \u5220\u9664\u7528\u6237"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"passwod")," \u4fee\u6539\u7528\u6237\u5bc6\u7801"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"usermod")," \u4fee\u6539\u7528\u6237\u5c5e\u6027"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"chage")," \u4fee\u6539\u7528\u6237\u5c5e\u6027"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"change")," \u4fee\u6539\u8d26\u53f7\u548c\u5bc6\u7801\u7684\u6709\u6548\u671f\u9650"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"id")," \u663e\u793a\u7528\u6237\u7684 ID \u4ee5\u53ca\u6240\u5c5e\u7fa4\u7ec4\u7684 ID"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"su")," \u7528\u4e8e\u5207\u6362\u5f53\u524d\u7528\u6237\u8eab\u4efd\u5230\u5176\u4ed6\u7528\u6237\u8eab\u4efd"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"logname")," \u6253\u5370\u6267\u884c\u8be5\u547d\u4ee4\u7684\u7528\u6237\u540d"))),(0,l.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u5173\u673a\u548c\u91cd\u542f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"shutdown")," \u6267\u884c\u7cfb\u7edf\u5173\u673a\u547d\u4ee4")))),(0,l.kt)("h2",{id:"\u8fdb\u7a0b\u4fe1\u606f"},"\u8fdb\u7a0b\u4fe1\u606f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PID\uff1a\u8fdb\u7a0b ID\uff0c\u8fdb\u7a0b\u7684\u552f\u4e00\u6807\u8bc6"),(0,l.kt)("li",{parentName:"ul"},"USER\uff1a\u8fdb\u7a0b\u6240\u6709\u8005\u7684\u5b9e\u9645\u7528\u6237\u540d"),(0,l.kt)("li",{parentName:"ul"},"PR\uff1a\u8fdb\u7a0b\u7684\u8c03\u5ea6\u4f18\u5148\u7ea7"),(0,l.kt)("li",{parentName:"ul"},"NI\uff1a\u8fdb\u7a0b\u7684 nice \u503c\uff08\u4f18\u5148\u7ea7\uff09\u8d8a\u5c0f\u7684\u503c\u4ee3\u8868\u4f18\u5148\u7ea7\u8d8a\u9ad8"),(0,l.kt)("li",{parentName:"ul"},"VIRT\uff1a\u8fdb\u7a0b\u4f7f\u7528\u7684\u865a\u62df\u5185\u5b58"),(0,l.kt)("li",{parentName:"ul"},"RES\uff1a\u9a7b\u7559\u5185\u5b58\u5927\u5c0f\u3002\u9a7b\u7559\u5185\u5b58\u662f\u4efb\u52a1\u4f7f\u7528\u7684\u975e\u4ea4\u6362\u7269\u7406\u5185\u5b58\u5927\u5c0f\u3002"),(0,l.kt)("li",{parentName:"ul"},"SHR\uff1a\u8fdb\u7a0b\u4f7f\u7528\u7684\u5171\u4eab\u5185\u5b58\u3002"),(0,l.kt)("li",{parentName:"ul"},"TTY\uff1a\u8be5 process \u662f\u5728\u90a3\u4e2a\u7ec8\u7aef\u673a\u4e0a\u9762\u8fd0\u4f5c\uff0c\u82e5\u4e0e\u7ec8\u7aef\u673a\u65e0\u5173\uff0c\u5219\u663e\u793a ?\uff0c\u53e6\u5916\uff0c tty1-tty6 \u662f\u672c\u673a\u4e0a\u9762\u7684\u767b\u5165\u8005\u7a0b\u5e8f\uff0c\u82e5\u4e3a pts/0 \u7b49"),(0,l.kt)("li",{parentName:"ul"},"S\uff1a\u8fdb\u7a0b\u7684\u72b6\u6001",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"D = \u4e0d\u53ef\u4e2d\u65ad\u7684\u7761\u7720\u6001"),(0,l.kt)("li",{parentName:"ul"},"R = \u8fd0\u884c\u6001"),(0,l.kt)("li",{parentName:"ul"},"S = \u7761\u7720\u6001"),(0,l.kt)("li",{parentName:"ul"},"T = \u88ab\u8ddf\u8e2a\u6216\u5df2\u505c\u6b62"),(0,l.kt)("li",{parentName:"ul"},"Z = \u50f5\u5c38\u6001"))),(0,l.kt)("li",{parentName:"ul"},"%CPU\uff1a\u81ea\u4ece\u4e0a\u4e00\u6b21\u66f4\u65b0\u65f6\u5230\u73b0\u5728\u4efb\u52a1\u6240\u4f7f\u7528\u7684 CPU \u65f6\u95f4\u767e\u5206\u6bd4\u3002"),(0,l.kt)("li",{parentName:"ul"},"%MEM\uff1a\u8fdb\u7a0b\u4f7f\u7528\u7684\u53ef\u7528\u7269\u7406\u5185\u5b58\u767e\u5206\u6bd4\u3002"),(0,l.kt)("li",{parentName:"ul"},"TIME+\uff1a\u4efb\u52a1\u542f\u52a8\u540e\u5230\u73b0\u5728\u6240\u4f7f\u7528\u7684\u5168\u90e8 CPU \u65f6\u95f4\uff0c\u7cbe\u786e\u5230\u767e\u5206\u4e4b\u4e00\u79d2\u3002"),(0,l.kt)("li",{parentName:"ul"},"COMMAND\uff1a\u8fd0\u884c\u8fdb\u7a0b\u6240\u4f7f\u7528\u7684\u547d\u4ee4\u3002")),(0,l.kt)("h3",{id:"systemd--systemctl"},(0,l.kt)("a",{parentName:"h3",href:"https://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html"},"Systemd & systemctl")),(0,l.kt)("p",null,"Systemd \u662f Linux \u7cfb\u7edf\u5de5\u5177\uff0c\u7528\u6765\u542f\u52a8\u5b88\u62a4\u8fdb\u7a0b\uff0c\u5df2\u6210\u4e3a\u5927\u591a\u6570\u53d1\u884c\u7248\u7684\u6807\u51c6\u914d\u7f6e\u3002"),(0,l.kt)("p",null,"Systemd \u5e76\u4e0d\u662f\u4e00\u4e2a\u547d\u4ee4\uff0c\u800c\u662f\u4e00\u7ec4\u547d\u4ee4\uff0c\u6d89\u53ca\u5230\u7cfb\u7edf\u7ba1\u7406\u7684\u65b9\u65b9\u9762\u9762\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"`systemctl` \u662f Systemd \u7684\u4e3b\u547d\u4ee4\uff0c\u7528\u4e8e\u7ba1\u7406\u7cfb\u7edf\u3002\n`systemd-analyze` \u547d\u4ee4\u7528\u4e8e\u67e5\u770b\u542f\u52a8\u8017\u65f6\u3002\n`hostnamectl` \u547d\u4ee4\u7528\u4e8e\u67e5\u770b\u5f53\u524d\u4e3b\u673a\u7684\u4fe1\u606f\u3002\n...\n")),(0,l.kt)("p",null,"Systemd \u53ef\u4ee5\u7ba1\u7406\u6240\u6709\u7cfb\u7edf\u8d44\u6e90\u3002\u4e0d\u540c\u7684\u8d44\u6e90\u7edf\u79f0\u4e3a Unit\uff08\u5355\u4f4d\uff09\u3002"),(0,l.kt)("p",null,"Unit \u4e00\u5171\u5206\u6210 12 \u79cd\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Service unit\uff1a\u7cfb\u7edf\u670d\u52a1\nTarget unit\uff1a\u591a\u4e2a Unit \u6784\u6210\u7684\u4e00\u4e2a\u7ec4\nDevice Unit\uff1a\u786c\u4ef6\u8bbe\u5907\nMount Unit\uff1a\u6587\u4ef6\u7cfb\u7edf\u7684\u6302\u8f7d\u70b9\nAutomount Unit\uff1a\u81ea\u52a8\u6302\u8f7d\u70b9\nPath Unit\uff1a\u6587\u4ef6\u6216\u8def\u5f84\nScope Unit\uff1a\u4e0d\u662f\u7531 Systemd \u542f\u52a8\u7684\u5916\u90e8\u8fdb\u7a0b\nSlice Unit\uff1a\u8fdb\u7a0b\u7ec4\nSnapshot Unit\uff1aSystemd \u5feb\u7167\uff0c\u53ef\u4ee5\u5207\u56de\u67d0\u4e2a\u5feb\u7167\nSocket Unit\uff1a\u8fdb\u7a0b\u95f4\u901a\u4fe1\u7684 socket\nSwap Unit\uff1aswap \u6587\u4ef6\nTimer Unit\uff1a\u5b9a\u65f6\u5668\n")),(0,l.kt)("p",null,"\u5bf9\u4e8e\u7528\u6237\u6765\u8bf4\uff0c\u6700\u5e38\u7528\u7684\u662f\u4e0b\u9762\u8fd9\u4e9b\u547d\u4ee4\uff0c\u7528\u4e8e\u542f\u52a8\u548c\u505c\u6b62 Unit\uff08\u4e3b\u8981\u662f service\uff09\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u7acb\u5373\u542f\u52a8\u4e00\u4e2a\u670d\u52a1\n$ sudo systemctl start apache.service\n\n# \u7acb\u5373\u505c\u6b62\u4e00\u4e2a\u670d\u52a1\n$ sudo systemctl stop apache.service\n\n# \u91cd\u542f\u4e00\u4e2a\u670d\u52a1\n$ sudo systemctl restart apache.service\n\n# \u6740\u6b7b\u4e00\u4e2a\u670d\u52a1\u7684\u6240\u6709\u5b50\u8fdb\u7a0b\n$ sudo systemctl kill apache.service\n\n# \u91cd\u65b0\u52a0\u8f7d\u4e00\u4e2a\u670d\u52a1\u7684\u914d\u7f6e\u6587\u4ef6\n$ sudo systemctl reload apache.service\n\n# \u91cd\u8f7d\u6240\u6709\u4fee\u6539\u8fc7\u7684\u914d\u7f6e\u6587\u4ef6\n$ sudo systemctl daemon-reload\n\n# \u663e\u793a\u67d0\u4e2a Unit \u7684\u6240\u6709\u5e95\u5c42\u53c2\u6570\n$ systemctl show httpd.service\n\n# \u663e\u793a\u67d0\u4e2a Unit \u7684\u6307\u5b9a\u5c5e\u6027\u7684\u503c\n$ systemctl show -p CPUShares httpd.service\n\n# \u8bbe\u7f6e\u67d0\u4e2a Unit \u7684\u6307\u5b9a\u5c5e\u6027\n$ sudo systemctl set-property httpd.service CPUShares=500\n")),(0,l.kt)("h3",{id:"ps"},"ps"),(0,l.kt)("p",null,"ps \u547d\u4ee4\u7528\u4e8e\u62a5\u544a\u5f53\u524d\u7cfb\u7edf\u7684\u8fdb\u7a0b\u72b6\u6001\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u8fdb\u7a0b\u4fe1\u606f\nps <pid>\n\n# \u627e\u5230 java \u8fdb\u7a0b\nps -ef | grep java\n\n")),(0,l.kt)("p",null,"\u8fdb\u7a0b\u4e5f\u662f\u6811\u5f62\u7ed3\u6784\n\u8fdb\u7a0b\u548c\u6743\u9650\u6709\u7740\u5bc6\u4e0d\u53ef\u5206\u7684\u5173\u7cfb"),(0,l.kt)("p",null,"\u5217\u51fa\u76ee\u524d\u6240\u6709\u6b63\u5728\u5185\u5b58\u5f53\u4e2d\u7684\u7a0b\u5e8f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ps aux\n\n# Output\n# USER               PID  %CPU %MEM      VSZ    RSS   TTY  STAT START      TIME COMMAND\n# kenny             6155  21.3  1.7  7969944 284912   ??   S    \u4e8c03\u4e0b\u5348 199:14.14 /Appl...OS/WeChat\n# kenny              559  20.4  0.8  4963740 138176   ??   S    \u4e8c03\u4e0b\u5348  33:28.27 /Appl...S/iTerm2\n# _windowserver      187  18.0  0.6  7005748  95884   ??   Ss   \u4e8c03\u4e0b\u5348 288:44.97 /Syst...Light.WindowServer -daemon\n# kenny             1408  10.7  2.1  5838592 347348   ??   S    \u4e8c03\u4e0b\u5348 138:51.63 /Appl...nts/MacOS/Google Chrome\n# kenny              327   5.8  0.5  5771984  79452   ??   S    \u4e8c03\u4e0b\u5348   2:51.58 /Syst...pp/Contents/MacOS/Finder\n\n# \u5728\u6240\u6709\u7a0b\u5e8f\u4e2d\u67e5\u627e nginx\n# -a \u663e\u793a\u6240\u6709\u7ec8\u7aef\u673a\u4e0b\u6267\u884c\u7684\u7a0b\u5e8f\n# -u \u5217\u51fa\u8be5\u7528\u6237\u7684\u7a0b\u5e8f\u7684\u72b6\u51b5\n# -v \u540c -a\nps aux | grep nginx\n\n# \u5217\u51fa\u7c7b\u4f3c\u7a0b\u5e8f\u6811\u7684\u7a0b\u5e8f\u663e\u793a\nps -axjf\n")),(0,l.kt)("p",null,"s"),(0,l.kt)("h3",{id:"pstree"},"pstree"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4ee5\u6811\u72b6\u7ed3\u6784\u663e\u793a\u7ebf\u7a0b\u7ed3\u6784\npstree\n")),(0,l.kt)("h3",{id:"at"},"at"),(0,l.kt)("p",null,"\u57fa\u672c\u683c\u5f0f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"at [-f filename] time\n")),(0,l.kt)("p",null,"\u65f6\u95f4\u683c\u5f0f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6807\u51c6\u7684\u6d88\u5931\u548c\u5206\u949f\u683c\u5f0f\uff0c\u6bd4\u5982 10:15"),(0,l.kt)("li",{parentName:"ul"},"AM/PM \u6307\u793a\u7b26\uff0c\u6bd4\u5982 10:15 PM"),(0,l.kt)("li",{parentName:"ul"},"\u7279\u5b9a\u53ef\u547d\u540d\u65f6\u95f4\uff0c\u6bd4\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"now"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"noon"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"midnigh")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"li"},"teatime"),"\uff084 PM\uff09")),(0,l.kt)("p",null,"\u9664\u4e86\u6307\u5b9a\u8fd0\u884c\u4f5c\u4e1a\u7684\u65f6\u95f4\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4e0d\u540c\u529f\u80fd\u7684\u65e5\u671f\u683c\u5f0f\u6307\u5b9a\u7279\u5b9a\u7684\u65e5\u671f\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6807\u51c6\u65e5\u671f\u683c\u5f0f\uff0c\u6bd4\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"MMDDYY"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"MM/DD/YY")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"DD.MM.YY")),(0,l.kt)("li",{parentName:"ul"},"\u6587\u672c\u65e5\u671f\uff0c\u6bd4\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"Jul 4")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"Dec 25"),"\uff0c\u52a0\u4e0d\u52a0\u5e74\u4efd\u5747\u53ef"),(0,l.kt)("li",{parentName:"ul"},"\u4f60\u4e5f\u53ef\u4ee5\u6307\u5b9a\u65f6\u95f4\u589e\u91cf",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f53\u524d\u65f6\u95f4 ",(0,l.kt)("inlineCode",{parentName:"li"},"+25min")),(0,l.kt)("li",{parentName:"ul"},"\u660e\u5929 ",(0,l.kt)("inlineCode",{parentName:"li"},"10:15 PM")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"10:15+7\u5929"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# -f \u6307\u660e\u6267\u884c\u7684\u811a\u672c\u6587\u4ef6\uff0cnow \u6307\u660e at \u547d\u4ee4\u7acb\u5373\u6267\u884c\u8be5\u811a\u672c\nat -f timer.sh now\n\n# \u5982\u679c\u4e0d\u60f3\u5728 at \u547d\u4ee4\u4e2d\u4f7f\u7528\u90ae\u4ef6\u6216\u91cd\u5b9a\u5411\uff0c\u6700\u597d\u52a0\u4e0a -M \u9009\u9879\u6765\u5c4f\u853d\u4f5c\u4e1a\u4ea7\u751f\u7684\u8f93\u51fa\u4fe1\u606f\nat -M -f timer.sh tomorrow\n\n# \u67e5\u8be2\u5f85\u6267\u884c\u4f5c\u4e1a\u5217\u8868\natq\n\n# \u5220\u9664\u4f5c\u4e1a\n# \u5148\u901a\u8fc7 atq \u67e5\u8be2\u5f85\u6267\u884c\u4f5c\u4e1a\uff0c\u5220\u9664\u4f5c\u4e1a\u53f7\u4e3a 10 \u7684\u4f5c\u4e1a\natrm 10\n")),(0,l.kt)("h3",{id:"nice"},"nice"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"nice")," \u547d\u4ee4\u5141\u8bb8\u4f60\u8bbe\u7f6e\u547d\u4ee4\u542f\u52a8\u65f6\u7684\u8c03\u5ea6\u4f18\u5148\u7ea7\u3002\u8981\u8ba9\u547d\u4ee4\u4ee5\u66f4\u4f4e\u7684\u4f18\u5148\u7ea7\u8fd0\u884c\uff0c\u53ea\u8981\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"nice")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"-n")," \u547d\u4ee4\u6765\u6307\u5b9a\u65b0\u7684\u4f18\u5148\u7ea7\u7ea7\u522b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# -n \u9009\u9879\u5e76\u975e\u5fc5\u987b\u7684\uff0c\u53ea\u8981\u5728\u7834\u6298\u53f7\u540e\u8ddf\u4e0a\u4f18\u5148\u7ea7\u5373\u53ef\nnice -n 10 ./test.sh > test.out &\n\n# \u65b0\u5efa\u8fdb\u7a0b\u5e76\u8bbe\u7f6e\u4f18\u5148\u7ea7\uff0c\u5c06\u5f53\u524d\u76ee\u5f55\u4e0b\u7684 documents \u76ee\u5f55\u6253\u5305\uff0c\u4f46\u4e0d\u5e0c\u671b tar \u5360\u7528\u592a\u591a CPU\nnice -10 tar zcf pack.tar.gz documents\n")),(0,l.kt)("h3",{id:"renice"},"renice"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5bf9\u8fd0\u884c\u4e2d\u7684 PID \u4e3a 5055 \u7684\u8fdb\u7a0b\u8c03\u6574\u8c03\u5ea6\u4f18\u5148\u7ea7\nrenice -n 10 -p 5055\n")),(0,l.kt)("p",null,"\u9650\u5236\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u5bf9\u5c5e\u4e8e\u4f60\u7684\u8fdb\u7a0b\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"renice")),(0,l.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"renice")," \u964d\u4f4e\u8fdb\u7a0b\u7684\u4f18\u5148\u7ea7"),(0,l.kt)("li",{parentName:"ul"},"root \u7528\u6237\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"renice")," \u6765\u4efb\u610f\u8c03\u6574\u8fdb\u7a0b\u7684\u4f18\u5148\u7ea7")),(0,l.kt)("p",null,"\u5982\u679c\u60f3\u5b8c\u5168\u63a7\u5236\u8fd0\u884c\u8fdb\u7a0b\uff0c\u5fc5\u987b\u4ee5 root \u8d26\u6237\u8eab\u4efd\u767b\u5f55\u6216\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo")," \u547d\u4ee4\u3002"),(0,l.kt)("h3",{id:"kill"},"kill"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kill")," \u547d\u4ee4\u7528\u6765\u5220\u9664\u6267\u884c\u4e2d\u7684\u7a0b\u5e8f\u6216\u5de5\u4f5c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5217\u51fa\u6240\u6709\u4fe1\u53f7\u540d\u79f0\nkill -l\n\n# \u65e0\u6761\u4ef6\u7ed3\u675f pid \u4e3a 22817 \u7684\u8fdb\u7a0b\nkill -9 22817\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u5148\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"ps")," \u67e5\u627e\u8fdb\u7a0b\uff0c\u7136\u540e\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"kill")," \u6740\u6389\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ ps -ef | grep vim\nroot      3268  2884  0 16:21 pts/1    00:00:00 vim install.log\nroot      3370  2822  0 16:21 pts/0    00:00:00 grep vim\n\n$ kill 3268\n")),(0,l.kt)("p",null,"\u5e38\u7528\u7684\u4fe1\u53f7\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HUP"),"\uff081\uff09\uff1a\u7ec8\u7aef\u65ad\u7ebf"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"INT"),"\uff082\uff09\uff1a\u4e2d\u65ad\uff08\u540c Ctrl + C\uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"QUIT"),"\uff083\uff09\uff1a\u9000\u51fa\uff08\u540c Ctrl + \\\uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TERM"),"(15)\uff1a\u7ec8\u6b62"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"KILL"),"\uff089\uff09\uff1a\u5f3a\u5236\u7ec8\u6b62"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CONT"),"\uff0818\uff09\uff1a\u7ee7\u7eed\uff08\u4e0e STOP \u76f8\u53cd\uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"STOP"),"\uff0819\uff09\uff1a\u6682\u505c\uff08\u540c Ctrl + Z\uff09")),(0,l.kt)("h3",{id:"nohup"},"nohup"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"nohup")," \u547d\u4ee4\u53ef\u4ee5\u5c06\u7a0b\u5e8f\u4ee5\u5ffd\u7565\u6302\u8d77\u4fe1\u53f7\u7684\u65b9\u5f0f\u8fd0\u884c\u8d77\u6765\uff0c\u88ab\u8fd0\u884c\u7684\u7a0b\u5e8f\u7684\u8f93\u51fa\u4fe1\u606f\u5c06\u4e0d\u4f1a\u663e\u793a\u5230\u7ec8\u7aef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4ee5\u5ffd\u7565\u6302\u8d77\u4fe1\u53f7\u8fd0\u884c /var/log/message\nnohup tail -f /var/log/messages &\n")),(0,l.kt)("h2",{id:"\u7528\u6237\u548c\u5de5\u4f5c\u7ec4"},"\u7528\u6237\u548c\u5de5\u4f5c\u7ec4"),(0,l.kt)("p",null,"\u53ea\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"root")," \u7528\u6237\u91c7\u7528\u521b\u5efa/\u5220\u9664/\u4fee\u6539\u7528\u6237\u7684\u6743\u9650\u3002"),(0,l.kt)("h3",{id:"useradd"},"useradd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521b\u5efa\u7528\u6237\uff0c\u540d\u4e3a user1\nuseradd user1\n\n# \u65b0\u5efa\u7528\u6237 user2 \u65f6\uff0c\u76f4\u63a5\u6307\u5b9a\u7ec4 group1\nuseradd -g group1 user2\n\n# \u521b\u5efa\u65b0\u7528\u6237\uff0c\u7528\u6237\u4e0d\u5141\u8bb8\u767b\u5f55\uff08\u901a\u8fc7 ftp \u53ef\u4ee5\u8fde\u63a5\uff09\nadduser ftpusername -s /sbin/nologin\n")),(0,l.kt)("h3",{id:"userdel"},"userdel"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6c38\u4e45\u6027\u5220\u9664\u7528\u6237\u8d26\u53f7 user1\uff08\u4fdd\u7559\u7528\u6237\u6570\u636e\uff09\nuserdel user1\n\n# \u5f7b\u5e95\u6c38\u4e45\u6027\u5220\u9664\u7528\u6237\u8d26\u53f7 user2\uff08\u53ca\u5176 home \u76ee\u5f55\u4e0b\u7684\u6570\u636e\uff09\nuserdel -r user2\n")),(0,l.kt)("h3",{id:"usermod"},"usermod"),(0,l.kt)("p",null,"\u4fee\u6539\u7528\u6237\u8d26\u53f7\u7684\u76f8\u5bf9\u5e94\u4fe1\u606f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4fee\u6539\u7528\u6237 home \u76ee\u5f55\u5730\u5740\uff08\u653e\u5230 ben1 \u76ee\u5f55\u4e0b\uff09\nusermode -d /home/ben1 user1\n\n# \u5c06 user1 \u7684\u7528\u6237\u7ec4\u6539\u4e3a group1\nusermode -group1 user1\n")),(0,l.kt)("h3",{id:"groupadd"},"groupadd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u65b0\u5efa\u7528\u6237\u7ec4\ngroupadd\n\n# \u65b0\u5efa\u7528\u6237\u7ec4 group1\ngroupadd group1\n")),(0,l.kt)("h3",{id:"groupdel"},"groupdel"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6c38\u4e45\u6027\u5220\u9664\u7528\u6237\u5de5\u4f5c\u7ec4 group1\ngroupdel group1\n")),(0,l.kt)("h3",{id:"groupmode"},"groupmode"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4fee\u6539\u7528\u6237\u7ec4\ngroupmod\n")),(0,l.kt)("h3",{id:"passwd"},"passwd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4e3a\u7528\u6237 ben \u8bbe\u7f6e\u5bc6\u7801\npasswd ben\n\n# \u4e3a\u5f53\u524d\u7528\u6237\u4fee\u6539\u5bc6\u7801\npasswd\n")),(0,l.kt)("h3",{id:"su"},"su"),(0,l.kt)("p",null,"su \u7528\u6765\u5207\u6362\u7528\u6237\u3002\u6bd4\u5982\u4f60\u73b0\u5728\u662f root\uff0c\u60f3\u8981\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"ben")," \u7528\u6237\u505a\u4e00\u4e9b\u52fe\u5f53\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 su \u5207\u6362\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5207\u6362\u5230 ben \u7528\u6237\uff08\u4f7f\u7528 login shell \u65b9\u5f0f\u5207\u6362\u7528\u6237\uff09\nsu - ben\n\n# \u4e0d\u5b8c\u5168\u5207\u6362\uff08\u4e0d\u5e26\u51cf\u53f7\uff09\nsu ben\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u8ba9\u4f60\u5e72\u51c0\u7eaf\u6d01\u7684\u964d\u4e34\u53e6\u4e00\u4e2a\u8d26\u53f7\uff0c\u4e0d\u51fa\u610f\u5916\uff0c\u63a8\u8350\u3002"),(0,l.kt)("h3",{id:"sudo"},"sudo"),(0,l.kt)("p",null,"sudo \u4ee5\u5176\u4ed6\u7528\u6237\u8eab\u4efd\u6267\u884c\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u8bbe\u7f6e\u9700\u8981\u4f7f\u7528 sudo \u7684\u7528\u6237\uff08\u7ec4\uff09\nvisudo\n")),(0,l.kt)("h3",{id:"id"},"id"),(0,l.kt)("p",null,"\u67e5\u770b\u7528\u6237\u4fe1\u606f\u53ca\u6240\u5c5e\u7ec4\u522b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u540d\u4e3a ben \u7684\u7528\u6237\u4fe1\u606f\nid ben\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u663e\u793a\u5f53\u524d\u8fdb\u7a0b\u7528\u6237\u6240\u5c5e\u7528\u6237\u7ec4\ngrouos\n")),(0,l.kt)("h3",{id:"\u67e5\u770b\u7528\u6237\u4fe1\u606f"},"\u67e5\u770b\u7528\u6237\u4fe1\u606f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u7cfb\u7edf\u4e2d\u6240\u6709\u7528\u6237\ncut -d : -f 1 /etc/passwd\n\n# \u67e5\u770b\u53ef\u4ee5\u767b\u5f55\u7cfb\u7edf\u7684\u7528\u6237\ncat /etc/passwd | grep -v /sbin/nologin | cut -d : -f 1\n\n# \u67e5\u770b\u767b\u5f55\u7528\u6237\nwho\n\n# \u67e5\u770b\u67d0\u4e00\u7528\u6237\nw mysql\n\n# \u67e5\u770b\u7528\u6237\u767b\u5f55\u5386\u53f2\u8bb0\u5f55\nlast\n")),(0,l.kt)("h3",{id:"\u67e5\u770b\u7528\u6237\u914d\u7f6e\u6587\u4ef6"},"\u67e5\u770b\u7528\u6237\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u7528\u6237 user1 \u81ea\u5df1\u7684 /home \u76ee\u5f55\uff08\u67e5\u770b\u65f6\u8981\u6253\u5f00\u9690\u85cf\u6587\u4ef6\u53ef\u89c1\uff09\nls -a /home/user1\n\n# \u521b\u5efa\u7528\u6237\u7684\u4fe1\u606f\u4e5f\u4f1a\u8bb0\u5f55\u5728 /etc/passwd \u6587\u4ef6\u4e2d\ntail -10 /etc/passwd\n\n# \u521b\u5efa\u7528\u6237\u4e5f\u4f1a\u5728 /etc/shadow \u4fdd\u7559\u7528\u6237\u4fe1\u606f\ntail -10 /etc/shadow\n\n# \u5220\u9664\u7528\u6237 user1 \u76ee\u5f55\nrm -rf /var/spool mail/user1\nrm -rf /home/user1\n")),(0,l.kt)("h3",{id:"\u4fee\u6539\u7528\u6237\u914d\u7f6e\u6587\u4ef6"},"\u4fee\u6539\u7528\u6237\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u7f16\u8f91\u7528\u6237\u914d\u7f6e\u6587\u4ef6\nvim /etc/passwd\n\n# \u7f16\u8f91\u7528\u6237\u7ec4\u914d\u7f6e\u6587\u4ef6\nvim /etc/group\n")))}d.isMDXComponent=!0}}]);