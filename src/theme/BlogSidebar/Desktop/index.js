import React, { memo } from "react";
import clsx from "clsx";
import {
  useVisibleBlogSidebarItems,
  BlogSidebarItemList,
} from "@docusaurus/plugin-content-blog/client";
import BlogSidebarContent from "@theme/BlogSidebar/Content";
import styles from "./styles.module.css";

const ListComponent = ({ items }) => {
  return (
    <BlogSidebarItemList
      items={items}
      ulClassName={clsx(styles.list, "clean-list")}
      liClassName={styles.item}
      linkClassName={styles.link}
      linkActiveClassName={styles.linkActive}
    />
  );
};

function BlogSidebarDesktop({ sidebar }) {
  const items = useVisibleBlogSidebarItems(sidebar.items);

  return (
    <aside className="col col--3">
      <nav
        className={clsx(styles.sidebar, "thin-scrollbar")}
        aria-label={sidebar.title}
      >
        <div className={styles.title}>{sidebar.title}</div>
        <BlogSidebarContent
          items={items}
          ListComponent={ListComponent}
          yearGroupHeadingClassName={styles.yearGroupHeading}
        />
      </nav>
    </aside>
  );
}

export default memo(BlogSidebarDesktop);
