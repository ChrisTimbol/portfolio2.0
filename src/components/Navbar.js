"use client"; /* Transfer over to  new navmenu omponent later */
import Hamburger from '@/components/Hamburger'
import React, { useState } from 'react';
import Link from 'next/link';
export default function Navbar() {
    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <nav className="">
            <div className="relative z-10" onClick={toggleMenu} >
                <Hamburger />
            </div>
            {menu && (
                <div className='fixed inset-0  backdrop-blur	 overflow-hidden   bg-opacity-70 bg-gray-700'>
                    <ul className={`absolute left-0 bottom-0 p-2 h-5/6  w-full justify-center flex flex-col justify-around `}>
                        <li className='text-5xl'><Link href="/">Home</Link></li>
                        <li className='text-5xl'><Link href="/blog">Blog</Link></li>
                        <li className='text-5xl '><Link href="/work">Work</Link></li>
                        <li className='text-5xl '><Link href="/about">About</Link></li>
                    </ul>
                </div>
            )}
        </nav >
    )
}