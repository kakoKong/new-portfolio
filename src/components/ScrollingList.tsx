import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimationControls, useMotionValue, useTransform } from 'framer-motion';

interface Item {
  text: string;
  imageUrl: string;
}

interface ScrollingListProps {
  items: Item[];
  speed?: number; // Pixels per second
}

const ScrollingList: React.FC<ScrollingListProps> = ({ items, speed = 50 }) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const controls = useAnimationControls();
  const x = useMotionValue(0);

  useEffect(() => {
    if (containerRef.current && contentRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      setContentWidth(contentRef.current.offsetWidth / 2);
    }
  }, [items]);

  const xInput = [-contentWidth, 0];
  const xOutput = [-contentWidth, 0];
  const transformedX = useTransform(x, xInput, xOutput);

  useEffect(() => {
    if (containerWidth && contentWidth) {
      const animateScroll = () => {
        x.set(0);
        controls.start({
          x: -contentWidth,
          transition: {
            duration: contentWidth / speed,
            ease: "linear",
            repeat: Infinity,
          },
        });
      };

      animateScroll();
    }
  }, [containerWidth, contentWidth, speed, controls, x]);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    controls.stop();
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    const currentX = x.get();
    x.set(currentX);
    controls.start({
      x: -contentWidth,
      transition: {
        duration: (contentWidth + currentX) / speed,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  const duplicatedItems = [...items, ...items];

  return (
    <div ref={containerRef} className="overflow-hidden w-full">
      <motion.div
        ref={contentRef}
        className="flex"
        style={{ x: transformedX }}
        animate={controls}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex-none mx-4 p-6 bg-gray-800 text-white rounded-lg cursor-pointer"
            style={{
              width: '300px',
              height: '150px',
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            animate={{
              scale: hoveredIndex === index % items.length ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center h-full">
              <div className="w-1/3 h-full flex items-center justify-center">
                <img 
                  src={item.imageUrl} 
                  alt={item.text}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="w-2/3 pl-4 flex items-center">
                <p className="text-lg font-semibold">{item.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingList;