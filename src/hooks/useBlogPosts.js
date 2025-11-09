import React from 'react';

// 导入自动生成的博客数据
import { blogPostsData as generatedBlogData } from './blogPostsData.js';

// 如果自动生成的数据为空，使用备用的静态数据
const blogPostsData = generatedBlogData.length > 0 ? generatedBlogData : [
  {
    title: '多么痛的领悟',
    description: '总结一下那些在二级市场不断受到的教训，现在学费交的差不多了，准备夺回属于我的一切',
    permalink: '/blog/trading-thinking',
    date: '2025-11-08',
    tags: [{ label: 'Crypto' }, { label: 'Trading' }],
    readingTime: '5 min read'
  },
  {
    title: '为革命保护"视"力',
    description: '如何优雅的在推特上冲浪（摸鱼），由此为开端开发一款浏览器插件',
    permalink: '/blog/attention-and-extension',
    date: '2024-10-28',
    tags: [{ label: 'extension' }],
    readingTime: '8 min read'
  },
  {
    title: 'Telegram 支付机器人开发小记',
    description: '基于Grammy框架的 Telegram Bot 支付机器人（TON、Star）开发小记',
    permalink: '/blog/tg-payment-guide',
    date: '2024-08-01',
    tags: [{ label: 'Telegram BOT' }, { label: 'Telegram Stars' }, { label: 'TON' }],
    readingTime: '10 min read'
  },
  {
    title: '视差滚动实践',
    description: '视差滚动是一种在网页设计和视频游戏中常见的视觉效果技术，它通过在不同速度上移动页面或屏幕上的多层图像，创造出深度感和动感。',
    permalink: '/blog/parallax-scrolling-effect',
    date: '2024-07-01',
    tags: [{ label: 'frontend' }, { label: 'css' }],
    readingTime: '6 min read'
  },
  {
    title: '移动端调试指南',
    description: '使用 `chrome://inspect` 和 `whistle` 进行移动端调试',
    permalink: '/blog/debug-mobile-web',
    date: '2024-06-01',
    tags: [{ label: 'tech' }],
    readingTime: '7 min read'
  }
];

/**
 * 自定义Hook：获取博客文章数据并格式化
 * 支持SSG，在构建时预渲染数据
 * 使用自动生成的博客数据，确保数据与实际文章保持同步
 */
export function useBlogPosts(limit = 6) {
  // 使用自动生成的数据，避免客户端请求
  const posts = React.useMemo(() => {
    return blogPostsData
      .slice(0, limit)
      .map((post) => ({
        ...post,
        tags: Array.isArray(post.tags)
          ? post.tags.map((tag) => ({ label: tag.label }))
          : [],
      }));
  }, [limit]);

  return {
    posts,
    isLoading: false, // 使用静态数据，无需加载状态
    error: null,
  };
}