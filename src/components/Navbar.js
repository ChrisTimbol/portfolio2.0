'use client'
import Hamburger from '@/components/Hamburger'
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar(props) {
    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu) /* Toggle overlay when hamburger is clicked */
    }

    const closeMenu = () => {
        setMenu(false); // Close the overlay when a link is clicked
    }

    return (
        <>
            <div className="relative z-20" onClick={toggleMenu}>
                <Hamburger closeMenu={menu} />
            </div>
            {menu && (
                <div className='fixed bottom-0 left-0 w-full h-full z-10 bg-opacity-80 backdrop-blur bg-gray-600 backdrop-blur text-emerald-500'>
                    <nav className="flex flex-col justify-between h-full">
                        <ul className='p-4 flex flex-col items-start justify-around h-full'>
                            <li className='text-5xl'><Link onClick={closeMenu} href="/">Home</Link></li>
                            <li className='text-5xl'><Link onClick={closeMenu} href="/blog">Blog</Link></li>
                            <li className='text-5xl'><Link onClick={closeMenu} href="/work">Work</Link></li>
                        </ul>
                    </nav>
                </div>
            )}
        </>
    );
}