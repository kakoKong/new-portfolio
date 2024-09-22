import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const HeroSection: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-black text-white">
      <motion.div
        className="text-center"
        initial={{ y: '-100vh' }}
        animate={{ y: '0vh' }}
        transition={{ type: 'spring', stiffness: 120, duration: 1.5 }}
      >
        <h1 className="text-6xl font-bold mb-4">PATTARATHON</h1>
        <h2 className="text-4xl font-semibold">NOPWATTANAPONG</h2>
      </motion.div>

      <Link
        to="timeline"
        smooth={true}
        duration={1000}
        className="mt-16 cursor-pointer"
      >
        <motion.div
          className="text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          Scroll Down
        </motion.div>
      </Link>
    </div>
  );
};

export default HeroSection;
