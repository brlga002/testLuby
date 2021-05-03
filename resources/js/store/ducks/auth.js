import { createActions, createReducer } from "reduxsauce";
import { defineState } from "redux-localstore";

export const { Types, Creators } = createActions({
  setAuth: ["data"],
});

const defaultState = {
  autenticate: false,
};

const initialState = defineState(defaultState)("auth");

const setAuth = (state = initialState, action) => {
  const { autenticate } = action.data;
  return { autenticate: autenticate };
};

export default createReducer(initialState, {
  [Types.SET_AUTH]: setAuth,
});
