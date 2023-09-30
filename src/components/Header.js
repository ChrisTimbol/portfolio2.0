import Link from 'next/link';
import Navbar from './Navbar';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="">
      <div className="bg-teal-300 h-8  ">

      </div>
      <div className="px-4 py-1 fixed top-0  z-50 flex justify-between  w-full ">
        <Link className=" text-2xs font-robotoSerif tracking-wide antialiased tracking-tighter transition-opacity duration-500 ease-in-out hover:opacity-75"  href="/">
          <span className="font-semibold  text-xxxs ">{/* Make fade later when scrolling */}
            TIMBOL
          </span><span className="bg-teal-900 font-black text-white text-xxxxs ">.DEV</span>
        </Link>
        <Navbar/>
      </div>

    </header>
  );
}
