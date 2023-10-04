'use client';
import React, { useState, useEffect } from 'react';

export default function Hamburger(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen); /* sets inverse  */
    };

    // Use useEffect to listen for changes in props.closeMenu
    // alternatively could move useState to navbar
    useEffect(() => {
        if (props.closeMenu === false) {
            setIsOpen(false); // Reset the hamburger when closeMenu is false
        }
    }, [props.closeMenu]);

    return (
        <>
            <button className=""  onClick={toggleOpen}>
                {isOpen ? (
                    <>
                        <div
                            className={`bg-cyan-50  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}
                        ></div>
                        <span
                            className={`bg-cyan-50  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 
                  ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                        ></span>
                        <span
                            className={`bg-cyan-50  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}
                        ></span>
                    </>
                ) : (
                    <>
                        <div
                            className={`bg-cyan-50  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                      ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}
                        ></div>
                        <span
                            className={`bg-slate-50  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 
                      ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                        ></span>
                        <span
                            className={`bg-cyan-50 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                      ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}
                        ></span>
                    </>
                )}
            </button>
        </>
    );
}