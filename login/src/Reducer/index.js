import { combineReducers } from "redux";
import auth from "./auth";
import order from "./order";
import message from "./message";

export default combineReducers({
  auth,
  order,
  message,
});