import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import { Career, Education } from '../data/timeline';
import TimelineCard from '../components/TimelineCard';

const TimelineEvent: React.FC<{ item: any; index: number }> = ({ item, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      key={index}
      className={`mb-50 flex flex-col items-center sm:flex-row ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
    >
      {/* Year */}
      <div className={`w-full sm:w-5/12 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
        <motion.span
          className="inline-block text-xl sm:text-2xl font-bold text-gray-500"
        >
          {item.year}
        </motion.span>
      </div>

      {/* Timeline node */}
      <div className="hidden md:flex w-full md:w-2/12 justify-center z-40 my-6 md:my-0">
        <motion.div
          className="w-4 h-4 bg-gray-500 rounded-full"
        />
      </div>

      {/* TimelineCard */}
      <div className="w-full sm:w-5/12">
        <TimelineCard
          title={item.title}
          subtitle={item.subtitle}
          description={item.description}
          images={item.images}
          reverse={index % 2 !== 0}
        />
      </div>
    </motion.div>
  );
};

const Timeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Education');
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const itemY = useTransform(scrollYProgress, [0, 0.1, 0.2, 1], ["0%", "-10%", "-20%", "-40%"]);

  const currentData = activeTab === 'Education' ? Education : Career;

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (containerRef.current) {
      // Scroll the section into view when the tab changes
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="timeline" ref={containerRef} className="bg-education bg-cover text-white pt-5 pb-80 min-h-screen -mb-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sticky header with tabs */}
        <div className="sticky top-0 z-50 pt-5 pb-2 bg-opacity-50 backdrop-blur-sm">
          <div className="flex justify-center space-x-4 sm:space-x-8">
            {['Education', 'Career'].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`text-3xl sm:text-3xl lg:text-4xl font-bold transition-all duration-300 ${activeTab === tab
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-500 to-gray-400 scale-110'
                  : 'text-gray-300 hover:text-gray-200'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.15 }}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Timeline Content with Animation Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="relative mt-16"
            style={{ y: itemY }}
          >
            {/* Vertical timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

            {currentData.map((item, index) => (
              <TimelineEvent key={index} item={item} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Timeline;
