// src/components/Portfolio.js
import React from 'react';
import port1 from "../assets/port1.png"
import port2 from "../assets/port2.png"
import port3 from "../assets/port3.png"

const Portfolio = () => {
  return (
    <section id='portfolio' className="flex items-center justify-center h-screen bg-gray-400">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Portfolio</h2>
        <div className="flex flex-wrap justify-center">
          {/* Replace these with your project images and names */}
          <div className="bg-white p-6 rounded-lg shadow-md mx-4 mb-8" style={{ maxWidth: '300px' }}>
            <img src={port1} alt="Project 1" className="mb-4 rounded-md" />
            <p className="text-lg font-semibold mb-2">Project 1</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mx-4 mb-8" style={{ maxWidth: '300px' }}>
            <img src={port2} className="mb-4 rounded-md" />
            <p className="text-lg font-semibold mb-2">Project 2</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mx-4 mb-8" style={{ maxWidth: '300px' }}>
            <img src={port3} alt="Project 3" className="mb-4 rounded-md" />
            <p className="text-lg font-semibold mb-2">Project 3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
