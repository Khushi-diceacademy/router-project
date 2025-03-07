import React from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="px-2 py-2 flex gap-10 items-center justify-center">
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "blue" : "",
              fontWeight: e.isActive ? "800" : "",
            };
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "blue" : "",
              fontWeight: e.isActive ? "800" : "",
            };
          }}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={(e) => {
            return [
              e.isActive ? "text-blue-800" : "",
              e.isActive ? "font-bold" : "",
            ].join(" ");
          }}
          to="/user"
        >
          User
        </NavLink>
        <Link to="/contact">Contact</Link>
        <Link to="/products">Products</Link>
      </nav>
    </div>
  );
}

export default Nav;
