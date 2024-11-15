import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import {login} from "../Features/UserAuth/AuthSlice";
import { Alert ,Button } from "react-bootstrap";
import {loginCall} from "../Services/auth.service";
import { useSelector } from "react-redux";
import { selectUser } from "../Features/UserAuth/AuthSlice";
import "./login.css";


// first tutorial (LOGIN with local state): https://dev.to/danielonugha0/building-a-login-system-using-redux-5ce3
// tutorial on generating QR codes: https://dev.to/danielonugha0/generating-qr-codes-using-react-51ik
// second tutorial( with pure AXIOSand reducers the old way): https://www.bezkoder.com/react-redux-jwt-auth/
// updating async components: https://medium.com/codex/reasoning-behind-using-redux-toolkits-createslice-and-createasyncthunk-to-handle-your-asynchronous-267e6a6514ca

const Login = () => {
    // const userRef = useRef();
    // const errRef = useRef();
    const [user, setUser] = useState("");
    const [password,setPassword] = useState("");
    const [errMsg,setErrMsg] = useState("");
    const dispatch = useDispatch();
    
    const userStore = useSelector(selectUser);

    // useEffect(() => {
    //   userRef.current.focus();
    // },[])

    useEffect(() => {
      setErrMsg('');
    },[user,password])

    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   console.log(user,password);
    //   setSucccess(true);
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            login({name: user, password: password})
        )
        
    };

  return (
    <>
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
    </>
 );
};
export default Login;

