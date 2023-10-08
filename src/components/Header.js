'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Hamburger from './Hamburger';

export default function Header() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <header className="bg-slate-950 p-4 flex flex-col md:flex-row justify-between items-center w-full">
      <div className="flex justify-between w-full items-center">


        <Link href="/" className="text-white font-robotoSerif text-xl md:text-2xl hover:text-cyan-400 ">
          TIMBOL<span className="text-xs md:text-sm">.DEV</span>
        </Link>

        <div className="md:hidden hover:text-cyan-400 ">
          <Hamburger onClick={toggleNavbar} />

        </div>
      </div>
      <nav className={`w-full z-10 text-slate-100 font-robotoSerif md:flex ${isNavbarVisible ? 'flex  flex-col md:flex-row' : 'hidden'}`}>
        <ul className="flex justify-center items-center md:justify-around w-full flex-col md:flex-row">
          <Link className="w-full  " href="/">
            <li className="text-xl w-full flex  justify-center hover:text-cyan-400">
              Home
            </li>
          </Link>
          <Link className="w-full " href="/blog">
            <li className="text-xl w-full  flex justify-center hover:text-cyan-400">
              Blog
            </li>
          </Link>
          <Link className="w-full " href="/who">
            <li className="text-xl w-full  flex justify-center hover:text-cyan-400">
              Who
            </li>
          </Link>
          <Link className="w-full " href="/work">
            <li className="text-xl w-full  flex justify-center hover:text-cyan-400">
              Work
            </li>
          </Link>
        </ul>

      </nav>
    </header >
  );
}
