import React,{useState} from 'react';
import "./Login.css";
import { Link, useHistory } from 'react-router-dom';
import {auth} from "./firebase";


function Login() {
    const history=useHistory();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const login = (event) =>{
        event.preventDefault(); //this stops the refreshing of the page
        //login lgic
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=> {
            history.push("/");

        })
        .catch((e)=>alert(e.message)); //if something went wrong it will display alert message

    }

    const register = (event) =>{
        event.preventDefault(); //this stops the refreshing of the page
        //register logic
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push("/");

        })
        .catch((e)=>alert(e.message));
    }
    return (
       
        <div className="login">
             <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />

             </Link>
             <div className="login__container">
             <form>
                <h1>Sign in</h1>
                <h5>E-mail</h5>
                <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                <h5>Password</h5>
                <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                <button onClick={login}  className="login__signInButton" type="submit">Sign In</button>
                </form>
               
                    <p>
                        By Signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Internet-based Ads Notice.
                    </p>
                    <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
               
             </div>
            
        </div>
    )
}

export default Login
