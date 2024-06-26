---
sidebar_position: 3
tags: [vim, linux]
---

# vim

基本上 vi/vim 共分为三种模式，命令模式（Command Mode）、输入模式（Insert Mode）和命令行模式（Command-Line Mode）。

## 命令模式

用户刚刚启动 vi/vim，便进入了命令模式。
此状态下敲击键盘动作会被 Vim 识别为命令，而非输入字符，比如我们此时按下 i，并不会输入一个字符，i 被当作了一个命令。
以下是普通模式常用的几个命令：

|   命令    | 介绍                                         |
| :-------: | :------------------------------------------- |
|     i     | 切换到输入模式，在光标当前位置开始输入文本。 |
|     x     | 删除当前光标所在处的字符。                   |
|     :     | 切换到底线命令模式，以在最底一行输入命令。   |
|     a     | 进入插入模式，在光标下一个位置开始输入文本。 |
|     o     | 在当前行的下方插入一个新行，并进入插入模式。 |
|     O     | 在当前行的上方插入一个新行，并进入插入模式。 |
|    dd     | 删除当前行。                                 |
|    yy     | 复制当前行。                                 |
| p（小写） | 粘贴剪贴板内容到光标下方。                   |
| P（大写） | 粘贴剪贴板内容到光标上方。                   |
|     u     | 撤销上一次操作。                             |
| Ctrl + r  | 重做上一次撤销的操作。                       |
|           |                                              |

## 输入模式

在命令模式下按下 i 就进入了输入模式，使用 Esc 键可以返回到普通模式。

## 命令行模式

在命令模式下按下 `:`（英文冒号）就进入了底线命令模式。

底线命令模式可以输入单个或多个字符的命令，可用的命令非常多。

| 命令 | 介绍                              |
| :--: | :-------------------------------- |
|  :w  | 保存文件。                        |
|  :q  | 退出 Vim 编辑器。                 |
| :wq  | 保存文件并退出 Vim 编辑器。       |
| :q!  | 强制退出 Vim 编辑器，不保存修改。 |
