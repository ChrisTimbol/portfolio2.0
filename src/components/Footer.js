import Link from 'next/link';
import Image from 'next/image';
import { GithubMediaIcon, LinkedInMediaIcon, GmailMediaIcon, InstagramMediaIcon } from './Icons';
export default function Footer() {
    return (
        <footer className="text-white bg-slate-900 flex flex-col justify-center text-center  pt-8 ">
            <h4 className="underline decoration-cyan-400 decoration-2 underline-offset-4 text-sm">Thanks for reading! </h4>

            <div className="flex justify-center items-center space-x-2 py-4   ">

                <Link
                    className="hover:scale-125 hover:decoration-cyan-400  "
                    href="https://www.linkedin.com/in/chris-timbol-906198144/">
                    <LinkedInMediaIcon />
                </Link>
                <Link
                    className="hover:scale-125"
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
            <Link className="hover:text-teal-200 cursor-pointer text-sm " href="/privacy-policy">Privacy Policy</Link>
            <p className="text-sm pb-1">Copyright © 2023. All rights reserved.</p>

        </footer>
    );
}
