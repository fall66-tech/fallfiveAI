// src/components/Expertise.js
import React from 'react';

const Expertise = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gray-300">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Expertise</h2>
        <div className="flex flex-wrap justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md mx-4 mb-8" style={{ maxWidth: '300px' }}>
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-700">I specialize in building modern and responsive websites using the latest technologies.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mx-4 mb-8" style={{ maxWidth: '300px' }}>
            <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
            <p className="text-gray-700">My creative skills extend to graphic design, creating visually appealing and effective designs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mx-4 mb-8" style={{ maxWidth: '300px' }}>
            <h3 className="text-xl font-semibold mb-2">Branding</h3>
            <p className="text-gray-700">I help businesses establish a strong brand identity that stands out in the market.</p>
          </div>
        </div>
        <a href="#contact" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">Hire Me</a>
      </div>
    </section>
  );
};

export default Expertise;
