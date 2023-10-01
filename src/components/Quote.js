'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Quote() {
    const quote = "Excellence is an art won by training and habituation. — Socrates";
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index <= quote.length) {
                setTypedText(quote.slice(0, index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 100); // Adjust typing speed by changing the interval duration

        return () => {
            clearInterval(interval);
        };
    }, []); // Empty dependency array ensures useEffect runs once after initial render

    return (
        <div className="spacer bg-cyan-950 w-full h-full flex justify-center text-white items-center">
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="h-12"
                style={{ width: '400px', textAlign: 'center' }}
            >
                {typedText}
            </motion.div>
        </div>
    );
}