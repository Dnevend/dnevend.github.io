import React, { useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function BlogPostSkeleton() {
  return (
    <div className={styles.blogPost}>
      <div className={clsx(styles.blogPostLink, styles.skeleton)}>
        <div className={styles.blogPostContent}>
          <div
            className={clsx(styles.blogPostTitle, styles.skeletonText)}
          ></div>
          <div
            className={clsx(styles.blogPostDescription, styles.skeletonText)}
          ></div>
          <div className={styles.blogPostMeta}>
            <div
              className={clsx(styles.blogPostDate, styles.skeletonText)}
            ></div>
            <div className={styles.blogPostTags}>
              <div
                className={clsx(styles.blogPostTag, styles.skeletonText)}
              ></div>
              <div
                className={clsx(styles.blogPostTag, styles.skeletonText)}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BlogList() {
  const { siteConfig } = useDocusaurusContext();
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  // 确保组件在客户端渲染
  useEffect(() => {
    setIsClient(true);
  }, []);

  // 在客户端获取博客数据
  useEffect(() => {
    if (!isClient) return;

    const fetchBlogPosts = async () => {
      try {
        // 从静态 JSON 文件获取博客数据
        const response = await fetch("/blog-posts.json");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const posts = await response.json();

        // 验证数据格式
        if (!Array.isArray(posts)) {
          throw new Error("Invalid data format: expected array");
        }

        // 过滤和转换数据格式
        const formattedPosts = posts
          .filter((post) => post && post.permalink) // 确保有必要的字段
          .map((post) => ({
            ...post,
            tags: Array.isArray(post.tags)
              ? post.tags.map((tag) => ({
                  label: typeof tag === "string" ? tag : tag.label,
                }))
              : [],
          }));

        setBlogPosts(formattedPosts);

        // 开发环境下打印调试信息
        if (process.env.NODE_ENV === "development") {
          console.log("Blog posts loaded:", formattedPosts);
        }
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
        // 降级到空数组
        setBlogPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogPosts();
  }, [isClient]);

  // 获取最近的6篇文章，按日期排序
  const recentPosts = blogPosts
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);

  // 如果还在加载中，显示骨架屏
  if (isLoading) {
    return (
      <section className={styles.blogList}>
        <div className={styles.blogListHeader}>
          <h2 className={styles.blogListTitle}>最新文章</h2>
          <Link to="/blog" className={styles.viewAllLink}>
            查看全部
          </Link>
        </div>

        <div className={styles.blogPosts}>
          {[...Array(3)].map((_, index) => (
            <BlogPostSkeleton key={index} />
          ))}
        </div>
      </section>
    );
  }

  // 如果没有博客文章
  if (recentPosts.length === 0) {
    return (
      <section className={styles.blogList}>
        <div className={styles.blogListHeader}>
          <h2 className={styles.blogListTitle}>最新文章</h2>
          <Link to="/blog" className={styles.viewAllLink}>
            查看全部
          </Link>
        </div>

        <div className={styles.emptyState}>
          <p>暂无博客文章</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.blogList}>
      <div className={styles.blogListHeader}>
        <h2 className={styles.blogListTitle}>最新文章</h2>
        <Link to="/blog" className={styles.viewAllLink}>
          查看全部
        </Link>
      </div>

      <div className={styles.blogPosts}>
        {recentPosts.map((post) => {
          // 确保文章数据存在
          if (!post || !post.permalink) {
            return null;
          }

          return (
            <div key={post.permalink} className={styles.blogPost}>
              <Link to={post.permalink} className={styles.blogPostLink}>
                <div className={styles.blogPostContent}>
                  <h3 className={styles.blogPostTitle}>
                    {post.title || "无标题"}
                  </h3>
                  <p className={styles.blogPostDescription}>
                    {post.description || ""}
                  </p>
                  <div className={styles.blogPostMeta}>
                    <time className={styles.blogPostDate}>
                      {post.date
                        ? new Date(post.date).toLocaleDateString("zh-CN")
                        : "未知日期"}
                    </time>
                    <div className={styles.blogPostTags}>
                      {post.tags &&
                        post.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className={styles.blogPostTag}>
                            {tag.label || tag}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
