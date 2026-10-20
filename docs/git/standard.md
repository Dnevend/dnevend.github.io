---
sidebar_position: 2
tags: [git, standard]
---

# 提交规范

## 说明

每次提交时应该包含针对某一功能或场景的`原子性`修改内容. 避免无意义的保存和无效的 Message 内容.

有效的 Message 应该包含此次提交的类型和内容简介. 内容应清晰明了, 在回溯时能够见 Message 知内容.

规范的 Message 可以通过脚本帮助生成每次版本发布时的 ChangeLog.

## 规范

每条提交消息由标头、正文和页脚组成。

- header 是强制性的, 必须符合[Commit Message Header](#commit-message-header)格式.

- body 对于除“docs”类型之外的所有提交都是强制性的.

- footer 可选.

```
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

### Commit Message Header

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ 用现在时进行总结。 没有大写。 末尾没有句号。
  │       │
  │       └─⫸ 影响范围: animations|bazel|benchpress|common|compiler|compiler-cli|core|
  │                          elements|forms|http|language-service|localize|platform-browser|
  │                          platform-browser-dynamic|platform-server|router|service-worker|
  │                          upgrade|zone.js|packaging|changelog|docs-infra|migrations|
  │                          devtools
  │
  └─⫸ 提交类型: feat|fix|docs|style|refactor|test|chore
```

#### type 提交类型

- feat：新功能（feature）
- fix：修补 bug
- docs：文档（documentation）
- style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动

#### scope 影响范围

scope 用于说明 commit 影响的范围，比如数据层、控制层、视图层或某个模块的修改等等，视项目不同而不同.

#### short summary

对此次提交内容简单的描述.

### Commit Message Body

Body 部分是对本次 commit 的详细描述，可以分成多行.

### Commit Message Footer

TODO:

## 生成 Change Log

TODO:

## 引用参考

- [Commit message 和 Change log 编写指南](https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
- [Commit Message Format](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit)
