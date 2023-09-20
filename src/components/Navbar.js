"use client"; /* Transfer over to  new navmenu omponent later */
import Hamburger from '@/components/Hamburger'
import React, { useState } from 'react';
import Link from 'next/link';
export default function Navbar() {
    const [hamburger, setHamburger] = useState(false)
    const toggleHamburger = () => {
        setHamburger(!hamburger) /* sets inverse  */
    }

    return (
        <nav className=" ">
            <button onClick={toggleHamburger}>
            <Hamburger hamburger={hamburger}/>

{/*             <div className='fixed inset-0  backdrop-blur	 overflow-hidden   bg-opacity-70 bg-gray-700'>
                    <ul className='absolute left-0 bottom-0 p-2 h-5/6 w-full items-center justify-center flex flex-col justify-around'>
                        <li className='text-5xl'><Link href="/">Home</Link></li>
                        <li className='text-5xl'><Link href="/blog">Blog</Link></li>
                        <li className='text-5xl '><Link href="/work">Work</Link></li>
                        <li className='text-5xl '><Link href="/about">About</Link></li>
                    </ul>
                </div> */}

            </button>
           
        </nav >
    )
}