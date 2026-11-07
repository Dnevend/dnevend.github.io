import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import BlogList from "@site/src/components/BlogList";
import { TAGLINE } from "@site/src/constants/tagline";
import styles from "./index.module.css";
import ZhanXiFuChangLiu from "../../static/img/zxfcl.png";
import YunWoYiShangLeng from "../../static/img/ywysl.png";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>{TAGLINE}</p>
      </div>

      <img src={ZhanXiFuChangLiu} alt="展席俯長流" className={styles.zxfcl} />
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Welcome"
      description="在战争中学习战争"
      wrapperClassName="homepage-wrapper"
    >
      <HomepageHeader />
      <main>
        <BlogList />
        <img src={YunWoYiShangLeng} alt="雲臥衣裳冷" className={styles.ywysl} />
      </main>
    </Layout>
  );
}
