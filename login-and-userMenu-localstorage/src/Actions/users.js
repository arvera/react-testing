import {
    USER_ADDED,
    USER_REMOVE,
    USER_MODIFIED,
    FILTER_CHANGE_NAME,
    FILTER_CHANGED_ROLE,
} from "./types";

// import UserService from "../Services/user.service";

// export const users = () => (dispatch) => {
//     return UserService.list().then(
//         (data) => {
//             dispatch ({
//                 type: LOGIN_SUCCESS,
//                 payload: {user: data },
//             });
//             return Promise.resolve();
//         },
//         (error) => {
//             const message = 
//             (error.response && 
//                 error.response.data &&
//                 error.response.data.message
//             ) ||
//             error.message || error.toString();
//               dispatch({
//                   type: LOGIN_FAIL,
//               });
//               dispatch({
//                   type: SET_MESSAGE,
//                   payload: message,
//               });
//             return Promise.reject();
//         }
//     )
// };

// export const logout = () => (dispath) =>{
//     AuthService.logout();
//     dispatch({
//         type: LOGOUT,
//     })
// }
