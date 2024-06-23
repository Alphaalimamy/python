import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'JOIN PYTHON',
    Svg: require('@site/static/img/5.svg').default,
    description: (
      <>
       Empower your code with Python: Where logic meets elegance in programming
      </>
    ),
  },
  {
    title: 'Python for Data Science',
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
        Transforming data into visual stories: Harness Python's data visualization tools for impactful programming
      </>
    ),
  },
  {
    title: 'Machine Learning',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
        Dive into the world of Machine Learning: Unleash the potential of data-driven insights with powerful algorithms and frameworks
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
