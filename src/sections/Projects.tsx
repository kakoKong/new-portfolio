// Projects.tsx
import React from 'react';
import ProjectCard from '../components/ProjectCard'; // Adjust the path as necessary
import { motion } from 'framer-motion';
import projects from '../data/project';

const Projects: React.FC = () => {
  return (
    <div
      id="projects"
      className="min-h-screen bg-gradient-to-b from-black via-gray-800 to-gray-900  text-white flex flex-col items-center py-20"
    >
      <motion.h2
        className="text-5xl font-bold mb-12 "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h4 className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-gray-100 to-white">Projects</h4>
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-6 max-w-7xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.5,
            },
          },
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
