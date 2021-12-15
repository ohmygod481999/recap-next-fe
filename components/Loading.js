import React from "react";
import styles from "../styles/LoadingUI.module.css";
function Loading() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.doubleLoading}>
        <div className={styles.c1} />
        <div className={styles.c2} />
      </div>
    </div>
  );
}

export default Loading;
