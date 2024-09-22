import React, { useState } from 'react';

const DashBoard = () => {
  const [view, setView] = useState('video'); // State to track the view

  const toggleView = () => {
    setView(view === 'video' ? 'article' : 'video');
  };

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 min-h-screen flex flex-col justify-center items-center py-12">
      {/* Toggle Switch */}
      <div className="flex items-center mb-8">
        
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={view === 'article'}
            onChange={toggleView}
          />
          <div className="w-40 h-12 bg-gray-700 rounded-full relative shadow-md transition duration-300 flex items-center">
            <div
              className={`absolute w-1/2 h-full bg-gradient-to-r from-yellow-400 to-teal-500 rounded-full transition duration-300 ${
                view === 'article' ? 'translate-x-full' : 'translate-x-0'
              }`}
            />
            <div className="flex justify-between w-full text-white text-md font-semibold  p-4">
              <span>Video</span>
              <span>Article</span>
            </div>
            <div className={`absolute top-1 left-1 w-10 h-10 bg-gray-800 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 transform ${view === 'article' ? 'translate-x-28' : 'translate-x-0'}`}>
              <span className={`text-white font-semibold`}>
                {view === 'video' ? '▶️' : '📰'}
              </span>
            </div>
          </div>
        </label>
      </div>

      {/* Conditional Rendering based on the selected view */}
      <div className="text-center text-white">
        {view === 'video' ? (
          <div className="video-content">
            <h2 className="text-3xl font-bold mb-4">Video Content</h2>
            <p>This is where your video content will be displayed.</p>
            {/* Add your video component or video player here */}
          </div>
        ) : (
          <div className="article-content">
            <h2 className="text-3xl font-bold mb-4">Article Content</h2>
            <p>This is where your article content will be displayed.</p>
            {/* Add your article component or content here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashBoard;
