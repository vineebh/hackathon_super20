import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ title, description, imageUrl, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-600 mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <Link to={link}>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
