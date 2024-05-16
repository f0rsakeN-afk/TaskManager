import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.webp";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <NavLink to="/" className=" flex items-center">
          <img src={Logo} alt="Logo" className=" h-12 invert" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
