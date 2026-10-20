// 首页「最新文章」数据源。
// 注意：必须用 allContentLoaded 而不是 contentLoaded——
// contentLoaded 只拿得到本插件自己的 content，
// allContent 里才有其他插件（博客插件）的 loadContent 结果。

module.exports = function blogHomeDataPlugin() {
  return {
    name: 'blog-home-data',

    async allContentLoaded({allContent, actions}) {
      const {setGlobalData} = actions;
      const blogContent =
        allContent?.['docusaurus-plugin-content-blog']?.default ?? {};
      const posts = (blogContent.blogPosts ?? [])
        .filter((p) => !p.metadata.unlisted && !p.metadata.draft)
        .sort(
          (a, b) =>
            new Date(b.metadata.date).getTime() -
            new Date(a.metadata.date).getTime(),
        )
        .map((p) => ({
          title: p.metadata.title,
          description: p.metadata.description ?? '',
          permalink: p.metadata.permalink,
          date: p.metadata.date,
          tags: (p.metadata.tags ?? []).map((t) => ({label: t.label})),
        }));
      setGlobalData(posts);
    },
  };
};
