import { combineReducers } from "redux";

import auth from "./auth";
import usersReducer from "../Features/Users/UsersSlice";
import filtersReducer from "../Features/Filters/FilterSlice";
import message from "./message";

export default combineReducers({
  auth,
  users: usersReducer,
  filters: filtersReducer,
  message,
});
