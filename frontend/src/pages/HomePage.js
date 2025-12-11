// frontend/src/pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Importation du composant Navbar
import './HomePage.css'; // Importation du fichier de style pour la page

const HomePage = () => {
    return (
        <div className="homepage-container">
            {/* 1. La barre de navigation est affichée en haut */}
            <Navbar />

            {/* 2. Contenu principal de la page d'accueil (Section Héroïque) */}
            <main className="main-content">
                <section className="hero-section">

                    {/* Slogan principal (Vu dans l'image : Save Food. Help People. Join DonEat) */}
                    <h1 className="hero-slogan">Save Food. Help People. <br/> Join DonEat</h1>

                    {/* Sous-titre */}
                    <p className="hero-subtitle">
                        Hotel upload surplus food. People buy it cheaply and donate it to those in need.
                    </p>

                    {/* Boutons d'action */}
                    <div className="hero-actions">

                        {/* Bouton Vert: View offers (Vers la page des offres) */}
                        <Link to="/offers" className="action-btn offers-btn">
                            View offers
                        </Link>

                        {/* Bouton Orange: Become a User (Vers la page d'inscription) */}
                        <Link to="/register" className="action-btn register-btn">
                            Become a User
                        </Link>
                    </div>
                </section>
            </main>

            {/* Vous pourriez ajouter un Footer ici si vous en avez un */}
            {/* <Footer /> */}
        </div>
    );
};

export default HomePage;