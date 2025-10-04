import React, { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

export interface CardItem {
  title?: ReactNode;
  description?: ReactNode;
  href?: string;
  icon?: string;
  flaskOnly?: boolean;
}

interface CardListItemProps {
  item: CardItem;
}

export default function CardListItem({ item }: CardListItemProps): React.JSX.Element {
  const cardContent = (
    <>
      {item.title && (
        <Heading as="h2" className="cardTitle">
          {item.icon && (
            <img src={item.icon} className="cardIcon" />
          )}
          <span>{item.title}</span>
        </Heading>
      )}
      {item.description && (
        <p>
          {item.description}
        </p>
      )}
    </>
  );

  if (item.href) {
    return (
      <Link className="card padding--lg cardContainer" href={item.href}>{cardContent}</Link>
    );
  }

  return <div className="card padding--lg cardContainer">{cardContent}</div>;
}