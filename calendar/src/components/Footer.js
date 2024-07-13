import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import calendarImg from '../images/calendar.png';
import homeImg from '../images/home.png';
import userImg from '../images/user-account.png';

const Footer = () => {
    return (
        <div>
            <footer class="py-2 navbar-dark bg-dark footer-dark fixed-bottom">
                <div class="container-fluid">
                    <ul class="nav justify-content-center">
                        <li class="nav-item footer-item"><a href="/" class="nav-link px-2 text-light"><img src={homeImg} style={{ width: '30px', height: '30px', objectFit: 'cover', filter: 'invert(1)' }} /></a></li>
                        <li class="nav-item footer-item"><a href="/calendar" class="nav-link px-2 text-light"><img src={calendarImg} style={{ width: '30px', height: '30px', objectFit: 'cover', filter: 'invert(1)' }} /></a></li>
                        <li class="nav-item footer-item"><a href="/account" class="nav-link px-2 text-light"><img src={userImg} style={{ width: '30px', height: '30px', objectFit: 'cover', filter: 'invert(1)' }} /></a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
