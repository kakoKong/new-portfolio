import React from 'react';
import { MapPin, Linkedin, Github, Mail, Newspaper, Download } from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Pattarathon Nopwattanapong (Khaokong)</h3>
            <p className="text-sm">Software Engineer</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="flex items-center space-x-2 mb-2">
              <Mail size={16} />
              <a href="mailto:khaokong@gmail.com" className="text-sm hover:underline">
                khaokong@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <a
                href="https://maps.app.goo.gl/WK2gRAy9s9Rhq2Bj9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
              >
                Bangkok, Thailand
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/pattarathon-kong-nopwattanapong-09b52219b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/kakoKong" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://medium.com/@KongKako" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
              >
                <Newspaper size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resumes</h3>
            <div className="space-y-2">
              <a 
                href="/pdf/KongSoftEng-Sep24.pdf" 
                download
                className="flex items-center space-x-2 text-sm hover:underline"
              >
                <Download size={16} />
                <span>Software Engineer Resume</span>
              </a>
              <a 
                href="/pdf/KongDevOps-Sep24.pdf" 
                download
                className="flex items-center space-x-2 text-sm hover:underline"
              >
                <Download size={16} />
                <span>DevOps Engineer Resume</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-sm text-center">© 2024 Pattarathon Nopwattanapong. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;