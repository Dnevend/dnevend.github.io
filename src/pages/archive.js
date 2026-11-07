import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./archive.module.css";

const sections = [
  {
    kicker: "WIKI",
    title: "知识库",
    description:
      "前端、区块链、DevOps、Git 等主题的旧笔记，内容主要停留在 2024 年。",
    to: "/docs/intro",
  },
  {
    kicker: "MARK",
    title: "记录",
    description: "阅读摘录、链接收藏与一些零散想法，最后更新于 2025 年。",
    to: "/mark/2024",
  },
];

export default function Archive() {
  return (
    <Layout title="归档" description="已归档的 Wiki 与 Mark 旧资料">
      <main className={styles.archive}>
        <div className={styles.inner}>
          <header className={styles.header}>
            <span className={styles.eyebrow}>ARCHIVE</span>
            <h1 className={styles.title}>归档</h1>
            <p className={styles.lead}>
              这些内容已停止维护，仅作留存，部分信息可能已经过时。最新文章请见{" "}
              <Link to="/blog">博客</Link>。
            </p>
          </header>

          <div className={styles.cards}>
            {sections.map((section) => (
              <Link
                key={section.kicker}
                to={section.to}
                className={styles.card}
              >
                <span className={styles.cardKicker}>{section.kicker}</span>
                <h2 className={styles.cardTitle}>{section.title}</h2>
                <p className={styles.cardDescription}>{section.description}</p>
                <span className={styles.cardArrow} aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
