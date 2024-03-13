import { FC } from "react";
import styles from "./Loader.module.scss";
import loaderImg from "./../../assets/loader.gif";
import ReactDOM from "react-dom";
import React from "react";

const Loader: FC = () => {
  const loaderContainer: HTMLElement | null = document.getElementById("loader");

  return (
    loaderContainer &&
    ReactDOM.createPortal(
      <div className={styles.wrapper}>
        <div className={styles.loader}>
          <img src={loaderImg} alt="Loading..." />
        </div>
      </div>,
      loaderContainer
    )
  );
};

export default Loader;
