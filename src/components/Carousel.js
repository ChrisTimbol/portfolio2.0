'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Project from '@/components/Project';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';
const Carousel = ({ projects }) => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const changeProject = (index) => {
        setCurrentProjectIndex(index);
    };

    return (
        <div className="relative bg-gray-950">
            <AnimatePresence >

                <Project
                    key={currentProjectIndex} // Add key prop here
                    title={projects[currentProjectIndex].title}
                    description={projects[currentProjectIndex].description}
                />

            </AnimatePresence>

            <div className="absolute z-30 left-0 right-0 bottom-16 flex justify-between p-4">
                <div  onClick={() => changeProject((currentProjectIndex - 1 + projects.length) % projects.length)}>
                    <ChevronLeftIcon />

                </div>
                <div onClick={() => changeProject((currentProjectIndex + 1) % projects.length)}>
                    <ChevronRightIcon />
                </div>
            </div>
        </div>
    );
};

export default Carousel;
