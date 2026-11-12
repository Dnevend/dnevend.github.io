import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

function getPostYear(date) {
  const match =
    typeof date === "string" ? date.match(/^(\d{4})-\d{2}-\d{2}/) : null;
  return match ? match[1] : "未分类";
}

function formatPostDate(date) {
  const match =
    typeof date === "string" ? date.match(/^(\d{4})-(\d{2})-(\d{2})/) : null;
  return match ? `${match[1]}.${match[2]}.${match[3]}` : "—";
}

function groupByYear(items) {
  const groups = [];
  const index = new Map();

  items.forEach(({ content }) => {
    const year = getPostYear(content.metadata.date);
    if (!index.has(year)) {
      const group = { year, posts: [] };
      index.set(year, group);
      groups.push(group);
    }
    index.get(year).posts.push(content);
  });

  return groups;
}

function PostItem({ metadata, image }) {
  const { permalink, title, description, date, readingTime, tags } = metadata;

  return (
    <Link
      to={permalink}
      className={clsx(styles.item, image && styles.itemWithCover)}
    >
      <div className={styles.itemBody}>
        <div className={styles.itemMeta}>
          <time dateTime={date}>{formatPostDate(date)}</time>
          {typeof readingTime !== "undefined" && (
            <>
              <span className={styles.metaDot} aria-hidden="true" />
              <span>{Math.ceil(readingTime)} 分钟</span>
            </>
          )}
        </div>

        <h3 className={styles.itemTitle}>{title}</h3>

        {description && <p className={styles.itemDescription}>{description}</p>}

        {tags && tags.length > 0 && (
          <div className={styles.itemTags}>
            {tags.map((tag) => (
              <span key={tag.permalink} className={styles.itemTag}>
                {tag.label}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className={styles.itemAside}>
        {image ? (
          <span className={styles.itemCover}>
            <img src={image} alt="" loading="lazy" decoding="async" />
          </span>
        ) : (
          <span className={styles.arrow} aria-hidden="true">
            →
          </span>
        )}
      </div>
    </Link>
  );
}

export default function BlogPostItems({ items }) {
  if (!items.length) {
    return null;
  }

  const groups = groupByYear(items);

  return (
    <div className={styles.timeline}>
      {groups.map(({ year, posts }) => (
        <section
          key={year}
          className={styles.yearGroup}
          aria-labelledby={`blog-year-${year}`}
        >
          <div className={styles.yearHeader}>
            <h2
              id={`blog-year-${year}`}
              className={styles.year}
              data-serif="true"
            >
              {year}
            </h2>
            <span className={styles.yearRule} aria-hidden="true" />
          </div>

          <div className={styles.yearList}>
            {posts.map((content) => (
              <PostItem
                key={content.metadata.permalink}
                metadata={content.metadata}
                image={content.assets?.image}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
