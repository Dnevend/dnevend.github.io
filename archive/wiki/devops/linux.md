---
sidebar_position: 1
tags: [devops, linux]
---

# Linux

## 目录

### 常用系统文件目录

| 目录           | 语义                   | 描述                                              |
| :------------- | :--------------------- | :------------------------------------------------ |
| /root          | Root Directories       | 系统管理员的主目录                                |
| /home/username | Home Directories       | 普通用户的主目录                                  |
| /bin           | User Binaries          | 供所有用户使用的完成 `基本维护任务的命令`         |
| /sbin          | System Binaries        | 存放系统管理员使用的`管理程序命令`                |
| /lib           | System Libraries       | 系统最基本的 `共享链接库和内核模块`               |
| /etc           | Configuration Files    | 系统和应用软件的 `配置文件`                       |
| /tmp           | Temporary Files        | 临时文件的存放目录                                |
| /proc          | Process Information    | 虚拟文件系统                                      |
| /var           | Variable Files         | 存放在系统 `运行时可能会更改的数据`               |
| /usr           | Unix Software Resource | Unix 操作系统软件资源所放置的目录，而非用户的数据 |

> /usr 不是 user 的缩写，其实 usr 是 Unix Software Resource，也就是 Unix 操作系统软件资源所放置的目录，而非用户的数据；所有系统默认的软件都会放置到 /usr，系统安装完时，这个目录会占用最多的硬盘容量。

| 目录         | 描述                                                         |
| :----------- | :----------------------------------------------------------- |
| /usr/bin     | 用户需要执行的命令，例如压缩、文件查找、客户端等程序         |
| /usr/sbin    | 系统运行不必须的命令，例如服务端程序、用户管理等程序         |
| /usr/include | C / C++ 头文件                                               |
| /usr/lib     | 普通用户使用的库文件                                         |
| /usr/local   | 个人安装的软件，通常需要手动指定；与 /usr 目录的目录结构相似 |

### 其他文件目录

| 目录        | 语义                 | 描述                                       |
| :---------- | :------------------- | :----------------------------------------- |
| /boot       | Boot Loader Files    | 启动 Linux 时的核心文件                    |
| /dev        | Device Files         | 所有 Linux 的外围设备                      |
| /lost+found |                      | 无家可归文件的避难所                       |
| /mnt        | Mount Directory      | 空目录，用于提供给用户临时挂接别的文件系统 |
| /opt        | Optional add-on Apps | 第三方工具使用的安装目录                   |
| /srv        | Service Data         |                                            |
| /media      | Removable Devices    |                                            |

### 虚拟文件系统

/proc 目录挂载了一个虚拟文件系统，以虚拟文件的形式映射系统与进程在内存中的运行时信息。

### 数据文件系统

/var 目录存放数据文件，如程序数据、日志等；但线上通常只将日志放在 /var 目录。

## 文件权限

TODO:

## 进程

TODO:

## 软件包

TODO:

## 防火墙

### 基本操作

```bash
# 添加
firewall-cmd --zone=public --add-port=80/tcp --permanent （--permanent 永久生效，没有此参数重启后失效）

# 重新载入
firewall-cmd --reload

# 查看
firewall-cmd --zone=public --query-port=80/tcp

# 删除
firewall-cmd --zone=public --remove-port=80/tcp --permanent

```
