import React from 'react'
import Navbar from './Navbar'

export default function Header() {
    return (
        <header className="flex justify-between items-center border border-slate-500">
            <div>Logo</div>
            <Navbar />
        </header>
    )
}