import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

<head>
	<meta name="twitter:image" content="https://docs.velaptor.io/img/meta-image.jpg"></meta>
	<meta name="twitter:card" content="summary_large_image"></meta>
	<meta name="twitter:site" content="@KDCoder"></meta>
	<meta name="twitter:creator" content="@KDCoder"></meta>
</head>

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Focus on What Matters . . .',
    Svg: require('@site/static/img/space-invaders.svg').default,
    description: (
      <>
        Velaptor lets you focus on developing your game so you don't have to worry about the low level details.
      </>
    ),
  },
  {
    title: 'Powered by . . .',
    Svg: require('@site/static/img/kd-silk-logo-combo.svg').default,
    description: (
      <>
        <a href="https://github.com/KinsonDigital">KinsonDigital</a> tech and <a href="https://github.com/dotnet/Silk.NET">SILK.NET</a>
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
          <div className='col col--4'>
            <div className='text--center'>
              <img src={require('@site/static/img/code-snippet.png').default}/>
            </div>
            <div className='text--center padding-horiz--md'>
              <h3 style={{marginTop: '-5'}}>Easy to Use . . .</h3>
              <p>Velaptor is designed to be easy to start with and to get your 2D game or application up and running quickly.</p>
            </div>
          </div>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
