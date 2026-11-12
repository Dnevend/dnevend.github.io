import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import { useBlogPosts } from "@site/src/hooks/useBlogPosts";

function getPostYear(date) {
  const match = typeof date === "string" ? date.match(/^(\d{4})-\d{2}-\d{2}/) : null;
  return match ? match[1] : "未知年份";
}

function formatPostDay(date) {
  const match =
    typeof date === "string" ? date.match(/^\d{4}-(\d{2})-(\d{2})/) : null;
  return match ? `${match[1]}.${match[2]}` : "—";
}

export default function BlogList() {
  // 数据来自 plugins/blog-home-data 全局数据，构建时与博客插件保持一致
  const posts = useBlogPosts(6);

  // 按年份分组，保持文章原有的时间倒序
  const yearGroups = React.useMemo(() => {
    const groups = [];
    const index = new Map();

    posts.forEach((post) => {
      const year = getPostYear(post.date);
      if (!index.has(year)) {
        const group = { year, posts: [] };
        index.set(year, group);
        groups.push(group);
      }
      index.get(year).posts.push(post);
    });

    return groups;
  }, [posts]);

  // 生成结构化数据
  const structuredData = React.useMemo(() => {
    if (posts.length === 0) return null;

    return {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "近期文章 - 小学後生",
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
            "url": "https://dnevend.site/img/logo.png"
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
          <meta property="og:title" content="近期文章 - 小学後生" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://dnevend.site" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="近期文章 - 小学後生" />
        </Head>
      )}

      <section className={styles.blogList}>
        <div className={styles.blogListHeader}>
          <h2 className={styles.blogListTitle}>近期文章</h2>
        </div>

        <div className={styles.timeline}>
          {posts.length === 0 ? (
            <div className={styles.emptyState}>
              <p>暂无博客文章</p>
            </div>
          ) : (
            yearGroups.map(({ year, posts: yearPosts }) => (
              <section
                key={year}
                className={styles.yearGroup}
                aria-labelledby={`year-${year}`}
              >
                <header className={styles.yearMarker}>
                  <h3
                    id={`year-${year}`}
                    className={styles.yearLabel}
                    data-serif="true"
                  >
                    {year}
                  </h3>
                  <span className={styles.yearCount}>
                    {yearPosts.length} 篇
                  </span>
                </header>

                <div className={styles.yearPosts}>
                  {yearPosts.map((post) => (
                    <article key={post.permalink} className={styles.postItem}>
                      <Link to={post.permalink} className={styles.postLink}>
                        <time
                          className={styles.postDate}
                          dateTime={post.date}
                          title={
                            typeof post.date === "string"
                              ? post.date.slice(0, 10)
                              : "未知日期"
                          }
                        >
                          {formatPostDay(post.date)}
                        </time>

                        <div className={styles.postBody}>
                          <h4 className={styles.postTitle}>
                            {post.title || "无标题"}
                          </h4>
                          {post.description && (
                            <p className={styles.postDescription}>
                              {post.description}
                            </p>
                          )}
                          {post.tags && post.tags.length > 0 && (
                            <div className={styles.postTags}>
                              {post.tags.map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className={styles.postTag}
                                >
                                  {tag.label || tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        <span
                          className={styles.postArrow}
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            ))
          )}
        </div>
      </section>
    </>
  );
}
