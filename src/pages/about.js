import React from "react";
import Layout from "@theme/Layout";
import styles from "./about.module.css";

const links = [
  { label: "GitHub", href: "https://github.com/Dnevend" },
  { label: "Twitter", href: "https://twitter.com/Dnevend_09" },
  { label: "即刻", href: "https://okjk.co/YFO95r" },
  { label: "留言", href: "https://tally.so/r/nPBJRe" },
  { label: "RSS", href: "/blog/rss.xml" },
];

export default function About() {
  return (
    <Layout title="关于" description="关于 Dnevend 与小学後生">
      <main className={styles.about}>
        <div className={styles.inner}>
          <header className={styles.header}>
            <span className={styles.eyebrow}>ABOUT</span>
            <h1 className={styles.title}>关于</h1>
            <p className={styles.lead}>
              我是 Dnevend，一名 Full Stack Developer。这里记录技术、阅读，以及一些还没想清楚的问题。
            </p>
          </header>

          <div className={styles.grid}>
            <section className={styles.bio}>
              <h2 className={styles.sectionTitle}>这个站点</h2>
              <p>
                「小学後生」是我的个人站点，用 Docusaurus 搭建。博客持续更新；Wiki 与
                Mark 已经归档，只作留存。
              </p>
              <p>
                写的东西大多围绕前端工程、链上应用与 AI
                工具，也会记录把日常小问题做成工具的过程。
              </p>
              <p>
                如果这里某篇文章对你有用，或者你想聊聊，欢迎随时找我。
              </p>
            </section>

            <aside className={styles.panel}>
              <h2 className={styles.panelTitle}>找到我</h2>
              <ul className={styles.links}>
                {links.map((link) => (
                  <li key={link.label}>
                    <a className={styles.link} href={link.href}>
                      <span>{link.label}</span>
                      <span className={styles.linkArrow} aria-hidden="true">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </main>
    </Layout>
  );
}
