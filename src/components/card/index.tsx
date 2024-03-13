import { FC } from "react";
import styles from "./Card.module.scss";
import React from "react";

type CardProps = {
  children: React.ReactNode;
  cardClass?: string;
};

const Card: FC<CardProps> = ({ children, cardClass = "" }) => {
  return <div className={`${styles.card} ${cardClass}`}>{children}</div>;
};

export default Card;
