import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importation des trois composants de pages
import HomePage from './pages/HomePage';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';


function App() {
  return (
    <Router>
      <Routes>

        {/* Page d'Accueil : La première page que l'utilisateur voit */}
        <Route path="/" element={<HomePage />} />

        {/* Page de Connexion */}
        <Route path="/login" element={<LoginForm />} />

        {/* Page d'Inscription */}
        <Route path="/register" element={<RegisterForm />} />

        {/* Les autres routes (Dashboard, Offers, etc.) viendront ici */}

      </Routes>
    </Router>
  );
}

export default App;