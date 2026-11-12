import React from "react";
import Head from "@docusaurus/Head";

/**
 * 给低价值列表页（标签页、归档页、作者页）加 noindex,follow。
 * Docusaurus 的 sitemap 插件会读取 Helmet 的 noindex 并自动排除这些路由。
 */
export default function NoIndex() {
  return (
    <Head>
      <meta name="robots" content="noindex, follow" />
    </Head>
  );
}
