import { 
    USER_ADDED,
    USER_REMOVED,
    USER_MODIFIED,
 } from "../../Actions/types";

 import { createSlice } from "@reduxjs/toolkit";

//  const initialState = {
//     todos: [
//       { id: 0, text: 'Learn React', completed: true },
//       { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
//       { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
//     ],
//     filters: {
//       status: 'All',
//       colors: []
//     }
//   }

 //const user = JSON.parse(localStorage.getItem("order"));

//  const initialState = {
//     users: [
//       { id: 1, username: 'test1', password: 'pwd1', roles: ['CASH'] },
//       { id: 2, username: 'test2', password: 'pwd1', roles: ['CASH','MANAGER'] },
//       { id: 3, username: 'test3', password: 'pwd1', roles: ['ADMIN'] }
//     ],
//  };

 export const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [
            { id: 1, username: 'test1', password: 'pwd1', roles: ['CASH'] },
            { id: 2, username: 'test2', password: 'pwd1', roles: ['CASH','MANAGER'] },
            { id: 3, username: 'test3', password: 'pwd1', roles: ['ADMIN'] }
          ],
    },
    reducers: {
        userAdded: (state,action) => {
            console.log("user added action:"+ action.payload)
            state.users.push(action.payload)
        }
        
    }
 })

 export const {userAdded} = usersSlice.actions;

 export const selectUsers = (state) => state.users.users;

 export default usersSlice.reducer;

// export default function (state, initialState, action){
//     const {type, payload} = action;
//     switch(type){
//         case USER_ADDED:{
//             return [
//                     ...state,
//                     {
//                         id: action.payload.id,
//                         username: action.payload.username,
//                         password: action.payload.password,
//                     }
//                 ]
//         }
//         case USER_MODIFIED: {
//             return state.users.map( (user) => {
//                     if (user.id !== action.payload){
//                         return user;
//                     }
//                     return {
//                         ...state,

//                     }
//                 })
//         }
//         case USER_REMOVED: {
//             return 
//                 state.filter((user) => user.id !== action.payload)
            
//         }
//         default:
//             return state;
        
//     }
// }
