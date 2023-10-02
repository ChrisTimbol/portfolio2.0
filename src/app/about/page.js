'use client'
import Image from 'next/image';
import { RocketIcon, SunIcon, MagicWand, FullHeartIcon, CodeBrackets, People, ThumbsUp } from '@/components/Icons';
import Link from 'next/link'
export default function Who() {
    return (
        <>
            <div className="bg-gray-950 text-cyan-100 leading-loose p-4">
                <div className="justify-center flex flex-col ">
                    <h2
                        className="text-4xl py-8 sm:text-5xl font-robotoSerif text-white underline decoration-cyan-300 underline-offset-8"
                    >
                        Who
                    </h2>
                    <div className="ImageContainer py-32 flex justify-center">Image location</div>
                    <div className="flex flex-col items-center space-y-4">
                        <p className="about-paragraph">
                            <span className="Icon flex justify-center">
                                <CodeBrackets />
                            </span>
                            Hi, I'm{' '}
                            <span className="bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900 bg-clip-text text-transparent">Chris Timbol</span>, a passionate web developer based in
                            Sunny San Diego

                        </p>

                        <p className="about-paragraph">
                            <span className="Icon flex justify-center">
                                <ThumbsUp />
                            </span>
                            I find joy in front-end development, the artful blend of functional logic in code, bringing designs to life,
                            and creating something unique in this world.
                        </p>

                        <p className="about-paragraph">
                            <span className="Icon flex justify-center">
                                <MagicWand />
                            </span>
                            I thrive on translating user ideas into seamless digital experiences.
                        </p>

                        <p className="about-paragraph">
                            <span className="Icon flex justify-center">
                                <People />
                            </span>
                            There's a profound sense of fulfillment in knowing that I can bring joy to someone through my creations,
                            adding my own touch to their digital experiences.
                        </p>

                        <p className="about-paragraph">
                            <span className="Icon flex justify-center">
                                <RocketIcon />
                            </span>
                            I excel in <span className="text-gradient">React and Tailwind</span>, ensuring fast and elegant web
                            solutions. My expertise extends to creating custom WordPress themes and plugins, delivering pixel-perfect
                            designs and intuitive interfaces.
                        </p>
                    </div>

                    <Link
                        href="/work"
                        className="flex justify-center bg-cyan-700 hover:bg-cyan-400 text-cyan-50 text-sm font-bold my-4 px-2 py-3 w-1/2 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Explore My Work
                    </Link>
                </div>
            </div>
        </>
    );
}
