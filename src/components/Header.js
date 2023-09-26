import React from 'react'
import Navbar from './Navbar'

export default function Header() {
    return (
        <header className="flex justify-between items-center  border-b-[1px]  p-1 border-neutral-400">
            <div class="font-black font-inter text-2xl">Timbol</div>
            <Navbar />
        </header>
    )
}