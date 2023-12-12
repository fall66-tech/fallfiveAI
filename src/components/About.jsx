// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gray-200">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-lg text-gray-600 mb-8">A brief introduction of who I am...</p>
        <a href="#contact" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">Contact Me</a>
      </div>
    </section>
  );
};

export default About;
