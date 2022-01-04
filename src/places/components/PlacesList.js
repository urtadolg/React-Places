import React from "react";

import PlaceItem from "./PlaceItem";
import Card from "../../shared/components/UIElements/Card";
import styles from "./PlacesList.module.scss";

const PlacesList = (props) => {
  if (props.places.length === 0) {
    return (
      <Card>
        <h1>There are no places added.</h1>
      </Card>
    );
  }

  return (
    <ul className={styles.list_container}>
      {props.places.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlacesList;
