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
            部分页面已停止维护内容可能过时。
          </span>
        </aside>
      )}
      <Content {...props} />
    </>
  );
}
