'use client'
import React from "react";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <>
      <div className="py-48 flex flex-col items-center relative w-full overflow-hidden">
        <motion.div
          className="namecontainer hover:border-teal-700 h-72 w-72 bg-teal-500 flex flex-col justify-center items-center rounded-full"
          initial={{ scale: 0, y: -500 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale:0, y: 500 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-3xl font-bold tracking-tight font-robotoSerif text-teal-100 hover:italic antialiased"
          >
            CHRIS TIMBOL
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.25 }}
            className="text-lg font-semibold font-roboto hover:underline text-teal-800 decoration-sky-500"
          >
            Web Developer & Designer
          </motion.div>
        </motion.div>
{/* Need to make this delay after container comes down */}
        {[...Array(9)].map((_, index) => (
          <motion.div
            key={index}
            className={`namecircle absolute h-8 w-8 bg-teal-${
              100 + index * 100
            } rounded-full`}
            initial={{
              opacity: 0,
              x: 0,
              y: 0,
              rotate: Math.random() * 360,
            }}
            animate={{
              opacity: 1,
              x: (Math.random() - 0.5) * 1000, // Random x position for sprinkler effect
              y: (Math.random() - 0.5) * 1000, // Random y position for sprinkler effect
              transition: { duration: 1.5 },
            }}
            exit={{ opacity: 0, y: 500 }}
            drag // Enable drag gesture
            dragConstraints={{ left: 0, right: 500, top: 0, bottom: 500 }}
          ></motion.div>
        ))}
      </div>
    </>
  );
}
