# Fonts

- `noto-serif-sc-subset.woff2`：Noto Serif SC 的可变字重子集（wght 200–900），作为 `--font-serif` 的最后一级兜底。
- 字体栈优先使用设备原生字体（Kai / Songti SC / SimSun 等），只有设备没有可用的中文衬线字体时才加载该子集。
- 上游字体：<https://github.com/google/fonts/tree/main/ofl/notoserifsc>
- 授权：SIL Open Font License 1.1，完整文本见 `NotoSerifSC-OFL.txt`。

## 字符从哪里来

子集只包含站点里真正以衬线渲染的文案。所有使用 `var(--font-serif)` 的元素都带 `data-serif` 标记（首页标题、About / Archive / Projects 标题、项目标题、文章列表年份、页脚引言），`scripts/serif_chars.py` 会扫描 `build/` 中这些元素的文字，把字符写入 `scripts/serif-chars.txt`。

`serif-chars.txt` 由脚本生成，不要手改。

## 重新生成

```bash
yarn build
./scripts/build-serif-subset.sh
```

脚本会：

1. 从 `build/` 收集衬线字符，重写 `scripts/serif-chars.txt`；
2. 首次运行时下载上游 `NotoSerifSC[wght].ttf` 到 `scripts/.cache/`（不提交）；
3. 用 `pyftsubset` 生成 `static/fonts/noto-serif-sc-subset.woff2`；
4. 校验字体覆盖了字符表中的全部字符。

依赖 `uv`（推荐，无需手动装 Python 包）或 `fonttools` + `brotli`，以及 `curl`。

## 校验

检查构建产物里的衬线文字是否都已被字体覆盖：

```bash
python3 scripts/serif_chars.py --verify-font
```

`--verify-font` 需要 `fontTools`；没有安装时可以用 `uvx --from fonttools --with brotli python scripts/serif_chars.py --verify-font`。CI 的 `deploy` / `test-deploy` 工作流会执行同一检查，新增或修改衬线文案后如果忘记重新生成，构建会直接失败。

## 注意

- 新增衬线元素时记得加 `data-serif`，否则检查不会收集它的文字。
- 项目标题来自 `src/data/projects.js`；新增项目后按上面的流程重新生成即可。
