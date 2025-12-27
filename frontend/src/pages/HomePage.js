import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // أضفنا useNavigate هنا

const HomePage = () => {
    const navigate = useNavigate(); // تعريف الـ navigate لاستخدامه في الأزرار

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* 1. Navigation Bar */}
            <nav className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center">
                            <span className="text-2xl font-bold text-green-600">Don</span>
                            <span className="text-2xl font-bold text-gray-800">Eat</span>
                        </div>
                        <div className="hidden md:flex space-x-8 items-center">
                            <Link to="/home" className="text-gray-600 hover:text-green-600">Home</Link>
                            <Link to="/about" className="text-gray-600 hover:text-green-600">About</Link>
                            <Link to="/contact" className="text-gray-600 hover:text-green-600">Contact</Link>
                            {/* تعديل زر Get Started ليحول لصفحة Login */}
                            <button onClick={() => navigate('/login')} className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition">Get Started</button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* 2. Hero Section */}
            <section className="bg-green-50 py-20 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
                        Stop Food Waste, <span className="text-green-600">Share the Love.</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-10">
                        Every year, tons of food go to waste while many are hungry. Join DonEat to bridge the gap between donors and those in need.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        {/* تفعيل زر Donate Food */}
                        <button
                            onClick={() => navigate('/donate')}
                            className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 shadow-lg"
                        >
                            Donate Food
                        </button>
                        {/* تفعيل زر Find Food */}
                        <button
                            onClick={() => navigate('/claim')}
                            className="bg-white text-green-600 border-2 border-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-50"
                        >
                            Find Food
                        </button>
                    </div>
                </div>
            </section>

            {/* باقي الأقسام تبقى كما هي (Stats, Recent Donations, Footer) */}
            {/* ... */}

            {/* في قسم الـ Recent Donations، تأكدي من تفعيل أزرار الـ Claim أيضا */}
            <section className="py-16 px-4 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recent Food Offers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition border border-gray-100">
                            <div className="h-48 bg-gray-200">
                                <img src={`https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60`} alt="food" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl font-bold text-gray-800">Fresh Vegetables</h3>
                                <p className="text-sm text-gray-500 mt-1">Expiry: Today, 8:00 PM</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="text-green-600 font-bold">Free</span>
                                    <button
                                        onClick={() => navigate('/claim')}
                                        className="bg-green-100 text-green-700 px-4 py-2 rounded-md hover:bg-green-200 font-medium"
                                    >
                                        Claim
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;