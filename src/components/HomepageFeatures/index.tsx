import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use . . .',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Velaptor was designed to be easy to start with and to get your 2D game up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters . . .',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Velaptor lets you focus on developing your game so you don't have to worry about the low level details.
      </>
    ),
  },
  {
    title: '',
    Svg: require('@site/static/img/kd-silk-logo-combo.svg').default,
    description: (
      <>
        Powered by <a href="https://github.com/KinsonDigital">KinsonDigital</a> tech and <a href="https://github.com/dotnet/Silk.NET">SILK.NET</a>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
