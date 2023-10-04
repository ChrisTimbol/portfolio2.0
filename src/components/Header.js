'use client'
// Header.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from './Navbar';

export default function Header() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const shouldShowNavbar = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setIsNavbarVisible(shouldShowNavbar);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header className={`px-4  items-center   h-8 lg:h-16 fixed top-0 z-50 flex justify-between  w-full ${isNavbarVisible ? '' : 'hidden'}`}>
      <Link
        className="z-30 font-robotoSerif tracking-wide antialiased tracking-tighter transition-opacity duration-500 ease-in-out hover:opacity-75" href="/">
        <span className="font-semibold text-white text-xxxs  md:text-xl lg:text-2xl ">TIMBOL</span>
        <span className="bg-slate-900 text-white text-xxxxs  md:text-sm">.DEV</span>
      </Link>
      <Navbar showHamburger={isNavbarVisible} />

    </header>
  );
}
