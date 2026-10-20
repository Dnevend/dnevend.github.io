// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

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
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
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
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-JWBWXN9RCT',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'mark',
        path: 'mark',
        routeBasePath: 'mark',
        sidebarPath: require.resolve('./sidebars.mark.js'),
      },
    ],
    // 首页博客列表数据：直接复用博客插件的 frontMatter，构建时生成全局数据
    './plugins/blog-home-data',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 站点分享卡片（OpenGraph / Twitter）
      image: 'img/social-card.jpg',
      navbar: {
        title: 'Dnevend',
        // logo: {
        //   alt: 'Avatar',
        //   src: 'img/avatar.webp',
        //   width: 32,
        //   height: 32
        // },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'wikiSidebar',
            position: 'left',
            label: 'Wiki',
          },
          {
            type: 'docSidebar',
            sidebarId: 'markSidebar',
            label: 'Mark',
            position: 'left',
            docsPluginId: 'mark'
          },
          { to: '/blog', label: 'Blog', position: 'left' },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'More',
            items: [
              {
                label: '友链',
                to: '/friend-links',
              },
              {
                label: '留言',
                href: 'https://tally.so/r/nPBJRe'
              },
              {
                label: 'RSS',
                href: 'https://dnevend.site/blog/rss.xml'
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
