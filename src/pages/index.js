import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import BlogList from "@site/src/components/BlogList";
import SocialLinks from "@site/src/components/SocialLinks";
import styles from "./index.module.css";
import ZhanXiFuChangLiu from "../../static/img/zxfcl.png";
import YunWoYiShangLeng from "../../static/img/ywysl.png";

const INTRO_TEXT = "Hi, I'm Dnevend 👋 · 全干开发者";

function useTypewriter(text, speed = 40) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    )?.matches;

    if (prefersReducedMotion) {
      setCount(text.length);
      return undefined;
    }

    setCount(0);
    let index = 0;
    let timer;

    const tick = () => {
      index += 1;
      setCount(index);
      if (index < text.length) {
        timer = window.setTimeout(tick, speed);
      }
    };

    timer = window.setTimeout(tick, 350);
    return () => window.clearTimeout(timer);
  }, [text, speed]);

  return {
    visibleText: text.slice(0, count),
    isTyping: count < text.length,
  };
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { visibleText, isTyping } = useTypewriter(INTRO_TEXT);

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={styles.heroContent}>
        <div className={styles.heroIntro}>
          <span className={styles.heroIntroText}>
            <span className={styles.heroIntroPlaceholder} aria-hidden="true">
              {INTRO_TEXT}
            </span>
            <span className={styles.heroIntroTyped} aria-hidden="true">
              {visibleText}
              {isTyping && <span className={styles.typeCaret} />}
            </span>
          </span>
          <span
            className={clsx(
              styles.heroIntroTail,
              !isTyping && styles.heroIntroTailVisible,
            )}
          >
            <span className={styles.heroIntroDot} aria-hidden="true">
              ·
            </span>
            <Link to="/about" className={styles.heroLink}>
              关于我
              <span aria-hidden="true">→</span>
            </Link>
          </span>
          <span className={styles.srOnly}>Hi, I&apos;m Dnevend，全干开发者。</span>
        </div>

        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>

        <SocialLinks className={styles.heroSocials} />
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
