// ProjectCard.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image?: string;
  techStack: string[]; // Ensure this property exists
  status: string;
  // Add more fields as needed
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open modal function
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close modal function
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Close modal on 'Esc' key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    if (isModalOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isModalOpen]);

  // Animation variants for the card
  const cardVariants = {
    rest: {
      scale: 1,
    },
    hover: {
      scale: 1.05, // Added scale transformation here
    },
  };

  // Animation variants for the modal
  const modalVariants = {
    hidden: { opacity: 0, y: '-50%' },
    visible: { opacity: 1, y: '0%' },
    exit: { opacity: 0, y: '-50%' },
  };

 // Mapping status to colors
  const statusColors: { [key: string]: string } = {
    deployed: 'bg-green-500',
    'on dev': 'bg-blue-500',
    paused: 'bg-orange-500',
    undeployed: 'bg-red-500',
  };

  return (
    <>
      {/* Card */}
      <motion.div
        className="relative w-[480px] bg-white p-6 rounded-lg shadow-lg cursor-pointer overflow-hidden"
        onClick={openModal}
        variants={cardVariants}
        whileHover="hover"
        transition={{ duration: 0.5, ease: 'easeOut' }}
        initial="rest"
        animate="rest"
      >
        {/* Background Overlay */}
        <motion.div
          className="absolute inset-0 bg-black opacity-0 z-10"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 0.1 },
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />

        {/* Content */}
        <motion.div
          className="relative z-10"
          variants={{
            rest: { color: '#000' },
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Image */}
          {project.image && (
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-fit rounded-md mb-4"
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          )}
          {/* Title */}
          <motion.h3
            className="text-3xl font-semibold mb-2 text-center"
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {project.title}
          </motion.h3>
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={closeModal}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <motion.div
              className="bg-white w-11/12 lg:w-1/2 mx-auto rounded-lg shadow-lg relative overflow-y-auto max-h-screen"
              onClick={(e) => e.stopPropagation()}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              {/* Close Button */}
              <button
                aria-label="Close modal"
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl font-bold"
                onClick={closeModal}
              >
                &times;
              </button>
              {/* Modal Content */}
              <div className="p-6">
                {/* Image */}
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-fit rounded-md mb-4"
                  />
                )}
                {/* Title */}
                <h2
                  id="modal-title"
                  className="text-3xl font-bold text-gray-800 mb-4 text-center"
                >
                  {project.title}
                </h2>
                <div className="text-xl font-semibold text-gray-800 flex items-center justify-center mb-4">
                  <span
                    className={`inline-block h-4 w-4 rounded-full mr-2 ${
                      statusColors[project.status] || 'bg-gray-500'
                    }`}
                  ></span>
                  Status: {project.status}
                </div>
                {/* Tech Stack */}
                {project.techStack && project.techStack.length > 0 && (
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Tech Stack
                    </h3>
                    <ul className="flex flex-wrap">
                      {project.techStack.map((tech, index) => (
                        <li key={index} className="mr-2 mb-2">
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                            {tech}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* Description */}
                <p className="text-gray-700 mb-6">{project.description}</p>

                {/* Additional details can be added here */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
