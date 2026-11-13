import React from "react";
import { useLocation } from "@docusaurus/router";
import Original from "@theme-original/TOC";
import BlogTOC from "./BlogTOC";

export default function TOCWrapper(props) {
  const { pathname } = useLocation();
  const isBlogPost =
    pathname.startsWith("/blog/") &&
    !/^\/blog\/(tags|archive|authors)(\/|$)/.test(pathname);

  if (!isBlogPost) {
    return <Original {...props} />;
  }

  return <BlogTOC {...props} />;
}
