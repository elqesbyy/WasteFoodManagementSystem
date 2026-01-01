import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-green-600 text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">WasteFood System</h1>
                <div className="space-x-6">
                    <Link to="/" className="hover:text-green-200">Home</Link>
                    <Link to="/about" className="hover:text-green-200">About Us</Link>
                    <Link to="/claim" className="hover:text-green-200">Claim Food</Link>
                    <Link to="/login" className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold">Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;