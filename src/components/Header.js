import Link from 'next/link'
import Navbar from './Navbar'
import Image from 'next/image'
export default function Header() {
    return (
        <header className="bg-teal-200 h-12  ">
            <div className="fixed top-0 z-30 flex justify-between items-center w-full p-2">
                <Link className="z-20  font-bold text-black" href="/">
                    T
                </Link>
                <Navbar />
            </div >


        </header >
    )
}