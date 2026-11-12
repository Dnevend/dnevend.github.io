const fs = require("fs");
const path = require("path");

/**
 * React 18 在 SSR 的文本 chunk 边界会写入 NUL 字节（React #26228，已在 React 19 修复，
 * 未回填 18.x）。NUL 不是合法 HTML 字符，部分解析器/爬虫会截断页面。
 * 这里在构建结束后统一从 HTML 中移除 NUL，恢复被拆开的中文文本。
 */
module.exports = function stripNulHtmlPlugin() {
  return {
    name: "strip-nul-html",

    async postBuild({ outDir }) {
      let files = 0;
      let removed = 0;

      const walk = (dir) => {
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
          const filePath = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            walk(filePath);
            continue;
          }
          if (!entry.isFile() || !filePath.endsWith(".html")) {
            continue;
          }

          const buffer = fs.readFileSync(filePath);
          const nulCount = buffer.filter((byte) => byte === 0).length;
          if (nulCount === 0) {
            continue;
          }

          fs.writeFileSync(filePath, buffer.filter((byte) => byte !== 0));
          files += 1;
          removed += nulCount;
        }
      };

      walk(outDir);

      if (files > 0) {
        console.log(
          `[strip-nul-html] 已从 ${files} 个 HTML 文件移除 ${removed} 个 NUL 字节`,
        );
      }
    },
  };
};
