// https://dev.to/danielonugha0/building-a-login-system-using-redux-5ce3
import { createSlice } from "@reduxjs/toolkit";
import Logout from "../Components/Logout";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
      login: (state, action) => {
        state.user = action.payload;
      },
      logout: (state) => {
        state.user = null;
      }
  }
});

export const {login,logout} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;


