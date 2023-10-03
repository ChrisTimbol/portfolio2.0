import Link from 'next/link';
import Image from 'next/image';
import { GithubMediaIcon, LinkedInMediaIcon, GmailMediaIcon, InstagramMediaIcon } from './Icons';
export default function Footer() {
    return (
        <footer className="text-white bg-gradient-to-b from-cyan-800 via-cyan-700 to-cyan-600 flex flex-col justify-center text-center  pt-8 ">
            <div className="flex justify-center items-center space-x-4  ">
                <Link
                    className="hover:scale-125 h-full  "
                    href="https://www.linkedin.com/in/chris-timbol-906198144/">
                    <LinkedInMediaIcon />
                </Link>
                <Link
                    className="hover:scale-125  "
                    href="https://github.com/ChrisTimbol">
                    <GithubMediaIcon />
                </Link>

                <Link
                    className="hover:scale-125"
                    href="mailto:christimbol707@gmail.com">
                    <GmailMediaIcon />
                </Link>
                <Link
                    className="hover:scale-125 f "
                    href="https://instagram.com/christimbol">
                    <InstagramMediaIcon />
                </Link>

            </div>

            <div className="flex justify-center space-x-6 ">
                <Link className="hover:text-teal-200 cursor-pointer " href="/privacy-policy">Privacy Policy</Link>
                <Link className="hover:text-teal-200 cursor-pointer" href="/contact">Contact</Link>
            </div>
            <p className="">Copyright © 2023. All rights reserved.</p>
        </footer>
    );
}
