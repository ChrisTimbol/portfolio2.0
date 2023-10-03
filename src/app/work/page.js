'use client'
import React, { useRef, useState, useEffect } from 'react';
import Project from '@/components/Project';
import Image from 'next/image';
import { ArrowIcon } from '@/components/Icons';
const projects = [
    { title: 'Project 1', description: 'Description 1Description 1Description 1Descriptiasdasasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddasdasdasdasdasdasdsaon 1Description 1Description 1Description 1' },
    { title: 'Project 2', description: 'Description 2Description 1Description 1Description 1Description 1' },
    { title: 'Project 3', description: 'Description Description 1Description 1Description 1Description 13' }
];

export default function Work() {
    const projectRefs = useRef([]);
    const [showBackToTop, setShowBackToTop] = useState(false);

    const scrollToProject = (index) => {
        projectRefs.current[index].scrollIntoView({ behavior: 'smooth' });
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

    const handleBackToTopClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <main className="h-full px-2 py-12 h-auto w-full bg-gradient-to-b from-cyan-50 via-cyan-100 to-cyan-50 text-black leading-loose flex">
                <div className="flex-3">
                    {projects.map((project, index) => (
                        <div key={index} ref={(el) => (projectRefs.current[index] = el)}>
                            <Project title={project.title} description={project.description} />
                        </div>
                    ))}
                </div>
            </main>
            {showBackToTop && (
                <button
                    onClick={handleBackToTopClick}
                    className="fixed bottom-4 right-4 bg-cyan-300 hover:bg-blue-600 text-white py-2 px-4 rounded-full cursor-pointer"
                >
                    Go to top
                    <ArrowIcon />
                </button>
            )}
        </>
    );
}
