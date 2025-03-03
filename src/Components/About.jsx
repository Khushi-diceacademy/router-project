import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-cyan-500 flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl font-bold mb-8">About Us</h1>
      <div className="max-w-2xl text-center">
        <p className="text-lg mb-4">
          We are a passionate team dedicated to creating innovative solutions that make life easier and more enjoyable.
        </p>
        <p className="text-lg">
          Our mission is to empower individuals and businesses through cutting-edge technology and exceptional service.
        </p>
      </div>
    </div>
  );
}

export default About;