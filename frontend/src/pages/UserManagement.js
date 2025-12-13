// frontend/src/pages/UserManagement.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css'; // Styles généraux pour le layout
import './UserManagement.css'; // Styles spécifiques au tableau

// --- Importation de la Sidebar du Dashboard (Icônes) ---
const UsersIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>);
const OffersIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>);
const HomeIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>);
const SettingsIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1.51-1V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>);
const OrdersIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>);

// Données factices des utilisateurs
const dummyUsers = [
    {
        id: 1, username: 'admin_root', email: 'admin@doneat.com', role: 'ADMIN', is_active: true, created_at: '2023-01-01', updated_at: '2025-01-01',
        phone_number: '0610101010', address: '1 rue de l\'Admin', profile_image_url: 'url_1'
    },
    {
        id: 2, username: 'resto_burger', email: 'burger@fast.com', role: 'DONOR', is_active: true, created_at: '2023-05-10', updated_at: '2025-01-05',
        phone_number: '0520202020', address: '12 Av. du Burger', profile_image_url: 'url_2'
    },
    {
        id: 3, username: 'user_khadija', email: 'khadija@mail.com', role: 'BUYER', is_active: true, created_at: '2023-06-15', updated_at: '2024-11-20',
        phone_number: '0730303030', address: 'Apt 3, Quartier Vente', profile_image_url: 'url_3'
    },
    {
        id: 4, username: 'donor_bakery', email: 'boulangerie@pain.com', role: 'DONOR', is_active: false, created_at: '2023-08-20', updated_at: '2024-09-10',
        phone_number: '0540404040', address: 'Rue des Pains', profile_image_url: 'url_4'
    },
    {
        id: 5, username: 'user_youssef', email: 'youssef@mail.com', role: 'BUYER', is_active: true, created_at: '2024-01-05', updated_at: '2024-01-05',
        phone_number: null, address: null, profile_image_url: null
    },
];

const UserManagement = () => {
    // L'ID est toujours utilisé en interne
    const [users, setUsers] = useState(dummyUsers);

    const handleAction = (userId, actionType) => {
        // L'action utilise toujours l'ID pour identifier l'utilisateur
        alert(`${actionType} sur l'utilisateur ID: ${userId}. Implémentation API nécessaire.`);
    };

    const UserSidebar = () => (
        <aside className="sidebar">
            <div className="sidebar-header">
                <span className="logo-don">Don</span>
                <span className="logo-eat">Eat</span>
            </div>
            <nav className="sidebar-nav">
                <Link to="/admin-dashboard" className="nav-item">
                    <HomeIcon /> <span>Dashboard</span>
                </Link>
                <Link to="/admin/users" className="nav-item active">
                    <UsersIcon /> <span>Gestion Users</span>
                </Link>
                <Link to="/admin/categories" className="nav-item">
                      <OffersIcon /> <span>Categories</span>
                                </Link>
                <Link to="/admin/food_items" className="nav-item">
                      <OffersIcon /> <span>food_items</span>
                                </Link>

                <Link to="/admin/offers" className="nav-item">
                    <OffersIcon /> <span>Offres</span>
                </Link>
                 <Link to="/admin/offer_items" className="nav-item">
                     <OffersIcon /> <span>offer_items</span>
                 </Link>
                <Link to="/admin/orders" className="nav-item">
                    <OrdersIcon /> <span>Gestion Commandes</span>
                </Link>
                <Link to="/" className="nav-item">
                    <SettingsIcon /> <span>Paramétres</span>
                </Link>
            </nav>
        </aside>
    );

    const UserTable = () => (
        <div className="admin-content-box full-width-table">
            <div className="table-header-controls">
                <h2>Liste Complète des Utilisateurs</h2>
                <button className="add-user-btn" onClick={() => handleAction(null, 'Ajout')}>
                    + Ajouter Utilisateur
                </button>
            </div>

            <div className="table-wrapper">
                <table className="user-management-table">
                    <thead>
                        <tr>
                            {/* COLONNE ID RETIRÉE */}
                            <th>Email</th>
                            <th>Username</th>
                            <th>Rôle</th>
                            <th>Tél.</th>
                            <th>Adresse</th>
                            <th>Statut</th>
                            <th>Image URL</th>
                            <th>Créé le</th>
                            {/* COLONNE MàJ le RETIRÉE */}
                            <th className="action-column">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className={!user.is_active ? 'inactive-row' : ''}>
                                {/* DONNÉE user.id RETIRÉE */}
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td><span className={`role-badge role-${user.role.toLowerCase()}`}>{user.role}</span></td>
                                <td>{user.phone_number || 'N/A'}</td>
                                <td title={user.address || 'N/A'}>
                                    {user.address ? user.address.substring(0, 30) + '...' : 'N/A'}
                                </td>
                                <td>
                                    <span className={`status-badge status-${user.is_active ? 'active' : 'inactive'}`}>
                                        {user.is_active ? 'Actif' : 'Inactif'}
                                    </span>
                                </td>
                                <td>{user.profile_image_url ? 'Oui' : 'Non'}</td>
                                <td>{user.created_at}</td>
                                <td className="action-column">
                                    <button onClick={() => handleAction(user.id, 'Editer')} className="action-btn edit-btn">
                                        Éditer
                                    </button>
                                    {/* BOUTON DÉSACIVTER/ACTIVER SUPPRIMÉ ICI : */}
                                    {/* <button onClick={() => handleAction(user.id, 'Désactiver')} className="action-btn deactivate-btn">
                                        {user.is_active ? 'Désactiver' : 'Activer'}
                                    </button> */}
                                    {user.role !== 'ADMIN' && (
                                        <button onClick={() => handleAction(user.id, 'Supprimer')} className="action-btn delete-btn">
                                            Suppr.
                                        </button>
                                    )}
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
            <UserSidebar />

            <div className="main-content-area">
                <header className="top-navbar">
                    <h1 className="page-title">Gestion Complète des Utilisateurs </h1>
                    <div className="user-profile">
                        <span>Admin User</span>
                        <div className="avatar">AD</div>
                    </div>
                </header>

                <main className="dashboard-body">
                    <UserTable />
                </main>
            </div>
        </div>
    );
};

export default UserManagement;