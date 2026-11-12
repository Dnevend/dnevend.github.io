import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import SocialLinks from "@site/src/components/SocialLinks";
import styles from "./about.module.css";
import Jianghu from "../../static/img/about/jianghu.webp";
import LeeAo from "../../static/img/about/leeao.webp";
import VoyagerGoldenRecords from "../../static/img/about/voyager_plaque.webp";
import YeFu from "../../static/img/about/yefu.webp";

const gallery = [
  {
    key: "leeao",
    src: LeeAo,
    alt: "李敖黑白肖像",
    caption: "樽前作剧莫相笑，我死诸君思此狂。",
  },
  {
    key: "yefu",
    src: YeFu,
    alt: "野夫黑白肖像",
    caption: "野夫路见不平事，磨损胸中万古刀。",
  },
  {
    key: "voyager",
    src: VoyagerGoldenRecords,
    alt: "旅行者金唱片",
    caption: "Dark was the night.",
  },
  {
    key: "jianghu",
    src: Jianghu,
    alt: "《江湖边》封面",
    caption: "卑微的唱道者涉世而来，不惊波澜，不兴水波，只唱些道心人情。",
  },
];

const isHoverDevice = () =>
  typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

export default function About() {
  const [activePhoto, setActivePhoto] = React.useState(null);
  const revealedByTouch = React.useRef(null);

  React.useEffect(() => {
    const clearOnOutsideClick = (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (
        target.closest("[data-gallery-item], [data-photo-trigger]")
      ) {
        return;
      }
      revealedByTouch.current = null;
      setActivePhoto(null);
    };

    document.addEventListener("click", clearOnOutsideClick);
    return () => document.removeEventListener("click", clearOnOutsideClick);
  }, []);

  const revealOnTouch = (key) => {
    setActivePhoto(key);

    const figure = document.querySelector(`[data-gallery-item="${key}"]`);
    if (!figure) return;

    const rect = figure.getBoundingClientRect();
    const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
    if (isInView) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    figure.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "center",
    });
  };

  const photoProps = (key) => ({
    className: clsx(
      styles.photoTrigger,
      activePhoto === key && styles.photoTriggerActive,
    ),
    onMouseEnter: () => setActivePhoto(key),
    onMouseLeave: () => setActivePhoto(null),
  });

  const photoLinkProps = (key, href) => ({
    ...photoProps(key),
    "data-photo-trigger": key,
    href,
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: (event) => {
      if (isHoverDevice()) return;
      if (revealedByTouch.current === key) return;
      event.preventDefault();
      revealedByTouch.current = key;
      revealOnTouch(key);
    },
  });

  return (
    <Layout
      title="关于"
      description="关于小学後生（Dnevend）：现居浙江湖州的全栈开发者，关注技术、人文、区块链与前沿 AI 应用。"
    >
      <main className={styles.about}>
        <div className={styles.inner}>
          <header className={styles.header}>
            <span className={styles.eyebrow}>ABOUT</span>
            <h1 className={styles.title} data-serif="true">
              关于
            </h1>
            <p className={styles.lead}>
              你好👋我是小学後生，现位于浙江湖州，一名全栈开发者。关注技术、人文、区块链及前沿AI应用。
            </p>
            <SocialLinks className={styles.socials} align="flex-start" />
          </header>

          <div className={styles.grid}>
            <section className={styles.bio}>
              <h2 className={styles.sectionTitle}>我</h2>
              <p>
                我喜欢阅读，群星闪耀让我认识到自己的渺小同时也在不断的激励我。我喜欢简单纯粹的文字，令我痴迷的作家有
                <a
                  {...photoLinkProps(
                    "leeao",
                    "https://zh.wikipedia.org/wiki/%E6%9D%8E%E6%95%96",
                  )}
                >
                  李敖
                </a>
                、
                <a
                  {...photoLinkProps(
                    "yefu",
                    "https://zh.wikipedia.org/wiki/%E9%87%8E%E5%A4%AB",
                  )}
                >
                  野夫
                </a>
                还有匡笑余，我沉醉于他们笔触里的江湖色彩以及他们身上所具有的近乎古人的风范。
              </p>
              <p>
                我喜欢运动，这是情绪的出口，我感激于自己拥有健全的四肢和奔跑的能力，曾跑过半马、横渡钱塘江；也曾骑单车七百多公里自湖州出发，经富春江、翻过会稽山、跨越剡溪一路游历“唐诗之路”，直至舟山岛。
              </p>
              <p>
                音乐是上帝赐给人类的礼物，我喜欢听歌，很难想象没有音乐的生活会是多么暗淡。我的耳朵曾流浪在各个年代、语种和地区，有时会在粤语老歌里歇歇脚。但最终，我还是会选择待在江湖边的“
                <a
                  {...photoLinkProps(
                    "jianghu",
                    "https://douban.com/subject/35842470",
                  )}
                >
                  秘密後院
                </a>
                ”里——看世态炎凉，把吴钩暗赏。
              </p>
            </section>

            <aside className={styles.galleryPanel}>
              <h2 className={styles.sectionTitle}>它们</h2>
              <div
                className={clsx(
                  styles.gallery,
                  activePhoto && styles.galleryDimmed,
                )}
              >
                {gallery.map(({ key, src, alt, caption }) => (
                  <figure
                    key={key}
                    data-gallery-item={key}
                    className={clsx(
                      styles.galleryItem,
                      activePhoto === key && styles.galleryItemActive,
                    )}
                    onMouseEnter={() => setActivePhoto(key)}
                    onMouseLeave={() => setActivePhoto(null)}
                    onClick={() => {
                      revealedByTouch.current = null;
                      revealOnTouch(key);
                    }}
                  >
                    <img src={src} alt={alt} loading="lazy" />
                    <figcaption
                      className={styles.galleryCaption}
                      data-serif="true"
                    >
                      {caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </main>
    </Layout>
  );
}
