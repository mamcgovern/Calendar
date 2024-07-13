import React from 'react';
import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Login = () => {
    const [loggedin, setLoggedin] = useState(false);
    const [incorrect, setincorrect] = useState(false);
    const [username, setUsername] = useState("user");
    const [password, setPassword] = useState("pass");
    const [userInfo, setUserInfo] = useState([]);

    const form = useRef('form');

    const submitForm = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        setUsername(formData.get('username'));
        setPassword(formData.get('password'));

            var url = "http://localhost:8081/accounts/" + username; 
            console.log(url);
            console.log(formData.get('username'));
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    console.log("User info: ", data);
                    setUserInfo(data);
                });
        if(userInfo.password === password) {
            setLoggedin(true);
        } else{
            setincorrect(true);
            console.log("Real password: " + userInfo.password);
        }
    };

    if(loggedin) {
        return (
            <div className='container'>
                Hello
            </div>
        );
    } else {
        if(incorrect){
            return (
                <div class='container'>
                    <div class="bg-body-tertiary p-5 rounded">
                        <div class="col-sm-8 mx-auto">
                            <form ref={form} onSubmit={submitForm}>
                                <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
                                <p>Incorrect username or password. Try again.</p>
        
                                <div class="form-floating">
                                    <input type="username" class="form-control" id="floatingInput" placeholder="Username" name="username" />
                                    <label for="floatingInput">Username</label>
                                </div>
                                <div class="form-floating">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password" />
                                    <label for="floatingPassword">Password</label>
                                </div>
        
                                <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                                <a style={{ marginTop: '20px' }} href="/account/forgotpassword">Forgot password?</a>
                            </form>
                        </div>
                    </div>
                    <div class="bg-body-tertiary p-5 rounded" style={{ marginTop: '20px' }}>
                        <div class="col-sm-8 mx-auto">
                            <p>Don't have an account? <a style={{ marginTop: '20px' }} href="/account/signup">Sign up</a></p>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div class='container'>
                    <div class="bg-body-tertiary p-5 rounded">
                        <div class="col-sm-8 mx-auto">
                            <form ref={form} onSubmit={submitForm}>
                                <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        
                                <div class="form-floating">
                                    <input type="username" class="form-control" id="floatingInput" placeholder="Username" name="username"/>
                                    <label for="floatingInput">Username</label>
                                </div>
                                <div class="form-floating">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password" />
                                    <label for="floatingPassword">Password</label>
                                </div>
        
                                <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                                <a style={{ marginTop: '20px' }} href="/account/forgotpassword">Forgot password?</a>
                            </form>
                        </div>
                    </div>
                    <div class="bg-body-tertiary p-5 rounded" style={{ marginTop: '20px' }}>
                        <div class="col-sm-8 mx-auto">
                            <p>Don't have an account? <a style={{ marginTop: '20px' }} href="/account/signup">Sign up</a></p>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Login;