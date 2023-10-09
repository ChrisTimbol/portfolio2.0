'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Hamburger from './Hamburger';

export default function Header() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const closeNavbar = () => {
    setIsNavbarVisible(false);
    setIsOpen(false); // Reset isOpen state of Hamburger component
  };

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
    setIsOpen(!isOpen); // Toggle isOpen state of Hamburger component

  };

  return (
    <header className="absolute flex justify-center w-full"> {/* Background */}
      <div className="max-w-screen-xl p-4  flex flex-col md:flex-row justify-center items-center w-full"> {/* max-w-screen */}

        <div className=" flex justify-between w-full items-center">
          <Link href="/" className="text-white font-robotoSerif text-xl md:text-2xl  hover:text-cyan-400 ">
            TIMBOL<span className="text-xs md:text-sm">.DEV</span>
          </Link>
          <div className="md:hidden hover:text-cyan-400 ">
            <Hamburger onClick={toggleNavbar} isOpen={isOpen} setIsOpen={setIsOpen} />

          </div>
        </div>
        <nav className={`w-full z-10 text-slate-100 font-robotoSerif md:flex ${isNavbarVisible ? 'flex  flex-col md:flex-row' : 'hidden'}`}>
          <ul className="flex justify-center items-center md:justify-around w-full flex-col md:flex-row">

            <li className="text-xl w-full hover:text-cyan-400" onClick={closeNavbar}>
              <Link className="w-full flex  justify-center " href="/">
                Home
              </Link>
            </li>

            <li className="text-xl w-full hover:text-cyan-400" onClick={closeNavbar}>
              <Link className="w-full  flex  justify-center " href="/blog">
                Blog
              </Link>
            </li>
            <li className="text-xl w-full hover:text-cyan-400" onClick={closeNavbar}>
              <Link className="w-full  flex  justify-center " href="/who">
                Who
              </Link>
            </li>
            <li className="text-xl w-full hover:text-cyan-400" onClick={closeNavbar}>
              <Link className="w-full flex  justify-center " href="/work">
                Work
              </Link>
            </li>
          </ul>

        </nav>
      </div>
    </header >
  );
}
