import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import { useBlogPosts } from "@site/src/hooks/useBlogPosts";

export default function BlogList() {
  // 数据来自 plugins/blog-home-data 全局数据，构建时与博客插件保持一致
  const posts = useBlogPosts(6);

  // 生成结构化数据
  const structuredData = React.useMemo(() => {
    if (posts.length === 0) return null;

    return {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "最新文章 - 小学後生",
      "description": "最新发布的技术博客文章",
      "url": "https://dnevend.site",
      "blogPost": posts.map((post) => ({
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
          {posts.length === 0 ? (
            <div className={styles.emptyState}>
              <p>暂无博客文章</p>
            </div>
          ) : (
            posts.map((post) => (
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
            ))
          )}
        </div>
      </section>
    </>
  );
}
