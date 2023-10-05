'use client'
import React, { useRef, useState, useEffect } from 'react';
import Project from '@/components/Project';
import Image from 'next/image';
import { projects } from '@/components/projects';

export default function Work() {
    const projectRefs = useRef([]);

    useEffect(() => {
        // Your logic for handling responsive behavior here
    }, []); // Empty dependency array ensures the effect runs once after the initial render

    return (
        <>
{/*             <div className="relative h-64 ">
                <Image src="aboutwav.svg" className="object-cover" fill priority alt="About Wave" />
            </div> */}
            <main className="min-h-screen flex justify-center px-4 h-full w-full space-y-16  bg-slate-950 text-slate-50 relative ">
            <section className="px-4 space-y-12 bg-slate-950 pb-12  w-full flex flex-col items-center justify-center ">

                <h2 className="text-5xl text-cyan-400 font-robotoSerif font-semibold text-center p-8">Work</h2>
                <div className="max-w-screen-xl grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 px-4 max-w-screen-l mx-auto">
                    {projects.map((project, index) => (
                        <div key={index} ref={(el) => (projectRefs.current[index] = el)}>
                            <Project title={project.title} thumbnail={project.thumbnail} description={project.description} github={project.github} website={project.website} />
                        </div>
                    ))}
                </div>
                </section>
            </main>
        </>
    );
}