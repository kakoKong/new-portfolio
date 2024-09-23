import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Career, Education } from '../data/timeline';
import TimelineCard from '../components/TimelineCard'; // Import the new Card Component

const Timeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Education');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Use useTransform to create a smooth transition of elements as you scroll.
  const itemOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 1, 0, 0]);
  const itemY = useTransform(scrollYProgress, [0, 0.1, 0.2, 1], ["0%", "-20%", "-50%", "-100%"]);

  const currentData = activeTab === 'Education' ? Education : Career;

  return (
    <div id="timeline" ref={containerRef} className="bg-gradient-to-tl from-gray-500 via-gray-300 to-white text-gray-900 pt-20 flex flex-col items-center overflow-hidden">
      
      {/* Sticky header with tabs */}
      <div className="sticky top-0 z-10 max-w-4xl mx-auto py-4 px-4"> {/* Added sticky class */}
        <div className="flex justify-center space-x-4">
          {/* Education Button */}
          <button
            onClick={() => setActiveTab('Education')}
            className={`transition-all duration-500 transform ${activeTab === 'Education'
                ? 'text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-700 to-gray-400 scale-110' // Gradient color for active state
                : 'text-2xl text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-black hover:to-gray-500 hover:scale-105' // Hover gradient for inactive
              } px-6 py-2`}
          >
            Education
          </button>

          {/* Career Button */}
          <button
            onClick={() => setActiveTab('Career')}
            className={`transition-all duration-500 transform ${activeTab === 'Career'
                ? 'text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-black via-gray-700 to-gray-400 scale-110' // Gradient color for active state
                : 'text-2xl text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-black hover:to-gray-500  hover:scale-105' // Hover gradient for inactive
              } px-6 py-2`}
          >
            Career
          </button>
        </div>
      </div>

      {/* Timeline Content with Animation Transition */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={activeTab} // Ensure each tab content gets its own key for the transition
          initial={{ opacity: 0, x: 50 }} // Slide in from the right
          animate={{ opacity: 1, x: 0 }} // Animate to visible
          exit={{ opacity: 0, x: -50 }} // Slide out to the left
          transition={{ duration: 0.5 }}
          className="w-full max-w-6xl px-4 py-16 relative"
          style={{ y: itemY }}
        >
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

          {currentData.map((item, index) => (
            <motion.div
              key={index}
              className={`mb-20 flex items-center justify-center w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`} // Alternating layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              // style={{ opacity: itemOpacity }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              {/* Year and TimelineCard placed on opposite sides */}
              <div className={`w-1/2 text-gray-600 mx-2 font-semibold text-3xl ${index % 2 === 0 ? 'text-right' : 'text-left'} px-8`}>
                {item.year}
              </div>

              <div className="w-1/2 px-5">
                <TimelineCard
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}
                  images={item.images} // Assuming each item has an 'images' array
                  reverse={index % 2 !== 0} // Reversed for odd items
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Timeline;
