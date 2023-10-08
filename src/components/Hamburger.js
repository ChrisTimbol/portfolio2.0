'use client';
import React, { useState } from 'react';

const Hamburger = ({ onClick, isOpen, setIsOpen }) => {

    const handleClick = () => {
        setIsOpen(!isOpen); 
        onClick(); // Call the onClick function passed as a prop
    };

    return (
        <div className="p-4">
            <button
                className="text-white focus:outline-none"
                onClick={handleClick}
            >
                <div className={`h-0.5 w-6 mb-1 bg-white transition-transform duration-300 transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <div className={`h-0.5 w-6 my-1 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <div className={`h-0.5 w-6 mt-1 bg-white transition-transform duration-300 transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
        </div>
    );
};

export default Hamburger;
