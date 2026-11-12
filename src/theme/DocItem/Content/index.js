import React from "react";
import Content from "@theme-original/DocItem/Content";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import { useLocation } from "@docusaurus/router";

export default function DocItemContentWrapper(props) {
  const { pathname } = useLocation();
  const { siteConfig } = useDocusaurusContext();
  const { metadata, frontMatter } = useDoc();
  const isArchived = /^\/(docs|mark)(\/|$)/.test(pathname);
  const url = `${siteConfig.url}${metadata.permalink}`.replace(/\/?$/, "/");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": url,
    headline: metadata.title,
    description: metadata.description,
    url,
    mainEntityOfPage: url,
    inLanguage: "zh-Hans",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.title,
      url: `${siteConfig.url}/`,
    },
    author: {
      "@type": "Person",
      name: "小学後生",
      url: `${siteConfig.url}/about/`,
    },
    ...(frontMatter.keywords ? { keywords: frontMatter.keywords } : {}),
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
      {isArchived && (
        <aside className="archive-notice" role="note">
          <span className="archive-notice__badge">已归档</span>
          <span>
            部分页面已停止维护内容可能过时。
          </span>
        </aside>
      )}
      <Content {...props} />
    </>
  );
}
