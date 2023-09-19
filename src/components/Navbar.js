"use client"; /* Transfer over to  new navmenu omponent later */
import Link from 'next/link';
import React, { useState } from 'react';
export default function Navbar() {
    const [hamburger, setHamburger] = useState(false)
    const toggleHamburger = () => {
        setHamburger(!hamburger) /* sets inverse  */
    }

    return (
        <nav className=" ">
            <button onClick={toggleHamburger}
                className="z-10">
                {hamburger ? <>
                    <div className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                        ${hamburger ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}>
                    </div>
                    <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 
                        ${hamburger ? 'opacity-0' : 'opacity-100'}`} >
                    </span>
                    <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                        ${hamburger ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} >
                    </span>


                    {/* Add a social media icon to navmenu? */}
                    <div className='fixed inset-0  overflow-hidden   bg-opacity-80 bg-gray-600'>
                        <ul className='absolute left-0 bottom-0 m-2 w-3/4 h-3/4 border  border-primary items-start flex flex-col justify-around'>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/work">Work</Link></li>
                            <li><Link href="/about">About</Link></li>
                        </ul>
                    </div>
                </> : <>
                    <div className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                            ${hamburger ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}>
                    </div>
                    <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 
                            ${hamburger ? 'opacity-0' : 'opacity-100'}`} >
                    </span>
                    <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                            ${hamburger ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} >
                    </span>
                </>
                }
            </button >
        </nav >
    )
}