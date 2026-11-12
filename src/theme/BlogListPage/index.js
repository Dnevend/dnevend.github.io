import React from "react";
import clsx from "clsx";
import {
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
import SearchMetadata from "@theme/SearchMetadata";
import BlogPostItems from "@theme/BlogPostItems";
import BlogListPaginator from "@theme/BlogListPaginator";
import BlogListPageStructuredData from "@theme/BlogListPage/StructuredData";
import styles from "./styles.module.css";

const BLOG_INTRO = "一些技术折腾、踩坑记录，以及偶尔的胡思乱想。";

export default function BlogListPage(props) {
  const { metadata, items } = props;
  const { blogTitle, blogDescription, totalCount, previousPage, nextPage } =
    metadata;
  const articleCount = totalCount ?? items.length;

  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}
    >
      <Layout title={blogTitle} description={blogDescription}>
        <SearchMetadata tag="blog_posts_list" />
        <BlogListPageStructuredData {...props} />

        <main className={styles.page}>
          <div className={styles.inner}>
            <header className={styles.header}>
              <div className={styles.headerTop}>
                <span className={styles.eyebrow}>BLOG</span>
                <span className={styles.count}>
                  {String(articleCount).padStart(2, "0")} ARTICLES
                </span>
              </div>
              <h1 className={styles.title} data-serif="true">
                {blogTitle}
              </h1>
              <p className={styles.lead}>{BLOG_INTRO}</p>
            </header>

            {items.length === 0 ? (
              <p className={styles.empty}>暂无文章。</p>
            ) : (
              <BlogPostItems items={items} />
            )}

            {(previousPage || nextPage) && (
              <BlogListPaginator metadata={metadata} />
            )}
          </div>
        </main>
      </Layout>
    </HtmlClassNameProvider>
  );
}
