---
sidebar_position: 2
tags: [devops, docker]
description: "Docker 常用命令与 Compose 编排速查：镜像构建、容器启停、日志排查与数据卷清理。"
---

# Docker

## 常用命令

- `docker ps -a` 查看所有容器
- `docker images` 查看本地镜像
- `docker run -d -p 8080:80 --name web nginx` 启动容器
- `docker logs -f web` 跟踪日志
- `docker exec -it web sh` 进入容器
- `docker stop web` / `docker rm web` 停止并删除容器

## 镜像构建

```Dockerfile
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

```bash
docker build -t my-app .
```

## Compose

```yaml
services:
  web:
    build: .
    ports:
      - "8080:80"
```

```bash
docker compose up -d
docker compose down
```

## 数据与清理

- `docker volume ls` 查看数据卷
- `docker system prune` 清理停止的容器、悬空镜像和构建缓存
