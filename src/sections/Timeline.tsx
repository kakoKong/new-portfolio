import React, { useState } from 'react';

const Timeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Education');

  return (
    <div id="timeline" className="h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      <div className="mb-8">
        <button 
          onClick={() => setActiveTab('Education')}
          className={`px-4 py-2 ${activeTab === 'Education' ? 'bg-blue-500' : 'bg-gray-700'}`}
        >
          Education
        </button>
        <button 
          onClick={() => setActiveTab('Career')}
          className={`px-4 py-2 ml-4 ${activeTab === 'Career' ? 'bg-blue-500' : 'bg-gray-700'}`}
        >
          Career
        </button>
      </div>
      <div className="w-full px-10">
        {activeTab === 'Education' ? (
          <div className="text-center">
            <h3 className="text-2xl font-bold">Education Timeline</h3>
            <p className="mt-4">Add your education details here...</p>
          </div>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-bold">Career Timeline</h3>
            <p className="mt-4">Add your career details here...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
