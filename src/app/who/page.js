'use client'
import Image from 'next/image';
import { RocketIcon, MagicWand, CodeBrackets, People, ThumbsUp } from '@/components/Icons';
import Link from 'next/link'
export default function Who() {
    return (
        <>
            <main className="flex justify-center  w-full md:h-screen  bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-slate-50  ">

                <section className="max-w-screen-xl flex flex-col items-center py-16 ">
                    <h2 className="text-5xl text-cyan-400 font-robotoSerif font-semibold py-16 px-4 border border-slate-700 w-full">About</h2>
                   
                    <div className="flex flex-wrap  bg-gradient-to-b from-cyan-950 via-cyan-900 rounded-lg">

                        <div className="relative w-full h-[100vw] md:h-auto md:w-1/2   rounded-large  relative bg-gradient-to-b from-cyan-800 via-slate-950 to-slate-900 transform transition-transform duration-300 " >
                            <Image
                                src="BlobActualFace.svg"
                                alt="avatar image"
                                fill
                                sizes="(max-width: 640px) 50vw, (max-width: 768px) 80vw, 1200px"
                                className="rounded-full"
                            />
                        </div>

                        <div className="md:w-1/2 flex flex-col bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 to-cyan-950 items-center justify-center text-base md:text-lg text-center md:text space-y-4 p-8">
                            <CodeBrackets />
                            <p className="about-paragraph group  ">
                                Hi, I'm{' '}
                                <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-600 bg-clip-text text-transparent group-hover:brightness-110 group-hover:sepia group-hover:hue-rotate-45 transition-transform ">Chris Timbol</span>, a passionate web developer based in
                                Sunny San Diego
                            </p>
                            <ThumbsUp />
                            <p className="about-paragraph">
                                I find joy in front-end development, the artful blend of functional logic in code, bringing designs to life,
                                and creating something unique in this world.
                            </p>
                            <MagicWand />
                            <p className="about-paragraph">
                                I thrive on translating user ideas into seamless digital experiences.
                            </p>
                            <People />
                            <p className="about-paragraph">
                                There's a profound sense of fulfillment in knowing that I can bring joy to someone through my creations,
                                adding my own touch to their digital experiences.
                            </p>
                            <RocketIcon />
                            <p className="about-paragraph px-8">
                                I excel in <span className="text-gradient">React and Tailwind</span>, ensuring fast and elegant web
                                solutions. My expertise extends to creating custom WordPress themes and plugins, delivering pixel-perfect
                                designs and intuitive interfaces.
                            </p>
                        </div>
                    </div>
                    {/*                     <div className="flex justify-center w-full py-16 ">
                        <Link
                            href="/work"
                            className="flex justify-center 
                    bg-cyan-700 hover:bg-cyan-400 
                    text-white text-sm font-bold  px-2 py-3 w-1/2 
                    rounded-full transition duration-300 ease-in-out 
                    transform hover:scale-105 md:py-4 md:w-1/4   md:text-lg"
                        >
                            Explore My Work
                        </Link>
                    </div> */}

                </section>
            </main>

        </>
    );
}
