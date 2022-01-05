import React, { useReducer, useEffect } from "react";

import { validate } from "../../util/validators";
import styles from "./Input.module.scss";

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value, action.validators),
      };

    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(reducerFunction, {
    value: props.value || "",
    validators: props.validators,
    isTouched: false,
    isValid: props.isValid || false,
  });

  const blurHandler = () => dispatch({ type: "TOUCH" });

  const changeHandler = (e) => {
    dispatch({
      type: "CHANGE",
      value: e.target.value,
      validators: props.validators,
    });
  };

  const { id, onInput } = props;
  const { isValid, value } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [onInput, id, isValid, value]);

  const element =
    props.element === "input" ? (
      <input
        onBlur={blurHandler}
        onChange={changeHandler}
        className={`${styles.input} ${
          !inputState.isValid && inputState.isTouched && styles.invalid_input
        }`}
        id={props.id}
        type={props.type || "text"}
        placeholder={props.placeholder}
        value={inputState.value}
      ></input>
    ) : (
      <textarea
        onBlur={blurHandler}
        onChange={changeHandler}
        className={`${styles.textarea} ${
          !inputState.isValid && inputState.isTouched && styles.invalid_input
        }`}
        rows={props.rows || 3}
        id={props.id}
        value={inputState.value}
      ></textarea>
    );

  return (
    <div className={styles.label_input_container}>
      <label
        htmlFor={props.id}
        className={`${styles.label} ${
          !inputState.isValid && inputState.isTouched && styles.invalid_label
        }`}
      >
        {props.label}
      </label>
      {element}
      {!inputState.isValid && inputState.isTouched && (
        <p className={styles.invalid_message}>{props.errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
