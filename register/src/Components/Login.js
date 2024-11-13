import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import {login} from "../Features/userSlice";
import { Alert ,Button } from "react-bootstrap";
import {loginCall} from "../Services/auth.service";
import "./login.css";


// first tutorial: https://dev.to/danielonugha0/building-a-login-system-using-redux-5ce3
// second tutorial: https://www.bezkoder.com/react-redux-jwt-auth/

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState("");
    const [password,setPassword] = useState("");
    const [errMsg,setErrMsg] = useState("");
    const [success,setSucccess] = useState(""); // change this to navigate
    
    // useEffect(() => {
    //   userRef.current.focus();
    // },[])

    useEffect(() => {
      setErrMsg('');
    },[user,password])

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(user,password);
      setSucccess(true);
    }


    // const dispatch = useDispatch();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("handle submit");
    //     dispatch(
    //         login((name,password))
    //         .then( () => {console.log("callback")})
    //     )
    // };
    


  return (
    <>{ success ? (<div><Alert variant="success"> Hello {user}!</Alert></div>) : (
    <div className="login">
        
          <form className="login_form" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <label htmlFor="username">Username:</label>
            <input 
              type="text"
              value={user} 
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
             type="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </form>
        </div>
        )}
    </>
 );
};
export default Login

