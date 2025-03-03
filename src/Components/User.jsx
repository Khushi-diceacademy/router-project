import React from 'react';

function User() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl font-bold mb-8">User Profile</h1>
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-8 shadow-lg">
        <div className="text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="User Avatar"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold">John Doe</h2>
          <p className="text-lg">Software Developer</p>
          <p className="text-lg">john.doe@example.com</p>
        </div>
      </div>
    </div>
  );
}

export default User;