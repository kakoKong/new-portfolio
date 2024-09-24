import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimationControls, useMotionValue } from 'framer-motion';

interface Item {
  text: string;
  imageUrl: string;
}

interface ScrollingListProps {
  items: Item[];
  speed?: number; // Pixels per second
}

const ScrollingList: React.FC<ScrollingListProps> = ({ items, speed = 50 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  const controls = useAnimationControls();
  const x = useMotionValue(0);

  // Duplicate the items to create a seamless loop
  const duplicatedItems = [...items, ...items];

  useEffect(() => {
    if (contentRef.current) {
      const totalContentWidth = contentRef.current.scrollWidth / 2;
      setContentWidth(totalContentWidth);
    }
  }, [items]);

  useEffect(() => {
    if (contentWidth) {
      const totalWidth = contentWidth;
      const duration = totalWidth / speed;
      controls.start({
        x: [0, -totalWidth],
        transition: {
          duration,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        },
      });
    }
  }, [contentWidth, speed, controls]);

  return (
    <div ref={containerRef} className="overflow-hidden w-full my-10">
      <motion.div
        ref={contentRef}
        className="flex"
        style={{ x }}
        animate={controls}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex-none mx-2 p-4 sm:mx-4 sm:p-6 bg-gray-800 text-white rounded-lg w-[60%] sm:w-[25%] md:w-[30%] h-[150px] sm:h-[180px]"
          >
            <div className="flex items-center h-full">
              <div className="w-1/3 h-full flex items-center justify-center">
                <img
                  src={item.imageUrl}
                  alt={item.text}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
              <div className="w-2/3 pl-4 flex items-center">
                <p className="text-lg sm:text-xl font-semibold">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingList;
