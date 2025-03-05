import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import User from "../Components/User";
import Contact from "../Components/Contact";
import Userdetails from "../Components/Userdetails";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />}>
          <Route path="/user/:name" element={<Userdetails />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default Routing;
