import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="px-2 py-2 flex gap-2">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/user">User</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export default Nav;
