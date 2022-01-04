import React from "react";
import ReactDOM from "react-dom";

import NavLinks from "./NavLinks";
import styles from "./SideDrawer.module.scss";

const SideDrawer = (props) => {
  const content = (
    <div onClick={props.onClick} className={styles.menu}>
      <NavLinks className={styles.nav_links} />
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
