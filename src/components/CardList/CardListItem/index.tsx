import React, { ReactNode } from "react";
import Link from "@docusaurus/Link";

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

export default function CardListItem({ item }: CardListItemProps): JSX.Element {
  const cardContent = (
    <>
      {item.title && (
        <h2 className="cardTitle">
          {item.icon && (
            <img src={item.icon} className="cardIcon" />
          )}
          <span>{item.title}</span>
        </h2>
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