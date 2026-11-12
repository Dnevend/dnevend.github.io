import React from "react";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useBlogPostStructuredData } from "@docusaurus/plugin-content-blog/client";

function withTrailingSlash(url, siteUrl) {
  if (typeof url !== "string" || !url.startsWith(`${siteUrl}/`)) {
    return url;
  }
  return url.replace(/\/?$/, "/");
}

/**
 * Docusaurus 默认用 metadata.permalink 生成 BlogPosting 的 url，
 * 该值不带尾斜杠；这里统一成与 canonical/sitemap 一致的形态。
 */
export default function BlogPostStructuredData() {
  const { siteConfig } = useDocusaurusContext();
  const structuredData = useBlogPostStructuredData();

  const normalized = {
    ...structuredData,
    "@id": withTrailingSlash(structuredData["@id"], siteConfig.url),
    url: withTrailingSlash(structuredData.url, siteConfig.url),
    mainEntityOfPage: withTrailingSlash(
      structuredData.mainEntityOfPage,
      siteConfig.url,
    ),
    ...(structuredData.isPartOf
      ? {
          isPartOf: {
            ...structuredData.isPartOf,
            "@id": withTrailingSlash(
              structuredData.isPartOf["@id"],
              siteConfig.url,
            ),
          },
        }
      : {}),
  };

  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(normalized)}</script>
    </Head>
  );
}
