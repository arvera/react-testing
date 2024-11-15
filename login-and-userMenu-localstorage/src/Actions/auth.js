import {
    LOGIN_BEGINS,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    SET_MESSAGE,
} from "./types";

import { backendURL } from "../services";


import AuthService from "../Services/auth.service";

export const login = (username,password) => (dispatch) => {
    return AuthService.login(username,password).then(
        (data) => {
            dispatch ({
                type: LOGIN_SUCCESS,
                payload: {user: data },
            });
            return Promise.resolve();
        },
        (error) => {
            const message = 
            (error.response && 
                error.response.data &&
                error.response.data.message
            ) ||
            error.message || error.toString();
              dispatch({
                  type: LOGIN_FAILURE,
              });
              dispatch({
                  type: SET_MESSAGE,
                  payload: message,
              });
            return Promise.reject();
        }
    )
};

export const logout = () => (dispath) =>{
    AuthService.logout();
    dispatch({
        type: LOGOUT,
    })
}
