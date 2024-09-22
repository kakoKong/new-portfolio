import React from 'react';

const certifications = ['Certification 1', 'Certification 2', 'Certification 3'];
const awards = ['Award 1', 'Award 2', 'Award 3'];
const skills = ['Skill 1', 'Skill 2', 'Skill 3'];

const CertificationsAwards: React.FC = () => {
  return (
    <div id="certifications-awards" className="h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold mb-8">Certifications & Awards</h2>
      <div className="mb-8">
        <h3 className="text-2xl font-bold">Certifications</h3>
        <ul className="mt-4">
          {certifications.map((cert, index) => (
            <li key={index} className="mt-2">{cert}</li>
          ))}
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-bold">Awards</h3>
        <ul className="mt-4">
          {awards.map((award, index) => (
            <li key={index} className="mt-2">{award}</li>
          ))}
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-bold">Skills</h3>
        <ul className="mt-4">
          {skills.map((skill, index) => (
            <li key={index} className="mt-2">{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CertificationsAwards;
