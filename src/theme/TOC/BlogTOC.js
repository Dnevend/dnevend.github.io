import React from "react";
import clsx from "clsx";
import TOCItems from "@theme/TOCItems";
import styles from "./styles.module.css";

// Keep Docusaurus' class names so the built-in scroll-spy can still
// add the active class.
const LINK_CLASS_NAME = "table-of-contents__link toc-highlight";
const LINK_ACTIVE_CLASS_NAME = "table-of-contents__link--active";

export default function BlogTOC({ className, ...props }) {
  return (
    <nav
      className={clsx(styles.toc, "thin-scrollbar", className)}
      aria-labelledby="blog-toc-title"
    >
      <p id="blog-toc-title" className={styles.title}>
        CONTENTS
      </p>
      <TOCItems
        {...props}
        linkClassName={LINK_CLASS_NAME}
        linkActiveClassName={LINK_ACTIVE_CLASS_NAME}
      />
    </nav>
  );
}
