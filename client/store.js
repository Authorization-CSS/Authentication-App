import { createStore, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import appReducer from "./redux";

const store = createStore(
  appReducer,
  applyMiddleware(ThunkMiddleware, createLogger())
);

export default store;
