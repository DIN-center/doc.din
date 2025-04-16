import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import CardIcon1 from "@site/static/img/icon_account.svg";
import CardIcon2 from "@site/static/img/icon_networks.svg";
import CardIcon3 from "@site/static/img/icon_ipfs.svg";
import CardIcon4 from "@site/static/img/icon_building.svg";
import RightArrowIcon from "@site/static/img/icon_rightarrow.svg";

type CardItem = {
  title: string;
  link: string;
  description: JSX.Element;
  buttonName: string;
  buttonType:
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "link";
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const CardList: CardItem[] = [
  {
    title: "Get Started",
    link: "/introduction",
    description: (
      <>
        Discover how DIN provides secure, decentralized access to blockchain APIs with economic security and a streamlined developer experience.
      </>
    ),
    buttonName: "Read More",
    buttonType: "primary",
    icon: CardIcon1,
  },
  {
    title: "Gateways",
    link: "/gateways/overview",
    description: (
      <>
        Learn how to interact with DIN through gateway endpoints that provide resilient, decentralized RPC access to multiple blockchain networks.
      </>
    ),
    buttonName: "Read More",
    buttonType: "primary",
    icon: CardIcon2,
  },
  {
    title: "DIN as an AVS",
    link: "/avs/concepts",
    description: (
      <>
        Understand how DIN leverages Ethereum's security as an Actively Validated Service to ensure trustless, reliable API service delivery.
      </>
    ),
    buttonName: "Read More",
    buttonType: "primary",
    icon: CardIcon3,
  },
  {
    title: "Architecture",
    link: "/architecture-overview",
    description: <>Explore DIN's modular architecture including Provider Nodes, DIN Router, and economic security mechanisms that work together to deliver a robust RPC infrastructure.</>,
    buttonName: "Read More",
    buttonType: "primary",
    icon: CardIcon4,
  },
];

function Card({
  title,
  link,
  description,
  buttonName,
  buttonType,
  icon: Icon,
}: CardItem) {
  return (
    <div className={clsx("col", "col--6")}>
      <div className={clsx("card-demo", styles.cardDemo)}>
        <div className={clsx("card", styles.card_glow)}>
          <div className={clsx("card__header", styles.cardHeader)}>
            <div className={styles.cardIcon}>
              <Icon style={{ width: "50px", height: "50px" }} />
            </div>
            <div className={styles.cardTitle}>
              <Heading as="h3">{title}</Heading>
            </div>
          </div>
          <div
            className={clsx("card__body", styles.cardBody)}
            style={{ textAlign: "left", paddingLeft: "40px" }}>
            <p style={{ fontSize: "18px", fontWeight: "300", marginTop: "0" }}>
              {description}
            </p>
          </div>
          <div
            className="card__footer"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              paddingBottom: "30px",
            }}>
            <Link
              className={clsx(
                "button",
                "button--" + buttonType,
                "button--block",
                styles.button,
              )}
              to={link}
              style={{ width: "90%" }}>
              {buttonName}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageCards(): JSX.Element {
  // Specify the ref type as HTMLDivElement
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setEqualHeight = () => {
      const row = rowRef.current;
      if (!row) return;

      // Use type assertion for HTMLCollectionOf<Element>
      const cards = Array.from(
        row.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>,
      );
      cards.forEach((card) => {
        card.style.height = "auto";
      });

      const cardHeights = cards.map((card) => card.offsetHeight);
      const maxHeight = Math.max(...cardHeights);

      cards.forEach((card) => {
        card.style.height = `${maxHeight}px`;
      });
    };

    setEqualHeight();
    window.addEventListener("resize", setEqualHeight);

    return () => {
      window.removeEventListener("resize", setEqualHeight);
    };
  }, []);

  return (
    <section className={clsx("margin-top--lg", "margin-bottom--lg", styles.cardSection)}>
      <div className={clsx("container", styles.cardContainer)}>
        <br />
        <Heading as="h1" className={styles.heading}>
          Quick links <RightArrowIcon className={styles.headerArrow} />
        </Heading>
        <br />
        <div className="row" ref={rowRef} style={{ paddingBottom: "3rem" }}>
          {CardList.map((props, idx) => (
            <Card key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}