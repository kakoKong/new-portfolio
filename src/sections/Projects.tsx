import React from 'react';

const projects = [
  { title: 'Project 1', description: 'Description for project 1.' },
  { title: 'Project 2', description: 'Description for project 2.' },
  { title: 'Project 3', description: 'Description for project 3.' },
];

const Projects: React.FC = () => {
  return (
    <div id="projects" className="h-screen bg-gray-800 text-white flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="mt-4">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
