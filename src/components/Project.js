'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Project(props) {
    return (
        <div className="min-w-full h-screen">
            {/* Project Container */}
            <motion.div
                className="h-2/3 border border-red-500 bg-red-500"
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '-100%' }}
                transition={{ duration: 0.5 }}
            >
                <Image
                    src="/example.png"
                    alt="Image for Post"
                    fill
                    priority
                />
            </motion.div>
            <div
                className="absolute left-0 right-0  text-center m-20"
            >
                <h2 className="text-3xl font-semibold font-robotoSerif text-cyan-100">
                    {props.title}
                </h2>
                <p className="text-lg font-roboto text-cyan-100">
                    {props.description}
                </p>
            </div>

        </div>
    )
}