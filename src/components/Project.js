import Image from 'next/image';
import { GithubMediaIcon, ExternalLinkIcon } from '@/components/Icons'
import Link from 'next/link'
export default function Project({ title, description, github, website, thumbnail }) {
    return (
        <div className="overflow-hidden w-full h-full p-4 bg-cyan-950 rounded-lg shadow-md shadow-cyan-950 transition duration-300 hover:shadow-2xl relative">
            <div className="h-60 w-full relative ">
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
                    <h2 className="text-lg text-center text-cyan-50 font-bold font-robotoSerif mb-2 leading-relaxed">
                        {title}
                    </h2>
                )}
                {description && (
                    <p className="font-roboto text-sm text-cyan-100 mb-4 leading-6">{description}</p>
                )}
            </div>
            {github || website ? (

                <div className="flex w-full justify-between ">
                    {github && (
                        <Link href={github} className="cursor-pointer hover:text-cyan-500">
                            <GithubMediaIcon />
                        </Link>
                    )}
                    {website && (
                        <Link href={website} className="cursor-pointer hover:text-cyan-500">
                            <ExternalLinkIcon />
                        </Link>
                    )}
                </div>
            ) : null}

        </div>
    );
}
