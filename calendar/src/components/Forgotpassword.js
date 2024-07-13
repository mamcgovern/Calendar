import React, { useState, useRef } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import emailjs from '@emailjs/browser';

const Forgotpassword = () => {
    const [sent, setSent] = useState(false);
    const [email, setEmail] = useState('');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        //TODO update emailjs form to correct the link sent to the emails
        emailjs
            .sendForm('service_dbvwg3h', 'template_6nkl73y', form.current, 'WVhEK7a7zPY_pOY0v')
            .then(
                () => {
                    setSent(true); // Mark as sent only after successful email
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    // Handle input change
    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    if (sent) {
        return (
            <div className='container'>
                <div className="bg-body-tertiary p-5 rounded">
                    <div className="col-sm-8 mx-auto">
                        <h1>Email sent!</h1>
                        <p>We sent an email with information on how to get back into your account to {email}. It may take a few minutes for this email to arrive.</p>
                        <p>Back to login: <a style={{ marginTop: '20px' }} href="/account/login">Login</a></p>
                    </div>
                </div>
                <div className="bg-body-tertiary p-5 rounded" style={{ marginTop: '20px' }}>
                    <div className="col-sm-8 mx-auto">
                        <p>Don't have an account? <a style={{ marginTop: '20px' }} href="/account/signup">Sign up</a></p>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='container'>
                <div className="bg-body-tertiary p-5 rounded">
                    <div className="col-sm-8 mx-auto">
                        <form ref={form} onSubmit={sendEmail}>
                            <h1 className="h3 mb-3 fw-normal">Trouble logging in?</h1>
                            <p>Enter your email address and we'll send you information to get back into your account.</p>

                            <div className="form-floating">
                                <input
                                    type="email"
                                    name="user_email" // This name must match the placeholder in your EmailJS template
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>

                            <button className="btn btn-primary w-100 py-2" type="submit">Send email</button>
                        </form>
                    </div>
                </div>
                <div className="bg-body-tertiary p-5 rounded" style={{ marginTop: '20px' }}>
                    <div className="col-sm-8 mx-auto">
                        <p>Don't have an account? <a style={{ marginTop: '20px' }} href="/account/signup">Sign up</a></p>
                    </div>
                </div>
                <div className="bg-body-tertiary p-5 rounded" style={{ marginTop: '20px' }}>
                    <div className="col-sm-8 mx-auto">
                        <p>Back to login: <a style={{ marginTop: '20px' }} href="/account/login">Login</a></p>
                    </div>
                </div>
            </div>
        );
    }
};

export default Forgotpassword;
