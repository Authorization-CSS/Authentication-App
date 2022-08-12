import { combineReducers } from "redux";
import loginReducer from "./auth";

const appReducer = combineReducers({
  user: loginReducer,
});

export default appReducer;
