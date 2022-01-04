import React from "react";

import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";
import styles from "./UsersList.module.scss";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <Card>
          <h2>No users found</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className={styles.list_container}>
      {props.items.map((item) => (
        <UserItem
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          places={item.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
