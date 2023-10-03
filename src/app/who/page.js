'use client'
import Image from 'next/image';
import { RocketIcon, SunIcon, MagicWand, FullHeartIcon, CodeBrackets, People, ThumbsUp } from '@/components/Icons';
import Link from 'next/link'
export default function Who() {
    return (
        <>

            <div className="h-full w-full  bg-gradient-to-b from-cyan-800 via-cyan-900 to-cyan-900 text-cyan-100 relative ">
                <div className="relative border border-cyan-500">
                    <Image src="aboutwav.svg" width={400} height={400} alt="About Wave" />

                </div>

                <h2 className="p-2 text-4xl font-robotoSerif font-bold flex justify-center items-center ">About</h2>


                <div className="group border border-cyan-800 shadow-2xl h-max rounded-full w-48 md:w-64 lg:w-72 xl:w-80 mx-auto overflow-hidden relative transition duration-300 ease-in-out transform hover:scale-105">
                    <div className="relative " style={{ paddingBottom: '100%' }}>
                        <Image
                            src="/avatar.png"
                            alt="avatar image"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full group-hover:filter group-hover:grayscale group-hover:brightness-80 group-hover:sepia group-hover:hue-rotate-200 grayscale-0 brightness-100 sepia-0 hue-rotate-0"
                        />
                    </div>
                </div>


                <div className="p-4  flex flex-col items-center justify-center text-base text-center space-y-4 w-full ">

                    <CodeBrackets />

                    <p className="about-paragraph ">
                        Hi, I'm{' '}
                        <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-600 bg-clip-text text-transparent ">Chris Timbol</span>, a passionate web developer based in
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
                    <RocketIcon/>
                    <p className="about-paragraph">
                        I excel in <span className="text-gradient">React and Tailwind</span>, ensuring fast and elegant web
                        solutions. My expertise extends to creating custom WordPress themes and plugins, delivering pixel-perfect
                        designs and intuitive interfaces.
                    </p>
                </div>

                <Link href="/work" className="flex justify-center bg-cyan-700 hover:bg-cyan-400 text-cyan-50 text-sm font-bold my-4 px-2 py-3 w-1/2 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Explore My Work
                </Link>
                <Image src="bottomwave.svg" width={400} height={400} />

            </div>

        </>
    );
}
