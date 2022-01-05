import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useForm } from "../../shared/hooks/form-hook";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import styles from "./StylePlace.module.scss";

const DUMMY_PLACES = [
  {
    id: "p1",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    address: "20 W 34th St, New York, NY 10001",
    creatorId: "u1",
    location: {
      lat: 40.7485611,
      lng: -73.9945183,
    },
  },
  {
    id: "p2",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    address: "20 W 34th St, New York, NY 10001",
    creatorId: "u2",
    location: {
      lat: 40.7485611,
      lng: -73.9945183,
    },
  },
  {
    id: "p3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    address: "20 W 34th St, New York, NY 10001",
    creatorId: "u1",
    location: {
      lat: 40.7485611,
      lng: -73.9945183,
    },
  },
];

const EditPlace = (props) => {
  const placeID = useParams().placeID;

  const [formState, inputHandler, updateFormState] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const [isLoading, setIsLoading] = useState(true);

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeID);

  useEffect(() => {
    if (identifiedPlace) {
      updateFormState({
        inputs: {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        isValid: true,
      });
    }
    setIsLoading(false);
  }, [updateFormState, identifiedPlace]);

  const navigate = useNavigate();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Saving new data: ", formState.inputs);
    navigate(-1, { replace: true });
  };

  if (!identifiedPlace) {
    return (
      <Card className={styles.notFound_container}>
        <h2>Could not find place...</h2>
      </Card>
    );
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <form onSubmit={formSubmitHandler} className={styles.form_container}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorMessage="Please enter a valid title."
        onInput={inputHandler}
        value={formState.inputs.title.value}
        isValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorMessage="Please enter a valid address."
        onInput={inputHandler}
        value={formState.inputs.description.value}
        isValid={formState.inputs.description.isValid}
      />
      <Button disabled={!formState.isValid} type="submit">
        EDIT PLACE
      </Button>
    </form>
  );
};

export default EditPlace;
