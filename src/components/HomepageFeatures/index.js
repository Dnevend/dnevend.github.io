import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: '博客',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: <>持续更新的文章与思考</>,
    linkTo: '/blog'
  },
  {
    title: '归档',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: <>Wiki 与 Mark 的旧资料</>,
    linkTo: '/archive'
  },
  {
    title: '友链',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: <>朋友们的主页</>,
    linkTo: '/friend-links'
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
