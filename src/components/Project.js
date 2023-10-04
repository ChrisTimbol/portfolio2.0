import Image from 'next/image';
import { GithubMediaIcon, ExternalLinkIcon } from '@/components/Icons'
import Link from 'next/link'
export default function Project({ title, description, github, website, thumbnail }) {
    return (
        <div className="overflow-hidden w-full h-full p-4 bg-slate-950 rounded-lg shadow-md shadow-cyan-900 transition duration-300 hover:shadow-2xl relative">
            <div className="h-56 w-full relative ">
                {thumbnail && (
                    <Image
                        className="w-full h-full rounded-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src={thumbnail}
                        alt="Image for Project"
                        fill
                        priority
                    />
                )}
            </div>
            <div className="py-2">
                {title && (
                    <h2 className="text-2xl px-4 text-center text-slate-50 font-semibold font-robotoSerif  mb-2 ">
                        {title}
                    </h2>
                )}
                {description && (
                    <p className="font-roboto text-sm text-slate-100 mb-4 leading-6">{description}</p>
                )}
            </div>
            {github || website ? (

                <div className="flex w-full justify-between ">
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
