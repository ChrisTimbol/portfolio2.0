'use client'
import Hamburger from '@/components/Hamburger'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu) 
    }
    const closeMenu = () => {
        setMenu(false); 
    }
    return (
        <>
            <div  className="relative z-30 " onClick={toggleMenu}>
                <Hamburger closeMenu={menu} />
          
            </div>
            {menu && (
                <div className='fixed bottom-0 left-0 w-full h-full z-10 bg-opacity-80 backdrop-blur bg-gray-600 backdrop-blur text-white'>
                    <nav className="flex flex-col h-5/6 justify-between h-full">
                        <ul className='px-2 flex flex-col items-start justify-around h-full'>
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