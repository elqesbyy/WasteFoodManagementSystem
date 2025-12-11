// frontend/src/pages/AboutPage.js

import React from 'react';
import './AboutPage.css';
// import Navbar from '../components/Navbar'; // Assurez-vous d'importer votre Navbar

const AboutPage = () => {
    return (
        <div className="about-page-container">
            {/* <Navbar /> */}

            <div className="about-content">
                <h1 className="about-title">Notre Mission : Sauver la Nourriture, Aider les Gens.</h1>

                <section className="mission-section">
                    <h2>La Problématique</h2>
                    <p>Chaque année, des tonnes de nourriture invendue ou non utilisée finissent à la poubelle, alors que des millions de personnes souffrent d'insécurité alimentaire. DonEat a été créé pour combler ce fossé.</p>
                </section>

                <section className="how-it-works-section">
                    <h2>Comment Fonctionne DonEat ?</h2>
                    <p>DonEat est une plateforme qui connecte les entreprises (restaurants, boulangeries, supermarchés) avec un surplus alimentaire aux acheteurs et aux organisations caritatives locales.</p>
                    <ul>
                        <li>Les **Donateurs** publient des offres de nourriture excédentaire.</li>
                        <li>Les **Acheteurs/Associations** réservent la nourriture à bas prix ou gratuitement.</li>
                        <li>Nous assurons que les dons sont distribués rapidement et efficacement, réduisant le gaspillage.</li>
                    </ul>
                </section>

                <section className="team-section">
                    <h2>L'Équipe</h2>
                    <p>Nous sommes une petite équipe passionnée par la technologie et la responsabilité sociale. Notre objectif est de rendre la lutte contre le gaspillage alimentaire simple et accessible à tous.</p>
                </section>

            </div>
        </div>
    );
};

export default AboutPage;