---
sidebar_position: 6
tags: [command, linux]
---

# 软件包管理

软件包管理器是方便软件安装、卸载，解决软件依赖关系的重要工具：

- CentOS、RedHat 使用 `yum` 包管理器，软件安装包格式为 `rpm`
- Debian、Ubuntu 使用 `apt` 包管理器，软件安装包格式为 `deb`

rpm 包格式：

```
vim-common-7.4.10-5.el7.x86_64.rpm
```

- `vim-common`：软件名称
- `7.4.10-5`：软件版本
- `el7`：系统版本
- `x86_64`：平台

## rpm

```bash
# 安装 your-package.rpm 包
rpm -ivh your-package.rpm

# 查询当前系统安装的所有软件包
rpm -qa

# 分屏显示
rpm -qa | more

# 卸载软件包 vim-enhanced
rpm -e vim-enhanced
```

## yum

常用选项：

- `install`：安装软件包
- `remove`：卸载软件包
- `list | grouplist`：查看软件包
- `update`：升级软件包

假定你用的是 CentOS，则包管理工具就是 `yum`。
如果你的系统没有 `wget` 命令，就可以使用如下命令进行安装。

```bash
# 使用 yum 安装 wget 命令依赖包
yum install wget -y
```

`yum` 配置文件：`/etc/yum.repos.d/CentOS-Base.repo`

国内开源镜像：[阿里云官方镜像站](https://developer.aliyun.com/mirror/)

## 其他方式安装

- 二进制安装
- 源代码编译安装

```bash
# 下载软件安装包
wget https://openrestry.org/download/openrestry-1.15.8.1.tar.gz

# 解压缩
tar -zxf openrestry-VERSION.tar.gz

# 切换目录
cd openrestry-VERSIOn/

./configure--prefix=/usr/local/openrestry

make -j2

# 把编译好的软件安装到指定目录
make install
```

## man

`man`（`manual` 的缩写）是 Linux 下的帮助命令，通过 `man` 指令可以查看 Linux 中的指令帮助、配置文件帮助和编程帮助等信息。

```bash
# 查看 ls 命令的帮助说明
man ls

# 查看 cd 命令的帮助说明
man cd
```

## help

```bash
# 内部命令使用 help 帮助，查看 cd 命令的帮助
help cd

# 外部命令使用 help 帮助，查看 ls 命令的帮助
ls --help
```

## info

info 帮助比 help 更详细，作为 help 的补充

```bash
# 查看 cd 命令的详细帮助信息
info cd
```
