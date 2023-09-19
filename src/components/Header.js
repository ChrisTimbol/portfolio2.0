import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image'

export default function Header() {
    return (
        <header className="flex justify-between items-center p-2 border">
            <Image 
                src='/logo.png'
                width={100}
                height={100}
                alt="Timbol Logo"
            />
               
            <Navbar />
        </header>
    )
}