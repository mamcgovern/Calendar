import React from 'react';
import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Account = () => {
    return (
        <div class='container'>
            <div class="bg-body-tertiary p-5 rounded">
                <div class="col-sm-8 mx-auto">
                    <form>
                        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                        <div class="form-floating">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>

                        <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                        <a style={{ marginTop: '20px' }} href="/account/forgotpassword">Forgot password?</a>
                    </form>
                </div>
            </div>
            <div class="bg-body-tertiary p-5 rounded" style={{marginTop: '20px'}}>
                <div class="col-sm-8 mx-auto">
                    <p>Don't have an account? <a style={{ marginTop: '20px' }} href="/account/signup">Sign up</a></p>
                </div>
            </div>
        </div>
    );
}

export default Account;