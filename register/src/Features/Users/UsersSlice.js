import { 
    USER_ADDED,
    USER_REMOVED,
    USER_MODIFIED,
 } from "../../Actions/types";

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

 const initialState = {
    users: [
      { id: 0, username: 'test1', password: 'pwd1', roles: [CASH] },
      { id: 1, username: 'test2', password: 'pwd1', roles: [CASH,MANAGER] },
      { id: 2, username: 'test3', password: 'pwd1', roles: [ADMIN] }
    ],
 };

export default function (state, initialState, action){
    const {type, payload} = action;
    switch(type){
        case USER_ADDED:{
            return [
                    ...state,
                    {
                        id: action.payload.id,
                        username: action.payload.username,
                        password: action.payload.password,
                    }
                ]
        }
        case USER_MODIFIED: {
            return state.users.map( (user) => {
                    if (user.id !== action.payload){
                        return user;
                    }
                    return {
                        ...state,

                    }
                })
        }
        case USER_REMOVE: {
            return 
                state.filter((user) => user.id !== action.payload)
            
        }
        default:
            return state;
        
    }
}
