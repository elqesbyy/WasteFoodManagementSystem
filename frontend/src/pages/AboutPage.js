import React from 'react';
import { Heart, Users, TrendingUp, CheckCircle } from 'lucide-react';

const AboutPage = () => {
    const steps = [
        { id: 1, title: "Donate", desc: "Restaurants and individuals list surplus food.", icon: <Heart className="text-green-600" /> },
        { id: 2, title: "Match", desc: "Our system matches food with nearby people.", icon: <Users className="text-green-600" /> },
        { id: 3, title: "Distribute", desc: "Recipients claim and collect the food.", icon: <CheckCircle className="text-green-600" /> }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-green-50 text-center px-4">
                <h1 className="text-5xl font-bold text-gray-900 mb-4">About <span className="text-green-600">DonEat</span></h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">Connecting surplus food with those who need it most, one meal at a time.</p>
            </section>

            {/* Mission Section */}
            <section className="py-16 max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Every year, tons of perfectly edible food go to waste while millions suffer from hunger.
                        DonEat was created to bridge this gap by providing a seamless platform for food donation and recovery.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-white shadow-lg rounded-2xl border-t-4 border-green-500 text-center">
                        <TrendingUp className="mx-auto mb-2 text-green-500" />
                        <h3 className="font-bold text-2xl">50K+</h3>
                        <p className="text-sm text-gray-500">Meals Saved</p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-2xl border-t-4 border-orange-500 text-center">
                        <Users className="mx-auto mb-2 text-orange-500" />
                        <h3 className="font-bold text-2xl">1,200+</h3>
                        <p className="text-sm text-gray-500">Active Donors</p>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 bg-gray-50 text-center">
                <h2 className="text-3xl font-bold mb-12">How It Works</h2>
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                    {steps.map((step) => (
                        <div key={step.id} className="bg-white p-8 rounded-3xl shadow-sm relative group hover:shadow-md transition">
                            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-gray-500">{step.desc}</p>
                            <div className="absolute top-4 right-4 text-4xl font-black text-gray-100 italic">0{step.id}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutPage;