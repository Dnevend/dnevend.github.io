import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import BlogList from "@site/src/components/BlogList";
import SocialLinks from "@site/src/components/SocialLinks";
import styles from "./index.module.css";
import ZhanXiFuChangLiu from "../../static/img/zxfcl.webp";
import YunWoYiShangLeng from "../../static/img/ywysl.webp";

const INTRO_TEXT = "Hi, I'm Dnevend 👋 · 全干开发者";

function useTypewriter(text, speed = 70) {
  const characters = React.useMemo(() => Array.from(text), [text]);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    )?.matches;

    if (prefersReducedMotion) {
      setCount(characters.length);
      return undefined;
    }

    setCount(0);
    let index = 0;
    let timer;

    const tick = () => {
      index += 1;
      setCount(index);
      if (index < characters.length) {
        timer = window.setTimeout(tick, speed);
      }
    };

    timer = window.setTimeout(tick, 350);
    return () => window.clearTimeout(timer);
  }, [characters, speed]);

  return {
    visibleText: characters.slice(0, count).join(""),
    isTyping: count < characters.length,
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
            aria-hidden={isTyping}
          >
            <span className={styles.heroIntroDot} aria-hidden="true">
              ·
            </span>
            <Link
              to="/about"
              className={styles.heroLink}
              tabIndex={isTyping ? -1 : undefined}
            >
              关于我
              <span aria-hidden="true">→</span>
            </Link>
          </span>
          <span className={styles.srOnly}>Hi, I&apos;m Dnevend，全干开发者。</span>
        </div>

        <h1 className={styles.heroTitle} data-serif="true">
          {siteConfig.title}
        </h1>

        <SocialLinks className={styles.heroSocials} />
      </div>

      <img src={ZhanXiFuChangLiu} alt="展席俯長流" className={styles.zxfcl} />
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="全栈开发者，关注技术、人文、区块链与 AI"
      description="你好👋我是小学後生，全栈开发者。关注技术、人文、区块链及前沿 AI 应用。"
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
