import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ClaimForm = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // استقبال المعلومات (ID والسمية) من الصفحة السابقة
    const { itemTitle, itemId } = location.state || { itemTitle: "Unknown Item", itemId: null };

    return (
        <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
            <div className="max-w-md w-full bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4 text-green-700">Confirm Your Claim</h2>
                <p className="text-gray-600 mb-6">
                    You are claiming: <br/>
                    <strong className="text-xl text-black">{itemTitle}</strong>
                </p>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label className="block text-sm font-medium mb-1">Pick-up Time</label>
                        <input type="time" className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Notes for Donor</label>
                        <textarea
                            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none"
                            rows="3"
                            placeholder="I will arrive in 20 mins..."
                        ></textarea>
                    </div>

                    <div className="flex gap-3 mt-6">
                        <button
                            type="button"
                            onClick={() => navigate(-1)} // الرجوع للخلف
                            className="w-1/2 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="w-1/2 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 shadow-md"
                        >
                            Confirm
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ClaimForm;