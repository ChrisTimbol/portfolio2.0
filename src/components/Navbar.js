'use client'
import React, { useState, useEffect, useLayoutEffect } from 'react';
import Hamburger from '@/components/Hamburger';
import Link from 'next/link';

export default function Navbar() {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    const closeMenu = () => {
        setMenu(false);
    };

    useLayoutEffect(() => {
        if (menu) {
            // Disable scrolling when the menu is open
            document.body.style.overflow = 'hidden';
        } else {
            // Enable scrolling when the menu is closed
            document.body.style.overflow = 'auto';
        }

        // Clean up effect on component unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menu]);

    return (
        <>
            <div className="relative z-30" onClick={toggleMenu}>
                <Hamburger closeMenu={menu} />
            </div>
            {menu && (
                <div className='fixed bottom-0 left-0 w-full h-full z-10 bg-opacity-75 bg-cyan-950 backdrop-blur text-white'>
                    <nav className="w-full h-full relative text-6xl font-robotoSerif">
                        <ul className='flex flex-col w-screen justify-end items-center space-y-8 h-full'>
                            <li className=' w-full text-center py-8 transition duration-300 ease-in-out hover:bg-cyan-300 hover:bg-opacity-25'>
                                <Link onClick={closeMenu} href="/">Home</Link>
                            </li>
                            <li className=' w-full text-center py-8 transition duration-300 ease-in-out hover:bg-cyan-300 hover:bg-opacity-25'>
                                <Link onClick={closeMenu} href="/who">Who</Link>
                            </li>
                            <li className=' w-full text-center py-8 transition duration-300 ease-in-out hover:bg-cyan-300 hover:bg-opacity-25'>
                                <Link onClick={closeMenu} href="/blog">Blog</Link>
                            </li>
                            <li className=' w-full text-center py-8 transition duration-300 ease-in-out hover:bg-cyan-300 hover:bg-opacity-25'>
                                <Link onClick={closeMenu} href="/work">Work</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </>
    );
}