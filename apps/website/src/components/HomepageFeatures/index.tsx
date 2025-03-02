import React, { JSX } from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Easy to Use',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <Translate>
                LavaShark is a lightweight Lavalink client that uses the REST API,
                allowing you to build your own Discord music bot in JavaScript/TypeScript.
            </Translate>
        ),
    },
    {
        title: 'Stable and efficient',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <Translate>
                Using Lavalink as the standalone audio sending node provides high scalability and performance.
            </Translate>
        ),
    },
    {
        title: 'Community support',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <Translate>
                LavaShark enjoys strong community support,
                allowing you to seek assistance and collaborate with fellow developers,
                making it easier to enhance your Discord music bot built with LavaShark.
            </Translate>
        ),
    },
];

function Feature({ title, Svg, description }: FeatureItem) {
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
