import React from "react";
import { Link } from "react-router-dom";

import styles from "./Button.module.scss";

const Button = (props) => {
  if (props.href) {
    return (
      <a className={`${styles.btn} ${props.className}`} href={props.href}>
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link to={props.to} className={`${styles.btn} ${props.className}`}>
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`${styles.btn} ${props.inverted && styles.btn_inverted} ${
        props.danger && styles.btn_danger
      }`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
