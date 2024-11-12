import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import {login} from "../Features/userSlice";

import "./login.css";


// first tutorial: https://dev.to/danielonugha0/building-a-login-system-using-redux-5ce3
// second tutorial: https://www.bezkoder.com/react-redux-jwt-auth/

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            login({
                name: name,
                password: password,
                loggedIn: true,
            })
        ).then(() => {
          history.pushState("/order");
          window.location.reload();
        }).catch(()=>{
        this.setState({
          loading:false,
        })
      })
    };

  return (
    <div className="login">
          <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
            <h1>Login</h1>
            <input
             type="name" 
             placeholder="Name" 
             value={name} 
             onChange={(e) => setName(e.target.value)}
            />

            <input
             type="password"
             placeholder="Password"
             value={password}
             onChange={(e) => setPassword(e.target.value)} 
            />
            <button type="submit" className="submit_btn">
              Submit
            </button>
          </form>
        </div>
 );
};
export default Login

