import React from "react";
import styles from "./Loading.module.css";

export const Loading = (props) => {
  return (
    <div className={styles.loading}>
      <div className={styles.box}>
        <div className={styles.loader}>
          <span></span>
        </div>
        <div className={styles.loader}>
          <span></span>
        </div>
        <div className={styles.loader}>
          <i></i>
        </div>
        <div className={styles.loader}>
          <i></i>
        </div>
      </div>
    </div>
  );
};

export default Loading;

//🧙‍♂️