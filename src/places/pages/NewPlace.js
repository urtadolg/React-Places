import React from "react";

import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import styles from "./StylePlace.module.scss";

const NewPlace = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <form onSubmit={formSubmitHandler} className={styles.form_container}>
      <Input
        id="title"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
        element={"input"}
        type="text"
        label="Title"
        errorMessage={"Please, enter a valid data."}
      />
      <Input
        id="description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
        element={"textarea"}
        label="Description"
        errorMessage={
          "Please, enter a valid description (at least 5 characters)."
        }
      />
      <Input
        id="address"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
        element={"input"}
        type="text"
        label="Address"
        errorMessage={"Please, enter a valid address."}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
