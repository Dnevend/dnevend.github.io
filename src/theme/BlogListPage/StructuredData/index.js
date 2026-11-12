import React from "react";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useBlogListPageStructuredData } from "@docusaurus/plugin-content-blog/client";

function withTrailingSlash(url, siteUrl) {
  if (typeof url !== "string" || !url.startsWith(`${siteUrl}/`)) {
    return url;
  }
  return url.replace(/\/?$/, "/");
}

function normalizePost(post, siteUrl) {
  return {
    ...post,
    "@id": withTrailingSlash(post["@id"], siteUrl),
    url: withTrailingSlash(post.url, siteUrl),
    mainEntityOfPage: withTrailingSlash(post.mainEntityOfPage, siteUrl),
    ...(post.isPartOf
      ? {
          isPartOf: {
            ...post.isPartOf,
            "@id": withTrailingSlash(post.isPartOf["@id"], siteUrl),
          },
        }
      : {}),
  };
}

/**
 * Docusaurus 默认用 metadata.permalink 生成博客列表的 Blog/BlogPosting url，
 * 该值不带尾斜杠；这里统一成与 canonical/sitemap 一致的形态。
 */
export default function BlogListPageStructuredData(props) {
  const { siteConfig } = useDocusaurusContext();
  const structuredData = useBlogListPageStructuredData(props);

  const normalized = {
    ...structuredData,
    "@id": withTrailingSlash(structuredData["@id"], siteConfig.url),
    mainEntityOfPage: withTrailingSlash(
      structuredData.mainEntityOfPage,
      siteConfig.url,
    ),
    blogPost: structuredData.blogPost.map((post) =>
      normalizePost(post, siteConfig.url),
    ),
  };

  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(normalized)}</script>
    </Head>
  );
}
