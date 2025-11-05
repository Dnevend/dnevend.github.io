import React, { useState } from "react";
import clsx from "clsx";
// import Link from '@docusaurus/Link';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./index.module.css";
import ZhanXiFuChangLiu from "../../static/img/zxfcl.png";
import YunWoYiShangLeng from "../../static/img/ywysl.png";

const taglines = [
  "你不能搞混两样东西，一是你终将胜利的信念，这是你最输不起的；二是训练自己直面残酷现实，无论现实多残酷。",
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [showTagline] = useState(0);

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>{taglines[showTagline]}</p>
      </div>

      <img src={ZhanXiFuChangLiu} alt="展席俯長流" className={styles.zxfcl} />
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`Welcome`} description="在战争中学习战争">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <img src={YunWoYiShangLeng} alt="雲臥衣裳冷" className={styles.ywysl} />
      </main>
    </Layout>
  );
}
