import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// استيراد الصفحات
import AdminDashboard from './pages/AdminDashboard';
import UserManagement from './pages/UserManagement';
import OfferManagement from './pages/OfferManagement';
import OfferItemManagement from './pages/OfferItemManagement';
import FoodItemManagement from './pages/FoodItemManagement';
import OrderManagement from './pages/OrderManagement';
import CategoryManagement from './pages/CategoryManagement';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginForm'; // تأكدي أن الاسم هنا يتطابق مع الملف
import RegisterPage from './pages/RegisterForm'; // تأكدي أن الاسم هنا يتطابق مع الملف
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

function App() {
    return (
        <Router>
            <Routes>
                {/* الصفحة الرئيسية العامة */}
                <Route path="/" element={<HomePage />} />

                {/* مسار الـ Home الذي سيتم التوجيه إليه بعد التسجيل */}
                <Route path="/home" element={<HomePage />} />

                {/* صفحة تسجيل الدخول */}
                <Route path="/login" element={<LoginPage />} />

                {/* صفحة إنشاء حساب */}
                <Route path="/register" element={<RegisterPage />} />

                {/* صفحات معلوماتية */}
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutPage />} />

                {/* --- ROUTES ADMINISTRATIVES (ADMIN) --- */}
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/admin" element={<AdminDashboard />} />

                {/* إدارة البيانات (Admin) */}
                <Route path="/admin/users" element={<UserManagement />} />
                <Route path="/admin/offers" element={<OfferManagement />} />
                <Route path="/admin/offer_items" element={<OfferItemManagement />} />
                <Route path="/admin/food_items" element={<FoodItemManagement />} />
                <Route path="/admin/orders" element={<OrderManagement />} />
                <Route path="/admin/categories" element={<CategoryManagement />} />
            </Routes>
        </Router>
    );
}

export default App;