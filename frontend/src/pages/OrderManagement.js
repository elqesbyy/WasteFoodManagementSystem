// frontend/src/pages/OrderManagement.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';
import './OrderManagement.css'; // Le fichier CSS que nous allons créer ensuite

// --- Icônes (Réutilisation des icônes) ---
const UsersIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>);
const OffersIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>);
const HomeIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>);
const SettingsIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1.51-1V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>);
const OrdersIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>);


// --- DONNÉES FACTICES (basées sur les propositions de tables) ---
const dummyOrders = [
    {
        id: 1, buyer_id: 3, buyer_username: 'user_khadija', donor_id: 2, donor_username: 'resto_burger',
        offer_id: 101, title: 'Pains invendus', status: 'COLLECTED',
        total_amount: 5.50, order_date: '2025-12-11 18:05', collection_code: 'A1B2C',
        payment_status: 'SUCCESS', transaction_id: 'TX1234'
    },
    {
        id: 2, buyer_id: 5, buyer_username: 'user_youssef', donor_id: 4, donor_username: 'donor_bakery',
        offer_id: 102, title: 'Légumes bio', status: 'CONFIRMED',
        total_amount: 3.00, order_date: '2025-12-10 14:15', collection_code: 'F3G4H',
        payment_status: 'SUCCESS', transaction_id: 'TX5678'
    },
    {
        id: 3, buyer_id: 3, buyer_username: 'user_khadija', donor_id: 2, donor_username: 'resto_burger',
        offer_id: 103, title: 'Boissons stock', status: 'CANCELLED',
        total_amount: 10.00, order_date: '2025-12-04 16:00', collection_code: 'J9K0L',
        payment_status: 'REFUNDED', transaction_id: 'TX9012'
    },
];

const OrderManagement = () => {
    const [orders, setOrders] = useState(dummyOrders);

    const handleAction = (orderId, actionType) => {
        alert(`${actionType} sur la commande ID: ${orderId}. Implémentation API nécessaire.`);
    };

    const OrderSidebar = () => (
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
                <Link to="/admin/offers" className="nav-item">
                    <OffersIcon /> <span>Offres & Dons</span>
                </Link>
                {/* Lien Actif */}
                <Link to="/admin/orders" className="nav-item active">
                    <OrdersIcon /> <span>Gestion Commandes</span>
                </Link>
                <Link to="/admin/catalog" className="nav-item">
                    <SettingsIcon /> <span>Catalogue (Food Items)</span>
                </Link>
            </nav>
        </aside>
    );

    const OrderTable = () => (
        <div className="admin-content-box full-width-table">
            <div className="table-header-controls">
                <h2>Gestion des Commandes et Réservations</h2>
                <button className="add-order-btn" onClick={() => handleAction(null, 'Créer')}>
                    + Créer Commande Manuelle
                </button>
            </div>

            <div className="table-wrapper">
                <table className="order-management-table">
                    <thead>
                        <tr>
                            <th>Réf. Commande</th>
                            <th>Offre</th>
                            <th>Acheteur</th>
                            <th>Donateur</th>
                            <th>Date Commande</th>
                            <th>Montant Total (€)</th>
                            <th>Statut Commande</th>
                            <th>Code Retrait</th>
                            <th>Statut Paiement</th>
                            <th className="action-column">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td title={order.title}>{order.title} (ID: {order.offer_id})</td>
                                <td>{order.buyer_username} (ID: {order.buyer_id})</td>
                                <td>{order.donor_username} (ID: {order.donor_id})</td>
                                <td>{order.order_date.substring(0, 10)}</td>
                                <td>{order.total_amount.toFixed(2)} €</td>
                                <td>
                                    <span className={`status-badge status-${order.status.toLowerCase()}`}>{order.status}</span>
                                </td>
                                <td>{order.collection_code}</td>
                                <td>
                                    <span className={`payment-badge payment-${order.payment_status.toLowerCase()}`}>{order.payment_status}</span>
                                </td>
                                <td className="action-column">
                                    <button onClick={() => handleAction(order.id, 'Voir Détails')} className="action-btn view-btn">
                                        Détails
                                    </button>
                                    <button onClick={() => handleAction(order.id, 'Changer Statut')} className="action-btn update-status-btn">
                                        Statut
                                    </button>
                                    <button onClick={() => handleAction(order.id, 'Rembourser')} className="action-btn refund-btn">
                                        Rembourser
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
            <OrderSidebar />

            <div className="main-content-area">
                <header className="top-navbar">
                    <h1 className="page-title">Gestion des Commandes</h1>
                    <div className="user-profile">
                        <span>Admin User</span>
                        <div className="avatar">AD</div>
                    </div>
                </header>

                <main className="dashboard-body">
                    <OrderTable />
                </main>
            </div>
        </div>
    );
};

export default OrderManagement;