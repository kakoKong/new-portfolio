import React from 'react';
import ScrollingList from '../components/ScrollingList'; // Adjust the import path as necessary

const certifications = [
{ text: "AWS Solution Architect", imageUrl: "/img/certifications/aws.png" },
{ text: "AWS Machine Learning Specialty", imageUrl: "/img/certifications/aws.png" },
{ text: "GCP Associate Cloud Engineer", imageUrl: "/img/certifications/gcp.jpg" },
{ text: "ParliamentHack - Best AI Project", imageUrl: "/img/certifications/parliament.jpg" },
{ text: "ParliamentHack - Most Humanized Project", imageUrl: "/img/certifications/parliament.jpg" },
{ text: "ParliamentHack - Most Creative Project", imageUrl: "/img/certifications/parliament.jpg" },
{ text: "Zero to One Startup Competition - Top 10 Finalist", imageUrl: "/img/certifications/yeah.jpg" },
];


const CertificationsAwards: React.FC = () => {
  return (
    <div
      id="certifications-awards"
      className="h-screen bg-gray-900 text-white flex flex-col justify-center items-center"
    >
      <h2 className="text-4xl font-bold mb-8">Certifications & Awards</h2>
      
      {/* Certifications */}
      <div className="mb-8 w-full">
        <h3 className="text-2xl font-bold mb-4 text-center mb-10">Certifications</h3>
        <ScrollingList items={certifications} />
      </div>
    </div>
  );
};

export default CertificationsAwards;
