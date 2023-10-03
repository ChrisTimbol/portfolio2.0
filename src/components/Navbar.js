'use client'
import React, { useState, useEffect, useLayoutEffect } from 'react';
import Hamburger from '@/components/Hamburger';
import Link from 'next/link';
import { GithubMediaIcon, LinkedInMediaIcon, GmailMediaIcon, InstagramMediaIcon } from './Icons';

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
                <div className='fixed bottom-0 left-0 w-full h-full z-10 bg-opacity-75 bg-cyan-950 backdrop-blur text-white '>
                    <nav className="w-full h-full relative text-6xl font-robotoSerif h-full  ">

                        <div className=" fixed h-3/4  w-1/4 left-0 bottom-0   flex flex-col justify-around items-center  border-t-2 border-r-2 border-cyan-800 ">
                            <Link
                                className="hover:scale-125 w-full  tems-center flex justify-center items-center  h-full hover:border hover:border-cyan-300"
                                href="https://instagram.com/christimbol">
                                <InstagramMediaIcon />
                            </Link>
                            <Link
                                className="hover:scale-125 w-full   items-center flex justify-center  h-full hover:border hover:border-cyan-300"
                                href="https://www.linkedin.com/in/chris-timbol-906198144/">
                                <LinkedInMediaIcon />
                            </Link>
                            <Link
                                className="hover:scale-125 w-full   items-center flex justify-center  h-full hover:border hover:border-cyan-300"
                                href="https://github.com/ChrisTimbol">
                                <GithubMediaIcon />
                            </Link>

                            <Link
                                className="hover:scale-125 w-full   items-center flex justify-center  h-full hover:border hover:border-cyan-300"
                                href="mailto:christimbol707@gmail.com">
                                <GmailMediaIcon />
                            </Link>


                        </div>
                        <ul className='fixed bottom-0 right-0 w-3/4   h-3/4 flex flex-col justify-between border-t-2 border-cyan-800'>
                            <li className=' text-center text-4xl py-8 hover:border hover:border-cyan-500 w-full transition duration-300 ease-in-out hover:bg-cyan-300 hover:bg-opacity-25'>
                                <Link onClick={closeMenu} href="/">Home</Link>
                            </li>
                            <li className=' text-center text-4xl py-8 hover:border hover:border-cyan-300 w-full transition duration-300 ease-in-out hover:bg-cyan-300 hover:bg-opacity-25'>
                                <Link onClick={closeMenu} href="/who">Who</Link>
                            </li>
                            <li className=' text-center text-4xl py-8 hover:border hover:border-cyan-300 w-full transition duration-300 ease-in-out hover:bg-cyan-300 hover:bg-opacity-25'>
                                <Link onClick={closeMenu} href="/blog">Blog</Link>
                            </li>
                            <li className=' text-center text-4xl py-8 hover:border hover:border-cyan-300 w-full transition duration-300 ease-in-out hover:bg-cyan-300 hover:bg-opacity-25'>
                                <Link onClick={closeMenu} href="/work">Work</Link>
                            </li>

                        </ul>
                    </nav>


                </div >
            )
            }
        </>
    );
}