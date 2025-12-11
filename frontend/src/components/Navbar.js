// frontend/src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="main-header">
            <div className="logo">
                <Link to="/">
                    <span className="logo-don">Don</span><span className="logo-eat">Eat</span>
                </Link>
            </div>

            <nav className="main-nav">
                {/* Liens de navigation principaux */}
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/offers" className="nav-link">Offers</Link>
                <Link to="/categories" className="nav-link">Categories</Link>

                {/* L'ordre est maintenant ABOUT, puis CONTACT */}
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </nav>

            <div className="auth-buttons">
                <Link to="/login" className="login-btn">Log in</Link>
                <Link to="/register" className="signup-btn">Sign up</Link>
            </div>
        </header>
    );
};

export default Navbar;