import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ title, description, imageUrl, link }) => {
  return (
    <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-red-500 mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <Link to={link}>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
