# Fonts

- `noto-serif-sc-subset.woff2`：Noto Serif SC 的可变字重子集（wght 200–900），作为 `--font-serif` 的兜底字体。
- 字体栈优先使用设备原生字体（Kai / Songti SC / SimSun 等），只有设备没有可用的中文衬线字体时才加载该子集。
- 上游字体：<https://github.com/google/fonts/tree/main/ofl/notoserifsc>
- 授权：SIL Open Font License 1.1，完整文本见 `NotoSerifSC-OFL.txt`。

子集只包含当前衬线展示文案所需的字符（站点标题、摘录、About / Archive 标题、年份数字等）。如果这些文案增加生僻字，需要重新生成字体子集。

## 重新生成

1. 下载上游可变字体 `NotoSerifSC[wght].ttf`。
2. 将展示文案中出现的字符写入 `serif-chars.txt`。
3. 安装 `fonttools` 和 `brotli` 后执行：

```bash
pyftsubset "NotoSerifSC[wght].ttf" \
  --text-file=serif-chars.txt \
  --flavor=woff2 \
  --output-file=static/fonts/noto-serif-sc-subset.woff2 \
  --layout-features='*' \
  --no-hinting
```
