import React from "react";
import Content from "@theme-original/DocItem/Content";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";

export default function DocItemContentWrapper(props) {
  const { pathname } = useLocation();
  const isArchived = /^\/(docs|mark)(\/|$)/.test(pathname);

  return (
    <>
      {isArchived && (
        <aside className="archive-notice" role="note">
          <span className="archive-notice__badge">已归档</span>
          <span>
            此页面已停止维护，部分内容可能过时。最新内容请见{" "}
            <Link to="/blog">博客</Link>。
          </span>
        </aside>
      )}
      <Content {...props} />
    </>
  );
}
