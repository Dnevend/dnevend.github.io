import React from "react";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import Original from "@theme-original/TagsListInline";
import styles from "./styles.module.css";

export default function TagsListInline({ tags }) {
  const { pathname } = useLocation();

  // Keep the default inline-tag markup for docs pages.
  if (!pathname.startsWith("/blog/")) {
    return <Original tags={tags} />;
  }

  return (
    <div className={styles.tagsBlock}>
      <span className={styles.label}>标签</span>
      <ul className={styles.tags}>
        {tags.map((tag) => (
          <li key={tag.permalink} className={styles.tagItem}>
            <Link
              rel="tag"
              to={tag.permalink}
              title={tag.description}
              className={styles.tag}
            >
              {tag.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
