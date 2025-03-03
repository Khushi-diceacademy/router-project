import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-400 to-red-500 flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl font-bold mb-8">Contact Us</h1>
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-8 shadow-lg w-full max-w-md">
        <form className="space-y-6">
          <div>
            <label className="block text-lg font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-50 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-50 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">Message</label>
            <textarea
              placeholder="Enter your message"
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-50 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-100 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;