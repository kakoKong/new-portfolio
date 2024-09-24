import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image?: string;
  techStack: string[];
  status: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal();
    };
    if (isModalOpen) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isModalOpen]);

  const cardVariants = {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.05, y: -10 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const statusColors: { [key: string]: string } = {
    deployed: 'bg-green-500',
    'on dev': 'bg-blue-500',
    paused: 'bg-yellow-500',
    undeployed: 'bg-red-500',
  };

  return (
    <>
      <motion.div
        className="bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer"
        onClick={openModal}
        variants={cardVariants}
        whileHover="hover"
        initial="rest"
        animate="rest"
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-fit"
          />
        )}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
          <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className={`h-3 w-3 rounded-full mr-2 ${statusColors[project.status] || 'bg-gray-500'}`}></span>
              <span className="text-sm text-gray-400">{project.status}</span>
            </div>
            <motion.button
              className="px-4 py-2 bg-gray-400 text-white rounded-md text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="p-6">
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                <div className="flex items-center mb-4">
                  <span className={`h-3 w-3 rounded-full mr-2 ${statusColors[project.status] || 'bg-gray-500'}`}></span>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
                {project.techStack && project.techStack.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex justify-end">
                  <motion.button
                    className="px-6 py-2 bg-gray-400 text-white rounded-md font-medium"
                    onClick={closeModal}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;