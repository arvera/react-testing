import React from "react";
import { useDispatch,useSelector } from "react-redux";
import {logout, selectUser} from "../Features/UserAuth/AuthSlice";
import "./logout.css";
import { redirect } from "react-router-dom";

const Logout = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    };
    
   return (
     <div className="logout">
           <h1>
             Welcome <span className="user_name">{user.name}</span>
           </h1>
           <div>Are you sure you want to logout?</div>
           <button className="logout_button" onClick={(e) => handleLogout(e)}>
             Logout
           </button>
         </div>
  );
};
export default Logout;



