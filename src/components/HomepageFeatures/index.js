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
    <div className={clsx('col col--4')}>
      <Link to={linkTo}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
