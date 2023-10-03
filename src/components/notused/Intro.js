'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image'
export default function Intro() {
  const [shouldRenderCircles, setShouldRenderCircles] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRenderCircles(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      <div className="py-48 flex flex-col items-center relative w-full overflow-hidden  bg-cyan-500">
        <motion.div
          className="namecontainer hover:border-cyan-700 h-72 w-72 flex flex-col justify-center  bg-cyan-300 items-center rounded-full shadow-lg relative"
          initial={{ scale: 0, y: 0, rotate: -10 }}
          animate={{ scale: 1, y: 0, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1.4,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.25 }}
            className="text-3xl z-30 font-bold tracking-tight font-robotoSerif text-cyan-50 hover:italic antialiased"
          >
            CHRIS TIMBOL
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-lg font-semibold font-roboto hover:underline text-cyan-800 decoration-sky-500"
          >
            Web Developer & Designer
          </motion.div>
        </motion.div>

        {shouldRenderCircles &&
          [...Array(30)].map((_, index) => {
            const randomX = (Math.random() - 0.5) * window.innerWidth;
            const randomY = (Math.random() - 0.5) * window.innerHeight;
            const colorClasses = Array.from({ length: 9 }, (_, i) => 100 + (i + 1) * 100);
            const randomColorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)];

            return (
              <motion.div
                key={index}
                className={`namecircle absolute h-8 w-8 bg-cyan-${randomColorClass} rounded-full`}
                initial={{
             
                  x: randomX,
                  y: randomY,
                }}
                animate={{
        
                  x: randomX + (Math.random() - 0.5) * 400,
                  y: randomY + (Math.random() - 0.5) * 400,
                  rotate: Math.random() * 360,
                  transition: { duration: 10, repeat: Infinity, repeatType: "reverse" },
                }}
                exit={{ y: 500 }}
                drag
                dragConstraints={{
                  left: -window.innerWidth / 2 + 25,
                  right: window.innerWidth / 2 - 25,
                  top: -window.innerHeight / 2 + 25,
                  bottom: window.innerHeight / 2 - 25,
                }}
              ></motion.div>
            );
          })}
      </div>
      <Image alt="wave svg background " className="bg-cyan-500" src="newsvg.svg" width={400} height={400} />

    </>
  );
}
