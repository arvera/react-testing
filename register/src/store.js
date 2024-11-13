import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./Features/userSlice";
import usersReducer from "./Features/Users/UsersSlice";

export default configureStore({
    reducer: {
        user:userReducer,
        users:usersReducer,
    },
})