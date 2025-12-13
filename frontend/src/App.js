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
// Assurez-vous que ces chemins correspondent à votre structure (ex: .js pour les fichiers)
import HomePage from './pages/HomePage';       // Page d'accueil
import LoginPage from './pages/LoginForm';     // Page de Connexion (LoginForm.js)
import RegisterPage from './pages/RegisterForm'; // Page d'Inscription (RegisterForm.js)


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


        {/* ====================================== */}
        {/* --- 2. ROUTES ADMINISTRATIVES (ADMIN) --- */}
        {/* ====================================== */}

        {/* Dashboard (peut être accessible aussi via /admin-dashboard) */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

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

        {/* --- Route par défaut/404 (Optionnel : décommenter si vous avez un composant NotFoundPage) --- */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}

      </Routes>
    </Router>
  );
}

export default App;