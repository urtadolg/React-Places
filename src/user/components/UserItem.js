import React from "react";
import { useNavigate } from "react-router-dom";

import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
import styles from "./UserItem.module.scss";

const UserItem = (props) => {
  const navigate = useNavigate();

  const onSelectUserHandler = () => {
    navigate(`${props.id}/places`);
  };

  return (
    <li onClick={onSelectUserHandler}>
      <Card className={styles.card_container}>
        <Avatar image={props.image} alt={props.name} />
        <div className={styles.name_places_container}>
          <h2>{props.name}</h2>
          <h3>
            {props.places} {props.places > 1 ? "Places" : "Place"}
          </h3>
        </div>
      </Card>
    </li>
  );
};

export default UserItem;
