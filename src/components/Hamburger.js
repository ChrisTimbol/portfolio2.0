'use client';
import React, { useState } from 'react';
export default function Hamburger() {
    const [hamburger, setHamburger] = useState(false)
    const toggleHamburger = () => {
        setHamburger(!hamburger) /* sets inverse  */
    }
    return (
        <>
            <button onClick={toggleHamburger}>
                {hamburger ? <>
                    <div className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                ${hamburger ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}>
                    </div>
                    <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 
                ${hamburger ? 'opacity-0' : 'opacity-100'}`} >
                    </span>
                    <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                ${hamburger ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} >
                    </span>

                </> : <>
                    <div className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                    ${hamburger ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}>
                    </div>
                    <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 
                    ${hamburger ? 'opacity-0' : 'opacity-100'}`} >
                    </span>
                    <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                    ${hamburger ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} >
                    </span>

                </>
                }
            </button>
        </>

    )
}