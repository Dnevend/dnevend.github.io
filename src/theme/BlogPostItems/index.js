import React from "react";
import Original from "@theme-original/BlogPostItems";
import { useLocation } from "@docusaurus/router";

/**
 * Docusaurus 的博客列表页默认没有 h1，这里只在 /blog/ 列表页补一个；
 * 标签页、作者页有自己的 h1，不重复添加。
 */
export default function BlogPostItemsWrapper(props) {
  const { pathname } = useLocation();
  const isBlogList = pathname === "/blog/" || pathname === "/blog";

  return (
    <>
      {isBlogList && (
        <header className="margin-bottom--lg">
          <h1>文章</h1>
        </header>
      )}
      <Original {...props} />
    </>
  );
}
