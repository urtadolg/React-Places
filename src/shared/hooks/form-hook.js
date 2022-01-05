import React, { useCallback, useReducer } from "react";

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

    case "UPDATE_STATE":
      return action.receivedFormState;

    default:
      return state;
  }
};

export const useForm = (initialInputs, initialIsValid) => {
  const [formState, dispatch] = useReducer(formValidation, {
    inputs: initialInputs,
    isValid: initialIsValid,
  });

  const inputHandler = useCallback(
    (id, value, isValid) => {
      dispatch({ type: "INPUT_CHANGE", id, value, isValid });
    },
    [dispatch]
  );

  const updateFormState = useCallback((receivedFormState) => {
    dispatch({ type: "UPDATE_STATE", receivedFormState });
  }, []);

  return [formState, inputHandler, updateFormState];
};
