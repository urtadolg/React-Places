import React from "react";

import MainNavigation from "./MainNavigation";
import styles from "./MainHeader.module.scss";

const MainHeader = (props) => {
  return (
    <header className={styles.header_container}>
      <MainNavigation />
    </header>
  );
};

export default MainHeader;
