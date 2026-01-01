import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react'; // حتاجي تثبتي lucide-react

const Footer = () => {
    return (
        <footer className="bg-[#0a0a0a] text-gray-400 py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Brand Section */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <div className="bg-green-600 p-1.5 rounded-lg text-white font-bold text-xl">D</div>
                        <span className="text-white text-2xl font-bold tracking-tight">DonEat</span>
                    </div>
                    <p className="text-sm leading-relaxed">
                        Reducing global food waste through intelligent logistics and community action.
                    </p>
                </div>

                {/* Navigation Section */}
                <div>
                    <h3 className="text-white font-bold mb-6 text-lg">Navigation</h3>
                    <ul className="space-y-3 text-sm">
                        <li><Link to="/" className="hover:text-green-500 transition-colors">Home</Link></li>
                        <li><Link to="/about" className="hover:text-green-500 transition-colors">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-green-500 transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Services Section */}
                <div>
                    <h3 className="text-white font-bold mb-6 text-lg">Services</h3>
                    <ul className="space-y-3 text-sm">
                        <li><Link to="/donate" className="hover:text-green-500 transition-colors">Donate Food</Link></li>
                        <li><Link to="/claim" className="hover:text-green-500 transition-colors">Find Food</Link></li>
                        <li><Link to="#" className="hover:text-green-500 transition-colors">Partner Program</Link></li>
                    </ul>
                </div>

                {/* Connect Section */}
                <div>
                    <h3 className="text-white font-bold mb-6 text-lg">Connect</h3>
                    <div className="flex gap-4 mb-6">
                        <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
                        <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
                        <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
                    </div>
                    <a href="mailto:contact@doneat.io" className="flex items-center gap-2 text-sm hover:text-white">
                        <Mail className="w-4 h-4" />
                        contact@doneat.io
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto border-t border-gray-800 mt-12 pt-8 text-center text-xs">
                © 2026 DonEat. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;