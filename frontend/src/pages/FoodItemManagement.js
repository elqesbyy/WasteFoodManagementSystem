// frontend/src/pages/FoodItemManagement.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';
import './FoodItemManagement.css';

// --- Icônes (Réutilisées) ---
const UsersIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>);
const OffersIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>);
const HomeIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>);
const FoodItemIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>);
const OrdersIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>);


// --- DONNÉES FACTICES (Produits Alimentaires ALIGNÉES sur le Schéma SQL) ---
const dummyFoodItems = [
    {
        id: 101,
        name: 'Pommes Rouges',
        description: 'Lot de pommes Golden ou Gala de première qualité.',
        category_id: 1, // Ex: Fruits & Légumes
        created_at: '2024-10-01',
        updated_at: '2024-12-10'
    },
    {
        id: 102,
        name: 'Baguette Tradition',
        description: 'Baguette fraîche, cuite le matin même.',
        category_id: 2, // Ex: Boulangerie
        created_at: '2024-10-05',
        updated_at: '2024-12-05'
    },
    {
        id: 103,
        name: 'Yaourts Nature',
        description: 'Pack de 8 yaourts nature 0% de matières grasses.',
        category_id: 3, // Ex: Produits Laitiers
        created_at: '2024-11-20',
        updated_at: '2024-11-20'
    },
    {
        id: 104,
        name: 'Filet de Poulet',
        description: 'Viande fraîche, DLC courte.',
        category_id: 4, // Ex: Viandes & Poissons
        created_at: '2024-12-01',
        updated_at: '2024-12-01'
    },
];

const FoodItemManagement = () => {
    const [foodItems] = useState(dummyFoodItems);

    const handleAction = (foodItemId, actionType) => {
        alert(`${actionType} sur l'Article ID: ${foodItemId}. Implémentation API nécessaire.`);
    };

    const FoodItemSidebar = () => (
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
                 <Link to="/admin/categories" className="nav-item">
                      <OffersIcon /> <span>Categories</span>
                 </Link>
                <Link to="/admin/food_items" className="nav-item active">
                      <FoodItemIcon /> <span>food_items</span>
                </Link>

                <Link to="/admin/offers" className="nav-item">
                    <OffersIcon /> <span>Offres </span>
                </Link>
                <Link to="/admin/offer_items" className="nav-item">
                     <OffersIcon /> <span>offer_items</span>
                 </Link>
                <Link to="/admin/orders" className="nav-item">
                    <OrdersIcon /> <span>Gestion Commandes</span>
                </Link>
                <Link to="/" className="nav-item ">
                    <OffersIcon /> <span>Paramétres</span>
                </Link>

            </nav>
        </aside>
    );

    const FoodItemTable = () => (
        <div className="admin-content-box full-width-table">
            <div className="table-header-controls">
                <h2>Liste des Produits Alimentaires (Food Items)</h2>
                <button className="add-category-btn" onClick={() => handleAction(null, 'Ajout')}>
                    + Ajouter Produit
                </button>
            </div>

            <div className="table-wrapper">
                <table className="category-management-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOM</th>
                            <th>DESCRIPTION</th> {/* Changé */}
                            <th>CAT. ID</th>     {/* Changé */}
                            <th>CRÉÉ LE</th>
                            <th>MAJ LE</th>      {/* Ajouté car présent dans le SQL (updated_at) */}
                            <th className="action-column">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {foodItems.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td title={item.description}>
                                    {item.description.substring(0, 40)}...
                                </td>
                                <td>{item.category_id}</td>
                                <td>{item.created_at}</td>
                                <td>{item.updated_at}</td> {/* Affiché */}
                                <td className="action-column">
                                    <button onClick={() => handleAction(item.id, 'Editer')} className="action-btn edit-btn">
                                        Éditer
                                    </button>
                                    <button onClick={() => handleAction(item.id, 'Supprimer')} className="action-btn delete-btn">
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
            <FoodItemSidebar />

            <div className="main-content-area">
                <header className="top-navbar">
                    <h1 className="page-title">Gestion des Produits Alimentaires</h1>
                    <div className="user-profile">
                        <span>Admin User</span>
                        <div className="avatar">AD</div>
                    </div>
                </header>

                <main className="dashboard-body">

                    <FoodItemTable />
                </main>
            </div>
        </div>
    );
};

export default FoodItemManagement;