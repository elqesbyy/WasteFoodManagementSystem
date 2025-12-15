// frontend/src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- Importation des Composants de Page (Administratifs) ---
import AdminDashboard from './pages/AdminDashboard';
import UserManagement from './pages/UserManagement';
import OfferManagement from './pages/OfferManagement';
import OfferItemManagement from './pages/OfferItemManagement';
import FoodItemManagement from './pages/FoodItemManagement';

import OrderManagement from './pages/OrderManagement';
import CategoryManagement from './pages/CategoryManagement';

// --- Importation des Composants de Page (Publiques) ---
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginForm';
import RegisterPage from './pages/RegisterForm';

// NOUVEAUX IMPORTS
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';


function App() {
  return (
    <Router>
      <Routes>

        {/* ==================================== */}
        {/* --- 1. ROUTES PUBLIQUES (FRONT END) --- */}
        {/* ==================================== */}

        {/* Page d'Accueil */}
        <Route path="/" element={<HomePage />} />

        {/* Page de Connexion */}
        <Route path="/login" element={<LoginPage />} />

        {/* Page d'Inscription */}
        <Route path="/register" element={<RegisterPage />} />

        {/* NOUVELLE ROUTE : Page Contact */}
        <Route path="/contact" element={<ContactPage />} />

        {/* NOUVELLE ROUTE : Page About */}
        <Route path="/about" element={<AboutPage />} />


        {/* ====================================== */}
        {/* --- 2. ROUTES ADMINISTRATIVES (ADMIN) --- */}
        {/* ====================================== */}

        {/* Dashboard */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} /> {/* Redirection simple vers l'admin */}

        {/* Gestion des Utilisateurs */}
        <Route path="/admin/users" element={<UserManagement />} />

        {/* Food Items Management */}


        {/* Gestion des Offres et Dons */}
        <Route path="/admin/offers" element={<OfferManagement />} />

 <Route path="/admin/offer_items" element={<OfferItemManagement />} />
 <Route path="/admin/food_items" element={<FoodItemManagement />} />

        {/* Gestion des Commandes */}
        <Route path="/admin/orders" element={<OrderManagement />} />
{/* NOUVELLE ROUTE : Food Items Management (food_items) */}


        {/* Gestion des Catégories */}
        <Route path="/admin/categories" element={<CategoryManagement />} />

      </Routes>
    </Router>
  );
}

export default App;