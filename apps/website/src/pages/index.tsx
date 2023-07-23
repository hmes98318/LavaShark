import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate from '@docusaurus/Translate';

import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import LogoSvg from '@site/static/img/logo-home.svg';
import CopySvg from '@site/static/img/copy.svg';
import CopiedSvg from '@site/static/img/copied.svg';

import styles from './index.module.css';
import 'bear-react-carousel/dist/index.css';

function HomepageHeader() {
    const codeToCopy = 'npm install lavashark';
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(codeToCopy).then(() => {
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 10000);
        });
    };

    useEffect(() => {
        if (isCopied) {
            const timer = setTimeout(() => {
                setIsCopied(false);
            }, 10000);
            return () => clearTimeout(timer);
        }
    }, [isCopied]);

    return (
        <header className={clsx('', styles.heroBanner)}>
            <div className="container">
                <LogoSvg width={100} />
                <h1 className="hero__title">LavaShark</h1>
                <p className="hero__subtitle text--primary text--bold">
                    <Translate>A lightweight Lavalink client built with Node.js</Translate>
                </p>
                <div className={styles.buttons}>
                    <button
                        className={`button button--secondary button--lg ${isCopied ? styles.copied : ''}`}
                        onClick={handleCopy}
                    >
                        <span className={styles.copyText}>$ npm install lavashark</span>
                        <span className={styles.copyIconContainer}>
                            {isCopied ? (
                                <CopiedSvg className={styles.copyIcon} />
                            ) : (
                                <CopySvg className={styles.copyIcon} />
                            )}
                        </span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout /*title={siteConfig.title} description={siteConfig.tagline}*/>
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
