import React from 'react';
import '../styles/Login.css';
import {Button} from '@material-ui/core';
import {auth, provider } from '../firebase.js';

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result);
        })
        .catch((error) => {
            alert(error.message);
        })
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-650-80.jpg.webp" alt="" />
                <h1>Sign in!</h1>
                <p>demo.slack.com</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
