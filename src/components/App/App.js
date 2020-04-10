import React from "react";
import styles from "./App.module.scss";

import Calendar from "../Calendar";

function App() {
  return (
    <div className={styles.App}>
      {/* Begin Calendar */}
      <Calendar />
      {/* End Calendar */}
    </div>
  );
}

export default App;
