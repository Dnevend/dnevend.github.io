import {usePluginData} from '@docusaurus/useGlobalData';

/**
 * 获取首页「最新文章」列表。
 *
 * 数据来源：plugins/blog-home-data 的 allContentLoaded()。
 * 为什么不用 useAllPluginInstancesData('docusaurus-plugin-content-blog')：
 * 博客插件在 contentLoaded 里只建路由、不 setGlobalData，
 * 客户端拿不到跨插件的聚合数据；而且那样只能拿到前端序列化后的片段。
 * 用插件在构建期 setGlobalData，首页静态产出就是真实文章，
 * 同时保留 BlogList 里的 JSON-LD 结构化数据。
 *
 * @param {number} limit 返回条数上限
 */
export function useBlogPosts(limit = 6) {
  const posts = usePluginData('blog-home-data') ?? [];
  return posts.slice(0, limit);
}
