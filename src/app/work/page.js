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
            <main className="flex justify-center  w-full  bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-slate-50  ">

<section className="max-w-screen-xl min-h-screen flex flex-col items-center ">
    <h2 className="text-5xl text-cyan-400  font-robotoSerif font-semibold p-4 border border-black w-full">Work </h2>
   
        <div className=" grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4 px-4 ">
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