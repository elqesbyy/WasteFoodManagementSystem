// frontend/src/pages/CategoryManagement.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';
import './CategoryManagement.css';

// --- Icônes (Réutilisées) ---
const UsersIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>);
const OffersIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>);
const HomeIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>);
// Icône pour les Catégories (une étiquette ou des listes)
const CategoryIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>);
const OrdersIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>);


// --- DONNÉES FACTICES ---
const dummyCategories = [
    { id: 1, name: 'Fruits & Légumes', description: 'Produits frais, incluant fruits de saison et légumes racines.', created_at: '2023-01-01' },
    { id: 2, name: 'Boulangerie & Pâtisserie', description: 'Pains, viennoiseries, gâteaux et desserts.', created_at: '2023-03-15' },
    { id: 3, name: 'Produits Laitiers', description: 'Lait, yaourts, fromages et œufs.', created_at: '2023-08-20' },
    { id: 4, name: 'Viandes & Poissons', description: 'Protéines animales, incluant volailles et produits de la mer.', created_at: '2024-01-05' },
];

const CategoryManagement = () => {
    // Nous utilisons 'categories' et non 'setCategories' pour éviter les warnings pour l'instant
    const [categories] = useState(dummyCategories);

    const handleAction = (categoryId, actionType) => {
        alert(`${actionType} sur la Catégorie ID: ${categoryId}. Implémentation API nécessaire.`);
    };

    const CategorySidebar = () => (
        <aside className="sidebar">
            <div className="sidebar-header">
                <span className="logo-don">Don</span>
                <span className="logo-eat">Eat</span>
            </div>
            <nav className="sidebar-nav">
                <Link to="/admin-dashboard" className="nav-item">
                    <HomeIcon /> <span>Dashboard</span>
                </Link>
                <Link to="/admin/users" className="nav-item">
                    <UsersIcon /> <span>Gestion Users</span>
                </Link>
                <Link to="/admin/offers" className="nav-item">
                    <OffersIcon /> <span>Offres & Dons</span>
                </Link>
                <Link to="/admin/orders" className="nav-item">
                    <OrdersIcon /> <span>Gestion Commandes</span>
                </Link>
                {/* Lien Actif pour Catégories */}
                <Link to="/admin/categories" className="nav-item active">
                    <CategoryIcon /> <span>Gestion Catégories</span>
                </Link>
            </nav>
        </aside>
    );

    const CategoryTable = () => (
        <div className="admin-content-box full-width-table">
            <div className="table-header-controls">
                <h2>Liste des Catégories Disponibles</h2>
                <button className="add-category-btn" onClick={() => handleAction(null, 'Ajout')}>
                    + Ajouter Catégorie
                </button>
            </div>

            <div className="table-wrapper">
                <table className="category-management-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOM</th>
                            <th>DESCRIPTION</th>
                            <th>CRÉÉ LE</th>
                            <th className="action-column">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category) => (
                            <tr key={category.id}>
                                <td>{category.id}</td>
                                <td>{category.name}</td>
                                <td>{category.description.substring(0, 80)}...</td>
                                <td>{category.created_at}</td>
                                <td className="action-column">
                                    <button onClick={() => handleAction(category.id, 'Editer')} className="action-btn edit-btn">
                                        Éditer
                                    </button>
                                    <button onClick={() => handleAction(category.id, 'Supprimer')} className="action-btn delete-btn">
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
            <CategorySidebar />

            <div className="main-content-area">
                <header className="top-navbar">
                    <h1 className="page-title">Gestion des Catégories</h1>
                    <div className="user-profile">
                        <span>Admin User</span>
                        <div className="avatar">AD</div>
                    </div>
                </header>

                <main className="dashboard-body">
                    <h2 className="main-table-title">Gestion Complète des Catégories (Table 'categories')</h2>

                    <CategoryTable />
                </main>
            </div>
        </div>
    );
};

export default CategoryManagement;