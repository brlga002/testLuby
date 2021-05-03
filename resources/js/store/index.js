import { createStore, combineReducers } from "redux";
import storeSynchronize from "redux-localstore";

import auth from "./ducks/auth";

const combineReducer = combineReducers({
  auth,
});

const store = createStore(combineReducer);

export default store;
storeSynchronize(store);
