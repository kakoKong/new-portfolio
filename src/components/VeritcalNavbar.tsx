import React, { useState } from 'react';
import { Link } from 'react-scroll';
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
    <div className="fixed right-8 top-1/4 flex flex-col space-y-2 bg-gradient-to-b from-gray-800 to-black bg-opacity-70 rounded-[25px] p-3 py-5 z-50 shadow-lg">
      {[
        { to: 'home', Icon: GoHomeFill },
        { to: 'timeline', Icon: IoTime },
        { to: 'projects', Icon: FaFolderOpen },
        { to: 'certifications-awards', Icon: FaAward },
        { to: 'footer', Icon: MdContactPhone },
      ].map(({ to, Icon }) => (
        <Link
          key={to}
          to={to}
          smooth={true}
          duration={500}
          spy={true}
          onSetActive={() => handleSetActive(to)}
          className={`p-3 rounded-[15px] cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 ${
            activeSection === to
              ? 'bg-gradient-to-r from-white to-gray-300 text-gray-900'
              : 'bg-transparent text-gray-400 hover:text-white'
          }`}
        >
          <Icon
            size={32}
            className={`transition-colors duration-150 ${
              activeSection === to ? 'text-gray-900' : 'text-current'
            }`}
          />
        </Link>
      ))}
    </div>
  );
};

export default VerticalNavbar;