'use client'
import React, { useState, useLayoutEffect } from 'react';
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

    /* Disables scrolling when Hamburger menu */
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
            <div className="lg:hidden relative z-30" onClick={toggleMenu}>
                <Hamburger closeMenu={menu} />
            </div>
            {menu && (
/*                 <nav className={`fixed bottom-0 left-0 w-full h-full z-10 bg-opacity-85 bg-slate-950 backdrop-blur text-slate-100 font-robotoSerif ${menu ? 'block' : 'hidden'}`}>
 */
                <nav className={`w-full h-full z-10  text-slate-100 font-robotoSerif `}>

                    {/*                         <div className=" fixed  h-3/4 w-1/4 left-0 bottom-0   flex flex-col  border-t-2 items-center border-slate-800 ">
                            <Link
                                className=" w-full  tems-center flex justify-center items-center h-full hover:border hover:border-slate-300"
                                href="https://instagram.com/christimbol">
                                <InstagramMediaIcon />
                            </Link>
                            <Link
                                className="w-full   items-center flex justify-center  h-full hover:border hover:border-slate-300"
                                href="https://www.linkedin.com/in/chris-timbol-906198144/">
                                <LinkedInMediaIcon />
                            </Link>
                            <Link
                                className=" w-full   items-center flex justify-center  h-full hover:border hover:border-slate-300"
                                href="https://github.com/ChrisTimbol">
                                <GithubMediaIcon />
                            </Link>

                            <Link
                                className=" w-full   items-center flex justify-center  h-full hover:border hover:border-slate-300"
                                href="mailto:christimbol707@gmail.com">
                                <GmailMediaIcon />
                            </Link>
                        </div> */}

                    <ul className=' border-slate-800 flex justify-around border-t-2 border-l-2 '>
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

                </nav>


            )
            }
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