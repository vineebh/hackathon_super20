// VideoPlayerPage.js
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";

const VideoPlayerPage = () => {
  const location = useLocation();
  const { videoUrl, topic_name } = location.state || {};

  const [query, setQuery] = useState("");

  useEffect(() => {
    const storedQuery = localStorage.getItem("videoQuery");
    if (storedQuery) {
      setQuery(storedQuery);
    }
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSaveQuery = () => {
    localStorage.setItem("videoQuery", query);
  };

  return (
    <div className="bg-slate-900 min-h-screen flex flex-col items-center p-8 mt-16">
    
      <h2 className="text-4xl font-bold mb-4 text-center text-white shadow-lg p-2 rounded">
        {topic_name ? topic_name : "Now Playing"}
      </h2>

      <div className="w-full flex justify-center mb-6">
        <div className="rounded-lg overflow-hidden shadow-lg" style={{ width: '640px', height: '360px' }}>
          {videoUrl ? (
            <ReactPlayer
              url={videoUrl}
              controls={true}
              playIcon={true}
              width="100%"
              height="100%"
              className="react-player"
              
            />
          ) : (
            <div className="text-center text-gray-400 p-4">
              No video selected. Please go back and choose a video.
            </div>
          )}
        </div>
      </div>

      <div className="w-full flex flex-col items-center mb-6">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Ask a question..."
          className=" w-3/4 md:w-2/5 px-4 py-3 mb-2 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
        <button
          onClick={handleSaveQuery}
          className="w-3/4 md:w-2/5 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200"
        >
          Save Query
        </button>
      </div>

      <button
        onClick={() => window.history.back()}
        className="mt-4 px-6 py-3 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 transition duration-200"
      >
        Back to Videos
      </button>
    </div>
  );
};

export default VideoPlayerPage;
