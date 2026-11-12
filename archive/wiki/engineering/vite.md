---
sidebar_position: 2
tags: [engineering, vite]
description: "Vite 构建工具速查：开发服务器、依赖预构建、常用配置、环境变量与生产构建。"
---

# Vite

## 为什么用 Vite

开发阶段基于原生 ESM 按需编译，启动和热更新比传统打包器更快；生产构建默认使用 Rollup。

## 常用命令

```bash
npm create vite@latest my-app
npm run dev
npm run build
npm run preview
```

## 配置示例

```js
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  build: {
    sourcemap: true,
  },
});
```

## 依赖预构建

Vite 会把 CommonJS/UMD 依赖预构建为 ESM，缓存在 `node_modules/.vite`；依赖变更或配置调整后可执行 `rm -rf node_modules/.vite` 强制重建。

## 环境变量

以 `VITE_` 开头的变量会暴露给客户端：

```bash
VITE_API_BASE=https://api.example.com
```

```js
console.log(import.meta.env.VITE_API_BASE);
```
