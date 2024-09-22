import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const rotatingText = ["DevOps Engineer", "Machine Learning", "Software Engineer", "Frontend Dev"];

const textVariants = {
  hidden: { opacity: 0, x: 100 }, // Start off-screen on the right
  visible: { opacity: 1, x: 0 }, // Slide into the center
  exit: { opacity: 0, x: -100 }, // Slide out to the left
};

const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingText.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToTimeline = () => {
    const timelineElement = document.getElementById('timeline');
    if (timelineElement) {
      timelineElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 5 + 1 + 'px',
              height: Math.random() * 5 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Background text */}
      <motion.h1 
        className="text-[200px] font-extrabold opacity-5 absolute select-none"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.05 }}
        transition={{ duration: 2 }}
      >
        KHAOKONG
      </motion.h1>

      {/* Main content */}
      <div className="z-10 relative flex flex-col items-center">
        <motion.div
          className="text-center"
          initial={{ y: '-100vh' }}
          animate={{ y: '0vh' }}
          transition={{ type: 'spring', stiffness: 120, duration: 1.5 }}
        >
          <h1 className="text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
            PATTARATHON
          </h1>
          <h2 className="text-6xl font-semibold text-gray-300">NOPWATTANAPONG</h2>
        </motion.div>

        <div className="mt-8 h-8 text-3xl font-semibold">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTextIndex}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.8 }}
              className="text-gray-400"
            >
              {rotatingText[currentTextIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          className="mt-20 cursor-pointer text-lg group"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          onClick={scrollToTimeline}
        >
          <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
            Explore Me
          </span>
          <motion.div
            className="mt-2 w-6 h-6 border-b-2 border-r-2 border-gray-400 group-hover:border-white transition-colors duration-300 mx-auto"
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{ transform: 'rotate(45deg)' }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;