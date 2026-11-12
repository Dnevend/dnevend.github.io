# Dnevend · 小学後生

你好👋我是小学後生，现位于浙江湖州，一名全栈开发者。关注技术、人文、区块链及前沿AI应用。

[Live Site](https://dnevend.site) · [Blog](https://dnevend.site/blog) · [Projects](https://dnevend.site/projects) · [About](https://dnevend.site/about)

## Preview

**Home**

[![Homepage](.github/assets/readme/home.png)](https://dnevend.site/)

**Projects**

[![Projects](.github/assets/readme/projects.png)](https://dnevend.site/projects)

**About**

[![About](.github/assets/readme/about.png)](https://dnevend.site/about)

## SEO 配置

- **Google Search Console**：在 [Search Console](https://search.google.com/search-console) 添加 `https://dnevend.site/`，选择「HTML 标记」，把 `content` 填入 `docusaurus.config.js` 的 `SITE_VERIFICATION.google`。
- **Bing Webmaster**：在 [Bing Webmaster Tools](https://www.bing.com/webmasters) 添加站点，选择「HTML Meta Tag」，填入 `SITE_VERIFICATION.bing`；也可以直接从 GSC 导入。
- **百度**：`static/baidu_verify_codeva-VLRO6hilpp.html` 已用于验证；到 [百度搜索资源平台](https://ziyuan.baidu.com/sitemap/index) 提交 `https://dnevend.site/sitemap.xml`。主动推送需要在仓库 Secrets 添加 `BAIDU_TOKEN`。
- **IndexNow**：`static/<indexnow-key>.txt` 是 key 文件，部署后会自动提交 sitemap URL；更换 key 时同步修改 `scripts/indexnow.py`。
- **构建后自检**：`python3 scripts/seo_check.py`，检查 sitemap / canonical / robots / noindex / description / NUL / 内链。

## License

The source code is licensed under the [MIT License](./LICENSE).

Blog posts, images, and other written content are © 2026 Dnevend and may not be reproduced without permission.
