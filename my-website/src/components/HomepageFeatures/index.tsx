import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Real-Time Crypto Tracking',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Our Crypto Price Tracker fetches real-time cryptocurrency data using the CoinGecko API. 
        With efficient pagination, error handling, and caching, our integration ensures smooth 
        data updates while avoiding rate limits.
      </>
    ),
  },
  {
    title: 'Seamless API Integration',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We leverage React's Context API and React Query to efficiently manage state. 
        Search filtering, pagination, and live data updates are all handled seamlessly 
        to enhance user experience without unnecessary re-renders.
      </>
    ),
  },
  {
    title: 'State Management Simplified',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Stay up-to-date with market trends. Our tracker displays live price changes, 
        historical trends, and market rankings, giving you the latest insights on your favorite cryptocurrencies.
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
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
