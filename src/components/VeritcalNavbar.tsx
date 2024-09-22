import React, { useState } from 'react';
import { Link, Element } from 'react-scroll';
import { GoHomeFill } from "react-icons/go";
import { IoTime } from "react-icons/io5";
import { FaFolderOpen, FaAward } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";

const VerticalNavbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  const handleSetActive = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="fixed right-8 top-1/4 flex flex-col space-y-2 bg-white bg-opacity-50 rounded-[25px] p-3 py-5">
      <Link
        to="home"
        smooth={true}
        duration={500}
        spy={true}
        onSetActive={() => handleSetActive('home')}
        className={`p-3 rounded-[15px] cursor-pointer transition-colors duration-300 ease-in-out transform hover:bg-gray-300 ${activeSection === 'home' ? 'bg-gray-500 text-black' : 'bg-white text-gray-500'}`}
      >
        <GoHomeFill size={32} color={activeSection === 'home' ? 'white' : 'gray'} />
      </Link>

      <Link
        to="timeline"
        smooth={true}
        duration={500}
        spy={true}
        onSetActive={() => handleSetActive('timeline')}
        className={`p-3 rounded-[15px] cursor-pointer transition-colors duration-300 ease-in-out transform hover:bg-gray-300 ${activeSection === 'timeline' ? 'bg-gray-500 text-black' : 'bg-white text-gray-500'}`}
      >
        <IoTime size={32} color={activeSection === 'timeline' ? 'white' : 'gray'} />
      </Link>

      <Link
        to="projects"
        smooth={true}
        duration={500}
        spy={true}
        onSetActive={() => handleSetActive('projects')}
        className={`p-3 rounded-[15px] cursor-pointer transition-colors duration-300 ease-in-out transform hover:bg-gray-300 ${activeSection === 'projects' ? 'bg-gray-500 text-black' : 'bg-white text-gray-500'}`}
      >
        <FaFolderOpen size={32} color={activeSection === 'projects' ? 'white' : 'gray'} />
      </Link>

      <Link
        to="certifications-awards"
        smooth={true}
        duration={500}
        spy={true}
        onSetActive={() => handleSetActive('certifications-awards')}
        className={`p-3 rounded-[15px] cursor-pointer transition-colors duration-300 ease-in-out transform hover:bg-gray-300 ${activeSection === 'certifications-awards' ? 'bg-gray-500 text-black' : 'bg-white text-gray-500'}`}
      >
        <FaAward size={32} color={activeSection === 'certifications-awards' ? 'white' : 'gray'} />
      </Link>

      <Link
        to="footer"
        smooth={true}
        duration={500}
        spy={true}
        onSetActive={() => handleSetActive('footer')}
        className={`p-3 rounded-[15px] cursor-pointer transition-colors duration-300 ease-in-out transform hover:bg-gray-300 ${activeSection === 'footer' ? 'bg-gray-500 text-black' : 'bg-white text-gray-500'}`}
      >
        <MdContactPhone size={32} color={activeSection === 'footer' ? 'white' : 'gray'} />
      </Link>
    </div>
  );
};

export default VerticalNavbar;
