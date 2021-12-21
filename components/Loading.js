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
export const ModalLoading = (styleBackGround) => {
  return (
    <div id="preloader" style={{ backgroundColor: "#ffffff3d" }}>
      <div className="loader">
        <svg className="spinner">
          <circle
            className="path"
            cx={25}
            cy={25}
            r={20}
            fill="none"
            strokeWidth={5}
          />
        </svg>
      </div>
    </div>
  );
};

export default Loading;
