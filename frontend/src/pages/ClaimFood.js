import React from 'react';
import { useNavigate } from 'react-router-dom';

const ClaimFood = () => {
    const navigate = useNavigate();

    // داتا تجريبية باش يبان ليك التصميم (هادي لي غاتجي من الـ Food-Service لاحقا)
    const foodItems = [
        {
            id: 1,
            title: "Organic Vegetables Box",
            expiryTime: "4 hours left",
            location: "Green Market, Downtown",
            image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400"
        },
        {
            id: 2,
            title: "Assorted Pastries",
            expiryTime: "2 hours left",
            location: "Sweet Delights Bakery",
            image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=400"
        },
        {
            id: 3,
            title: "Vegetarian Lunch Meals",
            expiryTime: "1 hour left",
            location: "Community Center",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400"
        }
    ];

    const handleClaimClick = (item) => {
        // الانتقال لصفحة التأكيد مع صيفط المعلومات
        navigate('/confirm-claim', {
            state: {
                itemId: item.id,
                itemTitle: item.title
            }
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <h1 className="text-3xl font-bold text-center mb-10 text-green-800">Available Food Near You</h1>

            {/* Grid display for items */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {foodItems.map((item) => (
                    <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-transform hover:scale-105">
                        {/* Image Section */}
                        <div className="relative">
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-green-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                Available Now
                            </span>
                        </div>

                        {/* Content Section */}
                        <div className="p-5">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                            <div className="space-y-2 mb-6 text-sm">
                                <div className="flex items-center text-orange-600">
                                    <span className="mr-2">🕒</span> Expiring in: {item.expiryTime}
                                </div>
                                <div className="flex items-center text-gray-500">
                                    <span className="mr-2">📍</span> {item.location}
                                </div>
                            </div>

                            {/* Button */}
                            <button
                                onClick={() => handleClaimClick(item)}
                                className="w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-all active:scale-95"
                            >
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