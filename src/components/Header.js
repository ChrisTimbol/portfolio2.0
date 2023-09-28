import Link from 'next/link'
import Navbar from './Navbar'
import Image from 'next/image'
export default function Header() {
    return (
        <header className=" w-full items-center relative ">
            <div className="border-b-[1px] border-neutral-400 h-12 relative">
                <div className="fixed z-10 p-2 top-0 left-0 right-0 w-full flex justify-between ">
                    <Link className="z-20" href="/">
                    <Image src="LogoIdea3.svg" width={72} height={72} />

                    </Link>
                    <Navbar />
                </div>
            </div>
        </header>
    )
}