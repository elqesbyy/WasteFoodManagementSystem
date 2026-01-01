// frontend/src/pages/OfferManagement.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';
import './OfferManagement.css';

// --- Icônes (Réutilisées) ---
const UsersIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>);
const OffersIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>);
const HomeIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>);
const SettingsIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1.51-1V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>);
const OrdersIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>);


// --- DONNÉES FACTICES ---
const dummyOffers = [
    {
        id: 1, title: 'Lots de pains invendus', donor: 'resto_burger', localization: '12 Av. du Burger, 75010 Paris...',
        available_from: '11 déc. 2025, 18:00', available_to: '11 déc. 2025, 20:00',
        description: '20kg de pain, brioches et viennoiseries...', status: 'AVAILABLE',
        notes_admin: 'À consommer le jour même.', created_at: '2025-12-11'
    },
    {
        id: 2, title: 'Excellent de légumes bio', donor: 'donor_bakery', localization: 'Rue des Pains, 69002 Lyon...',
        available_from: '10 déc. 2025, 14:00', available_to: '10 déc. 2025, 16:00',
        description: '5 caisses de tomates et courgettes...', status: 'CLAIMED',
        notes_admin: 'Retiré par Khadija.', created_at: '2025-12-09'
    },
    {
        id: 3, title: 'Boissons et jus de fruits', donor: 'resto_burger', localization: '12 Av. du Burger, 75010 Paris...',
        available_from: '5 déc. 2025, 10:00', available_to: '5 déc. 2025, 18:00',
        description: 'Stocks avec DLUO courte.', status: 'EXPIRED',
        notes_admin: 'Offre non réclamée.', created_at: '2025-12-04'
    },
];

const OfferManagement = () => {
    // CORRECTION: 'setOffers' est retiré pour supprimer le warning "unused variable"
    const [offers] = useState(dummyOffers);

    const handleAction = (offerId, actionType) => {
        alert(`${actionType} sur l'offre ID: ${offerId}. Implémentation API nécessaire.`);
    };

    const OfferSidebar = () => (
        <aside className="sidebar">
            <div className="sidebar-header">
                <span className="logo-don">Don</span>
                <span className="logo-eat">DonEat</span>
            </div>
            <nav className="sidebar-nav">
                <Link to="/admin-dashboard" className="nav-item">
                    <HomeIcon /> <span>Dashboard</span>
                </Link>
                <Link to="/admin/users" className="nav-item">
                    <UsersIcon /> <span>Gestion Users</span>
                </Link>
                <Link to="/admin/categories" className="nav-item ">
                      <OffersIcon /> <span>Categories</span>
                </Link>
                <Link to="/admin/food_items" className="nav-item">
                       <OffersIcon /> <span>food_items</span>
                </Link>
                <Link to="/admin/offers" className="nav-item active">
                    <OffersIcon /> <span>Offres </span>
                </Link>
                 <Link to="/admin/offer_items" className="nav-item">
                 <OffersIcon /> <span>offer_items</span>
                  </Link>
                <Link to="/admin/orders" className="nav-item">
                    <OrdersIcon /> <span>Gestion Commandes</span>
                </Link>
                <Link to="/admin/catalog" className="nav-item">
                    <SettingsIcon /> <span>Paramétres</span>
                </Link>
            </nav>
        </aside>
    );

    const OfferTable = () => (
        <div className="admin-content-box full-width-table">
            <div className="table-header-controls">
                {/* Titre interne du tableau (en orange) */}
                <h2>Liste Complète des Offres Publiées</h2>
                <button className="add-offer-btn" onClick={() => handleAction(null, 'Publier Nouvelle Offre')}>
                    + Publier Nouvelle Offre
                </button>
            </div>

            <div className="table-wrapper">
                <table className="offer-management-table">
                    <thead>
                        <tr>
                            <th>TITRE OFFRE</th>
                            <th>DONATEUR</th>
                            <th>LOCALISATION</th>
                            <th>DISPONIBLE DE</th>
                            <th>DISPONIBLE À</th>
                            <th>DESCRIPTION</th>
                            <th>STATUT</th>
                            <th>NOTES ADMIN</th>
                            <th>CRÉÉ LE</th>
                            <th className="action-column">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {offers.map((offer) => (
                            <tr key={offer.id}>
                                <td>{offer.title}</td>
                                <td>{offer.donor}</td>
                                <td title={offer.localization}>{offer.localization}</td>
                                <td>{offer.available_from}</td>
                                <td>{offer.available_to}</td>
                                <td title={offer.description}>{offer.description.substring(0, 30)}...</td>
                                <td>
                                    <span className={`status-badge status-${offer.status.toLowerCase()}`}>{offer.status}</span>
                                </td>
                                <td title={offer.notes_admin}>{offer.notes_admin}</td>
                                <td>{offer.created_at}</td>
                                <td className="action-column">
                                    <button onClick={() => handleAction(offer.id, 'Détails')} className="action-btn view-btn">
                                        Détails
                                    </button>
                                    <button onClick={() => handleAction(offer.id, 'Archiver')} className="action-btn archive-btn">
                                        Archiver
                                    </button>
                                    <button onClick={() => handleAction(offer.id, 'Supprimer')} className="action-btn delete-btn">
                                        Suppr.
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <div className="admin-dashboard-layout">
            <OfferSidebar />

            <div className="main-content-area">
                <header className="top-navbar">
                    <h1 className="page-title">Gestion des Offres et Dons</h1>
                    <div className="user-profile">
                        <span>Admin User</span>
                        <div className="avatar">AD</div>
                    </div>
                </header>

                <main className="dashboard-body">
                    {/* Titre principal harmonisé */}
                    <h2 className="main-table-title"></h2>

                    <OfferTable />
                </main>
            </div>
        </div>
    );
};

export default OfferManagement;