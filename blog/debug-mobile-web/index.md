---
slug: debug-mobile-web
title: 移动端调试指南
description: 前端怎么在移动端进行调试？`chrome://inspect` 和 `whistle` 助你搞定一切
date: 2024-06-01
authors: [Dnevend]
tags: [tech]
---

# 移动端调试

当移动端 web 项目部署在生产环境，项目部署在 Android/iOS 或其他移动设备下发生问题, 或想要模拟请求与拦截响应数据时，你会通过什么方式来进行处理与调试？

当项目是移动端的普通网页时，你可以通过 Chrome 浏览器自带的 `chrome://inspect` 功能，通过数据线连接真机设备以实现开发调试。

但当遇到需要模拟特定请求或响应内容、注入脚本、修改请求响应头的场景时，inspect 就难以应对了。又或者，你的项目作为 WebView 或 JsBridge 页面嵌入在其他的第三方应用内，在这几种场景下，你就可以使用代理抓包工具来完成更高级的调试操作。

常见的主流代理工具有：Fiddler、Charles，本文主要讲述利用`Whistle`进行调试操作，Whistle 基于 Node 实现跨平台，无需第三方安装包，更符合前端的操作习惯。

## 使用 chrome://inspect

### 设备开启 USB 调试

在访问调试工具之前，你需要对设备开放基础的调试配置，在 Android 和 iOS 下有不同的开启方式，你可以访问下面链接了解更多：

- [Android 配置开发者选项](https://developer.android.com/studio/debug/dev-options?hl=zh-cn#Enable-debugging)

- [iOS 配置远程调试](https://dev.to/nimajafari/remote-debugging-using-google-chrome-on-ios-devices-with-macos-ca9)

### 访问调试工具

在完成设备的配置后，请在浏览器地址栏中输入 `chrome://inspect` 访问开发者工具。

![inspect page](./inspect.png)

![dev-tools](./dev-tools.png)

## 使用 Whistle

### 官方介绍

> whistle(读音[ˈwɪsəl]，拼音[wēisǒu]) 基于 Node 实现的跨平台 web 调试代理工具，类似的工具有 Windows 平台上的 Fiddler，主要用于查看、修改 HTTP、HTTPS、Websocket 的请求、响应，也可以作为 HTTP 代理服务器使用，不同于 Fiddler 通过断点修改请求响应的方式，whistle 采用的是类似配置系统 hosts 的方式，一切操作都可以通过配置实现，支持域名、路径、正则表达式、通配符、通配路径等多种匹配方式，且可以通过 Node 模块扩展功能

### 安装&启动

> 步骤: 安装 Node > 安装 whistle > 启动 whistle > 配置代理 > 安装根证书

```
# 安装
npm install -g whistle

# 检查: 执行下方命令后如果正常输出whistle帮助信息, 代表安装成功
w2 help

# 启动: 运行后默认访问地址为 http://127.0.0.1:8899/
w2 start
```

> 更多命令见 [官方文档](https://wproxy.org/whistle/options.html)

### 代理&证书配置

在使用工具前，请在移动设备上安装工具的 HTTPS 证书，以获取完整的调试能力。

> 当代理工具拦截 HTTPS 请求时，它会充当客户端和服务器之间的中间人（MITM），并生成一个伪造的证书来替换原有的服务器证书。如果客户端没有信任这个伪造的证书，就会出现证书错误。

![qrcode](./qrcode.png)

![network](./network.png)

### 原理&流程

![principle](./principle.png)

### 常用规则

```
# 修改请求列表显示Style
    style://color=@fff&fontStyle=italic&bgColor=red
# 修改UserAgent
	ua://{ua}
# 修改状态码
	statusCode://[statusCode]
# 修改请求头/响应头
	reqHeaders://{value}  resHeaders://{value}
# 修改请求内容
	reqBody://{request.json}
# 修改响应内容
	resBody://{response.json}
# 模拟延时
	reqDelay://[delayTime]
# 处理跨域
	resCors://*
# 修改Host配置
	[originHost] [targetHost]

```

## 引用参考

[Whistle](https://wproxy.org/whistle/)
