import React from 'react';
import { MapPin, Clock, Search, Filter } from 'lucide-react';

const ClaimFood = () => {
    const donations = [
        { id: 1, title: "Organic Vegetables Box", time: "4 hours left", location: "Green Market, Downtown", category: "Vegetables", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400" },
        { id: 2, title: "Assorted Pastries", time: "2 hours left", location: "Sweet Delights Bakery", category: "Bakery", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=400" },
        { id: 3, title: "Vegetarian Lunch Meals", time: "1 hour left", location: "Community Center", category: "Meals", img: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=400" }
    ];

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Search Header */}
            <div className="bg-white border-b py-8 px-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6">Claim Fresh Food</h1>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                            <input type="text" placeholder="Search food, locations..." className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none" />
                        </div>
                        <div className="flex gap-2">
                            <button className="bg-green-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-green-700">All</button>
                            <button className="bg-white border text-gray-600 px-6 py-2 rounded-xl font-medium hover:bg-gray-50">Vegetables</button>
                            <button className="bg-white border text-gray-600 px-6 py-2 rounded-xl font-medium hover:bg-gray-50">Bakery</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Food Grid */}
            <div className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {donations.map((item) => (
                    <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                        <div className="relative h-48 overflow-hidden">
                            <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-green-700">Available Now</span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center text-gray-500 text-sm gap-2">
                                    <Clock size={16} className="text-orange-500" />
                                    <span>Expiring in: <span className="font-medium text-gray-800">{item.time}</span></span>
                                </div>
                                <div className="flex items-center text-gray-500 text-sm gap-2">
                                    <MapPin size={16} className="text-green-500" />
                                    <span>{item.location}</span>
                                </div>
                            </div>
                            <button className="w-full bg-black text-white py-3 rounded-2xl font-bold hover:bg-gray-800 transition transform active:scale-95">
                                Claim This Item
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClaimFood;