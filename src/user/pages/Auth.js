import React, { useState, useContext } from "react";

import { AuthContext } from "../../shared/store/auth-context";
import { useForm } from "../../shared/hooks/form-hook";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import styles from "./Auth.module.scss";

const Auth = () => {
  const [formState, inputHandler, updateFormState] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const [isLoginMode, setIsLoginMode] = useState(true);

  const switchModeHandler = () => {
    if (isLoginMode) {
      updateFormState({
        inputs: {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        isValid: false,
      });
    } else {
      delete formState.inputs.name;

      updateFormState({
        inputs: {
          ...formState.inputs,
        },
        isValid:
          formState.inputs.email.isValid && formState.inputs.password.isValid,
      });
    }

    setIsLoginMode((state) => !state);
  };

  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
    if (isLoginMode) {
      authCtx.login();
    }
    console.log(formState.inputs);
  };

  return (
    <>
      <form onSubmit={submitHandler} className={styles.form_container}>
        <h2 style={{ alignSelf: "center" }}>
          {!isLoginMode ? "SIGN UP" : "LOGIN"}
        </h2>
        {!isLoginMode && (
          <Input
            id="name"
            type="text"
            element="input"
            label="Your Name"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
            errorMessage="Please enter your name."
          />
        )}
        <Input
          id="email"
          type="email"
          element="input"
          label="Email"
          value={formState.inputs.email.value}
          onInput={inputHandler}
          validators={[VALIDATOR_EMAIL()]}
          errorMessage="Please enter a valid email."
        />
        <Input
          id="password"
          type="password"
          element="input"
          label="Password"
          value={formState.inputs.password.value}
          onInput={inputHandler}
          validators={[VALIDATOR_MINLENGTH(6)]}
          errorMessage="Password should have at least 6 digits."
        />
        <Button disabled={!formState.isValid} type="submit">
          {!isLoginMode ? "SIGN UP" : "LOGIN"}
        </Button>
        <Button type="button" inverted onClick={switchModeHandler}>
          {isLoginMode ? "SIGN UP" : "LOGIN"}
        </Button>
      </form>
    </>
  );
};

export default Auth;
