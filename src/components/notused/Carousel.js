'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';
import Image from 'next/image';

const Carousel = ({ projects }) => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const changeProject = (index) => {
        setCurrentProjectIndex(index);
    };

    return (
        <div className="h-full  border border-green-500">
         <div className="hereContainer h-1/4 border-teal-500 border">test
            
            </div>
            <motion.div
                key={currentProjectIndex}
                className="h-1/2 w-full border border-red-500 relative"
                initial={{ opacity: 0, scale: 0, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                transition={{ duration: 0.5, type: 'tween' }}
            >
                <Image
                    className="w-full h-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                    src="/example.png"
                    alt="Image for Post"
                    fill
                    priority />
            </motion.div>

            <div className="h-1/4 w-full  flex border border-red-500 justify-around items-center w-full">
                <motion.div
                    onClick={() => changeProject((currentProjectIndex - 1 + projects.length) % projects.length)}
                    className=" w-1/4 hover:scale-105 h-full justify-center cursor-pointer flex flex-col items-center hover:border hover:border-cyan-950  transition duration-300 ease-in-out">
                    <ChevronLeftIcon />

                </motion.div>

                <motion.div
                    onClick={() => changeProject((currentProjectIndex + 1) % projects.length)}
                    className=" w-1/4 hover:scale-105 h-full justify-center cursor-pointer flex flex-col items-center hover:border hover:border-cyan-950 transition duration-300 ease-in-out">
                    <ChevronRightIcon />

                </motion.div>
            </div>
        </div>
    );
};

export default Carousel;
