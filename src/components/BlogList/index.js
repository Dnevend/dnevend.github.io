import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import { useBlogPosts } from "@site/src/hooks/useBlogPosts";
import Head from "@docusaurus/Head";

// 简化的骨架屏组件 - 仅在开发环境使用
function BlogPostSkeleton() {
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

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
  // 使用SSG优化的Hook获取博客数据
  const { posts, isLoading, error } = useBlogPosts(6);

  // 开发环境下的错误处理
  React.useEffect(() => {
    if (error && process.env.NODE_ENV === "development") {
      console.error("Blog posts error:", error);
    }
  }, [error]);

  // 生成结构化数据
  const structuredData = React.useMemo(() => {
    if (posts.length === 0) return null;

    return {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "最新文章 - 小学後生",
      "description": "最新发布的技术博客文章",
      "url": "https://dnevend.site",
      "blogPost": posts.slice(0, 6).map((post) => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.description,
        "url": `https://dnevend.site${post.permalink}`,
        "datePublished": post.date,
        "author": {
          "@type": "Person",
          "name": "小学后生"
        },
        "publisher": {
          "@type": "Organization",
          "name": "小学後生",
          "logo": {
            "@type": "ImageObject",
            "url": "https://dnevend.site/img/logo.svg"
          }
        },
        "keywords": post.tags?.map((tag) => tag.label).join(", ") || "",
        "inLanguage": "zh-CN"
      }))
    };
  }, [posts]);

  // 开发环境下显示加载状态
  if (isLoading && process.env.NODE_ENV === "development") {
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
  if (posts.length === 0) {
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
    <>
      {/* SEO和结构化数据 */}
      {structuredData && (
        <Head>
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
          <meta name="description" content="最新发布的技术博客文章 - 小学後生的个人技术博客" />
          <meta property="og:title" content="最新文章 - 小学後生" />
          <meta property="og:description" content="最新发布的技术博客文章" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://dnevend.site" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="最新文章 - 小学後生" />
          <meta name="twitter:description" content="最新发布的技术博客文章" />
        </Head>
      )}

      <section className={styles.blogList}>
        <div className={styles.blogListHeader}>
          <h2 className={styles.blogListTitle}>最新文章</h2>
          <Link to="/blog" className={styles.viewAllLink}>
            查看全部
          </Link>
        </div>

        <div className={styles.blogPosts}>
        {posts.map((post) => {
          // 确保文章数据存在
          if (!post || !post.permalink) {
            return null;
          }

          return (
            <article key={post.permalink} className={styles.blogPost}>
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
            </article>
          );
        })}
      </div>
      </section>
    </>
  );
}
