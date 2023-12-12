// src/components/Gallery.js
import React from 'react';
import port1 from "../assets/port1.png"
import port2 from "../assets/port2.png"
import port3 from "../assets/port3.png"

const Gallery = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gray-500">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Gallery</h2>
        <p className="text-lg text-gray-600 mb-8">These are my graphic design images.</p>
        <div className=" p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Replace these with your graphic design images */}
          <img src={port1} alt="Graphic Design 1" className="rounded-md hover:scale-105 transform transition duration-300" style={{padding: '0 8px'}} />
          <img src={port2} alt="Graphic Design 2" className="rounded-md hover:scale-105 transform transition duration-300" style={{padding: '0 8px'}} />
          <img src={port3} alt="Graphic Design 3" className="rounded-md hover:scale-105 transform transition duration-300" style={{padding: '0 8px'}} />
          <img src={port1} alt="Graphic Design 1" className="rounded-md hover:scale-105 transform transition duration-300" style={{padding: '0 8px'}} />
          <img src={port2} alt="Graphic Design 2" className="rounded-md hover:scale-105 transform transition duration-300" style={{padding: '0 8px'}} />
          <img src={port3} alt="Graphic Design 3" className="rounded-md hover:scale-105 transform transition duration-300" style={{padding: '0 8px'}} /> 
          {/* Add more images as needed */}
        </div>
      </div>
    </section>
  );
};

export default Gallery;


// <img src={port1} alt="Graphic Design 1" className="rounded-md hover:opacity-75 transition duration-300" />
//           <img src={port2} alt="Graphic Design 2" className="rounded-md hover:opacity-75 transition duration-300" />
//           <img src={port3} alt="Graphic Design 3" className="rounded-md hover:opacity-75 transition duration-300" />
//           <img src={port1} alt="Graphic Design 1" className="rounded-md hover:opacity-75 transition duration-300" />
//           <img src={port2} alt="Graphic Design 2" className="rounded-md hover:opacity-75 transition duration-300" />
//           <img src={port3} alt="Graphic Design 3" className="rounded-md hover:opacity-75 transition duration-300" />
//           <img src={port1} alt="Graphic Design 1" className="rounded-md hover:opacity-75 transition duration-300" />
//           <img src={port2} alt="Graphic Design 2" className="rounded-md hover:opacity-75 transition duration-300" />
//           <img src={port3} alt="Graphic Design 3" className="rounded-md hover:opacity-75 transition duration-300" />


