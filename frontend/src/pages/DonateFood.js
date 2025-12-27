import React, { useState } from 'react';
import { Camera, MapPin, Clock, Utensils, Info } from 'lucide-react';
import './DonateFood.css';

const DonateFood = () => {
    const [formData, setFormData] = useState({
        title: '',
        category: 'Meals',
        quantity: '',
        expiryDate: '',
        address: '',
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Donation Submitted:", formData);
        alert("Thank you for your donation!");
    };

    return (
        <div className="donate-container">
            <div className="donate-card">
                <div className="donate-header">
                    <h1>Share Your Food</h1>
                    <p>Help reduce waste by sharing surplus food with others.</p>
                </div>

                <form onSubmit={handleSubmit} className="donate-form">
                    {/* Section: Basic Info */}
                    <div className="form-section">
                        <div className="input-group">
                            <label><Utensils size={18} /> Food Title</label>
                            <input
                                type="text"
                                placeholder="What are you donating?"
                                onChange={(e) => setFormData({...formData, title: e.target.value})}
                                required
                            />
                        </div>

                        <div className="input-row">
                            <div className="input-group">
                                <label>Category</label>
                                <select onChange={(e) => setFormData({...formData, category: e.target.value})}>
                                    <option>Meals</option>
                                    <option>Bakery</option>
                                    <option>Vegetables</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <label>Quantity</label>
                                <input
                                    type="text"
                                    placeholder="e.g. 5 meals"
                                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section: Logistics */}
                    <div className="form-section">
                        <div className="input-group">
                            <label><Clock size={18} /> Expiry Time</label>
                            <input
                                type="datetime-local"
                                onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label><MapPin size={18} /> Pickup Location</label>
                            <input
                                type="text"
                                placeholder="Your address or pickup point"
                                onChange={(e) => setFormData({...formData, address: e.target.value})}
                                required
                            />
                        </div>
                    </div>

                    {/* Section: Description & Photo */}
                    <div className="form-section">
                        <div className="input-group">
                            <label><Info size={18} /> Additional Details</label>
                            <textarea
                                placeholder="Mention allergies, storage instructions, etc."
                                onChange={(e) => setFormData({...formData, description: e.target.value})}
                            ></textarea>
                        </div>

                        <div className="image-upload-box">
                            <Camera size={32} />
                            <span>Add a photo of the food</span>
                            <input type="file" className="file-input" />
                        </div>
                    </div>

                    <button type="submit" className="donate-submit-btn">
                        List Donation Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DonateFood;