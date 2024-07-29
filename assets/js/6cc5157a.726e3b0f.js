"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[4388],{3275:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>h,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>r,toc:()=>t});var i=s(4848),l=s(8453);const d={sidebar_position:2,tags:["command","linux"]},c="\u7f51\u7edc\u7ba1\u7406",r={id:"devops/command/network",title:"\u7f51\u7edc\u7ba1\u7406",description:"- \u7f51\u7edc\u5e94\u7528",source:"@site/docs/devops/command/network.md",sourceDirName:"devops/command",slug:"/devops/command/network",permalink:"/docs/devops/command/network",draft:!1,unlisted:!1,tags:[{inline:!0,label:"command",permalink:"/docs/tags/command"},{inline:!0,label:"linux",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["command","linux"]},sidebar:"wikiSidebar",previous:{title:"\u7cfb\u7edf\u7ba1\u7406",permalink:"/docs/devops/command/system"},next:{title:"\u6587\u4ef6\u7ba1\u7406",permalink:"/docs/devops/command/file"}},h={},t=[{value:"\u7f51\u7edc\u5e94\u7528",id:"\u7f51\u7edc\u5e94\u7528",level:2},{value:"curl",id:"curl",level:3},{value:"wget",id:"wget",level:3},{value:"\u9ad8\u7ea7\u7f51\u7edc",id:"\u9ad8\u7ea7\u7f51\u7edc",level:2},{value:"iptables",id:"iptables",level:3},{value:"\u7f51\u7edc\u6d4b\u8bd5",id:"\u7f51\u7edc\u6d4b\u8bd5",level:2},{value:"host",id:"host",level:3},{value:"nslookup",id:"nslookup",level:3},{value:"dig",id:"dig",level:3},{value:"ping",id:"ping",level:3},{value:"netstat",id:"netstat",level:3},{value:"\u7f51\u7edc\u5b89\u5168",id:"\u7f51\u7edc\u5b89\u5168",level:2},{value:"ssh",id:"ssh",level:3},{value:"ssh-keygen",id:"ssh-keygen",level:3},{value:"ssh-add",id:"ssh-add",level:3},{value:"ssh-agent",id:"ssh-agent",level:3},{value:"\u7f51\u7edc\u914d\u7f6e",id:"\u7f51\u7edc\u914d\u7f6e",level:2},{value:"ifconfig",id:"ifconfig",level:3},{value:"route",id:"route",level:3},{value:"ip",id:"ip",level:3}];function a(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u7f51\u7edc\u7ba1\u7406",children:"\u7f51\u7edc\u7ba1\u7406"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u7f51\u7edc\u5e94\u7528","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#curl",children:(0,i.jsx)(e.code,{children:"curl"})})," \u5229\u7528 URL \u89c4\u5219\u5728\u547d\u4ee4\u884c\u4e0b\u5de5\u4f5c\u7684\u6587\u4ef6\u4f20\u8f93\u5de5\u5177"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#wget",children:(0,i.jsx)(e.code,{children:"wget"})})," \u4e0b\u8f7d\u6587\u4ef6\u5de5\u5177"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#telnet",children:(0,i.jsx)(e.code,{children:"telnet"})})," \u767b\u5f55\u8fdc\u7a0b\u4e3b\u673a\u548c\u7ba1\u7406"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\u9ad8\u7ea7\u7f51\u7edc","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#ip",children:(0,i.jsx)(e.code,{children:"ip"})})," \u7f51\u7edc\u914d\u7f6e\u5de5\u5177"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#iptables",children:(0,i.jsx)(e.code,{children:"iptables"})})," \u9632\u706b\u5899\u8f6f\u4ef6"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\u7f51\u7edc\u6d4b\u8bd5","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#iperf",children:(0,i.jsx)(e.code,{children:"iperf"})})," \u7f51\u7edc\u6027\u80fd\u6d4b\u8bd5\u5de5\u5177\uff0c\u53ef\u7528\u4e8e\u6d4b\u8bd5 TCP \u548c UDO \u5e26\u5bbd\u8d28\u91cf"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#host",children:(0,i.jsx)(e.code,{children:"host"})})," \u5e38\u7528\u7684\u5206\u6790\u57df\u540d\u67e5\u8be2\u5de5\u5177"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#nslookup",children:(0,i.jsx)(e.code,{children:"nslookup"})})," \u67e5\u8be2\u57df\u540d DNS \u4fe1\u606f\u7684\u5de5\u5177"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#dig",children:(0,i.jsx)(e.code,{children:"dig"})})," \u57df\u540d\u67e5\u8be2\u5de5\u5177"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#ping",children:(0,i.jsx)(e.code,{children:"ping"})})," \u6d4b\u8bd5\u4e3b\u673a\u4e4b\u95f4\u7f51\u7edc\u7684\u8054\u901a\u6027"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#netstat",children:(0,i.jsx)(e.code,{children:"netstat"})})," \u67e5\u770b\u7f51\u7edc\u7cfb\u7edf\u72b6\u6001\u4fe1\u606f"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#traceroute",children:(0,i.jsx)(e.code,{children:"traceroute"})})," \u8ffd\u8e2a\u6570\u636e\u5305\u5728\u7f51\u7edc\u4e0a\u7684\u4f20\u8f93\u65f6\u7684\u5168\u90e8\u8def\u5f84"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#tcpdump",children:(0,i.jsx)(e.code,{children:"tcpdump"})})," \u6253\u5370\u6240\u6709\u7ecf\u8fc7\u7f51\u7edc\u63a5\u53e3\u7684\u6570\u636e\u5305\u7684\u5934\u4fe1\u606f"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\u7f51\u7edc\u5b89\u5168","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#ssh",children:(0,i.jsx)(e.code,{children:"ssh"})})," openssh \u5957\u4ef6\u4e2d\u7684\u5ba2\u6237\u7aef\u8fde\u63a5\u5de5\u5177"]}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#ssh-keyscan",children:(0,i.jsx)(e.code,{children:"ssh-keyscan"})})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#ssh-copy-id",children:(0,i.jsx)(e.code,{children:"ssh-copy-id"})})}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#ssh-keygen",children:(0,i.jsx)(e.code,{children:"ssh-keygen"})})," \u4e3a SSH \u751f\u6210\u3001\u7ba1\u7406\u548c\u8f6c\u6362\u8ba4\u8bc1\u5bc6\u94a5"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#ssh-add",children:(0,i.jsx)(e.code,{children:"ssh-add"})})," \u628a\u4e13\u7528\u5bc6\u94a5\u6dfb\u52a0\u5230 ",(0,i.jsx)(e.code,{children:"ssh-agent"})," \u7684\u9ad8\u901f\u7f13\u5b58\u4e2d"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#ssh-agent",children:(0,i.jsx)(e.code,{children:"ssh-agent"})})," \u63a7\u5236\u7528\u6765\u4fdd\u5b58\u516c\u94a5\u8eab\u4efd\u9a8c\u8bc1\u6240\u4f7f\u7528\u7684\u79c1\u94a5\u7a0b\u5e8f"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\u7f51\u7edc\u914d\u7f6e","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#ifconfig",children:(0,i.jsx)(e.code,{children:"ifconfig"})})," \u914d\u7f6e\u548c\u663e\u793a\u7cfb\u7edf\u7f51\u5361\u7684\u7f51\u7edc\u53c2\u6570"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#route",children:(0,i.jsx)(e.code,{children:"route"})})," \u67e5\u770b\u7f51\u5173\u547d\u4ee4"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u7f51\u7edc\u5e94\u7528",children:"\u7f51\u7edc\u5e94\u7528"}),"\n",(0,i.jsx)(e.h3,{id:"curl",children:"curl"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"curl"})," \u547d\u4ee4\u662f\u4e00\u4e2a\u5229\u7528 URL \u89c4\u5219\u5728\u547d\u4ee4\u884c\u4e0b\u5de5\u4f5c\u7684\u6587\u4ef6\u4f20\u8f93\u5de5\u5177\u3002"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://wangchujiang.com/linux-command/c/curl.html",children:"\u8be6\u7ec6\u547d\u4ee4\u53c2\u6570"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:'# \u6587\u4ef6\u4e0b\u8f7d\uff08\u4e0d\u663e\u793a\u8fdb\u5ea6\uff09\ncurl URL --silent\n\n# \u4f7f\u7528\u9009\u9879 -o \u5c06\u4e0b\u8f7d\u7684\u6570\u636e\u5199\u5165\u5230\u6587\u4ef6\uff0c\u5fc5\u987b\u4f7f\u7528\u6587\u4ef6\u7684\u7edd\u5bf9\u5730\u5740\ncurl http://example.com/text.iso --o filename.iso --progress\n\n# \u4f7f\u7528\u9009\u9879 -H \u8bbe\u7f6e\u8bf7\u6c42\u7684\u5934\u90e8\u4fe1\u606f\ncurl -H "accept-language:zh-cn" URL\n\n# \u8bfb\u53d6\u672c\u5730\u6587\u672c\u6587\u4ef6\u7684\u6570\u636e\uff0c\u5411\u670d\u52a1\u5668\u53d1\u9001\ncurl -d \'@data.txt\' https://example.com/upload\n\n# JSON \u683c\u5f0f\u7684 POST \u8bf7\u6c42\ncurl -l -H "Content-Type: application/json" -X POST -d \'{"phone": "13800138000", "password": "test"}\' https://example.com/api/users.json\n\n# \u5c06 Cookie \u5199\u5165\u6587\u4ef6\ncurl -c cookies.txt https://www.mrsingsing.com\n\n# \u4e0a\u4f20\u4e8c\u8fdb\u5236\u6587\u4ef6\n# \u4e0b\u9762\u7684\u547d\u4ee4\u4f1a\u7ed9 HTTP \u8bf7\u6c42\u52a0\u4e0a\u6807\u5934 Content-Type: multipart/form-data\uff0c\u7136\u540e\u5c06\u6587\u4ef6 photo.png \u4f5c\u4e3a file \u5b57\u6bb5\u4e0a\u4f20\ncurl -F \'file=@photo.png\' https://mrsingsing.com/profile\n\n# \u8c03\u8bd5\u53c2\u6570\ncurl -v https://www.example.com\n\n# \u83b7\u53d6\u672c\u673a\u5916\u7f51 IP\ncurl ipecho.net/plain\n\ncurl -L ip.tool.lu\n\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u8bf7\u6c42\u540e\u6253\u5370\u672c\u6b21\u8bf7\u6c42\u7684\u7edf\u8ba1\u6570\u636e\u5230\u6807\u51c6\u8f93\u51fa"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"curl -w https://www.mrsingsing.com\n"})}),"\n",(0,i.jsx)(e.p,{children:"curl \u63d0\u4f9b\u4e86\u5f88\u591a\u7f6e\u6362\u53d8\u91cf\uff0c\u53ef\u4ee5\u5728\u683c\u5f0f\u5316\u5b57\u7b26\u4e32\u4e2d\u901a\u8fc7 %{var} \u7684\u5f62\u5f0f\u4f7f\u7528\u3002\u5b8c\u6574\u7684\u53d8\u91cf\u5217\u8868\u53ef\u4ee5\u5728 curl \u7684 manpage \u4e2d\u67e5\u770b\u3002\u7b80\u5355\u4ecb\u7ecd\u4e00\u4e0b\u6211\u4eec\u4f7f\u7528\u7684\u8fd9\u51e0\u4e2a\u53d8\u91cf\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"url_effective"}),": \u6267\u884c\u5b8c\u5730\u5740\u91cd\u5b9a\u5411\u4e4b\u540e\u7684\u6700\u7ec8 URL\uff1b"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"time_namelookup"}),": \u4ece\u8bf7\u6c42\u5f00\u59cb\u81f3\u5b8c\u6210\u540d\u79f0\u89e3\u6790\u6240\u82b1\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2\uff0c\u4e0b\u540c\uff1b"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"time_redirect"}),": \u6267\u884c\u6240\u6709\u91cd\u5b9a\u5411\u6240\u82b1\u7684\u65f6\u95f4\uff1b"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"time_connect"}),": \u4ece\u8bf7\u6c42\u5f00\u59cb\u81f3\u5efa\u7acb TCP \u8fde\u63a5\u6240\u82b1\u7684\u65f6\u95f4\uff1b"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"time_appconnect"}),": \u4ece\u8bf7\u6c42\u5f00\u59cb\u81f3\u5b8c\u6210 SSL/SSH \u63e1\u624b\u6240\u82b1\u7684\u65f6\u95f4\uff1b"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"time_pretransfer"}),": \u4ece\u8bf7\u6c42\u5f00\u59cb\u81f3\u670d\u52a1\u5668\u51c6\u5907\u4f20\u9001\u6587\u4ef6\u6240\u82b1\u7684\u65f6\u95f4\uff0c\u5305\u542b\u4e86\u4f20\u9001\u534f\u5546\u65f6\u95f4\uff1b"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"time_starttransfer"}),": \u4ece\u8bf7\u6c42\u5f00\u59cb\u81f3\u670d\u52a1\u5668\u51c6\u5907\u4f20\u9001\u7b2c\u4e00\u4e2a\u5b57\u8282\u6240\u82b1\u7684\u65f6\u95f4\uff1b"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"time_total"}),": \u5b8c\u6574\u8017\u65f6\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u7136\u540e\u6267\u884c\u8bf7\u6c42\uff0c\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"@filename"})," \u6307\u5b9a\u4fdd\u5b58\u4e86\u683c\u5f0f\u5316\u5b57\u7b26\u4e32\u7684\u6587\u4ef6\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"curl -L -s -w @fmt.txt -o /dev/null https://www.mrsingsing.com\n"})}),"\n",(0,i.jsx)(e.h3,{id:"wget",children:"wget"}),"\n",(0,i.jsx)(e.p,{children:"Linux \u7cfb\u7edf\u4e0b\u8f7d\u6587\u4ef6\u5de5\u5177\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4f60\u60f3\u8981\u5728\u670d\u52a1\u5668\u4e0a\u5b89\u88c5 JDK\uff0c\u4e0d\u4f1a\u73b0\u5728\u672c\u5730\u4e0b\u8f7d\u4e0b\u6765\uff0c\u7136\u540e\u4f7f\u7528 scp \u4f20\u5230\u670d\u52a1\u5668\u4e0a\u5427\uff08\u6709\u65f6\u5019\u4e0d\u5f97\u4e0d\u8fd9\u6837\uff09\u3002wget \u547d\u4ee4\u53ef\u4ee5\u8ba9\u4f60\u76f4\u63a5\u4f7f\u7528\u547d\u4ee4\u4e0b\u8f7d\u6587\u4ef6\uff0c\u5e76\u652f\u6301\u65ad\u70b9\u7eed\u4f20\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# \u4e0b\u8f7d\u5355\u4e2a\u6587\u4ef6\nwget http://www.jsdig.com/testfile.zip\n\n# \u4e0b\u8f7d\u5e76\u4ee5\u4e0d\u540c\u7684\u6587\u4ef6\u540d\u4fdd\u5b58\nwget -O wordpress.zip http://www.jsdig.com/download.aspx?id=1080\n\n# \u9650\u901f\u4e0b\u8f7d\nwget --limit-rate=300k http://www.jsdig.com/download.aspx?id=1080\n\n# \u65ad\u70b9\u7eed\u4f20\nwget -c http://www.jsdig.com/testfile.zip\n\n# FTP \u4e0b\u8f7d\nwget --ftp-user=USERNAME --ftp-parssword=PASSWORD url\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9ad8\u7ea7\u7f51\u7edc",children:"\u9ad8\u7ea7\u7f51\u7edc"}),"\n",(0,i.jsx)(e.h3,{id:"iptables",children:"iptables"}),"\n",(0,i.jsx)(e.p,{children:"\u9632\u706b\u5899\u5206\u4e3a\u8f6f\u4ef6\u9632\u706b\u5899\u548c\u786c\u4ef6\u9632\u706b\u5899\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u9632\u706b\u5899\u53c8\u53ef\u4ee5\u5206\u4e3a\u5305\u8fc7\u6ee4\u9632\u706b\u5899\u548c\u5e94\u7528\u5c42\u7684\u9632\u706b\u5899\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["CentOS 6 \u9ed8\u8ba4\u7684\u9632\u706b\u5899\u662f ",(0,i.jsx)(e.code,{children:"iptables"})]}),"\n",(0,i.jsxs)(e.li,{children:["CentOS 7 \u9ed8\u8ba4\u7684\u9632\u706b\u5899\u662f ",(0,i.jsx)(e.code,{children:"firewallD"}),"\uff08\u5e95\u5c42\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"netfilter"}),"\uff09"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u89c4\u5219\u8868\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"filter"}),"\n",(0,i.jsx)(e.li,{children:"nat"}),"\n",(0,i.jsx)(e.li,{children:"mangle"}),"\n",(0,i.jsx)(e.li,{children:"raw"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u89c4\u5219\u94fe\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"INPUT / OUTPUT / FORWARD"}),"\n",(0,i.jsx)(e.li,{children:"PREROUTING / POSTROUTING"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# \u67e5\u770b filter \u8868\u7684\u51e0\u6761\u94fe\u89c4\u5219\uff08INPUT \u94fe\u53ef\u4ee5\u770b\u51fa\u5f00\u653e\u4e86\u54ea\u4e9b\u7aef\u53e3\uff09\niptables -t filter -L -n\n\n# filter \u8868\u662f\u9ed8\u8ba4\u67e5\u8be2\u7684\u8868\uff0c\u53ef\u4ee5\u7701\u7565 -t \u9009\u9879\niptables -L -n\n\n# \u67e5\u770b NAT \u8868\u7684\u94fe\u89c4\u5219\niptables -t nat -L -n\n\n# \u67e5\u770b\u6240\u6709 iptables \u89c4\u5219\niptables -vnL\n\n# \u4e3a INPUT \u94fe\u6dfb\u52a0\u89c4\u5219\uff08\u5f00\u653e 8080 \u7aef\u53e3\uff09\niptables -I INPUT -p tcp --dport 8080 -j ACCEPT\n\n# \u6e05\u9664\u9632\u706b\u5899\u6240\u6709\u89c4\u5219\n# \u5220\u9664\u6240\u6709\u81ea\u5b9a\u4e49\u94fe\niptables -F\n\niptables -X\n\niptables -Z\n\n# \u67e5\u627e\u89c4\u5219\u6240\u5728\u884c\u53f7\niptables -L INPUT --line-numbers -n\n\n# \u6839\u636e\u884c\u53f7\u5220\u9664\u8fc7\u6ee4\u89c4\u5219\uff08\u5173\u95ed 8080 \u7aef\u53e3\uff09\uff0c\u4e0b\u9762\u7684 1 \u662f\u4e0a\u9762\u627e\u5230\u7684\u89c4\u5219\u6240\u5728\u7684\u884c\u53f7\niptables -D INPUT 1\n\n# \u653e\u884c TCP 80 \u7aef\u53e3\nfirewall-cmd --add-port=80/tcp --permanent\n\n# \u641c\u7d22 iptables \u89c4\u5219\n# $table \u6539\u4e3a\u4f60\u60f3\u641c\u7d22\u7684\u8868\uff0c$string \u6539\u4e3a\u4f60\u8981\u641c\u7d22\u7684\u5b57\u7b26\u4e32\niptables -L $table -v -n | grep $string\n"})}),"\n",(0,i.jsx)(e.p,{children:"-A \u53c2\u6570\u5c31\u770b\u6210\u662f\u6dfb\u52a0\u4e00\u6761 INPUT \u7684\u89c4\u5219\n-p \u6307\u5b9a\u662f\u4ec0\u4e48\u534f\u8bae\uff0c\u5e38\u7528\u7684 tcp \u534f\u8bae\uff0c\u5f53\u7136\u4e5f\u6709 udp \u4f8b\u5982 53 \u7aef\u53e3\u7684 DNS"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"iptables -A INPUT -p tcp --dport 22 -j ACCEPT\niptables -A OUTPUT -p tcp --sport 22 -j ACCEPT\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5e38\u7528\u7684\u9632\u706b\u5899\u89c4\u5219\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# \u5c4f\u853d\u67d0\u4e2a IP \u5730\u5740\niptables -A INPUT -s xxx.xxx.xxx.xxx -j DROP\n\n# \u5982\u679c\u53ea\u60f3\u5c4f\u853d\u6765\u81ea\u67d0\u4e2a IP \u5730\u5740\u7684 TCP \u6d41\u91cf\uff0c\u53ef\u4ee5\u7528 -p \u6307\u5b9a\u534f\u8bae\niptables -A INPUT -p tcp -s xxx.xxx.xxx.xxx -j DROP\n\n# \u53d6\u6d88\u5c4f\u853d\u67d0\u4e2a IP \u5730\u5740\niptables -D INPUT -s xxx.xxx.xxx.xxx -j DROP\n\n# \u5c4f\u853d\u57fa\u4e8e\u67d0\u4e2a\u7aef\u53e3\u7684\u4f20\u51fa\u8fde\u63a5\niptables -A OUTPUT -p tcp --dport xxx -j DROP\n\n# \u5141\u8bb8\u57fa\u4e8e\u67d0\u4e2a\u7aef\u53e3\u7684\u4f20\u5165\u8fde\u63a5\niptables -A INPUT -p tcp --dport xxx -j ACCEPT\n\n# \u5c06\u67d0\u4e2a\u670d\u52a1\u7684\u6d41\u91cf\u8f6c\u53d1\u5230\u53e6\u4e00\u4e2a\u7aef\u53e3\niptables -t nat -A PREROUTING -i eth0 -p tcp --dport 25 -j REDIRECT --to-port 2525\n\n# DDoS \u5c4f\u853d\niptables -A INPUT -p tcp --dport 80 -m limit --limit 100/minute --limit-burst 200 -j ACCEPT\n"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"iptables"})," \u9632\u706b\u5899\u7684\u914d\u7f6e\u6587\u4ef6\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"/etc/sysconfig/iptables"})}),"\n",(0,i.jsxs)(e.li,{children:["CentOS 6","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"service iptables save | start | stop | restart"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["CentOS 7","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"yum install iptables-services"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u6269\u5c55\u8d44\u6599\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://wangchujiang.com/linux-command/c/iptables.html",children:"Linux iptables \u547d\u4ee4"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"http://www.codebelief.com/article/2017/08/linux-25-useful-iptables-firewall-rules/",children:"Linux\uff1a25 \u4e2a\u6709\u7528\u7684 iptables \u9632\u706b\u5899\u89c4\u5219"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://www.cnblogs.com/mymelody/p/10490776.html",children:"CentOS7 firewalld \u6253\u5f00\u5173\u95ed\u7aef\u53e3"})}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u7f51\u7edc\u6d4b\u8bd5",children:"\u7f51\u7edc\u6d4b\u8bd5"}),"\n",(0,i.jsx)(e.h3,{id:"host",children:"host"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"host"})," \u547d\u4ee4\u662f\u5e38\u7528\u7684\u5206\u6790\u57df\u540d\u67e5\u8be2\u5de5\u5177\uff0c\u53ef\u4ee5\u7528\u6765\u6d4b\u8bd5\u57df\u540d\u7cfb\u7edf\u5de5\u4f5c\u662f\u5426\u6b63\u5e38\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# \u57fa\u672c\u7528\u6cd5\nhost mrsingsing.com\n\n# \u663e\u793a\u8be6\u7ec6\u7684 DNS \u4fe1\u606f\nhost -a mrsingsing.com\n"})}),"\n",(0,i.jsx)(e.h3,{id:"nslookup",children:"nslookup"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# \u67e5\u8be2\u57df\u540d \u7684 A \u8bb0\u5f55\n# - domain \u67e5\u8be2\u7684\u57df\u540d\n# - dns-server \u6307\u5b9a\u89e3\u6790\u7684 DNS \u670d\u52a1\u5668\nnslookup <domain> <dns-server>\n\nnslookup baidu.com\n\nnslookup baidu.com 8.8.8.8\n\n# \u67e5\u8be2\u5176\u4ed6\u8bb0\u5f55\nnslookup -qt = <type> <domain>\n\nnslookup -qt=mx baidu.com 8.8.8.8\n\n# \u67e5\u8be2\u66f4\u8ddd\u79bb\u7684\u4fe1\u606f\nnslookup -d <domain>\n\nnslookup -d baidu.com\n\n# \u5b8c\u5168\u54cd\u5e94\u4fe1\u606f\nnslookup -debug baidu.com\n"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"type"})," \u53c2\u6570\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"A"}),"\uff1a\u5730\u5740\u8bb0\u5f55"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"AAAA"}),"\uff1a\u5730\u5740\u8bb0\u5f55"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"CNAME"}),"\uff1a\u522b\u540d\u8bb0\u5f55"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5efa\u8bae\u4f7f\u7528 ",(0,i.jsx)(e.a,{href:"#dig",children:"dig"})," \u66ff\u4ee3 ",(0,i.jsx)(e.code,{children:"nslookup"})," \u547d\u4ee4\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"dig",children:"dig"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# \u57fa\u672c\u7528\u6cd5\ndig mrsingsing.com\n\n# \u53cd\u5411\u89e3\u6790\ndig -x 140.205.94.189\n\n# \u67e5\u770b\u57df\u6388\u6743\u7684 DNS \u670d\u52a1\u5668\ndig mrsingsing.com +nssearch\n"})}),"\n",(0,i.jsx)(e.h3,{id:"ping",children:"ping"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u68c0\u6d4b\u7f51\u7edc\u7684\u8054\u901a\u60c5\u51b5\u548c\u5206\u6790\u7f51\u7edc\u901f\u5ea6\uff0c\u5e76\u6839\u636e\u57df\u540d\u5f97\u5230\u670d\u52a1\u5668 IP\uff08\u4e0d\u5305\u62ec\u90a3\u4e9b\u7981 ping \u7684\u7f51\u7ad9\uff09"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# \u68c0\u67e5\u7f51\u7edc\u8054\u901a\nping xx.xx.xx.xx\n\nping mrsingsing.com\n"})}),"\n",(0,i.jsx)(e.h3,{id:"netstat",children:"netstat"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"netstat"})," \u547d\u4ee4\u7528\u4e8e\u663e\u793a\u4e0e IP\u3001TCP\u3001UDP \u548c ICMP \u534f\u8bae\u76f8\u5173\u7684\u7edf\u8ba1\u6570\u636e\uff0c\u4e00\u822c\u7528\u4e8e\u68c0\u9a8c\u672c\u673a\u5404\u7aef\u53e3\u7684\u7f51\u7edc\u8fde\u63a5\u60c5\u51b5\u3002",(0,i.jsx)(e.code,{children:"netstat"})," \u662f\u5728\u5185\u6838\u4e2d\u8bbf\u95ee\u7f51\u7edc\u53ca\u76f8\u5173\u4fe1\u606f\u7684\u7a0b\u5e8f\uff0c\u5b83\u80fd\u63d0\u4f9b TCP \u8fde\u63a5\uff0cTCP \u548c UDP \u76d1\u542c\uff0c\u8fdb\u7a0b\u5185\u5b58\u7ba1\u7406\u7684\u76f8\u5173\u62a5\u544a\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"netstat\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u4ece\u6574\u7406\u4e0a\u6765\u770b\uff0c",(0,i.jsx)(e.code,{children:"netstat"})," \u8f93\u51fa\u7ed3\u679c\u53ef\u4ee5\u5206\u4e3a\u4e24\u4e2a\u90e8\u5206\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Active Internet connections\uff0c\u79f0\u4e3a\u6709\u6e90 TCP \u8fde\u63a5\uff0c\u5176\u4e2d ",(0,i.jsx)(e.code,{children:"Recv-Q"})," \u548c ",(0,i.jsx)(e.code,{children:"Send-Q"})," \u6307\u7684\u662f\u63a5\u6536\u961f\u5217\u548c\u53d1\u9001\u961f\u5217\u3002\u8fd9\u4e9b\u6570\u5b57\u4e00\u7248\u90fd\u5e94\u8be5\u662f 0\u3002\u5982\u679c\u4e0d\u662f\u5219\u8868\u793a\u8f6f\u4ef6\u5305\u6b63\u5728\u961f\u5217\u4e2d\u5806\u79ef\u3002\u8fd9\u79cd\u60c5\u51b5\u53ea\u80fd\u5728\u975e\u5e38\u5c11\u7684\u60c5\u51b5\u89c1\u5230\u3002"]}),"\n",(0,i.jsx)(e.li,{children:"Active UNIX domain sockets\uff0c\u79f0\u4e3a\u6709\u6e90 Unix \u57df\u5957\u63a5\u53e3\uff08\u548c\u7f51\u7edc\u5957\u63a5\u5b57\u4e00\u6837\uff0c\u4f46\u662f\u53ea\u80fd\u7528\u4e8e\u672c\u673a\u901a\u4fe1\uff0c\u6027\u80fd\u53ef\u4ee5\u63d0\u9ad8\u4e00\u500d\uff09"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Proto \u663e\u793a\u8fde\u63a5\u4f7f\u7528\u7684\u534f\u8bae\uff0cRefCnt \u8868\u793a\u8fde\u63a5\u5230\u672c\u5957\u63a5\u53e3\u4e0a\u7684\u8fdb\u7a0b\u53f7\uff0cTypes \u663e\u793a\u5957\u63a5\u53e3\u7684\u7c7b\u578b\uff0cState \u663e\u793a\u5957\u63a5\u53e3\u5f53\u524d\u7684\u72b6\u6001\uff0cPath \u8868\u793a\u8fde\u63a5\u5230\u5957\u63a5\u53e3\u7684\u5176\u5b83\u8fdb\u7a0b\u4f7f\u7528\u7684\u8def\u5f84\u540d\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u72b6\u6001\u8bf4\u660e\uff1a"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# \u4fa6\u542c\u6765\u81ea\u8fdc\u65b9\u7684TCP\u7aef\u53e3\u7684\u8fde\u63a5\u8bf7\u6c42\nLISTEN\n\n# \u518d\u53d1\u9001\u8fde\u63a5\u8bf7\u6c42\u540e\u7b49\u5f85\u5339\u914d\u7684\u8fde\u63a5\u8bf7\u6c42\uff08\u5982\u679c\u6709\u5927\u91cf\u8fd9\u6837\u7684\u72b6\u6001\u5305\uff0c\u68c0\u67e5\u662f\u5426\u4e2d\u62db\u4e86\uff09\nSYN-SENT\uff1a\n\n# \u518d\u6536\u5230\u548c\u53d1\u9001\u4e00\u4e2a\u8fde\u63a5\u8bf7\u6c42\u540e\u7b49\u5f85\u5bf9\u65b9\u5bf9\u8fde\u63a5\u8bf7\u6c42\u7684\u786e\u8ba4\uff08\u5982\u6709\u5927\u91cf\u6b64\u72b6\u6001\uff0c\u4f30\u8ba1\u88abflood\u653b\u51fb\u4e86\uff09\nSYN-RECEIVED\uff1a\n\n# \u4ee3\u8868\u4e00\u4e2a\u6253\u5f00\u7684\u8fde\u63a5\nESTABLISHED\uff1a\n\n# \u7b49\u5f85\u8fdc\u7a0bTCP\u8fde\u63a5\u4e2d\u65ad\u8bf7\u6c42\uff0c\u6216\u5148\u524d\u7684\u8fde\u63a5\u4e2d\u65ad\u8bf7\u6c42\u7684\u786e\u8ba4\nFIN-WAIT-1\uff1a\n\n# \u4ece\u8fdc\u7a0bTCP\u7b49\u5f85\u8fde\u63a5\u4e2d\u65ad\u8bf7\u6c42\nFIN-WAIT-2\uff1a\n\n# \u7b49\u5f85\u4ece\u672c\u5730\u7528\u6237\u53d1\u6765\u7684\u8fde\u63a5\u4e2d\u65ad\u8bf7\u6c42\nCLOSE-WAIT\uff1a\n\n# \u7b49\u5f85\u8fdc\u7a0bTCP\u5bf9\u8fde\u63a5\u4e2d\u65ad\u7684\u786e\u8ba4\nCLOSING\uff1a\n\n# \u7b49\u5f85\u539f\u6765\u7684\u53d1\u5411\u8fdc\u7a0bTCP\u7684\u8fde\u63a5\u4e2d\u65ad\u8bf7\u6c42\u7684\u786e\u8ba4\uff08\u4e0d\u662f\u4ec0\u4e48\u597d\u4e1c\u897f\uff0c\u6b64\u9879\u51fa\u73b0\uff0c\u68c0\u67e5\u662f\u5426\u88ab\u653b\u51fb\uff09\nLAST-ACK\uff1a\n\n# \u7b49\u5f85\u8db3\u591f\u7684\u65f6\u95f4\u4ee5\u786e\u4fdd\u8fdc\u7a0bTCP\u63a5\u6536\u5230\u8fde\u63a5\u4e2d\u65ad\u8bf7\u6c42\u7684\u786e\u8ba4\nTIME-WAIT\uff1a\n\n# \u6ca1\u6709\u4efb\u4f55\u8fde\u63a5\u72b6\u6001\nCLOSED\uff1a\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# \u663e\u793a\u7f51\u5361\u5217\u8868\nnetstat -i\n\n# \u663e\u793a\u7f51\u7edc\u7edf\u8ba1\nnetstat -s\n\n# \u663e\u793a\u4ee5\u592a\u7f51\u7edf\u8ba1\u6570\u636e\uff08\u5305\u62ec\u4f20\u9001\u7684\u6570\u636e\u62a5\u7684\u603b\u5b57\u8282\u6570\u3001\u9519\u8bef\u6570\u3001\u5220\u9664\u6570\u3001\u6570\u636e\u62a5\u548c\u6570\u91cf\u548c\u5e7f\u64ad\u7684\u6570\u91cf\uff09\nnetstat -e\n\n# \u5e38\u7528\u7ec4\u5408\uff08l:listening;n:num;t:tcp;u:udp;p:process\uff09\nnetstat -lntup\n\n# \u663e\u793a\u8def\u7531\u4fe1\u606f\nnetstat -r\n\n# \u663e\u793a\u673a\u5668\u4e2d\u7f51\u7edc\u8fde\u63a5\u5404\u4e2a\u72b6\u6001\u4e2a\u6570\nnetstat -lant\n\n# \u628a\u72b6\u6001\u53d6\u51fa\u6765\u540e\u4f7f\u7528 uniq -c \u7edf\u8ba1\u540e\u518d\u8fdb\u884c\u6392\u5e8f\nnetstat -ant | awk '{print $6}' | sort | uniq -c\n\n# \u67e5\u770b\u8fde\u63a5\u67d0\u670d\u52a1\u7aef\u53e3\u6700\u591a\u7684 IP \u5730\u5740\nnetstat -ant | grep \"192.168.25.*\" | awk '{print $5}' | awk -F: '{print $1}' | sort -nr | uniq -c\n\n# \u627e\u51fa\u7a0b\u5e8f\u8fd0\u884c\u7684\u7aef\u53e3\nnetstat -ap | grep ssh\n\n# \u6216\u8005\nnetstat -alnt | grep tcp\n\n# \u6839\u636e\u7aef\u53e3\u67e5\u770b\u8fd9\u4e2a\u8fdb\u7a0b\u7684 PID\nnetstat -lnp | grep 8080\n\n# \u67e5\u770b\u7f51\u7edc\u72b6\u51b5\nnetstat -n | awk '/^tcp/ {++S[$NF]} END {for(a in S) print a, S[a]}'\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u6b64\u547d\u4ee4\uff0c\u5728\u627e\u4e00\u4e9b\u672c\u5730\u8d77\u4e86\u4ec0\u4e48\u7aef\u53e3\u4e4b\u7c7b\u7684\u95ee\u9898\u4e0a\uff0c\u4f5c\u7528\u5f88\u5927\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://www.cnblogs.com/ftl1012/p/netstat.html",children:"Linux netstat \u547d\u4ee4\u8be6\u89e3"})}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u7f51\u7edc\u5b89\u5168",children:"\u7f51\u7edc\u5b89\u5168"}),"\n",(0,i.jsx)(e.h3,{id:"ssh",children:"ssh"}),"\n",(0,i.jsx)(e.p,{children:"ssh \u547d\u4ee4\u662f openssh \u5957\u4ef6\u4e2d\u7684\u5ba2\u6237\u7aef\u8fde\u63a5\u5de5\u5177\uff0c\u53ef\u4ee5\u7ed9\u4e88 ssh \u52a0\u5bc6\u534f\u8bae\u5b9e\u73b0\u5b89\u5168\u7684\u8fdc\u7a0b\u767b\u5f55\u670d\u52a1\u5668\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:'# ssh \u8fde\u63a5\u8fdc\u7a0b\u4e3b\u673a `ssh name@ip`\n# \u9ed8\u8ba4\u8fde\u63a5\u5230\u76ee\u6807\u4e3b\u673a\u7684 22 \u7aef\u53e3\nssh user@hostname\n\n# ssh \u8fde\u63a5\u8fdc\u4e3b\u673a\u5e76\u6307\u5b9a\u7aef\u53e3\nssh -p 10022 user@hostname\n\n# \u6253\u5f00\u8c03\u8bd5\u6a21\u5f0f\nssh -v user@hostname\n\n# \u5bf9\u6240\u6709\u8bf7\u6c42\u538b\u7f29\n# \u6240\u6709\u901a\u8fc7 ssh \u53d1\u9001\u6216\u63a5\u6536\u7684\u6570\u636e\u5c06\u4f1a\u88ab\u538b\u7f29\uff0c\u5e76\u4e14\u4ecd\u7136\u662f\u52a0\u5bc6\u7684\u3002\nssh -C user@hostname\n\n# \u6307\u5b9a ssh \u6e90\u5730\u5740\n\u5982\u679c\u4f60\u7684 ssh \u5ba2\u6237\u7aef\u591a\u4e8e\u4e24\u4e2a\u4ee5\u4e0a\u7684 IP \u5730\u5740\uff0c\u53ef\u4ee5\u4f7f\u7528 `-b` \u9009\u9879\u6765\u6307\u5b9a\u4e00\u4e2a IP\u5730\u5740\u3002\n\n# \u767b\u5f55\u8fdc\u7a0b\u4e3b\u673a\u540e\u6267\u884c\u67d0\u4e2a\u547d\u4ee4\nssh username@hostname "ls /home/omd"\n\n# \u767b\u5f55\u8fdc\u7a0b\u670d\u52a1\u5668\u540e\u6267\u884c\u67d0\u4e2a\u811a\u672c\nssh username@hostname -t "bash/home/omd/ftl.bash"\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u67e5\u770b ssh \u5bc6\u94a5\u76ee\u5f55"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# \u5f53\u524d\u7528\u6237\u7684 .ssh \u76ee\u5f55\nll /root/.ssh/known_hosts\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# ssh \u914d\u7f6e\u6587\u4ef6\ncat /etc/ssh/sshd_config\n\n# \u5f00\u542f ssh \u670d\u52a1\nservice sshd start\n\n# \u5173\u95ed ssh \u670d\u52a1\nservice sshd stop\n\n# \u5728 Github \u6dfb\u52a0\u4e86\u516c\u94a5\u540e\u8fdb\u884c\u8fde\u63a5\uff0c\u7528\u4e8e\u9a8c\u8bc1 Key\nssh -T git@github.com\n"})}),"\n",(0,i.jsx)(e.h3,{id:"ssh-keygen",children:"ssh-keygen"}),"\n",(0,i.jsx)(e.p,{children:"\u67e5\u770b\u662f\u5426\u5df2\u7ecf\u5b58\u5728 SSH \u5bc6\u94a5\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"cd ~/.ssh\nls\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\uff0c\u63d0\u793a\u4e0d\u5b58\u5728\u6b64\u76ee\u5f55\uff0c\u5219\u8fdb\u884c\u7b2c\u4e8c\u6b65\u64cd\u4f5c\uff0c\u5426\u5219\uff0c\u4f60\u672c\u673a\u5df2\u7ecf\u5b58\u5728 SSH \u516c\u94a5\u548c\u79c1\u94a5\uff0c\u53ef\u4ee5\u7565\u8fc7\u7b2c\u4e8c\u6b65\uff0c\u76f4\u63a5\u8fdb\u5165\u7b2c\u4e09\u6b65\u64cd\u4f5c\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:'# \u751f\u6210 SSH \u79d8\u94a5\nssh-keygen -t rsa -C "your_email@example.com"\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"-t"}),"\uff1a\u6307\u5b9a\u5bc6\u94a5\u7c7b\u578b\uff0c\u9ed8\u8ba4\u662f RSA\uff0c\u53ef\u4ee5\u7701\u7565"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"-C"}),"\uff1a\u8bbe\u7f6e\u6ce8\u91ca\u6587\u5b57\uff0c\u6bd4\u5982\u90ae\u7bb1"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"-f"}),"\uff1a\u6307\u5b9a\u5bc6\u94a5\u6587\u4ef6\u5b58\u50a8\u6587\u4ef6\u540d"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u6839\u636e\u63d0\u793a\uff0c\u9700\u8981\u6307\u5b9a\u6587\u4ef6\u4f4d\u7f6e\u548c\u5bc6\u7801\uff0c\u5982\u679c\u662f\u4f60\u8db3\u591f\u653e\u5fc3\uff0c\u5176\u5b9e\u90fd\u53ef\u4ee5\u76f4\u63a5\u56de\u8f66\uff0c\u4e0d\u9700\u8981\u4ec0\u4e48\u5bc6\u7801\u3002\u6267\u884c\u5b8c\u4ee5\u540e\uff0c\u53ef\u5728 ",(0,i.jsx)(e.code,{children:"/C/Users/you/.ssh/"})," \u8def\u5f84\u4e0b\u770b\u5230\u521a\u751f\u6210\u7684\u6587\u4ef6\uff1a",(0,i.jsx)(e.code,{children:"id_rsa"})," \u548c ",(0,i.jsx)(e.code,{children:"id_rsa.pub"}),"\uff0c\u5373\u516c\u94a5\u548c\u79c1\u94a5\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# \u67e5\u770b\u662f\u5426\u5df2\u7ecf\u6dfb\u52a0\u4e86\u5bf9\u5e94\u4e3b\u673a\u7684 SSH \u5bc6\u94a5\nssh-keygen -F hostname\n\n# \u5220\u9664\u5bf9\u5e94\u4e3b\u673a\u7684 SSH \u8bbf\u95ee\u5bc6\u94a5\nssh-keygen -R hostname\n"})}),"\n",(0,i.jsx)(e.h3,{id:"ssh-add",children:"ssh-add"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"ssh-add"})," \u547d\u4ee4\u7528\u4e8e\u628a\u4e13\u7528\u5bc6\u94a5\u6dfb\u52a0\u5230 ",(0,i.jsx)(e.code,{children:"ssh-agent"})," \u7684\u9ad8\u901f\u7f13\u5b58\u4e2d\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# \u628a\u4e13\u7528\u5bc6\u94a5\u6dfb\u52a0\u5230 ssh-agent \u7684\u9ad8\u901f\u7f13\u5b58\u4e2d\nssh-add ~/.ssh/id_rsa\n\n# \u4ece ssh-agent \u4e2d\u5220\u9664\u5bc6\u94a5\nssh-add -d ~/.ssh/id_xxx.pub\n\n# \u5220\u9664 ssh-agent \u4e2d\u6240\u6709\u5bc6\u94a5\nssh-add -D\n\n# \u67e5\u770b ssh-agent \u4e2d\u7684\u5bc6\u94a5\nssh-add -l\n\n# \u67e5\u770b ssh-agent \u4e2d\u7684\u516c\u94a5\nssh-add -L\n\n# \u8bbe\u7f6e\u5bc6\u94a5\u8d85\u65f6\u65f6\u95f4\uff0c\u8d85\u65f6 ssh-agent \u5c06\u81ea\u52a8\u5378\u8f7d\u5bc6\u94a5\nssh-add -t <life>\n"})}),"\n",(0,i.jsx)(e.h3,{id:"ssh-agent",children:"ssh-agent"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"ssh-agent"})," \u547d\u4ee4\u662f\u4e00\u79cd\u63a7\u5236\u7528\u6765\u4fdd\u5b58\u516c\u94a5\u8eab\u4efd\u9a8c\u8bc1\u6240\u4f7f\u7528\u7684\u79c1\u94a5\u7a0b\u5e8f\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"ssh-agent"})," \u5728 X \u4f1a\u8bdd\u6216\u767b\u5f55\u4f1a\u8bdd\u4e4b\u521d\u542f\u52a8\uff0c\u6240\u6709\u5176\u4ed6\u7a97\u53e3\u6216\u7a0b\u5e8f\u5219\u4ee5\u5ba2\u6237\u7aef\u7a0b\u5e8f\u7684\u8eab\u4efd\u542f\u52a8\u5e76\u52a0\u5165\u5230 ",(0,i.jsx)(e.code,{children:"ssh-agent"})," \u7a0b\u5e8f\u4e2d\u3002\u901a\u8fc7\u4f7f\u7528\u73af\u5883\u53d8\u91cf\uff0c\u53ef\u5b9a\u4f4d\u4ee3\u7406\u5e76\u5728\u767b\u5f55\u5230\u5176\u4ed6\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"ssh"})," \u673a\u5668\u4e0a\u65f6\u4f7f\u7528\u4ee3\u7406\u81ea\u52a8\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# \u751f\u6210 Bourne Shell \u98ce\u683c\u547d\u4ee4\u8f93\u51fa\nssh-agent -s\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u7f51\u7edc\u914d\u7f6e",children:"\u7f51\u7edc\u914d\u7f6e"}),"\n",(0,i.jsx)(e.h3,{id:"ifconfig",children:"ifconfig"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"ifconfig"})," \u662f Linux \u7684\u7f51\u7edc\u72b6\u6001\u67e5\u770b\u547d\u4ee4"]}),"\n",(0,i.jsxs)(e.p,{children:["\u67e5\u770b IP \u5730\u5740\uff0c\u66ff\u4ee3\u54c1\u662f ",(0,i.jsx)(e.code,{children:"ip addr"})," \u547d\u4ee4\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"eth0"})," \u7b2c\u4e00\u5757\u7f51\u5361\uff08\u7f51\u7edc\u63a5\u53e3\uff09"]}),"\n",(0,i.jsx)(e.p,{children:"\u4f60\u7684\u7b2c\u4e00\u4e2a\u7f51\u7edc\u63a5\u53e3\u53ef\u80fd\u53eb\u505a\u4e0b\u9762\u7684\u540d\u5b57\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"eno1"}),"\uff1a\u677f\u8f7d\u7f51\u5361"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"ens33"}),"\uff1aPCI-E \u7f51\u5361"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"enp0s3"}),"\uff1a\u65e0\u6cd5\u83b7\u53d6\u7269\u7406\u4fe1\u606f\u7684 PCI-E \u7f51\u5361"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["CentOS 7 \u4f7f\u7528\u4e86\u4e00\u81f4\u6027\u7f51\u7edc\u8bbe\u5907\u547d\u540d\uff0c\u4ee5\u4e0a\u90fd\u4e0d\u5339\u914d\u5219\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"eth0"}),"\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u7f51\u7edc\u63a5\u53e3\u547d\u540d\u4fee\u6539"}),"\n",(0,i.jsx)(e.p,{children:"\u7f51\u5361\u547d\u540d\u89c4\u5219\u53d7 biosdevname \u548c net.ifnames \u4e24\u4e2a\u53c2\u6570\u5f71\u54cd\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u7f16\u8f91 ",(0,i.jsx)(e.code,{children:"/etc/default/grub"})," \u6587\u4ef6\uff0c\u589e\u52a0 ",(0,i.jsx)(e.code,{children:"biosdevname=0 net.ifnames=0"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# \u67e5\u770b\u7f51\u7edc\u914d\u7f6e\nifconfig\n\nlo0: flags=8049<UP,LOOPBACK,RUNNING,MULTICAST> mtu 16384\noptions=1203<RXCSUM,TXCSUM,TXSTATUS,SW_TIMESTAMP>\ninet 127.0.0.1 netmask 0xff000000\ninet6 ::1 prefixlen 128\ninet6 fe80::1%lo0 prefixlen 64 scopeid 0x1\nnd6 options=201<PERFORMNUD,DAD>\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"en5"}),"\uff1a\u7f51\u5361\u540d\u79f0"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"inet"}),"\uff1a\u7f51\u5361 IP \u5730\u5740"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"netmask"}),"\uff1a\u5bf9\u5e94\u5b50\u7f51\u63a9\u7801"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"ether"}),"\uff1a\u7f51\u5361 MAC \u5730\u5740"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"RX & TX"}),"\uff1a\u53d1\u9001/\u63a5\u53d7\u6570\u636e\u5927\u5c0f"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# \u4fee\u6539\u7f51\u5361\u540e\u91cd\u542f\nreboot\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u4fee\u6539\u7f51\u7edc\u914d\u7f6e"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"ifconfig <\u63a5\u53e3> <IP\u5730\u5740> [netmask \u5b50\u7f51\u63a9\u7801]\n\nifup <\u63a5\u53e3>\n\nifdown <\u63a5\u53e3>\n"})}),"\n",(0,i.jsx)(e.h3,{id:"route",children:"route"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"route"})," \u547d\u4ee4\u7528\u4e8e\u663e\u793a\u5e76\u8bbe\u7f6e Linux \u5185\u6838\u4e2d\u7684\u7f51\u7edc\u8def\u7531\u8868\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# \u4e0d\u6267\u884c DNS \u53cd\u5411\u67e5\u627e\uff0c\u76f4\u63a5\u663e\u793a\u6570\u5b57\u5f62\u5f0f\u7684 IP \u5730\u5740\nroute -n\n\n# \u65b0\u589e\u4e00\u6761\u5230\u8fbe 244.0.0.0 \u7684\u8def\u7531\nroute add -net 224.0.0.0 netmask 240.0.0.0 dev eth0\n\n# \u5c4f\u853d\u4e00\u6761\u8def\u7531\uff0c\u76ee\u7684\u5730\u4e3a 244.x.x.x \u5c06\u88ab\u62d2\u7edd\nroute add -net 224.0.0.0 netmask 240.0.0.0 reject\n"})}),"\n",(0,i.jsx)(e.h3,{id:"ip",children:"ip"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# ifconfig\nip addr ls\n\n# ifup eth0\nip link set dev eth0 up\n\n# ifconfig eth1 10.0.0.1 netmask 255.255.255.0\nip addr add 10.0.0.1/24 dev eth1\n\n# route add -net 10.0.0.0 netmask 255.255.255.0 gw 192.168.0.1\nip route add 10.0.0/24 via 192.168.0.1\n"})})]})}function x(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>r});var i=s(6540);const l={},d=i.createContext(l);function c(n){const e=i.useContext(d);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),i.createElement(d.Provider,{value:e},n.children)}}}]);