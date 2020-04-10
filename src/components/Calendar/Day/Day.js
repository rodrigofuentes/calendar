import React from "react";
import styles from "./Day.module.scss";

function Day({ day }) {
  return (
    <div className={styles.date}>
      <h1>
        <time>{day}</time>
      </h1>
    </div>
  );
}

export default Day;
