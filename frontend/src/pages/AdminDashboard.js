// frontend/src/pages/AdminDashboard.js
import React from 'react';
import './AdminDashboard.css'; // LIAISON CSS CONFIRMÉE
import { Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaHandsHelping, FaBoxOpen, FaThList } from 'react-icons/fa';
// --- Données factices de Catégories (Copiez ceci) ---
const dummyCategories = [
    { id: 1, name: 'Fruits & Légumes', offers_count: 45, created_at: '2023-01-01' },
    { id: 2, name: 'Boulangerie & Pâtisserie', offers_count: 30, created_at: '2023-03-15' },
    { id: 3, name: 'Produits Laitiers', offers_count: 12, created_at: '2023-08-20' },
];

// --- 1. COMPOSANT : Sidebar ---
const Sidebar = () => {
    const location = useLocation();

    const navItems = [
        { path: '/admin-dashboard', icon: FaTachometerAlt, label: 'Dashboard' },
        { path: '/admin/users', icon: FaUsers, label: 'Gestion Users' },
        { path: '/admin/offers', icon: FaHandsHelping, label: 'Offres & Dons' },
        { path: '/admin/orders', icon: FaBoxOpen, label: 'Gestion Commandes' },
        { path: '/admin/categories', icon: FaThList, label: 'Catalogue (Food Items)' },
    ];

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <span className="logo-don">Don</span><span className="logo-eat">Eat</span>
            </div>
            <nav className="sidebar-nav">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`nav-item ${location.pathname.includes(item.path) ? 'active' : ''}`}
                    >
                        <item.icon size={20} />
                        {item.label}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

// --- 2. COMPOSANT : Top Navbar (Simplifié) ---
const TopNavbar = () => (
    <div className="top-navbar">
        <h1 className="page-title">Dashboard</h1>
        <div className="user-profile">
            Admin User
            <div className="avatar">AD</div>
        </div>
    </div>
);

// --- 3. COMPOSANT : Tableau des Catégories sur le Dashboard ---
const RecentCategories = () => (
    <div className="admin-content-box" style={{ padding: '20px' }}> {/* Padding ajusté pour cet exemple */}
        <h3 className="content-box-title">Dernières Catégories Créées</h3>
        <p className="subtitle-link"><Link to="/admin/categories">Voir la gestion complète des Catégories</Link></p>

        <div className="table-wrapper">
            <table className="dashboard-categories-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOM</th>
                        <th>OFFRES ACTIVES</th>
                        <th>CRÉÉ LE</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyCategories.map((category) => (
                        <tr key={category.id}>
                            <td>{category.id}</td>
                            <td>{category.name}</td>
                            <td>{category.offers_count}</td>
                            <td>{category.created_at}</td>
                            <td>
                                <Link to={`/admin/categories?edit=${category.id}`} className="action-btn edit-btn">Éditer</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

// --- 4. COMPOSANT PRINCIPAL : AdminDashboard ---
const AdminDashboard = () => {
    // --- Composant KPI Card factice (juste pour la structure de la grille) ---
    const KpiCard = ({ title, value, color }) => (
        <div className="kpi-card" style={{ '--kpi-color': color }}>
            <div>
                <p style={{ color: color, fontSize: '14px', fontWeight: 'bold', margin: '0 0 5px 0' }}>{title}</p>
                <h2 style={{ fontSize: '28px', margin: 0 }}>{value}</h2>
            </div>
            {/* Icône factice */}
            <FaHandsHelping size={30} style={{ color: color }} />
        </div>
    );

    return (
        <div className="admin-dashboard-layout">
            <Sidebar />

            <div className="main-content-area">
                <TopNavbar />

                <div className="dashboard-body">

                    {/* KPI GRID (Grid pour les cartes) */}
                    <div className="kpi-grid">
                        <KpiCard title="Total Offres" value="154" color="#ff7f50" />
                        <KpiCard title="Utilisateurs Actifs" value="28" color="#4CAF50" />
                        <KpiCard title="Commandes en cours" value="7" color="#2196F3" />
                        <KpiCard title="Catégories" value="15" color="#9C27B0" />
                    </div>

                    {/* CONTENT GRID (Grille pour les tableaux) */}
                    <div className="content-grid">
                        {/* Colonne 1 : Inscriptions + Catégories */}
                        <div className="content-col">
                            {/* Nouvelles Inscriptions (Boîte factice) */}
                            <div className="admin-content-box" style={{marginBottom: '30px'}}>
                                 <h3 className="content-box-title">Nouvelles Inscriptions (Role: DONOR/BUYER)</h3>
                                 <p>[Tableau affichant les colonnes: user.id, user.username, user.email, user.role, user.created_at]</p>
                            </div>

                            {/* Catégories (Tableau réel) */}
                            <RecentCategories />
                        </div>

                        {/* Colonne 2 : Dernières Offres */}
                        <div className="content-col">
                            {/* Dernières Offres Publiées (Boîte factice) */}
                            <div className="admin-content-box">
                                 <h3 className="content-box-title">Dernières Offres Publiées</h3>
                                 <p>[Tableau affichant les colonnes: offer.title, offer.donor, offer.status, offer.created_at]</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;