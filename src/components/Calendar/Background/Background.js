import React from "react";
import styles from "./Background.module.scss";

function Background(props) {
  return (
    <div className={styles.background}>
      <span>{props.text}</span>
    </div>
  );
}

export default Background;
