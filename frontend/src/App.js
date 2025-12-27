import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// استيراد الصفحات
import AdminDashboard from './pages/AdminDashboard';
import UserManagement from './pages/UserManagement';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginForm';
import RegisterPage from './pages/RegisterForm';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ClaimFood from './pages/ClaimFood';

// مكون بسيط للـ Navbar لكي تظهر الروابط
const Navbar = () => (
    <nav className="bg-white shadow-sm p-4 flex justify-center gap-6 font-bold text-green-700">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/claim">Claim Food</Link>
        <Link to="/login" className="text-gray-500">Login</Link>
    </nav>
);

function App() {
    return (
        <Router>
            <Navbar /> {/* سيظهر الشريط في كل الصفحات */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/claim" element={<ClaimFood />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                {/* Routes Admin */}
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/users" element={<UserManagement />} />
                {/* أضيفي باقي مسارات الأدمن هنا بنفس الطريقة */}
            </Routes>
        </Router>
    );
}

export default App;