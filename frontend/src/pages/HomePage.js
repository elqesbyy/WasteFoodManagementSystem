// frontend/src/pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">

      {/* 1. BARRE DE NAVIGATION (HEADER) */}
      <header className="navbar">
        <div className="logo-section">
          <span className="logo-don">Don</span>
          <span className="logo-eat">Eat</span>
        </div>

        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/offers" className="nav-link">Offers</Link>
          <Link to="/categories" className="nav-link">Categories</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        <Link to="/register" className="signup-button-nav">Sign up</Link>
      </header>

      {/* 2. SECTION PRINCIPALE (HÉRO) */}
      <main className="hero-section">
        <div className="hero-content">
          <h1>Save Food. Help People. Join DonEat</h1>
          <p className="hero-subtitle">
            Hotel upload surplus food. People buy it cheaply and donate it to those in need.
          </p>

          <div className="hero-actions">
            {/* Bouton pour voir les offres */}
            <Link to="/offers" className="action-button view-offers">
                View offers
            </Link>

            {/* MODIFICATION : "Become a Donor." -> "Become a User." */}
            <Link to="/register" className="action-button become-donor">
                Become a User.
            </Link>
          </div>
        </div>
      </main>

    </div>
  );
};

export default HomePage;