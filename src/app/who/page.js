'use client'
import Image from 'next/image';
import { RocketIcon, MagicWand, CodeBrackets, People, ThumbsUp } from '@/components/Icons';
import Link from 'next/link'
export default function Who() {
    return (
        <>
            <div className="relative" >
                <Image src="aboutwav.svg" width={400} height={400} alt="About Wave" />

            </div>
            <main className="p-4 h-full w-full space-y-16  bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-slate-50 relative ">
                <h2 className="text-4xl text-cyan-400 font-robotoSerif font-semibold">Who</h2>


                <div className="group shadow-2xl h-max rounded-full  mx-auto overflow-hidden relative ">
                    <div className="relative rounded-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 overflow-hidden bg-red-600  hue-rotate-45  contrast-110   " style={{ paddingBottom: '100%' }}>
                        <Image
                            src="/.png"
                            alt="avatar image"
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
                            className="rounded-full"
                        />
                    </div>
                </div>



                <div className="p-4  flex flex-col items-center justify-center text-base text-center space-y-4 w-full ">

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

                <div className="flex justify-center w-full py-16 ">
                    <Link
                        href="/work"
                        className="flex justify-center 
                    bg-cyan-700 hover:bg-cyan-400 
                    text-white text-sm font-bold  px-2 py-3 w-1/2 
                    rounded-full transition duration-300 ease-in-out 
                    transform hover:scale-105"
                    >
                        Explore My Work
                    </Link>
                </div>

            </main>

        </>
    );
}
