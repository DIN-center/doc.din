import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageCards from "@site/src/components/HomepageCards";
import Link from "@docusaurus/Link";

import styles from "./index.module.css";

function HomepageHeader() {
  return (
    <header
      className={clsx(styles.introductionBlock)}
      style={{ position: "relative" }}>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <h1 className={clsx("hero__title", styles.forceColor, styles.title)}>
          Decentralized Infrastructure<br></br>Network
        </h1>
        <p
          className={clsx(
            "hero__subtitle",
            styles.forceColor,
            styles.subtitle,
          )}>
          A reliable decentralized solution for blockchain API services with economic security
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/introduction">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageCards />
      </main>
    </Layout>
  );
}