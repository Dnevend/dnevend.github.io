import React from "react";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useBreadcrumbsStructuredData } from "@docusaurus/plugin-content-docs/client";

function withTrailingSlash(url, siteUrl) {
  if (typeof url !== "string" || !url.startsWith(`${siteUrl}/`)) {
    return url;
  }
  return url.replace(/\/?$/, "/");
}

/**
 * 把 docs BreadcrumbList 的 item URL 统一成带尾斜杠形态，
 * 与 canonical / sitemap 保持一致。
 */
export default function DocBreadcrumbsStructuredData(props) {
  const { siteConfig } = useDocusaurusContext();
  const structuredData = useBreadcrumbsStructuredData({
    breadcrumbs: props.breadcrumbs,
  });

  const normalized = {
    ...structuredData,
    itemListElement: structuredData.itemListElement.map((item) => ({
      ...item,
      item: withTrailingSlash(item.item, siteConfig.url),
    })),
  };

  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(normalized)}</script>
    </Head>
  );
}
