import React from "react";
import { BallTriangle } from "react-loader-spinner";
import styles from "../styles/Loader.module.css";
export const Loader = () => {
  return (
    <div className={styles.loader}>
      <section>
        <BallTriangle
          heigth="100"
          width="100"
          color="#0078d4"
          ariaLabel="loading-indicator"
        />
      </section>
    </div>
  );
};
