// src/components/Home.js
import React from 'react';
import hero from "../assets/hero3.png"

const Home = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <img
          src={hero}
          alt="Your Name"
          className="rounded-full w-24 h-24 mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold text-gray-800">Your Name</h1>
        <p className="text-lg text-gray-600 mb-8">Web Developer & Graphic Designer</p>
        <a href="#portfolio" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">Portfolio</a>
      </div>
    </section>
  );
};

export default Home;
