import React from "react";
import Loading from "../Loading";
import styles from "./VideogameNoEncontrado.module.css";

export default function VideogameNotFinded() {
  return (
    <div className={styles.main}>
      <h1 className={styles.load}>Upss, something went wrong!...</h1>
      <Loading />
    </div>
  );
}
