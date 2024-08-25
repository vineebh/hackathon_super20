import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-16"> {/* Changed background color to dark gray */}
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">About Us</h1>
        <p className="text-lg text-gray-300 mb-8">
          EduTech is dedicated to providing high-quality educational resources and courses. Our mission is to make learning accessible and enjoyable for everyone. Our team consists of experienced educators and professionals who are passionate about education and committed to helping students achieve their goals.
        </p>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">Our Vision</h2>
          <p className="text-gray-300 mb-4">
            We envision a world where education is available to everyone, regardless of their location or background. Our goal is to bridge the gap between knowledge and learners by providing innovative and engaging educational solutions.
          </p>
          <h2 className="text-2xl font-semibold text-white mb-4">Our Team</h2>
          <p className="text-gray-300">
            Our team is composed of experienced educators, industry experts, and creative professionals who work together to create top-notch educational content. We are driven by our passion for education and our commitment to making a positive impact on learners around the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;