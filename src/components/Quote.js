'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Quote() {
    const quote = "Excellence is an art won by training and habituation.\n- Socrates";
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
        <div className="spacer h-32 flex justify-center text-white items-center">
            {typedText && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-base font-mono text-center"
                >
                    {typedText}
                </motion.div>
            )}
        </div>
    );
}
