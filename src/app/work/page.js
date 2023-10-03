'use client'
import React, { useRef, useState, useEffect } from 'react';
import Project from '@/components/Project';
import Image from 'next/image'
const projects = [
    { title: 'Project 1', description: 'Description 1Description 1Description on 1Description 1Description 1Description 1', thumbnail: '/example.png' },
    { title: 'Project 2', description: 'Description 2Description 1Description 1Description 1Description 1', thumbnail: '/example.png' },
    { title: 'Project 3', description: 'Description Description 1Description 1Description 1Description 13', thumbnail: '/example.png' }
];

export default function Work() {
    const projectRefs = useRef([]);

    return (
        <>
            <div className="relative">
                <Image src="aboutwav.svg" width={400} height={400} alt="About Wave" />
            </div>
            <main className="p-4 h-full w-full space-y-12 bg-gradient-to-b from-cyan-600 via-cyan-900 to-cyan-600 text-cyan-50 relative ">
            <h2 className=" text-4xl text-white font-robotoSerif font-semibold ">Work</h2>

                <ul className="space-y-12 py-12">
                   {/*  <div className="h-[50vh]"></div> */}
                    {projects.map((project, index) => (
                        <li key={index} ref={(el) => (projectRefs.current[index] = el)}>
                            <Project title={project.title} thumbnail={project.thumbnail} description={project.description} />
                        </li>
                    ))}
                </ul>
            </main>


        </>
    );
}
