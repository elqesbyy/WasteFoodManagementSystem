// frontend/src/pages/ContactPage.js

import React from 'react';
import './ContactPage.css';
import Navbar from '../components/Navbar'; // Assurez-vous que votre Navbar est dans /components

const ContactPage = () => {
    return (
        <div className="contact-page-container">
            {/* Si votre Navbar est dans un composant séparé, vous le mettez ici */}
            {/* <Navbar /> */}

            <div className="contact-content">
                <h1 className="contact-title">Contactez l'équipe DonEat</h1>
                <p className="contact-subtitle">Nous sommes là pour répondre à vos questions et recueillir vos suggestions.</p>

                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Nom / Organisation</label>
                        <input type="text" id="name" name="name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Adresse Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Votre Message</label>
                        <textarea id="message" name="message" rows="6" required></textarea>
                    </div>

                    <button type="submit" className="submit-btn">Envoyer le Message</button>
                </form>

                <div className="contact-info">
                    <p>📧 Email : support@doneat.com</p>
                    <p>📍 Adresse : 123 Rue de la Faim, 75001 Paris</p>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;