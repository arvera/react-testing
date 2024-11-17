
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Logout from "../../Components/Logout";
import { backendURL } from "../../services";

// https://redux-toolkit.js.org/usage/immer-reducers
// TUTORIAL: about createAsyncThunk https://medium.com/@bremarotta/redux-toolkit-createasyncthunk-829e139ea623


interface UserState{
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
}

export const AuthSlice = createSlice({
  name: "user",
  initialState: {
    //user: {name: user, password: password}
    user: {name: '', password: ''},
    isLoggedIn: false,
    network_status: "idle" 
  },
  reducers: {
      login: (state, action) => {
        console.log("reducer: login ");
        state.user = action.payload;
        state.isLoggedIn = true;
        console.log(state.user);
      },
      logout: (state) => {
        state.user = ({name: '', password: ''});
        state.isLoggedIn = false;
      }
  },
   extraReducers: builder => {
    builder
      .addCase(signinThunk.fulfilled, (state,action)=>{
      state.user = action.payload;
      state.isLoggedIn = true;
    })
    builder
      .addCase(signinThunk.pending, (state)=>{
      state.network_status= 'loading'
    })
    builder
      .addCase(signinThunk.rejected, (state)=>{
      state.network_status= 'idle'
    })

  //   [loginUser.completed](state){
  //     console.log("what to do here?", state);
  //     state.user = action.payload;
  //     state.isLoggedIn = true;
  //     state.network_status= "idle";
  //   }
   }
});


// THUNKS
// export async function fetchTodos(dispatch, getState) {
//   const response = await client.get(backendURL+'/signin')
//   dispatch({ type: 'todos/todosLoaded', payload: response.todos })
// }

export const signinThunk = createAsyncThunk('user/signin',
  (postData) => { 
    return fetch(backendURL+'/api/auth/signin',
    {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(postData)
    })
    .then(rest => rest.json())
    .then(data => data)
    },
    { 
      condition(arg,thunkApi) {
        const userNetworkStatus = selectUserNetworkStatus(thunkApi.getState())
        if (userNetworkStatus !== 'idle'){
          return false;
        }
    }
  })


// ACTION EXPORT
export const {login,logout} = AuthSlice.actions;

// SELECTOR EXPORT
export const selectUser = (state) => state.user.user;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn
export const selectUserNetworkStatus = (state) => state.user.network_status

// REDUCER EXPORT
export default AuthSlice.reducer;


