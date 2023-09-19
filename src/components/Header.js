import React from 'react'
import Navbar from './Navbar'

export default function Header() {
    return (
        <header className="flex justify-between items-center border border-slate-500">
{/*             <Image 
                src='/logo.svg'
                width={100}
                height={100}
                alt="Timbol Logo"
            /> */}<div>Logo</div>
            <Navbar />
        </header>
    )
}