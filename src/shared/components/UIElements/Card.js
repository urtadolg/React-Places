import React from "react";

import styles from "./Card.module.scss";

const Card = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
