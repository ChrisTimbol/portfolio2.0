import Image from 'next/image';
import { GithubMediaIcon, ExternalLinkIcon } from '@/components/Icons';
import Link from 'next/link';

export default function Project({ title, description, github, website, thumbnail }) {
    return (
        <div className=" w-full h-full bg-slate-800 rounded-lg shadow-sm shadow-slate-900 transition duration-300 group hover:shadow-2xl relative flex flex-col">
            <div className="h-60 w-full relative">
                {thumbnail && (
                    <Image
                        className="rounded-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src={thumbnail}
                        alt="Image for Project"
                        fill
                        priority
                    />
                )}
            </div>
            <div className="py-2 flex-grow">
                {title && (
                    <h2 className="group-hover:text-cyan-300 text-xl px-4 text-center text-slate-50 font-semibold font-robotoSerif mb-2">
                        {title}
                    </h2>
                )}
                {description && (
                    <p className="font-roboto text-center text-slate-100 p-4 leading-6">{description}</p>
                )}
            </div>


            {github || website ? (
                <div className="flex w-full justify-between items-end p-4">
                    {github && (
                        <Link href={github} className="cursor-pointer hover:text-cyan-400">
                            <GithubMediaIcon />
                        </Link>
                    )}
                    {website && (
                        <Link href={website} className="cursor-pointer hover:text-cyan-400">
                            <ExternalLinkIcon />
                        </Link>
                    )}
                </div>
            ) : null}
        </div>
    );
}
