import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import SocialLinks from "@site/src/components/SocialLinks";
import styles from "./about.module.css";
import Jianghu from "../../static/img/about/jianghu.jpg";
import LeeAo from "../../static/img/about/leeao.jpg";
import VoyagerGoldenRecords from "../../static/img/about/voyager_golden_records.jpg";
import YeFu from "../../static/img/about/yefu.jpg";

const gallery = [
  { key: "leeao", src: LeeAo, alt: "李敖黑白肖像" },
  { key: "yefu", src: YeFu, alt: "野夫黑白肖像" },
  { key: "voyager", src: VoyagerGoldenRecords, alt: "旅行者金唱片" },
  { key: "jianghu", src: Jianghu, alt: "《江湖边》封面" },
];

export default function About() {
  const [activePhoto, setActivePhoto] = React.useState(null);

  const photoProps = (key) => ({
    className: clsx(
      styles.photoTrigger,
      activePhoto === key && styles.photoTriggerActive,
    ),
    onMouseEnter: () => setActivePhoto(key),
    onMouseLeave: () => setActivePhoto(null),
  });

  return (
    <Layout title="关于" description="关于 Dnevend 与小学後生">
      <main className={styles.about}>
        <div className={styles.inner}>
          <header className={styles.header}>
            <span className={styles.eyebrow}>ABOUT</span>
            <h1 className={styles.title}>关于</h1>
            <p className={styles.lead}>
              你好👋我是小学後生，现位于浙江湖州，一名全栈开发者。关注技术、人文、区块链及前沿AI应用。
            </p>
            <SocialLinks className={styles.socials} align="flex-start" />
          </header>

          <div className={styles.grid}>
            <section className={styles.bio}>
              <h2 className={styles.sectionTitle}>我</h2>
              <p>
                我喜欢阅读，读过深奥的哲学想要显摆却发现我的脑袋只适合当个普通人，现在喜欢简单纯粹的文字。令我痴迷的作家有<span {...photoProps("leeao")}>李敖</span>、<span {...photoProps("yefu")}>野夫</span>还有匡笑余，我沉醉于他们笔触里的江湖色彩以及他们身上所具有的近乎古人的风范。
              </p>
              <p>
                我喜欢运动，情绪低落的时候总得找个出口，曾跑过半马、横渡钱塘江；也曾骑单车七百多公里自湖州出发，经富春江、翻过会稽山、跨越剡溪一路游历”唐诗之路“，直至舟山岛。
              </p>
              <p>
                音乐是上帝赐给人类的礼物，我喜欢听歌，很难想象没有音乐的生活会是多么暗淡。我的耳朵曾流浪在各个年代、语种和地区，有时会在粤语老歌里歇歇脚。但最终，我还是会选择待在江湖边的“<span {...photoProps("jianghu")}>秘密後院</span>”里——白日看世态炎凉，夜来再把吴钩暗赏。
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
                {gallery.map(({ key, src, alt }) => (
                  <figure
                    key={key}
                    className={clsx(
                      styles.galleryItem,
                      activePhoto === key && styles.galleryItemActive,
                    )}
                    onMouseEnter={() => setActivePhoto(key)}
                    onMouseLeave={() => setActivePhoto(null)}
                  >
                    <img src={src} alt={alt} loading="lazy" />
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
