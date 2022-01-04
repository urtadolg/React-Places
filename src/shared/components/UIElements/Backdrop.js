import React from "react";
import ReactDOM from "react-dom";

import styles from "./Backdrop.module.scss";

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onClick} className={styles.backdrop} />,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
