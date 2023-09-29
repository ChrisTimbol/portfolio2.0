'use client'
import { motion } from "framer-motion"


export default function Intro() {
    return (
        <>
            <div className="">
                <motion.div className="NameContainer py-48 border border-red-500">

                    <div className="text-4xl mr-12 text-center  font-semibold font-robotoSerif text-black  hover:italic antialiased">CHRIS TIMBOL</div>
                    <div className="text-2xl  text-center  font-roboto  hover:underline decoration-sky-500"> Web Developer & Designer</div>
                </motion.div>
            </div>
        </>
    )
}