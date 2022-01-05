import React from "react";

import PlaceItem from "./PlaceItem";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import styles from "./PlacesList.module.scss";

const PlacesList = (props) => {
  if (props.places.length === 0) {
    return (
      <Card className={styles.empty_container}>
        <h1>No places found.</h1>
        <Button to="/places/new">ADD NEW PLACE</Button>
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
