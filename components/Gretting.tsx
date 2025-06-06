'use client';
import React from 'react';

const Gretting: React.FC = () => {
    const handleClick = () => {
        const element = document.getElementById('guestFormFormik');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <button
                onClick={handleClick}
                className="font-tanpearl px-4 py-2 bg-white text-gray-900 border border-gray-900 rounded-lg hover:bg-gray-200 shadow-lg"
                style={{ backgroundColor: "#FFFFFF00", color: "#7d9b76", borderColor: "#7d9b76", borderWidth: "2px" }}
            >
                RSVP
            </button>
        </div>
    );
};

export default Gretting;
