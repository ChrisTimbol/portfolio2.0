"use client"; /* Transfer over to  new navmenu omponent later */
import Link from 'next/link';
import React from 'react';
import Hamburger from './Hamburger';
import { useState } from 'react';
export default function Navbar() {
    const [hamburger, setHamburger] = useState(false)
    const toggleHamburger = () => {
        setHamburger(!hamburger) /* sets inverse  */
    }

    return (
        <nav className=" ">
            {hamburger ? <>
                <button onClick={toggleHamburger}
                    className="">
                    <div className={`bg-black block transition-all duration-300 ease-out 
    h-0.5 w-6 rounded-sm ${hamburger ?
                            'rotate-45 translate-y-1' : '-translate-y-0.5'
                        }`}>
                    </div>
                    <span className={`bg-black block transition-all duration-300 ease-out 
    h-0.5 w-6 rounded-sm my-0.5 ${hamburger ?
                            'opacity-0' : 'opacity-100'
                        }`} >
                    </span>
                    <span className={`bg-black block transition-all duration-300 ease-out 
    h-0.5 w-6 rounded-sm ${hamburger ?
                            '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                        }`} >
                    </span>
                </button>
                <ul className=''>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/work">Work</Link></li>
                    <li><Link href="/about">About</Link></li>
                </ul></> : <button onClick={toggleHamburger}
                    className="">
                <div className={`bg-black block transition-all duration-300 ease-out 
    h-0.5 w-6 rounded-sm ${hamburger ?
                        'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`}>
                </div>
                <span className={`bg-black block transition-all duration-300 ease-out 
    h-0.5 w-6 rounded-sm my-0.5 ${hamburger ?
                        'opacity-0' : 'opacity-100'
                    }`} >
                </span>
                <span className={`bg-black block transition-all duration-300 ease-out 
    h-0.5 w-6 rounded-sm ${hamburger ?
                        '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`} >
                </span>
            </button>
            }

        </nav>
    )
}