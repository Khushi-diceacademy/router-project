import React from "react";
import { Link, Outlet } from "react-router-dom";

function User() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex gap-6 items-center justify-center text-white">
      <Link to="/user/john">Jonathan</Link>
      <Link to="/user/ayush">Ayush</Link>
      <Link to="/user/zoya">Zoya</Link>
      <Outlet />

   
    
    </div>
  );
}

export default User;
