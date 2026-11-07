import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import BlogList from "@site/src/components/BlogList";
import SocialLinks from "@site/src/components/SocialLinks";
import { TAGLINE } from "@site/src/constants/tagline";
import styles from "./index.module.css";
import ZhanXiFuChangLiu from "../../static/img/zxfcl.png";
import YunWoYiShangLeng from "../../static/img/ywysl.png";

const QUOTE_TEXT = `“${TAGLINE}”`;

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
  const { visibleText, isTyping } = useTypewriter(QUOTE_TEXT);

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={styles.heroContent}>
        <div className={styles.heroIntro}>
          <span className={styles.heroGreetingText}>
            Hi, I&apos;m Dnevend 👋
          </span>
          <span className={styles.heroIntroDot} aria-hidden="true">
            ·
          </span>
          <span className={styles.heroRoleInline}>
            全干开发者
          </span>
          <span className={styles.heroIntroDot} aria-hidden="true">
            ·
          </span>
          <Link to="/about" className={styles.heroLink}>
            关于我
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>

        <div className={styles.heroQuote}>
          <p className={styles.heroQuoteText} aria-hidden="true">
            <span className={styles.quotePlaceholder}>{QUOTE_TEXT}</span>
            <span className={styles.quoteTyped}>
              {visibleText}
              {isTyping && <span className={styles.quoteCaret} />}
            </span>
          </p>
          <span className={styles.srOnly}>{QUOTE_TEXT}</span>
          <Link to="/mark/mind-sentence" className={styles.heroLink}>
            摘录
            <span aria-hidden="true">→</span>
          </Link>
        </div>

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
