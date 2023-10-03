'use client'
import { useState, useEffect} from 'react'
import { ArrowIcon } from './Icons';
export default function Gotopbutton() {
    const [showBackToTop, setShowBackToTop] = useState(false);

    const handleBackToTopClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const handleScroll = () => {
        const scrollY = window.scrollY;
        setShowBackToTop(scrollY > 200); // Show back to top button when user scrolls down 200px
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {showBackToTop && (
                <button
                    onClick={handleBackToTopClick}
                    className="fixed bottom-4 right-4 text-xs bg-cyan-600 hover:bg-blue-600 text-cyan-50 p-2  rounded-full cursor-pointer"
                >
                    jump to top
                    <ArrowIcon />
                </button>
            )}
        </>
    )
}