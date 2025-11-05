import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: '知识库',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    // description: <>系统性再整理</>,
    linkTo: '/docs/intro'
  },
  {
    title: '记录',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    // description: <>有营养的信息和内容</>,
    linkTo: '/mark/2024'
  },
  {
    title: '博客',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    // description: <>最美的梨花即将被写出</>,
    linkTo: '/blog'
  },
];

function Feature({ Svg, title, description, linkTo }) {
  return (
    <Link to={linkTo} className={styles.feature}>
      <div className={styles.featureIcon}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </section>
  );
}
