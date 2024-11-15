import { 
    LOGIN_BEGINS,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGOUT
 } from "../Actions/types";

 // TUTORIAL for REDUX-THUNK: https://daveceddia.com/where-fetch-data-redux/

 const user = JSON.parse(localStorage.getItem("user"));

 const initialState = user
    ? {isLoggedIn: true, user ,loading: false}
    : {isLoggedIn: false, user: null ,loading: false};

export default function (state, initialState, action){
    const {type, payload} = action;
    switch(type){
        case LOGIN_BEGINS:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user,
                loading: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user,
            }
        case LOGIN_FAILURE:
            return{
                ...state,
                isLoggedIn: false,
                user: null,
            }
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            }
        default:
            return state;
        
    }
}
