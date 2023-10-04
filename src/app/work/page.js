'use client'
import React, { useRef, useState, useEffect } from 'react';
import Project from '@/components/Project';
import Image from 'next/image'
import {projects} from '@/components/projects'
export default function Work() {
    const projectRefs = useRef([]);

    return (
        <>
            <div className="relative">
                <Image src="aboutwav.svg" width={400} height={400} alt="About Wave" />
            </div>
            <main className="p-4 h-full w-full  space-y-12 bg-gradient-to-b from-cyan-600 via-cyan-900 to-cyan-600 text-cyan-50 relative ">
            <h2 className=" text-3xl text-white font-robotoSerif font-semibold ">Work</h2>

                <ul className="space-y-12 py-12">
                   {/*  <div className="h-[50vh]"></div> */}
                    {projects.map((project, index) => (
                        <li key={index} ref={(el) => (projectRefs.current[index] = el)}>
                            <Project title={project.title} thumbnail={project.thumbnail} description={project.description} github={project.github} website={project.website}/>
                        </li>
                    ))}
                </ul>
            </main>


        </>
    );
}
