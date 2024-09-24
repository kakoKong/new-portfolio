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
    <div className="fixed bottom-0 w-full sm:w-fit sm:h-fit flex justify-around sm:justify-center sm:right-8 sm:top-1/4 flex-row sm:flex-col sm:space-y-2 sm:bg-gradient-to-b sm:from-gray-400 sm:to-black sm:opacity-70 sm:rounded-[25px] p-3 py-5 z-50 shadow-lg">
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
          duration={200}
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
