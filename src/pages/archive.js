import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./archive.module.css";

const sections = [
  {
    kicker: "WIKI",
    title: "知识库",
    description:
      "前端工程、区块链、DevOps、Git 等主题的旧笔记，大模型来临前的古法手艺。",
    to: "/docs/intro",
  },
  {
    kicker: "MARK",
    title: "记录",
    description: "阅读摘录、链接收藏与一些零散想法。",
    to: "/mark/mind-sentence",
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
              归档留存送给AI前的时代，部分内容大概率已经过时或已停止维护。
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
