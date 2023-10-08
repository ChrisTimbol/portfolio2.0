'use client'
import React, { useState, useLayoutEffect } from 'react';
import Hamburger from '@/components/Hamburger';
import Link from 'next/link';




export default function Navbar() {
    const [menu, setMenu] = useState(true);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    const closeMenu = () => {
        setMenu(false);
    };

    /* Disables scrolling when Hamburger menu */
    /*     useLayoutEffect(() => {
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
        }, [menu]); */

    return (
        <>
            <nav className={`h-full z-10  text-slate-100 font-robotoSerif `}>
             

                <ul className="flex w-full border-2 justify-around">
                    <li>
                        <Link onClick={closeMenu} href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} href="/blog">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} href="/who">
                            Who
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} href="/work">
                            Work
                        </Link>
                    </li>
                </ul>

            </nav >


        </>
    );
}






/*                         <ul className='fixed bottom-0 h-3/4 right-0 w-3/4 border-slate-800 flex flex-col justify-around border-t-2 border-l-2 '>
                            <Link className="flex-grow" onClick={closeMenu} href="/">
                                <li className='h-full text-4xl hover:border hover:border-slate-300 flex justify-center items-center w-full transition duration-300 ease-in-out hover:bg-slate-500 hover:bg-opacity-25'>
                                    Home
                                </li>
                            </Link>
                            <Link className="flex-grow" onClick={closeMenu} href="/blog">
                            <li className='h-full text-4xl hover:border hover:border-slate-300 flex justify-center items-center w-full transition duration-300 ease-in-out hover:bg-slate-500 hover:bg-opacity-25'>
                                    Blog
                                </li>
                            </Link>
                            <Link className="flex-grow" onClick={closeMenu} href="/who">
                            <li className='h-full text-4xl hover:border hover:border-slate-300 flex justify-center items-center w-full transition duration-300 ease-in-out hover:bg-slate-500 hover:bg-opacity-25'>
                                    Who
                                </li>
                            </Link>
                            <Link className="flex-grow" onClick={closeMenu} href="/work">
                            <li className='h-full text-4xl hover:border hover:border-slate-300 flex justify-center items-center w-full transition duration-300 ease-in-out hover:bg-slate-500 hover:bg-opacity-25'>
                                    Work
                                </li>
                            </Link>
                        </ul>
                         */