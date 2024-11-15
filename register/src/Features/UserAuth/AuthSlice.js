
import { createSlice } from "@reduxjs/toolkit";
import Logout from "../../Components/Logout";

// https://redux-toolkit.js.org/usage/immer-reducers
export const AuthSlice = createSlice({
  name: "user",
  initialState: {
    //user: {name: user, password: password, loggedIn: true}
    user: null,
    isLoggedIn: false
  },
  reducers: {
      login: (state, action) => {
        console.log("login action");
        state.user = action.payload;
        state.isLoggedIn = true;
        console.log(state.user);
      },
      logout: (state) => {
        state.user = null;
      }
  }
});

export const {login,logout} = AuthSlice.actions;

export const selectUser = (state) => state.user.user;

export default AuthSlice.reducer;


