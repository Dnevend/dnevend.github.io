// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

// 搜索引擎站点验证 token（留空则不输出对应 meta）。
// Google: https://search.google.com/search-console -> 添加资源 -> HTML 标记
// Bing:   https://www.bing.com/webmasters -> 添加站点 -> 验证 -> HTML 标记
const SITE_VERIFICATION = {
  google: '',
  bing: '',
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '小学後生',
  titleDelimiter: '·',
  tagline: '在战争中学习战争',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://dnevend.site',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // 线上 nginx 会把无尾斜杠 URL 301 到带尾斜杠版本。
  // 统一构建产物、canonical、sitemap 与内链的形态，避免全站 URL 指到 301。
  trailingSlash: true,

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'archive/wiki',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          showLastUpdateTime: true,
          blogTitle: '文章',
          blogDescription: '小学後生的技术随笔：前端、区块链、AI 与工具实践。',
          blogSidebarTitle: '全部文章',
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: 'all',
            title: '小学後生',
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          }
        },
        sitemap: {
          // 用 git 历史生成 lastmod；部署工作流需 fetch-depth: 0
          lastmod: 'date',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'mark',
        path: 'archive/mark',
        routeBasePath: 'mark',
        sidebarPath: require.resolve('./sidebars.mark.js'),
      },
    ],
    // 首页博客列表数据：直接复用博客插件的 frontMatter，构建时生成全局数据
    './plugins/blog-home-data',
    // 清除 React 18 SSR 在中文文本 chunk 边界写入的 NUL 字节
    './plugins/strip-nul-html',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 站点分享卡片（OpenGraph / Twitter）
      image: 'img/social-card.webp',
      metadata: [
        ...(SITE_VERIFICATION.google
          ? [{ name: 'google-site-verification', content: SITE_VERIFICATION.google }]
          : []),
        ...(SITE_VERIFICATION.bing
          ? [{ name: 'msvalidate.01', content: SITE_VERIFICATION.bing }]
          : []),
      ],
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        // title: 'Dnevend',
        logo: {
          alt: '小学後生',
          src: 'img/logo.png',
          width: 32,
          height: 32,
        },
        items: [
          { to: '/blog', label: 'Blog', zh: '文章', position: 'left' },
          { to: '/projects', label: 'Projects', zh: '项目', position: 'left' },
          {
            type: 'dropdown',
            label: 'Archive',
            zh: '归档',
            position: 'left',
            to: '/archive',
            items: [
              { label: 'Overview', zh: '总览', to: '/archive' },
              { label: 'Wiki', zh: '知识库', to: '/docs/intro' },
              { label: 'Mark', zh: '记录', to: '/mark/mind-sentence' },
            ],
          },
          { to: '/about', label: 'About', zh: '关于我', position: 'left' },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'More',
            items: [
              {
                label: '关于',
                to: '/about',
              },
              {
                label: '项目',
                to: '/projects',
              },
              {
                label: '留言',
                href: 'https://tally.so/r/nPBJRe'
              }
            ],
          },
          {
            title: 'Accounts',
            items: [
              {
                label: '即刻',
                href: 'https://okjk.co/YFO95r'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Dnevend_09',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Dnevend',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Dnevend. Built with Docusaurus.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        additionalLanguages: ['bash', 'diff', 'json'],
      },
    }),
};

module.exports = config;
