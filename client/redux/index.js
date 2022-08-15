import { combineReducers } from "redux";
import authReducer from "./auth";

const appReducer = combineReducers({
  user: authReducer,
});

export default appReducer;
