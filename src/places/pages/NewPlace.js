import React, { useCallback, useReducer } from "react";

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import styles from "./NewPlace.module.scss";

const formValidation = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formValidity = true;

      for (const inputId in state.inputs) {
        if (inputId === action.id) {
          formValidity = formValidity && action.isValid;
        } else {
          formValidity = formValidity && state.inputs[inputId].isValid;
        }
      }

      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.id]: {
            value: action.value,
            isValid: action.isValid,
          },
        },

        isValid: formValidity,
      };

    default:
      return state;
  }
};

const NewPlace = () => {
  const [formState, dispatch] = useReducer(formValidation, {
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  });

  const inputHandler = useCallback(
    (id, value, isValid) => {
      dispatch({ type: "INPUT_CHANGE", id, value, isValid });
    },
    [dispatch]
  );

  return (
    <form className={styles.form_container}>
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
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
