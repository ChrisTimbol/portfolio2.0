/* Hamburger Animation to X when click 
    Need to understand more about state between this component and navbarstate but to tired rn
    I need to focus on just building as far as i can on this project rn 
*/
'use client';
import { useState } from 'react';
export default function Hamburger(){
    const [hamburger, setHamburger] = useState(false)
    const toggleHamburger = () => {
        setHamburger(!hamburger) /* sets inverse  */
    }

    return (
        <button onClick={toggleHamburger}
        className="">
        <div className={`bg-black block transition-all duration-300 ease-out 
    h-0.5 w-6 rounded-sm ${hamburger ?
                'rotate-45 translate-y-1' : '-translate-y-0.5'
            }`}>
        </div>
        <span className={`bg-black block transition-all duration-300 ease-out 
    h-0.5 w-6 rounded-sm my-0.5 ${hamburger ?
                'opacity-0' : 'opacity-100'
            }`} >
        </span>
        <span className={`bg-black block transition-all duration-300 ease-out 
    h-0.5 w-6 rounded-sm ${hamburger ?
                '-rotate-45 -translate-y-1' : 'translate-y-0.5'
            }`} >
        </span>
        </button>
    )
}