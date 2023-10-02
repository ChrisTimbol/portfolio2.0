'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const AnimatedLink = () => {
  const linkVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <Link href="/work">
      <motion.div
        variants={linkVariants}
        whileHover="hover"
        className="text-teal-50 text-base text-end border border-cyan-500 hover:text-cyan-400 p-4 rounded-lg"
      >
        Browse More{' '}
        <svg
          className="w-6 h-6 text-cyan-400 dark:text-white inline-flex"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 8 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
          />
        </svg>
      </motion.div>
    </Link>
  );
};

export default AnimatedLink;
