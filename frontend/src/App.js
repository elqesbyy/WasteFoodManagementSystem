import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// استيراد الصفحات
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ClaimFood from './pages/ClaimFood';
import ClaimForm from './pages/ClaimForm';
import DonateFood from './pages/DonateFood';
import LoginPage from './pages/LoginForm';
import Footer from './components/Footer';

// الـ Wrapper اللي كيتحكم في الـ Footer
const Layout = ({ children }) => {
    const location = useLocation();

    // ضفنا '/claim' لهاد القائمة باش يبان فيها الـ Footer
    const showFooterPaths = ['/', '/home', '/about', '/contact', '/claim'];
    const shouldShowFooter = showFooterPaths.includes(location.pathname);

    return (
        <>
            <nav className="bg-white shadow-sm p-4 flex justify-center gap-6 font-bold text-green-700">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/claim">Claim Food</Link>
                <Link to="/donate">Donate</Link>
                <Link to="/login" className="text-gray-500">Login</Link>
            </nav>

            <main className="min-h-screen">
                {children}
            </main>

            {/* الـ Footer غايبان دابا حتى في صفحة Claim */}
            {shouldShowFooter && <Footer />}
        </>
    );
};

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/claim" element={<ClaimFood />} />
                    <Route path="/confirm-claim" element={<ClaimForm />} />
                    <Route path="/donate" element={<DonateFood />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;