import React from 'react';
import { useState, useEffect, useRef } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Calendar from './components/Calendar.js';
import Account from './components/Account.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Forgot from './components/Forgotpassword.js';
import Footer from './components/Footer.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/signup" element={<Signup />} />
        <Route path="/account/forgotpassword" element={<Forgot />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);