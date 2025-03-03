import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold mb-4 animate-bounce">Welcome to MyApp</h1>
      <p className="text-xl mb-8">Your one-stop solution for all things amazing!</p>
      <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-100 transition duration-300">
        Get Started
      </button>
    </div>
  );
}

export default Home;