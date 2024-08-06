import React from "react";
import styles from "../../../app/Styles/Subscribe.module.css";

function Subscribe({ width }) {
  return (
    <div>
      <div className={styles["subscribe-wrapper"]}>
        <div className={styles["subscribe-container"]}>
          <p className={styles["heading"]}>Subscribe For Latest Newsletter</p>
        </div>
        <div className={styles["right-wrapper"]}>
          {width > 768 && (
            <>
              <input
                placeholder="First Name"
                className={styles["login-input"]}
              />
              <button className={styles["view-btn"]}>
                <span className={styles["View-button-text"]}>Subscribe</span>
              </button>
            </>
          )}
        </div>
        {width < 768 && (
          <>
            <input placeholder="Your Email" className={styles["login-input"]} />
            <button className={styles["view-btn"]}>
              <span className={styles["View-button-text"]}>Subscribe</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Subscribe;
