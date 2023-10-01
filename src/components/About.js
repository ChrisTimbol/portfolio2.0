'use client'
import Image from 'next/image';
import { motion } from 'framer-motion'
export default function About() {
  return (
    <>
      <Image alt="just waves in background image" src="/wave.svg" width={400} height={400} className="shadow-sm" />

      <div className="p-4 space-y-4 bg-gradient-to-b from-teal-400 via-teal-400 to-teal-300 shadow-lg rounded-lg text-gray-800 text-lg leading-loose">

        <h2 className="text-4xl sm:text-5xl font-robotoSerif mb-6 text-black underline decoration-teal-500 underline-offset-8">About Me</h2>

        <p className="text-left">
  Hi, I'm <span className="text-white">Chris Timbol</span>, a passionate web developer based in <span className="inline-block">Sunny
{/*   <div>
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 text-gray-800 dark:text-white inline"
        fill="currentColor"
        animate={{
          rotate: [0, 360], // Rotate from 0 to 360 degrees
        }}
        transition={{
          repeat: Infinity, // Repeat the animation infinitely
          duration: 2, // Animation duration in seconds
          ease: "linear", // Linear easing function
        }}
      >
        <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"/>
      </motion.svg>
    </div> */}
  </span> San Diego, California.
</p>

        <p className="text-left">
          I find joy in front-end development-
          the artful blend of functional logic in code,
          bringing designs to life, and creating something
          unique in this world.
        </p>
        <p className="text-left">
          I thrive on translating user ideas into seamless digital experiences.
        </p>
        <p className="text-left">
          There's a profound sense of fulfillment in knowing that I can bring joy to someone through my creations, adding a touch of uniqueness to their digital experiences.
        </p>

        <p className="text-left">
          I excel in <span className="font-medium">React</span> and <span className="text-sm">Tailwind</span>, ensuring fast and elegant web solutions. My expertise extends to creating custom WordPress themes and plugins, delivering pixel-perfect designs and intuitive interfaces.
        </p>

        <a href="/work" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-full inline-block transition duration-300 ease-in-out transform hover:scale-105">
          Explore My Work
        </a>
      </div>

      <Image alt="just waves in background image" src="/bottomwave.svg" width={400} height={400} className="shadow-sm" />
    </>
  );
}
