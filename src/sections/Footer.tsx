import React from 'react';

const Footer: React.FC = () => {
  return (
    <div id="footer" className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-black text-white">
      <p>Contact me at: <a href="mailto:youremail@example.com" className="underline">youremail@example.com</a></p>
      <p className="mt-2">&copy; 2024 Pattarathon Nopwattanapong. All rights reserved.</p>
    </div>
  );
};

export default Footer;
